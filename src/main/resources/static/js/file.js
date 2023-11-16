var inputfile;
function sendFileClick() {

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

    $.ajax({
        url: '/uploadFiles',
        type: 'POST',
        cache: false,
        data: formData,
        processData: false,
        contentType: false,
        success: successCallback,
        error: errorCallback,
    })
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
    xhr.send(); // 发送ajax请求
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

