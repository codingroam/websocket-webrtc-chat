var inputfile;
function sendFileClick() {



    $("#fileupload").show()
    inputfile = document.querySelector("input[type=file]");
    // input.style.opacity = 0;
    inputfile.addEventListener("change",uploadFiles)

    $("#fileupload").click()

    // $("#fileupload")[0].addEventListener("change", uploadFiles);



    $("#fileupload").hide()


}

function uploadFiles(files) {
    console.log("来了")
    // const curFiles = inputfile.files;
    // curFiles.forEach(u =>{
    //     console.log(u.name)
    //     console.log(u.size)
    // })
    $("#fileupload").hide()




}