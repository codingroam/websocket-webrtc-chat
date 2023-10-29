package com.acme.chat.chatenum;

/**
 * @Description TODO
 * @Author wk.
 * @Date 2023/9/7 23:50
 */
public enum ErrorEnum {

    NO_USER(10001,"没有该用户，请注册后登录"),
    CHECK_USER_FAIL(10002,"用户名或密码错误"),
    NO_TOKEN(10003,"请求无token,请先登录"),
    NOAUTH_TOKEN(10004,"当前token无权限");


    private Integer code;
    private String message;
    private ErrorEnum(){

    }
    private ErrorEnum(Integer code, String message){
        this.code = code;
        this.message = message;
    }

    public Integer getCode(){
        return this.code;
    }

    public String getMessage(){
        return this.message;
    }
}
