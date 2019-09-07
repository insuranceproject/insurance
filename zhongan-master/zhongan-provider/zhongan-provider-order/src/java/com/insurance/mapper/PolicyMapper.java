package com.insurance.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.insurance.pojo.Policy;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

public interface PolicyMapper extends BaseMapper<Policy> {

    /**
     * 保单显示分页+保单号查询(不模糊)
     * @param
     * @param
     * @return
     */
    @Select({"<script>",
            "SELECT * FROM insurance_policy p ",
            "LEFT JOIN insurance_order o ON p.order_id=o.order_id ",
            "where 1=1 ",
            "<when test='policy_number!=null'>",
            "and policy_number=#{policy_number}",
            "</when>",
            "</script>"})
    public List<Policy> selectPagePolicy(Map<String, Object> map);

}
