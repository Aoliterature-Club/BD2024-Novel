/*!
 *
 *  # # Bibi Extension: Unaccessibilizer ("What a...")
 *
 *  * Reluctantly coded by Satoru Matsushima - https://bibi.epub.link or https://github.com/satorumurmur/bibi
 *  * Released into the public domain under the Unlicense - http://unlicense.org/UNLICENSE
 *
 */
! function(e) {
	var t = {};

	function n(r) {
		if (t[r]) return t[r].exports;
		var o = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
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
			for (var o in e) n.d(r, o, function(t) {
				return e[t]
			}.bind(null, o));
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
	}, n.p = "", n(n.s = 27)
}({
	27: function(e, t) {
		Bibi.x({
			id: "Unaccessibilizer",
			description: "What a...",
			author: "Satoru Matsushima (@satorumurmur)",
			version: "1.2.0"
		})((function() {
			"use strict";
			var e = this,
				t = ["-webkit-", "-moz-", "-ms-", ""];
			E.bind("bibi:postprocessed-item", (function(n) {
				"prevent" == e["select-elements"] && t.forEach((function(e) {
					["user-select", "user-drag"].forEach((function(t) {
						n.Body.style[e + t] = "none"
					}))
				})), "prevent" == e["save-images"] && sML.forEach(n.Body.querySelectorAll("img, svg, image"))((function(e) {
					t.forEach((function(t) {
						["user-select", "user-drag"].forEach((function(n) {
							e.style[t + n] = "none"
						})), O.Touch && (e.style[t + "pointer-events"] = "none")
					})), e.draggable = !1, e.addEventListener("contextmenu", O.preventDefault)
				})), "prevent" == e["use-contextmenu"] && n.contentDocument.addEventListener("contextmenu", O.preventDefault)
			}))
		}))
	}
});