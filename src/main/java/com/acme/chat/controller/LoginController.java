package com.acme.chat.controller;

import com.acme.chat.base.BusinessResult;
import com.acme.chat.annotation.LoginToken;
import com.acme.chat.annotation.PassToken;
import com.acme.chat.po.User;
import com.acme.chat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;


@Controller
public class LoginController {
	@Autowired
	UserService userService;


	/**
	 * 用户名密码登录
	 * @param userName
	 * @param passWord
	 * @param httpSession
	 * @return
	 */
	@RequestMapping("/login")
	@ResponseBody
	@LoginToken
	public BusinessResult login(@RequestParam("username") String userName,@RequestParam("password") String passWord,HttpSession httpSession){
		User user = userService.checkUserLoginByUserName(userName, passWord);
		BusinessResult<User> businessResult = new BusinessResult<>();
		businessResult.setData(user);
		return businessResult;
	}

	/**
	 * 快速登录，手机号+验证码实现一键注册+登录
	 * @param tel
	 * @param checkNum
	 * @param httpSession
	 * @return
	 */
	@RequestMapping("/fastlogin")
	@ResponseBody
	@LoginToken
	public BusinessResult fastlogin(@RequestParam("tel") String tel,@RequestParam("checkNum") String checkNum,HttpSession httpSession){
		User user = userService.getUserByTel(tel);
		BusinessResult<User> businessResult = new BusinessResult<>();
		businessResult.setData(user);
		return businessResult;
	}

	/**
	 * 获取验证码
	 * @param tel
	 * @return
	 */
	@RequestMapping("/getcheckcode")
	@ResponseBody
	@LoginToken
	public BusinessResult fastlogin(@RequestParam("tel") String tel){
		return userService.generateAndSendCode(tel);
	}

	@PassToken
	@RequestMapping("/chatroom")
	public String login(){
		return "chatmain";
	}


	
	@RequestMapping("/logout")
	public String logout(@RequestParam("username") String userName,HttpSession httpSession){
		userService.userLogOut(userName);
		return "index";
	}

  }
