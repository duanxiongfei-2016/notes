# Redis

## 介绍

- 非关系型数据库

- Redies (内存型)

- Mongodb (存储型)

- Memcached (内存型)

- 内存型数据库和存储型数据库的区别就是，内存型的是将数据存储到内存中，而存储型数据库是将数据存储到硬盘中，内存中数据读写速度快，而硬盘读写速度慢。

## NoSQL主要使用场景

- 专门应对高并发，需要高速读写的场景，而就 `Redis` 技术而言，它的性能十分优越，可以支持每秒十几万次的读/写操作，其性能远超数据库，并且还支持集群，分布式，主从同步等配置。

## mac安装

```powershell
brew install redis
```

## 启动

```powershell
redis-server --port 6389  # 默认端口6379
```

## 初始化默认配置文件

- conf文件路径 `/usr/local/etc/redis.conf`

```powershell
# 绑定的主机地址
bind 127.0.0.1 ::1
# 是否启用守护进程 启用后Redis会生成一个进程pid文件 /var/run/redis.pid
protected-mode yes
# 启用守护进程生成pid文件的路径
pidfile /var/run/redis_6379.pid
# 毋庸置疑 redis启动的端口号
port 6379
# 当客户端启用多长时间后不操作关闭连接，如果指定为0，就是无论闲置多久都不会关闭
timeout 0
# 日志记录级别，redis支持4个级别debug，verbose，notice，warning，默认notice
# debug (很多信息，对开发/测试比较有用)
# verbose (many rarely useful info, but not a mess like the debug level)
# notice (moderately verbose, what you want in production probably)
# warning (only very important / critical messages are logged)
loglevel debug
# 设置连接数据库的连接数量上限
databases 16
```

## redis-cli简易使用

- 类似于node命令，交互式命令行客户端

```powershell
redis-cli -h 127.0.0.1 -p 6379
```

- 比如关闭redis连接

```powershell
SHUTDOWN
```

![1.jpg](~$img/node/redis/1.jpg)

### 命令返回值

#### 1. 整数回复 `incr`

- redis `incr` 命令将 `key` 中存储的数字值增一

- 如果 `key` 不存在，那么 `key` 的值就会初始化为0，然后再执行 `incr` 操作

- 如果值包含错误的类型，或字符串类型的值不能表示为数字，那么返回一个错误

```powershell
127.0.0.1:6379> incr hello
(integer) 1
127.0.0.1:6379> incr hello
(integer) 2 # 自增1
```

#### 1. 字符串回复

```powershell
```