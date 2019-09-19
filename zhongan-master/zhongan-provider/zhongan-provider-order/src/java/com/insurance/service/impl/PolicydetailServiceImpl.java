package com.insurance.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.PolicyMapper;
import com.insurance.mapper.PolicydetailMapper;
import com.insurance.pojo.Policydetail;
import com.insurance.service.PolicyService;
import com.insurance.service.PolicydetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PolicydetailServiceImpl extends ServiceImpl<PolicydetailMapper, Policydetail> implements PolicydetailService {
    @Autowired
    private PolicydetailMapper policydetailMapper;
}
