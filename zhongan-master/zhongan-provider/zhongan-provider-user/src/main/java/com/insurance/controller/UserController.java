package com.insurance.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.api.user.UserControllerApi;
import com.insurance.pojo.User;
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


    @GetMapping("/getOne")
    public User getOne(){
        return userService.getById(1);
    }

    /**
     * 用户名密码登陆
     * @param user
     * @return
     */
    @PostMapping("/login")
    @Override
    @Select("<script>SELECT * FROM `insurance_user` where user_password = #{userPassword} and " +
            "<if test=' userEmail != null '> user_email = #{userEmail} </if>  "
            + " <if test='userPhonenumber !=null '> user_phonenumber = #{userPhonenumber} </if> "
            + " <if test='userName !=null '> user_name = #{userName} </if> </script>")
    public User login(@RequestBody User user) {
        return userService.getOne(new QueryWrapper<User>().eq("user_name",user.getUserName()).eq("user_password",user.getUserPassword()));
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
    @Override
    public User getUserByName(@RequestBody User user) {
        return userService.getOne(new QueryWrapper<User>().eq("user_name",user.getUserName()));
    }


}
