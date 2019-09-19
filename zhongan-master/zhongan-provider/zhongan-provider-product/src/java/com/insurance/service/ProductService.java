package com.insurance.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.insurance.pojo.Plan;
import com.insurance.pojo.PlanInfomation;
import com.insurance.pojo.Product;
import com.insurance.pojo.Title;

import java.util.List;

public interface ProductService extends IService<Product> {
    public Product findInfomation(Integer proId);

    public List<PlanInfomation> findByPlanId(Integer proId, Integer planId);
}
