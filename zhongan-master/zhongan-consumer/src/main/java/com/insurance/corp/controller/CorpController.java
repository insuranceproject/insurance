package com.insurance.corp.controller;

import com.insurance.corp.client.CorpClient;
import com.insurance.pojo.Corp;
import com.insurance.util.CodeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class CorpController {

    @Autowired
    private CorpClient corpClient;

    /**
     * 注册
     * @param session
     * @param emails
     * @param rPassWord
     * @param emailCode
     * @return
     */
    @RequestMapping("/consumer/corp/registeredCorp")
    public String registeredCorp(HttpSession session,String emails,String rPassWord,String emailCode){
        //判断邮箱,验证码是否与session里的相等
        if(emailCode.equals(session.getAttribute("emailCode")) && emails.equals(session.getAttribute("emails"))){
            //相等
            Corp corp = new Corp();
            corp.setCorpEmail(emails);
            corp.setCorpPassword(rPassWord);
            corpClient.registeredCorp(corp);
            return "y";
        }
        return "n";
    }


    /**
     * 查询邮箱,判断该邮箱是否存在
     * @param emails
     * @return
     */
    @RequestMapping("/consumer/corp/getCorpByEmail")
    public String getCorpByEmail(String emails){
        Corp corpByEmail = corpClient.getCorpByEmail(emails); //调用查询邮箱方法
        if(corpByEmail != null){
            //有数据,邮箱存在
            return "y";
        }
        return "n"; //邮箱不存在...
    }

    /**
     * 获取验证码
     *
     * @param session
     * @param phone   发送验证码手机号
     * @return 返回成功发送或者发送失败
     */
    @RequestMapping(value = "/consumer/corp/getSmsCode")
    public String getSmsCode(HttpSession session, String phone) {
        if (phone == null || "".equals(phone)) {    //手机号不能为空
            return "n";
        }
        CodeUtil codeUtil = new CodeUtil();
        //传入电话号码,返回验证码
        String smsCode = codeUtil.smsCode(phone);
        if (smsCode != null) {
            //验证码不等于null则将手机号与验证码存入session用于点击注册时做判断
            session.setAttribute("phone", phone);
            session.setAttribute("smsCode", smsCode);
            return "y";
        }
        return null;
    }

    /**
     * 获取邮箱验证码
     *
     * @param session
     * @param emails  收件人邮箱
     */
    @RequestMapping(value = "/consumer/corp/getEmailCode")
    public String getEmailCode(HttpSession session, String emails) {
        if (emails == null || "".equals(emails)) {    //邮箱不能为空
            return "n";
        }
        CodeUtil codeUtil = new CodeUtil();
        String emailCode = codeUtil.emailCode(emails);
        if (emailCode != null) {
            //验证码不等于null则将邮箱与验证码存入session用于点击注册时做判断
            session.setAttribute("emails", emails);
            session.setAttribute("emailCode", emailCode);
            return "y";
        }
        return null;
    }
}
