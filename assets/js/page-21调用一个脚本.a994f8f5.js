(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1001:function(_,e,t){"use strict";t.r(e);var v=t(1),c=Object(v.a)({},(function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_2-1-调用一个脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-调用一个脚本"}},[_._v("#")]),_._v(" 2.1 调用一个脚本")]),_._v(" "),t("p",[_._v("写完一个脚本以后，你可以通过"),t("code",[_._v("sh scriptname")]),_._v("或"),t("code",[_._v("bash scriptname")]),_._v("来调用它（不推荐使用"),t("code",[_._v("sh <scriptname")]),_._v("调用脚本，因为这会禁用脚本从标准输入（stdin）读入数据）。更方便的方式是使用"),t("code",[_._v("chmod")]),_._v("命令使脚本可以被直接执行。")]),_._v(" "),t("p",[_._v("执行命令：")]),_._v(" "),t("p",[t("code",[_._v("chmod 555 scriptname")]),_._v("（给予所有用户读取/执行的权限）")]),_._v(" "),t("p",[_._v("或")]),_._v(" "),t("p",[t("code",[_._v("chmod +rx scriptname")]),_._v("（给予所有用户读取/执行的权限）")]),_._v(" "),t("p",[t("code",[_._v("chmod u+rx scriptname")]),_._v("（仅给予脚本所有者读取/执行的权限）")]),_._v(" "),t("p",[_._v("当脚本的权限被设置好后，你就可以直接使用"),t("code",[_._v("./scriptname")]),_._v("[^3]进行调用测试了。如果脚本文件以sha-bang开头，那么它将自动调用指定的命令解释器运行脚本。")]),_._v(" "),t("p",[_._v("完成调试与测试后，你可能会将脚本文件移至"),t("code",[_._v("/usr/local/bin")]),_._v("（使用root权限）中，使脚本可以被所有用户调用。这时你可以直接在命令行中输入"),t("code",[_._v("scriptname [ENTER]")]),_._v("执行脚本。")])])}),[],!1,null,null,null);e.default=c.exports}}]);