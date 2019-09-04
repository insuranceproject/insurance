package com.insurance.api.user;

import com.insurance.pojo.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value="用户管理接口",description = "用户接口，提供用户的增、删、改、查")
public interface UserControllerApi {


    @ApiOperation("计划查询")
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
     * 修改个人信息
     * 可以单独修改密码,用户名,以及绑定邮箱和修改邮箱
     * @param user
     * @return
     */
    @ApiOperation("修改个人信息")
    public boolean updateUser(User user);
}
