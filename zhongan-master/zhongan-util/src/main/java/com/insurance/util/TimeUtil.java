package com.insurance.util;

import java.text.SimpleDateFormat;
import java.util.Date;

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
}
