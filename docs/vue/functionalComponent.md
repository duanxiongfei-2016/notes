# 函数式组件

## 介绍

`Vue` 中的 `无状态组件` 其实就是 `函数式组件`。类似于 react 中的 `高阶组件`，但函数组件又是啥呢?
要回答这个问题，咱们首先必须理解什么是函数式编程。

简单的说，就是组件不支持响应式，并且不能通过 `this` 关键字引用自己。与将程序分解为对象的面向对象方法不同，
函数式编程鼓励将程序分解为小函数，这些小函数用于形成更高级的程序。我们创建的函数不依赖于或可以改变任何外部状态，
这导致另一个观察结果，对于给定的输入，它们总是返回相同的输出。

因此，函数组件是没有状态的组件，并且可以更改它。函数组件输出总是基于给定的输入。在 Vue 方面，这类组件会根据给定的 `props` 给出不同的输出。

## 特点

- 没有管理任何状态

- 没有监听任何传递给它的状态

- 没有生命周期方法

- 它只是接收一些 `prop`

- 无状态 == 无响应式数据

- 无实例 == 无 `this` 上下文

## 语法

Vue 提供了一种定义函数组件的简单方法。咱们只需要给个 `functional` 关键字就可以。在 2.5.0 及以上版本中，如果使用了单文件组件，那么基于模板的函数式组件可以这样声明：

```html
<template functional>
  <div>函数/无状态组件</div>
</template>
```

**or**

```js
export default {
  functional: true,
  props: {
    // ...
  },
  render(createElement, context) {
    return createElement('div', '函数/无状态组件');
  }
};
```

::: danger 注意
在 2.3.0 之前的版本中，如果一个函数式组件想要接收 `prop`，则 `props` 选项是必须的。在 2.3.0 或以上的版本中，你可以省略 `props` 选项，所有组件上的特性都会被自动隐式解析为 `prop`。

当使用函数式组件时，该引用将会是 `HTMLElement`，因为他们是无状态的也是无实例的。
:::

**<label style="color: #3eaf7c">需要注意的是：</label>** 传递给函数组件的惟一数据是 `props`。这些组件是完全无状态的(没有响应数据)，它们忽略传递给它们的任何状态，并且不触发任何生命周期方法(`created`、`mounted`等等)。

而且，咱们也不能通过使用 `this` 关键字来访问实例，因为这些组件也是不实例化的。相反，组件需要的所有东西都是通过`context`提供的。在`render`函数中，它作为`createElement`方法的第二个参数传递。

组件需要的一切都是通过 `context` 参数传递，它是一个包括如下字段的对象：

- **props**：提供所有 prop 的对象

- **children**: VNode 子节点的数组

- **slots**: 一个函数，返回了包含所有插槽的对象

- **scopedSlots**: (2.6.0+) 一个暴露传入的作用域插槽的对象。也以函数形式暴露普通插槽。

- **data**：传递给组件的整个数据对象，作为 createElement 的第二个参数传入组件

- **parent**：对父组件的引用

- **listeners**: (2.3.0+) 一个包含了所有父组件为当前组件注册的事件监听器的对象。这是 data.on 的一个别名。

- **injections**: (2.3.0+) 如果使用了 inject 选项，则该对象包含了应当被注入的属性

## 为什么使用函数式组件

**<label style="color: #3eaf7c">函数式组件可能会给我们使用组件带来更多的复杂性，但为什么还是需要呢？</label>**

- 因为函数式组件没有状态，所以它们不需要像 Vue 的响应式系统一样需要经过额外的初始化。

- 函数式组件仍然会对相应的变化做出响应式改变，比如新传入新的 props，但是在组件本身中，它无法知道数据何时发生了更改，因为它不维护自己的状态。

- 对于那些喜欢看数字说话的人，我做了一个基准测试，渲染 1000 个列表，有状态组件和函数式组件，有状态组件耗时 140ms，函数式组件耗时 40ms。

- 对于大型应用程序，在使用函数式组件之后，你会看到 DOM 的渲染、更新会有重大改进。

## 使用场景-包装组件

- 举个栗子

```js
/* 视图伸缩动画效果组件 */
// myFunctionalComponent.js
const elTransition =
  '0.4s height ease-in-out, 0.4s padding-top ease-in-out, 0.4s padding-bottom ease-in-out';
const Transition = {
  'before-enter'(el) {
    el.style.transition = elTransition;
    if (!el.dataset) el.dataset = {};

    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;

    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  },

  enter(el) {
    el.dataset.oldOverflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    } else {
      el.style.height = '';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }

    el.style.overflow = 'hidden';
  },

  'after-enter'(el) {
    el.style.transition = '';
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
  },

  'before-leave'(el) {
    if (!el.dataset) el.dataset = {};
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;

    el.style.height = el.scrollHeight + 'px';
    el.style.overflow = 'hidden';
  },

  leave(el) {
    if (el.scrollHeight !== 0) {
      el.style.transition = elTransition;
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
  },

  'after-leave'(el) {
    el.style.transition = '';
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  }
};

export default {
  name: 'MyFunctionalComponent',
  functional: true,
  render(createElement, { children }) {
    const data = {
      on: Transition
    };
    return createElement('transition', data, children)
  }
}
```

```html
<template>
  <div>
    <my-functional-comonent>
      <div class="code_area_box" v-show="isShowCode">
        <el-divider content-position="left"></el-divider>
        <el-tooltip
          content="复制代码"
          placement="right"
          class="copy_tooltip"
          v-if="!isCopyed"
        >
          <i
            class="el-icon-document-copy"
            v-clipboard:copy="copyData"
            v-clipboard:success="handleCopySuccess"
          ></i>
        </el-tooltip>
        <el-tooltip
          content="复制成功"
          placement="right"
          class="copy_tooltip"
          v-else
        >
          <i
            class="el-icon-check"
            style="color: #67C23A;"
            @mouseleave="handleMouseleave"
          ></i>
        </el-tooltip>
        <slot name="code"></slot>
      </div>
    </my-functional-comonent>
  </div>
</template>

<script>
	import MyFunctionalComponent from './MyFunctionalComponent'
  export default {
    name: 'codeBlock',
    data() {
      return {
        isCopyed: false,
        isShowCode: false
      };
		},
		components: {
			MyFunctionalComponent
		}
    props: {
      title: {
        required: false,
        type: String,
        default: '此处核心代码价值一个亿'
      }
    },
    computed: {
      copyData() {
        return this.$slots.code[0].data.directives[0].value;
      }
    },
    methods: {
      showCode() {
        this.isShowCode = !this.isShowCode;
      },
      handleCopySuccess() {
        this.isCopyed = true;
      },
      handleMouseleave() {
        this.isCopyed = false;
      }
    }
  };
</script>

<style lang="less" scoped></style>
```
