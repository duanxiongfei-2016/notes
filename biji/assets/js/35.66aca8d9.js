(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{616:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" nginx")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("ol",[a("li",[t._v("下载对应当前系统版本的nginx包(package)")])]),t._v(" "),a("div",{staticClass:"language-powerShell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("wget http:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("packages"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("centos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("7"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("noarch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("RPMS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("release"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("centos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("7"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("noarch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rpm\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("建立nginx的yum仓库")])]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("rpm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ivh nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("release"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("centos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("7"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ngx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("noarch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rpm\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("下载并安装nginx")])]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("yum install nginx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("启动nginx服务")])]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("systemctl "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" nginx\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("默认的配置文件在 "),a("code",[t._v("/etc/nginx")]),t._v(" 路径下，使用该配置已经可以正确地运行nginx；如需要自定义，修改其下的 "),a("code",[t._v("nginx.conf")]),t._v("等文件即可。")])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("nginx常用命令")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("nginx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看 Nginx 版本")]),t._v("\nsystemctl start nginx         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动 Nginx")]),t._v("\nsystemctl restart nginx       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动 Nginx")]),t._v("\nsystemctl stop nginx          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重启 Nginx")]),t._v("\nnginx                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 停止 Nginx")]),t._v("\nnginx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s stop                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 停止 Nginx")]),t._v("\nnginx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s reload               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重启 Nginx")]),t._v("\nps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" grep nginx          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看nginx进程号")]),t._v("\nnginx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("路径"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查配置文件是否正确 这里路径一般是 /etc/nginx")]),t._v("\n")])])]),a("h2",{attrs:{id:"前端server模块配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端server模块配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端server模块配置")]),t._v(" "),a("blockquote",[a("p",[t._v("文件位置 /etc/nginx/conf.d/default.conf")])]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 监听的端口号")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("  notes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dxf5566"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 前端访问地址，例如输入域名 http://notes.dxf5566.cn/,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx就会找  到/var/lib/jenkins/workspace/notes/dist下面的index文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jenkins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("workspace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("notes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工作目录")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("autoindex")]),t._v("  on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 反向代理")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配到请求以/api开头的接口时，转发到百度服务器地址，类似于webpack的proxy")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baidu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 转发目标服务器地址")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_redirect")]),t._v("  off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否重定向")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路径重写，就是请求路径是 /api/detail被重写为/detail")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("client_max_body_size")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每个客户端请求报文的body部分的缓冲区大小，默认16k")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_page")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 虚拟主机名")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主目录")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alias")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路径别名")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定url特性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",[a("li",[t._v("注意；如果配置好之后，访问403Forbidden,于是查看nginx日志，路径为 "),a("code",[t._v("/var/log/nginx/error.log")]),t._v("。打开日志发现报错Permission denied没有权限，因此更改一下启动用户的用户名，更改文件路径 "),a("code",[t._v("/etc/nginx/nginx.conf")])])]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里默认是nginx,如果你是root用户，那你把用户名改为root")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("worker_processes")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("每一个sever模块就是一个虚拟主机")])])])}),[],!1,null,null,null);s.default=e.exports}}]);