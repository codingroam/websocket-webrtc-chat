DROP TABLE websocket_chatroom.user;
CREATE TABLE websocket_chatroom.user (id int NOT NULL AUTO_INCREMENT, username varchar(50) NOT NULL, password varchar(50) NOT NULL, nickname varchar(50), picture blob, signature varchar(100), addr varchar(100), PRIMARY KEY (id), CONSTRAINT username UNIQUE (username)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE=utf8mb4_general_ci;
INSERT INTO websocket_chatroom.user (id, username, password, nickname, picture, signature, addr) VALUES (1, '张无忌', '1234', '小钻风', null, null, null);
INSERT INTO websocket_chatroom.user (id, username, password, nickname, picture, signature, addr) VALUES (2, '罗罗亚索隆', '1234', '汤姆', null, null, null);
INSERT INTO websocket_chatroom.user (id, username, password, nickname, picture, signature, addr) VALUES (3, '剑神卓不凡', '1234', '约汉', null, null, null);
INSERT INTO websocket_chatroom.user (id, username, password, nickname, picture, signature, addr) VALUES (4, '赵敏', '1234', '敏敏', null, null, null);
INSERT INTO websocket_chatroom.user (id, username, password, nickname, picture, signature, addr) VALUES (5, '爱德华纽盖特', '1234', '爱德华', null, null, null);
INSERT INTO websocket_chatroom.user (id, username, password, nickname, picture, signature, addr) VALUES (6, '路飞', '1234', null, null, null, null);
INSERT INTO websocket_chatroom.user (id, username, password, nickname, picture, signature, addr) VALUES (7, '小明', '1234', null, null, null, null);
