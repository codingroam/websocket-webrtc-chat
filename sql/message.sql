DROP TABLE websocket_chatroom.offmessage_record;
CREATE TABLE websocket_chatroom.offmessage_record (id int NOT NULL AUTO_INCREMENT, from_user varchar(50) NOT NULL, to_user varchar(50) NOT NULL, DATE datetime NOT NULL, state int(2) NOT NULL, content varchar(300) NOT NULL, PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE=utf8mb4_general_ci;
