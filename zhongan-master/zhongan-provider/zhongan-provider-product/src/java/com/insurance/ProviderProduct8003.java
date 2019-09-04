package com.insurance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.session.data.redis.RedisFlushMode;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

@SpringBootApplication
@EnableEurekaClient          //本服务启动后会自动注册进eureka服务中
//这个注解是用来 设置sesion的时间，和在网关访问的情况下立即去redis拿数据
@EnableRedisHttpSession(maxInactiveIntervalInSeconds = 1800, //1800s
        redisFlushMode = RedisFlushMode.IMMEDIATE) //有更新就刷新缓存

public class ProviderProduct8003 {
    public static void main(String[] args)	{
        SpringApplication.run( ProviderProduct8003.class, args);
    }
}
