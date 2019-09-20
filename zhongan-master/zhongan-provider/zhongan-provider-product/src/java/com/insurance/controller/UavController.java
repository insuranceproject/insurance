package com.insurance.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.api.product.UavControllerApi;
import com.insurance.pojo.Purpose;
import com.insurance.pojo.PurposeUavbrand;
import com.insurance.pojo.Uavbrand;
import com.insurance.pojo.Uavmodel;
import com.insurance.service.PurposeService;
import com.insurance.service.PurposeUavBrandService;
import com.insurance.service.UavBrandService;
import com.insurance.service.UavModelService;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.QueryMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/uav")
public class UavController implements UavControllerApi {


    @Autowired
    private UavBrandService uavBrandService;

    @Autowired
    private UavModelService uavModelService;

   @Autowired
   private PurposeService purposeService;

    @GetMapping("/getBrandByPurId")
    @Override
    public List<Uavbrand> getBrandByPurId(Integer purId) {
        return uavBrandService.getBrandByPurId(purId);
    }

    @GetMapping("/getModelByPurId")
    @Override
    public List<Uavmodel> getModelByPurId(Integer purId, Integer brandId) {
        return uavModelService.getModelByPurId(purId,brandId);
    }

    @GetMapping("/findById")
    @Override
    public Purpose findById(Integer purId){
        return purposeService.getById(purId);
    }

    @GetMapping("/getModelById")
    @Override
    public Uavmodel getModelById(Integer modelId){
        return uavModelService.getById(modelId);
    }
    @GetMapping("/getBrandById")
    @Override
    public Uavbrand getBrandById(Integer brandId){
        return uavBrandService.getById(brandId);
    }
}
