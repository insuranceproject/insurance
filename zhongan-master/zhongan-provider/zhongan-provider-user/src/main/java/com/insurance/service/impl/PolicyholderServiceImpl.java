package com.insurance.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.AuthenticationMapper;
import com.insurance.mapper.PolicyholderMapper;
import com.insurance.pojo.Policyholder;
import com.insurance.service.PolicyholderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PolicyholderServiceImpl extends ServiceImpl<PolicyholderMapper, Policyholder> implements PolicyholderService {
    @Autowired
    private PolicyholderMapper policyholderMapper;
}
