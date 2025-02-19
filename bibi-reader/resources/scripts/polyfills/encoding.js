/*!
 *
 *  # Polyfill for Bibi: text-encoding-utf-8
 *
 *  * Consists of:
 *      - text-encoding-utf-8 : by Erik Arvidsson - https://github.com/arv/text-encoding-utf-8 / Released into the public domain under the Unlicense - https://github.com/arv/text-encoding-utf-8/blob/master/LICENSE.md
 *
 */
! function(e) {
	var t = {};

	function r(n) {
		if (t[n]) return t[n].exports;
		var o = t[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
	}
	r.m = e, r.c = t, r.d = function(e, t, n) {
		r.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, r.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, r.t = function(e, t) {
		if (1 & t && (e = r(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (r.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var o in e) r.d(n, o, function(t) {
				return e[t]
			}.bind(null, o));
		return n
	}, r.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return r.d(t, "a", t), t
	}, r.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, r.p = "", r(r.s = 41)
}({
	1: function(e, t, r) {
		"use strict";

		function n(e) {
			return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function o(e, t, r) {
			return t <= e && e <= r
		}

		function i(e) {
			if (void 0 === e) return {};
			if (e === Object(e)) return e;
			throw TypeError("Could not convert argument to dictionary")
		}
		r.d(t, "a", (function() {
			return s
		}));

		function f(e) {
			this.tokens = [].slice.call(e)
		}
		f.prototype = {
			endOfStream: function() {
				return !this.tokens.length
			},
			read: function() {
				return this.tokens.length ? this.tokens.shift() : -1
			},
			prepend: function(e) {
				if (Array.isArray(e))
					for (var t = e; t.length;) this.tokens.unshift(t.pop());
				else this.tokens.unshift(e)
			},
			push: function(e) {
				if (Array.isArray(e))
					for (var t = e; t.length;) this.tokens.push(t.shift());
				else this.tokens.push(e)
			}
		};

		function u(e, t) {
			if (e) throw TypeError("Decoder error");
			return t || 65533
		}

		function s(e, t) {
			if (!(this instanceof s)) return new s(e, t);
			if ("utf-8" !== (e = void 0 !== e ? String(e).toLowerCase() : "utf-8")) throw new Error("Encoding not supported. Only utf-8 is supported");
			t = i(t), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = Boolean(t.fatal), this._ignoreBOM = Boolean(t.ignoreBOM), Object.defineProperty(this, "encoding", {
				value: "utf-8"
			}), Object.defineProperty(this, "fatal", {
				value: this._fatal
			}), Object.defineProperty(this, "ignoreBOM", {
				value: this._ignoreBOM
			})
		}

		function a(e) {
			var t = e.fatal,
				r = 0,
				n = 0,
				i = 0,
				f = 128,
				s = 191;
			this.handler = function(e, a) {
				if (-1 === a && 0 !== i) return i = 0, u(t);
				if (-1 === a) return -1;
				if (0 === i) {
					if (o(a, 0, 127)) return a;
					if (o(a, 194, 223)) i = 1, r = a - 192;
					else if (o(a, 224, 239)) 224 === a && (f = 160), 237 === a && (s = 159), i = 2, r = a - 224;
					else {
						if (!o(a, 240, 244)) return u(t);
						240 === a && (f = 144), 244 === a && (s = 143), i = 3, r = a - 240
					}
					return r <<= 6 * i, null
				}
				if (!o(a, f, s)) return r = i = n = 0, f = 128, s = 191, e.prepend(a), u(t);
				if (f = 128, s = 191, r += a - 128 << 6 * (i - (n += 1)), n !== i) return null;
				var l = r;
				return r = i = n = 0, l
			}
		}
		s.prototype = {
			decode: function(e, t) {
				var r;
				r = "object" === n(e) && e instanceof ArrayBuffer ? new Uint8Array(e) : "object" === n(e) && "buffer" in e && e.buffer instanceof ArrayBuffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(0), t = i(t), this._streaming || (this._decoder = new a({
					fatal: this._fatal
				}), this._BOMseen = !1), this._streaming = Boolean(t.stream);
				for (var o, u = new f(r), s = []; !u.endOfStream() && -1 !== (o = this._decoder.handler(u, u.read()));) null !== o && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
				if (!this._streaming) {
					do {
						if (-1 === (o = this._decoder.handler(u, u.read()))) break;
						null !== o && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o))
					} while (!u.endOfStream());
					this._decoder = null
				}
				return s.length && (-1 === ["utf-8"].indexOf(this.encoding) || this._ignoreBOM || this._BOMseen || (65279 === s[0] ? (this._BOMseen = !0, s.shift()) : this._BOMseen = !0)),
					function(e) {
						for (var t = "", r = 0; r < e.length; ++r) {
							var n = e[r];
							n <= 65535 ? t += String.fromCharCode(n) : (n -= 65536, t += String.fromCharCode(55296 + (n >> 10), 56320 + (1023 & n)))
						}
						return t
					}(s)
			}
		}
	},
	41: function(e, t, r) {
		"use strict";
		r.r(t);
		var n = r(1);
		self.TextDecoder = n.a
	}
});