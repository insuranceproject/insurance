package com.insurance.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.insurance.api.user.UserControllerApi;
import com.insurance.pojo.User;
import com.insurance.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController implements UserControllerApi {
    @Autowired
    private UserService userService;


    @GetMapping("/getOne")
    public User getOne(){
        return userService.getById(1);
    }

    /**
     * 登陆
     * @param user
     * @return
     */
    @PostMapping("/login")
    @Override
    public User login(@RequestBody User user) {
        return userService.getOne(new QueryWrapper<User>().eq("user_name",user.getUserName()).eq("user_password",user.getUserPassword()));
    }

    /**
     * 注册
     * @param user
     * @return
     */
    @PostMapping("/registered")
    @Override
    public boolean registered(@RequestBody User user) {
        return userService.save(user);
    }

    /**
     * 修改密码
     * @param user
     * @return
     */
    @PostMapping("/updateUserPassWord")
    @Override
    public boolean updateUserPassWord(@RequestBody User user) {
        return userService.updateById(user);
    }

    /**
     * 修改用户信息
     * @param user
     * @return
     */
    @PostMapping("/updateUser")
    @Override
    public boolean updateUser(@RequestBody User user) {
        return userService.update(user,new UpdateWrapper<User>());
    }


}
