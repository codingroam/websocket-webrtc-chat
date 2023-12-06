package com.acme.chat.config;

import com.acme.chat.cache.LoginUserInfoCahce;
import com.acme.chat.po.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

import javax.servlet.http.HttpServletRequest;
import javax.websocket.server.ServerEndpointConfig;

/**
 * WebScoket配置处理器
 */
@Configuration
@EnableWebSocket
public class WebSocketConfig extends ServerEndpointConfig.Configurator{



	 /**
     * ServerEndpointExporter 作用
     *
     * 这个Bean会自动注册使用@ServerEndpoint注解声明的websocket endpoint
     *
     * @return
     */
	@Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }





    /**
     * token鉴权认证
     * @param originHeaderValue
     * @return
     */
    @Override
    public boolean checkOrigin(String originHeaderValue) {
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = servletRequestAttributes.getRequest();
        String token = request.getParameter("token");

        // 获取 token 中的 user id
        String userName;
        try {
            userName = JWT.decode(token).getAudience().get(0);
        } catch (JWTDecodeException j) {
            return false;
            //throw new BusinessException(ErrorEnum.NOAUTH_TOKEN);
        }
        User user = LoginUserInfoCahce.getUserInfoByUserName(userName);
        if (user == null) {
           return false;
        }
        // 验证 token
        JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(user.getPassWord())).build();
        try {
            jwtVerifier.verify(token);
        } catch (JWTVerificationException e) {
            //throw new BusinessException(ErrorEnum.NOAUTH_TOKEN);
            return false;
        }

        return true;


    }









}
