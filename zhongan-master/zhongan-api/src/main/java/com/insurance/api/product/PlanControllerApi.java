package com.insurance.api.product;

import com.insurance.pojo.Plan;
import com.insurance.pojo.Product;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

@Api(value="产品计划管理接口",description = "产品计划管理接口，提供产品计划的增、删、改、查")
public interface PlanControllerApi {

    @ApiOperation("根据产品id查询对应的产品计划")
    public List<Plan> findByProId(Integer proId);

    @ApiOperation("根据产品id与无人机价格计算对应的产品价格")
    public List<Plan> getPlanPrice(Integer proId,Integer modelPrice);

    @ApiOperation("根据计划编号查询对应的计划信息")
    public Plan getPlanById(Integer planId);

}
