<!-- C.vue -->
<template>
    <div class="CmpC">
        <h4>我是C组件</h4>
        <p>C组件的$attrs: <span style="color: #00f;">{{ $attrs.msg }}</span></p>
        <p>C组件的msg: <span style="color: #00f;">{{ msg }}</span></p>
        <el-button type="primary" @click="handleClick">click me send msg to CmpA</el-button>
    </div>
</template>

<script>
import { randomMsg } from '$tools'
export default {
    name: 'CmpC',
    inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
    data () {
        return {
            msg: null
        }
    },
    created () {
        this.msg = randomMsg()
    },
    methods: {
        handleClick () {
            this.msg = randomMsg()
            this.$emit('update', this.msg) // 这个update方法是通过$listeners绑定在组件上的方法
        }
    }
}
</script>

<style scoped>
.CmpC {
    background-color: #ff0;
    padding: 20px;
}
</style>
