# 各种小程序的差异点

| 项目                 | 微信小程序                                               | 百度小程序                        | 支付小程序                    | 快应用                                         |
| -------------------- | -------------------------------------------------------- | --------------------------------- | ----------------------------- | ---------------------------------------------- |
| 命名空间             | wx                                                       | swam                              | my                            | 无                                             |
| if 指令              | wx:if                                                    | s-if                              | a:if                          | if                                             |
| for 指令             | wx:for<br /> wx:for-index<br /> wx:for-item<br /> wx:key | 将`wx:`改成`s-`                   | 将`wx:`改成`a-`               | for="(personIndex, personItem) in list"        |
| `<block>`容器标签    | 存在                                                     | 存在                              | 存在                          | 存在                                           |
| 事件绑定             | bind/catch[事件名全小写]="回调名"                        | bind/catch[事件名全小写]="回调名" | on/catch[事件名驼峰]="回调名" | on[事件名全小写]="回调名/回调(arguments)"      |
| {{}}插值是否支持函数 | 不支持                                                   | 不支持                            | 不支持                        | 支持                                           |
| 模块中使用脚本       | `<wxs />`                                                | `<filter />`                      | `<import-sjs />`              | `<script />`                                   |
| 模板文件后缀         | wxml                                                     | swan                              | axml                          | 没有独立的文件 放 template 中                  |
| 样式文件后缀         | wxss                                                     | css                               | acss                          | 没有独立的文件 放 style 中，不需要处理 less,sass |
| template包含template       | 支持                                               |不支持（听说正在修复）                     | 支持              | 未知
| template的data是否支持...       | 支持                                               |不支持（听说正在修复）                     | 支持              | 未知



## 官网
微信小程序 https://developers.weixin.qq.com/miniprogram/dev/index.html <br />
百度小程序 https://smartprogram.baidu.com/docs/develop/tutorial/codedir/ <br />
支付小程序 https://docs.alipay.com/mini/developer/getting-started <br />
快应用 https://www.quickapp.cn/ <br />
