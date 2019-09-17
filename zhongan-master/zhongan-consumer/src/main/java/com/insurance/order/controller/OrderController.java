package com.insurance.order.controller;

import com.insurance.order.client.OrderClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class OrderController {

    @Autowired
    private OrderClient orderClient;

    @RequestMapping("/consumer/Policy/selectPolicyPage")
    public ModelAndView PolicyPage(Model model, @RequestParam("pageNo")Integer pageNo, @RequestParam("pageSize")Integer PageSize, @RequestParam("number")String number){
        ModelAndView mav=new ModelAndView();
        model.addAttribute("policyPage",orderClient.PolicyPage(1,2,""));
        mav.setViewName("/manager/policy-list");

        return mav;
    }
}
