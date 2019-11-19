# ftp

## 介绍

FTP 是 TCP/IP 协议组中的协议之一，是英文File Transfer Protocol的缩写。该协议是Internet文件传送的基础，它由一系列规格说明文档组成，目标是提高文件的共享性，提供非直接使用远程计算机，使存储介质对用户透明和可靠高效地传送数据。简单的说，FTP就是完成两台计算机之间的拷贝，从远程服务器拷贝文件至自己的计算机上，自己计算机上传文件到服务器上。

## 安装指引

- [参考阿里云](https://yq.aliyun.com/articles/708809?spm=a2c4e.11153940.0.0.44361837SlIMUI)

- [安装测试](https://cloud.tencent.com/developer/labs/gallery?category=env_build)

- 安装并启动FTP服务

```powershell
yum install vsftpd -y
```

- 安装完成后，启动 FTP 服务

```powershell
service vsftpd start
```

- 启动后，可以看到系统已经监听了21端口（FTP 协议默认使用 21 端口作为服务端口）

```powershell
netstat -nltp | grep 21
```

> 此时，访问 `ftp://你的IP地址`，可以浏览机器上的`/var/ftp`目录了, 默认开启匿名`anonymous`访问模式。默认访问目录`/data/ftp/pub`,且只有只读权限

## 配置FTP权限

::: tip 提示
vsftpd 的配置目录为 `/etc/vsftpd`，包含下列的配置文件：  
`vsftpd.conf` 为主要配置文件  
`ftpusers` 配置禁止访问 FTP 服务器的用户列表  
`user_list` 配置用户访问控制,阻止匿名访问和切换根目录  
匿名访问和切换根目录都会给服务器带来安全风险，我们把这两个功能关闭  
:::

- 编辑 `/etc/vsftpd/vsftpd.conf`，找到下面两处配置并修改

```powershell
vim /etc/vsftpd/vsftpd.conf
```

```js
// 禁用匿名用户，默认YES，改为NO
anonymous_enable=NO
// 禁止切换根目录，默认是注释的，把前面的注释符#去掉
chroot_local_user=YES
```

- 保存后，重启一下FTP

```powershell
service vsftpd restart
```

- 创建 FTP 用户, 例如创建一个用户名叫做admin的用户

```powershell
useradd admin
```

- 为用户 admin 设置密码

```powershell
echo "admin123" | passwd admin --stdin
```

- 限制用户 admin 只能通过 FTP 访问服务器，而不能直接登录服务器

```powershell
usermod -s /sbin/nologin admin
```

- 为用户分配主目录并设置权限, `/workspace/ftp` 为主目录, 该目录不可上传文件`/workspace/ftp/pub` 文件只能上传到该目录下,前提是这些目录都要存在

```powershell
chmod a-w /workspace/ftp && chmod 777 -R /workspace/ftp/pub
```

- 设置用户admin的主目录, 用户的主目录是用户通过 FTP 登录后看到的根目录

```powershell
usermod -d /workspace/ftp admin
```

## 可视化FTP工具(FileZilla)[下载地址](https://www.filezilla.cn/download/client)

- 使用客户端连接服务器，实现本机与服务器之间文件上传下载

- ![2.jpg](~$img/PE/2.jpg)
