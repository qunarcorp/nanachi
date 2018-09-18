# JSX

小程序的 `wxml` 只支持 `view`、`text` 与它的那些内置组件标签，娜娜奇可以让你直接使用 `div`, `span`, `p`, `b`, `strong` 等 HTML 标签。块状元素会转换成 `view`, 内联元素会转换为 `text`。

如果你使用 React 方式定义组件，那么对应的标签名必须以大写开头。

在小程序中，组件不支持包含其他标签，但我们的 React 组件可以充许包含其他标签或组件。

有关循环，if, 组件套组件，render props 等用法，可以脚手架的 qunar 示例

```jsx
<Login>
  <p>xxxxx</p>
</Login>
```
