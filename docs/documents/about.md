# 关于

此项目由 [YMFE](https://ymfe.org) 提供支持。


大约从11月份开始，我们切换到branch3开发，正式启动自定义组件机制实现nanachi的组件机制

原来master上使用 template标签来编写组件，它其实规避了许多问题，因为4大小程序的自定义组件机制都各有不同，template则是兼容成本最低的方案。但是用template标签编写组件，其实那不是组件，对于小程序来说就是视图片段。换言之，一个页面只有一个组件，而这个组件的数据则是非常庞大。果不其然，它在支付宝小程序的IOS8/9中因为性能问题挂掉，只好匆匆启动后备方案

简单回顾一下四大小程序的模板

```html
<!--wxml-->
<view class="container">
  <view class="userinfo" bindtap="eventCanBubble">
    <button wx:if="{{!hasUserInfo && canIUse}}" catchtap="eventNoBubble"> 获取头像昵称 </button>
    <block wx:else>
      <view wx:for="array" wx:for-item="el" wx:for-index="index"  wx:key="*this">
         {{el.title}}
      </view>
    </block>
  </view>
</view>

<!--axml-->
<view class="container">
  <view class="userinfo" onTap="eventCanBubble">
    <button a:if="{{!hasUserInfo && canIUse}}" catchTap="eventCanBubble"> 获取头像昵称 </button>
    <block a:else>
      <view a:for="array" a:for-item="el" a:for-index="index"  key="title" >
         {{el.title}}
      </view>
    </block>
  </view>
</view>

<!--swan-->
<view class="container">
  <view class="userinfo" bind:tap="eventCanBubble">
    <button s-if="{{!hasUserInfo && canIUse}}" catch:tap="eventCanBubble"> 获取头像昵称 </button>
    <block s-else>
      <view s-for="(index, el) in array" s-key="title" >
         {{el.title}}
      </view>
    </block>
  </view>
</view>

<!--快应用ux-->
<template>
  <view class="container">
    <view class="userinfo" onClick="eventCanBubble">
      <button if="{{!hasUserInfo && canIUse}}" onClick="eventCanBubble"><text> 获取头像昵称</text> </button>
      <block else>
        <view for="(index, el) in array" tid="title" >
          <text>el.title}}</text>
        </view>
      </block>
    </view>
  </view>
</template>
```

从模板来看，其实差别不大，改一下属性名，每个公司都想通过它们来标识自己的存在。但内部实现完全不一样，因为源码并没有公开或者混淆了。使用自定义组件机制的风险就比<template>标签大很多。 BAT三公司都暴露了一个Component入口函数，让你传入一个配置对象实现组件机制，而以小米为首的快应用则是内部走vue，没有Component这个方法，只需你export一个配置对象。
```javascript
//微信
Component({
  data: {},
  lifetimes: {//钩子必须放在lifetimes
    created(){},//拿不到实例的UUID
    attached(){},//钩子触发顺序与元素在文档位置一致
    dettached(){}
  },
  methods: {//事件句柄必须放在methods
    onClick(){}
  }
})
//支付宝
Component({
  data: {},
  //没有与created对应的didCreate/willMount钩子
  didMount(){},//能拿到实例的UUID
  didUpdate(){},//钩子触发顺序是随机的
  didUnmount(){},
  methods: {
    onClick(){}
  }
})

//百度
Component({
  data: {},
  created(){},//应该是微信自定义组件的早期格式，没有lifetimes，methods
  attached(){},//拿不到实例的UUID
  dettached(){},//钩子触发顺序与元素在文档位置一致
  onClick(){}
})
//小米（快应用都是由小米提供技术方案）
export {
   props: {},//基本与百度差不多
   onInit(){},
   onReady(){},
   onDestroy(){},
   methods: {
      onClick(){}
   }
}
```

从内部实现来看，BAT 都是走迷你React虚拟DOM， 快应用走迷你 vue虚拟DOM， 但支付宝的实现不好，钩子的触发顺序是随机的。因此在非随机的三种中，我们内部有一个迷你React, anu，产生的组件实例放进一个队列中，而BTM （百度，微信，小米）的created/onInit钩子再逐个再出来，执行setData实现视图的更新。而支付宝需要在编译层，为每个自定义组件标签添加一个UUID ，然后在didMount匹配取出。


```javascript
//anu 
onBeforeRender(fiber){
   var type = fiber.type;
   var reactInstances = type.reactInstances;
   var instance = fiber.stateNode;
   if(!instance.wx && reactInstances){
     reactInstances.push(instance)
   }
}

//BTM的created/onReady  <anu-dog></anu-dog>
created(){
   var reactInstances = type.reactInstances;
   var reactInstance = reactInstances.shift();
   reactInstance.wx = this;
   this.reactInstance = reactInstance;
   updateMiniApp(reactInstance)
}

//支付宝  <anu-dog instanceUid="{{'i32432' }}"></anu-dog>
didMount(){
  var reactInstances = type.reactInstances;
  var uid = this.props.instanceUid;
  for (var i = reactInstances.length - 1; i >= 0; i--) {
      var reactInstance = reactInstances[i];
      if (reactInstance.instanceUid === uid) {
          reactInstance.wx = this;
          this.reactInstance = reactInstance;
          updateMiniApp(reactInstance);
          reactInstances.splice(i, 1);
          break;
      }
  }
}

```
其实如果一个页面的数据量不大，template标签实现的组件机制比自定义组件的性能要好，自定义组件标签会对用户的属性根据props配置项进行过滤，
还要传入slot，启动构造函数等等。但数据量大，自定义组件机制由于能实现局部更新，性能就反超了。

但支付宝是个例，由于它延迟到在didMount钩子才更新数据，即视图出来了又要刷新视图，比其他小程序多了一次rerender与伴随而来的reflow。

快应用就更麻烦些，主要有以下问题

1. 快应用要求像vue那样三种格式都放在同一个文件中，但script标签是无法export出任何东西，于是我只好将组件定义单独拆到另一个文件， 才搞定引用父类的问题。

2. 快应用在标签的使用上更为严格，文本节点必须放在a, span, text, option这4种标签中，实际上span的使用限制还严厉些，于是我们在编译时，只用到a, text, option。而a是对标BAT的navigator，因此一般也用不到。

3. 最大的问题是对CSS支持太差，比如说不支持`display: block, display: line`, 不支持浮动，不支持相对绝对定位，不支持`.class1.class2`的写法……  

4. API也比BAT的API少这么多东西，兼容起来非常吃力。

![nanachi](1538220971726.jpeg)
