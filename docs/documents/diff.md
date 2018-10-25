# 各种小程序的差异点

| 项目                         | 微信小程序                                        | 百度小程序                                 | 支付小程序                                     | 快应用                                           |
| ---------------------------- | ------------------------------------------------- | ------------------------------------------ | ---------------------------------------------- | ------------------------------------------------ |
| 命名空间                     | wx                                                | swan                                       | my                                             | 无,需要 require 它提供的所有接口按 wx 形式封装   |
| if 指令                      | wx:if                                             | s-if                                       | a:if                                           | if                                               |
| for 指令                     | wx:for<br /> wx:for-index<br /> wx:for-item<br /> | 将`wx:`改成`s-`                            | 将`wx:`改成`a:`                                | for="(personIndex, personItem) in list"          |
| key 指令                     | wx:key                                            | s-key                                       | key                                            | tid                                              |
| `<block>`容器标签            | 存在                                              | 存在                                       | 存在                                           | 存在                                             |
| 事件绑定                     | bind/catch[事件名全小写]="回调名"                 | bind/catch[事件名全小写]="回调名"          | on/catch[事件名驼峰]="回调名"                  | on[事件名全小写]="回调名/回调(arguments)"        |
| {{}}插值是否支持函数         | 不支持                                            | 不支持                                     | 不支持                                         | 支持                                             |
| 模块中使用脚本               | `<wxs />`                                         | `<filter />`                               | `<import-sjs />`                               | `<script />`                                     |
| 模板文件后缀                 | wxml                                              | swan                                       | axml                                           | 没有独立的文件 放 template 中                    |
| 样式文件后缀                 | wxss                                              | css                                        | acss                                           | 没有独立的文件 放 style 中，不需要处理 less,sass |
| template 包含 template       | 支持                                              | 不支持循环中使用 template                  | 支持                                           | 未知                                             |
| template 的 data 是否支持... | `{{...aaa}}`                                      | `{{{...aaa}}}` 三个括号                    | `{{...aaa}}`                                   | 只能一个个数据分开写                             |
| 缺省的组件(视图容器)         |                                                   |                                            | moveable-view、cover-view                      | 未知                                             |
| 缺省的组件(基础内容)         |                                                   |                                            | rich-text                                      | 未知                                             |
| 缺省的组件(导航)             |                                                   |                                            | functional-page-navigator                      | 未知                                             |
| 缺省的组件(媒体组件)         |                                                   |                                            | audio、video、camera、live-player、live-pusher | 未知                                             |
| open-data                    |                                                   |                                            | 不支持                                         | 未知                                             |
| 样式单位 rpx 支持情况        | 支持                                              | 不支持（用 rem，最新的基础库版本已经支持） | 支持                                           | 不支持                                           |
| 大小限制                     | 4M                                                | 4M(分包 8M)                                | 2M                                             | 1M（可以独单与厂商谈）                           |

APIs 的这么多方法都不一样，可能以后针对不同的平台打包不同的 api.js 来屏蔽差异性

### 微信小程序与快应用差异(更新中...)

| 差异                     | 微信小程序                                                                                                                                              | 快应用                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 入口文件                 | app.js, app.json                                                                                                                                        | app.ux, manifest.json                                                                                                    |
| 结构，表现，行为组织方式 | 分离：如 page.js, page.wxss, page.wxml                                                                                                                  | 聚合：类似 vue                                                                                                           |
| 文件扩展名               | .js, .json, .wxml, .wxss                                                                                                                                | .ux, .json                                                                                                               |
| 路由注册                 | app.json 中配置 pages 字段 例如"pages": ["path1", "path2"]                                                                                              | manifest.json 中配置 router 字段 [详见文档](https://doc.quickapp.cn/tutorial/getting-started/project-configuration.html) |
| 路由跳转                 | 1.组件跳转[navigator 组件]<br /> 2.五种 js 跳转方式[详见文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html#wxnavigatetoobject) | 1. 组件跳转[a 组件]<br /> 2. router.push(OBJECT)                                                                         |
| 获取应用实例             | 调用函数：getApp()                                                                                                                                      | 访问变量：this.$app                                                                                                      |
| 模板逻辑渲染             | 配置命名空间： 例如：wx:if/wx:elif/wx:else                                                                                                              | 不需要 例如：if/elif/else                                                                                                |
| 钩子函数                 | onLoad: 页面加载时触发                                                                                                                                  | onInit: 页面加载时触发                                                                                                   |
|                          | onDestroy: 页面卸载                                                                                                                                     | onUnload: 页面卸载                                                                                                       |
|                          | onBackPress：不支持                                                                                                                                     | onBackPress：支持                                                                                                        |
|                          | onPageScroll：支持                                                                                                                                      | onPageScroll：不支持                                                                                                     |
|                          | onPullDownRefresh： 支持                                                                                                                                | onPullDownRefresh：不支持                                                                                                |
| 初始化状态(state)        | data: {list: []}                                                                                                                                        | private: { list: [] }                                                                                                    |
| 更新组件状态             | setData 函数更新                                                                                                                                        | 类 vue 语法                                                                                                              |
| UI 事件绑定方式          | bindEventName                                                                                                                                           | （on\|@)EventName                                                                                                        |
| UI 事件自定义传参        | 不支持                                                                                                                                                  | 支持                                                                                                                     |
| API                      | 挂载在 wx 命名空间下：如 wx.showShareMenu(OBJECT)                                                                                                       | 需引用相关模块：import share from '@system.share'                                                                        |

组件机制

Component 构造器可用于定义组件，调用 Component 构造器时可以指定组件的属性、数据、方法等。

| 字段       | 说明           | 微信 | 支付宝 | 百度 | 轻应用    |
| ---------- | -------------- | ---- | ------ | ---- | --------- |
| properties | 接收的数据     | 同名 | 同名   | 同名 | props     |
| data       | 内部数据       | 同名 | 同名   | 同名 | private   |
| methods    | 方法集合       | 同名 | 同名   | 同名 | 不存在    |
| created    | 组件创建时     | 同名 | 同名   | 同名 | onInit    |
| attached   | 组件插入时     | 同名 | 同名   | 同名 | 不存在    |
| ready      | 组件完成布局后 | 同名 | 同名   | 同名 | onReady   |
| detached   | 组件移除时     | 同名 | 同名   | 同名 | onDestroy |

思路：properties 定义两个属性 `{props: Object, context: Object}`
created 或 onInit 时，抓取小程序实例与对应的 react 实例，将 props, state, context 给小程序实例

## 支付宝小程序的大小查看

### 流量
–单个资源：页面单个资源控制在50k以下，最大不超过100k
–页面总大小：页面完全加载前，资源累计必须小于200K
–离线包：amr压缩包总大小小于2M
–网络总请求数——页面完全加载前，请求总数必须小于20个

离线包的文件大小就是你项目的压缩包大小。C:\Users\计算机用户名\AppData\Local\Temp\.alipay-tiny\项目名\pack-production\dist.amr 上传小程序包的大小可以在beta版IDE右上角“详情”中查看“上次上传”的文件大

![size](./size.jpg)


## 页面组件在快应用的模拟

1. onShow onHide （大家都有）
2. 切换卡的支持，

    > 快应用需要外包 tabs 组件 `<tabs onchange="onChangeTabIndex">` 这样唤起 onTabItemTap
    > navigationBarBackgroundColor
    > navigationBarTextStyle
    > navigationBarTitleText

3. 滚动下拉刷新相关的事件唤起

    > onPullDownRefresh onReachBottom onPageScroll
    > enablePullDownRefresh disableScroll
    > tab-content 里面包含 list 组件与 refresh 组件
    > list.scroll--> onPageScroll  
    > list.scrollbottom --> onReachBottom
    > refresh.refresh --> onPullDownRefresh

4. 转发按钮事件的唤起 onShareAppMessage
    > 如果用户定义了 onShareAppMessage，那么我们就添加 onMenuPress，这样右上角就会出现分享按钮
    > 或在编译期扫描　`<button open-type="share"/>`对其 onTap 事件加上 onShareAppMessage 钩子
    > 详见[这里](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html#%E9%A1%B5%E9%9D%A2%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0)
    > 与 [这里](https://doc.quickapp.cn/features/system/share.html)

