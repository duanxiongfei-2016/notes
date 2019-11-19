  
/**
 * 扩展 VuePress 应用
 */

 // vue代码高亮插件 https://github.com/metachris/vue-highlightjs  atom-one-dark
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/github.css'

// elemet UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 全局组件
import GlobalComponents from './components/global'

// 复制内容到剪贴板插件
import VueClipboard from 'vue-clipboard2'

// 全局样式
import './public/assets/style/index.less'

// 插件
import Plugin from './plugins'

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
  Vue.use(Plugin)
}
