(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{639:function(a,e,t){"use strict";t.r(e);var s=t(1),i=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" 背景")]),a._v(" "),t("h3",{attrs:{id:"数据信息泄漏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据信息泄漏"}},[a._v("#")]),a._v(" 数据信息泄漏")]),a._v(" "),t("p",[a._v("5700万用户数据泄漏")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/1569311876561.png",alt:""}})]),a._v(" "),t("p",[a._v("1.08亿条投注信息泄漏")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/1569311911223.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"原因分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原因分析"}},[a._v("#")]),a._v(" 原因分析")]),a._v(" "),t("ul",[t("li",[a._v("Elasticsearch在默认安装后，不提供任何形式的安全防护")]),a._v(" "),t("li",[a._v("错误的配置信息导致公网可以访问ES集群\n"),t("ul",[t("li",[a._v("在elasticsearch.yml文件中，server.host被错误的配置为0.0.0.0")])])])]),a._v(" "),t("h2",{attrs:{id:"数据安全性的基本需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据安全性的基本需求"}},[a._v("#")]),a._v(" 数据安全性的基本需求")]),a._v(" "),t("ul",[t("li",[a._v("身份认证\n"),t("ul",[t("li",[a._v("鉴定用户是否合法")])])]),a._v(" "),t("li",[a._v("用户鉴权\n"),t("ul",[t("li",[a._v("指定用户可以访问哪个索引")])])]),a._v(" "),t("li",[a._v("传输加密")]),a._v(" "),t("li",[a._v("日志审计")])]),a._v(" "),t("h2",{attrs:{id:"一些免费的方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些免费的方案"}},[a._v("#")]),a._v(" 一些免费的方案")]),a._v(" "),t("ul",[t("li",[a._v("设置Nginx反向代理，用户，密码 登录nginx")]),a._v(" "),t("li",[a._v("安装免费的Security插件\n"),t("ul",[t("li",[a._v("Search Guard - https://search-guard.com/")]),a._v(" "),t("li",[a._v("ReadOnly REST - https://github.com/sscarduzio/elasticsearch-readonlyrest-plugin")])])]),a._v(" "),t("li",[a._v("X-Pack的Basic版\n"),t("ul",[t("li",[a._v("从ES 6.8 & ES 7.0开始，Security纳入x-pack的Basic版本中，免费使用一些基本的功能")]),a._v(" "),t("li",[a._v("https://www.elastic.co/cn/what-is/elastic-stack-security")])])])]),a._v(" "),t("h3",{attrs:{id:"authentication-身份认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authentication-身份认证"}},[a._v("#")]),a._v(" Authentication - 身份认证")]),a._v(" "),t("ul",[t("li",[a._v("认证体系的几种类型\n"),t("ul",[t("li",[a._v("提供用户名和密码")]),a._v(" "),t("li",[a._v("提供秘钥或Kerberos票据")])])]),a._v(" "),t("li",[a._v("Realms： X-pack中的认证服务\n"),t("ul",[t("li",[a._v("内置Realms（免费）\n"),t("ul",[t("li",[a._v("File/Native（用户名密码保存在Elasticsearch）")])])]),a._v(" "),t("li",[a._v("外部Realms（收费）\n"),t("ul",[t("li",[a._v("LDAP / Active Diretory / PKI / SAML / Kerberos")])])])])])]),a._v(" "),t("h3",{attrs:{id:"rbac-用户鉴权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rbac-用户鉴权"}},[a._v("#")]),a._v(" RBAC - 用户鉴权")]),a._v(" "),t("ul",[t("li",[a._v("什么是RBCA: Role Based Access Control，定义一个角色，并分配一组权限。权限包括索引级，字段级，集群级的不同的操作。然后通过将角色分配给用户，使得用户拥有这些权限\n"),t("ul",[t("li",[a._v("User： The authenticated User")]),a._v(" "),t("li",[a._v("Role：A named set of permisssions")]),a._v(" "),t("li",[a._v("Permission：A set of one or more privileges against a secured resource")]),a._v(" "),t("li",[a._v("Privilege：A named group of 1 or more actions that user may execute against a secured resource")])])])]),a._v(" "),t("h3",{attrs:{id:"privilege"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#privilege"}},[a._v("#")]),a._v(" Privilege")]),a._v(" "),t("ul",[t("li",[a._v("Cluster Privileges\n"),t("ul",[t("li",[a._v("all / monitor / manager / manage_index / manage_index_template / manage_rollup")])])]),a._v(" "),t("li",[a._v("Indices Privileges\n"),t("ul",[t("li",[a._v("all / create / create_index / delete / delete_index / index / manage / read / write / view_index_metadata")])])])]),a._v(" "),t("h3",{attrs:{id:"创建内置的用户和角色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建内置的用户和角色"}},[a._v("#")]),a._v(" 创建内置的用户和角色")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/1569313522190.png",alt:""}})]),a._v(" "),t("h4",{attrs:{id:"使用security-api创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用security-api创建用户"}},[a._v("#")]),a._v(" 使用Security API创建用户")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/1569313559385.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"开启并配置x-pack的认证与鉴权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启并配置x-pack的认证与鉴权"}},[a._v("#")]),a._v(" 开启并配置X-pack的认证与鉴权")]),a._v(" "),t("ul",[t("li",[a._v("修改配置文件，打开认证与授权")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("bin/elasticsearch -E node.name=node0 -E cluster.name=geektime -E path.data=node0_data -E http.port=9200 -E xpack.security.enabled=true\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("创建默认的用户和分组")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("bin/elasticsearch-password interactive\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("当集群开启身份认证之后，配置Kibana")]),a._v(" "),t("li",[a._v("Demo\n"),t("ul",[t("li",[a._v("创建一个Role，配置为对某个索引只读权限 / 创建一个用户，把用户加入Role")])])])]),a._v(" "),t("h4",{attrs:{id:"配置kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置kibana"}},[a._v("#")]),a._v(" 配置Kibana")]),a._v(" "),t("ul",[t("li",[a._v("修改kibana.yml")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('elasticsearch.username: "kibana"\nelasticsearch.password: "changeme"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])])}),[],!1,null,null,null);e.default=i.exports}}]);