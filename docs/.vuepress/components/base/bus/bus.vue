<template>
<div class="box">
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <brother-a />
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <brother-b />
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
import BrotherA from './components/brotherA'
import BrotherB from './components/brotherB'
export default {
    data () {
        return {
        }
    },
    components: {
        BrotherA,
        BrotherB
    }
}
</script>

<style lang="less" scoped>
.box {
    background-color: pink;
}
</style>
