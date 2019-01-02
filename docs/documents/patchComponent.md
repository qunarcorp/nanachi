# 补丁组件

不是所有小程序都照着微信的那一套抄的，并且微信小程序的个别组件是基于native，他们（支付宝，百度等）拿不到源码，因此实现有所差异或延迟，并且为了以后让娜娜奇也运行于H5端，我们也需要实现那些不是H5标签的组件，因此就有补丁组件。

现在我们把补丁组件单独拿了出来 [Schnee UI](https://qunarcorp.github.io/schnee-ui/index.html)作为 Nanachi 项目的依赖使用。

用户在使用时，还是像微信那样直接用全小写的组件标签，如`<icon></icon>`，我们会自动转换成大写开头的标签
`<Icon></Icon>`,并且自动引入Icom组件的依赖。

## 快应用 Demo（需要先扫码下载，然后在[快应用调试器](https://doc.quickapp.cn/tools/debugging-tools.html)里选择本地安装打开）

![](logo/schnee_ui_logo.png)