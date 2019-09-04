/**
 * 页面初始化
 * */
$(function () {
    $('input').blur(
        function () {
            var self = $(this),check = true;
            self.parent().removeClass("za-input-hover-green").addClass("za-input-hover-red");
			errorMessage(self, "");
			check =validate(self);
			if(check){
				self.parent().removeClass("za-input-hover-red");
			}
        }).focus(function () {
        	var self = $(this);
           self.parent().removeClass("za-input-hover-red").addClass("za-input-hover-green");
        });

        // 每步的确认按钮
	    $('#btnStep1').click(function () {
	    	
	    	var $this = $(this), form = $this.parents('.modify-w'), check = true;
	
	        form.find('input').each(function () {
	            var li = $(this).parents('.form-item'), error = li.find('.form-error');
	            $(this).parent().removeClass('.za-input-hover-red');
	            if (error.length) {
	                error.remove();
	            }
	            if (!$(this).is(":hidden") && validate($(this)) == false) {
	                check = false;
	            }
	        });
	         if (!check) {
	            return false;
	        }
	         
	        
	        doFirstStep();
	        
	    });
        
    });

 function validate(input) {
        var result = true;
        var validate = new Validate();
        var name = input.attr("name"), value = $.trim(input.val());

        switch (name) {
            case "loginName":
                if (!value) {
                    errorMessage(input, '请输入您的手机号/邮箱');
                    result = false;
                    break;
                }
                if (!validate.isMobile(value) && !validate.isEmail(value)) {
                    errorMessage(input, '手机号/邮箱不正确');
                    result = false;
                    break;
                }
                break;
        }
        return result;
 }

function doFirstStep() {
	    var loginName =$.trim( $("#loginName").val());
	    if ("" == loginName) {
	        winMessage('请输入手机号/邮箱');
	        return;
	    }
	    
        $.ajax({
            type: "POST",
            dataType: "json",
            url: baseCommonLoginPath + "security/check_account_screen/checkAccount4PC.json",
            data: {
		        "loginName": loginName,
		        "deviceId":$("#deviceId").val(),
		        "tokenId":$("#afs_token").val(),
		        "sceneId":$("#sceneId").val()
	        },
            success: function (code) {

            	 $("#btnStep1").addClass("btn-gary");
                if (code == "1") {            	
                    winMessage('此帐户不存在');
                    /* 二维码变换 */
                    refreshIdentify();
//                    $("#za_captcha").prepend("<label>验证码：</label>");
                    return;
                }
                if (code == "3") {
//                	$("#btnStep1").addClass("btn-gary");
                    winMessage('验证码不正确');                
                    /* 二维码变换 */
                    refreshIdentify();
//                    $("#za_captcha").prepend("<label>验证码：</label>");                
                    return;
                   
                }
                if (code == "2") {
                    window.location = "/500";
                }
                if (code == "4") {
                	//跳转到验证选择页面
                	window.location = "/passport/identityVerify.htm?sourceApp="+$("#sourceApp").val()+"&target="+$("#target_t").val();
                }
            }
            
        });
        
       
 }
