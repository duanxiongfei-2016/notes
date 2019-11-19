# nvm

## 介绍

nvm是node版本管理工具，为了解决node各种版本存在不兼容现象，nvm是让你在同一台机器上安装和切换不同版本的node的工具

## 安装

1. 安装命令

   ```powershell
   git clone https://github.com/creationix/nvm.git
   ```

2. 完成后需要执行下载下来的nvm文件

   ```powershell
   source nvm/nvm.sh
   ```

3. 查看nvm是否安装成功

   ```powershell
   nvm --version
   ```

4. 使用NVM下载指定版本的Node.js

   ```powershell
   nvm install v10.16.3
   ```

5. 查看node是否安装成功

   ```powershell
   node --version
   ```

6. nvm常用命令

    `nvm ls-remote`：列出所有可以安装的node版本号

    `nvm install v10.16.3`：安装指定版本号的node

    `nvm use v10.16.3`：切换node的版本，这个是全局的

    `nvm current`：当前node版本

    `nvm ls`：列出所有已经安装的node版本
