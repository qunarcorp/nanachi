

## QunarLoading

使用方法

```javascript
import React from '@react';
import QunarLoading from '@components/QunarLoading/index';
// 事件
class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      networkData: {
        status: -3,
        loadingDesc: '加载中...',
        showButton: true
      }
    };
  }

  componentDidMount() {
    let selfState = this.state;
    let self = this;
    setTimeout(
      function() {
        selfState.networkData.status = 0;
        self.setState({ ...selfState }); //自动隐藏
      }.bind(this),
      5000
    );
  }

  render() {
    return (
      <div class="container">
        <div>加载</div>
        <QunarLoading networkData={this.state.networkData} />
      </div>
    );
  }
}
export default Data;
```

### API

属性说明如下：


| 属性     | 类型     | 说明                                             |
| -------- | -------- |  ------------------------------------------------ |
| networkData   | Object    |         网络状态信息                    | 
| networkRetry  | function   | 触发重新加载                      |


**networkData Object**


| 属性     | 类型   | 是否必须 |默认值| 说明                                             |
| -------- | ------|-- |  -----|------------------------------------------- |
| status   | number    |      否| 4| 网络状态码      <br> 1 toast系统默认加载中 背景白色 <br>   2 toast系统默认加载中 背景透明 <br>   3 dots加载中mini 背景透明 <br>    4 qunar大图骆驼加载中 背景白色 <br>   0 成功 <br>  -1 网络连接失败 <br> -2 没有数据 <br> -3 提示信息   | 
| loadingDesc  | string  |否 | 加载中...|loading描述(可选)                     |
| showButton  | boolean  |否 | true|显示重新加载 button, 默认为true                     |


**status: -3 提示信息**

<img src="../images/loading_3.png" width="50%"/>

**status: -2 没有数据 和 status: -1 网络连接失败**

<img src="../images/loading_3.png" width="50%"/>

**status: 1 加载中 toast系统默认   背景白色**

<img src="../images/loading-1.png" width="50%"/>

**status: 2 加载中 toast系统默认   背景透明**

<img src="../images/loading-2.png" width="50%"/>

**status: 3 加载中 dots加载中mini 背景透明**

<img src="../images/loading-3.png" width="50%"/>

**status: 4 加载中 qunar大图骆驼  背景白色**

<img src="../images/loading-4.png" width="50%"/>

