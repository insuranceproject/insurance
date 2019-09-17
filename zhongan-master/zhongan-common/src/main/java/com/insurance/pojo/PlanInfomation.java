package com.insurance.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import javax.swing.text.AbstractDocument;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlanInfomation {
    private Integer planId;
    private String content;
}
