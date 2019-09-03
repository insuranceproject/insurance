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
@TableName(value = "Insurance_policyholder")
public class Policyholder extends Model<Policyholder> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "holder_id", type = IdType.AUTO)
    private Integer holder_id;

    private String holder_realname;

    private Integer holder_sex;

    private LocalDateTime holder_borndate;

    private Integer cert_id;

    private String holder_number;

    private String holder_phonenumber;

    private String holder_email;

    private Integer holder_state;


}
