$(function(){
	downloadTip();
});
var downloadTip = function(){
	var downMsg =
		'<div class="download-fix">'+
			'<div class="download-room">'+
				'<div class="download-cell" style="width:100px;">'+
					'<a class="download-quit" href="javascript:void(0);"></a>'+

				'</div>'+
				'<div class="download-cell" style="background:url(//static.zhongan.com/website/online/assets/images/QRcode/actives-listed.png) center center no-repeat">'+
					'<p style="visibility:hidden;color:#fff; margin:0 0 10px -100px;">随身管理各渠道保单，在线报案，</p>'+
					'<p style="visibility:hidden;color:#fff;">更有<span>精彩活动</span>和<span>专享折扣</span>等你来</p>'+
				'</div>'+
				'<div class="download-cell" data-ilogasync="1.1.sW6|a">'+
					'<div class="download-app-androw"><img src="//static.zhongan.com/website/online/assets/images/QRcode/qrcode-listed.png"/></div>'+
				'</div>'+
			'</div>'+
		'</div>';
	var delCookie = getCookie("delCo");		//读取cookie是否含有隐藏属性
//	console.log(delCookie);
	if( delCookie == "del"){
	}else{
		$("body").append(downMsg);
		window._za.logZoneInit('[data-ilogasync]','data-ilogasync');
	}
	$(".download-quit").on("click",function(){
		SetCookie("delCo","del");	//cookie传值，定义隐藏时间
		$(this).parents(".download-fix").hide();
	});
}
function SetCookie(name,value,day)//两个参数，一个是cookie的名子，一个是值
{
    var Days = day || 7; //此 cookie 将被保存  7 天
    var tpath = "/";
    var ZApath = ".zhongan.com";
    var tDomain = window.location.host;
    var exp = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie= name + '=' + value + ";expires=" + exp.toGMTString()+ ';path' + '=' + tpath +';';
    document.cookie= name + '=' + value + ";expires=" + exp.toGMTString()+ ';path' + '=' + ZApath +';';
}

function getCookie(name)//取cookies函数
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return unescape(arr[2]); return null;
}
