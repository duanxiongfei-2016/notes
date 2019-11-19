<!-- 大师兄.vue -->
<template>
<div>
    <p>我是大师兄 <span>count: {{ count }}</span></p>
    <el-button type="primary" @click="handleClick">点我将数据传给二师兄</el-button>
</div>
</template>

<script>
export default {
    data () {
        return {
            count: 0
        }
    },
    methods: {
        handleClick () {
            this.count += 1
            this.$bus.emit('add', this.count)
        }
    }
}
</script>

<style lang="less" scoped>
div {
    background-color: #ccc;
    padding: 10px;
    p span {
        color: red;
    }
}
</style>
