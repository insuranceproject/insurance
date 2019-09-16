package com.insurance.controller;

import com.insurance.mapper.AuthenticationMapper;
import com.insurance.pojo.Authentication;
import com.insurance.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/Auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;

    /**
     * 判断用户是否实名
     * @param list
     * @return
     */
    @RequestMapping("selectByIds")
    public Collection<Authentication> selectByIds(List<Integer> list){
        return authenticationService.listByIds(list);
    }

}
