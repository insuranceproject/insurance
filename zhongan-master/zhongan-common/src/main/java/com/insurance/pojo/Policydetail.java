package com.insurance.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

/**
 * <p>
 *
 * </p>
 *
 * @author yumian
 * @since 2019-09-02
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
@TableName(value = "Insurance_policydetail")
public class Policydetail extends Model<Policydetail> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "detail_id", type = IdType.AUTO)
    private Integer detail_id;

    private LocalDateTime policy_endtime;

    private LocalDateTime policy_starttime;

    private Integer policy_buyaddr;

    private Integer insured_id;

    private Integer holder_id;

    private Integer plan_id;

    private Integer policy_id;

    private Integer proplan_id;


}
