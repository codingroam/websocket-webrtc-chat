
//获取当前登录用户的所有好友key
function getAlluserKey() {
    return currentUserInfo.username + "@@" + "all_user";
}
//获取与当前用户聊天好友的messagekey
function getTalkUserMessageKey(talkUser) {
    return currentUserInfo.username + "@@" + talkUser + "messsage"
}
//当前聊天好友的message存储
function storageTalkUserMessage(talkUser, message) {
    var userMessageKey = getTalkUserMessageKey(talkUser)
    var messageList = JSON.parse(window.localStorage.getItem(userMessageKey));
    if (messageList == undefined) {
        messageList = new Array();
        messageList.push(message)
        window.localStorage.setItem(userMessageKey, JSON.stringify(messageList));
    } else {
        messageList.push(message);
        window.localStorage.setItem(userMessageKey, JSON.stringify(messageList));
    }

}

function addOnlineUserAndGet(user) {
    var alluserkey = getAlluserKey();
    var allUserSet = window.localStorage.getItem(alluserkey);
    if (allUserSet == undefined) {
        allUserSet = new Set();
        allUserSet.add(user)
        window.localStorage.setItem(alluserkey, JSON.stringify(Array.from(allUserSet)));
    } else {
        var allUserSet = new Set(JSON.parse(allUserSet))
        allUserSet.add(user);
        window.localStorage.setItem(alluserkey, JSON.stringify(Array.from(allUserSet)));
    }
    return allUserSet;
}


function clicktalk(a) {
    $("#users").children().removeClass("active")
    $(a).addClass("active");
    var talkToUsername = $(a).children()[0].innerHTML
    $("#talktitle").text("与" + talkToUsername + "的聊天");

    $(a).find('span .count-font')[0].innerText = ''
    clearUnreadMessageCount(talkToUsername)
    var userMessageKey = getTalkUserMessageKey(talkToUsername)
    var messageList = JSON.parse(window.localStorage.getItem(userMessageKey));
    if (messageList != undefined) {
        $("#talk-container").empty();
        for (var i = 0; i < messageList.length; i++) {
            $("#talk-container").append(messageList[i]);
        }

    } else {
        $("#talk-container").empty();
    }
    currentUserInfo.to = talkToUsername;
    scrollToBottom()
}

function talkuser(username) {
    if (username == null || username == undefined) {
        return
    }
    $("#users").children(`span:contains(${username})`).addClass("active");
    $("#talktitle").text("与" + username + "的聊天");
    var talkUserKey = getTalkUserMessageKey(username)
    var messageList = JSON.parse(window.localStorage.getItem(talkUserKey));
    if (messageList != undefined) {
        $("#talk-container").empty();
        for (var i = 0; i < messageList.length; i++) {
            $("#talk-container").append(messageList[i]);
        }

    } else {
        $("#talk-container").empty();
    }
    currentUserInfo.to = username
}

function getIsActive(username){
    var activeUser =  currentUserInfo.to;
    if ( activeUser == undefined || activeUser == null ){
        return false;
    }else{
        return activeUser == username;
    }
}

function getUserUnreadMessageCount(fromuser){
    var countKey = currentUserInfo.username+"@@"+fromuser+"count"
    var count = window.localStorage.getItem(countKey);
    if (count == undefined || count == 0 || count == NaN){
        return 0;
    }else{
        return count;
    }
}
function addAndFlushUnreadMessageCount(fromuser) {

    var countKey = currentUserInfo.username+"@@"+fromuser+"count"
    var count = getUserUnreadMessageCount(fromuser)
    count++
    window.localStorage.setItem(countKey, count);
    var countstr = "+" + count
    $("#users").find(`div:contains(${fromuser})`).find('span .count-font')[0].innerText = countstr

}

function clearUnreadMessageCount(fromuser) {
    var countKey = currentUserInfo.username+"@@"+fromuser+"count"
    window.localStorage.setItem(countKey, 0);
}

function userListClick() {
    listindex = 0;
    $("#messageList").removeClass("text-light").removeClass("list-focus")
    $("#userList").addClass("text-light").addClass("list-focus")
    var allUserList = JSON.parse(window.localStorage.getItem(currentUserInfo.username+"-allUserList"));
    createUserList(allUserList)
}

function messageListClick() {
    listindex = 1
    $("#userList").removeClass("text-light").removeClass("list-focus")
    $("#messageList").addClass("text-light").addClass("list-focus")
    $("#users").empty()
    $("#users").append(`<div class="list-group-item d-flex flex-row"><div><img  src="images/suolong.png" width="50" height="50"></div>&nbsp;&nbsp;<div class="d-flex w-100 flex-column">
                                <div>索隆</div>
                                <div class="mt-2 w-100 d-flex justify-content-between" style="font-size: 12px"><div>你在吗</div><div>17:26</div></div>
                            </div></div>`);


}

function search(key) {
    if(key != null && key != undefined && key.length>0){
        if(listindex == 0){
            createUserListByKey(key)
        }else{
            if(!"索隆你在吗".includes(key)){
                $("#users").empty()
            }
        }
    }else{
        if(listindex == 0){
            userListClick()
        }else{
            messageListClick()
        }
    }



}

function createUserList(users) {
    $("#users").empty()
    for (var i = 0; i < users.length; i++) {
        var count = getUserUnreadMessageCount(users[i].userName)
        var active = getIsActive(users[i].userName)
        $("#users").append(`<div  class="list-group-item d-flex justify-content-between" onclick="clicktalk(this)" data-bs-toggle="list" ><div><img class="dialog-head-icon-list" src="/images/head.png"><span id="username">${users[i].userName}</span></div><div class="linestate-font">在线</div></div>`);
    }

}

function createUserListByKey(key) {
    var users = JSON.parse(window.localStorage.getItem(currentUserInfo.username+"-allUserList"));
    $("#users").empty()
    for (var i = 0; i < users.length; i++) {
        if(PinyinMatch.match(users[i].userName, key)){
            var count = getUserUnreadMessageCount(users[i].userName)
            var active = getIsActive(users[i].userName)
            $("#users").append(`<div class="d-flex justify-content-between no-border" style="border: none"><div><img class="dialog-head-icon-list" src="/images/head.png"></div><div ${users[i].onLineState ? `class="list-group-item d-flex justify-content-between   ${active ? ' active ' : ''} " ` : `class="list-group-item d-flex justify-content-between    ${active ? ' active ' : ''} "`}  onclick="clicktalk(this)" data-bs-toggle="list"  ><span id="username">${users[i].userName}</span>${users[i].onLineState ? `<span><span class="linestate-font">在线</span>&nbsp;<span class="count-font">${count>0 ? "+"+count: ""}</span></span>` : `<span><span class="linestate-font">离线</span>&nbsp;<span class="count-font"></span>${count>0 ? "+"+count: ""}</span>`}</div></div>`);
        }
    }


}


function getUserListItemHtmlTemplete() {

    return `<div ${users[i].onLineState ? `class="list-group-item d-flex justify-content-between   online-background ${active ? ' active ' : ''} " ` : `class="list-group-item d-flex justify-content-between   offline-background ${active ? ' active ' : ''} "`}  onclick="clicktalk(this)" data-bs-toggle="list"  ><span id="username">${users[i].userName}</span>
${users[i].onLineState ? `<span><span class="linestate-font">在线</span>&nbsp;<span class="count-font">${count>0 ? "+"+count: ""}</span></span>` : `<span><span class="linestate-font">离线</span>&nbsp;<span class="count-font"></span>${count>0 ? "+"+count: ""}</span>`}</div>`

}