/*
 * 登录/注册/修改密码/绑定邮箱等操作成功类弹窗 
 * 参数name代表弹窗名
 * 参数jsonData代表传入的数据 
 * 使用方法如下：
 * var p = new Popup(jsonData);  
 * p.show();
 * 2016-6-23 sara
 */


var SuccessPopup = function(jsonData) {
	this.text = '';

	this.text += '<div class="za-rect-box"><div class="za-top"> <a class="login-icon" href="//www.zhongan.com/"></a> <span class="title">'+jsonData.name+'</span></div>';

	if (jsonData.middleIcon != '' && jsonData.middleIcon != undefined && jsonData.middleIcon != null) this.text += jsonData.middleIcon;

	if (jsonData.successText != '' && jsonData.successText != undefined && jsonData.successText != null) this.text += jsonData.successText;

	this.text += '</div>';


	var html = $(this.text);
	$(".overlay").append(html);


	this.show = function() {
		html.show();
	}
	this.hide = function() {
		html.hide();
	}
	this.remove = function() {
		html.remove();
	}
	this.bind = function() {
		$(".close").on('click', function() {
			$(".overlay").hide();
		});

		$(".btn-sure").on('click', function() {
//			console.log("点击确定按钮");
			$(".overlay").hide();
		});
	}
};