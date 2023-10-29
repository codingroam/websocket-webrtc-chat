package com.acme.chat.utils;
 
import com.acme.chat.po.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.stereotype.Service;
 
import java.util.Date;
 
/**
 * @title: TokenService
 * @Author gjt
 * @Date: 2020-12-21
 * @Description：
 */
@Service
public class TokenUtils {
    /**
     * 过期时间365天
     */
    private static final long EXPIRE_TIME = 365 * 24 * 60 * 60 * 1000;
 
    public static String getToken(User user) {
        Date date = new Date(System.currentTimeMillis() + EXPIRE_TIME);
        String token="";
        token= JWT.create().withAudience(user.getUserName()) // 将 user id 保存到 token 里面
            .withExpiresAt(date) //五分钟后token过期
            .sign(Algorithm.HMAC256(user.getPassWord())); // 以 password 作为 token 的密钥
        return token;
    }


}