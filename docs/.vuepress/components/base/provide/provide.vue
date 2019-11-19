<!-- A.vue -->
<template>
<div class="provide">
    <h3>A组件-我是响应式的哦！</h3>
    <p :style="{color: color}">{{ color }}</p>
    <el-button type="success" @click="changeColor">点我改变颜色</el-button>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <cmp-b />
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <cmp-c />
            </div>
        </el-col>
    </el-row>   
</div>
</template>

<script>
import CmpB from './components/CmpB'
import CmpC from './components/CmpC'
export default {
    name: 'Provid',
    data () {
        return {
            color: 'rgb(0, 0, 0)'
        }
    },
    provide () {
        return {
            theme: this
        }
    },
    components: {
        CmpB,
        CmpC
    },
    methods: {
        changeColor (v) {
            const REG = /^rgb/
            if (REG.test(v) ) {
                console.log(v)
                this.color = v
            } else {
                this.color = this.randomRGB()
            }
        },
        // rgb颜色随机
        randomRGB () {
            var r = Math.floor(Math.random() * 256)
            var g = Math.floor(Math.random() * 256)
            var b = Math.floor(Math.random() * 256)
            var rgb = `rgb(${r}, ${g}, ${b})`
            return rgb
        }
    }
}
</script>

<style lang="less" scoped>
.provide {
    padding: 20px;
    text-align: center;
    > div {
        background-color: pink;
        padding: 20px;
        border-radius: 3px;
        text-align: center;
    }
    h3 {
        margin-bottom: 10px;
    }
    .el-button {
        margin-bottom: 15px;
    }
    p {
        font-weight: 700;
    }
    /deep/ div {
        border-radius: 3px;
        text-align: center;
        h3 {
            margin-bottom: 10px;
        }
        p {
            font-weight: 700;
        }
    }
}
</style>
