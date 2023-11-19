var minflag = 0;
var audioVideoDevices;
function initWebRTC() {

    PeerConnection = (window.webkitRTCPeerConnection || window.mozRTCPeerConnection || window.RTCPeerConnection || undefined);
  //  RTCSessionDescription = (window.webkitRTCSessionDescription || window.mozRTCSessionDescription || window.RTCSessionDescription || undefined);

    if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
    }
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

    var mediaOpts = {
       // audio: audioVideoDevices.audioinput || audioVideoDevices.audiooutput,
        audio:true,
        video: audioVideoDevices.video ? { facingMode: "user"} : false
    }
    navigator.getUserMedia(mediaOpts, successFunc, errorFunc);



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
                    from :  currentUserInfo.userName,
                    to : isCaller ? currentUserInfo.to : videodata.caller,
                    contentType:"candidate",
                    content:event.candidate
                }));

            }
        };
    }
    function errorFunc(err) {
        if("NotFoundError" == err.name){
            commonMsgAutoClose("设备不具备视频、音频条件或没有音视频权限");
        }else{
            commonMsgAutoClose(err.name);
        }
        isVideo = false;
        isCaller = false;
    }



}

//音视频信令处理
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
            handleLeave("对方已已挂断");
            break;
        default:
            break;
    }

}

//视频聊天
function videoCallClick(type) {
    if(currentUserInfo.to == null || currentUserInfo.to == undefined){
        videoNoUserToast()
        return;
    }
    if(isVideo){
        return;
    }
    // getAudioVideoDevices(type).then(devices =>{})
        //获取当前音视频设备状态
    audioVideoDevices = getAudioVideoDevices(type);
    isCaller = true;

    //视频发起方打开视频界面
    openVideoMain("caller")

    if(PeerConnection == null || PeerConnection ==undefined){
        initWebRTC()
    }

    var data = {};
    data["from"] = currentUserInfo.userName;
    data["to"] = currentUserInfo.to;
    data["contentType"] = "call_start";
    data["content"] = "";
    if(type && type == "audio"){
        data["content"] = "audio";
    }
    websocket.send(JSON.stringify(data));
    data["contentType"] = "text";
    if(type && type == "audio"){
        data["content"] = "<请求与你进行语音通话>";
    }else{
        data["content"] = "<请求与你进行视频通话>";
    }

    sendByMsgInfo(data);





}

function audioCallClick() {

    videoCallClick("audio")
}

//挂断视频聊天
function hangupVideoButton() {
    if(isVideo || isCaller){
        if(currentUserInfo.userName != currentUserInfo.to){
            var data = {};
            data["from"] = currentUserInfo.userName;
            data["to"] = isCaller ? currentUserInfo.to : videodata.caller;
            data["contentType"] = "leave";
            data["content"] = "";
            websocket.send(JSON.stringify(data));

            data["contentType"] = "text";
            data["content"] = "<通话已结束>";
            sendByMsgInfo(data);
        }


        handleLeave("已挂断")
    }else{
        refuseVideoProcessor()
    }


}

//处理来电请求
function handleCallStart(data) {
    videodata.caller = data.from
    videodata.callee = data.to
    //视频接受方打开视频界面
    openVideoMain("callee",data)

}

//处理视频请求的响应
function handleCallBack(data) {
    //接受视频
    if(data.content == "accept"){
        yourConn.createOffer(function (offer) {
            websocket.send(JSON.stringify({
                from :  currentUserInfo.userName,
                to : isCaller ? currentUserInfo.to : videodata.caller,
                contentType:"offer",
                content:offer
            }));
            yourConn.setLocalDescription(offer);
        }, function (error) {
            alert("Error when creating an offer");
        });

        acceptVideoCallBackPostProcessor()
    }else{
        //拒绝视频
        closeVideoProcessor("对方已拒绝")

    }

}

function acceptVideoCallBackPostProcessor() {

    if(audioVideoDevices.video){
        $("#videoinfo").html("与 "+currentUserInfo.to+"  的视频通话")
    }else{

        $("#videoinfo").html("与 "+currentUserInfo.to+"  的语音通话")
    }

}

//处理ice备选
function handleCandidate(data) {
    yourConn.addIceCandidate(new RTCIceCandidate(data.content));
    videoConnectPostProcessor()
}

//处理应答
function handleAnswer(data) {
    yourConn.setRemoteDescription(new RTCSessionDescription(data.content));
    videoConnectPostProcessor();
}


//when somebody sends us an offer
//处理offer请求
function handleOffer(data) {
    yourConn.setRemoteDescription(new RTCSessionDescription(data.content));
    //create an answer to an offer
    yourConn.createAnswer(function (answer) {
        yourConn.setLocalDescription(answer);

        websocket.send(JSON.stringify({
            to:isCaller ? currentUserInfo.to : videodata.caller,
            from:currentUserInfo.userName,
            contentType:"answer",
            content:answer
        }));

    }, function (error) {
        alert("Error when creating an answer");
    });
}


//处理通话挂断
function handleLeave(msg) {
    closeVideoProcessor(msg)

}

//关闭视频处理器
function closeVideoProcessor(msg){
    //关闭视频主界面
    hangupVideoMain(msg)
    //关闭视频流
    closeVideoStream()
}

//挂断视频主界面
function hangupVideoMain(msg) {

    $("#videoinfo").html(msg)
    setTimeout(()=>{
        $("#videomain").hide()
    },2000)

}


//关闭视频流和PeerConnection
function closeVideoStream() {
    try{
        localVideo.srcObject.getTracks()[0].stop();
        localVideo.srcObject.getTracks()[1].stop();
        remoteVideo.srcObject.getTracks()[0].stop();
        remoteVideo.srcObject.getTracks()[1].stop();

    }catch (e) {
        console.log(e)

    }finally {
        videodata = {}
        yourConn.close();
        PeerConnection = null;
        yourConn.onicecandidate = null;
        yourConn.onaddstream = null;
        isVideo = false;
        isCaller = false;
    }

}



//打开视频界面
function openVideoMain(type,data){
    $("#videomain").show()
    $("#hangup").show()
    if(type=='caller'){
        $("#accept").hide()
    }else{
        $("#accept").show()
    }



    if(audioVideoDevices.video){
        videoPostProcessor(type,data)
    }else{
        audioPostProcessor(type,data)
    }
}

function videoPostProcessor(type,data) {
    //视频通话
    if(type == 'caller'){
        $("#videoinfo").html("视频通话请求中...")
    }else{
        $("#videoinfo").html("来自 "+data.from+"  的视频通话")
    }

    if(isPC){
        $("#videomain").css('width','750px')
        $("#videomain").css('height','450px')
    }else {
        $("#videomain").css('width','380px')
        $("#videomain").css('height','330px')
    }
    divCenterShow('.videomain')

    $("#localVideo").show();
    $("#remoteVideo").show();
    $(".audioclass").hide();
    $(".videoclass").show();
    $("#videoinfo").removeClass('audioinfo')
    $("#videoinfo").addClass('videoinfo')


}

function divCenterShow(divClass) {

    var window_width = $(window).width();
    var window_height = $(window).height();
// 获取div的宽高
    var div_width = $(divClass).width();
    var div_height = $(divClass).height();
// 计算div元素的左上角位置
    var left_margin = (window_width - div_width) / 2;
    var top_margin = (window_height - div_height) / 3;
// 设置div元素的样式
    $(divClass).css({
        'left': left_margin + 'px',
        'top': top_margin + 'px'
    });


    // setTimeout(()=>{
    //     $('.videomain').css({
    //         'left': '',
    //         'top': ''
    //     });
    // },200)

}

function audioPostProcessor(type,data) {
    //语音通话
    if(type == 'caller'){
        $("#videoinfo").html("语音通话请求中...")
    }else{
        $("#videoinfo").html("来自 "+data.from+"  的语音通话")
    }
    $("#localVideo").hide();
    $("#remoteVideo").hide();
    $(".audioclass").show();
    $(".videoclass").hide();

    $("#videomain").css('width','175px')
    $("#videomain").css('height','90px')
    $("#videoinfo").removeClass('videoinfo')
    $("#videoinfo").addClass('audioinfo')
    divCenterShow()


}

//接受视频请求
function acceptVideoButton() {
    if(videodata.caller == videodata.callee){
        remoteVideo.srcObject = stream
        $("#accept").hide()
    }else{
        var data = {
            contentType:"call_back",
            to:videodata.caller,
            from:videodata.callee,
            content:"accept"
        }
        websocket.send(JSON.stringify(data));

        data.contentType = "text"
        if(audioVideoDevices.video){
            data.content = "<同意视频通话>"
        }else{
            data.content = "<同意语音通话>"
        }

        sendByMsgInfo(data);

        acceptVideoProcessor()
    }


}

function acceptVideoProcessor() {
    $("#accept").hide()
    if(audioVideoDevices.video){
        $("#videoinfo").html("与 "+videodata.caller+"  的视频通话")
    }else{
        $("#videoinfo").html("与 "+videodata.caller+"  的语音通话")
    }

}

//拒绝视频请求
function refuseVideoProcessor() {
    var data = {
        contentType:"call_back",
        to:videodata.caller,
        from:videodata.callee,
        content:"refuse"
    }
    websocket.send(JSON.stringify(data));

    data.contentType = "text"
    if(audioVideoDevices.video){
        data.content = "<拒绝视频通话>"
    }else{
        data.content = "<拒绝语音通话>"
    }

    sendByMsgInfo(data)
    //关闭视频处理
    closeVideoProcessor("已挂断")
}





//双击翻转视频
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



        $("#videobuttons").hide();
        $("#turnoverbutton").hide();
        $("#videomain").css('width','150px')
        $("#videomain").css('height','120px')
        //因为有翻转功能，需要判断
        if($("#localVideo").hasClass('localVideo')){
            $("#localVideo").removeClass('localVideo')
            $("#localVideo").addClass('localVideoMin')
        }else{
            $("#remoteVideo").removeClass('localVideo')
            $("#remoteVideo").addClass('localVideoMin')
        }
        $("#videoinfo").removeClass('videoinfo')
        $("#videoinfo").addClass('videoinfomin')
        $("#minmaxbutton i").removeClass('bi bi-dash-square');
        $("#minmaxbutton i").addClass('bi bi-fullscreen');
        minflag=1
        $('.videomain').css({
            'right':  '0px',
            'top': '20px'
        });

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
        if($("#localVideo").hasClass('localVideoMin')){
            $("#localVideo").removeClass('localVideoMin')
            $("#localVideo").addClass('localVideo')
        }else{
            $("#remoteVideo").removeClass('localVideoMin')
            $("#remoteVideo").addClass('localVideo')
        }

        $("#videoinfo").removeClass('videoinfomin')
        $("#videoinfo").addClass('videoinfo')
        $("#minmaxbutton i").removeClass('bi bi-fullscreen');
        $("#minmaxbutton i").addClass('bi bi-dash-square');
        minflag=0

        divCenterShow()
    }

}



 function getAudioVideoDevices(type){
   //  var audioVideoDevicesFiled = {
   //      "audioinput" : false,
   //      "audiooutput" : false,
   //      "video" : false
   //  };
   //
   //  //检测是否有音频或视频设备
   // return  navigator.mediaDevices.enumerateDevices()
   //      .then(function(deviceInfos) {
   //          deviceInfos.forEach(function(deviceInfo) {
   //              console.log("deviceInfo" + deviceInfo.deviceID +": " + deviceInfo.kind +": " + deviceInfo.label);
   //              if(deviceInfo && deviceInfo.kind){
   //
   //                  if(deviceInfo.kind == 'audioinput'){
   //                      audioVideoDevicesFiled.audioinput = true;
   //                  }else if(deviceInfo.kind == 'audiooutput'){
   //                      audioVideoDevicesFiled.audiooutput = true;
   //                  }else if(deviceInfo.kind.indexOf('video') != -1){
   //                      audioVideoDevicesFiled.video = true;
   //                  }
   //
   //
   //
   //              }
   //
   //
   //          });
   //          if(type && type == "audio"){
   //              audioVideoDevicesFiled.video = false;
   //          }
   //          return audioVideoDevicesFiled;
   //
   //      }).catch(function(err) {
   //          console.log("getAudioVideoDevicesErr"+err.name + ": " + err.message);
   //      });
     if(type && type == "audio"){
         return {
             "video" : false
         }
     }else{
         return {
             "video" : true
         }

     }


}