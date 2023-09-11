package com.acme.chat.service;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import com.acme.chat.po.User;
import com.acme.chat.vo.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSON;

import com.acme.chat.base.Message;

@ServerEndpoint("/webSocket/{username}")
@Component
@Slf4j
public class WebSocketServer {

    private static UserService userService;
    private static MessageRecordService messageRecordService;

    @Autowired
    public void setUserService(UserService userService){
        WebSocketServer.userService = userService;
    }

    @Autowired
    public void setMessageRecordService(MessageRecordService messageRecordService){
        WebSocketServer.messageRecordService = messageRecordService;
    }
	 //静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
    private static AtomicInteger onlineNum = new AtomicInteger();

    //concurrent包的线程安全Set，用来存放每个客户端对应的WebSocketServer对象。
    private static ConcurrentHashMap<String, Session> sessionPools = new ConcurrentHashMap<>();

    //线程安全的排序set
    private static Set<String> onlineUserSet = Collections.synchronizedSet(new LinkedHashSet<>());

    //发送消息
    public void sendMessage(Session session, String message) throws IOException {
        if(session != null){
            synchronized (session) {
                log.info("发送数据：" + message);
                session.getBasicRemote().sendText(message);
            }
        }
    }

    //给指定用户发送信息
    public void sendInfoToUser(String userName, String message){
        Session session = sessionPools.get(userName);
        try {
            sendMessage(session, message);
        }catch (Exception e){
            e.printStackTrace();
        }
    }


    // 群发消息
    public void broadcast(String message){
    	for (Session session: sessionPools.values()) {
            try {
                sendMessage(session, message);
            } catch(Exception e){
                e.printStackTrace();
                continue;
            }
        }
    }

    //建立连接成功调用
    @OnOpen
    public void onOpen(Session session, @PathParam(value = "username") String userName){
        onlineUserSet.add(userName);
        sessionPools.put(userName, session);
        updateOnlineUserList();
        log.info(userName + "加入webSocket！当前人数为" + onlineNum);
        //获取上线用户的未读消息
        List<Message> userAllUnreadMessage4send = messageRecordService.getUserAllUnreadMessage4send(userName);
        if(userAllUnreadMessage4send.size() > 0){
            for(Message message1 : userAllUnreadMessage4send){
                sendInfoToUser(userName,JSON.toJSONString(message1,true));
            }

        }
        //删除未读消息
        messageRecordService.deleteUserMessagerecord(userName);
    }

    private void updateOnlineUserList() {
        List<UserVO> allusers= userService.getAllUserWithState(onlineUserSet);
        //获取所有用户，包括已上线用户和未上线用户
        Message message = new Message<List>("server", "alluser", allusers, "onlineUsers", new Date());
        //广播更新上线人数
        broadcast(JSON.toJSONString(message,true));
    }

    /**
     * 给用户之外的其他用户广播消息
     * @param userName
     * @param message
     */
    private void broadcastExcludeUser(String userName, String message) {
        Set<String> users = sessionPools.keySet();
        for(String user : users ){
            if(userName.equals(user)){
                continue;
            }
            try{
                sendInfoToUser(user,message);
            }catch(Exception e){
                e.printStackTrace();
            }

        }

    }

    //关闭连接时调用
    @OnClose
    public void onClose(@PathParam(value = "username") String userName){
        onlineUserSet.remove(userName);
        sessionPools.remove(userName);
        updateOnlineUserList();
        System.out.println(userName + "断开webSocket连接！当前人数为" + onlineUserSet.size());
        // 更新用户在线列表
        updateOnlineUserList();

    }

    //收到客户端信息后，根据接收人的username把消息推下去或者群发
    // to=-1群发消息
    @OnMessage
    public void onMessage(String message) throws IOException{
        System.out.println("server get" + message);
        Message msg=JSON.parseObject(message, Message.class);
        msg.setContentType("msg");
		msg.setDate(new Date());
        if(onlineUserSet.contains(msg.getTo())){
            sendInfoToUser(msg.getTo(), JSON.toJSONString(msg,true));
        }else{
            messageRecordService.addMeasgeRecord(msg);

        }


    }

    //错误时调用
    @OnError
    public void onError(Session session, Throwable throwable){
        log.error("发生错误");
        throwable.printStackTrace();
    }

    public static void addOnlineCount(){
        onlineNum.incrementAndGet();
    }

    public static void subOnlineCount() {
        onlineNum.decrementAndGet();
    }
    
    public static AtomicInteger getOnlineNumber() {
        return onlineNum;
    }
    
    public static ConcurrentHashMap<String, Session> getSessionPools() {
        return sessionPools;
    }

    private static Set<String> getOnlineUserSetExclude(String userName){
        Set<String> onlineUsers = sessionPools.keySet();
        onlineUsers = new HashSet<>(onlineUsers);
        onlineUsers.remove(userName);
        return onlineUsers;
    }
}
