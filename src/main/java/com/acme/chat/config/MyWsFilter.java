//package com.acme.chat.config;
//
//import com.acme.chat.cache.LoginUserInfoCahce;
//import com.acme.chat.chatenum.ErrorEnum;
//import com.acme.chat.exception.BusinessException;
//import com.acme.chat.po.User;
//import com.acme.chat.utils.ResponseUtils;
//import com.auth0.jwt.JWT;
//import com.auth0.jwt.JWTVerifier;
//import com.auth0.jwt.algorithms.Algorithm;
//import com.auth0.jwt.exceptions.JWTDecodeException;
//import com.auth0.jwt.exceptions.JWTVerificationException;
//import org.apache.tomcat.websocket.server.Constants;
//import org.apache.tomcat.websocket.server.WsServerContainer;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import javax.servlet.*;
//import javax.servlet.annotation.WebFilter;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.util.Map;
//
//@WebFilter(filterName = "MyWsFilter", urlPatterns = {"/webSocket/*"})
//public class MyWsFilter extends OncePerRequestFilter {
//
//    private static final long serialVersionUID = 1L;
//
//    private transient WsServerContainer sc;
//
//
//
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        String token = request.getParameter("token");
//        response.setStatus(401);
//        response.getOutputStream().write("7878fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdgdff78".getBytes());
//        response.getOutputStream().flush();
//
//
//
////        // 获取 token 中的 user id
////        String userName = null;
////        try {
////            userName = JWT.decode(token).getAudience().get(0);
////        } catch (JWTDecodeException j) {
////            ResponseUtils.responseBusinessException(response,new BusinessException(ErrorEnum.NOAUTH_TOKEN));
////
////        }
////        User user = LoginUserInfoCahce.getUserInfoByUserName(userName);
////        if (user == null) {
////            ResponseUtils.responseBusinessException(response,new BusinessException(ErrorEnum.NOAUTH_TOKEN));
////            return;
////
////        }
////        // 验证 token
////
////        try {
////            JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(user.getPassWord())).build();
////            jwtVerifier.verify(token);
////        } catch (JWTVerificationException e) {
////            ResponseUtils.responseBusinessException(response,new BusinessException(ErrorEnum.NOAUTH_TOKEN));
////
////        }
//       // filterChain.doFilter(request,response);
//    }
//}