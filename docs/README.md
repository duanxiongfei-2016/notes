---
home: true
actionText: 快速开始 →
actionLink: /home/base
features:
- title: 说人话
  details: 围绕一个主题，绝不衍伸过多的专业术语
- title: 讲明白
  details: 尽量用最明白的话把一个知识点说透
- title: 可传播
  details: 独码码不如众码码，欢迎给我提供笔记
footer: 赣ICP备19012606号
---


/*
<!-- <ClientOnly>
  <base-video-index />
</ClientOnly> -->
 */

# 前端笔记收藏站

<ClientOnly>
  <base-avatar-index />
</ClientOnly>

::: tip ISSUE
:tada: :100: 欢迎给我 [issue](https://github.com/duanxiongfei-2016/notes/issues)
:::

## vuePress 介绍

[官网](https://vuepress.vuejs.org/zh/)

基于 vue 快速生成文档的库

## 使用

`npm i vuepress -g`

`npm start`

所有需要展示在项目中的 md，都放在`.docs`文件下

```sh
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
│  └─ something # 这是放 md 的文件夹 相当于父路由
│     └─ product.md # 子路由
└─ package.json
```

如上配置后 通过 /something/product

[markdown语法手册](https://juejin.im/editor/guide/markdown)

<ClientOnly>
  <global-reward-index />
</ClientOnly>

