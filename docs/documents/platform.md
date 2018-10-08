# 按平台打包业务代码

某些情况下，业务代码中，可能需要差异化打包不同平台的代码，娜娜奇提供环境变量process.env.ANU_ENV来识别不同平台。在编译前，ANU_ENV变量已静默配置。

```jsx
componentDidMount(){
    let ANU_ENV = process.env.ANU_ENV;
    if(ANU_ENV === 'wx'){
        //微信小程序业务逻辑
    }else if(ANU_ENV === 'ali'){
        //支付宝小程序业务逻辑
    }else {
        
    }
}
```