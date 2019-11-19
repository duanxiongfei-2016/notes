<template>
	<div class="Provid">
        <code-block>
            <provide  slot="view" class="view" />
            <div slot="explain">
                <p>
                    这个例子通过祖辈组件的<code-box>provide</code-box>return出<code-box>this</code-box>对象，
                    孙组件可以通过<code-box>inject</code-box>中拿到祖辈组件的<code-box>this</code-box>对象，这样就可以实现数据响应式
                </p>
            </div>
            <pre class="code_area" v-highlightjs="codeStr" slot="code">
                <code class="html"></code>
            </pre>
        </code-block>
	</div>
</template>

<script>
import ProvideCode from '!!raw-loader!./provide'
import FComponentCode from '!!raw-loader!./components/CmpF'
import Provide from './provide'
export default {
    computed: {
        codeStr () {
            return `${ProvideCode}\n${FComponentCode}`
        }          
    },
    components: {
        Provide
    }
}
</script>

<style lang="less" scoped>
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
