(this.webpackJsonp=this.webpackJsonp||[]).push([[4,5,10,16,26,27,28],{426:function(t,n,e){},427:function(t,n,e){},428:function(t,n,e){},432:function(t,n,e){},433:function(t,n,e){},439:function(t,n,e){"use strict";var o=e(426);e.n(o).a},440:function(t,n,e){"use strict";var o=e(427);e.n(o).a},441:function(t,n,e){"use strict";var o=e(428);e.n(o).a},442:function(t,n,e){},445:function(t,n,e){"use strict";e.r(n);var o={name:"CmpE",inject:{theme:{default:function(){return{}}}}},r=(e(440),e(1)),c=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"CmpE"},[n("h3",[this._v("E组件")]),this._v(" "),n("p",{style:{color:this.theme.color}},[this._v(this._s(this.theme.color))])])}),[],!1,null,"f692a20a",null);n.default=c.exports},446:function(t,n,e){"use strict";e.r(n);var o={name:"CmpF",inject:{theme:{default:function(){return{}}}},methods:{handleClick:function(){this.theme.changeColor(this.theme.randomRGB())}}},r=(e(441),e(1)),c=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"CmpF"},[e("h3",[t._v("F组件")]),t._v(" "),e("p",{style:{color:t.theme.color}},[t._v(t._s(t.theme.color))]),t._v(" "),e("el-button",{attrs:{type:"warning"},on:{click:t.handleClick}},[t._v("点我传递数据给祖父组件")])],1)}),[],!1,null,"dedecda4",null);n.default=c.exports},447:function(t,n,e){"use strict";e.r(n);var o={name:"CmpD",inject:["theme"]},r=(e(439),e(1)),c=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"CmpD"},[n("h3",[this._v("D组件")]),this._v(" "),n("p",{style:{color:this.theme.color}},[this._v(this._s(this.theme.color))])])}),[],!1,null,"66f708d4",null);n.default=c.exports},451:function(t,n,e){"use strict";var o=e(432);e.n(o).a},452:function(t,n,e){"use strict";var o=e(433);e.n(o).a},458:function(t,n,e){"use strict";e.r(n);var o={name:"CmpC",components:{CmpF:e(446).default}},r=(e(452),e(1)),c=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"CmpC"},[n("h3",[this._v("C组件")]),this._v(" "),n("cmp-f")],1)}),[],!1,null,"6903876c",null);n.default=c.exports},462:function(t,n,e){"use strict";e.r(n);var o=e(447),r=e(445),c={name:"CmpB",components:{CmpD:o.default,CmpE:r.default}},s=(e(451),e(1)),a=Object(s.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"CmpB"},[n("h3",[this._v("B组件")]),this._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("div",{staticClass:"grid-content bg-purple"},[n("cmp-d")],1)]),this._v(" "),n("el-col",{attrs:{span:12}},[n("div",{staticClass:"grid-content bg-purple"},[n("cmp-e")],1)])],1)],1)}),[],!1,null,"7449af86",null);n.default=a.exports},481:function(t,n,e){"use strict";var o=e(442);e.n(o).a},482:function(t,n,e){},504:function(t,n,e){"use strict";e.r(n);var o=e(462),r=e(458),c={name:"Provid",data:function(){return{color:"rgb(0, 0, 0)"}},provide:function(){return{theme:this}},components:{CmpB:o.default,CmpC:r.default},methods:{changeColor:function(t){/^rgb/.test(t)?(console.log(t),this.color=t):this.color=this.randomRGB()},randomRGB:function(){var t=Math.floor(256*Math.random()),n=Math.floor(256*Math.random()),e=Math.floor(256*Math.random());return"rgb(".concat(t,", ").concat(n,", ").concat(e,")")}}},s=(e(481),e(1)),a=Object(s.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"provide"},[e("h3",[t._v("A组件-我是响应式的哦！")]),t._v(" "),e("p",{style:{color:t.color}},[t._v(t._s(t.color))]),t._v(" "),e("el-button",{attrs:{type:"success"},on:{click:t.changeColor}},[t._v("点我改变颜色")]),t._v(" "),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("div",{staticClass:"grid-content bg-purple"},[e("cmp-b")],1)]),t._v(" "),e("el-col",{attrs:{span:12}},[e("div",{staticClass:"grid-content bg-purple"},[e("cmp-c")],1)])],1)],1)}),[],!1,null,"606b84ae",null);n.default=a.exports},586:function(t,n,e){"use strict";var o=e(482);e.n(o).a},623:function(t,n,e){"use strict";e.r(n);var o={computed:{codeStr:function(){return"".concat('\x3c!-- A.vue --\x3e\n<template>\n<div class="provide">\n    <h3>A组件-我是响应式的哦！</h3>\n    <p :style="{color: color}">{{ color }}</p>\n    <el-button type="success" @click="changeColor">点我改变颜色</el-button>\n    <el-row :gutter="20">\n        <el-col :span="12">\n            <div class="grid-content bg-purple">\n                <cmp-b />\n            </div>\n        </el-col>\n        <el-col :span="12">\n            <div class="grid-content bg-purple">\n                <cmp-c />\n            </div>\n        </el-col>\n    </el-row>   \n</div>\n</template>\n\n<script>\nimport CmpB from \'./components/CmpB\'\nimport CmpC from \'./components/CmpC\'\nexport default {\n    name: \'Provid\',\n    data () {\n        return {\n            color: \'rgb(0, 0, 0)\'\n        }\n    },\n    provide () {\n        return {\n            theme: this\n        }\n    },\n    components: {\n        CmpB,\n        CmpC\n    },\n    methods: {\n        changeColor (v) {\n            const REG = /^rgb/\n            if (REG.test(v) ) {\n                console.log(v)\n                this.color = v\n            } else {\n                this.color = this.randomRGB()\n            }\n        },\n        // rgb颜色随机\n        randomRGB () {\n            var r = Math.floor(Math.random() * 256)\n            var g = Math.floor(Math.random() * 256)\n            var b = Math.floor(Math.random() * 256)\n            var rgb = `rgb(${r}, ${g}, ${b})`\n            return rgb\n        }\n    }\n}\n<\/script>\n\n<style lang="less" scoped>\n.provide {\n    padding: 20px;\n    text-align: center;\n    > div {\n        background-color: pink;\n        padding: 20px;\n        border-radius: 3px;\n        text-align: center;\n    }\n    h3 {\n        margin-bottom: 10px;\n    }\n    .el-button {\n        margin-bottom: 15px;\n    }\n    p {\n        font-weight: 700;\n    }\n    /deep/ div {\n        border-radius: 3px;\n        text-align: center;\n        h3 {\n            margin-bottom: 10px;\n        }\n        p {\n            font-weight: 700;\n        }\n    }\n}\n</style>\n',"\n").concat('\x3c!-- F.vue --\x3e\n<template>\n<div class="CmpF">\n    <h3>F组件</h3>\n    <p :style="{color: theme.color}">{{ theme.color }}</p>\n    <el-button type="warning" @click="handleClick">点我传递数据给祖父组件</el-button>\n</div>\n</template>\n\n<script>\nexport default {\n    name: \'CmpF\',\n    inject: {\n        theme: {\n            default: () =>({})\n        }\n    },\n    methods: {\n        handleClick () {\n            this.theme.changeColor(this.theme.randomRGB())\n        }\n    }\n}\n<\/script>\n\n<style lang="less" scoped>\n.CmpF {\n    background-color: #ccc;\n    height: 150px;\n    padding: 20px;\n}\n</style>\n')}},components:{Provide:e(504).default}},r=(e(586),e(1)),c=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"Provid"},[e("code-block",[e("provide",{staticClass:"view",attrs:{slot:"view"},slot:"view"}),t._v(" "),e("div",{attrs:{slot:"explain"},slot:"explain"},[e("p",[t._v("\n                    这个例子通过祖辈组件的"),e("code-box",[t._v("provide")]),t._v("return出"),e("code-box",[t._v("this")]),t._v("对象，\n                    孙组件可以通过"),e("code-box",[t._v("inject")]),t._v("中拿到祖辈组件的"),e("code-box",[t._v("this")]),t._v("对象，这样就可以实现数据响应式\n                ")],1)]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.codeStr,expression:"codeStr"}],staticClass:"code_area",attrs:{slot:"code"},slot:"code"},[t._v("                "),e("code",{staticClass:"html"}),t._v("\n            ")])],1)],1)}),[],!1,null,"744f6a76",null);n.default=c.exports}}]);