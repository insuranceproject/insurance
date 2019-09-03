package com.insurance.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.insurance.pojo.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


public interface UserService extends IService<User> {
}
