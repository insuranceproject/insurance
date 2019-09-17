package com.insurance.controller;

import com.insurance.api.product.TypeControllerApi;
import com.insurance.pojo.Partype;
import com.insurance.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/type")
public class TypeController implements TypeControllerApi {

    @Autowired
    private TypeService typeService;

    @GetMapping("findAll")
    @Override
    public List<Partype> findAll(){
        return typeService.list();
    }
}
