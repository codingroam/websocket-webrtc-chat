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
}

function errorCallback(err) {

}