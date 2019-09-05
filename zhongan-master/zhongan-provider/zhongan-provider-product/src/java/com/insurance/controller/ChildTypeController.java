package com.insurance.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.insurance.api.childtype.ChildTypeControllerApi;
import com.insurance.pojo.Childtype;
import com.insurance.service.ChildTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ChildTypeController implements ChildTypeControllerApi {

    @Autowired
    private ChildTypeService childTypeService;

    @Override
    public List<Childtype> findByParId(Integer parId) {
        return childTypeService.list(new QueryWrapper<Childtype>().eq("parent_id",parId));
    }
}
