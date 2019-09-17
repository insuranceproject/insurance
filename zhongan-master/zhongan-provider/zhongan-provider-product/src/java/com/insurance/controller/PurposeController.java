package com.insurance.controller;

import com.insurance.api.product.PurposeControllerApi;
import com.insurance.pojo.Purpose;
import com.insurance.service.PurposeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/purpose")
public class PurposeController implements PurposeControllerApi {

    private PurposeService purposeService;

    @GetMapping("/findAll")
    @Override
    public List<Purpose> findAll() {
        return purposeService.list();
    }
}
