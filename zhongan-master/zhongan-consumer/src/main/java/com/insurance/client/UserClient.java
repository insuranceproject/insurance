package com.insurance.client;

import com.insurance.pojo.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient("PREVIOUS")
public interface UserClient {
    @GetMapping("/user/getOne")
    public User getOne();

    /**
     * 个人登陆
     * @param user
     * @return
     */
    @GetMapping("/user/login")
    public User login(User user);

    /**
     * 个人注册
     * @param user
     * @return
     */
    @GetMapping("/user/registered")
    public boolean registered(User user);

    /**
     * 个人修改密码
     * @param user
     * @return
     */
    @GetMapping("/user/updateUserPassWord")
    public boolean updateUserPassWord(User user);

    /**
     * 修改个人信息
     * @param user
     * @return
     */
    @GetMapping("/user/updateUser")
    public boolean updateUser(User user);
}
