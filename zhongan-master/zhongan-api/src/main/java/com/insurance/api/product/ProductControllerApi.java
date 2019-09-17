package com.insurance.api.product;

import com.insurance.pojo.Product;
import com.insurance.pojo.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

@Api(value="产品管理接口",description = "产品管理接口，提供产品的增、删、改、查")
public interface ProductControllerApi {

    @ApiOperation("根据父分类id查询对应的产品")
    public List<Product> findByParId(Integer parId);

    @ApiOperation("根据子分类id查询对应的产品")
    public List<Product> findByChildId(Integer childId);
}
