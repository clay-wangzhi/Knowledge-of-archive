(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{744:function(a,l,t){"use strict";t.r(l);var s=t(1),r=Object(s.a)({},(function(){var a=this,l=a.$createElement,t=a._self._c||l;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analysis"}},[a._v("#")]),a._v(" Analysis")]),a._v(" "),t("h3",{attrs:{id:"analysis与analyzer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analysis与analyzer"}},[a._v("#")]),a._v(" Analysis与Analyzer")]),a._v(" "),t("ul",[t("li",[a._v("Analysis - 文本分析是把全文本转换一系列单词（term/token）的过程，也叫分词")]),a._v(" "),t("li",[a._v("Analysis是通过Analyzer来实现的\n"),t("ul",[t("li",[a._v("可使用Elasticsearch内置的分析器/或者按需定制化分析器")])])]),a._v(" "),t("li",[a._v("除了在数据写入时转换词条，匹配Query语句时候也需要用相同的分析器对查询语句进行分析")])]),a._v(" "),t("h3",{attrs:{id:"analyzer的组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analyzer的组成"}},[a._v("#")]),a._v(" Analyzer的组成")]),a._v(" "),t("ul",[t("li",[a._v("分词器是专门处理分词的组件，Analyzer由三部分组成\n"),t("ul",[t("li",[a._v("Character Filters（针对原始文本处理，例如去除html）/ Tokenizer（按照规则切分为单词）/ Token Filter（将切分的单词进行加工，小写，删除stopwords，增加同义词）")])])])]),a._v(" "),t("p",[a._v("举例")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/1568094953293.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"elasticsearch的内置分词器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch的内置分词器"}},[a._v("#")]),a._v(" Elasticsearch的内置分词器")]),a._v(" "),t("ul",[t("li",[a._v("Standard Analyzer - 默认分词器，按词切分，小写处理")]),a._v(" "),t("li",[a._v("Simple Analyzer - 按照非字母切分（符号被过滤），小写处理")]),a._v(" "),t("li",[a._v("Stop Analyzer - 小写处理，停用词过滤（the ，a，is）")]),a._v(" "),t("li",[a._v("Whitespace Analyzer - 按照空格切分，不转小写")]),a._v(" "),t("li",[a._v("Keyword Analyzer - 不分词，直接将输入当做输出")]),a._v(" "),t("li",[a._v("Patter Analyzer - 正则表达式，默认\\W+（非字符分隔）")]),a._v(" "),t("li",[a._v("Language - 提供了30多种常见语言的分词器")]),a._v(" "),t("li",[a._v("Customer Analyzer  - 自定义分词器")])]),a._v(" "),t("h3",{attrs:{id:"使用-analyzer-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-analyzer-api"}},[a._v("#")]),a._v(" 使用_analyzer API")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/1568095742575.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"中文分词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中文分词"}},[a._v("#")]),a._v(" 中文分词")]),a._v(" "),t("h3",{attrs:{id:"分文分词的难点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分文分词的难点"}},[a._v("#")]),a._v(" 分文分词的难点")]),a._v(" "),t("ul",[t("li",[a._v("中文句子，切分成一个一个词（不是一个个字）")]),a._v(" "),t("li",[a._v("英文中，单词有自然的空格作为分隔")]),a._v(" "),t("li",[a._v("一句中文，在不同的上下文，有不同的理解\n"),t("ul",[t("li",[a._v("这个苹果，不大好吃 / 这个苹果，不大，好吃！")])])])]),a._v(" "),t("h3",{attrs:{id:"icu-analyzer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#icu-analyzer"}},[a._v("#")]),a._v(" ICU Analyzer")]),a._v(" "),t("ul",[t("li",[a._v("需要安装plugin\n"),t("ul",[t("li",[a._v("Elasticsearch-plugin install analysis-icu")])])]),a._v(" "),t("li",[a._v("提供了Unicode的支持，更好的支持亚洲语言")])]),a._v(" "),t("p",[t("img",{attrs:{src:"images/1568096106355.png",alt:""}})]),a._v(" "),t("p",[a._v("举例")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/1568096123515.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"常用的中文分词器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的中文分词器"}},[a._v("#")]),a._v(" 常用的中文分词器")]),a._v(" "),t("ul",[t("li",[a._v("IK\n"),t("ul",[t("li",[a._v("支持自定义词库，支持热更新分词字典")]),a._v(" "),t("li",[a._v("https://github.com/medcl/elasticsearch-analysis-ik")])])]),a._v(" "),t("li",[a._v("THUlAC\n"),t("ul",[t("li",[a._v("THU Lexucal Analyzer for Chinese，清华大学自然语言处理和社会人文计算实验室的一套中文分词器")]),a._v(" "),t("li",[a._v("https://github.com/microbun/elasticsearch-thulac-plugin")])])])])])}),[],!1,null,null,null);l.default=r.exports}}]);