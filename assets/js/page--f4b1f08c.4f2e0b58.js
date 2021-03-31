(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{688:function(a,e,s){"use strict";s.r(e);var t=s(1),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[s("strong",[a._v("crontab命令")]),a._v("被用来提交和管理用户的需要周期性执行的任务，与windows下的计划任务类似，当安装完成操作系统后，默认会安装此服务工具，并且会自动启动crond进程，crond进程每分钟会定期检查是否有要执行的任务，如果有要执行的任务，则自动执行该任务。")]),a._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("crontab(选项)(参数)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[a._v("#")]),a._v(" 选项")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-e：编辑该用户的计时器设置;-l：列出该用户的计时器设置;-r：删除该用户的计时器设置;-u<用户名称>：指定要设定计时器的用户名称;-i：在删除用户的crontab文件时给确认提示。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("p",[a._v("crontab文件：指定包含待执行任务的crontab文件。")]),a._v(" "),s("h2",{attrs:{id:"知识扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识扩展"}},[a._v("#")]),a._v(" 知识扩展")]),a._v(" "),s("p",[a._v("Linux下的任务调度分为两类：系统任务调度和用户任务调度")]),a._v(" "),s("p",[a._v("系统任务调度：系统周期性所要执行的工作，比如写缓存数据到硬盘、日志清理等。在"),s("code",[a._v("/etc")]),a._v("目录下有一个crontab文件，这个就是系统任务调度的配置文件。")]),a._v(" "),s("p",[s("code",[a._v("/etc/crontab")]),a._v("文件包括下面几行：")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('SHELL=/bin/bashPATH=/sbin:/bin:/usr/sbin:/usr/binMAILTO=""HOME=/# run-parts51 * * * * root run-parts /etc/cron.hourly24 7 * * * root run-parts /etc/cron.daily22 4 * * 0 root run-parts /etc/cron.weekly42 4 1 * * root run-parts /etc/cron.monthly\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("前四行是用来配置crond任务运行的环境变量，第一行SHELL变量指定了系统要使用哪个shell，这里是bash，第二行PATH变量指定了系统执行命令的路径，第三行MAILTO变量指定了crond的任务执行信息将通过电子邮件发送给root用户，如果MAILTO变量的值为空，则表示不发送任务执行信息给用户，第四行的HOME变量指定了在执行命令或者脚本时使用的主目录。")]),a._v(" "),s("p",[a._v("**用户任务调度：**用户定期要执行的工作，比如用户数据备份、定时邮件提醒等。用户可以使用 crontab 工具来定制自己的计划任务。所有用户定义的crontab文件都被保存在"),s("code",[a._v("/var/spool/cron")]),a._v("目录中。其文件名与用户名一致，使用者权限文件如下：")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/etc/cron.deny     该文件中所列用户不允许使用crontab命令/etc/cron.allow    该文件中所列用户允许使用crontab命令/var/spool/cron/   所有用户crontab文件存放的目录,以用户名命名\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("crontab文件的含义：用户所建立的crontab文件中，每一行都代表一项任务，每行的每个字段代表一项设置，它的格式共分为六个字段，前五段是时间设定段，第六段是要执行的命令段，格式如下：")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("minute   hour   day   month   week   command     顺序：分 时 日 月 周\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("minute： 表示分钟，可以是从0到59之间的任何整数。")]),a._v(" "),s("p",[a._v("hour：表示小时，可以是从0到23之间的任何整数。")]),a._v(" "),s("p",[a._v("day：表示日期，可以是从1到31之间的任何整数。")]),a._v(" "),s("p",[a._v("month：表示月份，可以是从1到12之间的任何整数。")]),a._v(" "),s("p",[a._v("week：表示星期几，可以是从0到7之间的任何整数，这里的0或7代表星期日。")]),a._v(" "),s("p",[a._v("command：要执行的命令，可以是系统命令，也可以是自己编写的脚本文件。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/crontab1.png",alt:"img"}})]),a._v(" "),s("p",[a._v("在以上各个字段中，还可以使用以下特殊字符：")]),a._v(" "),s("p",[a._v("星号（*）：代表所有可能的值，例如month字段如果是星号，则表示在满足其它字段的制约条件后每月都执行该命令操作。")]),a._v(" "),s("p",[a._v("逗号（,）：可以用逗号隔开的值指定一个列表范围，例如，“1,2,5,7,8,9”")]),a._v(" "),s("p",[a._v("中杠（-）：可以用整数之间的中杠表示一个整数范围，例如“2-6”表示“2,3,4,5,6”")]),a._v(" "),s("p",[a._v("正斜线（/）：可以用正斜线指定时间的间隔频率，例如“0-23/2”表示每两小时执行一次。同时正斜线可以和星号一起使用，例如*/10，如果用在minute字段，表示每十分钟执行一次。")]),a._v(" "),s("p",[a._v("查看crontab服务状态：")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("service crond status\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("手动启动crontab服务：")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("service crond start\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("查看crontab服务是否已设置为开机启动，执行命令：")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ntsysv\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("加入开机自动启动：")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chkconfig –level 35 crond on\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"常用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用方法"}},[a._v("#")]),a._v(" 常用方法")]),a._v(" "),s("p",[a._v("1). 创建一个新的crontab文件")]),a._v(" "),s("p",[a._v("在考虑向cron进程提交一个crontab文件之前，首先要做的一件事情就是设置环境变量EDITOR。cron进程根据它来确定使用哪个编辑器编辑crontab文件。9 9 %的UNIX和LINUX用户都使用vi，如果你也是这样，那么你就编辑$ HOME目录下的. profile文件，在其中加入这样一行：")]),a._v(" "),s("p",[a._v("EDITOR=vi; export EDITOR")]),a._v(" "),s("p",[a._v("然后保存并退出。不妨创建一个名为\\ cron的文件，其中\\是用户名，例如， davecron。在该文件中加入如下的内容。")]),a._v(" "),s("p",[a._v("# (put your own initials here)echo the date to the console every")]),a._v(" "),s("p",[a._v("# 15minutes between 6pm and 6am")]),a._v(" "),s("p",[a._v("0,15,30,45 18-06 * /bin/echo ‘date’ > /dev/console")]),a._v(" "),s("p",[a._v("保存并退出。确信前面5个域用空格分隔。")]),a._v(" "),s("p",[a._v("在上面的例子中，系统将每隔1 5分钟向控制台输出一次当前时间。如果系统崩溃或挂起，从最后所显示的时间就可以一眼看出系统是什么时间停止工作的。在有些系统中，用tty1来表示控制台，可以根据实际情况对上面的例子进行相应的修改。为了提交你刚刚创建的crontab文件，可以把这个新创建的文件作为cron命令的参数：")]),a._v(" "),s("p",[a._v("$ crontab davecron")]),a._v(" "),s("p",[a._v("现在该文件已经提交给cron进程，它将每隔1 5分钟运行一次。")]),a._v(" "),s("p",[a._v("同时，新创建文件的一个副本已经被放在/var/spool/cron目录中，文件名就是用户名(即dave)。")]),a._v(" "),s("p",[a._v("2). 列出crontab文件")]),a._v(" "),s("p",[a._v("为了列出crontab文件，可以用：")]),a._v(" "),s("p",[a._v("$ crontab -l")]),a._v(" "),s("p",[a._v("0,15,30,45,18-06 * /bin/echo "),s("code",[a._v("date")]),a._v(" > dev/tty1")]),a._v(" "),s("p",[a._v("你将会看到和上面类似的内容。可以使用这种方法在$ H O M E目录中对crontab文件做一备份：")]),a._v(" "),s("p",[a._v("$ crontab -l > $HOME/mycron")]),a._v(" "),s("p",[a._v("这样，一旦不小心误删了crontab文件，可以用上一节所讲述的方法迅速恢复。")]),a._v(" "),s("p",[a._v("3). 编辑crontab文件")]),a._v(" "),s("p",[a._v("如果希望添加、删除或编辑crontab文件中的条目，而E D I TO R环境变量又设置为v i，那么就可以用v i来编辑crontab文件，相应的命令为：")]),a._v(" "),s("p",[a._v("$ crontab -e")]),a._v(" "),s("p",[a._v("可以像使用v i编辑其他任何文件那样修改crontab文件并退出。如果修改了某些条目或添加了新的条目，那么在保存该文件时， c r o n会对其进行必要的完整性检查。如果其中的某个域出现了超出允许范围的值，它会提示你。")]),a._v(" "),s("p",[a._v("我们在编辑crontab文件时，没准会加入新的条目。例如，加入下面的一条：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# DT:delete core files,at 3.30am on 1,7,14,21,26,26 days of each month\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("30 3 1,7,14,21,26 /bin/find -name “core’ -exec rm {} ;")]),a._v(" "),s("p",[a._v("现在保存并退出。最好在crontab文件的每一个条目之上加入一条注释，这样就可以知道它的功能、运行时间，更为重要的是，知道这是哪位用户的作业。")]),a._v(" "),s("p",[a._v("现在让我们使用前面讲过的crontab -l命令列出它的全部信息：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" $ crontab -l \n\n # (crondave installed on Tue May 4 13:07:43 1999)\n\n # DT:ech the date to the console every 30 minites\n\n0,15,30,45 18-06 * * * /bin/echo `date` > /dev/tty1\n\n # DT:delete core files,at 3.30am on 1,7,14,21,26,26 days of each month\n\n 30 3 1,7,14,21,26 * * /bin/find -name \"core' -exec rm {} \\;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[a._v("4). 删除crontab文件")]),a._v(" "),s("p",[a._v("要删除crontab文件，可以用：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ crontab -r\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("5). 恢复丢失的crontab文件")]),a._v(" "),s("p",[a._v("如果不小心误删了crontab文件，假设你在自己的$ H O M E目录下还有一个备份，那么可以将其拷贝到/var/spool/cron/\\，其中\\是用户名。如果由于权限问题无法完成拷贝，可以用：")]),a._v(" "),s("p",[a._v("$ crontab \\")]),a._v(" "),s("p",[a._v("其中，\\是你在$ H O M E目录中副本的文件名。")]),a._v(" "),s("p",[a._v("我建议你在自己的$ H O M E目录中保存一个该文件的副本。我就有过类似的经历，有数次误删了crontab文件（因为r键紧挨在e键的右边）。这就是为什么有些系统文档建议不要直接编辑crontab文件，而是编辑该文件的一个副本，然后重新提交新的文件。")]),a._v(" "),s("p",[a._v("有些crontab的变体有些怪异，所以在使用crontab命令时要格外小心。如果遗漏了任何选项，crontab可能会打开一个空文件，或者看起来像是个空文件。这时敲delete键退出，不要按，否则你将丢失crontab文件。")]),a._v(" "),s("h2",{attrs:{id:"常用实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用实例"}},[a._v("#")]),a._v(" 常用实例")]),a._v(" "),s("p",[a._v("1）每1分钟执行一次command")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("* * * * * command\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("2）每小时的第3和第15分钟执行")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("3,15 * * * * command\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("3）在上午8点到11点的第3和第15分钟执行")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("3,15 8-11 * * * command\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("4）每隔两天的上午8点到11点的第3和第15分钟执行")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("3,15 8-11 */2 * * command\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("5）每个星期一的上午8点到11点的第3和第15分钟执行")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("3,15 8-11 * * 1 command\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("6）每晚的21:30重启smb")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("30 21 * * * /etc/init.d/smb restart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("7）每月1、10、22日的4 : 45重启smb")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("45 4 1,10,22 * * /etc/init.d/smb restart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("8）每周六、周日的1 : 10重启smb")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("10 1 * * 6,0 /etc/init.d/smb restart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("9）每天18 : 00至23 : 00之间每隔30分钟重启smb")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("0,30 18-23 * * * /etc/init.d/smb restart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("10）每星期六的晚上11 : 00 pm重启smb")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("0 23 * * 6 /etc/init.d/smb restart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("11）每一小时重启smb")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("0 */1 * * * /etc/init.d/smb restart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("12）晚上11点到早上7点之间，每隔一小时重启smb")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("0 23-7/1 * * * /etc/init.d/smb restart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("13）每月的4号与每周一到周三的11点重启smb")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("0 11 4 * mon-wed /etc/init.d/smb restart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("14）一月一号的4点重启smb")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("0 4 1 jan * /etc/init.d/smb restart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("15）每小时执行/etc/cron.hourly目录内的脚本")]),a._v(" "),s("p",[a._v("复制")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("01   *   *   *   *     root run-parts /etc/cron.hourly\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("说明：")]),a._v(" "),s("p",[a._v("run-parts这个参数了，如果去掉这个参数的话，后面就可以写要运行的某个脚本名，而不是目录名了")]),a._v(" "),s("h2",{attrs:{id:"使用注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用注意事项"}},[a._v("#")]),a._v(" 使用注意事项")]),a._v(" "),s("p",[a._v("有时我们创建了一个crontab，但是这个任务却无法自动执行，而手动执行这个任务却没有问题，这种情况一般是由于在crontab文件中没有配置环境变量引起的。")]),a._v(" "),s("p",[a._v("在crontab文件中定义多个调度任务时，需要特别注意的一个问题就是环境变量的设置，因为我们手动执行某个任务时，是在当前shell环境下进行的，程序当然能找到环境变量，而系统自动执行任务调度时，是不会加载任何环境变量的，因此，就需要在crontab文件中指定任务运行所需的所有环境变量，这样，系统执行任务调度时就没有问题了。")]),a._v(" "),s("p",[a._v("不要假定cron知道所需要的特殊环境，它其实并不知道。所以你要保证在shelll脚本中提供所有必要的路径和环境变量，除了一些自动设置的全局变量。所以注意如下3点：")]),a._v(" "),s("p",[a._v("1）脚本中涉及文件路径时写全局路径；")]),a._v(" "),s("p",[a._v("2）脚本执行要用到java或其他环境变量时，通过source命令引入环境变量，如：")]),a._v(" "),s("p",[a._v("cat start_cbp.sh")]),a._v(" "),s("p",[a._v("#!/bin/sh")]),a._v(" "),s("p",[a._v("source /etc/profile")]),a._v(" "),s("p",[a._v("export RUN_CONF=/home/d139/conf/platform/cbp/cbp_jboss.conf")]),a._v(" "),s("p",[a._v("/usr/local/jboss-4.0.5/bin/run.sh -c mev &")]),a._v(" "),s("p",[a._v("3）当手动执行脚本OK，但是crontab死活不执行时。这时必须大胆怀疑是环境变量惹的祸，并可以尝试在crontab中直接引入环境变量解决问题。如：")]),a._v(" "),s("p",[a._v("0 . /etc/profile;/bin/sh /var/www/java/audit_no_count/bin/restart_audit.sh")]),a._v(" "),s("ol",[s("li",[a._v("注意清理系统用户的邮件日志")])]),a._v(" "),s("p",[a._v("每条任务调度执行完毕，系统都会将任务输出信息通过电子邮件的形式发送给当前系统用户，这样日积月累，日志信息会非常大，可能会影响系统的正常运行，因此，将每条任务进行重定向处理非常重要。")]),a._v(" "),s("p",[a._v("例如，可以在crontab文件中设置如下形式，忽略日志输出：")]),a._v(" "),s("p",[a._v("0 "),s("em",[a._v("/3")]),a._v(" /usr/local/apache2/apachectl restart >/dev/null 2>&1")]),a._v(" "),s("p",[a._v("“/dev/null 2>&1”表示先将标准输出重定向到/dev/null，然后将标准错误重定向到标准输出，由于标准输出已经重定向到了/dev/null，因此标准错误也会重定向到/dev/null，这样日志输出问题就解决了。")]),a._v(" "),s("p",[a._v(". 系统级任务调度与用户级任务调度")]),a._v(" "),s("p",[a._v("系统级任务调度主要完成系统的一些维护操作，用户级任务调度主要完成用户自定义的一些任务，可以将用户级任务调度放到系统级任务调度来完成（不建议这么做），但是反过来却不行，root用户的任务调度操作可以通过“crontab –uroot –e”来设置，也可以将调度任务直接写入/etc/crontab文件，需要注意的是，如果要定义一个定时重启系统的任务，就必须将任务放到/etc/crontab文件，即使在root用户下创建一个定时重启系统的任务也是无效的。")]),a._v(" "),s("ol",[s("li",[a._v("其他注意事项")])]),a._v(" "),s("p",[a._v("新创建的cron job，不会马上执行，至少要过2分钟才执行。如果重启cron则马上执行。")]),a._v(" "),s("p",[a._v("当crontab突然失效时，可以尝试/etc/init.d/crond restart解决问题。或者查看日志看某个job有没有执行/报错tail -f /var/log/cron。")]),a._v(" "),s("p",[a._v("千万别乱运行crontab -r。它从Crontab目录（/var/spool/cron）中删除用户的Crontab文件。删除了该用户的所有crontab都没了。")]),a._v(" "),s("p",[a._v("在crontab中%是有特殊含义的，表示换行的意思。如果要用的话必须进行转义%，如经常用的date ‘+%Y%m%d’在crontab里是不会执行的，应该换成date ‘+%Y%m%d’。")]),a._v(" "),s("p",[a._v("参考链接：")]),a._v(" "),s("p",[a._v("http://www.cnblogs.com/peida/archive/2013/01/08/2850483.html")]),a._v(" "),s("p",[a._v("http://man.linuxde.net/crontab")])])}),[],!1,null,null,null);e.default=n.exports}}]);