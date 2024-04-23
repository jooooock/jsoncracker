# jsoncracker

Crack the [jsoncrack](https://pro.jsoncrack.com/) pro editor.


## 安装
从 [Release 页面](https://github.com/jooooock/jsoncracker/releases)下载最新版本的 jsoncracker.zip 并解压，然后打开 Chrome 插件管理页面(chrome://extensions/)，如下：

![1](https://github.com/jooooock/jsoncracker/assets/156505552/50fa0993-ed7d-49ca-b560-28ef2e814eab)

打开右上角的开发者模式，然后在左上角的 **Load unpacked** 按钮安装该插件。

安装后的效果如下：

![2](https://github.com/jooooock/jsoncracker/assets/156505552/e69d5099-2485-4243-89e9-24e399fc8ec1)


## 使用
安装完之后启用该插件，然后直接访问 https://pro.jsoncrack.com/editor 即可。


## 修改账号
如果想要修改页面显示的账号，可修改解压目录下面的`src/overrides/refresh_token.json`文件，具体如下所示：
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
