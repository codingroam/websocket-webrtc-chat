package com.acme.chat.po;

import lombok.Data;

import java.util.Date;

/**
 * @Description TODO
 * @Author wk.
 * @Date 2023/9/10 2:12
 */
@Data
public class MessageRecord {
    private int id;
    private String fromUser;
    private String toUser;
    private String content;
    private Date date;
    private int state;

}
