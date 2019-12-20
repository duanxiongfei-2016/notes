# 你可能不知道的css各种骚技巧

## css计数器

- css里面的伪元素其实是非常好用的，但是经常容易被大家忽略，伪元素里面常用到的 `content` 属性，可能现在很多人仅仅以为 `content` 属性的值只支持字符串，除了字符串外常用到的还有 `uri`、`counter` ，今天所要介绍的就是 `conter`(计数器)

### 基本使用

1. 初始化计数器

```css
counter-reset: 计数器名称[, 默认值number];  /* 重置计数器成 默认0开始 */
```

2. 计数器自增

```css
counter-increment: 计数器名称[, 增量];  /* 增加计数器值 增量默认是1 可以是0或者是负数*/
```

3. 显示计数器

```css
content: counter(计数器名称[, 显示的风格]);  
/* 显示计数器 显示的风格list-style-type，默认decimal数字风格*/
/* lower-latin 字母风格  cjk-ideographic中文风格 */
```

### 先看个例子

<ClientOnly>
  <css-index />
</ClientOnly>