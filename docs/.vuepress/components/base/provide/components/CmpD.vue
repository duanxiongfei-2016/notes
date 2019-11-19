<template>
	<div class="CmpD">
        <h3>D组件</h3>
        <p :style="{color: theme.color}">{{ theme.color }}</p>
	</div>
</template>

<script>
export default {
    name: 'CmpD',
    inject: ['theme']
}
</script>

<style lang="less" scoped>
.CmpD {
    background-color: #f0f;
    height: 150px;
    padding: 20px;
}
</style>
