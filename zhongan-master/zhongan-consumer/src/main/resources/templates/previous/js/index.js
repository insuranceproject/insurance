define(['controller','common' , 'scrollLoading', 'animateNumber', 'unslider', 'zeroSlide'], function(BaseController, Common) {
    'use strict';
    var CountDown = function ($el, max, callback) {
        this.$el = $el;
        this.setMax(max);
        this.callback = callback;
        this.duration = 100;
        this.time = -1;
        this.nextTime = 0;
        this.delta = 1;
        this.update();
    };
    CountDown.prototype.toUpdate = function (newMax) {
        newMax = parseInt(newMax);
        if (this.max !== newMax) {
            this.time = -1;
            this.setMax(newMax);
            this.update();
        }
    };
    CountDown.prototype.setMax = function (max) {
        this.max = parseInt(max);
    };
    CountDown.prototype.update = function () {
        var self = this;
        self.checkTime();
        self.setupAnimation();
        if (self.time === self.max) {
            if ($.isFunction(self.callback)) {
                self.callback();
            }
            return false;
        }
        setTimeout(function () {
            self.executeAnimation();
            setTimeout(function () {
                self.finishAnimation();
                setTimeout(function () {
                    self.update();
                }, self.duration);
            }, self.duration * 0.9);
        }, 20);
    };
    CountDown.prototype.checkTime = function () {
        this.time += this.delta;
        var max = this.time + this.delta;
        this.nextTime = max > 9 ? 9 : max;
    };
    CountDown.prototype.setupAnimation = function () {
        this.$el.html('<span class="current top">' + this.time + '</span>'+
                '<span class="next top">' + this.nextTime + '</span>'+
                '<span class="current bottom">' + this.time + '</span>'+
                '<span class="next bottom">' + this.nextTime + '</span>');
        this.$el.removeClass('changed');
    };
    CountDown.prototype.executeAnimation = function () {
        this.$el.addClass('changing');
    };
    CountDown.prototype.finishAnimation = function () {
        this.$el.addClass('changed').removeClass("changing");
    };
    var controller = BaseController.extend({
        run: function(data) {
        	var self = this;
            self.lazy = self.lazyLoad(3);
        	$.extend(self.viewdata, data);
            self.init();
        }
    });
    var pt = controller.prototype;
    pt.init = function() {
        this.ieTag = $("#ieTag")[0];
        this.$timeNumb = $("#timeNumb");
        this.$timer = this.$timeNumb.parent().hide();
        this.currentNumber = 0;
        this.isRequest = false;
        this.bindEvent();
        // this.initNumber();
        // this.getIndexBanner('indexBanner');
        // this.getLinkBanner('linkBanner');
        // this.getProductList('online_productList');
        // this.getSelectZA('wcza');
        // this.getAppBanner('downloadApp');
        this.getProductList1();
        this.getIndexBanner1();
        this.getLinkBanner1();
        this.getSelectZA1();
    };
    pt.bindEvent = function () {
        var self = this,
            // timeNumbHeight = self.$timeNumb.innerHeight(),
            $doc = $(document),
            $win = $(window),
            timeout = null,
            call = function () {
                var timeNumbTop = self.$timeNumb.offset().top,
                    st = $doc.scrollTop(),//滚动距离
                    wh = $win.height(),// 屏幕高度
                    bt = st + wh; //屏幕底部距离
                if (timeNumbTop > st && timeNumbTop < bt) {
                    clearTimeout(timeout);
                    timeout = setTimeout(function () {
                        self.getNumber();
                    }, 300);
                }
            };
        $(window).on('scroll', function() {
            call();
        });
        setTimeout(function() {
            call();
        }, 500);
    };
    pt.buildNumberHtml = function (number) {
        number = parseInt(number);
        var numArr = (number + "").split('');
        var html = "";
        for (var i = 0, len = numArr.length; i < len; i++) {
            html += '<div>' + numArr[i] + '</div>';
        }
        return html;
    };
    pt.getNumber = function () {
        var self = this,
            errorFunc = function() {
                if (!self.currentNumber) {
                    self.$timer.hide();
                }
            };
        function startCountDown(num) {
            var arr = (num + "").split(''),
                $timeNumb = $("#timeNumb"),
                doms = Array.prototype.slice.call($timeNumb.children(), 0);
            // 对比前后数字个数是否一样
            _.each(arr, function (item, index) {
                if (doms[index]) {
                    $(doms[index]).data("max", item);
                } else {
                    var $dom = $('<div></div>');
                    $dom.data('max', item);
                    doms.push($dom);
                    $timeNumb.append($dom);
                }
            });
            // 已服务 634747975 用户
            function start(doms) {
                var dom = doms.shift();
                if (dom) {
                    var $dom = $(dom),
                        max = $dom.data('max'),
                        instance = $dom.data('CountDown');
                    if (instance) {
                        instance.toUpdate(max);
                    } else {
                        // 初始化
                        instance = new CountDown($dom, max, function () {});
                        $dom.data('CountDown', instance);
                    }
                    start(doms);
                }
            }
            start(doms);
        }
            
        if (self.isRequest === false ) {
            self.isRequest = true;
            self.ajaxNumber(function (data) {
                self.$timer.show();
                var number = data.returnMsg;
                if (data && number && number != self.currentNumber) {
                    number = parseInt(number);
                    self.currentNumber = number;
                    if (self.ieTag) {
                        self.$timeNumb.animateNumber({
                            number: number,
                            numberStep: function(now, tween) {
                                var target = $(tween.elem);
                                target.html(self.buildNumberHtml(now));
                            }
                        }, 2000);
                    } else {
                        startCountDown(number);
                    }
                } else {
                    errorFunc();
                }
            }, errorFunc);
        } else {
            setTimeout(function() {
                self.isRequest = false;
            }, 1000);
        }
    };
    pt.initNumber = function() {
        var self = this;
        self.ajaxNumber(function (data) {
            var num = data.returnMsg;
            var divs = _.map(num.split(''), function () {
                return '<div></div>';
            });
            self.$timeNumb.html(divs);
            self.$timer.show();
        }, function () {});
    };
    pt.ajaxNumber = function (success, error) {
        $.ajax({
            type: "get",
            url: "/dm/open/common/OtherScreen/getServicePeopleNumberJsonp.json?v=" + Math.random(),
           success: function(data) {
                data = Common.replaceJson(data);
                if ( data && data.returnCode === 'success' && data.returnMsg !== "0") {
                    success(data);
                } else {
                    error();
                }
           },
           error: function () {
               error();
           }
       });
    };
    pt.getProductList = function (code) {
        var self = this;
        Common.getMaterialList(code).then(function (data) {
            if ($.isArray(data) && data.length > 0) {
                var html = self.T('#product-list-tpl', data);
                self.$(".za-index-product").append(html);
                self.lazy();
            }
        }, function() {
            self.$('.za-index-product').hide();
        });
    };
    pt.getProductList1 = function (){
        this.lazy();
    }
    pt.getIndexBanner = function (code) {
        var self = this,
            $J_indexBanner = $("#J_indexBanner");
        Common.getMaterialList(code).then(function (data) {
            if ($.isArray(data) && data.length > 0) {
                data = _.filter(data, function (item) {
                    return item.filePath;
                });
                var html = self.T("#banner-list-tpl", data);
                var $html = $(html);
                $html.find('.header-1:contains("众安上市")').each(function() {
                    var $this = $(this);
                    var str = $(this).text();
                    if (str.indexOf('新征程') > -1) {
                        $this.parent().children(":not(a)").css("visibility", "hidden").end().children('a').css('marginTop', '200px');
                    } else {
                        $this.parent().children().remove();
                    }
                })
                html = $html;
                var $li = $html.find('li');
                $J_indexBanner.append(html);

                var $bannerImg = $J_indexBanner.find('.banner-img');
                $($bannerImg[0]).css('background-image', 'url("' + data[0].filePath + '")');
                if (Common.has3d()) {
                    $J_indexBanner.find('ul').zeroSlide();
                } else {
                    $J_indexBanner.unslider({nav: true, delay: 4000, fluid:true, arrows:false,autoplay: true});
                }
                _.forEach(data, function(item, index) {
                    if (!item.adsPicName) {
                        $($li[index]).find('.header-2').remove();
                    }
                })
                self.loadBackground($bannerImg, data, 'filePath');
            }

        }, function() {
            $J_indexBanner.hide();
        });
    };
    pt.getIndexBanner1 = function () {
        var self = this,
            $J_indexBanner = $("#J_indexBanner");
        $J_indexBanner.find('.header-1:contains("众安上市")').each(function() {
            var $this = $(this);
            var str = $(this).text();
            if (str.indexOf('新征程') > -1) {
                $this.parent().children(":not(a)").css("visibility", "hidden").end().children('a').css('marginTop', '200px');
            } else {
                $this.parent().children().remove();
            }
        })
        if (Common.has3d()) {
            $J_indexBanner.find('ul').zeroSlide();
        } else {
            $J_indexBanner.unslider({nav: true, delay: 4000, fluid:true, arrows:false,autoplay: true});
        }
        
        try {
            $('.za-focus-list > li').bind('click',(e)=>{
                console.log(e);
                // var id = e.currentTarget.dataset.id;
                var url = e.currentTarget.dataset && e.currentTarget.dataset.url;
                if(url){
                  location.href = url;
                }
              })
        } catch (error){
            console.warn(error)
        }
    };
    pt.getLinkBanner = function (code) {
        var self = this,
            $J_partnerList = $("#J_partnerList");
        Common.getMaterialList(code).then(function (data) {
            if ($.isArray(data) && data.length > 0) {
                var count = 12;  // 0 开始计算
                var arr = [],
                    len = Math.floor( data.length / count);
                for (var i = 0; i <= len; i++) {
                    arr.push( data.slice(i * count, (i + 1) * count) );
                }
                var html = self.T("#linkBanner-list-tpl", arr);
                $J_partnerList.append(html);
                $J_partnerList.unslider({nav: false, animation: 'fade', delay: 3000, fluid:false, arrows:true, autoplay: true});
                self.lazy();
            }
        }, function() {
            self.$('.za-index-partner').hide();
        });
    };
    pt.getLinkBanner1 = function () {
        var self = this,
          $J_partnerList = $("#J_partnerList");
          $J_partnerList.unslider({nav: false, animation: 'fade', delay: 3000, fluid:false, arrows:true, autoplay: true});
          self.lazy();
    };
    pt.getSelectZA = function (code) {
        var self = this,
            $advantage = self.$('.za-index-advantage');
        Common.getMaterialList(code).then(function (data) {
            var vm = {};
            if ($.isArray(data) && data.length > 0) {
                vm.title = data[0].channelName;
                vm.data = data;
            }
            var html = self.T("#advantage-list-tpl", vm);
            $advantage.append(html);
            self.lazy();
        }, function() {
            $advantage.hide();
        });

        // za-index-advantage
    };
    pt.getSelectZA1 = function () {
        this.lazy();
    }
    pt.getAppBanner = function (code) {
        var self = this,
            app = self.$('.za-index-download-app');
        app.scrollLoading({
            callback: function () {
                Common.getMaterialList(code).then(function (data) {
                    var vm = [], backgroundUrl = "";
                    if ($.isArray(data) && data.length > 0) {
                        for(var i = 0, len = data.length; i < len; i++) {
                            var item = data[i];
                            // 过滤出背景图
                            if (item.extraInfo && item.filePath && backgroundUrl === "") {
                                backgroundUrl = item.filePath;
                            } else if (item.filePath && vm.length < 3 ) {
                                vm.push(item);
                            }
                        }
                    }
                    if (backgroundUrl) {
                       app.css('background-image', 'url("' + backgroundUrl + '")');
                    }
                    if (vm.length > 0) {
                        var html = self.T("#downapp-list-tpl", vm);
                        app.find('.za-index-download-app-cont').html(html);
                    }
                }, function() {
                    app.hide();
                });
            }
        });
    };
    pt.lazyLoad = function (total) {
        var total = total || 0,
            count = 1,
            path = "//static.zhongan.com";
        if (window.zero_config && window.zero_config.staticPath) {
            path =  window.zero_config.staticPath;
        }
        return function () {
            if (total && total === count) {
                $(".lazy").scrollLoading();
                $(".za-index-advantage").scrollLoading({
                    callback: function () {
                        $(this).css("background-image", "url(" + path + "/website/factoryOnline/assets/images/index/index-chooseUs.png)");
                    }
                });

                var ua = navigator.userAgent.toLowerCase();

                $(".video").scrollLoading({

                    callback: function () {
                        if((/ipad|ipod|android/i.test(ua))) {
                            $(".video").remove();
                            return;
                        }
                        this.src = path + "/website/factoryOnline/assets/video/za-index.mp4";
                        // var source = document.createElement('source');
                        // source.src = path + "/website/factoryOnline/assets/video/za-index.mp4";
                        // source.type = "video/mp4";
                        // this.appendChild( source );
                    }
                });
            } else {
                count += 1;
            }
        };
    };
    pt.loadBackground = function ($dom, data, field) {
            $dom.each(function (index) {
                (function (i, $dom) {
                    setTimeout(function () {
                        $dom.css('background-image', 'url("' + data[i][field] + '")');
                    }, 1000 * (i + 1) );
                })(index, $(this));
            });
        
    };
    return controller;
});
