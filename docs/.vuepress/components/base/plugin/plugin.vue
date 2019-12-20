<template>
    <div>
        <div style="margin-bottom: 15px;">
            <el-button type="primary" @click="handleClick('topCenter', 'info', true)">上中弹出</el-button>
            <el-button type="success" @click="handleClick('rightTop', 'success', true)">右上弹出</el-button>
            <el-button type="warning" @click="handleClick('rightBottom', 'warning', true)">右下弹出</el-button>
            <el-button type="danger" @click="handleClick('topCenter', 'error', false)">我不会自动关闭</el-button>
        </div>
        <el-button type="primary" @click="handleClick('topCenter', 'info', true)">普通</el-button>
        <el-button type="success" @click="handleClick('topCenter', 'success', true)">成功</el-button>
        <el-button type="warning" @click="handleClick('topCenter', 'warning', true)">警告</el-button>
        <el-button type="danger" @click="handleClick('topCenter', 'error', true)">失败</el-button>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick (position, type, autoClose) {
            this.$toast({
                text: '这个作者真帅！',
                position,
                duration: 2,
                type,
                autoClose,
                callback: function () {
                    alert('我是callback,我执行了！')
                }
            })
        }
    }
}
</script>
