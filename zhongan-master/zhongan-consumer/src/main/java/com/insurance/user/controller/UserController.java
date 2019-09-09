package com.insurance.user.controller;

import com.insurance.pojo.User;
import com.insurance.user.client.UserClient;
import com.insurance.util.CodeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

@RestController
public class UserController {
	
	@Autowired
	private UserClient userClient;



	@RequestMapping(value = "/consumer/user/getOne")
	public User getOne(){
		return userClient.getOne();
	}
   /* @RequestMapping(value = "/consumer/user/setUser")
	public String setUser(){
		User user = new User();
		user.setUserName("123123");
		user.setUserPhonenumber("3123123");
		user.setUserRole("3");
		user.setUserId(0);
		user.setUserPassword("3123");
		boolean registered = userClient.registered(user);
		if(registered){
			return "y";
		}
		return "n";
	}*/

	/**
	 * 个人用户名密码登陆
     *
	 * @param passWord
	 * @param session
	 * @return
	 */
	@RequestMapping(value="/consumer/user/login")
	public String login(String loginName,String passWord,HttpSession session){
		if(loginName == null || "".equals(loginName)){	//用户名不能为空
			return "n";
		}
		if(passWord == null || "".equals(passWord)){	//密码不能为空
			return "n";
		}
		User user = new User();
		user.setUserPassword(passWord); //给密码赋值
		//邮箱的java正则表达式
        String em = "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
        //手机的java正则表达式
        String ph = "^((13[0-9])|(15[^4,\\D])|(17[0-9])|(18[0,5-9]))\\d{8}$";
        //判断values的值与正则表达式做匹配
        if(loginName.matches(em)){
            user.setUserEmail(loginName);
            user.setUserName(null);
            user.setUserPhonenumber(null);
        }else if(loginName.matches(ph)){
            user.setUserEmail(null);
            user.setUserName(null);
            user.setUserPhonenumber(loginName);
        }else{  //不匹配邮箱与手机号,values赋值给用户米
            user.setUserEmail(null);
            user.setUserName(loginName);
            user.setUserPhonenumber(null);
        }
        User user1 = userClient.getUser(user);
        if(user1 != null){
            session.setAttribute("user",user1);
            return "y";
        }
		return null;
	}

    /**
     * 个人用户手机验证码快速登陆
     * @param phone 用户输入的手机号
     * @param session
     * @param smsCode   用户输入的验证码
     * @return  返回成功或失败
     */
	@RequestMapping(value="/consumer/user/falsLogin")
	public String falsLogin(String phone,HttpSession session,String smsCode){
		if(smsCode == null || "".equals(smsCode)){	//验证码不能为空
			return "n";
		}
		if(phone == null || "".equals(phone)){	//手机号不能为空
			return "n";
		}
		//判断用户这次提交的手机号于发送给用户的验证码是否一致
		if(session.getAttribute("phone").equals(phone)&&session.getAttribute("smsCode").equals(smsCode)){
            session.removeAttribute("phone");	//进了这个方法这两个值在session里就没用了
            session.removeAttribute("smsCode");
            User user = new User();
            user.setUserPhonenumber(phone);
			User user1 = userClient.falsLogin(user);	//根据手机号查询一个用户
            if(user1 != null){
                session.setAttribute("user",user1);
                return "y";
            }
			return null;
		}
		return null;
	}

    /**
     * 获取验证码
     * @param session
     * @param phone 发送验证码手机号
     * @return  返回成功发送或者发送失败
     */
    @RequestMapping(value="/consumer/user/getSmsCode")
	public String getSmsCode(HttpSession session,String phone){
		if(phone == null || "".equals(phone)){	//手机号不能为空
			return "n";
		}
        CodeUtil codeUtil = new CodeUtil();
            //传入电话号码,返回验证码
            String smsCode = codeUtil.smsCode(phone);
            if(smsCode != null){
                //验证码不等于null则将手机号与验证码存入session用于点击注册时做判断
                session.setAttribute("phone",phone);
                session.setAttribute("smsCode",smsCode);
                return "y";
            }
	    return null;
    }

    /**
     * 个人注册
	 *
	 *
     * @param phone 用户输入手机号
     * @param smsCode   用户输入的验证码
     * @param passWord  用户输入的密码
     * @param session
     * @return  返回注册成功或失败
     */
	@PostMapping(value="/consumer/user/registered")
	public String registered(String phone,String passWord,HttpSession session,String smsCode){
		if(smsCode == null || "".equals(smsCode)){	//验证码不能为空
			return "n";
		}
		if(phone == null || "".equals(phone)){	//手机号不能为空
			return "n";
		}
		if(passWord == null || "".equals(passWord)){	//密码不能为空
			return "n";
		}
		System.out.println(smsCode+",11111111");
        User user = new User();
		user.setUserPhonenumber(phone);	//手机号封装进user
		user.setUserPassword(passWord);	//封装密码
		//调用通过手机查询一个用户的方法
		User user1 = userClient.falsLogin(user);
		//user1 !=null ,说明该手机号被注册了,直接return
		if(user1 != null){
			return "n";
		}
	    //判断用户这次提交的手机号于发送给用户的验证码是否一致
      if(session.getAttribute("phone").equals(user.getUserPhonenumber())&&session.getAttribute("smsCode").equals(smsCode)){
            //session里存的电话号码与验证码==提交上来的电话号码与验证码
            //允许注册
			session.removeAttribute("phone");	//进了这个方法这两个值在session里就没用了
			session.removeAttribute("smsCode");
			//随机生成用户名
			Integer num1 = (int)((Math.random()*9+1)*100000);
			/*//调用根据用户名查询用户方法
			User userByName = userClient.getUserByName(user);
			//给循环定义一个表示kk,userByName!null 就是userByName有对象的时候就重新生成随机数
			kk:while (userByName!=null){	// !=null 说明该用户有了重新生成用户名
				num1 = (int)((Math.random()*9+1)*100000);
				user.setUserName(num1+"");	//用户名
				userByName = userClient.getUserByName(user);
				if(userByName == null){	//当userByName == null 就是userByName没有对象时 跳出循环
					break kk;
				}
			}*/
			user.setUserName(num1+"");	//封装用户名
			user.setUserRole("3");
			boolean b = userClient.registered(user);
			if(b){
				User user2 = userClient.falsLogin(user);
				session.setAttribute("user",user2);
				return "y";
			}
       }
        return "n";
	}


	/**
	 * 修改密码
	 * 第一步,点击修改
	 * @param session
	 * @return
	 */
	@RequestMapping(value="/consumer/user/updatePassWord1")
	public ModelAndView updatePassWord1(HttpSession session, ModelAndView modelAndView, Model model){
		//登陆后session存的对象
		User user = (User) session.getAttribute("user");
		if(user != null){  //修改密码前进行用户判断,看是否能获取到user,获取不到则跳转导登陆页面
			String num = user.getUserPhonenumber().substring(0,3);
			String num1 = user.getUserPhonenumber().substring(8);
			String num2 = num + "*****" + num1;
			model.addAttribute("num",num2);
			modelAndView.setViewName("/userback/modifyLoginPassword1");
			return modelAndView;
		}
		modelAndView.setViewName("/userback/myInfo");
		return modelAndView;
	}

	/**
	 * 修改密码
	 * 身份验证,第二步
	 * @param session
	 * @param passWord	输入密码
	 * @return
	 */
	@RequestMapping(value="/consumer/user/updatePassWord2")
	public String updatePassWord2(HttpSession session,String passWord){
		//登陆后session存的对象
		User user = (User) session.getAttribute("user");
		if(user == null){  //修改密码前进行用户判断,看是否能获取导user,获取不到则跳转导登陆页面
			return "n";
		}
		if(passWord == null || "".equals(passWord)){	//密码不能为空
			return "n";
		}
		if(user.getUserPassword().equals(passWord)){	//session里user的密码与,输入密码一致,允许进行下一步
			return "y";
		}
		return "n";
	}


	/**
	 *修改密码
	 * @param session
	 * @param passWord	新登陆密码
	 * @param rPassWord	确认新登陆密码
	 * @return
	 */
	@RequestMapping(value="/consumer/user/updatePassWord3")
	public String updatePassWord3(HttpSession session,String passWord,String rPassWord){
		//登陆后session存的对象
		User user = (User) session.getAttribute("user");
		if(user == null){  //修改密码前进行用户判断,看是否能获取导user,获取不到则跳转导登陆页面
			return "n";
		}
		if(passWord.equals(rPassWord)){	//两次密码输入一致,允许修改
			//根据id修改信息,将session里的userid传入对象
			user.setUserId(user.getUserId());
			boolean b = userClient.updateUser(user);
			if(b){  //修改成功!
				//调用查询用户方法,将修改密码后的新用户传入session
				User user1 = userClient.falsLogin(user);
				if(user1 != null){
					return "y";
				}
			}
		}
		return "n";
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
