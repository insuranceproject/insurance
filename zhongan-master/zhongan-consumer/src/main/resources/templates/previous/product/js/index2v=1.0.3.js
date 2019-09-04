define(['controller', 'common', '../common/prd_common.js', 'zeroCalendar', 'zeroSelect', 'qrcode'], function(BaseController, Common, prdCommon) {

    'use strict';

    var controller = BaseController.extend({
        run: function(data) {
            var self = this;
            data = Common.filterConfigData(data);
            self.viewData = data;
            self.viewData.dmGoodsPackageData.content = Common.replaceJson(self.viewData.dmGoodsPackageData.content);

            self.setConfig();
            self.init();
            prdCommon.run(self, '2');
            // self.bindEvent();
            // console.log(self.viewData);
        }
    });
    var pt = controller.prototype;
    pt.setConfig = function () {
        this.configs = {
            replaceDateRegex: /([Y|y|M|m|D|d])/g,
            replaceOptions: {Y: '年', 'M': '月', 'D': '日'},

            // 选中版型的配置
            planBorderWidth: 2,
            selectedPlanScaleY: 3
        };
        this.selectors = {
            // 绑定版型的点击selector
            planMaskTdClassName: _.map([1, 2, 3, 4], function (item) {
                return ".plan-mask-td-" + item;
            }).join(','),
            selectedPlanItem: '.selected-panel-item',
            moreRemark: '.za-tootip'
        };
        this.classNames = {
            planMaskActive: 'plan-mask-active',
            active: 'active'
        };
        this.varible = {
            $document: $(document),
            $planContent: $('#planContent'),
            $planMask: $("#planMask"),
            $preniumFactor: $("#preniumFactor"),
            $premiumFactorInsureText: $("#premiumFactorInsureText"),
            $cs: this.$('.online-customer-service'),
            $selectedPlanPrice: $("#selectedPlanPrice"),
            $planMaskSelectPanel: $("#planMaskSelectPanel"),
            $moreIntroduce: $("#moreIntroduce"),
            $claimprocessContent: $("#claimprocessContent"),
            $claimprocessRemark: $("#claimprocessRemark"),
            $qaContent: $("#qaContent"),
            $fixedHeader: $("#fixedHeader"),
            $headerPrice: $("#fixedHeader b"),
            $banner: $("#banner"),
            $premiumBuy: $(".premium-factor-buy")
        };
        this._catch = {
            selectedPlanIndex: 0,
            factoryControl: null
        };
    };
    pt.setCatch = function (key, value) {
        this._catch[key] = value;
    };
    pt.getCatch = function (key, defaultValue) {
        if (this._catch[key] !== undefined) {
            return this._catch[key];
        }
        return defaultValue;
    };
    // 选中的版型
    pt.setSelectedPlanIndex = function (value) {
        this.setCatch('selectedPlanIndex', value);
    };
    pt.getSelectedPlanIndex = function (isArr, defaultValue) {
        var index = this.getCatch('selectedPlanIndex', defaultValue);
        return isArr ? index - 1 : index;
    };
    // 保费因子
    pt.setFactoryControlValue = function (value) {
        this.setCatch('factoryControl', value);
    };
    pt.getFactoryControlValue = function (defaultValue) {
        return this.getCatch('factoryControl', defaultValue);
    };
    pt.replaceDate = function (str) {
        str = str + "";
        var options = this.configs.replaceOptions,
            regex = this.configs.replaceDateRegex;
        return str.replace(regex, function(key) {
            return options[key.toUpperCase()] || '';
        });
    };
    pt.init = function () {
        this.initBanner();

        this.formatQrcode();

        this.initScanQrcode();

        this.initPlan();

        this.initFixedHeader();

        this.initImageList();

        this.initClaimProcess();

        this.initSesameCredit();

        this.initQA();

        this.initRecommend();

        this.customize();

        this.bindGlobalFunc();

        this.bindEvent();
    };
    // banner
    pt.initBanner = function () {
        var self = this;
        var header = self.viewData.headerInfo;
        var headerImg = Common.replaceJson(header.mainImgList);
        if ($.isArray(headerImg)) {
            if (headerImg[0]) {
                self.$(".header-banner").css({'backgroundImage': 'url("' + headerImg[0] + '")'});
            } else {
                self.$(".header-banner").css('background', '#ffffff');
            }
            if (headerImg[1]) {
                self.$(".header-banner-bg").css({'backgroundImage': 'url("' + headerImg[1] + '")'});
            } else {
                self.$(".header-banner-bg").css('background', 'transparent');
            }
        }
        // 优惠信息
        var headText = Common.replaceJson(header.discountActivitys);
        if ($.isArray(headText) && headText.length > 0) {
            var dom = self.TPL('#discount-tpl', headText);
            self.$(".header-banner-discount").append(dom);
        }
        // 起售价和出售数量
        self.varible.$banner.find('b').text(parseFloat(self.viewData.dmGoodsPackageData.content[0].dmGoodsPackage.startingPrice) || "");
        self.varible.$banner.find('.header-sale-count span').text(parseFloat(self.viewData.showInfo.payNum));
        var $headerInfo = self.varible.$banner.find('.header-info');
        // 商品名称
        $headerInfo.find('h2').text(self.viewData.goodsName || '');
        // 推荐理由
        $headerInfo.find('p').text(self.viewData.recommendReason || '');
        self.bindScrollAnchorEvent();
    };
    // 二维码
    pt.formatQrcode = function() {
        var $qrcode = $("#qrcode"),
            self = this;
        // staticPath = window.zero_config && window.zero_config.staticPath;
        if(!$qrcode[0]){
            return false;
        }
        // staticPath = 'https:' + staticPath;
        // url::https://evt.zhongan.com/page/SYBYDTYZY/index.html?activityCode=SYBYDTYZY&bizOrigin=ZY_GWSXY
        // var defaultQrcodeUrl = staticPath + '/website/app/html/downLoadLink/build/html/index.html?channel=GWDLYM';
        // var pathName = location.pathname;
        var url = self.viewData.qrcodeUrl;

        if(!url){
            // $(".header-qrcode").css({'display':'none'});
            return
        }

        // if (url.indexOf('?') !== -1) {
        // 	url += '&'
        // } else {
        // 	url += '?'
        // }
        // url += 'target=' + pathName;
        setTimeout(function() {
            $qrcode.qrcode({
                width: 100,
                height: 100,
                text: url
            });
            $(".header-qrcode").css({'display':'block'});
        })
    }
    //点击锚点
    pt.bindScrollAnchorEvent = function() {
        var self = this;
        self.$(".specialInsurance-bth").on('click', function() {
            var topList = self.varible.$planContent.offset().top - 40;
            $('body, html').animate({
                scrollTop: topList
            }, 500);
        });
    };
    /***************** 版型和保费因子 *****************/
    pt.initPlan = function () {
        var formatPlanData = this.formatPlanMaskData();
        var dom = this.TPL('#plan-tpl', formatPlanData);
        var $dom = $(dom);
        $dom.addClass('td-' + formatPlanData.headData.length)
        this.varible.$planMask.append($dom);

        this.setSelectedPlanRect(1, true);
        this.bindPlanEvent();
        // 初始化保费因子控件
        this.startBuildFactoryList();
        // 初始化保障计划
        this.initPlanListSelect();
    };
    // 计算selected mask 位置和高度、宽度
    pt.setSelectedPlanRect = function (index, isInit) {
        var self = this,
            borderWidth = self.configs.planBorderWidth,
            scaleY = self.configs.selectedPlanScaleY,
            $td = self.varible.$planMask.find('tr.plan-mask-header-row .plan-mask-td-' + index),
            rect = {
                width: $td.width() - borderWidth * 2,
                height: self.varible.$planMask.height() + borderWidth + scaleY,
            },
            html = "",
            offset = {
                top: 0 - borderWidth - scaleY,
                left: $td[0].offsetLeft
            },
            headerOffset = null;

        offset = $.extend(rect, offset);

        self.varible.$planMask.find('table .plan-mask-td-' + index).each(function (planIndex) {
            var headerHeightDiff = 0,
                $this = $(this),
                $parent = $this.parent();
            if (!$parent.hasClass('plan-mask-row-hidden')) {
                if (planIndex === 0) {
                    headerHeightDiff = scaleY;
                }
                var offset = $this.offset();
                offset.width = $this.width();
                offset.height = $this.innerHeight() + headerHeightDiff;
                headerOffset = offset;
                html += '<div class="selected-panel-item '+ $parent[0].className + ' ' + this.className + '" style="height:' + offset.height + 'px;line-height:' + offset.height + 'px ">' + $this.html() + '</div>';
            }
        });
        offset.opacity = '0';
        self.varible.$planMaskSelectPanel.css(offset).html(html).show();
        setTimeout(function() {
            self.varible.$planMaskSelectPanel.animate({opacity: 1}, 300);
        });
        self.setSelectedPlanIndex(index);

        prdCommon.changePlan(index - 1);
    };
    pt.bindPlanEvent = function () {
        var self = this,
            mouseoverEvent = function (target) {
                var $target = $(target),
                    className = self.classNames.planMaskActive,
                    exec = /\d{1,2}/.exec(target.className),
                    selectedIndex = (exec ? exec[0] : 0) | 0,
                    $tr = self.varible.$planMask.find('.plan-mask-row-' + selectedIndex);
                if (selectedIndex === 0) {
                    return;
                }
                if ($tr.hasClass('not-hover')) {
                    return;
                }
                self.toggleClassName($target, className);
                self.toggleClassName($tr, className);
            };
        self.varible.$planMask
            .on('click.plan-td-click', self.selectors.planMaskTdClassName, function () {
                // 缓存控件的值
                self.cacheFactoryValue();
                var $this = $(this),
                    exec = /\d$/.exec($this[0].className),
                    index = 0;
                if (exec === null || self.getSelectedPlanIndex() == exec[0]) {
                    return false;
                }
                index = exec ? exec[0] : 1;
                index = parseInt(index);
                self.setSelectedPlanRect(index);
                // 重新生成保费因子
                self.startBuildFactoryList();
                $("#planList").zeroSelect('setIndex', index - 1);
            })
            // 更多
            .on('click.plan-more-btn-click', '.plan-mask-more-btn', function () {
                var $this = $(this);
                $this.closest('.plan-mask-content').remove();
                self.varible.$planMask.find('.plan-mask-row-hidden').removeClass('plan-mask-row-hidden');
                self.setSelectedPlanRect(self.getSelectedPlanIndex());
            })
            .on('mouseover.plan-mouse-over', "tr", function () {
                mouseoverEvent(this);
            });
        self.varible.$planMaskSelectPanel.on('mouseover.plan-mouse-over', self.selectors.selectedPlanItem, function () {
            mouseoverEvent(this);
        });
    };
    // 缓存当前选中的因子
    pt.cacheFactoryValue = function () {
        var self = this,
            cache = {},
            list = [
                {name: 'birthday', type: 'date'},
                {name: 'periodOfInsuranceSelect', type: 'select'},
                {name: 'periodOfInsuranceDate', type: 'date'},
                {name: 'gender', type: 'select'},
                {name: 'numberOfPeriod', type: 'select'}
            ];
        _.each(list, function (item) {
            var $dom = $("#" + item.name),
                value = "";
            if ($dom[0]) {
                switch (item.type) {
                    case 'date':
                        value = $dom.zeroCalendar('getDate');
                        break;
                    case 'select':
                        value = $dom.zeroSelect('getVal');
                        break;
                }
                cache[item.name] = value;
            }
        });
        self.setFactoryControlValue(cache);
    };
    // 开始生成保费因子
    pt.startBuildFactoryList = function () {
        this.buildFactoryList( this.getSelectedPlanIndex( true ) );
        this.initOnlineCustoms(this.viewData.csSupport);
        // 初始化数据
        this.initPayData();
    };
    pt.initOnlineCustoms = function (csSupport) {
        if (csSupport === true) {
            this.varible.$cs.show();
        } else {
            this.varible.$cs.hide();
        }
    };
    // 生成保费因子
    pt.buildFactoryList = function (index) {
        var self = this,
            list = self.viewData.dmGoodsPackageData.content[index] || {},
            dmGoodsPackage = list.dmGoodsPackage || {};
        // 保费控件
        var	dom = self.TPL('#factory-list-tpl', dmGoodsPackage, true),
            $dom = $(dom),
            // 投保须知和保险条款
            textDom = self.TPL('#premium-factor-insure-text-tpl', dmGoodsPackage, true);

        self.varible.$preniumFactor.html($dom);
        self.varible.$premiumFactorInsureText.html(textDom).find('a')
            .on('click',function(e){
                var url= $(this).attr('href');

                if(/\.pdf$/.test(url) && document.createElement('canvas').getContext){
                    e.preventDefault();
                    var $this = $(this);
                    var url= $this.attr('href');
                    var text = encodeURIComponent($this.text());
                    var _origin = location.origin;
                    var _env = '';
                    if(_origin.indexOf('test') > -1){
                        _env = '-test';
                    }else if(_origin.indexOf('uat') > -1){
                        _env = '-uat';
                    }
                    url = encodeURIComponent(url.replace(/^https?:\/\//, '//'));
                    location.href= '//static.zhongan.com/website/mobile/html/public/pdf/index' + _env +'.html?path=' + url + '&title=' + text;
                }
            });;

        self.initFactoryControl(index);
    };
    // 初始化控件
    pt.initFactoryControl = function (index) {
        this.initBirthdayControl(index);
        this.initPeriodOfInsuranceControl(index);
        this.initGenderControl(index);
        this.initNoiControl(index);
        this.initSocialSecurity(index);
    };
    // 初始化保障计划列表
    pt.initPlanListSelect = function () {
        var self = this,
            content = self.viewData.dmGoodsPackageData.content;
        var dom = self.TPL('#plan-list-tpl', content);
        $("#planListWrap").html(dom);
        Common.reloadilog();
        $("#planList").zeroSelect();
        $("#planList").zeroSelect('setIndex', 0);
        $("#planList").on('change.zero.select', function(e) {
            // 缓存控件的值
            self.cacheFactoryValue();
            var index = e.selectedValue;
            index = parseInt(index) + 1;
            self.setSelectedPlanRect(index);
            self.startBuildFactoryList();
        });
    };
    // 出生日期控件初始化
    pt.initBirthdayControl = function (index) {
        index = index || 0;
        var maxDate,
            minDate,
            self = this,
            cache = null,
            NAME = "birthday",
            $birthday = $("#" + NAME),
            cateDate = null,
            selectedValue = null;
        if (!$birthday[0]) {
            return false;
        }

        try {
            var dmGoodsPackage = self.viewData.dmGoodsPackageData.content[index].dmGoodsPackage;
            maxDate = dmGoodsPackage.insurantBirthdayEnd;
            minDate = dmGoodsPackage.insurantBirthdayStart;
        } catch(e) {}
        if (!maxDate) {
            maxDate = new Date();
            maxDate.setFullYear(maxDate.getFullYear() - 18);
        }
        if (!minDate) {
            minDate = new Date();
            minDate.setFullYear(minDate.getFullYear() - 100);
        }
        selectedValue = maxDate;
        // 获取缓存
        cache = self.getFactoryControlValue();
        if (cache && cache[NAME]) {
            cateDate = self.formatDate(cache[NAME]);
            if (!(maxDate instanceof Date)) {
                maxDate = self.formatDate(maxDate);
            }
            if (!(minDate instanceof Date)) {
                minDate = self.formatDate(minDate);
            }
            if (minDate <= cateDate && cateDate <= maxDate) {
                selectedValue = cache[NAME];
            }
        }
        $birthday.zeroCalendar({
            selectedValue: selectedValue,
            minDate: minDate,
            maxDate: maxDate
        });
        // 绑定请求保费计算事件
        $birthday.on('change.zero.calendar', function(e) {
            self.viewData.payInfo.bf = e.selectedValue;
            self.ajaxPay();
            return false;
        });
    };
    // 初始化 旅行起期日期控件
    pt.initPeriodOfInsuranceControl = function (index) {
        var self = this,
            dmGoodsPackage = self.viewData.dmGoodsPackageData.content[index].dmGoodsPackage,
            diffDay = dmGoodsPackage.effectiveDays || 0,
            minDate = self.viewData.serverTime ? new Date(parseInt(self.viewData.serverTime)) : new Date(),
            selectedDate,
            $periodOfInsuranceSelect = $("#periodOfInsuranceSelect"),
            $periodOfInsuranceDate = $("#periodOfInsuranceDate"),
            cache = self.getFactoryControlValue();

        if (!$periodOfInsuranceSelect[0]) {
            return false;
        }
        // 下拉控件

        $periodOfInsuranceSelect.zeroSelect();
        $periodOfInsuranceSelect = $("#periodOfInsuranceSelect");
        if (cache && cache['periodOfInsuranceSelect']) {
            $periodOfInsuranceSelect.zeroSelect('setVal', cache['periodOfInsuranceSelect']);
        } else {
            $periodOfInsuranceSelect.zeroSelect('setIndex', 0);
        }
        $periodOfInsuranceSelect.on('change.zero.select', function(e) {
            self.viewData.payInfo.tcf = e.selectedValue;
            self.ajaxPay();
            return false;
        });

        if (diffDay > 0) {
            minDate.setDate(minDate.getDate() + diffDay);
        }
        if (cache && cache['periodOfInsuranceDate']) {
            var cacheDate = self.formatDate(cache['periodOfInsuranceDate']);
            if (cacheDate <= minDate) {
                selectedDate = new Date(minDate.getTime());
            } else {
                selectedDate = new Date(cacheDate.getTime());
            }
        } else {
            selectedDate = new Date(minDate.getTime());
        }

        minDate.setDate(minDate.getDate() - 1);

        // 日期控件
        $periodOfInsuranceDate.zeroCalendar({
            selectedValue: selectedDate,
            minDate: minDate,
            maxDate: null
        });
        // 绑定请求保费计算事件
        $periodOfInsuranceDate.on('change.zero.calendar', function(e) {
            self.viewData.payInfo.tcsf = e.selectedValue;
            self.ajaxPay();
            return false;
        });
    };
    //绑定点击年龄计算价格
    pt.initGenderControl = function(index) {
        var self = this,
            // dmGoodsPackage = self.viewData.dmGoodsPackageData.content[index].dmGoodsPackage,
            genderList = self.viewData.dmGoodsPackageData.content[index].dmGoodsPackage.genderList,
            cache = self.getFactoryControlValue(),
            NAME = 'gender',
            arrIndex = -1,
            $gender = $("#" + NAME);

        if (!$gender[0]) {
            return false;
        }
        // 下拉控件
        $gender.zeroSelect();
        $gender = $("#gender");
        if (cache && cache[NAME]) {
            arrIndex = _.indexOf(_.map(genderList, function(item) {
                return item.key;
            }), cache[NAME]);
            if (arrIndex === -1) {
                $gender.zeroSelect('setIndex', 0);
            } else {
                $gender.zeroSelect('setVal', cache[NAME]);
            }
        } else {
            $gender.zeroSelect('setIndex', 0);
        }
        $gender.on('change.zero.select', function(e) {
            self.viewData.payInfo.sf = e.selectedValue;
            self.ajaxPay();
            return false;
        });
    };
    //绑定点击年龄计算价格
    pt.initNoiControl = function(index) {
        var self = this,
            // dmGoodsPackage = self.viewData.dmGoodsPackageData.content[index].dmGoodsPackage,
            numberList = self.viewData.dmGoodsPackageData.content[index].dmGoodsPackage.premiumFactorList,
            cache = self.getFactoryControlValue(),
            NAME = 'numberOfPeriod',
            arrIndex = -1,
            $noiHandle = $("#" + NAME);

        if (!$noiHandle[0]) {
            return false;
        }
        // 下拉控件
        $noiHandle.zeroSelect();
        $noiHandle = $("#numberOfPeriod");
        if (cache && cache[NAME]) {
            arrIndex = _.indexOf(_.map(numberList, function(item) {
                return item.key;
            }), cache[NAME]);
            if (arrIndex === -1) {
                $noiHandle.zeroSelect('setIndex', 0);
            } else {
                $noiHandle.zeroSelect('setVal', cache[NAME]);
            }
        } else {
            $noiHandle.zeroSelect('setIndex', 0);
        }
        $noiHandle.on('change.zero.select', function(e) {
            self.viewData.payInfo.noi = e.selectedValue;
            self.ajaxPay();
            return false;
        });
    };
    // 是否有无社保
    pt.initSocialSecurity = function (index) {
        var self = this,
            $sb = $("#hasSocialSecurity");
        if (!$sb[0]) {
            return false;
        }
        $sb.zeroSelect({selectedValue: 'Y'});
        $("#hasSocialSecurity").on('change.zero.select', function(e) {
            console.log(e.selectedValue)
            self.viewData.payInfo.hss = e.selectedValue;
            self.ajaxPay();
            return false;
        });
    }
    //初始购买数据
    pt.initPayData = function() {
        var self = this,
            index = this.getSelectedPlanIndex( true ),
            inintContent = self.viewData.dmGoodsPackageData.content[index],
            dmGoodsPackage = inintContent.dmGoodsPackage,
            payInfo = self.viewData.payInfo;

        payInfo.goodsCode = dmGoodsPackage.goodsCode;
        payInfo.campaignId = dmGoodsPackage.campaignId;
        payInfo.packageDefId = dmGoodsPackage.productPackageId;

        if (dmGoodsPackage.premiumFactorList.length === 0) {
            payInfo.bf = "";
            payInfo.sf = "";
            payInfo.tcf = '';
            payInfo.tcsf = '';
            payInfo.hss = '';
            payInfo.noi = '';
        } else {
            var $birthday = $("#birthday"),
                $gender = $("#gender"),
                $noiHandle = $("#numberOfPeriod"),
                $periodOfInsuranceSelect = $('#periodOfInsuranceSelect'),
                $hasSocialSecurity = $('#hasSocialSecurity');
            //出生日期
            if ($birthday[0]) {
                payInfo.bf = $birthday.zeroCalendar('getDate');
            }
            //投保人数
            if ($noiHandle[0]) {
                payInfo.noi = $noiHandle.zeroSelect('getVal');
            }
            //性别
            if ($gender[0]) {
                payInfo.sf = $gender.zeroSelect('getVal');
            }
            //保障起期
            if ($periodOfInsuranceSelect[0]) {
                payInfo.tcf = $periodOfInsuranceSelect.zeroSelect('getVal');
                payInfo.tcsf = $("#periodOfInsuranceDate").zeroCalendar('getDate');
            }
            if ($hasSocialSecurity[0]) {
                payInfo.hss = $hasSocialSecurity.zeroSelect('getVal')
            }
        }
        self.ajaxPay();
    };

    /***************** 图片列表 *****************/
    pt.initImageList = function () {
        var self = this,
            detailImg = self.viewData.detailImg || {},
            detailImgList = detailImg.detailImgList,
            detailThumbImgList = detailImg.detailThumbImgList;
        if (!$.isArray(detailImgList)) {
            detailImgList = [];
        }
        if (!$.isArray(detailThumbImgList)) {
            detailThumbImgList = [];
        }
        if (detailImgList.length > 0 && detailThumbImgList.length > 0) {
            var dom = self.TPL("#detail-image-tpl", { detailImgList: detailImgList, detailThumbImgList: detailThumbImgList });
            self.varible.$moreIntroduce.append(dom);
            this.bindImageListEvent(detailImgList);
        }
    };
    pt.bindImageListEvent = function (detailImgList) {
        var self = this,
            curIndex = 0,
            $contentImage = self.varible.$moreIntroduce.find('.more-introduce-content-inner'),
            $lis = self.varible.$moreIntroduce.find('li'),
            imgCount = detailImgList.length,
            interval = null,
            aimate = function (index) {
                curIndex = index;
                var offsetTop = index * -100;
                if ($contentImage[0] && detailImgList[index]) {
                    $contentImage.animate({'top': offsetTop + '%'}, 300);
                    self.toggleClassName($($lis[index]));
                }
            },
            autoScroll = function () {
                interval = setInterval(function() {
                    curIndex += 1;
                    if (curIndex === imgCount) {
                        curIndex = 0;
                    }
                    aimate(curIndex);
                }, 5000);
            };
        self.varible.$moreIntroduce.on('mouseenter.changeImage', 'li', function () {
            $contentImage.stop(true, true);
            var $this = $(this),
                index = $this.data('index') || 0;
            aimate(index);
            clearInterval(interval);
            // autoScroll();
        }).on("mouseleave.changeImage", 'li', function () {
            autoScroll();
        })
        autoScroll();
    };
    /***************** 理赔流程 *****************/
    pt.initClaimProcess = function () {
        var self = this,
            claimProcess = self.viewData.claimProcessList || {},
            contentList = claimProcess.content;
        if ($.isArray(contentList) && contentList.length > 0) {
            var dom = self.TPL("#claimprocess-tpl", contentList);
            self.varible.$claimprocessContent.append(dom);
        }
    };
    /***************** 常见问题 *****************/
    pt.initQA = function () {
        var self = this,
            questionList = self.viewData.questionList || {},
            contentList = questionList.content;
        if ($.isArray(contentList) && contentList.length > 0) {
            var dom = self.TPL("#qa-tpl", contentList);
            $("#qaContent").append(dom);
        }
        self.bindQAEvent();
    };
    pt.bindQAEvent = function () {
        $("#qaContent").on('click', '.problemslist-question', function () {
            var $this = $(this);
            $("#qaContent").find('.problemslist-answer').not($this).slideUp(300);
            var $next = $this.next();
            if ($next.is(":hidden")) {
                $next.slideDown(300);
            } else {
                $next.slideUp(300);
            }
        });
    };
    /***************** 推荐 *****************/
    pt.initRecommend = function () {
        var dom = this.TPL('#recommend-tpl', this.viewData.recommendList);
        $("#recommend-wrap").append(dom);
    };
    /***************** 悬浮头部 *****************/
    pt.initFixedHeader = function() {
        var self = this,
            $fixedHeader = self.varible.$fixedHeader,
            btnTop = self.varible.$premiumBuy.offset().top,
            $doc = self.varible.$document;
        $fixedHeader.find('h2').text( self.viewData.goodsName).prop('title', self.viewData.goodsName);
        $(window).on('scroll', function() {
            var windowTop = $doc.scrollTop();
            if (windowTop >= btnTop) {
                $fixedHeader.addClass('show-header');
            } else {
                $fixedHeader.removeClass('show-header');
                if($fixedHeader.find('.jumpH5Code').size()){
                    $fixedHeader.find('.jumpH5Code').hide();
                }
            }
        });
    };
    /***************** 芝麻信用 *****************/
    pt.initSesameCredit = function () {
        var self = this;
        if (self.viewData.special.isShowSesameCredit == 'Y') {
            var special = self.viewData.special,
                zmScore = special.zmScore;

            if (zmScore === '') {
                if (special.certNo && special.certName) {
                    self.$("#credit-a").show();
                }
            } else {
                self.$("#credit-a").hide();
                self.$("#credit-b").show();

                if (zmScore !== "") {
                    var toastWord = "",
                        msg;
                    if (zmScore < 600) {
                        toastWord = '不可享受极速理赔';
                    }
                    if (zmScore >= 600 && zmScore < 700) {
                        toastWord = '理赔额在3,000元以内可享受24小时极速理赔';
                    }
                    if (zmScore >= 700) {
                        toastWord = '理赔额在10,000元以内可享受24小时极速理赔';
                    }
                    msg = '<p>您的芝麻信用评分：<span>' + zmScore + '</span></p><p>' + toastWord + '</p>';
                    self.$("#credit-b-content").html(msg);
                }
            }
        } else {
            self.$("#credit-a").hide();
        }
    };
    //芝麻信用请求 绑定在view上
    pt.creditZmxy = function() {
        var self = this;
        var special = self.viewData.special;

        Zero.showLoading();
        Zero.ajax({
            type: "get",
            url: "/dm/open/sesame/SesameCreditScreen/QuerySesameCreditInfo.json",
            dataType: "json",
            data: {
                certNo: special.certNo,
                certName: special.certName
            },
        }, function(data) {
            Zero.hideLoading();
            if (data) {
                window.location.href = data['jumpUrl'];
            }

        }, function() {
            Zero.hideLoading();
        });
    };
    /***************** 自定义区域 *****************/
    pt.customize = function() {
        var self = this;
        if (self.viewData.customize1.content) {
            self.$(".customize1").append(self.viewData.customize1.content);
        }
        if (self.viewData.customize2.content) {
            self.$(".customize2").append(self.viewData.customize2.content);
        }
        if (self.viewData.customize3.content) {
            self.$(".customize3").append(self.viewData.customize3.content);
        }
        if (self.viewData.customize4.content) {
            self.$(".customize4").append(self.viewData.customize4.content);
        }
        if (self.viewData.customize5.content) {
            self.$(".customize5").append(self.viewData.customize5.content);
        }
        if (self.viewData.customize6.content) {
            self.$(".customize6").append(self.viewData.customize6.content);
        }
    };
    /***************** 全局事件 *****************/
    pt.bindEvent = function () {
        this.bindTabEvent();
        this.bindTootipEvent();
        this.bindSubmitEvent();
    };
    pt.toggleClassName = function ($this, className) {
        className = className || this.classNames.active;
        $this.addClass(className).siblings().removeClass(className);
    };
    pt.formatDate = function (dateStr) {
        return Common.formatDate(dateStr);
    };
    pt.bindGlobalFunc = function () {
        var self = this;
        window.paySuccessFunc = self.successFunc = function (res, data) {
            //组合参数跳转页面
            var url = "/dm/order/healthNotify",
                parameter = {
                    goodsCode: data.goodsCode,
                    campaignId: data.campaignId,
                    packageDefId: data.packageDefId,
                    bf: data.bf,
                    sf: data.sf,
                    tcf: data.tcf,
                    tcsf: data.tcsf,
                    hss: data.hss,
                    noi: data.noi
                };
            var params = [];
            for (var key in parameter) {
                if (parameter[key]) {
                    params.push(key + "=" + parameter[key]);
                }
            }

            var paramsStr = params.join('&');
            url = url + '?' + paramsStr;

            location.href = url;

        };
        window.payErrorFunc = self.errorFunc = function (res) {
            Zero.alert("<p>" + res.returnMsg + "</p><div><a class='my-order-link' href='/account/myPolicy?index2=1&index=1'>我的订单</a></div>", function() {}, {
                cancel: {
                    text: '我知道了'
                }
            });
        };
        Common.callStorageFunc();
    };
    pt.bindTabEvent = function () {
        var self = this,
            $tabNavLis = self.$('.tab-nav li'),
            $contents = self.$('.tab-content>div');
        self.varible.$document.on('click.tab-nav', '.tab-nav li', function () {
            var $this = $(this),
                index = $tabNavLis.index($this);
            self.toggleClassName($this);
            $contents.hide().eq(index).show();
        });
    };
    pt.bindTootipEvent = function () {
        var self = this,
            distance = 30,
            $remarkBox = $('<div class="hover-layer"></div>'),
            animateDiff = 5;
        $('body').append($remarkBox);

        self.varible.$document
            .on('mouseover.tootipEvent', self.selectors.moreRemark, function () {
                var $this = $(this),
                    remark = $this.attr('data-tootip'),
                    position = $this.offset();
                if (remark) {
                    $remarkBox.stop(true, true).html(remark).removeClass('right');
                    var animateStr = "-=" + animateDiff,
                        offset = {
                            opacity: 0,
                            left: position.left + distance + animateDiff,
                            top: position.top + 10 - ($remarkBox.innerHeight() / 2) - animateDiff
                        };

                    if ($this.offset().left + $remarkBox.innerWidth() > self.varible.$document.width()) {
                        $remarkBox.addClass('right');
                        offset.left = this.offsetLeft - $remarkBox.innerWidth() + 15;
                        animateStr = "+=" + animateDiff;
                    }
                    $remarkBox.css(offset).show().animate({opacity: 1, left: animateStr}, 300);
                }
            })
            .on('mouseout.tootipEvent', self.selectors.moreRemark, function () {
                var animateStr = "+=" + animateDiff;
                if ($remarkBox.hasClass('right')) {
                    animateStr = "-=" + animateDiff;
                }
                $remarkBox.animate({opacity: 0, left: animateStr}, 300, function () {
                    $(this).hide();
                });
            });
    };
    pt.bindSubmitEvent = function (e) {
        var self = this;
        if(self.viewData.scanQrcode == '1'){
            this.varible.$document.on('mouseenter.payIn', '.payBtn', function (e) {
                self.insertQrCode(e.currentTarget);
            }).on('mouseleave.payIn', '.payBtn', function (e) {
                self.insertQrCode(e.currentTarget);
            });
            return false;
        }
        this.varible.$document.on('click.payIn', '.payBtn', function (e) {
            if(self.viewData.scanQrcode == '1'){
                return false;
            }
            var payInfo = self.viewData.payInfo;

            Common.checkLoginAndPayIn({}, payInfo, self.successFunc, self.errorFunc,true);
        });
    };
    pt.initScanQrcode = function(){
        var self = this;
        if(self.viewData.scanQrcode == '1'){
            self.$('.payBtn').append('<i class="icon-qr-code"></i>');
        }
    };
    pt.insertQrCode = function(targe){
        var self = this,
            index = $(targe).index('.payBtn') || 0,
            codeId = 'J_jumpH5Code' + index,
            cHtml = '<div class="jumpH5Code jumpH5Code-'+ index +'" style="display:none">' +
                '<p>扫码立即投保</p>' +
                '<div id="' + codeId +'"></div>' +
                '</div>';

        if(!$('#' + codeId).size()){
            $(cHtml).insertAfter($(targe));
            self.jumpH5Code('#' + codeId,self.viewData.scanQrcodeUrl);
        }
        $('#' + codeId).parent().toggle();

        self.autoPos('#' + codeId);
        $(window).resize(function(){
            setTimeout(function(){
                //	self.autoPos();
            },150);
        });
        $(window).on('scroll',function(){
            setTimeout(function(){
                //	self.autoPos();
            },150);
        });
    }
    pt.autoPos = function(elm){
        // setTimeout(function(){
        var $elm = elm ? $(elm).parent() : $('.jumpH5Code:visible'),
            $eleBrother = $elm.siblings('.payBtn');
        if($eleBrother.outerHeight() + $elm.outerHeight() < $(window).height() && $eleBrother.offset().top + $eleBrother.outerHeight() + $elm.outerHeight() > $(window).height() + $(window).scrollTop()){
            $elm.addClass('revert');
        }else{
            $elm.removeClass('revert');
        }
        // },100)
    };
    pt.TPL = function (id, data, isShow) {
        var dom = this.T(id, data);
        if (!isShow) {
            $(id).remove();
        }
        return dom;
    };
    pt.ajaxPay = function () {
        // sf 性别
        // bf 生日
        // tcf 旅行周期
        // amf 机型
        var self = this,
            index = self.getSelectedPlanIndex( true ),
            dmGoodsPackage = self.viewData.dmGoodsPackageData.content[index].dmGoodsPackage;
        // 没有保费因子时不发送请求
        if (dmGoodsPackage.premiumFactorList.length === 0) {
            successCallback(dmGoodsPackage.startingPrice);
            return false;
        }
        Common.calcPremium(self.viewData.payInfo, false).then(function (msg) {
            successCallback(msg);
        }, function (msg, data) {
            self.viewData.isTrue = false;
            self.viewData.errorMsg = msg;
            Zero.alert(msg);
        });
        function successCallback(msg) {
            self.viewData.errorMsg = '';
            self.viewData.showInfo.startingPrice = msg;
            self.$("#sf").val(self.viewData.payInfo.sf);
            self.$("#bf").val(self.viewData.payInfo.bf);
            self.$("#tcf").val(self.viewData.payInfo.tcf);
            self.$("#amf").val(self.viewData.payInfo.amf);
            self.$("#hss").val(self.viewData.payInfo.hss);
            self.viewData.isTrue = true;
            //需要处理
            self.varible.$selectedPlanPrice.text(parseFloat(msg));
            self.varible.$headerPrice.text(parseFloat(msg));

        }
    };
    /***************** 格式化版型 *****************/
    pt.buildPlanMaskObj = function (name, ext) {
        return $.extend(ext, {value: name});
    };
    // 格式化数据
    pt.formatPlanMaskData = function () {
        var self = this,
            tmp = self.formatGoodsPackageContent(),
            arrResult = self.distinctForCustomData(tmp);
        // 排序
        self.sortForCustomData(arrResult);
        // 生成页面展示的vm =>  [ [], [], [] ]
        var tplData = {
                headData: [""],
                contentData: [],
                footerData: []
            },
            fields = [{
                name: '保障期限',
                fieldName: '__insuredPeriod'
            }, {
                name: '适用人群',
                fieldName: '__suitableCrowd',
            }, {
                name: '',
                fieldName: '__startingPrice'
            }];
        // 创建头部
        _.each(tmp, function (data) {
            tplData.headData.push( self.buildPlanMaskObj(data["__planName"], {recommend: data.__recommend}) );
        });
        // 创建条款
        _.each(arrResult, function (item) {
            var row = [],
                key = item.key,
                name = item.name;
            _.each(tmp, function (data) {
                var item = data[key];
                if (row.length === 0) {
                    row.push( self.buildPlanMaskObj(name) );
                }
                if (item) {
                    var paymentAmount = item['amount'],
                        len = parseFloat(paymentAmount.length);
                    if(len >= 4){
                        var unit = paymentAmount.replace(/[\d]+/,"");
                        paymentAmount = Common.thousandBitSeparator(parseFloat(paymentAmount)) + unit;
                    }
                    row.push( self.buildPlanMaskObj(paymentAmount, item) );
                } else {
                    row.push( self.buildPlanMaskObj('/') );
                }
            });

            tplData.contentData.push(row);
        });
        // 创建底部
        _.each(fields, function (item) {
            var row = [],
                key = item.name;
            _.each(tmp, function (data) {
                var name = "";
                if (row.length === 0) {
                    row.push( self.buildPlanMaskObj(key));
                }
                if (data) {
                    // 保障期限
                    if (item.fieldName === '__insuredPeriod') {
                        name = self.replaceDate(data[item.fieldName]);
                    }  else {
                        name = data[item.fieldName];
                    }
                    row.push( self.buildPlanMaskObj(name) );
                } else {
                    row.push( self.buildPlanMaskObj('/') );
                }
            });
            tplData.footerData.push(row);
        });
        return tplData;
    };
    // 根据Content生成自定义数据格式
    pt.formatGoodsPackageContent = function () {
        var tmp = [],
            self = this,
            planContent = self.viewData.dmGoodsPackageData.content,
            liabilityListKey = "liabilityCode",
            additionServiceListKey = "serviceName";
        // 搜集所有的版型条款详情
        _.each(planContent, function (item, index) {
            if (!tmp[index]) {
                tmp[index] = {};
            }
            var dmGoodsPackage = item.dmGoodsPackage,
                liabilityList = dmGoodsPackage.liabilityList,
                additionServiceList = dmGoodsPackage.additionServiceList,
                sortIndex = 0;
            _.each(liabilityList, function (item, listIndex) {
                var buildDesc = function () {
                    var desc = "";
                    if (item.amountDesc) {
                        desc = '<p>' + item.amountDesc + "</p>";
                    }else if (item.deductible && item.liabilityDesc) {
                        desc = '<p>免赔额：' + item.deductible + "；" + item.liabilityDesc + "</p>";
                    }else if (item.deductible) {
                        desc = '<p>免赔额：' + item.deductible + "</p>";
                    } else if (item.liabilityDesc) {
                        desc = '<p>' + item.liabilityDesc + "</p>";
                    }
                    return desc;
                };
                tmp[index][ item[liabilityListKey] ] = {
                    name: item.liabilityName,
                    key: item[liabilityListKey],
                    desc: buildDesc(),
                    sortIndex: listIndex,
                    amount: item.paymentAmount
                };
                sortIndex = index;
            });
            sortIndex += 1;
            _.each(additionServiceList, function (item, listIndex) {
                tmp[index][ item[additionServiceListKey] ] = {
                    name: item.serviceName,
                    key: item[additionServiceListKey],
                    desc: item.serviceComment,
                    planName: dmGoodsPackage.planName,
                    sortIndex: sortIndex + listIndex,
                    amount: item.serviceDetail
                };
            });
            // 标题
            tmp[index]["__planName"] = dmGoodsPackage.planName;
            // 保障起期
            tmp[index]["__insuredPeriod"] = dmGoodsPackage.insuredPeriod;
            // 适用人群
            tmp[index]["__suitableCrowd"] = dmGoodsPackage.suitableCrowd;
            // 价格
            tmp[index]["__startingPrice"] = parseFloat(dmGoodsPackage.startingPrice) + '<b> 元起</b>';
            tmp[index]["__recommend"] = dmGoodsPackage.recommend;
        });
        return tmp;
    };
    // 去重
    pt.distinctForCustomData = function (tmp) {
        var result = {},
            arrResult = [];
        _.each(tmp, function (item) {
            var _result = result;
            _.each(item, function (subItem) {
                if (subItem.key && !_result[subItem.key]) {
                    _result[subItem.key] = true;
                    arrResult.push(subItem);
                }
            });
        });
        return arrResult;
    };
    // 排序
    pt.sortForCustomData = function (arr) {
        arr.sort(function (item1, item2) {
            return item1.sortIndex - item2.sortIndex;
        });
    };
    // 二维码
    pt.jumpH5Code = function(selector,url) {
        var $qrcode = $(selector),
            self = this;
        if(!$qrcode[0]){
            return false;
        };
        if(!url){
            return ;
        }
        setTimeout(function() {
            $qrcode.qrcode({
                width: 100,
                height: 100,
                text: url
            });
            // $(selector).parent().toggle();
        })
    }
    return controller;
});
