package com.insurance.api.order;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@Api(value="文件上传接口")
public interface FastDFSControllerApi {

    @ApiOperation("文件上传")
    public Map upload(@RequestPart(value = "multipartFile") MultipartFile multipartFile);
}
