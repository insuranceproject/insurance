package com.insurance.order.client;

import com.github.pagehelper.PageInfo;
import com.insurance.pojo.Policy;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient("provider-order")
public interface OrderClient {
    @RequestMapping("/Policy/selectPolicyPage")
    public String PolicyPage(@RequestParam("pageNo")Integer pageNo, @RequestParam("pageSize")Integer PageSize, @RequestParam("number")String number);
}
