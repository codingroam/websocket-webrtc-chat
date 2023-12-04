

function dragable(domid){
    var dragdiv;
    var x, y;

    dragdiv = document.getElementById(domid);
    //记录到点击时鼠标到移动框左边和上边的距离

    dragdiv.addEventListener('dragstart', function (e) {
        e.dataTransfer.effectAllowed = "move";  //移动效果
        e.dataTransfer.setData("text", '');  //附加数据，　没有这一项，firefox中无法移动
        x = e.offsetX || e.layerX;
        y = e.offsetY || e.layerY;
        return true;
    }, false);

    document.addEventListener('dragover', function (e) {//取消冒泡 ,不取消则不能触发 drop事件
        e.preventDefault() || e.stopPropagation();
    }, false);

    document.addEventListener('drop', function (e) {
        dragdiv.style.left = (e.pageX - x) + 'px';
        dragdiv.style.top = (e.pageY - y) + 'px';
        e.preventDefault() || e.stopPropagation();  //不取消，firefox中会触发网页跳转到查找setData中的内容
    }, false);

}


