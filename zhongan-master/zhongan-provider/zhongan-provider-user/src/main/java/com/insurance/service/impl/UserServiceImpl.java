package com.insurance.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.UserMapper;
import com.insurance.pojo.User;
import com.insurance.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User getUser(User user) {
        return userMapper.getUser(user);
    }
}
