package com.insurance.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.List;

/**
 * <p>
 *作业用途表
 * </p>
 *
 * @author yumian
 * @since 2019-09-02 aa
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
@TableName(value = "insurance_purpose")
public class Purpose extends Model<Purpose>implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "purpose_id", type = IdType.AUTO)
    private Integer purposeId;

    private String purposeDetail;



}
