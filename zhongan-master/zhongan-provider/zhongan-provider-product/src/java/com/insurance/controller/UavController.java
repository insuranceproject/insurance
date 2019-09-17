package com.insurance.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.api.product.UavControllerApi;
import com.insurance.pojo.PurposeUavbrand;
import com.insurance.pojo.Uavbrand;
import com.insurance.pojo.Uavmodel;
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

    @GetMapping("/getBrandByIds")
    @Override
    public List<Uavbrand> getBrandByIds(Integer purId) {
        return uavBrandService.getBrandByIds(purId);
    }

    @GetMapping("/getModelByIds")
    @Override
    public List<Uavmodel> getModelByIds(Integer purId, Integer brandId) {
        return uavModelService.getModelByIds(purId,brandId);
    }
}
