package com.insurance.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.api.user.UserControllerApi;
import com.insurance.pojo.Authentication;
import com.insurance.pojo.User;
import com.insurance.service.AuthenticationService;
import com.insurance.service.UserService;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController implements UserControllerApi {
    @Autowired
    private UserService userService;
    @Autowired
    private AuthenticationService authenticationService;


    @GetMapping("/getOne")
    public User getOne(){
        return userService.getById(1);
    }

    /**
     * 用户名密码登陆
     * @param user
     * @return
     */
    @PostMapping("/getUser")
    @Override
    public User getUser(@RequestBody User user) {
        return userService.getUser(user);
    }

    /**
     * 快速登陆
     * 根据手机号查询
     * @param user
     * @return
     */
    @PostMapping("/falsLogin")
    @Override
    public User falsLogin(@RequestBody User user) {
        return userService.getOne(new QueryWrapper<User>().eq("user_phonenumber",user.getUserPhonenumber()));
    }

    /**
     * 注册
     * 新增一个用户
     * @param user
     * @return
     */
    @PostMapping("/registered")
    @Override
    public boolean registered(@RequestBody User user) {
        return userService.save(user);
    }

    /**
     * 修改用户信息
     * 可以单独修改密码,用户名,以及绑定邮箱和修改邮箱
     * @param user
     * @return
     */
    @GetMapping("/updateUser")
    @Override
    public boolean updateUser(@RequestBody User user) {
        return userService.updateById(user);
    }

    /**
     * 删除个人用户
     * @param user
     * @return
     */
    @GetMapping("/deleteUser")
    @Override
    public boolean deleteUser(@RequestBody User user) {
        return userService.removeById(user.getUserId());
    }


    /**
     * 根据用户名查询用户
     * @param user
     * @return
     */
    @GetMapping("/getUserByName")
    @Override
    public User getUserByName(@RequestBody User user) {
        return userService.getOne(new QueryWrapper<User>().eq("user_name",user.getUserName()));
    }

    /**
     * 根据用户id查询用户实名信息
     * @param
     * @return
     */
    @GetMapping("/getUserAuthentication")
    @Override
    public Authentication getUserAuthentication(Integer userId) {
        return userService.getUserAuthentication(userId);
    }

    /**
     * 根据邮箱查询用户
     * @param user
     * @return
     */
    @Override
    @PostMapping("/getUserByEmail")
    public User getUserByEmail(@RequestBody User user) {
        return userService.getOne(new QueryWrapper<User>().eq("user_email",user.getUserEmail()));
    }

    /**
     * 根据用户id查询用户
     * @param user
     * @return
     */
    @Override
    @PostMapping("/getUserById")
    public User getUserById(@RequestBody User user) {
        return userService.getOne(new QueryWrapper<User>().eq("user_id",user.getUserId()));
    }

    /**
     * 保存一条实名认证信息
     * @param authentication
     * @return
     */
    @Override
    @PostMapping("/saveAuthentication")
    public boolean saveAuthentication(Authentication authentication) {
        return authenticationService.save(authentication);
    }


}
