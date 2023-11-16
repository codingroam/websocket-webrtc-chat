CREATE DATABASE IF NOT EXISTS websocket_chatroom;
DROP TABLE websocket_chatroom.offmessage_record;
CREATE TABLE websocket_chatroom.offmessage_record (id int NOT NULL AUTO_INCREMENT, from_user varchar(50) NOT NULL, to_user varchar(50) NOT NULL, DATE datetime NOT NULL, state int(2) NOT NULL, content varchar(300) NOT NULL, content_type varchar(30) NOT NULL,PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE=utf8mb4_general_ci;
DROP TABLE websocket_chatroom.user;
CREATE TABLE websocket_chatroom.user (id int NOT NULL AUTO_INCREMENT, username varchar(50) NOT NULL, password varchar(50) NOT NULL, nickname varchar(50), picture varchar(50), signature varchar(100), addr varchar(100), tel varchar(30) NOT NULL, PRIMARY KEY (id), CONSTRAINT username UNIQUE (username)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE=utf8mb4_general_ci;
INSERT INTO websocket_chatroom.user (id, username, password, nickname, picture, signature, addr, tel) VALUES
(1, '张无忌', '81DC9BDB52D04DC20036DBD8313ED055', '小钻风', null, null, null, ''),
(2, '索隆', '81DC9BDB52D04DC20036DBD8313ED055', '汤姆', null, null, null, ''),
(3, '剑神卓不凡', '81DC9BDB52D04DC20036DBD8313ED055', '约汉', null, null, null, ''),
(4, '赵敏', '81DC9BDB52D04DC20036DBD8313ED055', '敏敏', null, null, null, ''),
(5, '爱德华纽盖特', '81DC9BDB52D04DC20036DBD8313ED055', '爱德华', null, null, null, ''),
(6, '路飞', '81DC9BDB52D04DC20036DBD8313ED055', null, null, null, null, '15517376162'),
(7, '小明', '81DC9BDB52D04DC20036DBD8313ED055', null, null, null, null, ''),
(8, 'ddd', 'e10adc3949ba59abbe56e057f20f883e', 'dd', null, null, null, ''),
(9, 'uu', 'e10adc3949ba59abbe56e057f20f883e', 'uu', null, null, null, ''),
(10, 'yy', 'ae5eb824ef87499f644c3f11a7176157', 'yy', null, null, null, '');
INSERT INTO websocket_chatroom.user (id, username, password, nickname, picture, signature, addr, tel) VALUES
(11, 'oo', 'e110fb45bc4f7cc5d367b06bfbc8e5c3', 'tt', null, null, null, ''),
(12, 'rr', '9996535e07258a7bbfd8b132435c5962', 'rr', null, null, null, ''),
(13, 'ytyt', 'b66dc44cd9882859d84670604ae276e6', 'yy', null, null, null, ''),
(14, 'mm', '7bccfde7714a1ebadf06c5f4cea752c1', 'mm', null, null, null, '');