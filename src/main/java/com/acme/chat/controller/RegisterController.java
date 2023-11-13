package com.acme.chat.controller;

import cn.hutool.core.bean.BeanUtil;
import com.acme.chat.base.BusinessResult;
import com.acme.chat.annotation.PassToken;
import com.acme.chat.po.User;
import com.acme.chat.service.UserService;
import com.acme.chat.utils.FileUtils;
import com.acme.chat.vo.UserVO;
import com.alibaba.fastjson.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;


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

//	@RequestMapping("/registerUser")
//	@ResponseBody
//	@PassToken
//	public BusinessResult login(@RequestParam("username") String userName,@RequestParam("password") String passWord,@RequestParam("nickname") String nickName,@RequestParam("tel") String tel){
//		User user = new User();
//		user.setNickName(nickName);
//		user.setUserName(userName);
//		user.setPassWord(passWord);
//		user.setTel(tel);
//		userService.registerUser(user);
//
//		return new BusinessResult();
//
//	}


	@RequestMapping("/registerUser")
	@ResponseBody
	@PassToken
	public BusinessResult login(@RequestParam(value = "file",required = false) MultipartFile file, @RequestParam String userVOStr){
//		User user = new User();
//		user.setNickName(nickName);
//		user.setUserName(userName);
//		user.setPassWord(passWord);
//		user.setTel(tel);
//		userService.registerUser(user);
		UserVO userVO = JSON.parseObject(userVOStr, UserVO.class);

		if(file != null){
			String orgFileName = file.getOriginalFilename();
			String ext = orgFileName.substring(orgFileName.lastIndexOf(".")+1, orgFileName.length());
			String uuid = UUID.randomUUID().toString();
			String fileName = uuid + "." + ext;
			String imagPath = FileUtils.rootFilePath + File.separator + "head" + File.separator + fileName;
			FileUtils.uploadFile(file,imagPath);
			userVO.setPicture(fileName);
		}
		User user = BeanUtil.copyProperties(userVO, User.class);
		userService.registerUser(user);


		return new BusinessResult();

	}

	@PassToken
	@RequestMapping("/register")
	public String register(){
		return "register";
	}



	


  }
