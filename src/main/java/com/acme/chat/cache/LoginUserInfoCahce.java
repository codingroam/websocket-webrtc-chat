package com.acme.chat.cache;

import com.acme.chat.po.User;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @Description TODO
 * @Author wangkai
 * @Date 2023/10/3 2:24
 */
public class LoginUserInfoCahce {

    private static Map<String,String> userTokenMap = new ConcurrentHashMap<>();
    private static Map<String, User> userInfoMap = new ConcurrentHashMap<>();
    private static Map<String, Integer> telCodeMap = new ConcurrentHashMap<>();

    public static void putToken(String userName,String token){
        userTokenMap.put(userName,token);
    }

    public static String getTokenByUserName(String userName){
        return userTokenMap.get(userName);
    }

    public static void putUserInfo(String userName,User user){
        userInfoMap.put(userName,user);
    }

    public static User getUserInfoByUserName(String userName){
        return userInfoMap.get(userName);
    }
    public static void removeUserInfoByUserName(String userName){
        userInfoMap.remove(userName);
    }
    public static void removeTokenByUserName(String userName){
        userTokenMap.remove(userName);
    }
    public static void putTelCode(String tel,Integer code){

        telCodeMap.put(tel,code);
    }

    public static Integer getTelCode(String tel){
        return telCodeMap.get(tel);
    }

    public static void removeTelCode(String tel){
        telCodeMap.remove(tel);
    }
    public static Map<String,Integer> getTelCodeMap(){
        return telCodeMap;
    }
}
