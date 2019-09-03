package com.insurance.api.user;

import com.insurance.pojo.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value="课程管理接口",description = "课程管理接口，提供课程的增、删、改、查")
public interface UserControllerApi {


    @ApiOperation("课程计划查询")
    public User getOne();

    @ApiOperation("课程计划查询")
    public User login(User user);
}
