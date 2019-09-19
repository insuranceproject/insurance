package com.insurance.api.order;

import com.insurance.pojo.Policydetail;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

@Api(value="保单详情管理接口",description = "增、删、改、查")
public interface PolicydetailControllerApi {

    @ApiOperation("根据保单id查询保单详情")
    public List<Policydetail> getPolicydetailByPolicyId(Integer policyId);
}
