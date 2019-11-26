# 自定义组件v-model

- 一个组件上的 `v-model` 默认会利用名为 `value` 的 `prop` 和名为 `input` 的事件，但是像单选框、复选框等类型的输入控件可能会将 `value` 特性用于不同的目的。`model` 选项可以用来避免这样的冲突

```js
export default {
    model: { // 修改 v-model 模式
        prop: ' val',
        event: 'update'
    },
    props: {
        val: true, // 上层组件的值
    },
    methods: {
        updateVal() { // 在要修改val的地方触发
            this.$emit('update',val)
        }
    }
}
```

- 举个栗子

<ClientOnly>
  <base-vModel-index />
</ClientOnly>

<ClientOnly>
  <global-reward-index />
</ClientOnly>
