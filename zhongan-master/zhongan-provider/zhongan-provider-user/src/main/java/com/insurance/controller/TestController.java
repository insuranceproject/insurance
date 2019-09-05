package com.insurance.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class TestController {

    @GetMapping("/session")
    public Object getsession(HttpSession session){
        System.out.println(session.getId());
        return session.getAttribute("name");
    }



}
