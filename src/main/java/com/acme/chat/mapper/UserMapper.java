package com.acme.chat.mapper;

import com.acme.chat.po.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @Description TODO
 * @Author wk.
 * @Date 2023/9/7 23:17
 */
@Mapper
public interface UserMapper {

    User getUserByUserName(String userName);

    List<User> getAllUser();
}
