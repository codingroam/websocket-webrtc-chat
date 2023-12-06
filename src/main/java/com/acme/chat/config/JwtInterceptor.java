package com.acme.chat.config;

import com.acme.chat.annotation.FastLoginToken;
import com.acme.chat.annotation.LoginToken;
import com.acme.chat.annotation.PassToken;
import com.acme.chat.cache.LoginUserInfoCahce;
import com.acme.chat.chatenum.ErrorEnum;
import com.acme.chat.exception.BusinessException;
import com.acme.chat.po.User;
import com.acme.chat.service.UserService;
import com.acme.chat.utils.ResponseUtils;
import com.acme.chat.utils.TokenUtils;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Method;
import java.util.Map;

/**
 * @title: JwtInterceptor
 * @Author gjt
 * @Date: 2020-12-21
 * @Description：
 */
public class JwtInterceptor implements HandlerInterceptor{

    @Autowired
    private UserService userService;

    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object object) throws Exception {
        String token = httpServletRequest.getHeader("token");// 从 http 请求头中取出 token
        // 如果不是映射到方法直接通过
        if(!(object instanceof HandlerMethod)){
            return true;
        }
        HandlerMethod handlerMethod=(HandlerMethod)object;
        Method method=handlerMethod.getMethod();
        //检查是否有passtoken注释，有则跳过认证
        if (method.isAnnotationPresent(PassToken.class)) {
            PassToken passToken = method.getAnnotation(PassToken.class);
            if (passToken.required()) {
                return true;
            }
        }

        if(token == null){
            Map<String, String[]> parameterMap = httpServletRequest.getParameterMap();
            if(method.isAnnotationPresent(LoginToken.class)){
                String[] userNames = parameterMap.get("username");
                String[] passWords = parameterMap.get("password");
                User user = null;
                if(userNames != null && passWords != null){
                    try{
                        user = userService.checkUserLoginByUserName(userNames[0], passWords[0]);
                    }catch (Exception e){
                        return ResponseUtils.responseBusinessException(httpServletResponse,new BusinessException(ErrorEnum.CHECK_USER_FAIL));
                    }
                    String newToken = TokenUtils.getToken(user);
                    httpServletResponse.setHeader("Access-Control-Expose-Headers", "token");
                    httpServletResponse.setHeader("token",newToken);
                    LoginUserInfoCahce.putToken(user.getUserName(),newToken);
                    LoginUserInfoCahce.putUserInfo(user.getUserName(),user);
                }
            }else if(method.isAnnotationPresent(FastLoginToken.class)){
                String[] tels = parameterMap.get("tel");
                String[] checkNums = parameterMap.get("checkNum");
                Integer telCode = LoginUserInfoCahce.getTelCode(tels[0]);
                if((telCode+"").equals(checkNums[0])){
                    User userByTel = userService.getUserByTel(tels[0]);
                    String newToken = TokenUtils.getToken(userByTel);
                    httpServletResponse.setHeader("Access-Control-Expose-Headers", "token");
                    httpServletResponse.setHeader("token",newToken);
                    LoginUserInfoCahce.putToken(userByTel.getUserName(),newToken);
                    LoginUserInfoCahce.putUserInfo(userByTel.getUserName(),userByTel);
                }
            } else{
                return ResponseUtils.responseBusinessException(httpServletResponse,new BusinessException(ErrorEnum.NO_TOKEN));
            }

        }else{
            // 获取 token 中的 user id
            String userId;
            try {
                userId = JWT.decode(token).getAudience().get(0);
            } catch (JWTDecodeException j) {
                return ResponseUtils.responseBusinessException(httpServletResponse,new BusinessException(ErrorEnum.CHECK_USER_FAIL));
            }
            User user = userService.getUserByName(userId);
            if (user == null) {
                return ResponseUtils.responseBusinessException(httpServletResponse,new BusinessException(ErrorEnum.CHECK_USER_FAIL));

            }
            // 验证 token
            JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(user.getPassWord())).build();
            try {
                jwtVerifier.verify(token);
            } catch (JWTVerificationException e) {
                return ResponseUtils.responseBusinessException(httpServletResponse,new BusinessException(ErrorEnum.NOAUTH_TOKEN));
            }

        }

        return true;
    }

//    private boolean responseBusinessException(HttpServletResponse httpServletResponse,BusinessException businessException){
//        httpServletResponse.setContentType("application/json;charset=UTF-8");
//        httpServletResponse.setCharacterEncoding("UTF-8");
//        PrintWriter printWriter = null;
//        try {
//            printWriter = httpServletResponse.getWriter();
//            printWriter.write(JSON.toJSONString(new BusinessResult<>(businessException)));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }finally {
//            printWriter.close();
//        }
//        return false;
//    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }
    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}