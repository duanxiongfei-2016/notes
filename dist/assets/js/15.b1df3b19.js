(window.webpackJsonp=window.webpackJsonp||[]).push([[15,22],{422:function(t,s,n){},426:function(t,s,n){},433:function(t,s,n){"use strict";var e=n(422);n.n(e).a},441:function(t,s,n){"use strict";n.r(s);var e=["我爸是李刚","先定个小目标，比如挣它一个亿","好久不见，你在哪里","老同学，今天看见你发现又变漂亮了","兄弟，好久不见，好不容易才找到你","如果有一天我下去了，我一定会上来找你的","你头像看起来气质很不错，可以认识一下吗","很高兴认识你，我觉得这是我今天最大的幸运","你说说，现在的天气，自来水都可以直接泡方便面","你好，今天看见你就觉得缘分，结果上来就搜到了","妞，我又没有传染病你老躲着我干嘛啊，再聊会呗","我要让全世界的人知道，你这个磨人的小妖精被我承包了"],a=function(){var t,s,n=(t=0,s=11,Math.floor(Math.random()*(s-t)+t));return e[n]},c={name:"CmpC",inheritAttrs:!1,data:function(){return{msg:null}},created:function(){this.msg=a()},methods:{handleClick:function(){this.msg=a(),this.$emit("update",this.msg)}}},r=(n(433),n(1)),i=Object(r.a)(c,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"CmpC"},[n("h4",[t._v("我是C组件")]),t._v(" "),n("p",[t._v("C组件的$attrs: "),n("span",{staticStyle:{color:"#00f"}},[t._v(t._s(t.$attrs.msg))])]),t._v(" "),n("p",[t._v("C组件的msg: "),n("span",{staticStyle:{color:"#00f"}},[t._v(t._s(t.msg))])]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleClick}},[t._v("click me send msg to CmpA")])],1)}),[],!1,null,"56ca2c62",null);s.default=i.exports},445:function(t,s,n){"use strict";var e=n(426);n.n(e).a},457:function(t,s,n){"use strict";n.r(s);var e={name:"CmpB",inheritAttrs:!1,components:{CmpC:n(441).default}},a=(n(445),n(1)),c=Object(a.a)(e,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"CmpB"},[n("h4",[t._v("我是B组件")]),t._v(" "),n("p",[t._v("B组件的$attrs: "),n("span",{staticStyle:{color:"#00f"}},[t._v(t._s(t.$attrs.msg))])]),t._v(" "),n("cmp-c",t._g(t._b({},"cmp-c",t.$attrs,!1),t.$listeners))],1)}),[],!1,null,"1b34b522",null);s.default=c.exports}}]);