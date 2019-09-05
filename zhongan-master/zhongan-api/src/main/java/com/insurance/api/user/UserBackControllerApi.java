package com.insurance.api.user;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.insurance.pojo.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.ibatis.annotations.Param;

@Api(value="后台用户管理接口",description = "用户的分页显示")
public interface UserBackControllerApi {

    @ApiOperation("用户的分页显示")
    public IPage<User> UserPage(Page<User> page, String userName);

}
