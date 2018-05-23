!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length, n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, n) {
        return he.isFunction(t) ? he.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? he.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? he.grep(e, function (e) {
            return ae.call(t, e) > -1 !== n
        }) : Ee.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function (e) {
            return ae.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function a(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function s(e) {
        var t = {};
        return he.each(e.match(je) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function u(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function c(e, t, n, r) {
        var i;
        try {
            e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function f() {
        te.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), he.ready()
    }

    function p() {
        this.expando = he.expando + p.uid++
    }

    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Pe.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Re, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
            try {
                n = d(n)
            } catch (e) {
            }
            Oe.set(e, t, n)
        } else n = void 0;
        return n
    }

    function g(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return he.css(e, t, "")
            }, u = s(), l = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            c = (he.cssNumber[t] || "px" !== l && +u) && Ie.exec(he.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                o = o || ".5", c /= o, he.style(e, t, c + l)
            } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function v(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = _e[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = he.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), _e[r] = i, i)
    }

    function m(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Fe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && $e(r) && (i[o] = v(r))) : "none" !== n && (i[o] = "none", Fe.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? he.merge([e], n) : n
    }

    function x(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"))
    }

    function b(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === he.type(o)) he.merge(p, o.nodeType ? [o] : o); else if (Ge.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (Xe.exec(o) || ["", ""])[1].toLowerCase(), u = Ve[s] || Ve._default, a.innerHTML = u[1] + he.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            he.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];) if (r && he.inArray(o, r) > -1) i && i.push(o); else if (l = he.contains(o.ownerDocument, o), a = y(f.appendChild(o), "script"), l && x(a), n) for (c = 0; o = a[c++];) Ue.test(o.type || "") && n.push(o);
        return f
    }

    function w() {
        return !0
    }

    function T() {
        return !1
    }

    function C() {
        try {
            return te.activeElement
        } catch (e) {
        }
    }

    function E(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) E(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = T; else if (!i) return e;
        return 1 === o && (a = i, i = function (e) {
            return he().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = he.guid++)), e.each(function () {
            he.event.add(this, t, i, r, n)
        })
    }

    function k(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e
    }

    function S(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function N(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function D(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Fe.hasData(e) && (o = Fe.access(e), a = Fe.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) he.event.add(t, i, l[i][n])
            }
            Oe.hasData(e) && (s = Oe.access(e), u = he.extend({}, s), Oe.set(t, u))
        }
    }

    function j(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function A(e, t, r, i) {
        t = ie.apply([], t);
        var o, a, s, u, l, c, f = 0, p = e.length, d = p - 1, h = t[0], g = he.isFunction(h);
        if (g || p > 1 && "string" == typeof h && !pe.checkClone && tt.test(h)) return e.each(function (n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), A(o, t, r, i)
        });
        if (p && (o = b(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (u = (s = he.map(y(o, "script"), S)).length; f < p; f++) l = o, f !== d && (l = he.clone(l, !0, !0), u && he.merge(s, y(l, "script"))), r.call(e[f], l, f);
            if (u) for (c = s[s.length - 1].ownerDocument, he.map(s, N), f = 0; f < u; f++) l = s[f], Ue.test(l.type || "") && !Fe.access(l, "globalEval") && he.contains(c, l) && (l.src ? he._evalUrl && he._evalUrl(l.src) : n(l.textContent.replace(rt, ""), c))
        }
        return e
    }

    function q(e, t, n) {
        for (var r, i = t ? he.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || he.cleanData(y(r)), r.parentNode && (n && he.contains(r.ownerDocument, r) && x(y(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function L(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || at(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !pe.pixelMarginRight() && ot.test(a) && it.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function H(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function F(e) {
        if (e in pt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;) if ((e = ft[n] + t) in pt) return e
    }

    function O(e) {
        var t = he.cssProps[e];
        return t || (t = he.cssProps[e] = F(e) || e), t
    }

    function P(e, t, n) {
        var r = Ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function R(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += he.css(e, n + We[o], !0, i)), r ? ("content" === n && (a -= he.css(e, "padding" + We[o], !0, i)), "margin" !== n && (a -= he.css(e, "border" + We[o] + "Width", !0, i))) : (a += he.css(e, "padding" + We[o], !0, i), "padding" !== n && (a += he.css(e, "border" + We[o] + "Width", !0, i)));
        return a
    }

    function M(e, t, n) {
        var r, i = at(e), o = L(e, t, i), a = "border-box" === he.css(e, "boxSizing", !1, i);
        return ot.test(o) ? o : (r = a && (pe.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + R(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }

    function I(e, t, n, r, i) {
        return new I.prototype.init(e, t, n, r, i)
    }

    function W() {
        ht && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setTimeout(W, he.fx.interval), he.fx.tick())
    }

    function $() {
        return e.setTimeout(function () {
            dt = void 0
        }), dt = he.now()
    }

    function B(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = We[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function _(e, t, n) {
        for (var r, i = (X.tweeners[t] || []).concat(X.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function z(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = he.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = he.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function X(e, t, n) {
        var r, i, o = 0, a = X.prefilters.length, s = he.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) return !1;
            for (var t = dt || $(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: he.extend({}, t),
            opts: he.extend(!0, {specialEasing: {}, easing: he.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: dt || $(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = he.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (z(c, l.opts.specialEasing); o < a; o++) if (r = X.prefilters[o].call(l, e, c, l.opts)) return he.isFunction(r.stop) && (he._queueHooks(l.elem, l.opts.queue).stop = he.proxy(r.stop, r)), r;
        return he.map(c, _, l), he.isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), he.fx.timer(he.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    function U(e) {
        return (e.match(je) || []).join(" ")
    }

    function V(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function G(e, t, n, r) {
        var i;
        if (Array.isArray(t)) he.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : G(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== he.type(t)) r(e, t); else for (i in t) G(e + "[" + i + "]", t[i], n, r)
    }

    function Y(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(je) || [];
            if (he.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Q(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, he.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }

        var o = {}, a = e === Mt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function J(e, t) {
        var n, r, i = he.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && he.extend(!0, e, r), e
    }

    function K(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Z(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break
            }
            if (!0 !== a) if (a && e.throws) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    var ee = [], te = e.document, ne = Object.getPrototypeOf, re = ee.slice, ie = ee.concat, oe = ee.push,
        ae = ee.indexOf, se = {}, ue = se.toString, le = se.hasOwnProperty, ce = le.toString, fe = ce.call(Object),
        pe = {}, de = "3.2.1", he = function (e, t) {
            return new he.fn.init(e, t)
        }, ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ve = /^-ms-/, me = /-([a-z])/g, ye = function (e, t) {
            return t.toUpperCase()
        };
    he.fn = he.prototype = {
        jquery: de, constructor: he, length: 0, toArray: function () {
            return re.call(this)
        }, get: function (e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return he.each(this, e)
        }, map: function (e) {
            return this.pushStack(he.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(re.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: oe, sort: ee.sort, splice: ee.splice
    }, he.extend = he.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], r = e[t], a !== r && (l && r && (he.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {}, a[t] = he.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, he.extend({
        expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === he.type(e)
        }, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== ue.call(e) || (t = ne(e)) && ("function" != typeof(n = le.call(t, "constructor") && t.constructor) || ce.call(n) !== fe))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[ue.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            n(e)
        }, camelCase: function (e) {
            return e.replace(ve, "ms-").replace(me, ye)
        }, each: function (e, t) {
            var n, i = 0;
            if (r(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(ge, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : ae.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        }, map: function (e, t, n) {
            var i, o, a = 0, s = [];
            if (r(e)) for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && s.push(o); else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
            return ie.apply([], s)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return r = re.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(re.call(arguments)))
            }, i.guid = e.guid = e.guid || he.guid++, i
        }, now: Date.now, support: pe
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        se["[object " + t + "]"] = t.toLowerCase()
    });
    var xe = function (e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, c, p, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : I) !== q && A(t), t = t || q, H)) {
                if (11 !== h && (u = ge.exec(e))) if (i = u[1]) {
                    if (9 === h) {
                        if (!(a = t.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n
                    } else if (d && (a = d.getElementById(i)) && R(t, a) && a.id === i) return n.push(a), n
                } else {
                    if (u[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
                }
                if (b.qsa && !z[e + " "] && (!F || !F.test(e))) {
                    if (1 !== h) d = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, be) : t.setAttribute("id", s = M), o = (c = E(e)).length; o--;) c[o] = "#" + s + " " + f(c[o]);
                        p = c.join(","), d = ve.test(e) && l(t.parentNode) || t
                    }
                    if (p) try {
                        return Q.apply(n, d.querySelectorAll(p)), n
                    } catch (e) {
                    } finally {
                        s === M && t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(oe, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[M] = !0, e
        }

        function i(e) {
            var t = q.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function u(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {
        }

        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = $++;
            return t.first ? function (t, n, i) {
                for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [W, s];
                if (u) {
                    for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else for (; t = t[r];) if (1 === t.nodeType || a) if (f = t[M] || (t[M] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                    if ((l = c[o]) && l[0] === W && l[1] === s) return p[2] = l[2];
                    if (c[o] = p, p[2] = e(t, n, u)) return !0
                }
                return !1
            }
        }

        function d(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function h(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function v(e, t, n, i, o, a) {
            return i && !i[M] && (i = v(i)), o && !o[M] && (o = v(o, a)), r(function (r, a, s, u) {
                var l, c, f, p = [], d = [], v = a.length, m = r || h(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? m : g(m, p, e, s, u), x = n ? o || (r ? e : v || i) ? [] : a : y;
                if (n && n(y, x, s, u), i) for (l = g(x, d), i(l, [], s, u), c = l.length; c--;) (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;) (f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;) (f = x[c]) && (l = o ? K(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else x = g(x === a ? x.splice(v, x.length) : x), o ? o(null, a, x, u) : Q.apply(a, x)
            })
        }

        function m(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = p(function (e) {
                return e === t
            }, a, !0), l = p(function (e) {
                return K(t, e) > -1
            }, a, !0), c = [function (e, n, r) {
                var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null, i
            }]; s < i; s++) if (n = w.relative[e[s].type]) c = [p(d(c), n)]; else {
                if ((n = w.filter[e[s].type].apply(null, e[s].matches))[M]) {
                    for (r = ++s; r < i && !w.relative[e[r].type]; r++) ;
                    return v(s > 1 && d(c), s > 1 && f(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(oe, "$1"), n, s < r && m(e.slice(s, r)), r < i && m(e = e.slice(r)), r < i && f(e))
                }
                c.push(n)
            }
            return d(c)
        }

        function y(e, n) {
            var i = n.length > 0, o = e.length > 0, a = function (r, a, s, u, l) {
                var c, f, p, d = 0, h = "0", v = r && [], m = [], y = N, x = r || o && w.find.TAG("*", l),
                    b = W += null == y ? 1 : Math.random() || .1, T = x.length;
                for (l && (N = a === q || a || l); h !== T && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0, a || c.ownerDocument === q || (A(c), s = !H); p = e[f++];) if (p(c, a || q, s)) {
                            u.push(c);
                            break
                        }
                        l && (W = b)
                    }
                    i && ((c = !p && c) && d--, r && v.push(c))
                }
                if (d += h, i && h !== d) {
                    for (f = 0; p = n[f++];) p(v, m, a, s);
                    if (r) {
                        if (d > 0) for (; h--;) v[h] || m[h] || (m[h] = G.call(u));
                        m = g(m)
                    }
                    Q.apply(u, m), l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (W = b, N = y), v
            };
            return i ? r(a) : a
        }

        var x, b, w, T, C, E, k, S, N, D, j, A, q, L, H, F, O, P, R, M = "sizzle" + 1 * new Date, I = e.document, W = 0,
            $ = 0, B = n(), _ = n(), z = n(), X = function (e, t) {
                return e === t && (j = !0), 0
            }, U = {}.hasOwnProperty, V = [], G = V.pop, Y = V.push, Q = V.push, J = V.slice, K = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), le = new RegExp(re),
            ce = new RegExp("^" + te + "$"), fe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            }, pe = /^(?:input|select|textarea|button)$/i, de = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/,
            me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, be = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, we = function () {
                A()
            }, Te = p(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            Q.apply(V = J.call(I.childNodes), I.childNodes), V[I.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: V.length ? function (e, t) {
                    Y.apply(e, J.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, A = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : I;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, L = q.documentElement, H = !C(q), I !== q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), b.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = i(function (e) {
                return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = he.test(q.getElementsByClassName), b.getById = i(function (e) {
                return L.appendChild(e).id = M, !q.getElementsByName || !q.getElementsByName(M).length
            }), b.getById ? (w.filter.ID = function (e) {
                var t = e.replace(me, ye);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (w.filter.ID = function (e) {
                var t = e.replace(me, ye);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), w.find.TAG = b.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, w.find.CLASS = b.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && H) return t.getElementsByClassName(e)
            }, O = [], F = [], (b.qsa = he.test(q.querySelectorAll)) && (i(function (e) {
                L.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + M + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || F.push(".#.+[+~]")
            }), i(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = q.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (b.matchesSelector = he.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function (e) {
                b.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), O.push("!=", re)
            }), F = F.length && new RegExp(F.join("|")), O = O.length && new RegExp(O.join("|")), t = he.test(L.compareDocumentPosition), R = t || he.test(L.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, X = t ? function (e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === I && R(I, e) ? -1 : t === q || t.ownerDocument === I && R(I, t) ? 1 : D ? K(D, e) - K(D, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return j = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
                if (!i || !o) return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : D ? K(D, e) - K(D, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? a(s[r], u[r]) : s[r] === I ? -1 : u[r] === I ? 1 : 0
            }, q) : q
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== q && A(e), n = n.replace(ue, "='$1']"), b.matchesSelector && H && !z[n + " "] && (!O || !O.test(n)) && (!F || !F.test(n))) try {
                var r = P.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {
            }
            return t(n, q, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== q && A(e), R(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== q && A(e);
            var n = w.attrHandle[t.toLowerCase()],
                r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : b.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function (e) {
            return (e + "").replace(xe, be)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (j = !b.detectDuplicates, D = !b.sortStable && e.slice(0), e.sort(X), j) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, T = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += T(t);
            return n
        }, (w = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(me, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(me, ye).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode,
                            m = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];) if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                for (x = (d = (l = (c = (f = (p = v)[M] || (p[M] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === W && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) if (1 === p.nodeType && ++x && p === t) {
                                    c[e] = [W, d, x];
                                    break
                                }
                            } else if (y && (p = t, f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === W && l[1], x = d), !1 === x) for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && (f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [W, x]), p !== t));) ;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = K(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = k(e.replace(oe, "$1"));
                    return i[M] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return e = e.replace(me, ye), function (t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(me, ye).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === L
                }, focus: function (e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: s(!1), disabled: s(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !w.pseudos.empty(e)
                }, header: function (e) {
                    return de.test(e.nodeName)
                }, input: function (e) {
                    return pe.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: u(function () {
                    return [0]
                }), last: u(function (e, t) {
                    return [t - 1]
                }), eq: u(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: u(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: u(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: u(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: u(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) w.pseudos[x] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(x);
        for (x in{submit: !0, reset: !0}) w.pseudos[x] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(x);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c, E = t.tokenize = function (e, n) {
            var r, i, o, a, s, u, l, c = _[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = w.preFilter; s;) {
                r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), s = s.slice(r.length));
                for (a in w.filter) !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : _(e, u).slice(0)
        }, k = t.compile = function (e, t) {
            var n, r = [], i = [], o = z[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) (o = m(t[n]))[M] ? r.push(o) : i.push(o);
                (o = z(e, y(i, r))).selector = e
            }
            return o
        }, S = t.select = function (e, t, n, r) {
            var i, o, a, s, u, c = "function" == typeof e && e, p = !r && E(e = c.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((o = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && H && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(me, ye), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);) if ((u = w.find[s]) && (r = u(a.matches[0].replace(me, ye), ve.test(o[0].type) && l(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && f(o))) return Q.apply(n, r), n;
                    break
                }
            }
            return (c || k(e, p))(r, t, !H, n, !t || ve.test(e) && l(t.parentNode) || t), n
        }, b.sortStable = M.split("").sort(X).join("") === M, b.detectDuplicates = !!j, A(), b.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(q.createElement("fieldset"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    he.find = xe, he.expr = xe.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = xe.uniqueSort, he.text = xe.getText, he.isXMLDoc = xe.isXML, he.contains = xe.contains, he.escapeSelector = xe.escape;
    var be = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && he(e).is(n)) break;
                r.push(e)
            }
            return r
        }, we = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, Te = he.expr.match.needsContext, Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ee = /^.[^:#\[\.,]*$/;
    he.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? he.find.matchesSelector(r, e) ? [r] : [] : he.find.matches(e, he.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, he.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function () {
                for (t = 0; t < r; t++) if (he.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) he.find(e, i[t], n);
            return r > 1 ? he.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(o(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(o(this, e || [], !0))
        }, is: function (e) {
            return !!o(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
        }
    });
    var ke, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || ke, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(r[1]) && he.isPlainObject(t)) for (r in t) he.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = te.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
    }).prototype = he.fn, ke = he(te);
    var Ne = /^(?:parents|prev(?:Until|All))/, De = {children: !0, contents: !0, next: !0, prev: !0};
    he.fn.extend({
        has: function (e) {
            var t = he(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (he.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && he(e);
            if (!Te.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), he.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return be(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return be(e, "parentNode", n)
        }, next: function (e) {
            return a(e, "nextSibling")
        }, prev: function (e) {
            return a(e, "previousSibling")
        }, nextAll: function (e) {
            return be(e, "nextSibling")
        }, prevAll: function (e) {
            return be(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return be(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return be(e, "previousSibling", n)
        }, siblings: function (e) {
            return we((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return we(e.firstChild)
        }, contents: function (e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), he.merge([], e.childNodes))
        }
    }, function (e, t) {
        he.fn[e] = function (n, r) {
            var i = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = he.filter(r, i)), this.length > 1 && (De[e] || he.uniqueSort(i), Ne.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var je = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function (e) {
        e = "string" == typeof e ? s(e) : he.extend({}, e);
        var t, n, r, i, o = [], a = [], u = -1, l = function () {
            for (i = i || e.once, r = t = !0; a.length; u = -1) for (n = a.shift(); ++u < o.length;) !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, n = !1);
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        }, c = {
            add: function () {
                return o && (n && !t && (u = o.length - 1, a.push(n)), function t(n) {
                    he.each(n, function (n, r) {
                        he.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== he.type(r) && t(r)
                    })
                }(arguments), n && !t && l()), this
            }, remove: function () {
                return he.each(arguments, function (e, t) {
                    for (var n; (n = he.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u--
                }), this
            }, has: function (e) {
                return e ? he.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = a = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = a = [], n || t || (o = n = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, n) {
                return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return c
    }, he.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2], ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]],
                r = "pending", i = {
                    state: function () {
                        return r
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return i.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return he.Deferred(function (t) {
                            he.each(n, function (n, r) {
                                var i = he.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, r, i) {
                        function o(t, n, r, i) {
                            return function () {
                                var s = this, c = arguments, f = function () {
                                    var e, f;
                                    if (!(t < a)) {
                                        if ((e = r.apply(s, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        f = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(f) ? i ? f.call(e, o(a, n, u, i), o(a, n, l, i)) : (a++, f.call(e, o(a, n, u, i), o(a, n, l, i), o(a, n, u, n.notifyWith))) : (r !== u && (s = void 0, c = [e]), (i || n.resolveWith)(s, c))
                                    }
                                }, p = i ? f : function () {
                                    try {
                                        f()
                                    } catch (e) {
                                        he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (r !== l && (s = void 0, c = [e]), n.rejectWith(s, c))
                                    }
                                };
                                t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }

                        var a = 0;
                        return he.Deferred(function (e) {
                            n[0][3].add(o(0, e, he.isFunction(i) ? i : u, e.notifyWith)), n[1][3].add(o(0, e, he.isFunction(t) ? t : u)), n[2][3].add(o(0, e, he.isFunction(r) ? r : l))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? he.extend(e, i) : i
                    }
                }, o = {};
            return he.each(n, function (e, t) {
                var a = t[2], s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, r = Array(n), i = re.call(arguments), o = he.Deferred(), a = function (e) {
                return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(r, i)
                }
            };
            if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || he.isFunction(i[n] && i[n].then))) return o.then();
            for (; n--;) c(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, he.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var qe = he.Deferred();
    he.fn.ready = function (e) {
        return qe.then(e).catch(function (e) {
            he.readyException(e)
        }), this
    }, he.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || qe.resolveWith(te, [he]))
        }
    }), he.ready.then = qe.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
    var Le = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === he.type(n)) {
            i = !0;
            for (s in n) Le(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, he.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                return l.call(he(e), n)
            })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, He = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    p.uid = 1, p.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, He(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[he.camelCase(t)] = n; else for (r in t) i[he.camelCase(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in r ? [t] : t.match(je) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }
                (void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t)
        }
    };
    var Fe = new p, Oe = new p, Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Re = /[A-Z]/g;
    he.extend({
        hasData: function (e) {
            return Oe.hasData(e) || Fe.hasData(e)
        }, data: function (e, t, n) {
            return Oe.access(e, t, n)
        }, removeData: function (e, t) {
            Oe.remove(e, t)
        }, _data: function (e, t, n) {
            return Fe.access(e, t, n)
        }, _removeData: function (e, t) {
            Fe.remove(e, t)
        }
    }), he.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Oe.get(o), 1 === o.nodeType && !Fe.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = he.camelCase(r.slice(5)), h(o, r, i[r]));
                    Fe.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                Oe.set(this, e)
            }) : Le(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Oe.get(o, e))) return n;
                    if (void 0 !== (n = h(o, e))) return n
                } else this.each(function () {
                    Oe.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Oe.remove(this, e)
            })
        }
    }), he.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Fe.get(e, t), n && (!r || Array.isArray(n) ? r = Fe.access(e, t, he.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = he.queue(e, t), r = n.length, i = n.shift(), o = he._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                he.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Fe.get(e, n) || Fe.access(e, n, {
                empty: he.Callbacks("once memory").add(function () {
                    Fe.remove(e, [t + "queue", n])
                })
            })
        }
    }), he.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                he.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = he.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = Fe.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ie = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"),
        We = ["Top", "Right", "Bottom", "Left"], $e = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
        }, Be = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }, _e = {};
    he.fn.extend({
        show: function () {
            return m(this, !0)
        }, hide: function () {
            return m(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                $e(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var ze = /^(?:checkbox|radio)$/i, Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Ue = /^$|\/(?:java|ecma)script/i, Ve = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var Ge = /<|&#?\w+;/;
    !function () {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")), t = te.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), pe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = te.documentElement, Qe = /^key/, Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ke = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {}, add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Fe.get(e);
            if (v) for (n.handler && (o = n, n = o.handler, i = o.selector), i && he.find.matchesSelector(Ye, i), n.guid || (n.guid = he.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
                return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
            }), l = (t = (t || "").match(je) || [""]).length; l--;) s = Ke.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = he.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = he.event.special[d] || {}, c = he.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && he.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), he.event.global[d] = !0)
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Fe.hasData(e) && Fe.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(je) || [""]).length; l--;) if (s = Ke.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = he.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || he.removeEvent(e, d, v.handle), delete u[d])
                } else for (d in u) he.event.remove(e, d + t[l], n, r, !0);
                he.isEmptyObject(u) && Fe.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, i, o, a, s = he.event.fix(e), u = new Array(arguments.length),
                l = (Fe.get(this, "events") || {})[s.type] || [], c = he.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = he.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((he.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? he(i, this).index(l) > -1 : he.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[he.expando] ? e : new he.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== C() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === C() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && i(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return i(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, he.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, he.Event = function (e, t) {
        return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        he.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || he.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), he.fn.extend({
        on: function (e, t, n, r) {
            return E(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return E(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = T), this.each(function () {
                he.event.remove(this, e, n, t)
            })
        }
    });
    var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        et = /<script|<style|<link/i, tt = /checked\s*(?:[^=]|=\s*.checked.)/i, nt = /^true\/(.*)/,
        rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ze, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = he.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e))) for (a = y(s), o = y(e), r = 0, i = o.length; r < i; r++) j(o[r], a[r]);
            if (t) if (n) for (o = o || y(e), a = a || y(s), r = 0, i = o.length; r < i; r++) D(o[r], a[r]); else D(e, s);
            return (a = y(s, "script")).length > 0 && x(a, !u && y(e, "script")), s
        }, cleanData: function (e) {
            for (var t, n, r, i = he.event.special, o = 0; void 0 !== (n = e[o]); o++) if (He(n)) {
                if (t = n[Fe.expando]) {
                    if (t.events) for (r in t.events) i[r] ? he.event.remove(n, r) : he.removeEvent(n, r, t.handle);
                    n[Fe.expando] = void 0
                }
                n[Oe.expando] && (n[Oe.expando] = void 0)
            }
        }
    }), he.fn.extend({
        detach: function (e) {
            return q(this, e, !0)
        }, remove: function (e) {
            return q(this, e)
        }, text: function (e) {
            return Le(this, function (e) {
                return void 0 === e ? he.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return A(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e)
            })
        }, prepend: function () {
            return A(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return A(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return A(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return he.clone(this, e, t)
            })
        }, html: function (e) {
            return Le(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !Ve[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return A(this, arguments, function (t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        he.fn[e] = function (e) {
            for (var n, r = [], i = he(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), he(i[a])[t](n), oe.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var it = /^margin/, ot = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"), at = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    };
    !function () {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ye.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Ye.removeChild(a), s = null
            }
        }

        var n, r, i, o, a = te.createElement("div"), s = te.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), he.extend(pe, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return t(), r
            }, pixelMarginRight: function () {
                return t(), i
            }, reliableMarginLeft: function () {
                return t(), o
            }
        }))
    }();
    var st = /^(none|table(?!-c[ea]).+)/, ut = /^--/,
        lt = {position: "absolute", visibility: "hidden", display: "block"},
        ct = {letterSpacing: "0", fontWeight: "400"}, ft = ["Webkit", "Moz", "ms"], pt = te.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = L(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = he.camelCase(t), u = ut.test(t), l = e.style;
                return u || (t = O(s)), a = he.cssHooks[t] || he.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : ("string" === (o = typeof n) && (i = Ie.exec(n)) && i[1] && (n = g(e, t, i), o = "number"), void(null != n && n === n && ("number" === o && (n += i && i[3] || (he.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = he.camelCase(t);
            return ut.test(t) || (t = O(s)), (a = he.cssHooks[t] || he.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = L(e, t, r)), "normal" === i && t in ct && (i = ct[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), he.each(["height", "width"], function (e, t) {
        he.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !st.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? M(e, t, r) : Be(e, lt, function () {
                    return M(e, t, r)
                })
            }, set: function (e, n, r) {
                var i, o = r && at(e), a = r && R(e, t, r, "border-box" === he.css(e, "boxSizing", !1, o), o);
                return a && (i = Ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = he.css(e, t)), P(0, n, a)
            }
        }
    }), he.cssHooks.marginLeft = H(pe.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), he.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        he.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + We[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, it.test(e) || (he.cssHooks[e + t].set = P)
    }), he.fn.extend({
        css: function (e, t) {
            return Le(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = at(e), i = t.length; a < i; a++) o[t[a]] = he.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), he.Tween = I, I.prototype = {
        constructor: I, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (he.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = I.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, he.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, he.fx = I.prototype.init, he.fx.step = {};
    var dt, ht, gt = /^(?:toggle|show|hide)$/, vt = /queueHooks$/;
    he.Animation = he.extend(X, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return g(n.elem, e, Ie.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(je);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], X.tweeners[n] = X.tweeners[n] || [], X.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
                g = e.nodeType && $e(e), v = Fe.get(e, "fxshow");
            n.queue || (null == (a = he._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, he.queue(e, "fx").length || a.empty.fire()
                })
            }));
            for (r in t) if (i = t[r], gt.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    g = !0
                }
                d[r] = v && v[r] || he.style(e, r)
            }
            if ((u = !he.isEmptyObject(t)) || !he.isEmptyObject(d)) {
                f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Fe.get(e, "display")), "none" === (c = he.css(e, "display")) && (l ? c = l : (m([e], !0), l = e.style.display || l, c = he.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === he.css(e, "float") && (u || (p.done(function () {
                    h.display = l
                }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), u = !1;
                for (r in d) u || (v ? "hidden" in v && (g = v.hidden) : v = Fe.access(e, "fxshow", {display: l}), o && (v.hidden = !g), g && m([e], !0), p.done(function () {
                    g || m([e]), Fe.remove(e, "fxshow");
                    for (r in d) he.style(e, r, d[r])
                })), u = _(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
            }
        }], prefilter: function (e, t) {
            t ? X.prefilters.unshift(e) : X.prefilters.push(e)
        }
    }), he.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? he.extend({}, e) : {
            complete: n || !n && t || he.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !he.isFunction(t) && t
        };
        return he.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in he.fx.speeds ? r.duration = he.fx.speeds[r.duration] : r.duration = he.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            he.isFunction(r.old) && r.old.call(this), r.queue && he.dequeue(this, r.queue)
        }, r
    }, he.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter($e).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = he.isEmptyObject(e), o = he.speed(t, n, r), a = function () {
                var t = X(this, he.extend({}, e), o);
                (i || Fe.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = he.timers, a = Fe.get(this);
                if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && vt.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || he.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = Fe.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = he.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, he.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), he.each(["toggle", "show", "hide"], function (e, t) {
        var n = he.fn[t];
        he.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, r, i)
        }
    }), he.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        he.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), he.timers = [], he.fx.tick = function () {
        var e, t = 0, n = he.timers;
        for (dt = he.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || he.fx.stop(), dt = void 0
    }, he.fx.timer = function (e) {
        he.timers.push(e), he.fx.start()
    }, he.fx.interval = 13, he.fx.start = function () {
        ht || (ht = !0, W())
    }, he.fx.stop = function () {
        ht = null
    }, he.fx.speeds = {slow: 600, fast: 200, _default: 400}, he.fn.delay = function (t, n) {
        return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    }, function () {
        var e = te.createElement("input"), t = te.createElement("select").appendChild(te.createElement("option"));
        e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", pe.radioValue = "t" === e.value
    }();
    var mt, yt = he.expr.attrHandle;
    he.fn.extend({
        attr: function (e, t) {
            return Le(this, he.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                he.removeAttr(this, e)
            })
        }
    }), he.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = he.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!pe.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(je);
            if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
        }
    }), mt = {
        set: function (e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = yt[t] || he.find.attr;
        yt[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = yt[a], yt[a] = i, i = null != n(e, t, r) ? a : null, yt[a] = o), i
        }
    });
    var xt = /^(?:input|select|textarea|button)$/i, bt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function (e, t) {
            return Le(this, he.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[he.propFix[e] || e]
            })
        }
    }), he.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, i = he.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : xt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), pe.optSelected || (he.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        he.propFix[this.toLowerCase()] = this
    }), he.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (he.isFunction(e)) return this.each(function (t) {
                he(this).addClass(e.call(this, t, V(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(je) || []; n = this[u++];) if (i = V(n), r = 1 === n.nodeType && " " + U(i) + " ") {
                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = U(r)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (he.isFunction(e)) return this.each(function (t) {
                he(this).removeClass(e.call(this, t, V(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(je) || []; n = this[u++];) if (i = V(n), r = 1 === n.nodeType && " " + U(i) + " ") {
                for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                i !== (s = U(r)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function (n) {
                he(this).toggleClass(e.call(this, n, V(this), t), t)
            }) : this.each(function () {
                var t, r, i, o;
                if ("string" === n) for (r = 0, i = he(this), o = e.match(je) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || ((t = V(this)) && Fe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Fe.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + U(V(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    he.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = he.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, he(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = he.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = he.valHooks[i.type] || he.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : U(he.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, o = e.options, a = e.selectedIndex, s = "select-one" === e.type, u = s ? null : [],
                        l = s ? a + 1 : o.length;
                    for (r = a < 0 ? l : s ? a : 0; r < l; r++) if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                        if (t = he(n).val(), s) return t;
                        u.push(t)
                    }
                    return u
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = he.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = he.inArray(he.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), he.each(["radio", "checkbox"], function () {
        he.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
            }
        }, pe.checkOn || (he.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tt = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function (t, n, r, i) {
            var o, a, s, u, l, c, f, p = [r || te], d = le.call(t, "type") ? t.type : t,
                h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || te, 3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(d + he.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[he.expando] ? t : new he.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : he.makeArray(n, [t]), f = he.event.special[d] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !he.isWindow(r)) {
                    for (u = f.delegateType || d, Tt.test(u + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (r.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, (c = (Fe.get(a, "events") || {})[t.type] && Fe.get(a, "handle")) && c.apply(a, n), (c = l && a[l]) && c.apply && He(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !He(r) || l && he.isFunction(r[d]) && !he.isWindow(r) && ((s = r[l]) && (r[l] = null), he.event.triggered = d, r[d](), he.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        }, simulate: function (e, t, n) {
            var r = he.extend(new he.Event, n, {type: e, isSimulated: !0});
            he.event.trigger(r, null, t)
        }
    }), he.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                he.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0)
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        he.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), he.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || he.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = Fe.access(r, t);
                i || r.addEventListener(e, n, !0), Fe.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = Fe.access(r, t) - 1;
                i ? Fe.access(r, t, i) : (r.removeEventListener(e, n, !0), Fe.remove(r, t))
            }
        }
    });
    var Ct = e.location, Et = he.now(), kt = /\?/;
    he.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/, Nt = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    he.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = he.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) G(n, e[n], t, i);
        return r.join("&")
    }, he.fn.extend({
        serialize: function () {
            return he.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !ze.test(e))
            }).map(function (e, t) {
                var n = he(this).val();
                return null == n ? null : Array.isArray(n) ? he.map(n, function (e) {
                    return {name: t.name, value: e.replace(Nt, "\r\n")}
                }) : {name: t.name, value: n.replace(Nt, "\r\n")}
            }).get()
        }
    });
    var At = /%20/g, qt = /#.*$/, Lt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ot = /^(?:GET|HEAD)$/, Pt = /^\/\//, Rt = {},
        Mt = {}, It = "*/".concat("*"), Wt = te.createElement("a");
    Wt.href = Ct.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Ft.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": he.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? J(J(e, he.ajaxSettings), t) : J(he.ajaxSettings, e)
        },
        ajaxPrefilter: Y(Rt),
        ajaxTransport: Y(Mt),
        ajax: function (t, n) {
            function r(t, n, r, s) {
                var l, p, d, b, w, T = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = K(h, C, r)), b = Z(h, b, C, l), l ? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (he.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (he.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, d = b.error, l = !d)) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? m.resolveWith(g, [p, T, C]) : m.rejectWith(g, [C, T, d]), C.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]), y.fireWith(g, [C, T]), f && (v.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = he.ajaxSetup({}, n), g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? he(g) : he.event, m = he.Deferred(),
                y = he.Callbacks("once memory"), x = h.statusCode || {}, b = {}, w = {}, T = "canceled", C = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) for (s = {}; t = Ht.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return c ? a : null
                    }, setRequestHeader: function (e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (c) C.always(e[C.status]); else for (t in e) x[t] = [x[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || T;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (m.promise(C), h.url = ((t || h.url || Ct.href) + "").replace(Pt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(je) || [""], null == h.crossDomain) {
                l = te.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), Q(Rt, h, n, C), c) return C;
            (f = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ot.test(h.type), o = h.url.replace(qt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (d = h.url.slice(o.length), h.data && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Lt, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (he.lastModified[o] && C.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && C.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
            if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = Q(Mt, h, n, C)) {
                if (C.readyState = 1, f && v.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, r)
                } catch (e) {
                    if (c) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return C
        },
        getJSON: function (e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return he.get(e, void 0, t, "script")
        }
    }), he.each(["get", "post"], function (e, t) {
        he[t] = function (e, n, r, i) {
            return he.isFunction(n) && (i = i || r, r = n, n = void 0), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function (e) {
        return he.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, he.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return he.isFunction(e) ? this.each(function (t) {
                he(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = he(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = he.isFunction(e);
            return this.each(function (n) {
                he(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                he(this).replaceWith(this.childNodes)
            }), this
        }
    }), he.expr.pseudos.hidden = function (e) {
        return !he.expr.pseudos.visible(e)
    }, he.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, he.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var $t = {0: 200, 1223: 204}, Bt = he.ajaxSettings.xhr();
    pe.cors = !!Bt && "withCredentials" in Bt, pe.ajax = Bt = !!Bt, he.ajaxTransport(function (t) {
        var n, r;
        if (pe.cors || Bt && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }), he.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), he.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return he.globalEval(e), e
            }
        }
    }), he.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), he.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = he("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), te.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var _t = [], zt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = _t.pop() || he.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a,
            s = !1 !== t.jsonp && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(zt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || he.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? he(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, _t.push(i)), a && he.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), pe.createHTMLDocument = function () {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), he.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = te.location.href, t.head.appendChild(r)) : t = te), i = Ce.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = b([e], t, o), o && o.length && he(o).remove(), he.merge([], i.childNodes))
    }, he.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = U(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && he.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        he.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), he.expr.pseudos.animated = function (e) {
        return he.grep(he.timers, function (t) {
            return e === t.elem
        }).length
    }, he.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = he.css(e, "position"), c = he(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = he.css(e, "top"), u = he.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (r = c.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, he.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                he.offset.setOffset(this, e, t)
            });
            var t, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0, left: 0};
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + he.css(e[0], "borderTopWidth", !0),
                    left: r.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - he.css(n, "marginTop", !0),
                    left: t.left - r.left - he.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || Ye
            })
        }
    }), he.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function (r) {
            return Le(this, function (e, r, i) {
                var o;
                return he.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), he.each(["top", "left"], function (e, t) {
        he.cssHooks[t] = H(pe.pixelPosition, function (e, n) {
            if (n) return n = L(e, t), ot.test(n) ? he(e).position()[t] + "px" : n
        })
    }), he.each({Height: "height", Width: "width"}, function (e, t) {
        he.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            he.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return Le(this, function (t, n, i) {
                    var o;
                    return he.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? he.css(t, n, s) : he.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), he.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), he.holdReady = function (e) {
        e ? he.readyWait++ : he.ready(!0)
    }, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function () {
        return he
    });
    var Xt = e.jQuery, Ut = e.$;
    return he.noConflict = function (t) {
        return e.$ === he && (e.$ = Ut), t && e.jQuery === he && (e.jQuery = Xt), he
    }, t || (e.jQuery = e.$ = he), he
});
void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function (e, t) {
    "use strict";

    function r(r) {
        var n = t.console;
        i[r] || (i[r] = !0, e.migrateWarnings.push(r), n && n.warn && !e.migrateMute && (n.warn("JQMIGRATE: " + r), e.migrateTrace && n.trace && n.trace()))
    }

    function n(e, t, n, i) {
        Object.defineProperty(e, t, {
            configurable: !0, enumerable: !0, get: function () {
                return r(i), n
            }
        })
    }

    e.migrateVersion = "3.0.0", function () {
        var r = t.console && t.console.log && function () {
            t.console.log.apply(t.console, arguments)
        }, n = /^[12]\./;
        r && (e && !n.test(e.fn.jquery) || r("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), e.migrateWarnings && r("JQMIGRATE: Migrate plugin loaded multiple times"), r("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion))
    }();
    var i = {};
    e.migrateWarnings = [], void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function () {
        i = {}, e.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var a = e.fn.init, s = e.isNumeric, o = e.find, u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        c = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    e.fn.init = function (e) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof e && "#" === e && (r("jQuery( '#' ) is not a valid selector"), t[0] = []), a.apply(this, t)
    }, e.fn.init.prototype = e.fn, e.find = function (e) {
        var t = Array.prototype.slice.call(arguments);
        if ("string" == typeof e && u.test(e)) try {
            document.querySelector(e)
        } catch (n) {
            e = e.replace(c, function (e, t, r, n) {
                return "[" + t + r + '"' + n + '"]'
            });
            try {
                document.querySelector(e), r("Attribute selector with '#' must be quoted: " + t[0]), t[0] = e
            } catch (e) {
                r("Attribute selector with '#' was not fixed: " + t[0])
            }
        }
        return o.apply(this, t)
    };
    var l;
    for (l in o) Object.prototype.hasOwnProperty.call(o, l) && (e.find[l] = o[l]);
    e.fn.size = function () {
        return r("jQuery.fn.size() is deprecated; use the .length property"), this.length
    }, e.parseJSON = function () {
        return r("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments)
    }, e.isNumeric = function (t) {
        var n = s(t), i = function (t) {
            var r = t && t.toString();
            return !e.isArray(t) && r - parseFloat(r) + 1 >= 0
        }(t);
        return n !== i && r("jQuery.isNumeric() should not be called on constructed objects"), i
    }, n(e, "unique", e.uniqueSort, "jQuery.unique is deprecated, use jQuery.uniqueSort"), n(e.expr, "filters", e.expr.pseudos, "jQuery.expr.filters is now jQuery.expr.pseudos"), n(e.expr, ":", e.expr.pseudos, 'jQuery.expr[":"] is now jQuery.expr.pseudos');
    var p = e.ajax;
    e.ajax = function () {
        var e = p.apply(this, arguments);
        return e.promise && (n(e, "success", e.done, "jQXHR.success is deprecated and removed"), n(e, "error", e.fail, "jQXHR.error is deprecated and removed"), n(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
    };
    var d = e.fn.removeAttr, f = e.fn.toggleClass, y = /\S+/g;
    e.fn.removeAttr = function (t) {
        var n = this;
        return e.each(t.match(y), function (t, i) {
            e.expr.match.bool.test(i) && (r("jQuery.fn.removeAttr no longer sets boolean properties: " + i), n.prop(i, !1))
        }), d.apply(this, arguments)
    }, e.fn.toggleClass = function (t) {
        return void 0 !== t && "boolean" != typeof t ? f.apply(this, arguments) : (r("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
            var r = this.getAttribute && this.getAttribute("class") || "";
            r && e.data(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : e.data(this, "__className__") || "")
        }))
    };
    var g = !1;
    e.swap && e.each(["height", "width", "reliableMarginRight"], function (t, r) {
        var n = e.cssHooks[r] && e.cssHooks[r].get;
        n && (e.cssHooks[r].get = function () {
            var e;
            return g = !0, e = n.apply(this, arguments), g = !1, e
        })
    }), e.swap = function (e, t, n, i) {
        var a, s, o = {};
        g || r("jQuery.swap() is undocumented and deprecated");
        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
        a = n.apply(e, i || []);
        for (s in t) e.style[s] = o[s];
        return a
    };
    var h = e.data;
    e.data = function (t, n, i) {
        var a;
        return n && n !== e.camelCase(n) && (a = e.hasData(t) && h.call(this, t)) && n in a ? (r("jQuery.data() always sets/gets camelCased names: " + n), arguments.length > 2 && (a[n] = i), a[n]) : h.apply(this, arguments)
    };
    var m = e.Tween.prototype.run;
    e.Tween.prototype.run = function (t) {
        e.easing[this.easing].length > 1 && (r('easing function "jQuery.easing.' + this.easing.toString() + '" should use only first argument'), e.easing[this.easing] = e.easing[this.easing].bind(e.easing, t, this.options.duration * t, 0, 1, this.options.duration)), m.apply(this, arguments)
    };
    var v = e.fn.load, j = e.event.fix;
    e.event.props = [], e.event.fixHooks = {}, e.event.fix = function (t) {
        var n, i = t.type, a = this.fixHooks[i], s = e.event.props;
        if (s.length) for (r("jQuery.event.props are deprecated and removed: " + s.join()); s.length;) e.event.addProp(s.pop());
        if (a && !a._migrated_ && (a._migrated_ = !0, r("jQuery.event.fixHooks are deprecated and removed: " + i), (s = a.props) && s.length)) for (; s.length;) e.event.addProp(s.pop());
        return n = j.call(this, t), a && a.filter ? a.filter(n, t) : n
    }, e.each(["load", "unload", "error"], function (t, n) {
        e.fn[n] = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === n && "string" == typeof e[0] ? v.apply(this, e) : (r("jQuery.fn." + n + "() is deprecated"), e.splice(0, 0, n), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
        }
    }), e(function () {
        e(document).triggerHandler("ready")
    }), e.event.special.ready = {
        setup: function () {
            this === document && r("'ready' event is deprecated")
        }
    }, e.fn.extend({
        bind: function (e, t, n) {
            return r("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return r("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return r("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return r("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Q = e.fn.offset;
    e.fn.offset = function () {
        var t, n = this[0], i = {top: 0, left: 0};
        return n && n.nodeType ? (t = (n.ownerDocument || document).documentElement, e.contains(t, n) ? Q.apply(this, arguments) : (r("jQuery.fn.offset() requires an element connected to a document"), i)) : (r("jQuery.fn.offset() requires a valid DOM element"), i)
    };
    var b = e.param;
    e.param = function (t, n) {
        var i = e.ajaxSettings && e.ajaxSettings.traditional;
        return void 0 === n && i && (r("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), n = i), b.call(this, t, n)
    };
    var w = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function () {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
    };
    var x = e.Deferred,
        A = [["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved"], ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected"], ["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory")]];
    e.Deferred = function (t) {
        var n = x(), i = n.promise();
        return n.pipe = i.pipe = function () {
            var t = arguments;
            return r("deferred.pipe() is deprecated"), e.Deferred(function (r) {
                e.each(A, function (a, s) {
                    var o = e.isFunction(t[a]) && t[a];
                    n[s[1]](function () {
                        var t = o && o.apply(this, arguments);
                        t && e.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[s[0] + "With"](this === i ? r.promise() : this, o ? [t] : arguments)
                    })
                }), t = null
            }).promise()
        }, t && t.call(n, n), n
    }
}(jQuery, window);
!function (t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
}(this, function (t, e, o) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
        var e = t.getBoundingClientRect(), o = {};
        for (var n in e) o[n] = e[n];
        if (t.ownerDocument !== document) {
            var r = t.ownerDocument.defaultView.frameElement;
            if (r) {
                var s = i(r);
                o.top += s.top, o.bottom += s.top, o.left += s.left, o.right += s.left
            }
        }
        return o
    }

    function r(t) {
        var e = getComputedStyle(t) || {}, o = e.position, n = [];
        if ("fixed" === o) return [t];
        for (var i = t; (i = i.parentNode) && i && 1 === i.nodeType;) {
            var r = void 0;
            try {
                r = getComputedStyle(i)
            } catch (s) {
            }
            if ("undefined" == typeof r || null === r) return n.push(i), n;
            var a = r, f = a.overflow, l = a.overflowX, h = a.overflowY;
            /(auto|scroll)/.test(f + h + l) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && n.push(i)
        }
        return n.push(t.ownerDocument.body), t.ownerDocument !== document && n.push(t.ownerDocument.defaultView), n
    }

    function s() {
        A && document.body.removeChild(A), A = null
    }

    function a(t) {
        var e = void 0;
        t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
        var o = e.documentElement, n = i(t), r = P();
        return n.top -= r.top, n.left -= r.left, "undefined" == typeof n.width && (n.width = document.body.scrollWidth - n.left - n.right), "undefined" == typeof n.height && (n.height = document.body.scrollHeight - n.top - n.bottom), n.top = n.top - o.clientTop, n.left = n.left - o.clientLeft, n.right = e.body.clientWidth - n.width - n.left, n.bottom = e.body.clientHeight - n.height - n.top, n
    }

    function f(t) {
        return t.offsetParent || document.documentElement
    }

    function l() {
        var t = document.createElement("div");
        t.style.width = "100%", t.style.height = "200px";
        var e = document.createElement("div");
        h(e.style, {
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        }), e.appendChild(t), document.body.appendChild(e);
        var o = t.offsetWidth;
        e.style.overflow = "scroll";
        var n = t.offsetWidth;
        o === n && (n = e.clientWidth), document.body.removeChild(e);
        var i = o - n;
        return {width: i, height: i}
    }

    function h() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], e = [];
        return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
            if (e) for (var o in e) ({}).hasOwnProperty.call(e, o) && (t[o] = e[o])
        }), t
    }

    function u(t, e) {
        if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
            e.trim() && t.classList.remove(e)
        }); else {
            var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"), n = c(t).replace(o, " ");
            g(t, n)
        }
    }

    function d(t, e) {
        if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
            e.trim() && t.classList.add(e)
        }); else {
            u(t, e);
            var o = c(t) + (" " + e);
            g(t, o)
        }
    }

    function p(t, e) {
        if ("undefined" != typeof t.classList) return t.classList.contains(e);
        var o = c(t);
        return new RegExp("(^| )" + e + "( |$)", "gi").test(o)
    }

    function c(t) {
        return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
    }

    function g(t, e) {
        t.setAttribute("class", e)
    }

    function m(t, e, o) {
        o.forEach(function (o) {
            -1 === e.indexOf(o) && p(t, o) && u(t, o)
        }), e.forEach(function (e) {
            p(t, e) || d(t, e)
        })
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function v(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function y(t, e) {
        var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
        return t + o >= e && e >= t - o
    }

    function b() {
        return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
    }

    function w() {
        for (var t = {top: 0, left: 0}, e = arguments.length, o = Array(e), n = 0; e > n; n++) o[n] = arguments[n];
        return o.forEach(function (e) {
            var o = e.top, n = e.left;
            "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof n && (n = parseFloat(n, 10)), t.top += o, t.left += n
        }), t
    }

    function C(t, e) {
        return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
    }

    function O(t, e) {
        return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && !function () {
            var t = e, o = a(e), n = o, i = getComputedStyle(e);
            if (e = [n.left, n.top, o.width + n.left, o.height + n.top], t.ownerDocument !== document) {
                var r = t.ownerDocument.defaultView;
                e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset
            }
            $.forEach(function (t, o) {
                t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(i["border" + t + "Width"]) : e[o] -= parseFloat(i["border" + t + "Width"])
            })
        }(), e
    }

    var E = function () {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        return function (e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e
        }
    }(), x = void 0;
    "undefined" == typeof x && (x = {modules: []});
    var A = null, T = function () {
        var t = 0;
        return function () {
            return ++t
        }
    }(), S = {}, P = function () {
        var t = A;
        t || (t = document.createElement("div"), t.setAttribute("data-tether-id", T()), h(t.style, {
            top: 0,
            left: 0,
            position: "absolute"
        }), document.body.appendChild(t), A = t);
        var e = t.getAttribute("data-tether-id");
        return "undefined" == typeof S[e] && (S[e] = i(t), M(function () {
            delete S[e]
        })), S[e]
    }, W = [], M = function (t) {
        W.push(t)
    }, _ = function () {
        for (var t = void 0; t = W.pop();) t()
    }, k = function () {
        function t() {
            n(this, t)
        }

        return E(t, [{
            key: "on", value: function (t, e, o) {
                var n = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
                "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                    handler: e,
                    ctx: o,
                    once: n
                })
            }
        }, {
            key: "once", value: function (t, e, o) {
                this.on(t, e, o, !0)
            }
        }, {
            key: "off", value: function (t, e) {
                if ("undefined" != typeof this.bindings && "undefined" != typeof this.bindings[t]) if ("undefined" == typeof e) delete this.bindings[t]; else for (var o = 0; o < this.bindings[t].length;) this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o
            }
        }, {
            key: "trigger", value: function (t) {
                if ("undefined" != typeof this.bindings && this.bindings[t]) {
                    for (var e = 0, o = arguments.length, n = Array(o > 1 ? o - 1 : 0), i = 1; o > i; i++) n[i - 1] = arguments[i];
                    for (; e < this.bindings[t].length;) {
                        var r = this.bindings[t][e], s = r.handler, a = r.ctx, f = r.once, l = a;
                        "undefined" == typeof l && (l = this), s.apply(l, n), f ? this.bindings[t].splice(e, 1) : ++e
                    }
                }
            }
        }]), t
    }();
    x.Utils = {
        getActualBoundingClientRect: i,
        getScrollParents: r,
        getBounds: a,
        getOffsetParent: f,
        extend: h,
        addClass: d,
        removeClass: u,
        hasClass: p,
        updateClasses: m,
        defer: M,
        flush: _,
        uniqueId: T,
        Evented: k,
        getScrollBarSize: l,
        removeUtilElements: s
    };
    var B = function () {
        function t(t, e) {
            var o = [], n = !0, i = !1, r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0) ;
            } catch (f) {
                i = !0, r = f
            } finally {
                try {
                    !n && a["return"] && a["return"]()
                } finally {
                    if (i) throw r
                }
            }
            return o
        }

        return function (e, o) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(), E = function () {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        return function (e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e
        }
    }(), z = function (t, e, o) {
        for (var n = !0; n;) {
            var i = t, r = e, s = o;
            n = !1, null === i && (i = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(i, r);
            if (void 0 !== a) {
                if ("value" in a) return a.value;
                var f = a.get;
                if (void 0 === f) return;
                return f.call(s)
            }
            var l = Object.getPrototypeOf(i);
            if (null === l) return;
            t = l, e = r, o = s, n = !0, a = l = void 0
        }
    };
    if ("undefined" == typeof x) throw new Error("You must include the utils.js file before tether.js");
    var j = x.Utils, r = j.getScrollParents, a = j.getBounds, f = j.getOffsetParent, h = j.extend, d = j.addClass,
        u = j.removeClass, m = j.updateClasses, M = j.defer, _ = j.flush, l = j.getScrollBarSize,
        s = j.removeUtilElements, Y = function () {
            if ("undefined" == typeof document) return "";
            for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
                var n = e[o];
                if (void 0 !== t.style[n]) return n
            }
        }(), L = [], D = function () {
            L.forEach(function (t) {
                t.position(!1)
            }), _()
        };
    !function () {
        var t = null, e = null, o = null, n = function i() {
            return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void(o = setTimeout(i, 250))) : void("undefined" != typeof t && b() - t < 10 || (null != o && (clearTimeout(o), o = null), t = b(), D(), e = b() - t))
        };
        "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
            window.addEventListener(t, n)
        })
    }();
    var X = {center: "center", left: "right", right: "left"}, F = {middle: "middle", top: "bottom", bottom: "top"},
        H = {top: 0, left: 0, middle: "50%", center: "50%", bottom: "100%", right: "100%"}, N = function (t, e) {
            var o = t.left, n = t.top;
            return "auto" === o && (o = X[e.left]), "auto" === n && (n = F[e.top]), {left: o, top: n}
        }, U = function (t) {
            var e = t.left, o = t.top;
            return "undefined" != typeof H[t.left] && (e = H[t.left]), "undefined" != typeof H[t.top] && (o = H[t.top]), {
                left: e,
                top: o
            }
        }, V = function (t) {
            var e = t.split(" "), o = B(e, 2), n = o[0], i = o[1];
            return {top: n, left: i}
        }, R = V, q = function (t) {
            function e(t) {
                var o = this;
                n(this, e), z(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), L.push(this), this.history = [], this.setOptions(t, !1), x.modules.forEach(function (t) {
                    "undefined" != typeof t.initialize && t.initialize.call(o)
                }), this.position()
            }

            return v(e, t), E(e, [{
                key: "getClass", value: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0], e = this.options.classes;
                    return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                }
            }, {
                key: "setOptions", value: function (t) {
                    var e = this, o = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
                        n = {offset: "0 0", targetOffset: "0 0", targetAttachment: "auto auto", classPrefix: "tether"};
                    this.options = h(n, t);
                    var i = this.options, s = i.element, a = i.target, f = i.targetModifier;
                    if (this.element = s, this.target = a, this.targetModifier = f, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
                            if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
                            "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                        }), d(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && d(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                    this.targetAttachment = R(this.options.targetAttachment), this.attachment = R(this.options.attachment), this.offset = V(this.options.offset), this.targetOffset = V(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), this.options.enabled !== !1 && this.enable(o)
                }
            }, {
                key: "getTargetBounds", value: function () {
                    if ("undefined" == typeof this.targetModifier) return a(this.target);
                    if ("visible" === this.targetModifier) {
                        if (this.target === document.body) return {
                            top: pageYOffset,
                            left: pageXOffset,
                            height: innerHeight,
                            width: innerWidth
                        };
                        var t = a(this.target), e = {height: t.height, width: t.width, top: t.top, left: t.left};
                        return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
                    }
                    if ("scroll-handle" === this.targetModifier) {
                        var t = void 0, o = this.target;
                        o === document.body ? (o = document.documentElement, t = {
                            left: pageXOffset,
                            top: pageYOffset,
                            height: innerHeight,
                            width: innerWidth
                        }) : t = a(o);
                        var n = getComputedStyle(o),
                            i = o.scrollWidth > o.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                            r = 0;
                        i && (r = 15);
                        var s = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - r, e = {
                            width: 15,
                            height: .975 * s * (s / o.scrollHeight),
                            left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15
                        }, f = 0;
                        408 > s && this.target === document.body && (f = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
                        var l = this.target.scrollTop / (o.scrollHeight - s);
                        return e.top = l * (s - e.height - f) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
                    }
                }
            }, {
                key: "clearCache", value: function () {
                    this._cache = {}
                }
            }, {
                key: "cache", value: function (t, e) {
                    return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                }
            }, {
                key: "enable", value: function () {
                    var t = this, e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                    this.options.addTargetClasses !== !1 && d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (e) {
                        e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                    }), e && this.position()
                }
            }, {
                key: "disable", value: function () {
                    var t = this;
                    u(this.target, this.getClass("enabled")), u(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function (e) {
                        e.removeEventListener("scroll", t.position)
                    })
                }
            }, {
                key: "destroy", value: function () {
                    var t = this;
                    this.disable(), L.forEach(function (e, o) {
                        e === t && L.splice(o, 1)
                    }), 0 === L.length && s()
                }
            }, {
                key: "updateAttachClasses", value: function (t, e) {
                    var o = this;
                    t = t || this.attachment, e = e || this.targetAttachment;
                    var n = ["left", "top", "bottom", "right", "middle", "center"];
                    "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                    var i = this._addAttachClasses;
                    t.top && i.push(this.getClass("element-attached") + "-" + t.top), t.left && i.push(this.getClass("element-attached") + "-" + t.left), e.top && i.push(this.getClass("target-attached") + "-" + e.top), e.left && i.push(this.getClass("target-attached") + "-" + e.left);
                    var r = [];
                    n.forEach(function (t) {
                        r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t)
                    }), M(function () {
                        "undefined" != typeof o._addAttachClasses && (m(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && m(o.target, o._addAttachClasses, r), delete o._addAttachClasses)
                    })
                }
            }, {
                key: "position", value: function () {
                    var t = this, e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                    if (this.enabled) {
                        this.clearCache();
                        var o = N(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, o);
                        var n = this.cache("element-bounds", function () {
                            return a(t.element)
                        }), i = n.width, r = n.height;
                        if (0 === i && 0 === r && "undefined" != typeof this.lastSize) {
                            var s = this.lastSize;
                            i = s.width, r = s.height
                        } else this.lastSize = {width: i, height: r};
                        var h = this.cache("target-bounds", function () {
                                return t.getTargetBounds()
                            }), u = h, d = C(U(this.attachment), {width: i, height: r}), p = C(U(o), u),
                            c = C(this.offset, {width: i, height: r}), g = C(this.targetOffset, u);
                        d = w(d, c), p = w(p, g);
                        for (var m = h.left + p.left - d.left, v = h.top + p.top - d.top, y = 0; y < x.modules.length; ++y) {
                            var b = x.modules[y], O = b.position.call(this, {
                                left: m,
                                top: v,
                                targetAttachment: o,
                                targetPos: h,
                                elementPos: n,
                                offset: d,
                                targetOffset: p,
                                manualOffset: c,
                                manualTargetOffset: g,
                                scrollbarSize: S,
                                attachment: this.attachment
                            });
                            if (O === !1) return !1;
                            "undefined" != typeof O && "object" == typeof O && (v = O.top, m = O.left)
                        }
                        var E = {
                            page: {top: v, left: m},
                            viewport: {
                                top: v - pageYOffset,
                                bottom: pageYOffset - v - r + innerHeight,
                                left: m - pageXOffset,
                                right: pageXOffset - m - i + innerWidth
                            }
                        }, A = this.target.ownerDocument, T = A.defaultView, S = void 0;
                        return A.body.scrollWidth > T.innerWidth && (S = this.cache("scrollbar-size", l), E.viewport.bottom -= S.height), A.body.scrollHeight > T.innerHeight && (S = this.cache("scrollbar-size", l), E.viewport.right -= S.width), (-1 === ["", "static"].indexOf(A.body.style.position) || -1 === ["", "static"].indexOf(A.body.parentElement.style.position)) && (E.page.bottom = A.body.scrollHeight - v - r, E.page.right = A.body.scrollWidth - m - i), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && !function () {
                            var e = t.cache("target-offsetparent", function () {
                                return f(t.target)
                            }), o = t.cache("target-offsetparent-bounds", function () {
                                return a(e)
                            }), n = getComputedStyle(e), i = o, r = {};
                            if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
                                    r[t.toLowerCase()] = parseFloat(n["border" + t + "Width"])
                                }), o.right = A.body.scrollWidth - o.left - i.width + r.right, o.bottom = A.body.scrollHeight - o.top - i.height + r.bottom, E.page.top >= o.top + r.top && E.page.bottom >= o.bottom && E.page.left >= o.left + r.left && E.page.right >= o.right) {
                                var s = e.scrollTop, l = e.scrollLeft;
                                E.offset = {top: E.page.top - o.top + s - r.top, left: E.page.left - o.left + l - r.left}
                            }
                        }(), this.move(E), this.history.unshift(E), this.history.length > 3 && this.history.pop(), e && _(), !0
                    }
                }
            }, {
                key: "move", value: function (t) {
                    var e = this;
                    if ("undefined" != typeof this.element.parentNode) {
                        var o = {};
                        for (var n in t) {
                            o[n] = {};
                            for (var i in t[n]) {
                                for (var r = !1, s = 0; s < this.history.length; ++s) {
                                    var a = this.history[s];
                                    if ("undefined" != typeof a[n] && !y(a[n][i], t[n][i])) {
                                        r = !0;
                                        break
                                    }
                                }
                                r || (o[n][i] = !0)
                            }
                        }
                        var l = {top: "", left: "", right: "", bottom: ""}, u = function (t, o) {
                            var n = "undefined" != typeof e.options.optimizations,
                                i = n ? e.options.optimizations.gpu : null;
                            if (i !== !1) {
                                var r = void 0, s = void 0;
                                t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), l[Y] = "translateX(" + Math.round(s) + "px) translateY(" + Math.round(r) + "px)", "msTransform" !== Y && (l[Y] += " translateZ(0)")
                            } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px"
                        }, d = !1;
                        if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", u(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", u(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? !function () {
                                l.position = "absolute";
                                var n = e.cache("target-offsetparent", function () {
                                    return f(e.target)
                                });
                                f(e.element) !== n && M(function () {
                                    e.element.parentNode.removeChild(e.element), n.appendChild(e.element)
                                }), u(o.offset, t.offset), d = !0
                            }() : (l.position = "absolute", u({top: !0, left: !0}, t.page)), !d) {
                            for (var p = !0, c = this.element.parentNode; c && 1 === c.nodeType && "BODY" !== c.tagName;) {
                                if ("static" !== getComputedStyle(c).position) {
                                    p = !1;
                                    break
                                }
                                c = c.parentNode
                            }
                            p || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                        }
                        var g = {}, m = !1;
                        for (var i in l) {
                            var v = l[i], b = this.element.style[i];
                            b !== v && (m = !0, g[i] = v)
                        }
                        m && M(function () {
                            h(e.element.style, g)
                        })
                    }
                }
            }]), e
        }(k);
    q.modules = [], x.position = D;
    var I = h(q, x), B = function () {
            function t(t, e) {
                var o = [], n = !0, i = !1, r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0) ;
                } catch (f) {
                    i = !0, r = f
                } finally {
                    try {
                        !n && a["return"] && a["return"]()
                    } finally {
                        if (i) throw r
                    }
                }
                return o
            }

            return function (e, o) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, o);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), j = x.Utils, a = j.getBounds, h = j.extend, m = j.updateClasses, M = j.defer,
        $ = ["left", "top", "right", "bottom"];
    x.modules.push({
        position: function (t) {
            var e = this, o = t.top, n = t.left, i = t.targetAttachment;
            if (!this.options.constraints) return !0;
            var r = this.cache("element-bounds", function () {
                return a(e.element)
            }), s = r.height, f = r.width;
            if (0 === f && 0 === s && "undefined" != typeof this.lastSize) {
                var l = this.lastSize;
                f = l.width, s = l.height
            }
            var u = this.cache("target-bounds", function () {
                return e.getTargetBounds()
            }), d = u.height, p = u.width, c = [this.getClass("pinned"), this.getClass("out-of-bounds")];
            this.options.constraints.forEach(function (t) {
                var e = t.outOfBoundsClass, o = t.pinnedClass;
                e && c.push(e), o && c.push(o)
            }), c.forEach(function (t) {
                ["left", "top", "right", "bottom"].forEach(function (e) {
                    c.push(t + "-" + e)
                })
            });
            var g = [], v = h({}, i), y = h({}, this.attachment);
            return this.options.constraints.forEach(function (t) {
                var r = t.to, a = t.attachment, l = t.pin;
                "undefined" == typeof a && (a = "");
                var h = void 0, u = void 0;
                if (a.indexOf(" ") >= 0) {
                    var c = a.split(" "), m = B(c, 2);
                    u = m[0], h = m[1]
                } else h = u = a;
                var b = O(e, r);
                ("target" === u || "both" === u) && (o < b[1] && "top" === v.top && (o += d, v.top = "bottom"), o + s > b[3] && "bottom" === v.top && (o -= d, v.top = "top")), "together" === u && ("top" === v.top && ("bottom" === y.top && o < b[1] ? (o += d, v.top = "bottom", o += s, y.top = "top") : "top" === y.top && o + s > b[3] && o - (s - d) >= b[1] && (o -= s - d, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && o + s > b[3] ? (o -= d, v.top = "top", o -= s, y.top = "bottom") : "bottom" === y.top && o < b[1] && o + (2 * s - d) <= b[3] && (o += s - d, v.top = "top", y.top = "top")), "middle" === v.top && (o + s > b[3] && "top" === y.top ? (o -= s, y.top = "bottom") : o < b[1] && "bottom" === y.top && (o += s, y.top = "top"))), ("target" === h || "both" === h) && (n < b[0] && "left" === v.left && (n += p, v.left = "right"), n + f > b[2] && "right" === v.left && (n -= p, v.left = "left")), "together" === h && (n < b[0] && "left" === v.left ? "right" === y.left ? (n += p, v.left = "right", n += f, y.left = "left") : "left" === y.left && (n += p, v.left = "right", n -= f, y.left = "right") : n + f > b[2] && "right" === v.left ? "left" === y.left ? (n -= p, v.left = "left", n -= f, y.left = "right") : "right" === y.left && (n -= p, v.left = "left", n += f, y.left = "left") : "center" === v.left && (n + f > b[2] && "left" === y.left ? (n -= f, y.left = "right") : n < b[0] && "right" === y.left && (n += f, y.left = "left"))), ("element" === u || "both" === u) && (o < b[1] && "bottom" === y.top && (o += s, y.top = "top"), o + s > b[3] && "top" === y.top && (o -= s, y.top = "bottom")), ("element" === h || "both" === h) && (n < b[0] && ("right" === y.left ? (n += f, y.left = "left") : "center" === y.left && (n += f / 2, y.left = "left")), n + f > b[2] && ("left" === y.left ? (n -= f, y.left = "right") : "center" === y.left && (n -= f / 2, y.left = "right"))), "string" == typeof l ? l = l.split(",").map(function (t) {
                    return t.trim()
                }) : l === !0 && (l = ["top", "left", "right", "bottom"]), l = l || [];
                var w = [], C = [];
                o < b[1] && (l.indexOf("top") >= 0 ? (o = b[1], w.push("top")) : C.push("top")), o + s > b[3] && (l.indexOf("bottom") >= 0 ? (o = b[3] - s, w.push("bottom")) : C.push("bottom")), n < b[0] && (l.indexOf("left") >= 0 ? (n = b[0], w.push("left")) : C.push("left")), n + f > b[2] && (l.indexOf("right") >= 0 ? (n = b[2] - f, w.push("right")) : C.push("right")), w.length && !function () {
                    var t = void 0;
                    t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), w.forEach(function (e) {
                        g.push(t + "-" + e)
                    })
                }(), C.length && !function () {
                    var t = void 0;
                    t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), C.forEach(function (e) {
                        g.push(t + "-" + e)
                    })
                }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1), (v.top !== i.top || v.left !== i.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && (e.updateAttachClasses(y, v), e.trigger("update", {
                    attachment: y,
                    targetAttachment: v
                }))
            }), M(function () {
                e.options.addTargetClasses !== !1 && m(e.target, g, c), m(e.element, g, c)
            }), {top: o, left: n}
        }
    });
    var j = x.Utils, a = j.getBounds, m = j.updateClasses, M = j.defer;
    x.modules.push({
        position: function (t) {
            var e = this, o = t.top, n = t.left, i = this.cache("element-bounds", function () {
                return a(e.element)
            }), r = i.height, s = i.width, f = this.getTargetBounds(), l = o + r, h = n + s, u = [];
            o <= f.bottom && l >= f.top && ["left", "right"].forEach(function (t) {
                var e = f[t];
                (e === n || e === h) && u.push(t)
            }), n <= f.right && h >= f.left && ["top", "bottom"].forEach(function (t) {
                var e = f[t];
                (e === o || e === l) && u.push(t)
            });
            var d = [], p = [], c = ["left", "top", "right", "bottom"];
            return d.push(this.getClass("abutted")), c.forEach(function (t) {
                d.push(e.getClass("abutted") + "-" + t)
            }), u.length && p.push(this.getClass("abutted")), u.forEach(function (t) {
                p.push(e.getClass("abutted") + "-" + t)
            }), M(function () {
                e.options.addTargetClasses !== !1 && m(e.target, p, d), m(e.element, p, d)
            }), !0
        }
    });
    var B = function () {
        function t(t, e) {
            var o = [], n = !0, i = !1, r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0) ;
            } catch (f) {
                i = !0, r = f
            } finally {
                try {
                    !n && a["return"] && a["return"]()
                } finally {
                    if (i) throw r
                }
            }
            return o
        }

        return function (e, o) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    return x.modules.push({
        position: function (t) {
            var e = t.top, o = t.left;
            if (this.options.shift) {
                var n = this.options.shift;
                "function" == typeof this.options.shift && (n = this.options.shift.call(this, {top: e, left: o}));
                var i = void 0, r = void 0;
                if ("string" == typeof n) {
                    n = n.split(" "), n[1] = n[1] || n[0];
                    var s = n, a = B(s, 2);
                    i = a[0], r = a[1], i = parseFloat(i, 10), r = parseFloat(r, 10)
                } else i = n.top, r = n.left;
                return e += i, o += r, {top: e, left: o}
            }
        }
    }), I
});
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
+function (t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery), +function () {
    function t(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function e(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, o = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(), r = function (t) {
        function e(t) {
            return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }

        function n(t) {
            return (t[0] || t).nodeType
        }

        function i() {
            return {
                bindType: a.end, delegateType: a.end, handle: function (e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }
        }

        function o() {
            if (window.QUnit) return !1;
            var t = document.createElement("bootstrap");
            for (var e in h) if (void 0 !== t.style[e]) return {end: h[e]};
            return !1
        }

        function r(e) {
            var n = this, i = !1;
            return t(this).one(c.TRANSITION_END, function () {
                i = !0
            }), setTimeout(function () {
                i || c.triggerTransitionEnd(n)
            }, e), this
        }

        function s() {
            a = o(), t.fn.emulateTransitionEnd = r, c.supportsTransitionEnd() && (t.event.special[c.TRANSITION_END] = i())
        }

        var a = !1, l = 1e6, h = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, c = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
                do t += ~~(Math.random() * l); while (document.getElementById(t));
                return t
            }, getSelectorFromElement: function (t) {
                var e = t.getAttribute("data-target");
                return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
            }, reflow: function (t) {
                return t.offsetHeight
            }, triggerTransitionEnd: function (e) {
                t(e).trigger(a.end)
            }, supportsTransitionEnd: function () {
                return Boolean(a)
            }, typeCheckConfig: function (t, i, o) {
                for (var r in o) if (o.hasOwnProperty(r)) {
                    var s = o[r], a = i[r], l = a && n(a) ? "element" : e(a);
                    if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ": " + ('Option "' + r + '" provided type "' + l + '" ') + ('but expected type "' + s + '".'))
                }
            }
        };
        return s(), c
    }(jQuery), s = (function (t) {
        var e = "alert", i = "4.0.0-alpha.6", s = "bs.alert", a = "." + s, l = ".data-api", h = t.fn[e], c = 150,
            u = {DISMISS: '[data-dismiss="alert"]'},
            d = {CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + l},
            f = {ALERT: "alert", FADE: "fade", SHOW: "show"}, _ = function () {
                function e(t) {
                    n(this, e), this._element = t
                }

                return e.prototype.close = function (t) {
                    t = t || this._element;
                    var e = this._getRootElement(t), n = this._triggerCloseEvent(e);
                    n.isDefaultPrevented() || this._removeElement(e)
                }, e.prototype.dispose = function () {
                    t.removeData(this._element, s), this._element = null
                }, e.prototype._getRootElement = function (e) {
                    var n = r.getSelectorFromElement(e), i = !1;
                    return n && (i = t(n)[0]), i || (i = t(e).closest("." + f.ALERT)[0]), i
                }, e.prototype._triggerCloseEvent = function (e) {
                    var n = t.Event(d.CLOSE);
                    return t(e).trigger(n), n
                }, e.prototype._removeElement = function (e) {
                    var n = this;
                    return t(e).removeClass(f.SHOW), r.supportsTransitionEnd() && t(e).hasClass(f.FADE) ? void t(e).one(r.TRANSITION_END, function (t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(c) : void this._destroyElement(e)
                }, e.prototype._destroyElement = function (e) {
                    t(e).detach().trigger(d.CLOSED).remove()
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = t(this), o = i.data(s);
                        o || (o = new e(this), i.data(s, o)), "close" === n && o[n](this)
                    })
                }, e._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this)
                    }
                }, o(e, null, [{
                    key: "VERSION", get: function () {
                        return i
                    }
                }]), e
            }();
        return t(document).on(d.CLICK_DATA_API, u.DISMISS, _._handleDismiss(new _)), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
            return t.fn[e] = h, _._jQueryInterface
        }, _
    }(jQuery), function (t) {
        var e = "button", i = "4.0.0-alpha.6", r = "bs.button", s = "." + r, a = ".data-api", l = t.fn[e],
            h = {ACTIVE: "active", BUTTON: "btn", FOCUS: "focus"}, c = {
                DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                DATA_TOGGLE: '[data-toggle="buttons"]',
                INPUT: "input",
                ACTIVE: ".active",
                BUTTON: ".btn"
            }, u = {CLICK_DATA_API: "click" + s + a, FOCUS_BLUR_DATA_API: "focus" + s + a + " " + ("blur" + s + a)},
            d = function () {
                function e(t) {
                    n(this, e), this._element = t
                }

                return e.prototype.toggle = function () {
                    var e = !0, n = t(this._element).closest(c.DATA_TOGGLE)[0];
                    if (n) {
                        var i = t(this._element).find(c.INPUT)[0];
                        if (i) {
                            if ("radio" === i.type) if (i.checked && t(this._element).hasClass(h.ACTIVE)) e = !1; else {
                                var o = t(n).find(c.ACTIVE)[0];
                                o && t(o).removeClass(h.ACTIVE)
                            }
                            e && (i.checked = !t(this._element).hasClass(h.ACTIVE), t(i).trigger("change")), i.focus()
                        }
                    }
                    this._element.setAttribute("aria-pressed", !t(this._element).hasClass(h.ACTIVE)), e && t(this._element).toggleClass(h.ACTIVE)
                }, e.prototype.dispose = function () {
                    t.removeData(this._element, r), this._element = null
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = t(this).data(r);
                        i || (i = new e(this), t(this).data(r, i)), "toggle" === n && i[n]()
                    })
                }, o(e, null, [{
                    key: "VERSION", get: function () {
                        return i
                    }
                }]), e
            }();
        return t(document).on(u.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
            e.preventDefault();
            var n = e.target;
            t(n).hasClass(h.BUTTON) || (n = t(n).closest(c.BUTTON)), d._jQueryInterface.call(t(n), "toggle")
        }).on(u.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
            var n = t(e.target).closest(c.BUTTON)[0];
            t(n).toggleClass(h.FOCUS, /^focus(in)?$/.test(e.type))
        }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function () {
            return t.fn[e] = l, d._jQueryInterface
        }, d
    }(jQuery), function (t) {
        var e = "carousel", s = "4.0.0-alpha.6", a = "bs.carousel", l = "." + a, h = ".data-api", c = t.fn[e], u = 600,
            d = 37, f = 39, _ = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0}, g = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            }, p = {NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right"}, m = {
                SLIDE: "slide" + l,
                SLID: "slid" + l,
                KEYDOWN: "keydown" + l,
                MOUSEENTER: "mouseenter" + l,
                MOUSELEAVE: "mouseleave" + l,
                LOAD_DATA_API: "load" + l + h,
                CLICK_DATA_API: "click" + l + h
            }, E = {
                CAROUSEL: "carousel",
                ACTIVE: "active",
                SLIDE: "slide",
                RIGHT: "carousel-item-right",
                LEFT: "carousel-item-left",
                NEXT: "carousel-item-next",
                PREV: "carousel-item-prev",
                ITEM: "carousel-item"
            }, v = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            }, T = function () {
                function h(e, i) {
                    n(this, h), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(v.INDICATORS)[0], this._addEventListeners()
                }

                return h.prototype.next = function () {
                    if (this._isSliding) throw new Error("Carousel is sliding");
                    this._slide(p.NEXT)
                }, h.prototype.nextWhenVisible = function () {
                    document.hidden || this.next()
                }, h.prototype.prev = function () {
                    if (this._isSliding) throw new Error("Carousel is sliding");
                    this._slide(p.PREVIOUS)
                }, h.prototype.pause = function (e) {
                    e || (this._isPaused = !0), t(this._element).find(v.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, h.prototype.cycle = function (t) {
                    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, h.prototype.to = function (e) {
                    var n = this;
                    this._activeElement = t(this._element).find(v.ACTIVE_ITEM)[0];
                    var i = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0)) {
                        if (this._isSliding) return void t(this._element).one(m.SLID, function () {
                            return n.to(e)
                        });
                        if (i === e) return this.pause(), void this.cycle();
                        var o = e > i ? p.NEXT : p.PREVIOUS;
                        this._slide(o, this._items[e])
                    }
                }, h.prototype.dispose = function () {
                    t(this._element).off(l), t.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, h.prototype._getConfig = function (n) {
                    return n = t.extend({}, _, n), r.typeCheckConfig(e, n, g), n
                }, h.prototype._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard && t(this._element).on(m.KEYDOWN, function (t) {
                        return e._keydown(t)
                    }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(m.MOUSEENTER, function (t) {
                        return e.pause(t)
                    }).on(m.MOUSELEAVE, function (t) {
                        return e.cycle(t)
                    })
                }, h.prototype._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                        case d:
                            t.preventDefault(), this.prev();
                            break;
                        case f:
                            t.preventDefault(), this.next();
                            break;
                        default:
                            return
                    }
                }, h.prototype._getItemIndex = function (e) {
                    return this._items = t.makeArray(t(e).parent().find(v.ITEM)), this._items.indexOf(e)
                }, h.prototype._getItemByDirection = function (t, e) {
                    var n = t === p.NEXT, i = t === p.PREVIOUS, o = this._getItemIndex(e), r = this._items.length - 1,
                        s = i && 0 === o || n && o === r;
                    if (s && !this._config.wrap) return e;
                    var a = t === p.PREVIOUS ? -1 : 1, l = (o + a) % this._items.length;
                    return l === -1 ? this._items[this._items.length - 1] : this._items[l]
                }, h.prototype._triggerSlideEvent = function (e, n) {
                    var i = t.Event(m.SLIDE, {relatedTarget: e, direction: n});
                    return t(this._element).trigger(i), i
                }, h.prototype._setActiveIndicatorElement = function (e) {
                    if (this._indicatorsElement) {
                        t(this._indicatorsElement).find(v.ACTIVE).removeClass(E.ACTIVE);
                        var n = this._indicatorsElement.children[this._getItemIndex(e)];
                        n && t(n).addClass(E.ACTIVE)
                    }
                }, h.prototype._slide = function (e, n) {
                    var i = this, o = t(this._element).find(v.ACTIVE_ITEM)[0], s = n || o && this._getItemByDirection(e, o),
                        a = Boolean(this._interval), l = void 0, h = void 0, c = void 0;
                    if (e === p.NEXT ? (l = E.LEFT, h = E.NEXT, c = p.LEFT) : (l = E.RIGHT, h = E.PREV, c = p.RIGHT), s && t(s).hasClass(E.ACTIVE)) return void(this._isSliding = !1);
                    var d = this._triggerSlideEvent(s, c);
                    if (!d.isDefaultPrevented() && o && s) {
                        this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s);
                        var f = t.Event(m.SLID, {relatedTarget: s, direction: c});
                        r.supportsTransitionEnd() && t(this._element).hasClass(E.SLIDE) ? (t(s).addClass(h), r.reflow(s), t(o).addClass(l), t(s).addClass(l), t(o).one(r.TRANSITION_END, function () {
                            t(s).removeClass(l + " " + h).addClass(E.ACTIVE), t(o).removeClass(E.ACTIVE + " " + h + " " + l), i._isSliding = !1, setTimeout(function () {
                                return t(i._element).trigger(f)
                            }, 0)
                        }).emulateTransitionEnd(u)) : (t(o).removeClass(E.ACTIVE), t(s).addClass(E.ACTIVE), this._isSliding = !1, t(this._element).trigger(f)), a && this.cycle()
                    }
                }, h._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = t(this).data(a), o = t.extend({}, _, t(this).data());
                        "object" === ("undefined" == typeof e ? "undefined" : i(e)) && t.extend(o, e);
                        var r = "string" == typeof e ? e : o.slide;
                        if (n || (n = new h(this, o), t(this).data(a, n)), "number" == typeof e) n.to(e); else if ("string" == typeof r) {
                            if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
                            n[r]()
                        } else o.interval && (n.pause(), n.cycle())
                    })
                }, h._dataApiClickHandler = function (e) {
                    var n = r.getSelectorFromElement(this);
                    if (n) {
                        var i = t(n)[0];
                        if (i && t(i).hasClass(E.CAROUSEL)) {
                            var o = t.extend({}, t(i).data(), t(this).data()), s = this.getAttribute("data-slide-to");
                            s && (o.interval = !1), h._jQueryInterface.call(t(i), o), s && t(i).data(a).to(s), e.preventDefault()
                        }
                    }
                }, o(h, null, [{
                    key: "VERSION", get: function () {
                        return s
                    }
                }, {
                    key: "Default", get: function () {
                        return _
                    }
                }]), h
            }();
        return t(document).on(m.CLICK_DATA_API, v.DATA_SLIDE, T._dataApiClickHandler), t(window).on(m.LOAD_DATA_API, function () {
            t(v.DATA_RIDE).each(function () {
                var e = t(this);
                T._jQueryInterface.call(e, e.data())
            })
        }), t.fn[e] = T._jQueryInterface, t.fn[e].Constructor = T, t.fn[e].noConflict = function () {
            return t.fn[e] = c, T._jQueryInterface
        }, T
    }(jQuery), function (t) {
        var e = "collapse", s = "4.0.0-alpha.6", a = "bs.collapse", l = "." + a, h = ".data-api", c = t.fn[e], u = 600,
            d = {toggle: !0, parent: ""}, f = {toggle: "boolean", parent: "string"}, _ = {
                SHOW: "show" + l,
                SHOWN: "shown" + l,
                HIDE: "hide" + l,
                HIDDEN: "hidden" + l,
                CLICK_DATA_API: "click" + l + h
            }, g = {SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed"},
            p = {WIDTH: "width", HEIGHT: "height"},
            m = {ACTIVES: ".card > .show, .card > .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'},
            E = function () {
                function l(e, i) {
                    n(this, l), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }

                return l.prototype.toggle = function () {
                    t(this._element).hasClass(g.SHOW) ? this.hide() : this.show()
                }, l.prototype.show = function () {
                    var e = this;
                    if (this._isTransitioning) throw new Error("Collapse is transitioning");
                    if (!t(this._element).hasClass(g.SHOW)) {
                        var n = void 0, i = void 0;
                        if (this._parent && (n = t.makeArray(t(this._parent).find(m.ACTIVES)), n.length || (n = null)), !(n && (i = t(n).data(a), i && i._isTransitioning))) {
                            var o = t.Event(_.SHOW);
                            if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                n && (l._jQueryInterface.call(t(n), "hide"), i || t(n).data(a, null));
                                var s = this._getDimension();
                                t(this._element).removeClass(g.COLLAPSE).addClass(g.COLLAPSING), this._element.style[s] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(g.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var h = function () {
                                    t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).addClass(g.SHOW), e._element.style[s] = "", e.setTransitioning(!1), t(e._element).trigger(_.SHOWN)
                                };
                                if (!r.supportsTransitionEnd()) return void h();
                                var c = s[0].toUpperCase() + s.slice(1), d = "scroll" + c;
                                t(this._element).one(r.TRANSITION_END, h).emulateTransitionEnd(u), this._element.style[s] = this._element[d] + "px"
                            }
                        }
                    }
                }, l.prototype.hide = function () {
                    var e = this;
                    if (this._isTransitioning) throw new Error("Collapse is transitioning");
                    if (t(this._element).hasClass(g.SHOW)) {
                        var n = t.Event(_.HIDE);
                        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var i = this._getDimension(), o = i === p.WIDTH ? "offsetWidth" : "offsetHeight";
                            this._element.style[i] = this._element[o] + "px", r.reflow(this._element), t(this._element).addClass(g.COLLAPSING).removeClass(g.COLLAPSE).removeClass(g.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(g.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                            var s = function () {
                                e.setTransitioning(!1), t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).trigger(_.HIDDEN)
                            };
                            return this._element.style[i] = "", r.supportsTransitionEnd() ? void t(this._element).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : void s()
                        }
                    }
                }, l.prototype.setTransitioning = function (t) {
                    this._isTransitioning = t
                }, l.prototype.dispose = function () {
                    t.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, l.prototype._getConfig = function (n) {
                    return n = t.extend({}, d, n), n.toggle = Boolean(n.toggle), r.typeCheckConfig(e, n, f), n
                }, l.prototype._getDimension = function () {
                    var e = t(this._element).hasClass(p.WIDTH);
                    return e ? p.WIDTH : p.HEIGHT
                }, l.prototype._getParent = function () {
                    var e = this, n = t(this._config.parent)[0],
                        i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return t(n).find(i).each(function (t, n) {
                        e._addAriaAndCollapsedClass(l._getTargetFromElement(n), [n])
                    }), n
                }, l.prototype._addAriaAndCollapsedClass = function (e, n) {
                    if (e) {
                        var i = t(e).hasClass(g.SHOW);
                        e.setAttribute("aria-expanded", i), n.length && t(n).toggleClass(g.COLLAPSED, !i).attr("aria-expanded", i)
                    }
                }, l._getTargetFromElement = function (e) {
                    var n = r.getSelectorFromElement(e);
                    return n ? t(n)[0] : null
                }, l._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = t(this), o = n.data(a),
                            r = t.extend({}, d, n.data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
                        if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new l(this, r), n.data(a, o)), "string" == typeof e) {
                            if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                            o[e]()
                        }
                    })
                }, o(l, null, [{
                    key: "VERSION", get: function () {
                        return s
                    }
                }, {
                    key: "Default", get: function () {
                        return d
                    }
                }]), l
            }();
        return t(document).on(_.CLICK_DATA_API, m.DATA_TOGGLE, function (e) {
            e.preventDefault();
            var n = E._getTargetFromElement(this), i = t(n).data(a), o = i ? "toggle" : t(this).data();
            E._jQueryInterface.call(t(n), o)
        }), t.fn[e] = E._jQueryInterface, t.fn[e].Constructor = E, t.fn[e].noConflict = function () {
            return t.fn[e] = c, E._jQueryInterface
        }, E
    }(jQuery), function (t) {
        var e = "dropdown", i = "4.0.0-alpha.6", s = "bs.dropdown", a = "." + s, l = ".data-api", h = t.fn[e], c = 27,
            u = 38, d = 40, f = 3, _ = {
                HIDE: "hide" + a,
                HIDDEN: "hidden" + a,
                SHOW: "show" + a,
                SHOWN: "shown" + a,
                CLICK: "click" + a,
                CLICK_DATA_API: "click" + a + l,
                FOCUSIN_DATA_API: "focusin" + a + l,
                KEYDOWN_DATA_API: "keydown" + a + l
            }, g = {BACKDROP: "dropdown-backdrop", DISABLED: "disabled", SHOW: "show"}, p = {
                BACKDROP: ".dropdown-backdrop",
                DATA_TOGGLE: '[data-toggle="dropdown"]',
                FORM_CHILD: ".dropdown form",
                ROLE_MENU: '[role="menu"]',
                ROLE_LISTBOX: '[role="listbox"]',
                NAVBAR_NAV: ".navbar-nav",
                VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
            }, m = function () {
                function e(t) {
                    n(this, e), this._element = t, this._addEventListeners()
                }

                return e.prototype.toggle = function () {
                    if (this.disabled || t(this).hasClass(g.DISABLED)) return !1;
                    var n = e._getParentFromElement(this), i = t(n).hasClass(g.SHOW);
                    if (e._clearMenus(), i) return !1;
                    if ("ontouchstart" in document.documentElement && !t(n).closest(p.NAVBAR_NAV).length) {
                        var o = document.createElement("div");
                        o.className = g.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus)
                    }
                    var r = {relatedTarget: this}, s = t.Event(_.SHOW, r);
                    return t(n).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), t(n).toggleClass(g.SHOW), t(n).trigger(t.Event(_.SHOWN, r)), !1)
                }, e.prototype.dispose = function () {
                    t.removeData(this._element, s), t(this._element).off(a), this._element = null
                }, e.prototype._addEventListeners = function () {
                    t(this._element).on(_.CLICK, this.toggle)
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = t(this).data(s);
                        if (i || (i = new e(this), t(this).data(s, i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new Error('No method named "' + n + '"');
                            i[n].call(this)
                        }
                    })
                }, e._clearMenus = function (n) {
                    if (!n || n.which !== f) {
                        var i = t(p.BACKDROP)[0];
                        i && i.parentNode.removeChild(i);
                        for (var o = t.makeArray(t(p.DATA_TOGGLE)), r = 0; r < o.length; r++) {
                            var s = e._getParentFromElement(o[r]), a = {relatedTarget: o[r]};
                            if (t(s).hasClass(g.SHOW) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "focusin" === n.type) && t.contains(s, n.target))) {
                                var l = t.Event(_.HIDE, a);
                                t(s).trigger(l), l.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"), t(s).removeClass(g.SHOW).trigger(t.Event(_.HIDDEN, a)))
                            }
                        }
                    }
                }, e._getParentFromElement = function (e) {
                    var n = void 0, i = r.getSelectorFromElement(e);
                    return i && (n = t(i)[0]), n || e.parentNode
                }, e._dataApiKeydownHandler = function (n) {
                    if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(g.DISABLED))) {
                        var i = e._getParentFromElement(this), o = t(i).hasClass(g.SHOW);
                        if (!o && n.which !== c || o && n.which === c) {
                            if (n.which === c) {
                                var r = t(i).find(p.DATA_TOGGLE)[0];
                                t(r).trigger("focus")
                            }
                            return void t(this).trigger("click")
                        }
                        var s = t(i).find(p.VISIBLE_ITEMS).get();
                        if (s.length) {
                            var a = s.indexOf(n.target);
                            n.which === u && a > 0 && a--, n.which === d && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
                        }
                    }
                }, o(e, null, [{
                    key: "VERSION", get: function () {
                        return i
                    }
                }]), e
            }();
        return t(document).on(_.KEYDOWN_DATA_API, p.DATA_TOGGLE, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_MENU, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_LISTBOX, m._dataApiKeydownHandler).on(_.CLICK_DATA_API + " " + _.FOCUSIN_DATA_API, m._clearMenus).on(_.CLICK_DATA_API, p.DATA_TOGGLE, m.prototype.toggle).on(_.CLICK_DATA_API, p.FORM_CHILD, function (t) {
            t.stopPropagation()
        }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
            return t.fn[e] = h, m._jQueryInterface
        }, m
    }(jQuery), function (t) {
        var e = "modal", s = "4.0.0-alpha.6", a = "bs.modal", l = "." + a, h = ".data-api", c = t.fn[e], u = 300,
            d = 150, f = 27, _ = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
            g = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, p = {
                HIDE: "hide" + l,
                HIDDEN: "hidden" + l,
                SHOW: "show" + l,
                SHOWN: "shown" + l,
                FOCUSIN: "focusin" + l,
                RESIZE: "resize" + l,
                CLICK_DISMISS: "click.dismiss" + l,
                KEYDOWN_DISMISS: "keydown.dismiss" + l,
                MOUSEUP_DISMISS: "mouseup.dismiss" + l,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + l,
                CLICK_DATA_API: "click" + l + h
            }, m = {
                SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                BACKDROP: "modal-backdrop",
                OPEN: "modal-open",
                FADE: "fade",
                SHOW: "show"
            }, E = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            }, v = function () {
                function h(e, i) {
                    n(this, h), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(E.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                }

                return h.prototype.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t)
                }, h.prototype.show = function (e) {
                    var n = this;
                    if (this._isTransitioning) throw new Error("Modal is transitioning");
                    r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) && (this._isTransitioning = !0);
                    var i = t.Event(p.SHOW, {relatedTarget: e});
                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(m.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(p.CLICK_DISMISS, E.DATA_DISMISS, function (t) {
                        return n.hide(t)
                    }), t(this._dialog).on(p.MOUSEDOWN_DISMISS, function () {
                        t(n._element).one(p.MOUSEUP_DISMISS, function (e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return n._showElement(e)
                    }))
                }, h.prototype.hide = function (e) {
                    var n = this;
                    if (e && e.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
                    var i = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);
                    i && (this._isTransitioning = !0);
                    var o = t.Event(p.HIDE);
                    t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(p.FOCUSIN), t(this._element).removeClass(m.SHOW), t(this._element).off(p.CLICK_DISMISS), t(this._dialog).off(p.MOUSEDOWN_DISMISS), i ? t(this._element).one(r.TRANSITION_END, function (t) {
                        return n._hideModal(t)
                    }).emulateTransitionEnd(u) : this._hideModal())
                }, h.prototype.dispose = function () {
                    t.removeData(this._element, a), t(window, document, this._element, this._backdrop).off(l), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                }, h.prototype._getConfig = function (n) {
                    return n = t.extend({}, _, n), r.typeCheckConfig(e, n, g), n
                }, h.prototype._showElement = function (e) {
                    var n = this, i = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && r.reflow(this._element), t(this._element).addClass(m.SHOW), this._config.focus && this._enforceFocus();
                    var o = t.Event(p.SHOWN, {relatedTarget: e}), s = function () {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                    };
                    i ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : s()
                }, h.prototype._enforceFocus = function () {
                    var e = this;
                    t(document).off(p.FOCUSIN).on(p.FOCUSIN, function (n) {
                        document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
                    })
                }, h.prototype._setEscapeEvent = function () {
                    var e = this;
                    this._isShown && this._config.keyboard ? t(this._element).on(p.KEYDOWN_DISMISS, function (t) {
                        t.which === f && e.hide()
                    }) : this._isShown || t(this._element).off(p.KEYDOWN_DISMISS)
                }, h.prototype._setResizeEvent = function () {
                    var e = this;
                    this._isShown ? t(window).on(p.RESIZE, function (t) {
                        return e._handleUpdate(t)
                    }) : t(window).off(p.RESIZE)
                }, h.prototype._hideModal = function () {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function () {
                        t(document.body).removeClass(m.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(p.HIDDEN)
                    })
                }, h.prototype._removeBackdrop = function () {
                    this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                }, h.prototype._showBackdrop = function (e) {
                    var n = this, i = t(this._element).hasClass(m.FADE) ? m.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        var o = r.supportsTransitionEnd() && i;
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = m.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(p.CLICK_DISMISS, function (t) {
                                return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
                            }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(m.SHOW), !e) return;
                        if (!o) return void e();
                        t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(d)
                    } else if (!this._isShown && this._backdrop) {
                        t(this._backdrop).removeClass(m.SHOW);
                        var s = function () {
                            n._removeBackdrop(), e && e()
                        };
                        r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(d) : s()
                    } else e && e()
                }, h.prototype._handleUpdate = function () {
                    this._adjustDialog()
                }, h.prototype._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, h.prototype._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, h.prototype._checkScrollbar = function () {
                    this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, h.prototype._setScrollbar = function () {
                    var e = parseInt(t(E.FIXED_CONTENT).css("padding-right") || 0, 10);
                    this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
                }, h.prototype._resetScrollbar = function () {
                    document.body.style.paddingRight = this._originalBodyPadding
                }, h.prototype._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    t.className = m.SCROLLBAR_MEASURER, document.body.appendChild(t);
                    var e = t.offsetWidth - t.clientWidth;
                    return document.body.removeChild(t), e
                }, h._jQueryInterface = function (e, n) {
                    return this.each(function () {
                        var o = t(this).data(a),
                            r = t.extend({}, h.Default, t(this).data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
                        if (o || (o = new h(this, r), t(this).data(a, o)), "string" == typeof e) {
                            if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                            o[e](n)
                        } else r.show && o.show(n)
                    })
                }, o(h, null, [{
                    key: "VERSION", get: function () {
                        return s
                    }
                }, {
                    key: "Default", get: function () {
                        return _
                    }
                }]), h
            }();
        return t(document).on(p.CLICK_DATA_API, E.DATA_TOGGLE, function (e) {
            var n = this, i = void 0, o = r.getSelectorFromElement(this);
            o && (i = t(o)[0]);
            var s = t(i).data(a) ? "toggle" : t.extend({}, t(i).data(), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var l = t(i).one(p.SHOW, function (e) {
                e.isDefaultPrevented() || l.one(p.HIDDEN, function () {
                    t(n).is(":visible") && n.focus()
                })
            });
            v._jQueryInterface.call(t(i), s, this)
        }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
            return t.fn[e] = c, v._jQueryInterface
        }, v
    }(jQuery), function (t) {
        var e = "scrollspy", s = "4.0.0-alpha.6", a = "bs.scrollspy", l = "." + a, h = ".data-api", c = t.fn[e],
            u = {offset: 10, method: "auto", target: ""},
            d = {offset: "number", method: "string", target: "(string|element)"},
            f = {ACTIVATE: "activate" + l, SCROLL: "scroll" + l, LOAD_DATA_API: "load" + l + h}, _ = {
                DROPDOWN_ITEM: "dropdown-item",
                DROPDOWN_MENU: "dropdown-menu",
                NAV_LINK: "nav-link",
                NAV: "nav",
                ACTIVE: "active"
            }, g = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                LIST_ITEM: ".list-item",
                LI: "li",
                LI_DROPDOWN: "li.dropdown",
                NAV_LINKS: ".nav-link",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            }, p = {OFFSET: "offset", POSITION: "position"}, m = function () {
                function h(e, i) {
                    var o = this;
                    n(this, h), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + g.NAV_LINKS + "," + (this._config.target + " " + g.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(f.SCROLL, function (t) {
                        return o._process(t)
                    }), this.refresh(), this._process()
                }

                return h.prototype.refresh = function () {
                    var e = this, n = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET,
                        i = "auto" === this._config.method ? n : this._config.method,
                        o = i === p.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                    var s = t.makeArray(t(this._selector));
                    s.map(function (e) {
                        var n = void 0, s = r.getSelectorFromElement(e);
                        return s && (n = t(s)[0]), n && (n.offsetWidth || n.offsetHeight) ? [t(n)[i]().top + o, s] : null
                    }).filter(function (t) {
                        return t
                    }).sort(function (t, e) {
                        return t[0] - e[0]
                    }).forEach(function (t) {
                        e._offsets.push(t[0]), e._targets.push(t[1])
                    })
                }, h.prototype.dispose = function () {
                    t.removeData(this._element, a), t(this._scrollElement).off(l), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, h.prototype._getConfig = function (n) {
                    if (n = t.extend({}, u, n), "string" != typeof n.target) {
                        var i = t(n.target).attr("id");
                        i || (i = r.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                    }
                    return r.typeCheckConfig(e, n, d), n
                }, h.prototype._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, h.prototype._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, h.prototype._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
                }, h.prototype._process = function () {
                    var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), t >= n) {
                        var i = this._targets[this._targets.length - 1];
                        return void(this._activeTarget !== i && this._activate(i))
                    }
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        var r = this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]);
                        r && this._activate(this._targets[o])
                    }
                }, h.prototype._activate = function (e) {
                    this._activeTarget = e, this._clear();
                    var n = this._selector.split(",");
                    n = n.map(function (t) {
                        return t + '[data-target="' + e + '"],' + (t + '[href="' + e + '"]')
                    });
                    var i = t(n.join(","));
                    i.hasClass(_.DROPDOWN_ITEM) ? (i.closest(g.DROPDOWN).find(g.DROPDOWN_TOGGLE).addClass(_.ACTIVE), i.addClass(_.ACTIVE)) : i.parents(g.LI).find("> " + g.NAV_LINKS).addClass(_.ACTIVE), t(this._scrollElement).trigger(f.ACTIVATE, {relatedTarget: e})
                }, h.prototype._clear = function () {
                    t(this._selector).filter(g.ACTIVE).removeClass(_.ACTIVE)
                }, h._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = t(this).data(a), o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;
                        if (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e) {
                            if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                            n[e]()
                        }
                    })
                }, o(h, null, [{
                    key: "VERSION", get: function () {
                        return s
                    }
                }, {
                    key: "Default", get: function () {
                        return u
                    }
                }]), h
            }();
        return t(window).on(f.LOAD_DATA_API, function () {
            for (var e = t.makeArray(t(g.DATA_SPY)), n = e.length; n--;) {
                var i = t(e[n]);
                m._jQueryInterface.call(i, i.data())
            }
        }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
            return t.fn[e] = c, m._jQueryInterface
        }, m
    }(jQuery), function (t) {
        var e = "tab", i = "4.0.0-alpha.6", s = "bs.tab", a = "." + s, l = ".data-api", h = t.fn[e], c = 150, u = {
                HIDE: "hide" + a,
                HIDDEN: "hidden" + a,
                SHOW: "show" + a,
                SHOWN: "shown" + a,
                CLICK_DATA_API: "click" + a + l
            }, d = {DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show"},
            f = {
                A: "a",
                LI: "li",
                DROPDOWN: ".dropdown",
                LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
                FADE_CHILD: "> .nav-item .fade, > .fade",
                ACTIVE: ".active",
                ACTIVE_CHILD: "> .nav-item > .active, > .active",
                DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                DROPDOWN_TOGGLE: ".dropdown-toggle",
                DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
            }, _ = function () {
                function e(t) {
                    n(this, e), this._element = t
                }

                return e.prototype.show = function () {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(d.ACTIVE) || t(this._element).hasClass(d.DISABLED))) {
                        var n = void 0, i = void 0, o = t(this._element).closest(f.LIST)[0],
                            s = r.getSelectorFromElement(this._element);
                        o && (i = t.makeArray(t(o).find(f.ACTIVE)), i = i[i.length - 1]);
                        var a = t.Event(u.HIDE, {relatedTarget: this._element}), l = t.Event(u.SHOW, {relatedTarget: i});
                        if (i && t(i).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                            s && (n = t(s)[0]), this._activate(this._element, o);
                            var h = function () {
                                var n = t.Event(u.HIDDEN, {relatedTarget: e._element}),
                                    o = t.Event(u.SHOWN, {relatedTarget: i});
                                t(i).trigger(n), t(e._element).trigger(o)
                            };
                            n ? this._activate(n, n.parentNode, h) : h()
                        }
                    }
                }, e.prototype.dispose = function () {
                    t.removeClass(this._element, s), this._element = null
                }, e.prototype._activate = function (e, n, i) {
                    var o = this, s = t(n).find(f.ACTIVE_CHILD)[0],
                        a = i && r.supportsTransitionEnd() && (s && t(s).hasClass(d.FADE) || Boolean(t(n).find(f.FADE_CHILD)[0])),
                        l = function () {
                            return o._transitionComplete(e, s, a, i)
                        };
                    s && a ? t(s).one(r.TRANSITION_END, l).emulateTransitionEnd(c) : l(), s && t(s).removeClass(d.SHOW)
                }, e.prototype._transitionComplete = function (e, n, i, o) {
                    if (n) {
                        t(n).removeClass(d.ACTIVE);
                        var s = t(n.parentNode).find(f.DROPDOWN_ACTIVE_CHILD)[0];
                        s && t(s).removeClass(d.ACTIVE), n.setAttribute("aria-expanded", !1)
                    }
                    if (t(e).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0), i ? (r.reflow(e), t(e).addClass(d.SHOW)) : t(e).removeClass(d.FADE), e.parentNode && t(e.parentNode).hasClass(d.DROPDOWN_MENU)) {
                        var a = t(e).closest(f.DROPDOWN)[0];
                        a && t(a).find(f.DROPDOWN_TOGGLE).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0)
                    }
                    o && o()
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = t(this), o = i.data(s);
                        if (o || (o = new e(this), i.data(s, o)), "string" == typeof n) {
                            if (void 0 === o[n]) throw new Error('No method named "' + n + '"');
                            o[n]()
                        }
                    })
                }, o(e, null, [{
                    key: "VERSION", get: function () {
                        return i
                    }
                }]), e
            }();
        return t(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function (e) {
            e.preventDefault(), _._jQueryInterface.call(t(this), "show")
        }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
            return t.fn[e] = h, _._jQueryInterface
        }, _
    }(jQuery), function (t) {
        if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
        var e = "tooltip", s = "4.0.0-alpha.6", a = "bs.tooltip", l = "." + a, h = t.fn[e], c = 150, u = "bs-tether",
            d = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: "0 0",
                constraints: [],
                container: !1
            }, f = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "string",
                constraints: "array",
                container: "(string|element|boolean)"
            }, _ = {TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right"},
            g = {SHOW: "show", OUT: "out"}, p = {
                HIDE: "hide" + l,
                HIDDEN: "hidden" + l,
                SHOW: "show" + l,
                SHOWN: "shown" + l,
                INSERTED: "inserted" + l,
                CLICK: "click" + l,
                FOCUSIN: "focusin" + l,
                FOCUSOUT: "focusout" + l,
                MOUSEENTER: "mouseenter" + l,
                MOUSELEAVE: "mouseleave" + l
            }, m = {FADE: "fade", SHOW: "show"}, E = {TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner"},
            v = {element: !1, enabled: !1}, T = {HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual"},
            I = function () {
                function h(t, e) {
                    n(this, h), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                }

                return h.prototype.enable = function () {
                    this._isEnabled = !0
                }, h.prototype.disable = function () {
                    this._isEnabled = !1
                }, h.prototype.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, h.prototype.toggle = function (e) {
                    if (e) {
                        var n = this.constructor.DATA_KEY, i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(m.SHOW)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }, h.prototype.dispose = function () {
                    clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                }, h.prototype.show = function () {
                    var e = this;
                    if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var n = t.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                        t(this.element).trigger(n);
                        var i = t.contains(this.element.ownerDocument.documentElement, this.element);
                        if (n.isDefaultPrevented() || !i) return;
                        var o = this.getTipElement(), s = r.getUID(this.constructor.NAME);
                        o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(m.FADE);
                        var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                            l = this._getAttachment(a),
                            c = this.config.container === !1 ? document.body : t(this.config.container);
                        t(o).data(this.constructor.DATA_KEY, this).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                            attachment: l,
                            element: o,
                            target: this.element,
                            classes: v,
                            classPrefix: u,
                            offset: this.config.offset,
                            constraints: this.config.constraints,
                            addTargetClasses: !1
                        }), r.reflow(o), this._tether.position(), t(o).addClass(m.SHOW);
                        var d = function () {
                            var n = e._hoverState;
                            e._hoverState = null, e._isTransitioning = !1, t(e.element).trigger(e.constructor.Event.SHOWN), n === g.OUT && e._leave(null, e)
                        };
                        if (r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE)) return this._isTransitioning = !0, void t(this.tip).one(r.TRANSITION_END, d).emulateTransitionEnd(h._TRANSITION_DURATION);
                        d()
                    }
                }, h.prototype.hide = function (e) {
                    var n = this, i = this.getTipElement(), o = t.Event(this.constructor.Event.HIDE);
                    if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                    var s = function () {
                        n._hoverState !== g.SHOW && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), n._isTransitioning = !1, n.cleanupTether(), e && e()
                    };
                    t(this.element).trigger(o), o.isDefaultPrevented() || (t(i).removeClass(m.SHOW), this._activeTrigger[T.CLICK] = !1, this._activeTrigger[T.FOCUS] = !1, this._activeTrigger[T.HOVER] = !1, r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE) ? (this._isTransitioning = !0, t(i).one(r.TRANSITION_END, s).emulateTransitionEnd(c)) : s(), this._hoverState = "")
                }, h.prototype.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, h.prototype.getTipElement = function () {
                    return this.tip = this.tip || t(this.config.template)[0]
                }, h.prototype.setContent = function () {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(E.TOOLTIP_INNER), this.getTitle()), e.removeClass(m.FADE + " " + m.SHOW), this.cleanupTether()
                }, h.prototype.setElementContent = function (e, n) {
                    var o = this.config.html;
                    "object" === ("undefined" == typeof n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? o ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[o ? "html" : "text"](n)
                }, h.prototype.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                }, h.prototype.cleanupTether = function () {
                    this._tether && this._tether.destroy()
                }, h.prototype._getAttachment = function (t) {
                    return _[t.toUpperCase()]
                }, h.prototype._setListeners = function () {
                    var e = this, n = this.config.trigger.split(" ");
                    n.forEach(function (n) {
                        if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                            return e.toggle(t)
                        }); else if (n !== T.MANUAL) {
                            var i = n === T.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                o = n === T.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            t(e.element).on(i, e.config.selector, function (t) {
                                return e._enter(t)
                            }).on(o, e.config.selector, function (t) {
                                return e._leave(t)
                            })
                        }
                        t(e.element).closest(".modal").on("hide.bs.modal", function () {
                            return e.hide()
                        })
                    }), this.config.selector ? this.config = t.extend({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, h.prototype._fixTitle = function () {
                    var t = i(this.element.getAttribute("data-original-title"));
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, h.prototype._enter = function (e, n) {
                    var i = this.constructor.DATA_KEY;
                    return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T.FOCUS : T.HOVER] = !0), t(n.getTipElement()).hasClass(m.SHOW) || n._hoverState === g.SHOW ? void(n._hoverState = g.SHOW) : (clearTimeout(n._timeout), n._hoverState = g.SHOW, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function () {
                        n._hoverState === g.SHOW && n.show()
                    }, n.config.delay.show)) : void n.show())
                }, h.prototype._leave = function (e, n) {
                    var i = this.constructor.DATA_KEY;
                    if (n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T.FOCUS : T.HOVER] = !1), !n._isWithActiveTrigger()) return clearTimeout(n._timeout), n._hoverState = g.OUT, n.config.delay && n.config.delay.hide ? void(n._timeout = setTimeout(function () {
                        n._hoverState === g.OUT && n.hide()
                    }, n.config.delay.hide)) : void n.hide()
                }, h.prototype._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                    return !1
                }, h.prototype._getConfig = function (n) {
                    return n = t.extend({}, this.constructor.Default, t(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = {
                        show: n.delay,
                        hide: n.delay
                    }), r.typeCheckConfig(e, n, this.constructor.DefaultType), n
                }, h.prototype._getDelegateConfig = function () {
                    var t = {};
                    if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                }, h._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = t(this).data(a), o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;
                        if ((n || !/dispose|hide/.test(e)) && (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e)) {
                            if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                            n[e]()
                        }
                    })
                }, o(h, null, [{
                    key: "VERSION", get: function () {
                        return s
                    }
                }, {
                    key: "Default", get: function () {
                        return d
                    }
                }, {
                    key: "NAME", get: function () {
                        return e
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return a
                    }
                }, {
                    key: "Event", get: function () {
                        return p
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return l
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return f
                    }
                }]), h
            }();
        return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
            return t.fn[e] = h, I._jQueryInterface
        }, I
    }(jQuery));
    (function (r) {
        var a = "popover", l = "4.0.0-alpha.6", h = "bs.popover", c = "." + h, u = r.fn[a],
            d = r.extend({}, s.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }), f = r.extend({}, s.DefaultType, {content: "(string|element|function)"}),
            _ = {FADE: "fade", SHOW: "show"}, g = {TITLE: ".popover-title", CONTENT: ".popover-content"}, p = {
                HIDE: "hide" + c,
                HIDDEN: "hidden" + c,
                SHOW: "show" + c,
                SHOWN: "shown" + c,
                INSERTED: "inserted" + c,
                CLICK: "click" + c,
                FOCUSIN: "focusin" + c,
                FOCUSOUT: "focusout" + c,
                MOUSEENTER: "mouseenter" + c,
                MOUSELEAVE: "mouseleave" + c
            }, m = function (s) {
                function u() {
                    return n(this, u), t(this, s.apply(this, arguments))
                }

                return e(u, s), u.prototype.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, u.prototype.getTipElement = function () {
                    return this.tip = this.tip || r(this.config.template)[0]
                }, u.prototype.setContent = function () {
                    var t = r(this.getTipElement());
                    this.setElementContent(t.find(g.TITLE), this.getTitle()), this.setElementContent(t.find(g.CONTENT), this._getContent()), t.removeClass(_.FADE + " " + _.SHOW), this.cleanupTether()
                }, u.prototype._getContent = function () {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                }, u._jQueryInterface = function (t) {
                    return this.each(function () {
                        var e = r(this).data(h), n = "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? t : null;
                        if ((e || !/destroy|hide/.test(t)) && (e || (e = new u(this, n), r(this).data(h, e)), "string" == typeof t)) {
                            if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
                            e[t]()
                        }
                    })
                }, o(u, null, [{
                    key: "VERSION", get: function () {
                        return l
                    }
                }, {
                    key: "Default", get: function () {
                        return d
                    }
                }, {
                    key: "NAME", get: function () {
                        return a
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return h
                    }
                }, {
                    key: "Event", get: function () {
                        return p
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return c
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return f
                    }
                }]), u
            }(s);
        return r.fn[a] = m._jQueryInterface, r.fn[a].Constructor = m, r.fn[a].noConflict = function () {
            return r.fn[a] = u, m._jQueryInterface
        }, m
    })(jQuery)
}();
(function (b) {
    var c = b(window);
    /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
    ;var a = window.matchMedia = window.matchMedia || (function (i, j) {
        var g;
        var e = i.documentElement;
        var f = e.firstElementChild || e.firstChild;
        var h = i.createElement("body");
        var k = i.createElement("div");
        k.id = "mq-test-1";
        k.style.cssText = "position:absolute;top:-100em";
        h.style.background = "none";
        h.appendChild(k);
        return function (l) {
            k.innerHTML = '&shy;<style media="' + l + '"> #mq-test-1 { width: 42px; }</style>';
            e.insertBefore(h, f);
            g = k.offsetWidth === 42;
            h.parentNode.removeChild(h);
            return {matches: g, media: l}
        }
    }(document));
    var d = function (f, e) {
        this.$el = b(f);
        this.$contents = this.$el;
        this.$home = this.$el.parent();
        if (this.$el.children().length) {
            this.$contents = this.$el.children();
            this.$home = this.$el
        }
        this.aliases = b.extend({}, d.aliases, e);
        this.queries = this.getQueries();
        this.check();
        c.on("resize:transport", b.proxy(this.check, this))
    };
    d.aliases = {};
    d.prototype = {
        ship: function (e) {
            var f = b(e);
            if (f.length === 0) {
                console.warn("Transport location was not found:", e)
            }
            if (!f.has(this.$el).length) {
                this.$contents.appendTo(e);
                this.$el.trigger("transport", f)
            }
        }, check: function () {
            var f = this.$home;
            var g = this.queries;
            var e = g.length;
            for (var h = 0; h < e; h++) {
                if (a(g[h].rule).matches) {
                    f = g[h].element
                }
            }
            this.ship(f)
        }, getQueries: function () {
            var f = this.$el.data("transport") || "";
            var e = this.aliases;
            return b.map(f.split("|"), function (j) {
                var i = j.split("!");
                var h = i[0];
                var g = i[1];
                h = e[h] || h;
                return {rule: h, element: g}
            })
        }
    };
    c.on("resize", function () {
        clearTimeout(d.timeout);
        d.timeout = setTimeout(function () {
            c.trigger("resize:transport")
        }, 250)
    });
    b.fn.transport = function (e) {
        this.each(function () {
            return b(this).data("pluginTransport", new d(this, e))
        })
    }
}(window.jQuery));
(function ($) {
    $.fn.materialmenu = function (options) {
        var options = $.extend({
            /**
             * Define width of the window (in pixels) where starts mobile devices.
             * @type integer
             */
            mobileWidth: 767,
            /**
             * Width of the wrapper of menu. Works only on mbile.
             * @type integer
             */
            width: 250,
            /**
             * Time of animation.
             * @type integer
             */
            animationTime: 200,
            /**
             * Overlay opacity.
             * @type integer
             */
            overlayOpacity: 0.4,
            /**
             * Class of menu button that fires showing of menu.
             * @type string
             */
            buttonClass: 'material-menu-button',
            /**
             * If you want, you can define Your own menu button,
             * that be appended to generated title.
             * @type string
             */
            buttonHTML: '<div class="material-menu-button"><span></span><span></span><span></span></div>',
            /**
             * Page title, showed on mobile devices.
             * @type string
             */
            title: '',
            /**
             * Tells if title can be showed on mobile devices (only).
             * @type boolean
             */
            showTitle: false,
            /**
             * Number of pixels to scroll top, when title is showed on mobile devices.
             * If is 0, title will always be visible on top.
             * @type integer
             */
            titleShowOn: 40,
            /**
             * If true, menu will hide when user click on some menu item.
             * @type boolean
             */
            hideOnClick: true,
            /**
             * Fires when menu is opened.
             * @param  jQuery object element Menu (ul) object.
             * @return void
             */
            onOpen: function (element) {
            },
            /**
             * Fires when menu is closed.
             * @param  jQuery object element Menu (ul) object.
             * @return void
             */
            onClose: function (element) {
            },
            /**
             * Fires when window width is chenged from desktop to mobile.
             * @param  jQuery object element Menu (ul) object.
             * @return void
             */
            onChangeMobile: function (element) {
                element.parent().parent().addClass('vertical');
            },
            /**
             * Fires when window width is chenged from mobile to desktop.
             * @param  jQuery object element Menu (ul) object.
             * @return void
             */
            onChangeDesktop: function (element) {
                element.parent().parent().removeClass('vertical');
            },
            /**
             * Fires when title-bar is opened.
             * @param  jQuery object element Title-bar object.
             * @return void
             */
            onShowTitlebar: function (element) {
            },
            /**
             * Fires when title-bar is closed.
             * @param  jQuery object element Title-bar object.
             * @return void
             */
            onHideTitlebar: function (element) {
            }
        }, options);

        var MaterialMenu = function (element, options) {
            /**
             * Plugin options.
             * @type object
             */
            this.options = options;

            /**
             * Menu object.
             * @type jQuery object
             */
            this.element = element;

            /**
             * Overlay object.
             * @type jQuery object
             */
            this.overlay = $([]);

            /**
             * Title bar object.
             * @type jQuery object
             */
            this.title = $([]);

            /**
             * Tells if the title-bar is already opened.
             * @type boolean
             */
            this.isTitleShowed = false;

            /**
             * Tells if the menu is already opened.
             * @type boolean
             */
            this.isShowed = false;

            /**
             * Tells if this type of view was already changed.
             * This prevents multiple events,
             * @type boolean
             */
            this.changedOnMobile = false;

            /**
             * Tells if this type of view was already changed.
             * This prevents multiple events,
             * @type boolean
             */
            this.changedOnDesktop = false;

            /**
             * Coordinates of start's touch.
             * @type object
             */
            this.touchPosStart = {
                y: 0,
                x: 0
            };

            /**
             * Coordinates of end's touch.
             * @type object
             */
            this.touchPosEnd = {
                y: 0,
                x: 0
            };

            /**
             * Main, initialize function.
             * @return void
             */
            this.init = function () {
                var self = this;

                this.prepare();

                this.showMenuDependentByWidth();

                this.bindEvents();

                $(window).resize(function () {
                    self.showMenuDependentByWidth();
                });
            };

            /**
             * Prepares elements.
             * @return void
             */
            this.prepare = function () {
                this.element.wrap($('<div />', {'class': 'material-menu-wrapper'}));

                /**
                 * If title have to be showed on page, we create it.
                 */
                if (this.options.showTitle) {
                    /**
                     * If title-bar already exists, we don't need create another one.
                     */
                    var title = $('.material-menu-titlebar');

                    if (title.length == 0) {
                        $('<div />', {
                            'class': 'material-menu-titlebar',
                            'style': 'display:block;position:fixed;left:0px;top:0px;width:100%;height:50px;;background-color:#f55100;z-index:11;'
                        }).appendTo('body');

                        // Get title element
                        this.title = $('.material-menu-titlebar');

                        // Add menu button
                        this.title.append($(this.options.buttonHTML).addClass(this.options.buttonClass).css({
                            'float': 'right',
                            'margin': '0px'
                        }));

                        // Add title text
                        this.title.append('<div class="material-menu-title" style="float:left;line-height:50px;;height:50px;;margin-left:10px;">' + this.options.title + '</div>');

                        // Show or hide title-bar, by user defined option
                        if (this.options.titleShowOn == 0)
                            this.showTitle();
                        else
                            this.hideTitle();
                    } else {
                        this.title = title;
                    }

                    this.title.hide();
                }


                var overlay = $('.material-menu-overlay');

                /**
                 * If overlay already exists, we don't need create another one.
                 */
                if (overlay.length == 1) {
                    this.overlay = overlay;
                }
                /**
                 * If not exists, we create it.
                 */
                else {
                    $('<div />', {
                        'class': 'material-menu-overlay',
                        'style': 'display:block;position:fixed;left:0px;top:0px;width:100%;height:100%;z-index:1;background-color:#000000;'
                    }).appendTo('body');

                    this.overlay = $('.material-menu-overlay');
                }

                this.overlay
                // When we show overlay, help us an fade function, so we have to
                // hide element by opacity too.
                    .fadeTo(0, 0)
                    // Default, overlay must be hidden
                    .css('display', 'none');
            };

            /**
             * Bind events on elements.
             * @return void
             */
            this.bindEvents = function () {
                var self = this;

                // Menu button
                $('.' + this.options.buttonClass).click(function () {
                    if (self.isShowed)
                        self.close();
                    else
                        self.open();
                });

                // Overlay
                this.overlay.click(function () {
                    self.close();
                });

                // Title
                $(window).scroll(function () {
                    if ($(this).scrollTop() >= self.options.titleShowOn)
                        self.showTitle();
                    else
                        self.hideTitle();
                });

                if ($(window).scrollTop() >= self.options.titleShowOn) {
                    self.showTitle();
                }

                // Hide on click in menu item
                if (self.options.hideOnClick) {
                    self.element.find('a').click(function () {
                        self.close();
                    });
                }

                // Close on touch slide in left
                this.bindTouchClose();
            };

            /**
             * Function change menu parent class and style dependent by window width.
             * @return void
             */
            this.showMenuDependentByWidth = function () {
                if (this.getWindowWidth() <= this.options.mobileWidth)
                    this.showForMobile();
                else
                    this.showForDesktop();

                if (this.isShowed)
                    this.close();
            };

            /**
             * Do operations when width of client windowd is smaller than mobile breakpoint.
             * @return void
             */
            this.showForMobile = function () {
                // Prevent multiple changes / events
                if (this.changedOnMobile == false) {
                    this.element
                        .parent() // parent == wrapper
                        .removeClass('material-menu-view-desktop')
                        .addClass('material-menu-view-mobile')
                        .css({
                            display: 'none',
                            position: 'fixed',
                            top: '0px',
                            zIndex: '999999',
                            overflow: 'auto',
                            height: '100%',
                            width: this.getMenuWidth() + 'px',
                            left: '-' + this.getMenuWidth() + 'px'
                        });

                    if (this.options.showTitle) {
                        this.showTitle();
                    }

                    this.changedOnDesktop = false;
                    this.changedOnMobile = true;

                    this.options.onChangeMobile(this.element);
                }
            };

            /**
             * Do operations when width of client windowd is bigger than mobile breakpoint.
             * @return void
             */
            this.showForDesktop = function () {
                // Prevent multiple changes / events
                if (this.changedOnDesktop == false) {
                    this.element
                        .parent() // parent == wrapper
                        .removeClass('material-menu-view-mobile')
                        .addClass('material-menu-view-desktop')
                        .css({
                            display: 'block',
                            position: 'static',
                            top: 'auto',
                            zIndex: 'auto',
                            overflow: 'visible',
                            height: 'auto',
                            width: 'auto',
                            left: 'auto'
                        });

                    if (this.options.showTitle) {
                        this.hideTitle();
                    }

                    this.changedOnDesktop = true;
                    this.changedOnMobile = false;

                    this.options.onChangeDesktop(this.element);
                }
            };

            /**
             * Opens menu.
             * @return void
             */
            this.open = function () {
                var self = this;

                if (self.isShowed == false && self.getWindowWidth() <= self.options.mobileWidth) {
                    self.isShowed = true;

                    self.element.parent().show().animate({
                        left: '0px'
                    }, self.options.animationTime);

                    self.overlay.css('display', 'block').fadeTo(self.options.animationTime, self.options.overlayOpacity);

                    // We stop scrolling (desktop) body, when user see menu
                    $('body').css('overflow', 'hidden');

                    self.options.onOpen(self.element);
                }
            };

            /**
             * Close menu.
             * @return void
             */
            this.close = function () {
                var self = this;

                if (self.isShowed == true) {
                    self.isShowed = false;

                    self.element.parent().animate({
                        left: '-' + self.getMenuWidth() + 'px'
                    }, self.options.animationTime, function () {
                        $(this).hide();
                    });

                    self.overlay.fadeTo(self.options.animationTime, 0, function () {
                        $(this).css('display', 'none');
                        self.options.onClose(self.element);
                    });

                    // We stop scrolling (desktop) body, when user see menu
                    $('body').css('overflow', 'auto');
                }
            };

            /**
             * Shows title.
             * @return void
             */
            this.showTitle = function () {
                if (this.isTitleShowed == false && this.changedOnMobile == true) {
                    this.title.show().fadeTo(this.options.animationTime, 1);
                    this.isTitleShowed = true;
                    this.options.onShowTitlebar(this.title);
                }
            };

            /**
             * Hide title.
             * @return void
             */
            this.hideTitle = function () {
                if (this.isTitleShowed == true) {
                    this.title.fadeTo(this.options.animationTime, 0, function () {
                        $(this).hide();
                    });
                    this.isTitleShowed = false;
                    this.options.onHideTitlebar(this.title);
                }
            };

            /**
             * Closes menu when user swipe to left on menu or it's overlay.
             * @return void
             */
            this.bindTouchClose = function () {
                var self = this;
                var elements = [this.element, this.overlay];

                for (var i in elements) {
                    if (elements[i][0] && elements[i][0].addEventListener && !elements[i].data('materialmenu-binded-touchclose')) {
                        elements[i].data('materialmenu-binded-touchclose', '1');

                        elements[i][0].addEventListener('touchstart', function (event) {
                            self.touchPosStart.x = event.touches[0].pageX;
                            self.touchPosStart.y = event.touches[0].pageY;
                        }, false);

                        elements[i][0].addEventListener('touchend', function (event) {
                            if (self.getTouchDirection() == 'left') {
                                self.close();
                            }
                        }, false);

                        elements[i][0].addEventListener('touchmove', function (event) {
                            self.touchPosEnd.x = event.touches[0].pageX;
                            self.touchPosEnd.y = event.touches[0].pageY;
                        }, false);
                    }
                }
            };

            /**
             * Returns menu width in pixels in mobile view.
             * @return integer
             */
            this.getMenuWidth = function () {
                return this.options.width;
            };

            /**
             * Returns client window width in pixels.
             * @return integer
             */
            this.getWindowWidth = function () {
                //Non-IE
                if (typeof (window.innerWidth) == 'number')
                    return window.innerWidth;
                //IE 6+ in 'standards compliant mode'
                else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight))
                    return document.documentElement.clientWidth;
                //IE 4 compatible
                else if (document.body && (document.body.clientWidth || document.body.clientHeight))
                    return document.body.clientWidth;
                else
                    return $('body, html').width();
            };

            /**
             * Calculate and returns direction which user move his finger (touch).
             * @return string Name of direction.
             */
            this.getTouchDirection = function () {
                var differenceX = Math.abs(this.touchPosStart.x - this.touchPosEnd.x);
                var differenceY = Math.abs(this.touchPosStart.y - this.touchPosEnd.y);

                if (differenceX > differenceY)
                    if (this.touchPosStart.x > this.touchPosEnd.x)
                        return 'left';
                    else
                        return 'right';
                else if (this.touchPosStart.y > this.touchPosEnd.y)
                    return 'up';
                else
                    return 'down';
            };
        };

        return $(this).each(function () {
            var menu = new MaterialMenu($(this), options);
            menu.init();
        });
    };
})(jQuery);
/**
 * Swiper 4.2.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 1, 2018
 */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function () {
    "use strict";
    var e = "undefined" == typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document, t = "undefined" == typeof window ? {
        document: e,
        navigator: {userAgent: ""},
        location: {},
        history: {},
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        }
    } : window, i = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    };

    function s(s, a) {
        var r = [], n = 0;
        if (s && !a && s instanceof i) return s;
        if (s) if ("string" == typeof s) {
            var o, l, d = s.trim();
            if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                var h = "div";
                for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n])
            } else for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n])
        } else if (s.nodeType || s === t || s === e) r.push(s); else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) r.push(s[n]);
        return new i(r)
    }

    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }

    s.fn = i.prototype, s.Class = i, s.Dom7 = i;
    var r = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        }, removeClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        }, hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        }, toggleClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        }, attr: function (e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1) if (2 === i.length) this[s].setAttribute(e, t); else for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, data: function (e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1) (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        }, transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        }, on: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var a = t[0], r = t[1], n = t[2], o = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.unshift(e), s(t).is(r)) n.apply(t, i); else for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i)
                }
            }

            function d(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.unshift(e), n.apply(this, t)
            }

            "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r) for (h = 0; h < p.length; h += 1) u.dom7LiveListeners || (u.dom7LiveListeners = []), u.dom7LiveListeners.push({
                    type: a,
                    listener: n,
                    proxyListener: l
                }), u.addEventListener(p[h], l, o); else for (h = 0; h < p.length; h += 1) u.dom7Listeners || (u.dom7Listeners = []), u.dom7Listeners.push({
                    type: a,
                    listener: n,
                    proxyListener: d
                }), u.addEventListener(p[h], d, o)
            }
            return this
        }, off: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0], a = t[1], r = t[2], n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1) for (var d = 0; d < this.length; d += 1) {
                var h = this[d];
                if (a) {
                    if (h.dom7LiveListeners) for (var p = 0; p < h.dom7LiveListeners.length; p += 1) r ? h.dom7LiveListeners[p].listener === r && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n) : h.dom7LiveListeners[p].type === o[l] && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n)
                } else if (h.dom7Listeners) for (var c = 0; c < h.dom7Listeners.length; c += 1) r ? h.dom7Listeners[c].listener === r && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n) : h.dom7Listeners[c].type === o[l] && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n)
            }
            return this
        }, trigger: function () {
            for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) for (var o = 0; o < this.length; o += 1) {
                var l = void 0;
                try {
                    l = new t.CustomEvent(a[n], {detail: r, bubbles: !0, cancelable: !0})
                } catch (t) {
                    (l = e.createEvent("Event")).initEvent(a[n], !0, !0), l.detail = r
                }
                this[o].dom7EventData = i.filter(function (e, t) {
                    return t > 0
                }), this[o].dispatchEvent(l), this[o].dom7EventData = [], delete this[o].dom7EventData
            }
            return this
        }, transitionEnd: function (e) {
            var t, i = ["webkitTransitionEnd", "transitionend"], s = this;

            function a(r) {
                if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
            }

            if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, offset: function () {
            if (this.length > 0) {
                var i = this[0], s = i.getBoundingClientRect(), a = e.body, r = i.clientTop || a.clientTop || 0,
                    n = i.clientLeft || a.clientLeft || 0, o = i === t ? t.scrollY : i.scrollTop,
                    l = i === t ? t.scrollX : i.scrollLeft;
                return {top: s.top + o - r, left: s.left + l - n}
            }
            return null
        }, css: function (e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1) for (var a in e) this[s].style[a] = e[a];
                    return this
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
                return this
            }
            return this
        }, each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (a) {
            var r, n, o = this[0];
            if (!o || void 0 === a) return !1;
            if ("string" == typeof a) {
                if (o.matches) return o.matches(a);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector) return o.msMatchesSelector(a);
                for (r = s(a), n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
                return !1
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
        }, append: function () {
            for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1) if ("string" == typeof t) {
                    var o = e.createElement("div");
                    for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild)
                } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]); else this[n].appendChild(t)
            }
            return this
        }, prepend: function (t) {
            var s, a;
            for (s = 0; s < this.length; s += 1) if ("string" == typeof t) {
                var r = e.createElement("div");
                for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
            } else if (t instanceof i) for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]); else this[s].insertBefore(t, this[s].childNodes[0]);
            return this
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
        }, nextAll: function (e) {
            var t = [], a = this[0];
            if (!a) return new i([]);
            for (; a.nextElementSibling;) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        }, prev: function (e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
            }
            return new i([])
        }, prevAll: function (e) {
            var t = [], a = this[0];
            if (!a) return new i([]);
            for (; a.previousElementSibling;) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        }, parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t))
        }, parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
            return s(a(t))
        }, closest: function (e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            for (var t = [], s = 0; s < this.length; s += 1) for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
            return new i(t)
        }, children: function (e) {
            for (var t = [], r = 0; r < this.length; r += 1) for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t))
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }, add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, a;
            for (i = 0; i < e.length; i += 1) {
                var r = s(e[i]);
                for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1
            }
            return this
        }, styles: function () {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(r).forEach(function (e) {
        s.fn[e] = r[e]
    });
    var n, o, l, d = {
        deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            })
        }, nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (e, i) {
            var s, a, r;
            void 0 === i && (i = "x");
            var n = t.getComputedStyle(e, null);
            return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function (e) {
                return e.replace(",", ".")
            }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0
        }, parseUrlQuery: function (e) {
            var i, s, a, r, n = {}, o = e || t.location.href;
            if ("string" == typeof o && o.length) for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                return "" !== e
            })).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
            return n
        }, isObject: function (e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s];
                if (void 0 !== a && null !== a) for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                    var l = r[n], h = Object.getOwnPropertyDescriptor(a, l);
                    void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l])
                }
            }
            return i
        }
    }, h = (l = e.createElement("div"), {
        touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
        pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
        prefixedPointerEvents: !!t.navigator.msPointerEnabled,
        transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o),
        transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (n = l.style, "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n),
        flexbox: function () {
            for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1) if (t[i] in e) return !0;
            return !1
        }(),
        observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
        passiveListener: function () {
            var e = !1;
            try {
                var i = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0
                    }
                });
                t.addEventListener("testPassiveListener", null, i)
            } catch (e) {
            }
            return e
        }(),
        gestures: "ongesturestart" in t
    }), p = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e])
        })
    }, c = {components: {configurable: !0}};
    p.prototype.on = function (e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
        }), s
    }, p.prototype.once = function (e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        return s.on(e, function i() {
            for (var a = [], r = arguments.length; r--;) a[r] = arguments[r];
            t.apply(s, a), s.off(e, i)
        }, i)
    }, p.prototype.off = function (e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function (e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function (s, a) {
                s === t && i.eventsListeners[e].splice(a, 1)
            })
        }), i) : i
    }, p.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, s, a, r = this;
        return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function (e) {
                    t.push(e)
                }), t.forEach(function (e) {
                    e.apply(a, s)
                })
            }
        }), r) : r
    }, p.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
            var s = t.modules[i];
            s.params && d.extend(e, s.params)
        })
    }, p.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
            var s = t.modules[i], a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach(function (e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }), s.on && t.on && Object.keys(s.on).forEach(function (e) {
                t.on(e, s.on[e])
            }), s.create && s.create.bind(t)(a)
        })
    }, c.components.set = function (e) {
        this.use && this.use(e)
    }, p.installModule = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
        return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
            s.prototype[t] = e.proto[t]
        }), e.static && Object.keys(e.static).forEach(function (t) {
            s[t] = e.static[t]
        }), e.install && e.install.apply(s, t), s
    }, p.use = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach(function (e) {
            return s.installModule(e)
        }), s) : s.installModule.apply(s, [e].concat(t))
    }, Object.defineProperties(p, c);
    var u = {
        updateSize: function () {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        }, updateSlides: function () {
            var e = this.params, i = this.$wrapperEl, s = this.size, a = this.rtlTranslate, r = this.wrongRTL,
                n = i.children("." + this.params.slideClass),
                o = this.virtual && e.virtual.enabled ? this.virtual.slides.length : n.length, l = [], p = [], c = [],
                u = e.slidesOffsetBefore;
            "function" == typeof u && (u = e.slidesOffsetBefore.call(this));
            var v = e.slidesOffsetAfter;
            "function" == typeof v && (v = e.slidesOffsetAfter.call(this));
            var f = o, m = this.snapGrid.length, g = this.snapGrid.length, b = e.spaceBetween, w = -u, y = 0, x = 0;
            if (void 0 !== s) {
                var E, T;
                "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), this.virtualSize = -b, a ? n.css({
                    marginLeft: "",
                    marginTop: ""
                }) : n.css({
                    marginRight: "",
                    marginBottom: ""
                }), e.slidesPerColumn > 1 && (E = Math.floor(o / e.slidesPerColumn) === o / this.params.slidesPerColumn ? o : Math.ceil(o / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                for (var S, C = e.slidesPerColumn, M = E / C, z = M - (e.slidesPerColumn * M - o), k = 0; k < o; k += 1) {
                    T = 0;
                    var P = n.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var $ = void 0, L = void 0, I = void 0;
                        "column" === e.slidesPerColumnFill ? (I = k - (L = Math.floor(k / C)) * C, (L > z || L === z && I === C - 1) && (I += 1) >= C && (I = 0, L += 1), $ = L + I * E / C, P.css({
                            "-webkit-box-ordinal-group": $,
                            "-moz-box-ordinal-group": $,
                            "-ms-flex-order": $,
                            "-webkit-order": $,
                            order: $
                        })) : L = k - (I = Math.floor(k / M)) * M, P.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== I && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", I)
                    }
                    if ("none" !== P.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var D = t.getComputedStyle(P[0], null);
                            T = this.isHorizontal() ? P[0].getBoundingClientRect().width + parseFloat(D.getPropertyValue("margin-left")) + parseFloat(D.getPropertyValue("margin-right")) : P[0].getBoundingClientRect().height + parseFloat(D.getPropertyValue("margin-top")) + parseFloat(D.getPropertyValue("margin-bottom")), e.roundLengths && (T = Math.floor(T))
                        } else T = (s - (e.slidesPerView - 1) * b) / e.slidesPerView, e.roundLengths && (T = Math.floor(T)), n[k] && (this.isHorizontal() ? n[k].style.width = T + "px" : n[k].style.height = T + "px");
                        n[k] && (n[k].swiperSlideSize = T), c.push(T), e.centeredSlides ? (w = w + T / 2 + y / 2 + b, 0 === y && 0 !== k && (w = w - s / 2 - b), 0 === k && (w = w - s / 2 - b), Math.abs(w) < .001 && (w = 0), x % e.slidesPerGroup == 0 && l.push(w), p.push(w)) : (x % e.slidesPerGroup == 0 && l.push(w), p.push(w), w = w + T + b), this.virtualSize += T + b, y = T, x += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, s) + v, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({width: this.virtualSize + e.spaceBetween + "px"}), h.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({width: this.virtualSize + e.spaceBetween + "px"}) : i.css({height: this.virtualSize + e.spaceBetween + "px"})), e.slidesPerColumn > 1 && (this.virtualSize = (T + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({width: this.virtualSize + e.spaceBetween + "px"}) : i.css({height: this.virtualSize + e.spaceBetween + "px"}), e.centeredSlides)) {
                    S = [];
                    for (var O = 0; O < l.length; O += 1) l[O] < this.virtualSize + l[0] && S.push(l[O]);
                    l = S
                }
                if (!e.centeredSlides) {
                    S = [];
                    for (var A = 0; A < l.length; A += 1) l[A] <= this.virtualSize - s && S.push(l[A]);
                    l = S, Math.floor(this.virtualSize - s) - Math.floor(l[l.length - 1]) > 1 && l.push(this.virtualSize - s)
                }
                0 === l.length && (l = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? n.css({marginLeft: b + "px"}) : n.css({marginRight: b + "px"}) : n.css({marginBottom: b + "px"})), d.extend(this, {
                    slides: n,
                    snapGrid: l,
                    slidesGrid: p,
                    slidesSizesGrid: c
                }), o !== f && this.emit("slidesLengthChange"), l.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), p.length !== g && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        }, updateAutoHeight: function (e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                var a = this.activeIndex + t;
                if (a > this.slides.length) break;
                i.push(this.slides.eq(a)[0])
            } else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
                var r = i[t].offsetHeight;
                s = r > s ? r : s
            }
            s && this.$wrapperEl.css("height", s + "px")
        }, updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this.translate || 0);
            var t = this.params, i = this.slides, s = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e), i.removeClass(t.slideVisibleClass);
                for (var r = 0; r < i.length; r += 1) {
                    var n = i[r],
                        o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var l = -(a - n.swiperSlideOffset), d = l + this.slidesSizesGrid[r];
                        (l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(r).addClass(t.slideVisibleClass)
                    }
                    n.progress = s ? -o : o
                }
            }
        }, updateProgress: function (e) {
            void 0 === e && (e = this.translate || 0);
            var t = this.params, i = this.maxTranslate() - this.minTranslate(), s = this.progress, a = this.isBeginning,
                r = this.isEnd, n = a, o = r;
            0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), d.extend(this, {
                progress: s,
                isBeginning: a,
                isEnd: r
            }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s)
        }, updateSlidesClasses: function () {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex,
                n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        }, updateActiveIndex: function (e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid,
                r = this.params, n = this.activeIndex, o = this.realIndex, l = this.snapIndex, h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== n) {
                var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                d.extend(this, {
                    snapIndex: t,
                    realIndex: c,
                    previousIndex: n,
                    activeIndex: h
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), this.emit("slideChange")
            } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
        }, updateClickedSlide: function (e) {
            var t = this.params, i = s(e.target).closest("." + t.slideClass)[0], a = !1;
            if (i) for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
            if (!i || !a) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var v = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, i = this.rtlTranslate, s = this.translate, a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            var r = d.getTranslate(a[0], e);
            return i && (r = -r), r || 0
        }, setTranslate: function (e, t) {
            var i = this.rtlTranslate, s = this.params, a = this.$wrapperEl, r = this.progress, n = 0, o = 0;
            this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")), this.translate = this.isHorizontal() ? n : o;
            var l = this.maxTranslate() - this.minTranslate();
            (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var f = {
        setTransition: function (e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        }, transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.params, a = this.previousIndex;
            s.autoHeight && this.updateAutoHeight();
            var r = t;
            if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                if ("reset" === r) return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
            }
        }, transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.previousIndex;
            this.animating = !1, this.setTransition(0);
            var a = t;
            if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                if ("reset" === a) return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
            }
        }
    };
    var m = {
        slideTo: function (e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = this, r = e;
            r < 0 && (r = 0);
            var n = a.params, o = a.snapGrid, l = a.slidesGrid, d = a.previousIndex, p = a.activeIndex,
                c = a.rtlTranslate, u = a.$wrapperEl;
            if (a.animating && n.preventIntercationOnTransition) return !1;
            var v = Math.floor(r / n.slidesPerGroup);
            v >= o.length && (v = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
            var f, m = -o[v];
            if (a.updateProgress(m), n.normalizeSlideIndex) for (var g = 0; g < l.length; g += 1) -Math.floor(100 * m) >= Math.floor(100 * l[g]) && (r = g);
            if (a.initialized && r !== p) {
                if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
                if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (p || 0) !== r) return !1
            }
            return f = r > p ? "next" : r < p ? "prev" : "reset", c && -m === a.translate || !c && m === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1) : (0 !== t && h.transition ? (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.animating || (a.animating = !0, u.transitionEnd(function () {
                a && !a.destroyed && a.transitionEnd(i, f)
            }))) : (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f)), !0)
        }, slideToLoop: function (e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
        }, slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating;
            return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
        }, slidePrev: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating, r = this.snapGrid, n = this.slidesGrid, o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            var l, d = o ? this.translate : -this.translate, h = (r[r.indexOf(d)], r[r.indexOf(d) - 1]);
            return h && (l = n.indexOf(h)) < 0 && (l = this.activeIndex - 1), this.slideTo(l, e, t, i)
        }, slideReset: function (e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
        }, slideToClosest: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.activeIndex, a = Math.floor(s / this.params.slidesPerGroup);
            if (a < this.snapGrid.length - 1) {
                var r = this.rtlTranslate ? this.translate : -this.translate, n = this.snapGrid[a];
                r - n > (this.snapGrid[a + 1] - n) / 2 && (s = this.params.slidesPerGroup)
            }
            return this.slideTo(s, e, t, i)
        }, slideToClickedSlide: function () {
            var e, t = this, i = t.params, a = t.$wrapperEl,
                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, n = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
                    t.slideTo(n)
                })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
                    t.slideTo(n)
                })) : t.slideTo(n)
            } else t.slideTo(n)
        }
    };
    var g = {
        loopCreate: function () {
            var t = this, i = t.params, a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                if (n !== i.slidesPerGroup) {
                    for (var o = 0; o < n; o += 1) {
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l)
                    }
                    r = a.children("." + i.slideClass)
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = [], h = [];
            r.each(function (e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e)
            });
            for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
        }, loopFix: function () {
            var e, t = this.params, i = this.activeIndex, s = this.slides, a = this.loopedSlides,
                r = this.allowSlidePrev, n = this.allowSlideNext, o = this.snapGrid, l = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var d = -o[i] - this.getTranslate();
            i < a ? (e = s.length - 3 * a + i, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i > s.length - 2 * t.slidesPerView) && (e = -s.length + i + a, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));
            this.allowSlidePrev = r, this.allowSlideNext = n
        }, loopDestroy: function () {
            var e = this.$wrapperEl, t = this.params, i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };
    var b = {
        setGrabCursor: function (e) {
            if (!h.touch && this.params.simulateTouch) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        }, unsetGrabCursor: function () {
            h.touch || (this.el.style.cursor = "")
        }
    };
    var w = {
        appendSlide: function (e) {
            var t = this.$wrapperEl, i = this.params;
            if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]); else t.append(e);
            i.loop && this.loopCreate(), i.observer && h.observer || this.update()
        }, prependSlide: function (e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                a = s + e.length
            } else i.prepend(e);
            t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1)
        }, removeSlide: function (e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && (this.loopDestroy(), this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length" in e) {
                for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                r = Math.max(r, 0)
            } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
            t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
        }, removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e)
        }
    }, y = function () {
        var i = t.navigator.userAgent, s = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                windows: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                cordova: t.cordova || t.phonegap,
                phonegap: t.cordova || t.phonegap
            }, a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
            n = i.match(/(iPad).*OS\s([\d_]+)/), o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
            l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (a && (s.os = "windows", s.osVersion = a[2], s.windows = !0), r && !a && (s.os = "android", s.osVersion = r[2], s.android = !0, s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0), (n || l || o) && (s.os = "ios", s.ios = !0), l && !o && (s.osVersion = l[2].replace(/_/g, "."), s.iphone = !0), n && (s.osVersion = n[2].replace(/_/g, "."), s.ipad = !0), o && (s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, s.iphone = !0), s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), s.desktop = !(s.os || s.android || s.webView), s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), s.os && "ios" === s.os) {
            var d = s.osVersion.split("."), h = e.querySelector('meta[name="viewport"]');
            s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0
        }
        return s.pixelRatio = t.devicePixelRatio || 1, s
    }();

    function x() {
        var e = this.params, t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext, s = this.allowSlidePrev, a = this.snapGrid;
            if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
                var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
            } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
            this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }

    var E = {
        attachEvents: function () {
            var i = this.params, a = this.touchEvents, r = this.el, n = this.wrapperEl;
            this.onTouchStart = function (i) {
                var a = this.touchEventsData, r = this.params, n = this.touches;
                if (!this.animating || !r.preventIntercationOnTransition) {
                    var o = i;
                    if (o.originalEvent && (o = o.originalEvent), a.isTouchEvent = "touchstart" === o.type, (a.isTouchEvent || !("which" in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved)) if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0; else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
                        n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        var l = n.currentX, h = n.currentY;
                        if (!(y.ios && !y.cordova && r.iOSEdgeSwipeDetection && l <= r.iOSEdgeSwipeThreshold && l >= t.screen.width - r.iOSEdgeSwipeThreshold)) {
                            if (d.extend(a, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), n.startX = l, n.startY = h, a.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
                                var p = !0;
                                s(o.target).is(a.formElements) && (p = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur(), p && this.allowTouchMove && o.preventDefault()
                            }
                            this.emit("touchStart", o)
                        }
                    }
                }
            }.bind(this), this.onTouchMove = function (t) {
                var i = this.touchEventsData, a = this.params, r = this.touches, n = this.rtlTranslate, o = t;
                if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
                    if (!i.isTouchEvent || "mousemove" !== o.type) {
                        var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                            h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        if (o.preventedByNestedSwiper) return r.startX = l, void(r.startY = h);
                        if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (d.extend(r, {
                            startX: l,
                            startY: h,
                            currentX: l,
                            currentY: h
                        }), i.touchStartTime = d.now()));
                        if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (this.isVertical()) {
                            if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                        } else if (l < r.startX && this.translate <= this.maxTranslate() || l > r.startX && this.translate >= this.minTranslate()) return;
                        if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                        if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                            r.currentX = l, r.currentY = h;
                            var p, c = r.currentX - r.startX, u = r.currentY - r.startY;
                            if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1; else if (i.startMoving) {
                                this.allowClick = !1, o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
                                var v = this.isHorizontal() ? c : u;
                                r.diff = v, v *= a.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                                var f = !0, m = a.resistanceRatio;
                                if (a.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                                    if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                }
                                a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                    position: r[this.isHorizontal() ? "startX" : "startY"],
                                    time: i.touchStartTime
                                }), i.velocities.push({
                                    position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                    time: d.now()
                                })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                            }
                        }
                    }
                } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o)
            }.bind(this), this.onTouchEnd = function (e) {
                var t = this, i = t.touchEventsData, s = t.params, a = t.touches, r = t.rtlTranslate, n = t.$wrapperEl,
                    o = t.slidesGrid, l = t.snapGrid, h = e;
                if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var p, c = d.now(), u = c - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap", h), u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function () {
                        t && !t.destroyed && t.emit("click", h)
                    }, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))), i.lastClickTime = d.now(), d.nextTick(function () {
                        t.destroyed || (t.allowClick = !0)
                    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (s.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var v = i.velocities.pop(), f = i.velocities.pop(), m = v.position - f.position,
                                g = v.time - f.time;
                            t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var b = 1e3 * s.freeModeMomentumRatio, w = t.velocity * b, y = t.translate + w;
                        r && (y = -y);
                        var x, E, T = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                        if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0); else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0); else if (s.freeModeSticky) {
                            for (var C, M = 0; M < l.length; M += 1) if (l[M] > -y) {
                                C = M;
                                break
                            }
                            y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                        }
                        if (E && t.once("transitionEnd", function () {
                                t.loopFix()
                            }), 0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity); else if (s.freeModeSticky) return void t.slideToClosest();
                        s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), n.transitionEnd(function () {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var z = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup) void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && (z = P, k = o[P + s.slidesPerGroup] - o[P]) : p >= o[P] && (z = P, k = o[o.length - 1] - o[o.length - 2]);
                    var $ = (p - o[z]) / k;
                    if (u > s.longSwipesMs) {
                        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && ($ >= s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z)), "prev" === t.swipeDirection && ($ > 1 - s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z))
                    } else {
                        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(z + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(z)
                    }
                }
            }.bind(this), this.onClick = function (e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }.bind(this);
            var o = "container" === i.touchEventsTarget ? r : n, l = !!i.nested;
            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                if (h.touch) {
                    var p = !("touchstart" !== a.start || !h.passiveListener || !i.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    o.addEventListener(a.start, this.onTouchStart, p), o.addEventListener(a.move, this.onTouchMove, h.passiveListener ? {
                        passive: !1,
                        capture: l
                    } : l), o.addEventListener(a.end, this.onTouchEnd, p)
                }
                (i.simulateTouch && !y.ios && !y.android || i.simulateTouch && !h.touch && y.ios) && (o.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1))
            } else o.addEventListener(a.start, this.onTouchStart, !1), e.addEventListener(a.move, this.onTouchMove, l), e.addEventListener(a.end, this.onTouchEnd, !1);
            (i.preventClicks || i.preventClicksPropagation) && o.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", x, !0)
        }, detachEvents: function () {
            var t = this.params, i = this.touchEvents, s = this.el, a = this.wrapperEl,
                r = "container" === t.touchEventsTarget ? s : a, n = !!t.nested;
            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                if (h.touch) {
                    var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.removeEventListener(i.start, this.onTouchStart, o), r.removeEventListener(i.move, this.onTouchMove, n), r.removeEventListener(i.end, this.onTouchEnd, o)
                }
                (t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, n), e.removeEventListener("mouseup", this.onTouchEnd, !1))
            } else r.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, n), e.removeEventListener(i.end, this.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", x)
        }
    };
    var T = {
        setBreakpoint: function () {
            var e = this.activeIndex, t = this.loopedSlides;
            void 0 === t && (t = 0);
            var i = this.params, s = i.breakpoints;
            if (s && (!s || 0 !== Object.keys(s).length)) {
                var a = this.getBreakpoint(s);
                if (a && this.currentBreakpoint !== a) {
                    var r = a in s ? s[a] : this.originalParams, n = i.loop && r.slidesPerView !== i.slidesPerView;
                    d.extend(this.params, r), d.extend(this, {
                        allowTouchMove: this.params.allowTouchMove,
                        allowSlideNext: this.params.allowSlideNext,
                        allowSlidePrev: this.params.allowSlidePrev
                    }), this.currentBreakpoint = a, n && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - t + this.loopedSlides, 0, !1)), this.emit("breakpoint", r)
                }
            }
        }, getBreakpoint: function (e) {
            if (e) {
                var i = !1, s = [];
                Object.keys(e).forEach(function (e) {
                    s.push(e)
                }), s.sort(function (e, t) {
                    return parseInt(e, 10) - parseInt(t, 10)
                });
                for (var a = 0; a < s.length; a += 1) {
                    var r = s[a];
                    r >= t.innerWidth && !i && (i = r)
                }
                return i || "max"
            }
        }
    }, S = function () {
        return {
            isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
            isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        };
        var e
    }();
    var C = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventIntercationOnTransition: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }, M = {
            update: u,
            translate: v,
            transition: f,
            slide: m,
            loop: g,
            grabCursor: b,
            manipulation: w,
            events: E,
            breakpoints: T,
            checkOverflow: {
                checkOverflow: function () {
                    var e = this.isLocked;
                    this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function () {
                    var e = this.classNames, t = this.params, i = this.rtl, s = this.$el, a = [];
                    a.push(t.direction), t.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), S.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach(function (i) {
                        e.push(t.containerModifierClass + i)
                    }), s.addClass(e.join(" "))
                }, removeClasses: function () {
                    var e = this.$el, t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function (e, i, s, a, r, n) {
                    var o;

                    function l() {
                        n && n()
                    }

                    e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l()
                }, preloadImages: function () {
                    var e = this;

                    function t() {
                        void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }

                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }, z = {}, k = function (e) {
            function t() {
                for (var i, a, r, n = [], o = arguments.length; o--;) n[o] = arguments[o];
                1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (a = (i = n)[0], r = i[1]), r || (r = {}), r = d.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(M).forEach(function (e) {
                    Object.keys(M[e]).forEach(function (i) {
                        t.prototype[i] || (t.prototype[i] = M[e][i])
                    })
                });
                var l = this;
                void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
                    var t = l.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0], s = t.params[i];
                        if ("object" != typeof s) return;
                        if (!(i in r && "enabled" in s)) return;
                        !0 === r[i] && (r[i] = {enabled: !0}), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {enabled: !1})
                    }
                });
                var p = d.extend({}, C);
                l.useModulesParams(p), l.params = d.extend({}, p, z, r), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, r), l.$ = s;
                var c = s(l.params.el);
                if (a = c[0]) {
                    if (c.length > 1) {
                        var u = [];
                        return c.each(function (e, i) {
                            var s = d.extend({}, r, {el: i});
                            u.push(new t(s))
                        }), u
                    }
                    a.swiper = l, c.data("swiper", l);
                    var v, f, m = c.children("." + l.params.wrapperClass);
                    return d.extend(l, {
                        $el: c,
                        el: a,
                        $wrapperEl: m,
                        wrapperEl: m[0],
                        classNames: [],
                        slides: s(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === l.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === l.params.direction
                        },
                        rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                        rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === m.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEvents: (v = ["touchstart", "touchmove", "touchend"], f = ["mousedown", "mousemove", "mouseup"], h.pointerEvents ? f = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                            start: v[0],
                            move: v[1],
                            end: v[2]
                        }, l.touchEventsDesktop = {
                            start: f[0],
                            move: f[1],
                            end: f[2]
                        }, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: d.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.useModules(), l.params.init && l.init(), l
                }
            }

            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var i = {
                extendedDefaults: {configurable: !0},
                defaults: {configurable: !0},
                Class: {configurable: !0},
                $: {configurable: !0}
            };
            return t.prototype.slidesPerViewDynamic = function () {
                var e = this.params, t = this.slides, i = this.slidesGrid, s = this.size, a = this.activeIndex, r = 1;
                if (e.centeredSlides) {
                    for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                    for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
                } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                return r
            }, t.prototype.update = function () {
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid, i = e.params;
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }

                function s() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, t.prototype.init = function () {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
            }, t.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this, s = i.params, a = i.$el, r = i.$wrapperEl, n = i.slides;
                i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
                    i.off(e)
                }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0
            }, t.extendDefaults = function (e) {
                d.extend(z, e)
            }, i.extendedDefaults.get = function () {
                return z
            }, i.defaults.get = function () {
                return C
            }, i.Class.get = function () {
                return e
            }, i.$.get = function () {
                return s
            }, Object.defineProperties(t, i), t
        }(p), P = {name: "device", proto: {device: y}, static: {device: y}},
        $ = {name: "support", proto: {support: h}, static: {support: h}},
        L = {name: "browser", proto: {browser: S}, static: {browser: S}}, I = {
            name: "resize", create: function () {
                var e = this;
                d.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        }, orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            }, on: {
                init: function () {
                    t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                }, destroy: function () {
                    t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        }, D = {
            func: t.MutationObserver || t.WebkitMutationObserver, attach: function (e, t) {
                void 0 === t && (t = {});
                var i = this, s = new (0, D.func)(function (e) {
                    e.forEach(function (e) {
                        i.emit("observerUpdate", e)
                    })
                });
                s.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(s)
            }, init: function () {
                if (h.observer && this.params.observer) {
                    if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {childList: !1}), this.observer.attach(this.$wrapperEl[0], {attributes: !1})
                }
            }, destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        }, O = {
            name: "observer", params: {observer: !1, observeParents: !1}, create: function () {
                d.extend(this, {
                    observer: {
                        init: D.init.bind(this),
                        attach: D.attach.bind(this),
                        destroy: D.destroy.bind(this),
                        observers: []
                    }
                })
            }, on: {
                init: function () {
                    this.observer.init()
                }, destroy: function () {
                    this.observer.destroy()
                }
            }
        }, A = {
            update: function (e) {
                var t = this, i = t.params, s = i.slidesPerView, a = i.slidesPerGroup, r = i.centeredSlides, n = t.virtual,
                    o = n.from, l = n.to, h = n.slides, p = n.slidesGrid, c = n.renderSlide, u = n.offset;
                t.updateActiveIndex();
                var v, f, m, g = t.activeIndex || 0;
                v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a, m = Math.floor(s / 2) + a) : (f = s + (a - 1), m = a);
                var b = Math.max((g || 0) - m, 0), w = Math.min((g || 0) + f, h.length - 1),
                    y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

                function x() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }

                if (d.extend(t.virtual, {
                        from: b,
                        to: w,
                        offset: y,
                        slidesGrid: t.slidesGrid
                    }), o === b && l === w && !e) return t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: y,
                    from: b,
                    to: w,
                    slides: function () {
                        for (var e = [], t = b; t <= w; t += 1) e.push(h[t]);
                        return e
                    }()
                }), void x();
                var E = [], T = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var S = o; S <= l; S += 1) (S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
                for (var C = 0; C < h.length; C += 1) C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C), C < o && E.push(C)));
                T.forEach(function (e) {
                    t.$wrapperEl.append(c(h[e], e))
                }), E.sort(function (e, t) {
                    return e < t
                }).forEach(function (e) {
                    t.$wrapperEl.prepend(c(h[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(v, y + "px"), x()
            }, renderSlide: function (e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a
            }, appendSlide: function (e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            }, prependSlide: function (e) {
                if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
                    var t = this.virtual.cache, i = {};
                    Object.keys(t).forEach(function (e) {
                        i[e + 1] = t[e]
                    }), this.virtual.cache = i
                }
                this.virtual.update(!0), this.slideNext(0)
            }
        }, G = {
            name: "virtual",
            params: {virtual: {enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null}},
            create: function () {
                d.extend(this, {
                    virtual: {
                        update: A.update.bind(this),
                        appendSlide: A.appendSlide.bind(this),
                        prependSlide: A.prependSlide.bind(this),
                        renderSlide: A.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = {watchSlidesProgress: !0};
                        d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update()
                    }
                }, setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        }, H = {
            handle: function (i) {
                var s = this.rtlTranslate, a = i;
                a.originalEvent && (a = a.originalEvent);
                var r = a.keyCode || a.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                        var n = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var o = t.innerWidth, l = t.innerHeight, d = this.$el.offset();
                        s && (d.left -= this.$el[0].scrollLeft);
                        for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
                            var c = h[p];
                            c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                        }
                        if (!n) return
                    }
                    this.isHorizontal() ? (37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === r && !s || 37 === r && s) && this.slideNext(), (37 === r && !s || 39 === r && s) && this.slidePrev()) : (38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === r && this.slideNext(), 38 === r && this.slidePrev()), this.emit("keyPress", r)
                }
            }, enable: function () {
                this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            }, disable: function () {
                this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        }, N = {
            name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
                d.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: H.enable.bind(this),
                        disable: H.disable.bind(this),
                        handle: H.handle.bind(this)
                    }
                })
            }, on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                }, destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var B = {
        lastScrollTime: d.now(),
        event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
            var t = "onwheel" in e;
            if (!t) {
                var i = e.createElement("div");
                i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
            }
            return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
        }() ? "wheel" : "mousewheel",
        normalize: function (e) {
            var t = 0, i = 0, s = 0, a = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            }
        },
        handleMouseEnter: function () {
            this.mouseEntered = !0
        },
        handleMouseLeave: function () {
            this.mouseEntered = !1
        },
        handle: function (e) {
            var i = e, s = this, a = s.params.mousewheel;
            if (!s.mouseEntered && !a.releaseOnEdges) return !0;
            i.originalEvent && (i = i.originalEvent);
            var r = 0, n = s.rtlTranslate ? -1 : 1, o = B.normalize(i);
            if (a.forceToAxis) if (s.isHorizontal()) {
                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                r = o.pixelX * n
            } else {
                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                r = o.pixelY
            } else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
            if (0 === r) return !0;
            if (a.invert && (r = -r), s.params.freeMode) {
                s.params.loop && s.loopFix();
                var l = s.getTranslate() + r * a.sensitivity, h = s.isBeginning, p = s.isEnd;
                if (l >= s.minTranslate() && (l = s.minTranslate()), l <= s.maxTranslate() && (l = s.maxTranslate()), s.setTransition(0), s.setTranslate(l), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!h && s.isBeginning || !p && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = d.nextTick(function () {
                        s.slideToClosest()
                    }, 300)), s.emit("scroll", i), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.stopAutoplay(), l === s.minTranslate() || l === s.maxTranslate()) return !0
            } else {
                if (d.now() - s.mousewheel.lastScrollTime > 60) if (r < 0) if (s.isEnd && !s.params.loop || s.animating) {
                    if (a.releaseOnEdges) return !0
                } else s.slideNext(), s.emit("scroll", i); else if (s.isBeginning && !s.params.loop || s.animating) {
                    if (a.releaseOnEdges) return !0
                } else s.slidePrev(), s.emit("scroll", i);
                s.mousewheel.lastScrollTime = (new t.Date).getTime()
            }
            return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
        },
        enable: function () {
            if (!B.event) return !1;
            if (this.mousewheel.enabled) return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(B.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
        },
        disable: function () {
            if (!B.event) return !1;
            if (!this.mousewheel.enabled) return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.off(B.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
        }
    }, X = {
        update: function () {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation, i = t.$nextEl, s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        }, init: function () {
            var e, t, i = this, a = i.params.navigation;
            (a.nextEl || a.prevEl) && (a.nextEl && (e = s(a.nextEl), i.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))), a.prevEl && (t = s(a.prevEl), i.params.uniqueNavElements && "string" == typeof a.prevEl && t.length > 1 && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))), e && e.length > 0 && e.on("click", function (e) {
                e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext()
            }), t && t.length > 0 && t.on("click", function (e) {
                e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev()
            }), d.extend(i.navigation, {$nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0]}))
        }, destroy: function () {
            var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
            t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
        }
    }, Y = {
        update: function () {
            var e = this.rtl, t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i,
                    a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                    r = this.pagination.$el,
                    n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var o, l, d, h = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function (e, a) {
                        var r = s(a), n = r.index();
                        n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                    }); else if (h.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
                        for (var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1) h.eq(u).addClass(t.bulletActiveClass + "-main");
                        p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                    }
                    if (t.dynamicBullets) {
                        var v = Math.min(h.length, t.dynamicMainBullets + 4),
                            f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                            m = e ? "right" : "left";
                        h.css(this.isHorizontal() ? m : "top", f + "px")
                    }
                }
                if ("fraction" === t.type && (r.find("." + t.currentClass).text(i + 1), r.find("." + t.totalClass).text(n)), "progressbar" === t.type) {
                    var g;
                    g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var b = (i + 1) / n, w = 1, y = 1;
                    "horizontal" === g ? w = b : y = b, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(this.params.speed)
                }
                "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
            }
        }, render: function () {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                    i = this.pagination.$el, s = "";
                if ("bullets" === e.type) {
                    for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
            }
        }, init: function () {
            var e = this, t = e.params.pagination;
            if (t.el) {
                var i = s(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
                    t.preventDefault();
                    var i = s(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                }), d.extend(e.pagination, {$el: i, el: i[0]}))
            }
        }, destroy: function () {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }, V = {
        setTranslate: function () {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = this.rtlTranslate, i = this.progress, s = e.dragSize, a = e.trackSize,
                    r = e.$dragEl, n = e.$el, o = this.params.scrollbar, l = s, d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"), r[0].style.width = l + "px") : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
                    n[0].style.opacity = 0, n.transition(400)
                }, 1e3))
            }
        }, setTransition: function (e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        }, updateSize: function () {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = e.$dragEl, i = e.$el;
                t[0].style.width = "", t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize,
                    n = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: n,
                    dragSize: s
                }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
            }
        }, setDragPosition: function (e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize;
            t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[this.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
            var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses()
        }, onDragStart: function (e) {
            var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el, r = i.$dragEl;
            this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e)
        }, onDragMove: function (e) {
            var t = this.scrollbar, i = this.$wrapperEl, s = t.$el, a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
        }, onDragEnd: function (e) {
            var t = this.params.scrollbar, i = this.scrollbar.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function () {
                i.css("opacity", 0), i.transition(400)
            }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
        }, enableDraggable: function () {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar, i = this.touchEvents, s = this.touchEventsDesktop, a = this.params,
                    r = t.$el[0], n = !(!h.passiveListener || !a.passiveListener) && {passive: !1, capture: !1},
                    o = !(!h.passiveListener || !a.passiveListener) && {passive: !0, capture: !1};
                h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.addEventListener("mousedown", this.scrollbar.onDragStart, n), e.addEventListener("mousemove", this.scrollbar.onDragMove, n), e.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        }, disableDraggable: function () {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar, i = this.touchEvents, s = this.touchEventsDesktop, a = this.params,
                    r = t.$el[0], n = !(!h.passiveListener || !a.passiveListener) && {passive: !1, capture: !1},
                    o = !(!h.passiveListener || !a.passiveListener) && {passive: !0, capture: !1};
                h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n), e.removeEventListener("mousemove", this.scrollbar.onDragMove, n), e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        }, init: function () {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar, t = this.$el, i = this.params.scrollbar, a = s(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                var r = a.find("." + this.params.scrollbar.dragClass);
                0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), d.extend(e, {
                    $el: a,
                    el: a[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), i.draggable && e.enableDraggable()
            }
        }, destroy: function () {
            this.scrollbar.disableDraggable()
        }
    }, R = {
        setTransform: function (e, t) {
            var i = this.rtl, a = s(e), r = i ? -1 : 1, n = a.attr("data-swiper-parallax") || "0",
                o = a.attr("data-swiper-parallax-x"), l = a.attr("data-swiper-parallax-y"),
                d = a.attr("data-swiper-parallax-scale"), h = a.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", void 0 !== h && null !== h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                a[0].style.opacity = p
            }
            if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)"); else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
            }
        }, setTranslate: function () {
            var e = this, t = e.$el, i = e.slides, a = e.progress, r = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
                e.parallax.setTransform(i, a)
            }), i.each(function (t, i) {
                var n = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
                    e.parallax.setTransform(i, n)
                })
            })
        }, setTransition: function (e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
                var a = s(i), r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (r = 0), a.transition(r)
            })
        }
    }, F = {
        getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, s = e.targetTouches[1].pageX,
                a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
        }, onGestureStart: function (e) {
            var t = this.params.zoom, i = this.zoom, a = i.gesture;
            if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureTouched = !0, a.scaleStart = F.getDistanceBetweenTouches(e)
            }
            a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
        }, onGestureChange: function (e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!h.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureMoved = !0, s.scaleMove = F.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (h.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        }, onGestureEnd: function (e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!h.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return;
                i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
        }, onTouchStart: function (e) {
            var t = this.zoom, i = t.gesture, s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        }, onTouchMove: function (e) {
            var t = this.zoom, i = t.gesture, s = t.image, a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                var r = s.width * t.scale, n = s.height * t.scale;
                if (!(r < i.slideWidth && n < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                    }
                    e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        }, onTouchEnd: function () {
            var e = this.zoom, t = e.gesture, i = e.image, s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                i.isTouched = !1, i.isMoved = !1;
                var a = 300, r = 300, n = s.x * a, o = i.currentX + n, l = s.y * r, d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o, i.currentY = d;
                var p = i.width * e.scale, c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        }, onTransitionEnd: function () {
            var e = this.zoom, t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
        }, toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        }, in: function (e) {
            var t, i, a, r, n, o, l, d, h, p, c, u, v, f, m, g, b = this.zoom, w = this.params.zoom, y = b.gesture,
                x = b.image;
            (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), n = a * b.scale, o = r * b.scale, n < c && (n = c), n > v && (n = v), o < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
        }, out: function () {
            var e = this.zoom, t = this.params.zoom, i = e.gesture;
            i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
        }, enable: function () {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
            }
        }, disable: function () {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
            }
        }
    }, W = {
        loadInSlide: function (e, t) {
            void 0 === t && (t = !0);
            var i = this, a = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                    n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (e, n) {
                    var o = s(n);
                    o.addClass(a.loadingClass);
                    var l = o.attr("data-background"), d = o.attr("data-src"), h = o.attr("data-srcset"),
                        p = o.attr("data-sizes");
                    i.loadImage(o[0], d || l, h, p, !1, function () {
                        if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                                var e = r.attr("data-swiper-slide-index");
                                if (r.hasClass(i.params.slideDuplicateClass)) {
                                    var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(s.index(), !1)
                                } else {
                                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(n.index(), !1)
                                }
                            }
                            i.emit("lazyImageReady", r[0], o[0])
                        }
                    }), i.emit("lazyImageLoad", r[0], o[0])
                })
            }
        }, load: function () {
            var e = this, t = e.$wrapperEl, i = e.params, a = e.slides, r = e.activeIndex,
                n = e.virtual && i.virtual.enabled, o = i.lazy, l = i.slidesPerView;

            function d(e) {
                if (n) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                } else if (a[e]) return !0;
                return !1
            }

            function h(e) {
                return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
            }

            if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t, i) {
                var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                e.lazy.loadInSlide(a)
            }); else if (l > 1) for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p); else e.lazy.loadInSlide(r);
            if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
                for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g)
            } else {
                var b = t.children("." + i.slideNextClass);
                b.length > 0 && e.lazy.loadInSlide(h(b));
                var w = t.children("." + i.slidePrevClass);
                w.length > 0 && e.lazy.loadInSlide(h(w))
            }
        }
    }, q = {
        LinearSpline: function (e, t) {
            var i, s, a, r, n, o = function (e, t) {
                for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                return i
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }, this
        }, getInterpolateFunction: function (e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new q.LinearSpline(this.slidesGrid, e.slidesGrid) : new q.LinearSpline(this.snapGrid, e.snapGrid))
        }, setTranslate: function (e, t) {
            var i, s, a = this, r = a.controller.control;

            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof k && n(r[o]); else r instanceof k && t !== r && n(r)
        }, setTransition: function (e, t) {
            var i, s = this, a = s.controller.control;

            function r(t) {
                t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function () {
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                }))
            }

            if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof k && r(a[i]); else a instanceof k && t !== a && r(a)
        }
    }, j = {
        makeElFocusable: function (e) {
            return e.attr("tabIndex", "0"), e
        }, addElRole: function (e, t) {
            return e.attr("role", t), e
        }, addElLabel: function (e, t) {
            return e.attr("aria-label", t), e
        }, disableEl: function (e) {
            return e.attr("aria-disabled", !0), e
        }, enableEl: function (e) {
            return e.attr("aria-disabled", !1), e
        }, onEnterKey: function (e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = s(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
            }
        }, notify: function (e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e))
        }, updateNavigation: function () {
            if (!this.params.loop) {
                var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
            }
        }, updatePagination: function () {
            var e = this, t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i, a) {
                var r = s(a);
                e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
            })
        }, init: function () {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }, destroy: function () {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }, K = {
        init: function () {
            if (this.params.history) {
                if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0, e.paths = K.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
            }
        }, destroy: function () {
            this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
        }, setHistoryPopState: function () {
            this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        }, getPathValues: function () {
            var e = t.location.pathname.slice(1).split("/").filter(function (e) {
                return "" !== e
            }), i = e.length;
            return {key: e[i - 2], value: e[i - 1]}
        }, setHistory: function (e, i) {
            if (this.history.initialized && this.params.history.enabled) {
                var s = this.slides.eq(i), a = K.slugify(s.attr("data-history"));
                t.location.pathname.includes(e) || (a = e + "/" + a);
                var r = t.history.state;
                r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({value: a}, null, a) : t.history.pushState({value: a}, null, a))
            }
        }, slugify: function (e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }, scrollToSlide: function (e, t, i) {
            if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
                var r = this.slides.eq(s);
                if (K.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                    var n = r.index();
                    this.slideTo(n, e, i)
                }
            } else this.slideTo(0, e, i)
        }
    }, U = {
        onHashCange: function () {
            var t = e.location.hash.replace("#", "");
            t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index())
        }, setHash: function () {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""); else {
                var i = this.slides.eq(this.activeIndex), s = i.attr("data-hash") || i.attr("data-history");
                e.location.hash = s || ""
            }
        }, init: function () {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var i = e.location.hash.replace("#", "");
                if (i) for (var a = 0, r = this.slides.length; a < r; a += 1) {
                    var n = this.slides.eq(a);
                    if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                        var o = n.index();
                        this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                    }
                }
                this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
            }
        }, destroy: function () {
            this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
        }
    }, _ = {
        run: function () {
            var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function () {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
            }, i)
        }, start: function () {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
        }, stop: function () {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
        }, pause: function (e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function () {
                t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
            }) : (t.autoplay.paused = !1, t.autoplay.run())))
        }
    }, Z = {
        setTranslate: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t), s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s, s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({opacity: r}).transform("translate3d(" + s + "px, " + a + "px, 0px)")
            }
        }, setTransition: function (e) {
            var t = this, i = t.slides, s = t.$wrapperEl;
            if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd(function () {
                    if (!a && t && !t.destroyed) {
                        a = !0, t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                    }
                })
            }
        }
    }, Q = {
        setTranslate: function () {
            var e, t = this.$el, i = this.$wrapperEl, a = this.slides, r = this.width, n = this.height,
                o = this.rtlTranslate, l = this.size, d = this.params.cubeEffect, h = this.isHorizontal(),
                p = this.virtual && this.params.virtual.enabled, c = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({height: r + "px"})) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
            for (var u = 0; u < a.length; u += 1) {
                var v = a.eq(u), f = u;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f, g = Math.floor(m / 360);
                o && (m = -m, g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0;
                f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
                    var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                        C = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(C)), T.length && (T[0].style.opacity = Math.max(-b, 0)), C.length && (C[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                    "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                    "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                    "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                    "transform-origin": "50% 50% -" + l / 2 + "px"
                }), d.shadow) if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")"); else {
                var M = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                    z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
                    k = d.shadowScale, P = d.shadowScale / z, $ = d.shadowOffset;
                e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
            }
            var L = S.isSafari || S.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
        }, setTransition: function (e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }, J = {
        setTranslate: function () {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var a = e.eq(i), r = a[0].progress;
                this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                var n = -180 * r, o = 0, l = -a[0].swiperSlideOffset, d = 0;
                if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                    var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                        p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                    0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
                }
                a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
            }
        }, setTransition: function (e) {
            var t = this, i = t.slides, s = t.activeIndex, a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd(function () {
                    if (!r && t && !t.destroyed) {
                        r = !0, t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                    }
                })
            }
        }
    }, ee = {
        setTranslate: function () {
            for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
                var f = i.eq(u), m = r[u], g = (d - f[0].swiperSlideOffset - m / 2) / m * n.modifier, b = o ? p * g : 0,
                    w = o ? 0 : p * g, y = -c * Math.abs(g), x = o ? 0 : n.stretch * g, E = o ? n.stretch * g : 0;
                Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                if (f.transform(T), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                    var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                        C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
                }
            }
            (h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%")
        }, setTransition: function (e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }, te = [P, $, L, I, O, G, N, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function () {
            d.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: B.enable.bind(this),
                    disable: B.disable.bind(this),
                    handle: B.handle.bind(this),
                    handleMouseEnter: B.handleMouseEnter.bind(this),
                    handleMouseLeave: B.handleMouseLeave.bind(this),
                    lastScrollTime: d.now()
                }
            })
        },
        on: {
            init: function () {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            }, destroy: function () {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function () {
            d.extend(this, {
                navigation: {
                    init: X.init.bind(this),
                    update: X.update.bind(this),
                    destroy: X.destroy.bind(this)
                }
            })
        },
        on: {
            init: function () {
                this.navigation.init(), this.navigation.update()
            }, toEdge: function () {
                this.navigation.update()
            }, fromEdge: function () {
                this.navigation.update()
            }, destroy: function () {
                this.navigation.destroy()
            }, click: function (e) {
                var t = this.navigation, i = t.$nextEl, a = t.$prevEl;
                !this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function () {
            d.extend(this, {
                pagination: {
                    init: Y.init.bind(this),
                    render: Y.render.bind(this),
                    update: Y.update.bind(this),
                    destroy: Y.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function () {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            }, activeIndexChange: function () {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            }, snapIndexChange: function () {
                this.params.loop || this.pagination.update()
            }, slidesLengthChange: function () {
                this.params.loop && (this.pagination.render(), this.pagination.update())
            }, snapGridLengthChange: function () {
                this.params.loop || (this.pagination.render(), this.pagination.update())
            }, destroy: function () {
                this.pagination.destroy()
            }, click: function (e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function () {
            d.extend(this, {
                scrollbar: {
                    init: V.init.bind(this),
                    destroy: V.destroy.bind(this),
                    updateSize: V.updateSize.bind(this),
                    setTranslate: V.setTranslate.bind(this),
                    setTransition: V.setTransition.bind(this),
                    enableDraggable: V.enableDraggable.bind(this),
                    disableDraggable: V.disableDraggable.bind(this),
                    setDragPosition: V.setDragPosition.bind(this),
                    onDragStart: V.onDragStart.bind(this),
                    onDragMove: V.onDragMove.bind(this),
                    onDragEnd: V.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function () {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
            }, update: function () {
                this.scrollbar.updateSize()
            }, resize: function () {
                this.scrollbar.updateSize()
            }, observerUpdate: function () {
                this.scrollbar.updateSize()
            }, setTranslate: function () {
                this.scrollbar.setTranslate()
            }, setTransition: function (e) {
                this.scrollbar.setTransition(e)
            }, destroy: function () {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
            d.extend(this, {
                parallax: {
                    setTransform: R.setTransform.bind(this),
                    setTranslate: R.setTranslate.bind(this),
                    setTransition: R.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
            }, init: function () {
                this.params.parallax && this.parallax.setTranslate()
            }, setTranslate: function () {
                this.params.parallax && this.parallax.setTranslate()
            }, setTransition: function (e) {
                this.params.parallax && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function () {
            var e = this, t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
                t[i] = F[i].bind(e)
            }), d.extend(e, {zoom: t})
        },
        on: {
            init: function () {
                this.params.zoom.enabled && this.zoom.enable()
            }, destroy: function () {
                this.zoom.disable()
            }, touchStart: function (e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            }, touchEnd: function (e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            }, doubleTap: function (e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            }, transitionEnd: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function () {
            d.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: W.load.bind(this),
                    loadInSlide: W.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            }, init: function () {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            }, scroll: function () {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            }, resize: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, scrollbarDragMove: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, transitionStart: function () {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            }, transitionEnd: function () {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
            d.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: q.getInterpolateFunction.bind(this),
                    setTranslate: q.setTranslate.bind(this),
                    setTransition: q.setTransition.bind(this)
                }
            })
        }, on: {
            update: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, resize: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, observerUpdate: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, setTranslate: function (e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            }, setTransition: function (e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function () {
            var e = this;
            d.extend(e, {a11y: {liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(j).forEach(function (t) {
                e.a11y[t] = j[t].bind(e)
            })
        },
        on: {
            init: function () {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            }, toEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, fromEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, paginationUpdate: function () {
                this.params.a11y.enabled && this.a11y.updatePagination()
            }, destroy: function () {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
            d.extend(this, {
                history: {
                    init: K.init.bind(this),
                    setHistory: K.setHistory.bind(this),
                    setHistoryPopState: K.setHistoryPopState.bind(this),
                    scrollToSlide: K.scrollToSlide.bind(this),
                    destroy: K.destroy.bind(this)
                }
            })
        }, on: {
            init: function () {
                this.params.history.enabled && this.history.init()
            }, destroy: function () {
                this.params.history.enabled && this.history.destroy()
            }, transitionEnd: function () {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
        create: function () {
            d.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: U.init.bind(this),
                    destroy: U.destroy.bind(this),
                    setHash: U.setHash.bind(this),
                    onHashCange: U.onHashCange.bind(this)
                }
            })
        },
        on: {
            init: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            }, destroy: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            }, transitionEnd: function () {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function () {
            d.extend(this, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: _.run.bind(this),
                    start: _.start.bind(this),
                    stop: _.stop.bind(this),
                    pause: _.pause.bind(this)
                }
            })
        },
        on: {
            init: function () {
                this.params.autoplay.enabled && this.autoplay.start()
            }, beforeTransitionStart: function (e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            }, sliderFirstMove: function () {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            }, destroy: function () {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
            d.extend(this, {
                fadeEffect: {
                    setTranslate: Z.setTranslate.bind(this),
                    setTransition: Z.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e), d.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            }, setTransition: function (e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
        create: function () {
            d.extend(this, {
                cubeEffect: {
                    setTranslate: Q.setTranslate.bind(this),
                    setTransition: Q.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e), d.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            }, setTransition: function (e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
            d.extend(this, {
                flipEffect: {
                    setTranslate: J.setTranslate.bind(this),
                    setTransition: J.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e), d.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            }, setTransition: function (e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
        create: function () {
            d.extend(this, {
                coverflowEffect: {
                    setTranslate: ee.setTranslate.bind(this),
                    setTransition: ee.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, setTranslate: function () {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            }, setTransition: function (e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }];
    return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(te), k
});
//# sourceMappingURL=swiper.min.js.map

$('.material-menu nav > ul').materialmenu({mobileWidth: 992});
$('.inner-addon').on("click", function () {
    // alert("hello");
});

window.onload = function () {
    var swiperHeight = $(window).height();
    $('.swiper-container, .swiper-slide').height(swiperHeight);
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    });

    $("#user-info-click").popover({
        html: true,
        content: function() {
            return $('#popover-user-info').html();
        }
    });
}

