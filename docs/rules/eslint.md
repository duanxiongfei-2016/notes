# eslint

## 安装

```powershell
npm i eslint -D # 项目开发环境安装
npm i eslint -g # 全局环境安装
```

## 初始化

```powershell
eslint --init
# 配置package.json的scripts脚本 "eslint:create": "eslint --init"，然后 npm run eslint:create
$ npm run eslint:create
> hello-world@0.1.0 eslint:create /Users/duanxiongfei/Desktop/hello-world
> eslint --init
? How would you like to use ESLint? To check syntax and find problems
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? Vue.js
? Where does your code run? Browser, Node
? What format do you want your config file to be in? JavaScript
Checking peerDependencies of eslint-config-eslint:recommended,plugin:vue/essential@latest
The config that you've selected requires the following dependencies:
```
