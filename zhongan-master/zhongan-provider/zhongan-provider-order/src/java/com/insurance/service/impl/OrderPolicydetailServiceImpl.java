package com.insurance.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.insurance.mapper.OrderPolicydetailMapper;
import com.insurance.pojo.Policy;
import com.insurance.pojo.UserPolicydetail;
import com.insurance.service.OrderPolicydetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@Transactional
public class OrderPolicydetailServiceImpl implements OrderPolicydetailService {

    @Autowired
    private OrderPolicydetailMapper orderPolicydetailMapper;

    @Override
    public PageInfo<UserPolicydetail> selectOrder(Integer pageNo, Integer pageSize, Map<String, Object> map) {
        PageHelper.startPage(pageNo, pageSize);
        List<UserPolicydetail> list = orderPolicydetailMapper.selectOrder(map);
        PageInfo<UserPolicydetail> pageInfo = new PageInfo<>(list);
        return pageInfo;
    }
}
