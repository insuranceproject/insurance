package com.insurance.api.product;

import com.insurance.pojo.PurposeUavbrand;
import com.insurance.pojo.Uavbrand;
import com.insurance.pojo.Uavmodel;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

@Api(value="无人机管理接口",description = "无人机管理接口，提供无人机的增、删、改、查")
public interface UavControllerApi {

    @ApiOperation("根据作业用途查询所支持的无人机类型与机型编号")
    public List<PurposeUavbrand> getByPurId(Integer purId);

    @ApiOperation("根据所支持的编号集合,查询出无人机类型数据")
    public List<Uavbrand> getBrandByIds(List<Integer> list);


    @ApiOperation("根据所支持的编号集合与无人机型号,查询出无人机型号数据")
    public List<Uavmodel> getModelByIds(List<Integer> list,Integer brandId);

}
