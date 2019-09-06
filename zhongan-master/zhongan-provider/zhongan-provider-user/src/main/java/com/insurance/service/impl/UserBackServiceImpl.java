package com.insurance.service.impl;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.UserMapper;
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
        // 不进行 count sql 优化，解决 MP 无法自动优化 SQL 问题，这时候你需要自己查询 count 部分
        // page.setOptimizeCountSql(false);
        // 当 total 为非 0 时(默认为 0),分页插件不会进行 count 查询
        // 要点!! 分页返回的对象与传入的对象是同一个
        return userMapper.selectPageVo(page,userName);
    }
}
