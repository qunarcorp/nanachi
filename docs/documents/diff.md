# 各种小程序的差异点

| 项目                 | 微信小程序                                               | 百度小程序                        | 支付小程序                    | 快应用                                         |
| -------------------- | -------------------------------------------------------- | --------------------------------- | ----------------------------- | ---------------------------------------------- |
| 命名空间             | wx                                                       | swam                              | my                            | 无,需要require它提供的所有接口按wx形式封装                                             |
| if 指令              | wx:if                                                    | s-if                              | a:if                          | if                                             |
| for 指令             | wx:for<br /> wx:for-index<br /> wx:for-item<br /> wx:key | 将`wx:`改成`s-`                   | 将`wx:`改成`a:`               | for="(personIndex, personItem) in list"        |
| `<block>`容器标签    | 存在                                                     | 存在                              | 存在                          | 存在                                           |
| 事件绑定             | bind/catch[事件名全小写]="回调名"                        | bind/catch[事件名全小写]="回调名" | on/catch[事件名驼峰]="回调名" | on[事件名全小写]="回调名/回调(arguments)"      |
| {{}}插值是否支持函数 | 不支持                                                   | 不支持                            | 不支持                        | 支持                                           |
| 模块中使用脚本       | `<wxs />`                                                | `<filter />`                      | `<import-sjs />`              | `<script />`                                   |
| 模板文件后缀         | wxml                                                     | swan                              | axml                          | 没有独立的文件 放 template 中                  |
| 样式文件后缀         | wxss                                                     | css                               | acss                          | 没有独立的文件 放 style 中，不需要处理 less,sass |
| template包含template       | 支持                                               |不支持（听说正在修复）                     | 支持              | 未知
| template的data是否支持...       | 支持                                               |不支持（听说正在修复）                     | 支持              | 未知
| 缺省的组件(视图容器)      |                                               |                     |    moveable-view、cover-view           | 未知
| 缺省的组件(基础内容)      |                                               |                     |    rich-text           | 未知
| 缺省的组件(导航)     |                                                  |                     | functional-page-navigator           | 未知
 缺省的组件(媒体组件)      |                                               |                     |    audio、video、camera、live-player、live-pusher           | 未知
 open-data      |                                               |                     |    不支持           | 未知
| 样式单位rpx支持情况       | 支持                                               |不支持（用rem，最新的基础库版本已经支持）                     | 支持              | 不支持



APIs的这么多方法都不一样，可能以后针对不同的平台打包不同的api.js来屏蔽差异性


  

      
### 微信小程序与快应用差异(更新中...)

| 差异                     | 微信小程序                                                   | 快应用                                                       |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 入口文件                 | app.js, app.json                                             | app.ux, manifest.json                                        |
| 结构，表现，行为组织方式 | 分离：如page.js, page.wxss, page.wxml                        | 聚合：类似vue                                                |
| 文件扩展名               | .js, .json, .wxml, .wxss                                     | .ux, .json                                                   |
| 路由注册                 | app.json中配置pages字段 例如"pages": ["path1", "path2"]      | manifest.json中配置router字段 [详见文档](https://doc.quickapp.cn/tutorial/getting-started/project-configuration.html) |
| 路由跳转                 | 1.组件跳转[navigator组件]<br /> 2.五种js跳转方式[详见文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html#wxnavigatetoobject) | 1. 组件跳转[a组件]<br /> 2. router.push(OBJECT)              |
| 获取应用实例             | 调用函数：getApp()                                           | 访问变量：this.$app                                          |
| 模板逻辑渲染             | 配置命名空间： 例如：wx:if/wx:elif/wx:else                   | 不需要 例如：if/elif/else                                    |
| 钩子函数                 | onLoad: 页面加载时触发                                       | onInit: 页面加载时触发                                       |
|                          | onDestroy: 页面卸载                                          | onUnload: 页面卸载                                           |
|                          | onBackPress：不支持                                          | onBackPress：支持                                            |
|                          | onPageScroll：支持                                           | onPageScroll：不支持                                         |
|                          | onPullDownRefresh： 支持                                     | onPullDownRefresh：不支持                                    |
| 初始化状态(state)        | data: {list: []}                                             | private: { list: [] }                                        |
| 更新组件状态             | setData函数更新                                              | 类vue语法                                                    |
| UI事件绑定方式           | bindEventName                                                | （on\|@)EventName                                            |
| UI事件自定义传参         | 不支持                                                       | 支持                                                         |
| API                      | 挂载在wx命名空间下：如wx.showShareMenu(OBJECT)               | 需引用相关模块：import share from '@system.share'            |

## 官网
<a href="https://developers.weixin.qq.com/miniprogram/dev/index.html" target="_blank">微信小程序 </a> <br />
<a href="https://smartprogram.baidu.com/docs/develop/tutorial/codedir/">百度小程序 </a> <br />
<a href="https://docs.alipay.com/mini/developer/getting-started">支付小程序</a>  <br />
<a href="https://www.quickapp.cn/">快应用</a>  <br />
