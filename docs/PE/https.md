# https-ssl证书

## 介绍

- 超文本传输协议HTTP协议被用于在Web浏览器和网站服务器之间传递信息，HTTP协议以明文方式发送内容，不提供任何方式的数据加密，如果攻击者截取了Web浏览器和网站服务器之间的传输报文，就可以直接读懂其中的信息，因此，HTTP协议不适合传输一些敏感信息，比如：信用卡号、密码等支付信息。

- 为了解决HTTP协议的这一缺陷，需要使用另一种协议：安全套接字层超文本传输协议HTTPS，为了数据传输的安全，HTTPS在HTTP的基础上加入了SSL/TLS协议，SSL/TLS依靠证书来验证服务器的身份，并为浏览器和服务器之间的通信加密。

- HTTPS协议是由SSL/TLS+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全

- HTTPS协议的主要作用可以分为两种：一种是建立一个信息安全通道，来保证数据传输的安全；另一种就是确认网站的真实性。

## https和http的主要区别

- https协议需要到CA申请证书。

- http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl/tls加密传输协议。

- http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。

- http的连接很简单，是无状态的；HTTPS协议是由SSL/TLS+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

## https申请

[腾讯云证书申请](https://console.cloud.tencent.com/ssl)

[阿里云证书申请](https://yundun.console.aliyun.com/?spm=5176.12818093.recent.dcas.488716d0XOoPNV&p=cas#/overview/cn-hangzhou)

::: tip 说明 SSL证书有免费型和付费型
- 免费SSL证书只有域名验证性型（DV SSL证书）
- 而付费SSL证书有域名验证型（DV SSL证书）、企业验证型（OV SSL证书）、组织验证型（EV SSL证书）
- 总的来说，免费的SSL证书，适用于个人博客，作为一个临时的解决方案。企业或流量较高的个人网站还是选择付费的SSL证书比较好
:::

在阿里云或者腾讯云申请成功之后，一般10分钟之内就会下发SSL证书

## SSL之Nginx配置

[腾讯云Nginx 服务器证书安装配置文档](https://cloud.tencent.com/document/product/400/35244)

[阿里云Nginx 服务器证书安装配置文档](https://help.aliyun.com/document_detail/98728.html?spm=5176.2020520163.0.0.657156a7ydTEHF)

1. 这里以腾讯云SSL证书申请为例子，在下发SSL证书之后，下载证书文件压缩包，解压之后会得到以下文件夹

![img](~$img/PE/3.jpg)

2. 进入Nginx文件夹，里面包含 `1_www.dxf5566.cn_bundle.crt` 证书和 `2_www.dxf5566.cn.key` 私钥两个文件

3. 将这两个文件拷贝到你的服务器 `/etc/nginx` 目录中

```powershell
scp /Users/duanxiongfei/Downloads/www.dxf5566.cn/Nginx/1_www.dxf5566.cn_bundle.crt root@148.70.147.90:/etc/nginx # 将证书文件上传到服务器
scp /Users/duanxiongfei/Downloads/www.dxf5566.cn/Nginx/2_www.dxf5566.cn.key root@148.70.147.90:/etc/nginx # 将私钥文件上传到服务器
```

4. 远程进入服务器，进入 `/etc/nginx/conf.d` 目录中, 编辑 `default.conf`

```powershell
cd /etc/nginx/conf.d
vim default.conf
```

```powershell
server {
    listen 443;
    server_name www.dxf5566.cn; #填写绑定证书的域名
    ssl on; #网站主页路径。此路径仅供参考，具体请您按照实际目录操作。
    ssl_certificate  1_www.dxf5566.cn_bundle.crt; #证书文件名称，就是在上一步上传到 /etc/nginx 目录中的证书文件
    ssl_certificate_key 2_www.dxf5566.cn.key; #私钥文件名称
    #请按照这个协议配置
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_session_timeout 5m;
    #请按照这个套件配置，配置加密套件，写法遵循 openssl 标准。
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_prefer_server_ciphers on;
    #下面这个是你网站首页的路径，根据自己的路径配置
    location / {
        root   /workspace/ftp/pub/notes/dist;
        autoindex on;
    }
}

server {
    listen 80;
    #填写绑定证书的域名
    server_name www.dxf5566.cn;
    #把http的域名请求转成https, http 自动跳转 https
    rewrite ^(.*)$ https://$host$1 permanent;
}
```

5. 通过执行以下命令验证配置文件问题

```powershell
nginx -t
```

6. 重启nginx, 即可使用 `https://www.dxf5566.cn/` 访问你的网站

```powershell
systemctl restart nginx
```
