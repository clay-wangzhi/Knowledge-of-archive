(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{1264:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"为什么要学习django-rest-framework-drf-什么是符合restful规范的api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要学习django-rest-framework-drf-什么是符合restful规范的api"}},[s._v("#")]),s._v(" 为什么要学习Django REST Framework (DRF), 什么是符合RESTful规范的API?")]),s._v(" "),n("p",[s._v("Django的未来与Web开发未来发展趋势紧密相关。Django这种基于MVC开发模式的传统框架，非常适合开发基于PC的传统网站，因为它同时包括了后端的开发(逻辑层、数据库层) 和前端的开发(如模板语言、样式)。然而最近几年及未来几年更流行的开发模式肯定是前后端分离, Django也需要做出自己的改变来适应这种开发模式。现代网络应用Web APP或大型网站一般是一个后台，然后对应各种客户端(iOS, android, 浏览器)。由于客户端的开发语言与后台的开发语言经常不一样，这时需要后台能够提供可以跨平台跨语言的一种标准的资源或数据(如json或xml)供前后端沟通，这就是Web API(网络应用程序接口)的作用了。")]),s._v(" "),n("h2",{attrs:{id:"为什么要学习django-rest-framework-drf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要学习django-rest-framework-drf"}},[s._v("#")]),s._v(" 为什么要学习Django REST Framework (DRF)？")]),s._v(" "),n("p",[s._v("Django本身并不是为了开发符合REST规范的Web API而设计, 不过借助Django REST Framework (DRF)这个神器我们可以快速开发出优秀而且规范的Web API来。Django REST framework 给Django提供了用于构建Web API 的强大而灵活的工具包, 包括序列化器、认证、权限、分页、过滤和限流。所以我们这里要感谢DRF，因为它，Django的应用前景更广了，减少了被淘汰的风险。\n"),n("img",{attrs:{src:t(694),alt:"django-rest-framework"}})]),s._v(" "),n("h2",{attrs:{id:"django-rest-framework的安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#django-rest-framework的安装"}},[s._v("#")]),s._v(" Django REST Framework的安装")]),s._v(" "),n("p",[s._v("Django REST framework (DRF)是基于Django实现的一个RESTful风格API框架，能够帮助我们快速开发RESTful风格的API，文档地址如下所示:")]),s._v(" "),n("ul",[n("li",[s._v("官网：https://www.django-rest-framework.org/")])]),s._v(" "),n("p",[s._v("DRF可以使用pip安装，安装前请确保你已经安装了Django。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("pip "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" djangorestframework\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果想要获取一个图形化的页面来操作API，需要将 "),n("code",[s._v("rest_framework")]),s._v("注册到项目的"),n("code",[s._v("INSTALL_APPS")]),s._v("中，如下所示：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("INSTALLED_APPS "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.contrib.admin'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.contrib.auth'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.contrib.contenttypes'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.contrib.sessions'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.contrib.messages'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.contrib.staticfiles'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rest_framework'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your_app'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你自己的app")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("现在我们已经安装好DRF了，但在正式使用它开发API前我们还需要了解两件事情。什么是数据的序列化(Serialization)以及什么是RESTful规范的API, 这对于理解DRF中的序列化serializers类和每个API端点对应的url设计至关重要。")]),s._v(" "),n("h2",{attrs:{id:"序列化基础知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#序列化基础知识"}},[s._v("#")]),s._v(" 序列化基础知识")]),s._v(" "),n("p",[s._v("每种编程语言都有各自的数据类型, 将属于自己语言的数据类型或对象转换为可通过网络传输或可以存储到本地磁盘的数据格式（如：XML、JSON或特定格式的字节串）的过程称为序列化(seralization)；反之则称为反序列化。")]),s._v(" "),n("p",[s._v("API开发的本质就是各种后端语言的自己的数据类型序列化为通用的可读可传输的数据格式，比如常见的JSON类型数据。")]),s._v(" "),n("h3",{attrs:{id:"python数据序列化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python数据序列化"}},[s._v("#")]),s._v(" Python数据序列化")]),s._v(" "),n("p",[s._v("举个简单例子。Python自带json模块的dumps方法可以将python常用数据格式（比如列表或字典)转化为json格式,如下所示。你注意到了吗? 生成的json格式数据外面都加了单引号，这说明dict类型数据已经转化成了json字符串。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" json\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" json.dumps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John"')]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"score"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("112")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"name": "John", "score": 112}\'')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"django查询集序列化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#django查询集序列化"}},[s._v("#")]),s._v(" Django查询集序列化")]),s._v(" "),n("p",[s._v("Django编程就是是python编程，以上所介绍的序列化方法对django也是适用的。不同的是Django还有自己专属的数据类型比如查询集QuerySet和ValueQuerySet类型数据，还提供了自带的serializers类。使用Django自带的serializers类也可以轻易将QuerySet格式的数据转化为json格式。")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Django Queryset数据 to Json")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("core "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" serializers\ndata "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" serializers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("serialize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SomeModel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndata1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" serializers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("serialize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SomeModel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fields"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'id'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndata2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" serializers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("serialize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SomeModel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" some_value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("有时候我们只需要查询结果集的部分字段，可以使用"),n("code",[s._v("values('字段名','字段名2')")]),s._v("来要求返回所需要的数据，可以提升些性能，但是返回来的结果需要先转换成列表格式，再用"),n("code",[s._v("json.dumps()")]),s._v("方法序列化成json格式。示例代码如下所示:")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("serializers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" DjangoJSONEncoder\n\nqueryset "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" myModel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("foo_icontains"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("values"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'f1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'f2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'f3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndata4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dumps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("queryset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cls"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("DjangoJSONEncoder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("尽管Django自带的serializers类也能将Django的查询集QuerySet序列化成json格式数据，Django REST Framework才是你真正需要的序列化工具。与django自带的serializers类相比，DRF的序列化器更强大，可以根据模型生成序列化器，还能对客户端发送过来的数据进行验证。")]),s._v(" "),n("h2",{attrs:{id:"什么是符合restful规范的api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是符合restful规范的api"}},[s._v("#")]),s._v(" 什么是符合RESTful规范的API?")]),s._v(" "),n("p",[s._v("REST是REpresentational State Transfer三个单词的缩写，由Roy Fielding于2000年论文中提出。简单来说，就是用URI表示资源，用HTTP方法(GET, POST, PUT, DELETE)表征对这些资源进行增删查改的操作。而如果你自己开发的API被称为RESTful API，就需要遵循其规定的约束。网上有很多文章对RESTful API规范做了详细介绍, 比如阮一峰的博客和简书, 我们这里只摘取总结部分精华内容，因为我们后面会用到。")]),s._v(" "),n("h3",{attrs:{id:"协议、域名和版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#协议、域名和版本"}},[s._v("#")]),s._v(" 协议、域名和版本")]),s._v(" "),n("p",[s._v("尽量使用https协议，使用专属域名来提供API服务。API版本可以放在URL里面，也可以用HTTP的header进行内容协商，如下所示：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("https://api.example.com/v1\nhttps://www.example.com/api/v1 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"uri-统一资源标识符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uri-统一资源标识符"}},[s._v("#")]),s._v(" uri(统一资源标识符)")]),s._v(" "),n("p",[s._v('在RESTful架构中，每个网址代表一种资源（resource），这个网络地址就是uri (uniform resource identifier), 有时也被称为URL (uniform resource locator)。 因为URI对应一种资源，所以里面不能有动词，只能有名词。一般来说，数据库中的表都是同种记录的"集合"（collection），所以API中的名词也应该使用复数形式。')]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("https://api.example.com/v1/users "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户列表资源地址")]),s._v("\nhttps://api.example.com/v1/users/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户id=5对应资源。注意：这里是users/5，而不是user/5")]),s._v("\nhttps://api.example.com/v1/users/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/articles "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户id=5发表的文章列表")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("如果需要对一个用户信息进行编辑或删除，一个传统Django开发者可能将URL写成如下所示：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("https://api.example.com/v1/users/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/edit/ "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑用户")]),s._v("\nhttps://api.example.com/v1/users/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/delete/ "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除用户")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("上面URL设计其实是不符合RESTful规范的。一个 URI就应该是一个资源，本身不能包含任何动作 (action)。REST的规范是资源的URI地址是固定不变的，对同一资源应使用不同的HTTP请求方法进行不同的操作，比如常见的增删查改。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("POST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    https://api.example.com/v1/users   // 新增\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("GET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("     https://api.example.com/v1/users/1 // 查询\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PATCH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   https://api.example.com/v1/users/1 // 更新\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PUT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("     https://api.example.com/v1/users/1 // 覆盖，全部更新\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DELETE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  https://api.example.com/v1/users/1 // 删除\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v('有时候URL比较长，可能由多个单词组成，建议使用中划线"-"分割，而不是下划线"_"作为分隔符，另外每个url的结尾不能加斜线"/"。')]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("https://api.example.com/v1/user-management/users/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 好")]),s._v("\nhttps://api.example.com/v1/user_management/users/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不好")]),s._v("\nhttps://api.example.com/v1/user-management/users/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/ "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不好")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"http请求方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http请求方法"}},[s._v("#")]),s._v(" HTTP请求方法")]),s._v(" "),n("p",[s._v("常用的HTTP请求方法有下面五个（括号里是对应的SQL命令)，每个方法对应一个操作。客户端在消费服务器提供的API服务时不仅要指定请求地址，还需指定请求方法。")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[s._v("GET（"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("）：从服务器取出资源（一项或多项）。\nPOST（"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v("）：在服务器新建一个资源。\nPUT（"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v("）：在服务器更新资源（客户端提供改变后的完整资源）。\nPATCH（"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v("）：在服务器更新资源（客户端提供改变的属性）。\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v("（"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v("）：从服务器删除资源。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("另外还有两个不常用方法"),n("code",[s._v("HEAD")]),s._v("和"),n("code",[s._v("OPTIONS")]),s._v("，"),n("code",[s._v("HEAD")]),s._v("和"),n("code",[s._v("GET")]),s._v("本质是一样的，区别在于"),n("code",[s._v("HEAD")]),s._v("不含有呈现数据，而仅仅是HTTP头信息。"),n("code",[s._v("OPTIONS")]),s._v("极少使用，它主要用于获取当前URL所支持的方法。")]),s._v(" "),n("p",[n("strong",[s._v("小编注")]),s._v("：不像Django，DRF支持所有以上请求方法。")]),s._v(" "),n("h3",{attrs:{id:"过滤-filtering"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#过滤-filtering"}},[s._v("#")]),s._v(" 过滤（filtering）")]),s._v(" "),n("p",[s._v("如果记录数量很多，服务器不可能都将它们返回给用户。符合RESTful规范的API应该支持过滤。下面是一些常见的通过参数过滤的方式。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("?limit"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("：指定返回记录的数量\n?offset"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("：指定返回记录的开始位置。\n?page"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("per_page")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("：指定第几页，以及每页的记录数。\n?sortby"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("order")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("asc：指定返回结果按照哪个姓名排序，以及排序顺序。\n?user_type_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：指定筛选条件，比如用户类型\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("小编注")]),s._v("：DRF与django-filter联用可以轻松实现过滤。")]),s._v(" "),n("h3",{attrs:{id:"状态码-status-codes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#状态码-status-codes"}},[s._v("#")]),s._v(" 状态码（Status Codes）")]),s._v(" "),n("p",[s._v("服务器在处理客户端请求后还应向用户返回响应的状态码和提示信息，常见的有以下一些状态码。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" OK - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("GET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("201")]),s._v(" CREATED - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("POST/PUT/PATCH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：用户新建或修改数据成功\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("202")]),s._v(" Accepted - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：表示一个请求已经进入后台排队（异步任务）\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("204")]),s._v(" NO CONTENT - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DELETE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：用户删除数据成功\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),s._v(" INVALID REQUEST - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("POST/PUT/PATCH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("401")]),s._v(" Unauthorized - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：表示用户没有权限（令牌、用户名、密码错误）。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("403")]),s._v(" Forbidden - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 表示用户得到授权（与401错误相对），但是访问是被禁止的。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(" NOT FOUND - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("406")]),s._v(" Not Acceptable - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("GET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("410")]),s._v(" Gone -"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("GET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：用户请求的资源被永久删除，且不会再得到的。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("422")]),s._v(" Unprocesable entity - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("POST/PUT/PATCH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 当创建一个对象时，发生一个验证错误。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" INTERNAL SERVER ERROR - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：服务器发生错误\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("strong",[s._v("小编注")]),s._v("：DRF给出Respone时可以指定各种各样状态码，很容易使用。")]),s._v(" "),n("h3",{attrs:{id:"hypermedia-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hypermedia-api"}},[s._v("#")]),s._v(" Hypermedia API")]),s._v(" "),n("p",[s._v("RESTful API最好做到Hypermedia，即返回结果中提供链接，连向其他API方法，使得用户不查文档，也知道下一步应该做什么。比如，当用户向api.example.com的根目录发出请求，会得到这样一个文档。")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"link"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rel"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"collection https://www.example.com/zoos"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"href"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://api.example.com/zoos"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"List of zoos"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"application/vnd.yourformat+json"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("strong",[s._v("小编注")]),s._v("：DRF支持HyperLinkedModel，很容易实现这点。")]),s._v(" "),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),n("p",[s._v("本文总结了为什么要学习Django REST Framework, 什么是序列化和符合RESTful规范的API。下篇文章中我们将以一个简单的博客的实例来详细介绍DRF的使用，开发最基础的Web API，并测试API的使用，欢迎关注。")]),s._v(" "),n("p",[s._v("原创不易，转载请注明来源。我是大江狗，一名Django技术开发爱好者。您可以通过搜索【"),n("a",{attrs:{href:"https://blog.csdn.net/weixin_42134789"}},[s._v("CSDN大江狗")]),s._v("】、【"),n("a",{attrs:{href:"https://www.zhihu.com/people/shi-yun-bo-53"}},[s._v("知乎大江狗")]),s._v("】和搜索微信公众号【Python Web与Django开发】关注我！")]),s._v(" "),n("p",[n("img",{attrs:{src:t(192),alt:"Python Web与Django开发"}})])])}),[],!1,null,null,null);a.default=e.exports},192:function(s,a,t){s.exports=t.p+"assets/img/django.865401c7.png"},694:function(s,a,t){s.exports=t.p+"assets/img/1.5e228b01.png"}}]);