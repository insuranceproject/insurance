package com.insurance.user.client;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.github.pagehelper.PageInfo;
import com.insurance.pojo.Authentication;
import com.insurance.pojo.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@FeignClient("PROVIDER-USER")
public interface UserBackClient {

    /**
     * 后台用户分页+姓名模糊查询
     * @param pageNo
     * @param pageSize
     * @param username
     * @return
     */
    @RequestMapping(value="/userBack/selectUserPage")
    public PageInfo<User> selectUserPage(@RequestParam("pageNo")Integer pageNo, @RequestParam("pageSize")Integer pageSize,@RequestParam("userName")String username);

    /**
     * 用户注册
     * @param user
     * @return
     */
    @PostMapping("/userBack/addUser")
    public boolean addUser(@RequestBody User user);


    /**
     * 用户删除
     * @param userId
     * @return
     */
    @PostMapping("/userBack/delUser")
    public boolean delUser(@RequestParam("userId")int userId);

    /**
     * 判断用户是否实名
     * @param userId
     * @return
     */
    @PostMapping("/userBack/selectAuth")
    public Authentication selectAuth(@RequestParam("userId")int userId);


    /**
     * 根据id查询用户
     * @param userId
     * @return
     */
    @RequestMapping("userBack/findById")
    public User findById(@RequestParam("userId")int userId);

    /**
     * 用户修改
     * @param user
     * @return
     */
    @RequestMapping("userBack/updateUser")
    public boolean updateUser(@RequestBody User user);


}
