package com.acme.chat.vo;

import lombok.Data;

/**
 * @Description TODO
 * @Author wk.
 * @Date 2023/9/7 23:14
 */
@Data
public class UserVO {

    private int id;
    private String userName;
    private String passWord;
    private String nickName;
    private String signature;
    private String addr;
    private boolean onLineState;
    private String tel;
    private String picture;


}