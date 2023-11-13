var cvs = document.getElementById('cvs')
const clipCvs = document.getElementById('clipCvs')
const confirm = document.getElementById('image_confirm')
const ctx = cvs.getContext('2d')
const clipCtx = clipCvs.getContext('2d')
const img = new Image()
var size = 150
var maxW = 400
const p = {
    left: 0,
    top: 0,
    stepX: 0,
    stepY: 0
}
const onChange = (file) => {
    onInit(URL.createObjectURL(file))
}
// 加载图片，并初始化裁剪功能
// var onInit = (src) => {
//
// }

function onInit(src) {

    clipCvs.width = clipCvs.height = size
    img.src = src
    img.onload = () => {
        let width = img.width
        let height = img.height
        if (width > maxW) {

            height = maxW / width * height
            width = maxW
        }
        cvs.width = width
        cvs.height = height
        render(width / 2 - size / 2, height / 2 - size / 2)
    }

}



// 渲染裁剪前canvas
const render = (left = 0, top = 0) => {
    ctx.clearRect(0, 0, cvs.width, cvs.height)
    ctx.drawImage(img, 0, 0, cvs.width, cvs.height)
    if (left < 0) {
        left = 0
    }
    if (left > cvs.width - size) {
        left = cvs.width - size
    }
    if (top < 0) {
        top = 0
    }
    if (top > cvs.height - size) {
        top = cvs.height - size
    }
    clipPic(ctx.getImageData(left, top, size, size))
    ctx.beginPath()
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
    ctx.fillRect(left, top, size, size)
    p.left = left
    p.top = top
}
// 裁剪图片，并显示在右侧
const clipPic = (data) => {
    clipCtx.clearRect(0, 0, clipCvs.width, clipCvs.height)
    clipCtx.putImageData(data, 0, 0)
}

let isMoving = false
cvs.onmousedown = (e) => {
    p.stepX = e.pageX - p.left
    p.stepY = e.pageY - p.top
    isMoving = true
}
cvs.onmousemove = (e) => {
    if (isMoving) {
        render(e.pageX - p.stepX, e.pageY - p.stepY)
    }
}
document.onmouseup = () => {
    isMoving = false
}
confirm.onclick =  () => {

    const file = dataURLtoFile(clipCvs.toDataURL('image/png'),"png")
    formData.set("file",file)
    //const res = await fetch(clipCvs.toDataURL('image/png'))
    // const blob = await res.blob()
    // const a = document.createElement('a')
    // a.setAttribute('download', 'clip.png')
    // a.href = URL.createObjectURL(blob)
    // a.click()
}


function dataURLtoFile(url, filename) {

    var arr = url.split(','), mime = arr[0].match(/:(.*?);/)[1],

        bstr = atob(arr[1]), i = bstr.length, u8arr = new Uint8Array(i);

    while (i--) {

        u8arr[i] = bstr.charCodeAt(i);

    }

    return new File([u8arr], filename, { type: mime });

}