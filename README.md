# websocket-chat(飞鱼chat)
  WebSocket是一种在单个TCP连接上进行全双工通信的协议，这使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据，相对于传统的HTTP协议有很大进步。本项目基于SpringBoot，websocket和webrtc，实现一个简易网页聊天，视频通话，离线消息和搜索功能的项目。项目主要功能特性如下:

1. 采用springboot+websocket+webrtc+bootstrap5+H5+JQuery3.3实现，可自适应PC端和移动端，仿QQ界面UI配色

2. 简单的聊天功能，登录后可对用户列表中的用户发送消息，用户列表显示离线和在线用户。简单的搜索功能，能根据文字，字母，拼音搜索用户和聊天记录(暂不完善);

3. 利用webrtc实现一对一视频聊天功能，使用websocket+springboot实现webrtc视频通话信令服务器

4. 消息可实现在线发送和离线发送，离线消息在用户登录后可见，用户未读消息数量提示和发送表情功能;

5. websocket断开、故障室自动重连机制。移动端监听页面进入后台或锁屏断开连接时自动重连机制
5. 根据websocket功能特性，服务端可自动向前端推送消息，用户上下线等，实时刷新数据。
5. 使用ssl证书实现https安全登录。
5. 项目启动后登录地址为https://localhost:8089 用户：路飞 密码：1234

  效果图：
  移动端效果图
![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/%E7%A7%BB%E5%8A%A8%E7%AB%AF.png)
  pc端效果图
![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/pc%E7%AB%AF.png)

视频聊天：

![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/%E8%A7%86%E9%A2%911.png)

![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/%E8%A7%86%E9%A2%912.png)

登录界面：

![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/%E7%99%BB%E5%BD%95%E9%A1%B5.png)





