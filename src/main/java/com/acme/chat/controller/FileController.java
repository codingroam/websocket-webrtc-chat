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
import java.util.*;


@Controller
public class FileController {
	@Autowired
	UserService userService;

	
	@RequestMapping("/file/{type}/{name}")
	@ResponseBody
	@LoginToken
	public void login(@PathVariable("type") String type, @PathVariable("name") String name, HttpServletResponse response) throws IOException {
		//response.setContentType("image/png,image/jpeg");// 设置MIME类型，也就是响应类型
		//response.setContentType("blob");
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
		Message message = JSON.parseObject(msg, Message.class);
		Map<String,Object> resultMap = new HashMap<>();
		if(files != null&& files.size() > 0){
			HashMap<String, String> fileInfoMap = new HashMap<>();
			for(MultipartFile multipartFile : files){
				String originalFilename = multipartFile.getOriginalFilename();
				String filePath = FileUtils.rootFilePath + File.separator + "upload" + File.separator + originalFilename;
				File file = new File(filePath);
				String finalFileName = null;
				if(file.exists()){
					String name = originalFilename.substring(0, originalFilename.lastIndexOf("."));
					name += "(1)";
					String ext = originalFilename.substring(originalFilename.lastIndexOf(".")+1, originalFilename.length());
					finalFileName = name + "." + ext;
					filePath = FileUtils.rootFilePath + File.separator + "upload" + File.separator + finalFileName;
				}else{
					finalFileName  = originalFilename;
				}

				FileUtils.uploadFile(multipartFile,filePath);
				fileInfoMap.put(originalFilename,finalFileName);
			}
			resultMap.put("fileInfoMap",fileInfoMap);

		}
		resultMap.put("msg",msg);

		return new BusinessResult(resultMap);

	}



  }
