package com.insurance.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.PurposeUavBrandMapper;
import com.insurance.mapper.UavBrandMapper;
import com.insurance.pojo.PurposeUavbrand;
import com.insurance.pojo.Uavbrand;
import com.insurance.service.UavBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
@Transactional
public class UavBrandServiceImpl extends ServiceImpl<UavBrandMapper, Uavbrand> implements UavBrandService {
    @Autowired
    private PurposeUavBrandMapper purposeUavBrandMapper;

    @Autowired
    private  UavBrandMapper uavBrandMapper;

    @Override
    public List<Uavbrand> getBrandByPurId(Integer purId) {
        List<PurposeUavbrand> list = purposeUavBrandMapper.selectList(new QueryWrapper<PurposeUavbrand>().eq("purpose_id", purId));
        List<Integer> brandList = new ArrayList<Integer>();
        for (PurposeUavbrand pub: list) {
            brandList.add(pub.getBrandId());
        }
        if (brandList != null && brandList.size()>0) {
            return uavBrandMapper.selectBatchIds(brandList);
        }else{
            return null;
        }
    }
}
