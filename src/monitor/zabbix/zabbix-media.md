---
category: 监控
tags:
  - Zabbix
---

# 3 zabbix添加报警媒介

## zabbix添加报警媒介

进入zabbix-web，点击Administrator-->Media types-->Create Media type

### 添加Email报警

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200115103058976.png)

### 添加钉钉报警

![image-20200115103302741](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200115103302741.png)

图中Script内容如下

```javascript
try {
    Zabbix.Log(4, 'dingding webhook script value='+value)
 
    var result = {
        'tags': {
            'endpoint': 'ding'
        }
    },
    params = JSON.parse(value),
    req = new CurlHttpRequest(),
    fields = {},
    resp;
 
    req.AddHeader('Content-Type: application/json');
 
    fields.msgtype = params.msgtype;
    fields.text = {
      "content":params.content
    };
    resp = req.Post('https://oapi.dingtalk.com/robot/send?access_token=1163d78d7b8a324d2f5b284414da8e93560008689744495ab4ad3eae14bdd642',
        JSON.stringify(fields)
    );
 
    if (req.Status() != 201) {
        throw 'Response code: '+req.Status();
    }
 
    resp = JSON.parse(resp);
    result.tags.issue_id = resp.id;
    result.tags.issue_key = resp.key;
} catch (error) {
    Zabbix.Log(4, 'jira issue creation failed json : '+JSON.stringify({"fields": fields}));
    Zabbix.Log(4, 'jira issue creation failed : '+error);
 
    result = {};
}
 
return JSON.stringify(result);
```

这个webhook添加钉钉报警，多亏了我的对象，香香大人，谢谢她！

>参考官方文档：https://www.zabbix.com/documentation/current/manual/config/notifications/media/webhook

添加完告警媒介，就可以给用户Administrator用户，添加这两个报警媒介了。