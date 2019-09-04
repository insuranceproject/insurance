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
 *企业信息表
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
@TableName(value = "Insurance_corpinfomation")
public class Corpinfomation extends Model<Corpinfomation> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "corpinfo_id", type = IdType.AUTO)
    private Integer corpinfoId;

    private Integer certIid;

    private Integer corpId;

    private String corpinfoNumber;

    private String corpinfoName;

    private String corpinfoProperties;

    private String corpinfoAddress;

    private String corpinfoLicense;

    private String corpinfoLegalperson;

    private String corpinfoIdentitycard;

    private String corpinfoContactaddress;

    private String corpinfoContactaddressdetail;


}
