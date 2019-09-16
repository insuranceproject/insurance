package com.insurance.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.AuthenticationMapper;
import com.insurance.pojo.Authentication;
import com.insurance.service.AuthenticationService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AuthenticationServiceImpl extends ServiceImpl<AuthenticationMapper,Authentication> implements AuthenticationService {


}
