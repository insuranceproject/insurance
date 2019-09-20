package com.insurance.controller;

import com.insurance.api.product.CertificatesControllerApi;
import com.insurance.pojo.Certificates;
import com.insurance.service.CertificatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/cert")
public class CertificatesController implements CertificatesControllerApi {

    @Autowired
    private CertificatesService certificatesService;

    @GetMapping("/listCertByProId")
    @Override
    public List<Certificates> listCertByProId(Integer proId) {
       return certificatesService.listCertByProId(proId);
    }
}
