# 页面参数的获取

在小程序中，想获取上一个页面跳转后带过来的参数是非常容易的。微信，字节跳动，支付宝，百度小程序直接利用onShow方法，就可以获取参数对象。或者在React生命周期钩子中访问this.props.query获取

```jsx
import React from '@react';
import Welcome from '@components/Welcome/index';
import './index.scss';
class P extends React.Component {
    componentDidMount() {
        // eslint-disable-next-line
       console.log('page did mount!', this.props.query);
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

注意：华为快应用比较特别，是不能直接拿到页面参数，需要我们在app.js与页面上做一些配置，详见[这里](./huaweiQuery.md)