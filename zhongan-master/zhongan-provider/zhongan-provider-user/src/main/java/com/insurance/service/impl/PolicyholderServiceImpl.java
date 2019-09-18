package com.insurance.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.AuthenticationMapper;
import com.insurance.mapper.PolicyholderMapper;
import com.insurance.pojo.Policyholder;
import com.insurance.service.PolicyholderService;
import org.springframework.beans.factory.annotation.Autowired;

public class PolicyholderServiceImpl extends ServiceImpl<PolicyholderMapper, Policyholder> implements PolicyholderService {
    @Autowired
    private PolicyholderMapper policyholderMapper;
}
