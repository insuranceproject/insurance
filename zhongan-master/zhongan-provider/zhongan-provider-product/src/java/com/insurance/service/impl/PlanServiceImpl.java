package com.insurance.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.insurance.mapper.PlanMapper;
import com.insurance.mapper.UavPriceMapper;
import com.insurance.pojo.Plan;
import com.insurance.pojo.Uavprice;
import com.insurance.service.PlanService;
import com.insurance.util.ProductMongoUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PlanServiceImpl extends ServiceImpl<PlanMapper, Plan> implements PlanService {
    @Autowired
    private UavPriceMapper uavPriceMapper;

    @Autowired
    private PlanMapper planMapper;

    @Override
    public List<Plan> getPlanPrice(Integer proId,Integer modelPrice){
        List<Plan> planList = planMapper.selectList(new QueryWrapper<Plan>().eq("product_id", proId));
        Uavprice uavprice = uavPriceMapper.selectOne(new QueryWrapper<Uavprice>().le("price_min", modelPrice).ge("price_max", modelPrice));
        for (Plan plan:planList) {
            int price = (int) (plan.getPlanPrice() * uavprice.getPriceRate());
            plan.setPlanPrice(price);
        }
        return planList;
    }
}
