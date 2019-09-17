package com.insurance.controller;


import com.github.pagehelper.PageInfo;
import com.insurance.mapper.PolicyMapper;
import com.insurance.pojo.Policy;
import com.insurance.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/Policy")
public class PolicyController {

    @Autowired
    private PolicyService policyService;

    @RequestMapping("/selectPolicyPage")
    public PageInfo<Policy> PolicyPage(Integer pageNo, Integer PageSize, String number){
        PageInfo<Policy> policyPageInfo = policyService.selectPagePolicy(pageNo, PageSize, number);
        System.out.println(policyPageInfo);
        return policyPageInfo;
    }

}
