! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.app = e() : t.app = e()
}(this, function() {
	return function(t) {
		function e(r) {
			if (n[r]) return n[r].exports;
			var i = n[r] = {
				exports: {},
				id: r,
				loaded: !1
			};
			return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
		}
		var n = {};
		return e.m = t, e.c = n, e.p = "", e(0)
	}([function(t, e, n) {
		"use strict";

		function r() {
			return p.async(function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						return t.prev = 0, t.next = 3, p.awrap(o(R, C[0], 0, O, !0, 1));
					case 3:
						return t.next = 5, p.awrap(o(L, g.default, 0, O, !1, 1));
					case 5:
						return t.next = 7, p.awrap(o(R, C[1], 0, O, !0, 1));
					case 7:
						return f(), t.next = 10, p.awrap(v.default.delay(1e3));
					case 10:
						return t.next = 12, p.awrap(o(R, C[2], 0, O, !0, 1));
					case 12:
						return t.next = 14, p.awrap(o(I, b.default, 0, O, !1, 32));
					case 14:
						return t.next = 16, p.awrap(o(R, C[3], 0, O, !0, 1));
					case 16:
						t.next = 25;
						break;
					case 18:
						if (t.prev = 18, t.t0 = t.catch(0), "SKIP IT" !== t.t0.message) {
							t.next = 24;
							break
						}
						i(), t.next = 25;
						break;
					case 24:
						throw t.t0;
					case 25:
					case "end":
						return t.stop()
				}
			}, null, this, [
				[0, 18]
			])
		}

		function i() {
			var t, e, n, r;
			return p.async(function(i) {
				for (;;) switch (i.prev = i.next) {
					case 0:
						if (!H) {
							i.next = 2;
							break
						}
						return i.abrupt("return");
					case 2:
						for (H = !0, I.innerHTML = b.default, t = C.join("\n"), A.textContent = "#poem-text * { " + U + "transition: none; }", A.textContent += t, e = "", n = 0; n < t.length; n++) e = (0, E.handleChar)(e, t[n]);
						R.innerHTML = e, f(), r = Date.now();
					case 12:
						if (!(Date.now() - 1e3 > r)) {
							i.next = 19;
							break
						}
						return L.scrollTop = 1 / 0, R.scrollTop = I.scrollTop = 1 / 0, i.next = 17, p.awrap(v.default.delay(16));
					case 17:
						i.next = 12;
						break;
					case 19:
					case "end":
						return i.stop()
				}
			}, null, this)
		}

		function o(t, e, n, r, i, s) {
			var a, c, u;
			return p.async(function(l) {
				for (;;) switch (l.prev = l.next) {
					case 0:
						if (!N) {
							l.next = 2;
							break
						}
						throw new Error("SKIP IT");
					case 2:
						if (a = e.slice(n, n + s), n += s, t.scrollTop = t.scrollHeight, i ? (0, T.default)(t, a, A) : (0, E.writeSimpleChar)(t, a), !(n < e.length)) {
							l.next = 16;
							break
						}
						c = r, u = e.slice(n - 2, n + 1), z.test(u) && (c = 30 * r), B.test(u) && (c = 50 * r), V.test(u) && (c = 70 * r);
					case 12:
						return l.next = 14, p.awrap(v.default.delay(c));
					case 14:
						if ($) {
							l.next = 12;
							break
						}
					case 15:
						return l.abrupt("return", o(t, e, n, r, i, s));
					case 16:
					case "end":
						return l.stop()
				}
			}, null, this)
		}

		function s() {
			U = (0, F.default)(), C = C.map(function(t) {
				return t.replace(/-webkit-/g, U)
			})
		}

		function a() {
			var t = document.createElement("style");
			t.textContent = x.default, document.head.insertBefore(t, document.getElementsByTagName("style")[0]), A = document.getElementById("style-tag"), R = document.getElementById("style-text"), L = document.getElementById("poem-text"), I = document.getElementById("info-text"), M = document.getElementById("skip-animation"), D = document.getElementById("pause-resume")
		}

		function c() {
			var t = document.getElementById("header");
			t.innerHTML = j.default
		}

		function u() {
			R.addEventListener("input", function() {
				A.textContent = R.textContent
			}), M.addEventListener("click", function(t) {
				t.preventDefault(), N = !0
			}), D.addEventListener("click", function(t) {
				t.preventDefault(), $ ? (D.textContent = "Pause ||", $ = !1) : (D.textContent = "Resume >>", $ = !0)
			})
		}

		function l(t) {
			return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
		}

		function f() {
			if (!L.classList.contains("flipped")) {
				L.innerHTML = '<div class="poem-source"><code>' + l(g.default) + '</code></div><div class="poem-rendered">' + g.default+"</div>", L.classList.add("flipped"), L.scrollTop = 9999;
				var t = 0;
				n(80)(L, function(e, n) {
					var r, i, o;
					return p.async(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (!t) {
									e.next = 2;
									break
								}
								return e.abrupt("return");
							case 2:
								if (r = L.classList.contains("flipped"), i = (L.scrollHeight - L.clientHeight) / 2, o = r ? L.scrollTop < i : L.scrollTop > i, !o) {
									e.next = 12;
									break
								}
								return L.classList.toggle("flipped"), t = !0, e.next = 10, p.awrap(v.default.delay(500));
							case 10:
								L.scrollTop = r ? 0 : 9999, t = !1;
							case 12:
								L.scrollTop += n * (r ? -1 : 1);
							case 13:
							case "end":
								return e.stop()
						}
					}, null, this)
				}, !0)
			}
		}
		var p = n(39).default,
			h = n(38).default;
		n(42);
		var d = n(41),
			v = h(d),
			_ = n(78),
			y = (h(_), n(84)),
			g = h(y),
			m = n(83),
			b = h(m),
			w = n(82),
			j = h(w),
			k = n(85),
			x = h(k),
			E = n(33),
			T = h(E),
			S = n(32),
			F = h(S),
			C = [0, 1, 2, 3].map(function(t) {
				return n(31)("./styles" + t + ".css")
			}),
			P = "localhost" === window.location.hostname,
			O = P ? 0 : 16,
			A = void 0,
			R = void 0,
			L = void 0,
			I = void 0,
			M = void 0,
			D = void 0,
			N = !1,
			H = !1,
			$ = !1,
			U = void 0;
		document.addEventListener("DOMContentLoaded", function() {
			s(), c(), a(), u(), r()
		});
		var V = /[\.\?\!]\s$/,
			z = /\D[\,]\s$/,
			B = /[^\/]\n\n$/
	}, function(t, e) {
		var n = Object;
		t.exports = {
			create: n.create,
			getProto: n.getPrototypeOf,
			isEnum: {}.propertyIsEnumerable,
			getDesc: n.getOwnPropertyDescriptor,
			setDesc: n.defineProperty,
			setDescs: n.defineProperties,
			getKeys: n.keys,
			getNames: n.getOwnPropertyNames,
			getSymbols: n.getOwnPropertySymbols,
			each: [].forEach
		}
	}, function(t, e, n) {
		var r = n(27)("wks"),
			i = n(29),
			o = n(3).Symbol;
		t.exports = function(t) {
			return r[t] || (r[t] = o && o[t] || (o || i)("Symbol." + t))
		}
	}, function(t, e) {
		var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = n)
	}, function(t, e) {
		var n = t.exports = {
			version: "1.2.6"
		};
		"number" == typeof __e && (__e = n)
	}, function(t, e, n) {
		var r = n(11);
		t.exports = function(t) {
			if (!r(t)) throw TypeError(t + " is not an object!");
			return t
		}
	}, function(t, e) {
		var n = {}.toString;
		t.exports = function(t) {
			return n.call(t).slice(8, -1)
		}
	}, function(t, e, n) {
		var r = n(15);
		t.exports = function(t, e, n) {
			if (r(t), void 0 === e) return t;
			switch (n) {
				case 1:
					return function(n) {
						return t.call(e, n)
					};
				case 2:
					return function(n, r) {
						return t.call(e, n, r)
					};
				case 3:
					return function(n, r, i) {
						return t.call(e, n, r, i)
					}
			}
			return function() {
				return t.apply(e, arguments)
			}
		}
	}, function(t, e) {
		t.exports = {}
	}, function(t, e, n) {
		t.exports = !n(24)(function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(t, e, n) {
		var r = n(3),
			i = n(4),
			o = n(7),
			s = "prototype",
			a = function(t, e, n) {
				var c, u, l, f = t & a.F,
					p = t & a.G,
					h = t & a.S,
					d = t & a.P,
					v = t & a.B,
					_ = t & a.W,
					y = p ? i : i[e] || (i[e] = {}),
					g = p ? r : h ? r[e] : (r[e] || {})[s];
				p && (n = e);
				for (c in n) u = !f && g && c in g, u && c in y || (l = u ? g[c] : n[c], y[c] = p && "function" != typeof g[c] ? n[c] : v && u ? o(l, r) : _ && g[c] == l ? function(t) {
					var e = function(e) {
						return this instanceof t ? new t(e) : t(e)
					};
					return e[s] = t[s], e
				}(l) : d && "function" == typeof l ? o(Function.call, l) : l, d && ((y[s] || (y[s] = {}))[c] = l))
			};
		a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, t.exports = a
	}, function(t, e) {
		t.exports = function(t) {
			return "object" == typeof t ? null !== t : "function" == typeof t
		}
	}, function(t, e, n) {
		var r = n(1).setDesc,
			i = n(16),
			o = n(2)("toStringTag");
		t.exports = function(t, e, n) {
			t && !i(t = n ? t : t.prototype, o) && r(t, o, {
				configurable: !0,
				value: e
			})
		}
	}, function(t, e, n) {
		var r = n(54),
			i = n(23);
		t.exports = function(t) {
			return r(i(t))
		}
	}, function(t, e) {
		function n() {
			throw new Error("setTimeout has not been defined")
		}

		function r() {
			throw new Error("clearTimeout has not been defined")
		}

		function i(t) {
			if (l === setTimeout) return setTimeout(t, 0);
			if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
			try {
				return l(t, 0)
			} catch (e) {
				try {
					return l.call(null, t, 0)
				} catch (e) {
					return l.call(this, t, 0)
				}
			}
		}

		function o(t) {
			if (f === clearTimeout) return clearTimeout(t);
			if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
			try {
				return f(t)
			} catch (e) {
				try {
					return f.call(null, t)
				} catch (e) {
					return f.call(this, t)
				}
			}
		}

		function s() {
			v && h && (v = !1, h.length ? d = h.concat(d) : _ = -1, d.length && a())
		}

		function a() {
			if (!v) {
				var t = i(s);
				v = !0;
				for (var e = d.length; e;) {
					for (h = d, d = []; ++_ < e;) h && h[_].run();
					_ = -1, e = d.length
				}
				h = null, v = !1, o(t)
			}
		}

		function c(t, e) {
			this.fun = t, this.array = e
		}

		function u() {}
		var l, f, p = t.exports = {};
		! function() {
			try {
				l = "function" == typeof setTimeout ? setTimeout : n
			} catch (t) {
				l = n
			}
			try {
				f = "function" == typeof clearTimeout ? clearTimeout : r
			} catch (t) {
				f = r
			}
		}();
		var h, d = [],
			v = !1,
			_ = -1;
		p.nextTick = function(t) {
			var e = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			d.push(new c(t, e)), 1 !== d.length || v || i(a)
		}, c.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = u, p.addListener = u, p.once = u, p.off = u, p.removeListener = u, p.removeAllListeners = u, p.emit = u, p.binding = function(t) {
			throw new Error("process.binding is not supported")
		}, p.cwd = function() {
			return "/"
		}, p.chdir = function(t) {
			throw new Error("process.chdir is not supported")
		}, p.umask = function() {
			return 0
		}
	}, function(t, e) {
		t.exports = function(t) {
			if ("function" != typeof t) throw TypeError(t + " is not a function!");
			return t
		}
	}, function(t, e) {
		var n = {}.hasOwnProperty;
		t.exports = function(t, e) {
			return n.call(t, e)
		}
	}, function(t, e, n) {
		var r = n(1),
			i = n(19);
		t.exports = n(9) ? function(t, e, n) {
			return r.setDesc(t, e, i(1, n))
		} : function(t, e, n) {
			return t[e] = n, t
		}
	}, function(t, e) {
		t.exports = !0
	}, function(t, e) {
		t.exports = function(t, e) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e
			}
		}
	}, function(t, e, n) {
		t.exports = n(17)
	}, function(t, e, n) {
		(function(t, r) {
			function i(t, e) {
				this._id = t, this._clearFn = e
			}
			var o = n(14).nextTick,
				s = Function.prototype.apply,
				a = Array.prototype.slice,
				c = {},
				u = 0;
			e.setTimeout = function() {
				return new i(s.call(setTimeout, window, arguments), clearTimeout)
			}, e.setInterval = function() {
				return new i(s.call(setInterval, window, arguments), clearInterval)
			}, e.clearTimeout = e.clearInterval = function(t) {
				t.close()
			}, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
				this._clearFn.call(window, this._id)
			}, e.enroll = function(t, e) {
				clearTimeout(t._idleTimeoutId), t._idleTimeout = e
			}, e.unenroll = function(t) {
				clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
			}, e._unrefActive = e.active = function(t) {
				clearTimeout(t._idleTimeoutId);
				var e = t._idleTimeout;
				e >= 0 && (t._idleTimeoutId = setTimeout(function() {
					t._onTimeout && t._onTimeout()
				}, e))
			}, e.setImmediate = "function" == typeof t ? t : function(t) {
				var n = u++,
					r = !(arguments.length < 2) && a.call(arguments, 1);
				return c[n] = !0, o(function() {
					c[n] && (r ? t.apply(null, r) : t.call(null), e.clearImmediate(n))
				}), n
			}, e.clearImmediate = "function" == typeof r ? r : function(t) {
				delete c[t]
			}
		}).call(e, n(21).setImmediate, n(21).clearImmediate)
	}, function(t, e, n) {
		var r = n(6),
			i = n(2)("toStringTag"),
			o = "Arguments" == r(function() {
				return arguments
			}());
		t.exports = function(t) {
			var e, n, s;
			return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = (e = Object(t))[i]) ? n : o ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s
		}
	}, function(t, e) {
		t.exports = function(t) {
			if (void 0 == t) throw TypeError("Can't call method on  " + t);
			return t
		}
	}, function(t, e) {
		t.exports = function(t) {
			try {
				return !!t()
			} catch (t) {
				return !0
			}
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(18),
			i = n(10),
			o = n(20),
			s = n(17),
			a = n(16),
			c = n(8),
			u = n(58),
			l = n(12),
			f = n(1).getProto,
			p = n(2)("iterator"),
			h = !([].keys && "next" in [].keys()),
			d = "@@iterator",
			v = "keys",
			_ = "values",
			y = function() {
				return this
			};
		t.exports = function(t, e, n, g, m, b, w) {
			u(n, e, g);
			var j, k, x = function(t) {
					if (!h && t in F) return F[t];
					switch (t) {
						case v:
							return function() {
								return new n(this, t)
							};
						case _:
							return function() {
								return new n(this, t)
							}
					}
					return function() {
						return new n(this, t)
					}
				},
				E = e + " Iterator",
				T = m == _,
				S = !1,
				F = t.prototype,
				C = F[p] || F[d] || m && F[m],
				P = C || x(m);
			if (C) {
				var O = f(P.call(new t));
				l(O, E, !0), !r && a(F, d) && s(O, p, y), T && C.name !== _ && (S = !0, P = function() {
					return C.call(this)
				})
			}
			if (r && !w || !h && !S && F[p] || s(F, p, P), c[e] = P, c[E] = y, m)
				if (j = {
						values: T ? P : x(_),
						keys: b ? P : x(v),
						entries: T ? x("entries") : P
					}, w)
					for (k in j) k in F || o(F, k, j[k]);
				else i(i.P + i.F * (h || S), e, j);
			return j
		}
	}, function(t, e, n) {
		var r = n(1).getDesc,
			i = n(11),
			o = n(5),
			s = function(t, e) {
				if (o(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
			};
		t.exports = {
			set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {
				try {
					i = n(7)(Function.call, r(Object.prototype, "__proto__").set, 2), i(t, []), e = !(t instanceof Array)
				} catch (t) {
					e = !0
				}
				return function(t, n) {
					return s(t, n), e ? t.__proto__ = n : i(t, n), t
				}
			}({}, !1) : void 0),
			check: s
		}
	}, function(t, e, n) {
		var r = n(3),
			i = "__core-js_shared__",
			o = r[i] || (r[i] = {});
		t.exports = function(t) {
			return o[t] || (o[t] = {})
		}
	}, function(t, e) {
		var n = Math.ceil,
			r = Math.floor;
		t.exports = function(t) {
			return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
		}
	}, function(t, e) {
		var n = 0,
			r = Math.random();
		t.exports = function(t) {
			return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
		}
	}, function(t, e) {}, function(t, e, n) {
		function r(t) {
			return n(i(t))
		}

		function i(t) {
			return o[t] || function() {
				throw new Error("Cannot find module '" + t + "'.")
			}()
		}
		var o = {
			"./styles0.css": 86,
			"./styles1.css": 87,
			"./styles2.css": 88,
			"./styles3.css": 89
		};
		r.keys = function() {
			return Object.keys(o)
		}, r.resolve = i, t.exports = r, r.id = 31
	}, function(t, e) {
		"use strict";

		function n() {
			if ("undefined" == typeof window || "undefined" == typeof window.document) return "";
			var t = ["Moz", "Webkit", "O", "ms"],
				e = window.document.documentElement.style;
			if ("transform" in e) return "";
			for (var n = 0; n < t.length; ++n)
				if (t[n] + "Transform" in e) return t[n];
			return ""
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = n, t.exports = e.default
	}, function(t, e) {
		"use strict";

		function n(t, e, n) {
			var r = s[t.id];
			r || (r = s[t.id] = t.innerHTML), r = i(r, e), t.innerHTML = s[t.id] = r, o += e, ";" === e && (n.textContent += o, o = "")
		}

		function r(t, e) {
			t.innerHTML += e
		}

		function i(t, e) {
			return a && "/" !== e ? t += e : "/" === e && a === !1 ? (a = !0, t += e) : "/" === e && "*" === t.slice(-1) && a === !0 ? (a = !1, t = t.replace(c, '<span class="comment">$1/</span>')) : ":" === e ? t = t.replace(u, '<span class="key">$1</span>:') : ";" === e ? t = t.replace(l, '<span class="value">$1</span>;') : "{" === e ? t = t.replace(f, '<span class="selector">$1</span>{') : "x" === e && p.test(t.slice(-2)) ? t = t.replace(h, '<span class="value px">px</span>') : t += e, t
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = n, e.writeSimpleChar = r, e.handleChar = i;
		var o = "",
			s = {},
			a = !1,
			c = /(\/\*(?:[^](?!\/\*))*\*)$/,
			u = /([a-zA-Z- ^\n]*)$/,
			l = /([^:]*)$/,
			f = /(.*)$/,
			p = /\dp/,
			h = /p$/
	}, function(t, e, n) {
		t.exports = {
			default: n(43),
			__esModule: !0
		}
	}, function(t, e, n) {
		t.exports = {
			default: n(44),
			__esModule: !0
		}
	}, function(t, e, n) {
		t.exports = {
			default: n(45),
			__esModule: !0
		}
	}, function(t, e, n) {
		t.exports = {
			default: n(46),
			__esModule: !0
		}
	}, function(t, e) {
		"use strict";
		e.default = function(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}, e.__esModule = !0
	}, function(t, e, n) {
		(function(e) {
			var r = "object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this,
				i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
				o = i && r.regeneratorRuntime;
			if (r.regeneratorRuntime = void 0, t.exports = n(40), i) r.regeneratorRuntime = o;
			else try {
				delete r.regeneratorRuntime
			} catch (t) {
				r.regeneratorRuntime = void 0
			}
			t.exports = {
				default: t.exports,
				__esModule: !0
			}
		}).call(e, function() {
			return this
		}())
	}, function(t, e, n) {
		(function(e, r) {
			"use strict";
			var i = n(37).default,
				o = n(34).default,
				s = n(35).default,
				a = n(36).default;
			! function(e) {
				function n(t, e, n, r) {
					var i = o((e || u).prototype),
						s = new g(r || []);
					return i._invoke = v(t, n, s), i
				}

				function c(t, e, n) {
					try {
						return {
							type: "normal",
							arg: t.call(e, n)
						}
					} catch (t) {
						return {
							type: "throw",
							arg: t
						}
					}
				}

				function u() {}

				function l() {}

				function f() {}

				function p(t) {
					["next", "throw", "return"].forEach(function(e) {
						t[e] = function(t) {
							return this._invoke(e, t)
						}
					})
				}

				function h(t) {
					this.arg = t
				}

				function d(t) {
					function e(n, r, i, o) {
						var s = c(t[n], t, r);
						if ("throw" !== s.type) {
							var u = s.arg,
								l = u.value;
							return l instanceof h ? a.resolve(l.arg).then(function(t) {
								e("next", t, i, o)
							}, function(t) {
								e("throw", t, i, o)
							}) : a.resolve(l).then(function(t) {
								u.value = t, i(u)
							}, o)
						}
						o(s.arg)
					}

					function n(t, n) {
						function r() {
							return new a(function(r, i) {
								e(t, n, r, i)
							})
						}
						return i = i ? i.then(r, r) : r()
					}
					"object" == typeof r && r.domain && (e = r.domain.bind(e));
					var i;
					this._invoke = n
				}

				function v(t, e, n) {
					var r = F;
					return function(i, o) {
						if (r === P) throw new Error("Generator is already running");
						if (r === O) {
							if ("throw" === i) throw o;
							return b()
						}
						for (;;) {
							var s = n.delegate;
							if (s) {
								if ("return" === i || "throw" === i && s.iterator[i] === w) {
									n.delegate = null;
									var a = s.iterator.return;
									if (a) {
										var u = c(a, s.iterator, o);
										if ("throw" === u.type) {
											i = "throw", o = u.arg;
											continue
										}
									}
									if ("return" === i) continue
								}
								var u = c(s.iterator[i], s.iterator, o);
								if ("throw" === u.type) {
									n.delegate = null, i = "throw", o = u.arg;
									continue
								}
								i = "next", o = w;
								var l = u.arg;
								if (!l.done) return r = C, l;
								n[s.resultName] = l.value, n.next = s.nextLoc, n.delegate = null
							}
							if ("next" === i) r === C ? n.sent = o : n.sent = w;
							else if ("throw" === i) {
								if (r === F) throw r = O, o;
								n.dispatchException(o) && (i = "next", o = w)
							} else "return" === i && n.abrupt("return", o);
							r = P;
							var u = c(t, e, n);
							if ("normal" === u.type) {
								r = n.done ? O : C;
								var l = {
									value: u.arg,
									done: n.done
								};
								if (u.arg !== A) return l;
								n.delegate && "next" === i && (o = w)
							} else "throw" === u.type && (r = O, i = "throw", o = u.arg)
						}
					}
				}

				function _(t) {
					var e = {
						tryLoc: t[0]
					};
					1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
				}

				function y(t) {
					var e = t.completion || {};
					e.type = "normal", delete e.arg, t.completion = e
				}

				function g(t) {
					this.tryEntries = [{
						tryLoc: "root"
					}], t.forEach(_, this), this.reset(!0)
				}

				function m(t) {
					if (t) {
						var e = t[x];
						if (e) return e.call(t);
						if ("function" == typeof t.next) return t;
						if (!isNaN(t.length)) {
							var n = -1,
								r = function e() {
									for (; ++n < t.length;)
										if (j.call(t, n)) return e.value = t[n], e.done = !1, e;
									return e.value = w, e.done = !0, e
								};
							return r.next = r
						}
					}
					return {
						next: b
					}
				}

				function b() {
					return {
						value: w,
						done: !0
					}
				}
				var w, j = Object.prototype.hasOwnProperty,
					k = "function" == typeof i ? i : {},
					x = k.iterator || "@@iterator",
					E = k.toStringTag || "@@toStringTag",
					T = "object" == typeof t,
					S = e.regeneratorRuntime;
				if (S) return void(T && (t.exports = S));
				S = e.regeneratorRuntime = T ? t.exports : {}, S.wrap = n;
				var F = "suspendedStart",
					C = "suspendedYield",
					P = "executing",
					O = "completed",
					A = {},
					R = f.prototype = u.prototype;
				l.prototype = R.constructor = f, f.constructor = l, f[E] = l.displayName = "GeneratorFunction", S.isGeneratorFunction = function(t) {
					var e = "function" == typeof t && t.constructor;
					return !!e && (e === l || "GeneratorFunction" === (e.displayName || e.name))
				}, S.mark = function(t) {
					return s ? s(t, f) : (t.__proto__ = f, E in t || (t[E] = "GeneratorFunction")), t.prototype = o(R), t
				}, S.awrap = function(t) {
					return new h(t)
				}, p(d.prototype), S.async = function(t, e, r, i) {
					var o = new d(n(t, e, r, i));
					return S.isGeneratorFunction(e) ? o : o.next().then(function(t) {
						return t.done ? t.value : o.next()
					})
				}, p(R), R[x] = function() {
					return this
				}, R[E] = "Generator", R.toString = function() {
					return "[object Generator]"
				}, S.keys = function(t) {
					var e = [];
					for (var n in t) e.push(n);
					return e.reverse(),
						function n() {
							for (; e.length;) {
								var r = e.pop();
								if (r in t) return n.value = r, n.done = !1, n
							}
							return n.done = !0, n
						}
				}, S.values = m, g.prototype = {
					constructor: g,
					reset: function(t) {
						if (this.prev = 0, this.next = 0, this.sent = w, this.done = !1, this.delegate = null, this.tryEntries.forEach(y), !t)
							for (var e in this) "t" === e.charAt(0) && j.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = w)
					},
					stop: function() {
						this.done = !0;
						var t = this.tryEntries[0],
							e = t.completion;
						if ("throw" === e.type) throw e.arg;
						return this.rval
					},
					dispatchException: function(t) {
						function e(e, r) {
							return o.type = "throw", o.arg = t, n.next = e, !!r
						}
						if (this.done) throw t;
						for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
							var i = this.tryEntries[r],
								o = i.completion;
							if ("root" === i.tryLoc) return e("end");
							if (i.tryLoc <= this.prev) {
								var s = j.call(i, "catchLoc"),
									a = j.call(i, "finallyLoc");
								if (s && a) {
									if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
									if (this.prev < i.finallyLoc) return e(i.finallyLoc)
								} else if (s) {
									if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
								} else {
									if (!a) throw new Error("try statement without catch or finally");
									if (this.prev < i.finallyLoc) return e(i.finallyLoc)
								}
							}
						}
					},
					abrupt: function(t, e) {
						for (var n = this.tryEntries.length - 1; n >= 0; --n) {
							var r = this.tryEntries[n];
							if (r.tryLoc <= this.prev && j.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
								var i = r;
								break
							}
						}
						i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
						var o = i ? i.completion : {};
						return o.type = t, o.arg = e, i ? this.next = i.finallyLoc : this.complete(o), A
					},
					complete: function(t, e) {
						if ("throw" === t.type) throw t.arg;
						"break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = t.arg, this.next = "end") : "normal" === t.type && e && (this.next = e)
					},
					finish: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), y(n), A
						}
					},
					catch: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var n = this.tryEntries[e];
							if (n.tryLoc === t) {
								var r = n.completion;
								if ("throw" === r.type) {
									var i = r.arg;
									y(n)
								}
								return i
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(t, e, n) {
						return this.delegate = {
							iterator: m(t),
							resultName: e,
							nextLoc: n
						}, A
					}
				}
			}("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : void 0)
		}).call(e, function() {
			return this
		}(), n(14))
	}, function(t, e, n) {
		(function(e, n, r) {
			! function(e) {
				t.exports = e()
			}(function() {
				var t, i, o;
				return function t(e, n, r) {
					function i(s, a) {
						if (!n[s]) {
							if (!e[s]) {
								var c = "function" == typeof _dereq_ && _dereq_;
								if (!a && c) return c(s, !0);
								if (o) return o(s, !0);
								var u = new Error("Cannot find module '" + s + "'");
								throw u.code = "MODULE_NOT_FOUND", u
							}
							var l = n[s] = {
								exports: {}
							};
							e[s][0].call(l.exports, function(t) {
								var n = e[s][1][t];
								return i(n ? n : t)
							}, l, l.exports, t, e, n, r)
						}
						return n[s].exports
					}
					for (var o = "function" == typeof _dereq_ && _dereq_, s = 0; s < r.length; s++) i(r[s]);
					return i
				}({
					1: [function(t, e, n) {
						"use strict";
						e.exports = function(t) {
							function e(t) {
								var e = new n(t),
									r = e.promise();
								return e.setHowMany(1), e.setUnwrap(), e.init(), r
							}
							var n = t._SomePromiseArray;
							t.any = function(t) {
								return e(t)
							}, t.prototype.any = function() {
								return e(this)
							}
						}
					}, {}],
					2: [function(t, e, n) {
						"use strict";

						function r() {
							this._isTickUsed = !1, this._lateQueue = new u(16), this._normalQueue = new u(16), this._trampolineEnabled = !0;
							var t = this;
							this.drainQueues = function() {
								t._drainQueues()
							}, this._schedule = c.isStatic ? c(this.drainQueues) : c
						}

						function i(t, e, n) {
							this._lateQueue.push(t, e, n), this._queueTick()
						}

						function o(t, e, n) {
							this._normalQueue.push(t, e, n), this._queueTick()
						}

						function s(t) {
							this._normalQueue._pushOne(t), this._queueTick()
						}
						var a;
						try {
							throw new Error
						} catch (t) {
							a = t
						}
						var c = t("./schedule.js"),
							u = t("./queue.js"),
							l = t("./util.js");
						r.prototype.disableTrampolineIfNecessary = function() {
							l.hasDevTools && (this._trampolineEnabled = !1)
						}, r.prototype.enableTrampoline = function() {
							this._trampolineEnabled || (this._trampolineEnabled = !0, this._schedule = function(t) {
								setTimeout(t, 0)
							})
						}, r.prototype.haveItemsQueued = function() {
							return this._normalQueue.length() > 0
						}, r.prototype.throwLater = function(t, e) {
							if (1 === arguments.length && (e = t, t = function() {
									throw e
								}), "undefined" != typeof setTimeout) setTimeout(function() {
								t(e)
							}, 0);
							else try {
								this._schedule(function() {
									t(e)
								})
							} catch (t) {
								throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n")
							}
						}, l.hasDevTools ? (c.isStatic && (c = function(t) {
							setTimeout(t, 0)
						}), r.prototype.invokeLater = function(t, e, n) {
							this._trampolineEnabled ? i.call(this, t, e, n) : this._schedule(function() {
								setTimeout(function() {
									t.call(e, n)
								}, 100)
							})
						}, r.prototype.invoke = function(t, e, n) {
							this._trampolineEnabled ? o.call(this, t, e, n) : this._schedule(function() {
								t.call(e, n)
							})
						}, r.prototype.settlePromises = function(t) {
							this._trampolineEnabled ? s.call(this, t) : this._schedule(function() {
								t._settlePromises()
							})
						}) : (r.prototype.invokeLater = i, r.prototype.invoke = o, r.prototype.settlePromises = s), r.prototype.invokeFirst = function(t, e, n) {
							this._normalQueue.unshift(t, e, n), this._queueTick()
						}, r.prototype._drainQueue = function(t) {
							for (; t.length() > 0;) {
								var e = t.shift();
								if ("function" == typeof e) {
									var n = t.shift(),
										r = t.shift();
									e.call(n, r)
								} else e._settlePromises()
							}
						}, r.prototype._drainQueues = function() {
							this._drainQueue(this._normalQueue), this._reset(), this._drainQueue(this._lateQueue)
						}, r.prototype._queueTick = function() {
							this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues))
						}, r.prototype._reset = function() {
							this._isTickUsed = !1
						}, e.exports = new r, e.exports.firstLineError = a
					}, {
						"./queue.js": 28,
						"./schedule.js": 31,
						"./util.js": 38
					}],
					3: [function(t, e, n) {
						"use strict";
						e.exports = function(t, e, n) {
							var r = function(t, e) {
									this._reject(e)
								},
								i = function(t, e) {
									e.promiseRejectionQueued = !0, e.bindingPromise._then(r, r, null, this, t)
								},
								o = function(t, e) {
									this._isPending() && this._resolveCallback(e.target)
								},
								s = function(t, e) {
									e.promiseRejectionQueued || this._reject(t)
								};
							t.prototype.bind = function(r) {
								var a = n(r),
									c = new t(e);
								c._propagateFrom(this, 1);
								var u = this._target();
								if (c._setBoundTo(a), a instanceof t) {
									var l = {
										promiseRejectionQueued: !1,
										promise: c,
										target: u,
										bindingPromise: a
									};
									u._then(e, i, c._progress, c, l), a._then(o, s, c._progress, c, l)
								} else c._resolveCallback(u);
								return c
							}, t.prototype._setBoundTo = function(t) {
								void 0 !== t ? (this._bitField = 131072 | this._bitField, this._boundTo = t) : this._bitField = this._bitField & -131073
							}, t.prototype._isBound = function() {
								return 131072 === (131072 & this._bitField)
							}, t.bind = function(r, i) {
								var o = n(r),
									s = new t(e);
								return s._setBoundTo(o), o instanceof t ? o._then(function() {
									s._resolveCallback(i)
								}, s._reject, s._progress, s, null) : s._resolveCallback(i), s
							}
						}
					}, {}],
					4: [function(t, e, n) {
						"use strict";

						function r() {
							try {
								Promise === o && (Promise = i)
							} catch (t) {}
							return o
						}
						var i;
						"undefined" != typeof Promise && (i = Promise);
						var o = t("./promise.js")();
						o.noConflict = r, e.exports = o
					}, {
						"./promise.js": 23
					}],
					5: [function(t, e, n) {
						"use strict";
						var r = Object.create;
						if (r) {
							var i = r(null),
								o = r(null);
							i[" size"] = o[" size"] = 0
						}
						e.exports = function(e) {
							function n(t, n) {
								var r;
								if (null != t && (r = t[n]), "function" != typeof r) {
									var i = "Object " + a.classString(t) + " has no method '" + a.toString(n) + "'";
									throw new e.TypeError(i)
								}
								return r
							}

							function r(t) {
								var e = this.pop(),
									r = n(t, e);
								return r.apply(t, this)
							}

							function i(t) {
								return t[this]
							}

							function o(t) {
								var e = +this;
								return e < 0 && (e = Math.max(0, e + t.length)), t[e]
							}
							var s, a = t("./util.js"),
								c = a.canEvaluate;
							a.isIdentifier;
							e.prototype.call = function(t) {
								for (var e = arguments.length, n = new Array(e - 1), i = 1; i < e; ++i) n[i - 1] = arguments[i];
								return n.push(t), this._then(r, void 0, void 0, n, void 0)
							}, e.prototype.get = function(t) {
								var e, n = "number" == typeof t;
								if (n) e = o;
								else if (c) {
									var r = s(t);
									e = null !== r ? r : i
								} else e = i;
								return this._then(e, void 0, void 0, t, void 0)
							}
						}
					}, {
						"./util.js": 38
					}],
					6: [function(t, e, n) {
						"use strict";
						e.exports = function(e) {
							var n = t("./errors.js"),
								r = t("./async.js"),
								i = n.CancellationError;
							e.prototype._cancel = function(t) {
								if (!this.isCancellable()) return this;
								for (var e, n = this; void 0 !== (e = n._cancellationParent) && e.isCancellable();) n = e;
								this._unsetCancellable(), n._target()._rejectCallback(t, !1, !0)
							}, e.prototype.cancel = function(t) {
								return this.isCancellable() ? (void 0 === t && (t = new i), r.invokeLater(this._cancel, this, t), this) : this
							}, e.prototype.cancellable = function() {
								return this._cancellable() ? this : (r.enableTrampoline(), this._setCancellable(), this._cancellationParent = void 0, this)
							}, e.prototype.uncancellable = function() {
								var t = this.then();
								return t._unsetCancellable(), t
							}, e.prototype.fork = function(t, e, n) {
								var r = this._then(t, e, n, void 0, void 0);
								return r._setCancellable(), r._cancellationParent = void 0, r
							}
						}
					}, {
						"./async.js": 2,
						"./errors.js": 13
					}],
					7: [function(t, n, r) {
						"use strict";
						n.exports = function() {
							function n(t) {
								this._parent = t;
								var e = this._length = 1 + (void 0 === t ? 0 : t._length);
								w(this, n), e > 32 && this.uncycle()
							}

							function r(t, e) {
								for (var n = 0; n < e.length - 1; ++n) e[n].push("From previous event:"), e[n] = e[n].join("\n");
								return n < e.length && (e[n] = e[n].join("\n")), t + "\n" + e.join("\n")
							}

							function i(t) {
								for (var e = 0; e < t.length; ++e)(0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) && (t.splice(e, 1), e--)
							}

							function o(t) {
								for (var e = t[0], n = 1; n < t.length; ++n) {
									for (var r = t[n], i = e.length - 1, o = e[i], s = -1, a = r.length - 1; a >= 0; --a)
										if (r[a] === o) {
											s = a;
											break
										}
									for (var a = s; a >= 0; --a) {
										var c = r[a];
										if (e[i] !== c) break;
										e.pop(), i--
									}
									e = r
								}
							}

							function s(t) {
								for (var e = [], n = 0; n < t.length; ++n) {
									var r = t[n],
										i = v.test(r) || "    (No stack trace)" === r,
										o = i && g(r);
									i && !o && (y && " " !== r.charAt(0) && (r = "    " + r), e.push(r))
								}
								return e
							}

							function a(t) {
								for (var e = t.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < e.length; ++n) {
									var r = e[n];
									if ("    (No stack trace)" === r || v.test(r)) break
								}
								return n > 0 && (e = e.slice(n)), e
							}

							function c(t) {
								var e;
								if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]";
								else {
									e = t.toString();
									var n = /\[object [a-zA-Z0-9$_]+\]/;
									if (n.test(e)) try {
										var r = JSON.stringify(t);
										e = r
									} catch (t) {}
									0 === e.length && (e = "(empty array)")
								}
								return "(<" + u(e) + ">, no stack trace)"
							}

							function u(t) {
								var e = 41;
								return t.length < e ? t : t.substr(0, e - 3) + "..."
							}

							function l(t) {
								var e = t.match(m);
								if (e) return {
									fileName: e[1],
									line: parseInt(e[2], 10)
								}
							}
							var f, p = t("./async.js"),
								h = t("./util.js"),
								d = /[\\\/]bluebird[\\\/]js[\\\/](main|debug|zalgo|instrumented)/,
								v = null,
								_ = null,
								y = !1;
							h.inherits(n, Error), n.prototype.uncycle = function() {
								var t = this._length;
								if (!(t < 2)) {
									for (var e = [], n = {}, r = 0, i = this; void 0 !== i; ++r) e.push(i), i = i._parent;
									t = this._length = r;
									for (var r = t - 1; r >= 0; --r) {
										var o = e[r].stack;
										void 0 === n[o] && (n[o] = r)
									}
									for (var r = 0; r < t; ++r) {
										var s = e[r].stack,
											a = n[s];
										if (void 0 !== a && a !== r) {
											a > 0 && (e[a - 1]._parent = void 0, e[a - 1]._length = 1), e[r]._parent = void 0, e[r]._length = 1;
											var c = r > 0 ? e[r - 1] : this;
											a < t - 1 ? (c._parent = e[a + 1], c._parent.uncycle(), c._length = c._parent._length + 1) : (c._parent = void 0, c._length = 1);
											for (var u = c._length + 1, l = r - 2; l >= 0; --l) e[l]._length = u, u++;
											return
										}
									}
								}
							}, n.prototype.parent = function() {
								return this._parent
							}, n.prototype.hasParent = function() {
								return void 0 !== this._parent
							}, n.prototype.attachExtraTrace = function(t) {
								if (!t.__stackCleaned__) {
									this.uncycle();
									for (var e = n.parseStackAndMessage(t), a = e.message, c = [e.stack], u = this; void 0 !== u;) c.push(s(u.stack.split("\n"))), u = u._parent;
									o(c), i(c), h.notEnumerableProp(t, "stack", r(a, c)), h.notEnumerableProp(t, "__stackCleaned__", !0)
								}
							}, n.parseStackAndMessage = function(t) {
								var e = t.stack,
									n = t.toString();
								return e = "string" == typeof e && e.length > 0 ? a(t) : ["    (No stack trace)"], {
									message: n,
									stack: s(e)
								}
							}, n.formatAndLogError = function(t, e) {
								if ("undefined" != typeof console) {
									var n;
									if ("object" == typeof t || "function" == typeof t) {
										var r = t.stack;
										n = e + _(r, t)
									} else n = e + String(t);
									"function" == typeof f ? f(n) : "function" != typeof console.log && "object" != typeof console.log || console.log(n)
								}
							}, n.unhandledRejection = function(t) {
								n.formatAndLogError(t, "^--- With additional stack trace: ")
							}, n.isSupported = function() {
								return "function" == typeof w
							}, n.fireRejectionEvent = function(t, e, r, i) {
								var o = !1;
								try {
									"function" == typeof e && (o = !0, "rejectionHandled" === t ? e(i) : e(r, i))
								} catch (t) {
									p.throwLater(t)
								}
								var s = !1;
								try {
									s = j(t, r, i)
								} catch (t) {
									s = !0, p.throwLater(t)
								}
								var a = !1;
								if (b) try {
									a = b(t.toLowerCase(), {
										reason: r,
										promise: i
									})
								} catch (t) {
									a = !0, p.throwLater(t)
								}
								s || o || a || "unhandledRejection" !== t || n.formatAndLogError(r, "Unhandled rejection ")
							};
							var g = function() {
									return !1
								},
								m = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
							n.setBounds = function(t, e) {
								if (n.isSupported()) {
									for (var r, i, o = t.stack.split("\n"), s = e.stack.split("\n"), a = -1, c = -1, u = 0; u < o.length; ++u) {
										var f = l(o[u]);
										if (f) {
											r = f.fileName, a = f.line;
											break
										}
									}
									for (var u = 0; u < s.length; ++u) {
										var f = l(s[u]);
										if (f) {
											i = f.fileName, c = f.line;
											break
										}
									}
									a < 0 || c < 0 || !r || !i || r !== i || a >= c || (g = function(t) {
										if (d.test(t)) return !0;
										var e = l(t);
										return !!(e && e.fileName === r && a <= e.line && e.line <= c)
									})
								}
							};
							var b, w = function() {
									var t = /^\s*at\s*/,
										e = function(t, e) {
											return "string" == typeof t ? t : void 0 !== e.name && void 0 !== e.message ? e.toString() : c(e)
										};
									if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
										Error.stackTraceLimit = Error.stackTraceLimit + 6, v = t, _ = e;
										var n = Error.captureStackTrace;
										return g = function(t) {
												return d.test(t)
											},
											function(t, e) {
												Error.stackTraceLimit = Error.stackTraceLimit + 6, n(t, e), Error.stackTraceLimit = Error.stackTraceLimit - 6
											}
									}
									var r = new Error;
									if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return v = /@/, _ = e, y = !0,
										function(t) {
											t.stack = (new Error).stack
										};
									var i;
									try {
										throw new Error
									} catch (t) {
										i = "stack" in t
									}
									return "stack" in r || !i || "number" != typeof Error.stackTraceLimit ? (_ = function(t, e) {
										return "string" == typeof t ? t : "object" != typeof e && "function" != typeof e || void 0 === e.name || void 0 === e.message ? c(e) : e.toString()
									}, null) : (v = t, _ = e, function(t) {
										Error.stackTraceLimit = Error.stackTraceLimit + 6;
										try {
											throw new Error
										} catch (e) {
											t.stack = e.stack
										}
										Error.stackTraceLimit = Error.stackTraceLimit - 6
									})
								}([]),
								j = function() {
									if (h.isNode) return function(t, n, r) {
										return "rejectionHandled" === t ? e.emit(t, r) : e.emit(t, n, r)
									};
									var t = !1,
										n = !0;
									try {
										var r = new self.CustomEvent("test");
										t = r instanceof CustomEvent
									} catch (t) {}
									if (!t) try {
										var i = document.createEvent("CustomEvent");
										i.initCustomEvent("testingtheevent", !1, !0, {}), self.dispatchEvent(i)
									} catch (t) {
										n = !1
									}
									n && (b = function(e, n) {
										var r;
										return t ? r = new self.CustomEvent(e, {
											detail: n,
											bubbles: !1,
											cancelable: !0
										}) : self.dispatchEvent && (r = document.createEvent("CustomEvent"), r.initCustomEvent(e, !1, !0, n)), !!r && !self.dispatchEvent(r)
									});
									var o = {};
									return o.unhandledRejection = "onunhandledRejection".toLowerCase(), o.rejectionHandled = "onrejectionHandled".toLowerCase(),
										function(t, e, n) {
											var r = o[t],
												i = self[r];
											return !!i && ("rejectionHandled" === t ? i.call(self, n) : i.call(self, e, n), !0)
										}
								}();
							return "undefined" != typeof console && "undefined" != typeof console.warn && (f = function(t) {
								console.warn(t)
							}, h.isNode && e.stderr.isTTY ? f = function(t) {
								e.stderr.write("[31m" + t + "[39m\n")
							} : h.isNode || "string" != typeof(new Error).stack || (f = function(t) {
								console.warn("%c" + t, "color: red")
							})), n
						}
					}, {
						"./async.js": 2,
						"./util.js": 38
					}],
					8: [function(t, e, n) {
						"use strict";
						e.exports = function(e) {
							function n(t, e, n) {
								this._instances = t, this._callback = e, this._promise = n
							}

							function r(t, e) {
								var n = {},
									r = s(t).call(n, e);
								if (r === a) return r;
								var i = c(n);
								return i.length ? (a.e = new u("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"), a) : r
							}
							var i = t("./util.js"),
								o = t("./errors.js"),
								s = i.tryCatch,
								a = i.errorObj,
								c = t("./es5.js").keys,
								u = o.TypeError;
							return n.prototype.doFilter = function(t) {
								for (var n = this._callback, i = this._promise, o = i._boundValue(), c = 0, u = this._instances.length; c < u; ++c) {
									var l = this._instances[c],
										f = l === Error || null != l && l.prototype instanceof Error;
									if (f && t instanceof l) {
										var p = s(n).call(o, t);
										return p === a ? (e.e = p.e, e) : p
									}
									if ("function" == typeof l && !f) {
										var h = r(l, t);
										if (h === a) {
											t = a.e;
											break
										}
										if (h) {
											var p = s(n).call(o, t);
											return p === a ? (e.e = p.e, e) : p
										}
									}
								}
								return e.e = t, e
							}, n
						}
					}, {
						"./errors.js": 13,
						"./es5.js": 14,
						"./util.js": 38
					}],
					9: [function(t, e, n) {
						"use strict";
						e.exports = function(t, e, n) {
							function r() {
								this._trace = new e(o())
							}

							function i() {
								if (n()) return new r
							}

							function o() {
								var t = s.length - 1;
								if (t >= 0) return s[t]
							}
							var s = [];
							return r.prototype._pushContext = function() {
								n() && void 0 !== this._trace && s.push(this._trace)
							}, r.prototype._popContext = function() {
								n() && void 0 !== this._trace && s.pop()
							}, t.prototype._peekContext = o, t.prototype._pushContext = r.prototype._pushContext, t.prototype._popContext = r.prototype._popContext, i
						}
					}, {}],
					10: [function(t, n, r) {
						"use strict";
						n.exports = function(n, r) {
							var i, o, s = n._getDomain,
								a = t("./async.js"),
								c = t("./errors.js").Warning,
								u = t("./util.js"),
								l = u.canAttachTrace,
								f = u.isNode && (!!e.env.BLUEBIRD_DEBUG || "development" === e.env.NODE_ENV);
							return u.isNode && 0 == e.env.BLUEBIRD_DEBUG && (f = !1), f && a.disableTrampolineIfNecessary(), n.prototype._ignoreRejections = function() {
									this._unsetRejectionIsUnhandled(), this._bitField = 16777216 | this._bitField
								}, n.prototype._ensurePossibleRejectionHandled = function() {
									0 === (16777216 & this._bitField) && (this._setRejectionIsUnhandled(), a.invokeLater(this._notifyUnhandledRejection, this, void 0))
								}, n.prototype._notifyUnhandledRejectionIsHandled = function() {
									r.fireRejectionEvent("rejectionHandled", i, void 0, this)
								}, n.prototype._notifyUnhandledRejection = function() {
									if (this._isRejectionUnhandled()) {
										var t = this._getCarriedStackTrace() || this._settledValue;
										this._setUnhandledRejectionIsNotified(), r.fireRejectionEvent("unhandledRejection", o, t, this)
									}
								}, n.prototype._setUnhandledRejectionIsNotified = function() {
									this._bitField = 524288 | this._bitField
								}, n.prototype._unsetUnhandledRejectionIsNotified = function() {
									this._bitField = this._bitField & -524289
								}, n.prototype._isUnhandledRejectionNotified = function() {
									return (524288 & this._bitField) > 0
								}, n.prototype._setRejectionIsUnhandled = function() {
									this._bitField = 2097152 | this._bitField
								}, n.prototype._unsetRejectionIsUnhandled = function() {
									this._bitField = this._bitField & -2097153, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled())
								}, n.prototype._isRejectionUnhandled = function() {
									return (2097152 & this._bitField) > 0
								}, n.prototype._setCarriedStackTrace = function(t) {
									this._bitField = 1048576 | this._bitField, this._fulfillmentHandler0 = t
								}, n.prototype._isCarryingStackTrace = function() {
									return (1048576 & this._bitField) > 0
								}, n.prototype._getCarriedStackTrace = function() {
									return this._isCarryingStackTrace() ? this._fulfillmentHandler0 : void 0
								}, n.prototype._captureStackTrace = function() {
									return f && (this._trace = new r(this._peekContext())), this
								}, n.prototype._attachExtraTrace = function(t, e) {
									if (f && l(t)) {
										var n = this._trace;
										if (void 0 !== n && e && (n = n._parent), void 0 !== n) n.attachExtraTrace(t);
										else if (!t.__stackCleaned__) {
											var i = r.parseStackAndMessage(t);
											u.notEnumerableProp(t, "stack", i.message + "\n" + i.stack.join("\n")), u.notEnumerableProp(t, "__stackCleaned__", !0)
										}
									}
								}, n.prototype._warn = function(t) {
									var e = new c(t),
										n = this._peekContext();
									if (n) n.attachExtraTrace(e);
									else {
										var i = r.parseStackAndMessage(e);
										e.stack = i.message + "\n" + i.stack.join("\n")
									}
									r.formatAndLogError(e, "")
								}, n.onPossiblyUnhandledRejection = function(t) {
									var e = s();
									o = "function" == typeof t ? null === e ? t : e.bind(t) : void 0
								}, n.onUnhandledRejectionHandled = function(t) {
									var e = s();
									i = "function" == typeof t ? null === e ? t : e.bind(t) : void 0
								}, n.longStackTraces = function() {
									if (a.haveItemsQueued() && f === !1) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/DT1qyG\n");
									f = r.isSupported(), f && a.disableTrampolineIfNecessary()
								}, n.hasLongStackTraces = function() {
									return f && r.isSupported()
								}, r.isSupported() || (n.longStackTraces = function() {}, f = !1),
								function() {
									return f
								}
						}
					}, {
						"./async.js": 2,
						"./errors.js": 13,
						"./util.js": 38
					}],
					11: [function(t, e, n) {
						"use strict";
						var r = t("./util.js"),
							i = r.isPrimitive;
						e.exports = function(t) {
							var e = function() {
									return this
								},
								n = function() {
									throw this
								},
								r = function() {},
								o = function() {
									throw void 0
								},
								s = function(t, e) {
									return 1 === e ? function() {
										throw t
									} : 2 === e ? function() {
										return t
									} : void 0
								};
							t.prototype.return = t.prototype.thenReturn = function(n) {
								return void 0 === n ? this.then(r) : i(n) ? this._then(s(n, 2), void 0, void 0, void 0, void 0) : (n instanceof t && n._ignoreRejections(), this._then(e, void 0, void 0, n, void 0))
							}, t.prototype.throw = t.prototype.thenThrow = function(t) {
								return void 0 === t ? this.then(o) : i(t) ? this._then(s(t, 1), void 0, void 0, void 0, void 0) : this._then(n, void 0, void 0, t, void 0)
							}
						}
					}, {
						"./util.js": 38
					}],
					12: [function(t, e, n) {
						"use strict";
						e.exports = function(t, e) {
							var n = t.reduce;
							t.prototype.each = function(t) {
								return n(this, t, null, e)
							}, t.each = function(t, r) {
								return n(t, r, null, e)
							}
						}
					}, {}],
					13: [function(t, e, n) {
						"use strict";

						function r(t, e) {
							function n(r) {
								return this instanceof n ? (f(this, "message", "string" == typeof r ? r : e), f(this, "name", t), void(Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this))) : new n(r)
							}
							return l(n, Error), n
						}

						function i(t) {
							return this instanceof i ? (f(this, "name", "OperationalError"), f(this, "message", t), this.cause = t, this.isOperational = !0, void(t instanceof Error ? (f(this, "message", t.message), f(this, "stack", t.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor))) : new i(t)
						}
						var o, s, a = t("./es5.js"),
							c = a.freeze,
							u = t("./util.js"),
							l = u.inherits,
							f = u.notEnumerableProp,
							p = r("Warning", "warning"),
							h = r("CancellationError", "cancellation error"),
							d = r("TimeoutError", "timeout error"),
							v = r("AggregateError", "aggregate error");
						try {
							o = TypeError, s = RangeError
						} catch (t) {
							o = r("TypeError", "type error"), s = r("RangeError", "range error")
						}
						for (var _ = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), y = 0; y < _.length; ++y) "function" == typeof Array.prototype[_[y]] && (v.prototype[_[y]] = Array.prototype[_[y]]);
						a.defineProperty(v.prototype, "length", {
							value: 0,
							configurable: !1,
							writable: !0,
							enumerable: !0
						}), v.prototype.isOperational = !0;
						var g = 0;
						v.prototype.toString = function() {
							var t = Array(4 * g + 1).join(" "),
								e = "\n" + t + "AggregateError of:\n";
							g++, t = Array(4 * g + 1).join(" ");
							for (var n = 0; n < this.length; ++n) {
								for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), o = 0; o < i.length; ++o) i[o] = t + i[o];
								r = i.join("\n"), e += r + "\n"
							}
							return g--, e
						}, l(i, Error);
						var m = Error.__BluebirdErrorTypes__;
						m || (m = c({
							CancellationError: h,
							TimeoutError: d,
							OperationalError: i,
							RejectionError: i,
							AggregateError: v
						}), f(Error, "__BluebirdErrorTypes__", m)), e.exports = {
							Error: Error,
							TypeError: o,
							RangeError: s,
							CancellationError: m.CancellationError,
							OperationalError: m.OperationalError,
							TimeoutError: m.TimeoutError,
							AggregateError: m.AggregateError,
							Warning: p
						}
					}, {
						"./es5.js": 14,
						"./util.js": 38
					}],
					14: [function(t, e, n) {
						var r = function() {
							"use strict";
							return void 0 === this
						}();
						if (r) e.exports = {
							freeze: Object.freeze,
							defineProperty: Object.defineProperty,
							getDescriptor: Object.getOwnPropertyDescriptor,
							keys: Object.keys,
							names: Object.getOwnPropertyNames,
							getPrototypeOf: Object.getPrototypeOf,
							isArray: Array.isArray,
							isES5: r,
							propertyIsWritable: function(t, e) {
								var n = Object.getOwnPropertyDescriptor(t, e);
								return !(n && !n.writable && !n.set)
							}
						};
						else {
							var i = {}.hasOwnProperty,
								o = {}.toString,
								s = {}.constructor.prototype,
								a = function(t) {
									var e = [];
									for (var n in t) i.call(t, n) && e.push(n);
									return e
								},
								c = function(t, e) {
									return {
										value: t[e]
									}
								},
								u = function(t, e, n) {
									return t[e] = n.value, t
								},
								l = function(t) {
									return t
								},
								f = function(t) {
									try {
										return Object(t).constructor.prototype
									} catch (t) {
										return s
									}
								},
								p = function(t) {
									try {
										return "[object Array]" === o.call(t)
									} catch (t) {
										return !1
									}
								};
							e.exports = {
								isArray: p,
								keys: a,
								names: a,
								defineProperty: u,
								getDescriptor: c,
								freeze: l,
								getPrototypeOf: f,
								isES5: r,
								propertyIsWritable: function() {
									return !0
								}
							}
						}
					}, {}],
					15: [function(t, e, n) {
						"use strict";
						e.exports = function(t, e) {
							var n = t.map;
							t.prototype.filter = function(t, r) {
								return n(this, t, r, e)
							}, t.filter = function(t, r, i) {
								return n(t, r, i, e)
							}
						}
					}, {}],
					16: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n, r) {
							function i() {
								return this
							}

							function o() {
								throw this
							}

							function s(t) {
								return function() {
									return t
								}
							}

							function a(t) {
								return function() {
									throw t
								}
							}

							function c(t, e, n) {
								var r;
								return r = p(e) ? n ? s(e) : a(e) : n ? i : o, t._then(r, h, void 0, e, void 0)
							}

							function u(t) {
								var i = this.promise,
									o = this.handler,
									s = i._isBound() ? o.call(i._boundValue()) : o();
								if (void 0 !== s) {
									var a = r(s, i);
									if (a instanceof e) return a = a._target(), c(a, t, i.isFulfilled())
								}
								return i.isRejected() ? (n.e = t, n) : t
							}

							function l(t) {
								var n = this.promise,
									i = this.handler,
									o = n._isBound() ? i.call(n._boundValue(), t) : i(t);
								if (void 0 !== o) {
									var s = r(o, n);
									if (s instanceof e) return s = s._target(), c(s, t, !0)
								}
								return t
							}
							var f = t("./util.js"),
								p = f.isPrimitive,
								h = f.thrower;
							e.prototype._passThroughHandler = function(t, e) {
								if ("function" != typeof t) return this.then();
								var n = {
									promise: this,
									handler: t
								};
								return this._then(e ? u : l, e ? u : void 0, void 0, n, void 0)
							}, e.prototype.lastly = e.prototype.finally = function(t) {
								return this._passThroughHandler(t, !0)
							}, e.prototype.tap = function(t) {
								return this._passThroughHandler(t, !1)
							}
						}
					}, {
						"./util.js": 38
					}],
					17: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n, r, i) {
							function o(t, n, r) {
								for (var o = 0; o < n.length; ++o) {
									r._pushContext();
									var s = f(n[o])(t);
									if (r._popContext(), s === l) {
										r._pushContext();
										var a = e.reject(l.e);
										return r._popContext(), a
									}
									var c = i(s, r);
									if (c instanceof e) return c
								}
								return null
							}

							function s(t, n, i, o) {
								var s = this._promise = new e(r);
								s._captureStackTrace(), this._stack = o, this._generatorFunction = t, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof i ? [i].concat(p) : p
							}
							var a = t("./errors.js"),
								c = a.TypeError,
								u = t("./util.js"),
								l = u.errorObj,
								f = u.tryCatch,
								p = [];
							s.prototype.promise = function() {
								return this._promise
							}, s.prototype._run = function() {
								this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._next(void 0)
							}, s.prototype._continue = function(t) {
								if (t === l) return this._promise._rejectCallback(t.e, !1, !0);
								var n = t.value;
								if (t.done === !0) this._promise._resolveCallback(n);
								else {
									var r = i(n, this._promise);
									if (!(r instanceof e) && (r = o(r, this._yieldHandlers, this._promise), null === r)) return void this._throw(new c("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/4Y4pDk\n\n".replace("%s", n) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
									r._then(this._next, this._throw, void 0, this, null)
								}
							}, s.prototype._throw = function(t) {
								this._promise._attachExtraTrace(t), this._promise._pushContext();
								var e = f(this._generator.throw).call(this._generator, t);
								this._promise._popContext(), this._continue(e)
							}, s.prototype._next = function(t) {
								this._promise._pushContext();
								var e = f(this._generator.next).call(this._generator, t);
								this._promise._popContext(), this._continue(e)
							}, e.coroutine = function(t, e) {
								if ("function" != typeof t) throw new c("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");
								var n = Object(e).yieldHandler,
									r = s,
									i = (new Error).stack;
								return function() {
									var e = t.apply(this, arguments),
										o = new r(void 0, void 0, n, i);
									return o._generator = e, o._next(void 0), o.promise()
								}
							}, e.coroutine.addYieldHandler = function(t) {
								if ("function" != typeof t) throw new c("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
								p.push(t)
							}, e.spawn = function(t) {
								if ("function" != typeof t) return n("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");
								var r = new s(t, this),
									i = r.promise();
								return r._run(e.spawn), i
							}
						}
					}, {
						"./errors.js": 13,
						"./util.js": 38
					}],
					18: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n, r, i) {
							var o = t("./util.js");
							o.canEvaluate, o.tryCatch, o.errorObj;
							e.join = function() {
								var t, e = arguments.length - 1;
								if (e > 0 && "function" == typeof arguments[e]) {
									t = arguments[e];
									var r
								}
								for (var i = arguments.length, o = new Array(i), s = 0; s < i; ++s) o[s] = arguments[s];
								t && o.pop();
								var r = new n(o).promise();
								return void 0 !== t ? r.spread(t) : r
							}
						}
					}, {
						"./util.js": 38
					}],
					19: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n, r, i, o) {
							function s(t, e, n, r) {
								this.constructor$(t), this._promise._captureStackTrace();
								var i = u();
								this._callback = null === i ? e : i.bind(e), this._preservedValues = r === o ? new Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = n >= 1 ? [] : v, l.invoke(a, this, void 0)
							}

							function a() {
								this._init$(void 0, -2)
							}

							function c(t, e, n, r) {
								var i = "object" == typeof n && null !== n ? n.concurrency : 0;
								return i = "number" == typeof i && isFinite(i) && i >= 1 ? i : 0, new s(t, e, i, r)
							}
							var u = e._getDomain,
								l = t("./async.js"),
								f = t("./util.js"),
								p = f.tryCatch,
								h = f.errorObj,
								d = {},
								v = [];
							f.inherits(s, n), s.prototype._init = function() {}, s.prototype._promiseFulfilled = function(t, n) {
								var r = this._values,
									o = this.length(),
									s = this._preservedValues,
									a = this._limit;
								if (r[n] === d) {
									if (r[n] = t, a >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return
								} else {
									if (a >= 1 && this._inFlight >= a) return r[n] = t, void this._queue.push(n);
									null !== s && (s[n] = t);
									var c = this._callback,
										u = this._promise._boundValue();
									this._promise._pushContext();
									var l = p(c).call(u, t, n, o);
									if (this._promise._popContext(), l === h) return this._reject(l.e);
									var f = i(l, this._promise);
									if (f instanceof e) {
										if (f = f._target(), f._isPending()) return a >= 1 && this._inFlight++, r[n] = d, f._proxyPromiseArray(this, n);
										if (!f._isFulfilled()) return this._reject(f._reason());
										l = f._value()
									}
									r[n] = l
								}
								var v = ++this._totalResolved;
								v >= o && (null !== s ? this._filter(r, s) : this._resolve(r))
							}, s.prototype._drainQueue = function() {
								for (var t = this._queue, e = this._limit, n = this._values; t.length > 0 && this._inFlight < e;) {
									if (this._isResolved()) return;
									var r = t.pop();
									this._promiseFulfilled(n[r], r)
								}
							}, s.prototype._filter = function(t, e) {
								for (var n = e.length, r = new Array(n), i = 0, o = 0; o < n; ++o) t[o] && (r[i++] = e[o]);
								r.length = i, this._resolve(r)
							}, s.prototype.preservedValues = function() {
								return this._preservedValues
							}, e.prototype.map = function(t, e) {
								return "function" != typeof t ? r("fn must be a function\n\n    See http://goo.gl/916lJJ\n") : c(this, t, e, null).promise()
							}, e.map = function(t, e, n, i) {
								return "function" != typeof e ? r("fn must be a function\n\n    See http://goo.gl/916lJJ\n") : c(t, e, n, i).promise()
							}
						}
					}, {
						"./async.js": 2,
						"./util.js": 38
					}],
					20: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n, r, i) {
							var o = t("./util.js"),
								s = o.tryCatch;
							e.method = function(t) {
								if ("function" != typeof t) throw new e.TypeError("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
								return function() {
									var r = new e(n);
									r._captureStackTrace(), r._pushContext();
									var i = s(t).apply(this, arguments);
									return r._popContext(), r._resolveFromSyncValue(i), r
								}
							}, e.attempt = e.try = function(t, r, a) {
								if ("function" != typeof t) return i("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
								var c = new e(n);
								c._captureStackTrace(), c._pushContext();
								var u = o.isArray(r) ? s(t).apply(a, r) : s(t).call(a, r);
								return c._popContext(), c._resolveFromSyncValue(u), c
							}, e.prototype._resolveFromSyncValue = function(t) {
								t === o.errorObj ? this._rejectCallback(t.e, !1, !0) : this._resolveCallback(t, !0)
							}
						}
					}, {
						"./util.js": 38
					}],
					21: [function(t, e, n) {
						"use strict";
						e.exports = function(e) {
							function n(t, e) {
								var n = this;
								if (!o.isArray(t)) return r.call(n, t, e);
								var i = a(e).apply(n._boundValue(), [null].concat(t));
								i === c && s.throwLater(i.e)
							}

							function r(t, e) {
								var n = this,
									r = n._boundValue(),
									i = void 0 === t ? a(e).call(r, null) : a(e).call(r, null, t);
								i === c && s.throwLater(i.e)
							}

							function i(t, e) {
								var n = this;
								if (!t) {
									var r = n._target(),
										i = r._getCarriedStackTrace();
									i.cause = t, t = i
								}
								var o = a(e).call(n._boundValue(), t);
								o === c && s.throwLater(o.e)
							}
							var o = t("./util.js"),
								s = t("./async.js"),
								a = o.tryCatch,
								c = o.errorObj;
							e.prototype.asCallback = e.prototype.nodeify = function(t, e) {
								if ("function" == typeof t) {
									var o = r;
									void 0 !== e && Object(e).spread && (o = n), this._then(o, i, void 0, this, t)
								}
								return this
							}
						}
					}, {
						"./async.js": 2,
						"./util.js": 38
					}],
					22: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n) {
							var r = t("./util.js"),
								i = t("./async.js"),
								o = r.tryCatch,
								s = r.errorObj;
							e.prototype.progressed = function(t) {
								return this._then(void 0, void 0, t, void 0, void 0)
							}, e.prototype._progress = function(t) {
								this._isFollowingOrFulfilledOrRejected() || this._target()._progressUnchecked(t)
							}, e.prototype._progressHandlerAt = function(t) {
								return 0 === t ? this._progressHandler0 : this[(t << 2) + t - 5 + 2]
							}, e.prototype._doProgressWith = function(t) {
								var n = t.value,
									i = t.handler,
									a = t.promise,
									c = t.receiver,
									u = o(i).call(c, n);
								if (u === s) {
									if (null != u.e && "StopProgressPropagation" !== u.e.name) {
										var l = r.canAttachTrace(u.e) ? u.e : new Error(r.toString(u.e));
										a._attachExtraTrace(l), a._progress(u.e)
									}
								} else u instanceof e ? u._then(a._progress, null, null, a, void 0) : a._progress(u)
							}, e.prototype._progressUnchecked = function(t) {
								for (var r = this._length(), o = this._progress, s = 0; s < r; s++) {
									var a = this._progressHandlerAt(s),
										c = this._promiseAt(s);
									if (c instanceof e) "function" == typeof a ? i.invoke(this._doProgressWith, this, {
										handler: a,
										promise: c,
										receiver: this._receiverAt(s),
										value: t
									}) : i.invoke(o, c, t);
									else {
										var u = this._receiverAt(s);
										"function" == typeof a ? a.call(u, t, c) : u instanceof n && !u._isResolved() && u._promiseProgressed(t, c)
									}
								}
							}
						}
					}, {
						"./async.js": 2,
						"./util.js": 38
					}],
					23: [function(t, n, r) {
						"use strict";
						n.exports = function() {
							function r(t) {
								if ("function" != typeof t) throw new h("the promise constructor requires a resolver function\n\n    See http://goo.gl/EC22Yn\n");
								if (this.constructor !== r) throw new h("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/KsIlge\n");
								this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._progressHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this._settledValue = void 0, t !== d && this._resolveFromResolver(t)
							}

							function i(t) {
								var e = new r(d);
								e._fulfillmentHandler0 = t, e._rejectionHandler0 = t, e._progressHandler0 = t, e._promise0 = t, e._receiver0 = t, e._settledValue = t
							}
							var o, s = function() {
									return new h("circular promise resolution chain\n\n    See http://goo.gl/LhFpo0\n")
								},
								a = function() {
									return new r.PromiseInspection(this._target())
								},
								c = function(t) {
									return r.reject(new h(t))
								},
								u = t("./util.js");
							o = u.isNode ? function() {
								var t = e.domain;
								return void 0 === t && (t = null), t
							} : function() {
								return null
							}, u.notEnumerableProp(r, "_getDomain", o);
							var l = {},
								f = t("./async.js"),
								p = t("./errors.js"),
								h = r.TypeError = p.TypeError;
							r.RangeError = p.RangeError, r.CancellationError = p.CancellationError, r.TimeoutError = p.TimeoutError, r.OperationalError = p.OperationalError, r.RejectionError = p.OperationalError, r.AggregateError = p.AggregateError;
							var d = function() {},
								v = {},
								_ = {
									e: null
								},
								y = t("./thenables.js")(r, d),
								g = t("./promise_array.js")(r, d, y, c),
								m = t("./captured_trace.js")(),
								b = t("./debuggability.js")(r, m),
								w = t("./context.js")(r, m, b),
								j = t("./catch_filter.js")(_),
								k = t("./promise_resolver.js"),
								x = k._nodebackForPromise,
								E = u.errorObj,
								T = u.tryCatch;
							return r.prototype.toString = function() {
								return "[object Promise]"
							}, r.prototype.caught = r.prototype.catch = function(t) {
								var e = arguments.length;
								if (e > 1) {
									var n, i = new Array(e - 1),
										o = 0;
									for (n = 0; n < e - 1; ++n) {
										var s = arguments[n];
										if ("function" != typeof s) return r.reject(new h("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"));
										i[o++] = s
									}
									i.length = o, t = arguments[n];
									var a = new j(i, t, this);
									return this._then(void 0, a.doFilter, void 0, a, void 0)
								}
								return this._then(void 0, t, void 0, void 0, void 0)
							}, r.prototype.reflect = function() {
								return this._then(a, a, void 0, this, void 0)
							}, r.prototype.then = function(t, e, n) {
								if (b() && arguments.length > 0 && "function" != typeof t && "function" != typeof e) {
									var r = ".then() only accepts functions but was passed: " + u.classString(t);
									arguments.length > 1 && (r += ", " + u.classString(e)), this._warn(r)
								}
								return this._then(t, e, n, void 0, void 0)
							}, r.prototype.done = function(t, e, n) {
								var r = this._then(t, e, n, void 0, void 0);
								r._setIsFinal()
							}, r.prototype.spread = function(t, e) {
								return this.all()._then(t, e, void 0, v, void 0)
							}, r.prototype.isCancellable = function() {
								return !this.isResolved() && this._cancellable()
							}, r.prototype.toJSON = function() {
								var t = {
									isFulfilled: !1,
									isRejected: !1,
									fulfillmentValue: void 0,
									rejectionReason: void 0
								};
								return this.isFulfilled() ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0), t
							}, r.prototype.all = function() {
								return new g(this).promise()
							}, r.prototype.error = function(t) {
								return this.caught(u.originatesFromRejection, t)
							}, r.getNewLibraryCopy = n.exports, r.is = function(t) {
								return t instanceof r
							}, r.fromNode = function(t) {
								var e = new r(d),
									n = T(t)(x(e));
								return n === E && e._rejectCallback(n.e, !0, !0), e
							}, r.all = function(t) {
								return new g(t).promise()
							}, r.defer = r.pending = function() {
								var t = new r(d);
								return new k(t)
							}, r.cast = function(t) {
								var e = y(t);
								if (!(e instanceof r)) {
									var n = e;
									e = new r(d), e._fulfillUnchecked(n)
								}
								return e
							}, r.resolve = r.fulfilled = r.cast, r.reject = r.rejected = function(t) {
								var e = new r(d);
								return e._captureStackTrace(), e._rejectCallback(t, !0), e
							}, r.setScheduler = function(t) {
								if ("function" != typeof t) throw new h("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
								var e = f._schedule;
								return f._schedule = t, e
							}, r.prototype._then = function(t, e, n, i, s) {
								var a = void 0 !== s,
									c = a ? s : new r(d);
								a || (c._propagateFrom(this, 5), c._captureStackTrace());
								var u = this._target();
								u !== this && (void 0 === i && (i = this._boundTo), a || c._setIsMigrated());
								var l = u._addCallbacks(t, e, n, c, i, o());
								return u._isResolved() && !u._isSettlePromisesQueued() && f.invoke(u._settlePromiseAtPostResolution, u, l), c
							}, r.prototype._settlePromiseAtPostResolution = function(t) {
								this._isRejectionUnhandled() && this._unsetRejectionIsUnhandled(), this._settlePromiseAt(t)
							}, r.prototype._length = function() {
								return 131071 & this._bitField
							}, r.prototype._isFollowingOrFulfilledOrRejected = function() {
								return (939524096 & this._bitField) > 0
							}, r.prototype._isFollowing = function() {
								return 536870912 === (536870912 & this._bitField)
							}, r.prototype._setLength = function(t) {
								this._bitField = this._bitField & -131072 | 131071 & t
							}, r.prototype._setFulfilled = function() {
								this._bitField = 268435456 | this._bitField
							}, r.prototype._setRejected = function() {
								this._bitField = 134217728 | this._bitField
							}, r.prototype._setFollowing = function() {
								this._bitField = 536870912 | this._bitField
							}, r.prototype._setIsFinal = function() {
								this._bitField = 33554432 | this._bitField
							}, r.prototype._isFinal = function() {
								return (33554432 & this._bitField) > 0
							}, r.prototype._cancellable = function() {
								return (67108864 & this._bitField) > 0
							}, r.prototype._setCancellable = function() {
								this._bitField = 67108864 | this._bitField
							}, r.prototype._unsetCancellable = function() {
								this._bitField = this._bitField & -67108865
							}, r.prototype._setIsMigrated = function() {
								this._bitField = 4194304 | this._bitField
							}, r.prototype._unsetIsMigrated = function() {
								this._bitField = this._bitField & -4194305
							}, r.prototype._isMigrated = function() {
								return (4194304 & this._bitField) > 0
							}, r.prototype._receiverAt = function(t) {
								var e = 0 === t ? this._receiver0 : this[5 * t - 5 + 4];
								if (e !== l) return void 0 === e && this._isBound() ? this._boundValue() : e
							}, r.prototype._promiseAt = function(t) {
								return 0 === t ? this._promise0 : this[5 * t - 5 + 3]
							}, r.prototype._fulfillmentHandlerAt = function(t) {
								return 0 === t ? this._fulfillmentHandler0 : this[5 * t - 5 + 0]
							}, r.prototype._rejectionHandlerAt = function(t) {
								return 0 === t ? this._rejectionHandler0 : this[5 * t - 5 + 1]
							}, r.prototype._boundValue = function() {
								var t = this._boundTo;
								return void 0 !== t && t instanceof r ? t.isFulfilled() ? t.value() : void 0 : t
							}, r.prototype._migrateCallbacks = function(t, e) {
								var n = t._fulfillmentHandlerAt(e),
									i = t._rejectionHandlerAt(e),
									o = t._progressHandlerAt(e),
									s = t._promiseAt(e),
									a = t._receiverAt(e);
								s instanceof r && s._setIsMigrated(), void 0 === a && (a = l), this._addCallbacks(n, i, o, s, a, null)
							}, r.prototype._addCallbacks = function(t, e, n, r, i, o) {
								var s = this._length();
								if (s >= 131066 && (s = 0, this._setLength(0)), 0 === s) this._promise0 = r, void 0 !== i && (this._receiver0 = i), "function" != typeof t || this._isCarryingStackTrace() || (this._fulfillmentHandler0 = null === o ? t : o.bind(t)), "function" == typeof e && (this._rejectionHandler0 = null === o ? e : o.bind(e)), "function" == typeof n && (this._progressHandler0 = null === o ? n : o.bind(n));
								else {
									var a = 5 * s - 5;
									this[a + 3] = r, this[a + 4] = i, "function" == typeof t && (this[a + 0] = null === o ? t : o.bind(t)), "function" == typeof e && (this[a + 1] = null === o ? e : o.bind(e)), "function" == typeof n && (this[a + 2] = null === o ? n : o.bind(n))
								}
								return this._setLength(s + 1), s
							}, r.prototype._setProxyHandlers = function(t, e) {
								var n = this._length();
								if (n >= 131066 && (n = 0, this._setLength(0)), 0 === n) this._promise0 = e, this._receiver0 = t;
								else {
									var r = 5 * n - 5;
									this[r + 3] = e, this[r + 4] = t
								}
								this._setLength(n + 1)
							}, r.prototype._proxyPromiseArray = function(t, e) {
								this._setProxyHandlers(t, e)
							}, r.prototype._resolveCallback = function(t, e) {
								if (!this._isFollowingOrFulfilledOrRejected()) {
									if (t === this) return this._rejectCallback(s(), !1, !0);
									var n = y(t, this);
									if (!(n instanceof r)) return this._fulfill(t);
									var i = 1 | (e ? 4 : 0);
									this._propagateFrom(n, i);
									var o = n._target();
									if (o._isPending()) {
										for (var a = this._length(), c = 0; c < a; ++c) o._migrateCallbacks(this, c);
										this._setFollowing(), this._setLength(0), this._setFollowee(o)
									} else o._isFulfilled() ? this._fulfillUnchecked(o._value()) : this._rejectUnchecked(o._reason(), o._getCarriedStackTrace())
								}
							}, r.prototype._rejectCallback = function(t, e, n) {
								n || u.markAsOriginatingFromRejection(t);
								var r = u.ensureErrorObject(t),
									i = r === t;
								this._attachExtraTrace(r, !!e && i), this._reject(t, i ? void 0 : r)
							}, r.prototype._resolveFromResolver = function(t) {
								var e = this;
								this._captureStackTrace(), this._pushContext();
								var n = !0,
									r = T(t)(function(t) {
										null !== e && (e._resolveCallback(t), e = null)
									}, function(t) {
										null !== e && (e._rejectCallback(t, n), e = null)
									});
								n = !1, this._popContext(), void 0 !== r && r === E && null !== e && (e._rejectCallback(r.e, !0, !0), e = null)
							}, r.prototype._settlePromiseFromHandler = function(t, e, n, r) {
								if (!r._isRejected()) {
									r._pushContext();
									var i;
									if (i = e !== v || this._isRejected() ? T(t).call(e, n) : T(t).apply(this._boundValue(), n), r._popContext(), i === E || i === r || i === _) {
										var o = i === r ? s() : i.e;
										r._rejectCallback(o, !1, !0)
									} else r._resolveCallback(i)
								}
							}, r.prototype._target = function() {
								for (var t = this; t._isFollowing();) t = t._followee();
								return t
							}, r.prototype._followee = function() {
								return this._rejectionHandler0
							}, r.prototype._setFollowee = function(t) {
								this._rejectionHandler0 = t
							}, r.prototype._cleanValues = function() {
								this._cancellable() && (this._cancellationParent = void 0)
							}, r.prototype._propagateFrom = function(t, e) {
								(1 & e) > 0 && t._cancellable() && (this._setCancellable(), this._cancellationParent = t), (4 & e) > 0 && t._isBound() && this._setBoundTo(t._boundTo)
							}, r.prototype._fulfill = function(t) {
								this._isFollowingOrFulfilledOrRejected() || this._fulfillUnchecked(t)
							}, r.prototype._reject = function(t, e) {
								this._isFollowingOrFulfilledOrRejected() || this._rejectUnchecked(t, e)
							}, r.prototype._settlePromiseAt = function(t) {
								var e = this._promiseAt(t),
									n = e instanceof r;
								if (n && e._isMigrated()) return e._unsetIsMigrated(), f.invoke(this._settlePromiseAt, this, t);
								var i = this._isFulfilled() ? this._fulfillmentHandlerAt(t) : this._rejectionHandlerAt(t),
									o = this._isCarryingStackTrace() ? this._getCarriedStackTrace() : void 0,
									s = this._settledValue,
									a = this._receiverAt(t);
								this._clearCallbackDataAtIndex(t), "function" == typeof i ? n ? this._settlePromiseFromHandler(i, a, s, e) : i.call(a, s, e) : a instanceof g ? a._isResolved() || (this._isFulfilled() ? a._promiseFulfilled(s, e) : a._promiseRejected(s, e)) : n && (this._isFulfilled() ? e._fulfill(s) : e._reject(s, o)), t >= 4 && 4 === (31 & t) && f.invokeLater(this._setLength, this, 0)
							}, r.prototype._clearCallbackDataAtIndex = function(t) {
								if (0 === t) this._isCarryingStackTrace() || (this._fulfillmentHandler0 = void 0), this._rejectionHandler0 = this._progressHandler0 = this._receiver0 = this._promise0 = void 0;
								else {
									var e = 5 * t - 5;
									this[e + 3] = this[e + 4] = this[e + 0] = this[e + 1] = this[e + 2] = void 0
								}
							}, r.prototype._isSettlePromisesQueued = function() {
								return (this._bitField & -1073741824) === -1073741824
							}, r.prototype._setSettlePromisesQueued = function() {
								this._bitField = this._bitField | -1073741824
							}, r.prototype._unsetSettlePromisesQueued = function() {
								this._bitField = 1073741823 & this._bitField
							}, r.prototype._queueSettlePromises = function() {
								f.settlePromises(this), this._setSettlePromisesQueued()
							}, r.prototype._fulfillUnchecked = function(t) {
								if (t === this) {
									var e = s();
									return this._attachExtraTrace(e), this._rejectUnchecked(e, void 0)
								}
								this._setFulfilled(), this._settledValue = t, this._cleanValues(), this._length() > 0 && this._queueSettlePromises()
							}, r.prototype._rejectUncheckedCheckError = function(t) {
								var e = u.ensureErrorObject(t);
								this._rejectUnchecked(t, e === t ? void 0 : e)
							}, r.prototype._rejectUnchecked = function(t, e) {
								if (t === this) {
									var n = s();
									return this._attachExtraTrace(n), this._rejectUnchecked(n)
								}
								return this._setRejected(), this._settledValue = t, this._cleanValues(), this._isFinal() ? void f.throwLater(function(t) {
									throw "stack" in t && f.invokeFirst(m.unhandledRejection, void 0, t), t
								}, void 0 === e ? t : e) : (void 0 !== e && e !== t && this._setCarriedStackTrace(e), void(this._length() > 0 ? this._queueSettlePromises() : this._ensurePossibleRejectionHandled()))
							}, r.prototype._settlePromises = function() {
								this._unsetSettlePromisesQueued();
								for (var t = this._length(), e = 0; e < t; e++) this._settlePromiseAt(e)
							}, u.notEnumerableProp(r, "_makeSelfResolutionError", s), t("./progress.js")(r, g), t("./method.js")(r, d, y, c), t("./bind.js")(r, d, y), t("./finally.js")(r, _, y), t("./direct_resolve.js")(r), t("./synchronous_inspection.js")(r), t("./join.js")(r, g, y, d), r.version = "2.11.0", r.Promise = r, t("./map.js")(r, g, c, y, d), t("./cancel.js")(r), t("./using.js")(r, c, y, w), t("./generators.js")(r, c, d, y), t("./nodeify.js")(r), t("./call_get.js")(r), t("./props.js")(r, g, y, c), t("./race.js")(r, d, y, c), t("./reduce.js")(r, g, c, y, d), t("./settle.js")(r, g), t("./some.js")(r, g, c), t("./promisify.js")(r, d), t("./any.js")(r), t("./each.js")(r, d), t("./timers.js")(r, d), t("./filter.js")(r, d), u.toFastProperties(r), u.toFastProperties(r.prototype), i({
								a: 1
							}), i({
								b: 2
							}), i({
								c: 3
							}), i(1), i(function() {}), i(void 0), i(!1), i(new r(d)), m.setBounds(f.firstLineError, u.lastLineError), r
						}
					}, {
						"./any.js": 1,
						"./async.js": 2,
						"./bind.js": 3,
						"./call_get.js": 5,
						"./cancel.js": 6,
						"./captured_trace.js": 7,
						"./catch_filter.js": 8,
						"./context.js": 9,
						"./debuggability.js": 10,
						"./direct_resolve.js": 11,
						"./each.js": 12,
						"./errors.js": 13,
						"./filter.js": 15,
						"./finally.js": 16,
						"./generators.js": 17,
						"./join.js": 18,
						"./map.js": 19,
						"./method.js": 20,
						"./nodeify.js": 21,
						"./progress.js": 22,
						"./promise_array.js": 24,
						"./promise_resolver.js": 25,
						"./promisify.js": 26,
						"./props.js": 27,
						"./race.js": 29,
						"./reduce.js": 30,
						"./settle.js": 32,
						"./some.js": 33,
						"./synchronous_inspection.js": 34,
						"./thenables.js": 35,
						"./timers.js": 36,
						"./using.js": 37,
						"./util.js": 38
					}],
					24: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n, r, i) {
							function o(t) {
								switch (t) {
									case -2:
										return [];
									case -3:
										return {}
								}
							}

							function s(t) {
								var r, i = this._promise = new e(n);
								t instanceof e && (r = t, i._propagateFrom(r, 5)), this._values = t, this._length = 0, this._totalResolved = 0, this._init(void 0, -2)
							}
							var a = t("./util.js"),
								c = a.isArray;
							return s.prototype.length = function() {
								return this._length
							}, s.prototype.promise = function() {
								return this._promise
							}, s.prototype._init = function t(n, s) {
								var a = r(this._values, this._promise);
								if (a instanceof e) {
									if (a = a._target(), this._values = a, !a._isFulfilled()) return a._isPending() ? void a._then(t, this._reject, void 0, this, s) : void this._reject(a._reason());
									if (a = a._value(), !c(a)) {
										var u = new e.TypeError("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n");
										return void this.__hardReject__(u)
									}
								} else if (!c(a)) return void this._promise._reject(i("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n")._reason());
								if (0 === a.length) return void(s === -5 ? this._resolveEmptyArray() : this._resolve(o(s)));
								var l = this.getActualLength(a.length);
								this._length = l, this._values = this.shouldCopyValues() ? new Array(l) : this._values;
								for (var f = this._promise, p = 0; p < l; ++p) {
									var h = this._isResolved(),
										d = r(a[p], f);
									d instanceof e ? (d = d._target(), h ? d._ignoreRejections() : d._isPending() ? d._proxyPromiseArray(this, p) : d._isFulfilled() ? this._promiseFulfilled(d._value(), p) : this._promiseRejected(d._reason(), p)) : h || this._promiseFulfilled(d, p)
								}
							}, s.prototype._isResolved = function() {
								return null === this._values
							}, s.prototype._resolve = function(t) {
								this._values = null, this._promise._fulfill(t)
							}, s.prototype.__hardReject__ = s.prototype._reject = function(t) {
								this._values = null, this._promise._rejectCallback(t, !1, !0)
							}, s.prototype._promiseProgressed = function(t, e) {
								this._promise._progress({
									index: e,
									value: t
								})
							}, s.prototype._promiseFulfilled = function(t, e) {
								this._values[e] = t;
								var n = ++this._totalResolved;
								n >= this._length && this._resolve(this._values)
							}, s.prototype._promiseRejected = function(t, e) {
								this._totalResolved++, this._reject(t)
							}, s.prototype.shouldCopyValues = function() {
								return !0
							}, s.prototype.getActualLength = function(t) {
								return t
							}, s
						}
					}, {
						"./util.js": 38
					}],
					25: [function(t, e, n) {
						"use strict";

						function r(t) {
							return t instanceof Error && h.getPrototypeOf(t) === Error.prototype
						}

						function i(t) {
							var e;
							if (r(t)) {
								e = new f(t), e.name = t.name, e.message = t.message, e.stack = t.stack;
								for (var n = h.keys(t), i = 0; i < n.length; ++i) {
									var o = n[i];
									d.test(o) || (e[o] = t[o])
								}
								return e
							}
							return a.markAsOriginatingFromRejection(t), t
						}

						function o(t) {
							return function(e, n) {
								if (null !== t) {
									if (e) {
										var r = i(c(e));
										t._attachExtraTrace(r), t._reject(r)
									} else if (arguments.length > 2) {
										for (var o = arguments.length, s = new Array(o - 1), a = 1; a < o; ++a) s[a - 1] = arguments[a];
										t._fulfill(s)
									} else t._fulfill(n);
									t = null
								}
							}
						}
						var s, a = t("./util.js"),
							c = a.maybeWrapAsError,
							u = t("./errors.js"),
							l = u.TimeoutError,
							f = u.OperationalError,
							p = a.haveGetters,
							h = t("./es5.js"),
							d = /^(?:name|message|stack|cause)$/;
						if (s = p ? function(t) {
								this.promise = t
							} : function(t) {
								this.promise = t, this.asCallback = o(t), this.callback = this.asCallback
							}, p) {
							var v = {
								get: function() {
									return o(this.promise)
								}
							};
							h.defineProperty(s.prototype, "asCallback", v), h.defineProperty(s.prototype, "callback", v)
						}
						s._nodebackForPromise = o, s.prototype.toString = function() {
							return "[object PromiseResolver]"
						}, s.prototype.resolve = s.prototype.fulfill = function(t) {
							if (!(this instanceof s)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
							this.promise._resolveCallback(t)
						}, s.prototype.reject = function(t) {
							if (!(this instanceof s)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
							this.promise._rejectCallback(t)
						}, s.prototype.progress = function(t) {
							if (!(this instanceof s)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");
							this.promise._progress(t)
						}, s.prototype.cancel = function(t) {
							this.promise.cancel(t)
						}, s.prototype.timeout = function() {
							this.reject(new l("timeout"))
						}, s.prototype.isResolved = function() {
							return this.promise.isResolved()
						}, s.prototype.toJSON = function() {
							return this.promise.toJSON()
						}, e.exports = s
					}, {
						"./errors.js": 13,
						"./es5.js": 14,
						"./util.js": 38
					}],
					26: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n) {
							function r(t) {
								return !j.test(t)
							}

							function i(t) {
								try {
									return t.__isPromisified__ === !0
								} catch (t) {
									return !1
								}
							}

							function o(t, e, n) {
								var r = h.getDataPropertyOrDefault(t, e + n, b);
								return !!r && i(r)
							}

							function s(t, e, n) {
								for (var r = 0; r < t.length; r += 2) {
									var i = t[r];
									if (n.test(i))
										for (var o = i.replace(n, ""), s = 0; s < t.length; s += 2)
											if (t[s] === o) throw new g("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/iWrZbw\n".replace("%s", e))
								}
							}

							function a(t, e, n, r) {
								for (var a = h.inheritedDataKeys(t), c = [], u = 0; u < a.length; ++u) {
									var l = a[u],
										f = t[l],
										p = r === k || k(l, f, t);
									"function" != typeof f || i(f) || o(t, l, e) || !r(l, f, t, p) || c.push(l, f)
								}
								return s(c, e, n), c
							}

							function c(t, r, i, o) {
								function s() {
									var i = r;
									r === p && (i = this);
									var o = new e(n);
									o._captureStackTrace();
									var s = "string" == typeof c && this !== a ? this[c] : t,
										u = d(o);
									try {
										s.apply(i, v(arguments, u))
									} catch (t) {
										o._rejectCallback(_(t), !0, !0)
									}
									return o
								}
								var a = function() {
										return this
									}(),
									c = t;
								return "string" == typeof c && (t = o), h.notEnumerableProp(s, "__isPromisified__", !0), s
							}

							function u(t, e, n, r) {
								for (var i = new RegExp(x(e) + "$"), o = a(t, e, i, n), s = 0, c = o.length; s < c; s += 2) {
									var u = o[s],
										l = o[s + 1],
										f = u + e;
									if (r === E) t[f] = E(u, p, u, l, e);
									else {
										var d = r(l, function() {
											return E(u, p, u, l, e)
										});
										h.notEnumerableProp(d, "__isPromisified__", !0), t[f] = d
									}
								}
								return h.toFastProperties(t), t
							}

							function l(t, e) {
								return E(t, e, void 0, t)
							}
							var f, p = {},
								h = t("./util.js"),
								d = t("./promise_resolver.js")._nodebackForPromise,
								v = h.withAppended,
								_ = h.maybeWrapAsError,
								y = h.canEvaluate,
								g = t("./errors").TypeError,
								m = "Async",
								b = {
									__isPromisified__: !0
								},
								w = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"],
								j = new RegExp("^(?:" + w.join("|") + ")$"),
								k = function(t) {
									return h.isIdentifier(t) && "_" !== t.charAt(0) && "constructor" !== t
								},
								x = function(t) {
									return t.replace(/([$])/, "\\$")
								},
								E = y ? f : c;
							e.promisify = function(t, e) {
								if ("function" != typeof t) throw new g("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
								if (i(t)) return t;
								var n = l(t, arguments.length < 2 ? p : e);
								return h.copyDescriptors(t, n, r), n
							}, e.promisifyAll = function(t, e) {
								if ("function" != typeof t && "object" != typeof t) throw new g("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/9ITlV0\n");
								e = Object(e);
								var n = e.suffix;
								"string" != typeof n && (n = m);
								var r = e.filter;
								"function" != typeof r && (r = k);
								var i = e.promisifier;
								if ("function" != typeof i && (i = E), !h.isIdentifier(n)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/8FZo5V\n");
								for (var o = h.inheritedDataKeys(t), s = 0; s < o.length; ++s) {
									var a = t[o[s]];
									"constructor" !== o[s] && h.isClass(a) && (u(a.prototype, n, r, i), u(a, n, r, i))
								}
								return u(t, n, r, i)
							}
						}
					}, {
						"./errors": 13,
						"./promise_resolver.js": 25,
						"./util.js": 38
					}],
					27: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n, r, i) {
							function o(t) {
								for (var e = u.keys(t), n = e.length, r = new Array(2 * n), i = 0; i < n; ++i) {
									var o = e[i];
									r[i] = t[o], r[i + n] = o
								}
								this.constructor$(r)
							}

							function s(t) {
								var n, s = r(t);
								return c(s) ? (n = s instanceof e ? s._then(e.props, void 0, void 0, void 0, void 0) : new o(s).promise(), s instanceof e && n._propagateFrom(s, 4), n) : i("cannot await properties of a non-object\n\n    See http://goo.gl/OsFKC8\n")
							}
							var a = t("./util.js"),
								c = a.isObject,
								u = t("./es5.js");
							a.inherits(o, n), o.prototype._init = function() {
								this._init$(void 0, -3)
							}, o.prototype._promiseFulfilled = function(t, e) {
								this._values[e] = t;
								var n = ++this._totalResolved;
								if (n >= this._length) {
									for (var r = {}, i = this.length(), o = 0, s = this.length(); o < s; ++o) r[this._values[o + i]] = this._values[o];
									this._resolve(r)
								}
							}, o.prototype._promiseProgressed = function(t, e) {
								this._promise._progress({
									key: this._values[e + this.length()],
									value: t
								})
							}, o.prototype.shouldCopyValues = function() {
								return !1
							}, o.prototype.getActualLength = function(t) {
								return t >> 1
							}, e.prototype.props = function() {
								return s(this)
							}, e.props = function(t) {
								return s(t)
							}
						}
					}, {
						"./es5.js": 14,
						"./util.js": 38
					}],
					28: [function(t, e, n) {
						"use strict";

						function r(t, e, n, r, i) {
							for (var o = 0; o < i; ++o) n[o + r] = t[o + e], t[o + e] = void 0
						}

						function i(t) {
							this._capacity = t, this._length = 0, this._front = 0
						}
						i.prototype._willBeOverCapacity = function(t) {
							return this._capacity < t
						}, i.prototype._pushOne = function(t) {
							var e = this.length();
							this._checkCapacity(e + 1);
							var n = this._front + e & this._capacity - 1;
							this[n] = t, this._length = e + 1
						}, i.prototype._unshiftOne = function(t) {
							var e = this._capacity;
							this._checkCapacity(this.length() + 1);
							var n = this._front,
								r = (n - 1 & e - 1 ^ e) - e;
							this[r] = t, this._front = r, this._length = this.length() + 1
						}, i.prototype.unshift = function(t, e, n) {
							this._unshiftOne(n), this._unshiftOne(e), this._unshiftOne(t)
						}, i.prototype.push = function(t, e, n) {
							var r = this.length() + 3;
							if (this._willBeOverCapacity(r)) return this._pushOne(t), this._pushOne(e), void this._pushOne(n);
							var i = this._front + r - 3;
							this._checkCapacity(r);
							var o = this._capacity - 1;
							this[i + 0 & o] = t, this[i + 1 & o] = e, this[i + 2 & o] = n, this._length = r
						}, i.prototype.shift = function() {
							var t = this._front,
								e = this[t];
							return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, e
						}, i.prototype.length = function() {
							return this._length
						}, i.prototype._checkCapacity = function(t) {
							this._capacity < t && this._resizeTo(this._capacity << 1)
						}, i.prototype._resizeTo = function(t) {
							var e = this._capacity;
							this._capacity = t;
							var n = this._front,
								i = this._length,
								o = n + i & e - 1;
							r(this, 0, this, e, o)
						}, e.exports = i
					}, {}],
					29: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n, r, i) {
							function o(t, o) {
								var c = r(t);
								if (c instanceof e) return a(c);
								if (!s(t)) return i("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n");
								var u = new e(n);
								void 0 !== o && u._propagateFrom(o, 5);
								for (var l = u._fulfill, f = u._reject, p = 0, h = t.length; p < h; ++p) {
									var d = t[p];
									(void 0 !== d || p in t) && e.cast(d)._then(l, f, void 0, u, null)
								}
								return u
							}
							var s = t("./util.js").isArray,
								a = function(t) {
									return t.then(function(e) {
										return o(e, t)
									})
								};
							e.race = function(t) {
								return o(t, void 0)
							}, e.prototype.race = function() {
								return o(this, void 0)
							}
						}
					}, {
						"./util.js": 38
					}],
					30: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n, r, i, o) {
							function s(t, n, r, s) {
								this.constructor$(t), this._promise._captureStackTrace(), this._preservedValues = s === o ? [] : null, this._zerothIsAccum = void 0 === r, this._gotAccum = !1, this._reducingIndex = this._zerothIsAccum ? 1 : 0, this._valuesPhase = void 0;
								var c = i(r, this._promise),
									f = !1,
									p = c instanceof e;
								p && (c = c._target(), c._isPending() ? c._proxyPromiseArray(this, -1) : c._isFulfilled() ? (r = c._value(), this._gotAccum = !0) : (this._reject(c._reason()), f = !0)), p || this._zerothIsAccum || (this._gotAccum = !0);
								var h = u();
								this._callback = null === h ? n : h.bind(n), this._accum = r, f || l.invoke(a, this, void 0)
							}

							function a() {
								this._init$(void 0, -5)
							}

							function c(t, e, n, i) {
								if ("function" != typeof e) return r("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
								var o = new s(t, e, n, i);
								return o.promise()
							}
							var u = e._getDomain,
								l = t("./async.js"),
								f = t("./util.js"),
								p = f.tryCatch,
								h = f.errorObj;
							f.inherits(s, n), s.prototype._init = function() {}, s.prototype._resolveEmptyArray = function() {
								(this._gotAccum || this._zerothIsAccum) && this._resolve(null !== this._preservedValues ? [] : this._accum)
							}, s.prototype._promiseFulfilled = function(t, n) {
								var r = this._values;
								r[n] = t;
								var o, s = this.length(),
									a = this._preservedValues,
									c = null !== a,
									u = this._gotAccum,
									l = this._valuesPhase;
								if (!l)
									for (l = this._valuesPhase = new Array(s), o = 0; o < s; ++o) l[o] = 0;
								if (o = l[n], 0 === n && this._zerothIsAccum ? (this._accum = t, this._gotAccum = u = !0, l[n] = 0 === o ? 1 : 2) : n === -1 ? (this._accum = t, this._gotAccum = u = !0) : 0 === o ? l[n] = 1 : (l[n] = 2, this._accum = t), u) {
									for (var f, d = this._callback, v = this._promise._boundValue(), _ = this._reducingIndex; _ < s; ++_)
										if (o = l[_], 2 !== o) {
											if (1 !== o) return;
											if (t = r[_], this._promise._pushContext(), c ? (a.push(t), f = p(d).call(v, t, _, s)) : f = p(d).call(v, this._accum, t, _, s), this._promise._popContext(), f === h) return this._reject(f.e);
											var y = i(f, this._promise);
											if (y instanceof e) {
												if (y = y._target(), y._isPending()) return l[_] = 4, y._proxyPromiseArray(this, _);
												if (!y._isFulfilled()) return this._reject(y._reason());
												f = y._value()
											}
											this._reducingIndex = _ + 1, this._accum = f
										} else this._reducingIndex = _ + 1;
									this._resolve(c ? a : this._accum)
								}
							}, e.prototype.reduce = function(t, e) {
								return c(this, t, e, null)
							}, e.reduce = function(t, e, n, r) {
								return c(t, e, n, r)
							}
						}
					}, {
						"./async.js": 2,
						"./util.js": 38
					}],
					31: [function(t, i, o) {
						"use strict";
						var s, a = t("./util"),
							c = function() {
								throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n")
							};
						if (a.isNode && "undefined" == typeof MutationObserver) {
							var u = n.setImmediate,
								l = e.nextTick;
							s = a.isRecentNode ? function(t) {
								u.call(n, t)
							} : function(t) {
								l.call(e, t)
							}
						} else "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && window.navigator.standalone ? s = "undefined" != typeof r ? function(t) {
							r(t)
						} : "undefined" != typeof setTimeout ? function(t) {
							setTimeout(t, 0)
						} : c : (s = function(t) {
							var e = document.createElement("div"),
								n = new MutationObserver(t);
							return n.observe(e, {
									attributes: !0
								}),
								function() {
									e.classList.toggle("foo")
								}
						}, s.isStatic = !0);
						i.exports = s
					}, {
						"./util": 38
					}],
					32: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n) {
							function r(t) {
								this.constructor$(t)
							}
							var i = e.PromiseInspection,
								o = t("./util.js");
							o.inherits(r, n), r.prototype._promiseResolved = function(t, e) {
								this._values[t] = e;
								var n = ++this._totalResolved;
								n >= this._length && this._resolve(this._values)
							}, r.prototype._promiseFulfilled = function(t, e) {
								var n = new i;
								n._bitField = 268435456, n._settledValue = t, this._promiseResolved(e, n)
							}, r.prototype._promiseRejected = function(t, e) {
								var n = new i;
								n._bitField = 134217728, n._settledValue = t, this._promiseResolved(e, n)
							}, e.settle = function(t) {
								return new r(t).promise()
							}, e.prototype.settle = function() {
								return new r(this).promise()
							}
						}
					}, {
						"./util.js": 38
					}],
					33: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n, r) {
							function i(t) {
								this.constructor$(t), this._howMany = 0, this._unwrap = !1, this._initialized = !1
							}

							function o(t, e) {
								if ((0 | e) !== e || e < 0) return r("expecting a positive integer\n\n    See http://goo.gl/1wAmHx\n");
								var n = new i(t),
									o = n.promise();
								return n.setHowMany(e), n.init(), o
							}
							var s = t("./util.js"),
								a = t("./errors.js").RangeError,
								c = t("./errors.js").AggregateError,
								u = s.isArray;
							s.inherits(i, n), i.prototype._init = function() {
								if (this._initialized) {
									if (0 === this._howMany) return void this._resolve([]);
									this._init$(void 0, -5);
									var t = u(this._values);
									!this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
								}
							}, i.prototype.init = function() {
								this._initialized = !0, this._init()
							}, i.prototype.setUnwrap = function() {
								this._unwrap = !0
							}, i.prototype.howMany = function() {
								return this._howMany
							}, i.prototype.setHowMany = function(t) {
								this._howMany = t
							}, i.prototype._promiseFulfilled = function(t) {
								this._addFulfilled(t), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values))
							}, i.prototype._promiseRejected = function(t) {
								if (this._addRejected(t), this.howMany() > this._canPossiblyFulfill()) {
									for (var e = new c, n = this.length(); n < this._values.length; ++n) e.push(this._values[n]);
									this._reject(e)
								}
							}, i.prototype._fulfilled = function() {
								return this._totalResolved
							}, i.prototype._rejected = function() {
								return this._values.length - this.length()
							}, i.prototype._addRejected = function(t) {
								this._values.push(t)
							}, i.prototype._addFulfilled = function(t) {
								this._values[this._totalResolved++] = t
							}, i.prototype._canPossiblyFulfill = function() {
								return this.length() - this._rejected()
							}, i.prototype._getRangeError = function(t) {
								var e = "Input array must contain at least " + this._howMany + " items but contains only " + t + " items";
								return new a(e)
							}, i.prototype._resolveEmptyArray = function() {
								this._reject(this._getRangeError(0))
							}, e.some = function(t, e) {
								return o(t, e)
							}, e.prototype.some = function(t) {
								return o(this, t)
							}, e._SomePromiseArray = i
						}
					}, {
						"./errors.js": 13,
						"./util.js": 38
					}],
					34: [function(t, e, n) {
						"use strict";
						e.exports = function(t) {
							function e(t) {
								void 0 !== t ? (t = t._target(), this._bitField = t._bitField, this._settledValue = t._settledValue) : (this._bitField = 0, this._settledValue = void 0)
							}
							e.prototype.value = function() {
								if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n");
								return this._settledValue
							}, e.prototype.error = e.prototype.reason = function() {
								if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n");
								return this._settledValue
							}, e.prototype.isFulfilled = t.prototype._isFulfilled = function() {
								return (268435456 & this._bitField) > 0
							}, e.prototype.isRejected = t.prototype._isRejected = function() {
								return (134217728 & this._bitField) > 0
							}, e.prototype.isPending = t.prototype._isPending = function() {
								return 0 === (402653184 & this._bitField)
							}, e.prototype.isResolved = t.prototype._isResolved = function() {
								return (402653184 & this._bitField) > 0
							}, t.prototype.isPending = function() {
								return this._target()._isPending()
							}, t.prototype.isRejected = function() {
								return this._target()._isRejected()
							}, t.prototype.isFulfilled = function() {
								return this._target()._isFulfilled()
							}, t.prototype.isResolved = function() {
								return this._target()._isResolved()
							}, t.prototype._value = function() {
								return this._settledValue
							}, t.prototype._reason = function() {
								return this._unsetRejectionIsUnhandled(), this._settledValue
							}, t.prototype.value = function() {
								var t = this._target();
								if (!t.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n");
								return t._settledValue
							}, t.prototype.reason = function() {
								var t = this._target();
								if (!t.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n");
								return t._unsetRejectionIsUnhandled(), t._settledValue
							}, t.PromiseInspection = e
						}
					}, {}],
					35: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n) {
							function r(t, r) {
								if (u(t)) {
									if (t instanceof e) return t;
									if (o(t)) {
										var l = new e(n);
										return t._then(l._fulfillUnchecked, l._rejectUncheckedCheckError, l._progressUnchecked, l, null), l
									}
									var f = a.tryCatch(i)(t);
									if (f === c) {
										r && r._pushContext();
										var l = e.reject(f.e);
										return r && r._popContext(), l
									}
									if ("function" == typeof f) return s(t, f, r)
								}
								return t
							}

							function i(t) {
								return t.then
							}

							function o(t) {
								return l.call(t, "_promise0")
							}

							function s(t, r, i) {
								function o(t) {
									l && (l._resolveCallback(t), l = null)
								}

								function s(t) {
									l && (l._rejectCallback(t, p, !0), l = null)
								}

								function u(t) {
									l && "function" == typeof l._progress && l._progress(t)
								}
								var l = new e(n),
									f = l;
								i && i._pushContext(), l._captureStackTrace(), i && i._popContext();
								var p = !0,
									h = a.tryCatch(r).call(t, o, s, u);
								return p = !1, l && h === c && (l._rejectCallback(h.e, !0, !0), l = null), f
							}
							var a = t("./util.js"),
								c = a.errorObj,
								u = a.isObject,
								l = {}.hasOwnProperty;
							return r
						}
					}, {
						"./util.js": 38
					}],
					36: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n) {
							function r(t) {
								var e = this;
								return e instanceof Number && (e = +e), clearTimeout(e), t
							}

							function i(t) {
								var e = this;
								throw e instanceof Number && (e = +e), clearTimeout(e), t
							}
							var o = t("./util.js"),
								s = e.TimeoutError,
								a = function(t, e) {
									if (t.isPending()) {
										var n;
										!o.isPrimitive(e) && e instanceof Error ? n = e : ("string" != typeof e && (e = "operation timed out"), n = new s(e)), o.markAsOriginatingFromRejection(n), t._attachExtraTrace(n), t._cancel(n)
									}
								},
								c = function(t) {
									return u(+this).thenReturn(t)
								},
								u = e.delay = function(t, r) {
									if (void 0 === r) {
										r = t, t = void 0;
										var i = new e(n);
										return setTimeout(function() {
											i._fulfill()
										}, r), i
									}
									return r = +r, e.resolve(t)._then(c, null, null, r, void 0)
								};
							e.prototype.delay = function(t) {
								return u(this, t)
							}, e.prototype.timeout = function(t, e) {
								t = +t;
								var n = this.then().cancellable();
								n._cancellationParent = this;
								var o = setTimeout(function() {
									a(n, e)
								}, t);
								return n._then(r, i, void 0, o, void 0)
							}
						}
					}, {
						"./util.js": 38
					}],
					37: [function(t, e, n) {
						"use strict";
						e.exports = function(e, n, r, i) {
							function o(t) {
								for (var n = t.length, r = 0; r < n; ++r) {
									var i = t[r];
									if (i.isRejected()) return e.reject(i.error());
									t[r] = i._settledValue
								}
								return t
							}

							function s(t) {
								setTimeout(function() {
									throw t
								}, 0)
							}

							function a(t) {
								var e = r(t);
								return e !== t && "function" == typeof t._isDisposable && "function" == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()), e
							}

							function c(t, n) {
								function i() {
									if (o >= c) return u.resolve();
									var l = a(t[o++]);
									if (l instanceof e && l._isDisposable()) {
										try {
											l = r(l._getDisposer().tryDispose(n), t.promise)
										} catch (t) {
											return s(t)
										}
										if (l instanceof e) return l._then(i, s, null, null, null)
									}
									i()
								}
								var o = 0,
									c = t.length,
									u = e.defer();
								return i(), u.promise
							}

							function u(t) {
								var e = new _;
								return e._settledValue = t, e._bitField = 268435456, c(this, e).thenReturn(t)
							}

							function l(t) {
								var e = new _;
								return e._settledValue = t, e._bitField = 134217728, c(this, e).thenThrow(t)
							}

							function f(t, e, n) {
								this._data = t, this._promise = e, this._context = n
							}

							function p(t, e, n) {
								this.constructor$(t, e, n)
							}

							function h(t) {
								return f.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise()) : t
							}
							var d = t("./errors.js").TypeError,
								v = t("./util.js").inherits,
								_ = e.PromiseInspection;
							f.prototype.data = function() {
								return this._data
							}, f.prototype.promise = function() {
								return this._promise
							}, f.prototype.resource = function() {
								return this.promise().isFulfilled() ? this.promise().value() : null
							}, f.prototype.tryDispose = function(t) {
								var e = this.resource(),
									n = this._context;
								void 0 !== n && n._pushContext();
								var r = null !== e ? this.doDispose(e, t) : null;
								return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, r
							}, f.isDisposer = function(t) {
								return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose
							}, v(p, f), p.prototype.doDispose = function(t, e) {
								var n = this.data();
								return n.call(t, t, e)
							}, e.using = function() {
								var t = arguments.length;
								if (t < 2) return n("you must pass at least 2 arguments to Promise.using");
								var i = arguments[t - 1];
								if ("function" != typeof i) return n("fn must be a function\n\n    See http://goo.gl/916lJJ\n");
								var s, a = !0;
								2 === t && Array.isArray(arguments[0]) ? (s = arguments[0], t = s.length, a = !1) : (s = arguments, t--);
								for (var c = new Array(t), p = 0; p < t; ++p) {
									var d = s[p];
									if (f.isDisposer(d)) {
										var v = d;
										d = d.promise(), d._setDisposable(v)
									} else {
										var _ = r(d);
										_ instanceof e && (d = _._then(h, null, null, {
											resources: c,
											index: p
										}, void 0))
									}
									c[p] = d
								}
								var y = e.settle(c).then(o).then(function(t) {
									y._pushContext();
									var e;
									try {
										e = a ? i.apply(void 0, t) : i.call(void 0, t);
									} finally {
										y._popContext()
									}
									return e
								})._then(u, l, void 0, c, void 0);
								return c.promise = y, y
							}, e.prototype._setDisposable = function(t) {
								this._bitField = 262144 | this._bitField, this._disposer = t
							}, e.prototype._isDisposable = function() {
								return (262144 & this._bitField) > 0
							}, e.prototype._getDisposer = function() {
								return this._disposer
							}, e.prototype._unsetDisposable = function() {
								this._bitField = this._bitField & -262145, this._disposer = void 0
							}, e.prototype.disposer = function(t) {
								if ("function" == typeof t) return new p(t, this, i());
								throw new d
							}
						}
					}, {
						"./errors.js": 13,
						"./util.js": 38
					}],
					38: [function(t, n, r) {
						"use strict";

						function i() {
							try {
								var t = S;
								return S = null, t.apply(this, arguments)
							} catch (t) {
								return T.e = t, T
							}
						}

						function o(t) {
							return S = t, i
						}

						function s(t) {
							return null == t || t === !0 || t === !1 || "string" == typeof t || "number" == typeof t
						}

						function a(t) {
							return !s(t)
						}

						function c(t) {
							return s(t) ? new Error(y(t)) : t
						}

						function u(t, e) {
							var n, r = t.length,
								i = new Array(r + 1);
							for (n = 0; n < r; ++n) i[n] = t[n];
							return i[n] = e, i
						}

						function l(t, e, n) {
							if (!k.isES5) return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;
							var r = Object.getOwnPropertyDescriptor(t, e);
							return null != r ? null == r.get && null == r.set ? r.value : n : void 0
						}

						function f(t, e, n) {
							if (s(t)) return t;
							var r = {
								value: n,
								configurable: !0,
								enumerable: !1,
								writable: !0
							};
							return k.defineProperty(t, e, r), t
						}

						function p(t) {
							throw t
						}

						function h(t) {
							try {
								if ("function" == typeof t) {
									var e = k.names(t.prototype),
										n = k.isES5 && e.length > 1,
										r = e.length > 0 && !(1 === e.length && "constructor" === e[0]),
										i = P.test(t + "") && k.names(t).length > 0;
									if (n || r || i) return !0
								}
								return !1
							} catch (t) {
								return !1
							}
						}

						function d(t) {
							function e() {}
							e.prototype = t;
							for (var n = 8; n--;) new e;
							return t
						}

						function v(t) {
							return O.test(t)
						}

						function _(t, e, n) {
							for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e + i + n;
							return r
						}

						function y(t) {
							try {
								return t + ""
							} catch (t) {
								return "[no string representation]"
							}
						}

						function g(t) {
							try {
								f(t, "isOperational", !0)
							} catch (t) {}
						}

						function m(t) {
							return null != t && (t instanceof Error.__BluebirdErrorTypes__.OperationalError || t.isOperational === !0)
						}

						function b(t) {
							return t instanceof Error && k.propertyIsWritable(t, "stack")
						}

						function w(t) {
							return {}.toString.call(t)
						}

						function j(t, e, n) {
							for (var r = k.names(t), i = 0; i < r.length; ++i) {
								var o = r[i];
								if (n(o)) try {
									k.defineProperty(e, o, k.getDescriptor(t, o))
								} catch (t) {}
							}
						}
						var k = t("./es5.js"),
							x = "undefined" == typeof navigator,
							E = function() {
								try {
									var t = {};
									return k.defineProperty(t, "f", {
										get: function() {
											return 3
										}
									}), 3 === t.f
								} catch (t) {
									return !1
								}
							}(),
							T = {
								e: {}
							},
							S, F = function(t, e) {
								function n() {
									this.constructor = t, this.constructor$ = e;
									for (var n in e.prototype) r.call(e.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = e.prototype[n])
								}
								var r = {}.hasOwnProperty;
								return n.prototype = e.prototype, t.prototype = new n, t.prototype
							},
							C = function() {
								var t = [Array.prototype, Object.prototype, Function.prototype],
									e = function(e) {
										for (var n = 0; n < t.length; ++n)
											if (t[n] === e) return !0;
										return !1
									};
								if (k.isES5) {
									var n = Object.getOwnPropertyNames;
									return function(t) {
										for (var r = [], i = Object.create(null); null != t && !e(t);) {
											var o;
											try {
												o = n(t)
											} catch (t) {
												return r
											}
											for (var s = 0; s < o.length; ++s) {
												var a = o[s];
												if (!i[a]) {
													i[a] = !0;
													var c = Object.getOwnPropertyDescriptor(t, a);
													null != c && null == c.get && null == c.set && r.push(a)
												}
											}
											t = k.getPrototypeOf(t)
										}
										return r
									}
								}
								var r = {}.hasOwnProperty;
								return function(n) {
									if (e(n)) return [];
									var i = [];
									t: for (var o in n)
										if (r.call(n, o)) i.push(o);
										else {
											for (var s = 0; s < t.length; ++s)
												if (r.call(t[s], o)) continue t;
											i.push(o)
										}
									return i
								}
							}(),
							P = /this\s*\.\s*\S+\s*=/,
							O = /^[a-z$_][a-z$_0-9]*$/i,
							A = function() {
								return "stack" in new Error ? function(t) {
									return b(t) ? t : new Error(y(t))
								} : function(t) {
									if (b(t)) return t;
									try {
										throw new Error(y(t))
									} catch (t) {
										return t
									}
								}
							}(),
							R = {
								isClass: h,
								isIdentifier: v,
								inheritedDataKeys: C,
								getDataPropertyOrDefault: l,
								thrower: p,
								isArray: k.isArray,
								haveGetters: E,
								notEnumerableProp: f,
								isPrimitive: s,
								isObject: a,
								canEvaluate: x,
								errorObj: T,
								tryCatch: o,
								inherits: F,
								withAppended: u,
								maybeWrapAsError: c,
								toFastProperties: d,
								filledRange: _,
								toString: y,
								canAttachTrace: b,
								ensureErrorObject: A,
								originatesFromRejection: m,
								markAsOriginatingFromRejection: g,
								classString: w,
								copyDescriptors: j,
								hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
								isNode: "undefined" != typeof e && "[object process]" === w(e).toLowerCase()
							};
						R.isRecentNode = R.isNode && function() {
							var t = e.versions.node.split(".").map(Number);
							return 0 === t[0] && t[1] > 10 || t[0] > 0
						}(), R.isNode && R.toFastProperties(e);
						try {
							throw new Error
						} catch (t) {
							R.lastLineError = t
						}
						n.exports = R
					}, {
						"./es5.js": 14
					}]
				}, {}, [4])(4)
			}), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise)
		}).call(e, n(14), function() {
			return this
		}(), n(21).setImmediate)
	}, function(t, e) { /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
		"document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ? ! function() {
			"use strict";
			var t = document.createElement("_");
			if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
				var e = function(t) {
					var e = DOMTokenList.prototype[t];
					DOMTokenList.prototype[t] = function(t) {
						var n, r = arguments.length;
						for (n = 0; n < r; n++) t = arguments[n], e.call(this, t)
					}
				};
				e("add"), e("remove")
			}
			if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
				var n = DOMTokenList.prototype.toggle;
				DOMTokenList.prototype.toggle = function(t, e) {
					return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t)
				}
			}
			t = null
		}() : ! function(t) {
			"use strict";
			if ("Element" in t) {
				var e = "classList",
					n = "prototype",
					r = t.Element[n],
					i = Object,
					o = String[n].trim || function() {
						return this.replace(/^\s+|\s+$/g, "")
					},
					s = Array[n].indexOf || function(t) {
						for (var e = 0, n = this.length; e < n; e++)
							if (e in this && this[e] === t) return e;
						return -1
					},
					a = function(t, e) {
						this.name = t, this.code = DOMException[t], this.message = e
					},
					c = function(t, e) {
						if ("" === e) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
						if (/\s/.test(e)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
						return s.call(t, e)
					},
					u = function(t) {
						for (var e = o.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], r = 0, i = n.length; r < i; r++) this.push(n[r]);
						this._updateClassName = function() {
							t.setAttribute("class", this.toString())
						}
					},
					l = u[n] = [],
					f = function() {
						return new u(this)
					};
				if (a[n] = Error[n], l.item = function(t) {
						return this[t] || null
					}, l.contains = function(t) {
						return t += "", c(this, t) !== -1
					}, l.add = function() {
						var t, e = arguments,
							n = 0,
							r = e.length,
							i = !1;
						do t = e[n] + "", c(this, t) === -1 && (this.push(t), i = !0); while (++n < r);
						i && this._updateClassName()
					}, l.remove = function() {
						var t, e, n = arguments,
							r = 0,
							i = n.length,
							o = !1;
						do
							for (t = n[r] + "", e = c(this, t); e !== -1;) this.splice(e, 1), o = !0, e = c(this, t); while (++r < i);
						o && this._updateClassName()
					}, l.toggle = function(t, e) {
						t += "";
						var n = this.contains(t),
							r = n ? e !== !0 && "remove" : e !== !1 && "add";
						return r && this[r](t), e === !0 || e === !1 ? e : !n
					}, l.toString = function() {
						return this.join(" ")
					}, i.defineProperty) {
					var p = {
						get: f,
						enumerable: !0,
						configurable: !0
					};
					try {
						i.defineProperty(r, e, p)
					} catch (t) {
						t.number === -2146823252 && (p.enumerable = !1, i.defineProperty(r, e, p))
					}
				} else i[n].__defineGetter__ && r.__defineGetter__(e, f)
			}
		}(window.self))
	}, function(t, e, n) {
		var r = n(1);
		t.exports = function(t, e) {
			return r.create(t, e)
		}
	}, function(t, e, n) {
		n(73), t.exports = n(4).Object.setPrototypeOf
	}, function(t, e, n) {
		n(30), n(75), n(77), n(74), t.exports = n(4).Promise
	}, function(t, e, n) {
		n(76), n(30), t.exports = n(4).Symbol
	}, function(t, e) {
		t.exports = function() {}
	}, function(t, e, n) {
		var r = n(11),
			i = n(3).document,
			o = r(i) && r(i.createElement);
		t.exports = function(t) {
			return o ? i.createElement(t) : {}
		}
	}, function(t, e, n) {
		var r = n(1);
		t.exports = function(t) {
			var e = r.getKeys(t),
				n = r.getSymbols;
			if (n)
				for (var i, o = n(t), s = r.isEnum, a = 0; o.length > a;) s.call(t, i = o[a++]) && e.push(i);
			return e
		}
	}, function(t, e, n) {
		var r = n(7),
			i = n(57),
			o = n(55),
			s = n(5),
			a = n(70),
			c = n(71);
		t.exports = function(t, e, n, u) {
			var l, f, p, h = c(t),
				d = r(n, u, e ? 2 : 1),
				v = 0;
			if ("function" != typeof h) throw TypeError(t + " is not iterable!");
			if (o(h))
				for (l = a(t.length); l > v; v++) e ? d(s(f = t[v])[0], f[1]) : d(t[v]);
			else
				for (p = h.call(t); !(f = p.next()).done;) i(p, d, f.value, e)
		}
	}, function(t, e, n) {
		var r = n(13),
			i = n(1).getNames,
			o = {}.toString,
			s = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
			a = function(t) {
				try {
					return i(t)
				} catch (t) {
					return s.slice()
				}
			};
		t.exports.get = function(t) {
			return s && "[object Window]" == o.call(t) ? a(t) : i(r(t))
		}
	}, function(t, e, n) {
		t.exports = n(3).document && document.documentElement
	}, function(t, e) {
		t.exports = function(t, e, n) {
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
	}, function(t, e, n) {
		var r = n(6);
		t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
			return "String" == r(t) ? t.split("") : Object(t)
		}
	}, function(t, e, n) {
		var r = n(8),
			i = n(2)("iterator"),
			o = Array.prototype;
		t.exports = function(t) {
			return void 0 !== t && (r.Array === t || o[i] === t)
		}
	}, function(t, e, n) {
		var r = n(6);
		t.exports = Array.isArray || function(t) {
			return "Array" == r(t)
		}
	}, function(t, e, n) {
		var r = n(5);
		t.exports = function(t, e, n, i) {
			try {
				return i ? e(r(n)[0], n[1]) : e(n)
			} catch (e) {
				var o = t.return;
				throw void 0 !== o && r(o.call(t)), e
			}
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(1),
			i = n(19),
			o = n(12),
			s = {};
		n(17)(s, n(2)("iterator"), function() {
			return this
		}), t.exports = function(t, e, n) {
			t.prototype = r.create(s, {
				next: i(1, n)
			}), o(t, e + " Iterator")
		}
	}, function(t, e, n) {
		var r = n(2)("iterator"),
			i = !1;
		try {
			var o = [7][r]();
			o.return = function() {
				i = !0
			}, Array.from(o, function() {
				throw 2
			})
		} catch (t) {}
		t.exports = function(t, e) {
			if (!e && !i) return !1;
			var n = !1;
			try {
				var o = [7],
					s = o[r]();
				s.next = function() {
					return {
						done: n = !0
					}
				}, o[r] = function() {
					return s
				}, t(o)
			} catch (t) {}
			return n
		}
	}, function(t, e) {
		t.exports = function(t, e) {
			return {
				value: e,
				done: !!t
			}
		}
	}, function(t, e, n) {
		var r = n(1),
			i = n(13);
		t.exports = function(t, e) {
			for (var n, o = i(t), s = r.getKeys(o), a = s.length, c = 0; a > c;)
				if (o[n = s[c++]] === e) return n
		}
	}, function(t, e, n) {
		var r, i, o, s = n(3),
			a = n(69).set,
			c = s.MutationObserver || s.WebKitMutationObserver,
			u = s.process,
			l = s.Promise,
			f = "process" == n(6)(u),
			p = function() {
				var t, e, n;
				for (f && (t = u.domain) && (u.domain = null, t.exit()); r;) e = r.domain, n = r.fn, e && e.enter(), n(), e && e.exit(), r = r.next;
				i = void 0, t && t.enter()
			};
		if (f) o = function() {
			u.nextTick(p)
		};
		else if (c) {
			var h = 1,
				d = document.createTextNode("");
			new c(p).observe(d, {
				characterData: !0
			}), o = function() {
				d.data = h = -h
			}
		} else o = l && l.resolve ? function() {
			l.resolve().then(p)
		} : function() {
			a.call(s, p)
		};
		t.exports = function(t) {
			var e = {
				fn: t,
				next: void 0,
				domain: f && u.domain
			};
			i && (i.next = e), r || (r = e, o()), i = e
		}
	}, function(t, e, n) {
		var r = n(20);
		t.exports = function(t, e) {
			for (var n in e) r(t, n, e[n]);
			return t
		}
	}, function(t, e) {
		t.exports = Object.is || function(t, e) {
			return t === e ? 0 !== t || 1 / t === 1 / e : t != t && e != e
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(4),
			i = n(1),
			o = n(9),
			s = n(2)("species");
		t.exports = function(t) {
			var e = r[t];
			o && e && !e[s] && i.setDesc(e, s, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	}, function(t, e, n) {
		var r = n(5),
			i = n(15),
			o = n(2)("species");
		t.exports = function(t, e) {
			var n, s = r(t).constructor;
			return void 0 === s || void 0 == (n = r(s)[o]) ? e : i(n)
		}
	}, function(t, e) {
		t.exports = function(t, e, n) {
			if (!(t instanceof e)) throw TypeError(n + ": use the 'new' operator!");
			return t
		}
	}, function(t, e, n) {
		var r = n(28),
			i = n(23);
		t.exports = function(t) {
			return function(e, n) {
				var o, s, a = String(i(e)),
					c = r(n),
					u = a.length;
				return c < 0 || c >= u ? t ? "" : void 0 : (o = a.charCodeAt(c), o < 55296 || o > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? a.charAt(c) : o : t ? a.slice(c, c + 2) : (o - 55296 << 10) + (s - 56320) + 65536)
			}
		}
	}, function(t, e, n) {
		var r, i, o, s = n(7),
			a = n(53),
			c = n(52),
			u = n(48),
			l = n(3),
			f = l.process,
			p = l.setImmediate,
			h = l.clearImmediate,
			d = l.MessageChannel,
			v = 0,
			_ = {},
			y = "onreadystatechange",
			g = function() {
				var t = +this;
				if (_.hasOwnProperty(t)) {
					var e = _[t];
					delete _[t], e()
				}
			},
			m = function(t) {
				g.call(t.data)
			};
		p && h || (p = function(t) {
			for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
			return _[++v] = function() {
				a("function" == typeof t ? t : Function(t), e)
			}, r(v), v
		}, h = function(t) {
			delete _[t]
		}, "process" == n(6)(f) ? r = function(t) {
			f.nextTick(s(g, t, 1))
		} : d ? (i = new d, o = i.port2, i.port1.onmessage = m, r = s(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
			l.postMessage(t + "", "*")
		}, l.addEventListener("message", m, !1)) : r = y in u("script") ? function(t) {
			c.appendChild(u("script"))[y] = function() {
				c.removeChild(this), g.call(t)
			}
		} : function(t) {
			setTimeout(s(g, t, 1), 0)
		}), t.exports = {
			set: p,
			clear: h
		}
	}, function(t, e, n) {
		var r = n(28),
			i = Math.min;
		t.exports = function(t) {
			return t > 0 ? i(r(t), 9007199254740991) : 0
		}
	}, function(t, e, n) {
		var r = n(22),
			i = n(2)("iterator"),
			o = n(8);
		t.exports = n(4).getIteratorMethod = function(t) {
			if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)]
		}
	}, function(t, e, n) {
		"use strict";
		var r = n(47),
			i = n(60),
			o = n(8),
			s = n(13);
		t.exports = n(25)(Array, "Array", function(t, e) {
			this._t = s(t), this._i = 0, this._k = e
		}, function() {
			var t = this._t,
				e = this._k,
				n = this._i++;
			return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]])
		}, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
	}, function(t, e, n) {
		var r = n(10);
		r(r.S, "Object", {
			setPrototypeOf: n(26).set
		})
	}, function(t, e, n) {
		"use strict";
		var r, i = n(1),
			o = n(18),
			s = n(3),
			a = n(7),
			c = n(22),
			u = n(10),
			l = n(11),
			f = n(5),
			p = n(15),
			h = n(67),
			d = n(50),
			v = n(26).set,
			_ = n(64),
			y = n(2)("species"),
			g = n(66),
			m = n(62),
			b = "Promise",
			w = s.process,
			j = "process" == c(w),
			k = s[b],
			x = function() {},
			E = function(t) {
				var e, n = new k(x);
				return t && (n.constructor = function(t) {
					t(x, x)
				}), (e = k.resolve(n)).catch(x), e === n
			},
			T = function() {
				function t(e) {
					var n = new k(e);
					return v(n, t.prototype), n
				}
				var e = !1;
				try {
					if (e = k && k.resolve && E(), v(t, k), t.prototype = i.create(k.prototype, {
							constructor: {
								value: t
							}
						}), t.resolve(5).then(function() {}) instanceof t || (e = !1), e && n(9)) {
						var r = !1;
						k.resolve(i.setDesc({}, "then", {
							get: function() {
								r = !0
							}
						})), e = r
					}
				} catch (t) {
					e = !1
				}
				return e
			}(),
			S = function(t, e) {
				return !(!o || t !== k || e !== r) || _(t, e)
			},
			F = function(t) {
				var e = f(t)[y];
				return void 0 != e ? e : t
			},
			C = function(t) {
				var e;
				return !(!l(t) || "function" != typeof(e = t.then)) && e
			},
			P = function(t) {
				var e, n;
				this.promise = new t(function(t, r) {
					if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
					e = t, n = r
				}), this.resolve = p(e), this.reject = p(n)
			},
			O = function(t) {
				try {
					t()
				} catch (t) {
					return {
						error: t
					}
				}
			},
			A = function(t, e) {
				if (!t.n) {
					t.n = !0;
					var n = t.c;
					m(function() {
						for (var r = t.v, i = 1 == t.s, o = 0, a = function(e) {
								var n, o, s = i ? e.ok : e.fail,
									a = e.resolve,
									c = e.reject;
								try {
									s ? (i || (t.h = !0), n = s === !0 ? r : s(r), n === e.promise ? c(TypeError("Promise-chain cycle")) : (o = C(n)) ? o.call(n, a, c) : a(n)) : c(r)
								} catch (t) {
									c(t)
								}
							}; n.length > o;) a(n[o++]);
						n.length = 0, t.n = !1, e && setTimeout(function() {
							var e, n, i = t.p;
							R(i) && (j ? w.emit("unhandledRejection", r, i) : (e = s.onunhandledrejection) ? e({
								promise: i,
								reason: r
							}) : (n = s.console) && n.error && n.error("Unhandled promise rejection", r)), t.a = void 0
						}, 1)
					})
				}
			},
			R = function(t) {
				var e, n = t._d,
					r = n.a || n.c,
					i = 0;
				if (n.h) return !1;
				for (; r.length > i;)
					if (e = r[i++], e.fail || !R(e.promise)) return !1;
				return !0
			},
			L = function(t) {
				var e = this;
				e.d || (e.d = !0, e = e.r || e, e.v = t, e.s = 2, e.a = e.c.slice(), A(e, !0))
			},
			I = function(t) {
				var e, n = this;
				if (!n.d) {
					n.d = !0, n = n.r || n;
					try {
						if (n.p === t) throw TypeError("Promise can't be resolved itself");
						(e = C(t)) ? m(function() {
							var r = {
								r: n,
								d: !1
							};
							try {
								e.call(t, a(I, r, 1), a(L, r, 1))
							} catch (t) {
								L.call(r, t)
							}
						}): (n.v = t, n.s = 1, A(n, !1))
					} catch (t) {
						L.call({
							r: n,
							d: !1
						}, t)
					}
				}
			};
		T || (k = function(t) {
			p(t);
			var e = this._d = {
				p: h(this, k, b),
				c: [],
				a: void 0,
				s: 0,
				d: !1,
				v: void 0,
				h: !1,
				n: !1
			};
			try {
				t(a(I, e, 1), a(L, e, 1))
			} catch (t) {
				L.call(e, t)
			}
		}, n(63)(k.prototype, {
			then: function(t, e) {
				var n = new P(g(this, k)),
					r = n.promise,
					i = this._d;
				return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, i.c.push(n), i.a && i.a.push(n), i.s && A(i, !1), r
			},
			catch: function(t) {
				return this.then(void 0, t)
			}
		})), u(u.G + u.W + u.F * !T, {
			Promise: k
		}), n(12)(k, b), n(65)(b), r = n(4)[b], u(u.S + u.F * !T, b, {
			reject: function(t) {
				var e = new P(this),
					n = e.reject;
				return n(t), e.promise
			}
		}), u(u.S + u.F * (!T || E(!0)), b, {
			resolve: function(t) {
				if (t instanceof k && S(t.constructor, this)) return t;
				var e = new P(this),
					n = e.resolve;
				return n(t), e.promise
			}
		}), u(u.S + u.F * !(T && n(59)(function(t) {
			k.all(t).catch(function() {})
		})), b, {
			all: function(t) {
				var e = F(this),
					n = new P(e),
					r = n.resolve,
					o = n.reject,
					s = [],
					a = O(function() {
						d(t, !1, s.push, s);
						var n = s.length,
							a = Array(n);
						n ? i.each.call(s, function(t, i) {
							var s = !1;
							e.resolve(t).then(function(t) {
								s || (s = !0, a[i] = t, --n || r(a))
							}, o)
						}) : r(a)
					});
				return a && o(a.error), n.promise
			},
			race: function(t) {
				var e = F(this),
					n = new P(e),
					r = n.reject,
					i = O(function() {
						d(t, !1, function(t) {
							e.resolve(t).then(n.resolve, r)
						})
					});
				return i && r(i.error), n.promise
			}
		})
	}, function(t, e, n) {
		"use strict";
		var r = n(68)(!0);
		n(25)(String, "String", function(t) {
			this._t = String(t), this._i = 0
		}, function() {
			var t, e = this._t,
				n = this._i;
			return n >= e.length ? {
				value: void 0,
				done: !0
			} : (t = r(e, n), this._i += t.length, {
				value: t,
				done: !1
			})
		})
	}, function(t, e, n) {
		"use strict";
		var r = n(1),
			i = n(3),
			o = n(16),
			s = n(9),
			a = n(10),
			c = n(20),
			u = n(24),
			l = n(27),
			f = n(12),
			p = n(29),
			h = n(2),
			d = n(61),
			v = n(51),
			_ = n(49),
			y = n(56),
			g = n(5),
			m = n(13),
			b = n(19),
			w = r.getDesc,
			j = r.setDesc,
			k = r.create,
			x = v.get,
			E = i.Symbol,
			T = i.JSON,
			S = T && T.stringify,
			F = !1,
			C = h("_hidden"),
			P = r.isEnum,
			O = l("symbol-registry"),
			A = l("symbols"),
			R = "function" == typeof E,
			L = Object.prototype,
			I = s && u(function() {
				return 7 != k(j({}, "a", {
					get: function() {
						return j(this, "a", {
							value: 7
						}).a
					}
				})).a
			}) ? function(t, e, n) {
				var r = w(L, e);
				r && delete L[e], j(t, e, n), r && t !== L && j(L, e, r)
			} : j,
			M = function(t) {
				var e = A[t] = k(E.prototype);
				return e._k = t, s && F && I(L, t, {
					configurable: !0,
					set: function(e) {
						o(this, C) && o(this[C], t) && (this[C][t] = !1), I(this, t, b(1, e))
					}
				}), e
			},
			D = function(t) {
				return "symbol" == typeof t
			},
			N = function(t, e, n) {
				return n && o(A, e) ? (n.enumerable ? (o(t, C) && t[C][e] && (t[C][e] = !1), n = k(n, {
					enumerable: b(0, !1)
				})) : (o(t, C) || j(t, C, b(1, {})), t[C][e] = !0), I(t, e, n)) : j(t, e, n)
			},
			H = function(t, e) {
				g(t);
				for (var n, r = _(e = m(e)), i = 0, o = r.length; o > i;) N(t, n = r[i++], e[n]);
				return t
			},
			$ = function(t, e) {
				return void 0 === e ? k(t) : H(k(t), e)
			},
			U = function(t) {
				var e = P.call(this, t);
				return !(e || !o(this, t) || !o(A, t) || o(this, C) && this[C][t]) || e
			},
			V = function(t, e) {
				var n = w(t = m(t), e);
				return !n || !o(A, e) || o(t, C) && t[C][e] || (n.enumerable = !0), n
			},
			z = function(t) {
				for (var e, n = x(m(t)), r = [], i = 0; n.length > i;) o(A, e = n[i++]) || e == C || r.push(e);
				return r
			},
			B = function(t) {
				for (var e, n = x(m(t)), r = [], i = 0; n.length > i;) o(A, e = n[i++]) && r.push(A[e]);
				return r
			},
			G = function(t) {
				if (void 0 !== t && !D(t)) {
					for (var e, n, r = [t], i = 1, o = arguments; o.length > i;) r.push(o[i++]);
					return e = r[1], "function" == typeof e && (n = e), !n && y(e) || (e = function(t, e) {
						if (n && (e = n.call(this, t, e)), !D(e)) return e
					}), r[1] = e, S.apply(T, r)
				}
			},
			J = u(function() {
				var t = E();
				return "[null]" != S([t]) || "{}" != S({
					a: t
				}) || "{}" != S(Object(t))
			});
		R || (E = function() {
			if (D(this)) throw TypeError("Symbol is not a constructor");
			return M(p(arguments.length > 0 ? arguments[0] : void 0))
		}, c(E.prototype, "toString", function() {
			return this._k
		}), D = function(t) {
			return t instanceof E
		}, r.create = $, r.isEnum = U, r.getDesc = V, r.setDesc = N, r.setDescs = H, r.getNames = v.get = z, r.getSymbols = B, s && !n(18) && c(L, "propertyIsEnumerable", U, !0));
		var Q = {
			for: function(t) {
				return o(O, t += "") ? O[t] : O[t] = E(t)
			},
			keyFor: function(t) {
				return d(O, t)
			},
			useSetter: function() {
				F = !0
			},
			useSimple: function() {
				F = !1
			}
		};
		r.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function(t) {
			var e = h(t);
			Q[t] = R ? e : M(e)
		}), F = !0, a(a.G + a.W, {
			Symbol: E
		}), a(a.S, "Symbol", Q), a(a.S + a.F * !R, "Object", {
			create: $,
			defineProperty: N,
			defineProperties: H,
			getOwnPropertyDescriptor: V,
			getOwnPropertyNames: z,
			getOwnPropertySymbols: B
		}), T && a(a.S + a.F * (!R || J), "JSON", {
			stringify: G
		}), f(E, "Symbol"), f(Math, "Math", !0), f(i.JSON, "JSON", !0)
	}, function(t, e, n) {
		n(72);
		var r = n(8);
		r.NodeList = r.HTMLCollection = r.Array
	}, function(t, e, n) {
		e.markdown = n(79), e.parse = e.markdown.toHTML
	}, function(t, e, n) {
		! function(t) {
			function e() {
				return "Markdown.mk_block( " + uneval(this.toString()) + ", " + uneval(this.trailing) + ", " + uneval(this.lineNumber) + " )"
			}

			function r() {
				var t = n(93);
				return "Markdown.mk_block( " + t.inspect(this.toString()) + ", " + t.inspect(this.trailing) + ", " + t.inspect(this.lineNumber) + " )"
			}

			function i(t) {
				for (var e = 0, n = -1;
					(n = t.indexOf("\n", n + 1)) !== -1;) e++;
				return e
			}

			function o(t, e) {
				function n(t) {
					this.len_after = t, this.name = "close_" + e
				}
				var r = t + "_state",
					i = "strong" == t ? "em_state" : "strong_state";
				return function(o, s) {
					if (this[r][0] == e) return this[r].shift(), [o.length, new n(o.length - e.length)];
					var a = this[i].slice(),
						c = this[r].slice();
					this[r].unshift(e);
					var u = this.processInline(o.substr(e.length)),
						l = u[u.length - 1];
					this[r].shift();
					if (l instanceof n) {
						u.pop();
						var f = o.length - l.len_after;
						return [f, [t].concat(u)]
					}
					return this[i] = a, this[r] = c, [e.length, e]
				}
			}

			function s(t) {
				for (var e = t.split(""), n = [""], r = !1; e.length;) {
					var i = e.shift();
					switch (i) {
						case " ":
							r ? n[n.length - 1] += i : n.push("");
							break;
						case "'":
						case '"':
							r = !r;
							break;
						case "\\":
							i = e.shift();
						default:
							n[n.length - 1] += i
					}
				}
				return n
			}

			function c(t) {
				return y(t) && t.length > 1 && "object" == typeof t[1] && !y(t[1]) ? t[1] : void 0
			}

			function u(t) {
				return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
			}

			function l(t) {
				if ("string" == typeof t) return u(t);
				var e = t.shift(),
					n = {},
					r = [];
				for (!t.length || "object" != typeof t[0] || t[0] instanceof Array || (n = t.shift()); t.length;) r.push(l(t.shift()));
				var i = "";
				for (var o in n) i += " " + o + '="' + u(n[o]) + '"';
				return "img" == e || "br" == e || "hr" == e ? "<" + e + i + "/>" : "<" + e + i + ">" + r.join("") + "</" + e + ">"
			}

			function f(t, e, n) {
				var r;
				n = n || {};
				var i = t.slice(0);
				"function" == typeof n.preprocessTreeNode && (i = n.preprocessTreeNode(i, e));
				var o = c(i);
				if (o) {
					i[1] = {};
					for (r in o) i[1][r] = o[r];
					o = i[1]
				}
				if ("string" == typeof i) return i;
				switch (i[0]) {
					case "header":
						i[0] = "h" + i[1].level, delete i[1].level;
						break;
					case "bulletlist":
						i[0] = "ul";
						break;
					case "numberlist":
						i[0] = "ol";
						break;
					case "listitem":
						i[0] = "li";
						break;
					case "para":
						i[0] = "p";
						break;
					case "markdown":
						i[0] = "html", o && delete o.references;
						break;
					case "code_block":
						i[0] = "pre", r = o ? 2 : 1;
						var s = ["code"];
						s.push.apply(s, i.splice(r, i.length - r)), i[r] = s;
						break;
					case "inlinecode":
						i[0] = "code";
						break;
					case "img":
						i[1].src = i[1].href, delete i[1].href;
						break;
					case "linebreak":
						i[0] = "br";
						break;
					case "link":
						i[0] = "a";
						break;
					case "link_ref":
						i[0] = "a";
						var a = e[o.ref];
						if (!a) return o.original;
						delete o.ref, o.href = a.href, a.title && (o.title = a.title), delete o.original;
						break;
					case "img_ref":
						i[0] = "img";
						var a = e[o.ref];
						if (!a) return o.original;
						delete o.ref, o.src = a.href, a.title && (o.title = a.title), delete o.original
				}
				if (r = 1, o) {
					for (var u in i[1]) {
						r = 2;
						break
					}
					1 === r && i.splice(r, 1)
				}
				for (; r < i.length; ++r) i[r] = f(i[r], e, n);
				return i
			}

			function h(t) {
				for (var e = c(t) ? 2 : 1; e < t.length;) "string" == typeof t[e] ? e + 1 < t.length && "string" == typeof t[e + 1] ? t[e] += t.splice(e + 1, 1)[0] : ++e : (h(t[e]), ++e)
			}
			var d = t.Markdown = function(t) {
				switch (typeof t) {
					case "undefined":
						this.dialect = d.dialects.Gruber;
						break;
					case "object":
						this.dialect = t;
						break;
					default:
						if (!(t in d.dialects)) throw new Error("Unknown Markdown dialect '" + String(t) + "'");
						this.dialect = d.dialects[t]
				}
				this.em_state = [], this.strong_state = [], this.debug_indent = ""
			};
			t.parse = function(t, e) {
				var n = new d(e);
				return n.toTree(t)
			}, t.toHTML = function(e, n, r) {
				var i = t.toHTMLTree(e, n, r);
				return t.renderJsonML(i)
			}, t.toHTMLTree = function(t, e, n) {
				"string" == typeof t && (t = this.parse(t, e));
				var r = c(t),
					i = {};
				r && r.references && (i = r.references);
				var o = f(t, i, n);
				return h(o), o
			};
			var v = d.mk_block = function(t, n, i) {
				1 == arguments.length && (n = "\n\n");
				var o = new String(t);
				return o.trailing = n, o.inspect = r, o.toSource = e, void 0 != i && (o.lineNumber = i), o
			};
			d.prototype.split_blocks = function(t, e) {
				t = t.replace(/(\r\n|\n|\r)/g, "\n");
				var n, r = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
					o = [],
					s = 1;
				for (null != (n = /^(\s*\n)/.exec(t)) && (s += i(n[0]), r.lastIndex = n[0].length); null !== (n = r.exec(t));) "\n#" == n[2] && (n[2] = "\n", r.lastIndex--), o.push(v(n[1], n[2], s)), s += i(n[0]);
				return o
			}, d.prototype.processBlock = function(t, e) {
				var n = this.dialect.block,
					r = n.__order__;
				if ("__call__" in n) return n.__call__.call(this, t, e);
				for (var i = 0; i < r.length; i++) {
					var o = n[r[i]].call(this, t, e);
					if (o) return (!y(o) || o.length > 0 && !y(o[0])) && this.debug(r[i], "didn't return a proper array"), o
				}
				return []
			}, d.prototype.processInline = function(t) {
				return this.dialect.inline.__call__.call(this, String(t))
			}, d.prototype.toTree = function(t, e) {
				var n = t instanceof Array ? t : this.split_blocks(t),
					r = this.tree;
				try {
					for (this.tree = e || this.tree || ["markdown"]; n.length;) {
						var i = this.processBlock(n.shift(), n);
						i.length && this.tree.push.apply(this.tree, i)
					}
					return this.tree
				} finally {
					e && (this.tree = r)
				}
			}, d.prototype.debug = function() {
				var t = Array.prototype.slice.call(arguments);
				t.unshift(this.debug_indent), "undefined" != typeof print && print.apply(print, t), "undefined" != typeof console && "undefined" != typeof console.log && console.log.apply(null, t)
			}, d.prototype.loop_re_over_block = function(t, e, n) {
				for (var r, i = e.valueOf(); i.length && null != (r = t.exec(i));) i = i.substr(r[0].length), n.call(this, r);
				return i
			}, d.dialects = {}, d.dialects.Gruber = {
				block: {
					atxHeader: function(t, e) {
						var n = t.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);
						if (n) {
							var r = ["header", {
								level: n[1].length
							}];
							return Array.prototype.push.apply(r, this.processInline(n[2])), n[0].length < t.length && e.unshift(v(t.substr(n[0].length), t.trailing, t.lineNumber + 2)), [r]
						}
					},
					setextHeader: function(t, e) {
						var n = t.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);
						if (n) {
							var r = "=" === n[2] ? 1 : 2,
								i = ["header", {
									level: r
								}, n[1]];
							return n[0].length < t.length && e.unshift(v(t.substr(n[0].length), t.trailing, t.lineNumber + 2)), [i]
						}
					},
					code: function(t, e) {
						var n = [],
							r = /^(?: {0,3}\t| {4})(.*)\n?/;
						if (t.match(r)) {
							t: for (;;) {
								var i = this.loop_re_over_block(r, t.valueOf(), function(t) {
									n.push(t[1])
								});
								if (i.length) {
									e.unshift(v(i, t.trailing));
									break t
								}
								if (!e.length) break t;
								if (!e[0].match(r)) break t;
								n.push(t.trailing.replace(/[^\n]/g, "").substring(2)), t = e.shift()
							}
							return [
								["code_block", n.join("\n")]
							]
						}
					},
					horizRule: function(t, e) {
						var n = t.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);
						if (n) {
							var r = [
								["hr"]
							];
							return n[1] && r.unshift.apply(r, this.processBlock(n[1], [])), n[3] && e.unshift(v(n[3])), r
						}
					},
					lists: function() {
						function t(t) {
							return new RegExp("(?:^(" + c + "{0," + t + "} {0,3})(" + o + ")\\s+)|(^" + c + "{0," + (t - 1) + "}[ ]{0,4})")
						}

						function e(t) {
							return t.replace(/ {0,3}\t/g, "    ")
						}

						function n(t, e, n, r) {
							if (e) return void t.push(["para"].concat(n));
							var i = t[t.length - 1] instanceof Array && "para" == t[t.length - 1][0] ? t[t.length - 1] : t;
							r && t.length > 1 && n.unshift(r);
							for (var o = 0; o < n.length; o++) {
								var s = n[o],
									a = "string" == typeof s;
								a && i.length > 1 && "string" == typeof i[i.length - 1] ? i[i.length - 1] += s : i.push(s)
							}
						}

						function r(t, e) {
							for (var n = new RegExp("^(" + c + "{" + t + "}.*?\\n?)*$"), r = new RegExp("^" + c + "{" + t + "}", "gm"), i = []; e.length > 0 && n.exec(e[0]);) {
								var o = e.shift(),
									s = o.replace(r, "");
								i.push(v(s, o.trailing, o.lineNumber))
							}
							return i
						}

						function i(t, e, n) {
							var r = t.list,
								i = r[r.length - 1];
							if (!(i[1] instanceof Array && "para" == i[1][0]))
								if (e + 1 == n.length) i.push(["para"].concat(i.splice(1, i.length - 1)));
								else {
									var o = i.pop();
									i.push(["para"].concat(i.splice(1, i.length - 1)), o)
								}
						}
						var o = "[*+-]|\\d+\\.",
							s = /[*+-]/,
							a = new RegExp("^( {0,3})(" + o + ")[ \t]+"),
							c = "(?: {0,3}\\t| {4})";
						return function(o, c) {
							function u(t) {
								var e = s.exec(t[2]) ? ["bulletlist"] : ["numberlist"];
								return h.push({
									list: e,
									indent: t[1]
								}), e
							}
							var l = o.match(a);
							if (l) {
								for (var f, p, h = [], d = u(l), v = !1, y = [h[0].list];;) {
									for (var g = o.split(/(?=\n)/), m = "", b = 0; b < g.length; b++) {
										var w = "",
											j = g[b].replace(/^\n/, function(t) {
												return w = t, ""
											}),
											k = t(h.length);
										if (l = j.match(k), void 0 !== l[1]) {
											m.length && (n(f, v, this.processInline(m), w), v = !1, m = ""), l[1] = e(l[1]);
											var x = Math.floor(l[1].length / 4) + 1;
											if (x > h.length) d = u(l), f.push(d), f = d[1] = ["listitem"];
											else {
												var E = !1;
												for (p = 0; p < h.length; p++)
													if (h[p].indent == l[1]) {
														d = h[p].list, h.splice(p + 1, h.length - (p + 1)), E = !0;
														break
													}
												E || (x++, x <= h.length ? (h.splice(x, h.length - x), d = h[x - 1].list) : (d = u(l), f.push(d))), f = ["listitem"], d.push(f)
											}
											w = ""
										}
										j.length > l[0].length && (m += w + j.substr(l[0].length))
									}
									m.length && (n(f, v, this.processInline(m), w), v = !1, m = "");
									var T = r(h.length, c);
									T.length > 0 && (_(h, i, this), f.push.apply(f, this.toTree(T, [])));
									var S = c[0] && c[0].valueOf() || "";
									if (!S.match(a) && !S.match(/^ /)) break;
									o = c.shift();
									var F = this.dialect.block.horizRule(o, c);
									if (F) {
										y.push.apply(y, F);
										break
									}
									_(h, i, this), v = !0
								}
								return y
							}
						}
					}(),
					blockquote: function(t, e) {
						if (t.match(/^>/m)) {
							var n = [];
							if (">" != t[0]) {
								for (var r = t.split(/\n/), i = [], o = t.lineNumber; r.length && ">" != r[0][0];) i.push(r.shift()), o++;
								var s = v(i.join("\n"), "\n", t.lineNumber);
								n.push.apply(n, this.processBlock(s, [])), t = v(r.join("\n"), t.trailing, o)
							}
							for (; e.length && ">" == e[0][0];) {
								var a = e.shift();
								t = v(t + t.trailing + a, a.trailing, t.lineNumber)
							}
							var u = t.replace(/^> ?/gm, ""),
								l = (this.tree, this.toTree(u, ["blockquote"])),
								f = c(l);
							return f && f.references && (delete f.references, g(f) && l.splice(1, 1)), n.push(l), n
						}
					},
					referenceDefn: function(t, e) {
						var n = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
						if (t.match(n)) {
							c(this.tree) || this.tree.splice(1, 0, {});
							var r = c(this.tree);
							void 0 === r.references && (r.references = {});
							var i = this.loop_re_over_block(n, t, function(t) {
								t[2] && "<" == t[2][0] && ">" == t[2][t[2].length - 1] && (t[2] = t[2].substring(1, t[2].length - 1));
								var e = r.references[t[1].toLowerCase()] = {
									href: t[2]
								};
								void 0 !== t[4] ? e.title = t[4] : void 0 !== t[5] && (e.title = t[5])
							});
							return i.length && e.unshift(v(i, t.trailing)), []
						}
					},
					para: function(t, e) {
						return [
							["para"].concat(this.processInline(t))
						]
					}
				}
			}, d.dialects.Gruber.inline = {
				__oneElement__: function(t, e, n) {
					var r, i;
					e = e || this.dialect.inline.__patterns__;
					var o = new RegExp("([\\s\\S]*?)(" + (e.source || e) + ")");
					if (r = o.exec(t), !r) return [t.length, t];
					if (r[1]) return [r[1].length, r[1]];
					var i;
					return r[2] in this.dialect.inline && (i = this.dialect.inline[r[2]].call(this, t.substr(r.index), r, n || [])), i = i || [r[2].length, r[2]]
				},
				__call__: function(t, e) {
					function n(t) {
						"string" == typeof t && "string" == typeof i[i.length - 1] ? i[i.length - 1] += t : i.push(t)
					}
					for (var r, i = []; t.length > 0;) r = this.dialect.inline.__oneElement__.call(this, t, e, i), t = t.substr(r.shift()), _(r, n);
					return i
				},
				"]": function() {},
				"}": function() {},
				__escape__: /^\\[\\`\*_{}\[\]()#\+.!\-]/,
				"\\": function(t) {
					return this.dialect.inline.__escape__.exec(t) ? [2, t.charAt(1)] : [1, "\\"]
				},
				"![": function(t) {
					var e = t.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);
					if (e) {
						e[2] && "<" == e[2][0] && ">" == e[2][e[2].length - 1] && (e[2] = e[2].substring(1, e[2].length - 1)), e[2] = this.dialect.inline.__call__.call(this, e[2], /\\/)[0];
						var n = {
							alt: e[1],
							href: e[2] || ""
						};
						return void 0 !== e[4] && (n.title = e[4]), [e[0].length, ["img", n]]
					}
					return e = t.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/), e ? [e[0].length, ["img_ref", {
						alt: e[1],
						ref: e[2].toLowerCase(),
						original: e[0]
					}]] : [2, "!["]
				},
				"[": function t(e) {
					var n = String(e),
						r = d.DialectHelpers.inline_until_char.call(this, e.substr(1), "]");
					if (!r) return [1, "["];
					var t, i, o = 1 + r[0],
						s = r[1];
					e = e.substr(o);
					var a = e.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);
					if (a) {
						var c = a[1];
						if (o += a[0].length, c && "<" == c[0] && ">" == c[c.length - 1] && (c = c.substring(1, c.length - 1)), !a[3])
							for (var u = 1, l = 0; l < c.length; l++) switch (c[l]) {
								case "(":
									u++;
									break;
								case ")":
									0 == --u && (o -= c.length - l, c = c.substring(0, l))
							}
						return c = this.dialect.inline.__call__.call(this, c, /\\/)[0], i = {
							href: c || ""
						}, void 0 !== a[3] && (i.title = a[3]), t = ["link", i].concat(s), [o, t]
					}
					return a = e.match(/^\s*\[(.*?)\]/), a ? (o += a[0].length, i = {
						ref: (a[1] || String(s)).toLowerCase(),
						original: n.substr(0, o)
					}, t = ["link_ref", i].concat(s), [o, t]) : 1 == s.length && "string" == typeof s[0] ? (i = {
						ref: s[0].toLowerCase(),
						original: n.substr(0, o)
					}, t = ["link_ref", i, s[0]], [o, t]) : [1, "["]
				},
				"<": function(t) {
					var e;
					return null != (e = t.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/)) ? e[3] ? [e[0].length, ["link", {
						href: "mailto:" + e[3]
					}, e[3]]] : "mailto" == e[2] ? [e[0].length, ["link", {
						href: e[1]
					}, e[1].substr("mailto:".length)]] : [e[0].length, ["link", {
						href: e[1]
					}, e[1]]] : [1, "<"]
				},
				"`": function(t) {
					var e = t.match(/(`+)(([\s\S]*?)\1)/);
					return e && e[2] ? [e[1].length + e[2].length, ["inlinecode", e[3]]] : [1, "`"]
				},
				"  \n": function(t) {
					return [3, ["linebreak"]]
				}
			}, d.dialects.Gruber.inline["**"] = o("strong", "**"), d.dialects.Gruber.inline.__ = o("strong", "__"), d.dialects.Gruber.inline["*"] = o("em", "*"), d.dialects.Gruber.inline._ = o("em", "_"), d.buildBlockOrder = function(t) {
				var e = [];
				for (var n in t) "__order__" != n && "__call__" != n && e.push(n);
				t.__order__ = e
			}, d.buildInlinePatterns = function(t) {
				var e = [];
				for (var n in t)
					if (!n.match(/^__.*__$/)) {
						var r = n.replace(/([\\.*+?|()\[\]{}])/g, "\\$1").replace(/\n/, "\\n");
						e.push(1 == n.length ? r : "(?:" + r + ")")
					}
				e = e.join("|"), t.__patterns__ = e;
				var i = t.__call__;
				t.__call__ = function(t, n) {
					return void 0 != n ? i.call(this, t, n) : i.call(this, t, e)
				}
			}, d.DialectHelpers = {}, d.DialectHelpers.inline_until_char = function(t, e) {
				for (var n = 0, r = [];;) {
					if (t.charAt(n) == e) return n++, [n, r];
					if (n >= t.length) return null;
					var i = this.dialect.inline.__oneElement__.call(this, t.substr(n));
					n += i[0], r.push.apply(r, i.slice(1))
				}
			}, d.subclassDialect = function(t) {
				function e() {}

				function n() {}
				return e.prototype = t.block, n.prototype = t.inline, {
					block: new e,
					inline: new n
				}
			}, d.buildBlockOrder(d.dialects.Gruber.block), d.buildInlinePatterns(d.dialects.Gruber.inline), d.dialects.Maruku = d.subclassDialect(d.dialects.Gruber), d.dialects.Maruku.processMetaHash = function(t) {
				for (var e = s(t), n = {}, r = 0; r < e.length; ++r)
					if (/^#/.test(e[r])) n.id = e[r].substring(1);
					else if (/^\./.test(e[r])) n.class ? n.class = n.class + e[r].replace(/./, " ") : n.class = e[r].substring(1);
				else if (/\=/.test(e[r])) {
					var i = e[r].split(/\=/);
					n[i[0]] = i[1]
				}
				return n
			}, d.dialects.Maruku.block.document_meta = function(t, e) {
				if (!(t.lineNumber > 1) && t.match(/^(?:\w+:.*\n)*\w+:.*$/)) {
					c(this.tree) || this.tree.splice(1, 0, {});
					var n = t.split(/\n/);
					for (p in n) {
						var r = n[p].match(/(\w+):\s*(.*)$/),
							i = r[1].toLowerCase(),
							o = r[2];
						this.tree[1][i] = o
					}
					return []
				}
			}, d.dialects.Maruku.block.block_meta = function(t, e) {
				var n = t.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);
				if (n) {
					var r, i = this.dialect.processMetaHash(n[2]);
					if ("" === n[1]) {
						var o = this.tree[this.tree.length - 1];
						if (r = c(o), "string" == typeof o) return;
						r || (r = {}, o.splice(1, 0, r));
						for (a in i) r[a] = i[a];
						return []
					}
					var s = t.replace(/\n.*$/, ""),
						u = this.processBlock(s, []);
					r = c(u[0]), r || (r = {}, u[0].splice(1, 0, r));
					for (a in i) r[a] = i[a];
					return u
				}
			}, d.dialects.Maruku.block.definition_list = function(t, e) {
				var n, r, i = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
					o = ["dl"];
				if (r = t.match(i)) {
					for (var s = [t]; e.length && i.exec(e[0]);) s.push(e.shift());
					for (var a = 0; a < s.length; ++a) {
						var r = s[a].match(i),
							c = r[1].replace(/\n$/, "").split(/\n/),
							u = r[2].split(/\n:\s+/);
						for (n = 0; n < c.length; ++n) o.push(["dt", c[n]]);
						for (n = 0; n < u.length; ++n) o.push(["dd"].concat(this.processInline(u[n].replace(/(\n)\s+/, "$1"))))
					}
					return [o]
				}
			}, d.dialects.Maruku.block.table = function t(e, n) {
				var r, i, o = function(t, e) {
						e = e || "\\s", e.match(/^[\\|\[\]{}?*.+^$]$/) && (e = "\\" + e);
						for (var n, r = [], i = new RegExp("^((?:\\\\.|[^\\\\" + e + "])*)" + e + "(.*)"); n = t.match(i);) r.push(n[1]), t = n[2];
						return r.push(t), r
					},
					s = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
					a = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/;
				if (i = e.match(s)) i[3] = i[3].replace(/^\s*\|/gm, "");
				else if (!(i = e.match(a))) return;
				var t = ["table", ["thead", ["tr"]],
					["tbody"]
				];
				i[2] = i[2].replace(/\|\s*$/, "").split("|");
				var c = [];
				for (_(i[2], function(t) {
						t.match(/^\s*-+:\s*$/) ? c.push({
							align: "right"
						}) : t.match(/^\s*:-+\s*$/) ? c.push({
							align: "left"
						}) : t.match(/^\s*:-+:\s*$/) ? c.push({
							align: "center"
						}) : c.push({})
					}), i[1] = o(i[1].replace(/\|\s*$/, ""), "|"), r = 0; r < i[1].length; r++) t[1][1].push(["th", c[r] || {}].concat(this.processInline(i[1][r].trim())));
				return _(i[3].replace(/\|\s*$/gm, "").split("\n"), function(e) {
					var n = ["tr"];
					for (e = o(e, "|"), r = 0; r < e.length; r++) n.push(["td", c[r] || {}].concat(this.processInline(e[r].trim())));
					t[2].push(n)
				}, this), [t]
			}, d.dialects.Maruku.inline["{:"] = function(t, e, n) {
				if (!n.length) return [2, "{:"];
				var r = n[n.length - 1];
				if ("string" == typeof r) return [2, "{:"];
				var i = t.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);
				if (!i) return [2, "{:"];
				var o = this.dialect.processMetaHash(i[1]),
					s = c(r);
				s || (s = {}, r.splice(1, 0, s));
				for (var a in o) s[a] = o[a];
				return [i[0].length, ""]
			}, d.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/, d.buildBlockOrder(d.dialects.Maruku.block), d.buildInlinePatterns(d.dialects.Maruku.inline);
			var _, y = Array.isArray || function(t) {
				return "[object Array]" == Object.prototype.toString.call(t)
			};
			_ = Array.prototype.forEach ? function(t, e, n) {
				return t.forEach(e, n)
			} : function(t, e, n) {
				for (var r = 0; r < t.length; r++) e.call(n || t, t[r], r, t)
			};
			var g = function(t) {
				for (var e in t)
					if (hasOwnProperty.call(t, e)) return !1;
				return !0
			};
			t.renderJsonML = function(t, e) {
				e = e || {}, e.root = e.root || !1;
				var n = [];
				if (e.root) n.push(l(t));
				else
					for (t.shift(), !t.length || "object" != typeof t[0] || t[0] instanceof Array || t.shift(); t.length;) n.push(l(t.shift()));
				return n.join("\n\n")
			}
		}(function() {
			return e
		}())
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n) {
			"function" == typeof t && (n = !!e, e = t, t = window);
			var r = i("ex", t),
				o = function(t) {
					n && t.preventDefault();
					var i = t.deltaX || 0,
						o = t.deltaY || 0,
						s = t.deltaZ || 0,
						a = t.deltaMode,
						c = 1;
					switch (a) {
						case 1:
							c = r;
							break;
						case 2:
							c = window.innerHeight
					}
					if (i *= c, o *= c, s *= c, i || o || s) return e(i, o, s, t)
				};
			return t.addEventListener("wheel", o), o
		}
		var i = n(90);
		t.exports = r
	}, function(t, e) {
		t.exports = function(t, e) {
			e || (e = [0, ""]), t = String(t);
			var n = parseFloat(t, 10);
			return e[0] = n, e[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "", e
		}
	}, function(t, e) {
		t.exports = '<a href="#" id="pause-resume">Pause ||</a>\n<a href="#" id="skip-animation">Skip Animation --></a>\n<span style="float:right">\n<a href="http://segal-gould.com">Segal-Gould.com</a>\n<a href="https://github.com/segalgouldn">GitHub</a>\n<a href="https://github.com/STRML/strml.net/blob/master/app.js">View Source</a>\n</span>\n'
	}, function(t, e) {
		t.exports = "Noah Segal-Gould was born and raised in Southern Connecticut. \nNoah has a passion for learning and studies Computer Science at Bard College. \n\nHe graduated from the Sound School in New Haven, Connecticut in 2014 and started at Bard that same year. \nHis interests include digital humanities, philosophy, linguistics, programming, and general pedantry. \n\nEmail him at segalgouldn@gmail.com.";
	}, function(t, e) {
		t.exports = "I owe you <!--nothing -->but I need you <!--to talk to me -->so I can feel safe <!--but I can't live -->with you.\nProtect me from <!--changing -->myself, \nbecause I can't be trusted <!--on my own-->\nWhy can't you <!--tell me you will -->see me? I need <!--to hear -->you.\nMy words <!--can't be -->wasted on you, <!--they remind me that -->I am alone.\nSo, <!--until you're ready, -->I will wait."
	}, function(t, e) {
		t.exports = "/* I'm cheating a bit */\n\nhtml, body {\n  margin-top: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\npre {\n  overflow: auto;\n  max-height: 90%;\n  width: 100%;\n  border-radius: 1px; /* Prevents bad clipping in Chrome */\n}\n\n#content {\n  position: absolute;\n  top: 0; right: 0; left: 0; bottom: 20px;\n}\n\n#header {\n  position: absolute;\n  bottom: 0;\n  height: 20px;\n  left: 0;\n  right: 0;\n  padding: 0 10px;\n}\n\na:after {\n  content: '';\n  padding-right: 5px;\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-color: inherit;\n}\n\na:last-of-type:after {\n  border: none;\n}"
	}, function(t, e) {
		t.exports = "/**\n * Hello there! I'm Noah Segal-Gould and I like to play with code.\n * I adapted this site from a similar project called STRML.net,\n * but the code poem represented through this site is my own.\n * \n * This site is built as you watch it.\n * It's self-referential live coding!\n */\n\n/**\n * First, we make a quick change:\n * Added elements will take a few seconds to appear.\n */\n\n* {\n  -webkit-transition: all 1s;\n}\n\n/**\n * Let's work on a more aesthetically satifying color scheme.\n *\n * hmmm...\n */\n\nhtml {\n  background: rgb(108, 108, 108);\n}\n\n/***\n * Uh oh...\n */\n\npre, a {\n  color: white;\n}\n\n/**\n * Not bad!\n *\n * Let's make some room to get stuff done.\n */\n\npre:not(:empty) {\n  overflow: auto;\n  background: rgb(41, 41, 41);\n  border: 1px solid #ccc;\n  max-height: 44.6%;\n  width: 49%;\n  font-size: 14px;\n  font-family: monospace;\n  padding: 10px 10px 20px;\n  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);\n  white-space: pre-wrap;\n  outline: 0;\n}\n\n/**\n * I think we have most of what we need!\n * Okay, here we go...\n */\n\n#style-text {\n  -webkit-transform: translateX(95%);\n  position: absolute;\n}\n\n/**\n * I can't read anything!\n * Let's see what we can do about that...\n */\n\n.comment       { color: #857F6B; font-style: italic; }\n.selector      { color: #E69F0F; }\n.selector .key { color: #64D5EA; }\n.key           { color: #64D5EA; }\n.value         { color: #BE84F2; }\n.value.px      { color: #F92772; }\n\n/**\n * \"...some fresh, clear, well seasoned perspective.\"\n */\n\nbody {\n  -webkit-perspective: 1000px;\n}\n\n#style-text {\n  -webkit-transform: translateX(98.5%) rotateY(-10deg);\n  -webkit-transform-origin: right;\n  max-height: 94.5%;\n}\n\n/**\n * And now, for the poem...\n * Sorry it took so long!\n */\n\npre:not(#style-text) {\n  -webkit-transform: rotateY(10deg);\n  -webkit-transform-origin: left;\n}\n"
	}, function(t, e) {
		t.exports = "\n/**\n * Can't we render the html to look nicer?\n * We can try!\n */\n\n#poem-text.flipped {\n  -webkit-transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg);\n}\n\n#poem-text .poem-rendered {\n  -webkit-transform: rotateY(190deg) rotateZ(180deg);\n  margin-top: 800px; \n}"
	}, function(t, e) {
		t.exports = '\n/**\n * I\'m sure we can make the text look better than that...\n */\n\n#poem-text {\n  color: #ddd;\n}\n\n.poem-rendered {\n  font-family: "Helvetica Neue", Helvetica, sans-serif;\n}\n\n.poem-rendered h3 {\n  display: inline-block;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 5px;\n}\n\n.poem-rendered li {\n  margin: 5px 0;\n}\n\n.poem-rendered h3, .poem-rendered p {\n  margin: 0px;\n}\n\n/**\n * Curious for more information?\n */\n\n#info-text {\n  font-size: 12px;\n  color: #ada;\n}\n\n/**\n * Looking good!\n */\n'
	}, function(t, e) {
		t.exports = "\n/**\n * What else could there be to do?\n */\n\n pre:hover{\n   box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);\n }\n\n #skip-animation, #pause-resume {\n   display: none;\n }\n\n/**\n * Okay, time for the credits:\n *\n * Jake Albaugh: check out more of his stuff at\n * http://codepen.io/jakealbaugh/\n * Samuel Reed (STRML): http://STRML.net\n * I borrowed almost everything from these two,\n * so go check out their stuff!\n */\n\n/**\n * By the way, everything in this box is editable.\n * Don't worry about breaking anything, it does me no harm!\n */\n\n\n"
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			var n = s(getComputedStyle(t).getPropertyValue(e));
			return n[0] * o(n[1], t)
		}

		function i(t, e) {
			var n = document.createElement("div");
			n.style["font-size"] = "128" + t, e.appendChild(n);
			var i = r(n, "font-size") / 128;
			return e.removeChild(n), i
		}

		function o(t, e) {
			switch (e = e || document.body, t = (t || "px").trim().toLowerCase(), e !== window && e !== document || (e = document.body), t) {
				case "%":
					return e.clientHeight / 100;
				case "ch":
				case "ex":
					return i(t, e);
				case "em":
					return r(e, "font-size");
				case "rem":
					return r(document.body, "font-size");
				case "vw":
					return window.innerWidth / 100;
				case "vh":
					return window.innerHeight / 100;
				case "vmin":
					return Math.min(window.innerWidth, window.innerHeight) / 100;
				case "vmax":
					return Math.max(window.innerWidth, window.innerHeight) / 100;
				case "in":
					return a;
				case "cm":
					return a / 2.54;
				case "mm":
					return a / 25.4;
				case "pt":
					return a / 72;
				case "pc":
					return a / 6
			}
			return 1
		}
		var s = n(81);
		t.exports = o;
		var a = 96
	}, function(t, e) {
		"function" == typeof Object.create ? t.exports = function(t, e) {
			t.super_ = e, t.prototype = Object.create(e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			})
		} : t.exports = function(t, e) {
			t.super_ = e;
			var n = function() {};
			n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
		}
	}, function(t, e) {
		t.exports = function(t) {
			return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
		}
	}, function(t, e, n) {
		(function(t, r) {
			function i(t, n) {
				var r = {
					seen: [],
					stylize: s
				};
				return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), v(n) ? r.showHidden = n : n && e._extend(r, n), w(r.showHidden) && (r.showHidden = !1), w(r.depth) && (r.depth = 2), w(r.colors) && (r.colors = !1), w(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = o), c(r, t, r.depth)
			}

			function o(t, e) {
				var n = i.styles[e];
				return n ? "[" + i.colors[n][0] + "m" + t + "[" + i.colors[n][1] + "m" : t
			}

			function s(t, e) {
				return t
			}

			function a(t) {
				var e = {};
				return t.forEach(function(t, n) {
					e[t] = !0
				}), e
			}

			function c(t, n, r) {
				if (t.customInspect && n && T(n.inspect) && n.inspect !== e.inspect && (!n.constructor || n.constructor.prototype !== n)) {
					var i = n.inspect(r, t);
					return m(i) || (i = c(t, i, r)), i
				}
				var o = u(t, n);
				if (o) return o;
				var s = Object.keys(n),
					v = a(s);
				if (t.showHidden && (s = Object.getOwnPropertyNames(n)), E(n) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return l(n);
				if (0 === s.length) {
					if (T(n)) {
						var _ = n.name ? ": " + n.name : "";
						return t.stylize("[Function" + _ + "]", "special")
					}
					if (j(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");
					if (x(n)) return t.stylize(Date.prototype.toString.call(n), "date");
					if (E(n)) return l(n)
				}
				var y = "",
					g = !1,
					b = ["{", "}"];
				if (d(n) && (g = !0, b = ["[", "]"]), T(n)) {
					var w = n.name ? ": " + n.name : "";
					y = " [Function" + w + "]"
				}
				if (j(n) && (y = " " + RegExp.prototype.toString.call(n)), x(n) && (y = " " + Date.prototype.toUTCString.call(n)), E(n) && (y = " " + l(n)), 0 === s.length && (!g || 0 == n.length)) return b[0] + y + b[1];
				if (r < 0) return j(n) ? t.stylize(RegExp.prototype.toString.call(n), "regexp") : t.stylize("[Object]", "special");
				t.seen.push(n);
				var k;
				return k = g ? f(t, n, r, v, s) : s.map(function(e) {
					return p(t, n, r, v, e, g)
				}), t.seen.pop(), h(k, y, b)
			}

			function u(t, e) {
				if (w(e)) return t.stylize("undefined", "undefined");
				if (m(e)) {
					var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
					return t.stylize(n, "string")
				}
				return g(e) ? t.stylize("" + e, "number") : v(e) ? t.stylize("" + e, "boolean") : _(e) ? t.stylize("null", "null") : void 0
			}

			function l(t) {
				return "[" + Error.prototype.toString.call(t) + "]"
			}

			function f(t, e, n, r, i) {
				for (var o = [], s = 0, a = e.length; s < a; ++s) O(e, String(s)) ? o.push(p(t, e, n, r, String(s), !0)) : o.push("");
				return i.forEach(function(i) {
					i.match(/^\d+$/) || o.push(p(t, e, n, r, i, !0))
				}), o
			}

			function p(t, e, n, r, i, o) {
				var s, a, u;
				if (u = Object.getOwnPropertyDescriptor(e, i) || {
						value: e[i]
					}, u.get ? a = u.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : u.set && (a = t.stylize("[Setter]", "special")), O(r, i) || (s = "[" + i + "]"), a || (t.seen.indexOf(u.value) < 0 ? (a = _(n) ? c(t, u.value, null) : c(t, u.value, n - 1), a.indexOf("\n") > -1 && (a = o ? a.split("\n").map(function(t) {
						return "  " + t
					}).join("\n").substr(2) : "\n" + a.split("\n").map(function(t) {
						return "   " + t
					}).join("\n"))) : a = t.stylize("[Circular]", "special")), w(s)) {
					if (o && i.match(/^\d+$/)) return a;
					s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"))
				}
				return s + ": " + a
			}

			function h(t, e, n) {
				var r = 0,
					i = t.reduce(function(t, e) {
						return r++, e.indexOf("\n") >= 0 && r++, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
					}, 0);
				return i > 60 ? n[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + n[1] : n[0] + e + " " + t.join(", ") + " " + n[1]
			}

			function d(t) {
				return Array.isArray(t)
			}

			function v(t) {
				return "boolean" == typeof t
			}

			function _(t) {
				return null === t
			}

			function y(t) {
				return null == t
			}

			function g(t) {
				return "number" == typeof t
			}

			function m(t) {
				return "string" == typeof t
			}

			function b(t) {
				return "symbol" == typeof t
			}

			function w(t) {
				return void 0 === t
			}

			function j(t) {
				return k(t) && "[object RegExp]" === F(t)
			}

			function k(t) {
				return "object" == typeof t && null !== t
			}

			function x(t) {
				return k(t) && "[object Date]" === F(t)
			}

			function E(t) {
				return k(t) && ("[object Error]" === F(t) || t instanceof Error)
			}

			function T(t) {
				return "function" == typeof t
			}

			function S(t) {
				return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || "undefined" == typeof t
			}

			function F(t) {
				return Object.prototype.toString.call(t)
			}

			function C(t) {
				return t < 10 ? "0" + t.toString(10) : t.toString(10)
			}

			function P() {
				var t = new Date,
					e = [C(t.getHours()), C(t.getMinutes()), C(t.getSeconds())].join(":");
				return [t.getDate(), I[t.getMonth()], e].join(" ")
			}

			function O(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}
			var A = /%[sdj%]/g;
			e.format = function(t) {
				if (!m(t)) {
					for (var e = [], n = 0; n < arguments.length; n++) e.push(i(arguments[n]));
					return e.join(" ")
				}
				for (var n = 1, r = arguments, o = r.length, s = String(t).replace(A, function(t) {
						if ("%%" === t) return "%";
						if (n >= o) return t;
						switch (t) {
							case "%s":
								return String(r[n++]);
							case "%d":
								return Number(r[n++]);
							case "%j":
								try {
									return JSON.stringify(r[n++])
								} catch (t) {
									return "[Circular]"
								}
							default:
								return t
						}
					}), a = r[n]; n < o; a = r[++n]) s += _(a) || !k(a) ? " " + a : " " + i(a);
				return s
			}, e.deprecate = function(n, i) {
				function o() {
					if (!s) {
						if (r.throwDeprecation) throw new Error(i);
						r.traceDeprecation ? console.trace(i) : console.error(i), s = !0
					}
					return n.apply(this, arguments)
				}
				if (w(t.process)) return function() {
					return e.deprecate(n, i).apply(this, arguments)
				};
				if (r.noDeprecation === !0) return n;
				var s = !1;
				return o
			};
			var R, L = {};
			e.debuglog = function(t) {
				if (w(R) && (R = r.env.NODE_DEBUG || ""), t = t.toUpperCase(), !L[t])
					if (new RegExp("\\b" + t + "\\b", "i").test(R)) {
						var n = r.pid;
						L[t] = function() {
							var r = e.format.apply(e, arguments);
							console.error("%s %d: %s", t, n, r)
						}
					} else L[t] = function() {};
				return L[t]
			}, e.inspect = i, i.colors = {
				bold: [1, 22],
				italic: [3, 23],
				underline: [4, 24],
				inverse: [7, 27],
				white: [37, 39],
				grey: [90, 39],
				black: [30, 39],
				blue: [34, 39],
				cyan: [36, 39],
				green: [32, 39],
				magenta: [35, 39],
				red: [31, 39],
				yellow: [33, 39]
			}, i.styles = {
				special: "cyan",
				number: "yellow",
				boolean: "yellow",
				undefined: "grey",
				null: "bold",
				string: "green",
				date: "magenta",
				regexp: "red"
			}, e.isArray = d, e.isBoolean = v, e.isNull = _, e.isNullOrUndefined = y, e.isNumber = g, e.isString = m, e.isSymbol = b, e.isUndefined = w, e.isRegExp = j, e.isObject = k, e.isDate = x, e.isError = E, e.isFunction = T, e.isPrimitive = S, e.isBuffer = n(92);
			var I = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			e.log = function() {
				console.log("%s - %s", P(), e.format.apply(e, arguments))
			}, e.inherits = n(91), e._extend = function(t, e) {
				if (!e || !k(e)) return t;
				for (var n = Object.keys(e), r = n.length; r--;) t[n[r]] = e[n[r]];
				return t
			}
		}).call(e, function() {
			return this
		}(), n(14))
	}])
});
