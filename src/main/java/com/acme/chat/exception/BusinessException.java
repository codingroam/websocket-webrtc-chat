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
}
