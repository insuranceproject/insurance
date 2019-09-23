package com.insurance.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.insurance.pojo.Claim;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface ClaimMapper extends BaseMapper<Claim> {

    /**
     * 查询所有理赔信息
     * @return
     */
    @Select("select * from insurance_claim")
    public List<Claim> selectClaim();
}
