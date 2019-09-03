package com.insurance.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.insurance.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface UserMapper extends BaseMapper<User> {
}
