package com.insurance.api.user;

import com.insurance.pojo.Policyholder;
import com.insurance.pojo.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

@Api(value="投保人接口",description = "投保人接口，提供投保人的增、删、改、查")
public interface PolicyholderControllerApi {

    @ApiOperation("根据用户id查询被保人信息")
    public List<Policyholder> getPolicyholderByUserId(User user);

}
