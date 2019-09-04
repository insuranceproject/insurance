//初始化页面
$(function() {
    setTime();

    function setTime() {
        window.ss = new sendMsg({
            target: '#messageButton',
            value: '获取验证码',
            callback: function(e) {
                refreshIdentify();
            }
        });
    }
    $('#topLogo').click(function() {
        window.location.href = 'https://www.zhongan.com';
    });
    // 确认按钮
    $('#registerBtn').click(function() {
        var $this = $(this),
            form = $this.parents('.za-login-form'),
            check = true;
        form.find('input').each(function() {
            if (check) {
                if (!$(this).is(":hidden") && validate($(this)) == false) {
                    check = false;
                }
            }
        });
        if (!check) {
            return false;
        }
        doPhoneCheck();
    });
    // 发送验证码
    $('.message-button').click(function() {
        var el = $(this);
        $(el).attr("disabled", "disabled")
        doGetSmsPhone();
    });
});

function FormTip(isSucc, msg) {
    if (isSucc) {
        $('.login-tip').css('color', '#12c286');
    } else {
        $('.login-tip').css('color', '#f85252');
    }
    $('#loginTip').text(msg);
}

function doGetSmsPhone(callFun) {
    var mobilePhone = $.trim($("#phone").val());
    if (mobilePhone == "" || mobilePhone == null) {
        FormTip(false, "手机号码不能为空");
        $("#messageButton").removeAttr("disabled", "disabled");
        return;
    }
    $.ajax({
        type: "POST",
        url: baseCommonLoginPath + "message/check_code_screen/get_pc_register_message_code.json",
        data: {
            "loginName": mobilePhone,
            "deviceId": $("#deviceId").val(),
            "tokenId": $("#afs_token").val(),
            "sceneId": $("#sceneId").val()
        },
        success: function(data) {
            if (data.ok) {
                FormTip(true, "验证码已经发送到手机上");
                ss.send();
                return;
            }
            refreshIdentify();
            winMessage(data.comment);
            $("#messageButton").removeAttr("disabled", "disabled");
            if (null != callFun && callFun instanceof Function) {
                callFun();
            }
        }
    });
}

function validate(input) {
    var result = true;
    var validate = new Validate();
    var name = input.attr("name"),
        value = $.trim(input.val());
    switch (name) {
        case "phone":
            if (!value) {
                FormTip(false, '请输入手机号码');
                result = false;
                break;
            }
            if (!validate.isMobile(value)) {
                FormTip(false, '请输入有效的手机号码');
                result = false;
                break;
            }
            checkRegisteredAccount(value); //验证手机号是否已注册
            break;
        case "messageNumber":
            if (!value) {
                FormTip(false, '请输入短信验证码');
                result = false;
                break;
            }
            break;
        case "verify":
            if (!value) {
                FormTip(false, '请输入图片验证码');
                result = false;
                break;
            }
            break;
        case "password":
            if (!value) {
                FormTip(false, '请输入密码');
                result = false;
                break;
            }
            if (!validate.isPwd(value)) {
                FormTip(false, '请按正确格式输入密码');
                result = false;
                break;
            }
            if (value.length < 6) {
                FormTip(false, '账户密码不能小于6位');
                result = false;
                break;
            }
            break;
            var password = $("input[name='password']").val();
            if (value !== password) {
                FormTip(false, '确认账户密码 和 账户密码 不一致');
                result = false;
                break;
            }
            break;
    }
    return result;
}

function doPhoneCheck() {
    $("#nextStep").addClass("btn-gary");
    if ($(".tickbox_normal").hasClass("tickbox_normal")) {
        winMessage("请阅读并同意条款", "icon-error");
        return;
    }
    var messageNumber = $.trim($("#messageNumber").val());
    if (!messageNumber) {
        FormTip(false, "短信验证码不能为空");
        return;
    }
    var password = $.trim($("#password").val());
    if ("" == password) {
        FormTip(false, "密码不能为空");
        return;
    }
    $("#accountName").val($.trim($("input[name='phone']").val()));
    $("#verifyCode").val(messageNumber);
    $("#passWd").val(password);
    $("#registFromMail").submit();
}

function checkRegisteredAccount(accountName) {
    if (accountName == null || accountName == "") {
        FormTip(false, "手机号码不能为空");
        return;
    }
    var sourceApp = $("#sourceApp").val();
    var target = $("#target_t").val();
    $.ajax({
        type: "POST",
        url: baseCommonLoginPath + "security/check_account_screen/validate_registered_account.json",
        data: {
            "accountName": accountName
        },
        success: function(data) {
            var url = baseCommonLoginPath + "passport/login.htm?sourceApp=" + sourceApp + "&target=" + target;
            var urlMail = baseCommonLoginPath + "passport/company.htm?sourceApp=" + sourceApp + "&target=" + target;
            if (data.status == "2") { //1:未注册 2:已注册
                var jsonData = null;
                if (data.type == "2") { //1:个人账号已注册 2:企业账号已注册
                    jsonData = {
                        name: "提示",
                        content: '手机号<span name="accountName">' + accountName + '</span>已被企业用户占用',
                        tpl: '<div class="register">请用其它手机号注册</div>'
                    };
                } else {
                    jsonData = {
                        name: "提示",
                        content: '手机号<span name="accountName">' + accountName + '</span>已被占用，请确认账户是否是您的',
                        tpl: '<div class="login">我是账户持有人，<a id="click-login" href="' + url + '">立即登录</a></div>'
                    };
                }
                showPopup(jsonData);
            }
            return;
        }
    });
}