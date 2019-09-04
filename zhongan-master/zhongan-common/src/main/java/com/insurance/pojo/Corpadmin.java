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
 *企业保险管理员
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
public class Corpadmin extends Model<Corpadmin> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "cadmin_id", type = IdType.AUTO)
    private Integer cadminId;

    private Integer corpId;

    private String cadminName;

    private String cadminIdentitycard;

    private String cadminIdentitycardimg;

    private String cadminOthercard1;

    private String cadminOthercard2;

    private String cadminOthercard3;


}
