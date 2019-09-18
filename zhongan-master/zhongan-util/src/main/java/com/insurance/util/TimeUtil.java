package com.insurance.util;

import org.junit.Test;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

public class TimeUtil {

    /**
     * 获取当前系统时间：小时
     *
     * @return
     */
    public String getHours() {
        SimpleDateFormat df = new SimpleDateFormat("HH");//设置日期格式
        return df.format(new Date()).toString();
    }


    /**
     * 获取当前系统时间
     * 精确到秒
     *
     * @return
     */
    public String getTimeBySeconds() {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        return df.format(new Date()).toString();
    }

    public void getTime() {
        DateTimeFormatter df = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime time = LocalDateTime.now();
        String localTime = df.format(time);
        LocalDateTime ldt = LocalDateTime.parse("2018-01-12 17:07:05", df);
        System.out.println("LocalDateTime转成String类型的时间：" + localTime);
        System.out.println("String类型的时间转成LocalDateTime：" + ldt);
    }

    public Date getChinaTime() {
        DateFormat format2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        String format = format2.format(date);
        try {
            date = format2.parse(format);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }
}
