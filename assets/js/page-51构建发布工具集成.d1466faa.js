(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{956:function(s,a,e){"use strict";e.r(a);var t=e(1),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_5-1-构建发布工具集成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-构建发布工具集成"}},[s._v("#")]),s._v(" 5.1 构建发布工具集成")]),s._v(" "),e("p",[s._v("安装完成后，配置管理工具")]),s._v(" "),e("h2",{attrs:{id:"安装并配置-git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装并配置-git"}},[s._v("#")]),s._v(" 安装并配置 git")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("编辑git环境变量为/usr/bin/git")]),s._v(" "),e("h2",{attrs:{id:"安装并配置-maven"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装并配置-maven"}},[s._v("#")]),s._v(" 安装并配置 maven")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf apache-maven-3.6.3-bin.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" apache-maven-3.6.3 /usr/local/maven\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("code",[s._v("vim /etc/profile.d/maven.sh")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("M2_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/maven\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$M2_HOME")]),s._v("/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("source /etc/profile.d/maven.sh\nmvn --version\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("编辑maven的环境变量为/usr/local/maven")]),s._v(" "),e("h2",{attrs:{id:"安装并配置-ansible"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装并配置-ansible"}},[s._v("#")]),s._v(" 安装并配置 ansible")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ansible\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("编辑ansible的环境变量为/usr/bin")]),s._v(" "),e("h2",{attrs:{id:"安装并配置-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装并配置-node"}},[s._v("#")]),s._v(" 安装并配置 node")]),s._v(" "),e("p",[s._v("参考官方说明：https://github.com/nodejs/help/wiki/Installation")]),s._v(" "),e("p",[s._v("有时候"),e("code",[s._v("npm install")]),s._v("是需要创建目录的权限，所以最后给 node 目录 root 权限")])])}),[],!1,null,null,null);a.default=n.exports}}]);