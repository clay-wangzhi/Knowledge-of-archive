(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{718:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_4-1-变量替换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-变量替换"}},[s._v("#")]),s._v(" 4.1 变量替换")]),s._v(" "),n("p",[s._v("变量名是其所指向值的一个占位符（placeholder）。引用变量值的过程我们称之为变量替换（variable substitution）。")]),s._v(" "),n("h3",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")]),s._v(" $")]),s._v(" "),n("p",[s._v("接下来我们仔细区分一下"),n("strong",[s._v("变量名")]),s._v("与"),n("strong",[s._v("变量值")]),s._v("。如果变量名是 "),n("code",[s._v("variable1")]),s._v("， 那么 "),n("code",[s._v("$variable1")]),s._v(" 就是对变量值的引用。"),n("sup",{staticClass:"footnote-ref"},[n("a",{attrs:{href:"#fn1"}},[s._v("[1]")]),n("a",{staticClass:"footnote-anchor",attrs:{id:"fnref1"}})])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("bash$ variable1=23\n\n\nbash$ echo variable1\nvariable1\n\nbash$ echo $variable1\n23\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("变量仅仅在声明时、赋值时、被删除时（"),n("code",[s._v("unset")]),s._v("）、被导出时（"),n("code",[s._v("export")]),s._v("），算术运算中使用双括号结构((...))时或在代表信号时（signal，查看样例 32-5）才不需要有 $ 前缀。赋值可以是使用 =（比如 "),n("code",[s._v("var1=27")]),s._v("），可以是在 "),n("code",[s._v("read")]),s._v(" 语句中，也可以是在循环的头部（"),n("code",[s._v("for var2 in 1 2 3")]),s._v("）。")]),s._v(" "),n("p",[s._v("在双引号"),n("code",[s._v('""')]),s._v("字符串中可以使用变量替换。我们称之为部分引用，有时候也称弱引用。而使用单引号"),n("code",[s._v("''")]),s._v("引用时，变量只会作为字符串显示，变量替换不会发生。我们称之为全引用，有时也称强引用。更多细节将在第五章讲解。")]),s._v(" "),n("p",[s._v("实际上, "),n("code",[s._v("$variable")]),s._v(" 这种写法是 "),n("code",[s._v("${variable}")]),s._v(" 的简化形式。在某些特殊情况下，使用 "),n("code",[s._v("$variable")]),s._v(" 写法会造成语法错误，使用完整形式会更好（查看章节 10.2）。")]),s._v(" "),n("p",[s._v("样例 4-1. 变量赋值与替换")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ex9.sh")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变量赋值与替换")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("375")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hello")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   ^ ^")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#----------------------------------------------------")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化变量时，赋值号 = 的两侧绝不允许有空格出现。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果有空格会发生什么？")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   "VARIABLE =value"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#            ^")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#% 脚本将会尝试运行带参数 "=value" 的 "VARIABLE " 命令。')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   "VARIABLE= value"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#             ^")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#% 脚本将会尝试运行 "value" 命令，')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#+ 同时设置环境变量 "VARIABLE" 为 ""。')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#----------------------------------------------------")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" hello    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hello")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 没有引用变量，"hello" 只是一个字符串...')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hello")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 375")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ^          这是变量引用。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${hello}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 375")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#               与上面的类似，变量引用。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字符串内引用变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hello")]),s._v('"')]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 375")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${hello}")]),s._v('"')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 375")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hello")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A B  C   D"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hello")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A B C D")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hello")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A B  C   D")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 正如我们所见，echo $hello 与 echo "$hello" 的结果不同。')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ====================================")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字符串内引用变量将会保留变量的空白符。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ====================================")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hello")]),s._v("'")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $hello")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ^      ^")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#  单引号会禁用掉（转义）变量引用，这导致 "$" 将以普通字符形式被解析。')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意单双引号字符串引用效果的不同。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hello")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将其设置为空值")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hello")]),s._v(" (null value) = "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hello")]),s._v('"')]),s._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $hello (null value) =")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意 ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将一个变量设置为空与删除(unset)它不同，尽管它们的表现形式相同。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -----------------------------------------------")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用空白符分隔，可以在一行内对多个变量进行赋值。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 但是这会降低程序的可读性，并且可能会导致部分程序不兼容的问题。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var3")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$V3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"var1='),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var1")]),s._v("   var2="),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var2")]),s._v("   var3="),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$var3")]),s._v('"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在一些老版本的 shell 中这样写可能会有问题。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -----------------------------------------------")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("numbers")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"one two three"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#           ^   ^")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("other_numbers")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1 2 3"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#               ^ ^")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果变量中有空白符号，那么必须用引号进行引用。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# other_numbers=1 2 3                  # 出错")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"numbers = '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$numbers")]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"other_numbers = '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$other_numbers")]),s._v('"')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# other_numbers = 1 2 3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以转义空白符。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mixed_bag")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" ---"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" Whatever\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#           ^    ^ 使用 \\ 转义空格")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mixed_bag")]),s._v('"')]),s._v("         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2 --- Whatever")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uninitialized_variable = '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uninitialized_variable")]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 未初始化的变量是空值(null表示不含有任何值)。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uninitialized_variable")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只声明而不初始化，等同于设为空值。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uninitialized_variable = '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uninitialized_variable")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仍旧为空")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uninitialized_variable")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" uninitialized_variable    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uninitialized_variable = '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uninitialized_variable")]),s._v('"')]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# uninitialized_variable =")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变量值为空")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br")])]),n("blockquote",[n("p",[n("img",{attrs:{src:"http://tldp.org/LDP/abs/images/caution.gif",alt:"notice"}}),s._v(" 一个未被赋值或未初始化的变量拥有空值（null value）。"),n("em",[s._v("注意：null值不等同于0")]),s._v("。")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$unassigned")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$unassigned")]),s._v(' is NULL."')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $unassigned is NULL.")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("blockquote",[n("p",[s._v("在赋值前使用变量可能会导致错误。但在算术运算中使用未赋值变量是可行的。")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uninitialized")]),s._v('"')]),s._v("            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 空行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uninitialized += 5"')]),s._v("         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加5")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uninitialized")]),s._v('"')]),s._v("            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结论：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一个未初始化的变量不含值(null)，但在算术运算中会被作为0处理。")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("blockquote",[n("p",[s._v("也可参考样例 15-23。")])]),s._v(" "),n("hr",{staticClass:"footnotes-sep"}),s._v(" "),n("section",{staticClass:"footnotes"},[n("ol",{staticClass:"footnotes-list"},[n("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[n("p",[s._v("实际上，变量名是被称作左值（lvalue），意思是出现在赋值表达式的左侧的值，比如 "),n("code",[s._v("VARIABLE=23")]),s._v("。变量值被称作右值（rvalue），意思是出现在赋值表达式右侧的值，比如 "),n("code",[s._v("VAR2=$VARIABLE")]),s._v("。"),n("br"),s._v("事实上，变量名只是一个引用，一枚指针，指向实际存储数据内存地址的指针。 "),n("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[s._v("↩︎")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);