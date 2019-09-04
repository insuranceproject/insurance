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
import java.time.LocalDateTime;

/**
 * <p>
 *投保人表
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
public class Policyholder extends Model<Policyholder> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "holder_id", type = IdType.AUTO)
    private Integer holderId;

    private String holderRealname;

    private Integer holderSex;

    private LocalDateTime holderBorndate;

    private Integer certId;

    private String holderNumber;

    private String holderPhonenumber;

    private String holderEmail;

    private Integer holderState;


}
