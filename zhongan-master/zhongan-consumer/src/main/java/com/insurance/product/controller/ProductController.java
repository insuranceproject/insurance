package com.insurance.product.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.pojo.*;
import com.insurance.product.client.ProductClient;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@RequestMapping("/consumer/product")
@Controller
public class ProductController{

    @Autowired
   private ProductClient productClient;


    @GetMapping("/findByParId")
    public  @ResponseBody List<Product> findByParId(Integer parId) {
      return productClient.findByParId(parId);
    }

    @GetMapping("/findByChildId")
    public List<Product> findByChildId(Integer childId) {
       return  null;
    }

    @RequestMapping("/{id}")
    public String getProductInfomation(@PathVariable("id") int proId, Model model){
        List<Partype> typeList = productClient.findAll();
        Product productInfo = productClient.findInfomation(proId);
        List<Plan> planList = productClient.getByProId(proId);
        model.addAttribute("typeList",typeList);
        model.addAttribute("product",productInfo);
        model.addAttribute("planList",planList);
        return "userpervious/product/"+proId;
    };

    public void uavInfo(Model model){

    }
}

