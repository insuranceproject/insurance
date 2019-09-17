package com.insurance.api.product;

import com.insurance.pojo.PurposeUavbrand;
import com.insurance.pojo.Uavbrand;
import com.insurance.pojo.Uavmodel;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

@Api(value="无人机管理接口",description = "无人机管理接口，提供无人机的增、删、改、查")
public interface UavControllerApi {

    @ApiOperation("根据作业用途编号,查询出无人机类型数据")
    public List<Uavbrand> getBrandByIds(Integer purId);


    @ApiOperation("根据作业用途编号与无人机类型编号,查询出所支持的无人机型号数据")
    public List<Uavmodel> getModelByIds(Integer purId,Integer brandId);

}
