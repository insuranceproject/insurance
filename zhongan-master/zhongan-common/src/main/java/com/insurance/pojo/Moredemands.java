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
 *更多需求表
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
@TableName(value = "Insurance_moredemands")
public class Moredemands extends Model<Moredemands> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "demande_id", type = IdType.AUTO)
    private Integer demandeId;

    private String demandeName;

    private Integer ageId;

    private Integer demandePrice;

    private Integer productId;


}
