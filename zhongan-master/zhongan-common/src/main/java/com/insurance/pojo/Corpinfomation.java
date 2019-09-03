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
@TableName(value = "Insurance_corpinfomation")
public class Corpinfomation extends Model<Corpinfomation> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "corpinfo_id", type = IdType.AUTO)
    private Integer corpinfo_id;

    private Integer cert_id;

    private Integer corp_id;

    private String corpinfo_number;

    private String corpinfo_name;

    private String corpinfo_properties;

    private String corpinfo_address;

    private String corpinfo_license;

    private String corpinfo_legalperson;

    private String corpinfo_identitycard;

    private String corpinfo_contactaddress;

    private String corpinfo_contactaddressdetail;


}
