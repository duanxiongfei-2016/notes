# 如何封装vue插件

## 基础

你需要清楚的知道 `vue` 的一些高阶知识点以及相关内容，比如：

- `Vue.extend` 构造器

- `$mount` 手动挂载实例

- `mixin` 混合注入

- 父子组件传参，跨级组件传参

- 理解 `vue` 构造函数及 `prototype`原型对象

- `npm` 官网注册账号

- `webpack`打包

## 封装思路

**先别急着开发，先想着如何在开发中使用你的插件**

1. 如果你想实现一个全局的 `toast` 插件， 大概的用法

```js
this.$toast({
    text: '这个作者真帅！'
})
```

2. 光弹文案不行， 应该有一个控制弹出方向的变量

```js
this.$toast({
    text: '这个作者真帅！',
    position: 'topCenter' // 默认值: topCenter 上方弹出
})
```

3. 全局的 `toast` 应该有很多种状态，比如常见的成功，失败，警告，普通...

```js
this.$toast({
    text: '这个作者真帅！',
    position: 'topCenter', // 默认值: topCenter 上方弹出
    type: 'success' // success error warning info 默认值: info
})
```

4. 应该有一个时间变量去控制多长时间自动消失

```js
this.$toast({
    text: '这个作者真帅！',
    position: 'topCenter', // 默认值: topCenter 上方弹出
    type: 'success', // success error warning info 默认值: info
    duration: 3 // 单位秒 默认值：3
})
```

5. 会不会存在一种业务场景，我们不需要自动消失

```js
this.$toast({
    text: '这个作者真帅！',
    position: 'topCenter', // 默认值: topCenter 上方弹出
    type: 'success', // success error warning info 默认值: info
    duration: 3, // 单位秒 默认值：3
    autoClose: false // 默认值: true
})
```

6. 如果我想在 `toast` 结束后，触发一些回调动作，比如删除成功之后，重新刷新数据列表

```js
this.$toast({
    text: '这个作者真帅！',
    position: 'topCenter', // 默认值: topCenter 上方弹出
    type: 'success', // success error warning info 默认值: info
    duration: 3, // 单位秒 默认值：3
    autoClose: false, // 默认值: true
    callback: function () {
        console.log('我已经关闭了！')
        // do something
    }
})
```

## 总结几点

- 插件对外暴露的参数应该保持最少原则，聚焦使用者关注点

- 插件或组件的实现应该要基于使用场景考虑

- 组件或插件的文档一定要完善，并不是每一个使用它的人，都关心它的内部实现，他们更关心的可能是如何快速上手

## 实现

我的理解是，组件是静态的，只是对外暴露一些参数入口 `props`。于是乎，我写了一个静态组件，通过 `props` 定义上面提到的相关变量

```js
export default {
    name: 'my-toast',
    text: {
        type: String,
        required: false,
        default: ''
    },
    position: {
        type: String,
        required: false,
        default: 'topCenter',
        validator: val => ['topCenter', 'rightTop', 'rightBottom'].includes(val) 
    },
    type: {
        type: String,
        required: false,
        default: 'info',
        validator: val => ['info', 'success', 'warning', 'error'].includes(val)
    },
    duration: {
        type: Number,
        required: false,
        default: 3
    },
    autoClose: {
        type: Boolean,
        required: false,
        default: true
    },
    callback: {
        type: Function,
        required: false,
        default: _ => {}
    }
}
```

<ClientOnly>
  <base-plugin-index />
</ClientOnly>

<ClientOnly>
  <global-reward-index />
</ClientOnly>

