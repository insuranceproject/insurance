package com.insurance.pojo;

/**
 * 用户保单详情(第三方表)
 */
public class UserPolicydetail {
    private Integer userId;  //用户编号
    private String productName; //产品名称
    private String policyStarttime; //起始时间
    private String policyEndtime; //结束时间
    private Integer planPrice; //产品金额
    private Integer policyStauts;   //保单状态
    private Integer policyBuyaddr;  //保单详情,购买渠道
    private String orderCreateTime;  //订单创建时间
    private String orderNumber;  //订单编号
    private String policyNumber;  //保单号
    private Integer productClaims;  //在线理赔

    public UserPolicydetail() {
    }

    public UserPolicydetail(Integer userId, String productName, String policyStarttime, String policyEndtime, Integer planPrice, Integer policyStauts, Integer policyBuyaddr, String orderCreateTime, String orderNumber, String policyNumber, Integer productClaims) {
        this.userId = userId;
        this.productName = productName;
        this.policyStarttime = policyStarttime;
        this.policyEndtime = policyEndtime;
        this.planPrice = planPrice;
        this.policyStauts = policyStauts;
        this.policyBuyaddr = policyBuyaddr;
        this.orderCreateTime = orderCreateTime;
        this.orderNumber = orderNumber;
        this.policyNumber = policyNumber;
        this.productClaims = productClaims;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
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

    public Integer getPolicyStauts() {
        return policyStauts;
    }

    public void setPolicyStauts(Integer policyStauts) {
        this.policyStauts = policyStauts;
    }

    public Integer getPolicyBuyaddr() {
        return policyBuyaddr;
    }

    public void setPolicyBuyaddr(Integer policyBuyaddr) {
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

    public Integer getProductClaims() {
        return productClaims;
    }

    public void setProductClaims(Integer productClaims) {
        this.productClaims = productClaims;
    }

    @Override
    public String toString() {
        return "UserPolicydetail{" +
                "userId=" + userId +
                ", productName='" + productName + '\'' +
                ", policyStarttime='" + policyStarttime + '\'' +
                ", policyEndtime='" + policyEndtime + '\'' +
                ", planPrice=" + planPrice +
                ", policyStauts=" + policyStauts +
                ", policyBuyaddr=" + policyBuyaddr +
                ", orderCreateTime='" + orderCreateTime + '\'' +
                ", orderNumber='" + orderNumber + '\'' +
                ", policyNumber='" + policyNumber + '\'' +
                ", productClaims=" + productClaims +
                '}';
    }
}
