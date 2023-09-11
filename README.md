# wensocket-chat(飞鱼chat)
  WebSocket是一种在单个TCP连接上进行全双工通信的协议，这使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据，相对于传统的HTTP协议有很大进步。本项目基于SpringBoot，整合websocket协议，实现一个简易网页聊天项目。主要特性如下:
  
  1.本项目采用springboot+bootstrap5+H5+JQuery3.3实现，可自适应PC端和移动端
  
  2.包含简单的聊天功能，登录后可对用户列表中的用户发送消息，用户列表显示离线和在线用户;
  
  3.消息可实现在线发送和离线发送，离线消息在用户登录后可见;
  
  4.用户未读消息数量提示和发送表情功能

  5.websocket断开、故障室自动重连机制。移动端监听页面进入后台或锁屏断开连接时自动重连机制
  
  6.根据websocket功能特性，服务端可自动向前端推送消息，用户上下线等，实时刷新数据。
  
  7.项目启动后登录地址为localhost:8086 用户：路飞 密码：1234
  
  效果图：
  移动端效果图
![pc端效果](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/7.jpg)
  pc端效果图
![登录](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/1.jpg)

![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/2.jpg)
   
![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/3.jpg)

![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/4.jpg)

![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/5.jpg)

![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/6.jpg)

