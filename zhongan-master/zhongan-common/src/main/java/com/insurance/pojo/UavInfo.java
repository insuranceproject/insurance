package com.insurance.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UavInfo implements Serializable {
    private Policyholder holder;
    private Insured insured;
    private Driver driver;
    private Insureduav uav;
    private Product product;
    private Plan plan;
    private String price;
    private String startTime;
    private  String endTime;
    private String certName;

}
