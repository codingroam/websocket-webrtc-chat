function websocketInit() {

    var token = window.localStorage.getItem(currentUserInfo.userName+"_token")
    if(token != null && token != undefined){
        try {
            websocket = new WebSocket("wss://localhost:8089/webSocket/" + currentUserInfo.userName+"?token="+token);
        } catch (e) {
            console.log(' 您的浏览器暂时不支持 webSocket ');
        }
        websocket.onclose = function (e) {
            websocket.close();
            console.log("WebSocket 关闭");
        }

        websocket.onopen = function (e) {
            //心跳检测重置
            console.log("WebSocket 已连接");
        }

        //连接发生错误的回调方法
        websocket.onerror = function (data,status,e) {
            reconnectCount ++
            websocket.close();
            console.log("WebSocket 连接发生错误");
            reconnect()
            if(reconnectCount == 10){
                reconnectCount = 0
                wensocketErrorToast()
            }
        }

        websocket.onmessage = async function (event) {
            var data = JSON.parse(event.data);
            console.log("onmessage:"+JSON.stringify(data))
            let {contentType, from, content, to, sdp,iceCandidate } = JSON.parse(event.data);
            if (data.contentType == "online") {//上线消息
                var allUserSet = addOnlineUserAndGet(data.content)
                if (allUserSet.size == 1) {
                    $("#users").append(`<div class="list-group-item d-flex justify-content-between   active"  onclick="clicktalk(this)" data-bs-toggle="list"  ><span>${data.content}</span><span>在线</span><i class="bi bi-7-circle"></i></div>`);
                } else {
                    $("#users").append(`<div class="list-group-item d-flex justify-content-between  "  onclick="clicktalk(this)" data-bs-toggle="list"  ><span>${data.content}</span><span>在线</span><i class="bi bi-7-circle"></i></div>`);
                }
                var touser = currentUserInfo.to
                if (touser == undefined || touser == null) {
                    talkuser(data.content)
                }
            } else if (data.contentType == "offline") {//下线消息
                $("#users > span").remove(":contains('" + data.content + "')");
            } else if (data.contentType == "text" || data.contentType == "file") {
                var templateJSON = dialogHtmlTemplate(data.from,data.content,"from",data.contentType);
                if (data.from == currentUserInfo.to) {
                    $("#talk-container").append(templateJSON.message);
                } else {
                    addAndFlushUnreadMessageCount(data.from)
                }
                storageTalkUserMessage(data.from, templateJSON.message)
                // 滚动条滚动到最低部
                scrollToBottom();
            } else if(data.contentType == "onlineUsers") {
                window.localStorage.setItem(currentUserInfo.userName+"-allUserList", JSON.stringify(data.content));
                createUserList(data.content)
            }else if(data.contentType == "msg"){
                commonMsg(data.content)
            }else{
                if(isVideo && videodata.caller && videodata.caller != data.from){
                    var data = {
                        contentType:"msg",
                        to:data.from,
                        from:currentUserInfo.userName,
                        content:"对方占线请稍后再拨"
                    }
                    websocket.send(JSON.stringify(data));

                }else{
                    //视频通话
                    if(PeerConnection == null || PeerConnection ==undefined){
                        var type;
                        if(data.contentType == "call_start"){
                            type = data.content;
                        }
                       // getAudioVideoDevices(type).then(devices =>{})
                        audioVideoDevices = getAudioVideoDevices(type);
                        initWebRTC()




                    }
                    //视频信令处理
                    videoSignallingHandle(data.contentType,data);


                }



            }
        };

    }else{
        noTokenToast("用户未登录，请先登录")

    }


    //websocket重连
    function reconnect() {
        if (lockReconnect) return;
        lockReconnect = true;
        //没连接上会一直重连，设置延迟避免请求过多，每2秒重连一次
        setTimeout(function () {
            console.log("WebSocket：Reconnecting!");
            websocketInit();
            lockReconnect = false;
        }, 2000);
    }


}