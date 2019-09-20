package com.insurance.order.client;

import com.insurance.pojo.Policy;
import com.insurance.pojo.Policydetail;
import com.insurance.pojo.UserPolicydetail;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@FeignClient("PROVIDER-ORDER")
public interface OrderClient {

    /**
     * 根据用户id查询保单
     * @param userId
     * @return
     */
    @PostMapping("/policy/getPolicyByUserId")
    public List<Policy> getPolicyByUserId(@RequestParam("userId") Integer userId);

    /**
     * 根据保单id查询保单详情
     * @param policyId
     * @return
     */
    @PostMapping("/policydetail/getPolicydetailByPolicyId")
    public List<Policydetail> getPolicydetailByPolicyId(@RequestParam("policyId") Integer policyId);

    /**
     * 根据条件分页查询订单
     * @param pageNo
     * @param pageSize
     * @param map
     * @return
     */
    @PostMapping("/order/selectOrder")
    public PageInfo<UserPolicydetail> selectOrder(@RequestParam("pageNo") Integer pageNo, @RequestParam("pageSize") Integer pageSize, @RequestParam("map") Map<String, Object> map);
}
