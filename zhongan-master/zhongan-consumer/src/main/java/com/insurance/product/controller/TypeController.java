package com.insurance.product.controller;


import com.insurance.pojo.Partype;
import com.insurance.product.client.ProductClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/consumer/type")
public class TypeController {
    @Autowired
    private ProductClient productClient;

    @RequestMapping("/findAll")
    public String findAll(HttpSession session){
        List<Partype> typeList = productClient.findAll();
        session.setAttribute("typeList",typeList);
        return "/index";
    }
}
