!function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.returnExports = e()
}(this, function () {
    var t, e, n = Array, r = n.prototype, i = Object, o = i.prototype, a = Function, s = a.prototype, u = String,
        c = u.prototype, f = Number, l = f.prototype, h = r.slice, d = r.splice, p = r.push, y = r.unshift,
        g = r.concat, v = r.join, b = s.call, m = s.apply, w = Math.max, _ = Math.min, x = o.toString,
        S = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, E = Function.prototype.toString,
        T = /^\s*class /, A = function (t) {
            try {
                var e = E.call(t), n = e.replace(/\/\/.*\n/g, ""), r = n.replace(/\/\*[.\s\S]*\*\//g, ""),
                    i = r.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                return T.test(i)
            } catch (o) {
                return !1
            }
        }, O = function (t) {
            try {
                return !A(t) && (E.call(t), !0)
            } catch (e) {
                return !1
            }
        }, t = function (t) {
            if (!t) return !1;
            if ("function" != typeof t && "object" != typeof t) return !1;
            if (S) return O(t);
            if (A(t)) return !1;
            var e = x.call(t);
            return "[object Function]" === e || "[object GeneratorFunction]" === e
        }, D = RegExp.prototype.exec, j = function (t) {
            try {
                return D.call(t), !0
            } catch (e) {
                return !1
            }
        };
    e = function (t) {
        return "object" == typeof t && (S ? j(t) : "[object RegExp]" === x.call(t))
    };
    var k, M = String.prototype.valueOf, P = function (t) {
        try {
            return M.call(t), !0
        } catch (e) {
            return !1
        }
    };
    k = function (t) {
        return "string" == typeof t || "object" == typeof t && (S ? P(t) : "[object String]" === x.call(t))
    };
    var C = i.defineProperty && function () {
        try {
            var t = {};
            i.defineProperty(t, "x", {enumerable: !1, value: t});
            for (var e in t) return !1;
            return t.x === t
        } catch (n) {
            return !1
        }
    }(), I = function (t) {
        var e;
        return e = C ? function (t, e, n, r) {
            !r && e in t || i.defineProperty(t, e, {configurable: !0, enumerable: !1, writable: !0, value: n})
        } : function (t, e, n, r) {
            !r && e in t || (t[e] = n)
        }, function (n, r, i) {
            for (var o in r) t.call(r, o) && e(n, o, r[o], i)
        }
    }(o.hasOwnProperty), R = function (t) {
        var e = typeof t;
        return null === t || "object" !== e && "function" !== e
    }, F = f.isNaN || function (t) {
        return t !== t
    }, B = {
        ToInteger: function (t) {
            var e = +t;
            return F(e) ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
        }, ToPrimitive: function (e) {
            var n, r, i;
            if (R(e)) return e;
            if (r = e.valueOf, t(r) && (n = r.call(e), R(n))) return n;
            if (i = e.toString, t(i) && (n = i.call(e), R(n))) return n;
            throw new TypeError
        }, ToObject: function (t) {
            if (null == t) throw new TypeError("can't convert " + t + " to object");
            return i(t)
        }, ToUint32: function (t) {
            return t >>> 0
        }
    }, L = function () {
    };
    I(s, {
        bind: function (e) {
            var n = this;
            if (!t(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
            for (var r, o = h.call(arguments, 1), s = function () {
                if (this instanceof r) {
                    var t = m.call(n, this, g.call(o, h.call(arguments)));
                    return i(t) === t ? t : this
                }
                return m.call(n, e, g.call(o, h.call(arguments)))
            }, u = w(0, n.length - o.length), c = [], f = 0; f < u; f++) p.call(c, "$" + f);
            return r = a("binder", "return function (" + v.call(c, ",") + "){ return binder.apply(this, arguments); }")(s), n.prototype && (L.prototype = n.prototype, r.prototype = new L, L.prototype = null), r
        }
    });
    var N = b.bind(o.hasOwnProperty), U = b.bind(o.toString), H = b.bind(h), G = m.bind(h), X = b.bind(c.slice),
        z = b.bind(c.split), K = b.bind(c.indexOf), W = b.bind(p), V = b.bind(o.propertyIsEnumerable),
        Y = b.bind(r.sort), q = n.isArray || function (t) {
            return "[object Array]" === U(t)
        }, J = 1 !== [].unshift(0);
    I(r, {
        unshift: function () {
            return y.apply(this, arguments), this.length
        }
    }, J), I(n, {isArray: q});
    var $ = i("a"), Z = "a" !== $[0] || !(0 in $), Q = function (t) {
        var e = !0, n = !0, r = !1;
        if (t) try {
            t.call("foo", function (t, n, r) {
                "object" != typeof r && (e = !1)
            }), t.call([1], function () {
                "use strict";
                n = "string" == typeof this
            }, "x")
        } catch (i) {
            r = !0
        }
        return !!t && !r && e && n
    };
    I(r, {
        forEach: function (e) {
            var n, r = B.ToObject(this), i = Z && k(this) ? z(this, "") : r, o = -1, a = B.ToUint32(i.length);
            if (arguments.length > 1 && (n = arguments[1]), !t(e)) throw new TypeError("Array.prototype.forEach callback must be a function");
            for (; ++o < a;) o in i && (void 0 === n ? e(i[o], o, r) : e.call(n, i[o], o, r))
        }
    }, !Q(r.forEach)), I(r, {
        map: function (e) {
            var r, i = B.ToObject(this), o = Z && k(this) ? z(this, "") : i, a = B.ToUint32(o.length), s = n(a);
            if (arguments.length > 1 && (r = arguments[1]), !t(e)) throw new TypeError("Array.prototype.map callback must be a function");
            for (var u = 0; u < a; u++) u in o && (s[u] = void 0 === r ? e(o[u], u, i) : e.call(r, o[u], u, i));
            return s
        }
    }, !Q(r.map)), I(r, {
        filter: function (e) {
            var n, r, i = B.ToObject(this), o = Z && k(this) ? z(this, "") : i, a = B.ToUint32(o.length), s = [];
            if (arguments.length > 1 && (r = arguments[1]), !t(e)) throw new TypeError("Array.prototype.filter callback must be a function");
            for (var u = 0; u < a; u++) u in o && (n = o[u], (void 0 === r ? e(n, u, i) : e.call(r, n, u, i)) && W(s, n));
            return s
        }
    }, !Q(r.filter)), I(r, {
        every: function (e) {
            var n, r = B.ToObject(this), i = Z && k(this) ? z(this, "") : r, o = B.ToUint32(i.length);
            if (arguments.length > 1 && (n = arguments[1]), !t(e)) throw new TypeError("Array.prototype.every callback must be a function");
            for (var a = 0; a < o; a++) if (a in i && !(void 0 === n ? e(i[a], a, r) : e.call(n, i[a], a, r))) return !1;
            return !0
        }
    }, !Q(r.every)), I(r, {
        some: function (e) {
            var n, r = B.ToObject(this), i = Z && k(this) ? z(this, "") : r, o = B.ToUint32(i.length);
            if (arguments.length > 1 && (n = arguments[1]), !t(e)) throw new TypeError("Array.prototype.some callback must be a function");
            for (var a = 0; a < o; a++) if (a in i && (void 0 === n ? e(i[a], a, r) : e.call(n, i[a], a, r))) return !0;
            return !1
        }
    }, !Q(r.some));
    var tt = !1;
    r.reduce && (tt = "object" == typeof r.reduce.call("es5", function (t, e, n, r) {
        return r
    })), I(r, {
        reduce: function (e) {
            var n = B.ToObject(this), r = Z && k(this) ? z(this, "") : n, i = B.ToUint32(r.length);
            if (!t(e)) throw new TypeError("Array.prototype.reduce callback must be a function");
            if (0 === i && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
            var o, a = 0;
            if (arguments.length >= 2) o = arguments[1]; else for (; ;) {
                if (a in r) {
                    o = r[a++];
                    break
                }
                if (++a >= i) throw new TypeError("reduce of empty array with no initial value")
            }
            for (; a < i; a++) a in r && (o = e(o, r[a], a, n));
            return o
        }
    }, !tt);
    var et = !1;
    r.reduceRight && (et = "object" == typeof r.reduceRight.call("es5", function (t, e, n, r) {
        return r
    })), I(r, {
        reduceRight: function (e) {
            var n = B.ToObject(this), r = Z && k(this) ? z(this, "") : n, i = B.ToUint32(r.length);
            if (!t(e)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
            if (0 === i && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
            var o, a = i - 1;
            if (arguments.length >= 2) o = arguments[1]; else for (; ;) {
                if (a in r) {
                    o = r[a--];
                    break
                }
                if (--a < 0) throw new TypeError("reduceRight of empty array with no initial value")
            }
            if (a < 0) return o;
            do {
                a in r && (o = e(o, r[a], a, n))
            } while (a--);
            return o
        }
    }, !et);
    var nt = r.indexOf && -1 !== [0, 1].indexOf(1, 2);
    I(r, {
        indexOf: function (t) {
            var e = Z && k(this) ? z(this, "") : B.ToObject(this), n = B.ToUint32(e.length);
            if (0 === n) return -1;
            var r = 0;
            for (arguments.length > 1 && (r = B.ToInteger(arguments[1])), r = r >= 0 ? r : w(0, n + r); r < n; r++) if (r in e && e[r] === t) return r;
            return -1
        }
    }, nt);
    var rt = r.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
    I(r, {
        lastIndexOf: function (t) {
            var e = Z && k(this) ? z(this, "") : B.ToObject(this), n = B.ToUint32(e.length);
            if (0 === n) return -1;
            var r = n - 1;
            for (arguments.length > 1 && (r = _(r, B.ToInteger(arguments[1]))), r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--) if (r in e && t === e[r]) return r;
            return -1
        }
    }, rt);
    var it = function () {
        var t = [1, 2], e = t.splice();
        return 2 === t.length && q(e) && 0 === e.length
    }();
    I(r, {
        splice: function (t, e) {
            return 0 === arguments.length ? [] : d.apply(this, arguments)
        }
    }, !it);
    var ot = function () {
        var t = {};
        return r.splice.call(t, 0, 0, 1), 1 === t.length
    }();
    I(r, {
        splice: function (t, e) {
            if (0 === arguments.length) return [];
            var n = arguments;
            return this.length = w(B.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof e && (n = H(arguments), n.length < 2 ? W(n, this.length - t) : n[1] = B.ToInteger(e)), d.apply(this, n)
        }
    }, !ot);
    var at = function () {
        var t = new n(1e5);
        return t[8] = "x", t.splice(1, 1), 7 === t.indexOf("x")
    }(), st = function () {
        var t = [];
        return t[256] = "a", t.splice(257, 0, "b"), "a" === t[256]
    }();
    I(r, {
        splice: function (t, e) {
            for (var n, r = B.ToObject(this), i = [], o = B.ToUint32(r.length), a = B.ToInteger(t), s = a < 0 ? w(o + a, 0) : _(a, o), c = _(w(B.ToInteger(e), 0), o - s), f = 0; f < c;) n = u(s + f), N(r, n) && (i[f] = r[n]), f += 1;
            var l, h = H(arguments, 2), d = h.length;
            if (d < c) {
                f = s;
                for (var p = o - c; f < p;) n = u(f + c), l = u(f + d), N(r, n) ? r[l] = r[n] : delete r[l], f += 1;
                f = o;
                for (var y = o - c + d; f > y;) delete r[f - 1], f -= 1
            } else if (d > c) for (f = o - c; f > s;) n = u(f + c - 1), l = u(f + d - 1), N(r, n) ? r[l] = r[n] : delete r[l], f -= 1;
            f = s;
            for (var g = 0; g < h.length; ++g) r[f] = h[g], f += 1;
            return r.length = o - c + d, i
        }
    }, !at || !st);
    var ut, ct = r.join;
    try {
        ut = "1,2,3" !== Array.prototype.join.call("123", ",")
    } catch (Ee) {
        ut = !0
    }
    ut && I(r, {
        join: function (t) {
            var e = void 0 === t ? "," : t;
            return ct.call(k(this) ? z(this, "") : this, e)
        }
    }, ut);
    var ft = "1,2" !== [1, 2].join(undefined);
    ft && I(r, {
        join: function (t) {
            var e = void 0 === t ? "," : t;
            return ct.call(this, e)
        }
    }, ft);
    var lt = function (t) {
        for (var e = B.ToObject(this), n = B.ToUint32(e.length), r = 0; r < arguments.length;) e[n + r] = arguments[r], r += 1;
        return e.length = n + r, n + r
    }, ht = function () {
        var t = {};
        return 1 !== Array.prototype.push.call(t, undefined) || 1 !== t.length || "undefined" != typeof t[0] || !N(t, 0)
    }();
    I(r, {
        push: function (t) {
            return q(this) ? p.apply(this, arguments) : lt.apply(this, arguments)
        }
    }, ht);
    var dt = function () {
        var t = [];
        return 1 !== t.push(undefined) || 1 !== t.length || "undefined" != typeof t[0] || !N(t, 0)
    }();
    I(r, {push: lt}, dt), I(r, {
        slice: function (t, e) {
            var n = k(this) ? z(this, "") : this;
            return G(n, arguments)
        }
    }, Z);
    var pt = function () {
        try {
            return [1, 2].sort(null), [1, 2].sort({}), !0
        } catch (Ee) {
        }
        return !1
    }(), yt = function () {
        try {
            return [1, 2].sort(/a/), !1
        } catch (Ee) {
        }
        return !0
    }(), gt = function () {
        try {
            return [1, 2].sort(undefined), !0
        } catch (Ee) {
        }
        return !1
    }();
    I(r, {
        sort: function (e) {
            if (void 0 === e) return Y(this);
            if (!t(e)) throw new TypeError("Array.prototype.sort callback must be a function");
            return Y(this, e)
        }
    }, pt || !gt || !yt);
    var vt = !V({toString: null}, "toString"), bt = V(function () {
        }, "prototype"), mt = !N("x", "0"), wt = function (t) {
            var e = t.constructor;
            return e && e.prototype === t
        }, _t = {
            $window: !0,
            $console: !0,
            $parent: !0,
            $self: !0,
            $frame: !0,
            $frames: !0,
            $frameElement: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $external: !0
        }, xt = function () {
            if ("undefined" == typeof window) return !1;
            for (var t in window) try {
                !_t["$" + t] && N(window, t) && null !== window[t] && "object" == typeof window[t] && wt(window[t])
            } catch (Ee) {
                return !0
            }
            return !1
        }(), St = function (t) {
            if ("undefined" == typeof window || !xt) return wt(t);
            try {
                return wt(t)
            } catch (Ee) {
                return !1
            }
        },
        Et = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        Tt = Et.length, At = function (t) {
            return "[object Arguments]" === U(t)
        }, Ot = function (e) {
            return null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && !q(e) && t(e.callee)
        }, Dt = At(arguments) ? At : Ot;
    I(i, {
        keys: function (e) {
            var n = t(e), r = Dt(e), i = null !== e && "object" == typeof e, o = i && k(e);
            if (!i && !n && !r) throw new TypeError("Object.keys called on a non-object");
            var a = [], s = bt && n;
            if (o && mt || r) for (var c = 0; c < e.length; ++c) W(a, u(c));
            if (!r) for (var f in e) s && "prototype" === f || !N(e, f) || W(a, u(f));
            if (vt) for (var l = St(e), h = 0; h < Tt; h++) {
                var d = Et[h];
                l && "constructor" === d || !N(e, d) || W(a, d)
            }
            return a
        }
    });
    var jt = i.keys && function () {
        return 2 === i.keys(arguments).length
    }(1, 2), kt = i.keys && function () {
        var t = i.keys(arguments);
        return 1 !== arguments.length || 1 !== t.length || 1 !== t[0]
    }(1), Mt = i.keys;
    I(i, {
        keys: function (t) {
            return Mt(Dt(t) ? H(t) : t)
        }
    }, !jt || kt);
    var Pt, Ct, It = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(), Rt = new Date(-0x55d318d56a724),
        Ft = new Date(14496624e5), Bt = "Mon, 01 Jan -45875 11:59:59 GMT" !== Rt.toUTCString();
    Rt.getTimezoneOffset() < -720 ? (Pt = "Tue Jan 02 -45875" !== Rt.toDateString(), Ct = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Ft.toString())) : (Pt = "Mon Jan 01 -45875" !== Rt.toDateString(), Ct = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Ft.toString()));
    var Lt = b.bind(Date.prototype.getFullYear), Nt = b.bind(Date.prototype.getMonth),
        Ut = b.bind(Date.prototype.getDate), Ht = b.bind(Date.prototype.getUTCFullYear),
        Gt = b.bind(Date.prototype.getUTCMonth), Xt = b.bind(Date.prototype.getUTCDate),
        zt = b.bind(Date.prototype.getUTCDay), Kt = b.bind(Date.prototype.getUTCHours),
        Wt = b.bind(Date.prototype.getUTCMinutes), Vt = b.bind(Date.prototype.getUTCSeconds),
        Yt = b.bind(Date.prototype.getUTCMilliseconds), qt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        Jt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        $t = function (t, e) {
            return Ut(new Date(e, t, 0))
        };
    I(Date.prototype, {
        getFullYear: function () {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = Lt(this);
            return t < 0 && Nt(this) > 11 ? t + 1 : t
        }, getMonth: function () {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = Lt(this), e = Nt(this);
            return t < 0 && e > 11 ? 0 : e
        }, getDate: function () {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = Lt(this), e = Nt(this), n = Ut(this);
            if (t < 0 && e > 11) {
                if (12 === e) return n;
                return $t(0, t + 1) - n + 1
            }
            return n
        }, getUTCFullYear: function () {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = Ht(this);
            return t < 0 && Gt(this) > 11 ? t + 1 : t
        }, getUTCMonth: function () {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = Ht(this), e = Gt(this);
            return t < 0 && e > 11 ? 0 : e
        }, getUTCDate: function () {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = Ht(this), e = Gt(this), n = Xt(this);
            if (t < 0 && e > 11) {
                if (12 === e) return n;
                return $t(0, t + 1) - n + 1
            }
            return n
        }
    }, It), I(Date.prototype, {
        toUTCString: function () {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = zt(this), e = Xt(this), n = Gt(this), r = Ht(this), i = Kt(this), o = Wt(this), a = Vt(this);
            return qt[t] + ", " + (e < 10 ? "0" + e : e) + " " + Jt[n] + " " + r + " " + (i < 10 ? "0" + i : i) + ":" + (o < 10 ? "0" + o : o) + ":" + (a < 10 ? "0" + a : a) + " GMT"
        }
    }, It || Bt), I(Date.prototype, {
        toDateString: function () {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var t = this.getDay(), e = this.getDate(), n = this.getMonth(), r = this.getFullYear();
            return qt[t] + " " + Jt[n] + " " + (e < 10 ? "0" + e : e) + " " + r
        }
    }, It || Pt), (It || Ct) && (Date.prototype.toString = function () {
        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
        var t = this.getDay(), e = this.getDate(), n = this.getMonth(), r = this.getFullYear(), i = this.getHours(),
            o = this.getMinutes(), a = this.getSeconds(), s = this.getTimezoneOffset(),
            u = Math.floor(Math.abs(s) / 60), c = Math.floor(Math.abs(s) % 60);
        return qt[t] + " " + Jt[n] + " " + (e < 10 ? "0" + e : e) + " " + r + " " + (i < 10 ? "0" + i : i) + ":" + (o < 10 ? "0" + o : o) + ":" + (a < 10 ? "0" + a : a) + " GMT" + (s > 0 ? "-" : "+") + (u < 10 ? "0" + u : u) + (c < 10 ? "0" + c : c)
    }, C && i.defineProperty(Date.prototype, "toString", {configurable: !0, enumerable: !1, writable: !0}));
    var Zt = Date.prototype.toISOString && -1 === new Date(-621987552e5).toISOString().indexOf("-000001"),
        Qt = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString(),
        te = b.bind(Date.prototype.getTime);
    I(Date.prototype, {
        toISOString: function () {
            if (!isFinite(this) || !isFinite(te(this))) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
            var t = Ht(this), e = Gt(this);
            t += Math.floor(e / 12), e = (e % 12 + 12) % 12;
            var n = [e + 1, Xt(this), Kt(this), Wt(this), Vt(this)];
            t = (t < 0 ? "-" : t > 9999 ? "+" : "") + X("00000" + Math.abs(t), 0 <= t && t <= 9999 ? -4 : -6);
            for (var r = 0; r < n.length; ++r) n[r] = X("00" + n[r], -2);
            return t + "-" + H(n, 0, 2).join("-") + "T" + H(n, 2).join(":") + "." + X("000" + Yt(this), -3) + "Z"
        }
    }, Zt || Qt), function () {
        try {
            return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(-621987552e5).toJSON().indexOf("-000001") && Date.prototype.toJSON.call({
                toISOString: function () {
                    return !0
                }
            })
        } catch (Ee) {
            return !1
        }
    }() || (Date.prototype.toJSON = function (e) {
        var n = i(this), r = B.ToPrimitive(n);
        if ("number" == typeof r && !isFinite(r)) return null;
        var o = n.toISOString;
        if (!t(o)) throw new TypeError("toISOString property is not callable");
        return o.call(n)
    });
    var ee = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
        ne = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z"));
    if (isNaN(Date.parse("2000-01-01T00:00:00.000Z")) || ne || !ee) {
        var re = Math.pow(2, 31) - 1, ie = F(new Date(1970, 0, 1, 0, 0, 0, re + 1).getTime());
        Date = function (t) {
            var e = function (n, r, i, o, a, s, c) {
                    var f, l = arguments.length;
                    if (this instanceof t) {
                        var h = s, d = c;
                        if (ie && l >= 7 && c > re) {
                            var p = Math.floor(c / re) * re, y = Math.floor(p / 1e3);
                            h += y, d -= 1e3 * y
                        }
                        f = 1 === l && u(n) === n ? new t(e.parse(n)) : l >= 7 ? new t(n, r, i, o, a, h, d) : l >= 6 ? new t(n, r, i, o, a, h) : l >= 5 ? new t(n, r, i, o, a) : l >= 4 ? new t(n, r, i, o) : l >= 3 ? new t(n, r, i) : l >= 2 ? new t(n, r) : l >= 1 ? new t(n instanceof t ? +n : n) : new t
                    } else f = t.apply(this, arguments);
                    return R(f) || I(f, {constructor: e}, !0), f
                },
                n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
                r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], i = function (t, e) {
                    var n = e > 1 ? 1 : 0;
                    return r[e] + Math.floor((t - 1969 + n) / 4) - Math.floor((t - 1901 + n) / 100) + Math.floor((t - 1601 + n) / 400) + 365 * (t - 1970)
                }, o = function (e) {
                    var n = 0, r = e;
                    if (ie && r > re) {
                        var i = Math.floor(r / re) * re, o = Math.floor(i / 1e3);
                        n += o, r -= 1e3 * o
                    }
                    return f(new t(1970, 0, 1, 0, 0, n, r))
                };
            for (var a in t) N(t, a) && (e[a] = t[a]);
            return I(e, {
                now: t.now,
                UTC: t.UTC
            }, !0), e.prototype = t.prototype, I(e.prototype, {constructor: e}, !0), I(e, {
                parse: function (e) {
                    var r = n.exec(e);
                    if (r) {
                        var a, s = f(r[1]), u = f(r[2] || 1) - 1, c = f(r[3] || 1) - 1, l = f(r[4] || 0),
                            h = f(r[5] || 0), d = f(r[6] || 0), p = Math.floor(1e3 * f(r[7] || 0)),
                            y = Boolean(r[4] && !r[8]), g = "-" === r[9] ? 1 : -1, v = f(r[10] || 0), b = f(r[11] || 0);
                        return l < (h > 0 || d > 0 || p > 0 ? 24 : 25) && h < 60 && d < 60 && p < 1e3 && u > -1 && u < 12 && v < 24 && b < 60 && c > -1 && c < i(s, u + 1) - i(s, u) && (a = 60 * (24 * (i(s, u) + c) + l + v * g), a = 1e3 * (60 * (a + h + b * g) + d) + p, y && (a = o(a)), -864e13 <= a && a <= 864e13) ? a : NaN
                    }
                    return t.parse.apply(this, arguments)
                }
            }), e
        }(Date)
    }
    Date.now || (Date.now = function () {
        return (new Date).getTime()
    });
    var oe = l.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)),
        ae = {
            base: 1e7, size: 6, data: [0, 0, 0, 0, 0, 0], multiply: function (t, e) {
                for (var n = -1, r = e; ++n < ae.size;) r += t * ae.data[n], ae.data[n] = r % ae.base, r = Math.floor(r / ae.base)
            }, divide: function (t) {
                for (var e = ae.size, n = 0; --e >= 0;) n += ae.data[e], ae.data[e] = Math.floor(n / t), n = n % t * ae.base
            }, numToString: function () {
                for (var t = ae.size, e = ""; --t >= 0;) if ("" !== e || 0 === t || 0 !== ae.data[t]) {
                    var n = u(ae.data[t]);
                    "" === e ? e = n : e += X("0000000", 0, 7 - n.length) + n
                }
                return e
            }, pow: function Te(t, e, n) {
                return 0 === e ? n : e % 2 == 1 ? Te(t, e - 1, n * t) : Te(t * t, e / 2, n)
            }, log: function (t) {
                for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
                for (; n >= 2;) e += 1, n /= 2;
                return e
            }
        };
    I(l, {
        toFixed: function (t) {
            var e, n, r, i, o, a, s, c;
            if (e = f(t), (e = F(e) ? 0 : Math.floor(e)) < 0 || e > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
            if (n = f(this), F(n)) return "NaN";
            if (n <= -1e21 || n >= 1e21) return u(n);
            if (r = "", n < 0 && (r = "-", n = -n), i = "0", n > 1e-21) if (o = ae.log(n * ae.pow(2, 69, 1)) - 69, a = o < 0 ? n * ae.pow(2, -o, 1) : n / ae.pow(2, o, 1), a *= 4503599627370496, (o = 52 - o) > 0) {
                for (ae.multiply(0, a), s = e; s >= 7;) ae.multiply(1e7, 0), s -= 7;
                for (ae.multiply(ae.pow(10, s, 1), 0), s = o - 1; s >= 23;) ae.divide(1 << 23), s -= 23;
                ae.divide(1 << s), ae.multiply(1, 1), ae.divide(2), i = ae.numToString()
            } else ae.multiply(0, a), ae.multiply(1 << -o, 0), i = ae.numToString() + X("0.00000000000000000000", 2, 2 + e);
            return e > 0 ? (c = i.length, i = c <= e ? r + X("0.0000000000000000000", 0, e - c + 2) + i : r + X(i, 0, c - e) + "." + X(i, c - e)) : i = r + i, i
        }
    }, oe);
    var se = function () {
        try {
            return "1" === 1..toPrecision(undefined)
        } catch (Ee) {
            return !0
        }
    }(), ue = l.toPrecision;
    I(l, {
        toPrecision: function (t) {
            return void 0 === t ? ue.call(this) : ue.call(this, t)
        }
    }, se), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function () {
        var t = "undefined" == typeof /()??/.exec("")[1], n = Math.pow(2, 32) - 1;
        c.split = function (r, i) {
            var o = String(this);
            if (void 0 === r && 0 === i) return [];
            if (!e(r)) return z(this, r, i);
            var a, s, u, c, f = [],
                l = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (r.sticky ? "y" : ""),
                h = 0, d = new RegExp(r.source, l + "g");
            t || (a = new RegExp("^" + d.source + "$(?!\\s)", l));
            var y = void 0 === i ? n : B.ToUint32(i);
            for (s = d.exec(o); s && !((u = s.index + s[0].length) > h && (W(f, X(o, h, s.index)), !t && s.length > 1 && s[0].replace(a, function () {
                for (var t = 1; t < arguments.length - 2; t++) "undefined" == typeof arguments[t] && (s[t] = void 0)
            }), s.length > 1 && s.index < o.length && p.apply(f, H(s, 1)), c = s[0].length, h = u, f.length >= y));) d.lastIndex === s.index && d.lastIndex++, s = d.exec(o);
            return h === o.length ? !c && d.test("") || W(f, "") : W(f, X(o, h)), f.length > y ? H(f, 0, y) : f
        }
    }() : "0".split(void 0, 0).length && (c.split = function (t, e) {
        return void 0 === t && 0 === e ? [] : z(this, t, e)
    });
    var ce = c.replace;
    (function () {
        var t = [];
        return "x".replace(/x(.)?/g, function (e, n) {
            W(t, n)
        }), 1 === t.length && "undefined" == typeof t[0]
    })() || (c.replace = function (n, r) {
        var i = t(r), o = e(n) && /\)[*?]/.test(n.source);
        if (i && o) {
            var a = function (t) {
                var e = arguments.length, i = n.lastIndex;
                n.lastIndex = 0;
                var o = n.exec(t) || [];
                return n.lastIndex = i, W(o, arguments[e - 2], arguments[e - 1]), r.apply(this, o)
            };
            return ce.call(this, n, a)
        }
        return ce.call(this, n, r)
    });
    var fe = c.substr, le = "".substr && "b" !== "0b".substr(-1);
    I(c, {
        substr: function (t, e) {
            var n = t;
            return t < 0 && (n = w(this.length + t, 0)), fe.call(this, n, e)
        }
    }, le);
    var he = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff", de = "​", pe = "[" + he + "]",
        ye = new RegExp("^" + pe + pe + "*"), ge = new RegExp(pe + pe + "*$"), ve = c.trim && (he.trim() || !de.trim());
    I(c, {
        trim: function () {
            if (void 0 === this || null === this) throw new TypeError("can't convert " + this + " to object");
            return u(this).replace(ye, "").replace(ge, "")
        }
    }, ve);
    var be = b.bind(String.prototype.trim), me = c.lastIndexOf && -1 !== "abcあい".lastIndexOf("あい", 2);
    I(c, {
        lastIndexOf: function (t) {
            if (void 0 === this || null === this) throw new TypeError("can't convert " + this + " to object");
            for (var e = u(this), n = u(t), r = arguments.length > 1 ? f(arguments[1]) : NaN, i = F(r) ? Infinity : B.ToInteger(r), o = _(w(i, 0), e.length), a = n.length, s = o + a; s > 0;) {
                s = w(0, s - a);
                var c = K(X(e, s, o + a), n);
                if (-1 !== c) return s + c
            }
            return -1
        }
    }, me);
    var we = c.lastIndexOf;
    if (I(c, {
        lastIndexOf: function (t) {
            return we.apply(this, arguments)
        }
    }, 1 !== c.lastIndexOf.length), 8 === parseInt(he + "08") && 22 === parseInt(he + "0x16") || (parseInt = function (t) {
        var e = /^[\-+]?0[xX]/;
        return function (n, r) {
            var i = be(String(n)), o = f(r) || (e.test(i) ? 16 : 10);
            return t(i, o)
        }
    }(parseInt)), 1 / parseFloat("-0") != -Infinity && (parseFloat = function (t) {
        return function (e) {
            var n = be(String(e)), r = t(n);
            return 0 === r && "-" === X(n, 0, 1) ? -0 : r
        }
    }(parseFloat)), "RangeError: test" !== String(new RangeError("test"))) {
        var _e = function () {
            if (void 0 === this || null === this) throw new TypeError("can't convert " + this + " to object");
            var t = this.name;
            void 0 === t ? t = "Error" : "string" != typeof t && (t = u(t));
            var e = this.message;
            return void 0 === e ? e = "" : "string" != typeof e && (e = u(e)), t ? e ? t + ": " + e : t : e
        };
        Error.prototype.toString = _e
    }
    if (C) {
        var xe = function (t, e) {
            if (V(t, e)) {
                var n = Object.getOwnPropertyDescriptor(t, e);
                n.configurable && (n.enumerable = !1, Object.defineProperty(t, e, n))
            }
        };
        xe(Error.prototype, "message"), "" !== Error.prototype.message && (Error.prototype.message = ""), xe(Error.prototype, "name")
    }
    if ("/a/gim" !== String(/a/gim)) {
        var Se = function () {
            var t = "/" + this.source + "/";
            return this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), t
        };
        RegExp.prototype.toString = Se
    }
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.returnExports = e()
}(this, function () {
    var t, e, n = Function.call, r = Object.prototype, i = n.bind(r.hasOwnProperty), o = n.bind(r.propertyIsEnumerable),
        a = n.bind(r.toString), s = i(r, "__defineGetter__");
    s && (n.bind(r.__defineGetter__), n.bind(r.__defineSetter__), t = n.bind(r.__lookupGetter__), e = n.bind(r.__lookupSetter__));
    var u = function (t) {
        return null == t || "object" != typeof t && "function" != typeof t
    };
    Object.getPrototypeOf || (Object.getPrototypeOf = function (t) {
        var e = t.__proto__;
        return e || null === e ? e : "[object Function]" === a(t.constructor) ? t.constructor.prototype : t instanceof Object ? r : null
    });
    var c = function (t) {
        try {
            return t.sentinel = 0, 0 === Object.getOwnPropertyDescriptor(t, "sentinel").value
        } catch (e) {
            return !1
        }
    };
    if (Object.defineProperty) {
        var f = c({});
        if (!("undefined" == typeof document || c(document.createElement("div"))) || !f) var l = Object.getOwnPropertyDescriptor
    }
    if (!Object.getOwnPropertyDescriptor || l) {
        Object.getOwnPropertyDescriptor = function (n, a) {
            if (u(n)) throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + n);
            if (l) try {
                return l.call(Object, n, a)
            } catch (y) {
            }
            var c;
            if (!i(n, a)) return c;
            if (c = {enumerable: o(n, a), configurable: !0}, s) {
                var f = n.__proto__, h = n !== r;
                h && (n.__proto__ = r);
                var d = t(n, a), p = e(n, a);
                if (h && (n.__proto__ = f), d || p) return d && (c.get = d), p && (c.set = p), c
            }
            return c.value = n[a], c.writable = !0, c
        }
    }
    if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (t) {
        return Object.keys(t)
    }), !Object.create) {
        var h, d = !({__proto__: null} instanceof Object), p = function () {
            if (!document.domain) return !1;
            try {
                return !!new ActiveXObject("htmlfile")
            } catch (t) {
                return !1
            }
        }, y = function () {
            var t, e;
            e = new ActiveXObject("htmlfile");
            return e.write("<script><\/script>"), e.close(), t = e.parentWindow.Object.prototype, e = null, t
        }, g = function () {
            var t, e = document.createElement("iframe"), n = document.body || document.documentElement;
            return e.style.display = "none", n.appendChild(e), e.src = "javascript:", t = e.contentWindow.Object.prototype, n.removeChild(e), e = null, t
        };
        h = d || "undefined" == typeof document ? function () {
            return {__proto__: null}
        } : function () {
            var t = p() ? y() : g();
            delete t.constructor, delete t.hasOwnProperty, delete t.propertyIsEnumerable, delete t.isPrototypeOf, delete t.toLocaleString, delete t.toString, delete t.valueOf;
            var e = function () {
            };
            return e.prototype = t, h = function () {
                return new e
            }, new e
        }, Object.create = function (t, e) {
            var n, r = function () {
            };
            if (null === t) n = h(); else {
                if (null !== t && u(t)) throw new TypeError("Object prototype may only be an Object or null");
                r.prototype = t, n = new r, n.__proto__ = t
            }
            return void 0 !== e && Object.defineProperties(n, e), n
        }
    }
    var v = function (t) {
        try {
            return Object.defineProperty(t, "sentinel", {}), "sentinel" in t
        } catch (e) {
            return !1
        }
    };
    if (Object.defineProperty) {
        var b = v({}), m = "undefined" == typeof document || v(document.createElement("div"));
        if (!b || !m) var w = Object.defineProperty, _ = Object.defineProperties
    }
    if (!Object.defineProperty || w) {
        Object.defineProperty = function (n, i, o) {
            if (u(n), u(o), w) try {
                return w.call(Object, n, i, o)
            } catch (c) {
            }
            if ("value" in o) if (s && (t(n, i) || e(n, i))) {
                var a = n.__proto__;
                n.__proto__ = r, delete n[i], n[i] = o.value, n.__proto__ = a
            } else n[i] = o.value; else ;
            return n
        }
    }
    Object.defineProperties && !_ || (Object.defineProperties = function (t, e) {
        if (_) try {
            return _.call(Object, t, e)
        } catch (n) {
        }
        return Object.keys(e).forEach(function (n) {
            "__proto__" !== n && Object.defineProperty(t, n, e[n])
        }), t
    }), Object.seal || (Object.seal = function (t) {
        if (Object(t) !== t) throw new TypeError("Object.seal can only be called on Objects.");
        return t
    }), Object.freeze || (Object.freeze = function (t) {
        if (Object(t) !== t) throw new TypeError("Object.freeze can only be called on Objects.");
        return t
    });
    try {
        Object.freeze(function () {
        })
    } catch (x) {
        Object.freeze = function (t) {
            return function (e) {
                return "function" == typeof e ? e : t(e)
            }
        }(Object.freeze)
    }
    Object.preventExtensions || (Object.preventExtensions = function (t) {
        if (Object(t) !== t) throw new TypeError("Object.preventExtensions can only be called on Objects.");
        return t
    }), Object.isSealed || (Object.isSealed = function (t) {
        if (Object(t) !== t) throw new TypeError("Object.isSealed can only be called on Objects.");
        return !1
    }), Object.isFrozen || (Object.isFrozen = function (t) {
        if (Object(t) !== t) throw new TypeError("Object.isFrozen can only be called on Objects.");
        return !1
    }), Object.isExtensible || (Object.isExtensible = function (t) {
        if (Object(t) !== t) throw new TypeError("Object.isExtensible can only be called on Objects.");
        for (var e = ""; i(t, e);) e += "?";
        t[e] = !0;
        var n = i(t, e);
        return delete t[e], n
    })
}), function (t) {
    function e() {
    }

    function n(t, e) {
        return function () {
            t.apply(e, arguments)
        }
    }

    function r(t) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(t, this)
    }

    function i(t, e) {
        for (; 3 === t._state;) t = t._value;
        return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void r._immediateFn(function () {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null === n) return void (1 === t._state ? o : a)(e.promise, t._value);
            var r;
            try {
                r = n(t._value)
            } catch (i) {
                return void a(e.promise, i)
            }
            o(e.promise, r)
        }))
    }

    function o(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var i = e.then;
                if (e instanceof r) return t._state = 3, t._value = e, void s(t);
                if ("function" == typeof i) return void c(n(i, e), t)
            }
            t._state = 1, t._value = e, s(t)
        } catch (o) {
            a(t, o)
        }
    }

    function a(t, e) {
        t._state = 2, t._value = e, s(t)
    }

    function s(t) {
        2 === t._state && 0 === t._deferreds.length && r._immediateFn(function () {
            t._handled || r._unhandledRejectionFn(t._value)
        });
        for (var e = 0, n = t._deferreds.length; e < n; e++) i(t, t._deferreds[e]);
        t._deferreds = null
    }

    function u(t, e, n) {
        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
    }

    function c(t, e) {
        var n = !1;
        try {
            t(function (t) {
                n || (n = !0, o(e, t))
            }, function (t) {
                n || (n = !0, a(e, t))
            })
        } catch (r) {
            if (n) return;
            n = !0, a(e, r)
        }
    }

    var f = setTimeout;
    r.prototype["catch"] = function (t) {
        return this.then(null, t)
    }, r.prototype.then = function (t, n) {
        var r = new this.constructor(e);
        return i(this, new u(t, n, r)), r
    }, r.all = function (t) {
        var e = Array.prototype.slice.call(t);
        return new r(function (t, n) {
            function r(o, a) {
                try {
                    if (a && ("object" == typeof a || "function" == typeof a)) {
                        var s = a.then;
                        if ("function" == typeof s) return void s.call(a, function (t) {
                            r(o, t)
                        }, n)
                    }
                    e[o] = a, 0 == --i && t(e)
                } catch (u) {
                    n(u)
                }
            }

            if (0 === e.length) return t([]);
            for (var i = e.length, o = 0; o < e.length; o++) r(o, e[o])
        })
    }, r.resolve = function (t) {
        return t && "object" == typeof t && t.constructor === r ? t : new r(function (e) {
            e(t)
        })
    }, r.reject = function (t) {
        return new r(function (e, n) {
            n(t)
        })
    }, r.race = function (t) {
        return new r(function (e, n) {
            for (var r = 0, i = t.length; r < i; r++) t[r].then(e, n)
        })
    }, r._immediateFn = "function" == typeof setImmediate && function (t) {
        setImmediate(t)
    } || function (t) {
        f(t, 0)
    }, r._unhandledRejectionFn = function (t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
    }, r._setImmediateFn = function (t) {
        r._immediateFn = t
    }, r._setUnhandledRejectionFn = function (t) {
        r._unhandledRejectionFn = t
    }, "undefined" != typeof module && module.exports ? module.exports = r : t.Promise || (t.Promise = r)
}(this), function (t) {
    "use strict";

    function e(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
        return t.toLowerCase()
    }

    function n(t) {
        return "string" != typeof t && (t = String(t)), t
    }

    function r(t) {
        var e = {
            next: function () {
                var e = t.shift();
                return {done: e === undefined, value: e}
            }
        };
        return v.iterable && (e[Symbol.iterator] = function () {
            return e
        }), e
    }

    function i(t) {
        this.map = {}, t instanceof i ? t.forEach(function (t, e) {
            this.append(e, t)
        }, this) : Array.isArray(t) ? t.forEach(function (t) {
            this.append(t[0], t[1])
        }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
            this.append(e, t[e])
        }, this)
    }

    function o(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
    }

    function a(t) {
        return new Promise(function (e, n) {
            t.onload = function () {
                e(t.result)
            }, t.onerror = function () {
                n(t.error)
            }
        })
    }

    function s(t) {
        var e = new FileReader, n = a(e);
        return e.readAsArrayBuffer(t), n
    }

    function u(t) {
        var e = new FileReader, n = a(e);
        return e.readAsText(t), n
    }

    function c(t) {
        for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
        return n.join("")
    }

    function f(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
    }

    function l() {
        return this.bodyUsed = !1, this._initBody = function (t) {
            if (this._bodyInit = t, t) if ("string" == typeof t) this._bodyText = t; else if (v.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t; else if (v.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t; else if (v.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString(); else if (v.arrayBuffer && v.blob && m(t)) this._bodyArrayBuffer = f(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]); else {
                if (!v.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !w(t)) throw new Error("unsupported BodyInit type");
                this._bodyArrayBuffer = f(t)
            } else this._bodyText = "";
            this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : v.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, v.blob && (this.blob = function () {
            var t = o(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                ;
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function () {
            return this._bodyArrayBuffer ? o(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(s)
        }), this.text = function () {
            var t = o(this);
            if (t) return t;
            if (this._bodyBlob) return u(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, v.formData && (this.formData = function () {
            return this.text().then(p)
        }), this.json = function () {
            return this.text().then(JSON.parse)
        }, this
    }

    function h(t) {
        var e = t.toUpperCase();
        return _.indexOf(e) > -1 ? e : t
    }

    function d(t, e) {
        e = e || {};
        var n = e.body;
        if (t instanceof d) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new i(t.headers)), this.method = t.method, this.mode = t.mode, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new i(e.headers)), this.method = h(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n)
    }

    function p(t) {
        var e = new FormData;
        return t.trim().split("&").forEach(function (t) {
            if (t) {
                var n = t.split("="), r = n.shift().replace(/\+/g, " "), i = n.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(r), decodeURIComponent(i))
            }
        }), e
    }

    function y(t) {
        var e = new i;
        return t.split(/\r?\n/).forEach(function (t) {
            var n = t.split(":"), r = n.shift().trim();
            if (r) {
                var i = n.join(":").trim();
                e.append(r, i)
            }
        }), e
    }

    function g(t, e) {
        e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new i(e.headers), this.url = e.url || "", this._initBody(t)
    }

    if (!t.fetch) {
        var v = {
            searchParams: "URLSearchParams" in t,
            iterable: "Symbol" in t && "iterator" in Symbol,
            blob: "FileReader" in t && "Blob" in t && function () {
                try {
                    return new Blob, !0
                } catch (t) {
                    return !1
                }
            }(),
            formData: "FormData" in t,
            arrayBuffer: "ArrayBuffer" in t
        };
        if (v.arrayBuffer) var b = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            m = function (t) {
                return t && DataView.prototype.isPrototypeOf(t)
            }, w = ArrayBuffer.isView || function (t) {
                return t && b.indexOf(Object.prototype.toString.call(t)) > -1
            };
        i.prototype.append = function (t, r) {
            t = e(t), r = n(r);
            var i = this.map[t];
            this.map[t] = i ? i + "," + r : r
        }, i.prototype["delete"] = function (t) {
            delete this.map[e(t)]
        }, i.prototype.get = function (t) {
            return t = e(t), this.has(t) ? this.map[t] : null
        }, i.prototype.has = function (t) {
            return this.map.hasOwnProperty(e(t))
        }, i.prototype.set = function (t, r) {
            this.map[e(t)] = n(r)
        }, i.prototype.forEach = function (t, e) {
            for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
        }, i.prototype.keys = function () {
            var t = [];
            return this.forEach(function (e, n) {
                t.push(n)
            }), r(t)
        }, i.prototype.values = function () {
            var t = [];
            return this.forEach(function (e) {
                t.push(e)
            }), r(t)
        }, i.prototype.entries = function () {
            var t = [];
            return this.forEach(function (e, n) {
                t.push([n, e])
            }), r(t)
        }, v.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
        var _ = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        d.prototype.clone = function () {
            return new d(this, {body: this._bodyInit})
        }, l.call(d.prototype), l.call(g.prototype), g.prototype.clone = function () {
            return new g(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new i(this.headers),
                url: this.url
            })
        }, g.error = function () {
            var t = new g(null, {status: 0, statusText: ""});
            return t.type = "error", t
        };
        var x = [301, 302, 303, 307, 308];
        g.redirect = function (t, e) {
            if (-1 === x.indexOf(e)) throw new RangeError("Invalid status code");
            return new g(null, {status: e, headers: {location: t}})
        }, t.Headers = i, t.Request = d, t.Response = g, t.fetch = function (t, e) {
            return new Promise(function (n, r) {
                var i = new d(t, e), o = new XMLHttpRequest;
                o.onload = function () {
                    var t = {status: o.status, statusText: o.statusText, headers: y(o.getAllResponseHeaders() || "")};
                    t.url = "responseURL" in o ? o.responseURL : t.headers.get("X-Request-URL");
                    var e = "response" in o ? o.response : o.responseText;
                    n(new g(e, t))
                }, o.onerror = function () {
                    r(new TypeError("Network request failed"))
                }, o.ontimeout = function () {
                    r(new TypeError("Network request failed"))
                }, o.open(i.method, i.url, !0), "include" === i.credentials && (o.withCredentials = !0), "responseType" in o && v.blob && (o.responseType = "blob"), i.headers.forEach(function (t, e) {
                    o.setRequestHeader(e, t)
                }), o.send("undefined" == typeof i._bodyInit ? null : i._bodyInit)
            })
        }, t.fetch.polyfill = !0
    }
}("undefined" != typeof self ? self : this), function () {
    function t(t) {
        this.message = t
    }

    var e = "undefined" != typeof exports ? exports : "undefined" != typeof self ? self : $.global,
        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    t.prototype = new Error, t.prototype.name = "InvalidCharacterError", e.btoa || (e.btoa = function (e) {
        for (var r, i, o = String(e), a = 0, s = n, u = ""; o.charAt(0 | a) || (s = "=", a % 1); u += s.charAt(63 & r >> 8 - a % 1 * 8)) {
            if ((i = o.charCodeAt(a += .75)) > 255) throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            r = r << 8 | i
        }
        return u
    }), e.atob || (e.atob = function (e) {
        var r = String(e).replace(/[=]+$/, "");
        if (r.length % 4 == 1) throw new t("'atob' failed: The string to be decoded is not correctly encoded.");
        for (var i, o, a = 0, s = 0, u = ""; o = r.charAt(s++); ~o && (i = a % 4 ? 64 * i + o : o, a++ % 4) ? u += String.fromCharCode(255 & i >> (-2 * a & 6)) : 0) o = n.indexOf(o);
        return u
    })
}(), function () {
    "use strict";

    function t(t, e) {
        var n = t.split("."), r = y;
        !(n[0] in r) && r.execScript && r.execScript("var " + n[0]);
        for (var i; n.length && (i = n.shift());) n.length || e === d ? r = r[i] ? r[i] : r[i] = {} : r[i] = e
    }

    function e(t, e) {
        if (this.index = "number" == typeof e ? e : 0, this.f = 0, this.buffer = t instanceof (g ? Uint8Array : Array) ? t : new (g ? Uint8Array : Array)(32768), 2 * this.buffer.length <= this.index) throw Error("invalid index");
        this.buffer.length <= this.index && n(this)
    }

    function n(t) {
        var e, n = t.buffer, r = n.length, i = new (g ? Uint8Array : Array)(r << 1);
        if (g) i.set(n); else for (e = 0; e < r; ++e) i[e] = n[e];
        return t.buffer = i
    }

    function r(t, e, n) {
        var r, i = "number" == typeof e ? e : e = 0, o = "number" == typeof n ? n : t.length;
        for (r = -1, i = 7 & o; i--; ++e) r = r >>> 8 ^ E[255 & (r ^ t[e])];
        for (i = o >> 3; i--; e += 8) r = r >>> 8 ^ E[255 & (r ^ t[e])], r = r >>> 8 ^ E[255 & (r ^ t[e + 1])], r = r >>> 8 ^ E[255 & (r ^ t[e + 2])], r = r >>> 8 ^ E[255 & (r ^ t[e + 3])], r = r >>> 8 ^ E[255 & (r ^ t[e + 4])], r = r >>> 8 ^ E[255 & (r ^ t[e + 5])], r = r >>> 8 ^ E[255 & (r ^ t[e + 6])], r = r >>> 8 ^ E[255 & (r ^ t[e + 7])];
        return (4294967295 ^ r) >>> 0
    }

    function i(t) {
        this.buffer = new (g ? Uint16Array : Array)(2 * t), this.length = 0
    }

    function o(t, e) {
        this.h = A, this.j = 0, this.input = g && t instanceof Array ? new Uint8Array(t) : t, this.c = 0, e && (e.lazy && (this.j = e.lazy), "number" == typeof e.compressionType && (this.h = e.compressionType), e.outputBuffer && (this.a = g && e.outputBuffer instanceof Array ? new Uint8Array(e.outputBuffer) : e.outputBuffer), "number" == typeof e.outputIndex && (this.c = e.outputIndex)), this.a || (this.a = new (g ? Uint8Array : Array)(32768))
    }

    function a(t, e) {
        this.length = t, this.k = e
    }

    function s(t, e) {
        function n(t, e) {
            var n, r = t.k, i = [], o = 0;
            n = j[t.length], i[o++] = 65535 & n, i[o++] = n >> 16 & 255, i[o++] = n >> 24;
            var a;
            switch (p) {
                case 1 === r:
                    a = [0, r - 1, 0];
                    break;
                case 2 === r:
                    a = [1, r - 2, 0];
                    break;
                case 3 === r:
                    a = [2, r - 3, 0];
                    break;
                case 4 === r:
                    a = [3, r - 4, 0];
                    break;
                case 6 >= r:
                    a = [4, r - 5, 1];
                    break;
                case 8 >= r:
                    a = [5, r - 7, 1];
                    break;
                case 12 >= r:
                    a = [6, r - 9, 2];
                    break;
                case 16 >= r:
                    a = [7, r - 13, 2];
                    break;
                case 24 >= r:
                    a = [8, r - 17, 3];
                    break;
                case 32 >= r:
                    a = [9, r - 25, 3];
                    break;
                case 48 >= r:
                    a = [10, r - 33, 4];
                    break;
                case 64 >= r:
                    a = [11, r - 49, 4];
                    break;
                case 96 >= r:
                    a = [12, r - 65, 5];
                    break;
                case 128 >= r:
                    a = [13, r - 97, 5];
                    break;
                case 192 >= r:
                    a = [14, r - 129, 6];
                    break;
                case 256 >= r:
                    a = [15, r - 193, 6];
                    break;
                case 384 >= r:
                    a = [16, r - 257, 7];
                    break;
                case 512 >= r:
                    a = [17, r - 385, 7];
                    break;
                case 768 >= r:
                    a = [18, r - 513, 8];
                    break;
                case 1024 >= r:
                    a = [19, r - 769, 8];
                    break;
                case 1536 >= r:
                    a = [20, r - 1025, 9];
                    break;
                case 2048 >= r:
                    a = [21, r - 1537, 9];
                    break;
                case 3072 >= r:
                    a = [22, r - 2049, 10];
                    break;
                case 4096 >= r:
                    a = [23, r - 3073, 10];
                    break;
                case 6144 >= r:
                    a = [24, r - 4097, 11];
                    break;
                case 8192 >= r:
                    a = [25, r - 6145, 11];
                    break;
                case 12288 >= r:
                    a = [26, r - 8193, 12];
                    break;
                case 16384 >= r:
                    a = [27, r - 12289, 12];
                    break;
                case 24576 >= r:
                    a = [28, r - 16385, 13];
                    break;
                case 32768 >= r:
                    a = [29, r - 24577, 13];
                    break;
                default:
                    throw"invalid distance"
            }
            n = a, i[o++] = n[0], i[o++] = n[1], i[o++] = n[2];
            var s, u;
            for (s = 0, u = i.length; s < u; ++s) v[b++] = i[s];
            w[i[0]]++, _[i[3]]++, m = t.length + e - 1, l = null
        }

        var r, i, o, a, s, c, f, l, h, y = {}, v = g ? new Uint16Array(2 * e.length) : [], b = 0, m = 0,
            w = new (g ? Uint32Array : Array)(286), _ = new (g ? Uint32Array : Array)(30), x = t.j;
        if (!g) {
            for (o = 0; 285 >= o;) w[o++] = 0;
            for (o = 0; 29 >= o;) _[o++] = 0
        }
        for (w[256] = 1, r = 0, i = e.length; r < i; ++r) {
            for (o = s = 0, a = 3; o < a && r + o !== i; ++o) s = s << 8 | e[r + o];
            if (y[s] === d && (y[s] = []), c = y[s], !(0 < m--)) {
                for (; 0 < c.length && 32768 < r - c[0];) c.shift();
                if (r + 3 >= i) {
                    for (l && n(l, -1), o = 0, a = i - r; o < a; ++o) h = e[r + o], v[b++] = h, ++w[h];
                    break
                }
                0 < c.length ? (f = u(e, r, c), l ? l.length < f.length ? (h = e[r - 1], v[b++] = h, ++w[h], n(f, 0)) : n(l, -1) : f.length < x ? l = f : n(f, 0)) : l ? n(l, -1) : (h = e[r], v[b++] = h, ++w[h])
            }
            c.push(r)
        }
        return v[b++] = 256, w[256]++, t.n = w, t.m = _, g ? v.subarray(0, b) : v
    }

    function u(t, e, n) {
        var r, i, o, s, u, c, f = 0, l = t.length;
        s = 0, c = n.length;
        t:for (; s < c; s++) {
            if (r = n[c - s - 1], o = 3, 3 < f) {
                for (u = f; 3 < u; u--) if (t[r + u - 1] !== t[e + u - 1]) continue t;
                o = f
            }
            for (; 258 > o && e + o < l && t[r + o] === t[e + o];) ++o;
            if (o > f && (i = r, f = o), 258 === o) break
        }
        return new a(f, e - i)
    }

    function c(t, e) {
        var n, r, o, a, s, u = t.length, c = new i(572), l = new (g ? Uint8Array : Array)(u);
        if (!g) for (a = 0; a < u; a++) l[a] = 0;
        for (a = 0; a < u; ++a) 0 < t[a] && c.push(a, t[a]);
        if (n = Array(c.length / 2), r = new (g ? Uint32Array : Array)(c.length / 2), 1 === n.length) return l[c.pop().index] = 1, l;
        for (a = 0, s = c.length / 2; a < s; ++a) n[a] = c.pop(), r[a] = n[a].value;
        for (o = f(r, r.length, e), a = 0, s = n.length; a < s; ++a) l[n[a].index] = o[a];
        return l
    }

    function f(t, e, n) {
        function r(t) {
            var n = d[t][p[t]];
            n === e ? (r(t + 1), r(t + 1)) : --l[n], ++p[t]
        }

        var i, o, a, s, u, c = new (g ? Uint16Array : Array)(n), f = new (g ? Uint8Array : Array)(n),
            l = new (g ? Uint8Array : Array)(e), h = Array(n), d = Array(n), p = Array(n), y = (1 << n) - e,
            v = 1 << n - 1;
        for (c[n - 1] = e, o = 0; o < n; ++o) y < v ? f[o] = 0 : (f[o] = 1, y -= v), y <<= 1, c[n - 2 - o] = (c[n - 1 - o] / 2 | 0) + e;
        for (c[0] = f[0], h[0] = Array(c[0]), d[0] = Array(c[0]), o = 1; o < n; ++o) c[o] > 2 * c[o - 1] + f[o] && (c[o] = 2 * c[o - 1] + f[o]), h[o] = Array(c[o]), d[o] = Array(c[o]);
        for (i = 0; i < e; ++i) l[i] = n;
        for (a = 0; a < c[n - 1]; ++a) h[n - 1][a] = t[a], d[n - 1][a] = a;
        for (i = 0; i < n; ++i) p[i] = 0;
        for (1 === f[n - 1] && (--l[0], ++p[n - 1]), o = n - 2; 0 <= o; --o) {
            for (s = i = 0, u = p[o + 1], a = 0; a < c[o]; a++) s = h[o + 1][u] + h[o + 1][u + 1], s > t[i] ? (h[o][a] = s, d[o][a] = e, u += 2) : (h[o][a] = t[i], d[o][a] = i, ++i);
            p[o] = 0, 1 === f[o] && r(o)
        }
        return l
    }

    function l(t) {
        var e, n, r, i, o = new (g ? Uint16Array : Array)(t.length), a = [], s = [], u = 0;
        for (e = 0, n = t.length; e < n; e++) a[t[e]] = 1 + (0 | a[t[e]]);
        for (e = 1, n = 16; e <= n; e++) s[e] = u, u += 0 | a[e], u <<= 1;
        for (e = 0, n = t.length; e < n; e++) for (u = s[t[e]], s[t[e]] += 1, r = o[e] = 0, i = t[e]; r < i; r++) o[e] = o[e] << 1 | 1 & u, u >>>= 1;
        return o
    }

    function h(t, e) {
        this.input = t, this.c = this.i = 0, this.d = {}, e && (e.flags && (this.d = e.flags), "string" == typeof e.filename && (this.filename = e.filename), "string" == typeof e.comment && (this.l = e.comment), e.deflateOptions && (this.e = e.deflateOptions)), this.e || (this.e = {})
    }

    var d = void 0, p = !0, y = this,
        g = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;
    e.prototype.b = function (t, e, r) {
        var i, o = this.buffer, a = this.index, s = this.f, u = o[a];
        if (r && 1 < e && (t = 8 < e ? (x[255 & t] << 24 | x[t >>> 8 & 255] << 16 | x[t >>> 16 & 255] << 8 | x[t >>> 24 & 255]) >> 32 - e : x[t] >> 8 - e), 8 > e + s) u = u << e | t, s += e; else for (i = 0; i < e; ++i) u = u << 1 | t >> e - i - 1 & 1, 8 == ++s && (s = 0, o[a++] = x[u], u = 0, a === o.length && (o = n(this)));
        o[a] = u, this.buffer = o, this.f = s, this.index = a
    }, e.prototype.finish = function () {
        var t, e = this.buffer, n = this.index;
        return 0 < this.f && (e[n] <<= 8 - this.f, e[n] = x[e[n]], n++), g ? t = e.subarray(0, n) : (e.length = n, t = e), t
    };
    var v, b = new (g ? Uint8Array : Array)(256);
    for (v = 0; 256 > v; ++v) {
        for (var m = v, w = m, _ = 7, m = m >>> 1; m; m >>>= 1) w <<= 1, w |= 1 & m, --_;
        b[v] = (w << _ & 255) >>> 0
    }
    var x = b,
        S = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
        E = g ? new Uint32Array(S) : S;
    i.prototype.getParent = function (t) {
        return 2 * ((t - 2) / 4 | 0)
    }, i.prototype.push = function (t, e) {
        var n, r, i, o = this.buffer;
        for (n = this.length, o[this.length++] = e, o[this.length++] = t; 0 < n && (r = this.getParent(n), o[n] > o[r]);) i = o[n], o[n] = o[r], o[r] = i, i = o[n + 1], o[n + 1] = o[r + 1], o[r + 1] = i, n = r;
        return this.length
    }, i.prototype.pop = function () {
        var t, e, n, r, i, o = this.buffer;
        for (e = o[0], t = o[1], this.length -= 2, o[0] = o[this.length], o[1] = o[this.length + 1], i = 0; !((r = 2 * i + 2) >= this.length) && (r + 2 < this.length && o[r + 2] > o[r] && (r += 2), o[r] > o[i]);) n = o[i], o[i] = o[r], o[r] = n, n = o[i + 1], o[i + 1] = o[r + 1], o[r + 1] = n, i = r;
        return {index: t, value: e, length: this.length}
    };
    var T, A = 2, O = [];
    for (T = 0; 288 > T; T++) switch (p) {
        case 143 >= T:
            O.push([T + 48, 8]);
            break;
        case 255 >= T:
            O.push([T - 144 + 400, 9]);
            break;
        case 279 >= T:
            O.push([T - 256 + 0, 7]);
            break;
        case 287 >= T:
            O.push([T - 280 + 192, 8]);
            break;
        default:
            throw"invalid literal: " + T
    }
    o.prototype.g = function () {
        var t, n, r, i, o = this.input;
        switch (this.h) {
            case 0:
                for (r = 0, i = o.length; r < i;) {
                    n = g ? o.subarray(r, r + 65535) : o.slice(r, r + 65535), r += n.length;
                    var a = n, u = r === i, f = d, h = d, y = d, v = d, b = d, m = this.a, w = this.c;
                    if (g) {
                        for (m = new Uint8Array(this.a.buffer); m.length <= w + a.length + 5;) m = new Uint8Array(m.length << 1);
                        m.set(this.a)
                    }
                    if (f = u ? 1 : 0, m[w++] = 0 | f, h = a.length, y = 65536 + ~h & 65535, m[w++] = 255 & h, m[w++] = h >>> 8 & 255, m[w++] = 255 & y, m[w++] = y >>> 8 & 255, g) m.set(a, w), w += a.length, m = m.subarray(0, w); else {
                        for (v = 0, b = a.length; v < b; ++v) m[w++] = a[v];
                        m.length = w
                    }
                    this.c = w, this.a = m
                }
                break;
            case 1:
                var _ = new e(g ? new Uint8Array(this.a.buffer) : this.a, this.c);
                _.b(1, 1, p), _.b(1, 2, p);
                var x, S, E, T = s(this, o);
                for (x = 0, S = T.length; x < S; x++) if (E = T[x], e.prototype.b.apply(_, O[E]), 256 < E) _.b(T[++x], T[++x], p), _.b(T[++x], 5), _.b(T[++x], T[++x], p); else if (256 === E) break;
                this.a = _.finish(), this.c = this.a.length;
                break;
            case A:
                var D, j, k, M, P, C, I, R, F, B, L, N, U, H, G,
                    X = new e(g ? new Uint8Array(this.a.buffer) : this.a, this.c),
                    z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], K = Array(19);
                for (D = A, X.b(1, 1, p), X.b(D, 2, p), j = s(this, o), C = c(this.n, 15), I = l(C), R = c(this.m, 7), F = l(R), k = 286; 257 < k && 0 === C[k - 1]; k--) ;
                for (M = 30; 1 < M && 0 === R[M - 1]; M--) ;
                var W, V, Y, q, J, $, Z = k, Q = M, tt = new (g ? Uint32Array : Array)(Z + Q),
                    et = new (g ? Uint32Array : Array)(316), nt = new (g ? Uint8Array : Array)(19);
                for (W = V = 0; W < Z; W++) tt[V++] = C[W];
                for (W = 0; W < Q; W++) tt[V++] = R[W];
                if (!g) for (W = 0, q = nt.length; W < q; ++W) nt[W] = 0;
                for (W = J = 0, q = tt.length; W < q; W += V) {
                    for (V = 1; W + V < q && tt[W + V] === tt[W]; ++V) ;
                    if (Y = V, 0 === tt[W]) if (3 > Y) for (; 0 < Y--;) et[J++] = 0, nt[0]++; else for (; 0 < Y;) $ = 138 > Y ? Y : 138, $ > Y - 3 && $ < Y && ($ = Y - 3), 10 >= $ ? (et[J++] = 17, et[J++] = $ - 3, nt[17]++) : (et[J++] = 18, et[J++] = $ - 11, nt[18]++), Y -= $; else if (et[J++] = tt[W], nt[tt[W]]++, 3 > --Y) for (; 0 < Y--;) et[J++] = tt[W], nt[tt[W]]++; else for (; 0 < Y;) $ = 6 > Y ? Y : 6, $ > Y - 3 && $ < Y && ($ = Y - 3), et[J++] = 16, et[J++] = $ - 3, nt[16]++, Y -= $
                }
                for (t = g ? et.subarray(0, J) : et.slice(0, J), B = c(nt, 7), H = 0; 19 > H; H++) K[H] = B[z[H]];
                for (P = 19; 4 < P && 0 === K[P - 1]; P--) ;
                for (L = l(B), X.b(k - 257, 5, p), X.b(M - 1, 5, p), X.b(P - 4, 4, p), H = 0; H < P; H++) X.b(K[H], 3, p);
                for (H = 0, G = t.length; H < G; H++) if (N = t[H], X.b(L[N], B[N], p), 16 <= N) {
                    switch (H++, N) {
                        case 16:
                            U = 2;
                            break;
                        case 17:
                            U = 3;
                            break;
                        case 18:
                            U = 7;
                            break;
                        default:
                            throw"invalid code: " + N
                    }
                    X.b(t[H], U, p)
                }
                var rt, it, ot, at, st, ut, ct, ft, lt = [I, C], ht = [F, R];
                for (st = lt[0], ut = lt[1], ct = ht[0], ft = ht[1], rt = 0, it = j.length; rt < it; ++rt) if (ot = j[rt], X.b(st[ot], ut[ot], p), 256 < ot) X.b(j[++rt], j[++rt], p), at = j[++rt], X.b(ct[at], ft[at], p), X.b(j[++rt], j[++rt], p); else if (256 === ot) break;
                this.a = X.finish(), this.c = this.a.length;
                break;
            default:
                throw"invalid compression type"
        }
        return this.a
    };
    var D = function () {
        var t, e, n = [];
        for (t = 3; 258 >= t; t++) e = function (t) {
            switch (p) {
                case 3 === t:
                    return [257, t - 3, 0];
                case 4 === t:
                    return [258, t - 4, 0];
                case 5 === t:
                    return [259, t - 5, 0];
                case 6 === t:
                    return [260, t - 6, 0];
                case 7 === t:
                    return [261, t - 7, 0];
                case 8 === t:
                    return [262, t - 8, 0];
                case 9 === t:
                    return [263, t - 9, 0];
                case 10 === t:
                    return [264, t - 10, 0];
                case 12 >= t:
                    return [265, t - 11, 1];
                case 14 >= t:
                    return [266, t - 13, 1];
                case 16 >= t:
                    return [267, t - 15, 1];
                case 18 >= t:
                    return [268, t - 17, 1];
                case 22 >= t:
                    return [269, t - 19, 2];
                case 26 >= t:
                    return [270, t - 23, 2];
                case 30 >= t:
                    return [271, t - 27, 2];
                case 34 >= t:
                    return [272, t - 31, 2];
                case 42 >= t:
                    return [273, t - 35, 3];
                case 50 >= t:
                    return [274, t - 43, 3];
                case 58 >= t:
                    return [275, t - 51, 3];
                case 66 >= t:
                    return [276, t - 59, 3];
                case 82 >= t:
                    return [277, t - 67, 4];
                case 98 >= t:
                    return [278, t - 83, 4];
                case 114 >= t:
                    return [279, t - 99, 4];
                case 130 >= t:
                    return [280, t - 115, 4];
                case 162 >= t:
                    return [281, t - 131, 5];
                case 194 >= t:
                    return [282, t - 163, 5];
                case 226 >= t:
                    return [283, t - 195, 5];
                case 257 >= t:
                    return [284, t - 227, 5];
                case 258 === t:
                    return [285, t - 258, 0];
                default:
                    throw"invalid length: " + t
            }
        }(t), n[t] = e[2] << 24 | e[1] << 16 | e[0];
        return n
    }(), j = g ? new Uint32Array(D) : D;
    h.prototype.g = function () {
        var t, e, n, i, a, s, u, c, f = new (g ? Uint8Array : Array)(32768), l = 0, h = this.input, p = this.i,
            y = this.filename, v = this.l;
        if (f[l++] = 31, f[l++] = 139, f[l++] = 8, t = 0, this.d.fname && (t |= P), this.d.fcomment && (t |= C), this.d.fhcrc && (t |= M), f[l++] = t, e = (Date.now ? Date.now() : +new Date) / 1e3 | 0, f[l++] = 255 & e, f[l++] = e >>> 8 & 255, f[l++] = e >>> 16 & 255, f[l++] = e >>> 24 & 255, f[l++] = 0, f[l++] = k, this.d.fname !== d) {
            for (u = 0, c = y.length; u < c; ++u) s = y.charCodeAt(u), 255 < s && (f[l++] = s >>> 8 & 255), f[l++] = 255 & s;
            f[l++] = 0
        }
        if (this.d.comment) {
            for (u = 0, c = v.length; u < c; ++u) s = v.charCodeAt(u), 255 < s && (f[l++] = s >>> 8 & 255), f[l++] = 255 & s;
            f[l++] = 0
        }
        return this.d.fhcrc && (n = 65535 & r(f, 0, l), f[l++] = 255 & n, f[l++] = n >>> 8 & 255), this.e.outputBuffer = f, this.e.outputIndex = l, a = new o(h, this.e), f = a.g(), l = a.c, g && (l + 8 > f.buffer.byteLength ? (this.a = new Uint8Array(l + 8), this.a.set(new Uint8Array(f.buffer)), f = this.a) : f = new Uint8Array(f.buffer)), i = r(h, d, d), f[l++] = 255 & i, f[l++] = i >>> 8 & 255, f[l++] = i >>> 16 & 255, f[l++] = i >>> 24 & 255, c = h.length, f[l++] = 255 & c, f[l++] = c >>> 8 & 255, f[l++] = c >>> 16 & 255, f[l++] = c >>> 24 & 255, this.i = p, g && l < f.length && (this.a = f = f.subarray(0, l)), f
    };
    var k = 255, M = 2, P = 8, C = 16;
    t("Zlib.Gzip", h), t("Zlib.Gzip.prototype.compress", h.prototype.g)
}.call(this), window.dunkey = function (t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {exports: {}, id: r, loaded: !1};
        return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    var o = n(17), a = r(o), s = n(18), u = r(s), c = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, a["default"])(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), f = n(74), l = r(f), h = n(73), d = r(h), p = n(45), y = r(p);
    if (n(146), window.Symbol = n(138), isIE() && isIE() < 9) throw window.dunkey = null, console.log("dunkey not support"), "dunkey not support";
    if (isIE() && isIE() <= 10) {
        window.Worker = n(69);
        var g = n(147);
        window.ArrayBuffer = g.ArrayBuffer, window.DataView = g.DataView, window.Float32Array = g.Float32Array, window.Float64Array = g.Float64Array, window.Int8Array = g.Int8Array, window.Int16Array = g.Int16Array, window.Int32Array = g.Int32Array, window.Uint8Array = g.Uint8Array, window.Uint8ClampedArray = g.Uint8ClampedArray, window.Uint16Array = g.Uint16Array, window.Uint32Array = g.Uint32Array
    }
    var v = {}, b = n(70), m = function () {
        function t() {
            i(this, t), this.scene = "", this.eventHandle = {}, this.setEarlyHandle("DOMContentLoaded"), this.earlyEvent = {}, this.version = "c245aca@2018-4-18"
        }

        return c(t, [{
            key: "setEarlyHandle", value: function (t) {
                var e = this;
                window.addEventListener(t, function () {
                    e.earlyEvent[t] = {t: Date.now()}
                })
            }
        }, {
            key: "run", value: function (t, e, n) {
                var r = this;
                if (this.requester) return this.options = e, this.scene = t, "cookie" in this.options || (e.cookie = !0), void (0, y["default"])(t, void 0, !e.is_af, !0).then(function (t) {
                    n(r.did, t)
                });
                t ? this.scene = t : console.log("pls give me a scene"), this.options = e, b || console.log("ERROR! pls add devicebox script");
                var i = e.ana.host, o = e.ana.path, a = e.is_af, s = new b({
                    baseurl: "https://af.zhongan.io",
                    asseturi: "/assets",
                    genurl: "https://af.zhongan.io/did.jsonp",
                    phpuri: "/php"
                }), c = s.getDid();
                u["default"].all([c, (0, y["default"])(t, void 0, !a)]).then(function (s) {
                    var u = s[0], c = s[1];
                    r.did = u;
                    var f = new l["default"](r, {host: i, path: o, did: u, scene: t, is_af: a});
                    r.requester = f;
                    var h = new d["default"](null, f);
                    if (r.eventCore = h, r.earlyEvent.DOMContentLoaded && r.earlyEvent.DOMContentLoaded.t ? r.earlyEvent.DOMContentLoaded = {
                        cookie: r.options.cookie ? document.cookie : "nocookie",
                        t: r.earlyEvent.DOMContentLoaded.t
                    } : r.earlyEvent.DOMContentLoaded = {
                        cookie: r.options.cookie ? document.cookie : "nocookie",
                        t: Date.now()
                    }, r.eventCore.sendData("DOMContentLoaded", r.earlyEvent.DOMContentLoaded), e.stat) {
                        var p = e.stat.host, y = e.stat.path;
                        new l["default"](p, y, u, "request.EventRequest", "stat").send({
                            ua: navigator.userAgent,
                            wh: window.screen.width + "x" + window.screen.height + "@" + window.devicePixelRatio
                        })
                    }
                    n(u, c)
                })["catch"](function (t) {
                    console.log(t)
                })
            }
        }, {
            key: "initPlugin", value: function (t, e) {
                var n = v[t];
                return n ? (this.plugins = this.plugins || {}, void (this.plugins[t] = new n(e))) : void console.log("can not find this plugin in dunkey: ", t)
            }
        }, {
            key: "changeScene", value: function (t) {
                this.scene = t, this.requester.send({e: "dunkey/changeScene", d: {t: Date.now()}})
            }
        }, {
            key: "on", value: function (t, e) {
                this.eventHandle[t] = this.eventHandle[t] || [], this.eventHandle[t].push(e)
            }
        }, {
            key: "emit", value: function (t, e) {
                this.eventHandle[t] && this.eventHandle[t].map(function (t) {
                    setTimeout(t(e), 0)
                })
            }
        }]), t
    }(), w = new m;
    t.exports = w
}, function (t, e) {
    var n = t.exports = {version: "2.5.3"};
    "number" == typeof __e && (__e = n)
}, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (t, e, n) {
    var r = n(35)("wks"), i = n(25), o = n(2).Symbol, a = "function" == typeof o;
    (t.exports = function (t) {
        return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
    }).store = r
}, function (t, e, n) {
    var r = n(10);
    t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e, n) {
    var r = n(4), i = n(49), o = n(39), a = Object.defineProperty;
    e.f = n(6) ? Object.defineProperty : function (t, e, n) {
        if (r(t), e = o(e, !0), r(n), i) try {
            return a(t, e, n)
        } catch (t) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    t.exports = !n(14)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, n) {
    var r = n(2), i = n(1), o = n(13), a = n(9), s = "prototype", u = function (t, e, n) {
        var c, f, l, h = t & u.F, d = t & u.G, p = t & u.S, y = t & u.P, g = t & u.B, v = t & u.W,
            b = d ? i : i[e] || (i[e] = {}), m = b[s], w = d ? r : p ? r[e] : (r[e] || {})[s];
        d && (n = e);
        for (c in n) (f = !h && w && void 0 !== w[c]) && c in b || (l = f ? w[c] : n[c], b[c] = d && "function" != typeof w[c] ? n[c] : g && f ? o(l, r) : v && w[c] == l ? function (t) {
            var e = function (e, n, r) {
                if (this instanceof t) {
                    switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e);
                        case 2:
                            return new t(e, n)
                    }
                    return new t(e, n, r)
                }
                return t.apply(this, arguments)
            };
            return e[s] = t[s], e
        }(l) : y && "function" == typeof l ? o(Function.call, l) : l, y && ((b.virtual || (b.virtual = {}))[c] = l, t & u.R && m && !m[c] && a(m, c, l)))
    };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    var r = n(5), i = n(16);
    t.exports = n(6) ? function (t, e, n) {
        return r.f(t, e, i(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e, n) {
    var r = n(97), i = n(28);
    t.exports = function (t) {
        return r(i(t))
    }
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e, n) {
    var r = n(21);
    t.exports = function (t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e, n) {
    t.exports = {"default": n(83), __esModule: !0}
}, function (t, e, n) {
    t.exports = {"default": n(87), __esModule: !0}
}, function (t, e, n) {
    t.exports = {"default": n(88), __esModule: !0}
}, function (t, e, n) {
    t.exports = {"default": n(89), __esModule: !0}
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e) {
    t.exports = !0
}, function (t, e, n) {
    var r = n(59), i = n(30);
    t.exports = Object.keys || function (t) {
        return r(t, i)
    }
}, function (t, e, n) {
    var r = n(5).f, i = n(8), o = n(3)("toStringTag");
    t.exports = function (t, e, n) {
        t && !i(t = n ? t : t.prototype, o) && r(t, o, {configurable: !0, value: e})
    }
}, function (t, e) {
    var n = 0, r = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function (t, e, n) {
    "use strict";
    var r = n(107)(!0);
    n(52)(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {value: void 0, done: !0} : (t = r(e, n), this._i += t.length, {value: t, done: !1})
    })
}, function (t, e, n) {
    t.exports = {"default": n(82), __esModule: !0}
}, function (t, e) {
    t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e, n) {
    var r = n(10), i = n(2).document, o = r(i) && r(i.createElement);
    t.exports = function (t) {
        return o ? i.createElement(t) : {}
    }
}, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, n) {
    "use strict";

    function r(t) {
        var e, n;
        this.promise = new t(function (t, r) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = r
        }), this.resolve = i(e), this.reject = i(n)
    }

    var i = n(21);
    t.exports.f = function (t) {
        return new r(t)
    }
}, function (t, e) {
    e.f = {}.propertyIsEnumerable
}, function (t, e, n) {
    var r = n(7), i = n(1), o = n(14);
    t.exports = function (t, e) {
        var n = (i.Object || {})[t] || Object[t], a = {};
        a[t] = e(n), r(r.S + r.F * o(function () {
            n(1)
        }), "Object", a)
    }
}, function (t, e, n) {
    var r = n(35)("keys"), i = n(25);
    t.exports = function (t) {
        return r[t] || (r[t] = i(t))
    }
}, function (t, e, n) {
    var r = n(2), i = "__core-js_shared__", o = r[i] || (r[i] = {});
    t.exports = function (t) {
        return o[t] || (o[t] = {})
    }
}, function (t, e) {
    var n = Math.ceil, r = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function (t, e, n) {
    var r = n(36), i = Math.min;
    t.exports = function (t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function (t, e, n) {
    var r = n(28);
    t.exports = function (t) {
        return Object(r(t))
    }
}, function (t, e, n) {
    var r = n(10);
    t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e, n) {
    var r = n(2), i = n(1), o = n(22), a = n(41), s = n(5).f;
    t.exports = function (t) {
        var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {value: a.f(t)})
    }
}, function (t, e, n) {
    e.f = n(3)
}, function (t, e, n) {
    var r = n(47), i = n(3)("iterator"), o = n(15);
    t.exports = n(1).getIteratorMethod = function (t) {
        if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)]
    }
}, function (t, e, n) {
    n(111);
    for (var r = n(2), i = n(9), o = n(15), a = n(3)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
        var c = s[u], f = r[c], l = f && f.prototype;
        l && !l[a] && i(l, a, c), o[c] = o.Array
    }
}, function (t, e, n) {
    "use strict";
    var r = n(125)();
    t.exports = function (t) {
        return t !== r && null !== t
    }
}, function (t, e, n) {
    "use strict";

    function r() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "abcd1234",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12, n = arguments[2], r = arguments[3];
        return new o["default"](function (i, o) {
            if (!r && u && !c) return c = t, void i(u);
            if (!r && u && t === c) i(u); else if (c = t, n) {
                var f = Date.now();
                u = s(Math.random().toString() + f.toString(16) + t).toString(), i(u)
            } else a.mint(t, e, function (t) {
                u = t, i(u)
            })
        })
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(18), o = function (t) {
        return t && t.__esModule ? t : {"default": t}
    }(i);
    e["default"] = r;
    var a = n(67), s = n(123), u = null, c = null
}, function (t, e, n) {
    t.exports = {"default": n(86), __esModule: !0}
}, function (t, e, n) {
    var r = n(12), i = n(3)("toStringTag"), o = "Arguments" == r(function () {
        return arguments
    }()), a = function (t, e) {
        try {
            return t[e]
        } catch (t) {
        }
    };
    t.exports = function (t) {
        var e, n, s;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = a(e = Object(t), i)) ? n : o ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s
    }
}, function (t, e, n) {
    var r = n(2).document;
    t.exports = r && r.documentElement
}, function (t, e, n) {
    t.exports = !n(6) && !n(14)(function () {
        return 7 != Object.defineProperty(n(29)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, n) {
    var r = n(15), i = n(3)("iterator"), o = Array.prototype;
    t.exports = function (t) {
        return void 0 !== t && (r.Array === t || o[i] === t)
    }
}, function (t, e, n) {
    var r = n(4);
    t.exports = function (t, e, n, i) {
        try {
            return i ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t["return"];
            throw void 0 !== o && r(o.call(t)), e
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(22), i = n(7), o = n(62), a = n(9), s = n(8), u = n(15), c = n(99), f = n(24), l = n(104),
        h = n(3)("iterator"), d = !([].keys && "next" in [].keys()), p = "keys", y = "values", g = function () {
            return this
        };
    t.exports = function (t, e, n, v, b, m, w) {
        c(n, e, v);
        var _, x, S, E = function (t) {
                if (!d && t in D) return D[t];
                switch (t) {
                    case p:
                    case y:
                        return function () {
                            return new n(this, t)
                        }
                }
                return function () {
                    return new n(this, t)
                }
            }, T = e + " Iterator", A = b == y, O = !1, D = t.prototype, j = D[h] || D["@@iterator"] || b && D[b],
            k = !d && j || E(b), M = b ? A ? E("entries") : k : void 0, P = "Array" == e ? D.entries || j : j;
        if (P && (S = l(P.call(new t))) !== Object.prototype && S.next && (f(S, T, !0), r || s(S, h) || a(S, h, g)), A && j && j.name !== y && (O = !0, k = function () {
            return j.call(this)
        }),
        r && !w || !d && !O && D[h] || a(D, h, k), u[e] = k, u[T] = g, b) if (_ = {
            values: A ? k : E(y),
            keys: m ? k : E(p),
            entries: M
        }, w) for (x in _) x in D || o(D, x, _[x]); else i(i.P + i.F * (d || O), e, _);
        return _
    }
}, function (t, e, n) {
    var r = n(3)("iterator"), i = !1;
    try {
        var o = [7][r]();
        o["return"] = function () {
            i = !0
        }, Array.from(o, function () {
            throw 2
        })
    } catch (t) {
    }
    t.exports = function (t, e) {
        if (!e && !i) return !1;
        var n = !1;
        try {
            var o = [7], a = o[r]();
            a.next = function () {
                return {done: n = !0}
            }, o[r] = function () {
                return a
            }, t(o)
        } catch (t) {
        }
        return n
    }
}, function (t, e, n) {
    var r = n(4), i = n(103), o = n(30), a = n(34)("IE_PROTO"), s = function () {
    }, u = "prototype", c = function () {
        var t, e = n(29)("iframe"), r = o.length;
        for (e.style.display = "none", n(48).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c[u][o[r]];
        return c()
    };
    t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (s[u] = r(t), n = new s, s[u] = null, n[a] = t) : n = c(), void 0 === e ? n : i(n, e)
    }
}, function (t, e, n) {
    var r = n(32), i = n(16), o = n(11), a = n(39), s = n(8), u = n(49), c = Object.getOwnPropertyDescriptor;
    e.f = n(6) ? c : function (t, e) {
        if (t = o(t), e = a(e, !0), u) try {
            return c(t, e)
        } catch (t) {
        }
        if (s(t, e)) return i(!r.f.call(t, e), t[e])
    }
}, function (t, e, n) {
    var r = n(11), i = n(57).f, o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function (t) {
            try {
                return i(t)
            } catch (t) {
                return a.slice()
            }
        };
    t.exports.f = function (t) {
        return a && "[object Window]" == o.call(t) ? s(t) : i(r(t))
    }
}, function (t, e, n) {
    var r = n(59), i = n(30).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
        return r(t, i)
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e, n) {
    var r = n(8), i = n(11), o = n(92)(!1), a = n(34)("IE_PROTO");
    t.exports = function (t, e) {
        var n, s = i(t), u = 0, c = [];
        for (n in s) n != a && r(s, n) && c.push(n);
        for (; e.length > u;) r(s, n = e[u++]) && (~o(c, n) || c.push(n));
        return c
    }
}, function (t, e) {
    t.exports = function (t) {
        try {
            return {e: !1, v: t()}
        } catch (t) {
            return {e: !0, v: t}
        }
    }
}, function (t, e, n) {
    var r = n(4), i = n(10), o = n(31);
    t.exports = function (t, e) {
        if (r(t), i(e) && e.constructor === t) return e;
        var n = o.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function (t, e, n) {
    t.exports = n(9)
}, function (t, e, n) {
    var r = n(4), i = n(21), o = n(3)("species");
    t.exports = function (t, e) {
        var n, a = r(t).constructor;
        return void 0 === a || void 0 == (n = r(a)[o]) ? e : i(n)
    }
}, function (t, e, n) {
    var r, i, o, a = n(13), s = n(96), u = n(48), c = n(29), f = n(2), l = f.process, h = f.setImmediate,
        d = f.clearImmediate, p = f.MessageChannel, y = f.Dispatch, g = 0, v = {}, b = "onreadystatechange",
        m = function () {
            var t = +this;
            if (v.hasOwnProperty(t)) {
                var e = v[t];
                delete v[t], e()
            }
        }, w = function (t) {
            m.call(t.data)
        };
    h && d || (h = function (t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return v[++g] = function () {
            s("function" == typeof t ? t : Function(t), e)
        }, r(g), g
    }, d = function (t) {
        delete v[t]
    }, "process" == n(12)(l) ? r = function (t) {
        l.nextTick(a(m, t, 1))
    } : y && y.now ? r = function (t) {
        y.now(a(m, t, 1))
    } : p ? (i = new p, o = i.port2, i.port1.onmessage = w, r = a(o.postMessage, o, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function (t) {
        f.postMessage(t + "", "*")
    }, f.addEventListener("message", w, !1)) : r = b in c("script") ? function (t) {
        u.appendChild(c("script"))[b] = function () {
            u.removeChild(this), m.call(t)
        }
    } : function (t) {
        setTimeout(a(m, t, 1), 0)
    }), t.exports = {set: h, clear: d}
}, function (t, e) {
}, function (t, e, n) {
    var r, i, o;
    !function (n, a) {
        i = [e, t], r = a, void 0 !== (o = "function" == typeof r ? r.apply(e, i) : r) && (t.exports = o)
    }(0, function (t, e) {
        "use strict";

        function n() {
            return "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random())
        }

        function r(t) {
            try {
                delete window[t]
            } catch (e) {
                window[t] = void 0
            }
        }

        function i(t) {
            var e = document.getElementById(t);
            e && document.getElementsByTagName("head")[0].removeChild(e)
        }

        function o(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], o = t,
                s = e.timeout || a.timeout, u = e.jsonpCallback || a.jsonpCallback, c = void 0;
            return new Promise(function (a, f) {
                var l = e.jsonpCallbackFunction || n(), h = u + "_" + l;
                window[l] = function (t) {
                    a({
                        ok: !0, json: function () {
                            return Promise.resolve(t)
                        }
                    }), c && clearTimeout(c), i(h), r(l)
                }, o += -1 === o.indexOf("?") ? "?" : "&";
                var d = document.createElement("script");
                d.setAttribute("src", "" + o + u + "=" + l), e.charset && d.setAttribute("charset", e.charset), d.id = h, document.getElementsByTagName("head")[0].appendChild(d), c = setTimeout(function () {
                    f(new Error("JSONP request to " + t + " timed out")), r(l), i(h), window[l] = function () {
                        r(l)
                    }
                }, s), d.onerror = function () {
                    f(new Error("JSONP request to " + t + " failed")), r(l), i(h), c && clearTimeout(c)
                }
            })
        }

        var a = {timeout: 5e3, jsonpCallback: "callback", jsonpCallbackFunction: null};
        e.exports = o
    })
}, function (t, e, n) {
    "use strict";
    var r = n(27), i = function (t) {
        return t && t.__esModule ? t : {"default": t}
    }(r), o = n(149);
    window.isIE = function () {
        var t = navigator.userAgent.toLowerCase();
        return -1 != t.indexOf("msie") && parseInt(t.split("msie")[1])
    };
    var a = {
        parallelism: navigator.hardwareConcurrency || 4, workers: {}, requests: {}, makeWorkers: function (t) {
            var e, n;
            for (this.workers[t] = [], e = 0; e < this.parallelism; e++) n = isIE() && isIE() <= 10 ? new Worker("http://7xn38i.com1.z0.glb.clouddn.com/hashcash_worker.js") : new o, n.onmessage = this.hashcallback, this.workers[t].push(n);
            this.workers[t]
        }, hashcash: function (t, e, n) {
            function r(t) {
                return 1 === t.length ? "0" + t : t
            }

            e || (e = 16);
            var o = new Date, a = "1:" + e + ":";
            a += r((o.getFullYear() % 100).toString()), a += r((o.getMonth() + 1).toString()), a += r(o.getDate().toString()), a += ":" + t + "::" + function () {
                for (var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.*@$", e = ""; e.length < 8;) e += t[Math.floor(Math.random() * t.length)];
                return e
            }() + ":", this.makeWorkers(n);
            var s, u;
            for (u = 0; u < this.workers[n].length; u++) s = this.workers[n][u], s.postMessage((0, i["default"])({
                reqid: n,
                base: a,
                cost: e,
                multiple: this.workers[n].length,
                start: u
            }))
        }, hashcallback: function (t) {
            var e = JSON.parse(t.data), n = e.reqid, r = e.hashcash;
            if (!a.requests[n]) return !1;
            a.requests[n](r), a.requests[n] = void 0;
            var i, o;
            for (o = 0; o < a.workers[n].length; o++) i = a.workers[n][o], i.terminate()
        }, mint: function (t, e, n) {
            var r = Math.floor(1e8 * Math.random());
            this.requests[r] = n, this.hashcash(t, e, r)
        }
    };
    t.exports = a
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function i(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return (0, S["default"])(t)
    }

    function o(t) {
        return "object" === ("undefined" == typeof HTMLElement ? "undefined" : k(HTMLElement)) ? t instanceof HTMLElement : !!t && "object" === (void 0 === t ? "undefined" : k(t)) && 1 === t.nodeType && "string" == typeof t.nodeName
    }

    function a(t, e) {
        if (!Boolean(e)) return !1;
        var n = t.ownerDocument.querySelectorAll(e);
        return 1 === n.length && n[0] === t
    }

    function s(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["id", "class", "length"];
        return [].concat(i(t.attributes)).reduce(function (t, n) {
            return e.indexOf(n.nodeName) > -1 || t.push("[" + n.nodeName + '="' + n.value + '"]'), t
        }, [])
    }

    function u(t) {
        if (!t.hasAttribute("class")) return [];
        try {
            return Array.prototype.slice.call(t.classList)
        } catch (n) {
            var e = t.getAttribute("class");
            return e = e.trim().replace(/\s+/g, " "), e.split(" ")
        }
    }

    function c(t) {
        return u(t).filter(Boolean).map(function (t) {
            return "." + t
        })
    }

    function f(t, e, n, r, i, o, a) {
        if (o === a) return void t.push(n.slice(0, o).join(""));
        for (var s = r; s <= i && i - s + 1 >= a - o; ++s) n[o] = e[s], f(t, e, n, s + 1, i, o + 1, a)
    }

    function l(t, e) {
        for (var n = [], r = t.length, i = [], o = 1; o <= e; ++o) f(n, t, i, 0, r - 1, 0, o);
        return n
    }

    function h(t) {
        var e = t.getAttribute("id");
        return null !== e && "" !== e ? "#" + e : null
    }

    function d(t) {
        var e = 0, n = void 0, r = void 0, i = t.parentNode;
        if (Boolean(i)) {
            var a = i.childNodes, s = a.length;
            for (n = 0; n < s; n++) if (r = a[n], o(r) && (e++, r === t)) return ":nth-child(" + e + ")"
        }
        return null
    }

    function p(t) {
        for (var e = [], n = t; o(n);) e.push(n), n = n.parentNode;
        return e
    }

    function y(t) {
        return t.tagName.toLowerCase().replace(/:/g, "\\:")
    }

    function g(t, e, n) {
        var r = {
            Tag: y, NthChild: d, Attributes: function (t) {
                return s(t, n)
            }, Class: c, ID: h
        };
        return e.reduce(function (e, n) {
            return e[n] = r[n](t), e
        }, {})
    }

    function v(t, e) {
        var n = t.parentNode, r = n.querySelectorAll(e);
        return 1 === r.length && r[0] === t
    }

    function b(t, e) {
        return e.find(v.bind(null, t))
    }

    function m(t, e, n) {
        var r = l(e, 3), i = b(t, r);
        return Boolean(i) ? i : Boolean(n) && (r = r.map(function (t) {
            return n + t
        }), i = b(t, r), Boolean(i)) ? i : null
    }

    function w(t, e, n) {
        var r = void 0, i = g(t, e, n), o = !0, a = !1, s = void 0;
        try {
            for (var u, c = (0, j["default"])(e); !(o = (u = c.next()).done); o = !0) {
                var f = u.value, l = i.ID, h = i.Tag, d = i.Class, p = i.Attributes, y = i.NthChild;
                switch (f) {
                    case"ID":
                        if (Boolean(l) && v(t, l)) return l;
                        break;
                    case"Tag":
                        if (Boolean(h) && v(t, h)) return h;
                        break;
                    case"Class":
                        if (Boolean(d) && d.length && (r = m(t, d, h))) return r;
                        break;
                    case"Attributes":
                        if (Boolean(p) && p.length && (r = m(t, p, h))) return r;
                        break;
                    case"NthChild":
                        if (Boolean(y)) return y
                }
            }
        } catch (t) {
            a = !0, s = t
        } finally {
            try {
                !o && c["return"] && c["return"]()
            } finally {
                if (a) throw s
            }
        }
        return "*"
    }

    function _(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.selectorTypes,
            r = void 0 === n ? ["ID", "Class", "Tag", "NthChild"] : n, i = e.attributesToIgnore,
            o = void 0 === i ? ["id", "class", "length"] : i, s = [], u = p(t), c = !0, f = !1, l = void 0;
        try {
            for (var h, d = (0, j["default"])(u); !(c = (h = d.next()).done); c = !0) {
                var y = h.value, g = w(y, r, o);
                Boolean(g) && s.push(g)
            }
        } catch (t) {
            f = !0, l = t
        } finally {
            try {
                !c && d["return"] && d["return"]()
            } finally {
                if (f) throw l
            }
        }
        var v = [], b = !0, m = !1, _ = void 0;
        try {
            for (var x, S = (0, j["default"])(s); !(b = (x = S.next()).done); b = !0) {
                var E = x.value;
                v.unshift(E);
                var T = v.join(" > ");
                if (a(t, T)) return T
            }
        } catch (t) {
            m = !0, _ = t
        } finally {
            try {
                !b && S["return"] && S["return"]()
            } finally {
                if (m) throw _
            }
        }
        return null
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var x = n(76), S = r(x), E = n(20), T = r(E), A = n(19), O = r(A), D = n(77), j = r(D),
        k = "function" == typeof O["default"] && "symbol" == typeof T["default"] ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof O["default"] && t.constructor === O["default"] && t !== O["default"].prototype ? "symbol" : typeof t
        };
    e["default"] = _
}, function (module, exports) {
    (function (global) {
        "use strict";

        function doEval(self, __pseudoworker_script) {
            (function () {
                eval(__pseudoworker_script)
            }).call(global)
        }

        function PseudoWorker(t) {
            function e(t, e) {
                for (var n = -1; ++n < t.length;) t[n] && e(t[n])
            }

            function n(t) {
                return function (e) {
                    e({type: "error", error: t, message: t.message})
                }
            }

            function r(t, e) {
                "message" === t ? d.push(e) : "error" === t && p.push(e)
            }

            function i(t, e) {
                var n;
                if ("message" === t) n = d; else {
                    if ("error" !== t) return;
                    n = p
                }
                for (var r = -1; ++r < n.length;) {
                    if (n[r] === e) {
                        delete n[r];
                        break
                    }
                }
            }

            function o(t) {
                var r = n(t);
                "function" == typeof m.onerror && r(m.onerror), h && "function" == typeof h.onerror && r(h.onerror), e(p, r), e(g, r)
            }

            function a(t) {
                function n(e) {
                    try {
                        e({data: t})
                    } catch (t) {
                        o(t)
                    }
                }

                h && "function" == typeof h.onmessage && n(h.onmessage), e(y, n)
            }

            function s(t) {
                if (void 0 === t) throw new Error("postMessage() requires an argument");
                if (!b) return l ? void a(t) : void v.push(t)
            }

            function u() {
                b = !0
            }

            function c(t) {
                function n(e) {
                    e({data: t})
                }

                "function" == typeof m.onmessage && n(m.onmessage), e(d, n)
            }

            function f(t, e) {
                "message" === t ? y.push(e) : "error" === t && g.push(e)
            }

            var l, h, d = [], p = [], y = [], g = [], v = [], b = !1, m = this;
            if (isIE() && isIE() <= 10) {
                l = "\n      var CryptoJS=CryptoJS||function(i,m){var p={},h=p.lib={},n=h.Base=function(){function a(){}return{extend:function(b){a.prototype=this;var c=new a;b&&c.mixIn(b);c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty(\"toString\")&&(this.toString=a.toString)},clone:function(){return this.$super.extend(this)}}}(),o=h.WordArray=n.extend({init:function(a,b){a=\n      this.words=a||[];this.sigBytes=b!=m?b:4*a.length},toString:function(a){return(a||e).stringify(this)},concat:function(a){var b=this.words,c=a.words,d=this.sigBytes,a=a.sigBytes;this.clamp();if(d%4)for(var f=0;f<a;f++)b[d+f>>>2]|=(c[f>>>2]>>>24-8*(f%4)&255)<<24-8*((d+f)%4);else if(65535<c.length)for(f=0;f<a;f+=4)b[d+f>>>2]=c[f>>>2];else b.push.apply(b,c);this.sigBytes+=a;return this},clamp:function(){var a=this.words,b=this.sigBytes;a[b>>>2]&=4294967295<<32-8*(b%4);a.length=i.ceil(b/4)},clone:function(){var a=\n      n.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var b=[],c=0;c<a;c+=4)b.push(4294967296*i.random()|0);return o.create(b,a)}}),q=p.enc={},e=q.Hex={stringify:function(a){for(var b=a.words,a=a.sigBytes,c=[],d=0;d<a;d++){var f=b[d>>>2]>>>24-8*(d%4)&255;c.push((f>>>4).toString(16));c.push((f&15).toString(16))}return c.join(\"\")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),16)<<24-4*(d%8);return o.create(c,b/2)}},g=q.Latin1={stringify:function(a){for(var b=\n      a.words,a=a.sigBytes,c=[],d=0;d<a;d++)c.push(String.fromCharCode(b[d>>>2]>>>24-8*(d%4)&255));return c.join(\"\")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d++)c[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return o.create(c,b)}},j=q.Utf8={stringify:function(a){try{return decodeURIComponent(escape(g.stringify(a)))}catch(b){throw Error(\"Malformed UTF-8 data\");}},parse:function(a){return g.parse(unescape(encodeURIComponent(a)))}},k=h.BufferedBlockAlgorithm=n.extend({reset:function(){this._data=o.create();\n      this._nDataBytes=0},_append:function(a){\"string\"==typeof a&&(a=j.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,c=b.words,d=b.sigBytes,f=this.blockSize,e=d/(4*f),e=a?i.ceil(e):i.max((e|0)-this._minBufferSize,0),a=e*f,d=i.min(4*a,d);if(a){for(var g=0;g<a;g+=f)this._doProcessBlock(c,g);g=c.splice(0,a);b.sigBytes-=d}return o.create(g,d)},clone:function(){var a=n.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});h.Hasher=k.extend({init:function(){this.reset()},\n      reset:function(){k.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);this._doFinalize();return this._hash},clone:function(){var a=k.clone.call(this);a._hash=this._hash.clone();return a},blockSize:16,_createHelper:function(a){return function(b,c){return a.create(c).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return l.HMAC.create(a,c).finalize(b)}}});var l=p.algo={};return p}(Math);\n      (function(){var i=CryptoJS,m=i.lib,p=m.WordArray,m=m.Hasher,h=[],n=i.algo.SHA1=m.extend({_doReset:function(){this._hash=p.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(o,i){for(var e=this._hash.words,g=e[0],j=e[1],k=e[2],l=e[3],a=e[4],b=0;80>b;b++){if(16>b)h[b]=o[i+b]|0;else{var c=h[b-3]^h[b-8]^h[b-14]^h[b-16];h[b]=c<<1|c>>>31}c=(g<<5|g>>>27)+a+h[b];c=20>b?c+((j&k|~j&l)+1518500249):40>b?c+((j^k^l)+1859775393):60>b?c+((j&k|j&l|k&l)-1894007588):c+((j^k^l)-\n      899497514);a=l;l=k;k=j<<30|j>>>2;j=g;g=c}e[0]=e[0]+g|0;e[1]=e[1]+j|0;e[2]=e[2]+k|0;e[3]=e[3]+l|0;e[4]=e[4]+a|0},_doFinalize:function(){var i=this._data,h=i.words,e=8*this._nDataBytes,g=8*i.sigBytes;h[g>>>5]|=128<<24-g%32;h[(g+64>>>9<<4)+15]=e;i.sigBytes=4*h.length;this._process()}});i.SHA1=m._createHelper(n);i.HmacSHA1=m._createHmacHelper(n)})();\n      /* END CRYPTOJS CODE */\n      function do_hashcash(base_cash, bitcost, multiple, start) {\n        var ctr = start,\n            done = false,\n            hash,\n            hash_str,\n            shiftbits = (32 - bitcost);\n        while (!done) {\n          hash_str = CryptoJS.SHA1(base_cash + ctr);\n          hash = hash_str.words[0];\n          if ((hash >> shiftbits) === 0) {\n            done = true;\n          } else {\n            ctr += multiple;\n          }\n        }\n        return (base_cash + ctr + \":\" + hash_str);\n      }\n      self.onmessage = (function (event) {\n        // {'reqid': reqid, 'base': base_cash, 'cost': bitcost, 'multiple': workers.length, start: i}\n        var data = JSON.parse(event.data),\n            reqid = data.reqid,\n            base = data.base,\n            bitcost = data.cost,\n            multiple = data.multiple,\n            start = data.start;\n        self.postMessage(JSON.stringify({'reqid': reqid, 'hashcash': do_hashcash(base, bitcost, multiple, start)}));\n      });\n      ", h = {
                    postMessage: c,
                    addEventListener: f
                }, doEval(h, l);
                var w = v;
                v = [];
                for (var _ = 0; _ < w.length; _++) a(w[_])
            } else {
                var x = new XMLHttpRequest;
                x.open("GET", t), x.onreadystatechange = function () {
                    if (4 === x.readyState) if (x.status >= 200 && x.status < 400) {
                        l = x.responseText, h = {postMessage: c, addEventListener: f}, doEval(h, l);
                        var e = v;
                        v = [];
                        for (var n = 0; n < e.length; n++) a(e[n])
                    } else o(new Error("cannot find script " + t))
                }, x.send()
            }
            return m.postMessage = s, m.addEventListener = r, m.removeEventListener = i, m.terminate = u, m
        }

        module.exports = PseudoWorker
    }).call(exports, function () {
        return this
    }())
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    var i = n(20), o = r(i), a = n(19), s = r(a), u = n(18), c = r(u), f = n(27), l = r(f),
        h = "function" == typeof s["default"] && "symbol" == typeof o["default"] ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof s["default"] && t.constructor === s["default"] && t !== s["default"].prototype ? "symbol" : typeof t
        }, d = n(72), p = n(71), y = n(66);
    if (void 0 !== p && void 0 !== d) var g = {
        baseurl: "https://af.zhongan.io/",
        asseturi: "",
        genurl: "https://af.zhongan.io/did.jsonp"
    }, v = function (t) {
        var e = {};
        for (var n in g) {
            var r = t[n];
            e[n] = void 0 !== r ? r : g[n]
        }
        this.baseurl = e.baseurl, this.asseturi = e.asseturi, this.genurl = e.genurl, this.ready = !1, this.ec_status = !1, this.fp = new d, this.ec = new p({
            baseurl: this.baseurl,
            asseturi: this.asseturi
        }), this.log = function (t) {
            window.console && console.log(t)
        }, this.stringToUint = function (t) {
            for (var e = [], n = 0; n < t.length; n++) e.push(t[n].charCodeAt(0));
            return this.isIE() && this.isIE() < 10 ? e : new Uint8Array(e)
        }, this.gzip = function (t) {
            return "object" === (void 0 === t ? "undefined" : h(t)) ? t = (0, l["default"])(t) : "string" != typeof t && (t = t.toString()), new Zlib.Gzip(this.stringToUint(t)).compress()
        }, this.isIE = function (t) {
            var e = document.createElement("b");
            return e.innerHTML = "\x3c!--[if IE " + t + "]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
        }, this.getFromEC = function () {
            var t = this;
            this.ec.get("_maiev", function (e, n) {
                var r = new Date;
                return t.log("get from maiev cookie finished , result: " + e + ", spend:" + (r - t.start_time)), t.ec_status = !0, void 0 === e || "undefined" === e ? t.GenDid() : (t.did = e, t.ready = !0, t.done(t.did))
            })
        }, this.getFromFP2 = function () {
            var t = this;
            this.fp.get(function (e, n) {
                var r = new Date;
                return t.log("Maiev Fingerprint finished, spend:" + (r - t.start_time)), t.fp_json = n, t.GenDid()
            })
        }, this.GenDid = function () {
            if (this.fp_json && this.ec_status) {
                var t = this, e = this.gzip(t.fp_json),
                    n = window.btoa(String.fromCharCode.apply(null, e)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ".");
                y(t.genurl + "?d=" + n, {}).then(function (t) {
                    return t.json()
                }).then(function (e) {
                    return 201 === e.code ? t.did = e.did : t.did = "MTc4NTE2MTM1NzA5NDg0OTcwMjItN2QzOTAyNDUwMTIyNDM5YTllMjMxOWFmOTZkYjgyYmIwMDAxLU9wdE0vcDdFdVl4bHFUa0pTVlBnK0xYZUttST0=", t.ready = !0, t.ec.set("_maiev", t.did), t.done(t.did)
                })["catch"](function (e) {
                    return console.log("parsing failed", e), t.did = "MTc4NTE2MTM1NzA5NDg0OTcwMjItN2QzOTAyNDUwMTIyNDM5YTllMjMxOWFmOTZkYjgyYmIwMDAxLU9wdE0vcDdFdVl4bHFUa0pTVlBnK0xYZUttST0=", t.ready = !0, t.ec.set("_maiev", t.did), t.done(t.did)
                })
            }
        }, this.getDid = function () {
            var t = this;
            return new c["default"](function (e, n) {
                t.done = function (t) {
                    e(t)
                }, t.ready ? e(t.did) : (t.start_time = new Date, t.getFromEC(), t.getFromFP2())
            })
        }, this.test = function () {
            var t = this;
            t.ec.get("_test", function (e, n) {
                t.log(e), t.log(n)
            })
        }
    }; else (void 0).log("Module Fingerprint2 and maievCookie is undefined");
    window.maiev = v, t.exports = v, console.log(v)
}, function (t, e) {
    "use strict";
    try {
        !function (t) {
            function e(t, e, n) {
                if (t.indexOf("&" + e + "=") > -1 || 0 === t.indexOf(e + "=")) {
                    var r, i = t.indexOf("&" + e + "=");
                    return -1 === i && (i = t.indexOf(e + "=")), r = t.indexOf("&", i + 1), -1 !== r ? t.substr(0, i) + t.substr(r + (i ? 0 : 1)) + "&" + e + "=" + n : t.substr(0, i) + "&" + e + "=" + n
                }
                return t + "&" + e + "=" + n
            }

            function n() {
                return "indexedDB" in t || !!(t.indexedDB = t.indexedDB || t.mozIndexedDB || t.webkitIndexedDB || t.msIndexedDB)
            }

            function r(t) {
                function e(t, e, n) {
                    var r = o.createElement("img");
                    return r.src = e + "#" + parseInt(32e3 * Math.random()), r.onload = function () {
                        a[t] = !0, (s -= 1) <= 0 && (u = !1, n(a))
                    }, r.onerror = function () {
                        a[t] = !1, (s -= 1) <= 0 && (u = !1, n(a))
                    }, r
                }

                function n(t, e) {
                    return t.toString().length < e ? n("0" + t, e) : t
                }

                function r(t) {
                    for (var e = 0, n = t.length, r = 0; r < n; ++r) e = (e << 1) + (t[r] ? 1 : 0);
                    return e
                }

                function i(t, e) {
                    var r = [], i = parseInt(t, 10).toString(2);
                    i = n(i, 32);
                    for (var o = 32 - e; o < 32; ++o) r.push("1" == i[o]);
                    return r
                }

                var a = [], s = 0, u = !1;
                return {
                    bools_to_int: r, is_working: function () {
                        return u
                    }, get_hsts_value: function (n) {
                        if (u) return !1;
                        u = !0, a = [], s = t.length;
                        for (var r = 0; r < t.length; ++r) a.push(void 0), e(r, t[r], n);
                        return !0
                    }, set_hsts_value: function (n, r) {
                        if (u) return !1;
                        u = !0, a = [], s = t.length;
                        for (var i = 0; i < t.length; ++i) a.push(void 0), n[i] ? e(i, t[i] + "?SET=1", r) : e(i, t[i] + "?DEL=1", r);
                        return !0
                    }, set_hsts_as_int: function (e, n) {
                        var e = i(e, t.length);
                        return this.set_hsts_value(e, n)
                    }, get_hsts_as_int: function (t) {
                        return this.get_hsts_value(function (e) {
                            t(r(e))
                        })
                    }
                }
            }

            function i(i) {
                i = i || {};
                var h = {};
                for (var d in f) {
                    var p = i[d];
                    h[d] = void 0 !== p ? p : f[d]
                }
                "function" == typeof h.domain && (h.domain = h.domain(t));
                var y = (h.history, h.java, h.tests),
                    g = (h.baseurl, h.asseturi, h.swfuri, h.phpuri, h.domain, h.xapFileName, h.jnlpFileName, h.hsts),
                    v = this;
                this._ec = {}, g && (h.hsts_domains.length <= 8 && console.log("HSTS cookie with " + h.hsts_domains.length + " can only save values up to " + Math.pow(2, h.hsts_domains.length) - 1), this.hsts_cookie = r(h.hsts_domains)), this.get = function (t, e, n) {
                    v._evercookie(t, e, void 0, void 0, n)
                }, this.set = function (t, e) {
                    v._evercookie(t, function () {
                    }, e)
                }, this._evercookie = function (e, r, i, o, a) {
                    if (void 0 === v._evercookie && (v = this), void 0 === o && (o = 0), 0 === o && (h.db && v.evercookie_database_storage(e, i), h.idb && v.evercookie_indexdb_storage(e, i), v._ec.userData = v.evercookie_userdata(e, i), v._ec.cookieData = v.evercookie_cookie(e, i), v._ec.localData = v.evercookie_local_storage(e, i), v._ec.globalData = v.evercookie_global_storage(e, i), v._ec.sessionData = v.evercookie_session_storage(e, i), v._ec.windowData = v.evercookie_window(e, i), g && (v._ec.hstsData = void 0, void 0 === i ? v.hsts_cookie.get_hsts_as_int(function (t) {
                        v._ec.hstsData = t
                    }) : v.hsts_cookie.set_hsts_as_int(i, function (t) {
                        v._ec.hstsData = v.hsts_cookie.bools_to_int(t)
                    }))), void 0 === i) if ((h.db && t.openDatabase && "undefined" == typeof v._ec.dbData || h.idb && n() && ("undefined" == typeof v._ec.idbData || "" === v._ec.idbData)) && o++ < y) setTimeout(function () {
                        v._evercookie(e, r, i, o, a)
                    }, 100); else {
                        v._ec.slData = v.getFromStr(e, c), c = void 0;
                        var s, u, f = v._ec, l = [], d = 0;
                        v._ec = {};
                        for (u in f) f[u] && "null" !== f[u] && "undefined" !== f[u] && (l[f[u]] = void 0 === l[f[u]] ? 1 : l[f[u]] + 1);
                        for (u in l) l[u] > d && (d = l[u], s = u);
                        this.working = !1, void 0 === s || void 0 !== a && 1 === a || v.set(e, s), "function" == typeof r && r(s, f)
                    }
                }, this.evercookie_window = function (n, r) {
                    try {
                        if (void 0 === r) return this.getFromStr(n, t.name);
                        t.name = e(t.name, n, r)
                    } catch (t) {
                    }
                }, this.evercookie_userdata = function (t, e) {
                    try {
                        var n = this.createElem("div", "userdata_el", 1);
                        if (n.addBehavior) {
                            if (n.style.behavior = "url(#default#userData)", void 0 === e) return n.load(t), n.getAttribute(t);
                            n.setAttribute(t, e), n.save(t)
                        }
                    } catch (t) {
                    }
                }, this.evercookie_local_storage = function (t, e) {
                    try {
                        if (s) {
                            if (void 0 === e) return s.getItem(t);
                            s.setItem(t, e)
                        }
                    } catch (t) {
                    }
                }, this.evercookie_database_storage = function (e, n) {
                    try {
                        if (t.openDatabase) {
                            var r = t.openDatabase("sqlite_evercookie", "", "evercookie", 1048576);
                            void 0 !== n ? r.transaction(function (t) {
                                t.executeSql("CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL, UNIQUE (name))", [], function (t, e) {
                                }, function (t, e) {
                                }), t.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)", [e, n], function (t, e) {
                                }, function (t, e) {
                                })
                            }) : r.transaction(function (t) {
                                t.executeSql("SELECT value FROM cache WHERE name=?", [e], function (t, e) {
                                    e.rows.length >= 1 ? v._ec.dbData = e.rows.item(0).value : v._ec.dbData = ""
                                }, function (t, e) {
                                })
                            })
                        }
                    } catch (t) {
                    }
                }, this.evercookie_indexdb_storage = function (e, n) {
                    try {
                        if ("indexedDB" in t || (indexedDB = t.indexedDB || t.mozIndexedDB || t.webkitIndexedDB || t.msIndexedDB, IDBTransaction = t.IDBTransaction || t.webkitIDBTransaction || t.msIDBTransaction, IDBKeyRange = t.IDBKeyRange || t.webkitIDBKeyRange || t.msIDBKeyRange), indexedDB) {
                            var r = indexedDB.open("idb_evercookie", 1);
                            r.onerror = function (t) {
                            }, r.onupgradeneeded = function (t) {
                                t.target.result.createObjectStore("evercookie", {keyPath: "name", unique: !1})
                            }, r.onsuccess = void 0 !== n ? function (t) {
                                var r = t.target.result;
                                if (r.objectStoreNames.contains("evercookie")) {
                                    r.transaction(["evercookie"], "readwrite").objectStore("evercookie").put({
                                        name: e,
                                        value: n
                                    })
                                }
                                r.close()
                            } : function (t) {
                                var n = t.target.result;
                                if (n.objectStoreNames.contains("evercookie")) {
                                    var r = n.transaction(["evercookie"]), i = r.objectStore("evercookie"),
                                        o = i.get(e);
                                    o.onsuccess = function (t) {
                                        void 0 === o.result ? v._ec.idbData = void 0 : v._ec.idbData = o.result.value
                                    }
                                } else v._ec.idbData = void 0;
                                n.close()
                            }
                        }
                    } catch (t) {
                    }
                }, this.evercookie_session_storage = function (t, e) {
                    try {
                        if (u) {
                            if (void 0 === e) return u.getItem(t);
                            u.setItem(t, e)
                        }
                    } catch (t) {
                    }
                }, this.evercookie_global_storage = function (t, e) {
                    if (a) {
                        var n = this.getHost();
                        try {
                            if (void 0 === e) return a[n][t];
                            a[n][t] = e
                        } catch (t) {
                        }
                    }
                }, this.encode = function (t) {
                    var e, n, r, i, o, a, s, u = "", c = 0;
                    for (t = this._utf8_encode(t); c < t.length;) e = t.charCodeAt(c++), n = t.charCodeAt(c++), r = t.charCodeAt(c++), i = e >> 2, o = (3 & e) << 4 | n >> 4, a = (15 & n) << 2 | r >> 6, s = 63 & r, isNaN(n) ? a = s = 64 : isNaN(r) && (s = 64), u = u + l.charAt(i) + l.charAt(o) + l.charAt(a) + l.charAt(s);
                    return u
                }, this.decode = function (t) {
                    var e, n, r, i, o, a, s, u = "", c = 0;
                    for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < t.length;) i = l.indexOf(t.charAt(c++)), o = l.indexOf(t.charAt(c++)), a = l.indexOf(t.charAt(c++)), s = l.indexOf(t.charAt(c++)), e = i << 2 | o >> 4, n = (15 & o) << 4 | a >> 2, r = (3 & a) << 6 | s, u += String.fromCharCode(e), 64 !== a && (u += String.fromCharCode(n)), 64 !== s && (u += String.fromCharCode(r));
                    return u = this._utf8_decode(u)
                }, this._utf8_encode = function (t) {
                    t = t.replace(/\r\n/g, "\n");
                    for (var e, n = "", r = 0, i = t.length; r < i; r++) e = t.charCodeAt(r), e < 128 ? n += String.fromCharCode(e) : e > 127 && e < 2048 ? (n += String.fromCharCode(e >> 6 | 192), n += String.fromCharCode(63 & e | 128)) : (n += String.fromCharCode(e >> 12 | 224), n += String.fromCharCode(e >> 6 & 63 | 128), n += String.fromCharCode(63 & e | 128));
                    return n
                }, this._utf8_decode = function (t) {
                    for (var e = "", n = 0, r = t.length, i = 0, o = 0, a = 0; n < r;) i = t.charCodeAt(n), i < 128 ? (e += String.fromCharCode(i), n += 1) : i > 191 && i < 224 ? (o = t.charCodeAt(n + 1), e += String.fromCharCode((31 & i) << 6 | 63 & o), n += 2) : (o = t.charCodeAt(n + 1), a = t.charCodeAt(n + 2), e += String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & a), n += 3);
                    return e
                }, this.createElem = function (t, e, n) {
                    var r;
                    return r = void 0 !== e && o.getElementById(e) ? o.getElementById(e) : o.createElement(t), r.style.visibility = "hidden", r.style.position = "absolute", e && r.setAttribute("id", e), n && o.body.appendChild(r), r
                }, this.createIframe = function (t, e) {
                    var n = this.createElem("iframe", e, 1);
                    return n.setAttribute("src", t), n
                };
                var b = this.waitForSwf = function (t) {
                    void 0 === t ? t = 0 : t++, t < y && "undefined" == typeof swfobject && setTimeout(function () {
                        b(t)
                    }, 300)
                };
                this.evercookie_cookie = function (t, e) {
                    return void 0 === e ? this.getFromStr(t, o.cookie) : (o.cookie = t + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/;", void (o.cookie = t + "=" + e + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/;"))
                }, this.getFromStr = function (t, e) {
                    if ("string" == typeof e) {
                        var n, r, i = t + "=", o = e.split(/[;&]/);
                        for (n = 0; n < o.length; n++) {
                            for (r = o[n]; " " === r.charAt(0);) r = r.substring(1, r.length);
                            if (0 === r.indexOf(i)) return r.substring(i.length, r.length)
                        }
                    }
                }, this.getHost = function () {
                    return t.location.host.replace(/:\d+/, "")
                }
            }

            var o = t.document, a = (t.Image, t.globalStorage);
            try {
                var s = t.localStorage
            } catch (t) {
            }
            try {
                var u = t.sessionStorage
            } catch (t) {
            }
            var c, f = {
                history: !1,
                java: !1,
                tests: 5,
                silverlight: !1,
                lso: !0,
                domain: "." + t.location.host.replace(/:\d+/, ""),
                baseurl: ".",
                asseturi: "/assets",
                authPath: !1,
                hsts: !1,
                hsts_domains: [],
                db: !0,
                idb: !0
            }, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            t.evercookie = t.Evercookie = i
        }(window)
    } catch (t) {
    }
    t.exports = window.evercookie
}, function (t, e, n) {
    function r(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    var i, o, a = n(20), s = r(a), u = n(19), c = r(u), f = n(78), l = r(f), h = n(79), d = r(h), p = n(46), y = r(p),
        g = "function" == typeof c["default"] && "symbol" == typeof s["default"] ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof c["default"] && t.constructor === c["default"] && t !== c["default"].prototype ? "symbol" : typeof t
        };
    !function (r, a, s) {
        "use strict";
        i = s, void 0 !== (o = "function" == typeof i ? i.call(e, n, e, t) : i) && (t.exports = o)
    }(0, 0, function () {
        "use strict";

        function t(t) {
            var e = [], n = function (t) {
                e.indexOf(t) < 0 && e.push(t)
            };
            Object && (d["default"] && (0, d["default"])(t).forEach(n), y["default"] && (0, y["default"])(t).forEach(n));
            for (var r in t) n(r);
            return e
        }

        function e(e) {
            var n = {functions: [], types: []}, r = function (t) {
                return t.length > 1 && t.charAt(0) == t.charAt(0).toUpperCase() && isNaN(parseInt(t.charAt(0), 10))
            };
            return t(e).forEach(function (t) {
                var i = e[t];
                "function" == typeof i && o(i) && (r(t) ? n.types.push(t) : n.functions.push(t))
            }), n.functions.sort(), n.types.sort(), n
        }

        function n(t) {
            return t.join(";")
        }

        function r(e) {
            return t(e).map(function (t) {
                return t + "=" + e[t]
            }).join(";")
        }

        function i(t) {
            return n(t.types) + ";" + n(t.functions)
        }

        Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
            var n;
            if (null == this) throw new TypeError("'this' is null or undefined");
            var r = Object(this), i = r.length >>> 0;
            if (0 === i) return -1;
            var o = +e || 0;
            if (Math.abs(o) === 1 / 0 && (o = 0), o >= i) return -1;
            for (n = Math.max(o >= 0 ? o : i - Math.abs(o), 0); n < i;) {
                if (n in r && r[n] === t) return n;
                n++
            }
            return -1
        }), Array.prototype.forEach || (Array.prototype.forEach = function (t) {
            for (var e = 0; e < this.length; ++e) t(this[e])
        }), Array.prototype.map || (Array.prototype.map = function (t) {
            for (var e = [], n = 0; n < this.length; ++n) e[n] = t(this[n]);
            return e
        }), Array.prototype.filter || (Array.prototype.filter = function (t) {
            for (var e = [], n = 0; n < this.length; ++n) t(this[n]) && e.push(this[n]);
            return e
        }), y["default"] || (Object.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return e
        });
        var o = function () {
            var t = Object.prototype.toString, e = Function.prototype.toString, n = /^\[object .+?Constructor\]$/,
                r = RegExp("^" + String(t).replace(/[.*+?^${}()|[\]\/\\]/g, "\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            return function (i) {
                var o = void 0 === i ? "undefined" : g(i), a = !1;
                if ("function" == o) try {
                    a = r.test(e.call(i))
                } catch (t) {
                    a = !1
                } else a = i && "object" == o && n.test(t.call(i)) || !1;
                return a
            }
        }(), a = function s(t) {
            if (!(this instanceof s)) return new s(t);
            var e = {detectScreenOrientation: !0, sortPluginsFor: [/palemoon/i], userDefinedFonts: []};
            this.options = this.extend(t, e), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map
        };
        return a.prototype = {
            extend: function (t, e) {
                if (null == t) return e;
                for (var n in t) null != t[n] && e[n] !== t[n] && (e[n] = t[n]);
                return e
            }, file_access: !1, log: function (t) {
                window.console && console.log(t)
            }, get: function (t) {
                var e = {};
                e = this.userAgentKey(e), e = this.languageKey(e), e = this.colorDepthKey(e), e = this.pixelRatioKey(e), e = this.hardwareConcurrencyKey(e), e = this.screenResolutionKey(e), e = this.availableScreenResolutionKey(e), e = this.timezoneOffsetKey(e), e = this.sessionStorageKey(e), e = this.localStorageKey(e), e = this.indexedDbKey(e), e = this.addBehaviorKey(e), e = this.openDatabaseKey(e), e = this.cpuClassKey(e), e = this.platformKey(e), e = this.doNotTrackKey(e), e = this.pluginsKey(e), e = this.canvasKey(e), e = this.webglKey(e), e = this.adBlockKey(e), e = this.hasLiedLanguagesKey(e), e = this.hasLiedResolutionKey(e), e = this.hasLiedOsKey(e), e = this.hasLiedBrowserKey(e), e = this.touchSupportKey(e), e = this.literalColorsKey(e), e = this.toolbarDumpKey(e), e = this.cryptoDumpKey(e), e = this.wechatKey(e), e = this.aliPayKey(e), e = this.riskLevelKey(e), this.fontsKey(e, function (e) {
                    return t("", e)
                })
            }, userAgentKey: function (t) {
                return this.options.excludeUserAgent || (t.user_agent = this.getUserAgent()), t
            }, getUserAgent: function () {
                return navigator.userAgent
            }, languageKey: function (t) {
                return this.options.excludeLanguage || (t.language = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""), t
            }, colorDepthKey: function (t) {
                return this.options.excludeColorDepth || (t.color_depth = screen.colorDepth || -1), t
            }, pixelRatioKey: function (t) {
                return this.options.excludePixelRatio || (t.pixel_ratio = this.getPixelRatio()), t
            }, getPixelRatio: function () {
                return window.devicePixelRatio || 0
            }, screenResolutionKey: function (t) {
                return this.options.excludeScreenResolution ? t : this.getScreenResolution(t)
            }, getScreenResolution: function (t) {
                var e;
                return e = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height], t.resolution = e, t
            }, availableScreenResolutionKey: function (t) {
                return this.options.excludeAvailableScreenResolution ? t : this.getAvailableScreenResolution(t)
            }, getAvailableScreenResolution: function (t) {
                var e;
                return screen.availWidth && screen.availHeight && (e = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]), t.available_resolution = e, t
            }, timezoneOffsetKey: function (t) {
                return this.options.excludeTimezoneOffset || (t.timezone_offset = (new Date).getTimezoneOffset()), t
            }, sessionStorageKey: function (t) {
                return this.options.excludeSessionStorage || (t.session_storage = this.hasSessionStorage() ? 1 : 0), t
            }, localStorageKey: function (t) {
                return this.options.excludeSessionStorage || (t.local_storage = this.hasLocalStorage() ? 1 : 0), t
            }, indexedDbKey: function (t) {
                return this.options.excludeIndexedDB || (t.indexed_db = this.hasIndexedDB() ? 1 : 0), t
            }, addBehaviorKey: function (t) {
                return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && (t.add_behavior = document.body.addBehavior ? 1 : 0), t
            }, openDatabaseKey: function (t) {
                return this.options.excludeOpenDatabase || (t.open_database = window.openDatabase ? 1 : 0), t
            }, cpuClassKey: function (t) {
                return this.options.excludeCpuClass || (t.cpu_class = this.getNavigatorCpuClass()), t
            }, platformKey: function (t) {
                return this.options.excludePlatform || (t.navigator_platform = this.getNavigatorPlatform()), t
            }, doNotTrackKey: function (t) {
                return this.options.excludeDoNotTrack || (t.do_not_track = this.getDoNotTrack()), t
            }, canvasKey: function (t) {
                if (!this.options.excludeCanvas && this.isCanvasSupported()) {
                    var e = this.getCanvasFp();
                    e.length > 0 && (t.canvas_wd = e[0]), e.length > 1 && (t.canvas_fp = e[1])
                }
                return t
            }, webglKey: function (t) {
                if (this.options.excludeWebGL) return "undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting per excludeWebGL configuration option"), t;
                if (!this.isWebGlSupported()) return "undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting because it is not supported in this browser"), t.webgl_fp = "", t.webgl_hx = "", t;
                var e = this.getWebglFp();
                return e.length > 0 && (t.webgl_fp = e[0]), e.length > 1 && (t.webgl_hx = e[1]), t
            }, adBlockKey: function (t) {
                return this.options.excludeAdBlock || (t.adblock = this.getAdBlock()), t
            }, hasLiedLanguagesKey: function (t) {
                return this.options.excludeHasLiedLanguages || (t.has_lied_languages = this.getHasLiedLanguages()), t
            }, hasLiedResolutionKey: function (t) {
                return this.options.excludeHasLiedResolution || (t.has_lied_resolution = this.getHasLiedResolution()), t
            }, hasLiedOsKey: function (t) {
                return this.options.excludeHasLiedOs || (t.has_lied_os = this.getHasLiedOs()), t
            }, hasLiedBrowserKey: function (t) {
                return this.options.excludeHasLiedBrowser || (t.has_lied_browser = this.getHasLiedBrowser()), t
            }, fontsKey: function (t, e) {
                return this.options.excludeJsFonts ? this.flashFontsKey(t, e) : this.jsFontsKey(t, e)
            }, jsFontsKey: function (t, e) {
                var n = this;
                return setTimeout(function () {
                    var r = ["monospace", "sans-serif", "serif"],
                        i = ["SimSun", "SimHei", "SimSun-ExtB", "Microsoft YaHei", "Microsoft JhengHei", "NSimSun", "PMingLiU", "MingLiU", " DFKai-SB", "FangSong", "KaiTi", "FangSong_GB2312", "KaiTi_GB2312", "Microsoft Yi Baiti", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "STHeiti", "STKaiti", "STSong", "STFangsong", "LiHei Pro Medium", "Apple LiGothic Medium", "LiSu", "YouYuan", "STXihei", "FZShuTi", "STXinwei", "Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                    i = i.concat(n.options.userDefinedFonts);
                    var o = document.getElementsByTagName("body")[0], a = document.createElement("div"),
                        s = document.createElement("div"), u = {}, c = {}, f = function () {
                            var t = document.createElement("span");
                            return t.style.position = "absolute", t.style.left = "-9999px", t.style.fontSize = "72px", t.style.lineHeight = "normal", t.innerHTML = "mmmmmmmmml众安保险", t
                        }, l = function (t, e) {
                            var n = f();
                            return n.style.fontFamily = "'" + t + "'," + e, n
                        }, h = function () {
                            for (var t = [], e = 0, n = r.length; e < n; e++) {
                                var i = f();
                                i.style.fontFamily = r[e], a.appendChild(i), t.push(i)
                            }
                            return t
                        }();
                    o.appendChild(a);
                    for (var d = 0, p = r.length; d < p; d++) u[r[d]] = h[d].offsetWidth, c[r[d]] = h[d].offsetHeight;
                    var y = function () {
                        for (var t = {}, e = 0, n = i.length; e < n; e++) {
                            for (var o = [], a = 0, u = r.length; a < u; a++) {
                                var c = l(i[e], r[a]);
                                s.appendChild(c), o.push(c)
                            }
                            t[i[e]] = o
                        }
                        return t
                    }();
                    o.appendChild(s);
                    for (var g = [], v = 0, b = i.length; v < b; v++) (function (t) {
                        for (var e = !1, n = 0; n < r.length; n++) if (e = t[n].offsetWidth !== u[r[n]] || t[n].offsetHeight !== c[r[n]]) return e;
                        return e
                    })(y[i[v]]) && g.push(i[v]);
                    o.removeChild(s), o.removeChild(a), t.js_fonts = g, e(t)
                }, 1)
            }, pluginsKey: function (t) {
                return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || (t.regular_plugins = this.getIEPlugins()) : t.regular_plugins = this.getRegularPlugins()), t
            }, getRegularPlugins: function () {
                for (var t = [], e = 0, n = navigator.plugins.length; e < n; e++) t.push(navigator.plugins[e]);
                return this.pluginsShouldBeSorted() && (t = t.sort(function (t, e) {
                    return t.name > e.name ? 1 : t.name < e.name ? -1 : 0
                })), this.map(t, function (t) {
                    var e = this.map(t, function (t) {
                        return [t.type, t.suffixes].join("~")
                    }).join(",");
                    return [t.name, t.description, e].join("::")
                }, this)
            }, getIEPlugins: function () {
                var t = [];
                if (l["default"] && (0, l["default"])(window, "ActiveXObject") || "ActiveXObject" in window) {
                    var e = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                    t = this.map(e, function (t) {
                        try {
                            return new ActiveXObject(t), t
                        } catch (t) {
                            return ""
                        }
                    })
                }
                return navigator.plugins && (t = t.concat(this.getRegularPlugins())), t
            }, pluginsShouldBeSorted: function () {
                for (var t = !1, e = 0, n = this.options.sortPluginsFor.length; e < n; e++) {
                    var r = this.options.sortPluginsFor[e];
                    if (navigator.userAgent.match(r)) {
                        t = !0;
                        break
                    }
                }
                return t
            }, touchSupportKey: function (t) {
                return this.options.excludeTouchSupport || (t.touch_support = this.getTouchSupport()), t
            }, hardwareConcurrencyKey: function (t) {
                return this.options.excludeHardwareConcurrency || (t.hardware_concurrency = this.getHardwareConcurrency()), t
            }, riskLevelKey: function (t) {
                return this.options.excludeRiskLevel || (t.risk_level = this.getRiskLevel()), t
            }, literalColorsKey: function (t) {
                if (!this.options.excludeLiteralColors) {
                    var e = {};
                    ["ActiveBorder", "ActiveCaption", "AppWorkspace", "Background", "ButtonFace", "ButtonHighlight", "ButtonShadow", "ButtonText", "CaptionText", "GrayText", "Highlight", "HighlightText", "InactiveBorder", "InactiveCaption", "InactiveCaptionText", "InfoBackground", "InfoText", "Menu", "MenuText", "Scrollbar", "ThreeDDarkShadow", "ThreeDFace", "ThreeDHighlight", "ThreeDLightShadow", "ThreeDShadow", "Window", "WindowFrame", "WindowText"].forEach(function (t) {
                        var n = document.createElement("span");
                        n.setAttribute("style", "background-color: " + t), document.body.appendChild(n);
                        var r = window.getComputedStyle ? window.getComputedStyle(n) : n.currentStyle;
                        e[t] = r.backgroundColor, document.body.removeChild(n)
                    }), t.literal_colors = r(e)
                }
                return t
            }, toolbarDumpKey: function (t) {
                if (!this.options.excludeToolbarDump) if ("undefined" != typeof toolbar) {
                    var n = e(toolbar);
                    t.toolbar_dump = i(n)
                } else t.toolbar_dump = "";
                return t
            }, cryptoDumpKey: function (t) {
                if (!this.options.excludeCryptoDump) if ("undefined" != typeof crypto) {
                    var n = e(crypto);
                    t.crypto_dump = i(n)
                } else t.crypto_dump = "";
                return t
            }, styleDumpKey: function (e) {
                if (!this.options.excludeStyleDump) {
                    var r = document.createElement("div"), i = t(r.style);
                    i.sort(), e.style_dump = n(i)
                }
                return e
            }, wechatKey: function (t) {
                var e = !1;
                return "object" == ("undefined" == typeof WeixinJSBridge ? "undefined" : g(WeixinJSBridge)) && "function" == typeof WeixinJSBridge.invoke && (e = !0), t.is_wechat = e, t
            }, aliPayKey: function (t) {
                var e = !1;
                return "object" == ("undefined" == typeof AlipayJSBridge ? "undefined" : g(AlipayJSBridge)) && "function" == typeof AlipayJSBridge.call && (e = !0), t.is_alipay = e, t
            }, hasSessionStorage: function () {
                try {
                    return !!window.sessionStorage
                } catch (t) {
                    return !0
                }
            }, hasLocalStorage: function () {
                try {
                    return !!window.localStorage
                } catch (t) {
                    return !0
                }
            }, hasIndexedDB: function () {
                try {
                    return !!window.indexedDB
                } catch (t) {
                    return !0
                }
            }, getHardwareConcurrency: function () {
                return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 0
            }, getNavigatorCpuClass: function () {
                return navigator.cpuClass ? navigator.cpuClass : "unknown"
            }, getNavigatorPlatform: function () {
                return navigator.platform ? navigator.platform : "unknown"
            }, getDoNotTrack: function () {
                return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown"
            }, getTouchSupport: function () {
                var t = 0, e = !1;
                "undefined" != typeof navigator.maxTouchPoints ? t = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"), e = !0
                } catch (t) {
                }
                var n = "ontouchstart" in window;
                return [t, e ? 1 : 0, n ? 1 : 0]
            }, getCanvasFp: function () {
                var t = [], e = document.createElement("canvas");
                e.width = 2e3, e.height = 200, e.style.display = "inline";
                var n = e.getContext("2d");
                n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), t.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? n.font = "11pt Arial" : n.font = "11pt no-real-font-123", n.fillText("Cwm fjordbank glyphs vext quiz, Greed is good ,😃", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, Greed is good ,😃", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd");
                var r = this.x64hash128(e.toDataURL(), 31);
                return t.push(r), t
            }, getWebglFp: function () {
                var t, e = function (e) {
                    return t.clearColor(0, 0, 0, 1), t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), "[" + e[0] + ", " + e[1] + "]"
                };
                if (!(t = this.getWebglCanvas())) return null;
                var n = [], r = [], i = t.createBuffer();
                t.bindBuffer(t.ARRAY_BUFFER, i);
                var o = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                t.bufferData(t.ARRAY_BUFFER, o, t.STATIC_DRAW), i.itemSize = 3, i.numItems = 3;
                var a = t.createProgram(), s = t.createShader(t.VERTEX_SHADER);
                t.shaderSource(s, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), t.compileShader(s);
                var u = t.createShader(t.FRAGMENT_SHADER);
                t.shaderSource(u, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), t.compileShader(u), t.attachShader(a, s), t.attachShader(a, u), t.linkProgram(a), t.useProgram(a), a.vertexPosAttrib = t.getAttribLocation(a, "attrVertex"), a.offsetUniform = t.getUniformLocation(a, "uniformOffset"), t.enableVertexAttribArray(a.vertexPosArray), t.vertexAttribPointer(a.vertexPosAttrib, i.itemSize, t.FLOAT, !1, 0, 0), t.uniform2f(a.offsetUniform, 1, 1), t.drawArrays(t.TRIANGLE_STRIP, 0, i.numItems), null != t.canvas && r.push(this.x64hash128(t.canvas.toDataURL(), 31)), n.push("ex" + t.getSupportedExtensions().join(";")), n.push("lwr" + e(t.getParameter(t.ALIASED_LINE_WIDTH_RANGE))), n.push("psr" + e(t.getParameter(t.ALIASED_POINT_SIZE_RANGE))), n.push("wab" + t.getParameter(t.ALPHA_BITS)), n.push("wal" + (t.getContextAttributes().antialias ? "yes" : "no")), n.push("wbb" + t.getParameter(t.BLUE_BITS)), n.push("wdb" + t.getParameter(t.DEPTH_BITS)), n.push("wgb" + t.getParameter(t.GREEN_BITS)), n.push("wma" + function (t) {
                    var e,
                        n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return n ? (e = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === e && (e = 2), e) : null
                }(t)), n.push("tiu" + t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("mts" + t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("fuv" + t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("rbs" + t.getParameter(t.MAX_RENDERBUFFER_SIZE)), n.push("textureimageunits:" + t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)), n.push("texturesize:" + t.getParameter(t.MAX_TEXTURE_SIZE)), n.push("varyingvectors:" + t.getParameter(t.MAX_VARYING_VECTORS)), n.push("vertexattribs:" + t.getParameter(t.MAX_VERTEX_ATTRIBS)), n.push("vertextextureimageunits:" + t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("vertexuniformvectors:" + t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)), n.push("maxviewportdims:" + e(t.getParameter(t.MAX_VIEWPORT_DIMS))), n.push("webglredbits:" + t.getParameter(t.RED_BITS)), n.push("webglrenderer:" + t.getParameter(t.RENDERER)), n.push("languageversion:" + t.getParameter(t.SHADING_LANGUAGE_VERSION)), n.push("stencilbits:" + t.getParameter(t.STENCIL_BITS)), n.push("vendor:" + t.getParameter(t.VENDOR)), n.push("wversion:" + t.getParameter(t.VERSION)), t.getShaderPrecisionFormat && (n.push("glspf1" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision), n.push("glspf2" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).rangeMin), n.push("glspf3" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).rangeMax), n.push("glspf4" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision), n.push("glspf5" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).rangeMin), n.push("glspf6" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).rangeMax), n.push("glspf7" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).precision), n.push("glspf8" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).rangeMin), n.push("glspf9" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).rangeMax), n.push("glspf10" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision), n.push("glspf11" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).rangeMin), n.push("glspf12" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).rangeMax), n.push("glspf13" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision), n.push("glspf14" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).rangeMin), n.push("glspf15" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).rangeMax), n.push("glspf16" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).precision), n.push("glspf17" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).rangeMin), n.push("glspf18" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).rangeMax), n.push("glspf19" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).precision), n.push("glspf20" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).rangeMin), n.push("glspf21" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).rangeMax), n.push("glspf22" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).precision), n.push("glspf23" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).rangeMin), n.push("glspf24" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).rangeMax), n.push("glspf25" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).precision), n.push("glspf26" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).rangeMin), n.push("glspf27" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).rangeMax), n.push("glspf28" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).precision), n.push("glspf29" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).rangeMin), n.push("glspf30" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).rangeMax), n.push("glspf31" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).precision), n.push("glspf32" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).rangeMin), n.push("glspf33" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).rangeMax), n.push("glspf34" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).precision), n.push("glspf35" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).rangeMin), n.push("glspf36" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).rangeMax));
                var c = n.join("~"), f = this.x64hash128(c, 31);
                return r.push(f), r
            }, getAdBlock: function () {
                var t = document.createElement("div");
                t.innerHTML = "&nbsp;", t.className = "adsbox";
                var e = !1;
                try {
                    document.body.appendChild(t), e = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(t)
                } catch (t) {
                    e = !1
                }
                return e
            }, getHasLiedLanguages: function () {
                if ("undefined" != typeof navigator.languages) try {
                    if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                } catch (t) {
                    return !0
                }
                return !1
            }, getHasLiedResolution: function () {
                return screen.width < screen.availWidth || screen.height < screen.availHeight
            }, getHasLiedOs: function () {
                var t, e = navigator.userAgent.toLowerCase(), n = navigator.oscpu, r = navigator.platform.toLowerCase();
                t = e.indexOf("windows phone") >= 0 ? "Windows Phone" : e.indexOf("win") >= 0 ? "Windows" : e.indexOf("android") >= 0 ? "Android" : e.indexOf("linux") >= 0 ? "Linux" : e.indexOf("iphone") >= 0 || e.indexOf("ipad") >= 0 ? "iOS" : e.indexOf("mac") >= 0 ? "Mac" : "Other";
                if (("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== t && "Android" !== t && "iOS" !== t && "Other" !== t) return !0;
                if (void 0 !== n) {
                    if (n = n.toLowerCase(), n.indexOf("win") >= 0 && "Windows" !== t && "Windows Phone" !== t) return !0;
                    if (n.indexOf("linux") >= 0 && "Linux" !== t && "Android" !== t) return !0;
                    if (n.indexOf("mac") >= 0 && "Mac" !== t && "iOS" !== t) return !0;
                    if (0 === n.indexOf("win") && 0 === n.indexOf("linux") && n.indexOf("mac") >= 0 && "other" !== t) return !0
                }
                return r.indexOf("win") >= 0 && "Windows" !== t && "Windows Phone" !== t || (r.indexOf("linux") >= 0 || r.indexOf("android") >= 0 || r.indexOf("pike") >= 0) && "Linux" !== t && "Android" !== t || (r.indexOf("mac") >= 0 || r.indexOf("ipad") >= 0 || r.indexOf("ipod") >= 0 || r.indexOf("iphone") >= 0) && "Mac" !== t && "iOS" !== t || 0 === r.indexOf("win") && 0 === r.indexOf("linux") && r.indexOf("mac") >= 0 && "other" !== t || "undefined" == typeof navigator.plugins && "Windows" !== t && "Windows Phone" !== t
            }, getHasLiedBrowser: function () {
                var t, e = navigator.userAgent.toLowerCase(), n = navigator.productSub;
                if (("Chrome" === (t = e.indexOf("firefox") >= 0 ? "Firefox" : e.indexOf("opera") >= 0 || e.indexOf("opr") >= 0 ? "Opera" : e.indexOf("chrome") >= 0 ? "Chrome" : e.indexOf("safari") >= 0 ? "Safari" : e.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === t || "Opera" === t) && "20030107" !== n) return !0;
                var r = eval.toString().length;
                if (37 === r && "Safari" !== t && "Firefox" !== t && "Other" !== t) return !0;
                if (39 === r && "Internet Explorer" !== t && "Other" !== t) return !0;
                if (33 === r && "Chrome" !== t && "Opera" !== t && "Other" !== t) return !0;
                var i;
                try {
                    throw"a"
                } catch (t) {
                    try {
                        t.toSource(), i = !0
                    } catch (t) {
                        i = !1
                    }
                }
                return !(!i || "Firefox" === t || "Other" === t)
            }, isCanvasSupported: function () {
                var t = document.createElement("canvas");
                return !(!t.getContext || !t.getContext("2d"))
            }, isWebGlSupported: function () {
                if (!this.isCanvasSupported()) return !1;
                var t, e = document.createElement("canvas");
                try {
                    t = e.getContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
                } catch (e) {
                    t = !1
                }
                return !!window.WebGLRenderingContext && !!t
            }, isIE: function () {
                return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
            }, getWebglCanvas: function () {
                var t = document.createElement("canvas"), e = null;
                try {
                    e = t.getContext("webgl") || t.getContext("experimental-webgl")
                } catch (t) {
                }
                return e || (e = null), e
            }, getRiskLevel: function () {
                var t = 0;
                (/phantom/.test(navigator.userAgent.toLowerCase()) || /selenium/.test(navigator.userAgent.toLowerCase())) && (t += 50);
                var e = ["_Selenium_IDE_Recorder", "_phantom", "_selenium", "callPantom", "callSelenium"];
                for (var n in e) {
                    var r = e[n];
                    try {
                        window[r] && (t += 50 + parseInt(n))
                    } catch (t) {
                    }
                }
                var i = ["__driver_evaluate", "__webdriver_evaluate", "__selenium_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__selenium_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn"];
                for (var n in i) {
                    var r = i[n];
                    window.document[r] && (t += 50 + parseInt(n))
                }
                for (var o in window.document) o.match(/\$[a-z]dc_/) && window.document[o].cache_ && (t += 50);
                try {
                    this.bindDetect() && (t += 50), window.external && window.external.toString() && -1 != window.external.toString().indexOf("Sequentum") && (t += 50), window.document.documentElement.getAttribute("selenium") && (t += 50), window.document.documentElement.getAttribute("webdriver") && (t += 50), window.document.documentElement.getAttribute("driver") && (t += 50)
                } catch (t) {
                }
                return t
            }, bindDetect: function () {
                var t = !1;
                return Function.prototype.bind || (t = !0), Function.prototype.bind.toString().replace(/bind/g, "Error") != Error.toString() && (t = !0), Function.prototype.toString.toString().replace(/toString/g, "Error") != Error.toString() && (t = !0), t
            }, each: function (t, e, n) {
                if (null !== t) if (this.nativeForEach && t.forEach === this.nativeForEach) t.forEach(e, n); else if (t.length === +t.length) {
                    for (var r = 0, i = t.length; r < i; r++) if (e.call(n, t[r], r, t) === {}) return
                } else for (var o in t) if (t.hasOwnProperty(o) && e.call(n, t[o], o, t) === {}) return
            }, map: function (t, e, n) {
                var r = [];
                return null == t ? r : this.nativeMap && t.map === this.nativeMap ? t.map(e, n) : (this.each(t, function (t, i, o) {
                    r[r.length] = e.call(n, t, i, o)
                }), r)
            }, x64Add: function (t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var n = [0, 0, 0, 0];
                return n[3] += t[3] + e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] + e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] + e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] + e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }, x64Multiply: function (t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var n = [0, 0, 0, 0];
                return n[3] += t[3] * e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] * e[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += t[3] * e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] * e[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[2] * e[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[3] * e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }, x64Rotl: function (t, e) {
                return e %= 64, 32 === e ? [t[1], t[0]] : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
            }, x64LeftShift: function (t, e) {
                return e %= 64, 0 === e ? t : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
            }, x64Xor: function (t, e) {
                return [t[0] ^ e[0], t[1] ^ e[1]]
            }, x64Fmix: function (t) {
                return t = this.x64Xor(t, [0, t[0] >>> 1]), t = this.x64Multiply(t, [4283543511, 3981806797]), t = this.x64Xor(t, [0, t[0] >>> 1]), t = this.x64Multiply(t, [3301882366, 444984403]), t = this.x64Xor(t, [0, t[0] >>> 1])
            }, x64hash128: function (t, e) {
                t = t || "", e = e || 0;
                for (var n = t.length % 16, r = t.length - n, i = [0, e], o = [0, e], a = [0, 0], s = [0, 0], u = [2277735313, 289559509], c = [1291169091, 658871167], f = 0; f < r; f += 16) a = [255 & t.charCodeAt(f + 4) | (255 & t.charCodeAt(f + 5)) << 8 | (255 & t.charCodeAt(f + 6)) << 16 | (255 & t.charCodeAt(f + 7)) << 24, 255 & t.charCodeAt(f) | (255 & t.charCodeAt(f + 1)) << 8 | (255 & t.charCodeAt(f + 2)) << 16 | (255 & t.charCodeAt(f + 3)) << 24], s = [255 & t.charCodeAt(f + 12) | (255 & t.charCodeAt(f + 13)) << 8 | (255 & t.charCodeAt(f + 14)) << 16 | (255 & t.charCodeAt(f + 15)) << 24, 255 & t.charCodeAt(f + 8) | (255 & t.charCodeAt(f + 9)) << 8 | (255 & t.charCodeAt(f + 10)) << 16 | (255 & t.charCodeAt(f + 11)) << 24], a = this.x64Multiply(a, u), a = this.x64Rotl(a, 31), a = this.x64Multiply(a, c), i = this.x64Xor(i, a), i = this.x64Rotl(i, 27), i = this.x64Add(i, o), i = this.x64Add(this.x64Multiply(i, [0, 5]), [0, 1390208809]), s = this.x64Multiply(s, c), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, u), o = this.x64Xor(o, s), o = this.x64Rotl(o, 31), o = this.x64Add(o, i), o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 944331445]);
                switch (a = [0, 0], s = [0, 0], n) {
                    case 15:
                        s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(f + 14)], 48));
                    case 14:
                        s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(f + 13)], 40));
                    case 13:
                        s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(f + 12)], 32));
                    case 12:
                        s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(f + 11)], 24));
                    case 11:
                        s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(f + 10)], 16));
                    case 10:
                        s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(f + 9)], 8));
                    case 9:
                        s = this.x64Xor(s, [0, t.charCodeAt(f + 8)]), s = this.x64Multiply(s, c), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, u), o = this.x64Xor(o, s);
                    case 8:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(f + 7)], 56));
                    case 7:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(f + 6)], 48));
                    case 6:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(f + 5)], 40));
                    case 5:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(f + 4)], 32));
                    case 4:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(f + 3)], 24));
                    case 3:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(f + 2)], 16));
                    case 2:
                        a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(f + 1)], 8));
                    case 1:
                        a = this.x64Xor(a, [0, t.charCodeAt(f)]), a = this.x64Multiply(a, u), a = this.x64Rotl(a, 31), a = this.x64Multiply(a, c), i = this.x64Xor(i, a)
                }
                return i = this.x64Xor(i, [0, t.length]), o = this.x64Xor(o, [0, t.length]), i = this.x64Add(i, o), o = this.x64Add(o, i), i = this.x64Fmix(i), o = this.x64Fmix(o), i = this.x64Add(i, o), o = this.x64Add(o, i), ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
            }
        }, a.VERSION = "maiev 1.1 from fingerprintjs2 1.4.4", a
    })
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(17), a = r(o), s = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, a["default"])(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), u = n(68), c = r(u), f = function () {
        function t(e, n) {
            i(this, t), this.events = e || ["DOMContentLoaded", "focus", "blur", "keyup", "mousedown", "beforeunload", "mousemove", "mouseup", "touchstart"], this.dom, this.requester = n, this.init()
        }

        return s(t, [{
            key: "init", value: function () {
                var t = this;
                this.events.forEach(function (e) {
                    -1 !== ["focus", "blur", "DOMContentLoaded", "beforeunload"].indexOf(e) ? window.addEventListener(e, t.handler.bind(t), !0) : document.addEventListener(e, t.handler.bind(t), !0)
                }), this.lastMouseHandleTime = Date.now(), this.lastKeyHandleTime = Date.now(), this.keyCount = 0
            }
        }, {
            key: "handler", value: function (t) {
                switch (t.type) {
                    case"mousedown":
                    case"mouseup":
                        this.sendData(t.type, {
                            d: this.getDOMString(t.target),
                            cx: t.clientX,
                            cy: t.clientY,
                            sx: t.screenX,
                            sy: t.screenY,
                            t: Date.now()
                        });
                        break;
                    case"mousemove":
                        var e = Date.now();
                        e - this.lastMouseHandleTime > 1e3 && (this.lastMouseHandleTime = e, this.sendData(t.type, {
                            d: this.getDOMString(t.target),
                            cx: t.clientX,
                            cy: t.clientY,
                            sx: t.screenX,
                            sy: t.screenY,
                            t: Date.now()
                        }));
                        break;
                    case"blur":
                    case"focus":
                    case"beforeunload":
                        this.sendData(t.type, {t: Date.now()});
                        break;
                    case"DOMContentLoaded":
                        this.sendData(t.type, {
                            t: Date.now(),
                            cookie: dunkey.options.cookie ? document.cookie : "nocookie"
                        });
                        break;
                    case"keyup":
                        var n = Date.now();
                        this.keyCount++, n - this.lastKeyHandleTime > 1e3 && this.keyCount >= 5 && (this.sendData(t.type, {
                            c: this.keyCount,
                            t: Date.now(),
                            lt: this.lastMouseHandleTime
                        }), this.lastKeyHandleTime = n, this.keyCount = 0);
                        break;
                    case"touchstart":
                        for (var r = [], i = 0; i < t.touches.length; i++) {
                            var o = t.touches.item(i);
                            r.push({
                                d: this.getDOMString(o.target),
                                cx: o.clientX,
                                cy: o.clientY,
                                sx: o.screenX,
                                sy: o.screenY
                            })
                        }
                        this.sendData(t.type, {t: Date.now(), ts: r})
                }
            }
        }, {
            key: "getDOMString", value: function (t) {
                var e = "";
                try {
                    e = (0, c["default"])(t)
                } catch (t) {
                    e = "domString error: " + t.toString()
                }
                return e
            }
        }, {
            key: "sendData", value: function (t, e) {
                this.requester.send({e: t, d: e}).then(function () {
                })["catch"](function (t) {
                    console.log("dunkey error", t)
                })
            }
        }]), t
    }();
    e["default"] = f
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(20), a = r(o), s = n(19), u = r(s), c = n(17), f = r(c), l = n(46), h = r(l), d = n(18), p = r(d),
        y = n(27), g = r(y), v = "function" == typeof u["default"] && "symbol" == typeof a["default"] ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof u["default"] && t.constructor === u["default"] && t !== u["default"].prototype ? "symbol" : typeof t
        }, b = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, f["default"])(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(), m = n(45), w = r(m), _ = n(66), x = function () {
            function t(e, n) {
                i(this, t), this.did = n.did, this.host = n.host, this.path = n.path, this.scene = n.scene ? n.scene : e.scene, this.is_af = n.is_af, this.cache = [], this.lastSend = null, this.dunkey = e
            }

            return b(t, [{
                key: "gzip", value: function (t) {
                    return "object" === (void 0 === t ? "undefined" : v(t)) ? t = (0, g["default"])(t) : "string" != typeof t && (t = t.toString()), new Zlib.Gzip(this.stringToUint(t)).compress()
                }
            }, {
                key: "stringToUint", value: function (t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push(t[n].charCodeAt(0));
                    return isIE() && isIE() < 10 ? e : new Uint8Array(e)
                }
            }, {
                key: "isApp", value: function () {
                    try {
                        return this.sendToApp = window.webkit.messageHandlers.ZACoreWebViewApp.postMessage, !0
                    } catch (t) {
                        return !1
                    }
                }
            }, {
                key: "fetch", value: function (t) {
                    var e = this;
                    return new p["default"](function (n, r) {
                        var i = e.gzip(t),
                            o = btoa(String.fromCharCode.apply(null, i)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "."),
                            a = e.did.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ".");
                        _(e.host + e.path + "?did=" + a + "&d=" + o, {}).then(function (t) {
                        }).then(function (t) {
                            n(t)
                        })["catch"](function (t) {
                            r(t)
                        })
                    })
                }
            }, {
                key: "sendToCache", value: function (t) {
                    this.lastSend || (this.lastSend = Date.now()), this.cache.push(t), ("beforeunload" === t.e || Date.now() - this.lastSend > 5e3) && (this.fetch(this.cache), this.cache = [], this.lastSend = null)
                }
            }, {
                key: "addExtraData", value: function (t, e) {
                    this.extraDataFunc = this.extraDataFunc || {}, this.extraDataFunc[t] = e
                }
            }, {
                key: "removeExtraData", value: function (t) {
                    this.extraDataFunc = this.extraDataFunc || {}, delete this.extraDataFunc[t]
                }
            }, {
                key: "send", value: function (t) {
                    var e = this, n = {};
                    if (this.extraDataFunc) for (var r in this.extraDataFunc) {
                        var i = this.extraDataFunc[r];
                        n[r] = i(t, n)
                    }
                    return (0, h["default"])(n).length > 0 && (t.d.ex = (0, g["default"])(n)), this.dunkey.emit("request/send", {
                        body: t,
                        is_af: this.is_af,
                        ts: Date.now()
                    }), this.isApp() ? void this.sendToApp({
                        scene: dunkey.scene,
                        data: t
                    }) : new p["default"](function (n, r) {
                        (0, w["default"])(dunkey.scene, void 0, !dunkey.is_af).then(function (i) {
                            var o = i, a = t.d.t;
                            delete t.d.t;
                            var s = {
                                e: t.e,
                                t: o,
                                d: t.d,
                                path: location.hostname + location.pathname,
                                ts: a,
                                s: dunkey.scene,
                                is_af: e.is_af || !1
                            };
                            return e.is_af ? void e.fetch([s]).then(function (t) {
                                return n(t)
                            })["catch"](function (t) {
                                return r(t)
                            }) : (e.sendToCache(s), void n("cache"))
                        })
                    })
                }
            }]), t
        }();
    e["default"] = x
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(17), o = function (t) {
        return t && t.__esModule ? t : {"default": t}
    }(i), a = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o["default"])(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), s = n(144), u = function () {
        function t(e) {
            r(this, t), this.server = e.server;
            var n = this.server.match(/^(.*)\?(.*)$/);
            n ? (this.serverHost = n[1],
                this.serverQuery = s.parse(n[2])) : (this.serverHost = this.server, this.serverQuery = {}), this.accesstoken = null, this.openid = "", this.load(e)
        }

        return a(t, [{
            key: "injectRequester", value: function () {
                dunkey.requester.addExtraData("wechat", function (t, e) {
                    return {state: dunkey.plugins.wechat.query.state, openid: dunkey.plugins.wechat.openid}
                })
            }
        }, {
            key: "load", value: function (t) {
                var e = this;
                t = t || {};
                var n = s.parse(location.search);
                this.query = n, fetch(this.serverHost + "?" + s.stringify(this.serverQuery)).then(function (t) {
                    return t.json()
                }).then(function (n) {
                    e.accesstoken = n.access_token, e.openid = n.openid, t && t.accesstoken && "function" == typeof t.accesstoken && (e.accesstoken = t.accesstoken(n)), t && t.openid && "function" == typeof t.openid && (e.openid = t.openid(n)), dunkey.emit("wechat/getopenid", {
                        accesstoken: e.accesstoken,
                        openid: e.openid,
                        ts: Date.now()
                    }), e.injectRequester()
                })["catch"](function (t) {
                    console.log("Dunkey Wechat Plugin: get accesstoken with server error", t)
                })
            }
        }]), t
    }();
    e["default"] = u
}, function (t, e, n) {
    t.exports = {"default": n(80), __esModule: !0}
}, function (t, e, n) {
    t.exports = {"default": n(81), __esModule: !0}
}, function (t, e, n) {
    t.exports = {"default": n(84), __esModule: !0}
}, function (t, e, n) {
    t.exports = {"default": n(85), __esModule: !0}
}, function (t, e, n) {
    n(26), n(110), t.exports = n(1).Array.from
}, function (t, e, n) {
    n(43), n(26), t.exports = n(109)
}, function (t, e, n) {
    var r = n(1), i = r.JSON || (r.JSON = {stringify: JSON.stringify});
    t.exports = function (t) {
        return i.stringify.apply(i, arguments)
    }
}, function (t, e, n) {
    n(112);
    var r = n(1).Object;
    t.exports = function (t, e, n) {
        return r.defineProperty(t, e, n)
    }
}, function (t, e, n) {
    n(113);
    var r = n(1).Object;
    t.exports = function (t, e) {
        return r.getOwnPropertyDescriptor(t, e)
    }
}, function (t, e, n) {
    n(114);
    var r = n(1).Object;
    t.exports = function (t) {
        return r.getOwnPropertyNames(t)
    }
}, function (t, e, n) {
    n(115), t.exports = n(1).Object.keys
}, function (t, e, n) {
    n(65), n(26), n(43), n(116), n(118), n(119), t.exports = n(1).Promise
}, function (t, e, n) {
    n(117), n(65), n(120), n(121), t.exports = n(1).Symbol
}, function (t, e, n) {
    n(26), n(43), t.exports = n(41).f("iterator")
}, function (t, e) {
    t.exports = function () {
    }
}, function (t, e) {
    t.exports = function (t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function (t, e, n) {
    var r = n(11), i = n(37), o = n(108);
    t.exports = function (t) {
        return function (e, n, a) {
            var s, u = r(e), c = i(u.length), f = o(a, c);
            if (t && n != n) {
                for (; c > f;) if ((s = u[f++]) != s) return !0
            } else for (; c > f; f++) if ((t || f in u) && u[f] === n) return t || f || 0;
            return !t && -1
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(5), i = n(16);
    t.exports = function (t, e, n) {
        e in t ? r.f(t, e, i(0, n)) : t[e] = n
    }
}, function (t, e, n) {
    var r = n(23), i = n(58), o = n(32);
    t.exports = function (t) {
        var e = r(t), n = i.f;
        if (n) for (var a, s = n(t), u = o.f, c = 0; s.length > c;) u.call(t, a = s[c++]) && e.push(a);
        return e
    }
}, function (t, e, n) {
    var r = n(13), i = n(51), o = n(50), a = n(4), s = n(37), u = n(42), c = {}, f = {},
        e = t.exports = function (t, e, n, l, h) {
            var d, p, y, g, v = h ? function () {
                return t
            } : u(t), b = r(n, l, e ? 2 : 1), m = 0;
            if ("function" != typeof v) throw TypeError(t + " is not iterable!");
            if (o(v)) {
                for (d = s(t.length); d > m; m++) if ((g = e ? b(a(p = t[m])[0], p[1]) : b(t[m])) === c || g === f) return g
            } else for (y = v.call(t); !(p = y.next()).done;) if ((g = i(y, b, p.value, e)) === c || g === f) return g
        };
    e.BREAK = c, e.RETURN = f
}, function (t, e) {
    t.exports = function (t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function (t, e, n) {
    var r = n(12);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function (t, e, n) {
    var r = n(12);
    t.exports = Array.isArray || function (t) {
        return "Array" == r(t)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(54), i = n(16), o = n(24), a = {};
    n(9)(a, n(3)("iterator"), function () {
        return this
    }), t.exports = function (t, e, n) {
        t.prototype = r(a, {next: i(1, n)}), o(t, e + " Iterator")
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {value: e, done: !!t}
    }
}, function (t, e, n) {
    var r = n(25)("meta"), i = n(10), o = n(8), a = n(5).f, s = 0, u = Object.isExtensible || function () {
        return !0
    }, c = !n(14)(function () {
        return u(Object.preventExtensions({}))
    }), f = function (t) {
        a(t, r, {value: {i: "O" + ++s, w: {}}})
    }, l = function (t, e) {
        if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!o(t, r)) {
            if (!u(t)) return "F";
            if (!e) return "E";
            f(t)
        }
        return t[r].i
    }, h = function (t, e) {
        if (!o(t, r)) {
            if (!u(t)) return !0;
            if (!e) return !1;
            f(t)
        }
        return t[r].w
    }, d = function (t) {
        return c && p.NEED && u(t) && !o(t, r) && f(t), t
    }, p = t.exports = {KEY: r, NEED: !1, fastKey: l, getWeak: h, onFreeze: d}
}, function (t, e, n) {
    var r = n(2), i = n(64).set, o = r.MutationObserver || r.WebKitMutationObserver, a = r.process, s = r.Promise,
        u = "process" == n(12)(a);
    t.exports = function () {
        var t, e, n, c = function () {
            var r, i;
            for (u && (r = a.domain) && r.exit(); t;) {
                i = t.fn, t = t.next;
                try {
                    i()
                } catch (r) {
                    throw t ? n() : e = void 0, r
                }
            }
            e = void 0, r && r.enter()
        };
        if (u) n = function () {
            a.nextTick(c)
        }; else if (!o || r.navigator && r.navigator.standalone) if (s && s.resolve) {
            var f = s.resolve();
            n = function () {
                f.then(c)
            }
        } else n = function () {
            i.call(r, c)
        }; else {
            var l = !0, h = document.createTextNode("");
            new o(c).observe(h, {characterData: !0}), n = function () {
                h.data = l = !l
            }
        }
        return function (r) {
            var i = {fn: r, next: void 0};
            e && (e.next = i), t || (t = i, n()), e = i
        }
    }
}, function (t, e, n) {
    var r = n(5), i = n(4), o = n(23);
    t.exports = n(6) ? Object.defineProperties : function (t, e) {
        i(t);
        for (var n, a = o(e), s = a.length, u = 0; s > u;) r.f(t, n = a[u++], e[n]);
        return t
    }
}, function (t, e, n) {
    var r = n(8), i = n(38), o = n(34)("IE_PROTO"), a = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
        return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function (t, e, n) {
    var r = n(9);
    t.exports = function (t, e, n) {
        for (var i in e) n && t[i] ? t[i] = e[i] : r(t, i, e[i]);
        return t
    }
}, function (t, e, n) {
    "use strict";
    var r = n(2), i = n(1), o = n(5), a = n(6), s = n(3)("species");
    t.exports = function (t) {
        var e = "function" == typeof i[t] ? i[t] : r[t];
        a && e && !e[s] && o.f(e, s, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (t, e, n) {
    var r = n(36), i = n(28);
    t.exports = function (t) {
        return function (e, n) {
            var o, a, s = String(i(e)), u = r(n), c = s.length;
            return u < 0 || u >= c ? t ? "" : void 0 : (o = s.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536)
        }
    }
}, function (t, e, n) {
    var r = n(36), i = Math.max, o = Math.min;
    t.exports = function (t, e) {
        return t = r(t), t < 0 ? i(t + e, 0) : o(t, e)
    }
}, function (t, e, n) {
    var r = n(4), i = n(42);
    t.exports = n(1).getIterator = function (t) {
        var e = i(t);
        if ("function" != typeof e) throw TypeError(t + " is not iterable!");
        return r(e.call(t))
    }
}, function (t, e, n) {
    "use strict";
    var r = n(13), i = n(7), o = n(38), a = n(51), s = n(50), u = n(37), c = n(93), f = n(42);
    i(i.S + i.F * !n(53)(function (t) {
        Array.from(t)
    }), "Array", {
        from: function (t) {
            var e, n, i, l, h = o(t), d = "function" == typeof this ? this : Array, p = arguments.length,
                y = p > 1 ? arguments[1] : void 0, g = void 0 !== y, v = 0, b = f(h);
            if (g && (y = r(y, p > 2 ? arguments[2] : void 0, 2)), void 0 == b || d == Array && s(b)) for (e = u(h.length), n = new d(e); e > v; v++) c(n, v, g ? y(h[v], v) : h[v]); else for (l = b.call(h), n = new d; !(i = l.next()).done; v++) c(n, v, g ? a(l, y, [i.value, v], !0) : i.value);
            return n.length = v, n
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(90), i = n(100), o = n(15), a = n(11);
    t.exports = n(52)(Array, "Array", function (t, e) {
        this._t = a(t), this._i = 0, this._k = e
    }, function () {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]])
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function (t, e, n) {
    var r = n(7);
    r(r.S + r.F * !n(6), "Object", {defineProperty: n(5).f})
}, function (t, e, n) {
    var r = n(11), i = n(55).f;
    n(33)("getOwnPropertyDescriptor", function () {
        return function (t, e) {
            return i(r(t), e)
        }
    })
}, function (t, e, n) {
    n(33)("getOwnPropertyNames", function () {
        return n(56).f
    })
}, function (t, e, n) {
    var r = n(38), i = n(23);
    n(33)("keys", function () {
        return function (t) {
            return i(r(t))
        }
    })
}, function (t, e, n) {
    "use strict";
    var r, i, o, a, s = n(22), u = n(2), c = n(13), f = n(47), l = n(7), h = n(10), d = n(21), p = n(91), y = n(95),
        g = n(63), v = n(64).set, b = n(102)(), m = n(31), w = n(60), _ = n(61), x = "Promise", S = u.TypeError,
        E = u.process, T = u[x], A = "process" == f(E), O = function () {
        }, D = i = m.f, j = !!function () {
            try {
                var t = T.resolve(1), e = (t.constructor = {})[n(3)("species")] = function (t) {
                    t(O, O)
                };
                return (A || "function" == typeof PromiseRejectionEvent) && t.then(O) instanceof e
            } catch (t) {
            }
        }(), k = function (t) {
            var e;
            return !(!h(t) || "function" != typeof (e = t.then)) && e
        }, M = function (t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                b(function () {
                    for (var r = t._v, i = 1 == t._s, o = 0; n.length > o;) !function (e) {
                        var n, o, a = i ? e.ok : e.fail, s = e.resolve, u = e.reject, c = e.domain;
                        try {
                            a ? (i || (2 == t._h && I(t), t._h = 1), !0 === a ? n = r : (c && c.enter(), n = a(r), c && c.exit()), n === e.promise ? u(S("Promise-chain cycle")) : (o = k(n)) ? o.call(n, s, u) : s(n)) : u(r)
                        } catch (t) {
                            u(t)
                        }
                    }(n[o++]);
                    t._c = [], t._n = !1, e && !t._h && P(t)
                })
            }
        }, P = function (t) {
            v.call(u, function () {
                var e, n, r, i = t._v, o = C(t);
                if (o && (e = w(function () {
                    A ? E.emit("unhandledRejection", i, t) : (n = u.onunhandledrejection) ? n({
                        promise: t,
                        reason: i
                    }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                }), t._h = A || C(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
            })
        }, C = function (t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        }, I = function (t) {
            v.call(u, function () {
                var e;
                A ? E.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({promise: t, reason: t._v})
            })
        }, R = function (t) {
            var e = this;
            e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), M(e, !0))
        }, F = function (t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw S("Promise can't be resolved itself");
                    (e = k(t)) ? b(function () {
                        var r = {_w: n, _d: !1};
                        try {
                            e.call(t, c(F, r, 1), c(R, r, 1))
                        } catch (t) {
                            R.call(r, t)
                        }
                    }) : (n._v = t, n._s = 1, M(n, !1))
                } catch (t) {
                    R.call({_w: n, _d: !1}, t)
                }
            }
        };
    j || (T = function (t) {
        p(this, T, x, "_h"), d(t), r.call(this);
        try {
            t(c(F, this, 1), c(R, this, 1))
        } catch (t) {
            R.call(this, t)
        }
    }, r = function (t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, r.prototype = n(105)(T.prototype, {
        then: function (t, e) {
            var n = D(g(this, T));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = A ? E.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && M(this, !1), n.promise
        }, "catch": function (t) {
            return this.then(void 0, t)
        }
    }), o = function () {
        var t = new r;
        this.promise = t, this.resolve = c(F, t, 1), this.reject = c(R, t, 1)
    }, m.f = D = function (t) {
        return t === T || t === a ? new o(t) : i(t)
    }), l(l.G + l.W + l.F * !j, {Promise: T}), n(24)(T, x), n(106)(x), a = n(1)[x], l(l.S + l.F * !j, x, {
        reject: function (t) {
            var e = D(this);
            return (0, e.reject)(t), e.promise
        }
    }), l(l.S + l.F * (s || !j), x, {
        resolve: function (t) {
            return _(s && this === a ? T : this, t)
        }
    }), l(l.S + l.F * !(j && n(53)(function (t) {
        T.all(t)["catch"](O)
    })), x, {
        all: function (t) {
            var e = this, n = D(e), r = n.resolve, i = n.reject, o = w(function () {
                var n = [], o = 0, a = 1;
                y(t, !1, function (t) {
                    var s = o++, u = !1;
                    n.push(void 0), a++, e.resolve(t).then(function (t) {
                        u || (u = !0, n[s] = t, --a || r(n))
                    }, i)
                }), --a || r(n)
            });
            return o.e && i(o.v), n.promise
        }, race: function (t) {
            var e = this, n = D(e), r = n.reject, i = w(function () {
                y(t, !1, function (t) {
                    e.resolve(t).then(n.resolve, r)
                })
            });
            return i.e && r(i.v), n.promise
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(2), i = n(8), o = n(6), a = n(7), s = n(62), u = n(101).KEY, c = n(14), f = n(35), l = n(24), h = n(25),
        d = n(3), p = n(41), y = n(40), g = n(94), v = n(98), b = n(4), m = n(10), w = n(11), _ = n(39), x = n(16),
        S = n(54), E = n(56), T = n(55), A = n(5), O = n(23), D = T.f, j = A.f, k = E.f, M = r.Symbol, P = r.JSON,
        C = P && P.stringify, I = "prototype", R = d("_hidden"), F = d("toPrimitive"), B = {}.propertyIsEnumerable,
        L = f("symbol-registry"), N = f("symbols"), U = f("op-symbols"), H = Object[I], G = "function" == typeof M,
        X = r.QObject, z = !X || !X[I] || !X[I].findChild, K = o && c(function () {
            return 7 != S(j({}, "a", {
                get: function () {
                    return j(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (t, e, n) {
            var r = D(H, e);
            r && delete H[e], j(t, e, n), r && t !== H && j(H, e, r)
        } : j, W = function (t) {
            var e = N[t] = S(M[I]);
            return e._k = t, e
        }, V = G && "symbol" == typeof M.iterator ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            return t instanceof M
        }, Y = function (t, e, n) {
            return t === H && Y(U, e, n), b(t), e = _(e, !0), b(n), i(N, e) ? (n.enumerable ? (i(t, R) && t[R][e] && (t[R][e] = !1), n = S(n, {enumerable: x(0, !1)})) : (i(t, R) || j(t, R, x(1, {})), t[R][e] = !0), K(t, e, n)) : j(t, e, n)
        }, q = function (t, e) {
            b(t);
            for (var n, r = g(e = w(e)), i = 0, o = r.length; o > i;) Y(t, n = r[i++], e[n]);
            return t
        }, J = function (t, e) {
            return void 0 === e ? S(t) : q(S(t), e)
        }, $ = function (t) {
            var e = B.call(this, t = _(t, !0));
            return !(this === H && i(N, t) && !i(U, t)) && (!(e || !i(this, t) || !i(N, t) || i(this, R) && this[R][t]) || e)
        }, Z = function (t, e) {
            if (t = w(t), e = _(e, !0), t !== H || !i(N, e) || i(U, e)) {
                var n = D(t, e);
                return !n || !i(N, e) || i(t, R) && t[R][e] || (n.enumerable = !0), n
            }
        }, Q = function (t) {
            for (var e, n = k(w(t)), r = [], o = 0; n.length > o;) i(N, e = n[o++]) || e == R || e == u || r.push(e);
            return r
        }, tt = function (t) {
            for (var e, n = t === H, r = k(n ? U : w(t)), o = [], a = 0; r.length > a;) !i(N, e = r[a++]) || n && !i(H, e) || o.push(N[e]);
            return o
        };
    G || (M = function () {
        if (this instanceof M) throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0), e = function (n) {
            this === H && e.call(U, n), i(this, R) && i(this[R], t) && (this[R][t] = !1), K(this, t, x(1, n))
        };
        return o && z && K(H, t, {configurable: !0, set: e}), W(t)
    }, s(M[I], "toString", function () {
        return this._k
    }), T.f = Z, A.f = Y, n(57).f = E.f = Q, n(32).f = $, n(58).f = tt, o && !n(22) && s(H, "propertyIsEnumerable", $, !0), p.f = function (t) {
        return W(d(t))
    }), a(a.G + a.W + a.F * !G, {Symbol: M});
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) d(et[nt++]);
    for (var rt = O(d.store), it = 0; rt.length > it;) y(rt[it++]);
    a(a.S + a.F * !G, "Symbol", {
        "for": function (t) {
            return i(L, t += "") ? L[t] : L[t] = M(t)
        }, keyFor: function (t) {
            if (!V(t)) throw TypeError(t + " is not a symbol!");
            for (var e in L) if (L[e] === t) return e
        }, useSetter: function () {
            z = !0
        }, useSimple: function () {
            z = !1
        }
    }), a(a.S + a.F * !G, "Object", {
        create: J,
        defineProperty: Y,
        defineProperties: q,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: tt
    }), P && a(a.S + a.F * (!G || c(function () {
        var t = M();
        return "[null]" != C([t]) || "{}" != C({a: t}) || "{}" != C(Object(t))
    })), "JSON", {
        stringify: function (t) {
            for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
            if (n = e = r[1], (m(e) || void 0 !== t) && !V(t)) return v(e) || (e = function (t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !V(e)) return e
            }), r[1] = e, C.apply(P, r)
        }
    }), M[I][F] || n(9)(M[I], F, M[I].valueOf), l(M, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
}, function (t, e, n) {
    "use strict";
    var r = n(7), i = n(1), o = n(2), a = n(63), s = n(61);
    r(r.P + r.R, "Promise", {
        "finally": function (t) {
            var e = a(this, i.Promise || o.Promise), n = "function" == typeof t;
            return this.then(n ? function (n) {
                return s(e, t()).then(function () {
                    return n
                })
            } : t, n ? function (n) {
                return s(e, t()).then(function () {
                    throw n
                })
            } : t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(7), i = n(31), o = n(60);
    r(r.S, "Promise", {
        "try": function (t) {
            var e = i.f(this), n = o(t);
            return (n.e ? e.reject : e.resolve)(n.v), e.promise
        }
    })
}, function (t, e, n) {
    n(40)("asyncIterator")
}, function (t, e, n) {
    n(40)("observable")
}, function (t, e, n) {
    !function (n, r) {
        t.exports = e = function () {
            var t = t || function (t, e) {
                var n = Object.create || function () {
                    function t() {
                    }

                    return function (e) {
                        var n;
                        return t.prototype = e, n = new t, t.prototype = null, n
                    }
                }(), r = {}, i = r.lib = {}, o = i.Base = function () {
                    return {
                        extend: function (t) {
                            var e = n(this);
                            return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function () {
                                e.$super.init.apply(this, arguments)
                            }), e.init.prototype = e, e.$super = this, e
                        }, create: function () {
                            var t = this.extend();
                            return t.init.apply(t, arguments), t
                        }, init: function () {
                        }, mixIn: function (t) {
                            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                            t.hasOwnProperty("toString") && (this.toString = t.toString)
                        }, clone: function () {
                            return this.init.prototype.extend(this)
                        }
                    }
                }(), a = i.WordArray = o.extend({
                    init: function (t, e) {
                        t = this.words = t || [], this.sigBytes = void 0 != e ? e : 4 * t.length
                    }, toString: function (t) {
                        return (t || u).stringify(this)
                    }, concat: function (t) {
                        var e = this.words, n = t.words, r = this.sigBytes, i = t.sigBytes;
                        if (this.clamp(), r % 4) for (var o = 0; o < i; o++) {
                            var a = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            e[r + o >>> 2] |= a << 24 - (r + o) % 4 * 8
                        } else for (var o = 0; o < i; o += 4) e[r + o >>> 2] = n[o >>> 2];
                        return this.sigBytes += i, this
                    }, clamp: function () {
                        var e = this.words, n = this.sigBytes;
                        e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4)
                    }, clone: function () {
                        var t = o.clone.call(this);
                        return t.words = this.words.slice(0), t
                    }, random: function (e) {
                        for (var n, r = [], i = 0; i < e; i += 4) {
                            var o = function (e) {
                                var e = e, n = 987654321, r = 4294967295;
                                return function () {
                                    n = 36969 * (65535 & n) + (n >> 16) & r, e = 18e3 * (65535 & e) + (e >> 16) & r;
                                    var i = (n << 16) + e & r;
                                    return i /= 4294967296, (i += .5) * (t.random() > .5 ? 1 : -1)
                                }
                            }(4294967296 * (n || t.random()));
                            n = 987654071 * o(), r.push(4294967296 * o() | 0)
                        }
                        return new a.init(r, e)
                    }
                }), s = r.enc = {}, u = s.Hex = {
                    stringify: function (t) {
                        for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                            var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16))
                        }
                        return r.join("")
                    }, parse: function (t) {
                        for (var e = t.length, n = [], r = 0; r < e; r += 2) n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                        return new a.init(n, e / 2)
                    }
                }, c = s.Latin1 = {
                    stringify: function (t) {
                        for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                            var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push(String.fromCharCode(o))
                        }
                        return r.join("")
                    }, parse: function (t) {
                        for (var e = t.length, n = [], r = 0; r < e; r++) n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                        return new a.init(n, e)
                    }
                }, f = s.Utf8 = {
                    stringify: function (t) {
                        try {
                            return decodeURIComponent(escape(c.stringify(t)))
                        } catch (t) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    }, parse: function (t) {
                        return c.parse(unescape(encodeURIComponent(t)))
                    }
                }, l = i.BufferedBlockAlgorithm = o.extend({
                    reset: function () {
                        this._data = new a.init, this._nDataBytes = 0
                    }, _append: function (t) {
                        "string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                    }, _process: function (e) {
                        var n = this._data, r = n.words, i = n.sigBytes, o = this.blockSize, s = 4 * o, u = i / s;
                        u = e ? t.ceil(u) : t.max((0 | u) - this._minBufferSize, 0);
                        var c = u * o, f = t.min(4 * c, i);
                        if (c) {
                            for (var l = 0; l < c; l += o) this._doProcessBlock(r, l);
                            var h = r.splice(0, c);
                            n.sigBytes -= f
                        }
                        return new a.init(h, f)
                    }, clone: function () {
                        var t = o.clone.call(this);
                        return t._data = this._data.clone(), t
                    }, _minBufferSize: 0
                }), h = (i.Hasher = l.extend({
                    cfg: o.extend(), init: function (t) {
                        this.cfg = this.cfg.extend(t), this.reset()
                    }, reset: function () {
                        l.reset.call(this), this._doReset()
                    }, update: function (t) {
                        return this._append(t), this._process(), this
                    }, finalize: function (t) {
                        return t && this._append(t), this._doFinalize()
                    }, blockSize: 16, _createHelper: function (t) {
                        return function (e, n) {
                            return new t.init(n).finalize(e)
                        }
                    }, _createHmacHelper: function (t) {
                        return function (e, n) {
                            return new h.HMAC.init(t, n).finalize(e)
                        }
                    }
                }), r.algo = {});
                return r
            }(Math);
            return t
        }()
    }()
}, function (t, e, n) {
    !function (r, i) {
        t.exports = e = function (t) {
            return function () {
                var e = t, n = e.lib, r = n.WordArray, i = n.Hasher, o = e.algo, a = [], s = o.SHA1 = i.extend({
                    _doReset: function () {
                        this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    }, _doProcessBlock: function (t, e) {
                        for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], u = n[4], c = 0; c < 80; c++) {
                            if (c < 16) a[c] = 0 | t[e + c]; else {
                                var f = a[c - 3] ^ a[c - 8] ^ a[c - 14] ^ a[c - 16];
                                a[c] = f << 1 | f >>> 31
                            }
                            var l = (r << 5 | r >>> 27) + u + a[c];
                            l += c < 20 ? 1518500249 + (i & o | ~i & s) : c < 40 ? 1859775393 + (i ^ o ^ s) : c < 60 ? (i & o | i & s | o & s) - 1894007588 : (i ^ o ^ s) - 899497514, u = s, s = o, o = i << 30 | i >>> 2, i = r, r = l
                        }
                        n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, n[4] = n[4] + u | 0
                    }, _doFinalize: function () {
                        var t = this._data, e = t.words, n = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                        return e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), e[15 + (r + 64 >>> 9 << 4)] = n, t.sigBytes = 4 * e.length, this._process(), this._hash
                    }, clone: function () {
                        var t = i.clone.call(this);
                        return t._hash = this._hash.clone(), t
                    }
                });
                e.SHA1 = i._createHelper(s), e.HmacSHA1 = i._createHmacHelper(s)
            }(), t.SHA1
        }(n(122))
    }()
}, function (t, e, n) {
    "use strict";
    var r, i = n(126), o = n(133), a = n(129), s = n(135);
    r = t.exports = function (t, e) {
        var n, r, a, u, c;
        return arguments.length < 2 || "string" != typeof t ? (u = e, e = t, t = null) : u = arguments[2], null == t ? (n = a = !0, r = !1) : (n = s.call(t, "c"), r = s.call(t, "e"), a = s.call(t, "w")), c = {
            value: e,
            configurable: n,
            enumerable: r,
            writable: a
        }, u ? i(o(u), c) : c
    }, r.gs = function (t, e, n) {
        var r, u, c, f;
        return "string" != typeof t ? (c = n, n = e, e = t, t = null) : c = arguments[3], null == e ? e = void 0 : a(e) ? null == n ? n = void 0 : a(n) || (c = n, n = void 0) : (c = e, e = n = void 0), null == t ? (r = !0, u = !1) : (r = s.call(t, "c"), u = s.call(t, "e")), f = {
            get: e,
            set: n,
            configurable: r,
            enumerable: u
        }, c ? i(o(c), f) : f
    }
}, function (t, e) {
    "use strict";
    t.exports = function () {
    }
}, function (t, e, n) {
    "use strict";
    t.exports = n(127)() ? Object.assign : n(128)
}, function (t, e) {
    "use strict";
    t.exports = function () {
        var t, e = Object.assign;
        return "function" == typeof e && (t = {foo: "raz"}, e(t, {bar: "dwa"}, {trzy: "trzy"}), t.foo + t.bar + t.trzy === "razdwatrzy")
    }
}, function (t, e, n) {
    "use strict";
    var r = n(130), i = n(134), o = Math.max;
    t.exports = function (t, e) {
        var n, a, s, u = o(arguments.length, 2);
        for (t = Object(i(t)), s = function (r) {
            try {
                t[r] = e[r]
            } catch (t) {
                n || (n = t)
            }
        }, a = 1; a < u; ++a) e = arguments[a], r(e).forEach(s);
        if (void 0 !== n) throw n;
        return t
    }
}, function (t, e) {
    "use strict";
    t.exports = function (t) {
        return "function" == typeof t
    }
}, function (t, e, n) {
    "use strict";
    t.exports = n(131)() ? Object.keys : n(132)
}, function (t, e) {
    "use strict";
    t.exports = function () {
        try {
            return Object.keys("primitive"), !0
        } catch (t) {
            return !1
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(44), i = Object.keys;
    t.exports = function (t) {
        return i(r(t) ? Object(t) : t)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(44), i = Array.prototype.forEach, o = Object.create, a = function (t, e) {
        var n;
        for (n in t) e[n] = t[n]
    };
    t.exports = function (t) {
        var e = o(null);
        return i.call(arguments, function (t) {
            r(t) && a(Object(t), e)
        }), e
    }
}, function (t, e, n) {
    "use strict";
    var r = n(44);
    t.exports = function (t) {
        if (!r(t)) throw new TypeError("Cannot use null or undefined");
        return t
    }
}, function (t, e, n) {
    "use strict";
    t.exports = n(136)() ? String.prototype.contains : n(137)
}, function (t, e) {
    "use strict";
    var n = "razdwatrzy";
    t.exports = function () {
        return "function" == typeof n.contains && !0 === n.contains("dwa") && !1 === n.contains("foo")
    }
}, function (t, e) {
    "use strict";
    var n = String.prototype.indexOf;
    t.exports = function (t) {
        return n.call(this, t, arguments[1]) > -1
    }
}, function (t, e, n) {
    "use strict";
    t.exports = n(139)() ? Symbol : n(141)
}, function (t, e) {
    "use strict";
    var n = {object: !0, symbol: !0};
    t.exports = function () {
        var t;
        if ("function" != typeof Symbol) return !1;
        t = Symbol("test symbol");
        try {
            String(t)
        } catch (t) {
            return !1
        }
        return !!n[typeof Symbol.iterator] && !!n[typeof Symbol.toPrimitive] && !!n[typeof Symbol.toStringTag]
    }
}, function (t, e) {
    "use strict";
    t.exports = function (t) {
        return !!t && ("symbol" == typeof t || !!t.constructor && "Symbol" === t.constructor.name && "Symbol" === t[t.constructor.toStringTag])
    }
}, function (t, e, n) {
    "use strict";
    var r, i, o, a, s = n(124), u = n(142), c = Object.create, f = Object.defineProperties, l = Object.defineProperty,
        h = Object.prototype, d = c(null);
    if ("function" == typeof Symbol) {
        r = Symbol;
        try {
            String(r()), a = !0
        } catch (t) {
        }
    }
    var p = function () {
        var t = c(null);
        return function (e) {
            for (var n, r, i = 0; t[e + (i || "")];) ++i;
            return e += i || "", t[e] = !0, n = "@@" + e, l(h, n, s.gs(null, function (t) {
                r || (r = !0, l(this, n, s(t)), r = !1)
            })), n
        }
    }();
    o = function (t) {
        if (this instanceof o) throw new TypeError("Symbol is not a constructor");
        return i(t)
    }, t.exports = i = function y(t) {
        var e;
        if (this instanceof y) throw new TypeError("Symbol is not a constructor");
        return a ? r(t) : (e = c(o.prototype), t = void 0 === t ? "" : String(t), f(e, {
            __description__: s("", t),
            __name__: s("", p(t))
        }))
    }, f(i, {
        "for": s(function (t) {
            return d[t] ? d[t] : d[t] = i(String(t))
        }),
        keyFor: s(function (t) {
            var e;
            u(t);
            for (e in d) if (d[e] === t) return e
        }),
        hasInstance: s("", r && r.hasInstance || i("hasInstance")),
        isConcatSpreadable: s("", r && r.isConcatSpreadable || i("isConcatSpreadable")),
        iterator: s("", r && r.iterator || i("iterator")),
        match: s("", r && r.match || i("match")),
        replace: s("", r && r.replace || i("replace")),
        search: s("", r && r.search || i("search")),
        species: s("", r && r.species || i("species")),
        split: s("", r && r.split || i("split")),
        toPrimitive: s("", r && r.toPrimitive || i("toPrimitive")),
        toStringTag: s("", r && r.toStringTag || i("toStringTag")),
        unscopables: s("", r && r.unscopables || i("unscopables"))
    }), f(o.prototype, {
        constructor: s(i), toString: s("", function () {
            return this.__name__
        })
    }), f(i.prototype, {
        toString: s(function () {
            return "Symbol (" + u(this).__description__ + ")"
        }), valueOf: s(function () {
            return u(this)
        })
    }), l(i.prototype, i.toPrimitive, s("", function () {
        var t = u(this);
        return "symbol" == typeof t ? t : t.toString()
    })), l(i.prototype, i.toStringTag, s("c", "Symbol")), l(o.prototype, i.toStringTag, s("c", i.prototype[i.toStringTag])), l(o.prototype, i.toPrimitive, s("c", i.prototype[i.toPrimitive]))
}, function (t, e, n) {
    "use strict";
    var r = n(140);
    t.exports = function (t) {
        if (!r(t)) throw new TypeError(t + " is not a symbol");
        return t
    }
}, function (t, e) {
    "use strict";

    function n(t) {
        if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }

    var r = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
    t.exports = function () {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
                return e[t]
            }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                r[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function (t, e) {
        for (var a, s, u = n(t), c = 1; c < arguments.length; c++) {
            a = Object(arguments[c]);
            for (var f in a) i.call(a, f) && (u[f] = a[f]);
            if (r) {
                s = r(a);
                for (var l = 0; l < s.length; l++) o.call(a, s[l]) && (u[s[l]] = a[s[l]])
            }
        }
        return u
    }
}, function (t, e, n) {
    "use strict";

    function r(t) {
        switch (t.arrayFormat) {
            case"index":
                return function (e, n, r) {
                    return null === n ? [o(e, t), "[", r, "]"].join("") : [o(e, t), "[", o(r, t), "]=", o(n, t)].join("")
                };
            case"bracket":
                return function (e, n) {
                    return null === n ? o(e, t) : [o(e, t), "[]=", o(n, t)].join("")
                };
            default:
                return function (e, n) {
                    return null === n ? o(e, t) : [o(e, t), "=", o(n, t)].join("")
                }
        }
    }

    function i(t) {
        var e;
        switch (t.arrayFormat) {
            case"index":
                return function (t, n, r) {
                    return e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), e ? (void 0 === r[t] && (r[t] = {}), void (r[t][e[1]] = n)) : void (r[t] = n)
                };
            case"bracket":
                return function (t, n, r) {
                    return e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), e ? void 0 === r[t] ? void (r[t] = [n]) : void (r[t] = [].concat(r[t], n)) : void (r[t] = n)
                };
            default:
                return function (t, e, n) {
                    return void 0 === n[t] ? void (n[t] = e) : void (n[t] = [].concat(n[t], e))
                }
        }
    }

    function o(t, e) {
        return e.encode ? e.strict ? s(t) : encodeURIComponent(t) : t
    }

    function a(t) {
        return Array.isArray(t) ? t.sort() : "object" == typeof t ? a(Object.keys(t)).sort(function (t, e) {
            return Number(t) - Number(e)
        }).map(function (e) {
            return t[e]
        }) : t
    }

    var s = n(145), u = n(143);
    e.extract = function (t) {
        return t.split("?")[1] || ""
    }, e.parse = function (t, e) {
        e = u({arrayFormat: "none"}, e);
        var n = i(e), r = Object.create(null);
        return "string" != typeof t ? r : (t = t.trim().replace(/^(\?|#|&)/, "")) ? (t.split("&").forEach(function (t) {
            var e = t.replace(/\+/g, " ").split("="), i = e.shift(), o = e.length > 0 ? e.join("=") : void 0;
            o = void 0 === o ? null : decodeURIComponent(o), n(decodeURIComponent(i), o, r)
        }), Object.keys(r).sort().reduce(function (t, e) {
            var n = r[e];
            return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? t[e] = a(n) : t[e] = n, t
        }, Object.create(null))) : r
    }, e.stringify = function (t, e) {
        e = u({encode: !0, strict: !0, arrayFormat: "none"}, e);
        var n = r(e);
        return t ? Object.keys(t).sort().map(function (r) {
            var i = t[r];
            if (void 0 === i) return "";
            if (null === i) return o(r, e);
            if (Array.isArray(i)) {
                var a = [];
                return i.slice().forEach(function (t) {
                    void 0 !== t && a.push(n(r, t, a.length))
                }), a.join("&")
            }
            return o(r, e) + "=" + o(i, e)
        }).filter(function (t) {
            return t.length > 0
        }).join("&") : ""
    }
}, function (t, e) {
    "use strict";
    t.exports = function (t) {
        return encodeURIComponent(t).replace(/[!'()*]/g, function (t) {
            return "%" + t.charCodeAt(0).toString(16).toUpperCase()
        })
    }
}, function (t, e) {
    String.prototype.includes || function () {
        "use strict";
        var t = {}.toString, e = function () {
            try {
                var t = {}, e = Object.defineProperty, n = e(t, t, t) && e
            } catch (t) {
            }
            return n
        }(), n = "".indexOf, r = function (e) {
            if (null == this) throw TypeError();
            var r = String(this);
            if (e && "[object RegExp]" == t.call(e)) throw TypeError();
            var i = r.length, o = String(e), a = o.length, s = arguments.length > 1 ? arguments[1] : void 0,
                u = s ? Number(s) : 0;
            return u != u && (u = 0), !(a + Math.min(Math.max(u, 0), i) > i) && -1 != n.call(r, o, u)
        };
        e ? e(String.prototype, "includes", {value: r, configurable: !0, writable: !0}) : String.prototype.includes = r
    }()
}, function (t, e) {
    function n(t) {
        if (F && T) {
            var e, n = F(t);
            for (e = 0; e < n.length; e += 1) T(t, n[e], {
                value: t[n[e]],
                writable: !1,
                enumerable: !1,
                configurable: !1
            })
        }
    }

    function r(t) {
        if (T) {
            if (t.length > O) throw new RangeError("Array too large for polyfill");
            var e;
            for (e = 0; e < t.length; e += 1) !function (e) {
                T(t, e, {
                    get: function () {
                        return t._getter(e)
                    }, set: function (n) {
                        t._setter(e, n)
                    }, enumerable: !0, configurable: !1
                })
            }(e)
        }
    }

    function i(t, e) {
        var n = 32 - e;
        return t << n >> n
    }

    function o(t, e) {
        var n = 32 - e;
        return t << n >>> n
    }

    function a(t) {
        return [255 & t]
    }

    function s(t) {
        return i(t[0], 8)
    }

    function u(t) {
        return [255 & t]
    }

    function c(t) {
        return o(t[0], 8)
    }

    function f(t) {
        return t = R(Number(t)), [t < 0 ? 0 : t > 255 ? 255 : 255 & t]
    }

    function l(t) {
        return [t >> 8 & 255, 255 & t]
    }

    function h(t) {
        return i(t[0] << 8 | t[1], 16)
    }

    function d(t) {
        return [t >> 8 & 255, 255 & t]
    }

    function p(t) {
        return o(t[0] << 8 | t[1], 16)
    }

    function y(t) {
        return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t]
    }

    function g(t) {
        return i(t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], 32)
    }

    function v(t) {
        return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t]
    }

    function b(t) {
        return o(t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], 32)
    }

    function m(t, e, n) {
        function r(t) {
            var e = M(t), n = t - e;
            return n < .5 ? e : n > .5 ? e + 1 : e % 2 ? e + 1 : e
        }

        var i, o, a, s, u, c, f, l = (1 << e - 1) - 1;
        for (t !== t ? (o = (1 << e) - 1, a = I(2, n - 1), i = 0) : t === 1 / 0 || t === -1 / 0 ? (o = (1 << e) - 1, a = 0, i = t < 0 ? 1 : 0) : 0 === t ? (o = 0, a = 0, i = 1 / t == -1 / 0 ? 1 : 0) : (i = t < 0, t = k(t), t >= I(2, 1 - l) ? (o = C(M(P(t) / j), 1023), a = r(t / I(2, o) * I(2, n)), a / I(2, n) >= 2 && (o += 1, a = 1), o > l ? (o = (1 << e) - 1, a = 0) : (o += l, a -= I(2, n))) : (o = 0, a = r(t / I(2, 1 - l - n)))), u = [], s = n; s; s -= 1) u.push(a % 2 ? 1 : 0), a = M(a / 2);
        for (s = e; s; s -= 1) u.push(o % 2 ? 1 : 0), o = M(o / 2);
        for (u.push(i ? 1 : 0), u.reverse(), c = u.join(""), f = []; c.length;) f.push(parseInt(c.substring(0, 8), 2)), c = c.substring(8);
        return f
    }

    function w(t, e, n) {
        var r, i, o, a, s, u, c, f, l = [];
        for (r = t.length; r; r -= 1) for (o = t[r - 1], i = 8; i; i -= 1) l.push(o % 2 ? 1 : 0), o >>= 1;
        return l.reverse(), a = l.join(""), s = (1 << e - 1) - 1, u = parseInt(a.substring(0, 1), 2) ? -1 : 1, c = parseInt(a.substring(1, 1 + e), 2), f = parseInt(a.substring(1 + e), 2), c === (1 << e) - 1 ? 0 !== f ? NaN : u * (1 / 0) : c > 0 ? u * I(2, c - s) * (1 + f / I(2, n)) : 0 !== f ? u * I(2, -(s - 1)) * (f / I(2, n)) : u < 0 ? -0 : 0
    }

    function _(t) {
        return w(t, 11, 52)
    }

    function x(t) {
        return m(t, 11, 52)
    }

    function S(t) {
        return w(t, 8, 23)
    }

    function E(t) {
        return m(t, 8, 23)
    }

    var T, A = void 0, O = 1e5, D = function () {
        var t = Object.prototype.toString, e = Object.prototype.hasOwnProperty;
        return {
            Class: function (e) {
                return t.call(e).replace(/^\[object *|\]$/g, "")
            }, HasProperty: function (t, e) {
                return e in t
            }, HasOwnProperty: function (t, n) {
                return e.call(t, n)
            }, IsCallable: function (t) {
                return "function" == typeof t
            }, ToInt32: function (t) {
                return t >> 0
            }, ToUint32: function (t) {
                return t >>> 0
            }
        }
    }(), j = Math.LN2, k = Math.abs, M = Math.floor, P = Math.log, C = Math.min, I = Math.pow, R = Math.round;
    T = Object.defineProperty && function () {
        try {
            return Object.defineProperty({}, "x", {}), !0
        } catch (t) {
            return !1
        }
    }() ? Object.defineProperty : function (t, e, n) {
        if (!t === Object(t)) throw new TypeError("Object.defineProperty called on non-object");
        return D.HasProperty(n, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(t, e, n.get), D.HasProperty(n, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(t, e, n.set), D.HasProperty(n, "value") && (t[e] = n.value), t
    };
    var F = Object.getOwnPropertyNames || function (t) {
        if (t !== Object(t)) throw new TypeError("Object.getOwnPropertyNames called on non-object");
        var e, n = [];
        for (e in t) D.HasOwnProperty(t, e) && n.push(e);
        return n
    };
    !function () {
        function t(t, e, a) {
            var s;
            return s = function (t, e, o) {
                var a, u, c, f;
                if (arguments.length && "number" != typeof arguments[0]) if ("object" == typeof arguments[0] && arguments[0].constructor === s) for (a = arguments[0], this.length = a.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new i(this.byteLength), this.byteOffset = 0, c = 0; c < this.length; c += 1) this._setter(c, a._getter(c)); else if ("object" != typeof arguments[0] || arguments[0] instanceof i || "ArrayBuffer" === D.Class(arguments[0])) {
                    if ("object" != typeof arguments[0] || !(arguments[0] instanceof i || "ArrayBuffer" === D.Class(arguments[0]))) throw new TypeError("Unexpected argument type(s)");
                    if (this.buffer = t, this.byteOffset = D.ToUint32(e), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
                    if (this.byteOffset % this.BYTES_PER_ELEMENT) throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
                    if (arguments.length < 3) {
                        if (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT) throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
                        this.length = this.byteLength / this.BYTES_PER_ELEMENT
                    } else this.length = D.ToUint32(o),
                        this.byteLength = this.length * this.BYTES_PER_ELEMENT;
                    if (this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")
                } else for (u = arguments[0], this.length = D.ToUint32(u.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new i(this.byteLength), this.byteOffset = 0, c = 0; c < this.length; c += 1) f = u[c], this._setter(c, Number(f)); else {
                    if (this.length = D.ToInt32(arguments[0]), o < 0) throw new RangeError("ArrayBufferView size is not a small enough positive integer");
                    this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new i(this.byteLength), this.byteOffset = 0
                }
                this.constructor = s, n(this), r(this)
            }, s.prototype = new o, s.prototype.BYTES_PER_ELEMENT = t, s.prototype._pack = e, s.prototype._unpack = a, s.BYTES_PER_ELEMENT = t, s.prototype._getter = function (t) {
                if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
                if ((t = D.ToUint32(t)) >= this.length) return A;
                var e, n, r = [];
                for (e = 0, n = this.byteOffset + t * this.BYTES_PER_ELEMENT; e < this.BYTES_PER_ELEMENT; e += 1, n += 1) r.push(this.buffer._bytes[n]);
                return this._unpack(r)
            }, s.prototype.get = s.prototype._getter, s.prototype._setter = function (t, e) {
                if (arguments.length < 2) throw new SyntaxError("Not enough arguments");
                if ((t = D.ToUint32(t)) >= this.length) return A;
                var n, r, i = this._pack(e);
                for (n = 0, r = this.byteOffset + t * this.BYTES_PER_ELEMENT; n < this.BYTES_PER_ELEMENT; n += 1, r += 1) this.buffer._bytes[r] = i[n]
            }, s.prototype.set = function (t, e) {
                if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
                var n, r, i, o, a, s, u, c, f, l;
                if ("object" == typeof arguments[0] && arguments[0].constructor === this.constructor) {
                    if (n = arguments[0], (i = D.ToUint32(arguments[1])) + n.length > this.length) throw new RangeError("Offset plus length of array is out of range");
                    if (c = this.byteOffset + i * this.BYTES_PER_ELEMENT, f = n.length * this.BYTES_PER_ELEMENT, n.buffer === this.buffer) {
                        for (l = [], a = 0, s = n.byteOffset; a < f; a += 1, s += 1) l[a] = n.buffer._bytes[s];
                        for (a = 0, u = c; a < f; a += 1, u += 1) this.buffer._bytes[u] = l[a]
                    } else for (a = 0, s = n.byteOffset, u = c; a < f; a += 1, s += 1, u += 1) this.buffer._bytes[u] = n.buffer._bytes[s]
                } else {
                    if ("object" != typeof arguments[0] || "undefined" == typeof arguments[0].length) throw new TypeError("Unexpected argument type(s)");
                    if (r = arguments[0], o = D.ToUint32(r.length), (i = D.ToUint32(arguments[1])) + o > this.length) throw new RangeError("Offset plus length of array is out of range");
                    for (a = 0; a < o; a += 1) s = r[a], this._setter(i + a, Number(s))
                }
            }, s.prototype.subarray = function (t, e) {
                function n(t, e, n) {
                    return t < e ? e : t > n ? n : t
                }

                t = D.ToInt32(t), e = D.ToInt32(e), arguments.length < 1 && (t = 0), arguments.length < 2 && (e = this.length), t < 0 && (t = this.length + t), e < 0 && (e = this.length + e), t = n(t, 0, this.length), e = n(e, 0, this.length);
                var r = e - t;
                return r < 0 && (r = 0), new this.constructor(this.buffer, this.byteOffset + t * this.BYTES_PER_ELEMENT, r)
            }, s
        }

        var i = function (t) {
            if ((t = D.ToInt32(t)) < 0) throw new RangeError("ArrayBuffer size is not a small enough positive integer");
            this.byteLength = t, this._bytes = [], this._bytes.length = t;
            var e;
            for (e = 0; e < this.byteLength; e += 1) this._bytes[e] = 0;
            n(this)
        };
        e.ArrayBuffer = e.ArrayBuffer || i;
        var o = function () {
            }, m = t(1, a, s), w = t(1, u, c), T = t(1, f, c), O = t(2, l, h), j = t(2, d, p), k = t(4, y, g),
            M = t(4, v, b), P = t(4, E, S), C = t(8, x, _);
        e.Int8Array = e.Int8Array || m, e.Uint8Array = e.Uint8Array || w, e.Uint8ClampedArray = e.Uint8ClampedArray || T, e.Int16Array = e.Int16Array || O, e.Uint16Array = e.Uint16Array || j, e.Int32Array = e.Int32Array || k, e.Uint32Array = e.Uint32Array || M, e.Float32Array = e.Float32Array || P, e.Float64Array = e.Float64Array || C
    }(), function () {
        function t(t, e) {
            return D.IsCallable(t.get) ? t.get(e) : t[e]
        }

        function r(n) {
            return function (r, i) {
                if ((r = D.ToUint32(r)) + n.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
                r += this.byteOffset;
                var a, s = new e.Uint8Array(this.buffer, r, n.BYTES_PER_ELEMENT), u = [];
                for (a = 0; a < n.BYTES_PER_ELEMENT; a += 1) u.push(t(s, a));
                return Boolean(i) === Boolean(o) && u.reverse(), t(new n(new e.Uint8Array(u).buffer), 0)
            }
        }

        function i(n) {
            return function (r, i, a) {
                if ((r = D.ToUint32(r)) + n.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
                var s, u, c = new n([i]), f = new e.Uint8Array(c.buffer), l = [];
                for (s = 0; s < n.BYTES_PER_ELEMENT; s += 1) l.push(t(f, s));
                Boolean(a) === Boolean(o) && l.reverse(), u = new e.Uint8Array(this.buffer, r, n.BYTES_PER_ELEMENT), u.set(l)
            }
        }

        var o = function () {
            var n = new e.Uint16Array([4660]);
            return 18 === t(new e.Uint8Array(n.buffer), 0)
        }(), a = function (t, r, i) {
            if (0 === arguments.length) t = new e.ArrayBuffer(0); else if (!(t instanceof e.ArrayBuffer || "ArrayBuffer" === D.Class(t))) throw new TypeError("TypeError");
            if (this.buffer = t || new e.ArrayBuffer(0), this.byteOffset = D.ToUint32(r), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
            if (arguments.length < 3 ? this.byteLength = this.buffer.byteLength - this.byteOffset : this.byteLength = D.ToUint32(i), this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
            n(this)
        };
        a.prototype.getUint8 = r(e.Uint8Array), a.prototype.getInt8 = r(e.Int8Array), a.prototype.getUint16 = r(e.Uint16Array), a.prototype.getInt16 = r(e.Int16Array), a.prototype.getUint32 = r(e.Uint32Array), a.prototype.getInt32 = r(e.Int32Array), a.prototype.getFloat32 = r(e.Float32Array), a.prototype.getFloat64 = r(e.Float64Array), a.prototype.setUint8 = i(e.Uint8Array), a.prototype.setInt8 = i(e.Int8Array), a.prototype.setUint16 = i(e.Uint16Array), a.prototype.setInt16 = i(e.Int16Array), a.prototype.setUint32 = i(e.Uint32Array), a.prototype.setInt32 = i(e.Int32Array), a.prototype.setFloat32 = i(e.Float32Array), a.prototype.setFloat64 = i(e.Float64Array), e.DataView = e.DataView || a
    }()
}, function (t, e) {
    var n = window.URL || window.webkitURL;
    t.exports = function (t, e) {
        try {
            try {
                var r;
                try {
                    var i = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                    r = new i, r.append(t), r = r.getBlob()
                } catch (e) {
                    r = new Blob([t])
                }
                return new Worker(n.createObjectURL(r))
            } catch (e) {
                return new Worker("data:application/javascript," + encodeURIComponent(t))
            }
        } catch (t) {
            return new Worker(e)
        }
    }
}, function (t, e, n) {
    t.exports = function () {
        return n(148)('!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e,r,n){for(var i,s,o=n,c=!1,u=32-e;!c;)s=a.SHA1(t+o),i=s.words[0],i>>u===0?c=!0:o+=r;return t+o+":"+s}var s=r(1),o=n(s),a=a||function(t,e){var r={},n=r.lib={},i=n.Base=function(){function t(){}return{extend:function(e){t.prototype=this;var r=new t;return e&&r.mixIn(e),r.$super=this,r},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.$super.extend(this)}}}(),s=n.WordArray=i.extend({init:function(t,r){t=this.words=t||[],this.sigBytes=r!=e?r:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,t=t.sigBytes;if(this.clamp(),n%4)for(var i=0;i<t;i++)e[n+i>>>2]|=(r[i>>>2]>>>24-8*(i%4)&255)<<24-8*((n+i)%4);else if(65535<r.length)for(i=0;i<t;i+=4)e[n+i>>>2]=r[i>>>2];else e.push.apply(e,r);return this.sigBytes+=t,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-8*(r%4),e.length=t.ceil(r/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],n=0;n<e;n+=4)r.push(4294967296*t.random()|0);return s.create(r,e)}}),o=r.enc={},a=o.Hex={stringify:function(t){for(var e=t.words,t=t.sigBytes,r=[],n=0;n<t;n++){var i=e[n>>>2]>>>24-8*(n%4)&255;r.push((i>>>4).toString(16)),r.push((15&i).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-4*(n%8);return s.create(r,e/2)}},c=o.Latin1={stringify:function(t){for(var e=t.words,t=t.sigBytes,r=[],n=0;n<t;n++)r.push(String.fromCharCode(e[n>>>2]>>>24-8*(n%4)&255));return r.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-8*(n%4);return s.create(r,e)}},u=o.Utf8={stringify:function(t){try{return decodeURIComponent(escape(c.stringify(t)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(t){return c.parse(unescape(encodeURIComponent(t)))}},f=n.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=s.create(),this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=u.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,n=r.words,i=r.sigBytes,o=this.blockSize,a=i/(4*o),a=e?t.ceil(a):t.max((0|a)-this._minBufferSize,0),e=a*o,i=t.min(4*e,i);if(e){for(var c=0;c<e;c+=o)this._doProcessBlock(n,c);c=n.splice(0,e),r.sigBytes-=i}return s.create(c,i)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});n.Hasher=f.extend({init:function(){this.reset()},reset:function(){f.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize(),this._hash},clone:function(){var t=f.clone.call(this);return t._hash=this._hash.clone(),t},blockSize:16,_createHelper:function(t){return function(e,r){return t.create(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return h.HMAC.create(t,r).finalize(e)}}});var h=r.algo={};return r}(Math);!function(){var t=a,e=t.lib,r=e.WordArray,e=e.Hasher,n=[],i=t.algo.SHA1=e.extend({_doReset:function(){this._hash=r.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],s=r[1],o=r[2],a=r[3],c=r[4],u=0;80>u;u++){if(16>u)n[u]=0|t[e+u];else{var f=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=f<<1|f>>>31}f=(i<<5|i>>>27)+c+n[u],f=20>u?f+((s&o|~s&a)+1518500249):40>u?f+((s^o^a)+1859775393):60>u?f+((s&o|s&a|o&a)-1894007588):f+((s^o^a)-899497514),c=a,a=o,o=s<<30|s>>>2,s=i,i=f}r[0]=r[0]+i|0,r[1]=r[1]+s|0,r[2]=r[2]+o|0,r[3]=r[3]+a|0,r[4]=r[4]+c|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,n=8*t.sigBytes;e[n>>>5]|=128<<24-n%32,e[(n+64>>>9<<4)+15]=r,t.sigBytes=4*e.length,this._process()}});t.SHA1=e._createHelper(i),t.HmacSHA1=e._createHmacHelper(i)}(),self.onmessage=function(t){var e=JSON.parse(t.data),r=e.reqid,n=e.base,s=e.cost,a=e.multiple,c=e.start;self.postMessage((0,o.default)({reqid:r,hashcash:i(n,s,a,c)}))}},function(t,e,r){t.exports={default:r(2),__esModule:!0}},function(t,e,r){var n=r(3),i=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},function(t,e){var r=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=r)}]);', n.p + "ed9d228fb4ae25d3b950.worker.js")
    }
}]);