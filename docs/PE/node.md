# node环境

## 介绍

Node.js 是运行在服务端的 JavaScript, 是基于 Chrome JavaScript V8 引擎建立的平台。

## 安装Node

1. 下载并安装 Node.js，下载最新的稳定版 v10.16.3 到本地

    ```powershell
    wget https://nodejs.org/dist/v10.16.3/node-v10.16.3-linux-x64.tar.xz
    ```

2. 下载完成后, 将其解压

   ```powershell
   tar xvJf node-v10.16.3-linux-x64.tar.xz
   ```

3. 将解压的 Node.js 目录移动到 `/usr/local` 目录下

   ```powershell
   mv node-v10.16.3-linux-x64 /usr/local/node-v10
   ```

4. 配置 node 软链接到 `/bin` 目录

   ```powershell
   ln -s /usr/local/node-v10/bin/node /bin/node
   ```

## 配置和使用 npm

> npm 是 Node.js 的包管理和分发工具。它可以让 Node.js 开发者能够更加轻松的共享代码和共用代码片段

1. 下载 node 的压缩包中已经包含了 npm , 我们只需要将其软链接到 bin 目录下即可

    ```powershell
    ln -s /usr/local/node-v10/bin/npm /bin/npm
    ```

2. 配置环境变量, 将 `/usr/local/node-v10/bin `目录添加到 $PATH 环境变量中可以方便地使用通过 npm 全局安装的第三方工具

    ```powershell
    echo 'export PATH=/usr/local/node-v10/bin:$PATH' >> /etc/profile
    ```

3. 生效环境变量

    ```powershell
    source /etc/profile
    ```
<ClientOnly>
  <global-reward-index />
</ClientOnly>
