package com.insurance.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.PurposeMapper;
import com.insurance.pojo.Purpose;
import com.insurance.service.PurposeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class
PurposeServiceImpl extends ServiceImpl<PurposeMapper, Purpose> implements PurposeService {
}
