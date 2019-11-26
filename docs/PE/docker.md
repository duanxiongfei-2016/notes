# Docker

## 介绍

Docker是一个开放源代码软件项目，让应用程序部署软件的工作可以自动化进行，借此在Linux操作系统上，提供一个额外的软件抽象层，以级操作系统层虚拟化的自动管理机制。

Docker利用Linux核心中的资源分离机制，例如cgroups,以及Linux核心名字空间（namespaces）,来创建独立的容器（containers）。就是类似于沙箱模型。

[dockerhub地址](https://hub.docker.com/)

## 安装指引

- 添加Docker镜像源

```powershell
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

- 安装Docker

```powershell
yum install docker-ce -y
```

- Docker加入开机启动

```powershell
systemctl enable docker
```

- 启动Docker

```powershell
systemctl start docker
```

## 阿里云容器镜像加速

[请参考阿里云配置文档：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)

## 镜像使用

- 常用命令

```powershell
docker images  # 列举镜像
docker pull  # 拉取镜像
docker search  # 查找镜像 类似于yum,在dockerhub中查找匹配的镜像源， 例如docker search nginx
docker build  # 构建镜像
docker tag  # 镜像标签
```

- 先拉取一个nginx镜像

```powershell
docker pull nginx
```

> 请参考 [dockerhub官方镜像及使用方法](https://hub.docker.com/_/nginx)

- 列举本地镜像

```powershell
[root@VM_0_13_centos ~]# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nginx               latest              f949e7d76d63        7 hours ago         126MB
```

## 容器使用

- 常用命令

```powershell
docker ps  # 查看容器
docker run  # 运行容器
docker top  # 查看进程
docker stop  # 停止容器
docker start  # 重启容器
docker rm # 移除容器
```

- docker run命令参数 `docker run [OPTIONS]IMAGE[command][ARG...]`
    - `-d`: 后台运行容器，并返回容器ID
    - `-i`: 以交互模式运行容器，通常与`-t`同时使用
    - `-p`: 端口映射，格式为 主机端口:容器端口 例如 80:8080 => 主机80端口映射到容器8080端口
    - `-t`: 为容器重新分配一个伪输入终端，通常与`-i`同时使用
    - `--name='nginx-lb'`: 为容器指定一个名称
    - `-h 'mars'`: 指定容器的hostname
    - `-m`: 设置容器使用内存最大值  

- 举个栗子

    `docker run -p 80:8080 -d nginx:latest`

<ClientOnly>
  <global-reward-index />
</ClientOnly>
