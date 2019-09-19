package com.insurance.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.api.user.PolicyholderControllerApi;
import com.insurance.pojo.Policyholder;
import com.insurance.pojo.User;
import com.insurance.service.PolicyholderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/policyholder")
public class PolicyholderController implements PolicyholderControllerApi {

    @Resource
    private PolicyholderService policyholderService;


    /**
     * 根据用户id查询投保人
     * @param user
     * @return
     */
    @Override
    @PostMapping("/getPolicyholderByUserId")
    public List<Policyholder> getPolicyholderByUserId(User user) {
        return policyholderService.list(new QueryWrapper<Policyholder>().eq("user_Phonenumber",user.getUserPhonenumber()));
    }
}
