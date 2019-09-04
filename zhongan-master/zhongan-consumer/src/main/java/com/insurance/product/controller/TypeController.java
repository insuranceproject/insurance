package com.insurance.product.controller;


import com.insurance.pojo.Partype;
import com.insurance.product.client.TypeClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RequestMapping("/consumer/type")
public class TypeController {
    @Autowired
    private TypeClient typeClient;

    @RequestMapping("/findAll")
    public String findAll(Model model){

        List<Partype> typeList = typeClient.findAll();
        model.addAttribute("typeList",typeList);
        return "/previous/index";
    }
}
