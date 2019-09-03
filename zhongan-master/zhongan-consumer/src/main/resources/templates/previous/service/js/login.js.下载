    var aaa = 'aaa';
    var loginBaseUrl = '';
    var login_sourceApp = 1;
    var login_customer_url = window.location.protocol+'//'+window.location.host+'/';
    var login_decrypt = '/open/responseServlet.php';
    var cookie_sign_name = 'zaLoginCookieKey';
    var cookie_error_name = 'dialog_error';
    var auth_url = '/open/sso.php';
    var login_winKey = "zaLoginCookieKey";
(function(w) {




	var loadjs = function(url,callback){
	      var script = document.createElement("script");
	      script.type="text/javascript";
	      //lte IE 8
	      if (!script.addEventListener) {
	          script.onreadystatechange = function() {
	            if ( !script.readyState || /loaded|complete/.test( script.readyState ) ) {
	              script.onreadystatechange = null;
	              callback && callback();
	            }
	          };
	      }else{
	          script.onload= function(){
	              callback && callback();
	          };
	      }
	      script.src = url;
	      document.getElementsByTagName("head")[0].appendChild(script);
	};
    var loadCss = function(filename){
        var fileref = document.createElement('link');
        fileref.setAttribute("rel","stylesheet");
        fileref.setAttribute("type","text/css");
        fileref.setAttribute("href",filename);
        var head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(fileref);
        //document.body.appendChild(fileref);
        
    };
    
    function loginCenter() {
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "/open/member/login_screen/get_sso_uni_form_domain_url.json",
                data: {
                    
                },
                success: function(data) {
                    loginBaseUrl = data+'/';
                    /*document.cookie='loginBaseUrl='+loginBaseUrl;
                   
                    document.cookie='login_customer_url='+login_customer_url;
                    document.cookie='login_decrypt='+login_decrypt;
                    document.cookie='cookie_sign_name=zaLoginCookieKey';
                    document.cookie='cookie_error_name=dialog_error';
                    document.cookie='auth_url=/open/sso.php';
                    document.cookie='login_winKey=zaLoginCookieKey';
                    document.cookie='login_sourceApp=0';*/
                 
                    // window.setTimeout(function(){
                      
                    //     loadjs('//static.zhongan.com/website/sign/assets/js/callback.js', function() {});
                    // },500);
                    loadjs('//static.zhongan.com/website/sign/assets/js/callback.js', function() {
                        if (Object.prototype.toString.call(window.callbackLoaded) === '[object Function]') {
                            window.callbackLoaded();
                        }
                    });
                    //loadLoginJs();
                }
            });
    };
    function loadLoginJs() {
        loadjs('//static.zhongan.com/website/sign/login/pc/dialog/login.win.filter.js');
    };
    function doCallBack() {
        loginCenter();
        //loadjs('//static.zhongan.com/website/public/js/jquery/jqueryui/jquery.JPlaceholder.js');
        loadCss('//static.zhongan.com/website/sign/assets/stylesheets/pc/iframe/iframes.css');
    };
    var isMobile = (function() {
        var uA = navigator.userAgent;
        return ( uA.match(/Android/i) || uA.indexOf('iPhone') != -1 || uA.indexOf('iPad') != -1) ;
    })();
    
    if (!window.Zepto && !window.jQuery && !window.$) {
        if (!!isMobile) {
            loadjs('//static.zhongan.com/website/public/js/zepto/v1.0/zepto.min.js', function() {
                doCallBack();
            });
        } 
        else {
            loadjs('//static.zhongan.com/website/public/js/jquery/v1.8.1/jquery-1.8.1.min.js', function() {
                doCallBack();
            });
        }
    } else {
        doCallBack();
    }

})(window)
