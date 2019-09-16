package com.insurance.api.order;

import com.github.pagehelper.PageInfo;
import com.insurance.pojo.Policy;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value="订单保单管理接口",description = "增、删、改、查")
public interface OrderControllerApi {


    /**
     * 保单管理的分页显示+根据保单号查询
     * @param pageNo
     * @param pageSize
     * @param number
     * @return
     */
    @ApiOperation("保单的分页显示")
    public String PolicyPage(Integer pageNo, Integer pageSize, String number);
}
