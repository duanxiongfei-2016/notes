# Koa2

## 简介

- `koa` 是 `Nodejs` 的 web 开发框架，`express` 也是，`Koa` 是一个新的 web 框架，由 `Express` 幕后的原班人马打造，致力于成为一个更小、更健壮、更富有表现力的 Web 框架，目前有 `1.x` 和 `2.x` 两个版本。

- Koa2 学习文档

  - [英文官网 - https://koajs.com/](https://koajs.com/)

  - [中文官网 - https://www.koajs.com.cn/](https://www.koajs.com.cn/)

  - [基础入门学习 - https://chenshenhai.github.io/koa2-note/](https://chenshenhai.github.io/koa2-note/)

## 安装

1. koa generator 脚手架生成器

```powershell
npm install koa-generator -g  # 全局安装express脚手架
koa myapp  # 创建一个名字叫myapp的express模板
cd myapp
npm i # 下载项目依赖模块
npm start # 启动项目
```

2. 基本目录结构

```js
    ├── app.js
    ├── bin
    │   └── www
    ├── package.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   ├── index.js
    │   └── users.js
    └── views
        ├── error.jade
        ├── index.jade
        └── layout.jade
```

> 如果在开发环境下想使用热更新的话，下载 `nodemon`模块, 执行shell命令 `npm i nodemon -D`, 然后在 `package.json` 里面的 `scripts` 增加一行 `"dev": "nodemon ./bin/www"`, 然后你就可以通过运行 `npm run dev` 命令启动项目了，此时他就可以热更新了。

4. 我的目录结构

```js
    ├── bin
    │   └── www
    ├── package.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    │── views
    │   ├── error.jade
    │   ├── index.jade
    │   └── layout.jade
    └── src                          // 主要代码目录
        ├── config                   // 配置文件目录
        ├── controllers              // 配置文件目录
        ├── lib                      // mongodb连接目录
        │    └── db.js
        ├── middleware               // 自定义中间件目录
        ├── models                   // mongoose schema 数据模型model层目录
        ├── routes                   // 路由目录
        ├── services                 // 业务层目录
        ├── utils                    // 工具函数目录
        └── app.js                   // 初始化入口文件
```

[基本demo结构请参考 https://github.com/duanxiongfei-2016/koa2_demo.git](https://github.com/duanxiongfei-2016/koa2_demo.git)

<ClientOnly>
  <global-reward-index />
</ClientOnly>
