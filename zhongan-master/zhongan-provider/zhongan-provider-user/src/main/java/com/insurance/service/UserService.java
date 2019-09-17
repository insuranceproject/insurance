package com.insurance.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.insurance.pojo.User;


public interface UserService extends IService<User> {
    /**
     * 登陆
     * @param user
     * @return
     */
    public User getUser(User user);
}
