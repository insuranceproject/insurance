package com.insurance.user.controller;

import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import com.insurance.pojo.User;
import com.insurance.user.client.UserClient;
import com.insurance.util.CodeUtil;
import com.netflix.client.ClientException;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
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

	private CodeUtil codeUtil;

	@RequestMapping(value = "/consumer/user/getOne")
	public User getOne(){
		return userClient.getOne();
	}

	/**
	 * 个人用户名密码登陆
	 * @param user
	 * @return
	 */
	@RequestMapping(value="/consumer/user/login")
	public User login(User user){
		return userClient.login(user);
	}

	/**
	 * 个人用户手机验证码快速登陆
	 *
	 * 两个按钮,需要获取验证码
	 *
	 * @return
	 */
	@RequestMapping(value="/consumer/user/falsLogin")
	public User falsLogin(User user,String count,String codes,HttpSession session){
		//生成验证码
		Integer num2 = (int)((Math.random()*9+1)*1000);
		//用于接收验证码方法
		String code = null;
		//判断
		if(count == "1"){
			//传入电话号码,返回验证码
			code = codeUtil.smsCode(user.getUserPhonenumber());
			if(code != null){
				//验证码不等于null则将手机号与验证码存入session用于点击注册时做判断
				session.setAttribute("phone",user.getUserPhonenumber());
				session.setAttribute("code",num2);
				return null;
			}
		}
		return userClient.falsLogin(user);
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
	public boolean registered(User user, Integer count,String smsCode,String codes,HttpSession session){
		//由于点击获取验证码和注册两个按钮所以分了两个手机号参数
		user.setUserPhonenumber(codes);
		//调用通过手机查询用户的方法

		userClient.falsLogin(user);
		//生成6位随机数做验证码,用于随机生成用户名
		Integer num1 = (int)((Math.random()*9+1)*100000);
		//用于接收验证码
		String code = null;
        //判断
	    if(1 == count){
            //传入电话号码
             code = codeUtil.smsCode(user.getUserPhonenumber());
            if(code != null){
                //验证码不等于null则将手机号与验证码存入session用于点击注册时做判断
                session.setAttribute("phone",user.getUserPhonenumber());
                session.setAttribute("code",code);
                return true;
            }
        }
	    //count不等于1 ,判断用户这次提交的手机号于发送给用户的验证码是否一致
        if(session.getAttribute("phoue").equals(user.getUserPhonenumber())&&session.getAttribute("code").equals(smsCode)){
            //session里存的电话号码与验证码==提交上来的电话号码与验证码
            //允许注册
			user.setUserName(num1+"");	//用户名
            return  userClient.registered(user);
        }
        return false;
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
    @RequestMapping(value="/consumer/user/deleteUser")
	public boolean deleteUser(User user){
	    return userClient.deleteUser(user);
    }
}
