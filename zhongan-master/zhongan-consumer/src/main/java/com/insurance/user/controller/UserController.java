package com.insurance.user.controller;

import com.insurance.corp.client.CorpClient;
import com.insurance.order.client.OrderClient;
import com.insurance.pojo.*;
import com.insurance.product.client.ProductClient;
import com.insurance.user.client.UserClient;
import com.insurance.util.CodeUtil;
import com.insurance.util.TimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import javax.xml.crypto.Data;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserClient userClient;
    @Autowired
    private CorpClient corpClient;
    @Autowired
    private OrderClient orderClient;
    @Autowired
    private ProductClient productClient;

    @RequestMapping(value = "/consumer/user/getOne")
    public User getOne() {
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
     * @param loginName
     * @param passWord
     * @param session
     * @return
     */
    @RequestMapping(value = "/consumer/user/login")
    public String login(String loginName, String passWord, HttpSession session) {
        if (loginName == null || "".equals(loginName)) {    //用户名不能为空
            return "n";
        }
        if (passWord == null || "".equals(passWord)) {    //密码不能为空
            return "n";
        }
        User user = new User();
        user.setUserPassword(passWord); //给密码赋值
        //邮箱的java正则表达式
        String em = "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
        //手机的java正则表达式
        String ph = "^((13[0-9])|(15[^4,\\D])|(17[0-9])|(18[0,5-9]))\\d{8}$";
        //判断values的值与正则表达式做匹配
        if (loginName.matches(em)) {
            user.setUserEmail(loginName);
            user.setUserName(null);
            user.setUserPhonenumber(null);
        } else if (loginName.matches(ph)) {
            user.setUserEmail(null);
            user.setUserName(null);
            user.setUserPhonenumber(loginName);
        } else {  //不匹配邮箱与手机号,values赋值给用户米
            user.setUserEmail(null);
            user.setUserName(loginName);
            user.setUserPhonenumber(null);
        }
        User user1 = userClient.getUser(user);
        if (user1 != null) {
            session.setAttribute("user", user1);
            return "y";
        }
        return null;
    }

    /**
     * 个人用户手机验证码快速登陆
     *
     * @param phone   用户输入的手机号
     * @param session
     * @param smsCode 用户输入的验证码
     * @return 返回成功或失败
     */
    @RequestMapping(value = "/consumer/user/falsLogin")
    public String falsLogin(String phone, HttpSession session, String smsCode) {
        if (smsCode == null || "".equals(smsCode)) {    //验证码不能为空
            return "n";
        }
        if (phone == null || "".equals(phone)) {    //手机号不能为空
            return "n";
        }
        //判断用户这次提交的手机号于发送给用户的验证码是否一致
        if (session.getAttribute("phone").equals(phone) && session.getAttribute("smsCode").equals(smsCode)) {
            session.removeAttribute("phone");    //进了这个方法这两个值在session里就没用了
            session.removeAttribute("smsCode");
            User user = new User();
            user.setUserPhonenumber(phone);
            User user1 = userClient.falsLogin(user);    //根据手机号查询一个用户
            return "y";
        }
        return null;
    }

    /**
     * 退出登录
     *
     * @param modelAndView
     * @param session
     * @return
     */
    @RequestMapping(value = "/consumer/user/logOut")
    public ModelAndView logOut(ModelAndView modelAndView, HttpSession session) {
        session.removeAttribute("user");
        modelAndView.setViewName("/consumer/type/findAll");
        return modelAndView;
    }

    /**
     * 获取实名信息
     * 实名信息主要显示在个人后台的用户资料里
     * 进入个人后台需要用户登路
     * 所以获取用户实名信息就是获取session里存储的用户的实名信息
     *
     * @return
     */
    @RequestMapping(value = "/consumer/user/getUserAuthentication")
    public ModelAndView getUserAuthentication(HttpSession session, ModelAndView modelAndView, Integer count) {
        session.removeAttribute("users");   //移除之前实名信息
        TimeUtil timeUtil = new TimeUtil();
        session.setAttribute("hours", timeUtil.getHours());  //储存时间
        User user = (User) session.getAttribute("user");
        Authentication authentication = userClient.getUserAuthentication(user.getUserId());    //调用查询实名信息方法,返回实名信息对象
        if (authentication == null) {
            modelAndView.setViewName("/userback/myAccount.html");   //实名方法返回为null
            return modelAndView;
        }
        session.setAttribute("users", authentication);
        //资料完整度
        Integer num = 0;
        if (user.getUserPhonenumber() != null && user.getUserPhonenumber() != "") {
            num += 1;
        }
        if (user.getUserEmail() != null && user.getUserEmail() != "") {
            num += 1;
        }
        if (user.getUserPassword() != null && user.getUserPassword() != "") {
            num += 1;
        }
        if (authentication != null) {
            num += 1;
        }
        modelAndView.addObject("dataIntegrity", num / 4 * 100);
        if (count == null) {
            modelAndView.setViewName("/userback/myAccount.html");
        } else if (count == 1) {
            modelAndView.setViewName("/userback/myInfo.html");
        }
        return modelAndView;
    }

    /**
     * 获取验证码
     *
     * @param session
     * @param phone   发送验证码手机号
     * @return 返回成功发送或者发送失败
     */
    @RequestMapping(value = "/consumer/user/getSmsCode1")
    public String getSmsCode1(HttpSession session, String phone) {
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
     * 判断用户是否存在
     *
     * @return
     */
    @RequestMapping(value = "/consumer/user/estimateUserIsExist")
    public String estimateUserIsExist(String phone, User user) {
        user.setUserPhonenumber(phone);
        //调用通过手机查询一个用户的方法
        User user1 = userClient.falsLogin(user);
        //user1 !=null ,说明该手机号被注册了,直接return
        if (user1 != null) {
            return "n";
        }
        return "y";
    }

    /**
     * 获取邮箱验证码
     *
     * @param session
     * @param emails  收件人邮箱
     */
    @RequestMapping(value = "/consumer/user/getEmailCode")
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

    /**
     * 个人注册
     *
     * @param phone    用户输入手机号
     * @param smsCode  用户输入的验证码
     * @param passWord 用户输入的密码
     * @param session
     * @return 返回注册成功或失败
     */
    @PostMapping(value = "/consumer/user/registered")
    public String registered(String phone, String passWord, HttpSession session, String smsCode) {
        if (smsCode == null || "".equals(smsCode)) {    //验证码不能为空
            return "n";
        }
        if (phone == null || "".equals(phone)) {    //手机号不能为空
            return "n";
        }
        if (passWord == null || "".equals(passWord)) {    //密码不能为空
            return "n";
        }
        User user = new User();
        user.setUserPhonenumber(phone);    //手机号封装进user
        user.setUserPassword(passWord);    //封装密码
        //判断用户这次提交的手机号于发送给用户的验证码是否一致
        if (session.getAttribute("phone").equals(user.getUserPhonenumber()) && session.getAttribute("smsCode").equals(smsCode)) {
            //session里存的电话号码与验证码==提交上来的电话号码与验证码
            //允许注册
            session.removeAttribute("phone");    //进了这个方法这两个值在session里就没用了
            session.removeAttribute("smsCode");
            //随机生成用户名
            Integer num1 = (int) ((Math.random() * 9 + 1) * 100000);
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
            user.setUserName(num1 + "");    //封装用户名
            user.setUserRole("3");
            boolean b = userClient.registered(user);
            if (b) {
                User user2 = userClient.falsLogin(user);
                session.setAttribute("user", user2);
                return "y";
            }
        }
        return "n";
    }

    /**
     * 修改密码1
     * 第一步,点击修改
     *
     * @param session
     * @return
     */
    @RequestMapping(value = "/consumer/user/updatePassWord1")
    public ModelAndView updatePassWord1(HttpSession session, ModelAndView modelAndView) {
        //登陆后session存的对象
        User user = (User) session.getAttribute("user");
        if (user != null) {  //修改密码前进行用户判断,看是否能获取导user,获取不到则跳转导登陆页面
            modelAndView.setViewName("/userback/modifyLoginPassword1.html");
            return modelAndView;
        }
        modelAndView.setViewName("/userpervious/login.html");
        return modelAndView;
    }

    /**
     * 修改密码2
     * 身份验证,第二步
     *
     * @param session
     * @param passWord 输入密码
     * @return
     */
    @RequestMapping(value = "/consumer/user/updatePassWord2")
    public String updatePassWord2(HttpSession session, String passWord) {
        //登陆后session存的对象
        User user = (User) session.getAttribute("user");
        if (user == null) {  //修改密码前进行用户判断,看是否能获取导user,获取不到则跳转导登陆页面
            return "n";
        }
        if (passWord == null || "".equals(passWord)) {    //密码不能为空
            return "n";
        }
        if (user.getUserPassword().equals(passWord)) {    //session里user的密码与,输入密码一致,允许进行下一步
            return "y";
        }
        return "n";
    }

    /**
     * 修改密码3
     *
     * @param session
     * @param passWord  新登陆密码
     * @param rPassWord 确认新登陆密码
     * @return
     */
    @RequestMapping(value = "/consumer/user/updatePassWord3")
    public String updatePassWord3(HttpSession session, String passWord, String rPassWord) {
        //登陆后session存的对象
        User user = (User) session.getAttribute("user");
        if (user == null) {  //修改密码前进行用户判断,看是否能获取导user,获取不到则跳转导登陆页面
            return "n";
        }
        if (passWord.equals(rPassWord)) {    //两次密码输入一致,允许修改
            //根据id修改信息,将session里的userid传入对象
            user.setUserId(user.getUserId());
            user.setUserPassword(rPassWord);
            boolean b = userClient.updateUser(user);
            if (b) {  //修改成功!
                //调用查询用户方法,将修改密码后的新用户传入session
                User user1 = userClient.falsLogin(user);
                if (user1 != null) {
                    session.setAttribute("user", user1);
                    return "y";
                }
            }
        }
        return "n";
    }

    /**
     * 找回密码1
     *
     * @param values //账户
     * @return
     */
    @RequestMapping(value = "/consumer/user/retrievePassWord1")
    public String retrievePassWord1(String values, HttpSession session) {
        User user = new User();
        //邮箱的java正则表达式
        String em = "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
        //手机的java正则表达式
        String ph = "^((13[0-9])|(15[^4,\\D])|(17[0-9])|(18[0,5-9]))\\d{8}$";
        //判断values的值与正则表达式做匹配
        if (values.matches(em)) {
            user.setUserEmail(values);
            user.setUserName(null);
            user.setUserPhonenumber(null);
            User user1 = userClient.getUserByEmail(user);
            if (user1 != null) {    //用户存在
                session.setAttribute("user1", user1);
                return "y1";
            }
        } else if (values.matches(em)) {
            user.setUserEmail(null);
            user.setUserName(null);
            user.setUserPhonenumber(values);
            User user1 = userClient.falsLogin(user);
            if (user1 != null) {    //用户存在
                session.setAttribute("user1", user1);
                return "y2";
            }
        }
        return "n";    //用户不存在
    }

    /**
     * 传输用户2
     *
     * @return
     */
    @RequestMapping(value = "/consumer/user/transmitUser2")
    public ModelAndView transmitUser2(HttpSession session, Integer count, Integer num) {
        User user = (User) session.getAttribute("user1");
        ModelAndView modelAndView = new ModelAndView();
        String userName = user.getUserName().substring(0, 3) + "*****" + user.getUserName().substring(user.getUserName().length() - 2);
        modelAndView.addObject("userName", userName);
        if (count == 1) {
            String email = user.getUserEmail().substring(0, 1) + "*****" + user.getUserEmail().substring(user.getUserEmail().indexOf("@"));
            modelAndView.addObject("email", email);
            modelAndView.addObject("userEmail", user.getUserEmail());
        }
        if (count == 2) {
            String phone = user.getUserPhonenumber().substring(0, 3) + "*****" + user.getUserPhonenumber().substring(8);
            modelAndView.addObject("phone", phone);
            modelAndView.addObject("phoneNumber", user.getUserPhonenumber());
        }
        modelAndView.addObject("count", count);
        if (num == 1) {
            modelAndView.setViewName("/userpervious/ModifyMailPw.html");
        } else if (num == 2) {
            modelAndView.setViewName("/userpervious/modifyPhonePw.html");
        } else {
            modelAndView.setViewName("/userpervious/identityVerify.html");
        }
        return modelAndView;
    }

    /**
     * 找回密码2-手机验证码
     *
     * @param smsCode
     * @param session
     * @return
     */
    @RequestMapping(value = "/consumer/user/retrievePassWordPhoue2")
    public String retrievePassWordPhoue2(String smsCode, HttpSession session) {
        User user = (User) session.getAttribute("user1");    //获取用户
        if (user == null) {
            return "n";    //用户失效,跳回确认账户页面
        }
        if (session.getAttribute("smsCode").equals(smsCode)) {    //判断,用户输入的验证码与session里保存的验证码是否一致
            return "y";    //身份验证成功!允许跳入修改密码页面
        }
        return "n";
    }

    /**
     * 找回密码2-邮箱验证码
     *
     * @param emailCode 邮箱验证码
     * @param session
     * @return
     */
    @RequestMapping(value = "/consumer/user/retrievePassWordEmail2")
    public String retrievePassWordEmail2(String emailCode, HttpSession session) {
        User user = (User) session.getAttribute("user1");    //获取用户
        if (user == null) {
            return "n";    //用户失效,跳回确认账户页面
        }
        if (session.getAttribute("emailCode").equals(emailCode)) {    //判断,用户输入的验证码与session里保存的验证码是否一致
            return "y";    //身份验证成功!允许跳入修改密码页面
        }
        return null;
    }

    /**
     * 找回密码3
     *
     * @param session
     * @param passWord  新登陆密码
     * @param rPassWord 确认新登陆密码
     * @return
     */
    @RequestMapping(value = "/consumer/user/retrievePassWord3")
    public String retrievePassWord3(HttpSession session, String passWord, String rPassWord) {
        User user = (User) session.getAttribute("user1");    //获取用户
        if (user == null) {
            return "n";    //用户失效,跳回确认账户页面
        }
        if (passWord.equals(rPassWord)) {    //两次密码输入一致,允许修改
            //根据id修改信息,将session里的userid传入对象
            user.setUserId(user.getUserId());
            user.setUserPassword(rPassWord);
            boolean b = userClient.updateUser(user);
            if (b) {  //修改成功!
                //调用查询用户方法,将修改密码后的新用户传入session
                User user1 = userClient.falsLogin(user);
                if (user1 != null) {
                    session.setAttribute("user", user1);
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
     *
     * @param session
     * @param userName //用户传进来的用户名
     * @return
     */
    @RequestMapping(value = "/consumer/user/modifyUserName")
    public String modifyUserName(HttpSession session, String userName) {
        User user = (User) session.getAttribute("user");
        if (user == null) {    //判断用户是否失效
            return "n";    //失效,需要跳到登陆页面,让用户登陆
        }
        User user1 = new User();
        user1.setUserName(userName);    //封装用户名
        User byName = userClient.getUserByName(user);    //调用根据用户名查询用户方法
        if (byName != null) {
            //为空,允许修改
            user1.setUserId(user.getUserId());    //封装id
            boolean b = userClient.updateUser(user1);
            if (b) {
                //修改成功!重新查询该用户存入session
                User user2 = userClient.getUserByName(user1);
                session.removeAttribute("user");    //将session里的user移除,方便后面的user添加
                if (user2 != null) {
                    session.setAttribute("user", user2);
                    return "y";
                }
            }
        }
        return "n";
    }

    /**
     * 绑定(修改)邮箱1
     *
     * @param session
     * @return
     */
    @RequestMapping(value = "/consumer/user/bindEmail1")
    public ModelAndView bindEmail1(HttpSession session, ModelAndView modelAndView, Integer num) {
        User user = (User) session.getAttribute("user");
        if (user != null) {   //session里的用户为空则跳回登陆页面,提示用户登陆
            if (num == 1) {  //num == 1 绑定邮箱
                modelAndView.setViewName("/userback/chooseAuthenticationWay.html");   //跳转页面
            } else if (num == 2) {  //num == 2 修改邮箱
                modelAndView.setViewName("/userback/ModifyEmail.html");   //跳转页面
            }
            return modelAndView;
        }
        //没有获取到user,返回登陆页面叫用户登陆
        modelAndView.setViewName("/userpervious/login.html");   //跳转页面
        return modelAndView;
    }

    /**
     * 绑定(修改)邮箱2 手机验证码
     * 判断手机验证码是否相等
     *
     * @param session
     * @return
     */
    @RequestMapping(value = "/consumer/user/bindEmail2ByPhone")
    public String bindEmail2ByPhone(HttpSession session, String smsCode) {
        User user = (User) session.getAttribute("user");
        if (user != null) {   //session里的用户为空则跳回登陆页面,提示用户登陆
            if (session.getAttribute("smsCode").equals(smsCode)) {    //判断验证码相等则允许下一步
                return "y";
            }
        }
        //验证码不相等...
        return "n";
    }

    /**
     * 绑定(修改)邮箱2 邮箱验证码
     *
     * @param session
     * @param emailCode
     * @return
     */
    @RequestMapping(value = "/consumer/user/bindEmail2ByEmail")
    public String bindEmail2ByEmail(HttpSession session, String emailCode) {
        User user = (User) session.getAttribute("user");
        if (user != null) {   //session里的用户为空则跳回登陆页面,提示用户登陆
            if (session.getAttribute("emailCode").equals(emailCode)) {    //判断验证码相等则允许下一步
                return "y";
            }
        }
        //验证码不相等...
        return "n";
    }

    /**
     * 绑定(修改)邮箱3
     * 判断邮箱是否被使用
     *
     * @param session
     * @return
     */
    @RequestMapping(value = "/consumer/user/bindEmail3")
    public String bindEmail3(HttpSession session, String emails) {
        User user = (User) session.getAttribute("user");
        if (user != null) {   //session里的用户为空则跳回登陆页面,提示用户登陆
            //不为空
            User user1 = new User();
            user1.setUserEmail(emails);
            User userByEmail = userClient.getUserByEmail(user1);    //调用根据邮箱查询user
            if (userByEmail != null) {
                //判断userByEmail不为空,说明邮箱已被个人用户使用
                return "n1";
            }
            Corp corpByEmail = corpClient.getCorpByEmail(emails);
            if (corpByEmail != null) {
                //判断corpByEmail不为空,说明已被企业用户使用
                return "n2";
            }
        }
        return "y"; //双判断为空,说明该邮箱未被使用
    }

    /**
     * 绑定(修改)邮箱4
     * 判断传入的验证码与邮箱是否与session里的一致
     *
     * @param session
     * @param emails  传入的邮箱
     * @param smsCode 传入的验证码
     * @return
     */
    @RequestMapping(value = "/consumer/user/bindEmail4")
    public String bindEmail4(HttpSession session, String emails, String smsCode) {
        User user = (User) session.getAttribute("user");
        if (user != null) {   //session里的用户为空则跳回登陆页面,提示用户登陆
            //判断,session里的邮箱与验证是否与传入的一致
            if (session.getAttribute("emails").equals(emails) && session.getAttribute("emailCode").equals(smsCode)) {
                //一致
                User user1 = new User();
                user1.setUserEmail(emails);
                user1.setUserId(user.getUserId());
                userClient.updateUser(user1);
                return "y";
            }
        }
        return "n";
    }

    /**
     * 实名认证1
     * 选择验证方式
     *
     * @param session
     * @return
     */
    @RequestMapping(value = "/consumer/user/realNameAuthentication1")
    public ModelAndView realNameAuthentication1(HttpSession session, ModelAndView modelAndView) {
        User user = (User) session.getAttribute("user");
        if (user != null) {   //判断,user是否为空
            modelAndView.setViewName("/userback/Certification.html");
            return modelAndView;
        }
        modelAndView.setViewName("/userpervious/login.html");
        return modelAndView;
    }

    /**
     * 实名认证2
     * 身份验证
     *
     * @param session
     * @param smsCode 传入的手机验证码
     * @return
     */
    @RequestMapping(value = "/consumer/user/realNameAuthentication2ByPhone")
    public String realNameAuthentication2ByPhone(HttpSession session, String smsCode) {
        User user = (User) session.getAttribute("user");
        if (user != null) {   //判断,user是否为空
            if (session.getAttribute("smsCode").equals(smsCode)) {    //判断验证码相等则允许下一步
                return "y";
            }
            return "n";
        }
        return "n";
    }

    /**
     * 实名认证2
     * 身份验证
     *
     * @param session
     * @param smsCode 传入的邮箱验证码
     * @return
     */
    @RequestMapping(value = "/consumer/user/realNameAuthentication2ByEmail")
    public String realNameAuthentication2ByEmail(HttpSession session, String smsCode) {
        User user = (User) session.getAttribute("user");
        if (user != null) {   //判断,user是否为空
            if (session.getAttribute("emailCode").equals(smsCode)) {    //判断验证码相等则允许下一步
                return "y";
            }
            return "n";
        }
        return "n";
    }

    /**
     * 实名认证3
     *
     * @param session
     * @param authRealname     真实姓名
     * @param authIdentitycard 身份证号
     * @return
     */
    @RequestMapping(value = "/consumer/user/realNameAuthentication3")
    public String realNameAuthentication3(HttpSession session, String authRealname, String authIdentitycard) {
        User user = (User) session.getAttribute("user");
        if (user != null) {   //判断,user是否为空
            CodeUtil codeUtil = new CodeUtil();
            //调用实名认证方法,返回实名认证实体类
            Authentication authentication = codeUtil.realNameAuthentication(authRealname, authIdentitycard);
            authentication.setUserId(user.getUserId()); //将用户id传入实名认证种
            System.out.println("实名认证:" + authentication.toString());
            userClient.saveAuthentication(authentication);
            return "y";
        }
        return "n";
    }

    /**
     * 获取有效保险数量
     * 首先调用根据用户名获取保单方法,查询到改用户的所有保单
     * 再根据保单id查询保单详情,拿其中的截至日期与当前时间相对比,判断是否过期
     *
     * @return
     */
    @RequestMapping(value = "/consumer/user/getEffectiveInsurance")
    public String getEffectiveInsurance(HttpSession session) {
        /*if(policyList != null){ //判断list里不为空则循环list
            Integer count1 = 0;  //用于迭代有效保险
            Integer count2 = 0;  //用于迭代无效保险
            Integer policydetailId = 0; //用于暂时存贮id进行判断是否为同一保单
            for (Policy p:policyList) {
                //调用根据保单id查询保单详情方法
                List<Policydetail> policydetailList = orderClient.getPolicydetailByPolicyId(p.getPolicyId());
                //循环输入保单详情list
                for (Policydetail pd:policydetailList) {
                    TimeUtil timeUtil = new TimeUtil();
                    Date chinaTime = timeUtil.getChinaTime();
                    Date policyEndtime = pd.getPolicyEndtime();
                    //判断policydetailId不等于pd.getPolicyId()则允许进行下一步
                    //如果两个值相等则说明是同一个保单的详情
                    if(pd.getPolicyId() != policydetailId){
                        if(policyEndtime.after(chinaTime)){  //判断如果保单详情里的截止时间大于当前时间则表示该保单详情在有效期中
                            count1 +=1; //有效期中,count1加一
                        } else if(policyEndtime.before(chinaTime)){ //截止日期小于当前时间
                            count2 +=1;//无效
                        }
                    }
                    //每一轮循环最后都将pd.getPolicyId()赋值给policydetailId
                    //等到下一轮两个值做判断如果一样就是同一个保单,不一样就是不同的保单
                    policydetailId = pd.getPolicyId();
                }
            }
        }*/
        User user = (User) session.getAttribute("user");
        //根据用户id获取保单
        List<Policy> policyList = orderClient.getPolicyByUserId(user.getUserId());  //调用根据用户id获取保单方法
        Integer count1 = 0; //有效
        Integer count2 = 0; //无效
        for (Policy p : policyList) {
            if (p.getPolicyStauts() == 1) {   //有效加一
                count1 += 1;
            } else if (p.getPolicyStauts() == 2) { //无效加一
                count2 += 1;
            }
        }
        return count1.toString();
    }

    /**
     * 订单创建时间:根据用户id查询订单
     * 订单编号:根据用户查询订单
     * 根据用户id查询保单及详情
     * 产品,起止时间,金额,状态(是否在有效期),购买途径
     * 保单编号:在保单表里
     * 状态:状态在保单里有,那么直接调用方法根据用户id查到保单即可
     * 一个用户可能会有多个保单,所以循环插入
     * 起止时间:在保单详情表中,由于一个保单可能有多个保单详情,所以循环
     * 购买渠道:与上一致
     * 购买途径:与上一致
     * 价格:需要通过详情中的方案编号查询到对应的方案,从而获取价格
     * 产品:通过方案中的产品编号查询产品
     *
     * @param session
     * @return
     */
    @RequestMapping(value = "/consumer/user/getPolicyByUserId")
    public List<UserPolicydetail> getPolicyByUserId(HttpSession session, List<UserPolicydetail> listUserPolicydetail) {
        /*User user = (User) session.getAttribute("user");
        List<Policy> policyList = orderClient.getPolicyByUserId(user.getUserId());  //调用根据用户id获取保单方法
        for (Policy p : policyList) {
            //循环查询每个保单
            UserPolicydetail userPolicydetail = new UserPolicydetail();
            //插入订单状态
            if(p.getPolicyStauts() == 1){
                userPolicydetail.setPolicyStauts("保障中");
            }else if(p.getPolicyStauts() == 2){
                userPolicydetail.setPolicyStauts("已失效");
            }
            //根据保单id查询保单详情,查询到的保单详情可能会有多个,但是都是对应这一个保单的,所以起止时间,购买途径都是一样的
            //价格,产品也是一样,所以当循环一次的时候在后面判断数据不为空直接跳出循环即可
            List<Policydetail> policydetailList = orderClient.getPolicydetailByPolicyId(p.getPolicyId());
            kk:for (Policydetail pd: policydetailList) {
                //插入起保时间
                userPolicydetail.setPolicyStarttime(pd.getPolicyStarttime().toString());
                //插入止保时间
                userPolicydetail.setPolicyBuyaddr(pd.getPolicyEndtime().toString());
                //插入购买途径
                if(pd.getPolicyBuyaddr() == 1){
                    userPolicydetail.setPolicyBuyaddr("众安官网");
                }else{
                    userPolicydetail.setPolicyBuyaddr("众安APP");
                }
                Plan plan = productClient.getPlanByPlanId(pd.getPlanId());  //产品方案
                //插入价格
                userPolicydetail.setPlanPrice(plan.getPlanPrice());
                Product product = productClient.getProductByPlanId(plan.getProductId());    //产品
                //插入产品
                userPolicydetail.setProductName(product.getProductName());
                //这些数据为空直接结束循环
                if(userPolicydetail.getPolicyStarttime() != null
                        && userPolicydetail.getPolicyEndtime() != null
                        && userPolicydetail.getPolicyBuyaddr() != null
                        && userPolicydetail.getPlanPrice() != null
                        && userPolicydetail.getProductName() != null){
                    break kk;
                }
            }
            listUserPolicydetail.add(userPolicydetail);

        }
        return listUserPolicydetail;*/
        return null;
    }


}
