package com.insurance;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@MapperScan("com.insurance.mapper")
@EnableEurekaClient          //本服务启动后会自动注册进eureka服务中
public class Provider8001_App {
	public static void main(String[] args)	{
		SpringApplication.run(Provider8001_App.class, args);
	}
}
