/*!
 *
 *  # Bibi Extension: Analytics                                  (℠)
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
	}, n.p = "", n(n.s = 16)
}({
	16: function(e, t) {
		Bibi.x({
			id: "Analytics",
			description: "Utilities for Tracking and Logging with Google Analytics.",
			author: "Satoru Matsushima (@satorumurmur)",
			version: "1.2.0-demo"
		})((function() {
			"use strict";
			var e, t, n, i, r, a;
			"string" == typeof this["tracking-id"] && this["tracking-id"] && (e = window, t = document, n = "script", i = "ga", e.GoogleAnalyticsObject = i, e.ga = e.ga || function() {
				(e.ga.q = e.ga.q || []).push(arguments)
			}, e.ga.l = 1 * new Date, r = t.createElement(n), a = t.getElementsByTagName(n)[0], r.async = 1, r.src = "//www.google-analytics.com/analytics.js", a.parentNode.insertBefore(r, a), ga("create", this["tracking-id"], "auto", {
				allowLinker: !0
			}), ga("require", "linker"), ga("linker:autoLink", S["trustworthy-origins"].reduce((function(e, t) {
				return e.push(t.replace(/^\w+:\/\//, ""))
			}), [])), E.add("bibi:loaded-navigation", (function() {
				return sML.forEach(I.Panel.BookInfo.Navigation.querySelectorAll("a"))((function(e) {
					return e.addEventListener("click", (function() {
						ga("send", {
							hitType: "event",
							eventCategory: "Bibi: Jumped by Navigation",
							eventAction: B.Path,
							eventLabel: e.innerHTML.replace(/<[^>]*>/g, "") + ' - "'.concat(e.getAttribute("data-bibi-original-href"), '"'),
							eventValue: void 0
						})
					}))
				}))
			})), E.add("bibi:played:by-button", (function() {
				ga("send", {
					hitType: "event",
					eventCategory: "Bibi: Played by Button",
					eventAction: B.Path,
					eventLabel: S["parent-uri"] ? "on: " + S["parent-uri"].replace(/#.+$/, "") : "",
					eventValue: void 0
				})
			})), E.add("bibi:scrolled", (function() {
				if (100 != R.Current.Percent) return !1;
				ga("send", {
					hitType: "event",
					eventCategory: "Bibi: Read Through",
					eventAction: B.Path,
					eventLabel: Date.now() - Bibi.TimeOrigin,
					eventValue: void 0
				})
			})))
		}))
	}
});