# 事件系统

小程序有两种绑定事件的方式。

- `bindtap` 绑定一个会冒泡的 `tap` 事件
- `catchtap` 绑定一个不会冒泡的 `tap` 事件

```jsx
<view bindtap="eventName" />
```

nanachi 为了大家方便，还是换回大家熟悉的风格，但不能冒泡的限制还没有搞定，因此也是两种绑定风格。

- `onTap` 绑定一个会冒泡的 `tap` 事件
- `catchTap` 绑定一个不会冒泡的 `tap` 事件

```jsx
<div onClick={this.clickHandle.bind(this, 111)} />
```

tap 事件相当于 PC 端的 `click` 事件，因此建议大家用 `onClick` 代替 `onTap`, 娜娜奇会友好地帮你转换成 `onTap`.

## 事件对象

由于小程序存在千差万别的差别，它的事件对象没有像PC有那么多属性与方法，最大的区别是没有`stopPropagation` 与 `preventDefault`。

但娜娜奇会帮你抹平了 PC 与小程序的差异， 为它添加上伪装的 `stopPropagation` 与 `preventDefault()` 方法。

注意 `stopPropagation()` 是没有效果的，你想并且冒泡还需要用 `catchClick` 的方式来绑定事件。

小程序事件对象的属性如下：

```jsx
{
    target,//里面有dataset
    pageX,
    pageY,
    value, //不一定有，但input, change事件有
    timeStamp,
    type,
    stopPropagation,
    preventDefault,
    //还可能有其他属性，不同的事件类型会产生额外的属性
}
```

## 事件回调

事件回调本身必须定义在类的原型里，不能在视图中使用 `this.props.onClick` ,只能`this.onClick`

## 注意事项

定义了事件的标签，可能会自动添加`data-beacon-uid`,  `data-key`, `data-class-uid`, `data-instance-uid`这些属性，注意不要与它们冲突

> 2018.11.14起 定义了事件的标签， 只会添加上data-beacon-uid属性，后面三者不再添加，从而减少视图的体积   

> input标签 统一使用onChange事件，不要用onInput