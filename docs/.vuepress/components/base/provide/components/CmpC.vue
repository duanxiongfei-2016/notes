<template>
	<div class="CmpC">
        <h3>C组件</h3>
        <cmp-f />
	</div>
</template>

<script>
import CmpF from './CmpF'
export default {
    name: 'CmpC',
    components: {
        CmpF
    }
}
</script>

<style lang="less" scoped>
.CmpC {
    background-color: #ff0;
    padding: 20px
}
</style>
