package com.insurance.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.CenterCertificatesMapper;
import com.insurance.mapper.CertificatesMapper;
import com.insurance.pojo.CenterCertificates;
import com.insurance.pojo.Certificates;
import com.insurance.service.CertificatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CertificatesServiceImpl extends ServiceImpl<CertificatesMapper, Certificates> implements CertificatesService {

    @Autowired
    CenterCertificatesMapper centerCertificatesMapper;

    @Autowired
    CertificatesMapper certificatesMapper;

    @Override
    public List<Certificates> listCertByProId(Integer proId){
        List<CenterCertificates> centerList = centerCertificatesMapper.selectList(new QueryWrapper<CenterCertificates>().eq("product_id", proId));
        List<Integer> ids = new ArrayList<Integer>();
        if (centerList.size()>0){
            for (CenterCertificates center:centerList) {
                ids.add(center.getCertId());
            }
        }
        if (ids.size()>0){
            return certificatesMapper.selectBatchIds(ids);
        }
        return null;
    }
}
