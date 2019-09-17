package com.insurance.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.insurance.pojo.Policy;
import com.insurance.pojo.User;

public interface UserBackService extends IService<User> {
    /**
     * 用户显示分页+模糊姓名查询
     * @param page
     * @return
     */
    public IPage<User> selectUserPage(Page<User> page, String userName);



}
