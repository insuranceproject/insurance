package com.insurance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.session.data.redis.RedisFlushMode;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
//exclude = DataSourceAutoConfiguration.class

@EnableEurekaClient
//开启Feign支持
@EnableFeignClients
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
//这个注解是用来 设置sesion的时间，和在网关访问的情况下立即去redis拿数据
@EnableRedisHttpSession(maxInactiveIntervalInSeconds = 1800, //1800s
		redisFlushMode = RedisFlushMode.IMMEDIATE) //有更新就刷新缓存
public class Consumer80_App {
	public static void main(String[] args)	{
		SpringApplication.run( Consumer80_App.class, args);
	}
}
