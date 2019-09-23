package com.insurance.controller;

import com.github.pagehelper.PageInfo;
import com.insurance.api.order.ClaimControllerApi;
import com.insurance.pojo.Claim;
import com.insurance.service.ClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ClaimController implements ClaimControllerApi {

    @Autowired
    private ClaimService claimService;

    @PostMapping("/order/addCliam")
    @Override
    public boolean addCliam(@RequestBody Claim claim) {
        return claimService.save(claim);
    }

    @GetMapping("/order/selectClaim")
    @Override
    public PageInfo<Claim> selectClaim(@RequestParam("pageNo") Integer pageNo,@RequestParam("pageSize") Integer pageSize) {
        return claimService.selectClaim(pageNo,pageSize);
    }
}
