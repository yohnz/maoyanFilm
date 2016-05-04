require = function e(t, s, a) {
	function r(n, o) {
		if (!s[n]) {
			if (!t[n]) {
				var i = "function" == typeof require && require;
				if (!o && i) return i(n, !0);
				if (l) return l(n, !0);
				var u = new Error("Cannot find module '" + n + "'");
				throw u.code = "MODULE_NOT_FOUND",
				u
			}
			var c = s[n] = {
				exports: {}
			};
			t[n][0].call(c.exports,
			function(e) {
				var s = t[n][1][e];
				return r(s ? s: e)
			},
			c, c.exports, e, t, s, a)
		}
		return s[n].exports
	}
	for (var l = "function" == typeof require && require,
	n = 0; n < a.length; n++) r(a[n]);
	return r
} ({
	90 : [function(e, t, s) {
		"use strict";
		var a = e("babel-runtime/helpers/get")["default"],
		r = e("babel-runtime/helpers/inherits")["default"],
		l = e("babel-runtime/helpers/create-class")["default"],
		n = e("babel-runtime/helpers/class-call-check")["default"],
		o = e("babel-runtime/helpers/extends")["default"],
		i = e("babel-runtime/helpers/interop-require-default")["default"];
		Object.defineProperty(s, "__esModule", {
			value: !0
		});
		var u = e("react"),
		c = i(u),
		m = e("react-dom"),
		f = (i(m), e("superagent")),
		d = i(f),
		p = e("../page"),
		h = i(p),
		b = e("../components/Layout/Layout.jsx"),
		v = i(b),
		y = e("../components/Comment/Comment.jsx"),
		x = i(y),
		E = e("../components/ListView/ListView.jsx"),
		j = i(E),
		L = e("../components/ListView/ListViewItem.jsx"),
		w = i(L),
		g = e("../components/InfiniteScroll/InfiniteScroll.jsx"),
		M = i(g),
		q = function(e) {
			function t(e) {
				n(this, s),
				a(Object.getPrototypeOf(s.prototype), "constructor", this).call(this, e),
				this.state = {
					hasMore: !0,
					items: [],
					offset: 0,
					limit: 15
				}
			}
			r(t, e),
			l(t, [{
				key: "loadMore",
				value: function(e) {
					var t = this;
					d["default"].get("/mmdb/comments/movie/" + this.props.movie.id + ".json").query({
						_v_: "yes",
						offset: this.state.offset * this.state.limit
					}).end(function(e, s) {
						t.setState({
							items: t.state.items.concat(s.body.cmts),
							hasMore: (t.state.offset + 1) * t.state.limit < t.props.comments.total,
							offset: t.state.offset + 1
						})
					})
				}
			},
			{
				key: "render",
				value: function() {
					var e = this.props,
					t = e.comments,
					s = e.user;
					return c["default"].createElement(v["default"], o({
						className: "pg-comments"
					},
					this.props), c["default"].createElement("h4", null, c["default"].createElement("i", {
						className: "hots-icon"
					}), "热门短评"), c["default"].createElement(j["default"], {
						className: "list-view-styled"
					},
					t && t.hcmts && t.hcmts.map(function(e, t) {
						return c["default"].createElement(w["default"], {
							key: t
						},
						c["default"].createElement(x["default"], {
							comment: e,
							user: s
						}))
					})), c["default"].createElement("h4", null, c["default"].createElement("i", {
						className: "lastest-icon"
					}), "最新短评"), c["default"].createElement(j["default"], {
						className: "list-view-styled"
					},
					c["default"].createElement(M["default"], {
						loader: c["default"].createElement("div", {
							className: "loader"
						},
						"加载中 ..."),
						loadMore: this.loadMore.bind(this),
						hasMore: this.state.hasMore
					},
					this.state.items.map(function(e, t) {
						return c["default"].createElement(w["default"], {
							key: t
						},
						c["default"].createElement(x["default"], {
							comment: e,
							user: s
						}))
					}))))
				}
			}]);
			var s = t;
			return t = (0, p.style)(v["default"], x["default"], j["default"], w["default"])(t) || t,
			t = (0, p.page)(t) || t
		} (h["default"]);
		s["default"] = q,
		t.exports = s["default"]
	},
	{
		"../components/Comment/Comment.jsx": 13,
		"../components/InfiniteScroll/InfiniteScroll.jsx": 28,
		"../components/Layout/Layout.jsx": 31,
		"../components/ListView/ListView.jsx": 34,
		"../components/ListView/ListViewItem.jsx": 35,
		"../page": 74,
		"babel-runtime/helpers/class-call-check": 187,
		"babel-runtime/helpers/create-class": 188,
		"babel-runtime/helpers/extends": 190,
		"babel-runtime/helpers/get": 191,
		"babel-runtime/helpers/inherits": 192,
		"babel-runtime/helpers/interop-require-default": 193,
		react: 558,
		"react-dom": 395,
		superagent: 559
	}]
},
{},
[90]);