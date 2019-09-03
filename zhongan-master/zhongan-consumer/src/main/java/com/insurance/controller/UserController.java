package com.insurance.controller;

import com.insurance.client.UserClient;
import com.insurance.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
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
	 * 个人修改密码
	 * @param user
	 * @return
	 */
	@RequestMapping(value="/consumer/user/updateUserPassWord")
	public boolean updateUserPassWord(User user){
		return userClient.updateUserPassWord(user);
	}

	/**
	 * 修改个人信息
	 * @param user
	 * @return
	 */
	@RequestMapping(value="/consumer/user/updateUser")
	public boolean updateUser(User user){
		return userClient.updateUser(user);
	}
}
