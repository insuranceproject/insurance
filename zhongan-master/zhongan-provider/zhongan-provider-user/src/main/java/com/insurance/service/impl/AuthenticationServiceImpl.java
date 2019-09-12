package com.insurance.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.AuthenticationMapper;
import com.insurance.mapper.UserMapper;
import com.insurance.pojo.Authentication;
import com.insurance.service.AuthenticationService;
import com.insurance.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

public class AuthenticationServiceImpl extends ServiceImpl<AuthenticationMapper,Authentication> implements AuthenticationService {
    @Autowired
    private AuthenticationMapper authenticationMapper;
}
