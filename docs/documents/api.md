# API

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
