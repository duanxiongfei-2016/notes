<!-- B.vue -->
<template>
    <div class="CmpB">
        <h4>我是B组件</h4>
        <p>B组件的$attrs: <span style="color: #00f;">{{ $attrs.msg }}</span></p>
        <cmp-c v-bind="$attrs" v-on="$listeners" />
    </div>
</template>

<script>
import CmpC from './c'
export default {
    name: 'CmpB',
    inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
    components: {
        CmpC,
    }
}
</script>

<style scoped>
.CmpB {
    background: #0ff;
    padding: 20px;
}
</style>
