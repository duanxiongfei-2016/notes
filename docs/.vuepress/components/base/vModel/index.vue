<template>
  <div class="v-model">
    <code-block>
      <v-model slot="view" class="view" />
      <div slot="explain">
        <p>
          利用<code-box>computed</code-box>的<code-box>get</code-box>和
          <code-box>set</code-box>和<code-box>$emit</code-box>
          方法触发数据双向绑定
        </p>
      </div>
      <pre class="code_area" v-highlightjs="codeStr" slot="code">
        <code class="html"></code>
    </pre>
    </code-block>
  </div>
</template>

<script>
import vModelCode from "!!raw-loader!./vModel";
import childCode from "!!raw-loader!./components/child";
import VModel from "./vModel";
export default {
  computed: {
    codeStr() {
      return `${vModelCode}\n${childCode}`;
    }
  },
  components: {
    VModel
  }
};
</script>

<style lang="less" scoped></style>
