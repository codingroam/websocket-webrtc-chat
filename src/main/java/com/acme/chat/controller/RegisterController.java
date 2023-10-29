package com.acme.chat.controller;

import com.acme.chat.base.BusinessResult;
import com.acme.chat.annotation.PassToken;
import com.acme.chat.po.User;
import com.acme.chat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;


@Controller
public class RegisterController {
	@Autowired
	UserService userService;

	
	@RequestMapping("/checkUserName")
	@ResponseBody
	@PassToken
	public Map checkUserName(String username){
		User user = userService.getUserByName(username);
		Map map = new HashMap();
		if (user == null) {
			map.put("valid", true);
		}else{
			map.put("valid", false);
		}
		return map;

	}

	@RequestMapping("/checkTel")
	@ResponseBody
	@PassToken
	public Map checkTel(String username){
		User user = userService.getUserByName(username);
		Map map = new HashMap();
		if (user == null) {
			map.put("valid", true);
		}else{
			map.put("valid", false);
		}
		return map;

	}

	@RequestMapping("/registerUser")
	@ResponseBody
	@PassToken
	public BusinessResult login(@RequestParam("username") String userName,@RequestParam("password") String passWord,@RequestParam("nickname") String nickName,@RequestParam("tel") String tel){
		User user = new User();
		user.setNickName(nickName);
		user.setUserName(userName);
		user.setPassWord(passWord);
		user.setTel(tel);
		userService.registerUser(user);

		return new BusinessResult();

	}

	@PassToken
	@RequestMapping("/register")
	public String register(){
		return "register";
	}



	


  }
