(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{818:function(s,a,e){"use strict";e.r(a);var t=e(1),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Linux系统中的 iostat是I/O statistics（输入/输出统计）的缩写，iostat工具将对系统的磁盘操作活动进行监视。它的特点是汇报磁盘活动统计情况，同时也会汇报出CPU使用情况。同vmstat一样，iostat也有一个弱点，就是它不能对某个进程进行深入分析，仅对系统的整体情况进行分析。iostat属于sysstat软件包。可以用yum install sysstat 直接安装。")]),s._v(" "),e("h2",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),e("p",[e("code",[s._v("iostat(选项)(参数)")])]),s._v(" "),e("h2",{attrs:{id:"选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("-c：仅显示CPU使用情况；\n-d：仅显示设备利用率；\n-k：显示状态以千字节每秒为单位，而不使用块每秒；\n-m：显示状态以兆字节每秒为单位；\n-p：仅显示块设备和所有被使用的其他分区的状态；\n-t：显示每个报告产生时的时间；\n-V：显示版号并退出；\n-x：显示扩展状态。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("间隔时间：每次报告的间隔时间（秒）；")])]),s._v(" "),e("li",[e("p",[s._v("次数：显示报告的次数。")])])]),s._v(" "),e("h2",{attrs:{id:"常用实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用实例"}},[s._v("#")]),s._v(" 常用实例")]),s._v(" "),e("p",[s._v("1）显示所有设备负载情况")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# iostat \nLinux 2.6.32-696.10.2.el6.x86_64 (dzh-hw-bj3219)        04/04/2018      _x86_64_        (8 CPU)\n\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n           0.81    0.03    0.16    0.04    0.07   98.90\n\nDevice:            tps   Blk_read/s   Blk_wrtn/s   Blk_read   Blk_wrtn\nxvda              0.38         0.10         5.71     729274   43157304\nxvdb             30.95         7.62       686.84   57636578 5194927160\ndm-0             85.98         7.62       686.84   57635962 5194927160\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("说明：")]),s._v(" "),e("p",[s._v("cpu属性值说明：")]),s._v(" "),e("p",[s._v("%user：CPU处在用户模式下的时间百分比。")]),s._v(" "),e("p",[s._v("%nice：CPU处在带NICE值的用户模式下的时间百分比。")]),s._v(" "),e("p",[s._v("%system：CPU处在系统模式下的时间百分比。")]),s._v(" "),e("p",[s._v("%iowait：CPU等待输入输出完成时间的百分比。")]),s._v(" "),e("p",[s._v("%steal：管理程序维护另一个虚拟处理器时，虚拟CPU的无意识等待时间百分比。")]),s._v(" "),e("p",[s._v("%idle：CPU空闲时间百分比。")]),s._v(" "),e("p",[s._v("备注：如果%iowait的值过高，表示硬盘存在I/O瓶颈，%idle值高，表示CPU较空闲，如果%idle值高但系统响应慢时，有可能是CPU等待分配内存，此时应加大内存容量。%idle值如果持续低于10，那么系统的CPU处理能力相对较低，表明系统中最需要解决的资源是CPU。")]),s._v(" "),e("p",[s._v("2）定时显示所有信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("iostat 2 3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("说明：")]),s._v(" "),e("p",[s._v("每隔 2秒刷新显示，且显示3次")]),s._v(" "),e("p",[s._v("3）显示指定磁盘信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# iostat -d xvda\nLinux 2.6.32-696.10.2.el6.x86_64 (dzh-hw-bj3219)        04/04/2018      _x86_64_        (8 CPU)\n\nDevice:            tps   Blk_read/s   Blk_wrtn/s   Blk_read   Blk_wrtn\nxvda              0.38         0.10         5.71     729290   43160264\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("4）显示tty和cpu信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# iostat -t\nLinux 2.6.32-696.10.2.el6.x86_64 (dzh-hw-bj3219)        04/04/2018      _x86_64_        (8 CPU)\n\n04/04/2018 02:25:52 PM\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n           0.81    0.03    0.16    0.04    0.07   98.90\n\nDevice:            tps   Blk_read/s   Blk_wrtn/s   Blk_read   Blk_wrtn\nxvda              0.38         0.10         5.71     729290   43160960\nxvdb             30.95         7.62       686.87   57637978 5195407104\ndm-0             85.99         7.62       686.87   57637362 5195407104\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("5）以m为单位显示所有信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# iostat -m\nLinux 2.6.32-696.10.2.el6.x86_64 (dzh-hw-bj3219)        04/04/2018      _x86_64_        (8 CPU)\n\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n           0.81    0.03    0.16    0.04    0.07   98.90\n\nDevice:            tps    MB_read/s    MB_wrtn/s    MB_read    MB_wrtn\nxvda              0.38         0.00         0.00        356      21075\nxvdb             30.95         0.00         0.34      28143    2536858\ndm-0             85.99         0.00         0.34      28143    2536858\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("6）查看TPS和吞吐量信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# iostat -d -k 1 1 \nLinux 2.6.32-696.10.2.el6.x86_64 (dzh-hw-bj3219)        04/04/2018      _x86_64_        (8 CPU)\n\nDevice:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn\nxvda              0.38         0.05         2.85     364653   21581388\nxvdb             30.95         3.81       343.44   28819121 2597806052\ndm-0             85.99         3.81       343.44   28818813 2597806052\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("说明：")]),s._v(" "),e("p",[s._v("tps：该设备每秒的传输次数（Indicate the number of transfers per second that were issued to the device.）。“一次传输”意思是“一次I/O请求”。多个逻辑请求可能会被合并为“一次I/O请求”。“一次传输”请求的大小是未知的。")]),s._v(" "),e("p",[s._v("kB_read/s：每秒从设备（drive expressed）读取的数据量；")]),s._v(" "),e("p",[s._v("kB_wrtn/s：每秒向设备（drive expressed）写入的数据量；")]),s._v(" "),e("p",[s._v("kB_read：读取的总数据量；kB_wrtn：写入的总数量数据量；")]),s._v(" "),e("p",[s._v("这些单位都为Kilobytes。")]),s._v(" "),e("p",[s._v("7）查看设备使用率（%util）、响应时间（await）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# iostat -d -x -k 1 1 \nLinux 2.6.32-696.10.2.el6.x86_64 (dzh-hw-bj3219)        04/04/2018      _x86_64_        (8 CPU)\n\nDevice:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util\nxvda              0.00     0.33    0.00    0.38     0.05     2.85    15.16     0.00    3.11    1.94    3.12   1.06   0.04\nxvdb              0.00    55.03    0.13   30.83     3.81   343.45    22.44     0.33   10.74    3.87   10.76   0.12   0.37\ndm-0              0.00     0.00    0.13   85.86     3.81   343.45     8.08     0.33    3.89    3.88    3.89   0.04   0.37\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("说明：")]),s._v(" "),e("p",[s._v("rrqm/s：  每秒进行 merge 的读操作数目.即 delta(rmerge)/s")]),s._v(" "),e("p",[s._v("wrqm/s： 每秒进行 merge 的写操作数目.即 delta(wmerge)/s")]),s._v(" "),e("p",[s._v("r/s：  每秒完成的读 I/O 设备次数.即 delta(rio)/s")]),s._v(" "),e("p",[s._v("w/s：  每秒完成的写 I/O 设备次数.即 delta(wio)/s")]),s._v(" "),e("p",[s._v("rsec/s：  每秒读扇区数.即 delta(rsect)/s")]),s._v(" "),e("p",[s._v("wsec/s： 每秒写扇区数.即 delta(wsect)/s")]),s._v(" "),e("p",[s._v("rkB/s：  每秒读K字节数.是 rsect/s 的一半,因为每扇区大小为512字节.(需要计算)")]),s._v(" "),e("p",[s._v("wkB/s：  每秒写K字节数.是 wsect/s 的一半.(需要计算)")]),s._v(" "),e("p",[s._v("avgrq-sz：平均每次设备I/O操作的数据大小 (扇区).delta(rsect+wsect)/delta(rio+wio)")]),s._v(" "),e("p",[s._v("avgqu-sz：平均I/O队列长度.即 delta(aveq)/s/1000 (因为aveq的单位为毫秒).")]),s._v(" "),e("p",[s._v("await：  平均每次设备I/O操作的等待时间 (毫秒).即 delta(ruse+wuse)/delta(rio+wio)")]),s._v(" "),e("p",[s._v("svctm： 平均每次设备I/O操作的服务时间 (毫秒).即 delta(use)/delta(rio+wio)")]),s._v(" "),e("p",[s._v("%util： 一秒中有百分之多少的时间用于 I/O 操作,或者说一秒中有多少时间 I/O 队列是非空的，即 delta(use)/s/1000 (因为use的单位为毫秒)")]),s._v(" "),e("p",[s._v("如果 %util 接近 100%，说明产生的I/O请求太多，I/O系统已经满负荷，该磁盘可能存在瓶颈。")]),s._v(" "),e("p",[s._v("idle小于70% IO压力就较大了，一般读取速度有较多的wait。")]),s._v(" "),e("p",[s._v("同时可以结合vmstat 查看查看b参数(等待资源的进程数)和wa参数(IO等待所占用的CPU时间的百分比，高过30%时IO压力高)。")]),s._v(" "),e("p",[s._v("另外 await 的参数也要多和 svctm 来参考。差的过高就一定有 IO 的问题。")]),s._v(" "),e("p",[s._v("avgqu-sz 也是个做 IO 调优时需要注意的地方，这个就是直接每次操作的数据的大小，如果次数多，但数据拿的小的话，其实 IO 也会很小。如果数据拿的大，才IO 的数据会高。也可以通过 avgqu-sz × ( r/s or w/s ) = rsec/s or wsec/s。也就是讲，读定速度是这个来决定的。")]),s._v(" "),e("p",[s._v("svctm 一般要小于 await (因为同时等待的请求的等待时间被重复计算了)，svctm 的大小一般和磁盘性能有关，CPU/内存的负荷也会对其有影响，请求过多也会间接导致 svctm 的增加。await 的大小一般取决于服务时间(svctm) 以及 I/O 队列的长度和 I/O 请求的发出模式。如果 svctm 比较接近 await，说明 I/O 几乎没有等待时间；如果 await 远大于 svctm，说明 I/O 队列太长，应用得到的响应时间变慢，如果响应时间超过了用户可以容许的范围，这时可以考虑更换更快的磁盘，调整内核 elevator 算法，优化应用，或者升级 CPU。")]),s._v(" "),e("p",[s._v("队列长度(avgqu-sz)也可作为衡量系统 I/O 负荷的指标，但由于 avgqu-sz 是按照单位时间的平均值，所以不能反映瞬间的 I/O 洪水。")]),s._v(" "),e("p",[s._v("​       形象的比喻：\n​       r/s+w/s 类似于交款人的总数\n​      平均队列长度(avgqu-sz)类似于单位时间里平均排队人的个数\n​      平均服务时间(svctm)类似于收银员的收款速度\n​      平均等待时间(await)类似于平均每人的等待时间\n​      平均I/O数据(avgrq-sz)类似于平均每人所买的东西多少\n​       I/O 操作率 (%util)类似于收款台前有人排队的时间比例\n​       设备IO操作:总IO(io)/s = r/s(读) +w/s(写) =1.46 + 25.28=26.74\n​      平均每次设备I/O操作只需要0.36毫秒完成,现在却需要10.57毫秒完成，因为发出的\t请求太多(每秒26.74个)，假如请求时同时发出的，可以这样计算平均等待时间:\n​      平均等待时间=单个I/O服务器时间*(1+2+...+请求总数-1)/请求总数\n​       每秒发出的I/0请求很多,但是平均队列就4,表示这些请求比较均匀,大部分处理还是比较及时。")]),s._v(" "),e("p",[s._v("8）查看cpu状态")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# iostat -c 1 3\nLinux 2.6.32-696.10.2.el6.x86_64 (dzh-hw-bj3219)        04/04/2018      _x86_64_        (8 CPU)\n\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n           0.81    0.03    0.16    0.04    0.07   98.90\n\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n           2.29    0.13    0.38    0.00    0.13   97.07\n\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n           4.32    0.00    0.51    0.13    0.00   95.04\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("参考链接：")]),s._v(" "),e("p",[s._v("http://www.cnblogs.com/peida/archive/2012/12/28/2837345.html")]),s._v(" "),e("p",[s._v("http://man.linuxde.net/iostat")])])}),[],!1,null,null,null);a.default=n.exports}}]);