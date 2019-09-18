package com.insurance.order.client;

import com.insurance.pojo.Policy;
import com.insurance.pojo.Policydetail;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient("provider-order")
public interface OrderClient {



    /**
     * 根据用户id查询保单
     * @param userId
     * @return
     */
    @PostMapping("/Policy/getPolicyByUserId")
    public List<Policy> getPolicyByUserId(@RequestBody Integer userId);

    /**
     * 根据保单id查询保单详情
     * @param policyId
     * @return
     */
    @PostMapping("/Policydetail/getPolicydetailByPolicyId")
    public List<Policydetail> getPolicydetailByPolicyId(Integer policyId);
}
