package com.acme.chat.service;

import com.acme.chat.base.BusinessResult;
import com.acme.chat.po.User;
import com.acme.chat.vo.UserVO;

import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * @Description TODO
 * @Author wk.
 * @Date 2023/9/7 23:37
 */

public interface UserService {

    /**
     * 用户登录检查
     * @param userName
     * @param password
     * @return
     */
    User checkUserLoginByUserName(String userName, String password);

    /**
     * 获取所有用户
     * @return
     */
    Map<String,List<User>> getAllUserMap();

    /**
     * 获取所有用户(带用户状态)
     * @param onLineUsers
     * @return
     */
    List<UserVO> getAllUserWithState(Set<String> onLineUsers);

    User getUserByName(String username);
    User getUserByTel(String tel);

    void userLogOut(String username);

    void registerUser(User user);

    BusinessResult generateAndSendCode(String tel);
}
