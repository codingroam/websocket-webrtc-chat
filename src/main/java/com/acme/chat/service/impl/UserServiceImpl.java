package com.acme.chat.service.impl;

import com.acme.chat.chatenum.ErrorEnum;
import com.acme.chat.exception.BusinessException;
import com.acme.chat.mapper.UserMapper;
import com.acme.chat.po.User;
import com.acme.chat.service.UserService;
import com.acme.chat.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @Description TODO
 * @Author wk.
 * @Date 2023/9/7 23:41
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User checkUserLoginByUserName(String userName, String password) {
        User user = userMapper.getUserByUserName(userName);
        if(user == null){
            throw new BusinessException(ErrorEnum.NO_USER);
        }
        if(!password.equals(user.getPassWord())){
            throw new BusinessException(ErrorEnum.CHECK_USER_FAIL);
        }
        return user;
    }
    @Override
    public List<String> getAllUserName(){
        List<User> allUser = userMapper.getAllUser();
        List<String> userNames = allUser.stream().map(User::getUserName).collect(Collectors.toList());
        return userNames;
    }

    @Override
    public List<UserVO> getAllUserWithState(Set<String> onLineUsers) {
        List<String> allUserName = getAllUserName();
        List<String> offlineUsers = allUserName.stream().filter(u -> !onLineUsers.contains(u)).collect(Collectors.toList());
        ArrayList<UserVO> allUsers = new ArrayList<>();
        if(onLineUsers != null){
            for(String userName : onLineUsers){
                UserVO userVO = new UserVO();
                userVO.setUserName(userName);
                userVO.setOnLineState(true);
                allUsers.add(userVO);
            }
        }

        if(offlineUsers != null){
            for(String userName : offlineUsers){
                UserVO userVO = new UserVO();
                userVO.setUserName(userName);
                userVO.setOnLineState(false);
                allUsers.add(userVO);
            }
        }


        return allUsers;
    }
}
