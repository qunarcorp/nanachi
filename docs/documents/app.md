# 全局对象

在小程序中，一个应用由多个页面组成，一个页面由多个组件组成。

app.js就是用来定义全局配置对象， 全局数据对象，全局回调，全局样式及import所有页面。

app.js外表上看来是一个React组件

*  全局配置对象 config 配置标题栏与tab栏
*  全局数据对象 globalData
*  全局回调
   -  onShareAppMessage  分享
   -  onCollectLogs 所有click/tap/change/input/blur等核心的与用户行为相关的事件触发时，都会调用这个回调
   -  onSendLogs  onCollectLogs理应凑够一定数量的日志或在app.js onHide方法调用此方法，用于上传日志
   -  onGlobalLoad 每个页面在开始渲染页面时就会执行此回调，相当于页面的onLoad钩子
   -  onGlobalReady 每个页面在渲染页面后（布局完成）就会执行此回调，相当于页面的onReady钩子
*  全局样式 自己手动`import 'app.scss'`或`import 'app.less'`
*  import 所有以 `./pages/` 开头的依赖放到 `app.json` 中 `pages` 配置项中。



```jsx
import React from '@react';
import './pages/index/index'; //引入所有页面。
import './pages/demo/base/index';
import './pages/demo/native/index/index';
import './app.less';

class Demo extends React.Component {
    //全局配置
     config = {
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
    // 全局回调，包括 onShareAppMessage， onCollectLogs, onSendLogs, onGlobalLoad, onGlobalReady
    // 全局的分享，如果某个页面组件没有定义onShareAppMessage，就会调用它
    onShareAppMessage(){ 
        return {} 
    };
    onLaunch() {
        console.log('App launched');
    }
}

export default App(new Demo());
```


其他配置项统一放在config对象中，详细配置列表参见[这里](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

![nanachi](1538220971725.jpeg)