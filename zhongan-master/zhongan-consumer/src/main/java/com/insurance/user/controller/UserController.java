package com.insurance.user.controller;

import com.insurance.pojo.Authentication;
import com.insurance.pojo.User;
import com.insurance.user.client.UserClient;
import com.insurance.util.CodeUtil;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
	 * @param values
	 * @param passWord
	 * @param session
	 * @return
	 */
	@RequestMapping(value="/consumer/user/login")
	public String login(String values,String passWord,HttpSession session){
		if(values == null || "".equals(values)){	//用户名不能为空
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
        if(values.matches(em)){
            user.setUserEmail(values);
            user.setUserName(null);
            user.setUserPhonenumber(null);
        }else if(values.matches(ph)){
            user.setUserEmail(null);
            user.setUserName(null);
            user.setUserPhonenumber(values);
        }else{  //不匹配邮箱与手机号,values赋值给用户米
            user.setUserEmail(null);
            user.setUserName(values);
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
	 * 获取实名信息
	 * @return
	 */
	@RequestMapping(value="/consumer/user/getUserAuthentication")
	public String getUserAuthentication(HttpSession session){
		User user = (User) session.getAttribute("user");
		Authentication authentication = userClient.getUserAuthentication(user.getUserId());
		if(authentication != null){
			//不等于空说明用户实名了,直接传入session就好
			session.setAttribute("users",authentication);
			return "y";
		}
		return "n";
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
	 * 修改密码1
	 * 第一步,点击修改
	 * @param session
	 * @return
	 */
	@RequestMapping(value="/consumer/user/updatePassWord1")
	public String updatePassWord1(HttpSession session){
		//登陆后session存的对象
		User user = (User) session.getAttribute("user");
		if(user != null){  //修改密码前进行用户判断,看是否能获取导user,获取不到则跳转导登陆页面
			return "y";
		}
		return "n";
	}

	/**
	 * 修改密码2
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
	 *修改密码3
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
					session.setAttribute("user",user1);
					return "y";
				}
			}
		}
		return "n";
	}


	/**
	 *找回密码1
	 * @param values	//账户
	 * @return
	 */
	@RequestMapping(value="/consumer/user/retrievePassWord1")
	public String retrievePassWord1(String values,HttpSession session){
		User user = new User();
		//邮箱的java正则表达式
		String em = "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
		//手机的java正则表达式
		String ph = "^((13[0-9])|(15[^4,\\D])|(17[0-9])|(18[0,5-9]))\\d{8}$";
		//判断values的值与正则表达式做匹配
		if(values.matches(em)){
			user.setUserEmail(values);
			user.setUserName(null);
			user.setUserPhonenumber(null);
		}else if(values.matches(ph)){
			user.setUserEmail(null);
			user.setUserName(null);
			user.setUserPhonenumber(values);
		}else{  //不匹配邮箱与手机号,values赋值给用户米
			user.setUserEmail(null);
			user.setUserName(values);
			user.setUserPhonenumber(null);
		}
		User user1 = userClient.getUser(user);
		if(user1 != null){	//用户存在
			session.setAttribute("user1",user1);
			return "y";
		}
		return "n";	//用户不存在
	}

	/**
	 * 找回密码2
	 * @param smsCode
	 * @param session
	 * @return
	 */
	@RequestMapping(value="/consumer/user/retrievePassWord2")
	public String retrievePassWord2(String smsCode,HttpSession session){
		User user = (User) session.getAttribute("user1");	//获取用户
		if(user == null){
			return "n";	//用户失效,跳回确认账户页面
		}
		if(session.getAttribute("smsCode").equals(smsCode)){	//判断,用户输入的验证码与session里保存的验证码是否一致
			return "y";	//身份验证成功!允许跳入修改密码页面
		}
		return "n";
	}

	/**
	 *找回密码3
	 * @param session
	 * @param passWord	新登陆密码
	 * @param rPassWord	确认新登陆密码
	 * @return
	 */
	@RequestMapping(value="/consumer/user/retrievePassWord3")
	public String retrievePassWord3(HttpSession session,String passWord,String rPassWord){
		User user = (User) session.getAttribute("user1");	//获取用户
		if(user == null){
			return "n";	//用户失效,跳回确认账户页面
		}
		if(passWord.equals(rPassWord)){	//两次密码输入一致,允许修改
			//根据id修改信息,将session里的userid传入对象
			user.setUserId(user.getUserId());
			boolean b = userClient.updateUser(user);
			if(b){  //修改成功!
				//调用查询用户方法,将修改密码后的新用户传入session
				User user1 = userClient.falsLogin(user);
				if(user1 != null){
					session.setAttribute("user",user1);
					return "y";
				}
			}
		}
		return "n";
	}

	/**
	 * 修改用户名
	 * 修改用户名,先点击修改,再输入值,再点击完成,传进来一个value
	 * 1.先获取对象,看看对象是否失效
	 * 2.根据value查询数据库是否有值
	 * 3.没有值则进行修改,否则提示用户用户名重复
	 * @param session
	 * @param userName	//用户传进来的用户名
	 * @return
	 */
	@RequestMapping(value="/consumer/user/modifyUserName")
	public String modifyUserName(HttpSession session,String userName){
		User user = (User) session.getAttribute("user");
		if(user == null){	//判断用户是否失效
			return "n";	//失效,需要跳到登陆页面,让用户登陆
		}
		User user1 = new User();
		user1.setUserName(userName);	//封装用户名
		User byName = userClient.getUserByName(user);	//调用根据用户名查询用户方法
		if(byName == null){
			//为空,允许修改
			user1.setUserId(user.getUserId());	//封装id
			boolean b = userClient.updateUser(user1);
			if(b){
				//修改成功!重新查询该用户存入session
				User user2 = userClient.getUserByName(user1);
				session.removeAttribute("user");	//将session里的user移除,方便后面的user添加
				if(user2 != null){
					session.setAttribute("user",user2);
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
