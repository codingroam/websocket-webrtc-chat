var inputfile;
var processBar= $("#progressBar");
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
    console.log("来了")
    const files = inputfile.files;
    let formData = new FormData();
    for(var i=0;i<files.length;i++){
        formData.append("files",files[i]);
    }

    // formData.set("files",files);
    let msg = {}
    msg.from = currentUserInfo.userName;
    msg.to = currentUserInfo.to;
    formData.set("msg",JSON.stringify(msg));

    var xhr = new XMLHttpRequest();
    //true为异步处理
    xhr.open('post','/uploadFiles', true);
    //上传开始执行方法
    xhr.onloadstart = function() {
        console.log('开始上传')
        ot = new Date().getTime();   //设置上传开始时间
        oloaded = 0;//已上传的文件大小为0
    };

    xhr.upload.addEventListener('progress', progressFunction, false);
    xhr.addEventListener("load", uploadComplete, false);
    xhr.addEventListener("error", uploadFailed, false);
    xhr.addEventListener("abort", uploadCanceled, false);
    xhr.send(); // 发送ajax请求

    // $.ajax({
    //     url: '/uploadFiles',
    //     type: 'POST',
    //     cache: false,
    //     data: formData,
    //     processData: false,
    //     contentType: false,
    //     success: successCallback,
    //     error: errorCallback,
    // })


    function progressFunction(evt) {
        debugger;
        if (evt.lengthComputable) {
            var completePercent = Math.round(evt.loaded / evt.total * 100)
                + '%';
            processBar.width(completePercent);
            processBar.text(completePercent);

            var time = $("#time");
            var nt = new Date().getTime();     //获取当前时间
            var pertime = (nt-ot)/1000;        //计算出上次调用该方法时到现在的时间差，单位为s
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
            $("#showInfo").html(speed+units+'，剩余时间：'+resttime+'s');
        }
    }

    //上传成功后回调
    function uploadComplete(evt) {
        //uploadBtn.attr('disabled', false);
        console.log('上传完成')
    };

    //上传失败回调
    function uploadFailed(evt) {
        console.log('上传失败' + evt.target.responseText);
    }

    //终止上传
    function cancelUpload() {
        xhr.abort();
    }

    //上传取消后回调
    function uploadCanceled(evt) {
        console.log('上传取消,上传被用户取消或者浏览器断开连接:' + evt.target.responseText);
    }

    canelBtn.click(function(){
        //uploadBtn.attr('disabled', false);
        cancelUpload();
    })
}
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


function uploadfile(filename) {

    let xhr = new XMLHttpRequest();
    xhr.open('get', preUploadPath+filename, true);
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





    // $.ajax({
    //     url: preUploadPath+filename,
    //     type: 'GET',
    //     responseType:'blob',
    //
    //     success: successUploadfileCallback,
    //     error: errorCallback,
    // })
    // function successUploadfileCallback(data) {
    //     var a = document.createElement('a');
    //     var url = window.URL.createObjectURL(new Blob([data],{type: 'application/png'}));
    //     a.href = url;
    //     a.download = filename;
    //     a.click();
    //     URL.revokeObjectURL(url)
    //
    // }
}

