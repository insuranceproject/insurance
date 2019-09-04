(window.webpackJsonp = window.webpackJsonp || []).push([[21], {
    253: function (e, n, t) {
        "use strict";
        var a = {};
        t.r(a), t.d(a, "REQUEST", function () {
            return m
        }), t.d(a, "ADD_ACTIVITY_PLAN_INFO", function () {
            return f
        }), t.d(a, "addActivityPlanInfo", function () {
            return p
        }), t.d(a, "ADD_PLAN_INFO", function () {
            return g
        }), t.d(a, "addPlanInfo", function () {
            return h
        });
        var r = t(46), o = (t(112), t(18)), i = t(1), c = t.n(i), l = t(4), u = t.n(l), s = t(3), m = "REQUEST";

        function d(e) {
            return {type: m, data: e}
        }

        var f = "ADD_ACTIVITY_PLAN_INFO";

        function p(e, n) {
            var t = this;
            return function () {
                var a = u()(c.a.mark(function a(r) {
                    var o, i, l, u;
                    return c.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return o = function () {
                                    return s.a.post({
                                        server: "online",
                                        path: "/api/dragon/website/plan/addActivityPlanInfo",
                                        data: e,
                                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                                    }).catch(function (e) {
                                        return console.error(e)
                                    })
                                }, r(d()), t.next = 4, o();
                            case 4:
                                return i = t.sent, l = i.code, u = i.result, 0 === +l && "function" === typeof n && n(), r({
                                    type: f,
                                    data: u
                                }), t.abrupt("return", {code: l, result: u});
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

        function h(e, n) {
            var t = this;
            return function () {
                var a = u()(c.a.mark(function a(r) {
                    var o, i, l, u;
                    return c.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return o = function () {
                                    return s.a.get({
                                        server: "online",
                                        path: "/api/dragon/plan/addPlanInfo",
                                        data: e
                                    }).catch(function (e) {
                                        return console.error(e)
                                    })
                                }, r(d()), t.next = 4, o();
                            case 4:
                                return i = t.sent, l = i.code, u = i.result, 0 === +l && "function" === typeof n && n(), r({
                                    type: g,
                                    data: u
                                }), t.abrupt("return", {code: l, result: u});
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

        var b = t(57), A = t(58), N = t(84);
        t(47);
        t.d(n, "d", function () {
            return A
        }), t.d(n, "b", function () {
            return N
        }), t.d(n, "f", function () {
            return r
        }), t.d(n, "a", function () {
            return a
        }), t.d(n, "c", function () {
            return o
        }), t.d(n, "e", function () {
            return b
        })
    }, 255: function (e, n, t) {
        "use strict";
        n.__esModule = !0;
        var a, r = t(258), o = (a = r) && a.__esModule ? a : {default: a};
        n.default = function (e) {
            if (Array.isArray(e)) {
                for (var n = 0, t = Array(e.length); n < e.length; n++) t[n] = e[n];
                return t
            }
            return (0, o.default)(e)
        }
    }, 256: function (e, n, t) {
        "use strict";
        t.d(n, "f", function () {
            return i
        }), t.d(n, "c", function () {
            return c
        }), t.d(n, "e", function () {
            return l
        }), t.d(n, "b", function () {
            return u
        }), t.d(n, "d", function () {
            return s
        }), t.d(n, "a", function () {
            return m
        });
        var a = t(23), r = a.a.HR_HOST, o = (a.a.HOST, a.a.ZHONGAN_DOMAIN),
            i = "https://static.zhongan.com/website/health/ihealth/enterprise/online/assets/file/\u7b2c\u4e09\u65b9\u4ed8\u6b3e\u59d4\u6258\u4e66(\u4e2a\u4eba\u4ee3\u4ed8\u4f01\u4e1a\uff09.pdf",
            c = "https://t.zhongan.com/open/enterprise/online/clause", l = "/open/enterprise/online/login?target=",
            u = r + "/policy/list", s = "/group/serviceCenter/library", m = o + "/account/employeeWelfare"
    }, 258: function (e, n, t) {
        e.exports = {default: t(259), __esModule: !0}
    }, 259: function (e, n, t) {
        t(85), t(260), e.exports = t(16).Array.from
    }, 260: function (e, n, t) {
        "use strict";
        var a = t(42), r = t(21), o = t(54), i = t(150), c = t(151), l = t(86), u = t(261), s = t(149);
        r(r.S + r.F * !t(152)(function (e) {
            Array.from(e)
        }), "Array", {
            from: function (e) {
                var n, t, r, m, d = o(e), f = "function" == typeof this ? this : Array, p = arguments.length,
                    g = p > 1 ? arguments[1] : void 0, h = void 0 !== g, b = 0, A = s(d);
                if (h && (g = a(g, p > 2 ? arguments[2] : void 0, 2)), void 0 == A || f == Array && c(A)) for (t = new f(n = l(d.length)); n > b; b++) u(t, b, h ? g(d[b], b) : d[b]); else for (m = A.call(d), t = new f; !(r = m.next()).done; b++) u(t, b, h ? i(m, g, [r.value, b], !0) : r.value);
                return t.length = b, t
            }
        })
    }, 261: function (e, n, t) {
        "use strict";
        var a = t(36), r = t(71);
        e.exports = function (e, n, t) {
            n in e ? a.f(e, n, r(0, t)) : e[n] = t
        }
    }, 267: function (e, n, t) {
        "use strict";
        t.d(n, "c", function () {
            return i
        }), t.d(n, "a", function () {
            return c
        }), t.d(n, "b", function () {
            return l
        });
        t(30);
        var a = /^1[3|4|5|8|7|9][0-9]\d{8}$/, r = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/, o = function (e, n) {
            if (!n || 0 === n.length) return !1;
            if (!(e instanceof RegExp)) throw new Error("The rule shoud be RegExp");
            return !!e.test(n)
        }, i = function (e) {
            return o(a, e)
        }, c = function (e) {
            return o(r, e)
        }, l = function () {
            var e = !1;
            return navigator.userAgent.indexOf("MSIE") > 0 && (navigator.userAgent.indexOf("MSIE 6.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0") > 0 || navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 9.0") > 0) && (e = !0), e
        }
    }, 292: function (e, n, t) {
    }, 293: function (e, n, t) {
    }, 294: function (e, n, t) {
    }, 295: function (e, n) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZoAAAAwCAMAAAAfKExtAAAAn1BMVEUAAACKiop3eHd5eXl3eHeDg4N4eXh3eHd5e3l4eXh3eXd4enh4eXh3eXd5eXl3eXd8fHx4eHh3end4enh3eHd9fX13eXd6enp3eXd4eXh4eXh4eXh3eXd5eXl3eHd5eXl4enh3eHd4eXh3eHd3end6fXqHh4d4eXh3eXd8f3x3eHd3eXd4enh4fHh3eneIiIh6e3rZ2dnZ2dl2eHbY2Ngcqdx5AAAAM3RSTlMABcTRbAvk+iuc9nDqiCOtQmeWc6IWp0DdkF12toN+NUvVVb1iHQlG7hDyylBCOQ0wtbTmd9QLAAAKWklEQVR42u3c5xaaMBgG4AQFnFitA3Ciojiqtun9X1uTmPQjhhjrSefp+6OulPVAFrRIj98sggVG/yPy+TP6Q+J7hGb830bm61f0Z4TJ/Ps2+e7vo2EyP8vm4LLwCN+3N9IzKu/P6B51cT1SLH83DX5DRmbo1ibKyOz6A4Vr+bMCTRI06Mu6RSoyRDLdUH7n+fCXF/RzfPjNNIPZpLw/YTh/Tca9TRSw4/OqzZgWbiJz9vT3AX3NSGUa8tIikBTJfOJePac02BqkBncIOZdoCJnbZNzbgMzrNidWFpmzob8v6GtQTXMRxRoE0kbSq0N4PjqkqRFrakjJhJCWr9FYZYbf37iVMdvg9GM504IWLabKdymG4ktCd2x0pwlnaoIHmsLzvLhEgykrT3j5nTQDQsZIo7HKlN66lAnNNmNii7InPVnfBZQIqRmqNLzi6pdo5rx2YzVhMHJJ0wmepKPR0G9WGo1VRvngTmZw9Yw2R2JPActjyN33aPaEJkENtsaZS5oPz37/8EizopZYo7HLuLQBGbpQo02L2HMs7cfbNHnBtgAjlBKa6W+j2bDzQ6Oxyri1ARmwqaLp7Cfm7DslmlH4Ng1mG1Dk0jec/EyabhynBpobXXee1yEeIbM65GKQcWoDMoqNTnOy7DvQdMnbNF1CZB2/q0Fz455G4NcNNEN2WPfEmLmBwakNyKg279Mcjm/TrMRf5InYcja/hSYPCbnZacwI8LUzGbB5n2ZK3qOBhkZkTWgWv4NmwLsgjbFIhxQxIVmLxPKbtY0AfnAmAzbv0uCOShPW1ZyMNJj91MlhoQlrbj79eppGqPSccUGarBswI5kFwJ0NyNhsanzY8rF3RnrSHt3Bsdw3fphDoNFTQVOnr/W7xB4WLKxGzmhuCyV06TP22gYamMtYKrNOZ0azJaRhPPxubUDGatOYjXN0Zt0WBIHDu0d5byY2O2aHW9LE1TQ3lYZXcuszr8QX3ul7epOCNTfYFU2fVCZ4oFkTlWZAWj6jGYVkbjr4bm10GUtfYMERILAjdfh4Zvt6ljQJqUqMFRqcsjqQb81mrRT0ONf619Ls4geaDpndxzUeiVEpCRz65zZ9VzJgg3+IBgp9XEkatKrfk7DliffbA1JoxnwKC7dY5VVXDfnu113RRCkk4dXukL09qzQDotJc2BZwmqn8WpJJGYuN96M0PZAxLHSr06xsNFFBTr6kgXzS1gU0xb0nVi+CJbp6BHI8IzwON4ef0A04xCQeV3UDeLUdlg0oYn6nidQ7IYGUsdlsfpTGM8jAQuFCvE6TJMnYCZA8Zka/zejr9Cp2eonRj9HweZ2TvK/oH74H7jY6p5nRL7QempwpancYDQzTPDlRs1Ea24Uug5dVHYX1Q5kcWfKpCLtPwHutHlauMFvg3tcP0qA9b2v4Ncf/zOX++ZQZ4pBmyramigZ7rC/KaaBoKmlWyswanmbZR3V/YkI2So9y141PqXojKKBr8G13/qCALRmxJ9Np2lksErD6KZYZXit6aKw8n9FMQ3EA8oBk/s+g2RIS+xqN2KLML9PggARY0qCM3YYyptHhx2H09IJo8SrOR65yLqwyxVmjudkmOiRNW7RXMSEdXtOGWNYYZ5c0IHO8GYacwTFCZZqUT0hImjp9sciAjUnmZZvUG+yQmo+evv7dbpewc3v3mClrw+krQhrNxUiTVMwGiIvT5yO+SFajE/c025CEK2SgaZ6RQlOj1wnQ+AVp5RYZsDHI2G2gEXiA2ELnTBWrPIlT6C9oFVrSCkUISyjjjappZvyRjiETkQPWg2sa3OUbbKI5IIWmzxp6oGH3YGdmGbAxy7xss4u19nlUaDexbDRbAw0Lhm5A6XM1zYCPnBbi+ZodBQ2QY5rRhp+LRhokaeSxCBtlGj8gZG2SsdlMuIzdBu6thDdtvFNULbr9Bg3uEe9QpumGccNEw1H6/KpdiIc/Zo5p9gFf1as0Q173Ag3f3c7BIgM2Rhm7zS0UFT9kpfTE7TTbpzRn3sADTQ5DAZ2GM8/5fZKmWHLXKU3OTrvWGr1CI74OrkAjh4NNo0y47YKNQaa1Gr9gg2vsClEKXPkYt2GiWf8gzUdeOQJNRF89I82Ew0ViAM27HQ5p8IIdnM4FvUpziHnNqtIsQ9hfXQYhsDHI7BF+wWZKoD5TZpBqGOmpv0HDNjQt0fj0NTbS5BxuJ8ps4BxxQsPnP2Y5epUGb9jWAA28bS2NMpqNLoNesInuxbOSg+zvDgw028prKTXSDHnDDjToSLfOSINDjtK5lynY+MYlzTI8lrf/ZKFJ6GY0Jt8fbIzv7y5+Bs8saDK6jS7zis0GRhkiOJOPCq6raY5JruomLTON6A7fJI3sEF9NNCjgGuwO2ohfQjW3T9T0c7F9n5aNSHQ4jTR9vmNr8pA1urVgVl6T0W10GbvNlv0UE5pJecauNsqYQaRPCdy3oHeBc6HHGcnESFPjRxloeKUSmWj4rznvIy75QoYuafTnbMPcTHNo8XNWp+HnaOabZFQbXcZiA+OXGb90givcFA+X/LQgJ4wg6tJOKWYfU7mHTWyk6fDLAGj4Yb8Yacb8V97+84bwo3saaFB5F9181Qz4/dV8zbOhG3p/xzR7x0iVgapes9Fl7Dbsp2OOciY0VO8T9A3NzW0YEp5g2lh0xPqaDYSMNLR8B0kaeVTWlTTQa6jzj2O4c+eaZtJkWVzQM5rDaWR6evPwySSj22gydpsVEUMOuMlbJ3I8NTYNbkZzdWwVLOi6zTQjtnUKzYKvVaURFsJoyrco4RNqI8c0esw0yPrMsypjstFkdJsd0sYvnlwtH/7nx+8efiyaGz27LdwhqLGa7RnNja0YaMTBnz/QrI6S5sL3MmJ1DeYX3O+kQUYauwzYxJqM2Qaq27ABDjOEejAxAs2NFr8PNNnWQrNnlSXQiGu0+UCzIZIGzWPWcLXj3oGrOqQZtJ9k8IM0dhmwARmrDYxf5ggGuKS/ZguIZIG+7FWrybvqnZvO8wotFW+ABibGgKYJz6apc3OJOxpL3qGJDDJgo8mYbbAyfskw9JnVLoupuVmOQ3GVfoymgeg0Dm9mGtnLApqcXY0PNP5iyG6TTPrlzNgFR1/Tw59KMwMZiw3IGG36isUFCnhEmxe4PjY3eC1KEW997zyfJPnKRJOI8SjQ7FjfQaGBWaPqxL4Tmub0SZrv0BxBxmgDMhabMfyzMbVzHB3VoSM0N9D8z8RVMoatvvTEVdTDOg3M00gauUNhJY1HDFn+od2ADGSMNiBjsemWTtDgqtbs0DwrzU1DKUGKbq62Pckd9azRzPkeybH/RNDAg+sazcIgEzi4atJ2O3/2e95up+U9b7cf5437fe0MOYcwB2C0ETIWG3iye6U/7NeruEU0phR++dZOXNcP07Udi+4DJG8JrEYsmvJRS860rY5hX5bbFYRMAfRjVfqjP/Y/Qlkmyc1WZj/oRrYy62apM5XSZleNvxg0NM/poLTqyRw01ZznF6RmMpAnobS8NCUI3kG52+Aj/mf++6D/ecznL+i35BtHLI0jyYDl8gAAAABJRU5ErkJggg=="
    }, 296: function (e, n, t) {
    }, 297: function (e, n, t) {
    }, 469: function (e, n, t) {
        "use strict";
        t.r(n);
        t(292);
        var a = t(5), r = t.n(a), o = t(6), i = t.n(o), c = t(7), l = t.n(c), u = t(8), s = t.n(u), m = t(9),
            d = t.n(m), f = t(0), p = t.n(f), g = t(113), h = t(13), b = t(59), A = t(20), N = t(29), v = t(267),
            E = t(253), w = t(2), I = t.n(w), y = (t(293), t(23)), M = y.a.HR_HOST, G = window.location, x = G.origin,
            R = G.href, C = function (e) {
                var n = e.loginInfo, t = x + "/open/enterprise/online/login?target=" + R,
                    a = x + "/open/enterprise/online/register", r = M + "/policy/list",
                    o = x + "/open/enterprise/online/loginout";
                return p.a.createElement("div", {className: "comp-top-box"}, p.a.createElement("div", {className: "page-box clearfix"}, p.a.createElement("a", {
                    href: "https://www.zhongan.com",
                    className: "top-home",
                    "data-ilog": "12.751.cW1"
                }, "\u4f17\u5b89\u9996\u9875"), p.a.createElement("div", {className: "login-status"}, n ? p.a.createElement(f.Fragment, null, "\u6b22\u8fce\u60a8\uff0c", p.a.createElement("a", {
                    href: r,
                    className: "user-name",
                    "data-ilog": "12.751.kG6"
                }, n), p.a.createElement("a", {
                    className: "sign-out",
                    href: o,
                    "data-ilog": "12.751.cS8"
                }, "\u9000\u51fa"), p.a.createElement("a", {
                    className: "management",
                    href: r,
                    "data-ilog": "12.751.eH6"
                }, "\u4f01\u4e1a\u4e13\u533a")) : p.a.createElement(f.Fragment, null, p.a.createElement("a", {
                    href: t,
                    "data-ilog": "12.751.pY1"
                }, "\u4f01\u4e1a\u767b\u5f55"), p.a.createElement("a", {
                    href: a,
                    "data-ilog": "12.751.eI3"
                }, "\u514d\u8d39\u6ce8\u518c")))))
            }, Y = (t(294), t(255)), U = t.n(Y), O = t(25), D = t.n(O), j = window.location.pathname, k = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1];
                return -1 !== (e || []).findIndex(function (e) {
                    return e === n
                })
            }, T = function () {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e = n.matchUrl, "[object Array]" !== Object.prototype.toString.call(e) ? !!~window.location.href.indexOf(n.matchUrl) : !!k(n.matchUrl, j) || (n.subMenu && n.subMenu.length ? n.subMenu.some(function (e) {
                    return k(e.matchUrl, j)
                }) : void 0)
            }, Q = [{
                linkUrl: "/group",
                matchUrl: ["/group", "/"],
                menuName: "\u9996\u9875"
            }, {
                linkUrl: "/group/serviceCenter",
                matchUrl: ["/group/serviceCenter"],
                menuName: "\u5ba2\u6237\u670d\u52a1\u4e2d\u5fc3",
                subMenu: [{
                    linkUrl: "/group/serviceCenter/questions",
                    matchUrl: ["/group/serviceCenter/questions"],
                    menuName: "\u5e38\u89c1\u95ee\u9898"
                }, {
                    linkUrl: "/group/serviceCenter/library",
                    ilog: "12.751.gK5",
                    matchUrl: ["/group/serviceCenter/library"],
                    menuName: "\u8d44\u6599\u4e0b\u8f7d\u4e13\u533a"
                }]
            }, {linkUrl: "/group/guide", matchUrl: ["/group/guide"], menuName: "\u552e\u540e\u4e0e\u7406\u8d54"}],
            z = p.a.createElement("a", {href: "/", className: "logo"}, p.a.createElement("img", {src: t(295)})),
            Z = function (e) {
                var n = e.origin, t = e.loginInfo, a = void 0 === t ? {} : t, r = e.menuInfo.resource,
                    o = void 0 === r ? [] : r, i = p.a.createElement("div", null, p.a.createElement("a", {
                        href: n + "/open/enterprise/online/login",
                        "data-ilog": "12.751.pY1"
                    }, "\u4f01\u4e1a\u767b\u5f55"), p.a.createElement("a", {
                        href: n + "/open/enterprise/online/register",
                        "data-ilog": "12.751.eI3"
                    }, "\u514d\u8d39\u6ce8\u518c")), c = p.a.createElement("div", {className: "menu-plat hide"}, i);
                if (a.result) {
                    var l = p.a.createElement("a", {
                        href: "https://hr.zhongan.com/policy/list",
                        "data-ilog": "12.751.eH6"
                    }, "\u4f01\u4e1a\u4e13\u533a");
                    -1 === j.indexOf("insure1") && (c = p.a.createElement("div", {className: "selem-box"}, p.a.createElement("p", {className: "sele-menu"}, l)))
                }
                return p.a.createElement("div", {className: "menu-box"}, p.a.createElement("div", {className: "page-box clearfix"}, z, function () {
                    if (~window.location.href.indexOf("/group/activities")) return null;
                    var e = D()("menu-main", {hide: !1});
                    return N.a.get("channelCode") && (Q = [].concat(U()(o), [{
                        linkUrl: "/open/enterprise/online/clause",
                        ilog: "12.751.gK5",
                        matchUrl: "enterprise/online/clause",
                        menuName: "\u4fdd\u9669\u6761\u6b3e"
                    }])), p.a.createElement("ul", {className: e}, Q.map(function (e) {
                        if ("\u56e2\u9669\u798f\u5229" === e.menuName) return null;
                        var n = T(e), t = e.subMenu && e.subMenu.length, a = D()("item-title", {"no-border": t}),
                            r = D()("item", {cur: n});
                        return p.a.createElement("li", {
                            key: e.matchUrl,
                            className: r
                        }, p.a.createElement("a", {
                            href: e.linkUrl,
                            className: a,
                            "data-ilog": e.ilog
                        }, e.menuName), t && p.a.createElement("div", {className: "sub-menu"}, e.subMenu.map(function (e) {
                            return p.a.createElement("a", {
                                key: e.matchUrl,
                                href: e.linkUrl,
                                className: "sub-menu-title",
                                "data-ilog": e.ilog
                            }, e.menuName)
                        })))
                    }))
                }(), c))
            }, B = function (e) {
                function n() {
                    return i()(this, n), s()(this, (n.__proto__ || r()(n)).apply(this, arguments))
                }

                return d()(n, e), l()(n, [{
                    key: "render", value: function () {
                        var e = this.props, n = e.basename, t = e.loginInfo, a = e.menuInfo, r = e.employerInfo, o = e.faq,
                            i = e.generatorTicket, c = e.push, l = e.channelCode, u = e.productCode;
                        return p.a.createElement(f.Fragment, null, p.a.createElement(C, {loginInfo: t}), p.a.createElement(Z, {
                            faq: o,
                            employerInfo: r,
                            menuInfo: a,
                            basename: n,
                            loginInfo: t,
                            generatorTicket: i,
                            push: c,
                            channelCode: l,
                            productCode: u
                        }))
                    }
                }]), n
            }(f.Component);
        B.defaultProps = {
            basename: "", generatorTicket: function () {
            }, push: function () {
            }
        }, B.propTypes = {basename: I.a.string, generatorTicket: I.a.func, push: I.a.func};
        var H = B, S = (t(296), function () {
            return p.a.createElement("footer", {className: "foot-box"}, p.a.createElement("div", {className: "page-box clearfix"}, p.a.createElement("div", {className: "foot-left"}, p.a.createElement("ul", {className: "link"}, p.a.createElement("a", {
                href: "https://www.zhongan.com",
                "data-ilog": "12.751.mL7"
            }, "\u4f17\u5b89\u5b98\u7f51"), " \uff5c", p.a.createElement("a", {
                href: "https://www.zhongan.com/channel/about/about.html",
                "data-ilog": "12.751.nO2"
            }, "\u5173\u4e8e\u6211\u4eec"), " \uff5c", p.a.createElement("a", {
                href: "https://www.zhongan.com/open/about/feedback",
                "data-ilog": "12.751.oN5"
            }, "\u6295\u8bc9\u5efa\u8bae"), " \uff5c", p.a.createElement("a", {
                href: "https://www.zhongan.com/channel/about/website.html",
                "data-ilog": "12.751.mT6"
            }, "\u9690\u79c1\u58f0\u660e")), p.a.createElement("p", {className: "contact"}, "\u5ba2\u670d\u70ed\u7ebf\uff1a1010-9955 \u6216 400-999-9595", p.a.createElement("br", null), "\u5408\u4f5c\u54a8\u8be2\uff1aonlinegroup@zhongan.com", p.a.createElement("br", null), "\u4e1a\u52a1\u5efa\u8bae\u53ca\u6295\u8bc9\u4e13\u7ebf\uff1a021-80399188"), p.a.createElement("p", {className: "copyright"}, "\u6caaICP\u590713041135 Copyright\xa9\u4f17\u5b89\u4fdd\u9669 All Rights Reserved", p.a.createElement("a", {
                href: "http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=20131111112754954",
                rel: "noopener noreferrer",
                target: "_blank"
            }, p.a.createElement("img", {
                alt: "",
                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAcCAIAAAC8mzV8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMzgwMTE3NDA3MjA2ODExODIyQUNDMUQyM0M2NjYwMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQkM3NkM4QzQyOTYxMUU2OUNBMEEzNzFCRDhDRjdBQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQkM3NkM4QjQyOTYxMUU2OUNBMEEzNzFCRDhDRjdBQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjAyRUQ5QTMwRjIwNjgxMTgyMkFFNjkxNjBDRTZCM0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDM4MDExNzQwNzIwNjgxMTgyMkFDQzFEMjNDNjY2MDEiLz4gPC9yZGY6RGVzY3Jp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"
            })))), p.a.createElement("div", {className: "foot-right"}, p.a.createElement("p", {className: "qrcode"}, "\u626b\u4e00\u626b\u5173\u6ce8\u6211\u4eec", p.a.createElement("i", null)))))
        }), V = (t(297), t(256)), L = y.a.STAFF_GUIDE_URL, F = [{
            text: "\u5728\u7ebf\u54a8\u8be2",
            id: "zaGroupZNKF1",
            ilog: "12.751.yR9"
        }, {text: "\u56e2\u5355\u67e5\u8be2", href: V.b, ilog: "12.751.iU4"}, {
            text: "\u5728\u7ebf\u7406\u8d54",
            href: V.a,
            ilog: "12.751.cG2"
        }, {text: "\u4eba\u5458\u589e\u51cf", href: V.b, ilog: "12.751.sM7"}, {
            text: "\u53d1\u7968\u7533\u8bf7",
            href: V.b,
            ilog: "12.751.eV7"
        }, {text: "\u5458\u5de5\u624b\u518c", href: L, ilog: "12.2101.rMRa"}], J = function () {
            return p.a.createElement("div", {className: "comp-custom-service"}, F.map(function (e, n) {
                return p.a.createElement("a", {
                    className: "item bg-" + (n + 1),
                    href: e.href,
                    key: e.href + e.text || e.id,
                    id: e.id,
                    "data-ilog": e.ilog
                }, p.a.createElement("div", {className: "detail"}, e.text))
            }))
        }, W = function (e) {
            function n() {
                var e, t, a, o;
                i()(this, n);
                for (var c = arguments.length, l = Array(c), u = 0; u < c; u++) l[u] = arguments[u];
                return t = a = s()(this, (e = n.__proto__ || r()(n)).call.apply(e, [this].concat(l))), a.state = {isHideCornerBar: !0}, a.handleGetMenu = function () {
                    var e = a.props, n = e.productCode, t = e.channelCode, r = e.getMenu,
                        o = !!~window.location.pathname.indexOf("enterprise/hlliability") || !!~window.location.pathname.indexOf("online/qaLiadetail") || !!~window.location.pathname.indexOf("online/qaLiaindex") ? 2 : 1;
                    n && N.a.set("productCode", n), t && N.a.set("channelCode", t), "/oldIndex" !== window.location.pathname || n || t || (N.a.remove("productCode"), N.a.remove("channelCode"));
                    var i = N.a.get("productCode"), c = N.a.get("channelCode"), l = "productType=" + o;
                    i && (l += "&productCode=" + i), c && (l += "&channelCode=" + c), r(l)
                }, a.handleHideCornerBar = function () {
                    a.setState(function (e) {
                        return {isHideCornerBar: !e.isHideCornerBar}
                    })
                }, o = t, s()(a, o)
            }

            return d()(n, e), l()(n, [{
                key: "componentDidMount", value: function () {
                    var e = this.props, n = e.getFAQ, t = e.checkLogin, a = e.push;
                    Object(v.b)() && !~window.location.href.indexOf("/group/incompatible") && a("/group/incompatible"), this.handleGetMenu(), t(), n(), Object(A.a)("//static.zhongan.com/website/public/js/ilog/dist/ilog.min.js"), Object(A.a)("//hm.baidu.com/hm.js?8353113738b6e6f4348bb56c5d756f44")
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, n = e.channelCode, t = e.productCode, a = e.children, r = e.faq,
                        o = e.loginInfo, i = e.menuInfo, c = e.generatorTicket, l = e.push, u = e.basename,
                        s = this.state.isHideCornerBar;
                    return p.a.createElement(f.Fragment, null, p.a.createElement("main", null, p.a.createElement(H, {
                        faq: r,
                        basename: u,
                        loginInfo: o,
                        menuInfo: i,
                        generatorTicket: c,
                        push: l,
                        channelCode: n,
                        productCode: t
                    }), s && p.a.createElement(J, {handleHideCornerBar: this.handleHideCornerBar}), a), p.a.createElement(S, null))
                }
            }]), n
        }(f.Component), K = Object(g.b)(function (e, n) {
            return {
                faq: e.system.faq,
                loginInfo: e.system.loginInfo,
                menuInfo: e.system.menuInfo,
                basename: n.location.basename,
                productCode: n.location.query.productCode,
                channelCode: n.location.query.channelCode,
                productType: n.location.query.productType
            }
        }, function (e) {
            return Object(h.b)({
                getFAQ: E.f.getFAQ,
                generatorTicket: E.f.generatorTicket,
                checkLogin: E.f.checkLogin,
                getMenu: E.f.getMenu,
                push: b.routerActions.push
            }, e)
        })(W);
        n.default = K
    }
}]);