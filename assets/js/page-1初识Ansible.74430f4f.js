(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{535:function(s,a,e){"use strict";e.r(a);var n=e(1),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_1-初识ansible"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-初识ansible"}},[s._v("#")]),s._v(" 1 初识Ansible")]),s._v(" "),e("h2",{attrs:{id:"_1-ansible简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-ansible简介"}},[s._v("#")]),s._v(" 1 Ansible简介")]),s._v(" "),e("p",[s._v("Ansible官方文档： https://docs.ansible.com/")]),s._v(" "),e("p",[s._v("Ansible 是一个 IT 自动化工具。它能配置系统、部署软件、编排更复杂的 IT 任务，如连续部署或零停机时间滚动更新。")]),s._v(" "),e("p",[s._v("Ansible 用 python 编写，尽管市面上已经有很多可供选择的配置管理解决方案（例如 Salt，Puppet，Chef等），但它们各有优劣，而Ansible的特点在于它的简洁。让 Ansible 在主流的配置管理系统中与众不同的一点便是，它并不需要你在想要配置的每个节点上安装自己的组件。同时提供的一个优点在于，如果需要的话，你可以在不止一个地方控制你的整个基础架构。")]),s._v(" "),e("h3",{attrs:{id:"_1-1-ansible特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-ansible特性"}},[s._v("#")]),s._v(" 1.1 Ansible特性")]),s._v(" "),e("ul",[e("li",[s._v("Agentless：不需要再被管理节点上安装客户端，只要有sshd即可")]),s._v(" "),e("li",[s._v("幂等性：多次操作或多次执行不影响结果。")]),s._v(" "),e("li",[s._v("Serverless：在服务端不需要启动任何服务，只需要执行命令就行")]),s._v(" "),e("li",[s._v("Modules in any language：基于模块工作，可以使用任意语言开发ansible模块")]),s._v(" "),e("li",[s._v("YAML, not code：使用yaml语言定制playbook")]),s._v(" "),e("li",[s._v("SSH by default：默认使用ssh控制各节点")]),s._v(" "),e("li",[s._v("Strong multi-tier solution：可实现多级控制")])]),s._v(" "),e("blockquote",[e("p",[s._v("幂等性详细解释：比如算术运算时数值加0是幂等的，无论加多少次结果都不会改变，而数值加1是非幂等的，每次加1结果都会改变。再比如执行systemctl stop xxx命令来停止服务,当发现要停止的目标服务已经处于停止状态，它什么也不会做，所以多次停止的结果仍然是停止，不会改变结果，它是幂等的，而systemctl restart xxx是非幂等的。Ansible的很多 模块在执行时都会先判断目标节点是否要执行任务,所以，可以放心大胆地让Ansible去执行任务,重复执行某个任务绝大多数时候不会产生任何副作用。")])]),s._v(" "),e("h3",{attrs:{id:"_1-2-ansible的基本组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-ansible的基本组件"}},[s._v("#")]),s._v(" 1.2 Ansible的基本组件")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/ansible1-1585014469983.png",alt:"ansible1"}})]),s._v(" "),e("ul",[e("li",[s._v("核心：ansible")]),s._v(" "),e("li",[s._v("核心模块（Core Modules）：这些都是ansible自带的模块")]),s._v(" "),e("li",[s._v("扩展模块（Custom Modules）：如果核心模块不足以完成某种功能，可以添加扩展模块")]),s._v(" "),e("li",[s._v("插件（Plugins）：完成模块功能的补充")]),s._v(" "),e("li",[s._v("剧本（Playbooks）：把需要完成的多个任务定义在剧本中")]),s._v(" "),e("li",[s._v("连接插件（Connectior Plugins）：ansible基于连接插件连接到各个主机上，虽然ansible是使用ssh连接到各个主机的，但是它还支持其他的连接方法，所以需要有连接插件")]),s._v(" "),e("li",[s._v("主机群（Host Inventory）：ansible在管理多台主机时，可以选择只对其中的一部分执行某些操作")])]),s._v(" "),e("h3",{attrs:{id:"_1-3-ansible工作机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-ansible工作机制"}},[s._v("#")]),s._v(" 1.3 Ansible工作机制")]),s._v(" "),e("p",[s._v("Ansible 在管理节点将 Ansible 模块通过 SSH 协议（或者 Kerberos、LDAP）推送到被管理端执行，执行完之后自动删除，可以使用版本控制系统（git/svn）来管理自定义模块及playbooks。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/ansible2-1585014469997.png",alt:"ansible2"}})]),s._v(" "),e("h2",{attrs:{id:"_2-ansible安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-ansible安装"}},[s._v("#")]),s._v(" 2 Ansible安装")]),s._v(" "),e("h3",{attrs:{id:"_2-1-yum-安装-推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-yum-安装-推荐"}},[s._v("#")]),s._v(" 2.1 yum 安装（推荐）")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置epel源")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/yum.repos.d/epel.repo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'EOF'\n[epel]\nname=epel repo\nbaseurl=https://mirrors.tuna.tsinghua.edu.cn/epel/7/$basearch\nenabled=1\ngpgcheck=0\nEOF")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\nyum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ansible\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("blockquote",[e("p",[s._v("'EOF'，EOF用单引号括起来，可使配置文件中变量"),e("code",[s._v("$basearch")]),s._v("不被转义")])]),s._v(" "),e("h3",{attrs:{id:"_2-2-源码安装-推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-源码安装-推荐"}},[s._v("#")]),s._v(" 2.2 源码安装（推荐）")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解决依赖关系：")]),s._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y python36 python36-devel python36-setuptools gcc libffi-devel openssl-devel\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置pip 下载源")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/.pip\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.pip/pip.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'EOF'\n[global] \nindex-url = https://pypi.tuna.tsinghua.edu.cn/simple\n[install]\ntrusted-host = https://pypi.tuna.tsinghua.edu.cn\nEOF")]),s._v("\n\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载ansible：")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/ansible/ansible/archive/v2.9.17.tar.gz\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#解压安装")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf v2.9.17.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ansible-2.9.17/\npython3 setup.py build\npython3 setup.py "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install 过程安装module失败时，使用pip3手动安装")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/ansible\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -r examples/* /etc/ansible\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("h3",{attrs:{id:"_2-3-pip-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-pip-安装"}},[s._v("#")]),s._v(" 2.3  pip 安装")]),s._v(" "),e("p",[s._v("Ansible每个版本释放出来之后，都首先提交到Pypi,所以任何操作系统，都可以使用pip工具来安装最新版的Ansible。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("pip3 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ansible\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("但要注意，使用各系统的包管理I具(如yum)安装Ansible时自动会提供-些配置文件，如/etc/ansible/ansible. cfg。而使用pip安装的Ansible默认不提供配置文件。")]),s._v(" "),e("h2",{attrs:{id:"_3-ansible-参数补全功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-ansible-参数补全功能"}},[s._v("#")]),s._v(" 3 Ansible 参数补全功能")]),s._v(" "),e("p",[s._v("从Ansible 2.9版本开始，它支持命令的选项补全功能，它依赖于python的argcomplete插件")]),s._v(" "),e("p",[s._v("安装argcomplete:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum -y install python-argcomplete\npip3 install argcomplete\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("安装完成后，激活插件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("activate-global-python-argcomplete \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("重新进去终端，即可使用tab参数补全功能")]),s._v(" "),e("h2",{attrs:{id:"_4-ansible配置文件管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-ansible配置文件管理"}},[s._v("#")]),s._v(" 4 Ansible配置文件管理")]),s._v(" "),e("h3",{attrs:{id:"_4-1-配置文件优先级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-配置文件优先级"}},[s._v("#")]),s._v(" 4.1 配置文件优先级")]),s._v(" "),e("p",[s._v("ansible的配置文件名为ansible.cfg，它一般会存在于四个地方：")]),s._v(" "),e("ul",[e("li",[s._v("ANSIBLE_CONFIG：首先，Ansible命令会检查该环境变量，及这个环境变量将指向的配置文件")]),s._v(" "),e("li",[s._v("./ansible.cfg：当前工作目录，即当前执行ansible指令的目录，如果ANSIBEL_CONFIG环境变量未定义，则优先使用该配置文件")]),s._v(" "),e("li",[s._v("~/.ansible.cfg：当前用户家目录下的一个隐藏文件，如果当前工作目录下不存在ansible.cfg配置文件，则会查找用户家目录下的该隐藏文件")]),s._v(" "),e("li",[s._v("/etc/ansible/ansible.cfg：默认配置文件，如果上面两个路径下的ansible.cfg都不存在，则使用该文件")])]),s._v(" "),e("blockquote",[e("p",[s._v("需要说明的是，配置文件中所有的配置项都可以通过环境变量的方式来定义，而环境变量定义的配置项具有最高优先级，会覆盖掉所有配置文件中的配置项")])]),s._v(" "),e("h3",{attrs:{id:"_4-2-配置文件详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-配置文件详解"}},[s._v("#")]),s._v(" 4.2 配置文件详解")]),s._v(" "),e("p",[s._v("Ansible 配置文件采用ini风格进行配置，每一项配置都使用"),e("code",[s._v("key=value")]),s._v("的方式进行配置")]),s._v(" "),e("h4",{attrs:{id:"_4-2-1-配置文件分段说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-配置文件分段说明"}},[s._v("#")]),s._v(" 4.2.1 配置文件分段说明")]),s._v(" "),e("p",[s._v("ansible.cfg的配置默认分为十段：")]),s._v(" "),e("ul",[e("li",[s._v("[defaults]：通用配置项")]),s._v(" "),e("li",[s._v("[inventory]：与主机清单相关的配置项")]),s._v(" "),e("li",[s._v("[privilege_escalation]：特权升级相关的配置项")]),s._v(" "),e("li",[s._v("[paramiko_connection]：使用paramiko连接的相关配置项，Paramiko在RHEL6以及更早的版本中默认使用的ssh连接方式")]),s._v(" "),e("li",[s._v("[ssh_connection]：使用OpenSSH连接的相关配置项，OpenSSH是Ansible在RHEL6之后默认使用的ssh连接方式")]),s._v(" "),e("li",[s._v("[persistent_connection]：持久连接的配置项")]),s._v(" "),e("li",[s._v("[accelerate]：加速模式配置项")]),s._v(" "),e("li",[s._v("[selinux]：selinux相关的配置项")]),s._v(" "),e("li",[s._v("[colors]：ansible命令输出的颜色相关的配置项")]),s._v(" "),e("li",[s._v("[diff]：定义是否在运行时打印diff（变更前与变更后的差异）")])]),s._v(" "),e("h4",{attrs:{id:"_4-2-2-配置参数说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-配置参数说明"}},[s._v("#")]),s._v(" 4.2.2 配置参数说明")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[default]\ninventory      = /etc/ansible/hosts\nremote_user    = root\nask_pass       = false\nlog_path       = /var/log/ansible.log\n\n[privilege_escalation]\nbecome=True\nbecome_method=sudo\nbecome_user=root\nbecome_ask_pass=False\n\n[ssh_connection]\nssh_args = -C -o ControlMaster=auto -o ControlPersist=60s \nhost_key_checking = False \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("配置项说明：")]),s._v(" "),e("ul",[e("li",[s._v("inventory：定义默认使用的主机清单")]),s._v(" "),e("li",[s._v("remote_user： ansible在操作远程主机时，使用远程主机上的哪个用户身份，默认是root")]),s._v(" "),e("li",[s._v("ask_pass：ansible在操作远程主机时，获取远程主机上的用户身份，是否交互提示密码验证，默认为true。如果使用密钥认证的话，建议将其设置为false")]),s._v(" "),e("li",[s._v("log_path：默认ansible 执行的时候，并不会输出日志到文件，打开该配置项，所有的命令执行后，都会将日志输出到"),e("code",[s._v("/var/log/ansible.log")]),s._v("文件。")]),s._v(" "),e("li",[s._v("become：如果ansible在操作远程主机时，使用的是远程主机上的普通用户，该普通用户是否允许提权")]),s._v(" "),e("li",[s._v("become_method：如果允许提权，使用何种提权方式，默认是sudo")]),s._v(" "),e("li",[s._v("become_user：提权到哪个用户身份，默认是root")]),s._v(" "),e("li",[s._v("become_ask_pass：提权时，是否交互提示密码验证，默认为False")]),s._v(" "),e("li",[s._v("ssh_args：ansible通过ssh连接远程被管理机，这里用于定义一些ssh连接时的参数，如-C启用压缩传输，ControlPersist用于提升性能。")]),s._v(" "),e("li",[s._v("host_key_checking：通过ssh首次连接远程主机时，由于在本机的"),e("code",[s._v("~/.ssh/known_hosts")]),s._v("文件中并有"),e("code",[s._v("fingerprint key")]),s._v("串，ssh第一次连接的时候一般会提示输入yes/no进行确认将key字符串加入到"),e("code",[s._v("~/.ssh/known_hosts")]),s._v("文件中。将此项设置为False将跳过该确认过程。")])]),s._v(" "),e("blockquote",[e("p",[s._v("参考链接：")]),s._v(" "),e("p",[s._v("https://www.cnblogs.com/breezey/p/8810263.html")]),s._v(" "),e("p",[s._v("https://blog.51cto.com/cloumn/blog/1540")])])])}),[],!1,null,null,null);a.default=t.exports}}]);