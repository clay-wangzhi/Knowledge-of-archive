(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{582:function(t,a,v){"use strict";v.r(a);var _=v(1),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("ip地址组成 : IP地址由4部分数字组成，每部分数字对应于8位二进制数字，各部分之间用小数点分开 这是点分2进制 如果换算为10进制我们称为点分10进制.每个ip地址由两部分组成网络地址(NetID)和主机地址(HostID).网络地址表示其属于互联网中的哪一个网络，而主机地址则表示其属于该网络中的哪一台主机.")]),t._v(" "),v("h2",{attrs:{id:"ip地址的划分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ip地址的划分"}},[t._v("#")]),t._v(" ip地址的划分")]),t._v(" "),v("p",[t._v("ip地址划分为五类 为 A,B,C,D,E")]),t._v(" "),v("p",[t._v("如下图:")]),t._v(" "),v("p",[v("img",{attrs:{src:"images/image-20191029103656828.png",alt:"image-20191029103656828"}})]),t._v(" "),v("h3",{attrs:{id:"a类地址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#a类地址"}},[t._v("#")]),t._v(" A类地址")]),t._v(" "),v("p",[t._v("范围从0-127，0是保留的并且表示所有IP地址，而127也是保留的地址，并且是用于测试环回用的。因此A类地址的范围其实是从1-126之间。")]),t._v(" "),v("p",[t._v("如：10.0.0.1，第一段号码为网络号码，剩下的三段号码为本地计算机的号码。转换为2进制来说，一个A类IP地址由1字节的网络地址和3字节主机地址组成，网络地址的最高位必须是“0”， 地址范围从1.0.0.0.1 到126.255.255.255。可用的A类网络有126个，每个网络能容纳1亿多个主机（2的24次方的-2主机数目）。\n以子网掩码来进行区别：：255.0.0.0\n127.0.0.0到127.255.255.255是保留地址，用做循环测试用的.")]),t._v(" "),v("h3",{attrs:{id:"b类地址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#b类地址"}},[t._v("#")]),t._v(" B类地址")]),t._v(" "),v("p",[t._v("范围从128-191，如172.168.1.1，第一和第二段号码为网络号码，剩下的2段号码为本地计算机的号码。转换为2进制来说，一个B类IP地址由2个字节的网络地址和2个字节的主机地址组成，网络地址的最高位必须是“10”，地址范围从128.0.0.0到191.255.255.255。可用的B类网络有16382个，每个网络能容纳6万多个主机 。(2的16次方-2)\n以子网掩码来进行区别：255.255.0.0\n169.254.0.0到169.254.255.255是保留地址。如果你的IP地址是自动获取IP地址，而你在网络上又没有找到可用的DHCP服务器，这时你将会从169.254.0.0到169.254.255.255中临时获得一个IP地址。")]),t._v(" "),v("h3",{attrs:{id:"c类地址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#c类地址"}},[t._v("#")]),t._v(" C类地址")]),t._v(" "),v("p",[t._v("范围从192-223，如192.168.1.1，第一，第二，第三段号码为网络号码，剩下的最后一段号码为本地计算机的号码。转换为2进制来说，一个C类IP地址由3字节的网络地址和1字节的主机地址组成，网络地址的最高位必须是“110”。范围从192.0.0.0到223.255.255.255。C类网络可达209万余个，每个网络能容纳254个主机。(2的8次方-2)\n以子网掩码来进行区别： 255.255.255.0")]),t._v(" "),v("h3",{attrs:{id:"d类地址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#d类地址"}},[t._v("#")]),t._v(" D类地址")]),t._v(" "),v("p",[t._v("范围从224-239，D类IP地址第一个字节以“1110”开始，它是一个专门保留的地址。它并不指向特定的网络，目前这一类地址被用在多点广播（Multicast）中。多点广播地址用来一次寻址一组计算机，它标识共享同一协议的一组计算机。\n224.0.0.0-239.255.255.255 组播地址")]),t._v(" "),v("h3",{attrs:{id:"e类地址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#e类地址"}},[t._v("#")]),t._v(" E类地址")]),t._v(" "),v("p",[t._v("范围从240-254，以“11110”开始，为将来使用保留。 全零（“0．0．0．0”）地址对应于当前主机。全“1”的IP地址（“255．255．255．255”）是当前子网的广播地址。\n240.0.0.0-255.255.255.254 保留地址")]),t._v(" "),v("h2",{attrs:{id:"子网掩码的作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#子网掩码的作用"}},[t._v("#")]),t._v(" 子网掩码的作用")]),t._v(" "),v("p",[t._v("子网掩码就是为了区分ip地址的中的网络号和主机号的")]),t._v(" "),v("p",[t._v("如")]),t._v(" "),v("p",[t._v("ip地址: 202.197.119.110")]),t._v(" "),v("p",[t._v("若掩码为:255.255.255.0    求网络号和主机号\nip转换为2进制 1100 1010. 1100 0101. 0111 0111. 0110 1110\n子网掩码2进制 1111 1111. 1111 1111. 1111 1111. 0000 0000\n相与运算         1100 1010. 1100 0101. 0111 0111. 0000 0000     网络号")]),t._v(" "),v("p",[t._v("ip转换为2进制 1100 1010. 1100 0101. 0111 0111. 0110 1110\n子网掩码取反   0000 0000. 0000 0000. 0000 0000. 1111 1111\n相与运算         0000 0000. 0000 0000. 0000 0000. 0110 1110   主机号")]),t._v(" "),v("p",[t._v("ip 202.197.118.110  是否与上一个ip再统一网段?  求网络号 相同则同一网段\nip转换为2进制  1100 101. 1100 0101. 0111 0110. 0110 1110\n求得网络号 1100 1010.1100 0101.0111 0110. 0000 0000")]),t._v(" "),v("p",[t._v("求得结果 网络号不同 所以不再同一网络中")]),t._v(" "),v("p",[t._v("再如 ，还是上边ip")]),t._v(" "),v("p",[t._v("ip地址: 202.197.119.110")]),t._v(" "),v("p",[t._v("若掩码为:255.255.128.0    求网络号和主机号\nip转换为2进制 1100 1010. 1100 0101. 0111 0111. 0110 1110\n子网掩码2进制 1111 1111. 1111 1111. 1000 0000. 0000 0000\n相与运算         1100 1010. 1100 0101. 0000 0000. 0000 0000     网络号\n主机号\t     0000 0000. 0000 0000. 0111 0111. 0110 1110     主机号")]),t._v(" "),v("p",[t._v("ip 202.197.118.110  是否与上一个ip再统一网段?\nip转换为2进制  1100 101. 1100 0101. 0111 0110. 0110 1110\n求得网络号       1100 1010.1100 0101.0000 0000. 0000 0000\n同上一个ip在同一个网络中")]),t._v(" "),v("p",[t._v("所以判断两个ip是否在同一网络要看子网掩码的设置")]),t._v(" "),v("h2",{attrs:{id:"私有地址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#私有地址"}},[t._v("#")]),t._v(" 私有地址")]),t._v(" "),v("p",[t._v("所谓的私有地址就是在互联网上不使用，而被用在局域网络中的地址\n在A类地址中，10.0.0.0到10.255.255.255是私有地址\n在B类地址中，172.16.0.0到172.31.255.255是私有地址。\n在C类地址中，192.168.0.0到192.168.255.255是私有地址。")])])}),[],!1,null,null,null);a.default=s.exports}}]);