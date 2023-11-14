var cvs = document.getElementById('cvs')
const clipCvs = document.getElementById('clipCvs')
const confirm = document.getElementById('image_confirm')
const ctx = cvs.getContext('2d')
const clipCtx = clipCvs.getContext('2d')
const img = new Image()
var size = 150
var maxW = 400
var orisrc;
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

    orisrc = src;
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


/**
 * 通过改变坐标点信息实现缩放，可以设置缩放的中心点
 * 优点：代码量较大，需要修改每个要素的坐标点
 * 缺点：会改变数据的原始属性
 * flag true:放大 false: 缩小
 */
function zoom3(flag = true, event) {
    // 记录当前鼠标的相对位置
    initX = event.offsetX;
    initY = event.offsetY;
    // 计算放大缩小的比例
    multi = 1 * (flag ? 1 / scale : scale);

    // 获取图形中心点
    const center = getCenter();
    // 获取图形最大最小的顶点坐标
    const maxMin = getMaxMin();
    // 计算缩放后的中心点坐标
    const newC = [center[0] - (initX - center[0]) * (multi - 1), center[0] - (initY - center[1]) * (multi - 1)];

    // 根据缩放后的中心点计算各个顶点信息
    coordinates = coordinates.map(e => {
        const operateX = center[0] - e[0] > 0 ? 1 : -1;
        const operateY = center[1] - e[1] > 0 ? 1 : -1;
        return [newC[0] - (maxMin.maxX - maxMin.minX) * multi / 2 * operateX, newC[1] - (maxMin.maxY - maxMin.minY) * multi / 2 * operateY];
    })
}

cvs.addEventListener('mousewheel', event => {

    if(event.deltaY<0){
        //变大
        size = size + 3 ;
        onInit(orisrc)
        console.log(event.deltaY)

        console.log("变大")
    }else {
        size = size - 3 ;
        onInit(orisrc)
        console.log(event.deltaY)
        console.log("变小")
    }

});

