package com.insurance.user.controller;

import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import com.insurance.pojo.User;
import com.insurance.user.client.UserClient;
import com.netflix.client.ClientException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import javax.websocket.Session;
import java.rmi.ServerException;
import java.util.HashMap;
import java.util.Map;

@Controller
public class UserController {
	
	@Autowired
	private UserClient userClient;

	@RequestMapping(value = "/consumer/user/getOne")
	public User getOne(){
		return userClient.getOne();
	}

	/**
	 * 个人登陆
	 * @param user
	 * @return
	 */
	@RequestMapping(value="/consumer/user/login")
	public User login(User user){
		return userClient.login(user);
	}

	/**
	 * 个人注册
	 * 个人用户注册时,需要手机号码.
	 * 	用户点击获取验证码时,代码生成验证码发送给用户,用户填写完信息点击提交.
	 * 	通过生成的验证码与用户输入的验证码进行对比是否一致.
	 * 	以防万一再判断用户这次输入的手机号是否与获取验证码时输入的手机号一致.
	 *
	 * 	入参:手机号,密码,短信验证码
	 *
     * count是点击获取验证码时会传过来一个参数1
     * 用于判断用户点的是获取验证码按钮还是注册按钮
     *
	 * @param user
	 * @return
	 */
	@RequestMapping(value="/consumer/user/registered")
	public boolean registered(User user, String count,String codes,HttpSession session){
        String code = null;
        //判断
	    if(count == "1"){
            //传入电话号码,返回验证码
             code = smsCode(user.getUserPhonenumber());
            if(code != null){
                //验证码不等于null则将手机号与验证码存入session用于点击注册时做判断
                session.setAttribute("phone",user.getUserPhonenumber());
                session.setAttribute("code",code);
                return true;
            }
        }
	    //count不等于1 ,判断用户这次提交的手机号于发送给用户的验证码是否一致
        if(session.getAttribute("phoue").equals(user.getUserPhonenumber())&&session.getAttribute("code").equals(codes)){
            //session里存的电话号码与验证码==提交上来的电话号码与验证码
            //允许注册
            return  userClient.registered(user);
        }
        return false;
	}

	/**
	 * 发送短信验证码
	 * @return
	 */
	public String smsCode(String phoue){
		DefaultProfile profile = DefaultProfile.getProfile("cn-hangzhou", "LTAI4FhukqTnk1uPYaEd6mER", "AIoqmWfWoaWjiAkhL478RaVweizwRP");
		IAcsClient client = new DefaultAcsClient(profile);
		//生成4位随机数做验证码
        Integer num = (int)((Math.random()*9+1)*1000);
		CommonRequest request = new CommonRequest();
		request.setMethod(MethodType.POST);
		request.setDomain("dysmsapi.aliyuncs.com");
		request.setVersion("2017-05-25");
		request.setAction("SendSms");
		request.putQueryParameter("RegionId", "cn-hangzhou");
		request.putQueryParameter("PhoneNumbers", phoue);
		request.putQueryParameter("SignName", "胖大虎的春天");
		request.putQueryParameter("TemplateCode", "SMS_173344197");
		request.putQueryParameter("TemplateParam", "{\"code\":"+num+"}");
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
            System.out.println(response.getData());
            System.out.println(map.get("Message"));
            if ("OK".equals(map.get("Message"))) {
                return num.toString();
            }
			return null;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}


	/**
	 * 修改个人信息
	 * 可以单独修改密码,用户名,以及绑定邮箱和修改邮箱
	 * @param user
	 * @return
	 */
	@RequestMapping(value="/consumer/user/updateUser")
	public boolean updateUser(User user){
		return userClient.updateUser(user);
	}

    /**
     * 后台删除用户
     * 根据id删除将id传入User
     * @param user
     * @return
     */
    @RequestMapping(value="/consumer/user/updateUser")
	public boolean deleteUser(User user){
	    return userClient.deleteUser(user);
    }
}
