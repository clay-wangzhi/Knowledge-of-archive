(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{570:function(e,s,a){"use strict";a.r(s);var t=a(1),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"基于docker搭建confluence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于docker搭建confluence"}},[e._v("#")]),e._v(" 基于docker搭建confluence")]),e._v(" "),a("p",[e._v("系统版本：centos7")]),e._v(" "),a("h2",{attrs:{id:"安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[e._v("#")]),e._v(" 安装docker")]),e._v(" "),a("ol",[a("li",[e._v("yum安装docker")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum update # 更新yum\nyum install docker # yum安装docker\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("开启镜像加速")]),e._v(" "),a("p",[e._v("由于国内网络问题拉取 Docker 镜像会十分缓慢，所以可以添加网易镜像地址：http://hub-mirror.c.163.com 加速。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vi /etc/docker/daemon.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("将其中的内容替换为如下，当然你可以添加其它镜像地址。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "registry-mirrors": ["http://hub-mirror.c.163.com"]\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("启动docker")])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker --version # 查看docker版本\nsystemctl start docker # 启动docker\nsystemctl enable docker #设置开机自启\nps -ef | grep docker # 查看docker进程是否正常启动\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"安装数据库postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装数据库postgresql"}},[e._v("#")]),e._v(" 安装数据库PostgreSQL")]),e._v(" "),a("ol",[a("li",[e._v("安装PostgreSQL")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker pull postgres # 下拉镜像\ndocker run --name postgresdb -p 5432:5432 -e POSTGRES_PASSWORD=W*** -d docker.io/postgres:latest\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("注意：")]),e._v(" "),a("p",[e._v("1）-p 5432:5432 选项是可选的，因为在后面启动Confluence容器的时候，postgresdb这个容器会以别名db连接到confluence容器，也就是说对confluence这个容器来说，可以通过db:5432的网络地址访问到postgresql服务，不需要在主机上开放5432端口。")]),e._v(" "),a("p",[e._v("2）W**** 是密码需要设置成你需要的密码。")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("进入docker容器并创建confluence数据库")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker exec -it postgresdb bash # 进入docker容器\npsql -U postgres \n\\l\nCREATE DATABASE confluence WITH OWNER postgres; \n\\q\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h2",{attrs:{id:"安装wiki-confluence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装wiki-confluence"}},[e._v("#")]),e._v(" 安装wiki Confluence")]),e._v(" "),a("ol",[a("li",[e._v("安装wiki Confluence")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker pull cptactionhank/atlassian-confluence #下拉镜像\ndocker run -d --name confluence -p 10080:8090 --link postgresdb:db --user root:root docker.io/cptactionhank/atlassian-confluence:latest\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("检查confluence是否启动")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker ps # 列出运行的容器\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"images/docker_ps.png",alt:""}})]),e._v(" "),a("p",[e._v("可以看到 wiki confluence已经启动")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("访问http://IP:10080/ 就可以看到Confluence的配置页面")])]),e._v(" "),a("h2",{attrs:{id:"破解-wiki-confluence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#破解-wiki-confluence"}},[e._v("#")]),e._v(" 破解 wiki Confluence")]),e._v(" "),a("ol",[a("li",[e._v("访问http://IP:10080/ 记录 Server ID")]),e._v(" "),a("li",[e._v("进入docker confluence 容器，查找decoder.jar文件")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('docker exec -it confluence /bin/bash # 进入docker容器 confluence\nsu - # 切换到root账户\nfind -name "*decoder*" # 查找名称中包括 decoder 的文件\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("将decoder.jar文件从容器中复制出来，其中 “confluence:” 是Wiki confluence容器名称，atlassian-extras-decoder-v2-3.4.1.jar 是安装版本wiki的decode文件")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker cp confluence:/opt/atlassian/confluence/confluence/WEB-INF/lib/atlassian-extras-decoder-v2-3.4.1.jar .\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("破解")])]),e._v(" "),a("p",[e._v("a) 下载 atlassian-extras-decoder-v2-3.4.1.jar 文件到windows上")]),e._v(" "),a("p",[e._v("b) 将文件名改为 “atlassian-extras-2.4.jar” 破解工具只识别这个文件名")]),e._v(" "),a("p",[e._v("c) 下载破解文件 "),a("a",{attrs:{href:"https://raw.githubusercontent.com/clay-wangzhi/clay-wiki/master/utils/confluence5.1-crack.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://raw.githubusercontent.com/clay-wangzhi/clay-wiki/master/utils/confluence5.1-crack.zip"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("d)解压并进入文件目录")]),e._v(" "),a("p",[e._v("e) 执行java -jar confluence_keygen.jar 运行破解文件")]),e._v(" "),a("p",[e._v("f）填入 name ，server id 处输入步骤1中得到的id，点击 “gen” 生成key")]),e._v(" "),a("p",[e._v("g）点击 patch，选择刚才改名为  “atlassian-extras-2.4.jar” 的jar包，显示 “jar success fully patched” 则破解成功")]),e._v(" "),a("ul",[a("li",[e._v("注意：path前先删除atlassian-extras-2.4.bak文件否则path失败")])]),e._v(" "),a("p",[e._v("h）将 “atlassian-extras-2.4.jar” 文件名改回原来的 “atlassian-extras-decoder-v2-3.4.1.jar ”")]),e._v(" "),a("p",[e._v("i）复制key中的内容备用")]),e._v(" "),a("p",[e._v("j) 将”atlassian-extras-decoder-v2-3.4.1.jar “文件上传回服务器")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("将破解后的文件复制回 confluence 容器")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" docker cp atlassian-extras-decoder-v2-3.4.1.jar confluence:/opt/atlassian/confluence/confluence/WEB-INF/lib/atlassian-extras-decoder-v2-3.4.1.jar\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("重启confluence容器")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker restart confluence\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[e._v("再次访问页面,输入之前复制的key后点击下一步")]),e._v(" "),a("li",[e._v("点击 ”My own database“ 后点击 next")]),e._v(" "),a("li",[e._v("输入数据库连接信息，用户名密码是之前创建数据库中的用户名和密码")])]),e._v(" "),a("p",[a("img",{attrs:{src:"images/confluence.png",alt:""}})]),e._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[a("p",[e._v("单击“Empty Site”")])]),e._v(" "),a("li",[a("p",[e._v("点击 “Manage users and groups within Confluence”")])]),e._v(" "),a("li",[a("p",[e._v("填入管理员信息后点击 “next”")])]),e._v(" "),a("li",[a("p",[e._v("点击 ”start“")])])]),e._v(" "),a("h2",{attrs:{id:"解决慢时长gc的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决慢时长gc的问题"}},[e._v("#")]),e._v(" 解决慢时长gc的问题")]),e._v(" "),a("p",[e._v("默认java配置为1G内存使用一段时间后回经常gc造成卡顿，单击“系统信息”可以看到jvm使用情况")]),e._v(" "),a("p",[e._v("进入docker容器")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker exec -it confluence /bin/bash # 进入docker容器 confluence\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("修改java配置")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vi /opt/atlassian/confluence/bin/catalina.sh\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("在 “cygwin=false” 上面添加如下内容，最大内存为2G")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('JAVA_OPTS="-Xms256m -Xmx2048m -XX:PermSize=128m -XX:MaxPermSize=512m"\n或\nCATALINA_OPTS="-Xms256m -Xmx2048m -XX:PermSize=128m -XX:MaxPermSize=512m"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("重启 wiki confluence")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker stop confluence # 停止\ndocker start confluence # 启动\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("blockquote",[a("p",[e._v("参考文档：https://www.cnblogs.com/rslai/p/8845777.html")])])])}),[],!1,null,null,null);s.default=n.exports}}]);