var deviceMate = document.createElement("meta");
deviceMate.name = "viewport";
deviceMate.content =
    "width=1300, user-scalable=yes, minimum-scale=.4, maximum-scale=2.0";
document.getElementsByTagName("head")[0].appendChild(deviceMate);

(function(executeLogin) {
    var loadJscript = function(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "zaHeaderLogin";
        //lte IE 8
        if (!script.addEventListener) {
            script.onreadystatechange = function() {
                if (
                    !script.readyState ||
                    /loaded|complete/.test(script.readyState)
                ) {
                    script.onreadystatechange = null;
                    callback && callback();
                }
            };
        } else {
            script.onload = function() {
                callback && callback();
            };
        }
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    };
    if (!document.getElementById("zaHeaderLogin")) {
        if (!window.Zepto && !window.jQuery && !window.$) {
            loadJscript(
                "//static.zhongan.com/website/public/js/jquery/v1.8.1/jquery-1.8.1.min.js",
                function() {
                    loadJscript(
                        "//static.zhongan.com/website/online/assets/js/public/za-bootstrap.js"
                    );
                    executeLogin();
                }
            );
        } else {
            loadJscript(
                "//static.zhongan.com/website/online/assets/js/public/za-bootstrap.js"
            );
            executeLogin();
        }
    }
})(function() {
    $(function() {
        var $mainNav = $(".za-main-nav"),
            autoSetNavBg = function() {
                var _docWidth = $(document).width(),
                    $ItemBg = $(".za-main-nav-layout .item-bg"),
                    _left = Math.max(Math.ceil((_docWidth - 1200) / 2), 0);
                $ItemBg.css({ width: _docWidth, left: -_left });
            },
            getQuery = function() {
                var search = location.search,
                    args = {};
                if (search) {
                    var query = search.slice(1);
                    var pairs = query.split("&");
                    for (var i = 0; i < pairs.length; i++) {
                        var pos = pairs[i].indexOf("=");
                        if (pos == -1) {
                            continue;
                        }
                        var argname = pairs[i].substring(0, pos);
                        var value = pairs[i].substring(pos + 1);
                        args[argname] = value;
                    }
                }
                return args;
            };
            getNavKey = function() {
              var search = location.hash,
                  args = {};
              if (search) {
                  var query = search.slice(1);
                  var pairs = query.split("&");
                  for (var i = 0; i < pairs.length; i++) {
                      var pos = pairs[i].indexOf("=");
                      if (pos == -1) {
                          continue;
                      }
                      var argname = pairs[i].substring(0, pos);
                      var value = pairs[i].substring(pos + 1);
                      args[argname] = value;
                  }
              }
              return args;
          };
        autoSetNavBg();
        $(window).resize(function() {
            autoSetNavBg();
        });

        if ($("#headerLogin").length) {
            var APPNAME = "zhonganCashierPC";
            var domain = $("#originDomain").val() || "https://www.zhongan.com";
            $.ajax({
                type: "get",
                dataType: "jsonp",
                url:
                    domain +
                    "/dm/open/member/LoginScreen/getLoginInfo.json?t=" +
                    Math.random(),
                jsonpCallback: "jsonpCallback",
                success: function(data) {
                    var $loginObj = $("#headerLogin");
                    function isHide() {
                        var appName = $("#appName").val() || "";
                        if (appName === APPNAME) {
                            return true;
                        }
                        return false;
                    }
                    function buildHtml(name) {
                        var logoutUrl = $("#logoutUrl").val();
                        if (logoutUrl === "" || logoutUrl === "@ssoLogoutUrl") {
                            logoutUrl = "/logOut";
                        }
                        return (
                            '<a href="' +
                            domain +
                            '/account/myAccount"  title="点击进入我的账户">' +
                            name +
                            "</a>" +
                            (isHide()
                                ? ""
                                : '<i class="vline"></i><a href="' +
                                  logoutUrl +
                                  '">退出</a>')
                        );
                    }

                    if (data) {
                        if (data.loginName === undefined) {
                            $loginObj.html(buildHtml(data.phone));
                        } else {
                            $loginObj.html(buildHtml(data.loginName));
                        }
                    } else {
                        var $login = $loginObj.find(".login-link"),
                            loginHref = $login.attr("href"),
                            $register = $loginObj.find(".register-link");
                        regHref = $register.attr("href");
                        if (isHide()) {
                            $loginObj.remove();
                        } else {
                            if (
                                loginHref === "" ||
                                loginHref === "@ssoLoginUrl"
                            ) {
                                $login.prop(
                                    "href",
                                    "https://login.zhongan.com/passport/login.htm?sourceApp=1&target=https://www.zhongan.com/open/member/loginJump?logincallback=/account/myAccount"
                                );
                            }
                            if (
                                regHref === "" ||
                                regHref === "@ssoRegisterUrl"
                            ) {
                                $register.prop(
                                    "href",
                                    "https://login.zhongan.com/passport/register.htm?sourceApp=1&target=https://www.zhongan.com/open/member/loginJump?logincallback=/"
                                );
                            }
                        }
                    }
                }
            });
        }
        if ($(".za-main-nav-list").length > 0) {
            var $zamenukey = $("#zamenukey"),
                key = "",
                args = {};
            if ($("#zamenukey")[0]) {
                key = $zamenukey.val();
            } else {
                args = getNavKey();
                key = args["channelEnName"];
            }
            key = $.trim(decodeURIComponent(key));
            var currItem = "#zaNav_";
            switch (key) {
                case "home":
                    key = "onlineIndex";
                    break; //首页
                case "one":
                    key = "";
                    break; //一元保
                case "trait":
                    key = "exclusive";
                    break; //特色
                case "trip":
                    key = "travel";
                    break; //旅行
                case "acct":
                    key = "accident";
                    break; //意外
                case "health":
                    key = "health";
                    break; //健康
                case "team":
                    key = "organization";
                    break; //团体
                case "touzi":
                    key = "touzi";
                    break; //投资
                case "service":
                    key = "baoxian";
                    break; //保险服务
                case "ggxxpl":
                    key = "ggxxpl";
                    break; //公开信息披露
                case "invest":
                    key = "";
                    break; //众赢宝
            }
            if (currItem + key) {
                try {
                    $(currItem + key).addClass("active");
                } catch (e) {}
            }
        }
        if ($mainNav[0]) {
            $mainNav.find(".list-item").on("mouseover touchstart", function() {
                var $listItem = $(this);
                $listItem.find("img").each(function() {
                    var $this = $(this);
                    $this.prop("src", $this.data("src"));
                });
                $listItem.off("mouseover");
            });
        }
        $.ajax({
            url: "/account/MyPolicyScreen/getRenewalClickStatus.json",
            success: function(data) {
                if (data && data.status) {
                    var className = 'highlight', $clearStatusTab = $("#renewalPoliyTab");
                    $('.entry-account').addClass(className).find('.za-toolbar-sublist li:first-child').addClass(className)
                    $("#za-layout-left ul>li:first-child span").addClass(className);
                    $("#renewalPoliyTab").addClass(className);
                    if ($clearStatusTab[0]) {
                        $clearStatusTab.one('click.clearStatus', function() {
                            window.zaClearHighLight && zaClearHighLight();
                        })
                    }
                    
                }
            }
        });
    });
});
function zaClearHighLight() {
    var className = 'highlight';
    $('.entry-account').removeClass(className).find('.za-toolbar-sublist li:first-child').removeClass(className)
    $("#za-layout-left ul>li:first-child span").removeClass(className);
    $("#renewalPoliyTab").removeClass(className)
}