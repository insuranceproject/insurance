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
@TableName(value = "Insurance_policy")
public class Policy extends Model<Policy> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "policy_id", type = IdType.AUTO)
    private Integer policy_id;

    private Integer policy_stauts;

    private Integer policy_number;

    private Integer order_id;

    private Integer policy_type;


}
