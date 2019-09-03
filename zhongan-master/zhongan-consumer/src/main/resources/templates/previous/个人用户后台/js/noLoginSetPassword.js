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
           if (self.attr("data-tips")) {
				tipsMessage(self, self.attr('data-tips'));
			}
        });

        // 每步的确认按钮
	    $('.btn-next').click(function () {
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
	        doResetPwd();
	    });
        
});

function doResetPwd() {
	$("#btnStep1").addClass("btn-gary");
    var password = $("#password").val();
    var confirm_password = $("#confirmPassword").val();
    if ("" == password || "" == confirm_password) {
        winMessage("密码和确认密码都不能为空");
        return;
    } else if (password != confirm_password) {
        winMessage("两次密码输入不一致");
        return;
    }
    $("#resetLoginName").val($("span[name='loginName']").text());
    $("#passWd").val(password);
    $("#confirmPassWd").val($("#confirmPassword").val());
    $("#enterprisePwdReset").submit();
}

    
 function validate(input) {
    var result = true;
    var validate = new Validate();
    var name = input.attr("name"), value = input.val();

    switch (name) {
	    	case "password":
	                if (!validate.isPwd(value)) {
	                    errorMessage(input, '请按正确格式输入密码');
	                    result = false;
	                    break;
	                }
	                if (!value) {
	                    errorMessage(input, '请输入密码');
	                    result = false;
	                    break;
	                }
	                if (value.length < 6) {
	                    errorMessage(input, '账户密码不能小于6位');
	                    result = false;
	                    break;
	                }
	                break;
            case "confirmPassword":
                if (!value) {
                    errorMessage(input, '请确认您的账户密码');
                    result = false;
                    break;
                }
                var password = $("input[name='password']").val();
                if (value !== password) {
                    errorMessage(input, '确认账户密码 和 账户密码 不一致');
                    result = false;
                    break;
                }
                break;
        case "verify":
            if (!value) {
                errorMessage(input,'请输入图片验证码!');
                result = false;
                break;
            }
            break;
    }
    return result;
}   