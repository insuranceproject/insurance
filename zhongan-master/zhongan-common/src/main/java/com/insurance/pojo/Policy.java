package com.insurance.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.*;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * <p>
 *保单表
 * </p>
 *
 * @author yumian
 * @since 2019-09-02
 */
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
@TableName(value = "Insurance_policy")
public class Policy extends Model<Policy> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "policy_id", type = IdType.AUTO)
    private Integer policyId;

    private Integer policyStauts;

    private String policyNumber;

    private Integer orderId;

    private Integer policyType;


    private String orderNumber;   //订单编号

    private Integer userId;     //订单所属人编号

    private Date orderCreatetime;  //订单时间

    private Integer orderCost;  //订单金额

    private Integer orderStatus;   //订单状态


}
