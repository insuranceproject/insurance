package com.insurance.util;

import java.net.*;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;

public class TimeUtil {

    /**
     * 获取当前系统时间：小时
     * @return
     */
    public String getHours(){
        SimpleDateFormat df = new SimpleDateFormat("HH");//设置日期格式
        return df.format(new Date()).toString();
    }


    /**
     * 获取当前系统时间
     * 精确到秒
     * @return
     */
    public String getTimeBySeconds(){
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        return df.format(new Date()).toString();
    }

    public Date getBJTime(){
        try {
            URL url = new URL("http://www.baidu.com");// 取得资源对象
            URLConnection uc = url.openConnection();// 生成连接对象
            uc.connect();// 发出连接
            long ld = uc.getDate();// 读取网站日期时间
            Date date = new Date(ld);// 转换为标准时间对象
            return date;
        }catch (Exception ex){
            System.out.println(ex.getMessage());
        }
        return null;
    }
}
