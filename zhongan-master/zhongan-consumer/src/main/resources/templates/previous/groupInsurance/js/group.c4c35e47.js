(window.webpackJsonp = window.webpackJsonp || []).push([[12], {
    112: function (t, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return r
        });
        e(1), e(4), e(3);
        var r = "GET_F_PLAN"
    }, 155: function (t, n, e) {
        t.exports = e(250)
    }, 18: function (t, n, e) {
        "use strict";
        e.r(n), e.d(n, "REQUEST", function () {
            return f
        }), e.d(n, "ADD_CUSTOM_PLAN_INFO", function () {
            return p
        }), e.d(n, "addCustomPlanInfo", function () {
            return h
        }), e.d(n, "GET_T_PLAN_MODULE", function () {
            return l
        }), e.d(n, "getTPlanModule", function () {
            return v
        }), e.d(n, "CAL_CUSTOM_PLAN_INFO", function () {
            return E
        }), e.d(n, "calCustomPlanInfo", function () {
            return _
        }), e.d(n, "SAVE_PLAN_ENTRY_LIST", function () {
            return g
        }), e.d(n, "savePlanEntryList", function () {
            return m
        }), e.d(n, "CLEAR_PLAN_ENTRY_LIST", function () {
            return y
        }), e.d(n, "clearPlanEntryList", function () {
            return I
        }), e.d(n, "SAVE_PLAN_CMD", function () {
            return O
        }), e.d(n, "savePlanCmd", function () {
            return T
        }), e.d(n, "GET_PLAN_INFO", function () {
            return N
        }), e.d(n, "getPlanInfo", function () {
            return A
        }), e.d(n, "GET_INSURED_DATE", function () {
            return w
        }), e.d(n, "getInsuredDate", function () {
            return b
        }), e.d(n, "UPDATE_EFFECTIVE_DATE", function () {
            return L
        }), e.d(n, "updateEffectiveDate", function () {
            return R
        }), e.d(n, "ADD_CPY_CONTACT_INFO", function () {
            return C
        }), e.d(n, "addCpyContactInfo", function () {
            return S
        }), e.d(n, "QUERY_CPY_CONTACT_INFO", function () {
            return P
        }), e.d(n, "queryCpyContactInfo", function () {
            return D
        }), e.d(n, "QUERY_REAL_CONTACT_INFO", function () {
            return x
        }), e.d(n, "queryRealContactInfo", function () {
            return F
        }), e.d(n, "CREATE_ORDER", function () {
            return k
        }), e.d(n, "createOrder", function () {
            return U
        }), e.d(n, "SAVE_TEMP_ORDER", function () {
            return M
        }), e.d(n, "saveTempOrder", function () {
            return G
        }), e.d(n, "CHECK_ORDER_PREMIUM", function () {
            return z
        }), e.d(n, "checkOrderPremium", function () {
            return Y
        }), e.d(n, "BATCH_ADD_INSURED_STAFF", function () {
            return H
        }), e.d(n, "batchAddInsuredStaff", function () {
            return V
        }), e.d(n, "ADD_INSURED_STAFF", function () {
            return Q
        }), e.d(n, "addInsuredStaff", function () {
            return j
        }), e.d(n, "UPDATE_INSURED_STAFF", function () {
            return W
        }), e.d(n, "updateInsuredStaff", function () {
            return q
        }), e.d(n, "DELETE_INSURED_STAFF", function () {
            return B
        }), e.d(n, "deleteInsuredStaff", function () {
            return K
        }), e.d(n, "DELETE_ALL_INSURED_STAFF", function () {
            return Z
        }), e.d(n, "deleteAllInsuredStaff", function () {
            return $
        }), e.d(n, "UPLOAD_COUNT_INSURED", function () {
            return J
        }), e.d(n, "uploadCountInsured", function () {
            return X
        }), e.d(n, "SAVE_INSURED_INFO", function () {
            return tt
        }), e.d(n, "saveInsuredInfo", function () {
            return nt
        }), e.d(n, "CLEAR_INSURED_INFO", function () {
            return et
        }), e.d(n, "clearInsuredInfo", function () {
            return rt
        }), e.d(n, "FIND_INSURED_STAFF", function () {
            return at
        }), e.d(n, "findInsuredStaff", function () {
            return ot
        }), e.d(n, "UPLOAD_FILE", function () {
            return ut
        }), e.d(n, "uploadFile", function () {
            return ct
        }), e.d(n, "SAVE_EMPLOYEE_INFO", function () {
            return it
        }), e.d(n, "saveEmployeeInfo", function () {
            return st
        }), e.d(n, "CLEAR_EMPLOYEE_INFO", function () {
            return ft
        }), e.d(n, "clearEmployeeInfo", function () {
            return dt
        });
        var r = e(148), a = e.n(r), o = e(1), u = e.n(o), c = e(4), i = e.n(c), s = e(3), f = "REQUEST";

        function d(t) {
            return {type: f, data: t}
        }

        var p = "ADD_CUSTOM_PLAN_INFO";

        function h(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f, h;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return c = function () {
                                    return s.a.post({path: o, server: "online", data: t.data}).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d()), o = "/api/dragon/website/plan/addCustomPlanInfo?ticket=" + t.ticket, t.channelCode && (o += "&channelCode=" + t.channelCode), e.next = 6, c();
                            case 6:
                                i = e.sent, f = i.code, h = i.result, 0 === +f && "function" === typeof n && n(), a({
                                    type: p,
                                    data: h
                                });
                            case 11:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var l = "GET_T_PLAN_MODULE";

        function v(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = function () {
                                    return s.a.get({
                                        server: "online",
                                        path: "/api/dragon/website/plan/getTPlanModule",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d()), e.next = 4, o();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                if (c = e.t0, i = c.code, f = c.result, a({type: l, data: f}), 0 !== +i) {
                                    e.next = 14;
                                    break
                                }
                                return "function" === typeof n && n(f), e.abrupt("return", f || {});
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var E = "CAL_CUSTOM_PLAN_INFO";

        function _(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = function () {
                                    return s.a.post({
                                        server: "online",
                                        path: "/api/dragon/website/plan/calCustomPlanInfo",
                                        data: t,
                                        isLoading: !0
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d()), e.next = 4, o();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                c = e.t0, i = c.code, f = c.result, 0 === +i && "function" === typeof n && n(), a({
                                    type: E,
                                    data: f
                                });
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var g = "SAVE_PLAN_ENTRY_LIST";

        function m(t) {
            return {type: g, data: t}
        }

        var y = "CLEAR_PLAN_ENTRY_LIST";

        function I() {
            return {type: y}
        }

        var O = "SAVE_PLAN_CMD";

        function T(t) {
            return {type: O, data: t}
        }

        var N = "GET_PLAN_INFO";

        function A(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = function () {
                                    return s.a.get({
                                        server: "online",
                                        path: "/api/dragon/website/plan/getPlanInfo",
                                        data: t,
                                        headers: {"Cache-Control": "no-cache", pragma: "no-cache"}
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d()), e.next = 4, o();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                c = e.t0, i = c.code, f = c.result, 0 === +i && "function" === typeof n && n(), a({
                                    type: N,
                                    data: f
                                });
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var w = "GET_INSURED_DATE";

        function b(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = function () {
                                    return s.a.get({
                                        server: "online",
                                        path: "/api/dragon/website/insure/getInsuredDate",
                                        data: t,
                                        headers: {"Cache-Control": "no-cache", pragma: "no-cache"}
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d()), e.next = 4, o();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return c = e.t0, i = c.code, f = c.result, 0 === +i && "function" === typeof n && n(), a({
                                    type: w,
                                    data: f
                                }), e.abrupt("return", f);
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var L = "UPDATE_EFFECTIVE_DATE";

        function R(t, n) {
            var e = this, r = t.effectiveDate, a = t.ticket;
            return function () {
                var t = i()(u.a.mark(function t(o) {
                    var c, i, f, p;
                    return u.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return c = function () {
                                    return s.a.fetch({
                                        server: "online",
                                        method: "PUT",
                                        path: "/api/dragon/website/insure/updateEffectiveDate?ticket=" + a,
                                        data: {effectiveDate: r}
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(d()), t.next = 4, c();
                            case 4:
                                if (t.t0 = t.sent, t.t0) {
                                    t.next = 7;
                                    break
                                }
                                t.t0 = {};
                            case 7:
                                return i = t.t0, f = i.code, p = i.result, 0 === +f && "function" === typeof n && n(), o({
                                    type: L,
                                    data: p
                                }), t.abrupt("return", {code: f, result: p});
                            case 13:
                            case"end":
                                return t.stop()
                        }
                    }, t, e)
                }));
                return function (n) {
                    return t.apply(this, arguments)
                }
            }()
        }

        var C = "ADD_CPY_CONTACT_INFO";

        function S(t, n) {
            var e = this, r = t.ticket, o = a()(t, ["ticket"]);
            return function () {
                var t = i()(u.a.mark(function t(a) {
                    var c, i, f, p;
                    return u.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return c = function () {
                                    return s.a.post({
                                        server: "online",
                                        path: "/api/dragon/website/contactInfo/addCpyContactInfo?ticket=" + r,
                                        data: o
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d()), t.next = 4, c();
                            case 4:
                                if (t.t0 = t.sent, t.t0) {
                                    t.next = 7;
                                    break
                                }
                                t.t0 = {};
                            case 7:
                                i = t.t0, f = i.code, p = i.result, 0 === +f && "function" === typeof n && n(), a({
                                    type: C,
                                    data: p
                                });
                            case 12:
                            case"end":
                                return t.stop()
                        }
                    }, t, e)
                }));
                return function (n) {
                    return t.apply(this, arguments)
                }
            }()
        }

        var P = "QUERY_CPY_CONTACT_INFO";

        function D(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = function () {
                                    return s.a.get({
                                        server: "online",
                                        path: "/api/dragon/website/contactInfo/queryCpyContactInfo",
                                        data: t,
                                        headers: {"Cache-Control": "no-cache", pragma: "no-cache"}
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d()), e.next = 4, o();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return c = e.t0, i = c.code, f = c.result, 0 === +i && "function" === typeof n && n(), a({
                                    type: P,
                                    data: f
                                }), e.abrupt("return", f);
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var x = "QUERY_REAL_CONTACT_INFO";

        function F(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = function () {
                                    return s.a.get({
                                        server: "online",
                                        path: "/api/dragon/website/contactInfo/queryRealContactInfo",
                                        data: t,
                                        headers: {"Cache-Control": "no-cache", pragma: "no-cache"}
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d()), e.next = 4, o();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return c = e.t0, i = c.code, f = c.result, 0 === +i && "function" === typeof n && n(), a({
                                    type: x,
                                    data: f
                                }), e.abrupt("return", {result: f, code: i});
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var k = "CREATE_ORDER";

        function U(t, n) {
            var e = this, r = t.ticket, a = t.groupSyt;
            return function () {
                var t = i()(u.a.mark(function t(o) {
                    var c, i, f, p, h;
                    return u.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return c = function () {
                                    return s.a.post({
                                        server: "online",
                                        path: "/api/dragon/website/order/createOrder?ticket=" + r + "&groupSyt=" + a,
                                        isLoading: !0
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(d()), t.next = 4, c();
                            case 4:
                                if (t.t0 = t.sent, t.t0) {
                                    t.next = 7;
                                    break
                                }
                                t.t0 = {};
                            case 7:
                                return i = t.t0, f = i.code, p = i.result, h = i.message, 0 === +f && "function" === typeof n && n(), o({
                                    type: k,
                                    data: p
                                }), t.abrupt("return", {code: f, result: p, message: h});
                            case 14:
                            case"end":
                                return t.stop()
                        }
                    }, t, e)
                }));
                return function (n) {
                    return t.apply(this, arguments)
                }
            }()
        }

        var M = "SAVE_TEMP_ORDER";

        function G(t, n) {
            var e = this, r = t.ticket;
            return function () {
                var t = i()(u.a.mark(function t(a) {
                    var o, c, i, f, p;
                    return u.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return o = function () {
                                    return s.a.post({
                                        server: "online",
                                        path: "/api/dragon/website/order/saveTempOrder?ticket=" + r,
                                        isLoading: !0
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d()), t.next = 4, o();
                            case 4:
                                if (t.t0 = t.sent, t.t0) {
                                    t.next = 7;
                                    break
                                }
                                t.t0 = {};
                            case 7:
                                return c = t.t0, i = c.code, f = c.result, p = c.message, 0 === +i && "function" === typeof n && n(), a({
                                    type: M,
                                    data: f
                                }), t.abrupt("return", {code: i, result: f, message: p});
                            case 14:
                            case"end":
                                return t.stop()
                        }
                    }, t, e)
                }));
                return function (n) {
                    return t.apply(this, arguments)
                }
            }()
        }

        var z = "CHECK_ORDER_PREMIUM";

        function Y(t) {
            var n = this;
            return function () {
                var e = i()(u.a.mark(function e(r) {
                    var a, o, c, i, f;
                    return u.a.wrap(function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return a = function () {
                                    return s.a.get({
                                        server: "online",
                                        path: "/api/dragon/website/plan/checkOrderPremium",
                                        isLoading: !0
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, r(d()), n.next = 4, a();
                            case 4:
                                if (n.t0 = n.sent, n.t0) {
                                    n.next = 7;
                                    break
                                }
                                n.t0 = {};
                            case 7:
                                return o = n.t0, c = o.code, i = o.result, f = o.message, 0 === +c && "function" === typeof t && t(), r({
                                    type: z,
                                    data: i
                                }), n.abrupt("return", {code: c, result: i, message: f});
                            case 14:
                            case"end":
                                return n.stop()
                        }
                    }, e, n)
                }));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()
        }

        var H = "BATCH_ADD_INSURED_STAFF";

        function V(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f, p;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = function () {
                                    return s.a.form({
                                        server: "online",
                                        path: "/api/dragon/website/insure/batchAddInsuredStaff",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d()), e.next = 4, o();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return c = e.t0, i = c.code, f = c.result, p = c.message, 0 === +i && "function" === typeof n && n(), a({
                                    type: H,
                                    data: f
                                }), e.abrupt("return", {code: i, result: f, message: p});
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var Q = "ADD_INSURED_STAFF";

        function j(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = function () {
                                    return s.a.post({
                                        server: "online",
                                        path: "/api/dragon/website/insure/addInsuredStaff?ticket=" + t.ticket,
                                        data: t.person
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d(t)), e.next = 4, o();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                c = e.t0, i = c.code, f = c.result, 0 === +i && "function" === typeof n && n(), a({
                                    type: Q,
                                    data: f
                                });
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var W = "UPDATE_INSURED_STAFF";

        function q(t, n) {
            var e = this, r = t.ticket, a = t.person;
            return function () {
                var t = i()(u.a.mark(function t(o) {
                    var c, i, f, p;
                    return u.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return c = function () {
                                    return s.a.post({
                                        server: "online",
                                        path: "/api/dragon/website/insure/updateInsuredStaff?ticket=" + r,
                                        data: a
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(d()), t.next = 4, c();
                            case 4:
                                if (t.t0 = t.sent, t.t0) {
                                    t.next = 7;
                                    break
                                }
                                t.t0 = {};
                            case 7:
                                i = t.t0, f = i.code, p = i.result, 0 === +f && "function" === typeof n && n(), o({
                                    type: W,
                                    data: p
                                });
                            case 12:
                            case"end":
                                return t.stop()
                        }
                    }, t, e)
                }));
                return function (n) {
                    return t.apply(this, arguments)
                }
            }()
        }

        var B = "DELETE_INSURED_STAFF";

        function K(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = function () {
                                    return s.a.fetch({
                                        server: "online",
                                        method: "DELETE",
                                        path: "/api/dragon/website/insure/deleteInsuredStaff",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d(t)), e.next = 4, o();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                c = e.t0, i = c.code, f = c.result, 0 === +i && "function" === typeof n && n(), a({
                                    type: B,
                                    data: f
                                });
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var Z = "DELETE_ALL_INSURED_STAFF";

        function $(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = function () {
                                    return a(d(t)), s.a.fetch({
                                        server: "online",
                                        method: "DELETE",
                                        path: "/api/dragon/website/insure/deleteAllInsuredStaff",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, e.next = 3, o();
                            case 3:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 6;
                                    break
                                }
                                e.t0 = {};
                            case 6:
                                c = e.t0, i = c.code, f = c.result, 0 === +i && "function" === typeof n && n(), a({
                                    type: Z,
                                    data: f
                                });
                            case 11:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var J = "UPLOAD_COUNT_INSURED";

        function X(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f, p;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = function () {
                                    return s.a.get({
                                        server: "online",
                                        path: "/api/dragon/website/insure/uploadCountInsured",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d()), e.next = 4, o();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return c = e.t0, i = c.code, f = c.result, p = c.message, 0 === +i && "function" === typeof n && n(), a({
                                    type: J,
                                    data: f
                                }), e.abrupt("return", {code: i, result: f, message: p});
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var tt = "SAVE_INSURED_INFO";

        function nt(t) {
            return {type: tt, data: t}
        }

        var et = "CLEAR_INSURED_INFO";

        function rt() {
            return {type: et}
        }

        var at = "FIND_INSURED_STAFF";

        function ot(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = function () {
                                    return s.a.get({
                                        server: "online",
                                        path: "/api/dragon/website/insure/findInsuredStaff",
                                        data: t,
                                        headers: {"Cache-Control": "no-cache", pragma: "no-cache"},
                                        isLoading: !0
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d()), e.next = 4, o();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                c = e.t0, i = c.code, f = c.result, 0 === +i && "function" === typeof n && n(), a({
                                    type: at,
                                    data: f
                                });
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var ut = "UPLOAD_FILE";

        function ct(t, n) {
            var e = this;
            return function () {
                var r = i()(u.a.mark(function r(a) {
                    var o, c, i, f, p;
                    return u.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return o = function () {
                                    return s.a.form({
                                        server: "online",
                                        path: "/api/peony/ocr/upload/company/businessLicense",
                                        data: t,
                                        isLoading: !0
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, a(d()), e.next = 4, o();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return c = e.t0, i = c.code, f = c.result, p = c.message, 0 === +i && "function" === typeof n && n(), a({
                                    type: ut,
                                    data: f
                                }), e.abrupt("return", {code: i, result: f, message: p});
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var it = "SAVE_EMPLOYEE_INFO";

        function st(t) {
            return {type: it, data: t}
        }

        var ft = "CLEAR_EMPLOYEE_INFO";

        function dt() {
            return {type: ft}
        }
    }, 19: function (t, n, e) {
        "use strict";
        n.a = {
            on: function (t, n, e) {
                t.addEventListener ? t.addEventListener(n, e) : t.attachEvent("on" + n, function () {
                    e.call(t)
                })
            }, off: function (t, n, e) {
                t.removeEventListener ? t.removeEventListener(n, e) : t.detachEvent("off" + n, e)
            }, once: function (t, n, e) {
                for (var r = n.split(" "), a = function t(n) {
                    return n.target.removeEventListener(n.type, t), e(n)
                }, o = r.length - 1; o >= 0; o -= 1) this.on(t, r[o], a)
            }
        }
    }, 20: function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            var e = document.createElement("script"), r = document.getElementsByTagName("head")[0], a = void 0;
            e.src = t, "function" === typeof n && (e.onload = e.onreadystatechange = function () {
                a || e.readyState && !/loaded|complete/.test(e.readyState) || (e.onload = e.onreadystatechange = null, a = !0, n())
            }), r.appendChild(e)
        }
    }, 23: function (t, n, e) {
        "use strict";
        var r = e(14), a = e.n(r), o = e(29), u = e(31), c = e.n(u), i = e(32), s = e.n(i), f = e(33), d = e.n(f),
            p = e(34), h = e.n(p), l = {dev: a()({}, c.a), test: a()({}, s.a), pre: a()({}, d.a), prd: a()({}, h.a)},
            v = ["dev", "test", "pre", "prd"], E = v[3];
        var _ = l[E = v[o.a.get("_e")] || E];
        n.a = _
    }, 250: function (t, n, e) {
        "use strict";
        e.r(n);
        var r = e(23);
        e.p = r.a.publicPath + "/";
        var a = e(0), o = e.n(a), u = e(12), c = e(113), i = e(72), s = e(59), f = e(11), d = e.n(f), p = e(13),
            h = e(146), l = e(147), v = e.n(l), E = {visible: !1}, _ = {
                loading: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E;
                    switch (arguments[1].type) {
                        case"SHOW_LOADING":
                            return {visible: !0};
                        case"HIDE_LOADING":
                            return {visible: !1};
                        default:
                            return t
                    }
                }
            }, g = {visible: !1, message: ""}, m = {
                toast: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g, n = arguments[1];
                    switch (n.type) {
                        case"SHOW_TOAST":
                            return {visible: !0, message: n.message};
                        case"HIDE_TOAST":
                            return {visible: !1, message: ""};
                        default:
                            return t
                    }
                }
            }, y = e(46);
        var I = Object(p.c)({
            faq: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case y.GET_FAQ:
                        var a = {};
                        return function (t, n) {
                            t.forEach(function (t) {
                                n[t.channelEnName] || (n[t.channelEnName] = []), n[t.channelEnName].push(t)
                            })
                        }(r, a), a || t;
                    default:
                        return t
                }
            }, rawFaq: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case y.GET_FAQ:
                        return r || t;
                    default:
                        return t
                }
            }, loginInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case y.CHECK_LOGIN:
                        return r || t;
                    default:
                        return t
                }
            }, menuInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case y.GET_MENU_INFO:
                        return d()({}, r, {isFirst: !1});
                    default:
                        return t
                }
            }, domain: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case y.GET_DOMAIN:
                        return {data: r};
                    default:
                        return t
                }
            }, ticket: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case y.GENERATOR_TICKET:
                        return {data: r};
                    default:
                        return t
                }
            }, apiTrace: function (t, n) {
                return {type: n.type, data: n.data}
            }
        }), O = e(134), T = e.n(O), N = e(18);
        var A = Object(p.c)({
            TPlanAll: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case N.GET_T_PLAN_MODULE:
                        return d()({}, r);
                    default:
                        return t
                }
            }, planInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case N.GET_PLAN_INFO:
                        return d()({}, r);
                    default:
                        return t
                }
            }, premiumInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case N.CAL_CUSTOM_PLAN_INFO:
                        return r || t;
                    default:
                        return t
                }
            }, tempPlan: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {liabCodeList: new T.a},
                    n = arguments[1], e = n.type, r = n.data;
                switch (e) {
                    case N.SAVE_PLAN_ENTRY_LIST:
                        return d()({}, t, r);
                    case N.CLEAR_PLAN_ENTRY_LIST:
                        return {};
                    default:
                        return t
                }
            }, tempPlanCmd: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case N.SAVE_PLAN_CMD:
                        return d()({}, r);
                    default:
                        return t
                }
            }, insuredDate: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case N.GET_INSURED_DATE:
                        return d()({}, r);
                    default:
                        return t
                }
            }, effectiveDateInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case N.UPDATE_EFFECTIVE_DATE:
                        return r || t;
                    default:
                        return t
                }
            }, tempInsuredInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case N.SAVE_INSURED_INFO:
                        return d()({}, t, r);
                    default:
                        return t
                }
            }, cpyContactInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case N.QUERY_CPY_CONTACT_INFO:
                        return d()({}, r);
                    default:
                        return t
                }
            }, realContactInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                    e = n.type, r = n.data, a = void 0 === r ? {} : r;
                switch (e) {
                    case N.QUERY_REAL_CONTACT_INFO:
                        return d()({}, a, {isVerified: a && !!a.companyName});
                    default:
                        return t
                }
            }, insuredStaff: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    personCount: [],
                    page: {resultList: []}
                }, n = arguments[1], e = n.type, r = n.data;
                switch (e) {
                    case N.FIND_INSURED_STAFF:
                        return d()({}, r);
                    default:
                        return t
                }
            }, tempEmployeeInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case N.SAVE_EMPLOYEE_INFO:
                        return d()({}, t, r);
                    case N.CLEAR_EMPLOYEE_INFO:
                        return {};
                    default:
                        return t
                }
            }
        }), w = e(112);
        var b = Object(p.c)({
            FPlan: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case w.a:
                        return d()({}, r);
                    default:
                        return t
                }
            }
        }), L = e(57);
        var R = Object(p.c)({
            orderInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case L.GET_ORDER_INFO:
                    case L.GET_ENTERPRISE_ORDER_INFO:
                        return d()({}, r);
                    default:
                        return t
                }
            }, tempPaymentInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case L.SAVE_PAYMENT_INFO:
                        return d()({}, t, r);
                    case L.CLEAR_PAYMENT_INFO:
                        return {};
                    default:
                        return t
                }
            }
        }), C = e(84);
        var S = Object(p.c)({
            tempConsultInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case C.SAVE_CONSULT_INFO:
                        return d()({}, t, r);
                    case C.CLEAR_CONSULT_INFO:
                        return {};
                    default:
                        return t
                }
            }
        }), P = e(58);
        var D = Object(p.c)({
            bannersInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case P.GET_BANNERS:
                        return r || t;
                    default:
                        return t
                }
            }, TPlanInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case P.GET_T_PLAN:
                        return d()({}, r);
                    default:
                        return t
                }
            }, FPlanInfo: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case P.GET_F_PLAN:
                        return r || t;
                    default:
                        return t
                }
            }, questionMenu: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case P.GET_QUESTION_MENU:
                        return r || t;
                    default:
                        return t
                }
            }
        }), x = e(47);
        var F = Object(p.c)({
            provinces: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case x.d:
                        return r || t;
                    default:
                        return t
                }
            }, cities: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case x.a:
                        return r || t;
                    default:
                        return t
                }
            }, districts: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case x.b:
                        return r || t;
                    default:
                        return t
                }
            }, cachePCD: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {cities: {}, districts: {}},
                    n = arguments[1], e = n.type, r = n.data, a = n.code;
                switch (e) {
                    case x.b:
                        var o = t.districts;
                        return o[a] || (o[a] = r), d()({}, t, {districts: o});
                    case x.a:
                        var u = t.cities;
                        return u[a] || (u[a] = r), d()({}, t, {cities: u});
                    default:
                        return t
                }
            }, jobClass: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments[1],
                    e = n.type, r = n.data;
                switch (e) {
                    case x.c:
                        return r || t;
                    default:
                        return t
                }
            }
        }), k = d()({}, _, m, {
            home: D,
            system: I,
            groupInsurancePackage: b,
            groupInsurance: A,
            paymentMethod: R,
            consult: S,
            utils: F
        });

        function U(t) {
            return function (n, e) {
                t(n).then(function (t) {
                    t.__esModule ? e(null, t.default) : e(null, t)
                }).catch(function (t) {
                    e(t)
                })
            }
        }

        var M = e(70), G = {
            path: "/", getComponent: U(function () {
                return Promise.resolve().then(e.bind(null, 35))
            }), childRoutes: [{
                path: "group", getComponent: U(function () {
                    return e.e(21).then(e.bind(null, 469))
                }), indexRoute: {
                    getComponent: U(function () {
                        return Promise.all([e.e(2), e.e(18)]).then(e.bind(null, 467))
                    })
                }, childRoutes: [{
                    path: "consult", getComponent: U(function () {
                        return Promise.all([e.e(1), e.e(3), e.e(4), e.e(5), e.e(6), e.e(28)]).then(e.bind(null, 473))
                    })
                }, {
                    path: "paymentMethod", getComponent: U(function () {
                        return Promise.all([e.e(1), e.e(6), e.e(23)]).then(e.bind(null, 468))
                    })
                }, {
                    path: "serviceCenter", indexRoute: {
                        getComponent: U(function () {
                            return Promise.all([e.e(7), e.e(25)]).then(e.bind(null, 471))
                        })
                    }, childRoutes: [{
                        path: "questions", getComponent: U(function () {
                            return Promise.all([e.e(7), e.e(22)]).then(e.bind(null, 470))
                        })
                    }, {
                        path: "library", getComponent: U(function () {
                            return e.e(19).then(e.bind(null, 475))
                        })
                    }]
                }, {
                    path: "news/:type", indexRoute: {
                        getComponent: U(function () {
                            return Promise.all([e.e(1), e.e(2), e.e(3), e.e(4), e.e(8), e.e(26)]).then(e.bind(null, 480))
                        })
                    }, childRoutes: [{
                        path: ":id", getComponent: U(function () {
                            return Promise.all([e.e(2), e.e(27)]).then(e.bind(null, 476))
                        })
                    }]
                }, {
                    path: "activities/30DaysFreeInsurance", getComponent: U(function () {
                        return e.e(29).then(e.bind(null, 481))
                    })
                }, {
                    path: "guide", getComponent: U(function () {
                        return e.e(24).then(e.bind(null, 472))
                    })
                }, {
                    path: "activities/2018LabourDayActivity", getComponent: U(function () {
                        return Promise.all([e.e(1), e.e(3), e.e(5), e.e(8), e.e(20)]).then(e.bind(null, 474))
                    })
                }, {
                    path: "activities/2019NewYear", getComponent: U(function () {
                        return e.e(30).then(e.bind(null, 479))
                    })
                }, {
                    path: "notice", getComponent: U(function () {
                        return e.e(32).then(e.bind(null, 478))
                    })
                }, {
                    path: "incompatible", getComponent: U(function () {
                        return e.e(31).then(e.bind(null, 477))
                    })
                }]
            }, {path: "*", component: M.a}]
        }, z = void 0;
        window.__data && (z = window.__data);
        var Y = function (t, n) {
            var e = [Object(s.routerMiddleware)(t), h.a, v.a], r = p.d;
            var a = Object(p.c)(d()({}, k, {routing: s.routerReducer}));
            return Object(p.e)(a, n, r(p.a.apply(void 0, e)))
        }(i.c, z), H = Object(s.syncHistoryWithStore)(i.c, Y), V = document.getElementById("app");
        Object(u.render)(o.a.createElement(c.a, {store: Y}, o.a.createElement(i.b, {
            onUpdate: function () {
                return window.scrollTo(0, 0)
            }, routes: G, history: H
        })), V)
    }, 26: function (t, n, e) {
        "use strict";
        e(52);
        var r = e(41), a = e.n(r), o = e(5), u = e.n(o), c = e(6), i = e.n(c), s = e(7), f = e.n(s), d = e(8),
            p = e.n(d), h = e(9), l = e.n(h), v = e(0), E = e.n(v), _ = e(12), g = e.n(_), m = e(25), y = e.n(m);
        window.groupAlert = document.createElement("div");
        var I = function (t) {
            function n() {
                return i()(this, n), p()(this, (n.__proto__ || u()(n)).apply(this, arguments))
            }

            return l()(n, t), f()(n, [{
                key: "render", value: function () {
                    var t = this.props, e = t.msg, r = t.type, o = t.children, u = t.onClose, c = t.top,
                        i = y()("tips-icon", a()({}, "icon" + r, r));
                    return E.a.createElement("div", {className: "alert-comp"}, E.a.createElement("div", {
                        className: "wrong-box",
                        style: {top: c + "px"}
                    }, E.a.createElement("i", {
                        className: "mask-close",
                        onClick: u || n.destroy
                    }), E.a.createElement("p", {className: i}), E.a.createElement("div", {className: "tips-txt"}, "string" === typeof e ? E.a.createElement("div", {dangerouslySetInnerHTML: {__html: e}}) : e, o)))
                }
            }]), n
        }(v.Component);
        I.show = function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            document.body.appendChild(window.groupAlert), g.a.render(E.a.createElement(I, {
                msg: t,
                type: n
            }), window.groupAlert)
        }, I.destroy = function () {
            window.groupAlert && (g.a.unmountComponentAtNode(window.groupAlert), document.body.removeChild(window.groupAlert))
        };
        var O = I;
        n.a = O
    }, 29: function (t, n, e) {
        "use strict";
        n.a = {
            set: function (t, n, e, r) {
                var a = "";
                if (e) {
                    var o = new Date;
                    o.setTime(o.getTime() + 24 * e * 60 * 60 * 1e3), a = "; expires=" + o.toGMTString()
                }
                var u = r || "/";
                document.cookie = t + "=" + n + a + "; path=" + u
            }, get: function (t) {
                for (var n = t + "=", e = document.cookie.split(";"), r = 0; r < e.length; r += 1) {
                    for (var a = e[r]; " " === a.charAt(0);) a = a.substring(1, a.length);
                    if (0 === a.indexOf(n)) return a.substring(n.length, a.length)
                }
                return ""
            }, remove: function (t) {
                this.set(t, "", -1)
            }
        }
    }, 3: function (t, n, e) {
        "use strict";
        var r = e(23), a = e(24), o = e.n(a);
        Object(a.setServices)(r.a.API), n.a = o.a
    }, 30: function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return r
        }), e.d(n, "a", function () {
            return a
        });
        var r = function (t, n) {
            n || (n = window.location.href), t = t.replace(/[[]]/g, "\\$&");
            var e = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(n);
            return e ? e[2] ? decodeURIComponent(e[2].replace(/\+/g, " ")) : "" : null
        }, a = function (t, n) {
            var e = t.length;
            if (15 === e) {
                var r = t.match(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/), a = r[2], o = r[3], u = r[4],
                    c = "19" + a + "/" + o + "/" + u;
                return n ? {year: a, month: o, day: u, birthday: c} : c
            }
            if (18 === e) {
                var i = t.match(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/), s = i[2], f = i[3], d = i[4],
                    p = s + "/" + f + "/" + d;
                return n ? {year: s, month: f, day: d, birthday: p} : p
            }
            return ""
        }
    }, 31: function (t, n) {
        t.exports = {
            publicPath: "/static",
            staticPath: "/static",
            API: {online: {host: ""}, ihealth: {host: ""}, enterprise: {host: ""}},
            proxy: {
                "/api/dragon": {
                    target: "https://t-test.zhongan.com",
                    secure: !1,
                    logLevel: "debug",
                    changeOrigin: !0
                },
                "/api/open": {target: "https://t-test.zhongan.com", secure: !1, logLevel: "debug", changeOrigin: !0},
                "/api/enterprise": {
                    target: "https://t-test.zhongan.com",
                    secure: !1,
                    logLevel: "debug",
                    changeOrigin: !0
                },
                "/api/peony": {target: "https://t-test.zhongan.com", secure: !1, logLevel: "debug", changeOrigin: !0}
            },
            STAFF_GUIDE_URL: "https://hr-test.zhongan.com/misc/staff/guide?origin=tzhongan",
            HR_HOST: "https://hr-test.zhongan.com",
            HOST: "https://t-test.zhongan.com",
            FILE_DOWNLOAD_MIN: "https://t-test.zhongan.com/api/chinchilla/v1/picture/downLoadPhoto?filePath=",
            FILE_DOWNLOAD: "https://t-test.zhongan.com/api/chinchilla/v1/picture/downloadOriginalPhoto?filePath=",
            CERTIFY_HOST: "https://certify-test.zhongan.com",
            ZHONGAN_DOMAIN: "http://www.itest1.zhongan.com"
        }
    }, 32: function (t, n) {
        t.exports = {
            publicPath: "/group/static",
            staticPath: "/group/static",
            API: {online: {host: ""}, ihealth: {host: ""}, enterprise: {host: ""}},
            proxy: {
                "/api/dragon": {
                    target: "https://t-test.zhongan.com",
                    secure: !1,
                    logLevel: "debug",
                    changeOrigin: !0
                },
                "/api/open": {target: "https://t-test.zhongan.com", secure: !1, logLevel: "debug", changeOrigin: !0},
                "/api/peony": {target: "https://t-test.zhongan.com", secure: !1, logLevel: "debug", changeOrigin: !0},
                "/api/enterprise": {
                    target: "https://t-test.zhongan.com",
                    secure: !1,
                    logLevel: "debug",
                    changeOrigin: !0
                }
            },
            STAFF_GUIDE_URL: "https://hr-test.zhongan.com/misc/staff/guide?origin=tzhongan",
            HR_HOST: "https://hr-test.zhongan.com",
            HOST: "https://t-test.zhongan.com",
            FILE_DOWNLOAD_MIN: "https://t-test.zhongan.com/api/chinchilla/v1/picture/downLoadPhoto?filePath=",
            FILE_DOWNLOAD: "https://t-test.zhongan.com/api/chinchilla/v1/picture/downloadOriginalPhoto?filePath=",
            CERTIFY_HOST: "https://certify-test.zhongan.com",
            ZHONGAN_DOMAIN: "http://www.itest1.zhongan.com"
        }
    }, 33: function (t, n) {
        t.exports = {
            publicPath: "/group/static",
            staticPath: "/group/static",
            API: {
                online: {host: "https://t-uat.zhongan.com"},
                ihealth: {host: "https://ihealth-uat.zhongan.com"},
                enterprise: {host: "https://t-uat.zhongan.com"}
            },
            STAFF_GUIDE_URL: "https://hr-uat.zhongan.com/misc/staff/guide?origin=tzhongan",
            HR_HOST: "https://hr-uat.zhongan.com",
            HOST: "https://t-uat.zhongan.com",
            FILE_DOWNLOAD_MIN: "https://t-uat.zhongan.com/api/chinchilla/v1/picture/downLoadPhoto?filePath=",
            FILE_DOWNLOAD: "https://t-uat.zhongan.com/api/chinchilla/v1/picture/downloadOriginalPhoto?filePath=",
            CERTIFY_HOST: "https://certify-uat.zhongan.com",
            ZHONGAN_DOMAIN: "https://uat.zhongan.com"
        }
    }, 34: function (t, n) {
        t.exports = {
            publicPath: "//health.zacdn.cn/group",
            staticPath: "/static",
            API: {
                online: {host: "https://t.zhongan.com"},
                ihealth: {host: "https://ihealth.zhongan.com"},
                enterprise: {host: "https://t.zhongan.com"}
            },
            STAFF_GUIDE_URL: "https://hr.zhongan.com/misc/staff/guide?origin=tzhongan",
            HR_HOST: "https://hr.zhongan.com",
            HOST: "https://t.zhongan.com",
            FILE_DOWNLOAD_MIN: "https://t.zhongan.com/api/chinchilla/v1/picture/downLoadPhoto?filePath=",
            FILE_DOWNLOAD: "https://t.zhongan.com/api/chinchilla/v1/picture/downloadOriginalPhoto?filePath=",
            CERTIFY_HOST: "https://certify.zhongan.com",
            ZHONGAN_DOMAIN: "https://www.zhongan.com"
        }
    }, 35: function (t, n, e) {
        "use strict";
        e.r(n);
        e(80), e(50), e(51), e(68);
        var r = e(40), a = e.n(r), o = (e(81), e(45)), u = e.n(o), c = e(39), i = e.n(c), s = e(5), f = e.n(s),
            d = e(6), p = e.n(d), h = e(7), l = e.n(h), v = e(8), E = e.n(v), _ = e(9), g = e.n(_), m = e(0),
            y = e.n(m), I = e(19), O = e(3), T = e(20), N = e(30), A = e(26), w = function (t) {
                function n(t) {
                    p()(this, n);
                    var e = E()(this, (n.__proto__ || f()(n)).call(this, t));
                    return e.state = {loading: !1, toast: !1, toastMessage: ""}, e
                }

                return g()(n, t), l()(n, [{
                    key: "componentWillMount", value: function () {
                        var t = this;
                        O.a.setOptions({headers: {"cache-control": "no-cache"}}), O.a.setBefore(function (n) {
                            var e = n.isLoading;
                            void 0 !== e && e && t.showLoading()
                        }), O.a.setAfter(function (n) {
                            var e = n.isLoading;
                            void 0 !== e && e && t.hideLoading()
                        }), O.a.setCheckStatus(function (n) {
                            if (n.status >= 200 && n.status < 300) return n;
                            t.showToast("\u7f51\u7edc\u5f02\u5e38");
                            var e = new Error(n.statusText);
                            return e.response = n, i.a.reject(e)
                        }), O.a.setMiddlewares([function (t) {
                            return 20002 === +t.code && "\u767b\u5f55\u8d85\u65f6." === t.message ? t : (+t.code >= 2e4 && A.a.show(t.message), t)
                        }])
                    }
                }, {
                    key: "componentDidMount", value: function () {
                        document.body.className = "app-container-body", I.a.on(window, "resize", window.__setFontSize__), I.a.on(document, "touchstart", function () {
                        }), Object(T.a)("//static.zhongan.com/website/public/js/ilog/dist/ilog.min.js"), Object(N.b)("_mobile_debug_console_") && Object(T.a)("http://eruda.liriliri.io/eruda.min.js", function () {
                            eruda.init()
                        })
                    }
                }, {
                    key: "showLoading", value: function () {
                        this.setState({loading: !0})
                    }
                }, {
                    key: "hideLoading", value: function () {
                        this.setState({loading: !1})
                    }
                }, {
                    key: "showToast", value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\u73a9\u547d\u5f00\u53d1\u4e2d...";
                        this.setState({toast: !0, toastMessage: t})
                    }
                }, {
                    key: "hideToast", value: function () {
                        this.setState({toast: !1})
                    }
                }, {
                    key: "render", value: function () {
                        var t = this, n = this.props.children, e = this.state, r = e.loading, o = e.toast,
                            c = e.toastMessage;
                        return y.a.createElement("div", {className: "app-container"}, y.a.createElement(u.a, {visible: r}), y.a.createElement(a.a, {
                            visible: o,
                            onMaskClick: function () {
                                t.hideToast()
                            }
                        }, c), n)
                    }
                }]), n
            }(m.Component);
        n.default = w
    }, 46: function (t, n, e) {
        "use strict";
        e.r(n), e.d(n, "REQUEST", function () {
            return f
        }), e.d(n, "GET_FAQ", function () {
            return p
        }), e.d(n, "getFAQ", function () {
            return h
        }), e.d(n, "GET_DOMAIN", function () {
            return l
        }), e.d(n, "getDomain", function () {
            return v
        }), e.d(n, "CHECK_LOGIN", function () {
            return E
        }), e.d(n, "checkLogin", function () {
            return _
        }), e.d(n, "GENERATOR_TICKET", function () {
            return g
        }), e.d(n, "generatorTicket", function () {
            return m
        }), e.d(n, "GET_MENU_INFO", function () {
            return y
        }), e.d(n, "getMenu", function () {
            return I
        });
        var r = e(1), a = e.n(r), o = e(74), u = e.n(o), c = e(4), i = e.n(c), s = e(3), f = "REQUEST";

        function d() {
            return {type: f}
        }

        var p = "GET_FAQ";

        function h() {
            var t = this;
            return function () {
                var n = i()(a.a.mark(function n(e, r) {
                    var o, c, i;
                    return a.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if (o = function () {
                                    return s.a.get({
                                        server: "online",
                                        path: "/api/open/enterprise/question/getQuestionLike"
                                    })
                                }, !u()(r().system.faq).length) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                return e(d()), t.next = 6, o();
                            case 6:
                                c = t.sent, i = c.result, e({type: p, data: i});
                            case 9:
                            case"end":
                                return t.stop()
                        }
                    }, n, t)
                }));
                return function (t, e) {
                    return n.apply(this, arguments)
                }
            }()
        }

        var l = "GET_DOMAIN";

        function v() {
            var t = this;
            return function () {
                var n = i()(a.a.mark(function n(e) {
                    var r, o;
                    return a.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return e(d()), t.next = 3, s.a.get({
                                    server: "online",
                                    path: "/api/open/common/oldOnline/getDomain"
                                });
                            case 3:
                                r = t.sent, o = r.result, e({type: l, data: o || "http://www.zhongan.com"});
                            case 6:
                            case"end":
                                return t.stop()
                        }
                    }, n, t)
                }));
                return function (t) {
                    return n.apply(this, arguments)
                }
            }()
        }

        var E = "CHECK_LOGIN";

        function _() {
            var t = this;
            return function () {
                var n = i()(a.a.mark(function n(e) {
                    var r, o, u, c;
                    return a.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return e(d()), t.next = 3, s.a.get({
                                    server: "online",
                                    path: "/api/open/enterprise/pc/checkLogin"
                                });
                            case 3:
                                return r = t.sent, o = r.result, u = r.code, c = r.message, e({
                                    type: E,
                                    data: o
                                }), t.abrupt("return", {result: o, code: u, message: c});
                            case 9:
                            case"end":
                                return t.stop()
                        }
                    }, n, t)
                }));
                return function (t) {
                    return n.apply(this, arguments)
                }
            }()
        }

        var g = "GENERATOR_TICKET";

        function m() {
            var t = this;
            return function () {
                var n = i()(a.a.mark(function n(e) {
                    var r, o;
                    return a.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return e(d()), t.next = 3, s.a.get({
                                    server: "online",
                                    path: "/api/dragon/common/generatorTicket",
                                    headers: {"Cache-Control": "no-cache", pragma: "no-cache"}
                                });
                            case 3:
                                return r = t.sent, o = r.result, e({type: g, data: o}), t.abrupt("return", {result: o});
                            case 7:
                            case"end":
                                return t.stop()
                        }
                    }, n, t)
                }));
                return function (t) {
                    return n.apply(this, arguments)
                }
            }()
        }

        var y = "GET_MENU_INFO";

        function I(t) {
            var n = this;
            return function () {
                var e = i()(a.a.mark(function e(r) {
                    var o, u;
                    return a.a.wrap(function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return r(d()), n.next = 3, s.a.get({
                                    server: "online",
                                    path: "/api/dragon/group/getMenu?" + t
                                });
                            case 3:
                                o = n.sent, u = o.result, r({type: y, data: u});
                            case 6:
                            case"end":
                                return n.stop()
                        }
                    }, e, n)
                }));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()
        }
    }, 47: function (t, n, e) {
        "use strict";
        e.d(n, "d", function () {
            return r
        }), e.d(n, "a", function () {
            return a
        }), e.d(n, "b", function () {
            return o
        }), e.d(n, "c", function () {
            return u
        });
        e(74), e(1), e(4), e(3);
        var r = "GET_PROVINCES";
        var a = "GET_CITIES";
        var o = "GET_DISTRICTS";
        var u = "GET_JOB_CLASS"
    }, 50: function (t, n, e) {
    }, 51: function (t, n, e) {
    }, 52: function (t, n, e) {
    }, 53: function (t, n, e) {
    }, 57: function (t, n, e) {
        "use strict";
        e.r(n), e.d(n, "REQUEST", function () {
            return i
        }), e.d(n, "GET_ORDER_INFO", function () {
            return f
        }), e.d(n, "getOrderInfo", function () {
            return d
        }), e.d(n, "SAVE_PAY_WAY_INFO", function () {
            return p
        }), e.d(n, "savePayWayInfo", function () {
            return h
        }), e.d(n, "MONITOR_GROUP_ORDER", function () {
            return l
        }), e.d(n, "monitorGroupOrder", function () {
            return v
        }), e.d(n, "GET_ENTERPRISE_ORDER_INFO", function () {
            return E
        }), e.d(n, "getEnterpriseOrderInfo", function () {
            return _
        }), e.d(n, "SAVE_ENTERPRISE_PAY_WAY_INFO", function () {
            return g
        }), e.d(n, "saveEnterprisePayWayInfo", function () {
            return m
        }), e.d(n, "MONITOR_ENTERPRISE_GROUP_ORDER", function () {
            return y
        }), e.d(n, "monitorEnterpriseGroupOrder", function () {
            return I
        }), e.d(n, "UPLOAD_FILE", function () {
            return O
        }), e.d(n, "uploadFile", function () {
            return T
        }), e.d(n, "UPLOAD_IMAGE", function () {
            return N
        }), e.d(n, "uploadImage", function () {
            return A
        }), e.d(n, "SAVE_PAYMENT_INFO", function () {
            return w
        }), e.d(n, "savePaymentInfo", function () {
            return b
        }), e.d(n, "CLEAR_PAYMENT_INFO", function () {
            return L
        }), e.d(n, "clearPaymentInfo", function () {
            return R
        });
        var r = e(1), a = e.n(r), o = e(4), u = e.n(o), c = e(3), i = "REQUEST";

        function s(t) {
            return {type: i, data: t}
        }

        var f = "GET_ORDER_INFO";

        function d(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, i, d, p;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.get({
                                        server: "online",
                                        path: "/api/dragon/orderPay/getSytOrderInfo",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(s()), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return i = e.t0, d = i.code, p = i.result, 0 === +d && "function" === typeof n && n(), o({
                                    type: f,
                                    data: p
                                }), e.abrupt("return", {code: d, result: p});
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var p = "SAVE_PAY_WAY_INFO";

        function h(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, i, f, d;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.post({
                                        server: "online",
                                        path: "/api/dragon/orderPay/savePayWayInfo",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(s()), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return i = e.t0, f = i.code, d = i.result, 0 === +f && "function" === typeof n && n(), o({
                                    type: p,
                                    data: d
                                }), e.abrupt("return", {code: f, result: d});
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var l = "MONITOR_GROUP_ORDER";

        function v(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, i, f, d, p;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.get({
                                        server: "online",
                                        path: "/api/dragon/orderPay/monitorGroupOrder",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(s()), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return i = e.t0, f = i.code, d = i.result, p = i.message, 0 === +f && "function" === typeof n && n(), o({
                                    type: l,
                                    data: d
                                }), e.abrupt("return", {code: f, result: d, message: p});
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var E = "GET_ENTERPRISE_ORDER_INFO";

        function _(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, i, f, d;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.get({
                                        server: "enterprise",
                                        path: "/api/enterprise/orderPay/getSytOrderInfo",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(s()), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return i = e.t0, f = i.code, d = i.result, 0 === +f && "function" === typeof n && n(), o({
                                    type: E,
                                    data: d
                                }), e.abrupt("return", {code: f, result: d});
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var g = "SAVE_ENTERPRISE_PAY_WAY_INFO";

        function m(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, i, f, d;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.post({
                                        server: "enterprise",
                                        path: "/api/enterprise/orderPay/savePayWayInfo",
                                        data: t,
                                        isLoading: !0
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(s()), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return i = e.t0, f = i.code, d = i.result, 0 === +f && "function" === typeof n && n(), o({
                                    type: g,
                                    data: d
                                }), e.abrupt("return", {code: f, result: d});
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var y = "MONITOR_ENTERPRISE_GROUP_ORDER";

        function I(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, i, f, d, p;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.get({
                                        server: "enterprise",
                                        path: "/api/enterprise/orderPay/monitorGroupOrder",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(s()), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return i = e.t0, f = i.code, d = i.result, p = i.message, 0 === +f && "function" === typeof n && n(), o({
                                    type: y,
                                    data: d
                                }), e.abrupt("return", {code: f, result: d, message: p});
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var O = "UPLOAD_FILE";

        function T(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, i, f, d, p;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.form({
                                        server: "online",
                                        path: "/api/peony/upload/uploadCommonFile",
                                        data: t,
                                        isLoading: !0
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(s()), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return i = e.t0, f = i.code, d = i.result, p = i.message, 0 === +f && "function" === typeof n && n(), o({
                                    type: O,
                                    data: d
                                }), e.abrupt("return", {code: f, result: d, message: p});
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var N = "UPLOAD_IMAGE";

        function A(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, i, f, d, p;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.form({
                                        server: "online",
                                        path: "/api/peony/upload/uploadCommonPicture",
                                        data: t,
                                        isLoading: !0
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(s()), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return i = e.t0, f = i.code, d = i.result, p = i.message, 0 === +f && "function" === typeof n && n(), o({
                                    type: N,
                                    data: d
                                }), e.abrupt("return", {code: f, result: d, message: p});
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var w = "SAVE_PAYMENT_INFO";

        function b(t) {
            return {type: w, data: t}
        }

        var L = "CLEAR_PAYMENT_INFO";

        function R() {
            return {type: L}
        }
    }, 58: function (t, n, e) {
        "use strict";
        e.r(n), e.d(n, "REQUEST", function () {
            return i
        }), e.d(n, "GET_BANNERS", function () {
            return f
        }), e.d(n, "getBanners", function () {
            return d
        }), e.d(n, "GET_T_PLAN", function () {
            return p
        }), e.d(n, "getTPlan", function () {
            return h
        }), e.d(n, "GET_F_PLAN", function () {
            return l
        }), e.d(n, "getFPlan", function () {
            return v
        }), e.d(n, "GET_QUESTION_MENU", function () {
            return E
        }), e.d(n, "getQuestionMenu", function () {
            return _
        }), e.d(n, "ADD_RESERVE", function () {
            return g
        }), e.d(n, "addReserve", function () {
            return m
        });
        var r = e(1), a = e.n(r), o = e(4), u = e.n(o), c = e(3), i = "REQUEST";

        function s(t) {
            return {type: i, data: t}
        }

        var f = "GET_BANNERS";

        function d(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, i, d, p;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.get({
                                        server: "online",
                                        path: "/api/open/common/banner/getBanners",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(s()), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                i = e.t0, d = i.code, p = i.result, 0 === +d && "function" === typeof n && n(), o({
                                    type: f,
                                    data: p
                                });
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var p = "GET_T_PLAN";

        function h(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, i, f, d;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.get({
                                        server: "online",
                                        path: "/api/open/enterprise/insuredInfo/getTPlan",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(s()), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                i = e.t0, f = i.code, d = i.result, 0 === +f && "function" === typeof n && n(), o({
                                    type: p,
                                    data: d
                                });
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var l = "GET_F_PLAN";

        function v(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, i, f, d;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.get({
                                        server: "online",
                                        path: "/api/open/enterprise/insuredInfo/getFPlan",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(s()), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                i = e.t0, f = i.code, d = i.result, 0 === +f && "function" === typeof n && n(), o({
                                    type: l,
                                    data: d
                                });
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var E = "GET_QUESTION_MENU";

        function _(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, i, f, d;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.get({
                                        server: "online",
                                        path: "/api/open/enterprise/question/getQuestionMenu",
                                        data: t
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(s()), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                i = e.t0, f = i.code, d = i.result, 0 === +f && "function" === typeof n && n(), o({
                                    type: E,
                                    data: d
                                });
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var g = "ADD_RESERVE";

        function m(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, i, f, d;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.post({
                                        server: "online",
                                        path: "/api/dragon/reservation/addReserve",
                                        data: t,
                                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o(s()), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                return i = e.t0, f = i.code, d = i.result, 0 === +f && "function" === typeof n && n(), o({
                                    type: g,
                                    data: d
                                }), e.abrupt("return", {code: f, result: d});
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }
    }, 70: function (t, n, e) {
        "use strict";
        var r = e(5), a = e.n(r), o = e(6), u = e.n(o), c = e(7), i = e.n(c), s = e(8), f = e.n(s), d = e(9),
            p = e.n(d), h = e(0), l = e.n(h), v = e(35), E = (e(53), function (t) {
                function n() {
                    return u()(this, n), f()(this, (n.__proto__ || a()(n)).apply(this, arguments))
                }

                return p()(n, t), i()(n, [{
                    key: "render", value: function () {
                        return l.a.createElement("div", {className: "error-tips"}, "\u4ea7\u54c1\u5347\u7ea7\u4e2d\uff0c\u8bf7\u8054\u7cfb\u4f17\u5b89\u5ba2\u670d10109955")
                    }
                }]), n
            }(h.Component)), _ = function (t) {
                function n() {
                    return u()(this, n), f()(this, (n.__proto__ || a()(n)).apply(this, arguments))
                }

                return p()(n, t), i()(n, [{
                    key: "render", value: function () {
                        return l.a.createElement(v.default, null, l.a.createElement(E, null))
                    }
                }]), n
            }(h.PureComponent);
        n.a = _
    }, 84: function (t, n, e) {
        "use strict";
        e.r(n), e.d(n, "REQUEST", function () {
            return i
        }), e.d(n, "ADD_CONSULT", function () {
            return s
        }), e.d(n, "addConsult", function () {
            return f
        }), e.d(n, "SAVE_CONSULT_INFO", function () {
            return d
        }), e.d(n, "saveConsultInfo", function () {
            return p
        }), e.d(n, "CLEAR_CONSULT_INFO", function () {
            return h
        }), e.d(n, "clearConsultInfo", function () {
            return l
        });
        var r = e(1), a = e.n(r), o = e(4), u = e.n(o), c = e(3), i = "REQUEST";
        var s = "ADD_CONSULT";

        function f(t, n) {
            var e = this;
            return function () {
                var r = u()(a.a.mark(function r(o) {
                    var u, f, d, p;
                    return a.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return u = function () {
                                    return c.a.post({
                                        server: "online",
                                        path: "/api/dragon/consult/add",
                                        data: t,
                                        isLoading: !0
                                    }).catch(function (t) {
                                        return console.error(t)
                                    })
                                }, o({type: i, data: void 0}), e.next = 4, u();
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                f = e.t0, d = f.code, p = f.result, 0 === +d && "function" === typeof n && n(), o({
                                    type: s,
                                    data: p
                                });
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }, r, e)
                }));
                return function (t) {
                    return r.apply(this, arguments)
                }
            }()
        }

        var d = "SAVE_CONSULT_INFO";

        function p(t) {
            return {type: d, data: t}
        }

        var h = "CLEAR_CONSULT_INFO";

        function l() {
            return {type: h}
        }
    }
}, [[155, 16, 0, 17]]]);