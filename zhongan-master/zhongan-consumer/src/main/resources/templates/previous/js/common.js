// 全局登录回调方法，登录掉转后默认会调用全局方法
function loginCallback (checkPayData) {
	checkPayData = Common.replaceJson(checkPayData);
    Common.checkIsPay(checkPayData).then(function (data) {
    	if (window.paySuccessFunc) {
    		paySuccessFunc(data, checkPayData);
    	}
    }, function (data) {
    	if (window.payErrorFunc) {
    		payErrorFunc(data, checkPayData);
    	}
    });
}
define( 'common' , function(){
	var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	function quote(string) {
	    rx_escapable.lastIndex = 0;
	    return rx_escapable.test(string)
	        ? "\"" + string.replace(rx_escapable, function (a) {
	            var c = meta[a];
	            return typeof c === "string"
	                ? c
	                : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
	        }) + "\""
	        : "\"" + string + "\"";
	}
	function str(key, holder) {
	    var i;
	    var k;
	    var v;
	    var length;
	    var mind = gap;
	    var partial;
	    var value = holder[key];
	    if (value && typeof value === "object" &&
	            typeof value.toJSON === "function") {
	        value = value.toJSON(key);
	    }
	    if (typeof rep === "function") {
	        value = rep.call(holder, key, value);
	    }
	    switch (typeof value) {
	    case "string":
	        return quote(value);
	    case "number":
	        return isFinite(value)
	            ? String(value)
	            : "null";

	    case "boolean":
	    case "null":
	        return String(value);
	    case "object":
	        if (!value) {
	            return "null";
	        }
	        gap += indent;
	        partial = [];
	        if (Object.prototype.toString.apply(value) === "[object Array]") {
	            length = value.length;
	            for (i = 0; i < length; i += 1) {
	                partial[i] = str(i, value) || "null";
	            }
	            v = partial.length === 0
	                ? "[]"
	                : gap
	                    ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]"
	                    : "[" + partial.join(",") + "]";
	            gap = mind;
	            return v;
	        }
	        if (rep && typeof rep === "object") {
	            length = rep.length;
	            for (i = 0; i < length; i += 1) {
	                if (typeof rep[i] === "string") {
	                    k = rep[i];
	                    v = str(k, value);
	                    if (v) {
	                        partial.push(quote(k) + (
	                            gap
	                                ? ": "
	                                : ":"
	                        ) + v);
	                    }
	                }
	            }
	        } else {
	            for (k in value) {
	                if (Object.prototype.hasOwnProperty.call(value, k)) {
	                    v = str(k, value);
	                    if (v) {
	                        partial.push(quote(k) + (
	                            gap
	                                ? ": "
	                                : ":"
	                        ) + v);
	                    }
	                }
	            }
	        }
	        v = partial.length === 0
	            ? "{}"
	            : gap
	                ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}"
	                : "{" + partial.join(",") + "}";
	        gap = mind;
	        return v;
	    }
	}
    var Common = {
	    init:function(data){

	        var self = this;

        },
		SetCookie:function(name,value){//两个参数，一个是cookie的名子，一个是值
		    var Days = 7; //此 cookie 将被保存 7 天
		    var tpath = "/";
		    var exp = new Date();    //new Date("December 31, 9998");
		    exp.setTime(exp.getTime() + Days*24*60*60*1000);
		    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
		    document.cookie= name + '=' + value + ";expires=" + exp.toGMTString()+ ';path' + '=' + tpath +';';
		},
        //检查是否登录
        checkLogin: function(data) {
          //判断用户是否登录 启动OTP验证
            var defer = $.Deferred();
            var self = this;
            var type = type || '0';
            var result = false;
            var waitPayStatus;
            Zero.ajax({
                async: true,
                url: '/dm/open/member/LoginScreen/checkLogin.json?t=' + Math.random(),
                data: data
            }, function(data) {
                var code = data.returnCode,
                    msg = data.returnMsg;
                if (code === 'success') {
                    defer.resolve(data)
                } else {
                    defer.reject(data)
                }
            });
            return defer;
        },
        // 验证是否有待支付订单
        checkIsPay: function(data) {
			var defer = $.Deferred();
			Zero.ajax({
				async: true,
				url: '/dm/order/OrderScreen/checkHasWaitPayOrder.json?t=' + Math.random(),
                data: data
			}, function(data) {
				var code = data.returnCode,
					msg = data.returnMsg;
				if (code == 'success') {
					defer.resolve(data);
				} else {
				    defer.reject(data);
				}
			});
			return defer;
		},
        checkLoginAndPayIn: function (loginData, checkPayData, successFunc, errorFunc, isJump) {
            Common.checkLogin(loginData).then(function (data) {
                // 已登录
                Common.checkIsPay(checkPayData).then(function (data) {
                	successFunc(data, checkPayData);
                }, function (data) {
                	errorFunc(data, checkPayData);
                });

            }, function (data) {
                // 未登录
				if(isJump){
					successFunc(data, checkPayData);
				}else{
					checkPayData = Common.stringify(checkPayData);
	                initParamsFunc(loginCallback, null , checkPayData);
				}

            });
        },
		replaceJson: function(data) {
			var self = this;
			if (typeof(data) == "string") {
				if (data && data.indexOf("&quot;")) {
					data = data.replace(/&quot;/g, '"')
						.replace(/&lt;/g, '<')
						.replace(/&gt;/g, '>')
						.replace(/&amp;/g, '&')
						.replace(/&#39;/g, "'")
						.replace(/&rdquo;/g, '”')
						.replace(/&ldquo;/g, '“')
						.replace(/="/g, "='")
						.replace(/">/g, "'>")
						.replace(/font-family:宋体;/g, "")
						.replace(/&nbsp;/g, "")
						.replace(/&middot;/g,'·')
                        .replace(/&bull;/g,'•');
				}
				try {
					// 后台输出的数据不规范，需要处理下
					return eval('(' + data + ')');
				} catch (e) {
					// console.log(e);
				}
			} else {
				return data;
			}
		},
		stringify: function (value, replacer, space) {
		    var i;
		    gap = "";
		    indent = "";
		    if (typeof space === "number") {
		        for (i = 0; i < space; i += 1) {
		            indent += " ";
		        }
		    } else if (typeof space === "string") {
		        indent = space;
		    }
		    rep = replacer;
		    if (replacer && typeof replacer !== "function" &&
		            (typeof replacer !== "object" ||
		            typeof replacer.length !== "number")) {
		        throw new Error("JSON.stringify");
		    }
		    return str("", {"": value});
		},
		formatDate: function (dateStr) {
			if (dateStr instanceof Date) {
				return dateStr;
			} else {
				try {
					dateStr = new Date(dateStr.replace(/-/g, "/"));
				} catch(e) {
					dateStr = new Date();
				}
			}
			return dateStr;
		},
		callStorageFunc: function () {
			setTimeout(function() {
				if ($.isFunction(window.callFunc)) {
					window.callFunc();
				}
			}, 500);
		},
		getChannelList: function (channelEnName) {
        	var defere = $.Deferred();
	       	$.ajax({
		        	url: '/dm/open/cms/CmsScreen/getChannelList.json',
		            data: {applyChannel: 0, channelEnName: channelEnName },
		            success: function(res) {
		                res = Common.replaceJson(res);
		                if (res && res.returnCode === 'success') {
		                    defere.resolve(res.jsonObjects);
		                } else {
		                    defere.reject(res);
		                }
		            },
		            error: function(res) {
		            	defere.reject(res);
		            }
		        });

	        return defere;
	    },
    	getMaterialList: function (channelEnName) {
	        var defere = $.Deferred();
	        $.ajax({
	        		url: '/dm/open/cms/CmsScreen/getMaterialList.json',
	            	data: {applyChannel: 0, channelEnName: channelEnName },
		            success: function(res) {
		                res = Common.replaceJson(res);
		                if (res && res.returnCode === 'success') {
		                	var result = res.jsonObjects;
		                	if ($.isArray(result)) {
		                		result = _.map(result, function (item, index) {
		                			item._index = index;
		                			return item;
		                		});
		                		result = result.sort(function (item1, item2) {
		                			if (item1.materialOrder === item2.materialOrder) {
		                				return item1._index - item2._index;
		                			}
		                			return item1.materialOrder - item2.materialOrder;
		                		});
		                	}
		                    defere.resolve(result);
		                } else {
		                    defere.reject(res);
		                }
		            },
		            error: function(res) {
		            	defere.reject(res);
		            }
	        	});
	        return defere;
	    },
	    has3d: function () {
		    if (!window.getComputedStyle) {
		        return false;
		    }
		    var el = document.createElement('p'),
		        has3d,
		        transforms = {
		            'webkitTransform':'-webkit-transform',
		            'OTransform':'-o-transform',
		            'msTransform':'-ms-transform',
		            'MozTransform':'-moz-transform',
		            'transform':'transform'
		        };
		    document.body.insertBefore(el, null);
		    for (var t in transforms) {
		        if (el.style[t] !== undefined) {
		            el.style[t] = "translate3d(1px,1px,1px)";
		            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
		        }
		    }
		    document.body.removeChild(el);
		    return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
		},
		reloadilog: function () {
			if (window._za && $.isFunction(window._za.logZoneInit)) {
				window._za.logZoneInit('[data-ilog]', 'data-ilog');
			}
		},
		thousandBitSeparator: function(num) {
		 	num = (num || 0).toString();
		 	var result = '';
		    while (num.length > 3) {
		        result = ',' + num.slice(-3) + result;
		        num = num.slice(0, num.length - 3);
		    }
		    if (num) { result = num + result; }
		    return result;
		},
		filterConfigData: function (data) {
			try {
				_.forEach(data.dmGoodsPackageData.content, function (content) {
					var hasAge = false,
						result = [],
						premiumFactorList = content.dmGoodsPackage.premiumFactorList;
					_.forEach(premiumFactorList, function (item) {
						if (item.factorCode.indexOf('age') !== -1) {
							if (!hasAge) {
								result.push(item);
							}
							hasAge = true;
						} else {
							result.push(item);
						}
					})
					content.dmGoodsPackage.premiumFactorList = result;
				})
			} catch(e) { }

			return data;
		},
		calcPremium: function (data, async) {
			var defered = $.Deferred();
			if (async === undefined) {
				async = true;
			}
			Zero.ajax({
				url: '/dm/order/OrderScreen/calculatePremium.json',
				async: async,
				traditional: true,
				method: 'post',
				data: data
			}, function(data) {
				if (data) {
					var code = data.returnCode,
						msg = data.returnMsg;
					if (code == 'success') {
						defered.resolve(msg, data);
					} else {
						defered.reject(msg, data);
					}
				}
				Zero.hideLoading();
			});
			return defered;
		},
		highInit:function() {
		    //两栏界面初始化
		    if ($(".za-acc-nav-toolbar").length > 0 && $(".za-acc-nav-toolbar").parent().css("display") != "table-cell") {
				var $seletor = $(".za-acc-nav-toolbar");
				var hVal = $seletor.outerHeight();
		        var $layoutLeft = $seletor.next();
		        var $layoutRight = $seletor.parent().next();

		        this.setHeight($layoutLeft,$layoutRight,hVal);

		        $layoutRight.resize(function() {
		            this.setHeight($layoutLeft,$layoutRight,hVal);
		        });
		    }
		    //两栏界面初始化左侧导航选中当前页面
		    // if ($("body").attr("acctoolbar")) {
		    //     $(".za-com-nav-list > li > a").eq($("body").attr("acctoolbar")).addClass("hover");
		    // }
		},
		setHeight:function($colL,$colR,reviseVal){
	        var leftHeight = $colL.outerHeight();
	        var heightVal = $colR.outerHeight() - reviseVal;

			var borderT = 0,
			borderB = 0,
			paddingT = 0,
			paddingB = 0,
			cRH = 0;

	        if( leftHeight > heightVal ){
	            // heightVal = leftHeight;
	            borderT = parseInt($colR.css('border-top-width'));
	            borderB = parseInt($colR.css('border-bottom-width'));
	            paddingT = parseInt($colR.css('padding-top'));
	            paddingB = parseInt($colR.css('padding-bottom'));
	            cRH = leftHeight + reviseVal - borderT - borderB - paddingT -paddingB;
	            $colR.height(cRH);
	        }else{
				borderT = parseInt($colL.css('border-top-width'));
	            borderB = parseInt($colL.css('border-bottom-width'));
	            paddingT = parseInt($colL.css('padding-top'));
	            paddingB = parseInt($colL.css('padding-bottom'));
	            cRH = heightVal - borderT - borderB - paddingT -paddingB;
				$colL.height(cRH);
			};
		}
	};
	window.Common = Common;
	return Common;
});

if (window.zero_config && zero_config.staticPath) {
	require.config({
		map: {
		  	'*': {
		    	'css': zero_config.staticPath + '/website/factoryOnline/widget/require-css.js'
		  	}
		},
		paths: {
			scrollLoading: zero_config.staticPath + '/website/factoryOnline/widget/scrollLoading/scrollLoading',
			zeroSlide: zero_config.staticPath + '/website/factoryOnline/widget/zeroSlide/zeroSlide',
			zeroSelect: zero_config.staticPath + '/website/factoryOnline/widget/zeroSelect/zeroSelect',
			zeroCalendar: zero_config.staticPath + '/website/factoryOnline/widget/zeroCalendar/zeroCalendar',
			zeroFormControl: zero_config.staticPath + '/website/factoryOnline/widget/zeroFormControl/zeroFormControl',
			animateNumber: zero_config.staticPath + '/website/factoryOnline/widget/animateNumber/animateNumber',
			unslider: zero_config.staticPath + '/website/factoryOnline/widget/unslider/unslider.min',
			qrcode: zero_config.staticPath + '/website/factoryOnline/widget/qrcode/jquery.qrcode.min',
			countryDataSource: '//static.zhongan.com/website/dmk/js/sgCountry',
		}
	});
}
require(['common'],function( Common ){
	Common.init();
});

(function() {
	var hm = document.createElement("script");
	hm.src = "//hm.baidu.com/hm.js?d792eb5ed311e5605c562e0f39e100cb";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();
