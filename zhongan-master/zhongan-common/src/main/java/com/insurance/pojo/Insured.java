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
@TableName(value = "Insurance_insured")
public class Insured extends Model<Insured> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "insured_id", type = IdType.AUTO)
    private Integer insuredId;

    private String insuredRealname;

    private Integer insuredSex;

    private LocalDateTime insuredBorndate;

    private Integer certId;

    private String insuredNumber;

    private Integer relationId;

    private Integer insuredPhonenumber;

    private String insuredEmail;


}
