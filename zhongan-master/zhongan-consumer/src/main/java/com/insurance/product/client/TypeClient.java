package com.insurance.product.client;

import com.insurance.pojo.Partype;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@FeignClient("PROVIDER-PRODUCT")
public interface TypeClient {
    @GetMapping("/type/findAll")
    public List<Partype> findAll();
}
