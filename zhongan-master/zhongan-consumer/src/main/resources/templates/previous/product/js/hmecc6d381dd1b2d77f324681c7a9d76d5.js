(function () {
    var h = {}, mt = {}, c = {
        id: "d792eb5ed311e5605c562e0f39e100cb",
        dm: ["zhongan.com", "chexian.zhongan.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [],
        cetrk: [],
        icon: '',
        ctrk: false,
        align: -1,
        nv: 1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 1,
        vcard: 6588959,
        qiao: 0,
        lxb: 0,
        kbtrk: 0,
        pt: 0,
        spa: 0,
        aet: '',
        hca: 'AB7B2ABB7F2B1883',
        conv: 0,
        med: 0,
        cvcc: {q: /tencent:\/\/|qq\.(com|htm)|kefu|openkf|swt|zoos|53kf|doyoo|looyu|leyu|zixun|chat|talk|openQQ|open_ask|online/i},
        cvcf: ['submit'],
        apps: ''
    };
    var r = void 0, t = !0, w = null, x = !1;
    mt.cookie = {};
    mt.cookie.set = function (b, a, e) {
        var d;
        e.L && (d = new Date, d.setTime(d.getTime() + e.L));
        document.cookie = b + "=" + a + (e.domain ? "; domain=" + e.domain : "") + (e.path ? "; path=" + e.path : "") + (d ? "; expires=" + d.toGMTString() : "") + (e.kc ? "; secure" : "")
    };
    mt.cookie.get = function (b) {
        return (b = RegExp("(^| )" + b + "=([^;]*)(;|$)").exec(document.cookie)) ? b[2] : w
    };
    mt.cookie.Ib = function (b, a) {
        try {
            var e = "Hm_ck_" + +new Date;
            mt.cookie.set(e, "is-cookie-enabled", {domain: b, path: a, L: r});
            var d = "is-cookie-enabled" === mt.cookie.get(e) ? "1" : "0";
            mt.cookie.set(e, "", {domain: b, path: a, L: -1});
            return d
        } catch (f) {
            return "0"
        }
    };
    mt.lang = {};
    mt.lang.e = function (b, a) {
        return "[object " + a + "]" === {}.toString.call(b)
    };
    mt.lang.ta = function (b) {
        return mt.lang.e(b, "Number") && isFinite(b)
    };
    mt.lang.aa = function (b) {
        return mt.lang.e(b, "String")
    };
    mt.lang.g = function (b) {
        return b.replace ? b.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : b
    };
    mt.lang.trim = function (b) {
        return b.replace(/^\s+|\s+$/g, "")
    };
    mt.lang.J = function (b, a) {
        var e = x;
        if (b == w || !mt.lang.e(b, "Array") || a === r) return e;
        if (Array.prototype.indexOf) e = -1 !== b.indexOf(a); else for (var d = 0; d < b.length; d++) if (b[d] === a) {
            e = t;
            break
        }
        return e
    };
    (function () {
        var b = mt.lang;
        mt.f = {};
        mt.f.oa = function (a) {
            return document.getElementById(a)
        };
        mt.f.ob = function (a) {
            if (!a) return w;
            try {
                a = String(a);
                if (0 === a.indexOf("!HMCC!")) return document.querySelector(a.substring(6, a.length));
                for (var b = a.split(">"), d = document.body, f = b.length - 1; 0 <= f; f--) if (-1 < b[f].indexOf("#")) {
                    var g = b[f].split("#")[1];
                    (d = document.getElementById(g)) || (d = document.getElementById(decodeURIComponent(g)));
                    b = b.splice(f + 1, b.length - (f + 1));
                    break
                }
                for (a = 0; d && a < b.length;) {
                    var m = String(b[a]).toLowerCase();
                    if (!("html" === m || "body" === m)) {
                        var f = 0, l = b[a].match(/\[(\d+)\]/i), g = [];
                        if (l) f = l[1] - 1, m = m.split("[")[0]; else if (1 !== d.childNodes.length) {
                            for (var n = 0, s = 0, u = d.childNodes.length; s < u; s++) {
                                var q = d.childNodes[s];
                                1 === q.nodeType && q.nodeName.toLowerCase() === m && n++;
                                if (1 < n) return w
                            }
                            if (1 !== n) return w
                        }
                        for (n = 0; n < d.childNodes.length; n++) 1 === d.childNodes[n].nodeType && d.childNodes[n].nodeName.toLowerCase() === m && g.push(d.childNodes[n]);
                        if (!g[f]) return w;
                        d = g[f]
                    }
                    a++
                }
                return d
            } catch (v) {
                return w
            }
        };
        mt.f.qa = function (a, b) {
            var d =
                [], f = [];
            if (!a) return f;
            for (; a.parentNode != w;) {
                for (var g = 0, m = 0, l = a.parentNode.childNodes.length, n = 0; n < l; n++) {
                    var s = a.parentNode.childNodes[n];
                    if (s.nodeName === a.nodeName && (g++, s === a && (m = g), 0 < m && 1 < g)) break
                }
                if ((l = "" !== a.id) && b) {
                    d.unshift("#" + encodeURIComponent(a.id));
                    break
                } else l && (l = "#" + encodeURIComponent(a.id), l = 0 < d.length ? l + ">" + d.join(">") : l, f.push(l)), d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < g ? "[" + m + "]" : ""));
                a = a.parentNode
            }
            f.push(d.join(">"));
            return f
        };
        mt.f.vb = function (a) {
            return (a =
                mt.f.qa(a, t)) && a.length ? String(a[0]) : ""
        };
        mt.f.ub = function (a) {
            return mt.f.qa(a, x)
        };
        mt.f.ec = function (a, b) {
            for (b = b.toUpperCase(); (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == b) return a;
            return w
        };
        mt.f.nb = function (a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.f.fc = function (a) {
            var b = {top: 0, left: 0};
            if (!a) return b;
            var d = mt.f.nb(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect());
            return {
                top: b.top + (window.pageYOffset || d.scrollTop) - (d.clientTop || 0), left: b.left +
                    (window.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
            }
        };
        mt.f.getAttribute = function (a, b) {
            var d = a.getAttribute && a.getAttribute(b) || w;
            if (!d && a.attributes && a.attributes.length) for (var f = a.attributes, g = f.length, m = 0; m < g; m++) f[m].nodeName === b && (d = f[m].nodeValue);
            return d
        };
        mt.f.X = function (a) {
            var b = "document";
            a.tagName !== r && (b = a.tagName);
            return b.toLowerCase()
        };
        mt.f.xb = function (a) {
            var e = "";
            a.textContent ? e = b.trim(a.textContent) : a.innerText && (e = b.trim(a.innerText));
            e && (e = e.replace(/\s+/g, " ").substring(0, 255));
            return e
        };
        mt.f.Ha = function (a, e) {
            var d = mt.f.X(a);
            "input" === d && e && ("button" === a.type || "submit" === a.type) ? d = b.trim(a.value) || "" : "input" === d && !e && "password" !== a.type ? d = b.trim(a.value) || "" : "img" === d ? (d = mt.f.getAttribute, d = d(a, "alt") || d(a, "title") || d(a, "src")) : d = "body" === d || "html" === d ? ["(hm-default-content-for-", d, ")"].join("") : mt.f.xb(a);
            return String(d).substring(0, 255)
        };
        (function () {
            (mt.f.Qa = function () {
                function a() {
                    if (!a.$) {
                        a.$ = t;
                        for (var d = 0, b = f.length; d < b; d++) f[d]()
                    }
                }

                function b() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (d) {
                        setTimeout(b,
                            1);
                        return
                    }
                    a()
                }

                var d = x, f = [], g;
                document.addEventListener ? g = function () {
                    document.removeEventListener("DOMContentLoaded", g, x);
                    a()
                } : document.attachEvent && (g = function () {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", g), a())
                });
                (function () {
                    if (!d) if (d = t, "complete" === document.readyState) a.$ = t; else if (document.addEventListener) document.addEventListener("DOMContentLoaded", g, x), window.addEventListener("load", a, x); else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange",
                            g);
                        window.attachEvent("onload", a);
                        var f = x;
                        try {
                            f = window.frameElement == w
                        } catch (l) {
                        }
                        document.documentElement.doScroll && f && b()
                    }
                })();
                return function (d) {
                    a.$ ? d() : f.push(d)
                }
            }()).$ = x
        })();
        return mt.f
    })();
    mt.event = {};
    mt.event.d = function (b, a, e) {
        b.attachEvent ? b.attachEvent("on" + a, function (a) {
            e.call(b, a)
        }) : b.addEventListener && b.addEventListener(a, e, x)
    };
    mt.event.preventDefault = function (b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = x
    };
    (function () {
        var b = mt.event;
        mt.h = {};
        mt.h.Ma = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.h.rb = function () {
            if (document.documentMode) return document.documentMode;
            var a = /msie (\d+\.\d+)/i.exec(navigator.userAgent);
            return a ? +a[1] || 0 : 0
        };
        mt.h.cookieEnabled = navigator.cookieEnabled;
        mt.h.javaEnabled = navigator.javaEnabled();
        mt.h.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.h.Nb = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.h.colorDepth =
            window.screen.colorDepth || 0;
        mt.h.Y = function () {
            var a;
            a = a || document;
            return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
        };
        mt.h.O = function () {
            var a = document;
            return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
        };
        mt.h.orientation = 0;
        (function () {
            function a() {
                var a = 0;
                window.orientation !== r && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== r) && (a = screen.orientation.angle);
                mt.h.orientation =
                    a
            }

            a();
            b.d(window, "orientationchange", a)
        })();
        return mt.h
    })();
    mt.o = {};
    mt.o.parse = function (b) {
        return (new Function("return (" + b + ")"))()
    };
    mt.o.stringify = function () {
        function b(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var d = e[a];
                if (d) return d;
                d = a.charCodeAt();
                return "\\u00" + Math.floor(d / 16).toString(16) + (d % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function a(a) {
            return 10 > a ? "0" + a : a
        }

        var e = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (d) {
            switch (typeof d) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "string":
                    return b(d);
                case "boolean":
                    return String(d);
                default:
                    if (d === w) return "null";
                    if (d instanceof Array) {
                        var f = ["["], g = d.length, e, l, n;
                        for (l = 0; l < g; l++) switch (n = d[l], typeof n) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                e && f.push(","), f.push(mt.o.stringify(n)), e = 1
                        }
                        f.push("]");
                        return f.join("")
                    }
                    if (d instanceof Date) return '"' + d.getFullYear() + "-" + a(d.getMonth() + 1) + "-" + a(d.getDate()) + "T" + a(d.getHours()) + ":" + a(d.getMinutes()) + ":" + a(d.getSeconds()) + '"';
                    e = ["{"];
                    l = mt.o.stringify;
                    for (g in d) if (Object.prototype.hasOwnProperty.call(d, g)) switch (n =
                        d[g], typeof n) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            f && e.push(","), f = 1, e.push(l(g) + ":" + l(n))
                    }
                    e.push("}");
                    return e.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.fa = function () {
        if (!mt.localStorage.l) try {
            mt.localStorage.l = document.createElement("input"), mt.localStorage.l.type = "hidden", mt.localStorage.l.style.display = "none", mt.localStorage.l.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)
        } catch (b) {
            return x
        }
        return t
    };
    mt.localStorage.set = function (b, a, e) {
        var d = new Date;
        d.setTime(d.getTime() + e || 31536E6);
        try {
            window.localStorage ? (a = d.getTime() + "|" + a, window.localStorage.setItem(b, a)) : mt.localStorage.fa() && (mt.localStorage.l.expires = d.toUTCString(), mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.setAttribute(b, a), mt.localStorage.l.save(document.location.hostname))
        } catch (f) {
        }
    };
    mt.localStorage.get = function (b) {
        if (window.localStorage) {
            if (b = window.localStorage.getItem(b)) {
                var a = b.indexOf("|"), e = b.substring(0, a) - 0;
                if (e && e > (new Date).getTime()) return b.substring(a + 1)
            }
        } else if (mt.localStorage.fa()) try {
            return mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.getAttribute(b)
        } catch (d) {
        }
        return w
    };
    mt.localStorage.remove = function (b) {
        if (window.localStorage) window.localStorage.removeItem(b); else if (mt.localStorage.fa()) try {
            mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.removeAttribute(b), mt.localStorage.l.save(document.location.hostname)
        } catch (a) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (b, a) {
        try {
            window.sessionStorage && window.sessionStorage.setItem(b, a)
        } catch (e) {
        }
    };
    mt.sessionStorage.get = function (b) {
        try {
            return window.sessionStorage ? window.sessionStorage.getItem(b) : w
        } catch (a) {
            return w
        }
    };
    mt.sessionStorage.remove = function (b) {
        try {
            window.sessionStorage && window.sessionStorage.removeItem(b)
        } catch (a) {
        }
    };
    mt.Ta = {};
    mt.Ta.log = function (b, a) {
        var e = new Image, d = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[d] = e;
        e.onload = function () {
            e.onload = w;
            e = window[d] = w;
            a && a(b)
        };
        e.src = b
    };
    mt.ya = {};
    mt.ya.yb = function () {
        var b = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var a = navigator.plugins["Shockwave Flash"];
            a && a.description && (b = a.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (b = a.GetVariable("$version")) && (b = b.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (e) {
        }
        return b
    };
    mt.ya.dc = function (b, a, e, d, f) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + b + '" width="' + e + '" height="' + d + '"><param name="movie" value="' + a + '" /><param name="flashvars" value="' + (f || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + b + '" width="' + e + '" height="' + d + '" src="' + a + '" flashvars="' + (f || "") + '" allowscriptaccess="always" /></object>'
    };
    mt.url = {};
    mt.url.m = function (b, a) {
        var e = b.match(RegExp("(^|&|\\?|#)(" + a + ")=([^&#]*)(&|$|#)", ""));
        return e ? e[3] : w
    };
    mt.url.gc = function (b) {
        return (b = b.match(/^(https?:)\/\//)) ? b[1] : w
    };
    mt.url.qb = function (b) {
        return (b = b.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? b[2].replace(/.*@/, "") : w
    };
    mt.url.N = function (b) {
        return (b = mt.url.qb(b)) ? b.replace(/:\d+$/, "") : b
    };
    mt.url.qa = function (b) {
        return (b = b.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? b[2].replace(/[\?#].*/, "").replace(/^$/, "/") : w
    };
    (function () {
        function b() {
            for (var a = x, b = document.getElementsByTagName("script"), d = b.length, d = 100 < d ? 100 : d, f = 0; f < d; f++) {
                var g = b[f].src;
                if (g && 0 === g.indexOf("https://hm.baidu.com/h")) {
                    a = t;
                    break
                }
            }
            return a
        }

        return h.lb = b
    })();
    var A = h.lb;
    h.w = {
        hc: "http://tongji.baidu.com/hm-web/welcome/ico",
        Pa: "hm.baidu.com/hm.gif",
        $a: /^(tongji|hmcdn).baidu.com$/,
        Va: "tongji.baidu.com",
        Cb: "hmmd",
        Db: "hmpl",
        Xb: "utm_medium",
        Bb: "hmkw",
        Zb: "utm_term",
        zb: "hmci",
        Wb: "utm_content",
        Eb: "hmsr",
        Yb: "utm_source",
        Ab: "hmcu",
        Vb: "utm_campaign",
        K: 0,
        H: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        ua: A() || "https:" === document.location.protocol ? "https:" : "http:",
        ic: 0,
        ac: 6E5,
        Jb: 6E5,
        jc: 5E3,
        bc: 5,
        ka: 1024,
        $b: 1,
        ca: 2147483647,
        Ua: "hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn p ct u tt hh".split(" "),
        P: t,
        Ea: ["a", "input", "button"],
        bb: {
            id: "data-hm-id",
            ia: "data-hm-class",
            Ba: "data-hm-xpath",
            content: "data-hm-content",
            za: "data-hm-tag",
            link: "data-hm-link"
        },
        Da: "data-hm-enabled",
        Ca: "data-hm-disabled",
        Kb: "https://hmcdn.baidu.com/static/tongji/plugins/",
        Oa: ["UrlChangeTracker"]
    };
    (function () {
        var b = {
            C: {}, d: function (a, b) {
                this.C[a] = this.C[a] || [];
                this.C[a].push(b)
            }, I: function (a, b) {
                this.C[a] = this.C[a] || [];
                for (var d = this.C[a].length, f = 0; f < d; f++) this.C[a][f](b)
            }
        };
        return h.B = b
    })();
    (function () {
        function b(b, d) {
            var f = document.createElement("script");
            f.charset = "utf-8";
            a.e(d, "Function") && (f.readyState ? f.onreadystatechange = function () {
                if ("loaded" === f.readyState || "complete" === f.readyState) f.onreadystatechange = w, d()
            } : f.onload = function () {
                d()
            });
            f.src = b;
            var g = document.getElementsByTagName("script")[0];
            g.parentNode.insertBefore(f, g)
        }

        var a = mt.lang;
        return h.load = b
    })();
    (function () {
        function b() {
            var d = "";
            if (h.c.b.nv) {
                d = encodeURIComponent(document.referrer);
                try {
                    window.sessionStorage ? e.set("Hm_from_" + c.id, d) : a.set("Hm_from_" + c.id, d, 864E5)
                } catch (b) {
                }
            } else try {
                d = (window.sessionStorage ? e.get("Hm_from_" + c.id) : a.get("Hm_from_" + c.id)) || ""
            } catch (g) {
            }
            return d
        }

        var a = mt.localStorage, e = mt.sessionStorage;
        return h.mb = b
    })();
    (function () {
        var b = mt.cookie, a = mt.localStorage, e = mt.sessionStorage, d = {
            getData: function (d) {
                try {
                    return b.get(d) || e.get(d) || a.get(d)
                } catch (g) {
                }
            }, setData: function (f, g, m) {
                try {
                    b.set(f, g, {domain: d.M(), path: d.W(), L: m}), m ? a.set(f, g, m) : e.set(f, g)
                } catch (l) {
                }
            }, Mb: function (f) {
                try {
                    b.set(f, "", {domain: d.M(), path: d.W(), L: -1}), e.remove(f), a.remove(f)
                } catch (g) {
                }
            }, Q: function (a, d) {
                a = "." + a.replace(/:\d+/, "");
                d = "." + d.replace(/:\d+/, "");
                var b = a.indexOf(d);
                return -1 < b && b + d.length === a.length
            }, ba: function (a, d) {
                a = a.replace(/^https?:\/\//,
                    "");
                return 0 === a.indexOf(d)
            }, M: function () {
                for (var a = document.location.hostname, b = 0, e = c.dm.length; b < e; b++) if (d.Q(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            }, W: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var e = c.dm[a];
                    if (-1 < e.indexOf("/") && d.ba(document.location.href, e)) return e.replace(/^[^/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            }
        };
        return h.la = d
    })();
    (function () {
        var b = mt.lang, a = mt.o, e = h.la,
            d = {pageview: {}, session: {}, autoEventTracking: {}, customEvent: {}, user: {}},
            f = {user: 1, session: 2, pageview: 3, autoEventTracking: 3, customEvent: 3, others: 3},
            g = ["session", "user"], m = "Hm_up_" + c.id, l = {
                init: function () {
                    l.Gb()
                }, Gb: function () {
                    try {
                        var f = a.parse(decodeURIComponent(e.getData(m)));
                        b.e(f, "Object") && (d.user = f)
                    } catch (g) {
                    }
                }, D: function (a) {
                    var b = {};
                    d[a] !== r && (b = d[a]);
                    a = this.ra();
                    for (var f in b) b.hasOwnProperty(f) && (a[f] = b[f]);
                    return a
                }, ra: function () {
                    for (var a = {}, b, f = g.length -
                        1; 0 <= f; f--) {
                        b = d[g[f]];
                        for (var e in b) b.hasOwnProperty(e) && (a[e] = b[e])
                    }
                    return a
                }, setProperty: function (f, e, g) {
                    var q = d[f];
                    if (b.e(q, "Object") && b.e(e, "Object")) {
                        for (var m in e) if (e.hasOwnProperty(m)) {
                            var k = b.g(String(m));
                            if (g || !((/^_/.test(k) || /_$/.test(k)) && "_iden" !== k)) {
                                var p = e[m];
                                if (p == w) delete q[k]; else {
                                    if (b.e(p, "Object") || b.e(p, "Array")) p = a.stringify(p);
                                    p = b.g(String(p));
                                    l.Hb(f, k, p) && (q[k] = {value: p, scope: l.Ja(f)})
                                }
                            }
                        }
                        "user" === f && l.wa()
                    }
                }, s: function (a) {
                    a !== r && ("userId" === a && b.e(d.user, "Object") ? (delete d.user.uid_,
                        l.wa()) : "user" === a && b.e(d.user, "Object") ? (a = d.user.uid_, d.user = a === r ? {} : {uid_: a}, l.wa()) : d[a] !== r && (d[a] = {}))
                }, wa: function () {
                    try {
                        e.setData(m, encodeURIComponent(a.stringify(d.user)), c.age)
                    } catch (b) {
                    }
                }, Hb: function (a, b, f) {
                    var e = t, g = d[a];
                    if (256 < encodeURIComponent(String(b)).length || 256 < encodeURIComponent(String(f)).length) e = x; else {
                        var k = g[b];
                        g[b] = {value: f, scope: l.Ja(a)};
                        a = l.T(l.D(a));
                        2048 < encodeURIComponent(a).length && (k !== r ? g[b] = k : delete g[b], e = x)
                    }
                    return e
                }, T: function (a) {
                    var b = [], d, f;
                    for (f in a) a.hasOwnProperty(f) &&
                    (d = [f, a[f].value], (1 === a[f].scope || 2 === a[f].scope) && d.push(a[f].scope), b.push(d.join("*")));
                    return b.join("!")
                }, Ja: function (a) {
                    a = f[a];
                    return a !== r ? a : f.others
                }
            };
        return h.V = l
    })();
    (function () {
        var b = mt.lang, a = mt.f, e = {
            U: function (b, f) {
                return function (g) {
                    var m = g.target || g.srcElement;
                    if (m) {
                        var l = m.getAttribute(b.ea);
                        g = g.clientX + ":" + g.clientY;
                        if (l && l === g) m.removeAttribute(b.ea); else if (f && 0 < f.length && (m = a.ub(m)) && m.length) if (l = m.length, g = m[m.length - 1], 1E4 > l * g.split(">").length) for (g = 0; g < l; g++) e.Sa(b, m[g]); else e.Sa(b, g)
                    }
                }
            }, Sa: function (a, f) {
                for (var e = {}, m = String(f).split(">").length, l = 0; l < m; l++) e[f] = "", f = f.substring(0, f.lastIndexOf(">"));
                a && (b.e(a, "Object") && a.Fa) && a.Fa(e)
            }, Lb: function (a,
                             b) {
                return function (e) {
                    (e.target || e.srcElement).setAttribute(a.ea, e.clientX + ":" + e.clientY);
                    a && a.r && (b ? a.r(b) : a.r("#" + encodeURIComponent(this.id), e.type))
                }
            }
        };
        return h.na = e
    })();
    (function () {
        var b = mt.f, a = mt.o, e = mt.event, d = mt.lang, f = h.na, g = h.V, m = g.T, l = {
            ea: "HM_ce", Wa: function () {
                if (c.cetrk && c.cetrk.length) {
                    e.d(document, "click", f.U(l, c.cetrk));
                    for (var d = 0, g = c.cetrk.length; d < g; d++) {
                        var m;
                        try {
                            m = a.parse(decodeURIComponent(String(c.cetrk[d])))
                        } catch (q) {
                            m = {}
                        }
                        var v = m.p || "";
                        -1 === v.indexOf(">") && (0 === v.indexOf("#") && (v = v.substring(1)), (v = b.oa(v)) && e.d(v, "click", f.Lb(l, m)))
                    }
                }
            }, Fa: function (b) {
                if (c.cetrk && c.cetrk.length) for (var d = 0, f = c.cetrk.length; d < f; d++) {
                    var e;
                    try {
                        e = a.parse(decodeURIComponent(String(c.cetrk[d])))
                    } catch (g) {
                        e =
                            {}
                    }
                    b.hasOwnProperty(e.p) && l.r(e)
                }
            }, r: function (a) {
                h.c.b.et = 7;
                var f = a && a.k || "", f = d.g(f), e = {};
                if (a && a.a && d.e(a.a, "Object")) for (var l in a.a) if (a.a.hasOwnProperty(l)) {
                    var v = b.ob(a.a[l] || ""), v = v ? b.Ha(v, x) : "";
                    e[l] = v
                }
                e._iden = f;
                g.setProperty("customEvent", e);
                h.c.b.ep = "";
                h.c.b.p = m(g.D("customEvent"));
                h.c.i();
                h.c.b.p = "";
                g.s("customEvent")
            }
        };
        h.B.d("pv-b", l.Wa);
        return l
    })();
    (function () {
        var b = mt.lang, a = mt.f, e = mt.event, d = mt.h, f = h.w, g = h.B, m = h.V, l = m.T, n = +new Date, s = [],
            u = {
                U: function () {
                    return function (d) {
                        if (h.c && h.c.P && c.aet && c.aet.length) {
                            var e = d.target || d.srcElement;
                            if (e) {
                                var k = h.c.Ea, p = a.getAttribute(e, f.Da) != w ? t : x;
                                if (a.getAttribute(e, f.Ca) == w) if (p) u.ga(u.pa(e, d)); else {
                                    var z = a.X(e);
                                    if (b.J(k, "*") || b.J(k, z)) u.ga(u.pa(e, d)); else for (; e.parentNode != w;) {
                                        var p = e.parentNode, z = a.X(p), y = "a" === z && b.J(k, "a") ? t : x,
                                            z = "button" === z && b.J(k, "button") ? t : x,
                                            B = a.getAttribute(p, f.Da) != w ? t : x;
                                        if (a.getAttribute(p, f.Ca) == w && (y || z || B)) {
                                            u.ga(u.pa(p, d));
                                            break
                                        }
                                        e = e.parentNode
                                    }
                                }
                            }
                        }
                    }
                }, pa: function (e, g) {
                    var k = {}, p = f.bb;
                    k.id = a.getAttribute(e, p.id) || a.getAttribute(e, "id") || "";
                    k.ia = a.getAttribute(e, p.ia) || a.getAttribute(e, "class") || "";
                    k.Ba = a.getAttribute(e, p.Ba) || a.vb(e);
                    k.content = a.getAttribute(e, p.content) || a.Ha(e, t);
                    k.za = a.getAttribute(e, p.za) || a.X(e);
                    k.link = a.getAttribute(e, p.link) || a.getAttribute(e, "href") || "";
                    k.type = g.type || "click";
                    p = b.ta(e.offsetTop) ? e.offsetTop : 0;
                    "click" === g.type ? p = d.Ma ? g.clientY +
                        Math.max(document.documentElement.scrollTop, document.body.scrollTop) : g.pageY : "touchend" === g.type && (g.va && b.e(g.va.changedTouches, "Array") && g.va.changedTouches.length) && (p = g.va.changedTouches[0].pageY);
                    k.Ub = p;
                    return k
                }, ga: function (a) {
                    var d = b.g;
                    a = [+new Date - (h.c.F !== r ? h.c.F : n), d(a.id), d(a.ia), d(a.za), d(a.Ba), d(a.link), d(a.content), a.type, a.Ub].join("*");
                    u.ha(a);
                    b.e(this.S(), "Function") && this.S()()
                }, ha: function (a) {
                    a.length > f.ka || (encodeURIComponent(s.join("!") + a).length > f.ka && (u.r(s.join("!")), s = []),
                        s.push(a))
                }, r: function (a) {
                    h.c.b.et = 5;
                    h.c.b.ep = a;
                    h.c.b.p = l(m.D("autoEventTracking"));
                    h.c.i();
                    h.c.b.p = ""
                }, S: function () {
                    return function () {
                        s && s.length && (u.r(s.join("!")), s = [])
                    }
                }
            };
        b.aa(c.aet) && "" !== c.aet && g.d("pv-b", function () {
            e.d(document, "click", u.U());
            "ontouchend" in document && e.d(window, "touchend", u.U());
            e.d(window, "unload", u.S())
        });
        return u
    })();
    (function () {
        var b = mt.event, a = mt.h, e = h.w, d = h.B, f = +new Date, g = [], m = w, l = {
            hb: function () {
                return function () {
                    h.c && (h.c.P && c.aet && c.aet.length) && (window.clearTimeout(m), m = window.setTimeout(function () {
                        l.Ya(a.Y() + a.O())
                    }, 150))
                }
            }, Ya: function (a) {
                l.ha([+new Date - (h.c.F !== r ? h.c.F : f), a].join("*"))
            }, ha: function (a) {
                if (encodeURIComponent(g.join("!") + a).length > e.ka || 3 < g.length) l.r(g.join("!")), g = [];
                g.push(a)
            }, r: function (b) {
                h.c.b.et = 6;
                h.c.b.vh = a.O();
                h.c.b.ep = b;
                h.c.i()
            }, S: function () {
                return function () {
                    g && g.length && (l.r(g.join("!")),
                        g = [])
                }
            }
        };
        mt.lang.aa(c.aet) && "" !== c.aet && d.d("pv-b", function () {
            b.d(window, "scroll", l.hb());
            b.d(window, "unload", l.S())
        });
        return l
    })();
    (function () {
        var b = mt.f, a = h.w, e = h.load, d = h.mb;
        h.B.d("pv-b", function () {
            var f = a.protocol + "//crs.baidu.com/";
            c.rec && b.Qa(function () {
                for (var g = 0, m = c.rp.length; g < m; g++) {
                    var l = c.rp[g][0], n = c.rp[g][1], s = b.oa("hm_t_" + l);
                    if (n && !(2 == n && !s || s && "" !== s.innerHTML)) s = "", s = Math.round(Math.random() * a.ca), s = 4 == n ? f + "hl.js?" + ["siteId=" + c.id, "planId=" + l, "rnd=" + s].join("&") : f + "t.js?" + ["siteId=" + c.id, "planId=" + l, "from=" + d(), "referer=" + encodeURIComponent(document.referrer), "title=" + encodeURIComponent(document.title), "rnd=" +
                    s].join("&"), e(s)
                }
            })
        })
    })();
    (function () {
        function b() {
            return function () {
                h.c.b.nv = 0;
                h.c.b.st = 4;
                h.c.b.et = 3;
                h.c.b.ep = h.ma.tb() + "," + h.ma.pb();
                h.c.i()
            }
        }

        function a() {
            clearTimeout(y);
            var b;
            p && (b = "visible" == document[p]);
            z && (b = !document[z]);
            l = "undefined" == typeof b ? t : b;
            if ((!m || !n) && l && s) k = t, q = +new Date; else if (m && n && (!l || !s)) k = x, v += +new Date - q;
            m = l;
            n = s;
            y = setTimeout(a, 100)
        }

        function e(a) {
            var p = document, b = "";
            if (a in p) b = a; else for (var d = ["webkit", "ms", "moz", "o"], y = 0; y < d.length; y++) {
                var e = d[y] + a.charAt(0).toUpperCase() + a.slice(1);
                if (e in p) {
                    b =
                        e;
                    break
                }
            }
            return b
        }

        function d(b) {
            if (!("focus" == b.type || "blur" == b.type) || !(b.target && b.target != window)) s = "focus" == b.type || "focusin" == b.type ? t : x, a()
        }

        var f = mt.event, g = h.B, m = t, l = t, n = t, s = t, u = +new Date, q = u, v = 0, k = t,
            p = e("visibilityState"), z = e("hidden"), y;
        a();
        (function () {
            var b = p.replace(/[vV]isibilityState/, "visibilitychange");
            f.d(document, b, a);
            f.d(window, "pageshow", a);
            f.d(window, "pagehide", a);
            "object" == typeof document.onfocusin ? (f.d(document, "focusin", d), f.d(document, "focusout", d)) : (f.d(window, "focus", d),
                f.d(window, "blur", d))
        })();
        h.ma = {
            tb: function () {
                return +new Date - u
            }, pb: function () {
                return k ? +new Date - q + v : v
            }
        };
        g.d("pv-b", function () {
            f.d(window, "unload", b())
        });
        g.d("duration-send", b());
        g.d("duration-done", function () {
            q = u = +new Date;
            v = 0
        });
        return h.ma
    })();
    (function () {
        var b = mt.lang, a = h.w, e = h.load, d = {
            Fb: function (d) {
                if ((window._dxt === r || b.e(window._dxt, "Array")) && "undefined" !== typeof h.c) {
                    var g = h.c.M();
                    e([a.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(g)].join(""), d)
                }
            }, Tb: function (a) {
                if (b.e(a, "String") || b.e(a, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", a])
            }
        };
        return h.fb = d
    })();
    (function () {
        function b(a, b, d, e) {
            if (!(a === r || b === r || e === r)) {
                if ("" === a) return [b, d, e].join("*");
                a = String(a).split("!");
                for (var f, g = x, k = 0; k < a.length; k++) if (f = a[k].split("*"), String(b) === f[0]) {
                    f[1] = d;
                    f[2] = e;
                    a[k] = f.join("*");
                    g = t;
                    break
                }
                g || a.push([b, d, e].join("*"));
                return a.join("!")
            }
        }

        function a(b) {
            for (var e in b) if ({}.hasOwnProperty.call(b, e)) {
                var y = b[e];
                d.e(y, "Object") || d.e(y, "Array") ? a(y) : b[e] = String(y)
            }
        }

        var e = mt.url, d = mt.lang, f = mt.o, g = mt.h, m = h.w, l = h.B, n = h.fb, s = h.load, u = h.la, q = h.V,
            v = q.T, k = {
                R: [], da: 0, Na: x,
                A: {Aa: "", page: ""}, init: function () {
                    k.j = 0;
                    q.init();
                    l.d("pv-b", function () {
                        k.gb();
                        k.ib()
                    });
                    l.d("pv-d", function () {
                        k.jb();
                        k.A.page = ""
                    });
                    l.d("stag-b", function () {
                        h.c.b.api = k.j || k.da ? k.j + "_" + k.da : "";
                        h.c.b.ct = [decodeURIComponent(u.getData("Hm_ct_" + c.id) || ""), k.A.Aa, k.A.page].join("!")
                    });
                    l.d("stag-d", function () {
                        h.c.b.api = 0;
                        k.j = 0;
                        k.da = 0
                    })
                }, gb: function () {
                    var a = window._hmt || [];
                    if (!a || d.e(a, "Array")) window._hmt = {
                        id: c.id, cmd: {}, push: function () {
                            for (var a = window._hmt, b = 0; b < arguments.length; b++) {
                                var p = arguments[b];
                                d.e(p, "Array") && (a.cmd[a.id].push(p), "_setAccount" === p[0] && (1 < p.length && /^[0-9a-f]{32}$/.test(p[1])) && (p = p[1], a.id = p, a.cmd[p] = a.cmd[p] || []))
                            }
                        }
                    }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
                }, ib: function () {
                    var a = window._hmt;
                    if (a && a.cmd && a.cmd[c.id]) for (var b = a.cmd[c.id], d = /^_track(Event|MobConv|Order|RTEvent)$/, e = 0, f = b.length; e < f; e++) {
                        var g = b[e];
                        d.test(g[0]) ? k.R.push(g) : k.xa(g)
                    }
                    a.cmd[c.id] = {push: k.xa}
                }, jb: function () {
                    if (0 < k.R.length) for (var a = 0, b = k.R.length; a < b; a++) k.xa(k.R[a]);
                    k.R =
                        w
                }, xa: function (a) {
                    var b = a[0];
                    if (k.hasOwnProperty(b) && d.e(k[b], "Function")) k[b](a)
                }, _setAccount: function (a) {
                    1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (k.j |= 1)
                }, _setAutoPageview: function (a) {
                    if (1 < a.length && (a = a[1], x === a || t === a)) k.j |= 2, h.c.Ka = a
                }, _trackPageview: function (a) {
                    if (1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
                        k.j |= 4;
                        h.c.b.sn = h.c.Ia();
                        h.c.b.et = 0;
                        h.c.b.ep = "";
                        h.c.b.vl = g.Y() + g.O();
                        h.c.b.kb = 0;
                        h.c.sa ? (h.c.b.nv = 0, h.c.b.st = 4) : h.c.sa = t;
                        var b = h.c.b.u, d = h.c.b.su;
                        h.c.b.u = m.protocol + "//" + document.location.host +
                            a[1];
                        k.Na || (h.c.b.su = document.location.href);
                        h.c.b.p = v(q.D("pageview"));
                        h.c.i();
                        h.c.b.u = b;
                        h.c.b.su = d;
                        h.c.b.p = "";
                        h.c.F = +new Date;
                        q.s("pageview")
                    }
                }, _trackEvent: function (a) {
                    2 < a.length && (k.j |= 8, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 4, h.c.b.ep = d.g(a[1]) + "*" + d.g(a[2]) + (a[3] ? "*" + d.g(a[3]) : "") + (a[4] ? "*" + d.g(a[4]) : ""), h.c.b.p = v(q.ra()), h.c.i(), h.c.b.p = "")
                }, _setCustomVar: function (a) {
                    if (!(4 > a.length)) {
                        var b = a[1], e = a[4] || 3;
                        if (0 < b && 6 > b && 0 < e && 4 > e) {
                            k.da++;
                            for (var f = (h.c.b.cv || "*").split("!"), g = f.length; g < b - 1; g++) f.push("*");
                            f[b - 1] = e + "*" + d.g(a[2]) + "*" + d.g(a[3]);
                            h.c.b.cv = f.join("!");
                            a = h.c.b.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                            "" !== a ? u.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : u.Mb("Hm_cv_" + c.id)
                        }
                    }
                }, _setUserTag: function (a) {
                    if (!(3 > a.length)) {
                        var e = d.g(a[1]);
                        a = d.g(a[2]);
                        if (e !== r && a !== r) {
                            var y = decodeURIComponent(u.getData("Hm_ct_" + c.id) || ""), y = b(y, e, 1, a);
                            u.setData("Hm_ct_" + c.id, encodeURIComponent(y), c.age)
                        }
                    }
                }, _setVisitTag: function (a) {
                    if (!(3 > a.length)) {
                        var e = d.g(a[1]);
                        a = d.g(a[2]);
                        if (e !==
                            r && a !== r) {
                            var y = k.A.Aa, y = b(y, e, 2, a);
                            k.A.Aa = y
                        }
                    }
                }, _setPageTag: function (a) {
                    if (!(3 > a.length)) {
                        var e = d.g(a[1]);
                        a = d.g(a[2]);
                        if (e !== r && a !== r) {
                            var y = k.A.page, y = b(y, e, 3, a);
                            k.A.page = y
                        }
                    }
                }, _setReferrerOverride: function (a) {
                    1 < a.length && (h.c.b.su = a[1].charAt && "/" === a[1].charAt(0) ? m.protocol + "//" + window.location.host + a[1] : a[1], k.Na = t)
                }, _trackOrder: function (b) {
                    b = b[1];
                    d.e(b, "Object") && (a(b), k.j |= 16, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 94, h.c.b.ep = f.stringify(b), h.c.b.p = v(q.ra()), h.c.i(), h.c.b.p = "")
                }, _trackMobConv: function (a) {
                    if (a =
                        {
                            webim: 1,
                            tel: 2,
                            map: 3,
                            sms: 4,
                            callback: 5,
                            share: 6
                        }[a[1]]) k.j |= 32, h.c.b.et = 93, h.c.b.ep = a, h.c.i()
                }, _setDataxId: function (a) {
                    a = a[1];
                    n.Fb();
                    n.Tb(a)
                }, _setUserId: function (a) {
                    a = a[1];
                    if (a !== r && (d.aa(a) || d.ta(a))) {
                        var b = q.D("user").uid_;
                        if (!(b && b.value === d.g(String(a)))) {
                            var b = h.c.b.p, e = h.c.b.ep;
                            h.c.b.et = 8;
                            h.c.b.ep = "";
                            h.c.b.p = "uid_*" + d.g(String(a));
                            h.c.i();
                            var f = {};
                            f.uid_ = a;
                            q.setProperty("user", f, t);
                            h.c.b.p = b;
                            h.c.b.ep = e
                        }
                    }
                }, _clearUserId: function (a) {
                    1 < a.length && t === a[1] && q.s("userId")
                }, _setUserProperty: function (a) {
                    a =
                        a[1];
                    d.e(a, "Object") && q.setProperty("user", a)
                }, _clearUserProperty: function (a) {
                    1 < a.length && t === a[1] && q.s("user")
                }, _setSessionProperty: function (a) {
                    a = a[1];
                    d.e(a, "Object") && q.setProperty("session", a)
                }, _clearSessionProperty: function (a) {
                    1 < a.length && t === a[1] && q.s("session")
                }, _setPageviewProperty: function (a) {
                    a = a[1];
                    d.e(a, "Object") && q.setProperty("pageview", a)
                }, _clearPageviewProperty: function (a) {
                    1 < a.length && t === a[1] && q.s("pageview")
                }, _setAutoEventTrackingProperty: function (a) {
                    a = a[1];
                    d.e(a, "Object") && q.setProperty("autoEventTracking",
                        a)
                }, _clearAutoEventTrackingProperty: function (a) {
                    1 < a.length && t === a[1] && q.s("autoEventTracking")
                }, _setAutoTracking: function (a) {
                    if (1 < a.length && (a = a[1], x === a || t === a)) h.c.La = a
                }, _setAutoEventTracking: function (a) {
                    if (1 < a.length && (a = a[1], x === a || t === a)) h.c.P = a
                }, _trackPageDuration: function (a) {
                    1 < a.length ? (a = a[1], 2 === String(a).split(",").length && (h.c.b.et = 3, h.c.b.ep = a, h.c.i())) : l.I("duration-send");
                    l.I("duration-done")
                }, _require: function (a) {
                    1 < a.length && (a = a[1], m.$a.test(e.N(a)) && s(a))
                }, _providePlugin: function (a) {
                    if (1 <
                        a.length) {
                        var b = window._hmt, e = a[1];
                        a = a[2];
                        if (d.J(m.Oa, e) && d.e(a, "Function") && (b.plugins = b.plugins || {}, b.G = b.G || {}, b.plugins[e] = a, b.z = b.z || [], a = b.z.slice(), e && a.length && a[0][1] === e)) for (var f = 0, g = a.length; f < g; f++) {
                            var k = a[f][2] || {};
                            if (b.plugins[e] && !b.G[e]) b.G[e] = new b.plugins[e](k), b.z.shift(); else break
                        }
                    }
                }, _requirePlugin: function (a) {
                    if (1 < a.length) {
                        var b = window._hmt, e = a[1], f = a[2] || {};
                        if (d.J(m.Oa, e)) if (b.plugins = b.plugins || {}, b.G = b.G || {}, b.plugins[e] && !b.G[e]) b.G[e] = new b.plugins[e](f); else {
                            b.z = b.z ||
                                [];
                            for (var f = 0, g = b.z.length; f < g; f++) if (b.z[f][1] === e) return;
                            b.z.push(a);
                            k._require([w, m.Kb + e + ".js"])
                        }
                    }
                }, _trackCustomEvent: function (a) {
                    if (1 < a.length) {
                        var b = a[1];
                        a = a[2];
                        d.e(a, "Object") && (a._iden = b, q.setProperty("customEvent", a));
                        h.c.b.et = 7;
                        h.c.b.ep = "";
                        h.c.b.p = v(q.D("customEvent"));
                        h.c.i();
                        h.c.b.p = "";
                        q.s("customEvent")
                    }
                }
            };
        k.init();
        h.ab = k;
        return h.ab
    })();
    (function () {
        function b() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = t, this.b = {}, this.La = this.Ka = t, this.P = k.P, this.Ea = f.aa(c.aet) && 0 < c.aet.length ? c.aet.split(",") : "", this.sa = x, this.init())
        }

        var a = mt.url, e = mt.Ta, d = mt.ya, f = mt.lang, g = mt.cookie, m = mt.h, l = mt.sessionStorage, n = mt.o,
            s = mt.event, u = h.la, q = h.V, v = q.T, k = h.w, p = h.load, z = h.B;
        b.prototype = {
            Q: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            }, ba: function (a,
                             b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, Z: function (b) {
                for (var d = 0; d < c.dm.length; d++) if (-1 < c.dm[d].indexOf("/")) {
                    if (this.ba(b, c.dm[d])) return t
                } else {
                    var e = a.N(b);
                    if (e && this.Q(e, c.dm[d])) return t
                }
                return x
            }, M: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) if (this.Q(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            }, W: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.ba(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/,
                        "$1") + "/"
                }
                return "/"
            }, wb: function () {
                if (!document.referrer) return k.H - k.K > c.vdur ? 1 : 4;
                var b = x;
                this.Z(document.referrer) && this.Z(document.location.href) ? b = t : (b = a.N(document.referrer), b = this.Q(b || "", document.location.hostname));
                return b ? k.H - k.K > c.vdur ? 1 : 4 : 3
            }, Rb: function () {
                var a, b, d, e, f;
                k.K = u.getData("Hm_lpvt_" + c.id) || 0;
                13 === k.K.length && (k.K = Math.round(k.K / 1E3));
                b = this.wb();
                a = 4 !== b ? 1 : 0;
                if (d = u.getData("Hm_lvt_" + c.id)) {
                    e = d.split(",");
                    for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] / 1E3));
                    for (; 2592E3 < k.H - e[0];) e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(k.H); 4 < e.length;) e.shift();
                    d = e.join(",");
                    e = e[e.length - 1]
                } else d = k.H, e = "", f = 1;
                u.setData("Hm_lvt_" + c.id, d, c.age);
                u.setData("Hm_lpvt_" + c.id, k.H);
                d = g.Ib(this.M(), this.W());
                if (0 === c.nv && this.Z(document.location.href) && ("" === document.referrer || this.Z(document.referrer))) a = 0, b = 4;
                this.b.nv = a;
                this.b.st = b;
                this.b.cc = d;
                this.b.lt = e;
                this.b.lv = f
            }, Qb: function () {
                for (var a = [], b = this.b.et, d = +new Date, e = 0, f = k.Ua.length; e < f; e++) {
                    var g = k.Ua[e], l = this.b[g];
                    "undefined" !== typeof l && "" !== l && ("tt" !== g || "tt" === g && 0 === b) && (("ct" !== g || "ct" === g && 0 === b) && ("kb" !== g || "kb" === g && 3 === b)) && a.push(g + "=" + encodeURIComponent(l))
                }
                switch (b) {
                    case 0:
                        this.b.rt && a.push("rt=" + encodeURIComponent(this.b.rt));
                        break;
                    case 5:
                        a.push("_lpt=" + this.F);
                        a.push("_ct=" + d);
                        break;
                    case 6:
                        a.push("_lpt=" + this.F);
                        a.push("_ct=" + d);
                        break;
                    case 90:
                        this.b.rt && a.push("rt=" + this.b.rt)
                }
                return a.join("&")
            }, Sb: function () {
                this.Rb();
                this.b.si = c.id;
                this.b.sn = this.Ia();
                this.b.su = document.referrer;
                this.b.hh =
                    window.location.hash;
                this.b.ds = m.Nb;
                this.b.cl = m.colorDepth + "-bit";
                this.b.ln = String(m.language).toLowerCase();
                this.b.ja = m.javaEnabled ? 1 : 0;
                this.b.ck = m.cookieEnabled ? 1 : 0;
                this.b.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.b.fl = d.yb();
                this.b.v = "1.2.61";
                this.b.cv = decodeURIComponent(u.getData("Hm_cv_" + c.id) || "");
                this.b.tt = document.title || "";
                this.b.vl = m.Y() + m.O();
                var b = document.location.href;
                this.b.cm = a.m(b, k.Cb) || "";
                this.b.cp = a.m(b, k.Db) || a.m(b, k.Xb) || "";
                this.b.cw = a.m(b, k.Bb) || a.m(b, k.Zb) || "";
                this.b.ci = a.m(b,
                    k.zb) || a.m(b, k.Wb) || "";
                this.b.cf = a.m(b, k.Eb) || a.m(b, k.Yb) || "";
                this.b.cu = a.m(b, k.Ab) || a.m(b, k.Vb) || ""
            }, init: function () {
                try {
                    this.Sb(), 0 === this.b.nv ? this.Pb() : this.Ga(), h.c = this, this.eb(), this.cb(), z.I("pv-b"), this.Ob()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    e.log(k.ua + "//" + k.Pa + "?" + b.join("&"))
                }
            }, Ob: function () {
                function a() {
                    z.I("pv-d")
                }

                this.Ka ? (this.sa = t, this.b.et = 0, this.b.ep =
                    "", this.b.p = v(q.D("pageview")), this.b.vl = m.Y() + m.O(), this.i(a), this.b.p = "") : a();
                this.F = +new Date;
                q.s("pageview")
            }, i: function (a) {
                if (this.La) {
                    var b = this;
                    b.b.rnd = Math.round(Math.random() * k.ca);
                    z.I("stag-b");
                    var d = k.ua + "//" + k.Pa + "?" + b.Qb();
                    z.I("stag-d");
                    b.Za(d);
                    e.log(d, function (d) {
                        b.Ra(d);
                        f.e(a, "Function") && a.call(b)
                    })
                }
            }, eb: function () {
                var b = document.location.hash.substring(1), d = RegExp(c.id),
                    e = a.N(document.referrer) === k.Va ? 1 : 0, f = a.m(b, "jn"),
                    g = /^heatlink$|^select$|^pageclick$/.test(f);
                b && (d.test(b) && e &&
                    g) && (this.b.rnd = Math.round(Math.random() * k.ca), b = document.createElement("script"), b.setAttribute("type", "text/javascript"), b.setAttribute("charset", "utf-8"), b.setAttribute("src", k.protocol + "//" + c.js + f + ".js?" + this.b.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(b, f))
            }, cb: function () {
                if (window.postMessage && window.self !== window.parent) {
                    var b = this;
                    s.d(window, "message", function (d) {
                        if (a.N(d.origin) === k.Va) {
                            d = d.data || {};
                            var e = d.jn || "", f = /^customevent$/.test(e);
                            if (RegExp(c.id).test(d.sd ||
                                "") && f) b.b.rnd = Math.round(Math.random() * k.ca), p(k.protocol + "//" + c.js + e + ".js?" + b.b.rnd)
                        }
                    });
                    window.parent.postMessage({
                        id: c.id,
                        url: document.location.href,
                        status: "__Messenger__hmLoaded"
                    }, "*")
                }
            }, Za: function (a) {
                var b;
                try {
                    b = n.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                var e = this.b.u ? "" : "&u=" + encodeURIComponent(document.location.href);
                b.push(a.replace(/^https?:\/\//, "") + e);
                l.set("Hm_unsent_" + c.id, n.stringify(b))
            }, Ra: function (a) {
                var b;
                try {
                    b = n.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) {
                    a =
                        a.replace(/^https?:\/\//, "");
                    for (var e = 0; e < b.length; e++) if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/, "")) {
                        b.splice(e, 1);
                        break
                    }
                    b.length ? l.set("Hm_unsent_" + c.id, n.stringify(b)) : this.Ga()
                }
            }, Ga: function () {
                l.remove("Hm_unsent_" + c.id)
            }, Pb: function () {
                var a = this, b;
                try {
                    b = n.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) for (var f = function (b) {
                    e.log(k.ua + "//" + b, function (b) {
                        a.Ra(b)
                    })
                }, g = 0; g < b.length; g++) f(b[g])
            }, Ia: function () {
                return Math.round(+new Date / 1E3) % 65535
            }
        };
        return new b
    })();
    (function () {
        var b = mt.event, a = mt.lang, e = h.w;
        if (c.kbtrk && "undefined" !== typeof h.c) {
            h.c.b.kb = a.ta(h.c.b.kb) ? h.c.b.kb : 0;
            var d = function () {
                h.c.b.et = 85;
                h.c.b.ep = h.c.b.kb;
                h.c.i()
            };
            b.d(document, "keyup", function () {
                h.c.b.kb++
            });
            b.d(window, "unload", function () {
                d()
            });
            setInterval(d, e.Jb)
        }
    })();
    var C = h.w, D = h.load;
    c.pt && D([C.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
    (function () {
        var b = mt.h, a = mt.lang, e = mt.event, d = mt.o;
        if ("undefined" !== typeof h.c && (c.med || (!b.Ma || 7 < b.rb()) && c.cvcc)) {
            var f, g, m, l, n = function (a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }, s = function (a, b) {
                for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === x) return x
            }, u = function (b, e) {
                var g = {};
                g.n = f;
                g.t = "clk";
                g.v = b;
                if (e) {
                    var k = e.getAttribute("href"), l = e.getAttribute("onclick") ? "" + e.getAttribute("onclick") : w,
                        n = e.getAttribute("id") || "";
                    m.test(k) ? (g.sn =
                        "mediate", g.snv = k) : a.e(l, "String") && m.test(l) && (g.sn = "wrap", g.snv = l);
                    g.id = n
                }
                h.c.b.et = 86;
                h.c.b.ep = d.stringify(g);
                h.c.i();
                for (g = +new Date; 400 >= +new Date - g;) ;
            };
            if (c.med) g = "/zoosnet", f = "swt", m = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, l = {
                click: function () {
                    for (var a = [], b = n(document.getElementsByTagName("a")), b = [].concat.apply(b, n(document.getElementsByTagName("area"))), b = [].concat.apply(b, n(document.getElementsByTagName("img"))), d, e, f = 0, g = b.length; f < g; f++) d = b[f], e =
                        d.getAttribute("onclick"), d = d.getAttribute("href"), (m.test(e) || m.test(d)) && a.push(b[f]);
                    return a
                }
            }; else if (c.cvcc) {
                g = "/other-comm";
                f = "other";
                m = c.cvcc.q || r;
                var q = c.cvcc.id || r;
                l = {
                    click: function () {
                        for (var a = [], b = n(document.getElementsByTagName("a")), b = [].concat.apply(b, n(document.getElementsByTagName("area"))), b = [].concat.apply(b, n(document.getElementsByTagName("img"))), d, e, f, g = 0, k = b.length; g < k; g++) d = b[g], m !== r ? (e = d.getAttribute("onclick"), f = d.getAttribute("href"), q ? (d = d.getAttribute("id"), (m.test(e) ||
                            m.test(f) || q.test(d)) && a.push(b[g])) : (m.test(e) || m.test(f)) && a.push(b[g])) : q !== r && (d = d.getAttribute("id"), q.test(d) && a.push(b[g]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof l && "undefined" !== typeof m) {
                var v;
                g += /\/$/.test(g) ? "" : "/";
                var k = function (b, d) {
                    if (v === d) return u(g + b, d), x;
                    if (a.e(d, "Array") || a.e(d, "NodeList")) for (var e = 0, f = d.length; e < f; e++) if (v === d[e]) return u(g + b + "/" + (e + 1), d[e]), x
                };
                e.d(document, "mousedown", function (b) {
                    b = b || window.event;
                    v = b.target || b.srcElement;
                    var d = {};
                    for (s(l, function (b, e) {
                        d[b] = a.e(e,
                            "Function") ? e() : document.getElementById(e)
                    }); v && v !== document && s(d, k) !== x;) v = v.parentNode
                })
            }
        }
    })();
    (function () {
        var b = mt.f, a = mt.lang, e = mt.event, d = mt.o;
        if ("undefined" !== typeof h.c && a.e(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var f = {
                Xa: function () {
                    for (var a = c.cvcf.length, d, l = 0; l < a; l++) (d = b.oa(decodeURIComponent(c.cvcf[l]))) && e.d(d, "click", f.na())
                }, na: function () {
                    return function () {
                        h.c.b.et = 86;
                        var a = {n: "form", t: "clk"};
                        a.id = this.id;
                        h.c.b.ep = d.stringify(a);
                        h.c.i()
                    }
                }
            };
            b.Qa(function () {
                f.Xa()
            })
        }
    })();
    (function () {
        var b = mt.event, a = mt.o;
        if (c.med && "undefined" !== typeof h.c) {
            var e = {n: "anti", sb: 0, kb: 0, clk: 0}, d = function () {
                h.c.b.et = 86;
                h.c.b.ep = a.stringify(e);
                h.c.i()
            };
            b.d(document, "click", function () {
                e.clk++
            });
            b.d(document, "keyup", function () {
                e.kb = 1
            });
            b.d(window, "scroll", function () {
                e.sb++
            });
            b.d(window, "load", function () {
                setTimeout(d, 5E3)
            })
        }
    })();
    c.spa !== r && "1" === String(c.spa) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "UrlChangeTracker"]));
})();