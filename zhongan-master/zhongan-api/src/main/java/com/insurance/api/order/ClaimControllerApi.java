package com.insurance.api.order;

import com.github.pagehelper.PageInfo;
import com.insurance.pojo.Claim;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value="理赔管理接口",description = "增、删、改、查")
public interface ClaimControllerApi {

    /**
     * 添加理赔信息
     * @param claim
     * @return
     */
    @ApiOperation("添加理赔信息")
    public boolean addCliam(Claim claim);

    /**
     * 查询理赔信息
     * @return
     */
    @ApiOperation("查询理赔信息")
    public PageInfo<Claim> selectClaim(Integer pageNo, Integer pageSize);
}
