# nginx

## 安装

1. 下载对应当前系统版本的nginx包(package)

 ```powerShell
wget http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
 ```

2. 建立nginx的yum仓库

```powershell
rpm -ivh nginx-release-centos-7-0.el7.ngx.noarch.rpm
```

3. 下载并安装nginx

```powershell
yum install nginx -y
```

4. 启动nginx服务

```powershell
systemctl start nginx
```

::: tip 提示
默认的配置文件在 `/etc/nginx` 路径下，使用该配置已经可以正确地运行nginx；如需要自定义，修改其下的 `nginx.conf`等文件即可。
:::

5. nginx常用命令

```js
nginx -v                      // 查看 Nginx 版本
systemctl start nginx         // 启动 Nginx
systemctl restart nginx       // 启动 Nginx
systemctl stop nginx          // 重启 Nginx
nginx                         // 停止 Nginx
nginx -s stop                 // 停止 Nginx
nginx -s reload               // 重启 Nginx
ps -aux | grep nginx          // 查看nginx进程号
nginx -t -c /路径/nginx.conf   // 检查配置文件是否正确 这里路径一般是 /etc/nginx
```

## 前端server模块配置

> 文件位置 /etc/nginx/conf.d/default.conf

```nginx
server {
    listen       80;       # 监听的端口号
    server_name  notes.dxf5566.cn;
    # 前端访问地址，例如输入域名 http://notes.dxf5566.cn/,
    # nginx就会找  到/var/lib/jenkins/workspace/notes/dist下面的index文件
    location / {
        root   /var/lib/jenkins/workspace/notes/dist; # 工作目录
        autoindex  on;
    }
    # 反向代理
    location /api { # 匹配到请求以/api开头的接口时，转发到百度服务器地址，类似于webpack的proxy
        proxy_pass  https://www.baidu.com;    # 转发目标服务器地址
        proxy_redirect  off;    # 是否重定向
        rewrite  ^/api/(.*)$ /$1 break; # 路径重写，就是请求路径是 /api/detail被重写为/detail
        client_max_body_size    20m;   # 每个客户端请求报文的body部分的缓冲区大小，默认16k
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}

```

```nginx
server {
    server_name   # 虚拟主机名
    root    # 主目录
    alias   # 路径别名
    location    # 指定url特性
}
```

1. 注意；如果配置好之后，访问403Forbidden,于是查看nginx日志，路径为 `/var/log/nginx/error.log`。打开日志发现报错Permission denied没有权限，因此更改一下启动用户的用户名，更改文件路径 `/etc/nginx/nginx.conf`

```nginx
user  root;    # 这里默认是nginx,如果你是root用户，那你把用户名改为root
worker_processes  1;
```

> 每一个sever模块就是一个虚拟主机
