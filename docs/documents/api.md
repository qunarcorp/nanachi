# API

## 概述

| API                       | 类型                   | 说明                                                                                                                                                                             |
| ------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| React.createElement       | 内部 API               | 创建元素, 框架在内部会帮你调用这个方法，业务代码中不要用它                                                                                                                       |
| React.createRef           | &nbsp;                 | 不存在                                                                                                                                                                           |
| React.forwardRef          | &nbsp;                 | 不存在                                                                                                                                                                           |
| React.api                 | &nbsp;                 | 相当于微信的 wx, 支付宝小程序的 my，百度小程的 swan,为了方便编译，请不要在业务代码中直接用 wx,要用 React.api                                                                     |
| React.getApp              | &nbsp;                 | 相当于微信的 getApp                                                                                                                                                              |
| React.getCurrentPages     | &nbsp;                 | 相当于微信的 geCurrentPage                                                                                                                                                       |
| React.Component           | &nbsp;                 | 所有组件的基类                                                                                                                                                                   |
| React.toComponent         | 内部 API               | 用来创建组件                                                                                                                                                                     |
| React.toRenderProps       | 内部 API               | 用来代替 render 属性对应的函数                                                                                                                                                   |
| React.toClass             | 内部 API               | 用来转译 es6 类                                                                                                                                                                  |
| React.toStyle             | 内部 API               | 用来转译样式                                                                                                                                                                     |
| React.toPage              | 内部 API               | 页面组件会自动在底部添加这方法                                                                                                                                                   |
| componentDidShow          | 页面组件的生命周期钩子 | 相当于 onShow                                                                                                                                                                    |
| componentDidHide          | 页面组件的生命周期钩子 | 相当于 onHide                                                                                                                                                                    |
| onPageScroll              | 页面组件的事件         | 监听用户滑动页面事件                                                                                                                                                             |
| onShareAppMessage         | 页面组件的事件         | 监听用户点击页面内转发按钮（`<button>` 组件 open-type="share"）或右上角菜单“转发”按钮的行为，并自定义转发内容。<br/>注意：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮 |
| onReachBottom             | 页面组件的事件         | 监听用户上拉触底事件                                                                                                                                                             |
| onPullDownRefresh         | 页面组件的事件         | 监听用户下拉刷新事件                                                                                                                                                             |
| componentWillMount        | 组件的生命周期钩子     | 页面组件的 props 中有 path, query 等路由相关信息                                                                                                                                 |
| componentWillUpdate       | 组件的生命周期钩子     |                                                                                                                                                                                  |
| componentDidMount         | 组件的生命周期钩子     |                                                                                                                                                                                  |
| componentDidUpdate        | 组件的生命周期钩子     |                                                                                                                                                                                  |
| componentWillRecieveProps | 组件的生命周期钩子     |                                                                                                                                                                                  |
| componentWillUnmount      | 组件的生命周期钩子     |                                                                                                                                                                                  |
| shouldComponentUpdate     | 组件的生命周期钩子     |                                                                                                                                                                                  |
| componentDidCatch         | 组件的生命周期钩子     |
| getSnapshotBeforeUpdate   | 组件的生命周期钩子     |                                                                                                                                                                                  |
| getDerivedStateFromProps  | 组件的生命周期钩子     |                                                                                                                                                                                  |
| getDerivedStateFromCatch  | 组件的生命周期钩子     |
| getChildContext           | 组件的方法             |                                                                                                                                                                                  |  |
| setState                  | 组件的方法             | 更新页面                                                                                                                                                                         |
| forceUpdate               | 组件的方法             | 更新页面                                                                                                                                                                         |
| refs                      | 组件实例上的对象       | 里面保存着子组件的实例（由于没有 DOM，对于普通标签来说， <br />虽然也能保存着它的虚拟 DOM )                                                                                      |
| render                    | 组件的方法             | 里面必须使用 JSX ，其他方法不能存在 JSX，不能显式使用 createElement                                                                                                              |

## 交互

### showModal(Object object)

显示模态对话框

#### 参数

Object object

| 属性         | 类型     | 默认值  | 是否必须 | 说明                                               | 支持平台 |
| ------------ | -------- | ------- | -------- | -------------------------------------------------- | -------- |
| title        | string   |         | 是       | 提示的标题                                         | 都支持   |
| content      | string   |         | 是       | 提示的内容                                         | 都支持   |
| showCancel   | boolean  | true    | 否       | 是否  显示取消按钮                                 | 微信     |
| cancelText   | string   | '取消'  | 否       | 取消  按钮的文字，最多 4 个  字符                  | 都支持   |
| cancelColor  | string   | #000000 | 否       | 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 | 微信     |
| confirmText  | string   | '确定'  | 否       | 确定  按钮的文字，最多 4 个  字符                  | 都支持   |
| confirmColor | string   | #3cc51f | 否       | 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 | 微信     |
| success      | function |         | 否       | 接口调用成功的回调函数                             | 都支持   |
| fail         | function |         | 否       | 接口调用失败的回调函数                             | 都支持   |
| complete     | function |         | 否       | 接口调用结束的回调函数（调用成功、失败都会执行）   | 都支持   |

object.success 回调函数

参数

Object res

| 属性    | 类型    | 说明                               | 支持平台 |
| ------- | ------- | ---------------------------------- | -------- |
| confirm | booleam | 为 true 时，表示用户点击了确定按钮 | 都支持   |

代码示例

```javascript
React.api.showModal({
  title: '温馨提示',
  content: '您是否想查询快递单号:1234567890',
  confirmText: '马上查询',
  cancelText: '暂不需要',
  success: result => {
    console.log('result', result);
  }
});
```

### showToast(Object object)

显示一个弱提示，可选择多少秒之后消失

#### 参数

Object object

| 属性     | 类型     | 默认值                      | 是否必须 | 说明                                             | 支持平台 |
| -------- | -------- | --------------------------- | -------- | ------------------------------------------------ | -------- |
| title    | string   |                             | 是       | 提示的内容                                       | 都支持   |
| icon     | string   | 微信：success，支付：none   | 否       | 图标                                             | 都支持   |
| image    | string   |                             | 否       | 自定义图标的本地路径，image 的优先级高于 icon    | 微信     |
| duration | number   | 微信： 1500， 支付宝： 2000 | 否       | 提示的延迟时间                                   | 都支持   |
| mask     | boolean  | false                       | 否       | 是否显示透明蒙层，防止触摸穿透                   | 微信     |
| success  | function |                             | 否       | 接口调用成功的回调函数                           | 都支持   |
| fail     | function |                             | 否       | 接口调用失败的回调函数                           | 都支持   |
| complete | function |                             | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） | 都支持   |

代码示例

```javascript
React.api.showToast({
  icon: 'success',
  title: '操作成功',
  duration: 3000,
  success: () => {}
});
```

### hideToast()

### showLoading(Object object)

显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框

#### 参数

Object object

| 属性     | 类型     | 默认值 | 是否必须 | 说明                                             | 支持平台 |
| -------- | -------- | ------ | -------- | ------------------------------------------------ | -------- |
| title    | string   |        | 是       | 提示的内容                                       | 都支持   |
| mask     | boolean  | false  | 否       | 是否显示透明蒙层，防止触摸穿透                   | 微信     |
| success  | function |        | 否       | 接口调用成功的回调函数                           | 都支持   |
| fail     | function |        | 否       | 接口调用失败的回调函数                           | 都支持   |
| complete | function |        | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） | 都支持   |

代码示例

```javascript
React.api.showLoading({
  title: '加载中...'
});
```

### hideLoading()

### showActionSheet(Object object)

#### 参数

Object object

| 属性     | 类型         | 默认值  | 是否必须 | 说明                                             | 支持平台 |
| -------- | ------------ | ------- | -------- | ------------------------------------------------ | -------- |
| itemList | Array string |         | 是       | 按钮的文字数组，数组长度最大为 6                 | 都支持   |
| itemColo | string       | #000000 | 否       | 按钮的文字颜色                                   | 微信     |
| success  | function     |         | 否       | 接口调用成功的回调函数                           | 都支持   |
| fail     | function     |         | 否       | 接口调用失败的回调函数                           | 都支持   |
| complete | function     |         | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） | 都支持   |

代码示例

```javascript
React.api.showActionSheet({
  title: '支付宝-ActionSheet',
  itemList: ['菜单一', '菜单二', '菜单三', '菜单四', '菜单五'],
  success: res => {
    const btn = res.index === -1 ? '取消' : '第' + res.index + '个';
  }
});
```

## 导航

### navigateTo(OBJECT)

保留当前页面，跳转到应用内的某个页面，使用 wx.navigateBack 可以返回到原页面。

**OBJECT 参数说明：**

| 参数     | 类型     | 是否必须 | 说明                                                                                                                                                        | 支持平台 |
| -------- | --------  | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| url      | string   | 是       | 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2' | 都支持   |
| success  | function | 否       | 接口调用成功的回调函数                                                                                                                                      | 都支持   |
| fail     | function | 否       | 接口调用失败的回调函数                                                                                                                                      | 都支持   |
| complete | function | 否       | 接口调用结束的回调函数（调用成功、失败都会执行）                                                                                                            | 都支持   |

代码示例

```javascript
  React.api.navigateTo({
      wx.navigateTo({
        url: 'test?id=1'
  })
});
```

```javascript
//test.js
Page({
  componentDidMount: function(option) {
    console.log(option.query);
  }
});
```

> Tips: 目前页面路径最多只能十层。

### redirectTo(OBJECT)

关闭当前页面，跳转到应用内的某个页面。

**OBJECT 参数说明：**

| 参数     | 类型     | 是否必须 | 说明                                                                                                                                                        | 支持平台 |
| -------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| url      | string   | 是       | 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2' | 都支持   |
| success  | function | 否       | 接口调用成功的回调函数                                                                                                                                      | 都支持   |
| fail     | function | 否       | 接口调用失败的回调函数                                                                                                                                      | 都支持   |
| complete | function | 否       | 接口调用结束的回调函数（调用成功、失败都会执行）                                                                                                            | 都支持   |

代码示例

```javascript
  React.api.redirectTo({
      wx.navigateTo({
        url: 'test?id=1'
  })
});
```

### reLaunch(OBJECT)

关闭所有页面，打开到应用内的某个页面。

**OBJECT 参数说明：**

| 参数     | 类型     | 是否必须 | 说明                                                                                                                                                        | 支持平台 |
| -------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| url      | string   | 是       | 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2' | 都支持   |
| success  | function | 否       | 接口调用成功的回调函数                                                                                                                                      | 都支持   |
| fail     | function | 否       | 接口调用失败的回调函数                                                                                                                                      | 都支持   |
| complete | function | 否       | 接口调用结束的回调函数（调用成功、失败都会执行）                                                                                                            | 都支持   |

代码示例

```javascript
  React.api.reLaunch({
      wx.navigateTo({
        url: 'test?id=1'
  })
});
```

```javascript
//test.js
Page({
  componentDidMount: function(option) {
    console.log(option.query);
  }
});
```

### navigateBack(OBJECT)

关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。

**OBJECT 参数说明：**

| 参数  | 类型   | 默认值 | 是否必须 | 说明                                                  | 支持平台 |
| ----- | ------ | ------ | -------- | ----------------------------------------------------- | -------- |
| delta | number | 1      | 是       | 返回的页面数，如果 delta 大于现有页面数，则返回到首页 | 都支持   |

代码示例

```javascript
// 注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码

// 此处是A页面
React.api.navigateTo({
  url: 'B?id=1'
});

// 此处是B页面
React.api.navigateTo({
  url: 'C?id=1'
});

// 在C页面内 navigateBack，将返回A页面
React.api.navigateBack({
  delta: 2
});
```

## 设置导航条

### setNavigationBarTitle(OBJECT)

动态设置当前页面的标题

| 参数     | 类型      | 是否必须 | 说明                                                                                                                                                        | 支持平台 |
| -------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| title      | string   | 是       | 页面标题 | 都支持   |
| success  | function | 否       | 接口调用成功的回调函数                                                                                                                                      | 都支持   |
| fail     | function | 否       | 接口调用失败的回调函数                                                                                                                                      | 都支持   |
| complete | function | 否       | 接口调用结束的回调函数（调用成功、失败都会执行）                                                                                                            | 都支持   |




### setNavigationBarColor(OBJECT)

**OBJECT 参数说明：**

| 参数     | 类型      | 是否必须 | 说明                                                                                                                                                        | 支持平台 |
| -------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| backgroundColor      | string   | 是       | 背景颜色值，有效值为十六进制颜色 | 都支持   |
| frontColor  | string |        | 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000                                                                                                                                      | 微信支持   |
| borderBottomColor  | string | 否       | 导航栏底部边框颜色，支持十六进制颜色值。若设置了 backgroundColor，则borderBottomColor 不会生效，默认会和 backgroundColor 颜色一样                                                                                                                                      | 支付宝   |
| reset  | boolean | 否       | 是否重置导航栏为支付宝默认配色，默认 false                                                                                                                                      | 支付宝   |
| animation  | Object  | 否       | 动画效果                                                                                                                                     | 微信   |
| animation.duration  | Number | 否       | 动画变化时间，默认0，单位：毫秒                                                                                                                                     | 微信   |
| animation.timingFunc  | String | 否       | 动画变化方式，默认 linear                                                                                                                                     | 支付宝   |
| success  | function | 否       | 接口调用成功的回调函数                                                                                                                                      | 都支持   |
| fail     | function | 否       | 接口调用失败的回调函数                                                                                                                                      | 都支持   |
| complete | function | 否       | 接口调用结束的回调函数（调用成功、失败都会执行）                                                                                                            | 都支持   |


### showNavigationBarLoading()

在当前页面显示导航条加载动画。

### hideNavigationBarLoading()

隐藏导航条加载动画。

## TabBar

### switchTab(OBJECT)

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面

**OBJECT 参数说明：**

| 参数     | 类型     | 是否必须 | 说明                                                                                                                                                        | 支持平台 |
| -------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| url      | string   | 是       | 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数 | 都支持   |
| success  | function | 否       | 接口调用成功的回调函数                                                                                                                                      | 都支持   |
| fail     | function | 否       | 接口调用失败的回调函数                                                                                                                                      | 都支持   |
| complete | function | 否       | 接口调用结束的回调函数（调用成功、失败都会执行）                                                                                                            | 都支持   |

代码示例

```
// app.json
{
  "tabBar": {
    "list": [{
      "pagePath": "index",
      "text": "首页"
    },{
      "pagePath": "other",
      "text": "其他"
    }]
  }
}
```

```javascript
React.api.switchTab({
  url: '/index'
})

```
## 动画

### createAnimation(Object object)

创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。

**OBJECT 参数说明：**

| 属性     | 类型         | 默认值  | 是否必须 | 说明                                             | 支持平台 |
| -------- | ------------ | ------- | -------- | ------------------------------------------------ | -------- |
| duration | number |    400     | 否       | 动画持续时间，单位 ms                 | 都支持   |
| timingFunction | string       | 'linear' | 否       | 动画的效果                                   | 微信     |
| delay  | number     |   0      | 否       | 动画延迟时间，单位 ms                           | 都支持   |
| transformOrigin    | string     |         | 否       | 接口调用失败的回调函数                           | 都支持   |
| complete | function     |   50% 50% 0      | 否       | 设置transform-origin | 都支持   |


**timingFunction 的合法值：**


| 值 | 说明 | 
| ---- | --- |
| 'linear' | 动画从头到尾的速度是相同的 |
| 'ease' | 动画以低速开始，然后加快，在结束前变慢 |
| 'ease-in' | 动画以低速开始 |
| 'ease-in-out' | 动画以低速开始和结束 |
| 'ease-out' | 动画以低速结束 |
| 'step-start' | 动画第一帧就跳至结束状态直到结束 |
| 'step-end' | 动画一直保持开始状态，最后一帧跳到结束状态 |