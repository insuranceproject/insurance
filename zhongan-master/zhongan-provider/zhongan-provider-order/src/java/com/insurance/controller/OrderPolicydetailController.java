package com.insurance.controller;

import com.github.pagehelper.PageInfo;
import com.insurance.pojo.UserPolicydetail;
import com.insurance.service.OrderPolicydetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class OrderPolicydetailController {

    @Autowired
    private OrderPolicydetailService orderPolicydetailService;

    /**
     * 根据条件分页查询订单
     * @param map
     * @return
     */
    @GetMapping("/order/selectOrder")
    public PageInfo<UserPolicydetail> selectOrder(@RequestParam("pageNo") Integer pageNo,@RequestParam("pageSize") Integer pageSize,@RequestParam Map<String,Object> map){
        return orderPolicydetailService.selectOrder(pageNo,pageSize,map);
    }
}
