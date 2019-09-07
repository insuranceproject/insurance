package com.insurance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClient;
//exclude = DataSourceAutoConfiguration.class

@EnableEurekaClient
//开启Feign支持
@EnableFeignClients
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class Consumer80_App {
	public static void main(String[] args) {

		SpringApplication.run(Consumer80_App.class, args);
	}
}
