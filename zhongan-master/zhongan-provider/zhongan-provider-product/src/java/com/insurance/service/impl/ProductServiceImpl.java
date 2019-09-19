package com.insurance.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.ProductMapper;
import com.insurance.pojo.*;
import com.insurance.service.ProductService;
import com.insurance.util.ProductMongoUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductServiceImpl extends ServiceImpl<ProductMapper, Product> implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private ProductMongoUtil productMongoUtil;

    @Override
    public Product findInfomation(Integer proId) {
        Product product = productMapper.selectById(proId);
        ProductMongo productMongo = productMongoUtil.findById(proId);
        product.setProductMongo(productMongo);
        return product;
    }

    @Override
    public List<PlanInfomation> findByPlanId(Integer proId, Integer planId) {
        Product product = productMapper.selectById(proId);
        return productMongoUtil.findByPlan(proId, planId);
    }
}
