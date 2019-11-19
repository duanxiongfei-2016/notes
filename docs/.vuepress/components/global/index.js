import CodeBlock from './layout/CodeBlock.vue'
import CollapseTransition from './functional/collapseTransition'
import CodeBox from './layout/CodeBox.vue'

const GlobalComponents = {
    install (Vue) {
        Vue.component('CodeBlock', CodeBlock)
        Vue.component('CollapseTransition', CollapseTransition)
        Vue.component('CodeBox', CodeBox)
    }
}
  
export default GlobalComponents
