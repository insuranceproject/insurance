package com.insurance.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.insurance.pojo.Policy;

public interface PolicyService extends IService<Policy> {
    /**
     * 保单显示分页+保单号查询(不模糊)
     * @param page
     * @param number
     * @return
     */
    public IPage<Policy> selectPagePolicy(Page<Policy> page, Integer number);
}
