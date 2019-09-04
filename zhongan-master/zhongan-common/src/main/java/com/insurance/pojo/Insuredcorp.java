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
 *被保企业表
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
@TableName(value = "Insurance_insuredcorp")
public class Insuredcorp extends Model<Insuredcorp> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "incorp_id", type = IdType.AUTO)
    private Integer incorpId;

    private Integer certId;

    private Integer insuredId;

    private String incorpName;

    private String incorpNumber;


}
