# jenkins

## 介绍

> Jenkins是一个开源的、提供友好操作界面的持续集成(CI)工具，起源于Hudson（Hudson是商用的），主要用于持续、自动的构建/测试软件项目、监控外部任务的运行（这个比较抽象，暂且写上，不做解释）。Jenkins用Java语言编写，可在Tomcat等流行的servlet容器中运行，也可独立运行。通常与版本管理工具(SCM)、构建工具结合使用。常用的版本控制工具有SVN、GIT，构建工具有Maven、Ant、Gradle

上面都是废话，没看懂！简而言之jenkins就是构建一个简易的图形化操作界面，能够帮助开发人员快速发布代码。代码发布仅仅需要点击一下“立即构建”按钮，是不是so easy！

## 安装

Jenkins 安装可以有很多种方式，我个人使用的是yum安装，所以我重点介绍一下yum安装

1. 安装java环境

   ```powershell
   yum -y install java
   ```

2. yum 源配置并安装软件

   ```powershell
   vim /etc/yum.repos.d/jenkins.repo
   ```

   ```tex
   [jenkins]
   name=jenkins-stable
   baseurl=http://pkg.jenkins.io/redhat-stable
   enabled=1
   gpgcheck=0
   ```

3. 安装jenkins

   ```powershell
   yum -y install jenkins
   ```

4. 启动jenkins并设置为开机启动

   ```powershell
   systemctl start jenkins # jenkins默认启动端口8080
   chkconfig jenkins on
   netstat -tunlp | grep 8080
   ```

5. 浏览器进入服务器ip:8080配置Jenkins图形化界面，访问出现一个糟老头子，说明jenkins启动成功了，接下来你需要配置jenkins了！

## jenkins配置

1. 进入`/var/lib/jenkins/secrets/initialAdminPassword`文件查看登录密码

```powershell
cat /var/lib/jenkins/secrets/initialAdminPassword
```

2. 下面这一大堆就是登录密码了

- ![1.jpg](~$img/jenkins/1.jpg)

> 将上面的密码输入到下面的输入框中去

- ![2.jpg](~$img/jenkins/2.jpg)
- ![3.jpg](~$img/jenkins/3.jpg)
- ![4.jpg](~$img/jenkins/4.jpg)

3. 此处安静的等待🚬🚬两根烟的时间，插件安装完毕！

- ![5.png](~$img/jenkins/5.png)

4. 配置访问URL

- ![6.jpg](~$img/jenkins/6.jpg)
