package com.insurance.util;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.pojo.PlanInfomation;
import com.insurance.pojo.ProductMongo;
import com.insurance.pojo.Title;
import javafx.scene.shape.Circle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductMongoUtil {
    @Autowired
    private MongoTemplate mongoTemplate;

    public ProductMongo findById(Integer id){
        return mongoTemplate.findById(id, ProductMongo.class);
    }

    public List<PlanInfomation> findByPlan(Integer id, Integer planId){
       return mongoTemplate.find(new Query(Criteria.where("_id").is(id).and("title.info.planId").is(planId)), PlanInfomation.class);
    }

}
