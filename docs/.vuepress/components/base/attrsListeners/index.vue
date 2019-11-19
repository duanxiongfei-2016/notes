<template>
	<div class="v-model">
        <code-block>
            <attrs-listeners  slot="view" class="view" />
            <div slot="explain">
                <p>我太难了</p>
            </div>
            <pre class="code_area" v-highlightjs="codeStr" slot="code">
                <code class="html"></code>
            </pre>
        </code-block>
	</div>
</template>

<script>
import attrsListenersCode from '!!raw-loader!./attrsListeners'
import cpmBCode from '!!raw-loader!./components/b'
import cpmCCode from '!!raw-loader!./components/c'
import AttrsListeners from './attrsListeners'
export default {
    computed: {
        codeStr () {
            return `${attrsListenersCode}\n${cpmBCode}\n${cpmCCode}`
        }          
    },
    components: {
        AttrsListeners
    }
}
</script>

<style lang="less" scoped>
</style>
