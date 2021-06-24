(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{1269:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"认证与权限"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#认证与权限"}},[s._v("#")]),s._v(" 认证与权限")]),s._v(" "),n("p",[s._v("在前面教程中我们以博客为例，使用DRF开发了博客文章资源API，支持客户端以各种请求方式对文章资源进行增删查改。然而目前的 API 对谁可以新增、编辑或删除文章资源(Article)没有限制，我们本例中希望通过基本的认证(Authentication)与权限(Permission)来实现一些更实用的功能：")]),s._v(" "),n("ul",[n("li",[s._v("只有经过身份验证的用户可以创建article文章(匿名用户不允许通过POST提交新文章)。")]),s._v(" "),n("li",[s._v("未经身份验证的请求应具有完全只读访问权限。")]),s._v(" "),n("li",[s._v("单篇article资源始终与创建者相关联，只有 article 的创建者可以更新或删除它。")])]),s._v(" "),n("h2",{attrs:{id:"认证与权限的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#认证与权限的区别"}},[s._v("#")]),s._v(" 认证与权限的区别")]),s._v(" "),n("p",[s._v("认证(Authentication)与权限(Permission)不是一回事。认证是通过用户提供的用户ID/密码组合或者Token来验证用户的身份。权限(Permission)的校验发生验证用户身份以后，是由系统根据分配权限确定用户可以访问何种资源以及对这种资源进行何种操作，这个过程也被称为授权(Authorization)。")]),s._v(" "),n("p",[s._v("无论是Django还是DRF, 当用户成功通过身份验证以后，系统会把已通过验证的用户对象与request请求绑定，这样一来你就可以使用"),n("code",[s._v("request.user")]),s._v("获取这个用户对象的所有信息了。")]),s._v(" "),n("p",[s._v("接下来我们就要开始动手解决文初提出的3个问题了。")]),s._v(" "),n("h2",{attrs:{id:"前情回顾"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前情回顾"}},[s._v("#")]),s._v(" 前情回顾")]),s._v(" "),n("p",[s._v("在前面的教程中我们编写ArticleList和ArticleView两个基于类的视图(如下所示)。前者如果收到GET请求会返回文章资源列表，如果收到POST请求则添加文章；后者如果收到GET请求就返回单篇文章资源，如果收到PUT或DELETE请求，就对文章资源进行修改或删除。")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" generics\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArticleList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("generics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ListCreateAPIView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    queryset "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Article"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    serializer_class "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ArticleSerializer\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 由于ArticleSerializer中author字段仅为可读，需手动关联")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("perform_create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" serializer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        serializer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("save"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("author"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArticleDetail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("generics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RetrieveUpdateDestroyAPIView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    queryset "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Article"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    serializer_class "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ArticleSerializer\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("以上两个视图其实是有很大问题的，因为任何用户包括匿名用户也可以对文章资源进行修改。比如当你访问单篇文章资源时，你不仅可以看到红色的delete按钮和修改文章内容的表单，而且可以在未登录的情况对它们进行操作。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("【GET】127.0.0.1:8000/v1/articles/9\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(711),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"给视图添加权限"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#给视图添加权限"}},[s._v("#")]),s._v(" 给视图添加权限")]),s._v(" "),n("p",[s._v("在Django传统视图开发中你可能会使用"),n("code",[s._v("@login_required")]),s._v("和"),n("code",[s._v("@permission_required")]),s._v("这样的装饰器要求用户先登录或进行权限验证。在DRF中你不需要做，这是因为REST framework 包含许多默认权限类，我们可以用来限制谁可以访问给定的视图。在这种情况下，我们需要的是 "),n("code",[s._v("IsAuthenticatedOrReadOnly")]),s._v(" 类，它将确保经过身份验证的请求获得读写访问权限，未经身份验证的请求将获得只读读的权限。")]),s._v(" "),n("p",[s._v("现在修改我们的视图("),n("code",[s._v("blog/views.py")]),s._v(")，添加如下代码:")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" generics\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" permissions\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("permissions "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" IsOwnerOrReadOnly\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArticleList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("generics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ListCreateAPIView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    queryset "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Article"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    serializer_class "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ArticleSerializer\n    permission_classes "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("permissions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IsAuthenticatedOrReadOnly"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 手动绑定")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("perform_create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" serializer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        serializer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("save"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("author"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArticleDetail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("generics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RetrieveUpdateDestroyAPIView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    queryset "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Article"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    serializer_class "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ArticleSerializer\n    permission_classes "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("permissions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IsAuthenticatedOrReadOnly"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("此时再访问文章资源列表或单篇文章资源时，你会看到红色的delete按钮和添加修改表单都已消失。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("【GET】127.0.0.1:8000/v1/articles/9\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(712),alt:"img"}})]),s._v(" "),n("p",[s._v("当你重新登录验证身份后，你又可以看到delete按钮和修改表单了，如下所示：\n"),n("img",{attrs:{src:a(713),alt:"img"}})]),s._v(" "),n("p",[s._v("哦，你可能会问，DRF中用户应该访问哪个url登录验证身份呢? 是admin吗？当然不是admin页面，因为只有管理员才能通过admin页面登录。DRF中你可以将登录页面"),n("code",[s._v("api-auth")]),s._v("添加到你的项目urls中，如下所示：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#apiproject/urls.py")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" admin\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urls "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" include\n\nurlpatterns "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" admin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("site"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v1/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" include"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'blog.urls'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'api-auth/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" include"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rest_framework.urls'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户登录页面")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("然后访问"),n("code",[s._v("api-auth/login/")]),s._v("你就可以看到专门的DRF的登录页面了，如下所示：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(714),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"drf自带权限类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#drf自带权限类"}},[s._v("#")]),s._v(" DRF自带权限类")]),s._v(" "),n("p",[s._v("除了"),n("code",[s._v("IsAuthenticatedOrReadOnly")]),s._v(" 类，DRF自带的常用权限类还包括：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("IsAuthenticated")]),s._v("类：仅限已经通过身份验证的用户访问；")]),s._v(" "),n("li",[n("code",[s._v("AllowAny")]),s._v("类：允许任何用户访问；")]),s._v(" "),n("li",[n("code",[s._v("IsAdminUser")]),s._v("类：仅限管理员访问；")]),s._v(" "),n("li",[n("code",[s._v("DjangoModelPermissions")]),s._v("类：只有在用户经过身份验证并分配了相关模型权限时，才会获得授权访问相关模型。")]),s._v(" "),n("li",[n("code",[s._v("DjangoModelPermissionsOrReadOnly")]),s._v("类：与前者类似，但可以给匿名用户访问API的可读权限。")]),s._v(" "),n("li",[n("code",[s._v("DjangoObjectPermissions")]),s._v("类：只有在用户经过身份验证并分配了相关对象权限时，才会获得授权访问相关对象。通常与django-gaurdian联用实现对象级别的权限控制。")])]),s._v(" "),n("h2",{attrs:{id:"自定义权限"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义权限"}},[s._v("#")]),s._v(" 自定义权限")]),s._v(" "),n("p",[s._v("大多数情况下，默认的权限类不能满足我们的要求，这时就需要自定义权限了。自定义的权限类需要继承"),n("code",[s._v("BasePermission")]),s._v("类并根据需求重写"),n("code",[s._v("has_permission(self,request,view)")]),s._v("和"),n("code",[s._v("has_object_permission(self,request, view, obj)")]),s._v("方法。你还可以通过"),n("code",[s._v("message")]),s._v("自定义返回的错误信息。")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" permissions\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CustomerPermission")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("permissions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BasePermission"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    message "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'You have not permissions to do this.'")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("has_permission")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("has_object_permission")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),n("p",[s._v("之前"),n("code",[s._v("IsAuthenticatedOrReadOnly")]),s._v(" 类并不能实现只有文章 article 的创建者才可以更新或删除它，这时我们还需要自定义一个名为"),n("code",[s._v("IsOwnerOrReadOnly")]),s._v(" 的权限类，把它加入到ArticleDetail视图里。")]),s._v(" "),n("p",[s._v("首先我们在blog文件夹下创建"),n("code",[s._v("permissions.py")]),s._v("，添加如下代码：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# blog/permissions.py")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" permissions\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IsOwnerOrReadOnly")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("permissions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BasePermission"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n    自定义权限只允许对象的创建者才能编辑它。"""')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("has_object_permission")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取权限被允许用于任何请求，")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所以我们始终允许 GET，HEAD 或 OPTIONS 请求。")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" permissions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SAFE_METHODS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写入权限只允许给 article 的作者。")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("author "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("然后修改我们的视图，"),n("code",[s._v("IsOwnerOrReadOnly")]),s._v(" 的权限类，把它加入到ArticleDetail视图的"),n("code",[s._v("permission_classes")]),s._v("里。这样就完美实现了文初我们想要实现的三个功能。DRF支持权限类的插拔，是不是很帅?")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#blog/views.py")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" generics\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" permissions\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("permissions "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" IsOwnerOrReadOnly\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArticleList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("generics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ListCreateAPIView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    queryset "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Article"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    serializer_class "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ArticleSerializer\n    permission_classes "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("permissions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IsAuthenticatedOrReadOnly"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# important")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("perform_create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" serializer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        serializer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("save"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("author"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArticleDetail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("generics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RetrieveUpdateDestroyAPIView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    queryset "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Article"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    serializer_class "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ArticleSerializer\n    permission_classes "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("permissions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IsAuthenticatedOrReadOnly"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" IsOwnerOrReadOnly"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h2",{attrs:{id:"更多设置权限方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更多设置权限方式"}},[s._v("#")]),s._v(" 更多设置权限方式")]),s._v(" "),n("p",[s._v("在前面的案例中，我们都是在基于类的API视图里通过"),n("code",[s._v("permission_classes")]),s._v("属性设置的权限类。如果你有些权限是全局或全站通用的，你还可以在settings.py中使用 "),n("code",[s._v("DEFAULT_PERMISSION_CLASSES")]),s._v(" 全局设置默认权限策略。")]),s._v(" "),n("p",[s._v("例如：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("REST_FRAMEWORK "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DEFAULT_PERMISSION_CLASSES'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rest_framework.permissions.IsAuthenticated'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("如果未指定，则此设置默认为允许无限制访问：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DEFAULT_PERMISSION_CLASSES'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rest_framework.permissions.AllowAny'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("如果你习惯使用基于函数的视图编写API，你可以按如下方式给你的函数视图添加权限。")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decorators "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" api_view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" permission_classes\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("permissions "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" IsAuthenticated\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("response "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Response\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@api_view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GET'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@permission_classes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("IsAuthenticated"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("example_view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    content "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'status'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'request was permitted'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[n("strong",[s._v("注意")]),s._v("：当你通过类属性或装饰器设置新的权限类时，视图会覆盖"),n("code",[s._v("settings.py")]),s._v(" 中设置的默认权限。")]),s._v(" "),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),n("p",[s._v("本文以博客为例介绍了如何使用Django REST Framework自带的权限类，如何自定义权限类及如何配置权限类实现了对用户访问API资源进行控制。本文中我们使用了默认的基于session机制的用户认证机制，下篇中我们将重点介绍DRF的认证机制，并把重点放在Token认证上。")]),s._v(" "),n("p",[s._v("原创不易，转载请注明来源。我是大江狗，一名Django技术开发爱好者。您可以通过搜索【"),n("a",{attrs:{href:"https://blog.csdn.net/weixin_42134789"}},[s._v("CSDN大江狗")]),s._v("】、【"),n("a",{attrs:{href:"https://www.zhihu.com/people/shi-yun-bo-53"}},[s._v("知乎大江狗")]),s._v("】和搜索微信公众号【Python Web与Django开发】关注我！")]),s._v(" "),n("p",[n("img",{attrs:{src:a(192),alt:"Python Web与Django开发"}})])])}),[],!1,null,null,null);t.default=e.exports},192:function(s,t,a){s.exports=a.p+"assets/img/django.865401c7.png"},711:function(s,t,a){s.exports=a.p+"assets/img/3.2daffa8e.png"},712:function(s,t,a){s.exports=a.p+"assets/img/5.2d5763a2.png"},713:function(s,t,a){s.exports=a.p+"assets/img/2.7a121e91.png"},714:function(s,t,a){s.exports=a.p+"assets/img/4.2383fb84.png"}}]);