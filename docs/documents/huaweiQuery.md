# 华为快应用获取页面参数

华为快应用是无法获取页面参数，我们需要给页面添加一个protected对象。但我们又不可能每个页面都添加这个对象，
因此我们提供下面的方式给用户添加参数。

在app.js添加一个静态对象globalQuery, 表示对每个页面都尝试参加它里面的key

```jsx
class Global extends React.Component {
    globalData = {}
    static config = {
        window: {
            navigationBarBackgroundColor: '#00afc7',
            backgroundTextStyle: 'light',
            navigationBarTitleText: 'nanachi',
            navigationBarTextStyle: 'white'
        }
    };
    static globalQuery = { //这里的值是随意的
      a: 1, 
      b: 1
    }
}
```

在某个添加一个静态对象pageQuery, 表示对此页面都尝试参加它里面的key

```jsx
import React from '@react';
import { GlobalTheme } from '@common/GlobalTheme/index'; //@common 别名在package.json中配置
import Layout from '@components/Layout/index';
import AnotherComponent from '@components/AnotherComponent/index';
import './index.scss';
class P extends React.Component {
    state = {
        anyVar: { color: 'red' }
    };
    static pageQuery = {
       c: 1
    }
    componentDidMount() {
        // eslint-disable-next-line
        console.log('page did mount!', this.props.query);
        //由于我们在app.js指定了要获取a,b参数，在页面又指定获取c参数，因此这对象里面有a,b,c三个key
    }
    render() {
        console.log(this.state.anyVar, '!!')
        return (<div class="page" >
            <GlobalTheme.Provider value={this.state.anyVar} >
                <Layout>
                    <AnotherComponent />
                </Layout>
            </GlobalTheme.Provider>
        </div>
        );
    }
}

export default P;
```