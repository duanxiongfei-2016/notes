<!-- 二师兄.vue -->
<template>
<div>
    <p>我是二师兄</p>
    <p>{{ num }}</p>
</div>
</template>

<script>
export default {
    data () {
        return {
            num: 0
        }
    },
    created () {
        // 这里需要注意的是on事件最好在created钩子函数里面执行，
        // 如果放在mounted钩子函数里面可能接收不到其他组件在created钩子里面触发的事件
        this.$bus.on('add', this.getBrotherCount)
    },
    methods: {
        getBrotherCount (count) {
            // 在这里的num就是 大师兄 传递过来的数据了
            this.num = count
        },
        destroy () {
            console.log('add方法被注销了！')
        }
    },
    destroyed () {
        this.$bus.off('add', this.destroy)
    }
}
</script>

<style lang="less" scoped>
div {
    background-color: skyblue;
}
</style>
