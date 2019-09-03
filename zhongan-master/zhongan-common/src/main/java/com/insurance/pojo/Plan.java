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
@TableName(value = "Insurance_plan")
public class Plan extends Model<Plan> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "plan_id", type = IdType.AUTO)
    private Integer plan_id;

    private String plan_name;

    private Integer plan_price;

    private Integer age_id;

    private Integer product_id;

    private Integer plan_term;

    private String plan_apply;

    private String plan_purpose;


}
