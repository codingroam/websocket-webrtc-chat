# websocket-webrtc-chat(飞鱼chat 音视频通话)
  WebSocket是一种在单个TCP连接上进行全双工通信的协议，这使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据，相对于传统的HTTP协议有很大进步。本项目基于SpringBoot，websocket和webrtc，实现一个简易网页聊天，视频通话，离线消息和搜索功能的项目。项目主要功能特性如下:

1. 采用springboot+websocket+webrtc+bootstrap5+H5+JQuery3.3实现，可自适应PC端和移动端，仿QQ界面UI配色

2. 简单的聊天功能，登录后可对用户列表中的用户发送消息，用户列表显示离线和在线用户。简单的搜索功能，能根据文字，字母，拼音搜索用户和聊天记录(暂不完善);

3. 利用webrtc实现一对一视频聊天功能，使用websocket+springboot实现webrtc视频通话信令服务器

4. 消息可实现在线发送和离线发送，离线消息在用户登录后可见，用户未读消息数量提示和发送表情功能;

5. 发送图片和文件功能，并显示进度条
6. 根据websocket功能特性，服务端可自动向前端推送消息，用户上下线等，实时刷新数据。
7. 使用ssl证书实现https安全登录。
8. 项目启动后登录地址为https://localhost:8089 用户：路飞 密码：1234


  效果图：
  移动端效果图
  pc端效果图
![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/pc%E7%AB%AF%E4%B8%BB%E7%95%8C%E9%9D%A2.png)
![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/%E7%99%BB%E5%BD%95.png)
![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/%E6%B3%A8%E5%86%8C.png)
演示视频地址：
【飞鱼聊天chat 音视频通话 springboot+websocket+webrtc+bootstrap5实现仿微信QQ】 https://www.bilibili.com/video/BV14c411S7w1/?share_source=copy_web&vd_source=b3acfcfa7fd3206c27f10c8cc238ac27
=======






