package com.insurance.pojo;

import java.io.Serializable;

/**
 * 用户保单详情(第三方表)
 */
public class UserPolicydetail implements Serializable {
    private String productName; //产品名称
    private String policyStarttime; //起始时间
    private String policyEndtime; //结束时间
    private Integer planPrice; //产品金额
    private String policyStauts;   //保单状态
    private String policyBuyaddr;  //保单详情,购买渠道
    private String orderCreateTime;  //订单创建时间
    private String orderNumber;  //订单编号
    private String policyNumber;  //保单号

    @Override
    public String toString() {
        return "UserPolicydetail{" +
                "productName='" + productName + '\'' +
                ", policyStarttime='" + policyStarttime + '\'' +
                ", policyEndtime='" + policyEndtime + '\'' +
                ", planPrice=" + planPrice +
                ", policyStauts='" + policyStauts + '\'' +
                ", policyBuyaddr='" + policyBuyaddr + '\'' +
                ", orderCreateTime='" + orderCreateTime + '\'' +
                ", orderNumber='" + orderNumber + '\'' +
                ", policyNumber='" + policyNumber + '\'' +
                '}';
    }

    public UserPolicydetail() {
    }

    public UserPolicydetail(String productName, String policyStarttime, String policyEndtime, Integer planPrice, String policyStauts, String policyBuyaddr, String orderCreateTime, String orderNumber, String policyNumber) {
        this.productName = productName;
        this.policyStarttime = policyStarttime;
        this.policyEndtime = policyEndtime;
        this.planPrice = planPrice;
        this.policyStauts = policyStauts;
        this.policyBuyaddr = policyBuyaddr;
        this.orderCreateTime = orderCreateTime;
        this.orderNumber = orderNumber;
        this.policyNumber = policyNumber;
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

    public String getOrderCreateTime() {
        return orderCreateTime;
    }

    public void setOrderCreateTime(String orderCreateTime) {
        this.orderCreateTime = orderCreateTime;
    }

    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getPolicyNumber() {
        return policyNumber;
    }

    public void setPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
    }
}
