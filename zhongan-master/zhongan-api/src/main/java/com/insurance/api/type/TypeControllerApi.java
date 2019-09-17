package com.insurance.api.type;

import com.insurance.pojo.Partype;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

@Api(value="产品类型管理接口",description = "产品类型管理接口，提供产品类型的增、删、改、查")
public interface TypeControllerApi {

    @ApiOperation("查询全部类型")
    public List<Partype> findAll();
}
