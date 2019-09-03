package com.insurance.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.*;

import java.util.Set;
import java.util.concurrent.TimeUnit;

public class RedisUtil {
    @Autowired
    private RedisTemplate redisTemplate;

    /**
     * 写入缓存
     * @param key 键
     * @param value 值
     * @return
     */
    public boolean setCache(final String key,Object value){
        boolean result = false;
        try {
            ValueOperations operations = redisTemplate.opsForValue();
            operations.set(key, value);

            result = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 写入缓存并设置失效时间
     * @param key 键
     * @param value 值
     * @param time 时间
     * @return
     */
    public boolean setCacheAndTime(final String key,Object value,long time){
        boolean result = false;
        try {
            ValueOperations operations = redisTemplate.opsForValue();
            operations.set(key, value);
            redisTemplate.expire(key, time, TimeUnit.SECONDS);//TimeUnit.SECONDS:代表秒钟
            result = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 批量删除对应的value
     * @param keys
     */
    public void remove(final String... keys){
        for (String key:keys) {
            redisTemplate.delete(key);
        }
    }

    /**
     * 批量删除key,可模糊删除
     * @param pattern
     */
    public void removePattern(final String pattern){
        Set keys = redisTemplate.keys(pattern);
        if (keys.size()>0){
            redisTemplate.delete(keys);
        }
    }

    /**
     * 判断缓存中是否有对应的value
     * @param key
     * @return
     */
    public boolean exists(final String key){
        return redisTemplate.hasKey(key);
    }

    /**
     * 删除对应的value
     * @param key
     */
    public void remove(final String key){
        if (exists(key)){
            redisTemplate.delete(key);
        }
    }

    /**
     * 读取缓存
     * @param key 键
     * @return
     */
    public Object getCache(final String key){
        Object result = null;
        ValueOperations operations = redisTemplate.opsForValue();
        result  = operations.get(key);
        return result;
    }

    /**
     * 哈希添加
     * @param key 键
     * @param hashKey 哈希键
     * @param value 哈希值
     */
    public void hmSet(String key,Object hashKey,Object value){
        HashOperations hash = redisTemplate.opsForHash();
        hash.put(key,hashKey,value);
    }

    /**
     * 哈希获取数据
     * @param key 键
     * @param hashKey 哈希键
     * @return
     */
    public Object hmGet(String key,Object hashKey){
        HashOperations hash = redisTemplate.opsForHash();
       return  hash.get(key,hashKey);
    }

    /**
     * 列表添加数据
     * @param key 集合键
     * @param value 集合值
     */
    public void LPush(String key,Object value){
        ListOperations list = redisTemplate.opsForList();
        list.rightPush(key, value);
    }

    /**
     * 列表查询数据
     * @param key 列表键
     * @param start 开始下标
     * @param end 结束下标
     * @return
     */
    public Object LRang(String key,long start,long end){
        ListOperations list = redisTemplate.opsForList();
        return list.range(key,start,end);
    }

    /**
     * 集合添加
     * @param key
     * @param value
     */
    public void add(String key,Object value){
        SetOperations<String, Object> set = redisTemplate.opsForSet();
        set.add(key,value);
    }

    /**
     * 集合获取
     * @param key
     * @return
     */
    public Set<Object> setMembers(String key){
        SetOperations<String, Object> set = redisTemplate.opsForSet();
        return set.members(key);
    }

    /**
     * 有序集合添加
     * @param key
     * @param value
     * @param scoure
     */
    public void zAdd(String key,Object value,double scoure){
        ZSetOperations<String, Object> zset = redisTemplate.opsForZSet();
        zset.add(key,value,scoure);
    }

    /**
     * 有序集合获取
     * @param key
     * @param scoure
     * @param scoure1
     * @return
     */
    public Set<Object> rangeByScore(String key, double scoure, double scoure1){
        ZSetOperations<String, Object> zset = redisTemplate.opsForZSet();
        return zset.rangeByScore(key, scoure, scoure1);
    }



}
