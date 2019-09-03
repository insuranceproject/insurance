package com.insurance.client;

import com.insurance.pojo.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient("PREVIOUS")
public interface UserClient {
    @GetMapping("/user/getOne")
    public User getOne();
}
