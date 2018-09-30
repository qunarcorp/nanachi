# 应用

在小程序中，一个应用由多个页面组成，一个页面由多个组件组成。

项目根目录下的 `app.js` 最大的作用就是将里面所有以 `./pages/` 开头的依赖放到 `app.json` 中 `pages` 配置项中。

其他配置项统一放在config对象中，详细配置列表参见[这里](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

如果在使用娜娜奇之前，已经开发了一半，一些组件是用小程序的自定义组件方式定义的，那么可以在usingComponents配置项中定义好。

```jsx
import React from '@react';
import './pages/index/index';
import './pages/demo/base/index';
import './pages/demo/native/index/index';
import './app.less';

class Demo extends React.Component {
    static config = {
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#0088a4',
            navigationBarTitleText: 'mpreact',
            navigationBarTextStyle: '#fff'
        }
    };
    // 全局数据
    globalData = {
        ufo: 'ufo'
    };
    onLaunch() {
        console.log('App launched');
    }
}

App(new Demo());
```

![xx](1538220971725.jpg)
