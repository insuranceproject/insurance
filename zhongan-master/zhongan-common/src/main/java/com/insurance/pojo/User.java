package com.insurance.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain=true)
@TableName(value = "insurance_user")
public class User {
    @TableId(type = IdType.AUTO)
    private int userId;
    private String userName;
    private String userPassword;
    private String userPhonenumber;
    private String userEmail;
    private String userRole;
}
