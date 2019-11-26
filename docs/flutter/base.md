## 起步

## 参考资料

[官方文档](https://www.dartlang.org/guides/language/language-tour)

[极客学院](http://wiki.jikexueyuan.com/project/dart-language-tour/)

[Dart2中文文档](https://www.kancloud.cn/marswill/dark2_document/709087)

[英文原版文档地址](https://dart.dev/guides/language/language-tour)

## 安装Dart-SDK

__mac下dart的安装__

1. 直接打开终端，输入命令使用Homebrew下载安装dart

   ```powershell
   brew tap dart-lang/dart
   brew install dart  // 安装稳定版 推荐  brew install dart --devel // 安装dev版
   ```

2. 查看相关安装信息

   ```powershell
   brew info dart
   ```

3. 查看相关安装信息(安装地址)

   ![安装信息](~$img/flutter/1.jpg)

4. 配置全局环境变量

   ```powershell
   vim ~/.bash_profile
   ```

   ![安装信息](~$img/flutter/2.jpg)

   > 注意：环境变量这里的路径就是你安装Dart的路径，添加上去之后:wq保存退出

5. 运行命令验证是否安装成功，出现版本信息即安装成功

   ```powershell
   dart --version
   ```

   ![安装信息](~$img/flutter/3.jpg)

6. VSCode下运行dart文件，用以调试。在目录文件下面新建index.dart，然后编辑dart代码，此时如果你没有安装插件的话可能不知道怎么运行，你需要在扩展搜索Dart，code runner,安装完这两个插件后 VSCode 右上角就会有个播放按钮(运行按钮),这样就可以在输出中查看运行后的输出结果

   ![安装信息](~$img/flutter/4.jpg)

<ClientOnly>
  <global-reward-index />
</ClientOnly>
