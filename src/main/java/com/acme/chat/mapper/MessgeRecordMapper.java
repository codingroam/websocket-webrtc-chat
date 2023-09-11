package com.acme.chat.mapper;


import com.acme.chat.po.MessageRecord;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MessgeRecordMapper {
    void addMessagerecord(MessageRecord messageRecord);
    void deleteUserMessagerecord(String userName);

    List<MessageRecord> getUserUnreadMessage(String userName);
}
