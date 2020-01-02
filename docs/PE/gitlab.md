# gitlab

> 私有 gitlab 仓库环境搭建, [参考文献](https://about.gitlab.com/install/#centos-7)

::: danger 注意
安装使用 GitLab 需要至少 4GB 可用内存(RAM + Swap)! 由于操作系统和其他正在运行的应用也会使用内存, 所以安装 GitLab 前一定要注意当前服务器至少有 4GB 的可用内存. 少于 4GB 内存会导致在 reconfigure 的时候出现各种诡异的问题, 而且在使用过程中也经常会出现 500 错误
:::

## 环境准备

1. 安装基础依赖

   ```powershell
   # 安装技术依赖
   sudo yum install -y curl policycoreutils-python openssh-server
   # 启动ssh服务&设置为开机启动
   sudo systemctl enable sshd
   sudo systemctl start sshd
   ```

2. 安装 Postfix

   Postfix 是一个邮件服务器，GitLab 发送邮件需要用到

   ```powershell
   # 安装postfix
   sudo yum install -y postfix
   # 启动postfix并设置为开机启动
   sudo systemctl enable postfix
   sudo systemctl start postfix
   ```

3. 开放 ssh 以及 http 服务（80 端口）

   ```powershell
   #开放ssh、http服务
   sudo firewall-cmd --add-service=ssh --permanent
   sudo firewall-cmd --add-service=http --permanent

   #重载防火墙规则
   sudo firewall-cmd --reload
   ```

## 安装 GitLab

> 我们部署的是社区版

1. Yum 安装 GitLab,添加 GitLab 社区版 Package

   ```powershell
   curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash
   ```

2. 安装 GitLab 社区版

   ```powershell
   sudo yum install -y gitlab-ce
   ```

3. 配置 GitLab 站点 Url

   > GitLab 默认的配置文件路径是 `/etc/gitlab/gitlab.rb`，我们来更改它，（大约在第 15 行）

   ```powershell
   # 默认的站点Url配置项是
   external_url 'http://gitlab.example.com'
   # 这里我将GitLab站点Url修改为http://gitlab.dxf2016.cn,在域名解析里面把你的gitlab服务器IP加进去。
   # 也可以用IP代替域名，这里根据自己需求来即可
   ```

4. 启动并访问 GitLab

   ```powershell
   sudo gitlab-ctl reconfigure
   # 完成后将会看到如下输出
   Running handlers complete
   Chef Client finished, 432/613 resources updated in 03 minutes 43 seconds
   gitlab Reconfigured!
   ```

5. 访问 GitLab

   将设置的域名 DNS 解析到服务器 IP，或者修改本地 host 将域名指向服务器 IP
   访问 `http://gitlab.dxf2016.cn`

6. 设置管理员密码
   > 这时候会提示为管理员账号设置密码。管理员账号默认 username 是 root。设置完成之后即可使用 root 账号登录，登陆后会进入欢迎界面
   > ![gitlab](~$img/PE/4.png)

## GitLab Postfix 发送邮件邮箱设置

1. 确定 postfix 是启动状态

   ```powershell
   systemctl status postfix
   # 出现下面Active: active (running)说明postFix已经启动成功了
   # ● postfix.service - Postfix Mail Transport Agent
   # Loaded: loaded (/usr/lib/systemd/system/postfix.service; enabled; vendor preset: disabled)
   # Active: active (running) since Thu 2019-01-17 10:24:03 CST; 1 day 1h ago
   ```

2. vim 打开 gitlab 的配置文件： `/etc/gitlab/gitlab.rb` ，新增以下内容,就是配置发送邮件的原邮箱

   ```powershell
   gitlab_rails['smtp_enable'] = true
   gitlab_rails['smtp_address'] = "smtp.qq.com"
   gitlab_rails['smtp_port'] = 465  # （注意，不要用25端口）
   gitlab_rails['smtp_user_name'] = "10627xxx@qq.com"  # 你自己QQ邮箱地址
   gitlab_rails['smtp_password'] = "*************"    # QQ授权码
   gitlab_rails['smtp_domain'] = "smtp.qq.com"
   gitlab_rails['smtp_authentication'] = "login"
   gitlab_rails['smtp_enable_starttls_auto'] = true
   gitlab_rails['smtp_tls'] = true
   gitlab_rails['gitlab_email_from'] = '10627xxx@qq.com'   # 你自己QQ邮箱地址
   ```

3. QQ 授权码哪里来？打开 QQ 邮箱-设置-账户-帐户安全-开启服务-POP3/SMTP 服务-生成授权码-发个短信

   ![5.png](~$img/PE/5.png)

   ![6.png](~$img/PE/6.png)

4. 配置完成后执行 gitlab-ctl reconfigure 让配置生效

   ```powershell
   gitlab-ctl reconfigure
   ```

5. 当你进入用 root 账号 gitlab 之后，创建一个新的账号的时候，会通过`10627xxx@qq.com` 你配置的邮箱账号给新创建的邮箱账号发送邮件

   ![7.png](~$img/PE/7.png)

## GitLab 常用配置

1. 禁用创建组权限

   GitLab 默认所有的注册用户都可以创建组。但对于团队来说，通常只会给 Leader 相关权限。虽然可以在用户管理界面取消权限，但毕竟不方便。我们可以通过配置 GitLab 默认禁用创建组权限。

   ```powershell
   #修改配置文件
   sudo vi /etc/gitlab/gitlab.rb

   #开启gitlab_rails['gitlab_default_can_create_group'] 选项，并将值设置为false
   ### GitLab user privileges
   gitlab_rails['gitlab_default_can_create_group'] = false

   #保存后，重新配置并启动GitLab
   sudo gitlab-ctl reconfigure
   ```

2. gitlab-ctl 常用命令介绍

   |      命令       |                            说明                            |
   | :-------------: | :--------------------------------------------------------: |
   |  check-config   |   检查在 gitlab 中是否有任何配置。在指定版本中删除的 rb    |
   |   deploy-page   |                        安装部署页面                        |
   |   diff-config   |               将用户配置与包可用配置进行比较               |
   | remove-accounts |                      删除所有用户和组                      |
   |     upgrade     |                            升级                            |
   |  service-list   |                        查看所有服务                        |
   |      once       | 如果 GitLab 服务停止了就启动服务，如果已启动就不做任何操作 |
   |     restart     |                      重启 GitLab 服务                      |
   |      start      |   如果 GitLab 服务停止了就启动服务，如果已启动就重启服务   |
   |      stop       |                      停止 GitLab 服务                      |
   |     status      |                    查看 GitLab 服务状态                    |
   |   reconfigure   |             reconfigure 重新配置 GitLab 并启动             |

## GitLab nginx 冲突解决

你安装 gitlab 的时候，gitlab 自带内置 nginx，如果你自己安装了 nginx，会与你的 nginx 产生冲突，那么我们该怎么办呢！

### 禁用 gitlab 自带 Nginx 并把 UNIX 套接字 更改为 TCP 端口

1. 禁用捆绑的 Nginx, `vim /etc/gitlab/gitlab.rb`

```js
nginx['enable'] = true // 改为 nginx['enable'] = false, 并将前面的 # 去掉
```

2. 允许 gitlab-workhorse 监听 TCP（默认端口 8181）, `vim /etc/gitlab/gitlab.rb`

```js
gitlab_workhorse['listen_network'] = 'tcp'
gitlab_workhorse['listen_addr'] = '127.0.0.1:8181'
```

3. 运行`sudo gitlab-ctl reconf` 使更改生效

4. 通过系统原本安装的 Nginx 反代以便提供访问

```powershell
vim /etc/nginx/conf.d/default.conf #你的conf配置文件

# 增加这一项
location / {
    root  html;
    index index.html index.htm;
    proxy_pass http://127.0.0.1:8181;
}

# 最后重启一下nginx  =>  systemctl restart nginx
```

<ClientOnly>
  <global-reward-index />
</ClientOnly>
