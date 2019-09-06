package com.insurance.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.insurance.pojo.Policy;
import com.insurance.pojo.User;
import org.apache.ibatis.annotations.Select;

public interface UserMapper extends BaseMapper<User> {
    /**
     * 用户显示分页+模糊姓名查询
     * @param page
     * @param userName
     * @return
     */
    public IPage<User> selectPageVo(Page page, String userName);



}
