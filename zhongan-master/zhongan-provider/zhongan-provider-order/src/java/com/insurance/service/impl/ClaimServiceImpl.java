package com.insurance.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.insurance.mapper.ClaimMapper;
import com.insurance.pojo.Claim;
import com.insurance.pojo.UserPolicydetail;
import com.insurance.service.ClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ClaimServiceImpl extends ServiceImpl<ClaimMapper, Claim> implements ClaimService {

    @Autowired
    private ClaimMapper claimMapper;

    @Override
    public PageInfo<Claim> selectClaim(Integer pageNo, Integer pageSize) {
        PageHelper.startPage(pageNo, pageSize);
        List<Claim> list = claimMapper.selectClaim();
        PageInfo<Claim> pageInfo = new PageInfo<>(list);
        return pageInfo;
    }
}
