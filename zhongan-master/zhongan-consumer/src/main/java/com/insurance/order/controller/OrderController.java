package com.insurance.order.controller;

import com.github.pagehelper.PageInfo;
import com.insurance.order.client.OrderClient;
import com.insurance.pojo.Claim;
import com.insurance.pojo.User;
import com.insurance.pojo.UserPolicydetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    public PageInfo<UserPolicydetail> selectOreder(HttpSession session, Integer pageNo, @RequestParam Map<String, Object> map,Integer status){
        User user = (User)session.getAttribute("user");
        map.put("user_id",user.getUserId());
        if(status != 0){
            map.put("policy_status",status);
        }
        return orderClient.selectOrder(pageNo,5,map);
    }

    /**
     * 添加理赔信息
     * @param session
     * @param claim
     * @return
     */
    @RequestMapping(value = "/consumer/order/addClaim")
    public String addClaim(HttpSession session, Claim claim){
        return null;
    }

    /**
     * 分页查询所有理赔信息
     * @return
     */
    @RequestMapping(value = "/consumer/order/selectClaim")
    public PageInfo<Claim> selectClaim(Integer pageNo){
        return orderClient.selectClaim(pageNo,1);
    }

    /**
     * 判断输入的手机号是否是当前用户的
     * @param session
     * @param phone
     * @return
     */
    @RequestMapping(value = "/consumer/order/estimatePhone")
    public String estimatePhone(HttpSession session,String phone){
        User user = (User)session.getAttribute("user");
        if(phone != user.getUserPhonenumber()){
            return "n";
        }
        return "y";
    }
}
