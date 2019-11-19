# MongoDB

## MongoDB 介绍

> MongoDB是一个用json（bson）格式存储的数据库

## 概念

> 一个mangoDB有可以放多个数据库
>
> 数据库里面有数据表（这里叫做集合）
>
> 数据表里面又有很多键值对，也就是真正的数据（这里叫文档，json格式的）
>
> 这里存储的json格式数据叫做bson（json的子集）

## 官网链接

- [英文官网](https://www.mongodb.com/)
- [中文官网](https://www.mongodb.com/cn)
- [菜鸟教程](http://www.runoob.com/mongodb/mongodb-tutorial.html)
- [视频教程](https://www.itying.com/category-79-b0-min0-max0-attr0-2-sort_order-DESC.html)

## 安装

### mac安装

1. 安装MongoDB有三种方式：（1）手动命令安装（2）采用Homebrew（3）下载安装包,下面教程是第三种方式安装
[下载地址](https://www.mongodb.com/download-center/community)

![下载地址](~$img/node/mongodb/1.png)

2. 将下载下来的.tgz文件解压后的文件夹改名为mongodb,然后打开终端，进入`cd /usr/local`目录，然后`open .`打开文件夹，将刚刚解压改名的mongodb文件夹copy到local目录中

![下载地址](~$img/node/mongodb/2.png)

![下载地址](~$img/node/mongodb/3.png)

3. 配置环境变量，打开终端，输入`open ~/.bash_profile`，在打开的文件中加入

```powershell
export PATH=${PATH}:/usr/local/mongodb/bin
```

![下载地址](~$img/node/mongodb/4.png)

4. 保存之后，重启一下bash_profile使之环境变量生效

```powershell
source ~/.bash_profile
```

5. 验证是否安装成功，`mongod -version`回车后如果看到下面的版本号则说明MongoDB已经成功安装到了Mac上

```powershell
mongod -version
```

![下载地址](~$img/node/mongodb/5.png)

### 服务器CenterOS安装

1. 配置MongoDB的yum源

```powershell
vim /etc/yum.repos.d/mongodb-org-4.0.repo
# 添加以下配置
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
```

2. 安装MongoDB

```powershell
yum -y install mongodb-org
```

::: warning 提示
mongodb-org将自动安装以下四个组件包
  1. `mongodb-org-server`：包含mongod守护程序，关联的init脚本和配置文件（`/etc/mongod.conf`）。您可以使用初始化脚本从mongod 配置文件开始。默认情况下`/etc/mongod.conf`，程序包提供的配置文件已bind_ip设置为127.0.0.1。在初始化副本集之前，根据您的环境需要修改此设置
  2. `mongodb-org-mongos`：包含mongos守护进程
  3. `mongodb-org-shell`：包含mongoshell
  4. `mongodb-org-tools`：一些扩展
:::

3. 检查是否安装成功

```powershell
mongod -version  #  出现db version v4.0.12说明已经安装成功
```

4. 启动MongoDB数据库

```powershell
systemctl start mongod   # 启动
systemctl restart mongod # 重启
systemctl stop mongod    # 关闭
```

5. mongod.conf的配置，文件路径为`/etc/mongod.conf`

```powershell
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log  # mongod的日志存放文件路径

# Where and how to store data.
storage:
  dbPath: /var/lib/mongo      # mongod的数据存放文路径
  journal:
    enabled: true
#  engine:
#  mmapv1:
#  wiredTiger:

# how the process runs
processManagement:
  fork: true  # fork and run in background 是否后台启动
  pidFilePath: /var/run/mongodb/mongod.pid  # location of pidfile
  timeZoneInfo: /usr/share/zoneinfo

# network interfaces
net:
  port: 27017 # 数据库启动端口，建议不要改，一般都是默认27017
  bindIpAll: true # bindIpAll和下面的bindIp是互斥的，就是说两者不能同时存在，默认是bindIp: 127.0.0.1
  # bindIp: 127.0.0.1  # Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.

security:
  authorization: enabled # 打开auth认证  使用用户名密码验证

#operationProfiling:

#replication:

#sharding:

## Enterprise-Only Options

#auditLog:

#snmp:
```

::: warning 提示
这是我的mongod.conf配置
  在这里重点解释一下30，31这两行的配置，bindIpAll和bindIp是互斥的，也就是说两者不能同时存在，默认是bindIp: 127.0.0.1，没有bindIpAll: true，如果是bindIp: 127.0.0.1，那么只能通过本机访问数据库，做了ip访问限制，外网及navicat等等图形化工具是无法连接mongod数据库的。如果是bindIpAll: true，那么公网都是可以访问的

  再解释一下33, 34这两行, authorizatio默认是disabled,不开启用户密码认证，公网任何人都可以访问的，进来之后show dbs可以看到所有的数据库，如果配置了authorization: enabled，打开认证的话，进来之后show dbs会发现不会出现所有数据库了，因为设置了账户权限，要想正常访问，需要使用账户名和密码进去
  `mongo admin -u 用户名 -p 密码`即可，如果是访问远程数据库呢，命令如下`mongo 192.168.1.200:27017/<test> -u <user> -p <password>`,其中\<test\>数据库名称， \<user\>用户账号， \<password\>用户密码
:::

6. MongoDB配置用户名密码权限

在服务器上通过`mongo`命令，直接进入到mongoshell中，然后`show dbs`会出现三个默认的库admin config local，

```powershell
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> use admin   # 进入到admin这个库中
switched to db admin
> show collections # 或者也可以用 show tables 查看当前admin库里面有哪些表
system.users
system.version
users
> db.createUser({user:"admin",pwd:"admin123",roles:[{role:"root", db:"admin"}]})  # 创建超级管理员 ,可以登陆操作全部的数据库
Successfully added user: {
	"user" : "admin",
	"roles" : [
		{
			"role" : "root",
			"db" : "admin"
		}
	]
}
> db.createUser({user:"admin",pwd:"admin123",roles:[{role:"userAdminAnyDatabase",db:"admin"}]}) # 创建用户角色管理员 ,可以添加用户
Successfully added user: {
	"user" : "admin",
	"roles" : [
		{
			"role" : "userAdminAnyDatabase",
			"db" : "admin"
		}
	]
}
> use weChat # 创建一个名字叫做weChat数据库
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
weChat  0.000GB # 此时已成功创建名字为weChat这个数据库了
> db.createUser({user: 'test', pwd: 'test123', roles: [{role: 'readWrite', db: 'weChat'}]}) # 创建一个普通用户，对weChat数据库只有读写权限
> db.system.users.remove({"user": "test"}) # 删除test用户
```

然后你就可以通过 `mongo 192.168.1.200:27017/weChat -u test -p test123` 这样连接数据库

#### 具体用户权限

- **read**：允许用户读取指定数据库

- **readWrite**：允许用户读写指定数据库

- **dbAdmin**：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile

- **userAdmin**：允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户

- **clusterAdmin**：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。

- **readAnyDatabase**：只在admin数据库中可用，赋予用户所有数据库的读权限

- **readWriteAnyDatabase**：只在admin数据库中可用，赋予用户所有数据库的读写权限

- **userAdminAnyDatabase**：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限

- **dbAdminAnyDatabase**：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。

- **root**：只在admin数据库中可用。超级账号，超级权限。

- 配置成功之后，公网可以通过账号密码访问数据了

7. MongoDB图形化工具

[官方推荐工具 Robo 3T](https://robomongo.org/download)

[navicat](https://www.navicat.com.cn/download/navicat-for-mongodb)

8. navicat连接mongodb数据库后

![6.jpg](~$img/node/mongodb/6.jpg)

## mongoose

### 安装mongoose

```powershell
  npm i mongoose -s
```

### 引入mongoose并连接mongodb


```js
const mongoose = require('mongoose')
// 连接数据库格式
mongoose.connect('mongodb://[ip]:[port]/[dataBase]')
// 示例
mongoose.connect('mongodb://132.232.36.133:27017/test')
```

如果数据库配置了账户密码

```js
mongoose.connect('mongodb://admin:admin123@localhost:27017/test')
// 也可以这么连接
mongoose.connect('mongodb://localhost:27017/test', {
    user: 'admin',
    pass: 'admin123',
    useNewUrlParser: true
})
```

### schema

  - [schema模型文档](http://www.mongoosejs.net/docs/schematypes.html)

  - 什么是schema?schema可以理解为数据库对象的集合，schema是mongoose会用到的一种数据模型，也就是表结构的定义。每一个schema会映射到mongodb  中的一个collection，数据模型 数据结构，例如最简单的一个schema { name: String, age: Number, pwd: String }

  - 举个注册接口的schema，这里面可以对每一个字段进行校验(mongoose自带的 **预定修饰符**)，包括字段的类型，是否必填，正则校验等等...

  ```js
  const RegisterSchema = new Schema({
    phone: {
      type: String,
      required: [true, 'phone is required'],
      trim: true,
      validate: {
        validator (v) {
          return /^1(3|4|5|6|7|8|9)\d{9}$/.test(v)
        },
        message: props => `${props.value} is not a valid phone number!`
      }
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      trim: true,
      validate: {
        validator (v) {
          return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v)
        },
        message: props => `${props.value} is not a valid email!`
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 12,
      trim: true
    }
  })
  module.exports = {
    RegisterModel: mongoose.model('User', RegisterSchema)
    // 注意这里的User, 默认操作的是users表，因为mongodb默认会将所有的表名字后面都加一个`s`
  }
  ```

  - 使用schema数据模型，对mongodb进行 增删改查

  ```js
  const Model = require('./model')
  const { RegisterModel } = Model
  // -------------------------- 分割线 增加数据 --------------------------
  // 首先先要实例化model
  const m = new RegisterModel({
    phone: '13811112222',
    email: '123456@163.com',
    password: 'qwer123'
  })
  // 注意：操作数据库增删改查都是异步的操作
  new Promise((resolve, reject) => {
    m.save((err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
  
  // -------------------------- 分割线 查询数据 --------------------------
  // 查找多条符合条件的数据 Model.find([conditions], [callback]) conditions查找条件， callback回调函数 Model.find({age: 18}, callback)
  // 查找一条符合条件的数据 modModelel.findOne(conditions, [callback]) conditions查找条件， callback回调函数 Model.findOne({username:'admin'}, callback)
  new Promise((resolve, reject) => {
    RegisterModel.find({}, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })

  // -------------------------- 分割线 更新数据 --------------------------
  // 根据条件更新所有 Model.update(conditions, doc ,[options], [callback])
  // 根据指定条件更新一个 Model.findOneAndUpdate([conditions], [update], [options], [callback])
  new Promise((resolve, reject) => {
    RegisterModel.updateOne({userName: 'admin'}, {password: 'admin23'} (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })

  // -------------------------- 分割线 删除数据 --------------------------
  // Model.remove(conditions, [callback])
  new Promise((resolve, reject) => {
    RegisterModel.remove({userName: 'admin'}, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
  ```

### schema自定义模式修饰符 Setters & Getters

```js
// Setters 比如说：有一个url字段，将该字段如果有 `http://` 则保持现状，如果没有则添加` http://`
url: {
  type: String,
  required: [true, 'url is required'],
  trim: true,
  set (params) {
    //  在这里params可以获取url字段的值，返回的数据就是url在数据库中实际保存的值
    // 例如：前端传入的字段是www.baidu.com, 我们经过处理自动转换为 http://www.baidu.com并存入数据库中
    const REG = /^http:\/\//
    if (!REG.test(params)) {
      return `http://${params}`
    } else {
      return params
    }
  }
}

// Getters 一般没什么卵用
const PhoneSchema = new Schema({
  phone: {
    type: String,
    required: [true, 'phone is required'],
    trim: true,
    validate: {
      validator (v) {
        return /^1(3|4|5|6|7|8|9)\d{9}$/.test(v)
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    get (params) {
      return `+86${params}`
    }
  }
})
const PhoneModel = mongoose.model('Phone', PhoneSchema, 'phones')
const m = new PhoneModel({
  phone: '13811112222',
  email: '123456@163.com',
  password: 'qwer123'
})
console.log(m.phone) // +8613811112222
```
