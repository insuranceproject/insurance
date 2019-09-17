package com.insurance.util;

import com.insurance.pojo.ProductMongo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
public class ProductMongoUtil {
    @Autowired
    private MongoTemplate mongoTemplate;

    public ProductMongo findById(Integer id){
        return mongoTemplate.findById(id, ProductMongo.class);
    }

}
