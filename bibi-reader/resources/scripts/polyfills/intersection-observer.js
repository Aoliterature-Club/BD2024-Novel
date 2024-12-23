/*!
 *
 *  # Polyfill for Bibi: IntersectionObserver polyfill
 *
 *  * Consists of:
 *      - IntersectionObserver polyfill : © W3C - https://github.com/w3c/IntersectionObserver / Licensed under the W3C Software and Document License - https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
! function(t) {
	var e = {};

	function n(o) {
		if (e[o]) return e[o].exports;
		var i = e[o] = {
			i: o,
			l: !1,
			exports: {}
		};
		return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
	}
	n.m = t, n.c = e, n.d = function(t, e, o) {
		n.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: o
		})
	}, n.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, n.t = function(t, e) {
		if (1 & e && (t = n(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var o = Object.create(null);
		if (n.r(o), Object.defineProperty(o, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var i in t) n.d(o, i, function(e) {
				return t[e]
			}.bind(null, i));
		return o
	}, n.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return n.d(e, "a", e), e
	}, n.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, n.p = "", n(n.s = 42)
}({
	42: function(t, e, n) {
		"use strict";
		n.r(e);
		n(8)
	},
	8: function(t, e) {
		function n(t) {
			return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}! function() {
			"use strict";
			if ("object" === ("undefined" == typeof window ? "undefined" : n(window)))
				if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var t = function(t) {
							for (var e = window.document, n = r(e); n;) n = r(e = n.ownerDocument);
							return e
						}(),
						e = [],
						o = null,
						i = null;
					u.prototype.THROTTLE_TIMEOUT = 100, u.prototype.POLL_INTERVAL = null, u.prototype.USE_MUTATION_OBSERVER = !0, u._setupCrossOriginUpdater = function() {
						return o || (o = function(t, n) {
							i = t && n ? f(t, n) : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							}, e.forEach((function(t) {
								t._checkForIntersections()
							}))
						}), o
					}, u._resetCrossOriginUpdater = function() {
						o = null, i = null
					}, u.prototype.observe = function(t) {
						if (!this._observationTargets.some((function(e) {
								return e.element == t
							}))) {
							if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: t,
								entry: null
							}), this._monitorIntersections(t.ownerDocument), this._checkForIntersections()
						}
					}, u.prototype.unobserve = function(t) {
						this._observationTargets = this._observationTargets.filter((function(e) {
							return e.element != t
						})), this._unmonitorIntersections(t.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
					}, u.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
					}, u.prototype.takeRecords = function() {
						var t = this._queuedEntries.slice();
						return this._queuedEntries = [], t
					}, u.prototype._initThresholds = function(t) {
						var e = t || [0];
						return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, n) {
							if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return t !== n[e - 1]
						}))
					}, u.prototype._parseRootMargin = function(t) {
						var e = (t || "0px").split(/\s+/).map((function(t) {
							var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
							if (!e) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(e[1]),
								unit: e[2]
							}
						}));
						return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
					}, u.prototype._monitorIntersections = function(e) {
						var n = e.defaultView;
						if (n && -1 == this._monitoringDocuments.indexOf(e)) {
							var o = this._checkForIntersections,
								i = null,
								s = null;
							if (this.POLL_INTERVAL ? i = n.setInterval(o, this.POLL_INTERVAL) : (h(n, "resize", o, !0), h(e, "scroll", o, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in n && (s = new n.MutationObserver(o)).observe(e, {
									attributes: !0,
									childList: !0,
									characterData: !0,
									subtree: !0
								})), this._monitoringDocuments.push(e), this._monitoringUnsubscribes.push((function() {
									var t = e.defaultView;
									t && (i && t.clearInterval(i), c(t, "resize", o, !0)), c(e, "scroll", o, !0), s && s.disconnect()
								})), e != (this.root && this.root.ownerDocument || t)) {
								var u = r(e);
								u && this._monitorIntersections(u.ownerDocument)
							}
						}
					}, u.prototype._unmonitorIntersections = function(e) {
						var n = this._monitoringDocuments.indexOf(e);
						if (-1 != n) {
							var o = this.root && this.root.ownerDocument || t;
							if (!this._observationTargets.some((function(t) {
									var n = t.element.ownerDocument;
									if (n == e) return !0;
									for (; n && n != o;) {
										var i = r(n);
										if ((n = i && i.ownerDocument) == e) return !0
									}
									return !1
								}))) {
								var i = this._monitoringUnsubscribes[n];
								if (this._monitoringDocuments.splice(n, 1), this._monitoringUnsubscribes.splice(n, 1), i(), e != o) {
									var s = r(e);
									s && this._unmonitorIntersections(s.ownerDocument)
								}
							}
						}
					}, u.prototype._unmonitorAllIntersections = function() {
						var t = this._monitoringUnsubscribes.slice(0);
						this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
						for (var e = 0; e < t.length; e++) t[e]()
					}, u.prototype._checkForIntersections = function() {
						if (this.root || !o || i) {
							var t = this._rootIsInDom(),
								e = t ? this._getRootRect() : {
									top: 0,
									bottom: 0,
									left: 0,
									right: 0,
									width: 0,
									height: 0
								};
							this._observationTargets.forEach((function(n) {
								var i = n.element,
									r = l(i),
									u = this._rootContainsTarget(i),
									h = n.entry,
									c = t && u && this._computeTargetAndRootIntersection(i, r, e),
									a = n.entry = new s({
										time: window.performance && performance.now && performance.now(),
										target: i,
										boundingClientRect: r,
										rootBounds: o && !this.root ? null : e,
										intersectionRect: c
									});
								h ? t && u ? this._hasCrossedThreshold(h, a) && this._queuedEntries.push(a) : h && h.isIntersecting && this._queuedEntries.push(a) : this._queuedEntries.push(a)
							}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
						}
					}, u.prototype._computeTargetAndRootIntersection = function(e, n, r) {
						if ("none" != window.getComputedStyle(e).display) {
							for (var s, u, h, c, a, p, g, m, b = n, v = d(e), _ = !1; !_ && v;) {
								var y = null,
									w = 1 == v.nodeType ? window.getComputedStyle(v) : {};
								if ("none" == w.display) return null;
								if (v == this.root || 9 == v.nodeType)
									if (_ = !0, v == this.root || v == t) o && !this.root ? !i || 0 == i.width && 0 == i.height ? (v = null, y = null, b = null) : y = i : y = r;
									else {
										var I = d(v),
											E = I && l(I),
											T = I && this._computeTargetAndRootIntersection(I, E, r);
										E && T ? (v = I, y = f(E, T)) : (v = null, b = null)
									}
								else {
									var R = v.ownerDocument;
									v != R.body && v != R.documentElement && "visible" != w.overflow && (y = l(v))
								}
								if (y && (s = y, u = b, h = void 0, c = void 0, a = void 0, p = void 0, g = void 0, m = void 0, h = Math.max(s.top, u.top), c = Math.min(s.bottom, u.bottom), a = Math.max(s.left, u.left), p = Math.min(s.right, u.right), m = c - h, b = (g = p - a) >= 0 && m >= 0 && {
										top: h,
										bottom: c,
										left: a,
										right: p,
										width: g,
										height: m
									} || null), !b) break;
								v = v && d(v)
							}
							return b
						}
					}, u.prototype._getRootRect = function() {
						var e;
						if (this.root) e = l(this.root);
						else {
							var n = t.documentElement,
								o = t.body;
							e = {
								top: 0,
								left: 0,
								right: n.clientWidth || o.clientWidth,
								width: n.clientWidth || o.clientWidth,
								bottom: n.clientHeight || o.clientHeight,
								height: n.clientHeight || o.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, u.prototype._expandRectByRootMargin = function(t) {
						var e = this._rootMarginValues.map((function(e, n) {
								return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
							})),
							n = {
								top: t.top - e[0],
								right: t.right + e[1],
								bottom: t.bottom + e[2],
								left: t.left - e[3]
							};
						return n.width = n.right - n.left, n.height = n.bottom - n.top, n
					}, u.prototype._hasCrossedThreshold = function(t, e) {
						var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
							o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
						if (n !== o)
							for (var i = 0; i < this.thresholds.length; i++) {
								var r = this.thresholds[i];
								if (r == n || r == o || r < n != r < o) return !0
							}
					}, u.prototype._rootIsInDom = function() {
						return !this.root || p(t, this.root)
					}, u.prototype._rootContainsTarget = function(e) {
						return p(this.root || t, e) && (!this.root || this.root.ownerDocument == e.ownerDocument)
					}, u.prototype._registerInstance = function() {
						e.indexOf(this) < 0 && e.push(this)
					}, u.prototype._unregisterInstance = function() {
						var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
					}, window.IntersectionObserver = u, window.IntersectionObserverEntry = s
				}
			function r(t) {
				try {
					return t.defaultView && t.defaultView.frameElement || null
				} catch (t) {
					return null
				}
			}

			function s(t) {
				this.time = t.time, this.target = t.target, this.rootBounds = a(t.rootBounds), this.boundingClientRect = a(t.boundingClientRect), this.intersectionRect = a(t.intersectionRect || {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					width: 0,
					height: 0
				}), this.isIntersecting = !!t.intersectionRect;
				var e = this.boundingClientRect,
					n = e.width * e.height,
					o = this.intersectionRect,
					i = o.width * o.height;
				this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
			}

			function u(t, e) {
				var n, o, i, r = e || {};
				if ("function" != typeof t) throw new Error("callback must be a function");
				if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
				this._checkForIntersections = (n = this._checkForIntersections.bind(this), o = this.THROTTLE_TIMEOUT, i = null, function() {
					i || (i = setTimeout((function() {
						n(), i = null
					}), o))
				}), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
					return t.value + t.unit
				})).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
			}

			function h(t, e, n, o) {
				"function" == typeof t.addEventListener ? t.addEventListener(e, n, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
			}

			function c(t, e, n, o) {
				"function" == typeof t.removeEventListener ? t.removeEventListener(e, n, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
			}

			function l(t) {
				var e;
				try {
					e = t.getBoundingClientRect()
				} catch (t) {}
				return e ? (e.width && e.height || (e = {
					top: e.top,
					right: e.right,
					bottom: e.bottom,
					left: e.left,
					width: e.right - e.left,
					height: e.bottom - e.top
				}), e) : {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					width: 0,
					height: 0
				}
			}

			function a(t) {
				return !t || "x" in t ? t : {
					top: t.top,
					y: t.top,
					bottom: t.bottom,
					left: t.left,
					x: t.left,
					right: t.right,
					width: t.width,
					height: t.height
				}
			}

			function f(t, e) {
				var n = e.top - t.top,
					o = e.left - t.left;
				return {
					top: n,
					left: o,
					height: e.height,
					width: e.width,
					bottom: n + e.height,
					right: o + e.width
				}
			}

			function p(t, e) {
				for (var n = e; n;) {
					if (n == t) return !0;
					n = d(n)
				}
				return !1
			}

			function d(e) {
				var n = e.parentNode;
				return 9 == e.nodeType && e != t ? r(e) : n && 11 == n.nodeType && n.host ? n.host : n && n.assignedSlot ? n.assignedSlot.parentNode : n
			}
		}()
	}
});