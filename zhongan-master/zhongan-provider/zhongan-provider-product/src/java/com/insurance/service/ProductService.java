package com.insurance.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.insurance.pojo.Plan;
import com.insurance.pojo.Product;

import java.util.List;

public interface ProductService extends IService<Product> {
    public Product findInfomation(Integer proId);
}
