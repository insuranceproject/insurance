package com.insurance.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.ChildTypeMapper;
import com.insurance.mapper.ProductMapper;
import com.insurance.pojo.Childtype;
import com.insurance.pojo.Product;
import com.insurance.service.ChildTypeService;
import com.insurance.service.ProductService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ChildTypeServiceImpl extends ServiceImpl<ChildTypeMapper, Childtype> implements ChildTypeService {
}
