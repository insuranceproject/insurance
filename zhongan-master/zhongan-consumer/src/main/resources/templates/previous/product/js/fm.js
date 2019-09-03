(function(J) {
    var ba = function(a) {
        var b = a;
        a instanceof Error && (b = encodeURIComponent((a.name + ":" + a.message + "|" + (a.lineNumber || 0) + ":" + (a.columnNumber || 0) + "|" + (a.stack || "no_stack")).replace(/\s+/g, "_"))); (new Image).src = (_fmOpt.fpHost || ta.fpHost) + "/error?partner=" + _fmOpt.partner + "&app=" + _fmOpt.appName + "&error=" + b + "&random=" + Math.random()
    };
    try {
        var Ka = (new Date).getTime(),
        w = {},
        ua = {},
        k = {},
        F = [0, 0, 0],
        P = {},
        Q = [10, 8, 7, 3, 2],
        m = window,
        q = m.document,
        t = m.navigator,
        D = 0,
        A = !1,
        y = null,
        ca = !1,
        R = !1,
        va = !1,
        x = null,
        G = !1,
        da,
        S = null,
        wa,
        K,
        T,
        H,
        ta = {
            version: "0.0.3",
            token: "",
            partner: "",
            appName: "",
            enabled: !0,
            timeout: 2E3,
            timestamp: "-",
            fpHost: "https://fp.fraudmetrix.cn",
            jsonUrl: "/fp/profile.json",
            detectUrl: "/fp/detect.json",
            staticHost: "static.fraudmetrix.cn",
            flashUrl: "/clear.swf?v1=2",
            tcpHost: "fpflash.fraudmetrix.cn",
            wsHost: "fp.fraudmetrix.cn:9090",
            jsonCallback: function() {
                window.console && console.log && (k.token ? console.log("Device fingerprint request send successfully, token_id: " + k.token) : console.log("_fmOpt.token is blank, please set the value of _fmOpt.token and try again!"))
            },
            containers: {
                flash: null
            },
            flashsd: !1
        },
        L = function() {
            var a = ("https:" == document.location.protocol ? "https://": "http://") + k.staticHost + k.flashUrl,
            b = "",
            b = k.flashsd ? '<param name="flashVars" value="sessionId=' + k.token + "&partnerCode=" + k.partner + "&serviceUrl=" + k.tcpHost + "&flashsd=" + k.flashsd + '" />': '<param name="flashVars" value="sessionId=' + k.token + "&partnerCode=" + k.partner + "&serviceUrl=" + k.tcpHost + '" />',
            a = '<object type="application/x-shockwave-flash" wmode="transparent" data="' + a + '" width="1" height="1" id="fmFlash"><param name="movie" value="' + a + '" /><param name="allowScriptAccess" value="always" />' + b + "</object>",
            c = document.createElement("div");
            c.innerHTML = a;
            c.style.position = "absolute";
            c.style.bottom = 0; !
            function() {
                var a = k.containers.flash ? k.containers.flash: document.body;
                a ? a.insertBefore(c, a.firstChild) : setTimeout(arguments.callee, 100)
            } ()
        };
        if (window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection) R = !0; (function() {
            var a, b;
            if (m.ActiveXObject instanceof Function) {
                a = !1;
                try {
                    a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch(c) {}
                if (a) try {
                    if (b = a.GetVariable("$version")) b = b.split(" ")[1].split(","),
                    F = [parseInt(b[0], 10), parseInt(b[1], 10), parseInt(b[2], 10)]
                } catch(e) {}
            } else(a = t.plugins && t.plugins["Shockwave Flash"] && t.mimeTypes && t.mimeTypes["application/x-shockwave-flash"] && t.mimeTypes["application/x-shockwave-flash"].enabledPlugin ? t.plugins["Shockwave Flash"] : !1) && a.description && (b = a.description.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), F[0] = parseInt(b.replace(/^(.*)\..*$/, "$1"), 10), F[1] = parseInt(b.replace(/^.*\.(.*)\s.*$/, "$1"), 10), F[2] = /[a-zA-Z]/.test(b) ? parseInt(b.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0)
        })();
        w.flashLoaded = function() {
            ca = !0;
            y = q.getElementById("fmFlash");
            arguments.callee.invoked || !G || R && !va || (arguments.callee.invoked = !0, K())
        };
        k = function(a) {
            for (var b = 1,
            c = arguments.length; b < c; b++) for (var e in arguments[b]) arguments[b].hasOwnProperty(e) && (a[e] = arguments[b][e]);
            return a
        } ({},
        ta, _fmOpt || {});
        if (9 <= F[0]) try {
            A = !0,
            L()
        } catch(Va) {
            A = !1
        } else A = !1;
        w.ethernetDetected = function() {
            va = !0;
            arguments.callee.invoked || !G || A && !ca || (arguments.callee.invoked = !0, K())
        }; (function() {
            var a = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
            a && (R = !0,
            function() {
                try {
                    var b = new a({
                        iceServers: []
                    },
                    {
                        optional: [{
                            RtpDataChannels: !0
                        }]
                    });
                    window.mozRTCPeerConnection && b.createDataChannel("", {
                        reliable: !1
                    });
                    b.onicecandidate = function(a) {
                        if (a.candidate) try {
                            var b = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(a.candidate.candidate);
                            a = "";
                            b && 1 < b.length && (a = b[1]);
                            a.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/) && (P[a] = !0);
                            w.ethernetDetected()
                        } catch(c) {}
                    };
                    try {
                        b.createDataChannel("")
                    } catch(c) {}
                    b.createOffer(function(a) {
                        b.setLocalDescription(a)
                    },
                    function(a) {})
                } catch(e) {
                    w.ethernetDetected()
                }
            } ())
        })();
        var La = function() {
            var a = q.getElementById != J && q.getElementsByTagName != J && q.createElement != J,
            b = t.userAgent.toLowerCase(),
            c = t.platform.toLowerCase(),
            e = c ? /win/.test(c) : /win/.test(b),
            c = c ? /mac/.test(c) : /mac/.test(b),
            d = /webkit/.test(b) ? parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
            g = /msie/.test(b);
            /opera/.test(b);
            b = !d && /gecko/.test(b);
            return {
                w3: a,
                flash: F,
                edit: 0,
                mod: 0,
                wk: d,
                gk: b,
                ie: g,
                win: e,
                mac: c
            }
        },
        I = function() {
            var a = [];
            return function(b) {
                k.debug && (window.Tracker ? Tracker.click("fm-" + b) : b && (a.push(b), setTimeout(function() {
                    I(a.shift())
                },
                100)))
            }
        } (),
        B = function(a) {
            return /^[A-Z0-9]{112}$/.test(a)
        },
        Ma = function() {
            for (var a = [], b = 0; b < t.plugins.length; b++) {
                var c = t.plugins[b],
                e = 0 > c.description.indexOf("Shockwave Flash") ? c.description: "";
                a.push(c.name + e + c.filename + c.length)
            }
            a.sort();
            a = (a = a.join()) ? a.replace(/\s/g, "") : "-";
            return a = t.plugins.length + "," + a
        },
        Na = function() {
            var a = document.createElement("canvas"),
            b = a.getContext("2d");
            b.textBaseline = "top";
            b.font = "14px 'Arial'";
            b.textBaseline = "alphabetic";
            b.fillStyle = "#f60";
            b.fillRect(125, 1, 62, 20);
            b.fillStyle = "#069";
            b.fillText("http://fp.fraudmetrix.cn", 2, 15);
            b.fillStyle = "rgba(102, 204, 0, 0.7)";
            b.fillText("http://fp.fraudmetrix.cn", 4, 17);
            return a.toDataURL()
        },
        Oa = function() {
            var a = {};
            a.url = m.location.href || "-";
            a.title = q.title || "-";
            a.referrer = q.referrer || q.referer || "-";
            for (var b = /<meta name\=\"keywords\" content\=\"(.*)\">/i,
            c = [], e = q.getElementsByName("keywords"), d = 0; d < e.length; d++) b.test("" + e[d].outerHTML) && c.concat(RegExp.$1.split(",") || []);
            d = c.join() || "-";
            a.keyWords = d;
            var b = [],
            g;
            for (g in a) b.push(g);
            b = b.sort();
            g = "";
            for (d = 0; d < b.length; d++) {
                0 < d && (g += "^^");
                try {
                    g += 64 < a[b[d]].length ? xa.hash128(a[b[d]]) : a[b[d]]
                } catch(f) {
                    g += "-",
                    ba(f)
                }
            }
            return g
        },
        xa = {
            _x64Add: function(a, b) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
                var c = [0, 0, 0, 0];
                c[3] += a[3] + b[3];
                c[2] += c[3] >>> 16;
                c[3] &= 65535;
                c[2] += a[2] + b[2];
                c[1] += c[2] >>> 16;
                c[2] &= 65535;
                c[1] += a[1] + b[1];
                c[0] += c[1] >>> 16;
                c[1] &= 65535;
                c[0] += a[0] + b[0];
                c[0] &= 65535;
                return [c[0] << 16 | c[1], c[2] << 16 | c[3]]
            },
            _x64Multiply: function(a, b) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
                var c = [0, 0, 0, 0];
                c[3] += a[3] * b[3];
                c[2] += c[3] >>> 16;
                c[3] &= 65535;
                c[2] += a[2] * b[3];
                c[1] += c[2] >>> 16;
                c[2] &= 65535;
                c[2] += a[3] * b[2];
                c[1] += c[2] >>> 16;
                c[2] &= 65535;
                c[1] += a[1] * b[3];
                c[0] += c[1] >>> 16;
                c[1] &= 65535;
                c[1] += a[2] * b[2];
                c[0] += c[1] >>> 16;
                c[1] &= 65535;
                c[1] += a[3] * b[1];
                c[0] += c[1] >>> 16;
                c[1] &= 65535;
                c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0];
                c[0] &= 65535;
                return [c[0] << 16 | c[1], c[2] << 16 | c[3]]
            },
            _x64Rotl: function(a, b) {
                b %= 64;
                if (32 === b) return [a[1], a[0]];
                if (32 > b) return [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b];
                b -= 32;
                return [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>> 32 - b]
            },
            _x64LeftShift: function(a, b) {
                b %= 64;
                return 0 === b ? a: 32 > b ? [a[0] << b | a[1] >>> 32 - b, a[1] << b] : [a[1] << b - 32, 0]
            },
            _x64Xor: function(a, b) {
                return [a[0] ^ b[0], a[1] ^ b[1]]
            },
            _x64Fmix: function(a) {
                a = this._x64Xor(a, [0, a[0] >>> 1]);
                a = this._x64Multiply(a, [4283543511, 3981806797]);
                a = this._x64Xor(a, [0, a[0] >>> 1]);
                a = this._x64Multiply(a, [3301882366, 444984403]);
                return a = this._x64Xor(a, [0, a[0] >>> 1])
            },
            hash128: function(a, b) {
                a = a || "";
                b = b || 0;
                for (var c = a.length % 16,
                e = a.length - c,
                d = [0, b], g = [0, b], f = [0, 0], l = [0, 0], k = [2277735313, 289559509], p = [1291169091, 658871167], h = 0; h < e; h += 16) f = [a.charCodeAt(h + 4) & 255 | (a.charCodeAt(h + 5) & 255) << 8 | (a.charCodeAt(h + 6) & 255) << 16 | (a.charCodeAt(h + 7) & 255) << 24, a.charCodeAt(h) & 255 | (a.charCodeAt(h + 1) & 255) << 8 | (a.charCodeAt(h + 2) & 255) << 16 | (a.charCodeAt(h + 3) & 255) << 24],
                l = [a.charCodeAt(h + 12) & 255 | (a.charCodeAt(h + 13) & 255) << 8 | (a.charCodeAt(h + 14) & 255) << 16 | (a.charCodeAt(h + 15) & 255) << 24, a.charCodeAt(h + 8) & 255 | (a.charCodeAt(h + 9) & 255) << 8 | (a.charCodeAt(h + 10) & 255) << 16 | (a.charCodeAt(h + 11) & 255) << 24],
                f = this._x64Multiply(f, k),
                f = this._x64Rotl(f, 31),
                f = this._x64Multiply(f, p),
                d = this._x64Xor(d, f),
                d = this._x64Rotl(d, 27),
                d = this._x64Add(d, g),
                d = this._x64Add(this._x64Multiply(d, [0, 5]), [0, 1390208809]),
                l = this._x64Multiply(l, p),
                l = this._x64Rotl(l, 33),
                l = this._x64Multiply(l, k),
                g = this._x64Xor(g, l),
                g = this._x64Rotl(g, 31),
                g = this._x64Add(g, d),
                g = this._x64Add(this._x64Multiply(g, [0, 5]), [0, 944331445]);
                f = [0, 0];
                l = [0, 0];
                switch (c) {
                case 15:
                    l = this._x64Xor(l, this._x64LeftShift([0, a.charCodeAt(h + 14)], 48));
                case 14:
                    l = this._x64Xor(l, this._x64LeftShift([0, a.charCodeAt(h + 13)], 40));
                case 13:
                    l = this._x64Xor(l, this._x64LeftShift([0, a.charCodeAt(h + 12)], 32));
                case 12:
                    l = this._x64Xor(l, this._x64LeftShift([0, a.charCodeAt(h + 11)], 24));
                case 11:
                    l = this._x64Xor(l, this._x64LeftShift([0, a.charCodeAt(h + 10)], 16));
                case 10:
                    l = this._x64Xor(l, this._x64LeftShift([0, a.charCodeAt(h + 9)], 8));
                case 9:
                    l = this._x64Xor(l, [0, a.charCodeAt(h + 8)]),
                    l = this._x64Multiply(l, p),
                    l = this._x64Rotl(l, 33),
                    l = this._x64Multiply(l, k),
                    g = this._x64Xor(g, l);
                case 8:
                    f = this._x64Xor(f, this._x64LeftShift([0, a.charCodeAt(h + 7)], 56));
                case 7:
                    f = this._x64Xor(f, this._x64LeftShift([0, a.charCodeAt(h + 6)], 48));
                case 6:
                    f = this._x64Xor(f, this._x64LeftShift([0, a.charCodeAt(h + 5)], 40));
                case 5:
                    f = this._x64Xor(f, this._x64LeftShift([0, a.charCodeAt(h + 4)], 32));
                case 4:
                    f = this._x64Xor(f, this._x64LeftShift([0, a.charCodeAt(h + 3)], 24));
                case 3:
                    f = this._x64Xor(f, this._x64LeftShift([0, a.charCodeAt(h + 2)], 16));
                case 2:
                    f = this._x64Xor(f, this._x64LeftShift([0, a.charCodeAt(h + 1)], 8));
                case 1:
                    f = this._x64Xor(f, [0, a.charCodeAt(h)]),
                    f = this._x64Multiply(f, k),
                    f = this._x64Rotl(f, 31),
                    f = this._x64Multiply(f, p),
                    d = this._x64Xor(d, f)
                }
                d = this._x64Xor(d, [0, a.length]);
                g = this._x64Xor(g, [0, a.length]);
                d = this._x64Add(d, g);
                g = this._x64Add(g, d);
                d = this._x64Fmix(d);
                g = this._x64Fmix(g);
                d = this._x64Add(d, g);
                g = this._x64Add(g, d);
                return ("00000000" + (d[0] >>> 0).toString(16)).slice( - 8) + ("00000000" + (d[1] >>> 0).toString(16)).slice( - 8) + ("00000000" + (g[0] >>> 0).toString(16)).slice( - 8) + ("00000000" + (g[1] >>> 0).toString(16)).slice( - 8)
            }
        },
        Pa = function() {
            var a = [];
            delete P["0.0.0.0"];
            for (var b in P) ! 0 === P[b] && a.push(b);
            a.sort();
            return a.join("-")
        },
        E = {
            set: function(a, b) {
                try {
                    y && y.setCookie(a, b)
                } catch(c) {}
                try {
                    m.localStorage && (localStorage[a] = b)
                } catch(e) {}
                try {
                    m.sessionStorage && m.sessionStorage.setItem(a, b)
                } catch(d) {}
                if (t.cookieEnabled) {
                    var g = a + "=" + encodeURIComponent(b),
                    g = g + (";expires=" + (new Date((new Date).getTime() + 31536E6)).toGMTString() + "; path=/");
                    q.cookie = g
                }
                if (S.ie && x) {
                    var f;
                    try {
                        f = x.XMLDocument.documentElement
                    } catch(l) {}
                    f = f || x;
                    f.setAttribute(a, b);
                    try {
                        x.save("fm")
                    } catch(k) {}
                }
                if (!m.name || B(m.name)) m.name = b;
                H = b
            },
            get: function(a, b) {
                var c, e = "",
                d = 0;
                b == J && (b = 255);
                if (ca) try {
                    c = y.getCookie(a) || "",
                    !e && b & 1 && (e = B(c) && c),
                    d += Q[0]
                } catch(g) {}
                try {
                    m.localStorage && (c = localStorage[a] || "", !e && b & 4 && (e = B(c) && c), d += Q[2])
                } catch(f) {}
                try {
                    m.sessionStorage && (c = m.sessionStorage.getItem(a) || "", !e && b & 1 && (e = B(c) && c))
                } catch(l) {}
                if (x) {
                    try {
                        x.load("fm")
                    } catch(k) {}
                    var p;
                    try {
                        p = x.XMLDocument.documentElement
                    } catch(h) {}
                    p = p || x;
                    c = p.getAttribute(a); ! e && b & 8 && (e = B(c) && c);
                    d += Q[3]
                }
                t.cookieEnabled && (c = q.cookie.indexOf(a + "="), -1 != c && (c += a.length + 1, p = q.cookie.indexOf(";", c), -1 == p && (p = q.cookie.length), c = decodeURIComponent(q.cookie.substring(c, p)) || "", !e && b & 16 && (e = B(c) && c)), d += Q[4]);
                c = m.name;
                e || (e = B(c) && c);
                c = H;
                e || (e = B(c) && c);
                255 == b && I("points-" + d);
                e && 255 == b && E.set(a, e);
                return e
            },
            remove: function(a, b) {
                b == J && (b = 255);
                t.cookieEnabled && b & 16 && (q.cookie = a + "=;expires=Thu, 01-Jan-70 00:00:01 GMT;");
                if (S.ie && b & 8 && x) {
                    x.removeAttribute(a);
                    try {
                        x.save("fm")
                    } catch(c) {}
                }
                try {
                    b & 4 && m.localStorage && localStorage.removeItem(a),
                    b & 1 && A && y.setCookie(a, "")
                } catch(e) {}
            }
        },
        ya = function() {
            var a = q.getElementsByTagName("head")[0] || q.documentElement,
            b = function(b) {
                var e = "_" + (new Date).getTime() + "_" + parseInt(1E4 * Math.random(), 10);
                window[e] = function(d) {
                    if (b) {
                        b(d);
                        a.removeChild(q.getElementById(e));
                        try {
                            delete window[e]
                        } catch(g) {}
                    }
                };
                return e
            };
            return function(c, e, d) {
                var g = !1,
                f = document.createElement("script");
                e = b(e);
                var l;
                l = [];
                for (var m in d || {}) l.push(m + "=" + encodeURIComponent(d[m]));
                l.push("_callback=" + e);
                c += 0 < c.indexOf("?") ? "&": "?";
                c += "version=" + k.version + "&";
                c += "idf=" + k.timestamp + "&";
                c += l.join("&");
                c += "&ct=" + ((new Date).getTime() - Ka);
                f.id = e;
                f.onload = f.onreadystatechange = function() {
                    g || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (g = !0, f.onload = f.onreadystatechange = null)
                };
                f.src = c;
                a.insertBefore(f, a.firstChild)
            }
        } ();
        w.getStatus = function(a) {
            return a ? D: 200 <= D
        };
        w.getFlashError = function() {
            y && console.log(y.getEdata())
        };
        T = function(a) {
            return ea(fa(a, k.timestamp))
        };
        w.init = function(a) {
            if (!G) {
                G = !0;
                try {
                    var b = (new Date).getTime(),
                    b = b + "-",
                    b = b + parseInt(1E7 * Math.random(), 10);
                    k.timestamp = b
                } catch(c) {}
                S = La.apply();
                D = 1;
                a = E.get("_fmdata"); (B(a) || !A && !R) && K();
                da = setTimeout(K, k.timeout);
                k.debug && (w.options = k);
                if (k.enabled) try {
                    wa()
                } catch(e) {
                    I("init-error")
                }
            }
        };
        K = function() {
            var a, b = function(b, c) {
                if ("boolean" != typeof b && (!b || "-" == b)) return "-";
                switch (c) {
                case 0:
                    "string" === typeof b && (b = "true" === b);
                    a = b ? "1": "0";
                    break;
                case 1:
                    a = parseInt(b, 10) || 0;
                    break;
                case 2:
                    b = "" + b;
                    try {
                        a = 64 < b.length ? xa.hash128(b) : b
                    } catch(g) {
                        a = "-",
                        ba(g)
                    }
                    a = a || "-";
                    break;
                case 3:
                    a = (a = "" + b) || "-";
                    break;
                default:
                    a = "-"
                }
                return a
            },
            c = [{
                avHardwareDisable: [0, 0],
                isEmbeddedInAcrobat: [0, 0],
                hasAudio: [0, 0],
                hasMP3: [0, 0],
                hasPrinting: [0, 0],
                hasStreamingAudio: [0, 0],
                hasStreamingVideo: [0, 0],
                hasVideoEncoder: [0, 0],
                hasAccessibility: [0, 0],
                hasEmbeddedVideo: [0, 0],
                hasScreenBroadcast: [0, 0],
                hasScreenPlayback: [0, 0],
                maxLevelIDC: [1, 0],
                zding_hasIME: [0, 0],
                zding_touchscreenType: [2, 0]
            },
            {
                width: [1, 2],
                height: [1, 2],
                availWidth: [1, 2],
                availHeight: [1, 2],
                clientWidth: [1, 3],
                clientHeight: [1, 3],
                screenColor: [2, 0],
                screenDPI: [1, 0],
                screenResolutionX: [1, 0],
                screenResolutionY: [1, 0],
                screenTop: [1, 5,
                function() {
                    return "number" == typeof m.screenLeft ? m.screenLeft: m.screenX
                }],
                screenLeft: [1, 5,
                function() {
                    return "number" == typeof m.screenTop ? m.screenTop: m.screenY
                }],
                location: [3, 4,
                function(a) {
                    if (!a) return "";
                    try {
                        return encodeURIComponent(a.href.slice(0, 255))
                    } catch(b) {}
                    return ""
                }],
                timezone: [1, 5,
                function() {
                    var a = new Date;
                    a.setDate(1);
                    a.setMonth(5);
                    var b = -a.getTimezoneOffset();
                    a.setMonth(11);
                    a = -a.getTimezoneOffset();
                    return Math.min(b, a)
                }],
                timestamp: [3, 5,
                function() {
                    return (new Date).getTime()
                }],
                zding_supports32BitProcesses: [0, 0],
                zding_supports64BitProcesses: [0, 0],
                zding_maxTouchPoints: [1, 1],
                ethIp: [3, 5, Pa],
                zding_colorDepth: [1, 2]
            },
            {
                playerType: [2, 0],
                version: [2, 0],
                appCodeName: [2, 1],
                appMinorVersion: [2, 1],
                appName: [2, 1],
                appVersion: [2, 1],
                cookieEnabled: [0, 1],
                doNotTrack: [0, 1],
                language: [2, 1],
                languages: [2, 1],
                systemLanguage: [2, 1],
                userLanguage: [2, 1],
                browserLanguage: [2, 1],
                manufacturer: [2, 0],
                fonts: [2, 0],
                plugins: [2, 5, Ma],
                canvas: [2, 5, Na],
                os: [2, 0],
                oscpu: [2, 1],
                cpuClass: [2, 1],
                platform: [2, 1,
                function(a) {
                    return a ? a.split(" ").shift() : ""
                }],
                zding_cpuArchitecture: [2, 0]
            }];
            return function() {
                if (!arguments.callee.invoked && G) {
                    arguments.callee.invoked = !0;
                    D = 3;
                    window.__flash__removeCallback = function(a, b) {
                        a && (a[b] = null)
                    };
                    x = q.getElementById("fmData");
                    y = q.getElementById("fmFlash");
                    try {
                        A || (A = y && y.md5)
                    } catch(a) {}
                    var d = {
                        partner_code: k.partner,
                        app_name: k.appName,
                        token_id: k.token || ""
                    };
                    try {
                        for (var g = 0; 3 > g; g++) {
                            var f = [],
                            l = [],
                            n = c[g],
                            p;
                            for (p in n) n.hasOwnProperty(p) && f.push(p);
                            for (var f = f.sort(), h = 0, s = f.length; h < s; h++) {
                                var u = c[g][f[h]],
                                r = "";
                                try {
                                    switch (u[1]) {
                                    case 0:
                                        (r = A && y.getCapabilities(f[h].replace("zding_", "")) || "") && u[2] && (r = u[2](r));
                                        break;
                                    case 1:
                                        (r = t[f[h]] || "") && u[2] && (r = u[2](r));
                                        break;
                                    case 2:
                                        (r = m.screen[f[h].replace("zding_", "")] || "") && u[2] && (r = u[2](r));
                                        break;
                                    case 3:
                                        (r = q.body[f[h]] || "") && u[2] && (r = u[2](r));
                                        break;
                                    case 4:
                                        (r = m[f[h]] || "") && u[2] && (r = u[2](r));
                                        break;
                                    case 5:
                                        u[2] && (r = u[2]())
                                    }
                                } catch(w) {}
                                l.push(b(r, u[0]))
                            }
                            d["param" + g] = T(l.join("^^"))
                        }
                    } catch(z) {
                        I("err-read")
                    }
                    d.paramy = "1^^";
                    d.paramy = A ? d.paramy + "1^^": d.paramy + "0^^";
                    d.paramy += _fmOpt.imgLoaded ? "1": "0";
                    var v;
                    try {
                        v = d.paramx = E.get("_fmdata")
                    } catch(B) {
                        I("err-read-s")
                    }
                    m.attachEvent && m.attachEvent("onunload",
                    function() {
                        H ? E.set("_fmdata", H) : E.get("_fmdata", 255)
                    });
                    m.addEventListener && m.addEventListener("unload",
                    function() {
                        H ? E.set("_fmdata", H) : E.get("_fmdata", 255)
                    },
                    !1);
                    D = 4;
                    try {
                        ya(k.fpHost + k.jsonUrl,
                        function(a) {
                            da && clearTimeout(da);
                            a && "id" in a ? (D = 255, (v = a.id) && E.set("_fmdata", v), k.jsonCallback.call()) : D = 200
                        },
                        d),
                        d = {},
                        d.partnerCode = _fmOpt.partner,
                        d.token_id = _fmOpt.token,
                        d.appName = _fmOpt.appName,
                        d.paramz = Oa(),
                        ya(k.fpHost + k.detectUrl, null, d)
                    } catch(C) {}
                }
            }
        } ();
        wa = function() {
            return function() {
                if (!arguments.callee.invoked && G) {
                    arguments.callee.invoked = !0;
                    D = 2;
                    try {
                        if (S.ie) {
                            var a = document.createElement("span");
                            a.innerHTML = '<input type="hidden" id="fmData" style="behavior:url(#default#userData)"/>';
                            document.body.insertBefore(a.firstChild, document.body.firstChild)
                        }
                    } catch(b) {
                        I("err-ud")
                    }
                }
            }
        } ();
        var C = "",
        z, ga, M, N, U = 0,
        za, O, V = NaN,
        W = !1,
        X = !1,
        Aa = "bd.fraudmetrix.cn",
        ha = {},
        Ba = {},
        ia = {},
        Y, Z, $, ja, ka, Qa = 0;
        Y = function(a) {
            var b = a || window.event;
            if ("mousemove" != b.type || 0 == Qa++%30) {
                var c = (new Date).getTime() - N,
                e = ++U,
                d = la(b.target || b.srcElement),
                g = document.body;
                n(10, [c, ha[b.type], e, "mousedown" == b.type ? b.which ? b.which: [0, 1, 3, 0, 2][b.button] : 0, d, a.pageX || a.clientX + (g ? g.scrollLeft || 0 : 0), a.pageY || a.clientY + (g ? g.scrollHeight || 0 : 0), b.clientX, b.clientY])
            }
        };
        Z = function(a) {
            a = a || window.event;
            var b = (new Date).getTime() - N,
            c = a.target || a.srcElement;
            if ("input" != c.tagName.toLowerCase() || "password" != c.type.toLowerCase()) {
                var e = ++U,
                d = la(c),
                g = a.keyCode,
                f = 0;
                a.ctrlKey && 17 != g && (f += 1);
                a.altKey && 18 != g && (f += 2);
                a.shiftKey && 16 != g && (f += 4);
                a.metaKey && 91 != g && (f += 8);
                n(11, [b, Ba[a.type], e, g, f, d, c.value])
            }
        };
        $ = function(a) {
            a = a || window.event;
            var b = (new Date).getTime() - N,
            c = ++U;
            n(12, [b, ia[a.type], c])
        };
        ja = function(a) {
            a = a || window.event; (a.target || a.srcElement || this).getAttribute("guid") == M && (a = (new Date).getTime(), n(9, [ka, a]))
        };
        var v = function(a) {
            "function" === (typeof a).toLowerCase() && (a = "" + a);
            if (null == a) return null;
            for (var b = 64222,
            c = 0; c < a.length; c++) b ^= (b << 8) + (b >>> 3) + a.charCodeAt(c);
            return b
        },
        aa,
        fa = function(a, b) {
            aa();
            for (var c = "",
            e = v(b) >> 3 & 255, d = 0; d < a.length; d++) c += String.fromCharCode((a.charCodeAt(d) ^ (0 == d ? e: c.charCodeAt(d - 1))) & 255);
            return c
        },
        Ca = function(a, b) {
            for (var c = a.length; c--;) if (a[c] === b) return ! 0;
            return ! 1
        },
        s = "abcdefghijklmnoqprstuvwxyz",
        ea = function(a) {
            aa();
            for (var b = "",
            c, e = 0; a.length >= e + 3;) c = (a.charCodeAt(e++) & 255) << 16 | (a.charCodeAt(e++) & 255) << 8 | a.charCodeAt(e++) & 255,
            b += s.charAt((c & 16515072) >> 18),
            b += s.charAt((c & 258048) >> 12),
            b += s.charAt((c & 4032) >> 6),
            b += s.charAt(c & 63);
            0 < a.length - e && (c = (a.charCodeAt(e++) & 255) << 16 | (a.length > e ? (a.charCodeAt(e) & 255) << 8 : 0), b += s.charAt((c & 16515072) >> 18), b += s.charAt((c & 258048) >> 12), b += a.length > e ? s.charAt((c & 4032) >> 6) : "=", b += "=");
            return b
        },
        n = function(a, b) {
            aa();
            var c = (11 < C.length ? "^": "") + ea(fa(a + Ra(b).replace(/[\t\r\n\x0b\x0c]/g, " "), C)); (C + c).length > V ? (W = !1, X && (ma(["mousedown", "mousemove"], Y, document), ma(["keydown"], Z, document), ma(["focus", "blur"], $, window), X = !1)) : W && (C += c, z ? z.value = C: window[ga] = C)
        },
        na = function(a) {
            M = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
            function(a) {
                var c = 16 * Math.random() | 0;
                return ("x" == a ? c: c & 3 | 8).toString(16)
            });
            N = (new Date).getTime();
            n(0, [M, N, a.partner + "_" + a.appName, a.token])
        },
        Da = function() {
            var a = [navigator.userAgent, navigator.platform, -1 * (new Date).getTimezoneOffset(), (navigator.language || navigator.userLanguage).toLowerCase()];
            n(1, a)
        },
        oa = function() {
            var a = document.body;
            n(2, [window.mozInnerScreenX || window.screenLeft || 0, window.mozInnerScreenY || window.screenTop || 0, a ? a.clientWidth: 0, a ? a.clientHeight: 0, screen.width, screen.height, screen.availWidth, screen.availHeight])
        },
        Ea = function() {
            n(3, [])
        },
        Fa = function() {
            isNaN(V) && n(4, [])
        },
        pa = function() {
            var a = [document.getElementsByTagName("iframe").length, document.forms.length, document.getElementsByTagName("input").length, document.getElementsByTagName("script").length, document.images.length];
            n(5, a)
        };
        za = v(arguments.callee);
        var qa = function() {
            if (isNaN(V)) {
                for (var a = [], b = document.getElementsByTagName("script"), c = 0; c < b.length && 3 > c; c++) a.push("" == b[c].src ? v(b[c].text) : b[c].src);
                n(6, a)
            }
        },
        ra = [],
        Sa = function(a) {
            for (var b = 0,
            c = 0,
            e = a.offsetWidth,
            d = a.offsetHeight; a;) b += a.offsetLeft,
            c += a.offsetTop,
            a = a.offsetParent;
            return [b, c, e, d]
        },
        la = function(a) {
            var b;
            b = a;
            for (var c = []; b && 1 == b.nodeType; b = b.parentNode) {
                var e = 0;
                if (b && b.id) {
                    c.splice(0, 0, "#" + b.id);
                    break
                }
                for (var d = b.previousSibling; d; d = d.previousSibling) 10 != d.nodeType && d.nodeName == b.nodeName && ++e;
                d = b.nodeName.toLowerCase();
                c.splice(0, 0, d + (e ? e: ""))
            }
            b = c.length ? c.join(">") : null;
            c = v(b);
            if (Ca(ra, c)) return c;
            ra.push(c);
            n(7, [c, b].concat(Sa(a)));
            return c
        },
        Ga = function() {
            n(8, [location.href, document.referrer, history.length, za])
        },
        Ha = function() {
            var a = document.createElement("img");
            a.width = a.height = 0;
            ka = (new Date).getTime();
            a.onload = ja;
            a.setAttribute("guid", M);
            n(9, [ka, 0]);
            var b = window.document.readyState;
            a.src = ("https:" == document.location.protocol ? "https://": "http://") + Aa + "/irt.gif?_=" + M + "&rs=" + ("loading" == b ? 1 : "interactive" == b ? 2 : "loaded" == b ? 3 : "complete" == b ? 4 : 5)
        },
        sa = function(a, b, c) {
            for (var e in a) a.hasOwnProperty(e) && (c.addEventListener ? c.addEventListener(a[e], b, !0) : c.attachEvent("on" + a[e], b, !1))
        },
        ma = function(a, b, c) {
            for (var e in a) a.hasOwnProperty(e) && (c.removeEventListener ? c.removeEventListener(a[e], b, !0) : c.detachEvent("on" + a[e], b, !1))
        },
        s = s + "ABCDEFGHJIKLMNOPQRSTUVWXYZ"; (function() {
            var a = [],
            b = !1,
            c = function(a, b) {
                a.apply(this, b || [])
            },
            e = function() {
                b = !0;
                for (var d = 0; d < a.length; d++) c(a[d].fn, a[d].args || []);
                a = []
            };
            this.add = function(d, e) {
                b ? c(d, e) : a[a.length] = {
                    fn: d,
                    args: e
                };
                return this
            };
            window.addEventListener ? window.document.addEventListener("DOMContentLoaded",
            function() {
                e()
            },
            !1) : function() {
                if (window.document.uniqueID || !window.document.expando) {
                    var a = window.document.createElement("document:ready");
                    try {
                        a.doScroll("left"),
                        e()
                    } catch(b) {
                        setTimeout(arguments.callee, 0)
                    }
                }
            } ();
            return this
        })();
        var Ia = !1,
        Ta = function(a, b) {
            var c = !1,
            e = !0,
            d = a.document,
            g = d.documentElement,
            f = d.addEventListener,
            l = f ? "addEventListener": "attachEvent",
            k = f ? "removeEventListener": "detachEvent",
            p = f ? "": "on",
            h = function(e) {
                if ("readystatechange" != e.type || "complete" == d.readyState || "loaded" == d.readyState)("load" == e.type ? a: d)[k](p + e.type, h, !1),
                !c && (c = !0) && (Ia = !0, b.call(a, e.type || e))
            },
            m = function() {
                try {
                    g.doScroll("left")
                } catch(a) {
                    setTimeout(m, 50);
                    return
                }
                h("poll")
            };
            if ("complete" == d.readyState || "loaded" == d.readyState) b.call(a, "lazy");
            else {
                if (!f && g.doScroll) {
                    try {
                        e = !a.frameElement
                    } catch(n) {}
                    e && m()
                }
                d[l](p + "DOMContentLoaded", h, !1);
                d[l](p + "readystatechange", h, !1);
                a[l](p + "load", h, !1)
            }
        };
        aa = function() {
            if (!O) {
                O = {};
                var a = {};
                a[v(fa)] = [n, T];
                a[v(ea)] = [n, T];
                a[v(n)] = [Da, oa, pa, Fa, la, Z, Y, $, Ha, Ga, Ea, na, qa, ja, arguments.callee];
                for (var b in a) if (a.hasOwnProperty(b)) {
                    var c = O[b] = [],
                    e;
                    for (e in a[b]) a[b].hasOwnProperty(e) && c.push(v(a[b][e]))
                }
            }
            a = arguments.callee.caller;
            b = v(a);
            b in O ? (c = v(a.caller), Ca(O[b], c) || n(13, [0, "" + a.caller, b])) : n(13, [1, "" + a, b])
        };
        var Ra = function(a) {
            var b = /[\\\"\x00-\x1f\x7f-\xff\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\u0391-\uffe5\ufff0-\uffff]/g,
            c = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            e = function(a) {
                b.lastIndex = 0;
                return b.test(a) ? '"' + a.replace(b,
                function(a) {
                    var b = c[a];
                    return "string" === typeof b ? b: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                }) + '"': '"' + a + '"'
            },
            d = function(a, b) {
                var c, k, m = b[a];
                switch (typeof m) {
                case "string":
                    return e(m);
                case "number":
                    return isFinite(m) ? String(m) : "null";
                case "object":
                    if (!m) return "null";
                    k = [];
                    if ("[object Array]" === Object.prototype.toString.apply(m)) {
                        c = m.length;
                        for (var h = 0; h < c; h += 1) k[h] = d(h, m) || "null";
                        return c = 0 === k.length ? "[]": "[" + k.join(",") + "]"
                    }
                    return null;
                default:
                    return null
                }
            };
            return d("", {
                "": a
            })
        },
        Ja = function() {
            Da();
            Ea();
            Fa();
            Ga();
            Ha();
            X || (sa(["mousedown", "mousemove"], Y, document), sa(["keydown"], Z, document), sa(["focus", "blur"], $, window), X = !0)
        };
        ua.init = function(a) { ! 0 === a.bd && (a.bdHost && (Aa = a.bdHost), a.limit && (V = a.limit), W = !0, ha.mousedown = 0, ha.mousemove = 1, Ba.keydown = 0, ia.focus = 0, ia.blur = 1, C = "fraudmetrix".replace(/./g,
            function() {
                return s.charAt(64 * Math.random() | 0)
            }), a.form ? (z = document.createElement("input"), z.type = "hidden", z.name = "bdstr", z.id = "__bdstr_input__") : ga = a.name ? a.name: "bdstr", Ta(window,
            function() {
                if (a.form) {
                    var b = document.getElementById(a.form);
                    if (b) b.insertBefore(z, b.firstChild);
                    else {
                        var c = function() { (b = document.getElementById(a.form)) ? b.insertBefore(z, b.firstChild) : setTimeout(c, 100)
                        };
                        setTimeout(c, 100)
                    }
                }
                oa();
                pa();
                qa()
            }), na(a), Ja(), a.restart = function() {
                W = !0;
                ra = [];
                z ? z.value = "": window[ga] = "";
                C = "fraudmetrix".replace(/./g,
                function() {
                    return s.charAt(64 * Math.random() | 0)
                });
                U = 0;
                Ia && (oa(), pa(), qa());
                na(a);
                Ja()
            })
        };
        for (L = 0; 10 > L; L++) s += String.fromCharCode(48 + L);
        s += "~/";
        _fmOpt.flashLoaded = w.flashLoaded;
        window.fp = {};
        window.fp.flashLoaded = w.flashLoaded;
        ua.init(_fmOpt);
        w.init(_fmOpt)
    } catch(Ua) {
        ba(Ua)
    }
})();
