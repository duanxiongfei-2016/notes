
<template>
    <div>
        <el-button type="primary" @click="handleClick">点我</el-button>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick () {
            this.$toast('哈哈', {
                text: '就啊哈哈好玩的',
                position: 'top',
                duration: 2,
                maxWidth: 800,
                type: 'error',
                autoClose: true,
                callback: function () {
                    console.log(111)
                }
            })
        }
    }
}
</script>

<style>

</style>
