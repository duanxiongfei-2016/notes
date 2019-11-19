<!-- F.vue -->
<template>
<div class="CmpF">
    <h3>F组件</h3>
    <p :style="{color: theme.color}">{{ theme.color }}</p>
    <el-button type="warning" @click="handleClick">点我传递数据给祖父组件</el-button>
</div>
</template>

<script>
export default {
    name: 'CmpF',
    inject: {
        theme: {
            default: () =>({})
        }
    },
    methods: {
        handleClick () {
            this.theme.changeColor(this.theme.randomRGB())
        }
    }
}
</script>

<style lang="less" scoped>
.CmpF {
    background-color: #ccc;
    height: 150px;
    padding: 20px;
}
</style>
