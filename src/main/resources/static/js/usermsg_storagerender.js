
//获取当前登录用户的所有好友key
function getAlluserKey() {
    return currentUserInfo.userName + "@@" + "all_user";
}
//获取与当前用户聊天好友的messagekey
function getTalkUserMessageKey(talkUser) {
    return currentUserInfo.userName + "@@" + talkUser + "messsage"
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

//当前聊天好友的message存储
function storageCurrentTalkUserMessage(message, fileuuid,isFrom) {
    var userMessageKey = getTalkUserMessageKey(isFrom ? message.from : message.to)
    var messageList = JSON.parse(window.localStorage.getItem(userMessageKey));
    if (messageList == undefined) {
        messageList = new Array();
        messageList.push(message)
        window.localStorage.setItem(userMessageKey, JSON.stringify(messageList));
    } else {
        messageList.push(message);
        window.localStorage.setItem(userMessageKey, JSON.stringify(messageList));
    }

    if(fileuuid != undefined){
        var fileinfoMap = getLocalStorageMapByKey("fileinfokey");
        fileinfoMap.set(fileuuid,messageList.length)
        setLocalStorageKeyMap("fileinfokey",fileinfoMap)
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
    var talkToUsername = $(a).children()[0].childNodes[1].innerHTML
    $("#talktitle").text("与 " + talkToUsername + " 的聊天");

    $(a).find('div#message-count')[0].innerText = ''
    $(a).find('div#message-count').css('opacity','0')
    clearUnreadMessageCount(talkToUsername)
    var userMessageKey = getTalkUserMessageKey(talkToUsername)
    var messageList = JSON.parse(window.localStorage.getItem(userMessageKey));
    if (messageList != undefined) {
        $("#talk-container").empty();
        for (var i = 0; i < messageList.length; i++) {
            var template = getDialogHtmlTemplate(messageList[i])
            $("#talk-container").append(template.message);
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
            var template = getDialogHtmlTemplate(messageList[i])
            $("#talk-container").append(template.message);
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

function userFirstMessagePrompt(data){
    var fromUser = data.from;
    var promptKey = currentUserInfo.userName+"@@"+fromUser+"prompt"
    var promptMap =  getLocalStorageMapByKey(promptKey)
    var promptMessage = getPromptMessage(data)
    promptMap.set(fromUser,)


}

function getPromptMessage(data){
    
}

function getUserUnreadMessageCount(fromuser){
    var countKey = currentUserInfo.userName+"@@"+fromuser+"count"
    var count = window.localStorage.getItem(countKey);
    if (count == undefined || count == 0 || count == NaN){
        return 0;
    }else{
        return count;
    }
}
function addAndFlushUnreadMessageCount(fromuser) {

    var countKey = currentUserInfo.userName+"@@"+fromuser+"count"
    var count = getUserUnreadMessageCount(fromuser)
    count++
    window.localStorage.setItem(countKey, count);
    var countstr = ''
    if(count < 10){
        countstr =  "&nbsp;" + count
    }else if(count > 99){
        countstr ="99"
    }
    $("#users").find(`div:contains(${fromuser})`).find('div#message-count')[0].innerHTML = countstr
    $("#users").find(`div:contains(${fromuser})`).find('div#message-count').css('opacity','100')

}

function clearUnreadMessageCount(fromuser) {
    var countKey = currentUserInfo.userName+"@@"+fromuser+"count"
    window.localStorage.setItem(countKey, 0);
}

function userListClick() {
    listindex = 0;
    $("#messageList").removeClass("text-light").removeClass("list-focus")
    $("#userList").addClass("text-light").addClass("list-focus")
    var allUserList = JSON.parse(window.localStorage.getItem(currentUserInfo.userName+"-allUserList"));
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
        pictureCache.set(users[i].userName,getUserPictureUrl(users[i].picture))
        var count = getUserUnreadMessageCount(users[i].userName)
        var active = getIsActive(users[i].userName)
        $("#users").append(getUserListItemHtmlTemplete(users[i],count,active));
    }

}

function getUserPictureUrl(picture) {

    if(picture == null || picture == undefined){
        return "head.png"
    }else{
        return picture;
    }

}

function createUserListByKey(key) {
    var users = JSON.parse(window.localStorage.getItem(currentUserInfo.userName+"-allUserList"));
    $("#users").empty()
    for (var i = 0; i < users.length; i++) {
        if(PinyinMatch.match(users[i].userName, key)){
            var count = getUserUnreadMessageCount(users[i].userName)
            var active = getIsActive(users[i].userName)
            $("#users").append(getUserListItemHtmlTemplete(users[i].userName,users[i].onLineState,count,active));
        }
    }


}


function getUserListItemHtmlTemplete(user,count,active) {

return   `<div  class="list-group-item d-flex justify-content-between"  onclick="clicktalk(this)" data-bs-toggle="list" ><div><img class="dialog-head-icon-list" src="${ preHeadPath + pictureCache.get(user.userName) }"><span id="username">${user.userName}</span></div><div class="d-flex justify-content-between"><div class="${ user.onLineState ? 'green-circle' : 'offstate-font'}">&nbsp;</div><div id="message-count" class="bubble opacity-0 text-light">${count}</div></div></div>`

}


function modifyStorageMessage(uuid,fileState,talkto){
    var fileInfoMap =  getLocalStorageMapByKey("fileinfokey");
    var messageindex = fileInfoMap.get(uuid) - 1;
    var userMessageKey = getTalkUserMessageKey(talkto)
    var messageList = JSON.parse(window.localStorage.getItem(userMessageKey));
    var messageInfo = messageList[messageindex]
    messageInfo.fileState = fileState
    messageInfo.fileStateName = getFileStateNameByState(fileState)
    messageList[messageindex] = messageInfo;
    window.localStorage.setItem(userMessageKey,JSON.stringify(messageList));

}


function getFileStateNameByState(fileState){

    let stateName;

    switch(fileState){
        case 'uploadSuccess':
            stateName = '上传成功'
            break;
        case 'downloadSuccess':
            stateName = '下载成功'
            break;
        case 'uploadFail':
            stateName = '上传失败'
            break;
        case 'downloadFail':
            stateName = '下载失败'
            break;
        

    }
    return stateName;

}

function getLocalStorageMapByKey(key) {

    // 从 localStorage 中读取存储的字符串
    const storedMapString = localStorage.getItem(key);
    if(storedMapString == undefined || storedMapString == null){
        return new Map();
    }

// 将字符串转换为 Map 对象
    var storedMap = new Map(JSON.parse(storedMapString));
    return storedMap;

}

function setLocalStorageKeyMap(key,map) {

    // 将 Map 对象转换为字符串
    var mapString = JSON.stringify(Array.from(map.entries()));

// 将转换后的字符串存储到 localStorage 中
    localStorage.setItem(key, mapString);

}