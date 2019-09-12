package com.insurance.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.insurance.pojo.Authentication;
import com.insurance.pojo.Corp;
import com.insurance.pojo.User;
import org.apache.ibatis.annotations.Select;

public interface CorpMapper extends BaseMapper<Corp> {

}