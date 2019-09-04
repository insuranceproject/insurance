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
 *员工账户与角色中间表
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
@TableName(value = "Insurance_corpstaff_staffrole")
public class CorpstaffStaffrole extends Model<CorpstaffStaffrole> implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "cs_id", type = IdType.AUTO)
    private Integer csId;

    private Integer staffId;

    private Integer roleId;


}
