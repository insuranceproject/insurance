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

import java.io.Serializable;

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
@TableName(value = "insurance_purpose_uavbrand")
public class PurposeUavbrand extends Model<PurposeUavbrand> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "pu_id", type = IdType.AUTO)
    private Integer pu_id;

    private Integer purpose_id;

    private Integer brand_id;

    private Integer model_id;


}
