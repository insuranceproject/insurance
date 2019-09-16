package com.insurance.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.github.pagehelper.PageInfo;
import com.insurance.mapper.UserMapper;
import com.insurance.pojo.Authentication;
import com.insurance.pojo.Policy;
import com.insurance.pojo.User;
import com.insurance.service.UserBackService;
import com.insurance.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/userBack")
public class UserBackController {

    /*@Autowired
    private UserMapper userMapper;*/
    @Autowired
    private UserBackService userBackService;



    /**
     * 后台用户显示分页+模糊姓名查询
     * @param pageNo
     * @param pageSize
     * @param userName
     * @return
     */
    @RequestMapping("/selectUserPage")
    public PageInfo<User> UserPage(Model model,Integer pageNo, Integer pageSize, String userName) {
        if (userName==""){
            userName=null;    //如果参数为""转为null,对应sql语句
        }
        PageInfo<User> pageInfo = userBackService.selectUserPage(pageNo, 8, userName);
        return pageInfo;
    }


    /**
     * 后台用户添加
     * @param user
     * @return
     */
    @RequestMapping("/addUser")
    public boolean addUser(@RequestBody User user){
        return userBackService.save(user);
    }


    /**
     * 用户删除
     * @param userId
     * @return
     */
    @RequestMapping("delUser")
    public boolean delUser(@RequestParam("userId")int userId){

        return userBackService.removeById(userId);
    }

    /**
     * 判断用户是否实名
     * @param userId
     * @return
     */
    @RequestMapping("selectAuth")
    public Authentication selectAuth(@RequestParam("userId")int userId){
        Authentication authentication = userBackService.selectAuth(userId);
        return authentication;
    }



    /**
     * 根据id查询用户
     * @param userId
     * @return
     */
    @RequestMapping("findById")
    public User findById(@RequestParam("userId")int userId){
        return userBackService.getById(userId);
    }


    /**
     * 根据id修改用户
     * @param user
     * @return
     */
    @RequestMapping("updateUser")
    public boolean updateUser(@RequestBody User user){
        return userBackService.updateById(user);
    }







}
