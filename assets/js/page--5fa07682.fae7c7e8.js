(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{997:function(v,_,t){"use strict";t.r(_);var d=t(1),e=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("table",[t("thead",[t("tr",[t("th",[v._v("退出代码")]),v._v(" "),t("th",[v._v("表意")]),v._v(" "),t("th",[v._v("示例")]),v._v(" "),t("th",[v._v("注释")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("1")]),v._v(" "),t("td",[v._v("通用错误")]),v._v(" "),t("td",[v._v('let "var1 = 1/0"')]),v._v(" "),t("td",[v._v("其他错误，如除以零错误及其他无权限操作。")])]),v._v(" "),t("tr",[t("td",[v._v("2")]),v._v(" "),t("td",[v._v("(据 Bash 文档) 误用 Shell builtins")]),v._v(" "),t("td",[v._v("empty_function() {}")]),v._v(" "),t("td",[v._v("缺失关键词或指令，或权限问题 (及 diff 在二进制文件比较时的返回值)")])]),v._v(" "),t("tr",[t("td",[v._v("126")]),v._v(" "),t("td",[v._v("调用的指令无法执行")]),v._v(" "),t("td",[v._v("/dev/null")]),v._v(" "),t("td",[v._v("权限问题或命令不可执行")])]),v._v(" "),t("tr",[t("td",[v._v("127")]),v._v(" "),t("td",[v._v("「未找到指令」")]),v._v(" "),t("td",[v._v("illegal_command")]),v._v(" "),t("td",[v._v("可能是 $PATH 有问题或输入有误。")])]),v._v(" "),t("tr",[t("td",[v._v("128")]),v._v(" "),t("td",[v._v("exit 的参数有误")]),v._v(" "),t("td",[v._v("exit 3.14159")]),v._v(" "),t("td",[v._v("exit 只接受范围在 0 - 255 的整数 (见第一个脚注)")])]),v._v(" "),t("tr",[t("td",[v._v("128+n")]),v._v(" "),t("td",[v._v("错误信号 “n”")]),v._v(" "),t("td",[v._v("脚本的 kill -9 $PPID")]),v._v(" "),t("td",[v._v("$? 返回 137 (128 + 9)")])]),v._v(" "),t("tr",[t("td",[v._v("130")]),v._v(" "),t("td",[v._v("脚本被 Control-C 终止")]),v._v(" "),t("td",[v._v("Ctl-C")]),v._v(" "),t("td",[v._v("Control-C 是错误信号 2 (130 = 128 + 2, 见上)")])]),v._v(" "),t("tr",[t("td",[v._v("255*")]),v._v(" "),t("td",[v._v("错误状态超范围")]),v._v(" "),t("td",[v._v("exit -1")]),v._v(" "),t("td",[v._v("exit 只接受范围在 0 - 255 的整数")])])])]),v._v(" "),t("p",[v._v("根据上表，退出代码 1 - 2，126 - 165 及 255 有特别含义，并因此应避免用于用户定义的退出代码。以 "),t("em",[v._v("exit 127")]),v._v(" 结束代码一定会在调试时导致混乱 (这是「命令未找到」的错误代码还是用户定义的？)。然而，许多脚本把 "),t("em",[v._v("exit 1")]),v._v(" 当作出错通用退出指令。因为退出代码 1 表示许多可能的错误，这对调试不是很有用。")]),v._v(" "),t("p",[v._v("对此曾有过系统化退出代码的尝试 (见 "),t("code",[v._v("/usr/include/sysexits.h")]),v._v(")，但这是为了 C/C++ 程序员的。脚本中类似的标准可能比较恰当。文档作者提议限制用户定义的错误代码为 64 - 113 (包括表示成功的 0)，以符合 C/C++ 标准。这会分配 50 个可用代码，也会使脚本排错更直观。本文档中所有脚本示例符合这个标准，除了需要违反这一点的情况，如 例 9-2。")]),v._v(" "),t("p",[v._v('{% hint style="info" %}\n只有在 Bash 或 '),t("em",[v._v("sh")]),v._v(" 提示符中，Shell 脚本退出后在命令行执行 $? 才会给出与上表一致的结果，运行 "),t("em",[v._v("C-shell")]),v._v(" 或 "),t("em",[v._v("tcsh")]),v._v(" 有时会给出不同的结果。\n{% endhint %}")])])}),[],!1,null,null,null);_.default=e.exports}}]);