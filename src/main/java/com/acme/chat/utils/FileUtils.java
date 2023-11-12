package com.acme.chat.utils;

import com.acme.chat.exception.BusinessException;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

/**
 * @Description TODO
 * @Author wangkai
 * @Date 2023/11/12 15:34
 */
public class FileUtils {

    public static String rootFilePath = System.getProperty("user.dir")+File.separator+"file";

    static{
        File dir = new File(rootFilePath);
        if (!dir.exists()) {
            dir.mkdirs();
        }
        String headPath = rootFilePath  + File.separator + "head";
        File dirhead = new File(headPath);
        if(!dirhead.exists()){
            dirhead.mkdirs();
        }
    }

    public static void uploadFile(MultipartFile file,String filePath){

        File dest = new File(filePath);
        try {
            file.transferTo(dest);
        } catch (IOException e) {
            e.printStackTrace();
            throw new BusinessException(e);
        }


    }


}
