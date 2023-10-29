package com.acme.chat.utils;

import com.acme.chat.base.BusinessResult;
import com.acme.chat.exception.BusinessException;
import com.alibaba.fastjson.JSON;

import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @Description TODO
 * @Author wangkai
 * @Date 2023/10/3 13:10
 */
public class ResponseUtils {


    public static boolean responseBusinessException(HttpServletResponse httpServletResponse, BusinessException businessException){
        httpServletResponse.setContentType("application/json;charset=UTF-8");
        httpServletResponse.setCharacterEncoding("UTF-8");
        PrintWriter printWriter = null;
        try {
            printWriter = httpServletResponse.getWriter();
            printWriter.write(JSON.toJSONString(new BusinessResult<>(businessException)));
            printWriter.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            //printWriter.close();
        }
        return false;
    }
}
