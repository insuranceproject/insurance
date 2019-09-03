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

import java.time.LocalDateTime;

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
@TableName(value = "Insurance_authentication")
public class Authentication extends Model<Authentication> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "auth_id", type = IdType.AUTO)
    private Integer auth_id;

    private Integer user_id;

    private String auth_realname;

    private String auth_identitycard;

    private LocalDateTime auth_borndate;

    private Integer auth_sex;


}
