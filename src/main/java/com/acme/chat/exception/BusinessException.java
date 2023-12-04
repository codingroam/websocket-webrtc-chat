package com.acme.chat.exception;

import com.acme.chat.chatenum.ErrorEnum;

/**
 * @Description TODO
 * @Author wk.
 * @Date 2023/9/7 23:44
 */
public class BusinessException extends RuntimeException{
    private Integer code;
    private String message;

    public BusinessException(ErrorEnum errorEnum){
        this.code = errorEnum.getCode();
        this.message = errorEnum.getMessage();
    }

    public BusinessException(Exception e){
        this.code = 9999;
        this.message = e.getMessage();
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
