webpackJsonp([8], {
    1170: function (n, t, i) {
        "use strict";

        function e(n) {
            return n && n.__esModule ? n : {default: n}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var o, a, s = i(394), r = e(s), l = i(967), d = e(l), f = i(395), u = e(f), p = i(396), c = e(p), h = i(968),
            x = e(h), g = i(969), b = e(g), k = i(397), v = e(k),
            m = (0, v.default)(["\n  width: 100%;\n  // box-shadow: 0px -6px 12px 0px rgba(0,0,0,0.1);\n  background: #fff;\n  padding: 0 20px;\n  // position: absolute;\n  // top: -56px;\n  // left: 0;\n"], ["\n  width: 100%;\n  // box-shadow: 0px -6px 12px 0px rgba(0,0,0,0.1);\n  background: #fff;\n  padding: 0 20px;\n  // position: absolute;\n  // top: -56px;\n  // left: 0;\n"]),
            y = (0, v.default)(["\n  display: ", ";\n  white-space: nowrap;\n  width: 100%;\n  background: #fff;\n  padding: 16px 0 0;\n  // transition-property: transform;\n  // transition-duration: 1s;\n  // transition-timing-function: linear;\n  transition: transform 0.5s ease-in;\n"], ["\n  display: ", ";\n  white-space: nowrap;\n  width: 100%;\n  background: #fff;\n  padding: 16px 0 0;\n  // transition-property: transform;\n  // transition-duration: 1s;\n  // transition-timing-function: linear;\n  transition: transform 0.5s ease-in;\n"]),
            w = (0, v.default)(["\n  display: inline-flex;\n  height: 32px;\n  margin: 0 8px 0 0;\n  padding: 0 12px;\n \n  border-radius: 16px;\n  // box-shadow: 0 1px 6px 0 rgba(0,0,0,0.10);\n  font-size: 14px;\n  font-family: Overpass-Light;\n  line-height: 32px;\n  text-align: justify;\n  cursor: pointer;\n  &:hover {\n    background: ", ";\n  }\n  background: ", ";\n  color: ", ";\n  transition: background 0.2s ease-out, color 0.2s ease-in;\n"], ["\n  display: inline-flex;\n  height: 32px;\n  margin: 0 8px 0 0;\n  padding: 0 12px;\n \n  border-radius: 16px;\n  // box-shadow: 0 1px 6px 0 rgba(0,0,0,0.10);\n  font-size: 14px;\n  font-family: Overpass-Light;\n  line-height: 32px;\n  text-align: justify;\n  cursor: pointer;\n  &:hover {\n    background: ", ";\n  }\n  background: ", ";\n  color: ", ";\n  transition: background 0.2s ease-out, color 0.2s ease-in;\n"]),
            C = (0, v.default)(["\n  display: inline-block;\n  width: 20px;\n  margin-right: 5px;\n  height: 100%;\n  // color: #9FA3A7;\n  color: ", ";\n  transition: color 0.2s ease-in;\n"], ["\n  display: inline-block;\n  width: 20px;\n  margin-right: 5px;\n  height: 100%;\n  // color: #9FA3A7;\n  color: ", ";\n  transition: color 0.2s ease-in;\n"]),
            W = (0, v.default)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 40px;\n  height: 100%;\n  padding: 16px 0 0 20px;\n  line-height: 32px;\n  color: #ddd;\n  font-weight: bold;\n  background: #fff;\n  box-shadow: 6px 10px 20px 0 #fff;\n  z-index: 9;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 40px;\n  height: 100%;\n  padding: 16px 0 0 20px;\n  line-height: 32px;\n  color: #ddd;\n  font-weight: bold;\n  background: #fff;\n  box-shadow: 6px 10px 20px 0 #fff;\n  z-index: 9;\n  cursor: pointer;\n"]),
            S = (0, v.default)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: inline-block;\n  width: 40px;\n  height: 100%;\n  padding-top: 16px;\n  line-height: 32px;\n  color: #ddd;\n  font-weight: bold;\n  background: #fff;\n  box-shadow: -6px 10px 20px 0 #fff;\n  z-index: 9;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: inline-block;\n  width: 40px;\n  height: 100%;\n  padding-top: 16px;\n  line-height: 32px;\n  color: #ddd;\n  font-weight: bold;\n  background: #fff;\n  box-shadow: -6px 10px 20px 0 #fff;\n  z-index: 9;\n  cursor: pointer;\n"]),
            N = i(10), _ = e(N), X = i(237), z = e(X), A = (i(121), i(970)), L = i(972), P = e(L),
            K = (0, z.default)(A.View)(m), M = (0, z.default)(A.List)(y, function (n) {
                return n.hide ? "none" : "flex"
            }), R = (0, z.default)(A.ListItem)(w, function (n) {
                return n.theme[n.theme.current].secondaryColor
            }, function (n) {
                return n.isClicking ? n.theme[n.theme.current].mainColor + " !important" : "rgba(41,45,77,0.04)"
            }, function (n) {
                return n.isClicking ? "#fff" : "#292D4D"
            }), j = (0, z.default)(P.default)(C, function (n) {
                return n.isClicking ? "#fff" : "" + n.theme[n.theme.current].mainColor
            }), D = (0, z.default)(P.default)(W), O = (0, z.default)(P.default)(S), F = (a = o = function (n) {
                function t(n) {
                    (0, u.default)(this, t);
                    var i = (0, x.default)(this, (t.__proto__ || (0, d.default)(t)).call(this, n));
                    return i.state = {
                        translateX: 0,
                        clickKey: null,
                        navsScrollWidth: 0,
                        navsWidth: 0
                    }, i.onClickLeft = function () {
                        i.translateNavs(i.offset)
                    }, i.onClickRight = function () {
                        i.translateNavs(-i.offset)
                    }, i.onNavClick = function (n, t) {
                        i.props.onNavClick(n), i.setActiveNavStyle(t)
                    }, i.getWidth = function () {
                        return i.navs ? i.navs.getBoundingClientRect().width : 0
                    }, i.getScrollWidth = function () {
                        return i.navs ? i.navs.scrollWidth : 0
                    }, i.setActiveNavStyle = function (n) {
                        i.setState({clickKey: n}, function () {
                            setTimeout(function () {
                                i.setState({clickKey: null})
                            }, 200)
                        })
                    }, i.translateNavs = function (n) {
                        var t = i.state.translateX + n;
                        t = Math.max(t, i.state.navsWidth - i.state.navsScrollWidth), t = Math.min(0, t), i.setState({translateX: t})
                    }, i.offset = 350, i
                }

                return (0, b.default)(t, n), (0, c.default)(t, [{
                    key: "componentDidMount", value: function () {
                        this.setState({navsScrollWidth: this.getScrollWidth(), navsWidth: this.getWidth()})
                    }
                }, {
                    key: "render", value: function () {
                        var n = this, t = this.props, i = t.hide, e = t.navs, o = !i && 0 !== this.state.translateX,
                            a = !i && this.state.navsScrollWidth - this.state.navsWidth > 1 && this.state.translateX !== this.state.navsWidth - this.state.navsScrollWidth;
                        return (0, r.default)(K, {hide: i}, void 0, o && (0, r.default)(D, {
                            name: "fanhui",
                            onClick: this.onClickLeft
                        }), (0, r.default)(M, {
                            innerRef: function (t) {
                                n.navs = t
                            },
                            hide: i,
                            className: "elfen-navigations",
                            currPos: this.state.currPos,
                            nextPos: this.state.nextPos,
                            style: {transform: "translateX(" + this.state.translateX + "px)"}
                        }, void 0, e.filter(function (n) {
                            return null !== n.key
                        }).map(function (t, i) {
                            return (0, r.default)(R, {
                                isClicking: n.state.clickKey === i, onClick: function () {
                                    return n.onNavClick(t, i)
                                }
                            }, t.key + "@" + t.detailId + "@" + t.name, t.icon && (0, r.default)(j, {
                                name: t.icon.split("-")[1] || t.icon,
                                isClicking: n.state.clickKey === i
                            }), t.name)
                        })), a && (0, r.default)(O, {name: "more", onClick: this.onClickRight}))
                    }
                }]), t
            }(_.default.Component), o.defaultProps = {
                navs: [], onNavClick: function () {
                    return null
                }
            }, a);
        t.default = F, n.exports = t.default
    }
});