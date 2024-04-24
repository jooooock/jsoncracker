<div align="center">

<h1 align="center">jsoncracker</h1>

[English](./README.md) / 简体中文

免费使用 [JSON CRACK](https://pro.jsoncrack.com/) 的 Pro 编辑器
</div>


## 安装
从 [Release 页面](https://github.com/jooooock/jsoncracker/releases)下载最新版本的 jsoncracker.zip 并解压，然后按照[该教程](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)进行安装。


## 使用
安装完之后启用该插件，然后直接访问 https://pro.jsoncrack.com/editor 即可。


## 定制账号
如果想要修改页面显示的账号，可修改解压目录下面的`overrides/refresh_token.json`文件，具体如下所示：
```json
{
  "access_token": "...",
  "refresh_token": "a fake refresh token",
  "expires_at": 0,
  "expires_in": "never",
  "user": {
    "user_metadata": {
      "name": "用户名",
      "avatar_url": "头像地址"
    },
    "email": "邮箱"
  },
  "__from__": "jsoncracker"
}

```

## 关于插件权限的说明

插件需要在页面加载之前，向 LocalStorage 中写入一个临时的 token，因此需要`host_permissions`中包含`https://pro.jsoncrack.com/*`, 同时在`content_scripts`中指定一个脚本去做这件事。

然后需要拦截刷新token接口，也就是下面这个地址：
```
https://bxkgqurwqjmvrqekcbws.supabase.co/auth/v1/token?grant_type=refresh_token
```
重定向到一个固定的可用token(内置在插件目录下面的overrides/refresh_token.json)

这里使用了静态规则重定向，也就是`permissions`中使用`declarativeNetRequestWithHostAccess`，配合`host_permissions`中的`https://bxkgqurwqjmvrqekcbws.supabase.co/*`

> 这里使用`declarativeNetRequestWithHostAccess`而不是`declarativeNetRequest`的原因是，在已经声明了 host_permissions 的情况下，安装时前者会比后者少一个警告。

## 关于token的生成

通过分析代码知道，token生成算法如下：

```js
const token = btoa(JSON.stringify({
    app_metadata: {
        premium: {
            // premium 账号状态
            status: "active",
            
            // 105944 固定值，表示 origination 账号
            variant_id: 105944,
            
            // 下次续费时间
            renews_at: "2034-05-01T07:44:26+00:00"
        }
    }
}))
```

## 免责声明

该插件仅供学习与研究，禁止用于任何商业目的。
