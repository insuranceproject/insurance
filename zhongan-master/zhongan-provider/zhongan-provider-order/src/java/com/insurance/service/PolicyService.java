package com.insurance.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.github.pagehelper.PageInfo;
import com.insurance.pojo.Policy;

import java.util.List;

public interface PolicyService extends IService<Policy> {

    /**
     * 保单管理的分页显示+根据保单号查询
     * @param pageNo
     * @param pageSize
     * @param number
     * @return
     */
    public PageInfo<Policy> selectPagePolicy(Integer pageNo, Integer pageSize, String number);

    /**
     * 根据用户id查询保单
     * @param userId
     * @return
     */
    public List<Policy> getPolicyByUserId(Integer userId);

}
