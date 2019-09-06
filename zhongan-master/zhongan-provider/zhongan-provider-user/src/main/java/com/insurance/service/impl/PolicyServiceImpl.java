package com.insurance.service.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.PolicyMapper;
import com.insurance.pojo.Policy;
import com.insurance.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PolicyServiceImpl extends ServiceImpl<PolicyMapper, Policy> implements PolicyService {


    @Autowired
    private PolicyMapper policyMapper;


    @Override
    public IPage<Policy> selectPagePolicy(Page<Policy> page, Integer number) {
        return policyMapper.selectPagePolicy(page,number);
    }
}
