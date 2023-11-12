package com.acme.chat.controller;

import com.acme.chat.annotation.LoginToken;
import com.acme.chat.annotation.PassToken;
import com.acme.chat.base.BusinessResult;
import com.acme.chat.po.User;
import com.acme.chat.service.UserService;
import com.acme.chat.utils.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;


@Controller
public class ImageController {
	@Autowired
	UserService userService;

	
	@RequestMapping("/imag/{type}/{name}")
	@ResponseBody
	@LoginToken
	public void login(@PathVariable("type") String type, @PathVariable("name") String name, HttpServletResponse response) throws IOException {
		response.setContentType("image/png,image/jpeg");// 设置MIME类型，也就是响应类型
		ServletOutputStream out = response.getOutputStream();
		String filePath = FileUtils.rootFilePath + File.separator + type +File.separator + name;
		File file = new File(filePath);
		InputStream in = new FileInputStream(file);
		int available = in.available();
		byte[] bytes = new byte[available];
		in.read(bytes);
		out.write(bytes);
		in.close();
		out.close();

	}



  }
