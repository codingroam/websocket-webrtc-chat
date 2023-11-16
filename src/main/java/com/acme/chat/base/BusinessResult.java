package com.acme.chat.base;

import com.acme.chat.exception.BusinessException;
import lombok.Data;

/**
 * @Description TODO
 * @Author wk.
 * @Date 2023/9/7 23:56
 */
@Data
public class BusinessResult<T> {

    private T data;
    private Integer code = 0;
    private String message = "success";

    public BusinessResult(BusinessException businessException){
        this.code = businessException.getCode();
        this.message = businessException.getMessage();
    }

    public BusinessResult(){

    }

    public BusinessResult(T t){
        data = t;
    }
}
