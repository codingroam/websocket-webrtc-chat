var inputfile;
var ot;

function sendFileClick() {

    if(!currentUserInfo.to){
        commonMsg('请先选择好友再发送文件');
        return false;
    }

    inputfile = document.getElementById("fileupload");

    inputfile.addEventListener("change",uploadFiles)
    inputfile.click()



}

function uploadFiles() {
    console.log("上传文件")
    const files = inputfile.files;
    const imagFiles = [];
    const fileFiles = [];
    for(var i = 0; i < files.length; i++){
        if(files[i].type.startsWith("image")){
            imagFiles.push(files[i]);
        }else{
            fileFiles.push(files[i])
        }
    }

    if(imagFiles.length>0){
        doUploadImages(imagFiles)
    }
    if(fileFiles.length>0){
        doUploadFiles(fileFiles)
    }

    function doUploadImages(files) {

        let formData = new FormData();
        for(const file of files){
            formData.append("files",file);
        }
        let fileUserMsg = {}
        fileUserMsg.from = currentUserInfo.userName;
        fileUserMsg.to = currentUserInfo.to;
        formData.set("msg",JSON.stringify(fileUserMsg));
        var xhr = new XMLHttpRequest();
        //true为异步处理
        xhr.open('post','/uploadFiles', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                var data = JSON.parse(xhr.response).data
                var msg = data.msg;
                var fileInfoMap = new Map(Object.entries(data.fileInfoMap))
                var userjson = JSON.parse(msg);
                for(var [key,value] of fileInfoMap){
                    var sendMsg = {};
                    sendMsg.to = userjson.to;
                    sendMsg.from = userjson.from;
                    sendMsg.content = '<文件:'+ key +'>'+'@&@'+value;
                    sendMsg.contentType = 'file';
                    sendByMsgInfo(sendMsg)
                }
            }
        }
        xhr.send(formData); // 发送ajax请求


    }

     function doUploadFiles(files) {
        for(const file of files){

            //给对方发送文件消息
            var sendMsg = {};
            sendMsg.to = currentUserInfo.to;
            sendMsg.from = currentUserInfo.userName;
            sendMsg.content = '<文件:'+ file.name +'>';
            sendMsg.contentType = 'file';
            var uuid = sendMessageTalkContainer(sendMsg);

            let formData = new FormData();
            formData.set("files",file);
            let fileUserMsg = {}
            fileUserMsg.from = currentUserInfo.userName;
            fileUserMsg.to = currentUserInfo.to;
            formData.set("msg",JSON.stringify(fileUserMsg));

            var xhr = new XMLHttpRequest();
            //true为异步处理
            xhr.open('post','/uploadFiles', true);
            //如果发送的是文件类型(非图片)，需要展示进度条
            xhr.onloadstart = function() {
                console.log('开始上传')
                ot = new Date().getTime();   //设置上传开始时间
                oloaded = 0;//已上传的文件大小为0
            };

            xhr.upload.addEventListener('progress', function (evt) {
                progressFunction(evt,uuid)

            }, false);
            xhr.addEventListener("load", function (evt) {
                uploadComplete(evt,uuid,sendMsg.to)

            }, false);
            xhr.addEventListener("error", uploadFailed, false);
            xhr.addEventListener("abort", uploadCanceled, false);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    var data = JSON.parse(xhr.response).data
                    var msg = data.msg;
                    var fileInfoMap = new Map(Object.entries(data.fileInfoMap))
                    var userjson = JSON.parse(msg);
                    for(var [key,value] of fileInfoMap){
                        var msginfo = {};
                        msginfo.to = userjson.to;
                        msginfo.from = userjson.from;
                        msginfo.content = '<文件:'+ key +'>'+'@&@'+ value;
                        msginfo.contentType = 'file';
                        sendMessageByWebsocket(msginfo)
                    }

                }
            }
            xhr.send(formData); // 发送ajax请求

        }


    }






}


function progressFunction(evt,uuid) {
    var processBar= $("#progressBar"+uuid);
    if (evt.lengthComputable) {
        var completePercent = Math.round(evt.loaded / evt.total * 100)
            + '%';
        processBar.width(completePercent);
        processBar.text(completePercent);

        var time = $("#time");
        var nt = new Date().getTime();     //获取当前时间
        var pertime = ot ? (nt-ot)/1000 : 0;        //计算出上次调用该方法时到现在的时间差，单位为s
        ot = new Date().getTime();          //重新赋值时间，用于下次计算

        var perload = evt.loaded - oloaded; //计算该分段上传的文件大小，单位b
        oloaded = evt.loaded;               //重新赋值已上传文件大小

        //上传速度计算
        var speed = perload/pertime;//单位b/s
        var bspeed = speed;
        var units = 'b/s';//单位名称
        if(speed/1024>1){
            speed = speed/1024;
            units = 'k/s';
        }
        if(speed/1024>1){
            speed = speed/1024;
            units = 'M/s';
        }
        speed = speed.toFixed(1);
        //剩余时间
        var resttime = ((evt.total-evt.loaded)/bspeed).toFixed(1);
        $("#showInfo"+uuid).html(speed+units+'，剩余时间：'+resttime+'s');
    }
}

//上传成功后回调
function uploadComplete(evt,uuid,messageto) {
    //uploadBtn.attr('disabled', false);
    console.log('上传完成')
    inputfile.value=''
    $('#showInfo'+uuid).html('上传完成')
    modifyStorageMessage(uuid,'uploadSuccess',messageto)
};

//下载成功后回调
function downloadComplete(evt,uuid,talkto) {
    //uploadBtn.attr('disabled', false);
    console.log('下载完成')
    $('#showInfo'+uuid).html('下载完成')
    $('#downloadbutton'+uuid).text('重新下载')
    modifyStorageMessage(uuid,'downloadSuccess',talkto)
};

//上传失败回调
function uploadFailed(evt,uuid,messageto) {
    console.log('上传失败' + evt.target.responseText);
    $('#showInfo'+uuid).html('上传失败')
    modifyStorageMessage(uuid,'uploadSuccess',messageto)
}

//终止上传
function cancelUpload() {
    xhr.abort();
}

//上传取消后回调
function uploadCanceled(evt) {
    console.log('上传取消,上传被用户取消或者浏览器断开连接:' + evt.target.responseText);
}

// canelBtn.click(function(){
//     //uploadBtn.attr('disabled', false);
//     cancelUpload();
// })
function getSize(size) {
    var fileSize = '0KB';
    if (size > 1024 * 1024) {
        fileSize = (Math.round(size / (1024 * 1024))).toString() + 'MB';
    } else {
        fileSize = (Math.round(size / 1024)).toString() + 'KB';
    }
    return fileSize;
}
function setProgress(w) {
    processBar.width(w + '%');
}
function showProgress() {
    processBar.parent().show();
}
function hideProgress() {
    processBar.parent().hide();
}




function successCallback(data) {
    console.log(data)
   // var data = JSON.parse(data.data);
    var msg = data.data.msg;
    var fileInfoMap = data.data.fileInfoMap

    var userjson = JSON.parse(msg);

    for(var key in fileInfoMap){
        var msginfo = {};
        msginfo.to = userjson.to;
        msginfo.from = userjson.from;
        msginfo.content = '<文件:'+ key +'>'+'@&@'+key;
        msginfo.contentType = 'file';
        sendByMsgInfo(msginfo)
    }



}

function errorCallback(err) {

}


function downloadfile(fileInfo) {
    var fileJSON = fileInfo.split("&@&@")
    var filename = fileJSON[0]
    var uuid = fileJSON[1]
    var talkto = currentUserInfo.to
    let xhr = new XMLHttpRequest();

    xhr.onloadstart = function() {
        console.log('开始上传')
        ot = new Date().getTime();   //设置上传开始时间
        oloaded = 0;//已上传的文件大小为0
    };
    xhr.addEventListener("progress", function (evt) {
        progressFunction(evt,uuid)

    }, false);
    xhr.addEventListener("load", function (evt) {
        downloadComplete(evt,uuid,talkto)

    }, false);
    xhr.addEventListener("error", uploadFailed, false);
    xhr.addEventListener("abort", uploadCanceled, false);
    xhr.open('get', preUploadPath+filename, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log("dsf")
        }

    }
    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
    // xhr.setRequestHeader('Authorization', `Bearer ${JSON.parse(Cookies.get('tm_token'))}`);
    xhr.responseType = "blob"; // 返回类型blob
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            //创建blob对象
            const blob = new Blob([xhr.response]);
            const fileName = filename;
            //创建下载元素
            const downloadElement = document.createElement('a');
            // 创建下载的链接
            const href = window.URL.createObjectURL(blob);
            downloadElement.href = href;
            downloadElement.download = fileName; // 下载后文件名
            document.body.appendChild(downloadElement);
            downloadElement.click(); // 点击下载
            document.body.removeChild(downloadElement); // 下载完成移除元素
            window.URL.revokeObjectURL(href); // 释放掉blob对象
        }
    }
     xhr.send()






}

