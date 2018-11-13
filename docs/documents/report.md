# 日志收集与上传

出于运营的需要，我们需要将页面的流转信息，用户点击分布，错误，页面渲染情况发送到后端

小程序编译阶段，会将所有事件转换为一个全局的dispatchEvent方法，因此我们可以这里做统一的日志的收集

```jsx
 <div onclick="dispatchEvent" data-beacon-id="clickForVibration" class="item" data-click-uid="e1765" data-class-uid="c1321">
     <text>震动</text>
 </div>
```

如果我们发现这事件类型是click/tap/change/blur, 我们就会为这些元素添加一个`data-beacon-id`(如果你已经写了，它就不会添加，自动添加data-beacon-id的格式为 `标签名＋行号+"_"＋列号`，如`input24_56`,行号列号为源码的位置，方便我们调试)，然后在dispatchEvent执行app.js的全局对象的`onCollectLogs`方法，让用户整理成一个对象，放到一个数组中, 并尝试使用`onReportLogs`自动发送；

```javascript
//dispatchEvent的源码
export function dispatchEvent(e) {
    const eventType = e.type;
    const target = e.currentTarget;
    const dataset = target.dataset || {};
    const app = _getApp()
    if ( dataset.beaconId && app ) {
        let fn = app.onCollectLogs;
        if(isFn(fn)){
            app.onCollectLogs(dataset, eventType)
        }
    }
    const instance = this.reactInstance;
    if (!instance || !instance.$$eventCached) {
        return;
    }
    //....略
}
```

当用户退出APP时，会进入onHide事件，这时我们就会上传剩余的所有日志

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
    onCollectLogs(dataset, eventType){ //这里会在框架的dispatchEvent自动调起，实现自动理点
        var beaconId = dataset.beaconId;
        var otherData = dataset.xxx//data-xxxx
        var otherData2 = dataset.xxx2;
        var timeStamp = new Date - 0;
        var path = React.getCurrentPage().props.path;//页面路径
        var logs =  this.globalData.logs || (this.globalData.logs = [])
        logs.push({
            pid: beaconId,
            path: path,
            timeStamp: timeStamp
            action: eventType
        });
        if(logs.length > 20){
            var uploadLogs = logs.splice(0, 10);//截取前十条；
            if(this.onReportLogs){
                this.onReportLogs(uploadLogs)
            }
        }
    };
    onHide(){
      this.onReportLogs(); //微信，支付宝，百度
    };
    onDistory(){
      this.onReportLogs(); //快应用
    };
    onReportLogs(logs){ //自己实现
        if(!logs){
            if(!Array.isArray(this.globalData.logs) && this.globalData.logs.length == 0){
               return
            }
           logs = this.globalData.logs;
           this.globalData.logs = [];
        }
        if(!logs.length){
            return
        }
        var buildType = this.globalData.buildType;// wx, bu, ali
        var info = React.api.getSystemInfornSync();
        var { brand, model, version, platform} = info ;//获取手机品牌，手机型号， 微信版本号, 客户端平台;
        React.api.request({
            url: "/fdsfdsf/sdfds",
            type: 'GET',
            data： {
                logs,  //logData
                buildType,//wx, bu, ali, quick, tt, qq
                brand, //commonData
                model, //commonData
                version,//commonData
                platform,//commonData
             //other
            } 
        })
    }, 
    onLaunch() {
        console.log('App launched');
    }
}

export default App(new Demo());
```

在common目录下

```jsx
import React from '@react'
//此方法用于手动埋点
function createLog(dataset, eventType){
    var app =  React.getApp();
    if(typeof app.onCollectLogs === 'function' ){
        app.onCollectLogs(dataset, eventType)
    }
}
```

