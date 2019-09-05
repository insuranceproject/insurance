package com.insurance.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.api.product.ProductControllerApi;
import com.insurance.pojo.Product;
import com.insurance.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ProductController implements ProductControllerApi {

    @Autowired
    private ProductService productService;


    @Override
    public List<Product> findByParId(Integer parId) {
        return productService.list(new QueryWrapper<Product>().eq("parent_id",parId));
    }

    @Override
    public List<Product> findByChildId(Integer childId) {
        return productService.list(new QueryWrapper<Product>().eq("child_id",childId));
    }
}
