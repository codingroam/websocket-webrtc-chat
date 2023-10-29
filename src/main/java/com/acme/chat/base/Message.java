package com.acme.chat.base;

import java.util.Date;
import java.util.Map;

import com.alibaba.fastjson.annotation.JSONField;
public class Message<T> {

	//发送者name
	public String from;
	//接收者name
	public String to;
	//发送的内容
	public T content;
	//内容类型
	public String contentType;

	public String sdp;

	public Map iceCandidate;
	//发送时间
	@JSONField(format="yyyy-MM-dd HH:mm:ss")
	public Date date;

	public Message(String from, String to, T content, String contentType, Date date) {
		this.from = from;
		this.to = to;
		this.content = content;
		this.contentType = contentType;
		this.date = date;
	}

	public Message() {
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public T getContent() {
		return content;
	}

	public void setContent(T content) {
		this.content = content;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}


	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getSdp() {
		return sdp;
	}

	public void setSdp(String sdp) {
		this.sdp = sdp;
	}

	public Map getIceCandidate() {
		return iceCandidate;
	}

	public void setIceCandidate(Map iceCandidate) {
		this.iceCandidate = iceCandidate;
	}
}
