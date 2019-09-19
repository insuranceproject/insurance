package com.insurance.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.api.product.ProductControllerApi;
import com.insurance.pojo.PlanInfomation;
import com.insurance.pojo.Product;
import com.insurance.pojo.Title;
import com.insurance.service.ProductService;
import com.insurance.util.ProductMongoUtil;
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

    @Autowired
    private ProductMongoUtil productMongoUtil;
    @GetMapping("/findByPlanId")
    @Override
   public Product findByPlanId(Integer proId,Integer planId){
      //  ProductMongoUtil productMongoUtil = new ProductMongoUtil();
        //productMongoUtil.findByPlan(proId, planId);
       // productMongoUtil.findByPlan2(proId, planId);
      //  productMongoUtil.findByPlan3("免赔额");
        return null;
   }


}
