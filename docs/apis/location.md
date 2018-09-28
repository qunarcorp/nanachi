# 位置

## getLocation(Object object)

获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。


参数都不一样的

## openLocation(Object object)

内置地图查看位置

**参数**

Object object

| 属性     | 类型          | 默认值 | 是否必须 | 说明                                             |
| -------- | ------------- | ------ | -------- | ------------------------------------------------ |
| longitude  | Number     |        | 是      | 经度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系                           |
| latitude     | Number      |        |是       | 纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系                           |
| scale | Number      |    18    | 否       | 缩放比例，范围5~18 |
| name  | string      |        | 否       | 位置名                           |
| address     | string      |        | 否       | 地址的详细说明                           |
| success  | function      |        | 否       | 接口调用成功的回调函数                           |
| fail     | function      |        | 否       | 接口调用失败的回调函数                           |
| complete | function      |        | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |


## chooseLocation(Object object)

打开地图选择位置

**参数**

Object object

| success  | function      |        | 否       | 接口调用成功的回调函数                           |
| fail     | function      |        | 否       | 接口调用失败的回调函数                           |
| complete | function      |        | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |

**object.success 回调函数**

Object res

| 属性     | 类型          | 默认值 | 是否必须 | 说明                                             |
| -------- | ------------- | ------ | -------- | ------------------------------------------------ |
| name  | string      |        | 否       | 位置名                           |
| address     | string      |        | 否       | 地址的详细说明                           |
| longitude  | String     |        | 是      | 经度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系                           |
| latitude     | String      |        |是       | 纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系                           |

