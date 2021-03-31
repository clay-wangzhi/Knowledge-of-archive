(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{662:function(s,a,n){"use strict";n.r(a);var e=n(1),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"playbook的语法-yaml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#playbook的语法-yaml"}},[s._v("#")]),s._v(" playbook的语法：YAML")]),s._v(" "),n("p",[s._v("ansible的playbook采用yaml语法，它以非常简洁的方式实现了json格式的事件描述。")]),s._v(" "),n("p",[s._v("yaml之于json就像markdown之于html一样，极度简化了json的书写。")]),s._v(" "),n("p",[s._v("YAML文件后缀通常为.yaml或.yml。")]),s._v(" "),n("p",[s._v('YAML在不少工具里都使用，学习它是"一次学习、终生受益"的，所以很有必要把yaml的语法格式做个梳理，系统性地去学一学。')]),s._v(" "),n("p",[n("strong",[s._v("YAML的基本语法规则如下：")])]),s._v(" "),n("p",[s._v("(1).使用缩进表示层级关系")]),s._v(" "),n("p",[s._v("(2).缩进时不允许使用Tab键，只允许使用空格")]),s._v(" "),n("p",[s._v("(3).缩进的空格数目不重要，只要相同层级的元素左对齐即可")]),s._v(" "),n("p",[s._v('(4).yaml文件以"---"作为文档的开始，以表明这是一个yaml文件')]),s._v(" "),n("blockquote",[n("p",[s._v("即使没有使用"),n("code",[s._v("---")]),s._v("开头，也不会有什么影响")])]),s._v(" "),n("p",[s._v("(5).# 表示注释，从这个字符一直到行尾，都会被解析器忽略")]),s._v(" "),n("p",[s._v("(6).字符串不用加引号，但在可能产生歧义时，需加引号(单双引号皆可)，比如引用变量时")]),s._v(" "),n("p",[s._v("(7).布尔值非常灵活，不分区大小写的true/false、yes/no、on/off、y/n、0和1都允许")]),s._v(" "),n("p",[n("strong",[s._v("YAML支持三种数据结构：")])]),s._v(" "),n("p",[s._v("(1).对象：key/value格式，也称为哈希结构、字典结构或关联数组")]),s._v(" "),n("p",[s._v("(2).数组：也称为列表")]),s._v(" "),n("p",[s._v("(3).标量(scalars)：单个值")]),s._v(" "),n("p",[s._v("可以去找一些在线YAML转换JSON网站，比如 "),n("a",{attrs:{href:"http://yaml-online-parser.appspot.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://yaml-online-parser.appspot.com"),n("OutboundLink")],1),s._v(" 通过在线转换可以验证或查看自己所写的YAML是否出错以及哪里出错。")]),s._v(" "),n("h3",{attrs:{id:"对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[s._v("#")]),s._v(" 对象")]),s._v(" "),n("p",[s._v("一组键值对，使用冒号隔开key和value。注意，冒号后必须至少一个空格。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("name: clay\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("等价于json：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n\t"name": "clay"\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[s._v("#")]),s._v(" 数组")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("---\n- Shell\n- Perl\n- Python\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("等价于json：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('["Shell","Perl","Python"]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("也可以使用行内数组(内联语法)的写法：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('---\n["Shell","Perl","Python"]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("再例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("---\n- lang1: Shell\n- lang2: Perl\n- lang3: Python\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("等价于json：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[\n    {"lang1": "Shell"},\n    {"lang2": "Perl"},\n    {"lang3": "Python"}\n]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("将对象和数组混合：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("---\nlanguages:\n  - Shell\n  - Perl\n  - Python\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("等价于json：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n\t"languages": ["Shell","Perl","Python"]\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"字典"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字典"}},[s._v("#")]),s._v(" 字典")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("---\nperson1:\n  name: clay\n  age: 18\n  gender: male\n\nperson2:\n  name: wangchi\n  age: 19\n  gender: female\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("等价于json：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "person2": {\n    "gender": "female",\n    "age": 19,\n    "name": "clay"\n  },\n  "person1": {\n    "gender": "male",\n    "age": 18,\n    "name": "wangchi"\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("也可以使用行内对象的写法：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("---\nperson1: {name: clay, age: 18, gender: male}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"复合结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复合结构"}},[s._v("#")]),s._v(" 复合结构")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("---\n- person1:\n  name: clay\n  age: 18\n  langs:\n    - Perl\n    - Ruby\n    - Shell\n\n- person2:\n  name: xiaofanggao\n  age: 19\n  langs:\n    - Python\n    - Javascript\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("等价于json：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[\n    {\n        "langs": [\n        "Perl",\n        "Ruby",\n        "Shell"\n        ],\n        "person1": null,\n        "age": 18,\n        "name": "clay"\n    },\n    {\n        "person2": null,\n        "age": 19,\n        "langs": [\n        "Python",\n        "Javascript"\n        ],\n        "name": "xiaofanggao"\n    }\n]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"字符串续行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串续行"}},[s._v("#")]),s._v(" 字符串续行")]),s._v(" "),n("p",[s._v("字符串可以写成多行，从第二行开始，必须至少有一个单空格缩进。换行符会被转为空格。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("str: hello\n  world\n  hello world\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("等价于json：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "str": "hello world hello world"\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("也可以使用 > 换行，它类似于上面的多层缩进写法。此外，还可以使用|在换行时保留换行符。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("that: >\n  Foo\n  Bar\nthis: |\n  Foo\n  Bar\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("等价于json：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{'that': 'Foo Bar', 'this': 'Foo\\nBar\\n'}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("参考链接：")]),s._v(" "),n("p",[s._v("https://blog.51cto.com/cloumn/blog/1543")])])])}),[],!1,null,null,null);a.default=t.exports}}]);