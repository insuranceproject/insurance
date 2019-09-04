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
import sun.plugin2.message.Serializer;

import java.io.Serializable;

/**
 * <p>
 *证件中间表
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
@TableName(value = "Insurance_center_certificates")
public class CenterCertificates extends Model<CenterCertificates> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "centercert_id", type = IdType.AUTO)
    private Integer centercertId;

    private Integer certId;

    private Integer productId;


}
