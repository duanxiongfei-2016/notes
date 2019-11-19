// plugin.js 这里将bus作为插件的形式全局引入，一个页面 一个页面的引入又太麻烦
export default {
    install (Vue, options) {
        // // 1. 添加全局方法或属性
        // Vue.myGlobalMethod = function () {
        // }
    
        // // 2. 添加全局自定义指令资源
        // Vue.directive('my-directive', {
        //     bind (el, binding, vnode, oldVnode) {
        //     }
        // })
    
        // // 3. 注入组件
        // Vue.mixin({
        //     created: function () {
        //     }
        // })
        // 4. 添加实例方法
        const Bus = new Vue({
            methods: {
                emit (event, ...args) {
                    this.$emit(event, ...args)
                },
                on (event, callback) {
                    this.$on(event, callback)
                },
                off (event, callback) {
                    this.$off(event, callback)
                }
            }
        })
        Vue.prototype.$bus = Bus
    }
}

// 最后在main.js引入并use一下，这里就不贴出代码了
// import Plugin from './plugins'
// Vue.use(Plugin)
