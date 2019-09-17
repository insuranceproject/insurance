package com.insurance.api.product;

import com.insurance.pojo.Childtype;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

@Api(value="产品子类型管理接口",description = "产品子类型管理接口，提供产品子类型的增、删、改、查")
public interface ChildTypeControllerApi {

    @ApiOperation("根据父分类id查询对应的子分类")
    public List<Childtype> findByParId(Integer parId);
}
