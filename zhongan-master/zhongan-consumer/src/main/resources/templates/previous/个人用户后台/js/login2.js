//初始化页面
$(function() {
    window.queryQrTimer;
    window.moveQrTimer = undefined;
    window.onload = function() {
        var slider1 = new ClickIdentifyControl({
            container: "#slider1",
            sId: "za_login#" + $('#runMode').val() + "#pc_login_3",
            host: $('#AfHost').val(),
            placeholdLabel: "智能检测中",
            onSuccess: function(did, token, sId) {
                //  console.log(did, token, sId)
                $("#deviceId").val(did);
                $("#afs_token").val(token);
            }
        });
    }
    if (navigator.userAgent.indexOf("MSIE 9.0") > 0) {
        $('.phone-img').css('margin-left', '180px');
    }
    loadQrAndQueryQrIsVaildTimer();
    initQrHover();
    setTime();
    $('#topLogo').click(function() {
        window.location.href = 'https://www.zhongan.com';
    });
    // 发送验证码
    $('.message-button').click(function() {
        var el = $(this);
        $(el).attr("disabled", "disabled")
        doGetSmsPhone();
    });
});

function setTime() {
    window.ss = new sendMsg({
        target: '#messageButton',
        value: '获取验证码',
        callback: function(e) {
            refreshIdentify(2);
        }
    });
}

function initQrHover() {
    var isSlideQr;
    $('#qrContent').hover(function(e) {
        if (isSlideQr) {
            //  return
        }
        isSlideQr = true;
        clearInterval(window.moveQrTimer);
        moveQr(true);
    }, function(e) {
        clearInterval(window.moveQrTimer);
        moveQr(false, function() {
            isSlideQr = false;
        });
    });
}

function moveLeftQr() {
    moveQr(true);
}

function moveRightQr() {
    moveQr(false);
}
//加载二维码并且查询状态
function loadQrAndQueryQrIsVaildTimer() {
    loadQr();
    queryQrIsVaildTimer();
}
//查询二维码状态
function queryQrIsVaildTimer() {
    window.queryQrTimer = setInterval(function() {
        queryQrIsVaild();
    }, 3000)
}

function queryQrIsVaild() {
    $.ajax({
        url: "/security/scan_login_screen/qryQRCodeStatus.json?t=" + Math.random(),
        type: "get",
        data: {
            sourceApp: $("#sourceApp").val()
        },
        success: function(data) {
            // data = JSON.parse(data)
            if (data.success) {
                if ('200' == data.code) {
                    $('.scan-success').show();
                    if (data.serviceTicket) {
                        window.location = $("#target").val() + "&serviceTicket=" + data.serviceTicket;
                    }
                } else if ('202' == data.code) {
                    $('.scan-success').show();
                } else if ('203' == data.code) {
                    $('.qr-fresh').show();
                    $('.fresh-desc').text('二维码已失效');
                    clearInterval(window.queryQrTimer);
                } else if ('204' == data.code) {
                    $('.qr-fresh').show();
                    $('.fresh-desc').text('二维码已失效');
                    clearInterval(window.queryQrTimer);
                } else if ('205' == data.code) {
                    $('.scan-success').hide();
                    $('.qr-fresh').show();
                    $('.fresh-desc').text('登录失败');
                    clearInterval(window.queryQrTimer);
                }
            } else {
                winMessage("系统繁忙", "icon-error");
            }
        }/*,
        error: function() {
            winMessage("系统错误", "icon-error");
        }*/
    });
}
//加载二维码
function loadQr() {
    $('#qrImg').html('');
    $.ajax({
        url: "/security/scan_login_screen/getQRCodeValue.json?t=" + Math.random(),
        type: "get",
        success: function(data) {
            if (data.success && data.k) {
                $('.qr-fresh').hide();
                //data = JSON.parse(data)
                var qrcode = new QRCode(document.getElementById("qrImg"), {
                    text: data.k,
                    width: 150,
                    height: 150
                });
                // console.log('qr' + data.k);
                $('#qrImg').attr('title', '');
            } else {
                winMessage(data.message, "icon-error");
            }
            // moveQr(true);
        }/*,
        error: function() {
            winMessage("系统错误", "icon-error");
        }*/
    });
}

function moveQr(enterFalg, callback) {
    if (enterFalg) { //鼠标进入
        var isIE = !!window.ActiveXObject || "ActiveXObject" in window,
            left = 0;
        $('#phoneImg').addClass('opcityPhoneLeft').removeClass('opcityPhoneRight');
    } else {
        // console.log('moveRightQr' + moveQrTimer);
        var isIE = !!window.ActiveXObject || "ActiveXObject" in window,
            left = -78;
        // console.log('isIE' + isIE);
        $('#phoneImg').removeClass('opcityPhoneLeft').addClass('opcityPhoneRight')
    }
    if (!isIE) {
        if (enterFalg) {
            $('#qrContent').addClass('qr-content-move-left')
            $('#qrContent').removeClass('qr-content-move-right')
        } else {
            $('#qrContent').removeClass('qr-content-move-left')
            $('#qrContent').addClass('qr-content-move-right')
        }
        return;
    }
    window.moveQrTimer = setInterval(function() {
        if (enterFalg) {
            left = left - 2;
            if (left < -78) {
                if (isIE) {
                    $('#phoneImg').show();
                }
                clearInterval(window.moveQrTimer);
                return;
            }
        } else {
            left = left + 2;
            if (left >= 0) {
                if (isIE) {
                    $('#phoneImg').hide();
                }
                clearInterval(window.moveQrTimer);
                return;
            }
        }
        $(".qr-content").css('left', left);
    }, 6);
    callback && callback();
}

function doLogin(num) {
    // 是否新用户 新用户需要先同意条款 老用户忽略
    if($("#agreement_statement").length>0&&$("#agreement_statement").css("display")!="none"){
        
        if($("#check_agreement").attr("checked")!="checked"){//条款是否被选中
            winMessage("请阅读并同意条款", "icon-error");
            return;
        } 
    }

    var form = $('.za-login-form'),
        check = true,
        code = '',
        data = {},
        url = '';
    if (0 == num) { //密码登录
        $this = $('loginBtn1');
    } else {
        $this = $('loginBtn2');
    }
    form.find('input').each(function() {
        if (check) {
            if (!$(this).is(":hidden") && validate($(this)) == false) {
                check = false;
            }
        }
    });
    if (!check) {
        return false;
    } else {
        if (!$('#deviceId').val() || !$('#afs_token').val()) {
            FormTip(false, '请点击验证码', num);
            // return false;
        }
    }
    if (1 == num) {
    	// 定义加密对象
    	var encrypt  = new JSEncrypt();
		 encrypt.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFQJQBhQ42Cl8+JYu/fup6QgNzTO5IbAmNcbiwS/d+LNMApTXzSE1k5TU/xEjlVODOX8n+72hMuf1FXfHwn5/4pzzcMorfnbdtrBmWnsggq0u8tepfu7X9bJ/Jmf2OVTrnqQAAEpy/TObrM6Dwk+Ycuh1aQqTbC4Gs+RYEwsdD5QIDAQAB");
    	data = {
                loginName: $.trim($("input[name = 'loginName']").val()),
                passWd: encrypt.encrypt($("input[name = 'password']").val()),
                sourceApp: $('#sourceApp').val(),
                deviceId: $('#deviceId').val(),
                tokenId: $('#afs_token').val(),
                sceneId: 'za_login#' + $('#runMode').val() + '#pc_login_3'
            },
            url = '/passport/login_screen/password_login.json';
    } else {
        data = {
            loginName: $.trim($("input[name = 'phone']").val()),
            verify: $("input[name = 'messageNumber']").val(),
            sourceApp: $('#sourceApp').val(),
        }
        url = '/passport/login_screen/quick_login.json';
    }
    $.ajax({
        url: url,
        type: "get",
        data: data,
        success: function(data) {
            if (data.success) {
                if ('1001' == data.code) {
                    window.location = $("#target").val() + "&serviceTicket=" + data.value;
                } else {
                    FormTip(false, '系统繁忙', num);
                    refreshIdentify(num);
                }
            } else {
                if ('1003' == data.code) {
                    FormTip(false, '账户名与密码不匹配,请重新输入！', num);
                } else if ('0004' == data.code) {
                    FormTip(false, '验证码不正确！', num);
                } else if ('0012' == data.code) {
                    FormTip(false, '验证码错误或已失效,请重新点击获取验证码!', num);
                } else if ('0013' == data.code) {
                    FormTip(false, '请求参数有误！', num);
                } else {
                    FormTip(false, data.message, num);
                }
                refreshIdentify(num);
            }
        }/*,
        error: function() {
            FormTip(false, '系统错误', num);
            refreshIdentify(num);
        }*/
    });
}

function changeLoginWay(num) {
    // console.log(num);
    if (0 == num) { //二维码登录
        $('.icon-way .qr').hide().siblings().show();
        $('.way-form').hide().siblings().show();
        $('#wayPcTip').show();
        $('.scan-success').hide();
        loadQrAndQueryQrIsVaildTimer();
    } else {
        $('.icon-way .pc').hide().siblings().show();
        $('.way-qr').hide().siblings().show();
        $('#wayPcTip').hide();
        clearInterval(window.queryQrTimer);
    }
}

function jumpThirdLogin(url) {
    //  console.log(url);
    window.top.location = url;
}

function validate(input) {
    var result = true;
    var validate = new Validate();
    var name = input.attr("name"),
        value = $.trim(input.val());
    switch (name) {
        case "password":
            if (!value) {
                FormTip(false, '请输入密码', 1);
                result = false;
                break;
            }
            break;
        case "loginName":
            if (!value) {
                FormTip(false, '请输入用户名/手机号/邮箱', 1);
                result = false;
                break;
            }
            break;
        case "messageNumber":
            if (!value) {
                FormTip(false, '请输入短信验证码', 2);
                result = false;
                break;
            }
            break;
        case "phone":
            if (!value) {
                FormTip(false, '请输入手机号码', 2);
                result = false;
                break;
            }
            if (!validate.isMobile(value)) {
                FormTip(false, '请输入有效的手机号码', 2)
                result = false;
                break;
            }
            break;
    }
    return result;
}
/**
 * 获取短信验证码
 * */
function doGetSmsPhone(callFun) {
    var mobilePhone = $.trim($("#phone").val());
    if (mobilePhone == "" || mobilePhone == null) {
        FormTip(false, "手机号码不能为空", 2)
        $("#messageButton").removeAttr("disabled", "disabled");
        return;
    }

    checkRegisteredAccount(mobilePhone);  //验证手机号是否已注册

    $.ajax({
        type: "POST",
        url: "/message/check_code_screen/get_iframes_message_code.json",
        data: {
            "loginName": mobilePhone,
            "deviceId": $("#deviceId").val(),
            "tokenId": $("#afs_token").val(),
            "sceneId": $("#sceneId").val()
        },
        success: function(data) {
            if (data.ok) {
                FormTip(true, "短信验证码已发送，请查看手机", 2);
                ss.send();
                return;
            }
            refreshIdentify(2);
            FormTip(false, data.comment, 2);
            $("#messageButton").removeAttr("disabled", "disabled");
            if (null != callFun && callFun instanceof Function) {
                callFun();
            }
        }/*,
        error: function() {
            winMessage("系统错误", "icon-error");
        }*/
    });
}

function refreshIdentify(index) {
    $(".slider-style").html("");
    var runMode = $('#runMode').val();
    var AfHost = $('#AfHost').val();
    if (1 == index) {
        new ClickIdentifyControl({
            container: "#slider1", //必填 容器id
            sId: "za_login#" + runMode + "#pc_login_3", // 必填 埋点场景ID
            host: AfHost, //https://test-af.zhongan.io  或者 https://af.zhongan.io
            placeholdLabel: "智能检测中", // 可选， loading时显示内容 可以根据业务场景更改内容
            onSuccess: function(did, token, sId) {
                //  console.log(did, token, sId)
                $("#deviceId").val(did);
                $("#afs_token").val(token);
            }
        });
    } else {
        new ClickIdentifyControl({
            container: "#slider2", //必填 容器id
            sId: "za_login#" + runMode + "#pc_login_4", // 必填 埋点场景ID
            host: AfHost, //https://test-af.zhongan.io  或者 https://af.zhongan.io
            placeholdLabel: "智能检测中", // 可选， loading时显示内容 可以根据业务场景更改内容
            onSuccess: function(did, token, sId) {
                //   console.log(did, token, sId)
                $("#deviceId").val(did);
                $("#afs_token").val(token);
            }
        });
    }
}

function FormTip(isSucc, msg, index) {
    if (isSucc) {
        $('.login-tip').css('color', '#12c286');
    } else {
        $('.login-tip').css('color', '#f85252');
    }
    if (1 == index) {
        $('#loginTip1').text(msg);
    } else {
        $('#loginTip2').text(msg);
    }
}

function downLoadApp() {
    window.top.location = "https://www.zhongan.com/open/active/app/appdownload";
}

function skipToRegist() {
    window.top.location = "register.html";
    /*window.top.location = $("#basePath").val() + "passport/register.htm?sourceApp=" + $("#sourceApp").val() + "&target=" + $("#target_t").val();*/
}

function skipToReset() {
    window.top.location = $("#basePath").val() + "passport/reset.htm?sourceApp=" + $("#sourceApp").val() + "&target=" + $("#target_t").val();
}
//切换登录方式
function changeTab(self) {
    $(self).addClass("tab-change").siblings().removeClass("tab-change");
    var id = $(self).attr("id");
    if (id == "tab1") { //密码登录
        $('.pass-login').show();
        $('.quick-login').hide();
        refreshIdentify(1);
    } else { //快速登录
        $('.pass-login').hide();
        $('.quick-login').show();
        refreshIdentify(2);
    }
}

// 校验手机号是否已经注册
function checkRegisteredAccount(accountName){
    if(accountName==null||accountName==""){
        winMessage("手机号码不能为空");
        return;
    }

    $.ajax({
            type: "POST",
            url: "/security/check_account_screen/validate_registered_account.json",
            data: {
                "accountName": accountName
            },
            success: function (data) {

                if(data.status=="1"){   //1:未注册 2:已注册
                    // 未注册  显示  协议及声明
                    $("#agreement_statement").show()
                    
                }else{
                    $("#agreement_statement").hide()
                }
                return data.status=="1"?true:false;
            }
        });
}