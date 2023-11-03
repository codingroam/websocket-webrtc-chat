var oDiv = document.getElementsById('videomain');
oDiv.style.width = '500px';
var aSpan = oDiv.getElementsByTagName('span');
for (var i = 0; i < aSpan.length; i++) {
    dragFn(aSpan[i]);
}
function dragFn(obj) {
    obj.onmousedown = function (ev) {
        var oEv = ev || event;
        oEv.stopPropagation();
        var oldWidth = oDiv.offsetWidth;
        var oldHeight = oDiv.offsetHeight;
        var oldX = oEv.clientX;
        var oldY = oEv.clientY;
        var oldLeft = oDiv.offsetLeft;
        var oldTop = oDiv.offsetTop;

        document.onmousemove = function (ev) {
            var oEv = ev || event;
            let disY = (oldTop + (oEv.clientY - oldY)),
                disX = (oldLeft + (oEv.clientX - oldLeft));
            if(disX>oldLeft+oldWidth){
                disX=oldLeft+oldWidth
            }
            if(disY>oldTop+oldHeight){
                disY=oldTop+oldHeight
            }
            if (obj.className == 'tl') {
                oDiv.style.width = oldWidth - (oEv.clientX - oldX) + 'px';
                oDiv.style.height = oldHeight - (oEv.clientY - oldY) + 'px';
                oDiv.style.left = disX + 'px';
                oDiv.style.top = disY + 'px';
            }
            else if (obj.className == 'bl') {
                oDiv.style.width = oldWidth - (oEv.clientX - oldX) + 'px';
                oDiv.style.height = oldHeight + (oEv.clientY - oldY) + 'px';
                oDiv.style.left = disX + 'px';
                oDiv.style.bottom = oldTop + (oEv.clientY + oldY) + 'px';
            }
            else if (obj.className == 'tr') {
                oDiv.style.width = oldWidth + (oEv.clientX - oldX) + 'px';
                oDiv.style.height = oldHeight - (oEv.clientY - oldY) + 'px';
                oDiv.style.right = oldLeft - (oEv.clientX - oldX) + 'px';
                oDiv.style.top = disY + 'px';
            }
            else if (obj.className == 'br') {
                oDiv.style.width = oldWidth + (oEv.clientX - oldX) + 'px';
                oDiv.style.height = oldHeight + (oEv.clientY - oldY) + 'px';
                oDiv.style.right = oldLeft - (oEv.clientX - oldX) + 'px';
                oDiv.style.bottom = oldTop + (oEv.clientY + oldY) + 'px';
            }
            else if (obj.className == 't') {
                oDiv.style.height = oldHeight - (oEv.clientY - oldY) + 'px';
                oDiv.style.top = disY + 'px';
            }
            else if (obj.className == 'b') {
                oDiv.style.height = oldHeight + (oEv.clientY - oldY) + 'px';
                oDiv.style.bottom = disY + 'px';
            }
            else if (obj.className == 'l') {
                oDiv.style.height = oldHeight + 'px';
                oDiv.style.width = oldWidth - (oEv.clientX - oldX) + 'px';
                oDiv.style.left = disX + 'px';
            }
            else if (obj.className == 'r') {
                oDiv.style.height = oldHeight + 'px';
                oDiv.style.width = oldWidth + (oEv.clientX - oldX) + 'px';
                oDiv.style.right = disX + 'px';
            }
        };

        document.onmouseup = function () {
            document.onmousemove = null;
        };
        return false;
    };
}
document.getElementById("odiv").onmousedown = function (ev) {
    var oevent = ev || event;
    oevent.preventDefault();

    var distanceX = oevent.clientX - oDiv.offsetLeft;
    var distanceY = oevent.clientY - oDiv.offsetTop;

    document.onmousemove = function (ev) {
        var oevent = ev || event;
        oDiv.style.left = oevent.clientX - distanceX + 'px';
        oDiv.style.top = oevent.clientY - distanceY + 'px';
    };
    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
    };
}

