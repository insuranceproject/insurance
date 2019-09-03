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
@TableName(value = "insurance_projectplan")
public class Projectplan extends Model<Projectplan> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "proplan_id", type = IdType.AUTO)
    private Integer proplan_id;

    private Integer project_id;

    private String proplan_name;

    private Integer proplan_peoples;

    private Integer proplan_money;


}
