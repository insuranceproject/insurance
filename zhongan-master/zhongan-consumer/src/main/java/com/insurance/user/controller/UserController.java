package com.insurance.user.controller;

import com.insurance.pojo.User;
import com.insurance.user.client.UserClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class UserController {
	
	@Autowired
	private UserClient userClient;

	@RequestMapping(value = "/consumer/user/getOne")
	public User getOne(){
		return userClient.getOne();
	}

	/**
	 * 个人登陆
	 * @param user
	 * @return
	 */
	@RequestMapping(value="/consumer/user/login")
	public User login(User user){
		return userClient.login(user);
	}

	/**
	 * 个人注册
	 * @param user
	 * @return
	 */
	@RequestMapping(value="/consumer/user/registered")
	public String registered(User user){
		return  userClient.registered(user) == true ? "1":"2";
	}


	/**
	 * 修改个人信息
	 * 可以单独修改密码,用户名,以及绑定邮箱和修改邮箱
	 * @param user
	 * @return
	 */
	@RequestMapping(value="/consumer/user/updateUser")
	public boolean updateUser(User user){
		return userClient.updateUser(user);
	}
}
