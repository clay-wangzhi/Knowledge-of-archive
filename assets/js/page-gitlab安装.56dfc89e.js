(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{601:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"gitlab安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab安装"}},[t._v("#")]),t._v(" gitlab安装")]),t._v(" "),a("h3",{attrs:{id:"安装相关依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装相关依赖"}},[t._v("#")]),t._v(" 安装相关依赖")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" policycoreutils-python openssh-server\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" postfix\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" postfix\nsystemctl start postfix\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"镜像切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像切换"}},[t._v("#")]),t._v(" 镜像切换")]),t._v(" "),a("p",[t._v("切换为国内的清华源")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat gitlab_gitlab-ce.repo ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gitlab_gitlab-ce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("gitlab_gitlab-ce\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("baseurl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("repo_gpgcheck")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("gpgcheck")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("由于不同版本号的备份文件不能相互使用，下载旧gitlab中的对应的版本")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gitlab-ce-11.5.1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"配置使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置使用"}},[t._v("#")]),t._v(" 配置使用")]),t._v(" "),a("p",[t._v("安装完成之后，可以在"),a("code",[t._v("/etc/gitblab/gitlab.rb")]),t._v("中按照需求修改配置，\n主要需要修改"),a("code",[t._v("external_url")]),t._v("，改成自己使用的 url 地址。\n执行命令配置生效：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gitlab-ctl reconfigure\ngitlab-ctl restart\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"gitlab备份-恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab备份-恢复"}},[t._v("#")]),t._v(" gitlab备份&恢复")]),t._v(" "),a("p",[t._v("Gitlab 成功运行起来之后，最终的事情就是定期的备份，遇到问题后的还原。")]),t._v(" "),a("h3",{attrs:{id:"备份配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份配置"}},[t._v("#")]),t._v(" 备份配置")]),t._v(" "),a("p",[t._v("默认 Gitlab 的备份文件会创建在"),a("code",[t._v("/var/opt/gitlab/backups")]),t._v("文件夹中，格式为"),a("code",[t._v("时间戳_日期_版本号_gitlab_backup.tar")]),t._v("，例如："),a("code",[t._v("1515031353_2018_01_04_10.3.2_gitlab_backup.tar")]),t._v("。\n修改备份文件夹，需要修改配置文件"),a("code",[t._v("/etc/gitlab/gitlab.rb")]),t._v("中的：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("gitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'backup_path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/your_wish/backups'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后"),a("code",[t._v("gitlabctl-reconfigure")]),t._v("生效。")]),t._v(" "),a("h3",{attrs:{id:"手动备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动备份"}},[t._v("#")]),t._v(" 手动备份")]),t._v(" "),a("p",[t._v("命令："),a("code",[t._v("gitlab-backup create")])]),t._v(" "),a("p",[t._v("For GitLab 12.1 and earlier, use "),a("code",[t._v("gitlab-rake gitlab:backup:create")]),t._v(".\n会在命令执行的时间点，在你配置的文件夹或者默认文件夹创建一个备份文件。")]),t._v(" "),a("h3",{attrs:{id:"自动备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动备份"}},[t._v("#")]),t._v(" 自动备份")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" * * * /opt/gitlab/bin/gitlab-backup create "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CRON")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" For GitLab 12.1 and earlier, use "),a("code",[t._v("gitlab-rake gitlab:backup:create")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"备份恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份恢复"}},[t._v("#")]),t._v(" 备份恢复")]),t._v(" "),a("p",[t._v("First make sure your backup tar file is in the backup directory described in the "),a("code",[t._v("gitlab.rb")]),t._v(" configuration "),a("code",[t._v("gitlab_rails['backup_path']")]),t._v(". The default is "),a("code",[t._v("/var/opt/gitlab/backups")]),t._v(". It needs to be owned by the "),a("code",[t._v("git")]),t._v(" user.")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cp 11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar /var/opt/gitlab/backups/\nchown git.git /var/opt/gitlab/backups/11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("Stop the processes that are connected to the database. Leave the rest of GitLab running:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("gitlab-ctl stop unicorn\ngitlab-ctl stop sidekiq\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Verify")]),t._v("\ngitlab-ctl status\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("Next, restore the backup, specifying the timestamp of the backup you wish to restore:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This command will overwrite the contents of your GitLab database!")]),t._v("\ngitlab-backup restore "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BACKUP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1493107454_2018_04_25_10.6.4-ce\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" For GitLab 12.1 and earlier, use "),a("code",[t._v("gitlab-rake gitlab:backup:restore")]),t._v(".")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Warning:")]),t._v(" "),a("code",[t._v("gitlab-rake gitlab:backup:restore")]),t._v(" does not set the right file system permissions on your Registry directory. This is a "),a("a",{attrs:{href:"https://gitlab.com/gitlab-org/gitlab-foss/issues/62759",target:"_blank",rel:"noopener noreferrer"}},[t._v("known issue"),a("OutboundLink")],1),t._v(". On GitLab 12.2 or newer, you can use "),a("code",[t._v("gitlab-backup restore")]),t._v(" to avoid this issue.")])]),t._v(" "),a("p",[t._v("Next, restore "),a("code",[t._v("/etc/gitlab/gitlab-secrets.json")]),t._v(" if necessary as mentioned above.")]),t._v(" "),a("p",[t._v("Reconfigure, restart and check GitLab:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("gitlab-ctl reconfigure\ngitlab-ctl restart\ngitlab-rake gitlab:check "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SANITIZE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("If there is a GitLab version mismatch between your backup tar file and the installed version of GitLab, the restore command will abort with an error. Install the "),a("a",{attrs:{href:"https://packages.gitlab.com/gitlab/",target:"_blank",rel:"noopener noreferrer"}},[t._v("correct GitLab version"),a("OutboundLink")],1),t._v(" and try again.")]),t._v(" "),a("h2",{attrs:{id:"gitlab升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab升级"}},[t._v("#")]),t._v(" gitlab升级")]),t._v(" "),a("p",[t._v("It is considered safe to jump between patch versions and minor versions within one major version. For example, it is safe to:")]),t._v(" "),a("ul",[a("li",[t._v("Upgrade the patch version:\n"),a("ul",[a("li",[a("code",[t._v("8.9.0")]),t._v(" -> "),a("code",[t._v("8.9.7")])]),t._v(" "),a("li",[a("code",[t._v("8.9.0")]),t._v(" -> "),a("code",[t._v("8.9.1")])]),t._v(" "),a("li",[a("code",[t._v("8.9.2")]),t._v(" -> "),a("code",[t._v("8.9.6")])]),t._v(" "),a("li",[a("code",[t._v("9.5.5")]),t._v(" -> "),a("code",[t._v("9.5.9")])]),t._v(" "),a("li",[a("code",[t._v("10.6.3")]),t._v(" -> "),a("code",[t._v("10.6.6")])]),t._v(" "),a("li",[a("code",[t._v("11.11.1")]),t._v(" -> "),a("code",[t._v("11.11.8")])]),t._v(" "),a("li",[a("code",[t._v("12.0.4")]),t._v(" -> "),a("code",[t._v("12.0.9")])])])]),t._v(" "),a("li",[t._v("Upgrade the minor version:\n"),a("ul",[a("li",[a("code",[t._v("8.9.4")]),t._v(" -> "),a("code",[t._v("8.12.3")])]),t._v(" "),a("li",[a("code",[t._v("9.2.3")]),t._v(" -> "),a("code",[t._v("9.5.5")])]),t._v(" "),a("li",[a("code",[t._v("10.6.6")]),t._v(" -> "),a("code",[t._v("10.8.7")])]),t._v(" "),a("li",[a("code",[t._v("11.3.4")]),t._v(" -> "),a("code",[t._v("11.11.8")])])])])]),t._v(" "),a("p",[t._v("Upgrading the major version requires more attention. We cannot guarantee that upgrading between major versions will be seamless. As previously mentioned, major versions are reserved for backwards incompatible changes. We recommend that you first upgrade to the latest available minor version within your major version. By doing this, you can address any deprecation messages that could change behavior in the next major release. To ensure background migrations are successful, increment by one minor version during the version jump before installing newer releases.")]),t._v(" "),a("p",[t._v("For example: "),a("code",[t._v("11.11.x")]),t._v(" -> "),a("code",[t._v("12.0.x")]),t._v(" Please see the table below for some examples:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Latest stable version")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Your version")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Recommended upgrade path")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Note")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("9.4.5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8.13.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("8.13.4")]),t._v(" -> "),a("code",[t._v("8.17.7")]),t._v(" -> "),a("code",[t._v("9.4.5")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("8.17.7")]),t._v(" is the last version in version "),a("code",[t._v("8")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("10.1.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8.13.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("8.13.4 -> 8.17.7 -> 9.5.10 -> 10.1.4")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("8.17.7")]),t._v(" is the last version in version "),a("code",[t._v("8")]),t._v(", "),a("code",[t._v("9.5.10")]),t._v(" is the last version in version "),a("code",[t._v("9")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("11.3.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8.13.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("8.13.4")]),t._v(" -> "),a("code",[t._v("8.17.7")]),t._v(" -> "),a("code",[t._v("9.5.10")]),t._v(" -> "),a("code",[t._v("10.8.7")]),t._v(" -> "),a("code",[t._v("11.3.4")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("8.17.7")]),t._v(" is the last version in version "),a("code",[t._v("8")]),t._v(", "),a("code",[t._v("9.5.10")]),t._v(" is the last version in version "),a("code",[t._v("9")]),t._v(", "),a("code",[t._v("10.8.7")]),t._v(" is the last version in version "),a("code",[t._v("10")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("12.5.8")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("11.3.4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("11.3.4")]),t._v(" -> "),a("code",[t._v("11.11.8")]),t._v(" -> "),a("code",[t._v("12.0.9")]),t._v(" -> "),a("code",[t._v("12.5.8")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("11.11.8")]),t._v(" is the last version in version "),a("code",[t._v("11")])])])])]),t._v(" "),a("p",[t._v("我的升级路线为：表格中最后一个")]),t._v(" "),a("p",[t._v("每次升级直接"),a("code",[t._v("yum -y install gitlab-ce-版本号")]),t._v("就可以了")]),t._v(" "),a("p",[t._v("例如")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gitlab-ce-11.11.8\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("每升级一次，重载一下配置，重启一下gitlab")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("gitlab-ctl reconfigure\ngitlab-ctl restart\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"gitlab集成openldap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab集成openldap"}},[t._v("#")]),t._v(" gitlab集成openldap")]),t._v(" "),a("h3",{attrs:{id:"setting-up-ldap-sign-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-ldap-sign-in"}},[t._v("#")]),t._v(" Setting up LDAP sign-in")]),t._v(" "),a("p",[t._v("If you have an LDAP directory service such as Active Directory, you can configure GitLab so that your users can sign in with their LDAP credentials. Add the following to "),a("code",[t._v("/etc/gitlab/gitlab.rb")]),t._v(", edited for your server.")]),t._v(" "),a("p",[t._v("For GitLab Community Edition:")]),t._v(" "),a("p",[t._v("以下是我ldap的配置")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### LDAP Settings")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###! Docs: https://docs.gitlab.com/omnibus/settings/ldap.html")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###! **Be careful not to break the indentation in the ldap_servers block. It is")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###!   in yaml format and the spaces must be retained. Using tabs will not work.**")]),t._v("\n\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ldap_enabled'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prevent_ldap_sign_in'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ldap_servers'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" YAML.load "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<-")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOS\nmain:\n  label: 'LDAP'\n  host: '192.168.x.x'\n  port: 389\n  uid: 'cn'\n  encryption: 'plain'\n  bind_dn: 'cn=admin,dc=xxx,dc=com'\n  password: 'xxx'\n  smartcard_auth: false\n  active_directory: true\n  allow_username_or_email_login: true\n  lowercase_usernames: false\n  base: 'ou=People,dc=xxx,dc=com'\n  user_filter: ''\nEOS")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("gitlab-ctl reconfigure\ngitlab-ctl restart\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("blockquote",[a("p",[t._v("参考文章：")]),t._v(" "),a("p",[t._v("https://www.jianshu.com/p/d29c332bcf53")]),t._v(" "),a("p",[t._v("https://docs.gitlab.com/ee/raketasks/backup_restore.html#restore-for-omnibus-gitlab-installations")]),t._v(" "),a("p",[t._v("https://www.jianshu.com/p/6361cba123a8")]),t._v(" "),a("p",[t._v("https://docs.gitlab.com/ee/policy/maintenance.html#upgrade-recommendations")]),t._v(" "),a("p",[t._v("https://docs.gitlab.com/omnibus/settings/ldap.html")]),t._v(" "),a("p",[t._v("https://www.jianshu.com/p/083cf462fed4")])])])}),[],!1,null,null,null);e.default=n.exports}}]);