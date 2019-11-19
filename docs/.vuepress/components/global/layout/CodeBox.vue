<template>
	<span>
        <slot></slot>    
	</span>
</template>

<script>
export default {
    data () {
        return {
        }
    },
}
</script>

<style lang="less" scoped>
span {
    margin: 0 3px;
    background: #f2f4f5;
    padding: 0.2rem 0.35rem;
    border-radius: 3px;
    color: #476582;
    border: 1px solid #eee;
    font-size: 0.85em;
}
</style>
