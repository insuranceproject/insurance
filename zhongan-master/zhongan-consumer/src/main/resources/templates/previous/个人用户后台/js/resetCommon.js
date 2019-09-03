//添加错误信息
function errorMessage(target, message) {
    var name = target.attr("name"),
        targetParent, targetFather;
    /*if ((name == "smsCode" || name == "mailCode") && $("button").hasClass("ui-btn")) {
        targetParent = target;
        targetParent.removeClass("message-number-bd");
    } else {
        targetParent = target.parent();
    }*/
    targetParent = target.parent();
    targetFather = target.parent().parent();
    targetFather.find(".form-error").remove();
    targetParent.removeClass("za-input-hover-red");
    $(".form-tips").remove();
    if (message == "") return;
    targetParent.addClass("za-input-hover-red");
    targetFather.append('<div class="form-error"><i></i><label class="error-text w280">' + message + '</label></div>');
}

function tipsMessage(target, message) {
    target.parent().parent().find(".form-error").remove();
    target.parent().parent().find(".form-tips").remove();
    target.parent().parent().append('<div class="form-tips"><div class="tooltips"><div class="arrow arrow-border"></div><div class="arrow arrow-bg"></div><div class="tips-text">' + message + '</div></div></div>');
}

function winMessage(msg, type) {
    if (null == type || undefined == type) type = "icon-error";
    var jsonData = {
        name: "提示",
        content: "<i class='" + type + "'></i>" + msg,
        buttonText: "知道了",
        showButton: 1 //显示按钮
    };
    showPopup(jsonData)
}

function skipToIdentityVerify() {
    location.href = "identityVerify.htm?sourceApp=" + $("#sourceApp").val() + "&target=" + $("#target_t").val();
}

function skipToSetPassword() {
    window.location = "/passport/noLoginSetPassword.htm?sourceApp=" + $("#sourceApp").val() + "&target=" + $("#target_t").val();
}

function skipToLogin() {
    window.location = "/passport/login.htm?sourceApp=" + $("#sourceApp").val() + "&target=" + $("#target_t").val();
}

function sendMsg(o) {
    var _self = this;
    this.time = 60;
    this.dom = $(o.target);
    this.status = true;
    this.callback = o.callback;
    this.value = o.value;
    //  this.dom.on('click', function(e) {
    //      _self.send(e);
    //      _self.callback(e);
    //  });
};
var pt = sendMsg.prototype;
pt.send = function(e) {
    var _self = this;
    if (this.status == true) {
        this.status = false;
        _self.dom.attr("disabled", true).addClass("message-button-active");
        _self.dom.val("重新发送(" + _self.time + ")");
        this.timeid = window.setInterval(function() {
            _self.time--;
            if (_self.time < 0) {
                _self.status = true;
                clearInterval(_self.timeid);
                _self.dom.removeAttr("disabled").removeClass("message-button-active");
                _self.dom.val(_self.value);
                _self.time = 60;
                _self.callback(e);
            } else {
                _self.status = false;
                _self.dom.attr("disabled", true).addClass("message-button-active");
                _self.dom.val("重新发送(" + _self.time + ")");
            };
        }, 1000);
    };
};
$(".za-ins-ck-label2").on("click", function() {
    if ($(this).hasClass("tickbox_normal")) {
        $(".agreement-checkbox").attr("checked", true);
        $(this).removeClass("tickbox_normal").addClass("tickbox_selected");
    } else {
        $(".agreement-checkbox").attr("checked", false);
        $(this).removeClass("tickbox_selected").addClass("tickbox_normal");
    }
});
! function() {
    var $wrapper = $(".wrapper ");
    var h = ($(window).height() - $wrapper.height()) / 2 + "px";
    $wrapper.css("margin-top", h).show();
}();
$("input[data-type='input']").on("keydown", function(event) {
    if (!_isPlaceholderSupport) {
        $(this).siblings('.placehld').hide();
        //$(this).next().hide();
    }
}).on("blur", function(event) {
    if ($(this).val() == "" && (!_isPlaceholderSupport)) {
        $(this).siblings('.placehld').show();
        //$(this).next().show();
    }
});
$(".placehld").on("click", function() {
    $(this).parent().find("input[data-type='input']").focus();
});

function isPlaceholderSupport() {
    return 'placeholder' in document.createElement('input');
}
var _isPlaceholderSupport;
if (!isPlaceholderSupport()) {
    _isPlaceholderSupport = false;
    $(".placehld").show();
} else {
    _isPlaceholderSupport = true;
    $(".placehld").hide();
}