package com.insurance.util;

import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

public class CodeUtil {

    /**
     * 邮箱验证码
     */
    public void emailCode(String emailNum) {
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
        } catch (EmailException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void Test_1111(){
        String phone="13434759606";
        String code = smsCode(phone);
        System.out.println(code);
    }

    /**
     * 发送短信验证码
     *
     * @return
     */
    public String smsCode(String phoue) {
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
        request.putQueryParameter("PhoneNumbers", phoue);
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
