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

tap 事件相当于 PC 端的 `click` 事件，因此大家可以用 `onClick` 代替 `onTap`, 娜娜奇会友好地帮你转换成 `onTap`.

## 事件对象

娜娜奇帮你抹平了 PC 与小程序的差异，小程序原来将这么特殊属性放在 `event.detail` 对象上，现在都放在 `target` 上。并且还添加了 stopPropagation 与 `preventDefault()` 方法。

注意 `stopPropagation()` 是没有效果的，你想并且冒泡还需要用 `catchClick` 的方式来绑定事件。

## 事件回调

事件回调本身必须定义在类的原型里，不能通过 `props` 传递进来。

## 注意事项

定义了事件的标签，会自动添加`data-key`,`data-class-uid`, `data-instance-uid`这三个属性，请不要自行添加这三个属性
