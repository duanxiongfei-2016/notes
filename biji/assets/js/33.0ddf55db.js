(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{610:function(e,a,s){"use strict";s.r(a);var t=s(2),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),s("p",[e._v("Docker是一个开放源代码软件项目，让应用程序部署软件的工作可以自动化进行，借此在Linux操作系统上，提供一个额外的软件抽象层，以级操作系统层虚拟化的自动管理机制。")]),e._v(" "),s("p",[e._v("Docker利用Linux核心中的资源分离机制，例如cgroups,以及Linux核心名字空间（namespaces）,来创建独立的容器（containers）。就是类似于沙箱模型。")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dockerhub地址"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"安装指引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装指引","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装指引")]),e._v(" "),s("ul",[s("li",[e._v("添加Docker镜像源")])]),e._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[e._v("yum"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("config"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("manager "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("add"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("repo https:"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("download"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("linux"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("centos"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ce"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("repo\n")])])]),s("ul",[s("li",[e._v("安装Docker")])]),e._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[e._v("yum install docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ce "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("y\n")])])]),s("ul",[s("li",[e._v("Docker加入开机启动")])]),e._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[e._v("systemctl enable docker\n")])])]),s("ul",[s("li",[e._v("启动Docker")])]),e._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[e._v("systemctl "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("start")]),e._v(" docker\n")])])]),s("h2",{attrs:{id:"阿里云容器镜像加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阿里云容器镜像加速","aria-hidden":"true"}},[e._v("#")]),e._v(" 阿里云容器镜像加速")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors",target:"_blank",rel:"noopener noreferrer"}},[e._v("请参考阿里云配置文档：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"镜像使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像使用","aria-hidden":"true"}},[e._v("#")]),e._v(" 镜像使用")]),e._v(" "),s("ul",[s("li",[e._v("常用命令")])]),e._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[e._v("docker images  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 列举镜像")]),e._v("\ndocker pull  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 拉取镜像")]),e._v("\ndocker search  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查找镜像 类似于yum,在dockerhub中查找匹配的镜像源， 例如docker search nginx")]),e._v("\ndocker build  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 构建镜像")]),e._v("\ndocker tag  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 镜像标签")]),e._v("\n")])])]),s("ul",[s("li",[e._v("先拉取一个nginx镜像")])]),e._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[e._v("docker pull nginx\n")])])]),s("blockquote",[s("p",[e._v("请参考 "),s("a",{attrs:{href:"https://hub.docker.com/_/nginx",target:"_blank",rel:"noopener noreferrer"}},[e._v("dockerhub官方镜像及使用方法"),s("OutboundLink")],1)])]),e._v(" "),s("ul",[s("li",[e._v("列举本地镜像")])]),e._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("[root@VM_0_13_centos ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# docker images")]),e._v("\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nnginx               latest              f949e7d76d63        7 hours ago         126MB\n")])])]),s("h2",{attrs:{id:"容器使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器使用","aria-hidden":"true"}},[e._v("#")]),e._v(" 容器使用")]),e._v(" "),s("ul",[s("li",[e._v("常用命令")])]),e._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[e._v("docker "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看容器")]),e._v("\ndocker run  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 运行容器")]),e._v("\ndocker top  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看进程")]),e._v("\ndocker stop  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 停止容器")]),e._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("start")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 重启容器")]),e._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 移除容器")]),e._v("\n")])])]),s("ul",[s("li",[s("p",[e._v("docker run命令参数 "),s("code",[e._v("docker run [OPTIONS]IMAGE[command][ARG...]")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("-d")]),e._v(": 后台运行容器，并返回容器ID")]),e._v(" "),s("li",[s("code",[e._v("-i")]),e._v(": 以交互模式运行容器，通常与"),s("code",[e._v("-t")]),e._v("同时使用")]),e._v(" "),s("li",[s("code",[e._v("-p")]),e._v(": 端口映射，格式为 主机端口:容器端口 例如 80:8080 => 主机80端口映射到容器8080端口")]),e._v(" "),s("li",[s("code",[e._v("-t")]),e._v(": 为容器重新分配一个伪输入终端，通常与"),s("code",[e._v("-i")]),e._v("同时使用")]),e._v(" "),s("li",[s("code",[e._v("--name='nginx-lb'")]),e._v(": 为容器指定一个名称")]),e._v(" "),s("li",[s("code",[e._v("-h 'mars'")]),e._v(": 指定容器的hostname")]),e._v(" "),s("li",[s("code",[e._v("-m")]),e._v(": 设置容器使用内存最大值")])])]),e._v(" "),s("li",[s("p",[e._v("举个栗子")]),e._v(" "),s("p",[s("code",[e._v("docker run -p 80:8080 -d nginx:latest")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);