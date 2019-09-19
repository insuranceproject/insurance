package com.insurance.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.api.product.ProductControllerApi;
import com.insurance.pojo.Plan;
import com.insurance.pojo.Product;
import com.insurance.pojo.User;
import com.insurance.service.PlanService;
import com.insurance.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/product")
@RestController
public class ProductController implements ProductControllerApi {

    @Autowired
    private ProductService productService;
    @Autowired
    private PlanService planService;


    @GetMapping("/findByParId")
    @Override
    public List<Product> findByParId(Integer parId) {
        return productService.list(new QueryWrapper<Product>().eq("parent_id",parId));
    }

    @GetMapping("/findByChildId")
    @Override
    public List<Product> findByChildId(Integer childId) {
        return productService.list(new QueryWrapper<Product>().eq("child_id",childId));
    }

    @GetMapping("/findByProId")
    @Override
    public Product findByProId(Integer proId) {
        return productService.getById(proId);
    }

    @GetMapping("/findInfomation")
    @Override
    public Product findInfomation(Integer proId) {
        return productService.findInfomation(proId);
    }


    /**
     * 根据产品方案表中的产品id查询产品
     * @param planId
     * @return
     */
    @Override
    @GetMapping("/getProductByPlanId")
    public Product getProductByPlanId(Integer planId){
        Plan plan = planService.getOne(new QueryWrapper<Plan>().eq("plan_id", planId));
        Product product = productService.getOne(new QueryWrapper<Product>().eq("product_id", plan.getProductId()));
        return product;
    }
}
