(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{393:function(t,e,n){},412:function(t,e,n){"use strict";var a=n(393);n.n(a).a},423:function(t,e,n){"use strict";n.r(e);n(105);var a={name:"child",model:{prop:"val",event:"update"},props:{val:{required:!1,default:"",type:Number}},computed:{spanVal:{get:function(){return this.val},set:function(t){this.$emit("update",t)}}},methods:{handleClick:function(){this.spanVal+=1}}},c=(n(412),n(2)),s=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"child"},[n("h4",[t._v("I'm child Component")]),t._v(" "),n("h1",{staticStyle:{color:"#5cbb7a",border:"none"}},[t._v(t._s(t.spanVal))]),t._v(" "),n("el-button",{attrs:{type:"success"},on:{click:t.handleClick}},[t._v("点我 +1")])],1)}),[],!1,null,"dfa2f0fc",null);e.default=s.exports}}]);