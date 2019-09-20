package com.insurance.user.client;

import com.insurance.pojo.Authentication;
import com.insurance.pojo.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@FeignClient("PROVIDER-USER")
public interface UserClient {
    @GetMapping("/user/getOne")
    public User getOne();

    /**
     * 迅捷登陆
     * @return
     */
    @PostMapping("/user/fastLogin")
    public boolean fastLogin(User user, HttpSession session);

    /**
     * 个人登陆
     * @param user
     * @return
     */
    @GetMapping("/user/getUser")
    public User getUser(User user);

    /**
     * 快速登陆
     * @return
     */
    @PostMapping("/user/falsLogin")
    public boolean falsLogin(User user, HttpSession session);

    /**
     * 个人注册
     * @param user
     * @return
     */
    @PostMapping("/user/registered")
    public boolean registered(@RequestBody User user);


    /**
     * 修改个人信息
     * 可以单独修改密码,用户名,以及绑定邮箱和修改邮箱
     * @param user
     * @return
     */
    @PostMapping("/user/updateUser")
    public boolean updateUser(User user);

    /**
     * 删除个人用户
     * @param user
     * @return
     */
    @GetMapping("/user/deleteUser")
    public boolean deleteUser(User user);

    /**
     * 根据用户名查询用户
     * @param user
     * @return
     */
    @PostMapping("/user/getUserByName")
    public User getUserByName(User user);



    /**
     * 根据用户id查询用户实名信息
     * @param
     * @return
     */
    @PostMapping("/user/getUserAuthentication")
    public Authentication getUserAuthentication(@RequestBody Integer userId);

    /**
     * 根据邮箱查询用户
     * @param user
     * @return
     */
    @PostMapping("/user/getUserByEmail")
    public User getUserByEmail(User user);

    /**
     * 根据用户id查询用户
     * @param user
     * @return
     */
    @PostMapping("/user/getUserById")
    public User getUserById(User user);

    /**
     * 保存一条实名认证信息
     * @param authentication
     * @return
     */
    @PostMapping("/user/saveAuthentication")
    public boolean saveAuthentication(@RequestBody Authentication authentication);
}
