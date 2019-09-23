package com.insurance.controller;


import com.github.pagehelper.PageInfo;
import com.insurance.mapper.PolicyMapper;
import com.insurance.pojo.Policy;
import com.insurance.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/Policy")
public class PolicyController {

    @Autowired
    private PolicyService policyService;
    @Autowired
    private PolicyMapper policyMapper;

    @PostMapping("/selectPolicyPage")
    public PageInfo<Policy> PolicyPage(Integer pageNo, Integer PageSize, String number){
        PageInfo<Policy> policyPageInfo = policyService.selectPagePolicy(pageNo, PageSize, number);
        return policyPageInfo;
    }

    @PostMapping("/zz")
    public Policy PolicyPage(){
        return policyMapper.selectById(1);
    }

    /**
     * 根据用户id查询保单
     * @param userId
     * @return
     */
    @PostMapping("/getPolicyByUserId")
    public List<Policy> getPolicyByUserId(Integer userId){
        return policyService.getPolicyByUserId(userId);
    }
}
