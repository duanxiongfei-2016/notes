# vue 代码规范

## 目录结构

```text
├─ node_modules
├─ public
├─ src
│   ├─ api          -- api请求模块
│   ├─ assets
│   │   ├─ fonts    -- 字体文件目录
│   │   ├─ images   -- 图片文件目录
│   │   └─ style    -- 样式文件目录
│   ├─ components   -- 全局组件目录
│   │   ├─ base     -- 自定义基础组件目录
│   │   ├─ public   -- 自定义公共组件目录
│   │   └─ index.js -- 全局组件注册
│   ├─ constants    -- 常量文件目录，例如：枚举
│   ├─ directives   -- 全局自定义指令目录
│   ├─ filters      -- 全局过滤器目录
│   ├─ libs         -- 第三方js或库目录
│   ├─ mixin        -- 全局混入目录
│   ├─ mock         -- mock-模拟json数据目录
│   ├─ plugin       -- 插件目录
│   ├─ routes       -- 路由目录
│   ├─ store        -- vuex状态管理目录
│   ├─ utils        -- 工具函数目录
│   ├─ views        -- 页面视图目录
│   ├─ App.vue      -- 入口主页面
│   ├─ config.js    -- 配置文件
│   └─ main.js      -- 入口函数
├─ .browserslistrc
├─ .editorconfig    -- 编辑器配置文件
├─ .eslint.js       -- eslint 代码规则 rules 配置文件
├─ .gitignore       -- git忽略文件
├─ .babel.config.js     -- es6+语法转换es5，包懒加载配置文件
├─ package-lock.json    -- npm依赖包锁定文件管理
├─ package.json         -- npm依赖包管理
├─ README.md            -- 开发前必读
├─ vue.config.js        -- vue环境配置，webpack配置
└─ yarn.lock            -- yarn依赖包管理

注意：所有目录内请分功能模块创建文件夹
```

## 开发风格

::: tip

- 使用第三方 UI 库的时候请使用懒加载的方式
- 其他的代码规范全部配置到了 eslint 规则中，配合 vetur 插件和 prettier 插件消除 eslint 错误，自动格式化并统一代码规范
- 封装的所有函数必须增加注释
- 在开发时，请遵守约定的单文件组件风格指南，指南内容节选自 [Vue 官方风格指南](https://cn.vuejs.org/v2/style-guide/)
  :::

1. **组件数据**

- 组件的 data 必须是一个函数。

```js
// bad
export default {
  data: {
    foo: 'bar',
  },
}

// good
export default {
  data() {
    return {
      foo: 'bar',
    }
  },
}
```

2. **单文件组件文件名称**

- 单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。

```js
// bad
mycomponent.vue
myComponent.vue

// good
my - component.vue
MyComponent.vue
```

3. **紧密耦合的组件名**

- 和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

```js
// bad
components/
|- TodoList.vue
|- TodoItem.vue
└─ TodoButton.vue

// good
components/
|- TodoList.vue
|- TodoListItem.vue
└─ TodoListItemButton.vue
```

4. **自闭合组件**

- 在单文件组件中没有内容的组件应该是自闭合的。

```html
<!-- bad -->
<my-component></my-component>

<!-- good -->
<my-component />
```

5. **Prop 名大小写**

- 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case。

```js
// bad
export default {
  props: {
    'greeting-text': String
  }
};

// good
export default {
  props: {
    greetingText: String
  }
}
<!-- bad -->
<welcome-message greetingText="hi" />

<!-- good -->
<welcome-message greeting-text="hi" />
```

6. **Props 换行**

- 多个 Props 的元素应该分多行撰写，每个 Props 一行，闭合标签单起一行。

```html
<!-- bad -->
<my-component foo="a" bar="b" baz="c" />

<!-- good -->
<my-component foo="a" bar="b" baz="c" />
```

7. **指令缩写**

- 指令缩写，用 : 表示 v-bind: ，用 @ 表示 v-on:

```html
<!-- bad -->
<input v-bind:value="value" v-on:input="onInput" />

<!-- good -->
<input :value="value" @input="onInput" />
```

8. **Props 顺序**

- 标签的 Props 应该有统一的顺序，依次为指令、属性和事件。

```html
<my-component
  v-if="if"
  v-show="show"
  v-model="value"
  ref="ref"
  :key="key"
  :text="text"
  @input="onInput"
  @change="onChange"
/>
```

9. **组件选项的顺序**

- 组件选项应该有统一的顺序。

```js
export default {
  name: '', // 所有组件必须写 name

  mixins: [],

  components: {},

  props: {},

  data() {},

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {},
}
```

10. **Props 定义**

- Prop 定义应该尽量详细。在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

- 细致的 prop 定义有两个好处：（1）它们写明了组件的 API，所以很容易看懂组件的用法；（2）在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助你捕获潜在的错误来源。

```js
// bad
props: ['status']

// good
props: {
    status: {
        type: String,
        required: false,
        default: 'error',
        validator: val => [
                'syncing',
                'synced',
                'version-conflict',
                'error'
            ].includes(val)
        }
    }
}
```

11. **为 v-for 设置键值**

- 总是用 key 配合 v-for

```html
<!-- bad -->
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>

<!-- good -->
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

12. **避免 v-if 和 v-for 用在一起**

- 永远不要把 v-if 和 v-for 同时用在同一个元素上。

13. **为组件样式设置作用域**

- 为了避免样式冲突，组件内样式必须使用 `scoped` 特性, 深度作用域使用 `/deep/`(scss/less) 或者 `>>>`(css)

```html
<!-- bad -->
<style lang="less">
  .home {
    height: 100px;
  }
</style>

<!-- good 使用 `scoped` 特性  -->
<style lang="less" scoped>
  .home {
    height: 100px;
    /deep/ .ant-card-body {
      padding: 8px 15px;
    }
  }
</style>

<!-- good 使用 `scoped` 特性  -->
<style lang="css" scoped>
  .home {
    height: 100px;
    >>> .ant-card-body {
      padding: 8px 15px;
    }
  }
</style>
```

14. **私有属性名**

- 在插件、混入等扩展中始终为自定义的私有属性使用 `$_` 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 `$_yourPluginName_`)。

```js
// bad
var myGreatMixin = {
  // ...
  methods: {
    update: function() {
      // ...
    },
  },
}

// good
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function() {
      // ...
    },
  },
}
```

15. **注释**

```js
// bad
function fn(val) {
  const reg = new RegExp(
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  )
  return reg.test(val)
}

// good
/**
 * @desc: 检查邮箱是否正确
 * @param {[string]} email:邮箱地址
 * @return: Booleans
 * @example: isEmail('example@163.com')
 */
function isEmail(email) {
  const reg = new RegExp(
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  )
  return reg.test(email)
}
```

16. **自定义封装组件文档说明**

```html
<!--
 * @Descripttion: toast提示组件
 * @version: 1.0.0
 * @Author: 段雄飞
 * @Date: 2019-11-30 14:55:21
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2020-01-02 16:18:31
 *
 * @example
 * this.$toast({
 *    text: '这个作者真帅！',
 *    position: 'topCenter', // 默认值: topCenter 上方弹出
 *    type: 'success', // success error warning info 默认值: info
 *    duration: 3, // 单位秒 默认值：3
 *    autoClose: false, // 默认值: true
 *    callback: function () {
 *      console.log('我已经关闭了！')
 *    }
 * })
 *
 * @doc
 *  |参数      |说明                                                     |类型    |默认值     |
 *  |:--------|:--------------------------------------------------------|:----  |:----     |
 *  |text     |提示内容                                                  |Siring  |-        |
 *  |position |提示弹出位置                                               |Siring  |topCenter|
 *  |type     |指定提示的样式，四种选择 `info`、`success`、`warning`、`error`|Siring  |info     |
 *  |duration |自动关闭延时，单位秒                                        |Number  |3        |
 *  |autoClose|是否开启自动关闭                                            |Boolean |true     |
 *  |callback |提示关闭后回调函数                                          |Function |-       |
 -->
<template>
  <transition :name="`transtion-${position}`">
    <div :class="[position, type, 'toast_box']" v-show="show">
      <p>
        <i :class="[iconClass, 'icon']"></i>
        {{ text }}
        <i class="el-icon-close" @click="handleClose"></i>
      </p>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'my-toast',
    props: {
      text: {
        type: String,
        required: false,
        default: '',
      },
      position: {
        type: String,
        required: false,
        default: 'top',
        validator: val =>
          ['topCenter', 'rightTop', 'rightBottom'].includes(val),
      },
      type: {
        type: String,
        required: false,
        default: 'info',
        validator: val => ['info', 'success', 'warning', 'error'].includes(val),
      },
      duration: {
        type: Number,
        required: false,
        default: 3,
      },
      autoClose: {
        type: Boolean,
        required: false,
        default: true,
      },
      callback: {
        type: Function,
        required: false,
        default: _ => {},
      },
    },
    computed: {
      iconClass() {
        const classList = {
          info: 'el-icon-info',
          success: 'el-icon-success',
          warning: 'el-icon-warning',
          error: 'el-icon-error',
        }
        return classList[this.type || 'info']
      },
    },
    data() {
      return {
        show: false,
        timer: null,
      }
    },
    mounted() {
      this.show = true
      this.autoClose && this.remove()
    },
    methods: {
      handleClose() {
        clearTimeout(this.timer)
        this.timer = null
        this.destroy()
      },
      remove() {
        this.timer = setTimeout(_ => {
          clearTimeout(this.timer)
          this.timer = null
          this.destroy()
        }, this.duration * 1000 || 3000)
      },
      destroy() {
        this.show = false
        const timer = setTimeout(
          _ => {
            this.callback()
            clearTimeout(timer)
            this.$destroy()
            document.body.removeChild(this.$el)
          },
          this.position === 'topCenter' ? 300 : 500
        )
      },
    },
  }
</script>
```
