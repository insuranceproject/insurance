package com.insurance.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.github.pagehelper.PageInfo;
import com.insurance.pojo.Claim;

public interface ClaimService extends IService<Claim> {

    /**
     * 分页查询所有理赔信息
     * @param pageNo
     * @param pageSize
     * @return
     */
    public PageInfo<Claim> selectClaim(Integer pageNo,Integer pageSize);
}
