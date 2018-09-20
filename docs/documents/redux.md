# Redux

在React系统中，数据流动是单向的，因此下面组件更新，要求上面的组件做一些事情比较艰难，因此才有了Redux这样的框架。

这里推荐使用rematch， rematch与国内的dva很像，但语法糖少很多。语法糖在微信中的使用成本很大，会添加大量转译代码，而微信小程序又有大小限制。

如果不用rematch, 裸写redux，你又得装一大堆插件来搞定异步的问题，这也要花大量代码。。。

在《去哪儿》模板中，提供了redux的使用方式，主要涉及@rematch/core, redux, react-redux这三个依赖。@rematch/core可能安装不成功，
手动再装一下这个依赖就行了
```jsx
yarn add @rematch/core
```

我们需要在app.js添加一行

```jsx
React.applyAppStore(store)
```
React.applyAppStore是一个魔法方法，相当于在所有页面上都为你的根组件外面包了一个`<Provider>`, Provider就是react-redux的类，会帮你将store往下传。


store是一个本地数据库，你可以用React 来创建也可以用rematch创建。
```javascript
import { init } from '@rematch/core';
import count from './countModel';
import person from './personModel';
import dog from './dognModel';


//将所有模型放入全局store中
const store = init({
    models: { 
        count,
        person,
        dog
     }
});

export default store;
```
countModel大致如下，不需要任何依赖，更多说明请到github搜rematch
```javascript
var count = {
    state: 0, // initial state
    reducers: {
        // handle state changes with pure functions
        increment(state, payload) {
            return state + payload;
        }
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        async incrementAsync(payload) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            dispatch.count.increment(payload);
        }
    })
};
export default count;
```

然后你想在某个页面应用store,这样用一下页面组件

```jsx
import React from '@react';
import { connect } from 'react-redux';//注意引入


class P extends React.Component {
    constructor(props) {
        super(props);
        this.increment = props.increment;
        
        this.incrementAsync = props.incrementAsync;
    }
    render(){
        return <div>
            <p>请先安装@rematch/core redux react-redux</p>
            <p>{this.props.count}</p>
            <button onClick={this.increment} >+1</button>
        </div>;
    }
}

const mapState = state => ({
    count: state.count
});
  
const mapDispatch = ({ count: { increment, incrementAsync }}) => ({
    increment: () => increment(1),
    incrementAsync: () => incrementAsync(1)
});


// connect方法必须返回与组件类名一样的变量名，它应该在export default语句前
// eslint-disable-next-line
P = connect(mapState, mapDispatch)(P);
export default P;
```