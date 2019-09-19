package com.insurance.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.insurance.pojo.Certificates;

import java.util.List;

public interface CertificatesService extends IService<Certificates> {
    public List<Certificates> listCertByProId(Integer proId);
}
