# websocket-webrtc-chat(飞鱼chat 音视频通话聊天)
  + WebSocket是一种在单个TCP连接上进行全双工通信的协议，这使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据，相对于传统的HTTP协议有很大进步。
  + WebRTC (Web Real-Time Communications) 是一项实时通讯技术，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流和（或）音频流或者其他任意数据的传输。
  + 本项目基于SpringBoot，使用websocket和webrtc技术，实现一个具有文字聊天(包括表情)，音视频通话，文件/图片发送接收，离线消息和简易搜索功能的项目。项目主要功能特性如下:

1. 采用springboot+websocket+webrtc+bootstrap5+H5+JQuery3.3+mysql5.7.2实现,运行项目前只需安装mysql并将项目中/sql/all.sql在数据库执行即可。

2. 项目具有文字聊天(包括表情)，音视频通话，文件/图片发送接收，离线消息和简易搜索功能

3. 采用webrtc技术实现一对一视频聊天功能，使用websocket+springboot实现webrtc视频通话信令服务器，部署到公网实现公网互联需要部署stun服务器，推荐Coturn

4. 根据websocket功能特性，服务端可自动向前端推送消息，用户上下线等，实时刷新数据。

5. 消息可实现在线发送和离线发送，离线消息在用户登录后可见，用户未读消息数量提示.

6. 使用ssl证书实现https安全访问(webrtc访问浏览器调用摄像头、麦克风要求使用https协议)。

7. 项目启动后登录地址为https://localhost:8089 用户：孙悟空 密码：1234


  效果图：
  移动端效果图
  pc端效果图
![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/pc%E7%AB%AF%E4%B8%BB%E7%95%8C%E9%9D%A2.png)
![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/%E7%99%BB%E5%BD%95.png)
![](https://bucket-typora-kw.oss-cn-beijing.aliyuncs.com/typora-image/%E6%B3%A8%E5%86%8C.png)
演示视频地址：
【飞鱼聊天chat 音视频通话 springboot+websocket+webrtc+bootstrap5实现仿微信QQ】 https://www.bilibili.com/video/BV14c411S7w1/?share_source=copy_web&vd_source=b3acfcfa7fd3206c27f10c8cc238ac27
=======






