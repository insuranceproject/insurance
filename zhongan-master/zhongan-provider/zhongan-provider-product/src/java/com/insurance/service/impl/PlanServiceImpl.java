package com.insurance.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.PlanMapper;
import com.insurance.mapper.ProductMapper;
import com.insurance.pojo.Plan;
import com.insurance.pojo.Product;
import com.insurance.service.PlanService;
import com.insurance.util.ProductMongoUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PlanServiceImpl extends ServiceImpl<PlanMapper, Plan> implements PlanService {
}
