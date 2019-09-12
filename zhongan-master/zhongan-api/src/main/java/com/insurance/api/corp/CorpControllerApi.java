package com.insurance.api.corp;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.insurance.pojo.Corp;
import com.insurance.pojo.Policy;
import com.insurance.pojo.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value="企业用户管理",description = "登陆,注册等操作")
public interface CorpControllerApi {

    /**
     * 注册企业用户
     * @param corp
     * @return
     */
    @ApiOperation("注册企业用户")
    public boolean registeredCorp(Corp corp);

    /**
     * 根据邮箱查询企业用户
     * @param emails
     * @return
     */
    @ApiOperation("根据邮箱查询企业用户")
    public Corp getCorpByEmail(String emails);


}
