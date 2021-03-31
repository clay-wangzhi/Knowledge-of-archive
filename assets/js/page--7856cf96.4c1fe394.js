(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{666:function(s,a,e){"use strict";e.r(a);var n=e(1),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("strong",[s._v("魔法变量")])]),s._v(" "),e("p",[s._v("Ansible默认会提供一些内置的变量以实现一些特定的功能，我们称之为魔法变量。下面列举一些常用的魔法变量。")]),s._v(" "),e("p",[s._v("https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html#magic")]),s._v(" "),e("h2",{attrs:{id:"_1-hostvars"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-hostvars"}},[s._v("#")]),s._v(" 1. hostvars")]),s._v(" "),e("p",[s._v("hostvars变量用于保存所有和主机相关的变量，通常包括inventory中定义的主机变量和gather_facts收集到的主机信息变量。hostvars是一个key/value格式的字典(即hash结构、对象)，key是每个节点的主机名，value是该主机对应的变量数据。")]),s._v(" "),e("p",[s._v("获取某台指定的主机的相关变量。如果有一台web服务器的配置文件中需要指定db服务器的ip地址，我们假定这台db服务器的hostname为db.exmaple.com,ip地址绑定在eth0网卡上，我们可以通过如下方法在web服务器上调用db服务器的ip地址：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{{ hostvars['db.example.com'].ansible_eth0.ipv4.address }}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("需要注意的是db.example.com不能使用ip地址来取代，只能使用主机名或别名。")])]),s._v(" "),e("h2",{attrs:{id:"_2-inventory-hostname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-inventory-hostname"}},[s._v("#")]),s._v(" 2. inventory_hostname")]),s._v(" "),e("p",[s._v("inventory_hostname是Ansible所识别的当前正在运行task的主机的主机名。如果在inventory里定义过别名，那么这里就是那个别名，如果inventory包含如下一行：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server1 ansible_ssh_host=192.168.1.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("则"),e("code",[s._v("inventory_hostname")]),s._v("即为"),e("code",[s._v("server1")]),s._v("\n利用"),e("code",[s._v("hostvars")]),s._v("和"),e("code",[s._v("inventory_hostname")]),s._v("变量，可以输出与当前主机相关联的所有变量：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("- debug: var=hostvars[inventory_hostname]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("与inventory_hostname相近的还有一个inventory_hostname_short，如果一台主机的inventory_hostname为server1.exmaple.com，则inventory_hostname_short的值为server1")])]),s._v(" "),e("h2",{attrs:{id:"_3-group-names"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-group-names"}},[s._v("#")]),s._v(" 3. group_names")]),s._v(" "),e("p",[s._v("用于标识当前正在执行task的目标主机位于的主机组。假如我们有三台主机，用来配置成一主二从的mysql服务器。inventory配置如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[mdb]\ndb1\n[sdb]\ndb2\ndb3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("mysql配置文件my.conf.j2示例如下：")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#我们知道db1在mdb组，当db1与当前正在执行任务的主机位于同一组时，我们认为当前主机即在mdb组，所以对当前主机应用mysql master的配置")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("% if 'db1' in group_names %"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nserver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("id=1\nlog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("bin=mysql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("bin\nlog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("bin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("index=mysql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("bin.index\nsync"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("binlog=1\ninnodb_flush_log_at_trx_commit=1\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当db1与当前主机不在同一组时，则认为当前主机不在mdb组，即应用my slave的配置")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("% else %"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nserver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("id=2\nrelay"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("log=relay"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("log\nrelay"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("log"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("index=relay"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("log.index\nread"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("only = yes\nsync_master_info = 1\nsync_relay_log = 1\nsync_relay_log_info = 1\nrelay_log_recovery = 1\nskip_slave_start    \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("% endif %"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("我们执行如下task:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("- name: copy config file to mysql master\n  template: src=my.conf.j2 dest=/etc/my.cnf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_4-groups"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-groups"}},[s._v("#")]),s._v(" 4. groups")]),s._v(" "),e("p",[s._v("groups是inventory中所有主机组的列表，可用于枚举主机组中的所有主机。")]),s._v(" "),e("p",[s._v("假如我们有一个inventory文件定义如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[web]\nserver1\nserver2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("在配置一台HAproxy的负载均衡器时，我们的配置文件肯定需要web主机组的所有服务器的IP，配置文件包含如下片段：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("backend web-backend\n{% for host in groups.web%}\n    server {{host.inventory_hostname}} {{ host.ansible_default_ipv4.address }}:80\n{% endfor %}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("最终生成的文件如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("backend web-backend\n    server server1 192.168.1.1:80\n    server server2 192.168.1.2:80\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("再给一个例子，在所有的dbservers组的服务器上创建一个数据库用户kate：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("- name: Create a user for all db servers\n  mysql_user: name=kate password=test host={{ hostvars.[item].ansible_eth0.ipv4.address }} state=present\n  with_items: groups['dbservers'] \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"_5-ansible-play-batch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-ansible-play-batch"}},[s._v("#")]),s._v(" 5. ansible_play_batch")]),s._v(" "),e("p",[s._v("play_hosts 已废弃，等价于ansible_play_batch")]),s._v(" "),e("p",[s._v("ansible_play_hosts等价于ansible_play_batch")]),s._v(" "),e("p",[s._v("它存储当前play所涉及的所有主机列表，但连接失败或执行任务失败的节点不会留在此变量中。")]),s._v(" "),e("h2",{attrs:{id:"_6-inventory-dir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-inventory-dir"}},[s._v("#")]),s._v(" 6. inventory_dir")]),s._v(" "),e("p",[s._v("主机清单所在目录")]),s._v(" "),e("h2",{attrs:{id:"_7-inventory-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-inventory-file"}},[s._v("#")]),s._v(" 7. inventory_file")]),s._v(" "),e("p",[s._v("主机清单文件")]),s._v(" "),e("blockquote",[e("p",[s._v("参考链接：")]),s._v(" "),e("p",[s._v("https://www.cnblogs.com/breezey/p/9275763.html")]),s._v(" "),e("p",[s._v("https://blog.51cto.com/cloumn/blog/1544")])])])}),[],!1,null,null,null);a.default=t.exports}}]);