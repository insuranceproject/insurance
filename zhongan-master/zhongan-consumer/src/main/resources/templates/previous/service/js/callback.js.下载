/**
 * 处理ie兼容问题
 */
if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (prefix) {
        return this.slice(0, prefix.length) === prefix;
    };
}

if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

Function.prototype.getName = function(){
    return this.name || this.toString().match(/function\s*([^(]*)\(/)[1]
}

/**------------------- 用于注册页面回调  start-----------------------*/
//获取当前页面的uri
function getUrlRelativePath(){
　　var url = document.location.toString();
　　var arrUrl = url.split("//");
　　var start = arrUrl[1].indexOf("/");
　　var relUrl = arrUrl[1].substring(start);//截取从start开始到结尾的所有字符
　　if(relUrl.indexOf("?") != -1){
　　　　relUrl = relUrl.split("?")[0];
　　}
　　return relUrl;
}
//获取当前页面的uri的所有请求参数
function GetRequestParameters() {
   var url = location.search; //获取url中"?"符后的字串
   var requestParameters="";
   if (url.indexOf("?") != -1) {    //判断是否有参数
	requestParameters = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串  
　 }
　 return requestParameters;
}

//获取当前页面的请求参数
function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) return unescape(r[2]); return null; 
} 
//页面初始化跳转
var callFunc = function(){
	try {
		if(!getQueryString("call_func"))
			return;
		 //读取Cookie值
		var _function = getCookie("_func");
		var _args = getCookie("_args"); 
		
		if(_function){
			var func = eval(_function);
			if(_args){
				var args = _args;
				new func(args);
			}else {
				new func();
			}
			//执行后清除缓存
			delCookie("_func");
			delCookie("_args"); 
			delCookie("_params","/");
		}
	}
	catch (e) {
		//执行后清除缓存
		delCookie("_func");
		delCookie("_args"); 
		delCookie("_params","/");
	}	
}

//window.onload = function(){
//	callFunc();
//}

var loginName = window.loginName || "";


/**
 * 登陆使用全局变量参数值
 */
var loginBaseUrl = window.loginBaseUrl || "https://login.zhongan.com/";

if (!loginBaseUrl.endsWith("/"))
    loginBaseUrl = loginBaseUrl + "/";
var login_sourceApp = window.login_sourceApp || "1";
var login_customer_url = window.login_customer_url || "";


if (!login_customer_url.endsWith("/"))
    login_customer_url = login_customer_url + "/";

var login_decrypt = window.login_decrypt || "/open/responseServlet.php";

var login_src = loginBaseUrl + "frames/login.htm?loginName=" + loginName + "&sourceApp=" + login_sourceApp + "&target=" + login_customer_url + "callBack.html?1=1";
var register_src = loginBaseUrl + "frames/iframesRegister.htm?loginName=" + loginName + "&sourceApp=" + login_sourceApp + "&target=" + login_customer_url + "callBack.html?1=1";
var online_src = loginBaseUrl + "security/Online?sourceApp=" + login_sourceApp + "&target=" + login_customer_url + "callBack.html?1=1";
var mobile_src = loginBaseUrl + "frames/mobileQuickLogin.htm?loginName=" + loginName + "&sourceApp=" + login_sourceApp + "&target=" + login_customer_url + "callBack.html?1=1";
var h5_login_src = loginBaseUrl + "frames/h5Login.htm?loginName=" + loginName + "&sourceApp=" + login_sourceApp + "&target=" + login_customer_url + "callBack.html?1=1";


var login_callBack;
var logincallback="";//用于兼容弹框登录

var login_winKey = window.login_winKey || "zaLoginCookieKey";
/**
 * 初始化登陆页面加载区域
 */
function modal() {
	//用于兼容弹框登录
	var _login_src=login_src;
	if(logincallback){
		_login_src += encodeURIComponent("&logincallback="+logincallback);
	}
    var modal = $('.modal');
    var tmp = '<div class="modal">'
        + '<div class="mask"></div>'
        + '<div class="panel">'
        + '<div> <a href="javascript:void(0);" class="login-close" id="loginWin_close" title="关闭" onclick="parentNode.parentNode.parentNode.parentNode.style.display=\'none\'">×</a>'
        + '</div>'
        + '<iframe src="' + _login_src + "&random=" + Math.random() + '" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>'
        + '</div>'
        + '</div>'

    if (modal.length) {
        modal.html(tmp).show();
    } else {
        $('<div class="modal">').html(tmp).appendTo(document.body);
    }
}

//加载手网弹出框登录iframe
function mobile_modal() {
    var modal = $(".ui-eslogin");		
	var tmp = '<div class="ui-eslogin" style="display:block !important">' +
                            '<div class="ui-eslogin-shadow">' +
                            '<div id="iframe" class="wrapper type-bottom">' +
                            '<iframe src="' + mobile_src + "&random=" + Math.random()+ '"frameborder="0" width="100%" height="100%" scrolling="no">' +
                            '</iframe>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
	if (modal.length)
         modal.html(tmp).show();
    else
		$('<div class=".ui-eslogin">').html(tmp).appendTo(document.body);
								
}


/**
 * 初始化注册页面
 */
function register_modal() {
    var modal = $('.modal');
    var tmp = '<div class="modal">'
        + '<div class="mask"></div>'
        + '<div class="registerpanel">'
        + '<div > <a href="javascript:void(0);" class="login-close" id="loginWin_close" title="关闭" onclick="parentNode.parentNode.parentNode.parentNode.style.display=\'none\'">×</a>'
        + '</div>'
        + '<iframe src="' + register_src + "&random=" + Math.random() + '" frameborder="0" width="100%" height="100%"  scrolling="no"></iframe>'
        + '</div>'
        + '</div>'

    if (modal.length) {
        modal.html(tmp).show();
    } else {
        $('<div class="modal">').html(tmp).appendTo(document.body);
    }
}
/**
 * 初始化online页面
 */
function online_modal() {
    var modal = $('.modal');
    var tmp = '<div class="modal">'
        + '<iframe src="' + online_src + "&random=" + Math.random() + '" frameborder="0" width="100%" height="100%"></iframe>'
        + '</div>'

    if (modal.length) {
    } else {
        $('<div class="modal">').html(tmp).appendTo(document.body);
    }
}

function pageScroll() {
    var ua = window.navigator.userAgent;
    if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        // alert('ios端');
        var currentPosition;
        var speed = 1;
        var timer = setInterval(function () {
        currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        currentPosition -= speed;
        window.scrollTo(0, currentPosition); // 页面向上滚动
        currentPosition += speed;
        window.scrollTo(0, currentPosition); // 页面向下滚动
        clearInterval(timer);
        }, 100);
    }
}

//加载手网收银台弹出框登录iframe
function mobile_h5_modal() {
    var modal = $("ui-eslogin");		
	var tmp = '<div class="ui-eslogin" style="display:block !important">' +
                            '<div class="eslogin-mask"></div><div class="ui-eslogin-shadow">' +
                            '<div id="iframe" class="wrapper type-bottom">' +
                            '<iframe src="' + h5_login_src + "&random=" + Math.random()+ '"frameborder="0" width="100%" height="100%" scrolling="no">' +
                            '</iframe>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
	if (modal.length){
         modal.html(tmp).show();
    }else{
		$('<div class="ui-eslogin">').html(tmp).appendTo(document.body);
		$(".ui-eslogin").on("click",function(){
            pageScroll();
			$(".ui-eslogin").remove();
		});
    }
								
}

function _openTarget(action, targetMethod) {
    $("#el_init").remove();
    var el = document.createElement('a');
    el.id = "el_init";
    el.href = action;
    el.target = targetMethod || "_self";
    document.body.appendChild(el);
    el.click();
}

//执行解密后操作
function dialog_target(obj) {
	var type = typeof obj;
	if(obj==null||obj==undefined)
	  type=null;
	
    switch (type) {
        case "function":
            $('.modal').hide();
            obj();
            break;
        case "string":
			if(obj.indexOf("call_func") != -1&& getCookie("_params"))
				obj = obj + "&"+ getCookie("_params");
		
            if (obj.startsWith("http") || obj.startsWith("https")) {
                _openTarget(obj, "_self");
                return;
            }
            if (!obj.startsWith("/"))
                obj = "/" + obj;
            // 中转的url
            _openTarget(location.protocol + "//" + location.host + obj, "_self");
            return
            break;
        case "object":
            $('.modal').hide();
            obj.func(obj.args);
            break;
        default:
            _openTarget(location.protocol + "//" + location.host, "_self");
            break;
    }
}

/* 中转目标Url、function ｜  绑定弹出窗口的id | 回掉方法的入参 */
function initParamsFunc(action, bindElement, args) {
    login_callBack = action;
	if (typeof(action) === "function" && args) {
		login_callBack = {
			func: action,
			args: args
		};
	/**------------------- 用于注册页面回调  start-----------------------*/
		setCookie("_func", action.getName()); //设置cookie的值
		setCookie("_args", args);
		logincallback = getUrlRelativePath()+"?call_func=1";
		var params = GetRequestParameters();
		if(params)
			setCookie("_params", params,null,"/"); 

	}	
	else if(typeof(action) ==="function"){//用于兼容注册功能--回调方式为function
		logincallback = getUrlRelativePath()+"?call_func=1";
		var params = GetRequestParameters();
		if(params)
			setCookie("_params", params,null,"/");
    	setCookie("_func", action.getName()); //设置cookie的值
	}
	else if(typeof(action) ==="string"){//用于兼容注册功能--回调方式为普通路径
    	logincallback =action;
	}
	/**------------------- 用于注册页面回调  end-----------------------*/
    //online check
    var login_obj = getCookie(login_winKey);
    if (login_obj) {
        dialog_target(login_callBack);
        return;
    }
    // 没有指定元素
    if (!bindElement) {
        modal(this.innerHTML)
        return;
    }

    // 对指定Id进行事件绑定
    $("#" + bindElement).on("click", function () {
        modal(this.innerHTML);
    });
}

/* 中转目标Url、function ｜  绑定弹出窗口的id | 回掉方法的入参 */
function mobile_initParamsFunc(action, bindElement, args) {

    login_callBack = action;
    if (typeof(action) === "function" && args) {
        login_callBack = {
            func: action,
            args: args
        };
    }
	//online check
    var login_obj = getCookie(login_winKey);
    if (login_obj) {
        dialog_target(login_callBack);
        return;
    }
    // 没有指定元素
    if (!bindElement) {
        mobile_modal(this.innerHTML)
        return;
    }

    // 对指定Id进行事件绑定
    $("#" + bindElement).on("click", function () {
        mobile_modal(this.innerHTML);
    });
}


/* 中转目标Url、function ｜  绑定弹出窗口的id | 回掉方法的入参 */
function register_initParamsFunc(action, bindElement, args) {

    login_callBack = action;
    if (typeof(action) === "function" && args) {
        login_callBack = {
            func: action,
            args: args
        };
    }

    // 没有指定元素
    if (!bindElement) {
        register_modal(this.innerHTML)
        return;
    }

    // 对指定Id进行事件绑定
    $("#" + bindElement).on("click", function () {
        register_modal(this.innerHTML);
    });
}

/* 中转目标Url、function ｜  绑定弹出窗口的id | 回掉方法的入参 */
function online_initParamsFunc(action, bindElement, args) {

    login_callBack = action;
    if (typeof(action) === "function" && args) {
        login_callBack = {
            func: action,
            args: args
        };
    }

    // 没有指定元素
    if (!bindElement) {
        online_modal(this.innerHTML)
        return;
    }

    // 对指定Id进行事件绑定
    $("#" + bindElement).on("click", function () {
        online_modal(this.innerHTML);
    });
}


/* 中转目标Url、function ｜  绑定弹出窗口的id | 回掉方法的入参 */
function mobile_h5_initParamsFunc(action, bindElement, args) {

    login_callBack = action;
    if (typeof(action) === "function" && args) {
        login_callBack = {
            func: action,
            args: args
        };
    }
	//online check
    var login_obj = getCookie(login_winKey);
    if (login_obj) {
        dialog_target(login_callBack);
        return;
    }
    // 没有指定元素
    if (!bindElement) {
        mobile_h5_modal(this.innerHTML)
        return;
    }

    // 对指定Id进行事件绑定
    $("#" + bindElement).on("click", function () {
        mobile_h5_modal(this.innerHTML);
    });
}


function onLineCallBack(callBackCode, status, _loginName,logincallback) {
    try {
		//用于兼容注册功能
		if(login_callBack==undefined)
				login_callBack = logincallback;
					
        if (null == callBackCode) {
            if (_loginName != "" && _loginName != undefined) {
                window.loginName = _loginName;
                dialog_target(login_callBack);
            }
            return;
        }
        //兼容第三方登录
        var c_decrypt = getCookie("login_decrypt");
        if (c_decrypt != "" && c_decrypt != undefined) {
            window.login_decrypt = c_decrypt;
        }

        $.post(login_decrypt, {"data": callBackCode, "random": Math.random()}, function (data) {
            if (data.status == "OK") {
            	//用于兼容收银台跨域请求的问题
            	if(data.loginCookie){
            		var loginCookie = JSON.parse(data.loginCookie);//由JSON字符串转换为JSON对象
            		var temp = getCookie(loginCookie.name);
            		if(temp == null || temp == undefined || temp == ''){
            			setCookie(loginCookie.name,loginCookie.value,"m5",loginCookie.path,loginCookie.domain);
            		}
            	}
                dialog_target(login_callBack);
            } else {
                alert("解析数据异常");
                return;
            }
        }, "json")
    }
    catch (e) {

    }
    finally {
    }


}

//根据名字获取cookie 值
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            var c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
//根据名字删除cookie 值
function delCookie(c_name,c_path){
	var c_val=getCookie(c_name);
	if(c_val!=null)
		setCookie(c_name,c_val,"s-30",c_path);
}
//新增/修改cookie
function setCookie(c_name,c_value,c_exdays,c_path,c_domain){
	var expires="";
	var path="";
	var domain="";
	if(c_exdays){
		var d = new Date();
		d.setTime(d.getTime()+getsec(c_exdays));
		expires = "expires="+d.toGMTString()+";";
	}
	if(c_path)
		path="path="+c_path+";";
		
	if(c_domain)
	  domain="domain="+c_domain
	
	document.cookie = c_name + "=" + c_value + "; " + expires + path + domain;
}
/**
*设置缓存获取时间
*s20是代表20秒 
*m5是代表5分钟
*h是指小时，如12小时则是：h12
*d是天数，30天则：d30
*/
function getsec(c_exdays){
	var _days=c_exdays.substring(1,c_exdays.length)*1;
	var _type=c_exdays.substring(0,1);
	
	switch(_type){
	case "s":
	  return _days*1000;
	  break;
	case "m":
	  return _days*60*1000;
	  break;
	case "h":
	  return _days*60*60*1000;
	  break;
	case "d":
	  return _days*24*60*60*1000;
	  break;  	  
	}
}