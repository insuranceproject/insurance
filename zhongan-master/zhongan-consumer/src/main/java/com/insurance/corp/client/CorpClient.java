package com.insurance.corp.client;

import com.insurance.pojo.Corp;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient("PROVIDER-CORP")
public interface CorpClient {

    /**
     * 企业注册
     * @param corp
     * @return
     */
    @PostMapping("/corp/registeredCorp")
    public boolean registeredCorp(@RequestBody Corp corp);

    /**
     * 根据邮箱查询企业用户
     * @param emails
     * @return
     */
    @PostMapping("/corp/getCorpByEmail")
    public Corp getCorpByEmail(@RequestBody String emails);
}
