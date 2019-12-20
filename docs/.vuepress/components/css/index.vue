<template>
	<div class="v-model">
        <code-block>
            <css-count  slot="view" class="view" />
            <div slot="explain">
                <p>
                    是不是有点骚
                </p>
            </div>
            <pre class="code_area" v-highlightjs="codeStr" slot="code">
                <code class="html"></code>
            </pre>
        </code-block>
	</div>
</template>

<script>
import CountCode from '!!raw-loader!./components/count'
import CssCount from './components/count'
export default {
    computed: {
        codeStr () {
            return `${CountCode}`
        }          
    },
    components: {
        CssCount
    }
}
</script>

<style lang="less" scoped>
</style>
