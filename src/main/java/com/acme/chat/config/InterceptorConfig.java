//package com.acme.chat.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
///**
// * @title: InterceptorConfig
// * @Author gjt
// * @Date: 2020-12-21
// * @Description：
// */
//@Configuration
//public class InterceptorConfig implements WebMvcConfigurer{
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(jwtInterceptor())
//            .addPathPatterns("/**")    // 拦截所有请求，通过判断是否有 @LoginRequired 注解 决定是否需要登录
//            .excludePathPatterns("/**/*.html",            //html静态资源
//            "/**/*.js",              //js静态资源
//            "/**/*.css",             //css静态资源
//            "/**/*.woff",
//            "/**/*.ttf",
//            "/swagger-ui.html",
//                    "/logout",
//                    "/**/*error"
//            );
//
//        //注册TestInterceptor拦截器
////        InterceptorRegistration registration = registry.addInterceptor(jwtInterceptor());
////        registration.addPathPatterns("/**");                      //添加拦截路径
////        registration.excludePathPatterns(                         //添加不拦截路径
////            "/**/*.html",            //html静态资源
////            "/**/*.js",              //js静态资源
////            "/**/*.css",             //css静态资源
////            "/**/*.woff",
////            "/**/*.ttf",
////            "/swagger-ui.html"
////        );
//    }
//    @Bean
//    public JwtInterceptor jwtInterceptor() {
//        return new JwtInterceptor();
//    }
//}