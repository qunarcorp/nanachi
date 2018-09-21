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

| 属性                 | 类型                                               | 默认值                        | 是否必须                    | 说明                                        |支持平台          |
| -------------------- | -------------------------------------------------------- | --------------------------------- | --|----------------------------- | ---------------------------------------------- |
| title            | string                                                      |                              | 是                           | 提示的标题                                            | 都支持|
| content            | string                                                      |                              | 是                           | 提示的内容                                            | 都支持|
| showCancel            | boolean                                                      |    true                          | 否                          | 是否显示取消按钮                                            | 微信|
| cancelText            | string                                                      |   '取消'                           | 否                           | 取消按钮的文字，最多4个字符                                            | 都支持|
| cancelColor           | string                                                      |   #000000                           | 否                           | 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串                                            | 微信|
| confirmText            | string                                                      |   '确定'                           | 否                           | 确定按钮的文字，最多4个字符                                            | 都支持|
| confirmColor            | string                                                      |   #3cc51f                           | 否                           | 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串	                                           | 微信|
| success            | function                                                      |                             | 否                           | 接口调用成功的回调函数	                                           | 都支持|
| fail            | function                                                      |                             | 否                           | 接口调用失败的回调函数	                                           | 都支持|
| complete            | function                                                      |                             | 否                           | 接口调用结束的回调函数（调用成功、失败都会执行）                                           | 都支持|



object.success 回调函数

参数

Object res

| 属性                 | 类型                                | 说明                                        |支持平台          |
| -------------------- | -------------------------------------------------------- |----------------------------- |---------------------------------------------- |
| confirm            | booleam                                                      |                                        为 true 时，表示用户点击了确定按钮                                            | 都支持|

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

| 属性                 | 类型                                               | 默认值                        | 是否必须                    | 说明                                        |支持平台          |
| -------------------- | -------------------------------------------------------- | --------------------------------- | --|----------------------------- | ---------------------------------------------- |
| title            | string                                                      |                              | 是                           | 提示的内容                                            | 都支持|
| icon            | string                                                      | 微信：success，支付：none                             | 否                           | 图标                                            | 都支持|
| image            | string                                                      |                              | 否                          | 自定义图标的本地路径，image 的优先级高于 icon                                           | 微信|
| duration            | number                                                     |   微信： 1500， 支付宝： 2000                           | 否                           | 提示的延迟时间                                            | 都支持|
| mask           | boolean                                                      |   false                           | 否                           | 是否显示透明蒙层，防止触摸穿透                                            | 微信|
| success            | function                                                      |                             | 否                           | 接口调用成功的回调函数	                                           | 都支持|
| fail            | function                                                      |                             | 否                           | 接口调用失败的回调函数	                                           | 都支持|
| complete            | function                                                      |                             | 否                           | 接口调用结束的回调函数（调用成功、失败都会执行）                                           | 都支持|


代码示例
```javascript
React.api.showToast({
      icon: 'success',
      title: '操作成功',
      duration: 3000,
      success: () => {
       
      }
    });
```




### hideToast()

### showLoading(Object object)

显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框

#### 参数

Object object

| 属性                 | 类型                                               | 默认值                        | 是否必须                    | 说明                                        |支持平台          |
| -------------------- | -------------------------------------------------------- | --------------------------------- | --|----------------------------- | ---------------------------------------------- |
| title            | string                                                      |                              | 是                           | 提示的内容                                            | 都支持|
| mask           | boolean                                                      |   false                           | 否                           | 是否显示透明蒙层，防止触摸穿透                                            | 微信|
| success            | function                                                      |                             | 否                           | 接口调用成功的回调函数	                                           | 都支持|
| fail            | function                                                      |                             | 否                           | 接口调用失败的回调函数	                                           | 都支持|
| complete            | function                                                      |                             | 否                           | 接口调用结束的回调函数（调用成功、失败都会执行）                                           | 都支持|

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

| 属性                 | 类型                                               | 默认值                        | 是否必须                    | 说明                                        |支持平台          |
| -------------------- | -------------------------------------------------------- | --------------------------------- | --|----------------------------- | ---------------------------------------------- |
| itemList            | Array string                                                      |                              | 是                           | 按钮的文字数组，数组长度最大为 6                                            | 都支持|
| itemColo           | string                                                      |   #000000                           | 否                           |按钮的文字颜色                                           | 微信|
| success            | function                                                      |                             | 否                           | 接口调用成功的回调函数	                                           | 都支持|
| fail            | function                                                      |                             | 否                           | 接口调用失败的回调函数	                                           | 都支持|
| complete            | function                                                      |                             | 否                           | 接口调用结束的回调函数（调用成功、失败都会执行）                                           | 都支持|

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