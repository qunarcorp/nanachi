# 全局对象

在小程序中，一个应用由多个页面组成，一个页面由多个组件组成。

app.js就是用来定义全局配置对象， 全局数据对象，全局回调，全局样式及import所有页面。

app.js外表上看来是一个React组件

*  全局配置对象 config 配置标题栏与tab栏
*  全局数据对象 globalData
*  全局回调
   -  onGlobalLoad 每个页面在初次加载时就会执行此回调，注意不存在页面级别的onLoad方法
   -  onGlobalReady 每个页面在初次渲染后（布局完成）就会执行此回调，注意不存在页面级别的onReady方法
   -  onGlobalUnload 每个页面在被销毁时就会调用此方法，注意不存在页面级别的onUnload方法, 其次路由切换导致当前页面隐藏时，页面不一定销毁，只有此页面被踢出页面栈时才会销毁。页面栈一共保存10个页面. 想用页面级别的onUnload方法，可以用componentWillUnmount代替。
   -  onGlobalShow 每个页面在显示时就会调用此方法，页面有onShow方法时，也会同时执行此方法
   -  onGlobalHide 每个页面在隐藏时就会调用此方法，页面有onHide方法时，也会同时执行此方法
   -  onGlobalShare  只有页面组件**没有**定义onShare/onShareAppMessage方法，才会调用此方法，此方法要求返回对象
   -  onCollectLogs 所有click/tap/change/input/blur等核心的与用户行为相关的事件触发时，都会调用这个回调
   -  onSendLogs  onCollectLogs理应凑够一定数量的日志就会调用此方法，用于上传日


*  全局样式 自己手动`import 'app.scss'`或`import 'app.less'`
*  import 所有以 `./pages/` 开头的依赖放到 `app.json` 中 `pages` 配置项中。
*  默认我们会把 第一个`./pages`开头的依赖当作**首页**。

此外，app.js还支持原生的onLaunch, onError, `onShow`, onHide。

其中onShow, onHide不等同于onGlobalShow, onGlobalHide, 前两者是小程序从前台进入后台或从后台进入前台触发的， 后两者是页面级别的监听方法。由于快应用不支持应用级别的onShow方法，因此不要使用。

在快应用下，它没有onLaunch, onHide, 娜娜奇会在自动转译成 onCreate、onDestroy方法。

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
    // 全局回调，包括 onGlobalShare onGlobalLoad  onGlobalReady， onGlobalShow onGlobalHide onCollectLogs onSendLogs,
    // 全局的分享，如果某个页面组件没有定义onShare/onShareAppMessage，就会调用它
    onGlobalShare(){ 
        return {} 
    }
    onGlobalResize(){

    }
    onShow(){
          var app = React.getApp()
          console.log(app == this)//由于平台的差异性，React.getApp(）得到的对象不定是new App的实例
    }
    onLaunch() {
        console.log('App launched');
    }
}

export default App(new Global());
```

## 注意

 `React.getApp()`必须放在app.js 或页面组件或普通组件的生命周期钩子里面执行，不要放在全局作用域下执行

快应用可以这样设置跨页面的全局数据 `this.$app.$data = {a:1}`

其他配置项统一放在config对象中，详细配置列表参见[这里](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

![nanachi](1538220971725.jpeg)