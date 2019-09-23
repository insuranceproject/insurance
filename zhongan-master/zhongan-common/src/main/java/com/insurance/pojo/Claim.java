package com.insurance.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * <p>
 *理赔查询表
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
@TableName(value = "Insurance_claim")
public class Claim extends Model<Claim> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "claim_id", type = IdType.AUTO)
    private Integer claimId;   //报案号

    private String productName;   //产品名称

    private LocalDateTime claimReporttime;   ///报案时间

    private Integer claimStatus;   //状态
}
