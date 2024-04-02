# jsoncracker

Crack the [jsoncrack](https://pro.jsoncrack.com/) pro editor.


## 安装
从 [Release 页面](https://github.com/jooooock/jsoncracker/releases)下载最新版本的 jsoncracker.zip 并解压，然后打开 Chrome 插件管理页面(chrome://extensions/)，如下：

![image](assets/1.png)

打开右上角的开发者模式，然后在左上角的 **Load unpacked** 按钮安装该插件。

安装后的效果如下：

![image](assets/2.png)


## 使用
安装完之后启用该插件，然后直接访问 https://pro.jsoncrack.com/editor 即可。


## 修改账号
如果想要修改页面显示的账号，可修改解压目录下面的`session.js`文件，修改内容如下：
```js
/*========================== 可自定义此账户信息 =================================*/
const profile = {
    name: 'Jack',
    email: 'findsource@proton.me',
    avatar: 'https://avatars.githubusercontent.com/u/156505552?v=4',
}
/*============================================================================*/
```
