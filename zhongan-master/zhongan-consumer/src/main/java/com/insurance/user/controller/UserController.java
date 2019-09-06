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
import java.util.UUID;

@Controller
public class UserController {
	
	@Autowired
	private UserClient userClient;



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
	public String login(User user,HttpSession session){
		User user1 = userClient.login(user);
		if(user1 != null){
			session.setAttribute("user",user1);
			return "y";
		}
		return null;
	}

	/**
	 * 个人用户手机验证码快速登陆
	 *
	 * 两个按钮,需要获取验证码
	 *
	 * @return
	 */
	@RequestMapping(value="/consumer/user/falsLogin")
	public String falsLogin(User user,String count,String codes,HttpSession session,String smsCode){
		CodeUtil codeUtil = new CodeUtil();
		user.setUserPhonenumber(codes);
		//用于接收验证码方法
		String code = null;
		//判断
		if(count == "1"){
			//传入电话号码,返回验证码
			code = codeUtil.smsCode(user.getUserPhonenumber());
			if(code != null){
				//验证码不等于null则将手机号与验证码存入session用于点击注册时做判断
				session.setAttribute("phone",user.getUserPhonenumber());
				session.setAttribute("code",code);
				return "y1";
			}
		}
		//count不等于1 ,判断用户这次提交的手机号于发送给用户的验证码是否一致
		if(session.getAttribute("phone").equals(user.getUserPhonenumber())&&session.getAttribute("code").equals(smsCode)){
			User user1 = userClient.falsLogin(user);	//根据手机号查询一个用户
			session.setAttribute("user",user1);
			return "y2";
		}
		return null;
	}

	/**
	 * 个人注册
	 * 注册之前需要先查询,根据手机号查询用户,如果 !=null 则说明该手机号已被注册,不允许再次注册
	 * 个人用户注册时,需要手机号码.
	 * 	用户点击获取验证码时,代码生成验证码发送给用户,用户填写完信息点击提交.
	 * 	通过生成的验证码与用户输入的验证码进行对比是否一致.
	 * 	以防万一再判断用户这次输入的手机号是否与获取验证码时输入的手机号一致.
	 *
	 * 	入参:手机号,密码,短信验证码
	 *
     * count是点击获取验证码时会传过来一个参数1
     * 用于判断用户点的是获取验证码按钮还是注册按钮
     *smsCode 传入的验证码
	 * codes传入的手机号
	 * @param user
	 * @return
	 */
	@RequestMapping(value="/consumer/user/registered")
	public String registered(User user, Integer count,String smsCode,String codes,HttpSession session){
		CodeUtil codeUtil = new CodeUtil();
		user.setUserPhonenumber(codes);
		//调用通过手机查询一个用户的方法
		User user1 = userClient.falsLogin(user);
		//user1 !=null ,说明该手机号被注册了,直接return
		if(user1 != null){
			return "n";
		}
		//用于接收验证码
		String code = null;
        //count == 1 进入获取验证码的模块
	    if(1 == count){
            //传入电话号码
             code = codeUtil.smsCode(user.getUserPhonenumber());
            if(code != null){
                //验证码不等于null则将手机号与验证码存入session用于点击注册时做判断
                session.setAttribute("phone",user.getUserPhonenumber());
                session.setAttribute("code",code);
                return "y1";
            }
        }
	    //count不等于1 ,判断用户这次提交的手机号于发送给用户的验证码是否一致
        if(session.getAttribute("phone").equals(user.getUserPhonenumber())&&session.getAttribute("code").equals(smsCode)){
            //session里存的电话号码与验证码==提交上来的电话号码与验证码
            //允许注册
			session.removeAttribute("phoue");	//进了这个方法这两个值在session里就没用了
			session.removeAttribute("code");
			//随机生成用户名
			Integer num1 = (int)((Math.random()*9+1)*100000);
			user.setUserName(num1+"");	//用户名
			//调用根据用户名查询用户方法
			User userByName = userClient.getUserByName(user);
			//给循环定义一个表示kk,userByName!null 就是userByName有对象的时候就重新生成随机数
			kk:while (userByName!=null){	// !=null 说明该用户有了重新生成用户名
				num1 = (int)((Math.random()*9+1)*100000);
				user.setUserName(num1+"");	//用户名
				userByName = userClient.getUserByName(user);
				if(userByName == null){	//当userByName == null 就是userByName没有对象时 跳出循环
					break kk;
				}
			}

			boolean b = userClient.registered(user);
			if(b){
				User user2 = userClient.falsLogin(user);
				session.setAttribute("user",user2);
				return "y2";
			}
        }
        return "n";
	}




	/**
	 * 修改密码
	 * @param user
	 * @return
	 */
	@RequestMapping(value="/consumer/user/updateUser")
	public String updateUser(User user,Integer count,HttpSession session,String rPassWord){
        //登陆后session存的对象
        User user1 = (User) session.getAttribute("user");
	    //第一步,当前密码
	    if(count == 1){
            //判断输入的密码是否与session里用户的密码一致
            if(user1.getUserPassword().equals(user.getUserPassword())){ //一致,跳到第二步的页面
                return "y";
            }
	    }
	    if(count == 2){ //第二步会穿过来两个值,密码与重复密码
	        if(user.getUserPassword().equals(rPassWord)){   //两个密码都一样,允许提交修改密码
	            //根据id修改信息,将session里的userid传入对象
	            user.setUserId(user1.getUserId());
                boolean b = userClient.updateUser(user);
                if(b){  //修改成功!
                    return "y";
                }
            }
        }
		return null;
	}



    /**
     * 后台删除用户
     * 根据id删除将id传入User
     * @param user
     * @return
     */
    @RequestMapping(value="/consumer/user/deleteUser")
	public String deleteUser(User user){
	    userClient.deleteUser(user);
		return null;
	}
}
