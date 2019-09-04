package com.insurance.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.TypeMapper;
import com.insurance.pojo.Partype;
import com.insurance.service.TypeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TypeServiceImpl extends ServiceImpl<TypeMapper, Partype> implements TypeService {
}
