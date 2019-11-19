# 组件之间通信

## 父子组件通信

### props/$emit

> 给父定义一个数据，通过:属性 的形式将数据绑定到子组件上。
> 子组件中使用props获取这个值，props可以是一个数组(不推荐使用)，也可以是一个对象
> 可以直接通过this.数组中的值 来调用

1. 父组件向子组件传值

- parrent.vue

```html
<template>
    <div class="parent">
        <child :msg="parrentMsg" />
    </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
    name: 'parrent',
    data () {
        return {
            parrentMsg: '我是父组件传给子组件的数据'
        }
    },
    components: {
        Child
    }
}
</script>
```

- child.vue

```html
<template>
    <div class="child">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'child',
    props: {
        msg: {
            required: false,
            default: '',
            type: String
        }
    }
    // props: ['msg'] // 不推荐props这样的写法
}
</script>
```

2. 子组件向父组件传值（通过事件形式)

- parrent.vue

```html
<template>
    <div class="parent">
        <p>{{ childData }}</p>
        <child :update="handleUpdate" @update="handleUpdate" />
    </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
    name: 'parrent',
    data () {
        return {
            childData: ''
        }
    },
    components: {
        Child
    },
    methods: {
        handleUpdate (val) {
            console.log('子组件传递过来的数据：', val)
            this.childData = val
        }
    }
}
</script>
```

- child.vue

```html
<template>
    <div class="child">
        <button @click="handleClick">点我传递数据给父组件</button>
    </div>
</template>

<script>
export default {
    name: 'child',
    props: {
        update: {
            required: false,
            default: _ => {},
            type: Function
        }
    },
    data () {
        return {
            msg: '我是子组件的数据'
        }
    },
    methods: {
        handleClick () {
            this.update.call(null, this.msg) // 方式一： 通过props传递一个方法，然后在子组件触发这个方法传递数据
            this.$emit('update', this.msg) // 方式二： 通过$emit触发父组件定义的方法传递数据
        }
    }
}
</script>
```

## 隔代（跨级）组件通信

### 方式一: `$attrs/$listeners`

- `$attrs`：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 interitAttrs 选项一起使用。

- `$listeners`：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件

接下来我们看个跨级通信的例子

<ClientOnly>
  <base-attrsListeners-index />
</ClientOnly>

### 方式二: `provide/inject`

> 使用场景： 如果组件嵌套层次很深，使用上面的 `$attrs/$listeners` 方式去做，不言而喻很麻烦。因此，Vue2.2.0新增API，允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。一言而蔽之：祖先组件中通过`provider`来提供变量，然后在子孙组件中通过 `inject` 来注入变量。`provide / inject` API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。

1. 基本使用

假设有两个组件： A.vue 和 B.vue，B 是 A 的子组件

```js
// A.vue
export default {
    provide: {
        name: 'I am A component'
    }
}

// B.vue
export default {
    inject: ['name'],
    mounted () {
        console.log(this.name) // I am A component
    }
}
```

::: danger 注意
`provide` 和 `inject` 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的----vue官方文档
所以，上面 A.vue 的 name 如果改变了，B.vue 的 this.name 是不会改变的，仍然是 I am A component。
:::

2. `provide` 与 `inject` 如何实现数据响应式

> 方式一： `provide`祖先组件的实例，然后在子孙组件中注入依赖，这样就可以在子孙组件中直接修改祖先组件的实例的属性，不过这种方法有个缺点就是这个实例上挂载很多没有必要的东西比如 `props` ，`methods`
>
> 方式二： 使用2.6最新API `Vue.observable` 优化响应式 `provide`(推荐)

我们来看个例子：孙组件D、E和F获取A组件传递过来的color值，并能实现数据响应式变化，即A组件的color变化后，组件D、E、F不会跟着变（核心代码如下：）

![2.jpg](~$img/vue/2.jpg)

<ClientOnly>
  <base-provide-index />
</ClientOnly>

### 方式三: $parent / $children　＆ ref

> `ref`：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
>
> `$parent / $children`：访问父 / 子实例

## 兄弟组件通信

### 中央事件总线bus

<ClientOnly>
  <base-bus-index />
</ClientOnly>

### vuex

- 兄弟组件之间的通信的使用场景很少，基本很少使用，如果有这种场景的话，一般小项目推荐使用`bus`, 大项目使用`vuex`,在后面的章节中我们会专门去挖掘`vuex`
