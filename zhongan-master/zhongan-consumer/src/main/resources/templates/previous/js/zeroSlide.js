define(function () {
	var defaults = {
			autoplay: true,
			delay: 4000,
			infinite: true,
			speed: 1000,
			easing: 'swing',
			activeClass: 'active',
			selectors: {
				slides: 'li',
				image: 'a',
				text: 'banner-content'
			}
		}, 
		pt = null;
	function ZeroSlide(context, options) {
		this.$elem = context;
		this.$nav = null;
		this.options = $.extend(defaults, options);
		this.total = 0;
		this.current = 0;
		this.elemWidth = this.$elem.outerWidth();
		this.init();
		this.options.autoplay && this.start();
	}
	pt = ZeroSlide.prototype;
	pt.init = function () {
		var self = this,
			resizeTimeout = null;
		self.$elem.addClass('zeroslider');
		self.$slides = 	self.$elem.children(self.options.selectors.slides);
		self.$slides.css({
			'position': 'absolute',
		    'z-index': 1,
		    'overflow': 'hidden',
		    'width': '100%',
		    'height': '100%',
	        'will-change': 'transform'
		});
		self.initNav();
		self.options.infinite && self.initInfinite();
		self.total = self.$slides.length;
		// 设定默认偏移量
		self.setSlideTransform();
		$(window).on('resize', function () {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(function () {
				self.elemWidth = self.$elem.outerWidth();
				self.setSlideTransform();
			}, 200);
		});
	};
	pt.initInfinite = function() {
		var self = this;
		var clone = self.$slides.filter(':not(".za-slide-clone")').first().clone().addClass('za-slide-clone');
		clone.insertAfter(self.$slides['last']());
		self.$slides.push.apply(self.$slides, clone);
	};
	pt.setSlideTransform = function () {
		var self = this;
		self.$slides.each(function (index) {
			self.setTransform($(this), self.elemWidth * index);
		});
	};
	pt.setSlide = function (_from, to) {
		_from = _from || 0;
		to = to === undefined ? 0 : to;
		var self = this,
			currentTranslate = self.elemWidth * to,
			targetIndex = 0,
			$target = null,
			$img = null,
			$content = null;
		self.$slides.each(function () {
			var $target = $(this);
			var $img = $target.find('.banner-img');
			var $content = $target.find('.banner-content');
        	self.setTransform($img, 0, 1);
        	self.setTransform($content, 0, 1);
		});
		if (_from !== to) {
			// 下一个
			if (to > _from) {
				// 查找当前显示的前一个
				targetIndex = _from;
				$target = $(self.$slides[targetIndex]);
				if ($target[0]) {
					// 初始化
					$img = $target.find('.banner-img');
					$content = $target.find('.banner-content');
	            	// 动画
	            	self.step($img, {
	            		translate: self.elemWidth * 0.9,
						scale: 0.9,
						oTranslate: 0,
						oScale: 1
	            	});
	            	self.step($content, {
	            		translate: self.elemWidth * 0.95,
						scale: 0.9,
						oTranslate: 0,
						oScale: 1
	            	});
				}
			} else {
				// 前一个
				targetIndex = to;
				$target = $(self.$slides[targetIndex]);
				if ($target[0]) {
					// 初始化
					$img = $target.find('.banner-img');
					$content = $target.find('.banner-content');
	            	self.setTransform($img, self.elemWidth * 0.9, 0.9);
	            	self.setTransform($content, self.elemWidth * 0.95, 0.9);

	            	self.step($img, {
	            		translate: 0,
						scale: 1,
						oTranslate: self.elemWidth * 0.9,
						oScale: 0.9
	            	});
	            	self.step($content, {
	            		translate: 0,
						scale: 1,
						oTranslate: self.elemWidth * 0.95,
						oScale: 0.9
	            	});
				}
			}
		}
		self.step(self.$elem, {
    		translate: -1 * currentTranslate,
			oTranslate: _from * self.elemWidth * -1
    	});
	};
	pt.initNav = function () {
		var self = this;
		var $nav = $('<nav class="za-slide-nav"><ul /></nav>');
		self.$slides.each(function(key) {
			$nav.children('ul').append('<li data-slide="' + key + '"><div class="dashnav-dash"><span class="dashnav-progress" style="transform: scaleX(0);"></span></div></li>');
		});

		self.$nav = $nav.insertAfter(self.$elem);

		self.$nav.on('click', 'li', function() {
			var $me = $(this).addClass(self.options.activeClass);
			$me.siblings().removeClass(self.options.activeClass);

			self.animate($me.attr('data-slide'));
		});
	};
	pt.step = function($elem, opts) {
		var self = this,
			obj = {},
			props = {},
			translate = opts.translate,
			scale = opts.scale,
			oTranslate = opts.oTranslate,
			oScale = opts.oScale;

		if (translate || translate === 0) {
			obj.translateProp = translate;
		}
		if (scale || scale === 0) {
			obj.scaleProp = scale;
		}
		$({
			translateProp: oTranslate || 0, 
			scaleProp: oScale || 0
		}).animate(obj, {
			easing: self.options.easing || 'swing',
		  	step: function(n, fx) {
		  		props[fx.prop] = n;
		  		var cssText = 'translate3d(' + props.translateProp + 'px, 0px, 0px)';
				if (props.scaleProp) {
					cssText += 'scale3d(' + props.scaleProp + ', ' + props.scaleProp + ', 1)';
				}
		  		$elem.css("transform", cssText);
		  	},
		  	duration: self.options.speed,
		  	delay: self.options.delay || 0,
		  	complete: function() {
		 		$elem.trigger('za-slide.moved');
		    }
	 	});
	};
	pt.setTransform = function ($elem, offset, scale) {
		var cssText = 'translate3d(' + offset+ 'px, 0px, 0px)';
		if (scale) {
			cssText += 'scale3d(' + scale + ', ' + scale + ', 1)';
		}
		$elem.css('transform', cssText);
	};
	pt.start = function() {
		var self = this;
		self.startTimeout();
		self.interval = setTimeout(function() {
			self.next();
		}, self.options.delay);
		return self;
	};
	pt.startTimeout = function () {
		var self = this,
			$target = self.$nav.find('li').eq(self.current).find('.dashnav-progress');
		self.$nav.find('li').each(function () {
			$(this).find('.dashnav-progress').css("transform", "scaleX(0)");
		});
		self.$navAnimate = $({scaleProp: 0});
		self.$navAnimate.animate({scaleProp: 1}, {
			easing: 'linear',
			duration: self.options.delay,
		  	step: function(n) {
		  		$target.css({"transform": "scaleX(" + n + ") translateZ(10px)"});
		  	},
	 	});
	};
	pt.next = function() {
		var self = this;
		var target = self.current + 1;

		if(target >= self.total) {
			target = 0;
		}
		return self.animate(target, 'next');
	};
	pt.animate = function(to) {
		var self = this;
		if(to === 'first') {
			to = 0;
		}
		if(to === 'last') {
			to = self.total;
		}
		if(isNaN(to)) {
			return self;
		}

		var _from = self.current;
		self.setIndex(to);

		self.$elem.trigger('zeroSlide.change', [to, self.$slides.eq(to)]);

		self.slide(_from, self.current);

		return self;
	};
	pt.setIndex = function(to) {
		var self = this;
		if(to < 0) {
			to = self.total - 1;
		}

		self.current = Math.min(Math.max(0, to), self.total - 1);
		if(self.options.autoplay) {
			self.stop().start();
		}
		if(self.options.nav) {
			self.$nav.find('[data-slide="' + self.current + '"]')._active(self.options.activeClass);
		}

		self.$slides.eq(self.current)._active(self.options.activeClass);

		return self;
	};
	pt.slide = function(_from, to) {
		var self = this;
		if(self.options.infinite) {
			var dummy;
			if (to === self.total - 1) {
				dummy = 0;
			}
			if(typeof dummy === 'number') {
				self.setIndex(dummy);
				self.$elem.on('za-slide.moved', function() {
					self.$elem.css('transform', 'translate3d(0px, 0px, 0px)').off('za-slide.moved');
				});
			}
		}
		self.setSlide(_from, to);
	};
	pt.stop = function() {
		var self = this;
		clearTimeout(self.interval);
		self.$navAnimate.stop(true, true);
		return self;
	};
	$.fn._active = function(className) {
		return this.addClass(className).siblings().removeClass(className);
	};
	$.fn.zeroSlide = function (opts) {
		return this.each(function (index, elem) {
			var $this = $(elem),
				instance = $this.data('zero.slider');

         	if (!instance) {
		  		$this.data('zero.slider', (instance = new ZeroSlide($this, opts)));
         	}
		});
	};
});