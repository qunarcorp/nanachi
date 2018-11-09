# 日志收集与上传

出于运营的需要，我们需要将页面的流转信息，用户点击分布，错误，页面渲染情况发送到后端

小程序编译阶段，会将所有事件转换为一个全局的dispatchEvent方法，因此我们可以这里做统一的日志的收集

```jsx
 <div onclick="dispatchEvent" data-beacon-id="clickForVibration" class="item" data-click-uid="e1765" data-class-uid="c1321">
     <text>震动</text>
 </div>
```

如果我们发现这事件类型是click/tap, 并且标签中带有`data-beacon-id`那么我们就会访问全局的`onCollectLogs`方法，让用户整理成一个对象，放到一个数组中, 并尝试使用`onReportLogs`自动发送；

在每个页面的Unload事件中，框架也会访问`onReportLogs`方法来发送数据, `onReportLogs`应该有一个数组参数。

因此用户只需要在app.js定义好这两个事件，框架帮你搞定日志上传。下面是示例：


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
    onCollectLogs(dataset){ 
        var beaconId = dataset.beaconId;
        var otherData = dataset.xxx//data-xxxx
        var otherData2 = dataset.xxx2;
        var path = React.getCurrentPage().props.path;//狂妄自大
        var type = this.globalData.buildType;// wx, bu, ali
        var info = React.api.getSystemInfornSync();
        var { brand, model, version, platform} = info ;//获取手机品牌，手机型号， 微信版本号, 客户端平台;
        var logs =  this.globalData.logs || (this.globalData.logs = [])
        logs.push({
            pid: beaconId,
            path: path,
            bd_source: type,// 固定值 'wx'
            brand: brand,
            model: model,
            version:  version,
            platform: platform
        });
        if(logs.length > 20){
            var uploadLogs = logs.splice(0, 10);//截取前十条；
            this.onReportLogs(uploadLogs)
        }
    };
    onReportLogs(logs){ //自己实现
        if(!logs){
            if(!Array.isArray(this.globalData.logs) && this.globalData.logs.length == 0){
               return
            }
           logs = this.globalData.logs;
           this.globalData.logs = [];
        }
        React.api.request({
            url: "/fdsfdsf/sdfds",
            type: 'GET',
            data： JSON.stringif(logs)
        })
    }, 
    onLaunch() {
        console.log('App launched');
    }
}

export default App(new Demo());
```

