(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{563:function(s,n,a){"use strict";a.r(n);var e=a(1),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"下载redis-5-0-0安装包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载redis-5-0-0安装包"}},[s._v("#")]),s._v(" 下载redis-5.0.0安装包")]),s._v(" "),a("p",[s._v("从官网下载安装包")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd /opt\nwget http://download.redis.io/releases/redis-5.0.0.tar.gz\ntar -xvf redis-5.0.0.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[s._v("#")]),s._v(" 编译安装")]),s._v(" "),a("p",[s._v("安装gcc依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum -y install gcc\ncd /opt/redis-5.0.0\nmake -j `grep processor /proc/cpuinfo | wc -l`\nmake install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"编辑配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑配置文件"}},[s._v("#")]),s._v(" 编辑配置文件")]),s._v(" "),a("h3",{attrs:{id:"主服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主服务器"}},[s._v("#")]),s._v(" 主服务器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd /opt\nmv redis-5.0.0 redis\ncd redis\nmkdir {conf,log,data}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("code",[s._v("vim conf/redis.conf")]),s._v("增加以下内容")]),s._v(" "),a("p",[s._v("bind 中的IP地址为服务器IP地址")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('################################## NETWORK #####################################\n# 绑定IP地址\nbind *.*.*.*\n\n# 5.0新增保护模式\nprotected-mode yes\n\n# 设置启动端口\nport 6379\n\n# tcp最大并发监听数\ntcp-backlog 511\n\n#客户端空闲N秒后关闭连接(0禁用)\ntimeout 0\n\n#向客户机发送TCP ack的沟通，3.2.1以后默认使用300s\ntcp-keepalive 300\n\n################################# GENERAL #####################################\n# 设置后台启动\ndaemonize yes\n\n# 没有监督互动\nsupervised no\n\n# pid文件位置\npidfile /var/run/redis_6379.pid\n\n# 日志等级\nloglevel notice\n\n# 日志文件位置\nlogfile "/opt/redis/log/redis.log"\n\n# 设置数据库的数量\ndatabases 16\n\n# 显示logo\nalways-show-logo yes\n\n################################ SNAPSHOTTING  ################################\n# rdb通过快照方式进行持久化，每个条件之间是“或”的关系\n# 15分钟（900秒钟）内至少1个键被更改则进行快照\nsave 900 1\n# 5分钟（300秒）内至少10个键被更改则进行快照\nsave 300 10\n# 1分钟（60秒）内至少10000个键被更改则进行快照\nsave 60 10000\n\n# 错误停止写入\nstop-writes-on-bgsave-error yes\n\n# 数据存储前设置开启压缩\nrdbcompression yes\n\n# 对rdb数据进行校验，耗费CPU资源，5.0版本以后可以禁用\nrdbchecksum no\n\n# rdb数据转存的文件名称\ndbfilename dump.rdb\n\n# 数据存储目录\ndir "/opt/redis/data"\n\n################################# REPLICATION #################################\n# 设置同步的主节点地址\n# replicaof IP 端口 \n\n# 主从同步认证密码\nmasterauth ""\n\n# 允许从节点正常响应用户的请求\nreplica-serve-stale-data yes\n\n# 从节点设置为只读\nreplica-read-only yes\n\n# 同步策略为磁盘方式\nrepl-diskless-sync no\n\n# socket同步方式的延迟时间\nrepl-diskless-sync-delay 5\n\n# 是否在slave套接字发送SYNC之后禁用 TCP_NODELAY,如果选择no，数据传输到salve的延迟将会减少但要使用更多的带宽\nrepl-disable-tcp-nodelay no\n\n# 提升为主节点的优先级，数字越小，优先级越高\nreplica-priority 100\n\n################################## SECURITY ###################################\n# 客户端认证密码设置\nrequirepass ""\n\n################################### CLIENTS ####################################\n# 客户端最大连接数\nmaxclients 10000\n\n############################## MEMORY MANAGEMENT ################################\n# 指定Redis最大内存限制\n# maxmemory <bytes>\n\n# 最大内存逐出策略\n# maxmemory-policy noeviction\n\n# 用样本量做检测,设置样本量个数\n# maxmemory-samples 5\n\n# replica-ignore-maxmemory yes\n\n############################# LAZY FREEING ####################################\nlazyfree-lazy-eviction no\nlazyfree-lazy-expire no\nlazyfree-lazy-server-del no\nreplica-lazy-flush no\n\n############################## APPEND ONLY MODE ###############################\n# 是否开启AOF备份\nappendonly no\nappendfilename "appendonly.aof"\nappendfsync everysec\nno-appendfsync-on-rewrite no\nauto-aof-rewrite-percentage 100 \nauto-aof-rewrite-min-size 64mb \naof-load-truncated yes \naof-use-rdb-preamble yes\n\n################################ LUA SCRIPTING  ###############################\nlua-time-limit 5000\n\n################################ REDIS CLUSTER  ###############################\n# 略，后续补充\n\n########################## CLUSTER DOCKER/NAT support  ########################\n# 略，后续补充\n\n################################## SLOW LOG ###################################\nslowlog-log-slower-than 10000\nslowlog-max-len 128\n\n################################ REMAINING PART ##############################\nlatency-monitor-threshold 0\nnotify-keyspace-events ""\nhash-max-ziplist-entries 512\nhash-max-ziplist-value 64\nlist-max-ziplist-size -2\nlist-compress-depth 0\nset-max-intset-entries 512\nzset-max-ziplist-entries 128\nzset-max-ziplist-value 64\nhll-sparse-max-bytes 3000\nstream-node-max-bytes 4096\nstream-node-max-entries 100\nactiverehashing yes\nclient-output-buffer-limit normal 0 0 0\nclient-output-buffer-limit replica 256mb 64mb 60\nclient-output-buffer-limit pubsub 32mb 8mb 60\nhz 10\ndynamic-hz yes\naof-rewrite-incremental-fsync yes\nrdb-save-incremental-fsync yes\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br"),a("span",{staticClass:"line-number"},[s._v("134")]),a("br"),a("span",{staticClass:"line-number"},[s._v("135")]),a("br"),a("span",{staticClass:"line-number"},[s._v("136")]),a("br"),a("span",{staticClass:"line-number"},[s._v("137")]),a("br"),a("span",{staticClass:"line-number"},[s._v("138")]),a("br"),a("span",{staticClass:"line-number"},[s._v("139")]),a("br"),a("span",{staticClass:"line-number"},[s._v("140")]),a("br"),a("span",{staticClass:"line-number"},[s._v("141")]),a("br"),a("span",{staticClass:"line-number"},[s._v("142")]),a("br"),a("span",{staticClass:"line-number"},[s._v("143")]),a("br"),a("span",{staticClass:"line-number"},[s._v("144")]),a("br"),a("span",{staticClass:"line-number"},[s._v("145")]),a("br"),a("span",{staticClass:"line-number"},[s._v("146")]),a("br"),a("span",{staticClass:"line-number"},[s._v("147")]),a("br"),a("span",{staticClass:"line-number"},[s._v("148")]),a("br"),a("span",{staticClass:"line-number"},[s._v("149")]),a("br"),a("span",{staticClass:"line-number"},[s._v("150")]),a("br"),a("span",{staticClass:"line-number"},[s._v("151")]),a("br"),a("span",{staticClass:"line-number"},[s._v("152")]),a("br"),a("span",{staticClass:"line-number"},[s._v("153")]),a("br"),a("span",{staticClass:"line-number"},[s._v("154")]),a("br"),a("span",{staticClass:"line-number"},[s._v("155")]),a("br"),a("span",{staticClass:"line-number"},[s._v("156")]),a("br"),a("span",{staticClass:"line-number"},[s._v("157")]),a("br"),a("span",{staticClass:"line-number"},[s._v("158")]),a("br"),a("span",{staticClass:"line-number"},[s._v("159")]),a("br"),a("span",{staticClass:"line-number"},[s._v("160")]),a("br"),a("span",{staticClass:"line-number"},[s._v("161")]),a("br")])]),a("h3",{attrs:{id:"从服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从服务器"}},[s._v("#")]),s._v(" 从服务器")]),s._v(" "),a("p",[s._v("和主服务器操作相同")]),s._v(" "),a("p",[s._v("改变"),a("code",[s._v("redis.conf")]),s._v("中bind地址")]),s._v(" "),a("p",[s._v("打开"),a("code",[s._v("replicaof")]),s._v("并改为"),a("strong",[s._v("主服务器地址")]),s._v("即可")]),s._v(" "),a("h2",{attrs:{id:"启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[s._v("#")]),s._v(" 启动服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd /opt/redis/src\n./redis-server /opt/redis/conf/redis.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);