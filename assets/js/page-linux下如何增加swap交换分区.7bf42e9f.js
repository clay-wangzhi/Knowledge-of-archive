(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{597:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"linux下如何增加swap交换分区"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux下如何增加swap交换分区"}},[s._v("#")]),s._v(" linux下如何增加swap交换分区")]),s._v(" "),n("p",[s._v("swap即交换分区，类似于"),n("a",{attrs:{href:"http://www.ttlsa.com/windows/",target:"_blank",rel:"noopener noreferrer"}},[s._v("windows"),n("OutboundLink")],1),s._v("虚拟内存功能，就是在硬盘上分配出一块空间作为虚拟内存来使用.")]),s._v(" "),n("p",[s._v("通常swap都是在装系统硬盘分区时设定，这里只是探讨一下系统已经安装好后，扩展swap分区的方法.下面我们来将下如何在安装好的"),n("a",{attrs:{href:"http://www.ttlsa.com/linux/",target:"_blank",rel:"noopener noreferrer"}},[s._v("linux"),n("OutboundLink")],1),s._v("下增加swap交换分区.")]),s._v(" "),n("p",[s._v("可以有两种方法来增加swap分区，一种是将新的分区来作为swap，另一种是在磁盘中创建一个大的文件来作swap.")]),s._v(" "),n("h2",{attrs:{id:"新分区扩展swap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新分区扩展swap"}},[s._v("#")]),s._v(" 新分区扩展swap")]),s._v(" "),n("p",[s._v("假如有一个新的分区/dev/sda3,我们用它来作swap.")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# swapon -s                --查看当前swap情况\n# mkswap /dev/sda3\n# swapon /dev/sda3\n# swapon -s\n# vi /etc/fstab\n/dev/sda3   swap   swap  defaults  0  0    --添加开机自动挂载\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"大文件扩展swap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#大文件扩展swap"}},[s._v("#")]),s._v(" 大文件扩展swap")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# cd /var\n# dd if=/dev/zero of=file bs=1M count=1000       --生成1G的大文件\n# mkswap file\n# swapon file\n# swapon -s\n# vi /etc/fstab\n/var/file   swap   swap   defaults  0   0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);