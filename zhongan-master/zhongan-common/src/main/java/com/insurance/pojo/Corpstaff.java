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
@TableName(value = "Insurance_corpstaff")
public class Corpstaff extends Model<Corpstaff> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "staff_id", type = IdType.AUTO)
    private Integer staff_id;

    private String staff_account;

    private String staff_password;

    private String staff_name;

    private Integer corp_id;

    private Integer staff_status;


}
