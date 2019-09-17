package com.insurance.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.insurance.pojo.Authentication;
import com.insurance.pojo.User;
import org.apache.ibatis.annotations.Select;


public interface UserService extends IService<User> {
    /**
     * 登陆
     * @param user
     * @return
     */
    public User getUser(User user);

    /**
     * 根据用户id查询用户实名信息
     * @param userId
     * @return
     */
    public Authentication getUserAuthentication(Integer userId);
}
