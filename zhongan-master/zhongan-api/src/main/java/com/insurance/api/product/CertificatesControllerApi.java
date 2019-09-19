package com.insurance.api.product;

import com.insurance.pojo.Certificates;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

@Api(value="证件管理接口",description = "证件管理接口,提供证件的查询")
public interface CertificatesControllerApi {

    @ApiOperation("查询产品所支持的证件类型")
    public List<Certificates> listCertByProId(Integer proId);
}
