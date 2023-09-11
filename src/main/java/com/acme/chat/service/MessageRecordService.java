package com.acme.chat.service;

import com.acme.chat.base.Message;

import java.util.List;

public interface MessageRecordService {

    /**
     * 获取上线用户的未读消息用于发送
     * @param userName
     * @return
     */
    List<Message> getUserAllUnreadMessage4send(String userName);

    /**
     * 用户不在线时存储消息到数据库
     * @param msg
     */
    void addMeasgeRecord(Message msg);

    /**
     * 未读消息发送给用户后删除未读消息
     * @param userName
     */
    void deleteUserMessagerecord(String userName);
}
