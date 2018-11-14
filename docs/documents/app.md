# 全局对象

在小程序中，一个应用由多个页面组成，一个页面由多个组件组成。

app.js就是用来定义全局配置对象， 全局数据对象，全局回调，全局样式及import所有页面。

app.js外表上看来是一个React组件

*  全局配置对象 config 配置标题栏与tab栏
*  全局数据对象 globalData
*  全局回调
   -  onGlobalShare  如果页面组件**没有**定义onShareAppMessage方法，那么就会调用此方法，此方法要求返回对象
   -  onCollectLogs 所有click/tap/change/input/blur等核心的与用户行为相关的事件触发时，都会调用这个回调
   -  onSendLogs  onCollectLogs理应凑够一定数量的日志就会调用此方法，用于上传日志;并且，我们也应该在app onHide中上传所有日志。
   -  onGlobalLoad 每个页面在开始渲染页面时就会执行此回调，页面有onLoad方法时，也会同时执行此方法
   -  onGlobalReady 每个页面在渲染页面后（布局完成）就会执行此回调，页面有onReady方法时，也会同时执行此方法
   -  onGlobalShow 每个页面在显示时就会调用此方法，页面有onShow方法时，也会同时执行此方法
   -  onGlobalHide 每个页面在隐藏时就会调用此方法，页面有onHide方法时，也会同时执行此方法
   -  onGlobalUnload 每个页面在销毁时就会调用此方法，页面隐藏不一定调用它，只有此页面被踢出页面栈时才会调用
页面栈一共保存5个页面。当页面销毁时，它会依赖调用组件的componentWillUnmount,每个子组件拥componentWillUnmount，页面组件的onUnload，全局可能存在的onGlobalUnload。
   -  onHide 小程序在退出时会调用此方法（如果是快应用则是onDistory），它的行为类似浏览器中的onbeforeunload
*  全局样式 自己手动`import 'app.scss'`或`import 'app.less'`
*  import 所有以 `./pages/` 开头的依赖放到 `app.json` 中 `pages` 配置项中。
 

```jsx
import React from '@react';
import './pages/index/index'; //引入所有页面。
import './pages/demo/base/index';
import './pages/demo/native/index/index';
import './app.less';

class Global extends React.Component {
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

export default App(new Global());
```


其他配置项统一放在config对象中，详细配置列表参见[这里](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

![nanachi](1538220971725.jpeg)