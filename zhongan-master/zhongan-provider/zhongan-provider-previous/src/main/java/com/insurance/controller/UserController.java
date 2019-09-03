package com.insurance.controller;


import com.insurance.api.user.UserControllerApi;
import com.insurance.pojo.User;
import com.insurance.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController implements UserControllerApi {
    @Autowired
    private UserService userservice;
    @RequestMapping("/user/getOne")
    public User getOne(){
        return userservice.getById(1);
    }
}
