window.webOSDev = function (e) {
    var r = {};

    function t(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {i: n, l: !1, exports: {}};
        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }

    return t.m = e, t.c = r, t.d = function (e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, {enumerable: !0, get: n})
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, t.t = function (e, r) {
        if (1 & r && (e = t(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {enumerable: !0, value: e}), 2 & r && "string" != typeof e) for (var o in e) t.d(n, o, function (r) {
            return e[r]
        }.bind(null, o));
        return n
    }, t.n = function (e) {
        var r = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(r, "a", r), r
    }, t.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, t.p = "", t(t.s = 0)
}([function (e, r, t) {
    "use strict";

    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function o(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r && (n = n.filter((function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
            }))), t.push.apply(t, n)
        }
        return t
    }

    function i(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? o(Object(t), !0).forEach((function (r) {
                u(e, r, t[r])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            }))
        }
        return e
    }

    function u(e, r, t) {
        return (r = a(r)) in e ? Object.defineProperty(e, r, {value: t, enumerable: !0, configurable: !0, writable: !0}) : e[r] = t, e
    }

    function c(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, a(n.key), n)
        }
    }

    function a(e) {
        var r = function (e, r) {
            if ("object" !== n(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
                var o = t.call(e, r || "default");
                if ("object" !== n(o)) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === r ? String : Number)(e)
        }(e, "string");
        return "symbol" === n(r) ? r : String(r)
    }

    t.r(r), t.d(r, "APP", (function () {
        return f
    })), t.d(r, "connection", (function () {
        return M
    })), t.d(r, "DRM", (function () {
        return x
    })), t.d(r, "drmAgent", (function () {
        return V
    })), t.d(r, "launch", (function () {
        return d
    })), t.d(r, "launchParams", (function () {
        return b
    })), t.d(r, "LGUDID", (function () {
        return U
    }));
    var s = {}, l = function () {
        function e() {
            !function (e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.bridge = null, this.cancelled = !1, this.subscribe = !1
        }

        var r, t, n;
        return r = e, (t = [{
            key: "send", value: function (e) {
                var r = e.service, t = void 0 === r ? "" : r, n = e.method, o = void 0 === n ? "" : n, u = e.parameters, c = void 0 === u ? {} : u,
                    a = e.onSuccess, l = void 0 === a ? function () {
                    } : a, f = e.onFailure, d = void 0 === f ? function () {
                    } : f, b = e.onComplete, p = void 0 === b ? function () {
                    } : b, v = e.subscribe, m = void 0 !== v && v;
                if (!window.PalmServiceBridge) {
                    var y = {errorCode: -1, errorText: "PalmServiceBridge is not found.", returnValue: !1};
                    return d(y), p(y), console.error("PalmServiceBridge is not found."), this
                }
                this.ts && s[this.ts] && delete s[this.ts];
                var h, O = i({}, c);
                return this.subscribe = m, this.subscribe && (O.subscribe = this.subscribe), O.subscribe && (this.subscribe = O.subscribe), this.ts = Date.now(), s[this.ts] = this, this.bridge = new PalmServiceBridge, this.bridge.onservicecallback = this.callback.bind(this, l, d, p), this.bridge.call(("/" !== (h = t).slice(-1) && (h += "/"), h + o), JSON.stringify(O)), this
            }
        }, {
            key: "callback", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {
                }, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                }, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {
                }, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                if (!this.cancelled) {
                    var o = {};
                    try {
                        o = JSON.parse(n)
                    } catch (e) {
                        o = {errorCode: -1, errorText: n, returnValue: !1}
                    }
                    var i = o, u = i.errorCode, c = i.returnValue;
                    u || !1 === c ? (o.returnValue = !1, r(o)) : (o.returnValue = !0, e(o)), t(o), this.subscribe || this.cancel()
                }
            }
        }, {
            key: "cancel", value: function () {
                this.cancelled = !0, null !== this.bridge && (this.bridge.cancel(), this.bridge = null), this.ts && s[this.ts] && delete s[this.ts]
            }
        }]) && c(r.prototype, t), n && c(r, n), Object.defineProperty(r, "prototype", {writable: !1}), e
    }(), f = {BROWSER: "APP_BROWSER"}, d = function (e) {
        var r = e.id, t = void 0 === r ? "" : r, n = e.params, o = void 0 === n ? {} : n, i = e.onSuccess, u = void 0 === i ? function () {
        } : i, c = e.onFailure, a = void 0 === c ? function () {
        } : c, s = {id: t, params: o};
        f.BROWSER === t && (s.params.target = o.target || "", s.params.fullMode = !0, s.id = "com.webos.app.browser"), function (e) {
            var r = e.parameters, t = e.onSuccess, n = e.onFailure;
            (new l).send({
                service: "luna://com.webos.applicationManager", method: "launch", parameters: r, onComplete: function (e) {
                    var r = e.returnValue, o = e.errorCode, i = e.errorText;
                    return !0 === r ? t() : n({errorCode: o, errorText: i})
                }
            })
        }({parameters: s, onSuccess: u, onFailure: a})
    }, b = function () {
        var e = {};
        if (window.PalmSystem && "" !== window.PalmSystem.launchParams) try {
            e = JSON.parse(window.PalmSystem.launchParams)
        } catch (e) {
            console.error("JSON parsing error")
        }
        return e
    }, p = function () {
        return window.PalmSystem && window.PalmSystem.identifier ? window.PalmSystem.identifier.split(" ")[0] : ""
    };

    function v(e) {
        return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function m(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r && (n = n.filter((function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
            }))), t.push.apply(t, n)
        }
        return t
    }

    function y(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? m(Object(t), !0).forEach((function (r) {
                h(e, r, t[r])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach((function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            }))
        }
        return e
    }

    function h(e, r, t) {
        return (r = g(r)) in e ? Object.defineProperty(e, r, {value: t, enumerable: !0, configurable: !0, writable: !0}) : e[r] = t, e
    }

    function O(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, g(n.key), n)
        }
    }

    function g(e) {
        var r = function (e, r) {
            if ("object" !== v(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
                var n = t.call(e, r || "default");
                if ("object" !== v(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === r ? String : Number)(e)
        }(e, "string");
        return "symbol" === v(r) ? r : String(r)
    }

    var S = {
        NOT_ERROR: -1,
        CLIENT_NOT_LOADED: 0,
        VENDOR_ERROR: 500,
        API_NOT_SUPPORTED: 501,
        WRONG_CLIENT_ID: 502,
        KEY_NOT_FOUND: 503,
        INVALID_PARAMS: 504,
        UNSUPPORTED_DRM_TYPE: 505,
        INVALID_KEY_FORMAT: 506,
        INVALID_TIME_INFO: 507,
        UNKNOWN_ERROR: 599
    }, w = {PLAYREADY: "playready", WIDEVINE: "widevine"}, P = 0, j = 1, T = 2, E = 3, D = function (e) {
        var r = e.method, t = e.parameters, n = e.onComplete;
        (new l).send({service: "luna://com.webos.service.drm", onComplete: n, method: r, parameters: t})
    }, I = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {
        }, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        setTimeout((function () {
            return e(r)
        }), 0)
    }, R = function (e) {
        return e.state === T && "" !== e.getClientId()
    }, C = function (e, r) {
        var t = r.errorCode, n = void 0 === t ? S.UNKNOWN_ERROR : t, o = r.errorText, i = {errorCode: n, errorText: void 0 === o ? "Unknown error." : o};
        return e.setError(i), i
    }, N = {errorCode: S.CLIENT_NOT_LOADED, errorText: "DRM client is not loaded."}, _ = function () {
        function e(r) {
            !function (e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.clientId = "", this.drmType = r, this.errorCode = S.NOT_ERROR, this.errorText = "", this.state = P
        }

        var r, t, n;
        return r = e, (t = [{
            key: "getClientId", value: function () {
                return this.clientId
            }
        }, {
            key: "getDrmType", value: function () {
                return this.drmType
            }
        }, {
            key: "getErrorCode", value: function () {
                return this.errorCode
            }
        }, {
            key: "getErrorText", value: function () {
                return this.errorText
            }
        }, {
            key: "setError", value: function (e) {
                var r = e.errorCode, t = e.errorText;
                this.errorCode = r, this.errorText = t
            }
        }, {
            key: "isLoaded", value: function (e) {
                var r = this, t = e.onSuccess, n = void 0 === t ? function () {
                } : t, o = e.onFailure, i = void 0 === o ? function () {
                } : o;
                D({
                    method: "isLoaded", parameters: {appId: p()}, onComplete: function (e) {
                        if (!0 === e.returnValue) {
                            if (r.clientId = e.clientId || "", r.state = e.loadStatus ? T : P, !0 === e.loadStatus && e.drmType !== r.drmType) return i(C(r, {
                                errorCode: S.UNKNOWN_ERROR,
                                errorText: "DRM types of set and loaded are not matched."
                            }));
                            var t = y({}, e);
                            return delete t.returnValue, n(t)
                        }
                        return i(C(r, e))
                    }
                })
            }
        }, {
            key: "load", value: function (e) {
                var r = this, t = e.onSuccess, n = void 0 === t ? function () {
                } : t, o = e.onFailure, i = void 0 === o ? function () {
                } : o;
                if (this.state !== j && this.state !== T) {
                    var u = {appId: p(), drmType: this.drmType};
                    this.state = j, D({
                        method: "load", onComplete: function (e) {
                            return !0 === e.returnValue ? (r.clientId = e.clientId, r.state = T, n({clientId: r.clientId})) : i(C(r, e))
                        }, parameters: u
                    })
                } else I(n, {isLoaded: !0, clientId: this.clientId})
            }
        }, {
            key: "unload", value: function (e) {
                var r = this, t = e.onSuccess, n = void 0 === t ? function () {
                } : t, o = e.onFailure, i = void 0 === o ? function () {
                } : o;
                if (R(this)) {
                    var u = {clientId: this.clientId};
                    this.state = E, D({
                        method: "unload", onComplete: function (e) {
                            return !0 === e.returnValue ? (r.clientId = "", r.state = P, n()) : i(C(r, e))
                        }, parameters: u
                    })
                } else I(i, C(this, N))
            }
        }, {
            key: "getRightsError", value: function (e) {
                var r = this, t = e.onSuccess, n = void 0 === t ? function () {
                } : t, o = e.onFailure, i = void 0 === o ? function () {
                } : o;
                R(this) ? D({
                    method: "getRightsError", parameters: {clientId: this.clientId, subscribe: !0}, onComplete: function (e) {
                        if (!0 === e.returnValue) {
                            var t = y({}, e);
                            return delete t.returnValue, n(t)
                        }
                        return i(C(r, e))
                    }
                }) : I(i, C(this, N))
            }
        }, {
            key: "sendDrmMessage", value: function (e) {
                var r = this, t = e.msg, n = void 0 === t ? "" : t, o = e.onSuccess, i = void 0 === o ? function () {
                } : o, u = e.onFailure, c = void 0 === u ? function () {
                } : u;
                if (R(this)) {
                    var a = function (e) {
                        var r = "", t = "";
                        switch (e) {
                            case w.PLAYREADY:
                                r = "application/vnd.ms-playready.initiator+xml", t = "urn:dvb:casystemid:19219";
                                break;
                            case w.WIDEVINE:
                                r = "application/widevine+xml", t = "urn:dvb:casystemid:19156"
                        }
                        return {msgType: r, drmSystemId: t}
                    }(this.drmType), s = y({clientId: this.clientId, msg: n}, a);
                    D({
                        method: "sendDrmMessage", onComplete: function (e) {
                            if (!0 === e.returnValue) {
                                var t = y({}, e);
                                return delete t.returnValue, i(t)
                            }
                            return c(C(r, e))
                        }, parameters: s
                    })
                } else I(c, C(this, N))
            }
        }]) && O(r.prototype, t), n && O(r, n), Object.defineProperty(r, "prototype", {writable: !1}), e
    }(), x = {Error: S, Type: w}, V = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return "" === e ? null : new _(e)
    };

    function k(e) {
        return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function A(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r && (n = n.filter((function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
            }))), t.push.apply(t, n)
        }
        return t
    }

    function L(e, r, t) {
        return (r = function (e) {
            var r = function (e, r) {
                if ("object" !== k(e) || null === e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, r || "default");
                    if ("object" !== k(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === r ? String : Number)(e)
            }(e, "string");
            return "symbol" === k(r) ? r : String(r)
        }(r)) in e ? Object.defineProperty(e, r, {value: t, enumerable: !0, configurable: !0, writable: !0}) : e[r] = t, e
    }

    var F = function (e) {
        var r = e.service, t = e.subscribe, n = e.onSuccess, o = e.onFailure;
        (new l).send({
            service: r, method: "getStatus", parameters: {subscribe: t}, onComplete: function (e) {
                var r = function (e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? A(Object(t), !0).forEach((function (r) {
                            L(e, r, t[r])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach((function (r) {
                            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                        }))
                    }
                    return e
                }({}, e);
                if (delete r.returnValue, !0 === e.returnValue) return delete r.subscribe, void n(r);
                delete r.returnValue, o(r)
            }
        })
    }, M = {
        getStatus: function (e) {
            var r = e.onSuccess, t = void 0 === r ? function () {
            } : r, n = e.onFailure, o = void 0 === n ? function () {
            } : n, i = e.subscribe, u = void 0 !== i && i, c = "webos.service";
            navigator.userAgent.indexOf("537.41") > -1 && (c = "palm"), F({
                service: "luna://com.".concat(c, ".connectionmanager"),
                subscribe: u,
                onSuccess: t,
                onFailure: o
            })
        }
    }, U = function (e) {
        var r = e.onSuccess, t = void 0 === r ? function () {
        } : r, n = e.onFailure, o = void 0 === n ? function () {
        } : n;
        -1 !== navigator.userAgent.indexOf("Chrome") ? (new l).send({
            service: "luna://com.webos.service.sm",
            method: "deviceid/getIDs",
            parameters: {idType: ["LGUDID"]},
            onComplete: function (e) {
                if (!0 !== e.returnValue) o({errorCode: e.errorCode, errorText: e.errorText}); else {
                    var r = e.idList.filter((function (e) {
                        return "LGUDID" === e.idType
                    }))[0].idValue;
                    t({id: r})
                }
            }
        }) : setTimeout((function () {
            o({errorCode: "ERROR.000", errorText: "Not supported."})
        }), 0)
    }
}]);
