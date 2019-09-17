package com.insurance.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.insurance.mapper.UserMapper;
import com.insurance.pojo.Policy;
import com.insurance.pojo.User;
import com.insurance.service.UserBackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/userBack")
public class UserBackController {

    @Autowired
    private UserMapper userMapper;


    /**
     * 后台用户分页+模糊姓名查询
     * @param pageNo
     * @param pageSize
     * @return
     */
    @PostMapping("/selectUserPage")
    public IPage<User> UserPage(int pageNo, int pageSize, String userName) {
        Page<User> page = new Page<>(pageNo, pageSize);

        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        if (userName!=null&&userName!=""){
            queryWrapper.like("user_name", "%"+userName+"%");
        }

        IPage<User> userIPage = userMapper.selectPage(page, queryWrapper);
        return userIPage;


    }



}
