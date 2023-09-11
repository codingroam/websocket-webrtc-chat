package com.acme.chat.controller;

import com.acme.chat.base.BusinessResult;
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
	public BusinessResult login(@RequestParam("username") String userName,@RequestParam("password") String passWord,HttpSession httpSession){
		User user = userService.checkUserLoginByUserName(userName, passWord);
		BusinessResult<User> businessResult = new BusinessResult<>();
		businessResult.setData(user);
		return businessResult;
	}

	@RequestMapping("/chatroom")
	public String login(){
		return "chatroom";
	}

	
	@RequestMapping("/logout")
	public String logout(HttpSession httpSession){
		return "index";
	}

  }
