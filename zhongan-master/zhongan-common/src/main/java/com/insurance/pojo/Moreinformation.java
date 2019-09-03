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
@TableName(value = "Insurance_moreinformation")
public class Moreinformation extends Model<Moreinformation> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "mation_id", type = IdType.AUTO)
    private Integer mation_id;

    private Integer product_id;

    private String mation_detail;

    private Integer mation_state;


}
