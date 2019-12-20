
// plugin.js
import myToast from '../components/global/myToast.vue'

const TOAST = {
    install (Vue) {
        const toast = (options) => {
            if (document.getElementsByClassName('toast_box').length) return
            // 使用extend将组件转为构造函数,返回一个“扩展实例构造器” 
            const Toast = Vue.extend(myToast)
            // $vm 实例化vue实例
            const $vm = new Toast({
                propsData: options // 把options传给myToast.vue的props
            })
            let toastDom = $vm.$mount().$el
            document.body.appendChild(toastDom)
        }

        Vue.prototype.$toast = (options = {}) => {
            toast(options)
        }
    }
}

export default TOAST
