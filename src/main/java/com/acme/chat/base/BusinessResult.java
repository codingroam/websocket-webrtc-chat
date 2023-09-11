package com.acme.chat.base;

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
    private String Message = "success";
}
