# 页面参数的获取

在小程序中，想获取上一个页面跳转后带过来的参数是非常容易的。微信，字节跳动，支付宝，百度小程序直接利用onShow方法，就可以获取参数对象。

```jsx
import React from '@react';
import Welcome from '@components/Welcome/index';
import './index.scss';
class P extends React.Component {
    componentDidMount() {
        // eslint-disable-next-line
       console.log('page did mount!');
    }
    onShow(queryObject){
        console.log(queryObject) // {a: 111, b: false}
    }
    render() {
        return (
            <div class='page'>
                <Welcome text='nanachi' />
            </div>
        );
    }
}

export default P;
```

```javascript
var globalHooks = {
    onShare: 'onGlobalShare',
    onShow: 'onGlobalShow',
    onHide: 'onGlobalHide'
};

config.onShow = function(e) {
    let instance = this.reactInstance,
        fn = instance.onShow
    //支付宝小程序不存在this.options
    instance.props.query =  this.options ? this.options : e || {}
    var param = instance.props.query
    if (isFn(fn)) {//页面级别
        fn.call(instance, param);
    }
    var globalHook = globalHooks.onShow
    if (globalHook){//应用级别
        ret = callGlobalHook(globalHook, param);
    }
};
```

而快应用是onShow是没有参数，需要通过其他技巧来自行拼装这个对象。

- 如果快应用引擎直接支持从this.$page.query拿到这个对象，那么我们可以什么都不用做，但这个需要非常新的版本。
- 如果快应用引擎请允许我们从this.$page.uri中以提取的方式构建这个对象，那么我们可以在框架中处理掉。
- 但在华为快应用1040中，上述方案都不行，我们会从`React.api.navigateTo/redirectTo/navigateBack`方法中保留上一次用户的传参对象。
- 但如果这个页面从webview跳到快应用，这种方式也行不通，我们需要第四种方案，需要用户手动为页面实例添加一个protected静态对象， 这样框架就能从页面的小程序实例上抽取到想要的参数。

```jsx
import React from '@react';
import Welcome from '@components/Welcome/index';
import './index.scss';
class P extends React.Component {
    componentDidMount() {
        // eslint-disable-next-line
       console.log('page did mount!');
    }
    static protected = process.env.ANU_ENV === 'quick' ? {param1: 0, param2: 0, param3: 0} : {}
    onShow(queryObject){
        console.log(queryObject) // {a: 111, b: false, c: {}}
    }
    render() {
        return (
            <div class='page'>
                <Welcome text='nanachi' />
            </div>
        );
    }
}

export default P;
```

因此想支持华为快应用我们需要为页面多定义一个protected对象。

而快应用的onShow是这样实现的：

```javascript
import { getQueryFromUri } from './apiForQuick/router'

var globalHooks = {
  onShareAppMessage: 'onGlobalShare',
  onShow: 'onGlobalShow',
  onHide: 'onGlobalHide'
}


function getQuery (wx, huaweiHack) {
  var page = wx.$page;
  if(page.query){//小米快应用新规范，this.$page.query 返回页面启动时的参数数据；
    return page.query;
  }
  var query = {};
  //小米快应用直接从page.uri中抽取参数
  if(page.uri){
     getQueryFromUri(page.uri, query )
     for(var param in query){
        return query;
     }
  }  
  //华为快应用从protected中抽取
  if(Object.keys(huaweiHack).length){
     for(var i in huaweiHack){
        query[i] = wx[i];
     }
     return query;
  }
  //否则返回navigateTo/redirectTo/navigateBack中储存起来的参数
  return Object((_getApp().globalData || {}).__quickQuery)[page.path] || query;
}

  Array('onShow', 'onHide', 'onMenuPress').forEach(function (hook) {
    config[hook] = function (e) {
      let instance = this.reactInstance,
       fn = instance[hook],
       app = _getApp(),
       param = e
      if (hook === 'onShow') {
        param = instance.props.query =getQuery(this, PageClass.protected)
        app.$$page = instance.wx;
        app.$$pagePath = instance.props.path;
      }
      if (hook === 'onMenuPress') {
        app.onShowMenu && app.onShowMenu(instance, this.$app);
      } else if (isFn(fn)) {
        fn.call(instance, param);
      }

      let globalHook = globalHooks[hook];
      if (globalHook) {
        callGlobalHook(globalHook, param);
      }
    }
  })
  return config
}

```