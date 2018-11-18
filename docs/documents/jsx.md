# JSX

小程序的 `wxml` 只支持 `view`、`text` 与它的那些内置组件标签，娜娜奇可以让你直接使用 `div`, `span`, `p`, `b`, `strong` 等 HTML 标签。块状元素会转换成 `view`, 内联元素会转换为 `text`。


如果你使用 React 方式定义组件，那么对应的标签名必须以大写开头。

在小程序中，组件不支持包含其他标签，但我们的 React 组件可以充许包含其他标签或组件。

有关循环，if, 组件套组件，render props 等用法，可以脚手架的 qunar 示例

为了兼容所有平台，我们定下这些规则

1. 原来打算使用view标签的地方，请使用div,h1这些块状元素代替
2. 文本必须包含在text, span, a, option, label这几种标签内
3. text标签下面不能出现text标签或span标签，span标签下面不能出现text标签或span标签
4. jsx中不能出现 声明变量或函数的语句，不能出现switch语句
5. 不要在标签内部使用纯空白或通过两边的空白撑开空间，即`<div>   </div`与`<div>  111  </div`,它们会变成
   `<div></div`与`<div>111</div`


错误的用法

```jsx
<Login>
  <p>我是文本</p>
</Login>
```
正确的用法
```jsx
<Login>
   <p><text>我是文本</text></p>
   <p><span>我是文本</span></p>
</Login>
```


## 数据填充的使用
错误的用法
```jsx
<div aaa={this.title}>{this.data.content}</div>
```
正确的用法， 所有数据都只能来自this.props, this.state, this.context
```jsx
<div aaa={this.props.title}>{this.state.content}</div>
```
如果这是一个无状态组件，则这样用
```jsx
function AA(props, context){
   return <div aaa={props.title}>{context.content}</div>
}
```

## 三元表达式的用法

错误的用法
```jsx
render() {
    return this.state.isOk ? null : <div>Home Page</div>;
  }
```

翻译出的XML会出现 null字样，因为`{{null}}` 会null +"" 变成"null"

```jsx
<block a:if="{{state.isOk}}">{{null}}</block><block a:else="true"><view>Home Page</view></block>
```

正确的用法

```jsx
render() {
    return this.state.isOk ? <div>Home Page</div>: null;
  }
```

翻译出的XML体积还小这么多

```jsx
<block a:if="{{state.isOk}}"><view>Home Page</view></block>
```

## 事件绑定的使用
错误的用法
```jsx
<div onTap={this.props.fn}>点我</div>
```
正确的用法， 事件必须直接以this开头，来源于实例
```jsx
<div onTap={this.fn}>点我</div>
```
## map方法必须将this往里面传递, map的第一个参数不要用箭头函数

```jsx
<ul>{
this.state.list.map(function(el, index){
   return <li onClick={this.click1.bind(el, index)}>{el.name}</li>
},this)
}</ul>
```

## render的使用
错误的用法
```jsx
class A extends React.Component{
  render(){
    var a = this.props
    return <div aaa={a.title}>{a.content}</div>
  }
}
```
正确的用法
```jsx
class A extends React.Component{
  render(){
    return <div aaa={this.props.title}>{this.props.content}</div>
  }
}
```