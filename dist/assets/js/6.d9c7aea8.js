(this.webpackJsonp=this.webpackJsonp||[]).push([[6,9,23,24],{430:function(n,t,e){},431:function(n,t,e){},438:function(n,t,e){},449:function(n,t,e){"use strict";var s=e(430);e.n(s).a},450:function(n,t,e){"use strict";var s=e(431);e.n(s).a},459:function(n,t,e){"use strict";e.r(t);var s={data:function(){return{num:0}},created:function(){this.$bus.on("add",this.getBrotherCount)},methods:{getBrotherCount:function(n){this.num=n},destroy:function(){console.log("add方法被注销了！")}},destroyed:function(){this.$bus.off("add",this.destroy)}},i=(e(450),e(1)),o=Object(i.a)(s,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("p",[this._v("我是二师兄")]),this._v(" "),t("p",[this._v(this._s(this.num))])])}),[],!1,null,"251aac53",null);t.default=o.exports},460:function(n,t,e){"use strict";e.r(t);var s={data:function(){return{count:0}},methods:{handleClick:function(){this.count+=1,this.$bus.emit("add",this.count)}}},i=(e(449),e(1)),o=Object(i.a)(s,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("p",[this._v("我是大师兄 "),t("span",[this._v("count: "+this._s(this.count))])]),this._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:this.handleClick}},[this._v("点我将数据传给二师兄")])],1)}),[],!1,null,"7f1a6367",null);t.default=o.exports},478:function(n,t,e){"use strict";var s=e(438);e.n(s).a},479:function(n,t,e){},503:function(n,t,e){"use strict";e.r(t);var s=e(460),i=e(459),o={data:function(){return{}},components:{BrotherA:s.default,BrotherB:i.default}},c=(e(478),e(1)),a=Object(c.a)(o,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"box"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:12}},[t("div",{staticClass:"grid-content bg-purple"},[t("brother-a")],1)]),this._v(" "),t("el-col",{attrs:{span:12}},[t("div",{staticClass:"grid-content bg-purple"},[t("brother-b")],1)])],1)],1)}),[],!1,null,"e9160a4a",null);t.default=a.exports},578:function(n,t,e){"use strict";var s=e(479);e.n(s).a},621:function(n,t,e){"use strict";e.r(t);var s={computed:{codeStr:function(){return"".concat("// plugin.js 这里将bus作为插件的形式全局引入，一个页面 一个页面的引入又太麻烦\nimport filters from '../fliters';\n\nexport default {\n  install(Vue, options) {\n    // // 1. 添加全局方法或属性\n    // Vue.myGlobalMethod = function () {\n    // }\n\n    // 2. 添加全局自定义指令资源\n    Vue.directive('my-directive', {\n      bind(el, binding, vnode, oldVnode) {}\n    });\n\n    // 3. 全局过滤器\n    Object.keys(filters).forEach(key => {\n      const fn = filters[key];\n      fn(Vue);\n    });\n\n    // // 3. 注入组件\n    // Vue.mixin({\n    //     created: function () {\n    //     }\n    // })\n    // 4. 添加实例方法\n    const Bus = new Vue({\n      methods: {\n        emit(event, ...args) {\n          this.$emit(event, ...args);\n        },\n        on(event, callback) {\n          this.$on(event, callback);\n        },\n        off(event, callback) {\n          this.$off(event, callback);\n        }\n      }\n    });\n    Vue.prototype.$bus = Bus;\n  }\n};\n\n// 最后在main.js引入并use一下，这里就不贴出代码了\n// import Plugin from './plugins'\n// Vue.use(Plugin)\n","\n").concat('\x3c!-- 大师兄.vue --\x3e\n<template>\n<div>\n    <p>我是大师兄 <span>count: {{ count }}</span></p>\n    <el-button type="primary" @click="handleClick">点我将数据传给二师兄</el-button>\n</div>\n</template>\n\n<script>\nexport default {\n    data () {\n        return {\n            count: 0\n        }\n    },\n    methods: {\n        handleClick () {\n            this.count += 1\n            this.$bus.emit(\'add\', this.count)\n        }\n    }\n}\n<\/script>\n\n<style lang="less" scoped>\ndiv {\n    background-color: #ccc;\n    padding: 10px;\n    p span {\n        color: red;\n    }\n}\n</style>\n',"\n").concat("\x3c!-- 二师兄.vue --\x3e\n<template>\n<div>\n    <p>我是二师兄</p>\n    <p>{{ num }}</p>\n</div>\n</template>\n\n<script>\nexport default {\n    data () {\n        return {\n            num: 0\n        }\n    },\n    created () {\n        // 这里需要注意的是on事件最好在created钩子函数里面执行，\n        // 如果放在mounted钩子函数里面可能接收不到其他组件在created钩子里面触发的事件\n        this.$bus.on('add', this.getBrotherCount)\n    },\n    methods: {\n        getBrotherCount (count) {\n            // 在这里的num就是 大师兄 传递过来的数据了\n            this.num = count\n        },\n        destroy () {\n            console.log('add方法被注销了！')\n        }\n    },\n    destroyed () {\n        this.$bus.off('add', this.destroy)\n    }\n}\n<\/script>\n\n<style lang=\"less\" scoped>\ndiv {\n    background-color: skyblue;\n}\n</style>\n")}},components:{Bus:e(503).default}},i=(e(578),e(1)),o=Object(i.a)(s,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"Bus"},[t("code-block",[t("bus",{staticClass:"view",attrs:{slot:"view"},slot:"view"}),this._v(" "),t("div",{attrs:{slot:"explain"},slot:"explain"},[t("p",[this._v("\n                    啦啦啦\n                ")])]),this._v(" "),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:this.codeStr,expression:"codeStr"}],staticClass:"code_area",attrs:{slot:"code"},slot:"code"},[this._v("                "),t("code",{staticClass:"js"}),this._v("\n            ")])],1)],1)}),[],!1,null,"4df96b80",null);t.default=o.exports}}]);