(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{528:function(a,s,t){"use strict";t.r(s);var e=t(1),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"activemq5-15-9集群搭建步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#activemq5-15-9集群搭建步骤"}},[a._v("#")]),a._v(" activemq5.15.9集群搭建步骤")]),a._v(" "),t("h3",{attrs:{id:"下载解压软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载解压软件"}},[a._v("#")]),a._v(" 下载解压软件")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd /opt\nwget https://www-eu.apache.org/dist/activemq/5.15.9/apache-activemq-5.15.9-bin.tar.gz\ntar -xvf apache-activemq-5.15.9-bin.tar.gz\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"修改主机名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改主机名"}},[a._v("#")]),a._v(" 修改主机名")]),a._v(" "),t("p",[a._v("三台主机三分别操作")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("hostnamectl set-hostname activemq01.csp\nhostnamectl set-hostname activemq02.csp\nhostnamectl set-hostname activemq03.csp\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("blockquote",[t("p",[a._v("注意主机名的设置，不能带下划线，否则会报错")])]),a._v(" "),t("h3",{attrs:{id:"修改配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[a._v("#")]),a._v(" 修改配置文件")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd /opt/apache-activemq-5.15.9/conf/\nvim activemq.xml \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("修改以下文件")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('brokerName="activemqCluster"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("blockquote",[t("p",[a._v("brokaerName三台主机名称必须一致")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('        <persistenceAdapter>\n            \x3c!--<kahaDB directory="${activemq.data}/kahadb"/>--\x3e\n            <replicatedLevelDB\n            directory="${activemq.data}/leveldb"\n            replicas="3"\n            bind="tcp://0.0.0.0:62222"\n            zkAddress="192.168.165.29:2181,192.168.165.30:2181,192.168.165.31:2181"\n            hostname="192.168.165.33"\n            zkPath="/activemq/leveldb-stores"\n            sync="local_disk"/>\n        </persistenceAdapter>\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("p",[a._v("注释掉"),t("code",[a._v('<kahaDB directory="${activemq.data}/kahadb"/>')]),a._v("这一行")]),a._v(" "),t("p",[a._v("新增下面内容")]),a._v(" "),t("p",[a._v('directory="${activemq.data}/leveldb" 集群方式')]),a._v(" "),t("p",[a._v('replicas="3" 集群结点个数')]),a._v(" "),t("p",[a._v("bind activemq集群通信端口")]),a._v(" "),t("p",[a._v("zkAddress zookeeper集群地址")]),a._v(" "),t("p",[a._v("hostname 本机IP")]),a._v(" "),t("p",[a._v("zkPath activemq集群在zookeeper集群交互文件存储位置")]),a._v(" "),t("p",[a._v("sync：在消息被消费完成前，同步信息所存贮的策略。如果有多种策略用逗号隔开，ActiveMQ会选择较强的策略。而如果有local_mem, local_disk这两种策略的话，那么ActiveMQ则优先选择local_disk策略，存储在本地硬盘。")]),a._v(" "),t("h3",{attrs:{id:"开放防火墙端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开放防火墙端口"}},[a._v("#")]),a._v(" 开放防火墙端口")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# cat /etc/sysconfig/iptables\n*filter\n:INPUT ACCEPT [0systemctl restart iptables.service:0]\n:FORWARD ACCEPT [0:0]\n:OUTPUT ACCEPT [0:0]\n-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT\n-A INPUT -p icmp -j ACCEPT\n-A INPUT -i lo -j ACCEPT\n-A INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT\n-A INPUT -m state --state NEW -m tcp -p tcp --dport 8161 -j ACCEPT\n-A INPUT -m state --state NEW -m tcp -p tcp --dport 61616 -j ACCEPT\n-A INPUT -m state --state NEW -m tcp -p tcp --dport 62222 -j ACCEPT\n-A INPUT -m state --state NEW -m tcp -p tcp --dport 10050 -j ACCEPT\n-A INPUT -j REJECT --reject-with icmp-host-prohibited\n-A FORWARD -j REJECT --reject-with icmp-host-prohibited\nCOMMIT\n\n# systemctl restart iptables.service\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br")])]),t("h3",{attrs:{id:"启动-停止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-停止"}},[a._v("#")]),a._v(" 启动&停止")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/opt/apache-activemq-5.15.9/bin/activemq start\n/opt/apache-activemq-5.15.9/bin/activemq stop\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"验证activemq集群高可用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证activemq集群高可用"}},[a._v("#")]),a._v(" 验证ActiveMQ集群高可用")]),a._v(" "),t("p",[a._v("要验证ActiveMQ集群的高可用，我们只需要关闭能访问http://ip:8161/admin/的ActiveMQ服务，然后访问其他两个。")]),a._v(" "),t("p",[a._v("如果其中有一个能访问，那就说明ActiveMQ+ZooKeeper集群高可用已经配置成功")]),a._v(" "),t("p",[a._v("当一个ActiveMQ节点挂掉，或者一个ZooKeeper节点挂掉，ActiveMQ服务依然正常运转。如果仅剩一个ActiveMQ节点，因为不能选举Master，ActiveMQ不能正常运转；同样的，如果ZooKeeper仅剩一个节点活动，不管ActiveMQ各节点是否存活，ActiveMQ也不能正常提供服务。\n（ActiveMQ集群的高可用，依赖于ZooKeeper集群的高可用。）")])])}),[],!1,null,null,null);s.default=n.exports}}]);