package com.insurance.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.insurance.pojo.Plan;
import com.insurance.pojo.Product;

import java.util.List;

public interface PlanService extends IService<Plan> {
    public List<Plan> getPlanPrice(Integer proId,Integer modelPrice);
}
