# 路由

路由器的能力是由 `Page` 的生命周期与 `React.api` 共同完成的。

我们可以访问页面组件的 `componentWillMount/DidMount` 的 `this.props` 得到当前的信息，然后跳转。

```jsx
componentWillMount(){
   console.log(this.props.path)
   console.log(this.props.query)
   React.api.navigateTo() // 或 redirectTo() 或 switchTab()
}
```

或者使用组件 `<navigator>` 示例： `<navigator url='../test/test'>点击跳转</navigator>`

### wx.redirectTo(Object object)

关闭当前页面，跳转到应用内的某个页面，但是不允许跳转到 tabbar 页面。

| 属性     | 类型     | 默认值 |   是否必填                                                                                                                                          |
| -------- | -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| url      | string   | 是     | tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如 'path?key=value&key2=value2' |
| success  | function | 否     | 接口调用成功的回调函数                                                                                                                              |
| fail     | function | 否     | 接口调用失败的回调函数                                                                                                                              |
| complete | function | 否     | 接口调用结束的回调函数（调用成功、失败都会执行）                                                                                                    |

### wx.navigateTo(Object object)

保留当前页面，跳转到应用内的某个页面，但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。

| 属性     | 类型     | 默认值 |   是否必填                                       |
| -------- | -------- | ------ | ------------------------------------------------ |
| url      | string   | 是     | 同 redirectTo                                    |
| success  | function | 否     | 接口调用成功的回调函数                           |
| fail     | function | 否     | 接口调用失败的回调函数                           |
| complete | function | 否     | 接口调用结束的回调函数（调用成功、失败都会执行） |

### wx.switchTab(Object object)

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面

| 属性     | 类型     | 默认值 |   是否必填                                       |
| -------- | -------- | ------ | ------------------------------------------------ |
| url      | string   | 是     | 同 redirectTo                                    |
| success  | function | 否     | 接口调用成功的回调函数                           |
| fail     | function | 否     | 接口调用失败的回调函数                           |
| complete | function | 否     | 接口调用结束的回调函数（调用成功、失败都会执行） |

### wx.navigateBack(Object object)

关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。

| 属性     | 类型     | 默认值 |   是否必填                                              |
| -------- | -------- | ------ | ------------------------------------------------------- |
| url      | number   | 是     | 返回的页面数，如果 delta 大于现有页面数，则返回到首页。 |
| success  | function | 否     | 接口调用成功的回调函数                                  |
| fail     | function | 否     | 接口调用失败的回调函数                                  |
| complete | function | 否     | 接口调用结束的回调函数（调用成功、失败都会执行）        |
