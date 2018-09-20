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
