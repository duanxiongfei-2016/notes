/*
 * @Descripttion: 
 * @version: 
 * @Author: 段雄飞
 * @Date: 2019-09-19 10:23:53
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2019-12-20 16:46:06
 */
  
/**
 * 扩展 VuePress 应用
 */

 // vue代码高亮插件 https://github.com/metachris/vue-highlightjs  atom-one-dark
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/solarized-light.css'

// elemet UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 全局组件
import GlobalComponents from './components/global'

// 复制内容到剪贴板插件 指令v-clipboard:copy="copyData"
import VueClipboard from 'vue-clipboard2'

// 全局样式
import './public/assets/style/index.less'

// 插件
import Plugins from './plugins'

// 插件
import Plugin from "./plugin"


// 自定义js或者第三方库, 不知道为什么webpack打包的时候报错，document is not defined
// require('./lib/JSClickBubble')

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(VueHighlightJS)
  Vue.use(ElementUI)
  Vue.use(GlobalComponents)
  Vue.use(VueClipboard)
  Vue.use(Plugins)
  Vue.use(Plugin)
}
