//默认通用配置
var baseCommonLoginPath = $.trim($("#basePath").val())||"https://login.zhongan.com/";

var thirdToUrl = (function() {
    //平台区分
    var fromItem = {
        "p": "passport",
        "m": "mobile"
    };
    //针对具体的跳转路径
    var targetUrl = {
        "qq": "/isThird/qq/login.do",
        "alipy": "/isThird/alipay/login.do",
        "wx": "/isThird/wechat/login.do"
    };

    //返回输出中转的url
    function getResponseUrl(from, caseItem) {
        var targetVaule = targetUrl[caseItem];
        var fromValue = fromItem[from];
        var rt = null;
        //判断有一个对象不存在，跳转过程完成不了
        if ((fromValue == undefined || fromValue == null) || (targetVaule == undefined || targetVaule == null)) {
            //console.log("not find plat or target url.");
            return rt;
        }

        rt = baseCommonLoginPath + fromValue + targetVaule;
        //console.log("return target url：" + rt);

        return rt;
    }

    return {
        build: function(from, caseItem) {
            return getResponseUrl(from, caseItem);
        }
    };
} ());

var thirdLogin = (function() {

    //如果取到的targetParams 为Null或者空，将指向index.html为默认 
    var dialogTargetUrl = null;
    var targetPlat = null;

    //拼接最后终转的链接
    function target_third_login(platform, url) {
        if (url != null) {

            //==null默认认为是取的非弹出框应用
            if (dialogTargetUrl == null)
                dialogTargetUrl = $.trim($("#target").val());

            //如果pc和M都没有取到对应的值,将设置为默认的中转页
            if (null == dialogTargetUrl || undefined == dialogTargetUrl || "" == dialogTargetUrl)
                dialogTargetUrl = "index.html";


            dialogTargetUrl = url + "?target=" + encodeURIComponent(dialogTargetUrl)+"&sourceApp="+$.trim($("#sourceApp").val());
            //console.log("target:" + dialogTargetUrl);
            //window.location.href = dialogTargetUrl;          
            _openTarget(dialogTargetUrl,"_blank");
            return;
        }

       // console.log("not exists redirect url");
    }

    function _openTarget(action,targetMethod){
        $("#el_init").remove();
        var el = document.createElement('a');
        el.id="el_init";
        el.href=action;
        el.target = targetMethod||"_self";
        document.body.appendChild(el);
        el.click();
    }
    function dialog_target(obj) {
        var type = typeof obj;
        switch (type) {
            case "function":
                obj();
                break;
            case "string":
                if(obj.startsWith("http")||obj.startsWith("https")){
                    // window.location = obj;
                    _openTarget(obj,"_self");
                    return;
                }
                if(!obj.startsWith("/"))
                    obj="/"+obj;
                //中转的url
                //window.location = window.location.origin+obj;
                _openTarget(window.location.origin+obj,"_self");
                return
                break;
            case "object":
                obj.func(obj.args);
                break;
            default:
                //console.log("input params is error." + obj);
                break;
        }
    }

    var loginBtnItems = [];

    function init_click() {
        $.each(loginBtnItems,
            function(index, item) {
                $(document).on("click", "." + item + "",
                    function() {
                        target_third_login(targetPlat, thirdToUrl.build(targetPlat, item));
                    });
            });
    }

    init_click();

    return {
        //一般形式调用
        page: function() {
            targetPlat = "p";
        },
        //Mobile调用
        mobile: function() {
            targetPlat = "m";
        },
        //弹出框应用Url的中转
        dialog: function(obj) {
            dialog_target(obj);
        },
        //针对对话框配置
        setTarget: function(t) {
            dialogTargetUrl = t;
        }
    };
} ());