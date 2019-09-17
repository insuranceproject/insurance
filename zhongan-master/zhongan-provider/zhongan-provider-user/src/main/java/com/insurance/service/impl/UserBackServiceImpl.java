package com.insurance.service.impl;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.UserMapper;
import com.insurance.pojo.Policy;
import com.insurance.pojo.User;
import com.insurance.service.UserBackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class UserBackServiceImpl extends ServiceImpl<UserMapper, User> implements UserBackService {

    @Autowired
    private UserMapper userMapper;


    /**
     * 用户显示分页+模糊姓名查询
     * @param page
     * @return
     */
    @Override
    public IPage<User> selectUserPage(Page<User> page, String userName) {
        return userMapper.selectPageVo(page,userName);
    }


}
