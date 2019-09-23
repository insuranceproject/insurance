package com.insurance.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.*;
import lombok.experimental.Accessors;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain=true)
@TableName(value = "insurance_user")
@ToString
/**
 * 用户表
 */
public class User implements Serializable {
    //主键
    @TableId(type = IdType.AUTO)
    private int userId;
    private String userName;
    private String userPassword;
    private String userPhonenumber;
    private String userEmail;
    private String userRole;

    public User(String userName) {
        this.userName = userName;
    }
}
