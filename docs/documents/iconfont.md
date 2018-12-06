# Iconfont 的支持情况

## 使用方式

定义 iconfont 样式：

```scss
// 本地字体
@font-face {
    font-family: 'fontLocal';
    src: url('../../../assets/fonts/font.woff') format('woff'),
    url('../../../assets/fonts/font.ttf') format('truetype')
}
// 远程地址
@font-face {
    font-family: 'fontOnline';
    src: url(https://ss.qunarzz.com/yo/font/1.0.3/font.woff) format("woff"),
    url(https://ss.qunarzz.com/yo/font/1.0.3/font.ttf) format("truetype")
}

.iconfont-local {
    font-family: 'fontLocal';
}
.iconfont-online {
    font-family: 'fontOnline';
}
```

定义组件：

```js
import React from '@react';
import './index.scss';

class P extends React.Component {

    render() {
        return (<div>
            <p>本地图标</p>
            <div className="iconfont-local">&#xe351;</div>
            <div className="iconfont-local">&#xe351;</div>
            <p>远程图标</p>
            <div className="iconfont-online">&#xf077;</div>
            <div className="iconfont-online">&#xf078;</div>
        </div>);
    }
}

export default P;
```

需要注意的是，字体图标文件必须放在 assets 文件，使用远程 iconfont 时需要填写完整的 url 地址，不能省略前面的 http 或者 https。

因为娜娜奇的样式是组件封闭的，所以为了能够共用 iconfont 相关的样式，我们推荐建立一个公共的 iconfont 样式文件，然后在需要使用 iconfont 的组件里通过 `@import` 引入该样式。

## 支持情况

|     | 本地 | 远程 |
| --- | --- | --- |
| 微信小程序 | ✗ | ✓ |
| 支付宝小程序 | ✓ | ✓ |
| 百度小程序 | ✗ | ✓ |
| 快应用 | ✗ | ✗ |