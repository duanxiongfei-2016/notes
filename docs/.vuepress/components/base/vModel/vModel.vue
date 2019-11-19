<!-- parent.vue -->
<template>
<div class="parent">
    <h4>I'm parrent Component</h4>
    <h1 style="color: #409eff; border: none;">{{ val }}</h1>
    <el-button type="danger" @click="handleClick">点我 -1</el-button>
    <child v-model="val" />
</div>
</template>

<script>
import Child from './components/child'
export default {
    name: 'vmodel',
    data () {
        return {
            val: 0
        }
    },
    components: {
        Child
    },
    methods: {
        handleClick () {
            this.val -= 1
        }
    }
}
</script>

<style lang="less" scoped>
.parent {
    background-color: pink;
    padding: 20px 30px;
    border-radius: 5px;
}
</style>
