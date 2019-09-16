package com.insurance.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.github.pagehelper.PageInfo;
import com.insurance.pojo.Authentication;
import com.insurance.pojo.Policy;
import com.insurance.pojo.User;

import java.util.List;

public interface UserBackService extends IService<User> {

    /**
     * 用户显示分页+模糊姓名查询
     * @param pageNo
     * @param pageSize
     * @param userName
     * @return
     */
    public PageInfo<User> selectUserPage(Integer pageNo,Integer pageSize, String userName);


    /**
     * 判断用户是否实名
     * @param userId
     * @return
     */
    public Authentication selectAuth(int userId);








}
