/*!
 *
 *  # Jo | Helper for Embedding Bibi-Frames in Webpage.          (℠)
 *
 *  * © Satoru Matsushima - https://bibi.epub.link or https://github.com/satorumurmur/bibi
 *  * Open source under the MIT License - https://github.com/satorumurmur/bibi/blob/master/LICENSE
 *
 */
! function(e) {
	var t = {};

	function n(i) {
		if (t[i]) return t[i].exports;
		var r = t[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, i) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: i
		})
	}, n.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var i = Object.create(null);
		if (n.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var r in e) n.d(i, r, function(t) {
				return e[t]
			}.bind(null, r));
		return i
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 13)
}([, , , function(e, t, n) {
	"use strict";
	var i, r = function() {
			return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i
		},
		o = function() {
			var e = {};
			return function(t) {
				if (void 0 === e[t]) {
					var n = document.querySelector(t);
					if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
						n = n.contentDocument.head
					} catch (e) {
						n = null
					}
					e[t] = n
				}
				return e[t]
			}
		}(),
		a = [];

	function u(e) {
		for (var t = -1, n = 0; n < a.length; n++)
			if (a[n].identifier === e) {
				t = n;
				break
			}
		return t
	}

	function c(e, t) {
		for (var n = {}, i = [], r = 0; r < e.length; r++) {
			var o = e[r],
				c = t.base ? o[0] + t.base : o[0],
				s = n[c] || 0,
				d = "".concat(c, " ").concat(s);
			n[c] = s + 1;
			var l = u(d),
				f = {
					css: o[1],
					media: o[2],
					sourceMap: o[3]
				}; - 1 !== l ? (a[l].references++, a[l].updater(f)) : a.push({
				identifier: d,
				updater: v(f, t),
				references: 1
			}), i.push(d)
		}
		return i
	}

	function s(e) {
		var t = document.createElement("style"),
			i = e.attributes || {};
		if (void 0 === i.nonce) {
			var r = n.nc;
			r && (i.nonce = r)
		}
		if (Object.keys(i).forEach((function(e) {
				t.setAttribute(e, i[e])
			})), "function" == typeof e.insert) e.insert(t);
		else {
			var a = o(e.insert || "head");
			if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
			a.appendChild(t)
		}
		return t
	}
	var d, l = (d = [], function(e, t) {
		return d[e] = t, d.filter(Boolean).join("\n")
	});

	function f(e, t, n, i) {
		var r = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
		if (e.styleSheet) e.styleSheet.cssText = l(t, r);
		else {
			var o = document.createTextNode(r),
				a = e.childNodes;
			a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
		}
	}

	function b(e, t, n) {
		var i = n.css,
			r = n.media,
			o = n.sourceMap;
		if (r ? e.setAttribute("media", r) : e.removeAttribute("media"), o && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleSheet) e.styleSheet.cssText = i;
		else {
			for (; e.firstChild;) e.removeChild(e.firstChild);
			e.appendChild(document.createTextNode(i))
		}
	}
	var p = null,
		m = 0;

	function v(e, t) {
		var n, i, r;
		if (t.singleton) {
			var o = m++;
			n = p || (p = s(t)), i = f.bind(null, n, o, !1), r = f.bind(null, n, o, !0)
		} else n = s(t), i = b.bind(null, n, t), r = function() {
			! function(e) {
				if (null === e.parentNode) return !1;
				e.parentNode.removeChild(e)
			}(n)
		};
		return i(e),
			function(t) {
				if (t) {
					if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
					i(e = t)
				} else r()
			}
	}
	e.exports = function(e, t) {
		(t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = r());
		var n = c(e = e || [], t);
		return function(e) {
			if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
				for (var i = 0; i < n.length; i++) {
					var r = u(n[i]);
					a[r].references--
				}
				for (var o = c(e, t), s = 0; s < n.length; s++) {
					var d = u(n[s]);
					0 === a[d].references && (a[d].updater(), a.splice(d, 1))
				}
				n = o
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	e.exports = function(e) {
		var t = [];
		return t.toString = function() {
			return this.map((function(t) {
				var n = function(e, t) {
					var n = e[1] || "",
						i = e[3];
					if (!i) return n;
					if (t && "function" == typeof btoa) {
						var r = (a = i, u = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u), "/*# ".concat(c, " */")),
							o = i.sources.map((function(e) {
								return "/*# sourceURL=".concat(i.sourceRoot || "").concat(e, " */")
							}));
						return [n].concat(o).concat([r]).join("\n")
					}
					var a, u, c;
					return [n].join("\n")
				}(t, e);
				return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
			})).join("")
		}, t.i = function(e, n, i) {
			"string" == typeof e && (e = [
				[null, e, ""]
			]);
			var r = {};
			if (i)
				for (var o = 0; o < this.length; o++) {
					var a = this[o][0];
					null != a && (r[a] = !0)
				}
			for (var u = 0; u < e.length; u++) {
				var c = [].concat(e[u]);
				i && r[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), t.push(c))
			}
		}, t
	}
}, , , , , , , , , function(e, t, n) {
	function i(e) {
		return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}! function() {
		"use strict";
		if (!window["bibi:jo"]) {
			var e = window["bibi:jo"] = {
					version: "1.2.0",
					CSS: n(14),
					Status: "",
					Bibis: [],
					TrustworthyOrigins: [location.origin],
					Loaded: 0
				},
				t = /^bibi:[a-z][a-z:_\-]*$/;
			e.Bibi = function() {
				return e.callBibi.apply(e, arguments)
			}, e.callBibi = function(n) {
				var r, o, a, u = null,
					c = null,
					s = null,
					d = [];
				try {
					if (n instanceof HTMLElement) {
						if (/^iframe$/i.test(n.tagName)) {
							var l = n.getAttribute("data-bibi-href");
							if (!l) return null;
							u = n.parentNode.insertBefore(e.create("a", {
								href: l
							}), n), c = n.parentNode.removeChild(n)
						} else if (/^a$/i.test(n.tagName)) {
							if (!n.href) return null;
							u = n, c = e.create("iframe"), (a = u.getAttribute("data-bibi-class")) && a.trim().replace(/\s+/, " ").split(" ").forEach((function(e) {
								return !!e && c.classList.add(e)
							})), (o = u.getAttribute("data-bibi-id")) && c.setAttribute("id", o), (r = u.getAttribute("data-bibi-style")) && c.setAttribute("style", r)
						}
						var f = (s = n).getAttribute("data-bibi-receive");
						f && (f = f.replace(/\s+/, "")) && (d = f.split(","))
					} else {
						if (n && "object" == i(n)) {
							if (!n["bibi-href"]) return null;
							u = e.create("a", {
								href: n["bibi-href"]
							}), c = e.create("iframe"), s = c
						}
						n["bibi-receive"] instanceof Array && (d = n["bibi-receive"])
					}
				} catch (e) {
					return null
				}
				if (!u || !c || !s) return null;
				var b, p = u.Bibi = c.Bibi = {
					Jo: e,
					Anchor: u,
					Frame: c,
					Receiver: s,
					Index: e.Bibis.length,
					Status: ""
				};
				return p.listen = function(e, n) {
					return !!t.test(e) && s.addEventListener(e, (function(e) {
						return n.call(s, e.detail)
					}), !1)
				}, p.dispatch = function(e) {
					var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
					return !!t.test(e) && s.dispatchEvent(new CustomEvent(e, {
						detail: n
					}))
				}, p.receive = function(e) {
					return !!t.test(e) && c.contentWindow.E.add(e, (function(t) {
						return p.dispatch(e, t)
					}))
				}, p.post = function(e, n) {
					return !!t.test(e) && c.contentWindow.postMessage('{ "'.concat(e, '" : "').concat(n, '" }'), u.origin)
				}, p.listen("bibi:initialized", (function(e) {
					return p.Status = p.Initialized = e
				})), d.length && p.listen("bibi:initialized", (function() {
					return d.forEach((function(e) {
						return p.receive("" + e.trim())
					}))
				})), p.listen("bibi:readied", (function(e) {
					return p.Status = p.Readied = e
				})), p.listen("bibi:prepared", (function(e) {
					return p.Status = p.Prepared = e
				})), p.listen("bibi:opened", (function(e) {
					return p.Status = p.Opened = e
				})), p.listen("bibi:opened", (function() {
					p.move = function(e) {
						return p.post("bibi:commands:move", e)
					}, p.focus = function(e) {
						return p.post("bibi:commands:focus", e)
					}, p.changeView = function(e) {
						return p.post("bibi:commands:change-view", e)
					}, p.togglePanel = function() {
						return p.post("bibi:commands:toggle-panel", "")
					}
				})), u.style.display = "none", e.TrustworthyOrigins.includes(u.origin) || e.TrustworthyOrigins.push(u.origin), u.href += (/#/.test(u.href) ? "&" : "#") + ((b = new e.Fragments).add("parent-bibi-index", p.Index), ["autostart-embedded", "autostart", "p", "fix-reader-view-mode", "fix-view", "view-unchangeable", "full-breadth-layout-in-scroll", "iipp", "nav", "reader-view-mode", "rvm", "view", "start-embedded-in-new-window", "start-in-new-window"].forEach((function(e) {
					var t = "" + (n.ownerDocument ? n.getAttribute("data-bibi-" + e) || "" : n["bibi-" + e]);
					t && function() {
						switch (e) {
							case "p":
							case "iipp":
								return /^(\d*\.)?\d+$/;
							case "nav":
								return /^[1-9][0-9]*$/;
							case "rvm":
							case "view":
								e = "reader-view-mode";
							case "reader-view-mode":
								return /^(paged|horizontal|vertical)$/;
							case "autostart":
							case "start-in-new-window":
								e = e.replace("start", "start-embedded");
								break;
							case "view-unchangeable":
								e = "fix-reader-view-mode"
						}
						return /^(true|false|1|0|yes|no|mobile|desktop)$/
					}().test(t) && b.add(e, t)
				})), b.make()), c.classList.add("bibi-frame"), c.setAttribute("frameborder", "0"), c.setAttribute("scrolling", "auto"), c.setAttribute("allowfullscreen", "true"), c.src = u.href, e.Bibis.push(p), p
			}, e.embed = function() {
				var t = [],
					n = [];
				Array.prototype.forEach.call(document.body.querySelectorAll("*[data-bibi]"), (function(n) {
					if (!n.getAttribute("data-bibi-processed")) {
						n.setAttribute("data-bibi-processed", "true");
						var i = new e.Bibi(n);
						i && t.push(i)
					}
				})), t.length && t.forEach((function(i) {
					var r = i.Anchor,
						o = i.Frame;
					i.listen("bibi:initialized", (function() {
						return !(n.push(i) < t.length) && e.dispatch("bibi:jo:embedded", n)
					})), r.parentNode.insertBefore(o, r)
				}))
			}, document.addEventListener("DOMContentLoaded", e.embed), window.addEventListener("load", e.embed), window.addEventListener("message", (function(t) {
				if (!t || !e.judge(t.data, t.origin)) return !1;
				try {
					if (Data = JSON.parse(Data), "object" != ("undefined" == typeof Data ? "undefined" : i(Data)) || !Data) return !1;
					for (var n in Data) e.dispatch(n, Data[n]);
					return !0
				} catch (e) {}
				return !1
			}), !1), e.create = function(e, t) {
				var n = document.createElement(e);
				for (var i in t) n[i] = t[i];
				return n
			}, e.encode = function(e) {
				return encodeURIComponent(e).replace("(", "_BibiKakkoOpen_").replace(")", "_BibiKakkoClose_")
			}, e.Fragments = function() {
				return this.FragmentKeys = [], this.FragmentKeysAndValues = {}, this.add = function(e, t) {
					this.FragmentKeys.includes(e) || this.FragmentKeys.push(e), this.FragmentKeysAndValues[e] = t
				}, this.make = function() {
					if (!this.FragmentKeys.length) return "";
					for (var t = [], n = this.FragmentKeys.length, i = 0; i < n; i++) t.push("".concat(this.FragmentKeys[i], "=").concat(e.encode(this.FragmentKeysAndValues[this.FragmentKeys[i]])));
					return "jo(".concat(t.join("&"), ")")
				}, this
			}, e.judge = function(t, n) {
				return t && "string" == typeof t && n && "string" == typeof n && e.TrustworthyOrigins.includes(n)
			}, e.listen = function(e, n) {
				return !!t.test(e) && document.addEventListener(e, (function(e) {
					return n.call(document, e.detail)
				}))
			}, e.dispatch = function(n) {
				var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
				return !!t.test(n) && document.dispatchEvent(new CustomEvent(n, {
					detail: i
				}))
			}, Array.prototype.includes || (Array.prototype.includes = function(e) {
				for (var t = this.length, n = 0; n < t; n++)
					if (this[n] == e) return !0;
				return !1
			}), (!window.CustomEvent || "function" != typeof window.CustomEvent && -1 === window.CustomEvent.toString().indexOf("CustomEventConstructor")) && (window.CustomEvent = function(e, t) {
				t = t || {
					bubbles: !1,
					cancelable: !1,
					detail: void 0
				};
				var n = document.createEvent("CustomEvent");
				return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
			}, window.CustomEvent.prototype = window.Event.prototype)
		}
	}()
}, function(e, t, n) {
	var i = n(3),
		r = n(15);
	"string" == typeof(r = r.__esModule ? r.default : r) && (r = [
		[e.i, r, ""]
	]);
	var o = {
		insert: "head",
		singleton: !1
	};
	i(r, o);
	e.exports = r.locals || {}
}, function(e, t, n) {
	(t = n(4)(!1)).push([e.i, "/*! Bibi Frame Style */iframe.bibi-frame{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;margin:0;padding:0;border:1px solid #dedede;border-radius:1px;max-width:100%;max-height:100%;width:100%;height:100%;vertical-align:top;line-height:1;text-decoration:none;background:transparent}", ""]), e.exports = t
}]);