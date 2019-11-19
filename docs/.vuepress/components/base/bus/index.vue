<template>
	<div class="Bus">
        <code-block>
            <bus  slot="view" class="view" />
            <div slot="explain">
                <p>
                    啦啦啦
                </p>
            </div>
            <pre class="code_area" v-highlightjs="codeStr" slot="code">
                <code class="js"></code>
            </pre>
        </code-block>
	</div>
</template>

<script>
import pluginCode from '!!raw-loader!../../../plugins/index'
import brotherACode from '!!raw-loader!./components/brotherA'
import brotherBCode from '!!raw-loader!./components/brotherB'
import Bus from './bus'
export default {
    computed: {
        codeStr () {
            return `${pluginCode}\n${brotherACode}\n${brotherBCode}`
        }          
    },
    components: {
        Bus
    }
}
</script>

<style lang="less" scoped>
.Bus {
    margin-top: 15px;
}
.view {
    padding: 20px;
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
.code_area {
    text-align: left;
}
</style>
