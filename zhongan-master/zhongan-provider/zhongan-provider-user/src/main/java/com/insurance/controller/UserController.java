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

import javax.servlet.http.HttpSession;
import java.sql.Date;

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
     * 快速登录
     * @param user
     * @param session
     * @return
     */
    @PostMapping("/fastLogin")
    @Override
    public boolean fastLogin(@RequestBody User user, HttpSession session) {
        String s2="^[1](([3|5|8][\\d])|([4][4,5,6,7,8,9])|([6][2,5,6,7])|([7][^9])|([9][1,8,9]))[\\d]{8}$";// 验证手机号
        if(!user.getUserPhonenumber().matches(s2)){
            return false;
        }
        //首先查询根据传进来的电话号查询用户,如果为空则说明未注册
        User user1 = userService.getOne(new QueryWrapper<User>().eq("user_phonenumber", user.getUserPhonenumber()));
        if(user1 == null){
            //随机生成用户名
            Integer num1 = (int) ((Math.random() * 9 + 1) * 100000);
            user.setUserName(num1 + "");    //封装用户名
            user.setUserRole("3");
            boolean registered = registered(user);
            if(registered){
                session.setAttribute("user", user);
                return true;
            }
        }
        session.setAttribute("user", user1);
        return true;
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
    @PostMapping("/updateUser")
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
    @PostMapping("/getUserByName")
    @Override
    public User getUserByName(@RequestBody User user) {
        return userService.getOne(new QueryWrapper<User>().eq("user_name",user.getUserName()));
    }

    /**
     * 根据用户id查询用户实名信息
     * @param
     * @return
     */
    @PostMapping("/getUserAuthentication")
    @Override
    public Authentication getUserAuthentication(@RequestBody Integer userId) {
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
    public boolean saveAuthentication(@RequestBody Authentication authentication) {
        return authenticationService.save(authentication);
    }
}
