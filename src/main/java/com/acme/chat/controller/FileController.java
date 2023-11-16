package com.acme.chat.controller;

import cn.hutool.core.bean.BeanUtil;
import com.acme.chat.annotation.LoginToken;
import com.acme.chat.annotation.PassToken;
import com.acme.chat.base.BusinessResult;
import com.acme.chat.base.Message;
import com.acme.chat.po.User;
import com.acme.chat.service.UserService;
import com.acme.chat.utils.FileUtils;
import com.acme.chat.vo.UserVO;
import com.alibaba.fastjson.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;


@Controller
public class FileController {
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



	@RequestMapping("/uploadFiles")
	@ResponseBody
	@PassToken
	public BusinessResult uploadFiles(@RequestParam List<MultipartFile> files, @RequestParam String msg){
//		User user = new User();
//		user.setNickName(nickName);
//		user.setUserName(userName);
//		user.setPassWord(passWord);
//		user.setTel(tel);
//		userService.registerUser(user);
		Message message = JSON.parseObject(msg, Message.class);

//		if(file != null){
//			String orgFileName = file.getOriginalFilename();
//			String ext = orgFileName.substring(orgFileName.lastIndexOf(".")+1, orgFileName.length());
//			String uuid = UUID.randomUUID().toString();
//			String fileName = uuid + "." + ext;
//			String imagPath = FileUtils.rootFilePath + File.separator + "head" + File.separator + fileName;
//			FileUtils.uploadFile(file,imagPath);
//			userVO.setPicture(fileName);
//		}
//		User user = BeanUtil.copyProperties(userVO, User.class);
//		userService.registerUser(user);

		HashMap<String, String> fileInfoMap = new HashMap<>();
		if(files != null&& files.size() > 0){
			for(MultipartFile multipartFile : files){
				String originalFilename = multipartFile.getOriginalFilename();
				String filePath = FileUtils.rootFilePath + File.separator + "upload" + File.separator + originalFilename;
				File file = new File(filePath);
				if(file.exists()){
					String name = originalFilename.substring(0, originalFilename.lastIndexOf("."));
					name += "(1)";
					String ext = originalFilename.substring(originalFilename.lastIndexOf(".")+1, originalFilename.length());
					filePath = FileUtils.rootFilePath + File.separator + "upload" + File.separator + name + "." + ext;
				}

				FileUtils.uploadFile(multipartFile,filePath);
				fileInfoMap.put(originalFilename,filePath);

			}
		}
		fileInfoMap.put("msg",msg);



		return new BusinessResult(fileInfoMap);

	}



  }
