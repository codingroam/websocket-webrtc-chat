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

	
	@RequestMapping("/login")
	@ResponseBody
	@LoginToken
	public BusinessResult login(@RequestParam("username") String userName,@RequestParam("password") String passWord,HttpSession httpSession){
		User user = userService.checkUserLoginByUserName(userName, passWord);
		BusinessResult<User> businessResult = new BusinessResult<>();
		businessResult.setData(user);
		return businessResult;
	}

	@RequestMapping("/fastlogin")
	@ResponseBody
	@LoginToken
	public BusinessResult fastlogin(@RequestParam("tel") String tel,@RequestParam("checkNum") String checkNum,HttpSession httpSession){
		User user = userService.getUserByTel(tel);
		BusinessResult<User> businessResult = new BusinessResult<>();
		businessResult.setData(user);
		return businessResult;
	}

	@RequestMapping("/getcheckcode")
	@ResponseBody
	@LoginToken
	public BusinessResult fastlogin(@RequestParam("tel") String tel){
		return userService.generateAndSendCode(tel);
	}

	@PassToken
	@RequestMapping("/chatroom")
	public String login(){
		return "chatroom";
	}

	@PassToken
	@RequestMapping("/videocall")
	public String videocall(){
		return "videocall";
	}

	
	@RequestMapping("/logout")
	public String logout(@RequestParam("username") String userName,HttpSession httpSession){
		userService.userLogOut(userName);
		return "index";
	}

  }
