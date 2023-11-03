let container = document.getElementById("videomain");
//let img = document.getElementById("img");

//以下为拖动事件处理代码
var isDragging = false;
var startX, startY, modalLeft, modalTop;
//判断是否拖动窗口
document.addEventListener("mousemove", detect_dragging);
function detect_dragging(e) {
    if (isDragging) {
        let deltaX = e.clientX - startX;
        let deltaY = e.clientY - startY;
        container.style.left = modalLeft + deltaX + "px";
        container.style.top = modalTop + deltaY + "px";
    }
}
document.addEventListener("mouseup", stop_dragging);
function stop_dragging(e) {
    isDragging = false;
}
//点击图片触发拖动事件
// img.addEventListener("mousedown", start_dragging);
function start_dragging(e) {
    console.log("startDragging");
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    modalLeft = container.offsetLeft;
    modalTop = container.offsetTop;
}

//以下为缩放事件处理代码，也可以将event触发的函数与上面合并，这里为了方便阅读，分开写
// body监听移动事件
document.addEventListener("mousemove", detect_resize);
// 鼠标按下事件
container.addEventListener("mousedown", start_resize);
// 鼠标松开事件
document.addEventListener("mouseup", stop_resize);
// 是否开启尺寸修改
let resizeable = false;
// 鼠标按下时的坐标，并在修改尺寸时保存上一个鼠标的位置
let clientX, clientY;
// div可修改的最小宽高
let minW = 300,
    minH = 300;

// 鼠标松开时结束尺寸修改
function stop_resize() {
    resizeable = false;
    document.querySelector("body").style.cursor = "default";
   // img.style.cursor = "default";
    console.log("Stop resize");
}

// 鼠标按下时开启尺寸修改
function start_resize(e) {
    let d = getDirection(e);
    //设置为只对右下角的生效
    if (d == "se") {
        console.log("resizeable");
        resizeable = true;
        clientX = e.clientX;
        clientY = e.clientY;
    }
}

// 鼠标移动事件 判断是否需要调整大小
function detect_resize(e) {
    let d = getDirection(e);
    let cursor;

    if (resizeable) {
        //开启拖动鼠标改变大小的之后，无论鼠标移动到哪里，指针样式都不会改变
        container.style.cursor = "se-resize";
        document.querySelector("body").style.cursor = "se-resize";
        //img.style.cursor = "se-resize";
        let t = container.offsetWidth + (e.clientX - clientX);
        // 当开启尺寸修改时，鼠标移动会修改div尺寸
        //计算长宽   宽度乘以0.5625即为高度    长宽比为 192:108
        let tmpW = e.clientX - container.offsetLeft;
        let tmpH = Math.round(tmpW * 0.5625);
        let isCountHeight = 0;
        //如果鼠标Y坐标大于计算之后的height，说明以Y坐标为计算标准
        if (tmpH < e.clientY - container.offsetTop) {
            isCountHeight = 1;
        }

        if (isCountHeight == 1) {
            if (e.clientY - container.offsetTop <= minH) {
                container.style.width = minW;
                container.style.height = minH;
            } else {
                tmpH = e.clientY - container.offsetTop;
                tmpW = Math.round(tmpH * 1.7777);
                container.style.width = tmpW + "px";
                container.style.height = tmpH + "px";
            }
        } else {
            if (e.clientX - container.offsetLeft <= minW) {
                container.style.width = minW;
                container.style.height = minH;
            } else {
                container.style.width = tmpW + "px";
                container.style.height = tmpH + "px";
            }
        }
    } else {
        if (d == "se") {
            cursor = "se-resize";
            // 修改鼠标显示效果
            container.style.cursor = cursor;
        } else {
            cursor = "default";
            container.style.cursor = cursor;
        }
    }
}

// 获取鼠标所在div的位置
function getDirection(ev) {
    let xP, yP, offset;

    xP = ev.clientX;
    yP = ev.clientY;
    offset = 30;

    if (
        yP > container.offsetTop + container.offsetHeight - offset &&
        xP > container.offsetLeft + container.offsetWidth - offset
    ) {
        return "se";
    }

    return "";
}
