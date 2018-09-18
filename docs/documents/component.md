# 通用组件

通用组件必须定义在 `components` 目录中，里面建一个文件夹与组件名同名，下面 `index.js` 就是你编写组件的地方。

## 组件的样板

```jsx
import React from '@react';

class Animal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      age: props.age || 1
    };
  }

  static defaultProps = {
    age: 1,
    name: 'animal'
  };

  changeAge() {
    this.setState({
      age: ~~(Math.random() * 10)
    });
  }

  componentDidMount() {
    console.log('Animal componentDidMount');
  }

  componentWillReceiveProps(props) {
    this.setState({
      name: props.name
    });
  }

  render() {
    return (
      <div style={{ border: '1px solid #333' }}>
        名字：
        {this.state.name} 年龄：
        {this.state.age} 岁
        <button catchTap={this.changeAge.bind(this)}>换一个年龄</button>
      </div>
    );
  }
}

export default Animal;
```

由于目录可能比较深，因此 nanachi 比较贴心地提供了两个默认的别名，`@react` 与 `@components`, `@react` 指向专门为小程序优化的 React, `@components` 指向开发目录下的 `components` 目录。

JSX 只能出现在 `render()` 方法或无状态组件的函数体中。

JSX 的所有填充数据必须带 `this.props`, `this.state`, `this.context` 前缀。

`render()` 方法里不能出现 `var/const/let` 语句，只能出现 `if` 语句与三元表达式或 JSX。

`map()` 方法调用的第一个参数最好使用匿名方法（因为这样会自动 bind `this`），否则它会自动添加上第二个参数 `this`

```jsx
<div class="group">
  {this.state.iconSize.map(function(item) {
    return <icon type="success" size={item} />;
  })}
</div>
```

会变成

```jsx
<div class="group">
  {this.state.iconSize.map(function(item) {
    return <icon type="success" size={item} />;
  }, this)}
</div>
```

JSX 禁止出现 `instanceUid`, `classUid`, `eventUid`, 这些是内部绑定事件时在编译阶段自动添加的。
