package com.insurance.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.insurance.mapper.PolicyMapper;
import com.insurance.pojo.Policy;
import com.insurance.service.PolicyService;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class PolicyServiceImpl extends ServiceImpl<PolicyMapper, Policy> implements PolicyService {

    @Autowired
    private PolicyMapper policyMapper;

    /**
     * 保单管理的分页显示+根据保单号查询
     * @param pageNo
     * @param pageSize
     * @param number
     * @return
     */
    @Override
    public PageInfo<Policy> selectPagePolicy(Integer pageNo, Integer pageSize, String number) {
        Page<Policy> page = PageHelper.startPage(pageNo, pageSize);
        PageInfo pageInfo=new PageInfo();
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("policy_number",number);
        List<Policy> list = policyMapper.selectPagePolicy(map);
        pageInfo=page.toPageInfo();
        pageInfo.setList(list);
        return pageInfo;
    }

    @Override
    public List<Policy> getPolicyByUserId(Integer userId) {
        return policyMapper.getPolicyByUserId(userId);
    }
}
