package com.insurance.api.product;


import com.insurance.pojo.Purpose;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

@Api(value="无人机用途管理接口",description = "无人机用途管理接口，提供无人机用途的增、删、改、查")
public interface PurposeControllerApi {

    @ApiOperation("查询所有无人机用途数据")
    public List<Purpose> findAll();
}
