<template>
	<div class="CmpE">
        <h3>E组件</h3>
        <p :style="{color: theme.color}">{{ theme.color }}</p>
	</div>
</template>

<script>
export default {
    name: 'CmpE',
    inject: {
        theme: {
            default: () =>({})
        }
    }
}
</script>

<style lang="less" scoped>
.CmpE {
    background-color: #0ff;
    height: 150px;
    padding: 20px;
}
</style>
