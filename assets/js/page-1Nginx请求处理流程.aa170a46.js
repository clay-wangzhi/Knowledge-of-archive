(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{692:function(t,a,_){"use strict";_.r(a);var r=_(1),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"_1-nginx请求处理流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-nginx请求处理流程"}},[t._v("#")]),t._v(" 1 Nginx请求处理流程")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200310164648893.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"_2-nginx进程结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-nginx进程结构"}},[t._v("#")]),t._v(" 2 Nginx进程结构")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200310164732720.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"_3-nginx进程管理-信号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-nginx进程管理-信号"}},[t._v("#")]),t._v(" 3 Nginx进程管理：信号")]),t._v(" "),_("h3",{attrs:{id:"_3-1-master进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-master进程"}},[t._v("#")]),t._v(" 3.1 Master进程")]),t._v(" "),_("ul",[_("li",[t._v("监控worker进程\n"),_("ul",[_("li",[t._v("CHLD")])])]),t._v(" "),_("li",[t._v("管理worker进程")]),t._v(" "),_("li",[t._v("接收信号\n"),_("ul",[_("li",[t._v("TERM，INT")]),t._v(" "),_("li",[t._v("QUIT")]),t._v(" "),_("li",[t._v("HUP")]),t._v(" "),_("li",[t._v("USR1")]),t._v(" "),_("li",[t._v("USR2")]),t._v(" "),_("li",[t._v("WINCH")])])])]),t._v(" "),_("h3",{attrs:{id:"_3-2-worker进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-worker进程"}},[t._v("#")]),t._v(" 3.2 Worker进程")]),t._v(" "),_("ul",[_("li",[t._v("接收信号\n"),_("ul",[_("li",[t._v("TERM，INT")]),t._v(" "),_("li",[t._v("QUIT")]),t._v(" "),_("li",[t._v("USR1")]),t._v(" "),_("li",[t._v("WINCH")])])])]),t._v(" "),_("h3",{attrs:{id:"_3-3-nginx命令行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-nginx命令行"}},[t._v("#")]),t._v(" 3.3 nginx命令行")]),t._v(" "),_("ul",[_("li",[t._v("reload：HUP")]),t._v(" "),_("li",[t._v("reopen：USR1")]),t._v(" "),_("li",[t._v("stop：TERM")]),t._v(" "),_("li",[t._v("quit：QUIT")])]),t._v(" "),_("h2",{attrs:{id:"_4-reload-流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-reload-流程"}},[t._v("#")]),t._v(" 4 reload 流程")]),t._v(" "),_("p",[t._v("1）向master进程发送HUP信号（reload命令）")]),t._v(" "),_("p",[t._v("2）master进程校验配置语法是否正确")]),t._v(" "),_("p",[t._v("3）master进行打开新的监听端口")]),t._v(" "),_("p",[t._v("4）master进程用新配置启动新的worker子进程")]),t._v(" "),_("p",[t._v("5）master进程向老worker子进程发送QUIT信号")]),t._v(" "),_("p",[t._v("6）老worker进程关闭监听句柄，处理完当前连接后结束进程")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200310170519124.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"_5-热升级流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-热升级流程"}},[t._v("#")]),t._v(" 5 热升级流程")]),t._v(" "),_("p",[t._v("1）将旧Ningx文件换成新Nginx文件（注意备份）")]),t._v(" "),_("p",[t._v("2）向master进程发送USR2信号")]),t._v(" "),_("p",[t._v("3）master进程修改pid文件名，加后缀.oldbin（进程自动改的，不需要手动改）")]),t._v(" "),_("p",[t._v("4）master进程用新Nginx文件启动新master进程")]),t._v(" "),_("p",[t._v("5）向老master进程发送QUIT信号，关闭老master")]),t._v(" "),_("p",[t._v("6）回滚：向老master发送HUP，向新master发送QUIT")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200310171424958.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"_6-worker进程-优雅的关闭"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-worker进程-优雅的关闭"}},[t._v("#")]),t._v(" 6 worker进程：优雅的关闭")]),t._v(" "),_("p",[t._v("1）设置定时器"),_("code",[t._v("worker_shutdown_timeout")])]),t._v(" "),_("p",[t._v("2）关闭监听句柄")]),t._v(" "),_("p",[t._v("3）关闭空闲连接")]),t._v(" "),_("p",[t._v("4）在循环中等待全部连接关闭")]),t._v(" "),_("p",[t._v("5）退出进程")]),t._v(" "),_("h2",{attrs:{id:"_7-网络相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-网络相关"}},[t._v("#")]),t._v(" 7 网络相关")]),t._v(" "),_("h3",{attrs:{id:"_7-1-网络传输"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-网络传输"}},[t._v("#")]),t._v(" 7.1 网络传输")]),t._v(" "),_("ul",[_("li",[t._v("应用层")]),t._v(" "),_("li",[t._v("传输层")]),t._v(" "),_("li",[t._v("网络层")]),t._v(" "),_("li",[t._v("链路层")]),t._v(" "),_("li",[t._v("物理层")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200310172023302.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_7-2-tcp流与报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-tcp流与报文"}},[t._v("#")]),t._v(" 7.2 TCP流与报文")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200310172138764.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_7-3-tcp协议与非阻塞接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-tcp协议与非阻塞接口"}},[t._v("#")]),t._v(" 7.3 TCP协议与非阻塞接口")]),t._v(" "),_("ul",[_("li",[t._v("读事件\n"),_("ul",[_("li",[t._v("Accept建立连接")]),t._v(" "),_("li",[t._v("Read读消息")])])]),t._v(" "),_("li",[t._v("写事件\n"),_("ul",[_("li",[t._v("Write写信息")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200310172800752.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"_8-nginx事件循环"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-nginx事件循环"}},[t._v("#")]),t._v(" 8 Nginx事件循环")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200310173131875.png",alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200310173315213.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_8-1-epoll"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-epoll"}},[t._v("#")]),t._v(" 8.1 epoll")]),t._v(" "),_("p",[_("strong",[t._v("前提")])]),t._v(" "),_("p",[t._v("高并发连接中，每次处理的活跃连接数量占比很小")]),t._v(" "),_("p",[_("strong",[t._v("实现")])]),t._v(" "),_("p",[t._v("红黑树，链表")]),t._v(" "),_("p",[_("strong",[t._v("使用")])]),t._v(" "),_("p",[t._v("创建，操作（添加/修改/删除），获取句柄，关闭")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200310173757670.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"_9-模块分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-模块分类"}},[t._v("#")]),t._v(" 9 模块分类")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200310174353557.png",alt:""}})])])}),[],!1,null,null,null);a.default=v.exports}}]);