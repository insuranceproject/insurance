package com.insurance.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.api.product.PlanControllerApi;
import com.insurance.pojo.Plan;
import com.insurance.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/plan")
@RestController
public class PlanController implements PlanControllerApi {
    @Autowired
    private PlanService planService;

    @Override
    @GetMapping("/getByProId")
    public List<Plan> findByProId(Integer proId){
        return planService.list(new QueryWrapper<Plan>().eq("product_id",proId));
    }
}
