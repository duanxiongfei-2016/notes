(this.webpackJsonp=this.webpackJsonp||[]).push([[24],{431:function(t,n,s){},450:function(t,n,s){"use strict";var e=s(431);s.n(e).a},459:function(t,n,s){"use strict";s.r(n);var e={data:function(){return{num:0}},created:function(){this.$bus.on("add",this.getBrotherCount)},methods:{getBrotherCount:function(t){this.num=t},destroy:function(){console.log("add方法被注销了！")}},destroyed:function(){this.$bus.off("add",this.destroy)}},i=(s(450),s(1)),o=Object(i.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("p",[this._v("我是二师兄")]),this._v(" "),n("p",[this._v(this._s(this.num))])])}),[],!1,null,"251aac53",null);n.default=o.exports}}]);