## 核心知识点概览

### Ansible

#### Ansible 有哪些特性

* Agentless，无客户端
* Serverless，在服务端无需启动任何服务，只需执行命令即可
* 默认使用ssh控制各节点
* 基于模块工作，可以使用任何语言编写模块
* 使用yaml语言定制playbook
* 幂等性，多次操作或多次执行不影响结果

#### Ansible 配置文件解析优先级，由高到低依次为

1. ANSIBLE_CONFIG 环境变量指定的配置文件
2. 当前目录下的的ansible.cfg
3. 家目录下的ansible.cfg
4. /etc/ansible/ansible.cfg

#### Ansible inventory 知识点

* inventory 主机清单，包含静态inventory和动态inventory
* 要使用多个inventory的功能，需将inventory指定为文件目录（默认为/etc/ansible/hosts文件）
* inventory指定目录时，目录下文件最好不要带有后缀名
* Ansible 默认预定义了两个主机组：`all`分组（所有主机）和`ungrouped`分组（不在分组内的主机）
* ansible-inventory命令
  * 树状形式展开主机列表`ansible-inventory all --graph`
  * 同时带上变量`ansible-inventory all --graph --vars`
*  通过`--limit`或`-l`明确指定主机或组

#### Ansible-hoc（点对点模式）知识点

* `ansible-doc -l`查看有哪些模块，`ansible-doc -s moudle `查看某个模块的参数，`ansible-doc module`查看该模块更详细的信息

* 命令格式`ansible 主机或组 -m 模块名 -a '模块参数'  ansible参数`

* 4个命令执行模块的区别：

  - command模块：该模块通过-a跟上要执行的命令可以直接执行，不过命令里如果有带有如下字符部分则执行不成功 “ "<", ">", "|", "&" 
  - shell 模块：用法基本和command一样，不和command相同，但是支持解析特殊shell符号
  - raw模块：执行底层shell命令。command和shell模块都是通过目标主机上的python代码启动/bin/sh来执行命令的，raw模块在远程主机上直接启动/bin/sh来执行命令
  - script模块：在远程主机上执行脚本文件，其原理是先将shell 复制到远程主机，再在远程主机上执行

* debug 模块

  用于输出调试一些数据，模块包含如下选项：

  * msg：可以输出字符串，可以输出变量的值，变量调用需加"{{}}"
  * var：只能输出变量的值，变量调用无需加任何东西，只需数据变量名称

* lineinfile 模块

  lineinfile模块用于在源文件中插入、删除、替换行，和sed命令的功能类似，也支持正则表达式匹配和替换。

  * path 指定文件
  * line  行内容
  * regexp 正则匹配
  * insertbefore，insertafter 匹配的行前后插入
  * state 状态
  * regexp和insertXXX结合，regexp参数则充当幂等性判断参数：只有regepx匹配失败时，insertXXX才会插入行。

* [ ] ansible 编写了哪些roles

* [ ] ansible 常用的模块有哪些

* [ ] elk
  * [ ] elk ansbile 部署
  * [ ] elk docker 部署
  * [ ] filebeat 用到了哪些模板
  * [ ] logstash 用到了哪些模板
  
* [ ] jenkins
  * [ ] jenkins ansible 部署
  * [ ] jenkins 工具集成，用到了哪些工具
  * [ ] jenkins pipeline编写
  
* [ ] nginx
  * [ ] nginx 热升级
  * [ ] nginx 部署
  * [ ] nginx 常用模块
  * [ ] nginx 生产中用到了哪些功能
  
* [ ] system 服务配置

* [ ] tomcat 生产配置

* [ ] shell 
  
  * [ ] 编写了哪些shell，shell脚本归档
  
* [ ] python jumpserver二次开发为自动化运维平台

* [ ] golang 的基础知识，使用golang二开开发Prometheus exporter

* [ ] zabbix 
  * [ ] ansible 部署zabbix
  * [ ] zabbix 4.x 的新特性
  * [ ] zabbix webhook(js)钉钉报警
  * [ ] zabbix housekeeping 数据库分区
  * [ ] zabbix 生产级 监控上千的主机的优化，指标拉去策略，分区，代理等
  
* [ ] openldap
  * [ ] openldap的搭建
  * [ ] phpldapadmin的使用
  * [ ] 自助修改密码
  
* [ ] 常用集群，中间件，数据库的搭建
  * [ ] activemq ，zookeeper架构，存储架构 ，单节点与集群
  * [ ] rabbitmq，集群搭建，docker-compose方式搭建
  * [ ] fastdfs，单节点及集群搭建，单节点，dockerfile
  * [ ] redis 集群的搭建，redis迁移
  * [ ] mysql ansible 搭建，各个版本，单机和主从
  
* [ ] kubernetes
  * [ ] 各种组件间的关系
  * [ ] etcd 了解，及备份恢复
  * [ ] k8s的事件通知告警， 也就是 events
  * [ ] 日常的一些 kubectl 运维命令等基础
  * [ ] pod调度以及资源限制
  * [ ] Prometheus-operator，如何修改配置文件
  * [ ] kubernetes中的CI/CD，日志集成
  * [ ] 权限管理

## wiki 目录

* [x] 1 Linux
  * [x] 1.1 Linux简介
  * [x] 1.2 文件管理
    * [x] 1.2.1 查看文件类型
    * [x] 1.2.2 查看文件详细属性
    * [x] 1.2.3 创建、复制、移动、删除
    * [x] 1.2.4 查看文件内容
    * [x] 1.2.5 打包、压缩
  * [x] 1.3 计划任务
  * [x] 1.4 用户管理
  * [x] 1.5 进程管理
  * [x] 1.6 管道及I/O重定向
  * [x] 1.7 软件包管理
  * [x] 1.8 网络管理
  * [x] 1.9 日志logrotate
  * [x] 1.10 /etc/security/limits.conf 详解与配置
* [x] Shell
  * [x] 第一部分 初见shell
    * [x] 1.为什么使用shell编程
    * [x] 2.和Sha-Bang(#!)一起出发
      * [x] 2.1 调用一个脚本
      * [x] 2.2 牛刀小试
  * [x] 第二部分 shell基础
    * [x] 3.特殊字符
    * [x] 4.变量与参数
      * [x] 4.1 变量替换
      * [x] 4.2 变量赋值
      * [x] 4.3 Bash弱类型变量
      * [x] 4.4 特殊变量类型
    * [x] 5.引用
      * [x] 5.1 引用变量
      * [x] 5.2 转义
    * [x] 6.退出与退出状态
    * [x] 7.测试
      * [x] 7.1 测试结构
      * [x] 7.2 文件测试操作
      * [x] 7.3 其他比较操作
      * [x] 7.4 嵌套if/then条件测试
      * [x] 7.5 牛刀小试
    * [x] 8.运算符相关话题
      * [x] 8.1 运算符
      * [x] 8.2 数字常量
      * [x] 8.3 双圆括号结构
      * [x] 8.4 运算符优先级
    * [x] 9.换个角度看变量
      * [x] 9.1内部变量
      * [x] 9.2  变量类型标注: declare与typeset
        * [x] 9.2.1 declare的另类用法
      * [x] 9.3 $RANDOM：生产随机数
    * [x] 10.变量处理
      * [x] 10.1 字符串处理
        * [x] 10.1.1 使用awk处理字符串
        * [x] 10.1.2 参考资料
      * [x] 10.2 参数替换
    * [x] 11.循环与分支
      * [x] 11.1 循环
      * [x] 11.2 嵌套循环
      * [x] 11.3 循环控制
      * [x] 11.4 测试与分支
    * [x] 12.命令替换
    * [x] 13.算数扩展
  * [ ] 第四部分 命令
  * [x] 第五部分 高级话题
    * [x] 18.正则表达式
      * [x] 18.1 正则表示式简介
      * [ ] 18.2 文件名替换
      * [x] 18.3 正则表达式对照表
    * [x] 19.嵌入文档
    * [x] 20.I/O重定向
      * [x] 20.1 使用exec
      * [x] 20.2 重定向代码块
      * [x] 20.3 应用程序
    * [x] 21.子shell
    * [x] 22.限制模式的Shell
    * [x] 23.进程替换
    * [x] 24.函数
      * [x] 24.1 复杂函数和函数复杂性
      * [x] 24.2 局部变量
      * [x] 24.3 不适用局部变量的递归
    * [x] 25.别名
    * [x] 26.列表结构
    * [x] 27.数组
    * [x] 30.网络编程
    * [x] 33.选项
    * [x] 34.陷阱
    * [ ] 36.其他
      * [ ] 36.5 有颜色的脚本
      * [x] 36.11 ssh远程操作
  * [x] 第六部分 Google Shell 风格指南
  * [x] 第七部分 实例
* [x] 3 Python
  * [x] 3.1 简介
  * [x] 3.2 数据类型
  * [x] python subprocess模块的使用
  * [x] python解析nginx配置文件
  * [x] python调用jenkinsAPI批量拷贝视图job
  * [x] python调用zabbixAPI批量添加web监控
  * [x] python监控activemq集群
* [x] 4 Golang
  * [x] 4.1 程序结构
  * [ ] 4.2 数据类型
    * [ ] 4.2.1 基础数据类型
    * [ ] 4.2.2 复合数据类型
  * [ ] 4.3 函数
* [x] Docker
  * [x] Docker简介
  * [x] CentOS安装Docker CE
  * [x] Docker 基本概念
  * [x] Docker 使用镜像
  * [x] Dockerfile
  * [x] Docker 操作容器
  * [x] Docker 数据管理
  * [x] Docker 使用网络
  * [x] Docker 命令
  * [x] Docker 底层实现
  * [x] Docker Compose
  * [x] Docker Harbor
  * [x] Docker Harbor HA
* [x] 6 Kubernetes
  * [x] 6.1 集群的安装
    * [x] 6.1.1 kubeadm安装集群
    * [x] 6.1.2 二进制安装集群
* [x] 7 Nginx
  * [x] 1.初识Nginx
  * [x] 2.nginx架构基础
  * [x] 3.nginx配置文件详解
    * [x] 3.1 nginx全局块和events块配置
    * [x] 3.2 nginxHTTP块配置
    * [x] 3.3 nginxSERVER块配置
    * [x] 3.4 nginxLOCATION块配置
    * [ ] 3.5 nginx常用模块
  * [x] 4.内核参数优化
  * [x] 5.状态码
  * [x] 6.nginx的常见问题
* [x] 8 Tomcat
  * [x] 8.1 tomcat简介
  * [x] 生产环境中的tomcat配置
  * [x] tomcat假死现象
  * [x] Tomcat 错误代号及状态码
  * [x] tomcat注意事项
* [x] 9 Elasticsearch
  * [x] 9.1 概述
    * [x] 9.1.1 Elasticsearch 简介及其发展历史
    * [x] 9.1.2 Elastic Stack 家族成员及其应用场景
  * [x] 9.2 安装上手
    * [x] 9.2.1 Elasticsearch的安装和简单配置
    * [x] 9.2.2 Kibana的安装和界面快速浏览
    * [x] 9.2.3 在Docker容器中运行Elasticsearch，Kibana和Cerebro
  * [x] 9.3 Elasticsearch入门
    * [x] 9.3.1 基本概念
    * [x] 9.3.2 文档的基本操作CRUP与批量操作
    * [x] 9.3.3 倒排索引入门
    * [x] 9.3.4 通过分析器进行分词
    * [x] 9.3.5 Search API概览
    * [x] 9.3.6 URI Search详解
    * [x] 9.3.7 Request Body和Query DSL简介
    * [ ] 9.3.8 QueryString & Simple Query String查询
    * [ ] 9.3.9 Dynamic Mapping和常见参数介绍
    * [ ] 9.3.10 显示Mapping设置与常见参数介绍
    * [ ] 9.3.11 多字段特性及Mapping中配置自定义Analyzer
    * [ ] 9.3.12 Index Template和Dynamic Template
    * [ ] 9.3.13 Elasticsearch聚合分析简介
    * [ ] 9.3.14 小练习（一）
  * [ ] 9.4 深入搜索
    * [ ] 9.4.1 基于词项和基于全文的搜索
    * [ ] 9.4.2 结构化搜索
    * [ ] 9.4.3 搜索的相关性算分
    * [ ] 9.4.4 Query & Filtering与多字符串多字段查询
    * [ ] 9.4.5 单字符串多字段查询
    * [ ] 9.4.6 多语言及中文分词与检索
    * [ ] 9.4.7 Space Jam，一次全文搜索的实例
    * [ ] 9.4.8 使用Search Template和Index Alias查询
    * [ ] 9.4.9 综合排序： Function Score Query优化算分
    * [ ] 9.4.10 Term & Phrase Suggester
    * [ ] 9.4.11 自动补全与基于上下文的提示
    * [ ] 9.4.12 配置跨集群搜索
  * [ ] 9.5 分布式特性及分布式搜索的机制
    * [ ] 9.5.1 集群分布式模型及选主与脑裂问题
    * [ ] 9.5.2 分片与集群的故障转移
    * [ ] 9.5.3 文档分布式存储
    * [ ] 9.5.4 分片及其生命周期
    * [ ] 9.5.5 剖析分布式查询及相关性算分
    * [ ] 9.5.6 排序及Doc Values & Fielddata
    * [ ] 9.5.7 分页及遍历： From，Size，Search After & Scroll API
    * [ ] 9.5.8 处理并发读写操作
  * [ ] 9.6 深入聚合分析
    * [ ] 9.6.1 Bucket & Metric 聚合分析及嵌套聚合
    * [ ] 9.6.2 Pipeline集合分析
    * [ ] 9.6.3 作用范围与排序
    * [ ] 9.6.4 聚合分析的原理及精准度问题
  * [ ] 9.7 数据建模
    * [ ] 9.7.1 对象及Nested对象
    * [ ] 9.7.2 文档的父子关系
    * [ ] 9.7.3 Update By Query & Reindex API
    * [ ] 9.7.4 Ingest Pipeline & Painless Script
    * [ ] 9.7.5 Elasticsearch 数据建模实例
    * [ ] 9.7.6 Elasticsearch 数据建模最佳实践
    * [ ] 9.7.7 小练习（二）
  * [ ] 9.8 保护你的数据
    * [ ] 9.8.1 集群身份认证与用户鉴权
    * [ ] 9.8.2 集群内部安全通信
    * [ ] 9.8.3 集群与外部间的安全通信
  * [ ] 9.9 水平扩展Elasticsearch集群
    * [ ] 9.1 常见的集群部署方式
    * [ ] 9.2 Hot & Warm架构与Shard FIltering
    * [ ] 9.3 如何对集群进行容量规划
    * [ ] 9.4 分片设计及管理
    * [ ] 9.5 在私有云上管理Elas集群的一些方法
* [x] 10 Zabbix
  * [x] 10.1 zabbix4.4新功能
  * [x] 10.2 zabbix借助ansible安装
  * [x] 10.3 zabbix添加报警媒介
  * [x] 10.4 mysql监控模块
  * [x] 10.5 redis监控模块
  * [x] 10.6 常见问题
  * [x] 10.7 用zabbix api批量添加web监控
  * [x] 10.8 activemq监控
  * [x] 10.9 zookeeper集群监控
  * [x] 10.10 Todolist
* [x] 11 消息中间件
  * [x] 11.1 activemq集群的搭建
  * [x] 11.2 rabbitmq的搭建
* [x] 12 常见集群的搭建
  * [x] 12.1 keepalived和heartbeat对比
  * [x] 12.2 zookeeper集群
  * [x] 12.3 fastdfs
  * [x] 12.4 rocketmq集群的搭建
* [x] 13 常见集群的搭建
  * [x] 13.1 shadowsocks
  * [x] 13.2 jdk
  * [x] 13.3 python3.6
  * [x] 13.4 新建博客方法
  * [x] 13.5 confluence
* [x] 14 Markdown
  
  * [x] 14.1 让Markdown写作更简单Typora完全使用指南
* [x] 15 Ansible
  
  * [x] 1 初识Ansible
  * [x] 2 Ansible Inventory配置详解
  * [x] 3 Ansible Ad-hoc命令集
    * [x] 3.1 Ansible lineinfile模块详解
  * [x] 4 Ansible Playbook
    * [x] 4.1 Playbook的结构及handler用法
    * [x] 4.2 Playbook循环语句
    * [x] 4.3 Playbook条件语句
    * [x] 4.4 Playbook高级用法
    * [x] 4.5 Playbook之tags
    * [x] 4.6 巧用Roles
    * [x] 4.7 文件管理模块及Jinja2过滤器
  * [x] 5 Ansible变量
    * [x] 5.1 自定义变量
    * [x] 5.2 Fact变量
    * [x] 5.3 魔法变量
    * [x] 5.4 使用lookup生成变量
    * [x] 5.5 使用vault配置加密
  * [x] 6 Ansible使用优化
* [x] 16 MySQL
  * [x] 16.1 MySQL基本操作
  * [x] 16.2 列表类型和数据完整性
  * [x] 16.3 数据库设计与查询语句
  * [x] 16.4 视图、事务、索引、函数
  * [x] 16.5 MySQL存储引擎
  * [x] 16.6 用户权限和访问控制
  * [x] 16.7 备份恢复
  * [x] 16.8 AB复制
  * [x] 16.9 主主和keepalived
  * [ ] 16.10 读写分离和Ameoba
  * [x] 16.11 MySQL逻辑架构
  * [x] 16.12 MySQL锁等待
  * [x] 16.13 MySQL常见问题
  * [x] 16.14 MySQL bin-log日志清理 
* [x] 17 Redis
  * [ ] 17.1 安装
  * [ ] 17.2 配置
  * [ ] 17.3 服务器端和客户端命令
  * [ ] 17.4 数据库操作
    * [ ] 17.4.1 string类型
    * [ ] 17.4.2 键命令
    * [ ] 17.4.3 hash类型
    * [ ] 17.4.4 list类型
    * [ ] 17.4.5 set类型
    * [ ] 17.4.6 zset类型
  * [x] 17.5 centos7安装redis-5.0.0主从
  * [x] 17.6 redis5.0.4集群搭建步骤
  * [x] 17.7 centos7安装升级ruby
  * [x] 17.8 redis-dump方式导入导出数据
  * [x] redis面试题
* [x] 18 HTML
  
  * [x] 18.1 html入门
* [x] 19 CSS
  * [x] 19.1 列表、div、span
  * [x] 19.2 整体感知、常见属性、选择器
  * [x] 19.3 css性质、盒模型、标准文档流、浮动
  * [x] 19.4 行高和字号、超链接美化、background
  * [x] 19.5 相对定位、绝对定位、固定定位、z-index
* [x] 20 jenkins
  * [x] 20.1 jenkins的安装配置
  * [x] 20.2 Jenkins Job迁移
  * [x] Jenkins常见错误
  * [x] Jenkins关闭和重启的实现方式
  * [x] 使用Jenkins Pipeline自动化构建发布
* [x] 21 vim
  
  * [x] vim设置参数以方便YAML语句录入
  * [x] vim常用命令
* [x] 22 网络
  
  * [x] TCP协议三次握手四次挥手
* [x] 23 未分类
  * [x] DEV SIT UAT PET SIM PRD PROD常见环境英文缩写含义
  * [x] 调优
* [x] 24 常见问题

  * [x] centos时区
  * [x] curl https报错
  * [x] du-df磁盘使用不一致
  * [x] linux下增加交换分区
  * [x] mysql最大连接数
* [x] 25 openldap
  * [x] Centos7 搭建openldap
  * [x] phpldapadmin操作指导
* [x] 26 gitlab
  * [x] gitlab备份迁移升级&集成openldap
* [x] 27 监控体系
  * [x] 聊头监控体系
  * [x] grafana问题
  * [ ] Prometheus
