/*
 * 登录/注册类弹窗 
 * 参数name代表弹窗名
 * 参数jsonData代表传入的数据 
 * 使用方法如下：
 * var p = new Popup(jsonData);  
 * p.show();
 * 2016-6-13 sara
 */

var Popup = function(jsonData) {
	
	this.text = '';
	this.text += '<div class="popup"><div class="layer-top"><span class="name">' + jsonData.name + '</span><span class="close">×</span></div>';
//	if(jsonData.frames!=''||jsonData.frames!=null){
//		
//		$(".popup").css({"width":"452px","left":"61%"});
//	}

	if (jsonData.loading != '' && jsonData.loading != undefined && jsonData.loading != null) this.text += jsonData.loading;

	this.text += '<div class="content">' + jsonData.content + '</div>';

	if (jsonData.tpl != '' && jsonData.tpl != undefined && jsonData.tpl != null) this.text += jsonData.tpl;

	if (jsonData.showButton && jsonData.buttonText != "" && jsonData.buttonText != undefined && jsonData.buttonText != null) {

		this.text += '<div class="btn-sure">' + jsonData.buttonText + '</div>';
	}

	this.text += '</div>';
	

	var html = $(this.text);
	$(".overlay").html("").append(html);
    var overlay=$(".overlay");

	this.show = function() {
		overlay.show();
	}
	this.hide = function() {
		overlay.hide();
	}
	this.remove = function() {
		overlay.remove();
	}
	this.bind = function() {
		$(".close").on('click', function() {
			$(".overlay").hide();
			$("#btnStep1").removeClass("btn-gary");
			$("#registerBtn").removeClass("btn-gary");
			$("#nextStep").removeClass("btn-gary");
		});

		$(".btn-sure").on('click', function() {
			
			$(".overlay").hide();
			$("#btnStep1").removeClass("btn-gary");
			$("#registerBtn").removeClass("btn-gary");
			$("#nextStep").removeClass("btn-gary");
			
		});
	}
};


//显示弹出框
function showPopup(jsonData){
	var p = new Popup(jsonData);
    p.show();
    p.bind(); 
}
	