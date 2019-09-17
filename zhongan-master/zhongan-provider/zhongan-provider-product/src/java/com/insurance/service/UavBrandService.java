package com.insurance.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.insurance.pojo.Uavbrand;

import java.util.List;

public interface UavBrandService extends IService<Uavbrand> {

    public List<Uavbrand> getBrandByIds(Integer purId);
}
