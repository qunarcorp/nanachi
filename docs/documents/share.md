# 转发分享

小程序寄生在大流量的App中，因此转发共享功能非常重要，能实现病毒性传播。

小程序的页面顶部都有一个转发按钮，想激活它，需要在当前的页面实例添加一个onShareAppMessage方法，如果没有那么它就到app.js找全局的onGlobalShare方法。

```javascript
// pages/pagexx/index.js
import React from '@react';
class P extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'this is first line\nthis is second line'
        };
    }

    onShareAppMessage() {
            var navigateToUrl = '/pages/train/index/index';
            return {
                title: '预订火车票 - 去哪儿旅行',
                imageUrl: 'https://s.qunarzz.com/open_m_train/miniprogram/aliShare.jpg',
                path: navigateToUrl
            };
    }

    remove() {
        var textAry = this.state.text.split('\n');
        if (!textAry.length) return;
        textAry.pop();

        this.setState({
            text: textAry.join('\n')
        });
    }

    render() {
        return (
            <div class="container">
                <div class="item">
                    <h2 class="item-list-hd">progress</h2>
                    <div class="btn-area">
                        <progress percent="20" show-info />
                        <progress percent="40" show-info stroke-width="12" />
                        <progress percent="60" show-info color="pink" />
                        <progress percent="80" show-info active />
                    </div>
                </div>
            </div>
        );
    }
}

export default P;
```

app.js

```javascript
class Demo extends React.Component {
    config = {
        window: {
            backgroundTextStyle: 'light',
            // navigationBarBackgroundColor: '#0088a4',
            navigationBarTitleText: 'mpreact',
            navigationBarTextStyle: '#fff'
        },
        tabBar: {
            'color': '#929292',
            'selectedColor': '#00bcd4',
            'borderStyle': 'black',
            'backgroundColor': '#ffffff',
            'list': [
                {
                    'pagePath': 'pages/index/index',
                    'iconPath': 'assets/image/homepage_normal.png',
                    'selectedIconPath': 'assets/image/homepage_select.png',
                    'text': '首页',
                    'name': 'Home',
                },
                {
                    'pagePath': 'pages/demo/question/index/index',
                    'iconPath': 'assets/image/question_normal.png',
                    'selectedIconPath': 'assets/image/question_select.png',
                    'text': '问答社区',
                    'name': 'questionAndAnswer'
                },
                {
                    'pagePath': 'pages/demo/userCenter/index',
                    'iconPath': 'assets/image/uc_normal.png',
                    'selectedIconPath': 'assets/image/uc_select.png',
                    'text': '我的',
                    'name': 'My'
                }
            ]
        }
    };
    globalData = {
        ufo: 'ufo'
    };
    onGlobalShare() {
        var navigateToUrl = '/pages/index/index';
        return {
            title: '预订火车票 - 去哪儿旅行',
            imageUrl: 'https://s.qunarzz.com/open_m_train/miniprogram/aliShare.jpg',
            path: navigateToUrl
        };
    };
    onLaunch() {
        // eslint-disable-next-line
        console.log('App launched');
    },
    //快应用想实现 分享转发， 关于， 保存桌面
    onShowMenu(pageInstance, app){
         let ANU_ENV = process.env.ANU_ENV;//wx ali bu quick
         if(ANU_ENV === 'quick'){
            var api = React.api
            api.getSystemInfo({
                success: function(appInfo){
                    showActionSheet({
                        itemList: ['转发', '保存到桌面', '关于', '取消'],
                        success: function (ret) {
                            switch (ret.index) {
                                case 0: //分享转发
                                    var fn = pageInstance.onShareAppMessage || app.onGlobalShare;
                                    var obj = fn && fn();
                                    if (obj){
                                        obj.success = function(a){
                                           console.log(a, '分享成功')
                                        }
                                        obj.fail = function(a){
                                           console.log(a, '分享失败')
                                        }
                                        api.share(obj);
                                    }
                                    break;
                                case 1:
                                    // 保存桌面
                                    api.createShortcut();
                                    break;
                                case 2:
                                    // 关于
                                    api.redirectTo({
                                        url: `pages/about/index?brand=${appInfo.brand}&version=${appInfo.version}`
                                    });
                                    break;
                                case 3:
                                    // 取消
                                    break;
                            }
                        }
                     });
                  }
               });
            }
        }
    }
}
//这样写相当于为每一个页面组件的外面都加上一个<Provider />，如果你想在页面上用到store里的数据，
//需要用react-redux的connect方法包一下，详见pages/demo/syntax/redux
//React.applyAppStore(store);
// eslint-disable-next-line
export default App(new Demo());
```