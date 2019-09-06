package com.insurance.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
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

    @PostMapping("/selectPolicyPage")
    public IPage<Policy> PolicyPage(int pageNo, int pageSize, Integer number){
        Page<Policy> page=new Page<>(pageNo,pageSize);
        QueryWrapper<Policy> queryWrapper = new QueryWrapper<>();
        /*if (number!=0){
            queryWrapper.eq("policy_number",number);
        }*/
        IPage<Policy> PolicyPage=policyService.selectPagePolicy(page,number);

        return PolicyPage;
    }
}
