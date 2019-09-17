package com.insurance.product.controller;


import com.insurance.pojo.Partype;
import com.insurance.product.client.ProductClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/consumer/type")
public class TypeController {
    @Autowired
    private ProductClient productClient;

    @RequestMapping("/findAll")
    public String findAll(Model model){
        List<Partype> typeList = productClient.findAll();
       model.addAttribute("typeList",typeList);
        return "/index";
    }
}
