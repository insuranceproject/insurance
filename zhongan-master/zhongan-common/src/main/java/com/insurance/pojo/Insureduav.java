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
 *被保无人机表
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
public class Insureduav extends Model<Insureduav> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "uav_id", type = IdType.AUTO)
    private Integer uavId;

    private Integer purposeId;

    private Integer detailId;

    private String uavBrand;

    private String uavModel;

    private String uavNumber;


}
