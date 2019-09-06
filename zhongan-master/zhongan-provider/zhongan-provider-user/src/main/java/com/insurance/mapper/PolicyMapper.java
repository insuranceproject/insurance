package com.insurance.mapper;


import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.insurance.pojo.Policy;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface PolicyMapper extends BaseMapper<Policy> {

    /**
     * 保单显示分页+保单号查询(不模糊)
     * @param page
     * @param
     * @return
     */
    @Select("SELECT * FROM insurance_policy p INNER JOIN insurance_order o ON p.order_id=o.order_id where policy_number=#{policy_number}")  //
    public IPage selectPagePolicy(Page<Policy> page,@Param("policy_number") Integer number);

}
