//window._za={};
//window._za.logZoneInit = function(){};
//(function() {
//	var za = document.createElement("script");
//	za.src = "//static.zhongan.com/website/public/js/ilog/dist/ilog.min.js";
//	var s = document.getElementsByTagName("script")[0];
//	s.parentNode.insertBefore(za, s);
//})();
try {
	//加载页面底部
	document.write("<script src='//static.zhongan.com/resource/js/common/appDownload.js'><\/script>");
	document.write("<link href='//static.zhongan.com/resource/stylesheets/appDownload.css' rel='stylesheet'>");
} catch(e) {
//	console.log("ilog未引用");
	var za = document.createElement("script");
	za.src = "//static.zhongan.com/website/public/js/ilog/dist/ilog.min.js?time="+new Date().getTime();
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(za, s);
	za.onload = function(){
		window._za.logZoneInit('[data-ilogasync]','data-ilogasync');
	};
}
/**
Insure.js
layoutInit.js
forminit.js
**/

/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * eg:
 * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).Format("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).Format("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).Format("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */

Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        //月份
        "d+": this.getDate(),
        //日
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
        //小时
        "H+": this.getHours(),
        //小时
        "m+": this.getMinutes(),
        //分
        "s+": this.getSeconds(),
        //秒
        "q+": Math.floor((this.getMonth() + 3) / 3),
        //季度
        "S": this.getMilliseconds() //毫秒
    };
    var week = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f": "/u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};

var zaToolsForm, zaToolsLoadMask;
if ("undefined" != typeof BUI) {
    BUI.use(['bui/form', 'bui/tooltip', 'bui/mask'],
    function(Form, Tooltip, Mask) {
        //添加 名字为idcard的身份证校验规则
        Form.Rules.add({
            name: 'idcard',
            //规则名称
            msg: '请填写正确的身份证号码!',
            //默认显示的错误信息
            validator: function(value, baseValue, formatMsg) {
                num = value.toUpperCase();
                formatMsg = "";
                if (value == "") {
                    return "";
                }

                //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
                if (! (/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
                    formatMsg = "输入的身份证格式不正确！";
                    //return formatMsg;
                }
                //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                //下面分别分析出生日期和校验位
                var len, re;
                len = num.length;
                if (len == 15) {
                    re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
                    var arrSplit = num.match(re);

                    //检查生日日期是否正确
                    var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
                    var bGoodDay;
                    bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
                    if (!bGoodDay) {
                        formatMsg = "输入的身份证号里出生日期不对！";
                        //return formatMsg;
                    } else {
                        //将15位身份证转成18位
                        //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                        var nTemp = 0,
                        i;
                        num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
                        for (i = 0; i < 17; i++) {
                            nTemp += num.substr(i, 1) * arrInt[i];
                        }
                        num += arrCh[nTemp % 11];
                        //return num;
                    }
                }
                if (len == 18) {
                    re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
                    var arrSplit = num.match(re);

                    //检查生日日期是否正确
                    var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
                    var bGoodDay;
                    bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
                    if (!bGoodDay) {
                        formatMsg = "输入的身份证号里出生日期不对！";
                        //return formatMsg;
                    } else {
                        //检验18位身份证的校验码是否正确。
                        //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                        var valnum;
                        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                        var nTemp = 0,
                        i;
                        for (i = 0; i < 17; i++) {
                            nTemp += num.substr(i, 1) * arrInt[i];
                        }
                        valnum = arrCh[nTemp % 11];
                        if (valnum != num.substr(17, 1)) {
                            formatMsg = "18位身份证的校验码不正确！";
                            //return formatMsg;
                        }
                        //return "";
                    }
                }
                return formatMsg;
            }
        });

        //初始化Form
        zaToolsForm = new Form.Form({
            srcNode: '.p-form',
            defaultChildCfg: {
                validEvent: "blur"
            }
        }).render();

        //验证结果改变事件-显示校验成功后的样式
        zaToolsForm.on('validchange',
        function(ev) {
            //检验结果改变事件
            if (ev.valid) {
                //成功后提示效果
                //规避BUI.Form.Field删除校验后，进行校验BUG
                if ($(ev.target.get("el")).attr("data-rules") != undefined) {
                    if ($(ev.target.get("el")).attr("type") == "file" || $(ev.target.get("el")).attr("type") == "checkbox") {
                    } else if ($(ev.target.get("el")).parent().find(".za-field-success").length = 0) {
                        $(ev.target.get("el")).parent().append('<span class="za-field-success"></span>');
                    }
                }
            } else {
                //指定存放错误的容器
                if ($(ev.target.get("el")).attr("rules-container")) {
                    var errorObj = $(ev.target.get("el")).next(".x-field-error");
                    errorObj.appendTo($(ev.target.get("el")).attr("rules-container"));
                    errorObj.css("position", "relative");
                }
                if ($(ev.target.get("el")).attr("type") == "file" || $(ev.target.get("el")).attr("type") == "checkbox") {
                	var errorObj = $(ev.target.get("el")).nextAll(".x-field-error");
                    $(ev.target.get("el")).parent().after(errorObj);
                    $(ev.target.get("el")).parent().next('.za-field-success').remove();
                }

                $(ev.target.get("el")).next('.za-field-success').remove();
            }
        });

        $(".za-ins-textbox").on("focus",
        function() {
            $(this).addClass("active");
        });
        $(".za-ins-textbox").on("blur",
        function() {
            $(this).removeClass("active");
        });

        //初始化tip提示
        var tipsList = $('.p-form :input[data-tips]');
        $.each(tipsList,
        function(i, dom) {
            var tip = new Tooltip.Tip({
                trigger: dom,
                alignType: 'top-left',
                autoHide: true,
                //不自动隐藏
                offset: 8,
                title: $(dom).attr("data-tips"),
                elCls: 'tips tips-success',
                triggerEvent: "focus",
                triggerHideEvent: "blur",
                titleTpl: '<span class="x-icon x-icon-small x-icon-success"><i class="icon icon-white icon-question"></i></span>\
			<div class="tips-content">{title}</div>'
            });
            tip.render();
        });

        //根据Filed自定义rules-type属性初始化 错误提示效果
        var fieldtypeList = $('.p-form :input[rules-type]');
        if (fieldtypeList.length > 0) {
            $.each(fieldtypeList,
            function(index, dom) {
            	var dataname = $(dom).attr("name");
                if($('.p-form').find("input[name='"+dataname+"']").length>1){
                	BUI.each(zaToolsForm.getFields(),function(field){
        				if(field.get('name') === dataname){
        					field.set("errorTpl", '<span class="x-field-error x-field-error1" data-title="{error}"><span class="x-icon x-icon-mini x-icon-error">!</span></span>');
        				}
        			});
                }else{
                    var field = zaToolsForm.getField(dataname);
                	field.set("errorTpl", '<span class="x-field-error x-field-error1" data-title="{error}"><span class="x-icon x-icon-mini x-icon-error">!</span></span>');
                }
            });

            var tips = new Tooltip.Tips({
                tip: {
                    trigger: '.x-field-error1',
                    alignType: 'top',
                    autoHide: true,
                    offset: 1,
                    elCls: 'tips tips-warning',
                    titleTpl: '<div class="tips-content" style="margin-left:0; color:#F60;">{title}</div>'
                }
            });
            tips.render();
            //tips.show();
            //setTimeout(function(){tips.hide()},2000);
        }

        //根据Filed自定义rules-type属性初始化 错误提示效果
        var tipstypeList = $('.p-form :input[tips-right]');
        if (tipstypeList.length > 0) {
            $.each(tipstypeList,
            function(i, dom) {
                var tip = new Tooltip.Tip({
                    trigger: dom,
                    alignType: "right",
                    offset: 8,
                    autoHide: false,
                    //不自动隐藏
                    title: $(dom).attr("tips-right"),
                    elCls: 'tips tips-info',
                    titleTpl: '<div class="tips-content" style="margin-left:0;">{title}</div>'
                });
                tip.render();
                tip.show();
            });
        }

        //加载遮罩
        zaToolsLoadMask = new Mask.LoadMask({
            el: 'body',
            msg: '<img alt="loading" class="maskloading" src="http://img02.taobaocdn.com/tps/i2/T1NU8nXCVcXXaHNz_X-16-16.gif">数据加载中，请稍候 ....'
        });
    });
}

var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?d792eb5ed311e5605c562e0f39e100cb";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);
})();



(function() {
	var hm = document.createElement("script");
	hm.src = "//hm.baidu.com/hm.js?d792eb5ed311e5605c562e0f39e100cb";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();

// 同盾
(function() {
    _fmOpt = {
        partner: 'zhongcaixian',
        appName: 'zhongcaixian_web',
        token: $('[name="token_id"]').val()
    };
    var cimg = new Image(1,1);
    cimg.onload = function() {
        _fmOpt.imgLoaded = true;
    };
    cimg.src = "https://fp.fraudmetrix.cn/fp/clear.png?partnerCode=zhongcaixian&appName=zhongcaixian_web&tokenId=" + _fmOpt.token;
    var fm = document.createElement('script'); fm.type = 'text/javascript'; fm.async = true;
    fm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'static.zhongan.com/resource/js/fm.js?ver=0.1&t=' + (new Date().getTime()/3600000).toFixed(0);
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(fm, s);
})();

//GA统计
/*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-61955298-1', 'auto');
ga('send', 'pageview');*/


$(function() {
    zatoolbarInit(); //两栏布局初始化
    zaformboxInit(); //form中cbx,rad初始化
    zanavInit(); //菜单导航下拉初始化
    zaloginInit(); //login登录初始化

    zamenuInit();
});

//导航菜单初始化
function zamenuInit(){

	//当菜单与索引同时存在时配置选中
	// if($(".m-nav-list").length > 0 && $("#zamenukey").length > 0){
	// 	var key = $("#zamenukey").val();
	// 	var index = -1;
	// 	switch(key){
	// 		case "home": index=0;break; //首页
	// 		case "one": index=1;break; //一元保
	// 		case "trait": index=2;break; //特色
	// 		case "trip": index=3;break; //旅行
	// 		case "acct": index=4;break; //意外
	// 		case "health": index=5;break; //健康
	// 		case "team": index=6;break; //团体
	// 		case "touzi": index=7;break; //投资
	// 		case "service": index=8;break; //保险服务
	// 		case "invest": index=9;break; //众赢宝
	// 	}

	// 	$(".m-nav-list > li :eq("+index+") > a").addClass("active");
	// }
    if(($(".m-nav-list").length > 0 || $(".za-main-nav-list").length > 0) && $("#zamenukey").length > 0){
        var key = $("#zamenukey").val();
		var currItem = '#zaNav_';
		switch(key){
			case "home": key="onlineIndex";break; //首页
			case "one": key="";break; //一元保
			case "trait": key="exclusive";break; //特色
			case "trip": key="travel";break; //旅行
			case "acct": key="accident";break; //意外
			case "health": key="health";break; //健康
			case "team": key="organization";break; //团体
			case "touzi": key="touzi";break; //投资
			case "service": key="baoxian";break; //保险服务
			case "ggxxpl": key="ggxxpl";break; //公开信息披露
			case "invest": key="";break; //众赢宝
		}
        if(currItem+key){
            $(currItem+key).addClass('active');
        }
    }
}

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}


function zaloginInit() {
    // if(!getCookie('zaLoginCookieKey') || /.html$/.test(location.pathname)){
    if(/.html$/.test(location.pathname)){
       if ($("#logininfo").length) {
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "/open/common/check_login_screen/check_login_dto.json",
                ajaxStart:function(){},
                ajaxComplete:function(){},
                success: function(data) {
                    var $loginObj = $("#logininfo");
                    if (data) {
                        if (data.loginName == undefined) {
                            $loginObj.html('<span>欢迎您，<a href="/account/myAccount"  title="点击进入我的账户"  class="s-lk-tp g-mar-lr5">' + data.phone + '</a><a  id="loginOut" href="/logOut" class="s-lku">退出</a></span>');
                            //$loginObj.html('<span>欢迎您，<a href="/account/myAccount"  title="点击进入我的账户">' + data.phone + '</a></span><span class="g-mar-lr5">&nbsp;</span><a  id="loginOut" onClick="loginOut();" href="javascript:;">退出</a>');
                            //$loginObj.html('<div class="logined">欢迎你，<a href="/account/myAccount" title="点击进入我的账户" class="za-index-link-yhm">' + data.phone + '</a>&#12288;<input type="button" id="loginOut" onClick="loginOut();" value="退出" class="za-index-link-green"></div>');
                        } else {
                            $loginObj.html('<span>欢迎您，<a href="/account/myAccount"  title="点击进入我的账户"  class="s-lk-tp g-mar-lr5">' + data.loginName + '</a><a  id="loginOut"  href="/logOut" class="s-lku">退出</a></span>');
                            //$loginObj.html('<span>欢迎您，<a href="/account/myAccount"  title="点击进入我的账户">' + data.loginName + '</a></span><span class="g-mar-lr5">&nbsp;</span><a  id="loginOut" onClick="loginOut();" href="javascript:;">退出</a>');
                            //$loginObj.html('<div class="logined">欢迎你，<a href="/account/myAccount" title="点击进入我的账户" class="za-index-link-yhm">' + data.loginName + '</a>&#12288;<input type="button" id="loginOut" onClick="loginOut();" value="退出" class="za-index-link-green"></div>');
                        }
                    } else {

                        $loginObj.html('<a href="/open/member/login"  class="g-mar-lr5 s-lk" rel="nofollow">会员登录</a>或者<a href="/open/member/register" class="g-mar-lr5 s-lk" rel="nofollow">免费注册</a>');
                        //$loginObj.html('<span><a href="/open/member/login">会员登录</a><span class="g-mar-lr5">|</span><a href="/open/member/register">注册</a></span>');
                        //$loginObj.html('<div class="unlogin"><a href="/open/member/login" class="za-a-login">会员登录</a><a href="/open/member/register" class="">注册</a></div>');
                    }
                }
            });
        }
        if($("#enterpriseLoginInfo").length){
            $.ajax({
                type:"POST",
                dataType: "json",
                url: "/open/common/check_login_screen/check_enterprise_login.json",
                success: function(data) {
                    var $loginObj = $("#enterpriseLoginInfo");
                    if (data) {
                        $loginObj.html('<span>欢迎您，<a href="/eportal/enterpriseAccount"  title="点击进入企业账户"  class="s-lk-tp g-mar-lr5">' + data.email + '</a><a  id="loginOut" href="/open/enterprise/loginOut" class="s-lku">退出</a></span>');
                    } else {

                        $loginObj.html('<a href="/open/eportal/login"  class="g-mar-lr5 s-lk">会员登录</a>或者<a href="/open/eportal/register" class="g-mar-lr5 s-lk">免费注册</a>');
                    }
                }
            });
        }
    }

}

function loginOut() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/open/common/check_login_screen/login_out.json",
        success: function(data) {
            var $loginObj = $("#logininfo");
            window.location = "/index.html";
            $loginObj.html('<a href="/open/member/login"  class="g-mar-lr5 s-lk">会员登录</a>或者<a href="/open/member/register" class="g-mar-lr5 s-lk">免费注册</a>');
            //$loginObj.html('<span><a href="/open/member/login">会员登录</a><span class="g-mar-lr5">|</span><a href="/open/member/register">注册</a></span>');
        }
    });
}

function enterpriseLoginOut(){
	$.ajax({
        type: "POST",
        dataType: "json",
        url: "/open/common/check_login_screen/enterprise_login_out.json",
        success: function(data) {
            var $loginObj = $("#enterpriseLoginInfo");
            window.location = "/eportal/index.html";
        	$loginObj.html('<a href="/open/eportal/login"  class="g-mar-lr5 s-lk">会员登录</a>或者<a href="/open/eportal/register" class="g-mar-lr5 s-lk">免费注册</a>');
        }
    });
}

function zanavInit() {
    if ("undefined" != typeof zaTool) {
        zaTool.slideMenu("#slideMenu", {
            childNode: ">li.slide-item",
            childContainer: ".za-menu"
        });

        zaTool.slideMenu("#myAccount", {
            childNode: ">.za-mine-account",
            childContainer: ".account-list",
            activeCls: "active"
        });
    }
}

//初始化 两栏界面高度与选中项
function zatoolbarInit() {
    //两栏界面初始化
    if ($(".za-acc-nav-toolbar").length > 0 && $(".za-acc-nav-toolbar").parent().css("display") != "table-cell") {
        var $layoutLeft = $(".za-acc-nav-toolbar").next();
        var $layoutRight = $(".za-acc-nav-toolbar").parent().next();

        setHeight($layoutLeft,$layoutRight,63);
        
        // $layoutLeft.height($layoutRight.height() - 63);
        $layoutRight.resize(function() {
            // $layoutLeft.height($layoutRight.height() - 63);
            setHeight($layoutLeft,$layoutRight,63);
        });
    }

    //两栏界面初始化左侧导航选中当前页面
    if ($("body").attr("acctoolbar")) {
        $(".za-com-nav-list > li > a").eq($("body").attr("acctoolbar")).addClass("hover");
    }
}

function setHeight($colL,$colR,reviseVal){
        var leftHeight = $colL.height();
        var heightVal = $colR.height() - reviseVal;
        var $cRChild = $colR.children() ;

        if( leftHeight > heightVal ){
            var borderT = 0,
                borderB = 0,
                paddingT = 0,
                paddingB = 0,
                cRH = 0,
                $cR = $cRChild.size = 1 ? $cRChild : $colR;

            heightVal = leftHeight;

            borderT = parseInt($cR.css('border-top-width'));
            borderB = parseInt($cR.css('border-bottom-width'));
            paddingT = parseInt($cR.css('padding-top'));
            paddingB = parseInt($cR.css('padding-bottom'));
            cRH = leftHeight + reviseVal - borderT - borderB - paddingT -paddingB;
            $cR.height(cRH);

        };
        $colL.height(heightVal);
}

//resize of div
(function($, h, c) {
    var a = $([]),
    e = $.resize = $.extend($.resize, {}),
    i,
    k = "setTimeout",
    j = "resize",
    d = j + "-special-event",
    b = "delay",
    f = "throttleWindow";
    e[b] = 250;
    e[f] = true;
    $.event.special[j] = {
        setup: function() {
            if (!e[f] && this[k]) {
                return false;
            }
            var l = $(this);
            a = a.add(l);
            $.data(this, d, {
                w: l.width(),
                h: l.height()
            });
            if (a.length === 1) {
                g();
            }
        },
        teardown: function() {
            if (!e[f] && this[k]) {
                return false;
            }
            var l = $(this);
            a = a.not(l);
            l.removeData(d);
            if (!a.length) {
                clearTimeout(i);
            }
        },
        add: function(l) {
            if (!e[f] && this[k]) {
                return false;
            }
            var n;
            function m(s, o, p) {
                var q = $(this),
                r = $.data(this, d);
                r.w = o !== c ? o: q.width();
                r.h = p !== c ? p: q.height();
                n.apply(this, arguments);
            }
            if ($.isFunction(l)) {
                n = l;
                return m;
            } else {
                n = l.handler;
                l.handler = m;
            }
        }
    };
    function g() {
        i = h[k](function() {
            a.each(function() {
                var n = $(this),
                m = n.width(),
                l = n.height(),
                o = $.data(this, d);
                if (m !== o.w || l !== o.h) {
                    n.trigger(j, [o.w = m, o.h = l]);
                }
            });
            g();
        },
        e[b]);
    }
})(jQuery, this);

//初始化 form 复选框 单选框
function zaformboxInit() {
    $("input[zatype='cbxRad']").each(function() {
        if(!$(this).hasClass("za-ins-ck-cbx")){
        //初始化选择框
        $(this).addClass("za-ins-ck-cbx");
        $(this).wrap('<span class="za-ins-cbxitem1"></span>');
        $(this).after('<label class="za-ins-ck-label1" for="' + $(this).attr("id") + '">' + $(this).attr("zatxt") + '</label>');
        //设置删除事件
        if ($(this).attr("zadelfn")) {
            $(this).next().after('<a class="za-ins-cbxitemdel" onclick="' + $(this).attr("zadelfn") + '">X</a>');
        } else {
            $(this).next().after('<a class="za-ins-cbxitemdel" onclick="fnZACheckDel(this)">X</a>');
        }

        //设置默认选中
        if ($(this).attr("checked")) {
            $(this).next().addClass("za-ins-ck-check");
        }
        //是否指定父级Jquery选择器 默认父级为上两级
        if ($(this).attr("zaparent")) {
            zaCheck($(this).next(), {},
            $($(this).attr("zaparent")), 1);
        } else {
            zaCheck($(this).next(), {},
            $(this).parent().parent(), 1);
        }
        }
    });

    $("input[zatype='check']").each(function() {

        if(!$(this).hasClass("za-ins-ck-cbx")){
        $(this).addClass("za-ins-ck-cbx");
        $(this).wrap('<span class="za-ins-cbxitem"></span>');
        //扩展增加disabled by shawnwang
        $(this).after('<label class="za-ins-ck-label '+ $(this).attr("disabled") +'" for="' + $(this).attr("id") + '">' + $(this).attr("zatxt") + '</label>');

        if ($(this).attr("checked")) {
            $(this).next().addClass("za-ins-ck-check");
        }
        zaCheck($(this).next());
        }
    });

    $("input[zatype='radio']").each(function() {

        if(!$(this).hasClass("za-ins-ck-cbx")){
        $(this).addClass("za-ins-ck-cbx");
        $(this).wrap('<span class="za-ins-cbxitem"></span>');
        $(this).after('<label class="za-ins-rad-label" for="' + $(this).attr("id") + '">' + $(this).attr("zatxt") + '</label>');

        if ($(this).attr("checked")) {
            $(this).next().addClass("za-ins-rad-check");
        }

        //是否指定父级Jquery选择器 默认父级为上两级
        if ($(this).attr("zaparent")) {
            zaCheck($(this).next(), {},
            $($(this).attr("zaparent")), 1);
        } else {
            zaCheck($(this).next(), {
                hover: "za-ins-rad-hover",
                checked: "za-ins-rad-check"
            },
            $(this).parent().parent().parent());
        }
        }
    });

    //复选框做单选
    if ($(".za-ins-cbxitem").length) {
        $(".za-ins-cbxitem").hover(function() {
            $(this).children(".za-ins-cbxitemdel").show();
        },
        function() {
            $(this).children(".za-ins-cbxitemdel").hide();
        });
    }
}

function fnZACheckDel(_this) {
    if (confirm("确认删除信息?")) {
        fnZACheckDelExec(_this)
    } else {
        return false;
    }
}

function fnZACheckDelExec(_this){
    if ($(_this).parent().parent().find(".za-ins-cbxitem").length == 1) {
        $(_this).parent().parent().parent().remove();
    }
    $(_this).parent().remove();
}

function zaCheck(obj, options, parentObj, type) {
    var _obj, _hover = "za-ins-ck-hover",
    _checked = "za-ins-ck-check";

    if (typeof options == 'object') {
        _hover = options.hover || _hover;
        _checked = options.checked || _checked;
    }
    _obj = obj;
    $(_obj).hover(function() {
        $(this).addClass(_hover);
    },
    function() {
        $(this).removeClass(_hover);
    }).click(function() {
    	// Add by Ming.Huang at 2015.08.27 Start
    	if($(this).prev().attr("disabled") == 'disabled'){
    		return;
    	}
    	// Add by Ming.Huang at 2015.08.27 End
        if (parentObj) {
            //复选框单选模式
            if (type == 1 && $(this).hasClass(_checked)) {
                //取消
                $(this).removeClass(_checked);
            } else {
                $(parentObj).find(":checkbox").removeAttr("checked");
                $(parentObj).find("." + _checked).removeClass(_checked);
                $(this).addClass(_checked);
            }
        } else {
        	//扩展增加disabled by shawnwang
            if ($(this).hasClass(_checked)&&!$(this).hasClass("disabled")) {
                //取消
                $(this).removeClass(_checked);
            } else {
                //确定
                $(this).addClass(_checked);
            }
        }
    });
}

/*function fnCardSelect(txtname, selvalue, type) {
	 var field = zaToolsForm.getField(txtname);
	    var reg = /^[A-Za-z]+$/;

	    if (selvalue && txtname) {
	        if (type && type == '1' && (selvalue == '1' || (reg.test(selvalue) && selvalue.toUpperCase() == 'I'))) {
	            field.addRules({
	                idcard: true,
	                required: true
	            },{required: "请输入正确的身份证号"});
	            //field.valid();
	            return;
	        } else if (selvalue == '1' || (reg.test(selvalue) && selvalue.toUpperCase() == 'I')) {
	            field.addRules({
	                idcard: true,
	                required: true
	            },{required: "请输入正确的身份证号"});
	            //field.valid();
	        } else {
	            field.clearRules();
	            $(field.get('el')).siblings(".za-field-success,.x-field-error").remove();
	            $(field.get('el')).removeClass("x-input-error");
	            field.addRules({
	            	maxlength: 20,
	                required: true
	            },{required: "请输入正确的证件号码"});
	            //field.valid();
	        }
	    }
}*/


//证件类型下拉框验证事件初始化 必填
//txtname：证件号码input的name,selvalue：选择框的value
function fnReqIDCardSelect(txtname, selvalue, type) {
    var field = zaToolsForm.getField(txtname);
    var reg = /^[A-Za-z]+$/;

    if (selvalue && txtname) {
        if (type && type == '1' && (selvalue == '1' || (reg.test(selvalue) && selvalue.toUpperCase() == 'I'))) {
            field.addRules({
                idcard: true,
                required: true
            },{required: "请输入正确的身份证号"});
            //field.valid();
            return;
        } else if (selvalue == '1' || (reg.test(selvalue) && selvalue.toUpperCase() == 'I')) {
            field.addRules({
                idcard: true,
                required: true
            },{required: "请输入正确的身份证号"});
            //field.valid();
        } else {
            field.clearRules();
            $(field.get('el')).siblings(".za-field-success,.x-field-error").remove();
            $(field.get('el')).removeClass("x-input-error");
            field.addRules({
            	maxlength: 20,
                required: true
            },{required: "请输入正确的证件号码"});
            //field.valid();
        }
    }
};
var fnCardSelect = fnCardSelect = fnIDCardSelect = fnReqIDCardSelect;


/*function fnCardSelect(txtname, selvalue, type) {
    var field = zaToolsForm.getField(txtname);
    var reg = /^[A-Za-z]+$/;

    if (selvalue && txtname) {
        if (type && type == '1' && (selvalue == '1' || (reg.test(selvalue) && selvalue.toUpperCase() == 'I'))) {
            field.addRules({
                idcard: true,
                required: true
            },{required: "请输入正确的身份证号"});
            //field.valid();
            return;
        } else if (selvalue == '1' || (reg.test(selvalue) && selvalue.toUpperCase() == 'I')) {
            field.addRules({
                idcard: true,
                required: true
            },{required: "请输入正确的身份证号"});
            //field.valid();
        } else {
            field.clearRules();
            $(field.get('el')).siblings(".za-field-success,.x-field-error").remove();
            $(field.get('el')).removeClass("x-input-error");
            field.addRules({
            	maxlength: 20,
                required: true
            },{required: "请输入正确的证件号码"});
            //field.valid();
        }
    }
};	*/




function zaAjaxMaskShow(){
	zaToolsLoadMask.show();
	$(".bui-ext-mask").addClass("bui-ext-mask1");
}
function zaAjaxMaskHide(){
	zaToolsLoadMask.hide();
	$('.maskloading').hide();
	$('.bui-ext-mask').hide();
	$('.bui-ext-mask-msg').hide();
	$(".bui-ext-mask").removeClass("bui-ext-mask1");
}
function zaFormMaskShow(){
	zaToolsLoadMask.set("msg","表单提交中，请稍后……");
	zaToolsLoadMask.show();
}
function zaFormMaskHide(){
	zaToolsLoadMask.hide();
}

function zahotkfhide(){
	$('.zakf').hide();
};
//侧栏热点初始化
function fnHotInit(){
	var o = {
		isser: true, //在线客服
		istop: true, //置顶
	};
	if(arguments[0] && typeof(arguments[0]) == "object"){
        o = $.extend(o,arguments[0]);
	}

	var hot = '<div class="m-hot-ind">'+
        '<ul>';
	//客服
	if(o.isser){
		hot += '<li class="f-cb zakf"><a href="javascript:zahotkfhide();" class="zaclose"></a><a id="zahotkf" target="_blank" href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODAxNzU3OV8yNzE2MTdfNDAwOTk5OTU5NV8yXw" class="ind5" title="在线客服"></a></li>';
	}
	if(o.istop){
		//置顶
		hot += '<li class="f-cb"><a id="zahottop" href="#top" class="ind4" title="返回顶部"></a></li>';
	}

    hot += '</ul></div>';

    if($(hot).find("li").length>0){
    	$("body").append(hot);
    }

    if(o.isser){
	    //客服动画
	    $("#zahotkf").hover(function(){
	    	if(!$(this).is(":animated")){
	    		//$(this).css("backgroundImage",'url("//static.zhongan.com/website/online/resource/images/enterprise/ent_qqin_hover.png")');
	    		$(this).css("backgroundImage",'url("//static.zhongan.com/website/online/resource/images/enterprise/ent_con.png")');
	        	$(this).animate({"width":"60px"},500);
	    	}
	    },function(){
	    	if($(this).width() > 38){
	        	$(this).animate({"width":"60px"},500,function(){
	            	//$(this).css("backgroundImage",'url("//static.zhongan.com/website/online/resource/images/enterprise/ent_qqin_normal.png")');
	        		$(this).css("backgroundImage",'url("//static.zhongan.com/website/online/resource/images/enterprise/ent_con.png")');
	        	});
	    	}
	    });
    }
}

//号码遮挡
function fnGetMaskNumber(str,reg){
	if(str){
		if(!reg){
			reg = /(.{6}).+(.{4})/g;
		}
		str = str.replace(reg, "$1****$2");
		return str;
	}
}

//申请理赔中样例弹窗
function zaExampleMessage(imgtitle,imgsrc){
	BUI.use('bui/overlay',function(Overlay){
		var dhtml = '<p><img id="upImgAmplify" src="'+ imgsrc +'"/></p>';

		var dialog = new Overlay.Dialog({
			title: imgtitle,
			elCls:"za-dialog-message",
			bodyContent:dhtml,
			buttons:[],
			closeAction:"destroy",
			success:function () {this.close();}
		});
		dialog.render();

		//防止 图片延迟显示错乱  清空图片
		var image = document.getElementById("upImgAmplify");
		zaAjaxMaskShow();
		image.onload = function(){
			zaAjaxMaskHide();
			dialog.show();
			if($(".bui-dialog .bui-stdmod-body").width() > 1100){
				$(".bui-dialog .bui-stdmod-body").width(1100);
				$(".bui-dialog #upImgAmplify").width(1100);
				dialog.show();
			}
		};

		image.src ='';
		image.src = imgsrc;
	});

}



/* 提示框用弹窗显示 */
function zaMessageShow(text, type, time,btnTxt,btnTxt1,timerData) {
    BUI.use('bui/overlay',
    function(Overlay) {
        var dhtml = text;
        var count = 5;
        if (type.toLowerCase() == "success") {
            dhtml = '<br/><br/><div><div class="x-icon me-success"></div><span class="me-bd">' + text + '</span></div><br/><br/>';
        } else if (type.toLowerCase() == "error") {
            dhtml = '<br/><br/><div><div class="x-icon me-error"></div><span class="me-bd">' + text + '</span></div><br/><br/>';
        } else if (type.toLowerCase() == "warning") {
            dhtml = '<br/><br/><div><div class="x-icon me-warning"></div><span class="me-bd">' + text + '</span></div><br/><br/>';
        }else if(type.toLowerCase() == "jump"){
        	 dhtml = '<br/><br/><div><div class="x-icon me-error"></div><span class="me-bd">' + text + '</span></div><br/><br/>';
        }else if(type.toLowerCase() == "confirm"){
        	dhtml = '<br/><br/><div><div class="x-icon me-error"></div><span class="me-bd">' + text + '</span></div><br/><br/>';
        }else if(type.toLowerCase() == "grouphome"){
        	dhtml = '<br/><br/><div><div class="x-icon me-success"></div><span class="me-bd">' + text + '</span></div><br/><br/>';
        }else if (type.toLowerCase() == "timer") {
            dhtml = '<br/><br/><div id="timerContent"><div class="x-icon me-success"></div><span class="me-bd">' + text + '<br/><span id="timeMessageCount">' + count + '</span>秒后跳转...'  + '</span></div><br/><br/>';
        }
        var dialog;
        if(type.toLowerCase() == "timer"){
        	dialog = new Overlay.Dialog({
                title: '提示',
                elCls: "za-dialog-message",
                bodyContent: dhtml,
                buttons:[
                         {
                             text: btnTxt ,
                             elCls : 'button button-primary',
                             handler : function(){
                                //do some thing
                               window.location.href=timerData.url;
                              //  this.close();
                             }
                         }
                     ],
                closeable: false,
                // closeAction: "destroy",
            });

            setTimeout(function() {
              var self = this;
              var countTimer;
              countTimer = setInterval(function () {
                if(count > 0){
                  count--;
                }
                else{
                  clearInterval(countTimer);
                }
                $("#timerContent").html('<div class="x-icon me-success"></div><span class="me-bd">' + text + '<br/><span id="timeMessageCount">' + count + '</span>秒后跳转...'  + '</span>');
              },1000);

               setTimeout(function(){
               	window.location.href=timerData.url;
              },timerData.second);
            },1000);

        }else if(type.toLowerCase() == "confirm"){
        	dialog = new Overlay.Dialog({
                title: '提示',
                elCls: "za-dialog-message",
                bodyContent: dhtml,
                buttons:[
                         {
                             text: btnTxt ,
                             elCls : 'button button-primary',
                             handler : function(){
                                 //do some thing
                            	 time();
                                 this.close();
                             }
                         },
                         {
                             text: btnTxt1 ,
                             elCls : 'button button-primary',
                             handler : function(){
                                 //do some thing
                                 this.close();
                             }
                         }
                     ],
                closeAction: "destroy",
                success: function() {
                    this.close();

                }
            });

        }else if(type.toLowerCase() == "jump"){
        	 dialog = new Overlay.Dialog({
	                title: '提示',
	                elCls: "za-dialog-message",
	                bodyContent: dhtml,
	                buttons:[
	                         {
	                             text: btnTxt || '我知道了',
	                             elCls : 'button button-primary',
	                             handler : function(){
	                                 //do some thing
	                            	 time();
	                                 this.close();
	                             }
	                         }
	                     ],
	                closeAction: "destroy",
	                success: function() {
	                    this.close();

	                }
	            });
        }else if(type.toLowerCase() == "grouphome"){
        	dialog = new Overlay.Dialog({
                title: '提示',
                elCls: "za-dialog-message",
                bodyContent: dhtml,
                buttons:[
                         {
                             text:'我知道了',
                             elCls : 'button button-primary',
                             handler : function(){
                                 //do some thing
                                 this.close();
                                 location.href='/eportal/index.html';
                             }
                         }
                     ],
                closeAction: "destroy",
                success: function() {
                    this.close();
                }
            });
        }else{
	        if (typeof time == 'function') {
	            dialog = new Overlay.Dialog({
	                title: '提示',
	                elCls: "za-dialog-message",
	                bodyContent: dhtml,
	                buttons:[
	                         {
	                             text: btnTxt || '我知道了',
	                             elCls : 'button button-primary',
	                             handler : function(){
	                                 //do some thing
	                                 this.close();
	                             }
	                         }
	                     ],
	                closeAction: "destroy",
	                success: function() {
	                    this.close();
	                    time();
	                }
	            });
	        } else {
	            dialog = new Overlay.Dialog({
	                title: '提示',
	                elCls: "za-dialog-message",
	                bodyContent: dhtml,
	                buttons:[
	                         {
	                             text:'我知道了',
	                             elCls : 'button button-primary',
	                             handler : function(){
	                                 //do some thing
	                                 this.close();
	                             }
	                         }
	                     ],
	                closeAction: "destroy",
	                success: function() {
	                    this.close();
	                }
	            });
	        }
        };
        dialog.show();

        if (time && typeof time != 'function') {
            setTimeout(function() {
                dialog.hide();
            },
            time);
        }

    });

}

var zaTool = window.zaTool || {};

(function(zaTool) {

    var hoverTool = function(render) {

        if (!$(render)) return;
        var hoverList = $(render).find("a");
        $.each(hoverList,
        function(index, dom) {
            $(dom).hover(function(ev) {
                $(dom).addClass("selected");
            },
            function(ev) {
                $(dom).removeClass("selected");

            });
        });
    };

    var slideMenu = function(render, options) {
        var renderDom = $(render);
        if (!renderDom) return;

        options = options || {};

        var slideNodes = $(render).find(options.childNode);
        $.each(slideNodes,
        function(index, dom) {
            var _self = this;
            $(_self).hover(function(ev) {
                if (options.activeCls) {
                    $(_self).addClass(options.activeCls);
                }
                $(_self).find(">a").addClass("selected");
                $(_self).find(options.childContainer).show();

            },
            function(ev) {
                if (options.activeCls) {
                    $(_self).removeClass(options.activeCls);
                }
                $(_self).find(">a").removeClass("selected");
                $(_self).find(options.childContainer).hide();
            });
        });
    };

    var imagePlayer = function(render, options) {
        var renderDom = $(render);
        if (!renderDom) return;

        options = options || {};

        var biZhiDelayLoadImg = $(render + " img");
        var biZhiDelayLoadImgLength = biZhiDelayLoadImg.length;
        for (var i = 1; i < biZhiDelayLoadImgLength; i++) {
            var curDelayImg = biZhiDelayLoadImg.eq(i);
            if (curDelayImg.attr("srch")) {
                curDelayImg.attr("src", curDelayImg.attr("srch"));
                curDelayImg.removeAttr("srch");
            }
        }
        var _focus_num = $(options.slidebarId + "> li").length;
        var _focus_text = $(options.textContainer + ">div").length;
        var _focus_direction = true;
        var _focus_pos = 0;

        $(render).css("width", options.imgwidth * _focus_num + "px");
        $(options.slidebarId).css("width", 22 * _focus_num + "px");
        var _focus_max_length = _focus_num * options.imgwidth;
        var _focus_li_length = options.imgwidth;
        var _focus_dsq = null;
        var _focus_lock = true;

        $(options.textContainer + ">#tip" + _focus_pos).animate({
            "opacity": "1"
        },
        2000);
        function autoExecAnimate() {


            if(options.sildeCallback){
                options.sildeCallback(_focus_pos);
            }

            $("#zapic" + _focus_pos).addClass("info-cur").siblings("li.info-cur").removeClass("info-cur");
            var moveLen = _focus_pos * _focus_li_length;
            $(render).animate({
                left: "-" + moveLen + "px"
            },
            600);

            if (_focus_pos == (_focus_num - 1)) {

                _focus_direction = false;
            }
            if (_focus_pos == 0) {
                _focus_direction = true;
            }

            if (_focus_direction) {

                $(options.textContainer + ">#tip" + _focus_pos).animate({
                    "opacity": "0"
                },
                1000);

                $(options.textContainer + ">#tip" + (_focus_pos + 1)).animate({
                    "opacity": "1"
                },
                1000);

                _focus_pos++;
            } else {
                $(options.textContainer + ">#tip" + _focus_pos).animate({
                    "opacity": "0"
                },
                1000);

                $(options.textContainer + ">#tip" + (_focus_pos - 1)).animate({
                    "opacity": "1"
                },
                1000);

                _focus_pos--;
            }
        }
        _focus_dsq = setInterval(autoExecAnimate, 6000);

        $(options.slidebarId + "> li").hover(function() {
            _focus_pos = parseInt($(this).attr("sid"));
            if (_focus_lock) {
                clearInterval(_focus_dsq);
                _focus_lock = false;
            }
            $("#zapic" + _focus_pos).addClass("info-cur").siblings("li.info-cur").removeClass("info-cur");
            var moveLen = _focus_pos * _focus_li_length;
            $(render).stop(true, true).animate({
                left: "-" + moveLen + "px"
            },
            600);

            /*
            if (_focus_pos == (_focus_num - 1)) {

                _focus_direction = false;
            }
            if (_focus_pos == 0) {
                _focus_direction = true;
            }

            if (_focus_direction) {

                $(options.textContainer + ">#tip" + _focus_pos).stop(true, true).animate({
                    "opacity": "1"
                },
                1000);
                $(options.textContainer + ">#tip" + (_focus_pos)).siblings().stop(true, true).animate({
                    "opacity": "0"
                },
                1000);

            } else {
                $(options.textContainer + ">#tip" + _focus_pos).stop(true, true).animate({
                    "opacity": "1"
                },
                1000);
                $(options.textContainer + ">#tip" + (_focus_pos)).siblings().stop(true, true).animate({
                    "opacity": "0"
                },
                1000);

            }
            */
        },
        function() {
            if (_focus_lock == false) {
                _focus_dsq = setInterval(autoExecAnimate, 6000);
                _focus_lock = true;
            }
        });
        $(render).hover(function() {
            if (_focus_lock) {
                clearInterval(_focus_dsq);
                _focus_lock = false;
            }
        },
        function() {
            if (_focus_lock == false) {
                _focus_dsq = setInterval(autoExecAnimate, 6000);
                _focus_lock = true;
            }
        });
        $(".pic-list2 li").hover(function() {
            $(this).addClass("hover").siblings().removeClass("hover");
        },
        function() {
            $(this).removeClass("hover");
        });

    };


    function postRequest(URL, PARAMS) {
        var temp = document.createElement("form");
        temp.action = URL;
        temp.method = "post";
        temp.style.display = "none";
        for (var x in PARAMS) {
            var opt = document.createElement("textarea");
            opt.name = x;
            opt.value = PARAMS[x];
            // alert(opt.name)
            temp.appendChild(opt);
        }
        document.body.appendChild(temp);
        temp.submit();
        return temp;
    };
    window.postRequest = postRequest;

    zaTool.hoverTool = hoverTool;
    zaTool.slideMenu = slideMenu;
    zaTool.imagePlayer = imagePlayer;

})(window.zaTool);
