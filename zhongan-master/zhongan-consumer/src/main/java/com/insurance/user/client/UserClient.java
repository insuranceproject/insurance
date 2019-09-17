package com.insurance.user.client;

import com.insurance.pojo.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient("PROVIDER-USER")
public interface UserClient {
    @GetMapping("/user/getOne")
    public User getOne();

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
    public User falsLogin(User user);

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
    @GetMapping("/user/updateUser")
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
    @GetMapping("/user/getUserByName")
    public User getUserByName(User user);
}
