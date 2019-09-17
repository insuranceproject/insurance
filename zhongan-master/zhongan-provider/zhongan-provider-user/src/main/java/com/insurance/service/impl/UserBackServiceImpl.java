package com.insurance.service.impl;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.insurance.mapper.UserMapper;
import com.insurance.pojo.Authentication;
import com.insurance.pojo.User;
import com.insurance.service.UserBackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
@Transactional
public class UserBackServiceImpl extends ServiceImpl<UserMapper, User> implements UserBackService {

    @Autowired
    private UserMapper userMapper;


    /**
     * 用户显示分页+模糊姓名查询
     * @param pageNo
     * @param pageSize
     * @param userName
     * @return
     */
    @Override
    public PageInfo<User> selectUserPage(Integer pageNo, Integer pageSize, String userName) {
        Page<User> page = PageHelper.startPage(pageNo,pageSize);
        PageInfo pageInfo=new PageInfo();
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("user_name",userName);
        List<User> users = userMapper.selectUserPage(map);
        pageInfo=page.toPageInfo();
        pageInfo.setList(users);
        return pageInfo;
    }

    /**
     * 判断用户是否实名
     * @param userId
     * @return
     */
    @Override
    public Authentication selectAuth(int userId) {
        return userMapper.selectAuth(userId);
    }



}
