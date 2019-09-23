package com.insurance.mapper;

import com.insurance.pojo.UserPolicydetail;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Mapper
@Component
public interface OrderPolicydetailMapper {

    /**
     * 根据条件查询订单
     * @return
     */
    @Select({
            "<script>SELECT * FROM insurance_order a " +
            "INNER JOIN insurance_policy b ON a.order_id = b.order_id " +
            "INNER JOIN insurance_policydetail c ON b.policy_id = c.policy_id " +
            "INNER JOIN insurance_plan d ON c.plan_id = d.plan_id " +
            "INNER JOIN insurance_product e ON d.product_id = e.product_id " +
            "WHERE user_id = #{user_id}" +
            "<if test='policy_stauts != null and policy_stauts != 0'> AND policy_stauts = #{policy_stauts} </if> " +
            "<if test='order_number != null'> AND order_number = #{order_number} </if> " +
            "<if test='policy_number != null'> OR policy_number = #{policy_number} </if></script>"
    })
    public List<UserPolicydetail> selectOrder(Map<String,Object> map);
}
