# 页面组件

页面定义在 `pages` 目录下。

它必须是一个有状态的 React 组件。JSX 只能出现在 `render()` 方法里，它会编译成相应的 `wxml` 文件，因此不能使用 R `React.createElement()`代替 JSX。有关 JSX 的注意事项可以看[这里](jsx.md)。

页面组件与components目录下的通用组件有一些特异点，它是多出了componentDidShow, componentDidHide这两个生命周期钩子，与onPullDownRefresh onReachBottom onPageScroll onShareAppMessage这些事件。并且在config中能指定tabBar与分享按钮。

比如：

```jsx
//pages/train/index.js
import React from '@react';

class P extends React.Component {
  constructor() {
    super();
    this.state = {
      iconSize: [20, 30, 40, 50, 60, 70],
      text: 'this is first line\nthis is second line'
    };
  }
  static config = {};

  add() {
    this.setState({
      text: this.state.text + '\nthis is new line'
    });
  }

  remove() {
    var textAry = this.state.text.split('\n');
    if (!textAry.length) return;
    textAry.pop();

    this.setState({
      text: textAry.join('\n')
    });
  }
  componentWillMount() {
    console.log('base componentWillMount');
  }
  componentDidMount() {
    console.log('base componentDidMount');
  }
  render() {
    return (
      <div class="container">
        <div class="item-list">
          <h2 class="item-list-hd">Icon</h2>
          <div class="group">
            {this.state.iconSize.map(function(item) {
              return <icon type="success" size={item} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default P;
```

## 页面的生命周期

```shell
componentWillMount(onLoad) -> onShow -> componentWillMount(onReady)
componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate
componentDidUpdate -> componentWillUnmount(onUnload)
```

只有页面组件才有onShow, onHide钩子，普通组件没有这两个钩子


页面组件必须使用 es6 风格来引入依赖与导出自己。

它的静态属性 config 会抽取出来生成对应的 JSON 配置对象，有关配置项可以看[这里](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE)
