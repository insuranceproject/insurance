package com.insurance.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.insurance.pojo.Uavmodel;

import java.util.List;

public interface UavModelService extends IService<Uavmodel> {

    public List<Uavmodel> getModelByIds(Integer purId, Integer brandId);
}
