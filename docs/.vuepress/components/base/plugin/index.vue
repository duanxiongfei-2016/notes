<template>
	<div class="plugin">
        <code-block>
            <plugin  slot="view" class="view" />
            <div slot="explain">
                <p>
                    呵呵
                </p>
            </div>
            <pre class="code_area" v-highlightjs="codeStr" slot="code">
                <code class="js"></code>
            </pre>
        </code-block>
	</div>
</template>

<script>
import MyToastCode from '!!raw-loader!../../global/myToast.vue'
import PluginStr from '!!raw-loader!../../../plugin/index'
import ToastStr from '!!raw-loader!../../base/plugin/plugin'
import Plugin from './plugin'

export default {
    computed: {
        codeStr () {
            return `${ToastStr}${PluginStr}${MyToastCode}`
        }
    },
    components: {
        Plugin
    }
}
</script>
