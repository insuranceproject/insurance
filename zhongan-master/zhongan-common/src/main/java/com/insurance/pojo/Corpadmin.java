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
@TableName(value = "Insurance_corpadmin")
public class Corpadmin extends Model<Corpadmin> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "cadmin_id", type = IdType.AUTO)
    private Integer cadmin_id;

    private Integer corp_id;

    private String cadmin_name;

    private String cadmin_identitycard;

    private String cadmin_identitycardimg;

    private String cadmin_othercard1;

    private String cadmin_othercard2;

    private String cadmin_othercard3;


}
