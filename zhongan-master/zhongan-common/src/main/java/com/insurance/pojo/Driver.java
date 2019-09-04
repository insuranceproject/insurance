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
 *驾驶员表
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
@TableName(value = "Insurance_driver")
public class Driver extends Model<Driver> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "driver_id", type = IdType.AUTO)
    private Integer driverId;

    private Integer policyId;

    private String driverName;

    private String driverCert;

    private String driverCertnumber;

    private String driverCompany;

    private String driverSnumber;


}
