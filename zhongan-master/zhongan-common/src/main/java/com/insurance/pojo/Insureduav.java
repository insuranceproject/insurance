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
@TableName(value = "Insurance_insureduav")
public class Insureduav extends Model<Insureduav> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "uav_id", type = IdType.AUTO)
    private Integer uav_id;

    private Integer purpose_id;

    private Integer detail_id;

    private String uav_brand;

    private String uav_model;

    private String uav_number;


}
