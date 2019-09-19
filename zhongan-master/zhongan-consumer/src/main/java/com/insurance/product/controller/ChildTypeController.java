package com.insurance.product.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.pojo.Childtype;
import com.insurance.product.client.ProductClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/childType")
public class ChildTypeController{

    @Autowired
   private ProductClient productClient;

    @GetMapping("findByParId")
    public List<Childtype> findByParId(Integer parId) {
        return null;
    }
}
