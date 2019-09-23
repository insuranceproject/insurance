package com.insurance.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.api.corp.CorpControllerApi;
import com.insurance.pojo.Corp;
import com.insurance.pojo.User;
import com.insurance.service.CorpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/corp")
public class CorpController implements CorpControllerApi {

    @Autowired
    private CorpService corpService;

    /**
     * 企业用户注册
     * @param corp
     * @return
     */
    @Override
    @PostMapping("/registeredCorp")
    public boolean registeredCorp(@RequestBody Corp corp) {
        return corpService.save(corp);
    }

    /**
     * 根据邮箱查询企业用户
     * @param emails
     * @return
     */
    @Override
    @PostMapping("/getCorpByEmail")
    public Corp getCorpByEmail(@RequestBody String emails) {
        return corpService.getOne(new QueryWrapper<Corp>().eq("corp_Email",emails));
    }
}
