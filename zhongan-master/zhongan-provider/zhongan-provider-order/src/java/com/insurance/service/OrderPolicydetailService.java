package com.insurance.service;

import com.github.pagehelper.PageInfo;
import com.insurance.pojo.UserPolicydetail;

import java.util.List;
import java.util.Map;

public interface OrderPolicydetailService {

    /**
     * 根据条件分页查询订单
     * @return
     */
    public PageInfo<UserPolicydetail> selectOrder(Integer pageNo,Integer pageSize,Map<String,Object> map);
}
