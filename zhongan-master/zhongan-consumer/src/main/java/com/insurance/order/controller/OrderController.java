package com.insurance.order.controller;

import com.github.pagehelper.PageInfo;
import com.insurance.order.client.OrderClient;
import com.insurance.pojo.User;
import com.insurance.pojo.UserPolicydetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.Map;

@RestController
public class OrderController {

    @Autowired
    private OrderClient orderClient;

    /**
     * 根据条件分页查询订单
     * @param session
     * @param pageNo
     * @param map
     * @return
     */
    @RequestMapping(value = "/consumer/order/selectOreder")
    public PageInfo<UserPolicydetail> selectOreder(HttpSession session,Integer pageNo,Map<String, Object> map){
        Integer pageSize = 1;
        User user = (User)session.getAttribute("user");
        map.put("user_id",user.getUserId());
        System.out.println(orderClient.selectOrder(pageNo,pageSize,map));
        System.out.println(orderClient.selectOrder(pageNo,pageSize,map).getList());
        return orderClient.selectOrder(pageNo,pageSize,map);
    }

    public String createOrder(HttpSession session){
        Object user = session.getAttribute("user");
        if (user == null ||user == ""){

        }
    }
}
