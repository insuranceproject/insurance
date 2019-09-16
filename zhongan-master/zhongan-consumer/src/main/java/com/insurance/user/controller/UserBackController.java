package com.insurance.user.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.github.pagehelper.PageInfo;
import com.insurance.pojo.Authentication;
import com.insurance.pojo.User;
import com.insurance.user.client.UserBackClient;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class UserBackController {

    @Autowired
    private UserBackClient userBackClient;

    /**
     * 后台用户分页显示+姓名模糊查询
     * @param pageNo   当前页数
     * @param pageSize  当前页面数据个数
     * @param username  姓名
     * @return
     */
    @RequestMapping(value="/consumer/userBack/selectUserPage")
    public ModelAndView selectUserPage(@RequestParam("pageNo")Integer pageNo, @RequestParam("pageSize")Integer pageSize, @RequestParam("userName")String username){

        ModelAndView mav=new ModelAndView();
        PageInfo<User> userPageInfo = userBackClient.selectUserPage(pageNo, pageSize, username);
        if (username==""){
            username=null;     //如果参数为""转为null,对应sql语句
        }
        mav.addObject("username",username);
        mav.addObject("pageNo",pageNo);
        mav.addObject("userList",userPageInfo.getList());  //所有用户集合
        mav.addObject("UserPage",userPageInfo);    //分页的所有属性
        mav.addObject("pageNum",userPageInfo.getPageNum());   //当前页面数
        mav.addObject("pages",userPageInfo.getPages());    //总页面数
        mav.addObject("total",userPageInfo.getTotal());   //该参数下的所有用户
        mav.setViewName("manager/member-list");
        return mav;
    }


    /**
     * 跳转后台主页
     * @return
     */
    @RequestMapping(value="/consumer/userBack/indexHtml")
    public ModelAndView indexHtml(){
        ModelAndView mav=new ModelAndView();
        mav.setViewName("manager/index");
        return mav;
    }

    /**
     * 跳转用户添加页面
     * @return
     */
    @RequestMapping(value="/consumer/userBack/member_addHtml")
    public ModelAndView member_addHtml(){
        ModelAndView mav=new ModelAndView();
        mav.setViewName("manager/member-add");
        return mav;
    }

    /**
     * 用户添加
     * @param
     * @return
     */
    @RequestMapping("/consumer/userBack/addUser")
    public boolean addUser(String username,String userPassword,String userPhonenumber,String userEmail){
        User user=new User();
        user.setUserId(0);
        user.setUserName(username);
        user.setUserPassword(userPassword);
        user.setUserPhonenumber(userPhonenumber);
        user.setUserEmail(userEmail);
        user.setUserRole("3");
        return userBackClient.addUser(user);
    }

    /**
     *用户删除
     * @param userId
     * @return
     */
    @RequestMapping("/consumer/userBack/delUser")
    public boolean delUser(@RequestParam("userId")int userId){
        Authentication authentication = userBackClient.selectAuth(userId);  //查询该用户是否实名
        if (authentication==null){       //如果未实名,执行删除
            return userBackClient.delUser(userId);
        }
        return false;

    }

    /**
     * 修改用户
     * @param userId
     * @param username
     * @param userPassword
     * @param userPhonenumber
     * @param userEmail
     * @param userRole
     * @return
     */
    @RequestMapping("/consumer/userBack/updateUser")
    public boolean updateUser(int userId,String username,String userPassword,String userPhonenumber,String userEmail,String userRole){
        User user=new User();
        user.setUserId(userId);
        user.setUserName(username);
        user.setUserPassword(userPassword);
        user.setUserPhonenumber(userPhonenumber);
        user.setUserEmail(userEmail);
        user.setUserRole(userRole);
        return userBackClient.updateUser(user);
    }

    /**
     * 跳转用户修改页面
     * @return
     */
    @RequestMapping(value="/consumer/userBack/member_editHtml")
    public ModelAndView member_editHtml(@RequestParam("userId")int userId){
        ModelAndView mav=new ModelAndView();
        User u = userBackClient.findById(userId);
        mav.addObject("findByIdUser",u);
        mav.setViewName("manager/member-edit");
        return mav;
    }

    /**
     * 根据id查询用户
     * @param userId
     * @return
     */
    @RequestMapping("consumer/userBack/findById")
    public User findById(@RequestParam("userId")int userId){
        return userBackClient.findById(userId);
    }


    /**
     * 跳转后台欢迎界面
     * @return
     */
    @RequestMapping(value="/consumer/userBack/welcomeHtml")
    public ModelAndView member_welcomeHtml(){
        ModelAndView mav=new ModelAndView();
        mav.setViewName("manager/welcome");
        return mav;
    }

    /**
     * 跳转订单页面
     * @return
     */
    @RequestMapping(value="/consumer/userBack/orderListHtml")
    public ModelAndView order_listHtml(){
        ModelAndView mav=new ModelAndView();
        mav.setViewName("manager/order-list");
        return mav;
    }

    /**
     * 跳转分类页面
     * @return
     */
    @RequestMapping(value="/consumer/userBack/cateHtml")
    public ModelAndView cateHtml(){
        ModelAndView mav=new ModelAndView();
        mav.setViewName("manager/cate");
        return mav;
    }


}
