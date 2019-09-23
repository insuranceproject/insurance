package com.insurance.util;

import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import com.insurance.pojo.Authentication;

import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
import org.junit.Test;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.ParseException;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class CodeUtil {

    /**
     * 邮箱验证码
     */
    public String emailCode(String emailNum) {
        //生成4位随机数做验证码
        Integer num = (int) ((Math.random() * 9 + 1) * 1000);
        HtmlEmail email = new HtmlEmail();//创建一个HtmlEmail实例对象
        email.setHostName("smtp.qq.com");//邮箱的SMTP服务器，一般123邮箱的是smtp.123.com,qq邮箱为smtp.qq.com
        email.setCharset("utf-8");//设置发送的字符类型
        try {
            email.addTo(emailNum);//设置收件人
            email.setFrom("1206862561@qq.com", "yu");//发送人的邮箱为自己的，用户名可以随便填
            email.setAuthentication("1206862561@qq.com", "vrqlrgpwxiyxgbdi");//设置发送人到的邮箱和用户名和授权码(授权码是自己设置的)
            email.setSubject("狗子");//设置发送主题
            StringBuffer messageText = new StringBuffer();//内容以html格式发送,防止被当成垃圾邮件
            messageText.append("<h2>请收好验证码" + num + "</h2></br>");
            email.setMsg(messageText.toString());//设置发送内容
            email.send();//进行发送
            return num.toString();
        } catch (EmailException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Test
    public void Test_1111(){
        Authentication authentication = realNameAuthentication("蒋超祥", "430523199907184374");
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        String format1 = format.format(authentication.getAuthBorndate());
        System.out.println(authentication);
    }

    /**
     * 身份证实名认证
     * 根据真实姓名与身份证号认证
     * @param authRealname  真实姓名
     * @param authIdentitycard  身份证号
     * @return  Authentication对象
     */
    public Authentication realNameAuthentication(String authRealname, String authIdentitycard){
        String host = "https://checkid.market.alicloudapi.com";
        String path = "/IDCard";
        String appcode = "c825cf5719f64f32b4e3f37e0f85786e";
        String idCard = authIdentitycard;
        String name = authRealname;
        String urlSend = host + path + "?idCard=" + idCard + "&name=" + name;
        try {
            URL url = new URL(urlSend);
            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
            httpURLConnection.setRequestProperty("Authorization", "APPCODE " + appcode);//格式Authorization:APPCODE (中间是英文空格)
            int httpCode = 0;
            httpCode = httpURLConnection.getResponseCode();
            String data = read(httpURLConnection.getInputStream());
            //将第一个与最后一个字符去掉
            data = data.substring(1, data.length() - 1);
            //将所有的"号替换成空
            data = data.replaceAll("\"", "");
            //根据逗号截取字符串数组
            String[] str1 = data.split(",");
            //创建Map对象
            Map<String, Object> map = new HashMap<>();
            //循环加入map集合
            for (int i = 0; i < str1.length; i++) {
                //根据":"截取字符串数组
                String[] str2 = str1[i].split(":");
                //str2[0]为KEY,str2[1]为值
                map.put(str2[0], str2[1]);
                if (map.get("status").equals("02")){
                    break;
                }
            }
            if(map.get("status").equals("01")){
                Authentication authentication = new Authentication();
                authentication.setAuthRealname((String) map.get("name"));   //真实姓名

                String birthday = map.get("birthday").toString();
                SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
                Date parse = sdf.parse(birthday);
                System.out.println(sdf);
                authentication.setAuthBorndate(parse);    //生日

                if(map.get("sex").equals("男")){
                    authentication.setAuthSex(1);    //性别
                }else{
                    authentication.setAuthSex(2);    //性别
                }
                authentication.setAuthIdentitycard((String) map.get("idCard")); //身份证号
                return authentication;
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 身份证实名读取返回结果
     * @param is
     * @return
     * @throws IOException
     */
    private static String read(InputStream is) throws IOException {
        StringBuffer sb = new StringBuffer();
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String line = null;
        while ((line = br.readLine()) != null) {
            line = new String(line.getBytes(), "utf-8");
            sb.append(line);
        }
        br.close();
        return sb.toString();
    }

  /**
     * 发送短信验证码
     *
     * @return
     */
    public String smsCode(String phone) {
        DefaultProfile profile = DefaultProfile.getProfile("cn-hangzhou", "LTAI4FhukqTnk1uPYaEd6mER", "AIoqmWfWoaWjiAkhL478RaVweizwRP");
        IAcsClient client = new DefaultAcsClient(profile);
        //生成验证码
        Integer num = (int) ((Math.random() * 9 + 1) * 1000);
        CommonRequest request = new CommonRequest();
        request.setMethod(MethodType.POST);
        request.setDomain("dysmsapi.aliyuncs.com");
        request.setVersion("2017-05-25");
        request.setAction("SendSms");
        request.putQueryParameter("RegionId", "cn-hangzhou");
        request.putQueryParameter("PhoneNumbers", phone);
        request.putQueryParameter("SignName", "胖大虎的春天");
        request.putQueryParameter("TemplateCode", "SMS_173344197");
        request.putQueryParameter("TemplateParam", "{\"code\":" + num + "}");
        try {
            CommonResponse response = client.getCommonResponse(request);
            String data = response.getData();
            //将第一个与最后一个字符去掉
            data = data.substring(1, data.length() - 1);
            //将所有的"号替换成空
            data = data.replaceAll("\"", "");
            //根据逗号截取字符串数组
            String[] str1 = data.split(",");
            //创建Map对象
            Map<String, Object> map = new HashMap<>();
            //循环加入map集合
            for (int i = 0; i < str1.length; i++) {
                //根据":"截取字符串数组
                String[] str2 = str1[i].split(":");
                //str2[0]为KEY,str2[1]为值
                map.put(str2[0], str2[1]);
            }
            if ("OK".equals(map.get("Message"))) {
                return num.toString();
            }
            return null;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
