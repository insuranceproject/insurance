package com.insurance.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.api.order.PolicydetailControllerApi;
import com.insurance.pojo.Policydetail;
import com.insurance.pojo.Policyholder;
import com.insurance.service.PolicydetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * 保单详情生产者controller
 */
@RestController
@RequestMapping("/policydetail")
public class PolicydetailController implements PolicydetailControllerApi {
    @Resource
    private PolicydetailService policydetailService;

    /**
     * 根据保单id查询保单详情
     * @param policyId
     * @return
     */
    @PostMapping("getPolicydetailByPolicyId")
    public List<Policydetail> getPolicydetailByPolicyId(Integer policyId){
        return policydetailService.list(new QueryWrapper<Policydetail>().eq("policy_id",policyId));
    }
}
