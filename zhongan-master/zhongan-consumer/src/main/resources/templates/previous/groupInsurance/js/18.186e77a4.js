(window.webpackJsonp = window.webpackJsonp || []).push([[18], {
    253: function (e, n, t) {
        "use strict";
        var a = {};
        t.r(a), t.d(a, "REQUEST", function () {
            return m
        }), t.d(a, "ADD_ACTIVITY_PLAN_INFO", function () {
            return p
        }), t.d(a, "addActivityPlanInfo", function () {
            return f
        }), t.d(a, "ADD_PLAN_INFO", function () {
            return g
        }), t.d(a, "addPlanInfo", function () {
            return E
        });
        var r = t(46), l = (t(112), t(18)), c = t(1), i = t.n(c), o = t(4), s = t.n(o), u = t(3), m = "REQUEST";

        function d(e) {
            return {type: m, data: e}
        }

        var p = "ADD_ACTIVITY_PLAN_INFO";

        function f(e, n) {
            var t = this;
            return function () {
                var a = s()(i.a.mark(function a(r) {
                    var l, c, o, s;
                    return i.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return l = function () {
                                    return u.a.post({
                                        server: "online",
                                        path: "/api/dragon/website/plan/addActivityPlanInfo",
                                        data: e,
                                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                                    }).catch(function (e) {
                                        return console.error(e)
                                    })
                                }, r(d()), t.next = 4, l();
                            case 4:
                                return c = t.sent, o = c.code, s = c.result, 0 === +o && "function" === typeof n && n(), r({
                                    type: p,
                                    data: s
                                }), t.abrupt("return", {code: o, result: s});
                            case 10:
                            case"end":
                                return t.stop()
                        }
                    }, a, t)
                }));
                return function (e) {
                    return a.apply(this, arguments)
                }
            }()
        }

        var g = "ADD_PLAN_INFO";

        function E(e, n) {
            var t = this;
            return function () {
                var a = s()(i.a.mark(function a(r) {
                    var l, c, o, s;
                    return i.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return l = function () {
                                    return u.a.get({
                                        server: "online",
                                        path: "/api/dragon/plan/addPlanInfo",
                                        data: e
                                    }).catch(function (e) {
                                        return console.error(e)
                                    })
                                }, r(d()), t.next = 4, l();
                            case 4:
                                return c = t.sent, o = c.code, s = c.result, 0 === +o && "function" === typeof n && n(), r({
                                    type: g,
                                    data: s
                                }), t.abrupt("return", {code: o, result: s});
                            case 10:
                            case"end":
                                return t.stop()
                        }
                    }, a, t)
                }));
                return function (e) {
                    return a.apply(this, arguments)
                }
            }()
        }

        var h = t(57), A = t(58), I = t(84);
        t(47);
        t.d(n, "d", function () {
            return A
        }), t.d(n, "b", function () {
            return I
        }), t.d(n, "f", function () {
            return r
        }), t.d(n, "a", function () {
            return a
        }), t.d(n, "c", function () {
            return l
        }), t.d(n, "e", function () {
            return h
        })
    }, 255: function (e, n, t) {
        "use strict";
        n.__esModule = !0;
        var a, r = t(258), l = (a = r) && a.__esModule ? a : {default: a};
        n.default = function (e) {
            if (Array.isArray(e)) {
                for (var n = 0, t = Array(e.length); n < e.length; n++) t[n] = e[n];
                return t
            }
            return (0, l.default)(e)
        }
    }, 258: function (e, n, t) {
        e.exports = {default: t(259), __esModule: !0}
    }, 259: function (e, n, t) {
        t(85), t(260), e.exports = t(16).Array.from
    }, 260: function (e, n, t) {
        "use strict";
        var a = t(42), r = t(21), l = t(54), c = t(150), i = t(151), o = t(86), s = t(261), u = t(149);
        r(r.S + r.F * !t(152)(function (e) {
            Array.from(e)
        }), "Array", {
            from: function (e) {
                var n, t, r, m, d = l(e), p = "function" == typeof this ? this : Array, f = arguments.length,
                    g = f > 1 ? arguments[1] : void 0, E = void 0 !== g, h = 0, A = u(d);
                if (E && (g = a(g, f > 2 ? arguments[2] : void 0, 2)), void 0 == A || p == Array && i(A)) for (t = new p(n = o(d.length)); n > h; h++) s(t, h, E ? g(d[h], h) : d[h]); else for (m = A.call(d), t = new p; !(r = m.next()).done; h++) s(t, h, E ? c(m, g, [r.value, h], !0) : r.value);
                return t.length = h, t
            }
        })
    }, 261: function (e, n, t) {
        "use strict";
        var a = t(36), r = t(71);
        e.exports = function (e, n, t) {
            n in e ? a.f(e, n, r(0, t)) : e[n] = t
        }
    }, 274: function (e, n, t) {
        e.exports = t.p + "images/bg.f0bc9214.png"
    }, 275: function (e, n, t) {
        var a = {
            "./1.png": 303,
            "./2.png": 304,
            "./3.png": 305,
            "./4.png": 306,
            "./5.png": 307,
            "./6.png": 308,
            "./bg.png": 274
        };

        function r(e) {
            var n = l(e);
            return t(n)
        }

        function l(e) {
            var n = a[e];
            if (!(n + 1)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return n
        }

        r.keys = function () {
            return Object.keys(a)
        }, r.resolve = l, e.exports = r, r.id = 275
    }, 298: function (e, n, t) {
    }, 299: function (e, n, t) {
    }, 300: function (e, n, t) {
        e.exports = t.p + "images/1_2.d66a8dc2.png"
    }, 301: function (e, n, t) {
    }, 302: function (e, n, t) {
        e.exports = t.p + "files/1.9113df09.mp4"
    }, 303: function (e, n, t) {
        e.exports = t.p + "images/1.d9e30394.png"
    }, 304: function (e, n, t) {
        e.exports = t.p + "images/2.427c669f.png"
    }, 305: function (e, n, t) {
        e.exports = t.p + "images/3.4343ce87.png"
    }, 306: function (e, n, t) {
        e.exports = t.p + "images/4.8015cdd1.png"
    }, 307: function (e, n, t) {
        e.exports = t.p + "images/5.5e76bf98.png"
    }, 308: function (e, n) {
        e.exports = "data:image/png;base64,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"
    }, 309: function (e, n, t) {
    }, 310: function (e, n, t) {
    }, 311: function (e, n, t) {
    }, 312: function (e, n, t) {
        e.exports = t.p + "images/1.da0e1436.png"
    }, 313: function (e, n, t) {
        e.exports = t.p + "images/2.0b9fd117.png"
    }, 314: function (e, n, t) {
    }, 315: function (e, n, t) {
        e.exports = t.p + "images/consult_qrcode.99f59464.png"
    }, 316: function (e, n, t) {
    }, 343: function (e, n, t) {
    }, 467: function (e, n, t) {
        "use strict";
        t.r(n);
        t(298);
        var a = t(5), r = t.n(a), l = t(6), c = t.n(l), i = t(7), o = t.n(i), s = t(8), u = t.n(s), m = t(9),
            d = t.n(m), p = t(0), f = t.n(p), g = t(113), E = t(13), h = t(59), A = t(253), I = (t(299), t(25)),
            b = t.n(I);

        function k(e) {
            e && (e.className += " fadein")
        }

        function v(e) {
            e && (e.className = e.className.replace(" fadein", ""))
        }

        var N = [{
            bannerBigImg: {
                adsUrl: "",
                title: "\u5c0f\u8d1f\u62c5\u9ad8\u4fdd\u969c\u56e2\u9669\u65b9\u6848",
                filePathRight: t(300),
                bgcolor: "linear-gradient(to bottom,  #1880e2 0%, #3bb9ff 100%)"
            }
        }], y = function (e) {
            function n() {
                var e, t, a, l;
                c()(this, n);
                for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                return t = a = u()(this, (e = n.__proto__ || r()(n)).call.apply(e, [this].concat(o))), a.state = {
                    curIndex: -1,
                    intervalTime: 6e3
                }, a.handleMainCarousel = function (e) {
                    var n = a.state.intervalTime;
                    a.turnBanners(e), a.swipeTimeoutId = setTimeout(a.handleMainCarousel, n)
                }, a.handleChangeBanner = function (e) {
                    a.setState({curIndex: e})
                }, a.renderBanners = function () {
                    var e = a.state.curIndex;
                    return f.a.createElement("section", {className: "comp-home-banner"}, f.a.createElement("div", {
                        className: "big-banner-wrapper",
                        ref: function (e) {
                            a.swipeBigBanners = e
                        }
                    }, N.map(function (n, t) {
                        var a = (n || {}).bannerBigImg, r = (a = void 0 === a ? {} : a).adsUrl,
                            l = void 0 === r ? "/group/package" : r, c = a.title, i = a.filePathLeft,
                            o = a.filePathRight, s = a.bgcolor,
                            u = void 0 === s ? "linear-gradient(to bottom,  #1880e2 0%,#2989d8 100%,#207cca 100%,#3bb9ff 100%)" : s,
                            m = l || "", d = b()("ban-box", {fadein: e === t});
                        return f.a.createElement("div", {
                            className: d,
                            key: u + c,
                            style: {background: u}
                        }, f.a.createElement("a", {
                            className: "page-box images-wrapper",
                            href: m,
                            target: "_black"
                        }, f.a.createElement("img", {
                            className: "banner-image visible-none",
                            src: i,
                            alt: ""
                        }), f.a.createElement("img", {className: "banner-image", src: o, alt: ""})))
                    })), f.a.createElement("p", {className: "banner-pagination"}, N.map(function (n, t) {
                        var r = b()({cur: t === e});
                        return f.a.createElement("i", {
                            className: r, key: +t, onClick: function () {
                                return a.handleChangeBanner(t)
                            }
                        })
                    })))
                }, l = t, u()(a, l)
            }

            return d()(n, e), o()(n, [{
                key: "componentDidMount", value: function () {
                    this.handleMainCarousel()
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    clearTimeout(this.swipeTimeoutId)
                }
            }, {
                key: "turnBanners", value: function (e) {
                    var n = this.state.curIndex, t = this.swipeBigBanners.childNodes || [], a = e || n;
                    a === t.length - 1 ? (v(t[a]), k(t[0]), this.setState({curIndex: 0})) : (v(t[a]), k(t[a + 1]), this.setState(function (e) {
                        return {curIndex: e.curIndex + 1}
                    }))
                }
            }, {
                key: "render", value: function () {
                    return this.renderBanners()
                }
            }]), n
        }(p.Component), x = (t(301), t(41)), w = t.n(x), C = t(26), J = [{
            h4: "\u4f01\u4e1a\u9ad8\u7aef\u4fdd\u969c\u65b9\u6848\u5b9a\u5236",
            h5: "\u4f01\u4e1a\u9ad8\u7ba1\u4fdd\u969c\u8ba1\u5212",
            img: "",
            link: "/group/consult",
            btnText: "\u5728\u7ebf\u9884\u7ea6"
        }, {
            h4: "\u4f01\u4e1a\u5728\u7ebf\u81ea\u9009\u7ec4\u5408\u5957\u9910",
            h5: "\u591a\u9669\u79cd\u53ef\u9009\uff0c\u7075\u6d3b\u642d\u914d",
            img: "",
            showAlert: !0,
            btnText: "\u5728\u7ebf\u6295\u4fdd"
        }, {
            h4: "\u5c0f\u5fae\u4f01\u4e1a\u4f18\u90098\u5927\u5957\u9910",
            h5: "\u6700\u4f4e58\u5143/\u4eba/\u5e74\u8d77",
            img: "",
            showAlert: !0,
            btnText: "\u5728\u7ebf\u6295\u4fdd"
        }, {
            h4: "\u96c6\u56e2\u5185\u90e8\u4e13\u7528\u670d\u52a1\u901a\u9053",
            h5: "\u6700\u798f\u5229\u4e13\u5c5e",
            img: "",
            link: "",
            btnText: "\u656c\u8bf7\u671f\u5f85"
        }, {
            h4: "\u4e0d\u540c\u884c\u4e1a\u573a\u666f",
            h5: "\u89e3\u51b3\u65b9\u6848\u5b9a\u5236",
            img: "",
            link: "/group/consult",
            btnText: "\u5728\u7ebf\u9884\u7ea6"
        }, {
            h4: "\u66f4\u591a\u65b9\u6848",
            h5: "\u656c\u8bf7\u671f\u5f85",
            disabled: !0,
            img: "",
            link: "",
            btnText: "\u5728\u7ebf\u6295\u4fdd"
        }], Q = 20, B = -2520, S = -180, T = 180, H = function (e) {
            function n() {
                var e, t, a, l;
                c()(this, n);
                for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                return t = a = u()(this, (e = n.__proto__ || r()(n)).call.apply(e, [this].concat(o))), a.state = {}, a.handleMouseEnter = function (e) {
                    a["intervalId" + e + "-enter"] = setInterval(function () {
                        var n = "position" + e, t = a.state[n] || 0;
                        t > B ? a.setState(w()({}, n, t - T)) : clearInterval(a["intervalId" + e + "-enter"])
                    }, Q)
                }, a.handleMouseLeave = function (e) {
                    var n = a["intervalId" + e + "-enter"];
                    clearInterval(n), a["intervalId" + e + "-leave"] = setInterval(function () {
                        var n = "position" + e, t = a.state[n] || 0;
                        t < S ? a.setState(w()({}, n, t + T)) : clearInterval(a["intervalId" + e + "-leave"])
                    }, Q)
                }, a.handleClick = function (e) {
                    e ? window.open(e) : C.a.show("\u4ea7\u54c1\u5347\u7ea7\u4e2d\uff0c\u8bf7\u8054\u7cfb\u4f17\u5b89\u5ba2\u670d10109955", 4)
                }, l = t, u()(a, l)
            }

            return d()(n, e), o()(n, [{
                key: "componentWillUnmount", value: function () {
                    for (var e = 0; e < 6; e++) {
                        var n = this["intervalId" + e + "-enter"], t = this["intervalId" + e + "-leave"];
                        clearInterval(n), clearInterval(t)
                    }
                }
            }, {
                key: "render", value: function () {
                    var e = this;
                    return f.a.createElement("section", {className: "comp-home-plan"}, f.a.createElement("video", {
                        className: "video",
                        src: t(302),
                        loop: "loop",
                        autoPlay: !0,
                        "webkit-playsinline": "true",
                        playsInline: !0,
                        "x5-video-player-fullscreen": "true"
                    }), f.a.createElement("img", {
                        className: "bg-img",
                        src: t(274),
                        alt: ""
                    }), f.a.createElement("div", {className: "page-box"}, f.a.createElement("h2", null, "\u6253\u9020\u4e13\u4e1a\u7684\u4f01\u4e1a\u56e2\u4f53\u4fdd\u969c\u65b9\u6848"), f.a.createElement("ul", {className: "plans clearfix"}, J.map(function (n, a) {
                        var r = n.h4, l = n.h5, c = n.link, i = n.disabled, o = n.btnText, s = n.showAlert,
                            u = b()("item", {disabled: i}), m = "position" + a, d = e.state[m], p = i ? {
                                backgroundImage: "url(" + t(275)("./" + (a + 1) + ".png") + ")",
                                backgroundPosition: "0 " + (d || 0) + "px",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain"
                            } : {
                                backgroundImage: "url(" + t(275)("./" + (a + 1) + ".png") + ")",
                                backgroundPosition: "0 " + (d || 0) + "px",
                                backgroundRepeat: "no-repeat"
                            };
                        return f.a.createElement("li", {
                            key: r,
                            className: u
                        }, f.a.createElement("h4", null, r), f.a.createElement("h5", null, l), f.a.createElement("div", {className: "monster"}), i ? f.a.createElement("div", {
                            className: "plan-img",
                            style: p
                        }) : f.a.createElement("div", {
                            onMouseEnter: function () {
                                e.handleMouseEnter(a)
                            }, onMouseLeave: function () {
                                e.handleMouseLeave(a)
                            }, className: "plan-img", style: p
                        }), c || s ? f.a.createElement("div", {
                            className: "secondary-button", onClick: function () {
                                return e.handleClick(c)
                            }
                        }, o) : f.a.createElement("button", {
                            type: "button",
                            className: "secondary-button disabled"
                        }, o))
                    }))))
                }
            }]), n
        }(p.Component), D = (t(309), function () {
            return f.a.createElement("section", {className: "comp-home-claims-process"}, f.a.createElement("div", {className: "page-box"}, f.a.createElement("h2", null, "\u4f17\u5b89\u81ea\u4e3b\u5f00\u53d1\u670d\u52a1\u7cfb\u7edf"), f.a.createElement("div", {className: "clearfix"}, f.a.createElement("div", {className: "note"}, f.a.createElement("h4", null, "\u7533\u8bf7\u7406\u8d54\u6b65\u9aa4"), f.a.createElement("hr", null), f.a.createElement("p", {className: "desc"})), f.a.createElement("div", {className: "detail"}))))
        }), U = (t(310), t(23));
        t(311);

        function P(e) {
            e && (e.className += " fadein")
        }

        function M(e) {
            e && (e.className = e.className.replace(" fadein", ""))
        }

        var O = [{bannerBigImg: {filePath: t(312), bgcolor: "#669df6"}}, {
                bannerBigImg: {
                    filePath: t(313),
                    bgcolor: "#669df6"
                }
            }], R = function (e) {
                function n() {
                    var e, t, a, l;
                    c()(this, n);
                    for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                    return t = a = u()(this, (e = n.__proto__ || r()(n)).call.apply(e, [this].concat(o))), a.state = {
                        curIndex: -1,
                        intervalTime: 6e3
                    }, a.handleMainCarousel = function (e) {
                        var n = a.state.intervalTime;
                        a.turnBanners(e), a.swipeTimeoutId = setTimeout(a.handleMainCarousel, n)
                    }, a.handleChangeBanner = function (e) {
                        a.setState({curIndex: e})
                    }, a.renderBanners = function () {
                        var e = a.state.curIndex;
                        return f.a.createElement("div", {className: "comp-management-swipe"}, f.a.createElement("div", {className: "comp-management-banner"}, f.a.createElement("div", {
                            className: "big-banner-wrapper",
                            ref: function (e) {
                                a.swipeBigBanners = e
                            }
                        }, O.map(function (n, t) {
                            var a = n, r = a.bannerBigImg.adsUrl || "", l = b()("ban-box", {fadein: e === t});
                            return f.a.createElement("div", {
                                className: l,
                                key: a.bannerBigImg.filePath,
                                style: {backgroundColor: a.bannerBigImg.bgcolor}
                            }, f.a.createElement("div", {
                                className: "bnr-box",
                                id: "mainBanner"
                            }, f.a.createElement("div", {
                                className: "bimg-box",
                                id: "bannerImgBox",
                                "data-ilog": "1.327.eM3|a"
                            }, r ? f.a.createElement("a", {
                                href: r,
                                target: "_black",
                                style: {
                                    backgroundColor: a.bannerBigImg.bgcolor || "#fff",
                                    backgroundImage: "url(" + a.bannerBigImg.filePath + ")"
                                }
                            }, f.a.createElement("span", null)) : f.a.createElement("div", {
                                className: "item",
                                style: {
                                    backgroundColor: a.bannerBigImg.bgcolor || "#fff",
                                    backgroundImage: "url(" + a.bannerBigImg.filePath + ")"
                                }
                            }))))
                        })), f.a.createElement("ul", {className: "banner-pagination"}, O.map(function (n, t) {
                            var r = b()("item", {active: t === e});
                            return f.a.createElement("li", {
                                className: r, key: +t, onClick: function () {
                                    return a.handleChangeBanner(t)
                                }
                            })
                        }))))
                    }, l = t, u()(a, l)
                }

                return d()(n, e), o()(n, [{
                    key: "componentDidMount", value: function () {
                        this.handleMainCarousel()
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        clearTimeout(this.swipeTimeoutId)
                    }
                }, {
                    key: "turnBanners", value: function (e) {
                        var n = this.state.curIndex, t = this.swipeBigBanners.childNodes || [], a = e || n;
                        a === t.length - 1 ? (M(t[a]), P(t[0]), this.setState({curIndex: 0})) : (M(t[a]), P(t[a + 1]), this.setState(function (e) {
                            return {curIndex: e.curIndex + 1}
                        }))
                    }
                }, {
                    key: "render", value: function () {
                        return this.renderBanners()
                    }
                }]), n
            }(p.Component), K = U.a.HR_HOST + "/policy/list", j = function () {
                return f.a.createElement("section", {className: "comp-home-management"}, f.a.createElement("div", {className: "page-box clearfix"}, f.a.createElement(R, null), f.a.createElement("div", {className: "note"}, f.a.createElement("h4", null, "\u4f01\u4e1a\u4fdd\u969c ", f.a.createElement("br", null), "\u7406\u8d54\u6570\u636e\u7ba1\u7406\u540e\u53f0"), f.a.createElement("hr", null), f.a.createElement("p", {className: "desc"}, "\u4eba\u5458\u52a0\u51cf\u7ba1\u7406\u3001\u53d1\u7968\u7533\u8bf7\u3001\u4fdd\u5355\u4fe1\u606f\u7ba1\u7406\u4e00\u7ad9\u5f0f\u7ebf\u4e0a\u64cd\u4f5c ", f.a.createElement("br", null), "\u591a\u7ef4\u5ea6\u7406\u8d54\u6570\u636e\u5206\u6790\uff0c\u4f01\u4e1a\u5065\u5eb7\u62a5\u544a\u5b9e\u65f6\u66f4\u65b0"), f.a.createElement("a", {
                    href: K,
                    className: "primary-button"
                }, "\u7acb\u5373\u67e5\u770b"))))
            }, Y = (t(314), t(255)), Z = t.n(Y), F = Array.apply(void 0, Z()({length: 9})).map(Number.call, Number),
            L = function () {
                return f.a.createElement("section", {className: "comp-home-consult"}, f.a.createElement("div", {className: "page-box"}, f.a.createElement("h2", null, "\u4e13\u4e1a\u987e\u95ee\u4e00\u5bf9\u4e00\u5728\u7ebf\u670d\u52a1"), f.a.createElement("div", {className: "clearfix"}, f.a.createElement("div", {className: "consult"}, f.a.createElement("i", {className: "bg-img"}), f.a.createElement("h3", null, "\u4e13\u5c5e\u5ba2\u670d\u54a8\u8be2\u670d\u52a1"), f.a.createElement("div", {className: "img-wrapper"}, f.a.createElement("img", {
                    src: t(315),
                    alt: ""
                })), f.a.createElement("p", {className: "desc-title"}, "\u626b\u63cf\u4e8c\u7ef4\u7801"), f.a.createElement("p", {className: "desc"}, "\u4e13\u4eba\u4e00\u5bf9\u4e00\u8d34\u5fc3\u4e3a\u60a8\u63d0\u4f9b\u552e\u524d\u53ca\u552e\u540e\u670d\u52a1")), f.a.createElement("div", {className: "partner-wrapper"}, f.a.createElement("h3", null, "\u8d85\u8fc7 ", f.a.createElement("span", {className: "ft36 primary-color"}, "2000"), " \u4f59\u5bb6\u4f01\u4e1a\u5728\u7ebf\u6295\u4fdd"), f.a.createElement("ul", {className: "partners"}, F.map(function (e, n) {
                    return f.a.createElement("li", {key: e, className: "item item-" + (n + 1)})
                }))))))
            }, V = (t(316), t(72)), W = t(268),
            X = [{news: W.b, title: "\u56e2\u9669\u6700\u65b0\u516c\u544a", more: "/group/news/2"}, {
                news: W.a,
                title: "\u4f17\u5b89\u56e2\u9669\u70ed\u70b9",
                more: "/group/news/1"
            }], q = function () {
                return f.a.createElement("section", {className: "comp-home-news"}, f.a.createElement("div", {className: "bg"}), f.a.createElement("div", {className: "page-box"}, f.a.createElement("div", {className: "bg-text"}), f.a.createElement("div", {className: "clearfix"}, X.map(function (e, n) {
                    var t = e.news[0], a = b()("news-list", {hot: 1 === n});
                    return f.a.createElement("div", {
                        className: a,
                        key: e.title
                    }, f.a.createElement("h2", null, e.title), f.a.createElement("hr", null), f.a.createElement("div", {className: "news-content"}, f.a.createElement("div", {className: "first-news"}, f.a.createElement("div", {className: "news-item"}, f.a.createElement("h3", {className: "text-ellipsis"}, t.title), f.a.createElement("p", {className: "time"}, t.time), f.a.createElement(V.a, {
                        to: e.more + "/" + t.id,
                        className: "secondary-button"
                    }, "\u7acb\u5373\u67e5\u770b"))), f.a.createElement("ul", {className: "news"}, e.news.map(function (n, t) {
                        var a = n.title, r = n.time, l = n.id;
                        return t > 3 || 0 === t ? null : f.a.createElement("li", {
                            key: a,
                            className: "item"
                        }, f.a.createElement(V.a, {
                            to: e.more + "/" + l,
                            className: "title"
                        }, a), f.a.createElement("p", {className: "time"}, r))
                    }), f.a.createElement(V.a, {to: e.more, className: "more"}))))
                }))))
            }, G = (t(343), function () {
                return f.a.createElement("section", {className: "comp-home-contact page-box clearfix"}, f.a.createElement("div", {className: "desc"}, "1V1\u5927\u5ba2\u6237\u4e13\u5c5e\u670d\u52a1 \xa0 \u4e13\u4e1a\u56e2\u961f\u4e00\u7ebf\u652f\u6301 ", f.a.createElement("br", null), f.a.createElement("span", {className: "ft24"}, "\u7406\u8d54\u70ed\u7ebf\uff1a", f.a.createElement("span", {className: "ft38"}, "1010-9955"), " \u6216 ", f.a.createElement("span", {className: "ft38"}, "400-999-9595"))))
            }), z = function (e) {
                function n() {
                    return c()(this, n), u()(this, (n.__proto__ || r()(n)).apply(this, arguments))
                }

                return d()(n, e), o()(n, [{
                    key: "render", value: function () {
                        var e = this.props.bannersInfo;
                        return f.a.createElement("div", {className: "page-home"}, f.a.createElement(y, {bannersInfo: e}), f.a.createElement(H, null), f.a.createElement(D, null), f.a.createElement(j, null), f.a.createElement(L, null), f.a.createElement(q, null), f.a.createElement(G, null))
                    }
                }]), n
            }(p.Component), _ = Object(g.b)(function (e) {
                return {
                    bannersInfo: e.home.bannersInfo,
                    TPlanInfo: e.home.TPlanInfo,
                    FPlanInfo: e.home.FPlanInfo,
                    questionMenu: e.home.questionMenu,
                    faq: e.system.faq
                }
            }, function (e) {
                return Object(E.b)({
                    getBanners: A.d.getBanners,
                    getTPlan: A.d.getTPlan,
                    getFPlan: A.d.getFPlan,
                    getQuestionMenu: A.d.getQuestionMenu,
                    addReserve: A.d.addReserve,
                    addPlanInfo: A.c.addPlanInfo,
                    generatorTicket: A.f.generatorTicket,
                    push: h.routerActions.push
                }, e)
            })(z);
        n.default = _
    }
}]);