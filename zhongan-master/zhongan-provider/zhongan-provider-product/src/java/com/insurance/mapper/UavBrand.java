package com.insurance.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.insurance.pojo.Uavbrand;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface UavBrand extends BaseMapper<Uavbrand> {


    @Select("select * from insurance_uavbrand where brand_id in (select brand_id from insurance_purpose_uavbrand where purpose_id = #{purId}) ")
    public List<Uavbrand> findByPurId(Integer purId);
}
