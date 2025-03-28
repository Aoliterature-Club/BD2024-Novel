/*!
 *
 *  # Bibi Extension: Zine                                       (℠)
 *
 *  * © Satoru Matsushima - https://bibi.epub.link or https://github.com/satorumurmur/bibi
 *  * Open source under the MIT License - https://github.com/satorumurmur/bibi/blob/master/LICENSE
 *
 *  * Depends on:
 *      - JS-YAML : © Vitaly Puzrin - https://nodeca.github.io/js-yaml / Licensed under the MIT License - https://github.com/nodeca/js-yaml/blob/master/LICENSE
 *
 */
! function(e) {
	var t = {};

	function n(r) {
		if (t[r]) return t[r].exports;
		var i = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, r) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: r
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
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var i in e) n.d(r, i, function(t) {
				return e[t]
			}.bind(null, i));
		return r
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 28)
}({
	12: function(e, t, n) {
		var r, i, o, a;

		function s(e) {
			return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		a = function() {
			return function e(t, n, r) {
				function i(a, s) {
					if (!n[a]) {
						if (!t[a]) {
							if (o) return o(a, !0);
							var c = new Error("Cannot find module '" + a + "'");
							throw c.code = "MODULE_NOT_FOUND", c
						}
						var u = n[a] = {
							exports: {}
						};
						t[a][0].call(u.exports, (function(e) {
							return i(t[a][1][e] || e)
						}), u, u.exports, e, t, n, r)
					}
					return n[a].exports
				}
				for (var o = !1, a = 0; a < r.length; a++) i(r[a]);
				return i
			}({
				1: [function(e, t, n) {
					"use strict";
					var r = e("./js-yaml/loader"),
						i = e("./js-yaml/dumper");

					function o(e) {
						return function() {
							throw new Error("Function " + e + " is deprecated and cannot be used.")
						}
					}
					t.exports.Type = e("./js-yaml/type"), t.exports.Schema = e("./js-yaml/schema"), t.exports.FAILSAFE_SCHEMA = e("./js-yaml/schema/failsafe"), t.exports.JSON_SCHEMA = e("./js-yaml/schema/json"), t.exports.CORE_SCHEMA = e("./js-yaml/schema/core"), t.exports.DEFAULT_SAFE_SCHEMA = e("./js-yaml/schema/default_safe"), t.exports.DEFAULT_FULL_SCHEMA = e("./js-yaml/schema/default_full"), t.exports.load = r.load, t.exports.loadAll = r.loadAll, t.exports.safeLoad = r.safeLoad, t.exports.safeLoadAll = r.safeLoadAll, t.exports.dump = i.dump, t.exports.safeDump = i.safeDump, t.exports.YAMLException = e("./js-yaml/exception"), t.exports.MINIMAL_SCHEMA = e("./js-yaml/schema/failsafe"), t.exports.SAFE_SCHEMA = e("./js-yaml/schema/default_safe"), t.exports.DEFAULT_SCHEMA = e("./js-yaml/schema/default_full"), t.exports.scan = o("scan"), t.exports.parse = o("parse"), t.exports.compose = o("compose"), t.exports.addConstructor = o("addConstructor")
				}, {
					"./js-yaml/dumper": 3,
					"./js-yaml/exception": 4,
					"./js-yaml/loader": 5,
					"./js-yaml/schema": 7,
					"./js-yaml/schema/core": 8,
					"./js-yaml/schema/default_full": 9,
					"./js-yaml/schema/default_safe": 10,
					"./js-yaml/schema/failsafe": 11,
					"./js-yaml/schema/json": 12,
					"./js-yaml/type": 13
				}],
				2: [function(e, t, n) {
					"use strict";

					function r(e) {
						return null == e
					}
					t.exports.isNothing = r, t.exports.isObject = function(e) {
						return "object" == s(e) && null !== e
					}, t.exports.toArray = function(e) {
						return Array.isArray(e) ? e : r(e) ? [] : [e]
					}, t.exports.repeat = function(e, t) {
						for (var n = "", r = 0; r < t; r += 1) n += e;
						return n
					}, t.exports.isNegativeZero = function(e) {
						return 0 === e && Number.NEGATIVE_INFINITY === 1 / e
					}, t.exports.extend = function(e, t) {
						var n, r, i, o;
						if (t)
							for (n = 0, r = (o = Object.keys(t)).length; n < r; n += 1) e[i = o[n]] = t[i];
						return e
					}
				}, {}],
				3: [function(e, t, n) {
					"use strict";
					var r = e("./common"),
						i = e("./exception"),
						o = e("./schema/default_full"),
						a = e("./schema/default_safe"),
						c = Object.prototype.toString,
						u = Object.prototype.hasOwnProperty,
						l = {
							0: "\\0",
							7: "\\a",
							8: "\\b",
							9: "\\t",
							10: "\\n",
							11: "\\v",
							12: "\\f",
							13: "\\r",
							27: "\\e",
							34: '\\"',
							92: "\\\\",
							133: "\\N",
							160: "\\_",
							8232: "\\L",
							8233: "\\P"
						},
						p = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"];

					function f(e) {
						var t, n, o = e.toString(16).toUpperCase();
						if (e <= 255) t = "x", n = 2;
						else if (e <= 65535) t = "u", n = 4;
						else {
							if (!(e <= 4294967295)) throw new i("code point within a string may not be greater than 0xFFFFFFFF");
							t = "U", n = 8
						}
						return "\\" + t + r.repeat("0", n - o.length) + o
					}

					function d(e) {
						this.schema = e.schema || o, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = r.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = function(e, t) {
							var n, r, i, o, a, s, c;
							if (null === t) return {};
							for (n = {}, i = 0, o = (r = Object.keys(t)).length; i < o; i += 1) a = r[i], s = String(t[a]), "!!" === a.slice(0, 2) && (a = "tag:yaml.org,2002:" + a.slice(2)), (c = e.compiledTypeMap.fallback[a]) && u.call(c.styleAliases, s) && (s = c.styleAliases[s]), n[a] = s;
							return n
						}(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null
					}

					function h(e, t) {
						for (var n, i = r.repeat(" ", t), o = 0, a = -1, s = "", c = e.length; o < c;) o = -1 === (a = e.indexOf("\n", o)) ? (n = e.slice(o), c) : (n = e.slice(o, a + 1), a + 1), n.length && "\n" !== n && (s += i), s += n;
						return s
					}

					function m(e, t) {
						return "\n" + r.repeat(" ", e.indent * t)
					}

					function y(e) {
						return 32 === e || 9 === e
					}

					function g(e) {
						return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && 8232 !== e && 8233 !== e || 57344 <= e && e <= 65533 && 65279 !== e || 65536 <= e && e <= 1114111
					}

					function b(e, t) {
						return g(e) && 65279 !== e && 44 !== e && 91 !== e && 93 !== e && 123 !== e && 125 !== e && 58 !== e && (35 !== e || t && g(n = t) && !y(n) && 65279 !== n && 13 !== n && 10 !== n);
						var n
					}

					function v(e) {
						return /^\n* /.test(e)
					}

					function x(e, t, n, r) {
						e.dump = function() {
							if (0 === t.length) return "''";
							if (!e.noCompatMode && -1 !== p.indexOf(t)) return "'" + t + "'";
							var o = e.indent * Math.max(1, n),
								a = -1 === e.lineWidth ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o),
								s = r || -1 < e.flowLevel && n >= e.flowLevel;
							switch (function(e, t, n, r, i) {
								var o, a, s, c, u = !1,
									l = !1,
									p = -1 !== r,
									f = -1,
									d = g(c = e.charCodeAt(0)) && 65279 !== c && !y(c) && 45 !== c && 63 !== c && 58 !== c && 44 !== c && 91 !== c && 93 !== c && 123 !== c && 125 !== c && 35 !== c && 38 !== c && 42 !== c && 33 !== c && 124 !== c && 61 !== c && 62 !== c && 39 !== c && 34 !== c && 37 !== c && 64 !== c && 96 !== c && !y(e.charCodeAt(e.length - 1));
								if (t)
									for (o = 0; o < e.length; o++) {
										if (!g(a = e.charCodeAt(o))) return 5;
										s = 0 < o ? e.charCodeAt(o - 1) : null, d = d && b(a, s)
									} else {
										for (o = 0; o < e.length; o++) {
											if (10 === (a = e.charCodeAt(o))) u = !0, p && (l = l || r < o - f - 1 && " " !== e[f + 1], f = o);
											else if (!g(a)) return 5;
											s = 0 < o ? e.charCodeAt(o - 1) : null, d = d && b(a, s)
										}
										l = l || p && r < o - f - 1 && " " !== e[f + 1]
									}
								return u || l ? 9 < n && v(e) ? 5 : l ? 4 : 3 : d && !i(e) ? 1 : 2
							}(t, s, e.indent, a, (function(t) {
								return function(e, t) {
									for (var n = 0, r = e.implicitTypes.length; n < r; n += 1)
										if (e.implicitTypes[n].resolve(t)) return !0;
									return !1
								}(e, t)
							}))) {
								case 1:
									return t;
								case 2:
									return "'" + t.replace(/'/g, "''") + "'";
								case 3:
									return "|" + A(t, e.indent) + w(h(t, o));
								case 4:
									return ">" + A(t, e.indent) + w(h(function(e, t) {
										for (var n, r, i = /(\n+)([^\n]*)/g, o = function() {
												var n = -1 !== (n = e.indexOf("\n")) ? n : e.length;
												return i.lastIndex = n, C(e.slice(0, n), t)
											}(), a = "\n" === e[0] || " " === e[0]; r = i.exec(e);) {
											var s = r[1],
												c = r[2];
											n = " " === c[0], o += s + (a || n || "" === c ? "" : "\n") + C(c, t), a = n
										}
										return o
									}(t, a), o));
								case 5:
									return '"' + function(e) {
										for (var t, n, r, i = "", o = 0; o < e.length; o++) 55296 <= (t = e.charCodeAt(o)) && t <= 56319 && 56320 <= (n = e.charCodeAt(o + 1)) && n <= 57343 ? (i += f(1024 * (t - 55296) + n - 56320 + 65536), o++) : i += !(r = l[t]) && g(t) ? e[o] : r || f(t);
										return i
									}(t) + '"';
								default:
									throw new i("impossible error: invalid scalar style")
							}
						}()
					}

					function A(e, t) {
						var n = v(e) ? String(t) : "",
							r = "\n" === e[e.length - 1];
						return n + (!r || "\n" !== e[e.length - 2] && "\n" !== e ? r ? "" : "-" : "+") + "\n"
					}

					function w(e) {
						return "\n" === e[e.length - 1] ? e.slice(0, -1) : e
					}

					function C(e, t) {
						if ("" === e || " " === e[0]) return e;
						for (var n, r, i = / [^ ]/g, o = 0, a = 0, s = 0, c = ""; n = i.exec(e);) t < (s = n.index) - o && (r = o < a ? a : s, c += "\n" + e.slice(o, r), o = r + 1), a = s;
						return c += "\n", e.length - o > t && o < a ? c += e.slice(o, a) + "\n" + e.slice(a + 1) : c += e.slice(o), c.slice(1)
					}

					function k(e, t, n) {
						for (var r, o, a, l = n ? e.explicitTypes : e.implicitTypes, p = 0, f = l.length; p < f; p += 1)
							if (((o = l[p]).instanceOf || o.predicate) && (!o.instanceOf || "object" == s(t) && t instanceof o.instanceOf) && (!o.predicate || o.predicate(t))) {
								if (e.tag = n ? o.tag : "?", o.represent) {
									if (a = e.styleMap[o.tag] || o.defaultStyle, "[object Function]" === c.call(o.represent)) r = o.represent(t, a);
									else {
										if (!u.call(o.represent, a)) throw new i("!<" + o.tag + '> tag resolver accepts not "' + a + '" style');
										r = o.represent[a](t, a)
									}
									e.dump = r
								}
								return 1
							}
					}

					function j(e, t) {
						var n = new d(t = t || {});
						return n.noRefs || function(e, t) {
								var n, r, i = [],
									o = [];
								for (function e(t, n, r) {
										var i, o, a;
										if (null !== t && "object" == s(t))
											if (-1 !== (o = n.indexOf(t))) - 1 === r.indexOf(o) && r.push(o);
											else if (n.push(t), Array.isArray(t))
											for (o = 0, a = t.length; o < a; o += 1) e(t[o], n, r);
										else
											for (o = 0, a = (i = Object.keys(t)).length; o < a; o += 1) e(t[i[o]], n, r)
									}(e, i, o), n = 0, r = o.length; n < r; n += 1) t.duplicates.push(i[o[n]]);
								t.usedDuplicates = new Array(r)
							}(e, n),
							function e(t, n, r, o, a, s) {
								t.tag = null, t.dump = r, k(t, r, !1) || k(t, r, !0);
								var u = c.call(t.dump);
								o = o && (t.flowLevel < 0 || t.flowLevel > n);
								var l, p, f = "[object Object]" === u || "[object Array]" === u;
								if (f && (p = -1 !== (l = t.duplicates.indexOf(r))), (null !== t.tag && "?" !== t.tag || p || 2 !== t.indent && 0 < n) && (a = !1), p && t.usedDuplicates[l]) t.dump = "*ref_" + l;
								else {
									if (f && p && !t.usedDuplicates[l] && (t.usedDuplicates[l] = !0), "[object Object]" === u) o && 0 !== Object.keys(t.dump).length ? (function(t, n, r, o) {
										var a, s, c, u, l, p, f = "",
											d = t.tag,
											h = Object.keys(r);
										if (!0 === t.sortKeys) h.sort();
										else if ("function" == typeof t.sortKeys) h.sort(t.sortKeys);
										else if (t.sortKeys) throw new i("sortKeys must be a boolean or a function");
										for (a = 0, s = h.length; a < s; a += 1) p = "", o && 0 === a || (p += m(t, n)), u = r[c = h[a]], e(t, n + 1, c, !0, !0, !0) && ((l = null !== t.tag && "?" !== t.tag || t.dump && 1024 < t.dump.length) && (t.dump && 10 === t.dump.charCodeAt(0) ? p += "?" : p += "? "), p += t.dump, l && (p += m(t, n)), e(t, n + 1, u, !0, l) && (t.dump && 10 === t.dump.charCodeAt(0) ? p += ":" : p += ": ", f += p += t.dump));
										t.tag = d, t.dump = f || "{}"
									}(t, n, t.dump, a), p && (t.dump = "&ref_" + l + t.dump)) : (function(t, n, r) {
										for (var i, o, a, s = "", c = t.tag, u = Object.keys(r), l = 0, p = u.length; l < p; l += 1) a = "", 0 !== l && (a += ", "), t.condenseFlow && (a += '"'), o = r[i = u[l]], e(t, n, i, !1, !1) && (1024 < t.dump.length && (a += "? "), a += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), e(t, n, o, !1, !1) && (s += a += t.dump));
										t.tag = c, t.dump = "{" + s + "}"
									}(t, n, t.dump), p && (t.dump = "&ref_" + l + " " + t.dump));
									else if ("[object Array]" === u) {
										var d = t.noArrayIndent && 0 < n ? n - 1 : n;
										o && 0 !== t.dump.length ? (function(t, n, r, i) {
											for (var o = "", a = t.tag, s = 0, c = r.length; s < c; s += 1) e(t, n + 1, r[s], !0, !0) && (i && 0 === s || (o += m(t, n)), t.dump && 10 === t.dump.charCodeAt(0) ? o += "-" : o += "- ", o += t.dump);
											t.tag = a, t.dump = o || "[]"
										}(t, d, t.dump, a), p && (t.dump = "&ref_" + l + t.dump)) : (function(t, n, r) {
											for (var i = "", o = t.tag, a = 0, s = r.length; a < s; a += 1) e(t, n, r[a], !1, !1) && (0 !== a && (i += "," + (t.condenseFlow ? "" : " ")), i += t.dump);
											t.tag = o, t.dump = "[" + i + "]"
										}(t, d, t.dump), p && (t.dump = "&ref_" + l + " " + t.dump))
									} else {
										if ("[object String]" !== u) {
											if (t.skipInvalid) return;
											throw new i("unacceptable kind of an object to dump " + u)
										}
										"?" !== t.tag && x(t, t.dump, n, s)
									}
									null !== t.tag && "?" !== t.tag && (t.dump = "!<" + t.tag + "> " + t.dump)
								}
								return 1
							}(n, 0, e, !0, !0) ? n.dump + "\n" : ""
					}
					t.exports.dump = j, t.exports.safeDump = function(e, t) {
						return j(e, r.extend({
							schema: a
						}, t))
					}
				}, {
					"./common": 2,
					"./exception": 4,
					"./schema/default_full": 9,
					"./schema/default_safe": 10
				}],
				4: [function(e, t, n) {
					"use strict";

					function r(e, t) {
						Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : ""), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack || ""
					}((r.prototype = Object.create(Error.prototype)).constructor = r).prototype.toString = function(e) {
						var t = this.name + ": ";
						return t += this.reason || "(unknown reason)", !e && this.mark && (t += " " + this.mark.toString()), t
					}, t.exports = r
				}, {}],
				5: [function(e, t, n) {
					"use strict";
					var r = e("./common"),
						i = e("./exception"),
						o = e("./mark"),
						a = e("./schema/default_safe"),
						c = e("./schema/default_full"),
						u = Object.prototype.hasOwnProperty,
						l = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
						p = /[\x85\u2028\u2029]/,
						f = /[,\[\]\{\}]/,
						d = /^(?:!|!!|![a-z\-]+!)$/i,
						h = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;

					function m(e) {
						return Object.prototype.toString.call(e)
					}

					function y(e) {
						return 10 === e || 13 === e
					}

					function g(e) {
						return 9 === e || 32 === e
					}

					function b(e) {
						return 9 === e || 32 === e || 10 === e || 13 === e
					}

					function v(e) {
						return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e
					}

					function x(e) {
						return 48 === e ? "\0" : 97 === e ? "" : 98 === e ? "\b" : 116 === e || 9 === e ? "\t" : 110 === e ? "\n" : 118 === e ? "\v" : 102 === e ? "\f" : 114 === e ? "\r" : 101 === e ? "" : 32 === e ? " " : 34 === e ? '"' : 47 === e ? "/" : 92 === e ? "\\" : 78 === e ? "" : 95 === e ? " " : 76 === e ? "\u2028" : 80 === e ? "\u2029" : ""
					}
					for (var A = new Array(256), w = new Array(256), C = 0; C < 256; C++) A[C] = x(C) ? 1 : 0, w[C] = x(C);

					function k(e, t) {
						this.input = e, this.filename = t.filename || null, this.schema = t.schema || c, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.documents = []
					}

					function j(e, t) {
						return new i(t, new o(e.filename, e.input, e.position, e.line, e.position - e.lineStart))
					}

					function S(e, t) {
						throw j(e, t)
					}

					function O(e, t) {
						e.onWarning && e.onWarning.call(null, j(e, t))
					}
					var E = {
						YAML: function(e, t, n) {
							var r, i, o;
							null !== e.version && S(e, "duplication of %YAML directive"), 1 !== n.length && S(e, "YAML directive accepts exactly one argument"), null === (r = /^([0-9]+)\.([0-9]+)$/.exec(n[0])) && S(e, "ill-formed argument of the YAML directive"), i = parseInt(r[1], 10), o = parseInt(r[2], 10), 1 !== i && S(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, 1 !== o && 2 !== o && O(e, "unsupported YAML version of the document")
						},
						TAG: function(e, t, n) {
							var r, i;
							2 !== n.length && S(e, "TAG directive accepts exactly two arguments"), r = n[0], i = n[1], d.test(r) || S(e, "ill-formed tag handle (first argument) of the TAG directive"), u.call(e.tagMap, r) && S(e, 'there is a previously declared suffix for "' + r + '" tag handle'), h.test(i) || S(e, "ill-formed tag prefix (second argument) of the TAG directive"), e.tagMap[r] = i
						}
					};

					function I(e, t, n, r) {
						var i, o, a, s;
						if (t < n) {
							if (s = e.input.slice(t, n), r)
								for (i = 0, o = s.length; i < o; i += 1) 9 === (a = s.charCodeAt(i)) || 32 <= a && a <= 1114111 || S(e, "expected valid JSON character");
							else l.test(s) && S(e, "the stream contains non-printable characters");
							e.result += s
						}
					}

					function F(e, t, n, i) {
						var o, a, s, c;
						for (r.isObject(n) || S(e, "cannot merge mappings; the provided source object is unacceptable"), s = 0, c = (o = Object.keys(n)).length; s < c; s += 1) a = o[s], u.call(t, a) || (t[a] = n[a], i[a] = !0)
					}

					function N(e, t, n, r, i, o, a, c) {
						var l, p;
						if (Array.isArray(i))
							for (l = 0, p = (i = Array.prototype.slice.call(i)).length; l < p; l += 1) Array.isArray(i[l]) && S(e, "nested arrays are not supported inside keys"), "object" == s(i) && "[object Object]" === m(i[l]) && (i[l] = "[object Object]");
						if ("object" == s(i) && "[object Object]" === m(i) && (i = "[object Object]"), i = String(i), null === t && (t = {}), "tag:yaml.org,2002:merge" === r)
							if (Array.isArray(o))
								for (l = 0, p = o.length; l < p; l += 1) F(e, t, o[l], n);
							else F(e, t, o, n);
						else e.json || u.call(n, i) || !u.call(t, i) || (e.line = a || e.line, e.position = c || e.position, S(e, "duplicated mapping key")), t[i] = o, delete n[i];
						return t
					}

					function _(e) {
						var t = e.input.charCodeAt(e.position);
						10 === t ? e.position++ : 13 === t ? (e.position++, 10 === e.input.charCodeAt(e.position) && e.position++) : S(e, "a line break is expected"), e.line += 1, e.lineStart = e.position
					}

					function M(e, t, n) {
						for (var r = 0, i = e.input.charCodeAt(e.position); 0 !== i;) {
							for (; g(i);) i = e.input.charCodeAt(++e.position);
							if (t && 35 === i)
								for (; 10 !== (i = e.input.charCodeAt(++e.position)) && 13 !== i && 0 !== i;);
							if (!y(i)) break;
							for (_(e), i = e.input.charCodeAt(e.position), r++, e.lineIndent = 0; 32 === i;) e.lineIndent++, i = e.input.charCodeAt(++e.position)
						}
						return -1 !== n && 0 !== r && e.lineIndent < n && O(e, "deficient indentation"), r
					}

					function T(e) {
						var t = e.position,
							n = e.input.charCodeAt(t);
						return 45 !== n && 46 !== n || n !== e.input.charCodeAt(t + 1) || n !== e.input.charCodeAt(t + 2) || (t += 3, 0 !== (n = e.input.charCodeAt(t)) && !b(n)) ? void 0 : 1
					}

					function L(e, t) {
						1 === t ? e.result += " " : 1 < t && (e.result += r.repeat("\n", t - 1))
					}

					function D(e, t) {
						var n, r, i, o, a, s, c, u, l, p = e.input.charCodeAt(e.position);
						if (34 === p) {
							for (e.kind = "scalar", e.result = "", e.position++, n = r = e.position; 0 !== (p = e.input.charCodeAt(e.position));) {
								if (34 === p) return I(e, n, e.position, !0), e.position++, 1;
								if (92 === p) {
									if (I(e, n, e.position, !0), y(p = e.input.charCodeAt(++e.position))) M(e, !1, t);
									else if (p < 256 && A[p]) e.result += w[p], e.position++;
									else if (0 < (a = 120 === (l = p) ? 2 : 117 === l ? 4 : 85 === l ? 8 : 0)) {
										for (i = a, o = 0; 0 < i; i--) u = void 0, 0 <= (a = 48 <= (c = p = e.input.charCodeAt(++e.position)) && c <= 57 ? c - 48 : 97 <= (u = 32 | c) && u <= 102 ? u - 97 + 10 : -1) ? o = (o << 4) + a : S(e, "expected hexadecimal character");
										e.result += (s = o) <= 65535 ? String.fromCharCode(s) : String.fromCharCode(55296 + (s - 65536 >> 10), 56320 + (s - 65536 & 1023)), e.position++
									} else S(e, "unknown escape sequence");
									n = r = e.position
								} else y(p) ? (I(e, n, r, !0), L(e, M(e, !1, t)), n = r = e.position) : e.position === e.lineStart && T(e) ? S(e, "unexpected end of the document within a double quoted scalar") : (e.position++, r = e.position)
							}
							S(e, "unexpected end of the stream within a double quoted scalar")
						}
					}

					function U(e, t) {
						var n, r, i = e.tag,
							o = e.anchor,
							a = [],
							s = !1;
						for (null !== e.anchor && (e.anchorMap[e.anchor] = a), r = e.input.charCodeAt(e.position); 0 !== r && 45 === r && b(e.input.charCodeAt(e.position + 1));)
							if (s = !0, e.position++, M(e, !0, -1) && e.lineIndent <= t) a.push(null), r = e.input.charCodeAt(e.position);
							else if (n = e.line, P(e, t, 3, !1, !0), a.push(e.result), M(e, !0, -1), r = e.input.charCodeAt(e.position), (e.line === n || e.lineIndent > t) && 0 !== r) S(e, "bad indentation of a sequence entry");
						else if (e.lineIndent < t) break;
						return !!s && (e.tag = i, e.anchor = o, e.kind = "sequence", e.result = a, !0)
					}

					function P(e, t, n, i, o) {
						var a, s, c, l, p, m, x, A, w = 1,
							C = !1,
							k = !1;
						if (null !== e.listener && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, a = s = c = 4 === n || 3 === n, i && M(e, !0, -1) && (C = !0, e.lineIndent > t ? w = 1 : e.lineIndent === t ? w = 0 : e.lineIndent < t && (w = -1)), 1 === w)
							for (;

								function(e) {
									var t, n, r, i = !1,
										o = !1,
										a = e.input.charCodeAt(e.position);
									if (33 === a) {
										if (null !== e.tag && S(e, "duplication of a tag property"), 60 === (a = e.input.charCodeAt(++e.position)) ? (i = !0, a = e.input.charCodeAt(++e.position)) : 33 === a ? (o = !0, n = "!!", a = e.input.charCodeAt(++e.position)) : n = "!", t = e.position, i) {
											for (; 0 !== (a = e.input.charCodeAt(++e.position)) && 62 !== a;);
											e.position < e.length ? (r = e.input.slice(t, e.position), a = e.input.charCodeAt(++e.position)) : S(e, "unexpected end of the stream within a verbatim tag")
										} else {
											for (; 0 !== a && !b(a);) 33 === a && (o ? S(e, "tag suffix cannot contain exclamation marks") : (n = e.input.slice(t - 1, e.position + 1), d.test(n) || S(e, "named tag handle cannot contain such characters"), o = !0, t = e.position + 1)), a = e.input.charCodeAt(++e.position);
											r = e.input.slice(t, e.position), f.test(r) && S(e, "tag suffix cannot contain flow indicator characters")
										}
										return r && !h.test(r) && S(e, "tag name cannot contain such characters: " + r), i ? e.tag = r : u.call(e.tagMap, n) ? e.tag = e.tagMap[n] + r : "!" === n ? e.tag = "!" + r : "!!" === n ? e.tag = "tag:yaml.org,2002:" + r : S(e, 'undeclared tag handle "' + n + '"'), 1
									}
								}(e) || function(e) {
									var t, n = e.input.charCodeAt(e.position);
									if (38 === n) {
										for (null !== e.anchor && S(e, "duplication of an anchor property"), n = e.input.charCodeAt(++e.position), t = e.position; 0 !== n && !b(n) && !v(n);) n = e.input.charCodeAt(++e.position);
										return e.position === t && S(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), 1
									}
								}(e);) M(e, !0, -1) ? (C = !0, c = a, e.lineIndent > t ? w = 1 : e.lineIndent === t ? w = 0 : e.lineIndent < t && (w = -1)) : c = !1;
						if (c = c && (C || o), 1 !== w && 4 !== n || (x = 1 === n || 2 === n ? t : t + 1, A = e.position - e.lineStart, 1 === w ? c && (U(e, A) || function(e, t, n) {
								var r, i, o, a, s, c = e.tag,
									u = e.anchor,
									l = {},
									p = {},
									f = null,
									d = null,
									h = null,
									m = !1,
									y = !1;
								for (null !== e.anchor && (e.anchorMap[e.anchor] = l), s = e.input.charCodeAt(e.position); 0 !== s;) {
									if (r = e.input.charCodeAt(e.position + 1), o = e.line, a = e.position, 63 !== s && 58 !== s || !b(r)) {
										if (!P(e, n, 2, !1, !0)) break;
										if (e.line === o) {
											for (s = e.input.charCodeAt(e.position); g(s);) s = e.input.charCodeAt(++e.position);
											if (58 === s) b(s = e.input.charCodeAt(++e.position)) || S(e, "a whitespace character is expected after the key-value separator within a block mapping"), m && (N(e, l, p, f, d, null), f = d = h = null), i = m = !(y = !0), f = e.tag, d = e.result;
											else {
												if (!y) return e.tag = c, e.anchor = u, 1;
												S(e, "can not read an implicit mapping pair; a colon is missed")
											}
										} else {
											if (!y) return e.tag = c, e.anchor = u, 1;
											S(e, "can not read a block mapping entry; a multiline key may not be an implicit key")
										}
									} else 63 === s ? (m && (N(e, l, p, f, d, null), f = d = h = null), i = m = y = !0) : m ? i = !(m = !1) : S(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, s = r;
									if ((e.line === o || e.lineIndent > t) && (P(e, t, 4, !0, i) && (m ? d = e.result : h = e.result), m || (N(e, l, p, f, d, h, o, a), f = d = h = null), M(e, !0, -1), s = e.input.charCodeAt(e.position)), e.lineIndent > t && 0 !== s) S(e, "bad indentation of a mapping entry");
									else if (e.lineIndent < t) break
								}
								return m && N(e, l, p, f, d, null), y && (e.tag = c, e.anchor = u, e.kind = "mapping", e.result = l), y
							}(e, A, x)) || function(e, t) {
								var n, r, i, o, a, s, c, u, l, p = !0,
									f = e.tag,
									d = e.anchor,
									h = {},
									m = e.input.charCodeAt(e.position);
								if (91 === m) s = !(i = 93), r = [];
								else {
									if (123 !== m) return;
									i = 125, s = !0, r = {}
								}
								for (null !== e.anchor && (e.anchorMap[e.anchor] = r), m = e.input.charCodeAt(++e.position); 0 !== m;) {
									if (M(e, !0, t), (m = e.input.charCodeAt(e.position)) === i) return e.position++, e.tag = f, e.anchor = d, e.kind = s ? "mapping" : "sequence", e.result = r, 1;
									p || S(e, "missed comma between flow collection entries"), l = null, o = a = !1, 63 === m && b(e.input.charCodeAt(e.position + 1)) && (o = a = !0, e.position++, M(e, !0, t)), n = e.line, P(e, t, 1, !1, !0), u = e.tag, c = e.result, M(e, !0, t), m = e.input.charCodeAt(e.position), !a && e.line !== n || 58 !== m || (o = !0, m = e.input.charCodeAt(++e.position), M(e, !0, t), P(e, t, 1, !1, !0), l = e.result), s ? N(e, r, h, u, c, l) : o ? r.push(N(e, null, h, u, c, l)) : r.push(c), M(e, !0, t), 44 === (m = e.input.charCodeAt(e.position)) ? (p = !0, m = e.input.charCodeAt(++e.position)) : p = !1
								}
								S(e, "unexpected end of the stream within a flow collection")
							}(e, x) ? k = !0 : (s && function(e, t) {
								var n, i, o, a, s = 1,
									c = !1,
									u = !1,
									l = t,
									p = 0,
									f = !1,
									d = e.input.charCodeAt(e.position);
								if (124 === d) i = !1;
								else {
									if (62 !== d) return;
									i = !0
								}
								for (e.kind = "scalar", e.result = ""; 0 !== d;)
									if (43 === (d = e.input.charCodeAt(++e.position)) || 45 === d) 1 === s ? s = 43 === d ? 3 : 2 : S(e, "repeat of a chomping mode identifier");
									else {
										if (!(0 <= (o = 48 <= (a = d) && a <= 57 ? a - 48 : -1))) break;
										0 == o ? S(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : u ? S(e, "repeat of an indentation width identifier") : (l = t + o - 1, u = !0)
									}
								if (g(d)) {
									for (; g(d = e.input.charCodeAt(++e.position)););
									if (35 === d)
										for (; !y(d = e.input.charCodeAt(++e.position)) && 0 !== d;);
								}
								for (; 0 !== d;) {
									for (_(e), e.lineIndent = 0, d = e.input.charCodeAt(e.position);
										(!u || e.lineIndent < l) && 32 === d;) e.lineIndent++, d = e.input.charCodeAt(++e.position);
									if (!u && e.lineIndent > l && (l = e.lineIndent), y(d)) p++;
									else {
										if (e.lineIndent < l) {
											3 === s ? e.result += r.repeat("\n", c ? 1 + p : p) : 1 === s && c && (e.result += "\n");
											break
										}
										for (i ? g(d) ? (f = !0, e.result += r.repeat("\n", c ? 1 + p : p)) : f ? (f = !1, e.result += r.repeat("\n", p + 1)) : 0 === p ? c && (e.result += " ") : e.result += r.repeat("\n", p) : e.result += r.repeat("\n", c ? 1 + p : p), u = c = !0, p = 0, n = e.position; !y(d) && 0 !== d;) d = e.input.charCodeAt(++e.position);
										I(e, n, e.position, !1)
									}
								}
								return 1
							}(e, x) || function(e, t) {
								var n, r, i = e.input.charCodeAt(e.position);
								if (39 === i) {
									for (e.kind = "scalar", e.result = "", e.position++, n = r = e.position; 0 !== (i = e.input.charCodeAt(e.position));)
										if (39 === i) {
											if (I(e, n, e.position, !0), 39 !== (i = e.input.charCodeAt(++e.position))) return 1;
											n = e.position, e.position++, r = e.position
										} else y(i) ? (I(e, n, r, !0), L(e, M(e, !1, t)), n = r = e.position) : e.position === e.lineStart && T(e) ? S(e, "unexpected end of the document within a single quoted scalar") : (e.position++, r = e.position);
									S(e, "unexpected end of the stream within a single quoted scalar")
								}
							}(e, x) || D(e, x) ? k = !0 : function(e) {
								var t, n, r = e.input.charCodeAt(e.position);
								if (42 === r) {
									for (r = e.input.charCodeAt(++e.position), t = e.position; 0 !== r && !b(r) && !v(r);) r = e.input.charCodeAt(++e.position);
									return e.position === t && S(e, "name of an alias node must contain at least one character"), n = e.input.slice(t, e.position), e.anchorMap.hasOwnProperty(n) || S(e, 'unidentified alias "' + n + '"'), e.result = e.anchorMap[n], M(e, !0, -1), 1
								}
							}(e) ? (k = !0, null === e.tag && null === e.anchor || S(e, "alias node should not have any properties")) : function(e, t, n) {
								var r, i, o, a, s, c, u, l = e.kind,
									p = e.result,
									f = e.input.charCodeAt(e.position);
								if (!b(f) && !v(f) && 35 !== f && 38 !== f && 42 !== f && 33 !== f && 124 !== f && 62 !== f && 39 !== f && 34 !== f && 37 !== f && 64 !== f && 96 !== f && (63 !== f && 45 !== f || !(b(r = e.input.charCodeAt(e.position + 1)) || n && v(r)))) {
									for (e.kind = "scalar", e.result = "", i = o = e.position, a = !1; 0 !== f;) {
										if (58 === f) {
											if (b(r = e.input.charCodeAt(e.position + 1)) || n && v(r)) break
										} else if (35 === f) {
											if (b(e.input.charCodeAt(e.position - 1))) break
										} else {
											if (e.position === e.lineStart && T(e) || n && v(f)) break;
											if (y(f)) {
												if (s = e.line, c = e.lineStart, u = e.lineIndent, M(e, !1, -1), e.lineIndent >= t) {
													a = !0, f = e.input.charCodeAt(e.position);
													continue
												}
												e.position = o, e.line = s, e.lineStart = c, e.lineIndent = u;
												break
											}
										}
										a && (I(e, i, o, !1), L(e, e.line - s), i = o = e.position, a = !1), g(f) || (o = e.position + 1), f = e.input.charCodeAt(++e.position)
									}
									if (I(e, i, o, !1), e.result) return 1;
									e.kind = l, e.result = p
								}
							}(e, x, 1 === n) && (k = !0, null === e.tag && (e.tag = "?")), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : 0 === w && (k = c && U(e, A))), null !== e.tag && "!" !== e.tag)
							if ("?" === e.tag) {
								for (null !== e.result && "scalar" !== e.kind && S(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), l = 0, p = e.implicitTypes.length; l < p; l += 1)
									if ((m = e.implicitTypes[l]).resolve(e.result)) {
										e.result = m.construct(e.result), e.tag = m.tag, null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
										break
									}
							} else u.call(e.typeMap[e.kind || "fallback"], e.tag) ? (m = e.typeMap[e.kind || "fallback"][e.tag], null !== e.result && m.kind !== e.kind && S(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + m.kind + '", not "' + e.kind + '"'), m.resolve(e.result) ? (e.result = m.construct(e.result), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : S(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")) : S(e, "unknown tag !<" + e.tag + ">");
						return null !== e.listener && e.listener("close", e), null !== e.tag || null !== e.anchor || k
					}

					function Y(e, t) {
						t = t || {}, 0 !== (e = String(e)).length && (10 !== e.charCodeAt(e.length - 1) && 13 !== e.charCodeAt(e.length - 1) && (e += "\n"), 65279 === e.charCodeAt(0) && (e = e.slice(1)));
						var n = new k(e, t),
							r = e.indexOf("\0");
						for (-1 !== r && (n.position = r, S(n, "null byte is not allowed in input")), n.input += "\0"; 32 === n.input.charCodeAt(n.position);) n.lineIndent += 1, n.position += 1;
						for (; n.position < n.length - 1;) ! function(e) {
							var t, n, r, i, o = e.position,
								a = !1;
							for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = {}, e.anchorMap = {}; 0 !== (i = e.input.charCodeAt(e.position)) && (M(e, !0, -1), i = e.input.charCodeAt(e.position), !(0 < e.lineIndent || 37 !== i));) {
								for (a = !0, i = e.input.charCodeAt(++e.position), t = e.position; 0 !== i && !b(i);) i = e.input.charCodeAt(++e.position);
								for (r = [], (n = e.input.slice(t, e.position)).length < 1 && S(e, "directive name must not be less than one character in length"); 0 !== i;) {
									for (; g(i);) i = e.input.charCodeAt(++e.position);
									if (35 === i) {
										for (; 0 !== (i = e.input.charCodeAt(++e.position)) && !y(i););
										break
									}
									if (y(i)) break;
									for (t = e.position; 0 !== i && !b(i);) i = e.input.charCodeAt(++e.position);
									r.push(e.input.slice(t, e.position))
								}
								0 !== i && _(e), u.call(E, n) ? E[n](e, n, r) : O(e, 'unknown document directive "' + n + '"')
							}
							M(e, !0, -1), 0 === e.lineIndent && 45 === e.input.charCodeAt(e.position) && 45 === e.input.charCodeAt(e.position + 1) && 45 === e.input.charCodeAt(e.position + 2) ? (e.position += 3, M(e, !0, -1)) : a && S(e, "directives end mark is expected"), P(e, e.lineIndent - 1, 4, !1, !0), M(e, !0, -1), e.checkLineBreaks && p.test(e.input.slice(o, e.position)) && O(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && T(e) ? 46 === e.input.charCodeAt(e.position) && (e.position += 3, M(e, !0, -1)) : e.position < e.length - 1 && S(e, "end of the stream or a document separator is expected")
						}(n);
						return n.documents
					}

					function B(e, t, n) {
						null !== t && "object" == s(t) && void 0 === n && (n = t, t = null);
						var r = Y(e, n);
						if ("function" != typeof t) return r;
						for (var i = 0, o = r.length; i < o; i += 1) t(r[i])
					}

					function q(e, t) {
						var n = Y(e, t);
						if (0 !== n.length) {
							if (1 === n.length) return n[0];
							throw new i("expected a single document in the stream, but found more")
						}
					}
					t.exports.loadAll = B, t.exports.load = q, t.exports.safeLoadAll = function(e, t, n) {
						return "object" == s(t) && null !== t && void 0 === n && (n = t, t = null), B(e, t, r.extend({
							schema: a
						}, n))
					}, t.exports.safeLoad = function(e, t) {
						return q(e, r.extend({
							schema: a
						}, t))
					}
				}, {
					"./common": 2,
					"./exception": 4,
					"./mark": 6,
					"./schema/default_full": 9,
					"./schema/default_safe": 10
				}],
				6: [function(e, t, n) {
					"use strict";
					var r = e("./common");

					function i(e, t, n, r, i) {
						this.name = e, this.buffer = t, this.position = n, this.line = r, this.column = i
					}
					i.prototype.getSnippet = function(e, t) {
						var n, i, o, a, s;
						if (!this.buffer) return null;
						for (e = e || 4, t = t || 75, n = "", i = this.position; 0 < i && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(i - 1));)
							if (--i, this.position - i > t / 2 - 1) {
								n = " ... ", i += 5;
								break
							}
						for (o = "", a = this.position; a < this.buffer.length && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(a));)
							if ((a += 1) - this.position > t / 2 - 1) {
								o = " ... ", a -= 5;
								break
							}
						return s = this.buffer.slice(i, a), r.repeat(" ", e) + n + s + o + "\n" + r.repeat(" ", e + this.position - i + n.length) + "^"
					}, i.prototype.toString = function(e) {
						var t, n = "";
						return this.name && (n += 'in "' + this.name + '" '), n += "at line " + (this.line + 1) + ", column " + (this.column + 1), e || (t = this.getSnippet()) && (n += ":\n" + t), n
					}, t.exports = i
				}, {
					"./common": 2
				}],
				7: [function(e, t, n) {
					"use strict";
					var r = e("./common"),
						i = e("./exception"),
						o = e("./type");

					function a(e, t, n) {
						var r = [];
						return e.include.forEach((function(e) {
							n = a(e, t, n)
						})), e[t].forEach((function(e) {
							n.forEach((function(t, n) {
								t.tag === e.tag && t.kind === e.kind && r.push(n)
							})), n.push(e)
						})), n.filter((function(e, t) {
							return -1 === r.indexOf(t)
						}))
					}

					function s(e) {
						this.include = e.include || [], this.implicit = e.implicit || [], this.explicit = e.explicit || [], this.implicit.forEach((function(e) {
							if (e.loadKind && "scalar" !== e.loadKind) throw new i("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")
						})), this.compiledImplicit = a(this, "implicit", []), this.compiledExplicit = a(this, "explicit", []), this.compiledTypeMap = function() {
							var e, t, n = {
								scalar: {},
								sequence: {},
								mapping: {},
								fallback: {}
							};

							function r(e) {
								n[e.kind][e.tag] = n.fallback[e.tag] = e
							}
							for (e = 0, t = arguments.length; e < t; e += 1) arguments[e].forEach(r);
							return n
						}(this.compiledImplicit, this.compiledExplicit)
					}
					s.DEFAULT = null, s.create = function(e, t) {
						var n, a;
						switch (arguments.length) {
							case 1:
								n = s.DEFAULT, a = e;
								break;
							case 2:
								n = e, a = t;
								break;
							default:
								throw new i("Wrong number of arguments for Schema.create function")
						}
						if (n = r.toArray(n), a = r.toArray(a), !n.every((function(e) {
								return e instanceof s
							}))) throw new i("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
						if (!a.every((function(e) {
								return e instanceof o
							}))) throw new i("Specified list of YAML types (or a single Type object) contains a non-Type object.");
						return new s({
							include: n,
							explicit: a
						})
					}, t.exports = s
				}, {
					"./common": 2,
					"./exception": 4,
					"./type": 13
				}],
				8: [function(e, t, n) {
					"use strict";
					var r = e("../schema");
					t.exports = new r({
						include: [e("./json")]
					})
				}, {
					"../schema": 7,
					"./json": 12
				}],
				9: [function(e, t, n) {
					"use strict";
					var r = e("../schema");
					t.exports = r.DEFAULT = new r({
						include: [e("./default_safe")],
						explicit: [e("../type/js/undefined"), e("../type/js/regexp"), e("../type/js/function")]
					})
				}, {
					"../schema": 7,
					"../type/js/function": 18,
					"../type/js/regexp": 19,
					"../type/js/undefined": 20,
					"./default_safe": 10
				}],
				10: [function(e, t, n) {
					"use strict";
					var r = e("../schema");
					t.exports = new r({
						include: [e("./core")],
						implicit: [e("../type/timestamp"), e("../type/merge")],
						explicit: [e("../type/binary"), e("../type/omap"), e("../type/pairs"), e("../type/set")]
					})
				}, {
					"../schema": 7,
					"../type/binary": 14,
					"../type/merge": 22,
					"../type/omap": 24,
					"../type/pairs": 25,
					"../type/set": 27,
					"../type/timestamp": 29,
					"./core": 8
				}],
				11: [function(e, t, n) {
					"use strict";
					var r = e("../schema");
					t.exports = new r({
						explicit: [e("../type/str"), e("../type/seq"), e("../type/map")]
					})
				}, {
					"../schema": 7,
					"../type/map": 21,
					"../type/seq": 26,
					"../type/str": 28
				}],
				12: [function(e, t, n) {
					"use strict";
					var r = e("../schema");
					t.exports = new r({
						include: [e("./failsafe")],
						implicit: [e("../type/null"), e("../type/bool"), e("../type/int"), e("../type/float")]
					})
				}, {
					"../schema": 7,
					"../type/bool": 15,
					"../type/float": 16,
					"../type/int": 17,
					"../type/null": 23,
					"./failsafe": 11
				}],
				13: [function(e, t, n) {
					"use strict";
					var r = e("./exception"),
						i = ["kind", "resolve", "construct", "instanceOf", "predicate", "represent", "defaultStyle", "styleAliases"],
						o = ["scalar", "sequence", "mapping"];
					t.exports = function(e, t) {
						var n, a;
						if (t = t || {}, Object.keys(t).forEach((function(t) {
								if (-1 === i.indexOf(t)) throw new r('Unknown option "' + t + '" is met in definition of "' + e + '" YAML type.')
							})), this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
								return !0
							}, this.construct = t.construct || function(e) {
								return e
							}, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.defaultStyle = t.defaultStyle || null, this.styleAliases = (n = t.styleAliases || null, a = {}, null !== n && Object.keys(n).forEach((function(e) {
								n[e].forEach((function(t) {
									a[String(t)] = e
								}))
							})), a), -1 === o.indexOf(this.kind)) throw new r('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.')
					}
				}, {
					"./exception": 4
				}],
				14: [function(e, t, n) {
					"use strict";
					try {
						var r = e("buffer").Buffer
					} catch (e) {}
					var i = e("../type"),
						o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
					t.exports = new i("tag:yaml.org,2002:binary", {
						kind: "scalar",
						resolve: function(e) {
							if (null === e) return !1;
							for (var t, n = 0, r = e.length, i = o, a = 0; a < r; a++)
								if (!(64 < (t = i.indexOf(e.charAt(a))))) {
									if (t < 0) return !1;
									n += 6
								}
							return n % 8 == 0
						},
						construct: function(e) {
							for (var t, n = e.replace(/[\r\n=]/g, ""), i = n.length, a = o, s = 0, c = [], u = 0; u < i; u++) u % 4 == 0 && u && (c.push(s >> 16 & 255), c.push(s >> 8 & 255), c.push(255 & s)), s = s << 6 | a.indexOf(n.charAt(u));
							return 0 == (t = i % 4 * 6) ? (c.push(s >> 16 & 255), c.push(s >> 8 & 255), c.push(255 & s)) : 18 == t ? (c.push(s >> 10 & 255), c.push(s >> 2 & 255)) : 12 == t && c.push(s >> 4 & 255), r ? r.from ? r.from(c) : new r(c) : c
						},
						predicate: function(e) {
							return r && r.isBuffer(e)
						},
						represent: function(e) {
							for (var t, n = "", r = 0, i = e.length, a = o, s = 0; s < i; s++) s % 3 == 0 && s && (n += a[r >> 18 & 63], n += a[r >> 12 & 63], n += a[r >> 6 & 63], n += a[63 & r]), r = (r << 8) + e[s];
							return 0 == (t = i % 3) ? (n += a[r >> 18 & 63], n += a[r >> 12 & 63], n += a[r >> 6 & 63], n += a[63 & r]) : 2 == t ? (n += a[r >> 10 & 63], n += a[r >> 4 & 63], n += a[r << 2 & 63], n += a[64]) : 1 == t && (n += a[r >> 2 & 63], n += a[r << 4 & 63], n += a[64], n += a[64]), n
						}
					})
				}, {
					"../type": 13
				}],
				15: [function(e, t, n) {
					"use strict";
					var r = e("../type");
					t.exports = new r("tag:yaml.org,2002:bool", {
						kind: "scalar",
						resolve: function(e) {
							if (null === e) return !1;
							var t = e.length;
							return 4 === t && ("true" === e || "True" === e || "TRUE" === e) || 5 === t && ("false" === e || "False" === e || "FALSE" === e)
						},
						construct: function(e) {
							return "true" === e || "True" === e || "TRUE" === e
						},
						predicate: function(e) {
							return "[object Boolean]" === Object.prototype.toString.call(e)
						},
						represent: {
							lowercase: function(e) {
								return e ? "true" : "false"
							},
							uppercase: function(e) {
								return e ? "TRUE" : "FALSE"
							},
							camelcase: function(e) {
								return e ? "True" : "False"
							}
						},
						defaultStyle: "lowercase"
					})
				}, {
					"../type": 13
				}],
				16: [function(e, t, n) {
					"use strict";
					var r = e("../common"),
						i = e("../type"),
						o = new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),
						a = /^[-+]?[0-9]+e/;
					t.exports = new i("tag:yaml.org,2002:float", {
						kind: "scalar",
						resolve: function(e) {
							return null !== e && !(!o.test(e) || "_" === e[e.length - 1])
						},
						construct: function(e) {
							var t, n = e.replace(/_/g, "").toLowerCase(),
								r = "-" === n[0] ? -1 : 1,
								i = [];
							return 0 <= "+-".indexOf(n[0]) && (n = n.slice(1)), ".inf" === n ? 1 == r ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : ".nan" === n ? NaN : 0 <= n.indexOf(":") ? (n.split(":").forEach((function(e) {
								i.unshift(parseFloat(e, 10))
							})), n = 0, t = 1, i.forEach((function(e) {
								n += e * t, t *= 60
							})), r * n) : r * parseFloat(n, 10)
						},
						predicate: function(e) {
							return "[object Number]" === Object.prototype.toString.call(e) && (e % 1 != 0 || r.isNegativeZero(e))
						},
						represent: function(e, t) {
							var n;
							if (isNaN(e)) switch (t) {
								case "lowercase":
									return ".nan";
								case "uppercase":
									return ".NAN";
								case "camelcase":
									return ".NaN"
							} else if (Number.POSITIVE_INFINITY === e) switch (t) {
								case "lowercase":
									return ".inf";
								case "uppercase":
									return ".INF";
								case "camelcase":
									return ".Inf"
							} else if (Number.NEGATIVE_INFINITY === e) switch (t) {
								case "lowercase":
									return "-.inf";
								case "uppercase":
									return "-.INF";
								case "camelcase":
									return "-.Inf"
							} else if (r.isNegativeZero(e)) return "-0.0";
							return n = e.toString(10), a.test(n) ? n.replace("e", ".e") : n
						},
						defaultStyle: "lowercase"
					})
				}, {
					"../common": 2,
					"../type": 13
				}],
				17: [function(e, t, n) {
					"use strict";
					var r = e("../common"),
						i = e("../type");
					t.exports = new i("tag:yaml.org,2002:int", {
						kind: "scalar",
						resolve: function(e) {
							if (null === e) return !1;
							var t, n, r, i, o = e.length,
								a = 0,
								s = !1;
							if (!o) return !1;
							if ("-" !== (t = e[a]) && "+" !== t || (t = e[++a]), "0" === t) {
								if (a + 1 === o) return !0;
								if ("b" === (t = e[++a])) {
									for (a++; a < o; a++)
										if ("_" !== (t = e[a])) {
											if ("0" !== t && "1" !== t) return !1;
											s = !0
										}
									return s && "_" !== t
								}
								if ("x" === t) {
									for (a++; a < o; a++)
										if ("_" !== (t = e[a])) {
											if (!(48 <= (r = e.charCodeAt(a)) && r <= 57 || 65 <= r && r <= 70 || 97 <= r && r <= 102)) return !1;
											s = !0
										}
									return s && "_" !== t
								}
								for (; a < o; a++)
									if ("_" !== (t = e[a])) {
										if (!(48 <= (n = e.charCodeAt(a)) && n <= 55)) return !1;
										s = !0
									}
								return s && "_" !== t
							}
							if ("_" === t) return !1;
							for (; a < o; a++)
								if ("_" !== (t = e[a])) {
									if (":" === t) break;
									if (!(48 <= (i = e.charCodeAt(a)) && i <= 57)) return !1;
									s = !0
								}
							return !(!s || "_" === t) && (":" !== t || /^(:[0-5]?[0-9])+$/.test(e.slice(a)))
						},
						construct: function(e) {
							var t, n, r = e,
								i = 1,
								o = [];
							return -1 !== r.indexOf("_") && (r = r.replace(/_/g, "")), "-" !== (t = r[0]) && "+" !== t || ("-" === t && (i = -1), t = (r = r.slice(1))[0]), "0" === r ? 0 : "0" === t ? "b" === r[1] ? i * parseInt(r.slice(2), 2) : "x" === r[1] ? i * parseInt(r, 16) : i * parseInt(r, 8) : -1 !== r.indexOf(":") ? (r.split(":").forEach((function(e) {
								o.unshift(parseInt(e, 10))
							})), r = 0, n = 1, o.forEach((function(e) {
								r += e * n, n *= 60
							})), i * r) : i * parseInt(r, 10)
						},
						predicate: function(e) {
							return "[object Number]" === Object.prototype.toString.call(e) && e % 1 == 0 && !r.isNegativeZero(e)
						},
						represent: {
							binary: function(e) {
								return 0 <= e ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1)
							},
							octal: function(e) {
								return 0 <= e ? "0" + e.toString(8) : "-0" + e.toString(8).slice(1)
							},
							decimal: function(e) {
								return e.toString(10)
							},
							hexadecimal: function(e) {
								return 0 <= e ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1)
							}
						},
						defaultStyle: "decimal",
						styleAliases: {
							binary: [2, "bin"],
							octal: [8, "oct"],
							decimal: [10, "dec"],
							hexadecimal: [16, "hex"]
						}
					})
				}, {
					"../common": 2,
					"../type": 13
				}],
				18: [function(e, t, n) {
					"use strict";
					try {
						var r = e("esprima")
					} catch (e) {
						"undefined" != typeof window && (r = window.esprima)
					}
					var i = e("../../type");
					t.exports = new i("tag:yaml.org,2002:js/function", {
						kind: "scalar",
						resolve: function(e) {
							if (null === e) return !1;
							try {
								var t = "(" + e + ")",
									n = r.parse(t, {
										range: !0
									});
								return "Program" === n.type && 1 === n.body.length && "ExpressionStatement" === n.body[0].type && ("ArrowFunctionExpression" === n.body[0].expression.type || "FunctionExpression" === n.body[0].expression.type)
							} catch (e) {
								return !1
							}
						},
						construct: function(e) {
							var t, n = "(" + e + ")",
								i = r.parse(n, {
									range: !0
								}),
								o = [];
							if ("Program" !== i.type || 1 !== i.body.length || "ExpressionStatement" !== i.body[0].type || "ArrowFunctionExpression" !== i.body[0].expression.type && "FunctionExpression" !== i.body[0].expression.type) throw new Error("Failed to resolve function");
							return i.body[0].expression.params.forEach((function(e) {
								o.push(e.name)
							})), t = i.body[0].expression.body.range, "BlockStatement" === i.body[0].expression.body.type ? new Function(o, n.slice(t[0] + 1, t[1] - 1)) : new Function(o, "return " + n.slice(t[0], t[1]))
						},
						predicate: function(e) {
							return "[object Function]" === Object.prototype.toString.call(e)
						},
						represent: function(e) {
							return e.toString()
						}
					})
				}, {
					"../../type": 13
				}],
				19: [function(e, t, n) {
					"use strict";
					var r = e("../../type");
					t.exports = new r("tag:yaml.org,2002:js/regexp", {
						kind: "scalar",
						resolve: function(e) {
							if (null === e) return !1;
							if (0 === e.length) return !1;
							var t = e,
								n = /\/([gim]*)$/.exec(e),
								r = "";
							if ("/" === t[0]) {
								if (n && (r = n[1]), 3 < r.length) return !1;
								if ("/" !== t[t.length - r.length - 1]) return !1
							}
							return !0
						},
						construct: function(e) {
							var t = e,
								n = /\/([gim]*)$/.exec(e),
								r = "";
							return "/" === t[0] && (n && (r = n[1]), t = t.slice(1, t.length - r.length - 1)), new RegExp(t, r)
						},
						predicate: function(e) {
							return "[object RegExp]" === Object.prototype.toString.call(e)
						},
						represent: function(e) {
							var t = "/" + e.source + "/";
							return e.global && (t += "g"), e.multiline && (t += "m"), e.ignoreCase && (t += "i"), t
						}
					})
				}, {
					"../../type": 13
				}],
				20: [function(e, t, n) {
					"use strict";
					var r = e("../../type");
					t.exports = new r("tag:yaml.org,2002:js/undefined", {
						kind: "scalar",
						resolve: function() {
							return !0
						},
						construct: function() {},
						predicate: function(e) {
							return void 0 === e
						},
						represent: function() {
							return ""
						}
					})
				}, {
					"../../type": 13
				}],
				21: [function(e, t, n) {
					"use strict";
					var r = e("../type");
					t.exports = new r("tag:yaml.org,2002:map", {
						kind: "mapping",
						construct: function(e) {
							return null !== e ? e : {}
						}
					})
				}, {
					"../type": 13
				}],
				22: [function(e, t, n) {
					"use strict";
					var r = e("../type");
					t.exports = new r("tag:yaml.org,2002:merge", {
						kind: "scalar",
						resolve: function(e) {
							return "<<" === e || null === e
						}
					})
				}, {
					"../type": 13
				}],
				23: [function(e, t, n) {
					"use strict";
					var r = e("../type");
					t.exports = new r("tag:yaml.org,2002:null", {
						kind: "scalar",
						resolve: function(e) {
							if (null === e) return !0;
							var t = e.length;
							return 1 === t && "~" === e || 4 === t && ("null" === e || "Null" === e || "NULL" === e)
						},
						construct: function() {
							return null
						},
						predicate: function(e) {
							return null === e
						},
						represent: {
							canonical: function() {
								return "~"
							},
							lowercase: function() {
								return "null"
							},
							uppercase: function() {
								return "NULL"
							},
							camelcase: function() {
								return "Null"
							}
						},
						defaultStyle: "lowercase"
					})
				}, {
					"../type": 13
				}],
				24: [function(e, t, n) {
					"use strict";
					var r = e("../type"),
						i = Object.prototype.hasOwnProperty,
						o = Object.prototype.toString;
					t.exports = new r("tag:yaml.org,2002:omap", {
						kind: "sequence",
						resolve: function(e) {
							if (null === e) return !0;
							for (var t, n, r, a = [], s = e, c = 0, u = s.length; c < u; c += 1) {
								if (t = s[c], r = !1, "[object Object]" !== o.call(t)) return !1;
								for (n in t)
									if (i.call(t, n)) {
										if (r) return !1;
										r = !0
									}
								if (!r) return !1;
								if (-1 !== a.indexOf(n)) return !1;
								a.push(n)
							}
							return !0
						},
						construct: function(e) {
							return null !== e ? e : []
						}
					})
				}, {
					"../type": 13
				}],
				25: [function(e, t, n) {
					"use strict";
					var r = e("../type"),
						i = Object.prototype.toString;
					t.exports = new r("tag:yaml.org,2002:pairs", {
						kind: "sequence",
						resolve: function(e) {
							if (null === e) return !0;
							for (var t, n, r = e, o = new Array(r.length), a = 0, s = r.length; a < s; a += 1) {
								if (t = r[a], "[object Object]" !== i.call(t)) return !1;
								if (1 !== (n = Object.keys(t)).length) return !1;
								o[a] = [n[0], t[n[0]]]
							}
							return !0
						},
						construct: function(e) {
							if (null === e) return [];
							for (var t, n, r = e, i = new Array(r.length), o = 0, a = r.length; o < a; o += 1) t = r[o], n = Object.keys(t), i[o] = [n[0], t[n[0]]];
							return i
						}
					})
				}, {
					"../type": 13
				}],
				26: [function(e, t, n) {
					"use strict";
					var r = e("../type");
					t.exports = new r("tag:yaml.org,2002:seq", {
						kind: "sequence",
						construct: function(e) {
							return null !== e ? e : []
						}
					})
				}, {
					"../type": 13
				}],
				27: [function(e, t, n) {
					"use strict";
					var r = e("../type"),
						i = Object.prototype.hasOwnProperty;
					t.exports = new r("tag:yaml.org,2002:set", {
						kind: "mapping",
						resolve: function(e) {
							if (null === e) return !0;
							var t, n = e;
							for (t in n)
								if (i.call(n, t) && null !== n[t]) return !1;
							return !0
						},
						construct: function(e) {
							return null !== e ? e : {}
						}
					})
				}, {
					"../type": 13
				}],
				28: [function(e, t, n) {
					"use strict";
					var r = e("../type");
					t.exports = new r("tag:yaml.org,2002:str", {
						kind: "scalar",
						construct: function(e) {
							return null !== e ? e : ""
						}
					})
				}, {
					"../type": 13
				}],
				29: [function(e, t, n) {
					"use strict";
					var r = e("../type"),
						i = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
						o = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
					t.exports = new r("tag:yaml.org,2002:timestamp", {
						kind: "scalar",
						resolve: function(e) {
							return null !== e && (null !== i.exec(e) || null !== o.exec(e))
						},
						construct: function(e) {
							var t, n, r, a, s, c, u, l = 0,
								p = null,
								f = i.exec(e);
							if (null === f && (f = o.exec(e)), null === f) throw new Error("Date resolve error");
							if (t = +f[1], n = f[2] - 1, r = +f[3], !f[4]) return new Date(Date.UTC(t, n, r));
							if (a = +f[4], s = +f[5], c = +f[6], f[7]) {
								for (l = f[7].slice(0, 3); l.length < 3;) l += "0";
								l = +l
							}
							return f[9] && (p = 6e4 * (60 * +f[10] + +(f[11] || 0)), "-" === f[9] && (p = -p)), u = new Date(Date.UTC(t, n, r, a, s, c, l)), p && u.setTime(u.getTime() - p), u
						},
						instanceOf: Date,
						represent: function(e) {
							return e.toISOString()
						}
					})
				}, {
					"../type": 13
				}],
				"/": [function(e, t, n) {
					"use strict";
					var r = e("./lib/js-yaml.js");
					t.exports = r
				}, {
					"./lib/js-yaml.js": 1
				}]
			}, {}, [])("/")
		}, "object" == s(t) && void 0 !== e ? e.exports = a() : (i = [], void 0 === (o = "function" == typeof(r = a) ? r.apply(t, i) : r) || (e.exports = o))
	},
	28: function(e, t, n) {
		"use strict";
		n.r(t);
		var r = n(12),
			i = n.n(r);

		function o(e, t) {
			return function(e) {
				if (Array.isArray(e)) return e
			}(e) || function(e, t) {
				if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
				var n = [],
					r = !0,
					i = !1,
					o = void 0;
				try {
					for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
				} catch (e) {
					i = !0, o = e
				} finally {
					try {
						r || null == s.return || s.return()
					} finally {
						if (i) throw o
					}
				}
				return n
			}(e, t) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return a(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
			}(e, t) || function() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function a(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}
		Bibi.x({
			id: "Zine",
			description: "Utilities for BibiZine.",
			author: "Satoru Matsushima (@satorumurmur)",
			version: "1.2.0"
		})((function() {
			var e = this;
			this.loadZineData = function() {
				return e.setZineMode().then(e.openYAML).then(e.createPackageDocument).then(L.loadPackage.process)
			}, this.setZineMode = function() {
				return delete B.Container, B.Package.Source = O.src(B.ZineData.Source), Object.defineProperty(B, "ZineData", {
					get: function() {
						return B.Package
					}
				}), Promise.resolve()
			}, this.openYAML = function() {
				return O.file(B.ZineData.Source).then((function() {
					return i.a.safeLoad(B.ZineData.Source.Content)
				}))
			}, this.createPackageDocument = function(e) {
				var t = "http://www.idpf.org/2007/opf",
					n = "http://purl.org/dc/elements/1.1/",
					r = document.implementation.createDocument(t, "package"),
					i = r.documentElement;
				i.setAttribute("xmlns", t), i.setAttribute("xmlns:dc", n);
				var a = i.appendChild(document.createElementNS(t, "metadata"));
				["identifier", "language", "title", "creator", "publisher"].forEach((function(t) {
					e[t] && (a.appendChild(document.createElementNS(n, "dc:" + t)).textContent = e[t])
				})), ["rendition-layout", "rendition-orientation", "rendition-spread"].forEach((function(n) {
					if (e[n]) {
						var r = a.appendChild(document.createElementNS(t, "meta"));
						r.setAttribute("property", n.replace("-", ":")), r.textContent = e[n]
					}
				}));
				var s = i.appendChild(document.createElementNS(t, "manifest"));
				["cover-image", "nav"].forEach((function(n) {
					if (e[n]) {
						var r = s.appendChild(document.createElementNS(t, "item"));
						r.setAttribute("id", n + "-item"), r.setAttribute("properties", n), r.setAttribute("media-type", O.getContentType(e[n])), r.setAttribute("href", e[n])
					}
				}));
				var c = i.appendChild(document.createElementNS(t, "spine"));
				return e["page-progression-direction"] && c.setAttribute("page-progression-direction", e["page-progression-direction"]), e.spine.forEach((function(e, n) {
					if (e) {
						var r = "spine-item-" + (n + 1 + "").padStart(3, 0),
							i = o(e.trim().replace(/\s+/, " ").split(" "), 2),
							a = i[0],
							u = i[1],
							l = s.appendChild(document.createElementNS(t, "item"));
						l.setAttribute("id", r), l.setAttribute("media-type", O.getContentType(a)), l.setAttribute("href", a);
						var p = c.appendChild(document.createElementNS(t, "itemref"));
						p.setAttribute("idref", r), u && p.setAttribute("properties", "page-spread-" + u)
					}
				})), Promise.resolve(r)
			}
		}))
	}
});