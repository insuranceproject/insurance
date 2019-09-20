package com.insurance.api.user;

import com.insurance.pojo.Authentication;
import com.insurance.pojo.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.models.auth.In;

import javax.servlet.http.HttpSession;

@Api(value="用户管理接口",description = "用户接口，提供用户的增、删、改、查")
public interface UserControllerApi {


    @ApiOperation("计划查询")
    public User getOne();

    /**
     * 个人普通登陆
     * @param user
     * @return
     */
    @ApiOperation("个人普通登陆")
    public User getUser(User user);

    /**
     *
     * 个人用户快速登陆
     * @param user
     * @return
     */
    @ApiOperation("个人用户名密码登陆")
    public User falsLogin(User user);

    @ApiOperation("快速登录")
    public boolean fastLogin(User user, HttpSession session);

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

    /**
     * 删除个人用户
     * @param user
     * @return
     */
    @ApiOperation("删除个人用户")
    public boolean deleteUser(User user);

    /**
     * 根据用户名查询用户
     * @param user
  * @return
     */
    @ApiOperation("根据用户名查询用户")
    public User getUserByName(User user);

    /**
     * 根据用户id查询用户实名信息
     * @return
     */
    @ApiOperation("根据用户id查询用户实名信息")
    public Authentication getUserAuthentication(Integer userId);

    /**
     * 根据邮箱查询用户
     * @param user
     * @return
     */
    @ApiOperation("根据邮箱查询用户")
    public User getUserByEmail(User user);

    /**
     * 根据用户id查询用户
     * @param user
     * @return
     */
    @ApiOperation("根据用户id查询用户")
    public User getUserById(User user);

    /**
     * 保存一条实名认证信息
     * @return
     */
    @ApiOperation("保存一条实名认证信息")
    public boolean saveAuthentication(Authentication authentication);
}
