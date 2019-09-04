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
 *年龄区间表
 * </p>
 *
 * @author yumian
 * @since 2019-09-02
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain=true)
@TableName(value = "insurance_section")
public class Section extends Model<Section> implements Serializable{

    private static final long serialVersionUID = 1L;

    @TableId(value = "age_id", type = IdType.AUTO)
    private Integer ageId;

    private Integer ageMinage;

    private Integer ageMaxage;


}
