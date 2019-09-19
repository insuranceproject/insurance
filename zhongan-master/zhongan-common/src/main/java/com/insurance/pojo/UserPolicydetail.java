package com.insurance.pojo;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * 用户保单详情(第三方表)
 */
public class UserPolicydetail {
    private String productName; //产品名称
    private String policyStarttime; //起始时间
    private String policyEndtime; //结束时间
    private Integer planPrice; //产品金额
    private String policyStauts;   //保单状态
    private String policyBuyaddr;  //保单详情,购买渠道

    @Override
    public String toString() {
        return "UserPolicydetail{" +
                "productName='" + productName + '\'' +
                ", policyStarttime='" + policyStarttime + '\'' +
                ", policyEndtime='" + policyEndtime + '\'' +
                ", planPrice=" + planPrice +
                ", policyStauts='" + policyStauts + '\'' +
                ", policyBuyaddr='" + policyBuyaddr + '\'' +
                '}';
    }

    public UserPolicydetail() {
    }

    public UserPolicydetail(String productName, String policyStarttime, String policyEndtime, Integer planPrice, String policyStauts, String policyBuyaddr) {
        this.productName = productName;
        this.policyStarttime = policyStarttime;
        this.policyEndtime = policyEndtime;
        this.planPrice = planPrice;
        this.policyStauts = policyStauts;
        this.policyBuyaddr = policyBuyaddr;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getPolicyStarttime() {
        return policyStarttime;
    }

    public void setPolicyStarttime(String policyStarttime) {
        this.policyStarttime = policyStarttime;
    }

    public String getPolicyEndtime() {
        return policyEndtime;
    }

    public void setPolicyEndtime(String policyEndtime) {
        this.policyEndtime = policyEndtime;
    }

    public Integer getPlanPrice() {
        return planPrice;
    }

    public void setPlanPrice(Integer planPrice) {
        this.planPrice = planPrice;
    }

    public String getPolicyStauts() {
        return policyStauts;
    }

    public void setPolicyStauts(String policyStauts) {
        this.policyStauts = policyStauts;
    }

    public String getPolicyBuyaddr() {
        return policyBuyaddr;
    }

    public void setPolicyBuyaddr(String policyBuyaddr) {
        this.policyBuyaddr = policyBuyaddr;
    }
}
