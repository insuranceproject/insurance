package com.insurance.api.user;

import com.insurance.pojo.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value="课程管理接口",description = "课程管理接口，提供课程的增、删、改、查")
public interface UserControllerApi {


    @ApiOperation("课程计划查询")
    public User getOne();

    /**
     * 个人登陆
     * @param user
     * @return
     */
    @ApiOperation("个人登陆")
    public User login(User user);

    /**
     * 个人注册
     * @param user
     * @return
     */
    @ApiOperation("个人注册")
    public boolean registered(User user);

    /**
     * 个人修改密码
     * @param user
     * @return
     */
    @ApiOperation("个人修改密码")
    public boolean updateUserPassWord(User user);

    /**
     * 修改个人信息
     * @param user
     * @return
     */
    @ApiOperation("修改个人信息")
    public boolean updateUser(User user);
}
