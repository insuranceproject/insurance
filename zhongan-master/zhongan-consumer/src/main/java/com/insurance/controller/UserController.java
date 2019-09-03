package com.insurance.controller;

import com.insurance.client.UserClient;
import com.insurance.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class UserController {
	
	@Autowired
	private UserClient userClient;

	@RequestMapping(value = "/consumer/user/getOne")
	public User getOne(){
		return userClient.getOne();
	}
}
