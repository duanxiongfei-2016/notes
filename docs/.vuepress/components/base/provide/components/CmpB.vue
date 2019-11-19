<template>
	<div class="CmpB">
        <h3>B组件</h3>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <cmp-d />
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <cmp-e />
                </div>
            </el-col>
        </el-row> 
	</div>
</template>

<script>
import CmpD from './CmpD'
import CmpE from './CmpE'
export default {
    name: 'CmpB',
    components: {
        CmpD,
        CmpE
    }
}
</script>

<style lang="less" scoped>
.CmpB {
    background-color: #0f0;
    padding: 20px;
}
</style>
