/*!
 *
 *  # Bibi Extension: Sanitizer                                  (℠)
 *
 *  * © Satoru Matsushima - https://bibi.epub.link or https://github.com/satorumurmur/bibi
 *  * Open source under the MIT License - https://github.com/satorumurmur/bibi/blob/master/LICENSE
 *
 *  * Depends on:
 *      - DOMPurify : © Mario Heiderich - https://github.com/cure53/DOMPurify / Dual licensed under the Apache License Version 2.0 or the Mozilla Public License Version 2.0 - https://github.com/cure53/DOMPurify/blob/master/LICENSE
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
	}, n.p = "", n(n.s = 26)
}({
	11: function(e, t, n) {
		var r, o;

		function i(e) {
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}! function(a, l) {
			"object" == i(t) && void 0 !== e ? e.exports = l() : void 0 === (o = "function" == typeof(r = l) ? r.call(t, n, t, e) : r) || (e.exports = o)
		}(0, (function() {
			"use strict";
			var e = Object.hasOwnProperty,
				t = Object.setPrototypeOf,
				n = Object.isFrozen,
				r = Object.keys,
				o = Object.freeze,
				a = Object.seal,
				l = "undefined" != typeof Reflect && Reflect,
				c = l.apply,
				s = l.construct;
			c || (c = function(e, t, n) {
				return e.apply(t, n)
			}), o || (o = function(e) {
				return e
			}), a || (a = function(e) {
				return e
			}), s || (s = function(e, t) {
				return new(Function.prototype.bind.apply(e, [null].concat(function(e) {
					if (Array.isArray(e)) {
						for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
						return n
					}
					return Array.from(e)
				}(t))))
			});
			var u = _(Array.prototype.forEach),
				d = _(Array.prototype.indexOf),
				f = _(Array.prototype.join),
				p = _(Array.prototype.pop),
				m = _(Array.prototype.push),
				y = _(Array.prototype.slice),
				g = _(String.prototype.toLowerCase),
				h = _(String.prototype.match),
				v = _(String.prototype.replace),
				b = _(String.prototype.indexOf),
				T = _(String.prototype.trim),
				A = _(RegExp.prototype.test),
				S = O(RegExp),
				x = O(TypeError);

			function _(e) {
				return function(t) {
					for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
					return c(e, t, r)
				}
			}

			function O(e) {
				return function() {
					for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return s(e, n)
				}
			}

			function E(e, r) {
				t && t(e, null);
				for (var o = r.length; o--;) {
					var i = r[o];
					if ("string" == typeof i) {
						var a = g(i);
						a !== i && (n(r) || (r[o] = a), i = a)
					}
					e[i] = !0
				}
				return e
			}

			function M(t) {
				var n = {},
					r = void 0;
				for (r in t) c(e, t, [r]) && (n[r] = t[r]);
				return n
			}
			var L = o(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
				k = o(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "audio", "canvas", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "video", "view", "vkern"]),
				D = o(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
				R = o(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
				w = o(["#text"]),
				N = o(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]),
				C = o(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
				H = o(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
				z = o(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
				F = a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
				I = a(/<%[\s\S]*|[\s\S]*%>/gm),
				j = a(/^data-[\-\w.\u00B7-\uFFFF]/),
				P = a(/^aria-[\-\w]+$/),
				U = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
				G = a(/^(?:\w+script|data):/i),
				W = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),
				B = "function" == typeof Symbol && "symbol" == i(Symbol.iterator) ? function(e) {
					return i(e)
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : i(e)
				};

			function q(e) {
				if (Array.isArray(e)) {
					for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
					return n
				}
				return Array.from(e)
			}
			var V = function() {
					return "undefined" == typeof window ? null : window
				},
				K = function(e, t) {
					if ("object" !== (void 0 === e ? "undefined" : B(e)) || "function" != typeof e.createPolicy) return null;
					var n = null;
					t.currentScript && t.currentScript.hasAttribute("data-tt-policy-suffix") && (n = t.currentScript.getAttribute("data-tt-policy-suffix"));
					var r = "dompurify" + (n ? "#" + n : "");
					try {
						return e.createPolicy(r, {
							createHTML: function(e) {
								return e
							}
						})
					} catch (e) {
						return console.warn("TrustedTypes policy " + r + " could not be created."), null
					}
				};
			return function e() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V(),
					n = function(t) {
						return e(t)
					};
				if (n.version = "2.0.12", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
				var i = t.document,
					a = !1,
					l = t.document,
					c = t.DocumentFragment,
					s = t.HTMLTemplateElement,
					_ = t.Node,
					O = t.NodeFilter,
					Y = t.NamedNodeMap,
					$ = void 0 === Y ? t.NamedNodeMap || t.MozNamedAttrMap : Y,
					X = t.Text,
					J = t.Comment,
					Q = t.DOMParser,
					Z = t.trustedTypes;
				if ("function" == typeof s) {
					var ee = l.createElement("template");
					ee.content && ee.content.ownerDocument && (l = ee.content.ownerDocument)
				}
				var te = K(Z, i),
					ne = te && Ce ? te.createHTML("") : "",
					re = l,
					oe = re.implementation,
					ie = re.createNodeIterator,
					ae = re.getElementsByTagName,
					le = re.createDocumentFragment,
					ce = i.importNode,
					se = {};
				n.isSupported = oe && void 0 !== oe.createHTMLDocument && 9 !== l.documentMode;
				var ue = F,
					de = I,
					fe = j,
					pe = P,
					me = G,
					ye = W,
					ge = U,
					he = null,
					ve = E({}, [].concat(q(L), q(k), q(D), q(R), q(w))),
					be = null,
					Te = E({}, [].concat(q(N), q(C), q(H), q(z))),
					Ae = null,
					Se = null,
					xe = !0,
					_e = !0,
					Oe = !1,
					Ee = !1,
					Me = !1,
					Le = !1,
					ke = !1,
					De = !1,
					Re = !1,
					we = !1,
					Ne = !1,
					Ce = !1,
					He = !0,
					ze = !0,
					Fe = !1,
					Ie = {},
					je = E({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
					Pe = null,
					Ue = E({}, ["audio", "video", "img", "source", "image", "track"]),
					Ge = null,
					We = E({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
					Be = null,
					qe = l.createElement("form"),
					Ve = function(e) {
						Be && Be === e || (e && "object" === (void 0 === e ? "undefined" : B(e)) || (e = {}), he = "ALLOWED_TAGS" in e ? E({}, e.ALLOWED_TAGS) : ve, be = "ALLOWED_ATTR" in e ? E({}, e.ALLOWED_ATTR) : Te, Ge = "ADD_URI_SAFE_ATTR" in e ? E(M(We), e.ADD_URI_SAFE_ATTR) : We, Pe = "ADD_DATA_URI_TAGS" in e ? E(M(Ue), e.ADD_DATA_URI_TAGS) : Ue, Ae = "FORBID_TAGS" in e ? E({}, e.FORBID_TAGS) : {}, Se = "FORBID_ATTR" in e ? E({}, e.FORBID_ATTR) : {}, Ie = "USE_PROFILES" in e && e.USE_PROFILES, xe = !1 !== e.ALLOW_ARIA_ATTR, _e = !1 !== e.ALLOW_DATA_ATTR, Oe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ee = e.SAFE_FOR_JQUERY || !1, Me = e.SAFE_FOR_TEMPLATES || !1, Le = e.WHOLE_DOCUMENT || !1, Re = e.RETURN_DOM || !1, we = e.RETURN_DOM_FRAGMENT || !1, Ne = e.RETURN_DOM_IMPORT || !1, Ce = e.RETURN_TRUSTED_TYPE || !1, De = e.FORCE_BODY || !1, He = !1 !== e.SANITIZE_DOM, ze = !1 !== e.KEEP_CONTENT, Fe = e.IN_PLACE || !1, ge = e.ALLOWED_URI_REGEXP || ge, Me && (_e = !1), we && (Re = !0), Ie && (he = E({}, [].concat(q(w))), be = [], !0 === Ie.html && (E(he, L), E(be, N)), !0 === Ie.svg && (E(he, k), E(be, C), E(be, z)), !0 === Ie.svgFilters && (E(he, D), E(be, C), E(be, z)), !0 === Ie.mathMl && (E(he, R), E(be, H), E(be, z))), e.ADD_TAGS && (he === ve && (he = M(he)), E(he, e.ADD_TAGS)), e.ADD_ATTR && (be === Te && (be = M(be)), E(be, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && E(Ge, e.ADD_URI_SAFE_ATTR), ze && (he["#text"] = !0), Le && E(he, ["html", "head", "body"]), he.table && (E(he, ["tbody"]), delete Ae.tbody), o && o(e), Be = e)
					},
					Ke = function(e) {
						m(n.removed, {
							element: e
						});
						try {
							e.parentNode.removeChild(e)
						} catch (t) {
							e.outerHTML = ne
						}
					},
					Ye = function(e, t) {
						try {
							m(n.removed, {
								attribute: t.getAttributeNode(e),
								from: t
							})
						} catch (e) {
							m(n.removed, {
								attribute: null,
								from: t
							})
						}
						t.removeAttribute(e)
					},
					$e = function(e) {
						var t = void 0,
							n = void 0;
						if (De) e = "<remove></remove>" + e;
						else {
							var r = h(e, /^[\r\n\t ]+/);
							n = r && r[0]
						}
						var o = te ? te.createHTML(e) : e;
						try {
							t = (new Q).parseFromString(o, "text/html")
						} catch (e) {}
						if (a && E(Ae, ["title"]), !t || !t.documentElement) {
							var i = (t = oe.createHTMLDocument("")).body;
							i.parentNode.removeChild(i.parentNode.firstElementChild), i.outerHTML = o
						}
						return e && n && t.body.insertBefore(l.createTextNode(n), t.body.childNodes[0] || null), ae.call(t, Le ? "html" : "body")[0]
					};
				n.isSupported && function() {
					try {
						var e = $e("<x/><title>&lt;/title&gt;&lt;img&gt;");
						A(/<\/title/, e.querySelector("title").innerHTML) && (a = !0)
					} catch (e) {}
				}();
				var Xe = function(e) {
						return ie.call(e.ownerDocument || e, e, O.SHOW_ELEMENT | O.SHOW_COMMENT | O.SHOW_TEXT, (function() {
							return O.FILTER_ACCEPT
						}), !1)
					},
					Je = function(e) {
						return !(e instanceof X || e instanceof J || "string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof $ && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute && "string" == typeof e.namespaceURI)
					},
					Qe = function(e) {
						return "object" === (void 0 === _ ? "undefined" : B(_)) ? e instanceof _ : e && "object" === (void 0 === e ? "undefined" : B(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
					},
					Ze = function(e, t, r) {
						se[e] && u(se[e], (function(e) {
							e.call(n, t, r, Be)
						}))
					},
					et = function(e) {
						var t = void 0;
						if (Ze("beforeSanitizeElements", e, null), Je(e)) return Ke(e), !0;
						var r = g(e.nodeName);
						if (Ze("uponSanitizeElement", e, {
								tagName: r,
								allowedTags: he
							}), ("svg" === r || "math" === r) && 0 !== e.querySelectorAll("p, br").length) return Ke(e), !0;
						if (!he[r] || Ae[r]) {
							if (ze && !je[r] && "function" == typeof e.insertAdjacentHTML) try {
								var o = e.innerHTML;
								e.insertAdjacentHTML("AfterEnd", te ? te.createHTML(o) : o)
							} catch (e) {}
							return Ke(e), !0
						}
						return "noscript" === r && A(/<\/noscript/i, e.innerHTML) || "noembed" === r && A(/<\/noembed/i, e.innerHTML) ? (Ke(e), !0) : (!Ee || e.firstElementChild || e.content && e.content.firstElementChild || !A(/</g, e.textContent) || (m(n.removed, {
							element: e.cloneNode()
						}), e.innerHTML ? e.innerHTML = v(e.innerHTML, /</g, "&lt;") : e.innerHTML = v(e.textContent, /</g, "&lt;")), Me && 3 === e.nodeType && (t = e.textContent, t = v(t, ue, " "), t = v(t, de, " "), e.textContent !== t && (m(n.removed, {
							element: e.cloneNode()
						}), e.textContent = t)), Ze("afterSanitizeElements", e, null), !1)
					},
					tt = function(e, t, n) {
						if (He && ("id" === t || "name" === t) && (n in l || n in qe)) return !1;
						if (_e && A(fe, t));
						else if (xe && A(pe, t));
						else {
							if (!be[t] || Se[t]) return !1;
							if (Ge[t]);
							else if (A(ge, v(n, ye, "")));
							else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== b(n, "data:") || !Pe[e])
								if (Oe && !A(me, v(n, ye, "")));
								else if (n) return !1
						}
						return !0
					},
					nt = function(e) {
						var t = void 0,
							o = void 0,
							i = void 0,
							a = void 0,
							l = void 0;
						Ze("beforeSanitizeAttributes", e, null);
						var c = e.attributes;
						if (c) {
							var s = {
								attrName: "",
								attrValue: "",
								keepAttr: !0,
								allowedAttributes: be
							};
							for (l = c.length; l--;) {
								var u = t = c[l],
									m = u.name,
									h = u.namespaceURI;
								if (o = T(t.value), i = g(m), s.attrName = i, s.attrValue = o, s.keepAttr = !0, s.forceKeepAttr = void 0, Ze("uponSanitizeAttribute", e, s), o = s.attrValue, !s.forceKeepAttr) {
									if ("name" === i && "IMG" === e.nodeName && c.id) a = c.id, c = y(c, []), Ye("id", e), Ye(m, e), d(c, a) > l && e.setAttribute("id", a.value);
									else {
										if ("INPUT" === e.nodeName && "type" === i && "file" === o && s.keepAttr && (be[i] || !Se[i])) continue;
										"id" === m && e.setAttribute(m, ""), Ye(m, e)
									}
									if (s.keepAttr)
										if (Ee && A(/\/>/i, o)) Ye(m, e);
										else if (A(/svg|math/i, e.namespaceURI) && A(S("</(" + f(r(je), "|") + ")", "i"), o)) Ye(m, e);
									else {
										Me && (o = v(o, ue, " "), o = v(o, de, " "));
										var b = e.nodeName.toLowerCase();
										if (tt(b, i, o)) try {
											h ? e.setAttributeNS(h, m, o) : e.setAttribute(m, o), p(n.removed)
										} catch (e) {}
									}
								}
							}
							Ze("afterSanitizeAttributes", e, null)
						}
					},
					rt = function e(t) {
						var n = void 0,
							r = Xe(t);
						for (Ze("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) Ze("uponSanitizeShadowNode", n, null), et(n) || (n.content instanceof c && e(n.content), nt(n));
						Ze("afterSanitizeShadowDOM", t, null)
					};
				return n.sanitize = function(e, r) {
					var o = void 0,
						a = void 0,
						l = void 0,
						s = void 0,
						u = void 0;
					if (e || (e = "\x3c!--\x3e"), "string" != typeof e && !Qe(e)) {
						if ("function" != typeof e.toString) throw x("toString is not a function");
						if ("string" != typeof(e = e.toString())) throw x("dirty is not a string, aborting")
					}
					if (!n.isSupported) {
						if ("object" === B(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
							if ("string" == typeof e) return t.toStaticHTML(e);
							if (Qe(e)) return t.toStaticHTML(e.outerHTML)
						}
						return e
					}
					if (ke || Ve(r), n.removed = [], "string" == typeof e && (Fe = !1), Fe);
					else if (e instanceof _) 1 === (a = (o = $e("\x3c!--\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === a.nodeName || "HTML" === a.nodeName ? o = a : o.appendChild(a);
					else {
						if (!Re && !Me && !Le && -1 === e.indexOf("<")) return te && Ce ? te.createHTML(e) : e;
						if (!(o = $e(e))) return Re ? null : ne
					}
					o && De && Ke(o.firstChild);
					for (var d = Xe(Fe ? e : o); l = d.nextNode();) 3 === l.nodeType && l === s || et(l) || (l.content instanceof c && rt(l.content), nt(l), s = l);
					if (s = null, Fe) return e;
					if (Re) {
						if (we)
							for (u = le.call(o.ownerDocument); o.firstChild;) u.appendChild(o.firstChild);
						else u = o;
						return Ne && (u = ce.call(i, u, !0)), u
					}
					var f = Le ? o.outerHTML : o.innerHTML;
					return Me && (f = v(f, ue, " "), f = v(f, de, " ")), te && Ce ? te.createHTML(f) : f
				}, n.setConfig = function(e) {
					Ve(e), ke = !0
				}, n.clearConfig = function() {
					Be = null, ke = !1
				}, n.isValidAttribute = function(e, t, n) {
					Be || Ve({});
					var r = g(e),
						o = g(t);
					return tt(r, o, n)
				}, n.addHook = function(e, t) {
					"function" == typeof t && (se[e] = se[e] || [], m(se[e], t))
				}, n.removeHook = function(e) {
					se[e] && p(se[e])
				}, n.removeHooks = function(e) {
					se[e] && (se[e] = [])
				}, n.removeAllHooks = function() {
					se = {}
				}, n
			}()
		}))
	},
	26: function(e, t, n) {
		"use strict";
		n.r(t);
		var r = n(11),
			o = n.n(r);
		Bibi.x({
			id: "Sanitizer",
			description: "Content Sanitizer.",
			author: "Satoru Matsushima (@satorumurmur)",
			version: "1.2.0"
		})((function() {
			O.sanitizeItemSource = function(e, t) {
				if (e && "string" == typeof e.Content && t && "string" == typeof t.As) {
					var n = O.sanitizeItemSource.Settings[t.As];
					if (n) return !(r = n.preprocess) || r(e), e.Content = o.a.sanitize(e.Content, n.Options),
						function(t) {
							!t || t(e)
						}(n.postprocess), e.Content
				}
				var r, i = "Sanitizer: Invalid Arguments.";
				throw I.note(i, 99999999999, "ERROR"), O.error(i), new Error(i)
			}, O.sanitizeItemSource.Settings = {
				HTML: {
					Options: {
						WHOLE_DOCUMENT: !0,
						ADD_TAGS: ["link", "meta"],
						ADD_ATTR: ["xmlns", "xmlns:epub", "charset", "http-equiv", "content"]
					},
					postprocess: function(e) {
						return e.Content = e.Content.replace(/(<head[\s>])/, "\n$1").replace(/(<\/body>)/, "$1\n")
					}
				},
				SVG: {}
			}
		}))
	}
});