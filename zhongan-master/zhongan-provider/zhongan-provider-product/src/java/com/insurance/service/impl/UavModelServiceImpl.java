package com.insurance.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.PurposeUavBrandMapper;
import com.insurance.mapper.UavBrandMapper;
import com.insurance.mapper.UavModelMapper;
import com.insurance.pojo.PurposeUavbrand;
import com.insurance.pojo.Uavmodel;
import com.insurance.service.UavModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
@Transactional
public class UavModelServiceImpl extends ServiceImpl<UavModelMapper, Uavmodel> implements UavModelService {

    @Autowired
    private PurposeUavBrandMapper purposeUavBrandMapper;

    @Autowired
    private UavModelMapper uavModelMapper;
    @Override
    public List<Uavmodel> getModelByIds(Integer purId, Integer brandId) {
        List<PurposeUavbrand> list = purposeUavBrandMapper.selectList(new QueryWrapper<PurposeUavbrand>().eq("purpose_id", purId));
        List<Integer> modelList = new ArrayList<Integer>();
        for (PurposeUavbrand pub: list) {
            if (pub.getBrandId() == brandId){
                modelList.add(pub.getModelId());
            }
        }
        if(modelList != null && modelList.size()>0) {
            return uavModelMapper.selectBatchIds(modelList);
        }else{
            return  null;
        }
    }
}
