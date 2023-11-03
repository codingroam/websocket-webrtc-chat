var minflag = 0;
function initWebRTC() {

    PeerConnection = (window.webkitRTCPeerConnection || window.mozRTCPeerConnection || window.RTCPeerConnection || undefined);
  //  RTCSessionDescription = (window.webkitRTCSessionDescription || window.mozRTCSessionDescription || window.RTCSessionDescription || undefined);

    if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
    }
    //
    if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function(constraints) {
            var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            if (!getUserMedia) {
                return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
            }
            return new Promise(function(resolve, reject) {
                getUserMedia.call(navigator, constraints, resolve, reject);
            });
        }
    }
    //window.URL = (window.URL || window.webkitURL || window.mozURL || window.msURL);
    var mediaOpts = {
        audio: true,
        video: { facingMode: "user" }
    }
    function successFunc(myStream) {
        stream = myStream;

        //displaying local video stream on the page
        localVideo.srcObject = stream;

        //using Google public stun server,turn中继服务器需要自己搭建，可参考网上coturn搭建教程
        var configuration = {
            "iceServers": [
                {
                    'urls':'stun:stun.l.google.com:19302'
                },
                { "urls": "turn:182.92.218.20:3478", "username":"wk", "credential": "feiyu" }
            ]
        };

        yourConn = new PeerConnection(configuration);

        // setup stream listening
        yourConn.addStream(stream);

        //when a remote user adds stream to the peer connection, we display it
        yourConn.onaddstream = function (e) {
            remoteVideo.srcObject = e.stream;
        };

        // Setup ice handling
        yourConn.onicecandidate = function (event) {
            if (event.candidate) {
                websocket.send(JSON.stringify({
                    from :  currentUserInfo.username,
                    to : isCaller ? currentUserInfo.to : videodata.caller,
                    contentType:"candidate",
                    content:event.candidate
                }));

            }
        };
    }
    function errorFunc(err) {
        if("NotFoundError" == err.name){
            noDevicesToast("设备不具备视频、音频条件或没有音视频权限");
        }else{
            alert(err.name);
        }

        $("#videomain").hide()
        PeerConnection = null;

        isVideo = false;
        isCaller =false;
    }

    navigator.getUserMedia(mediaOpts, successFunc, errorFunc);

}


function videoSignallingHandle(signtype,data) {

    switch(signtype) {
        case "call_start":
            handleCallStart(data);
            break;
        case "call_back":
            handleCallBack(data);
            break;
        case "offer":
            handleOffer(data);
            break;
        case "answer":
            handleAnswer(data);
            break;
        //when a remote peer sends an ice candidate to us
        case "candidate":
            handleCandidate(data);
            break;
        case "leave":
            handleLeave();
            break;
        default:
            break;
    }

}

//视频聊天
function plusClick() {
    if(currentUserInfo.to == null || currentUserInfo.to == undefined){
        videoNoUserToast()
        return;
    }
    if(isVideo){
        return;
    }
    isCaller = true;
    $("#videomain").show()
    $("#accept").hide()
    $("#videoinfo").html("呼叫中...")




    if(PeerConnection == null || PeerConnection ==undefined){
        initWebRTC()
    }

    var data = {};
    data["from"] = currentUserInfo.username;
    data["to"] = currentUserInfo.to;
    data["contentType"] = "call_start";
    data["content"] = "";
    websocket.send(JSON.stringify(data));


}

//挂断视频聊天
function hangupvideo() {
    if(isVideo){
        var data = {};
        data["from"] = currentUserInfo.username;
        data["to"] = isCaller ? currentUserInfo.to : videodata.caller;
        data["contentType"] = "leave";
        data["content"] = "";
        websocket.send(JSON.stringify(data));
        $("#videomain").hide()
        $("#accept").hide()
        closevideo()
    }else if(isCaller){
        handleLeave()
    }else{
        refusevideo()
    }


}



function handleLeave() {
    hangupVideoMain()
    closevideo()

}


function closevideo() {

    try{
        localVideo.srcObject.getTracks()[0].stop();
        localVideo.srcObject.getTracks()[1].stop();
        remoteVideo.srcObject.getTracks()[0].stop();
        remoteVideo.srcObject.getTracks()[1].stop();

    }catch (e) {
        console.log(e)

    }finally {
        yourConn.close();
        PeerConnection = null;
        yourConn.onicecandidate = null;
        yourConn.onaddstream = null;
        isVideo = false;
        isCaller = false;
    }

}

function handleCandidate(data) {
    yourConn.addIceCandidate(new RTCIceCandidate(data.content));
    videoConnectPostProcessor()
}

function handleAnswer(data) {
    yourConn.setRemoteDescription(new RTCSessionDescription(data.content));
    videoConnectPostProcessor();
}


//when somebody sends us an offer
function handleOffer(data) {
    yourConn.setRemoteDescription(new RTCSessionDescription(data.content));

    //create an answer to an offer
    yourConn.createAnswer(function (answer) {
        yourConn.setLocalDescription(answer);

        websocket.send(JSON.stringify({
            to:isCaller ? currentUserInfo.to : videodata.caller,
            from:currentUserInfo.username,
            contentType:"answer",
            content:answer
        }));

    }, function (error) {
        alert("Error when creating an answer");
    });
}

function handleCallStart(data) {
    videodata.caller = data.from
    videodata.callee = data.to
    $("#videomain").show()
    $("#accept").show()
    $("#hangup").show()
    $("#videoinfo").html(data.from+"  视频通话")

}

function acceptvideo() {
    var data = {
        contentType:"call_back",
        to:videodata.caller,
        from:videodata.callee,
        content:"accept"
    }
    websocket.send(JSON.stringify(data));
    $("#accept").hide()
}

function refusevideo() {
    var data = {
        contentType:"call_back",
        to:videodata.caller,
        from:videodata.callee,
        content:"refuse"
    }
    websocket.send(JSON.stringify(data));
}


function handleCallBack(data) {
    if(data.content == "accept"){

        yourConn.createOffer(function (offer) {
            // send({
            //     type: "offer",
            //     offer: offer
            // });

            websocket.send(JSON.stringify({
                from :  currentUserInfo.username,
                to : isCaller ? currentUserInfo.to : videodata.caller,
                contentType:"offer",
                content:offer
            }));

            yourConn.setLocalDescription(offer);
        }, function (error) {
            alert("Error when creating an offer");
        });
    }else{


        hangupVideoMain()

    }

}

//挂断视频主界面
function hangupVideoMain() {
    isCaller = false;
    $('#videomsg').show()
    setTimeout(()=>{
        $("#videomain").hide()
    },2000)

}

$('#localVideo').dblclick(function() {
    //翻转视频
    overturnvideo();
});

$('#remoteVideo').dblclick(function() {
    //翻转视频
    overturnvideo();
});

//翻转视频
function overturnvideo() {
    if($('#localVideo').hasClass("localVideo")){
        $('#localVideo').removeClass("localVideo")
        $('#localVideo').addClass("remoteVideo")

        $('#remoteVideo').removeClass("remoteVideo")
        $('#remoteVideo').addClass("localVideo")
    }else{
        $('#localVideo').removeClass("remoteVideo")
        $('#localVideo').addClass("localVideo")

        $('#remoteVideo').removeClass("localVideo")
        $('#remoteVideo').addClass("remoteVideo")
    }

}

function videoConnectPostProcessor(){
    isVideo = true;
    if(!isPC){
        $("#turnoverbutton").hide()
    }
}


function minmaxvideo() {
    if(minflag==0){
        $("#videomsg").hide();
        $("#videobuttons").hide();
        $("#turnoverbutton").hide();
        $("#videomain").css('width','100px')
        $("#videomain").css('height','80px')
        $("#minmaxbutton i").removeClass('bi bi-dash-square');
        $("#minmaxbutton i").addClass('bi bi-fullscreen');
        minflag=1

    }else{
        if(isPC){
            $("#videomain").css('width','750px')
            $("#videomain").css('height','450px')
        }else{

            $("#videomain").css('width','380px')
            $("#videomain").css('height','330px')
        }

        $("#videomsg").show();
        $("#videobuttons").show();
        $("#turnoverbutton").show();
        $("#minmaxbutton i").removeClass('bi bi-fullscreen');
        $("#minmaxbutton i").addClass('bi bi-dash-square');
        minflag=0
    }

}