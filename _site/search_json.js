window.ydoc_plugin_search_json = {
  "文档": [
    {
      "title": "介绍",
      "content": "在 React 转小程序方案出来之前，市面上的方案都是基于 Vue 的, 少有的基于 React 的方案问题都比较多。因此我们实现了自己的 React 转小程序的方案，一来，我们的技术栈可以继续沿袭 React，其次，我们也不用委服于原生小程序的淫威（原生小程序真的好原始好原始，要啥都没有，连组件继承都没有）。小程序页面通常由 wxml, js, json, wxss 等文件组成。wxml 是一个很弱的字符串模板，它可以通过 {{}} 标识符往里面填数据，但它填数据的地方不支持使用函数；它支持绑定事件，但事件的地方只能指定函数名，不能绑定参数；支持类似于 script 标签的 xws，但仔细使用你会发现它是一个笑话。因此，我们引入 JSX，它给予我们更大的自由度，而不是光顾着自己编译得如何舒服。并且它支持大家熟悉的 HTML 标签，不用强逼自己使用 view 与 text.js 文件是定义组件的地方，原小程序提供了 Component(), Page() 这两个方法来创建组件与页面。但组件与页面的生命周期名字不统一，并且组件不能继承，因此我们还是使用 React 那一套组件机制吧。json 文件用于配置页面的标题栏或组件的本身的依赖关系，这些在 nanachi 中都是由转译器帮你生成，不用你费神。wxss 是小程序的样式表文件，我们提供了更强大的选择，sass 和 less。如果你的小程序已开发了一半，只想在局部页面试用一下娜娜奇，这个也支持！app.json 允许你只编译局部页面。娜娜奇为你提供更多可能性与灵活性，更具体的使用详看其他使用说明。快速开始",
      "url": "/documents/intro.html",
      "children": []
    },
    {
      "title": "快速开始",
      "content": "",
      "url": "/documents/install.html",
      "children": [
        {
          "title": "前置要求",
          "url": "/documents/install.html#前置要求",
          "content": "前置要求下载并安装微信开发者工具\n本地 Node.js 版本大于 7\n"
        },
        {
          "title": "安装",
          "url": "/documents/install.html#安装",
          "content": "安装git clone git@github.com:RubyLouvre/anu.git 或git clone https://github.com/RubyLouvre/anu.git\n命令行定位到packages/cli目录下，执行npm link 如果之前装过要先npm unlink\n使用mpreact  创建工程\n定位到   目录下 mpreact start 开始监听文件变化，\n用微信开发工具打开当中的dist目录，自己在src目录中进行开发\n详见 https://rubylouvre.github.io/nanachi/index.html 或  https://github.com/RubyLouvre/anu/tree/master/packages/render/miniapp拼多多模板，请打开右上角 “>>” 详情，  不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书 打上勾=============另一种新的安装方式（还在测试中）执行以下命令：npm i -g nanachi-cli\n# if you are using yarn\nyarn global add nanachi-cli\n即可全局安装 nanachi。"
        },
        {
          "title": "初始化项目",
          "url": "/documents/install.html#初始化项目",
          "content": "初始化项目执行一下命令可以在当前目录新建一个项目：nanachi init回答数个问题即可生成一个新项目。"
        },
        {
          "title": "启动项目",
          "url": "/documents/install.html#启动项目",
          "content": "启动项目初始化之后在项目根目录中执行 nanachi start 命令，即可进入开发模式。注意，微信开发者工具在选择目录时需要选择项目根目录下的 dist/ 目录。"
        },
        {
          "title": "编译项目",
          "url": "/documents/install.html#编译项目",
          "content": "编译项目在项目根目录执行 nanachi build 即可编译项目至 dist/ 目录下。"
        },
        {
          "title": "开发计划",
          "url": "/documents/install.html#开发计划",
          "content": "开发计划nanachi未来将支持一键打包支付宝小程序，百度智能小程序，快应用。# 默认情况下打包成微信小程序nanachi build\n\n# 打包支付宝小程序\nnanachi build:ali\n\n# 打包百度只能小程序\nnanachi build:baidu\n\n# 打包快应用\nnanachi build:quick\n"
        }
      ]
    },
    {
      "title": "应用",
      "content": "在小程序中，一个应用由多个页面组成，一个页面由多个组件组成。项目根目录下的 app.js 最大的作用就是将里面所有以 ./pages/ 开头的依赖放到 app.json 中 pages 配置项中。其他配置项统一放在config对象中，详细配置列表参见这里如果在使用娜娜奇之前，已经开发了一半，一些组件是用小程序的自定义组件方式定义的，那么可以在usingComponents配置项中定义好。import React from '@react';import './pages/index/index';\nimport './pages/demo/base/index';\nimport './pages/demo/native/index/index';\nimport './app.less';\n\nclass Demo extends React.Component {\n    static config = {\n        window: {\n            backgroundTextStyle: 'light',\n            navigationBarBackgroundColor: '#0088a4',\n            navigationBarTitleText: 'mpreact',\n            navigationBarTextStyle: '#fff'\n        }\n    };\n    // 全局数据\n    globalData = {\n        ufo: 'ufo'\n    };\n    onLaunch() {\n        console.log('App launched');\n    }\n}\n\nApp(new Demo());\n",
      "url": "/documents/app.html",
      "children": []
    },
    {
      "title": "页面组件",
      "content": "页面定义在 pages 目录下。它必须是一个有状态的 React 组件。JSX 只能出现在 render() 方法里，它会编译成相应的 wxml 文件，因此不能使用 R React.createElement()代替 JSX。有关 JSX 的注意事项可以看这里。页面组件与components目录下的通用组件有一些特异点，它是多出了componentDidShow, componentDidHide这两个生命周期钩子，与onPullDownRefresh onReachBottom onPageScroll onShareAppMessage这些事件。并且在config中能指定tabBar与分享按钮。比如：import React from '@react';\nclass P extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      iconSize: [20, 30, 40, 50, 60, 70],\n      text: 'this is first line\\nthis is second line'\n    };\n  }\n  static config = {};\n\n  add() {\n    this.setState({\n      text: this.state.text + '\\nthis is new line'\n    });\n  }\n\n  remove() {\n    var textAry = this.state.text.split('\\n');\n    if (!textAry.length) return;\n    textAry.pop();\n\n    this.setState({\n      text: textAry.join('\\n')\n    });\n  }\n  componentWillMount() {\n    console.log('base componentWillMount');\n  }\n  componentDidMount() {\n    console.log('base componentDidMount');\n  }\n  render() {\n    return (\n      \n        \n          Icon\n          \n            {this.state.iconSize.map(function(item) {\n              return ;\n            })}\n          \n        \n      \n    );\n  }\n}\n\nexport default P;\n页面组件必须使用 es6 风格来引入依赖与导出自己。它的静态属性 config 会抽取出来生成对应的 JSON 配置对象，有关配置项可以看这里",
      "url": "/documents/page.html",
      "children": []
    },
    {
      "title": "通用组件",
      "content": "通用组件必须定义在 components 目录中，里面建一个文件夹与组件名同名，下面 index.js 就是你编写组件的地方。",
      "url": "/documents/component.html",
      "children": [
        {
          "title": "组件的样板",
          "url": "/documents/component.html#组件的样板",
          "content": "组件的样板import React from '@react';\nclass Animal extends React.Component {\n  constructor(props) {\n    super();\n    this.state = {\n      name: props.name,\n      age: props.age || 1\n    };\n  }\n\n  static defaultProps = {\n    age: 1,\n    name: 'animal'\n  };\n\n  changeAge() {\n    this.setState({\n      age: ~~(Math.random() * 10)\n    });\n  }\n\n  componentDidMount() {\n    console.log('Animal componentDidMount');\n  }\n\n  componentWillReceiveProps(props) {\n    this.setState({\n      name: props.name\n    });\n  }\n\n  render() {\n    return (\n      \n        名字：\n        {this.state.name} 年龄：\n        {this.state.age} 岁\n        换一个年龄\n      \n    );\n  }\n}\n\nexport default Animal;\n由于目录可能比较深，因此 nanachi 比较贴心地提供了两个默认的别名，@react 与 @components, @react 指向专门为小程序优化的 React, @components 指向开发目录下的 components 目录。JSX 只能出现在 render() 方法或无状态组件的函数体中。JSX 的所有填充数据必须带 this.props, this.state, this.context 前缀。render() 方法里不能出现 var/const/let 语句，只能出现 if 语句与三元表达式或 JSX。map() 方法调用的第一个参数最好使用匿名方法（因为这样会自动 bind this），否则它会自动添加上第二个参数 this  {this.state.iconSize.map(function(item) {\n    return ;\n  })}\n\n会变成  {this.state.iconSize.map(function(item) {\n    return ;\n  }, this)}\n\nJSX 禁止出现 instanceUid, classUid, eventUid, 这些是内部绑定事件时在编译阶段自动添加的。render方法的第一个语句只能元素节点，不能是三元表达式或if语句等表示逻辑性的东西错误的写法class Dog extends React.Component{  //....略\n  render(){\n    return this.props.xxx ? 分支1: 分支2\n  }\n}\n正确的写法class Dog extends React.Component{  //....略\n  render(){\n    return {this.props.xxx ? 分支1: 分支2}\n  }\n}\n原因是三元表达式会变成block标签，而快应用与自定义组件方式不支持顶层元素为template/block"
        }
      ]
    },
    {
      "title": "JSX",
      "content": "小程序的 wxml 只支持 view、text 与它的那些内置组件标签，娜娜奇可以让你直接使用 div, span, p, b, strong 等 HTML 标签。块状元素会转换成 view, 内联元素会转换为 text。如果你使用 React 方式定义组件，那么对应的标签名必须以大写开头。在小程序中，组件不支持包含其他标签，但我们的 React 组件可以充许包含其他标签或组件。有关循环，if, 组件套组件，render props 等用法，可以脚手架的 qunar 示例不支持switch语句如果想支持转换快应用，那么所有文本应该写text, a, optionp这三种标签内！\n快应用， 自带span标签，只能作为与的子组件错误的用法  我是文本\n\n正确的用法   我是文本\n   我是文本\n\n",
      "url": "/documents/jsx.html",
      "children": [
        {
          "title": "数据填充的使用",
          "url": "/documents/jsx.html#数据填充的使用",
          "content": "数据填充的使用错误的用法{this.data.content}正确的用法， 所有数据都只能来自this.props, this.state, this.context{this.state.content}如果这是一个无状态组件，则这样用function AA(props, context){   return {context.content}\n}\n"
        },
        {
          "title": "事件绑定的使用",
          "url": "/documents/jsx.html#事件绑定的使用",
          "content": "事件绑定的使用错误的用法点我正确的用法， 事件必须直接以this开头，来源于实例点我"
        },
        {
          "title": "map方法必须将this往里面传递, map的第一个参数不要用箭头函数",
          "url": "/documents/jsx.html#map方法必须将this往里面传递,-map的第一个参数不要用箭头函数",
          "content": "map方法必须将this往里面传递, map的第一个参数不要用箭头函数{this.state.list.map(function(el, index){\n   return {el.name}\n},this)\n}\n"
        },
        {
          "title": "render的使用",
          "url": "/documents/jsx.html#render的使用",
          "content": "render的使用错误的用法class A extends React.Component{  render(){\n    var a = this.props\n    return {a.content}\n  }\n}\n正确的用法class A extends React.Component{  render(){\n    return {this.props.content}\n  }\n}\n"
        }
      ]
    },
    {
      "title": "事件系统",
      "content": "小程序有两种绑定事件的方式。bindtap 绑定一个会冒泡的 tap 事件\ncatchtap 绑定一个不会冒泡的 tap 事件\nnanachi 为了大家方便，还是换回大家熟悉的风格，但不能冒泡的限制还没有搞定，因此也是两种绑定风格。onTap 绑定一个会冒泡的 tap 事件\ncatchTap 绑定一个不会冒泡的 tap 事件\ntap 事件相当于 PC 端的 click 事件，因此大家可以用 onClick 代替 onTap, 娜娜奇会友好地帮你转换成 onTap.",
      "url": "/documents/event.html",
      "children": [
        {
          "title": "事件对象",
          "url": "/documents/event.html#事件对象",
          "content": "事件对象娜娜奇帮你抹平了 PC 与小程序的差异，小程序原来将这么特殊属性放在 event.detail 对象上，现在都放在 target 上。并且还添加了 stopPropagation 与 preventDefault() 方法。注意 stopPropagation() 是没有效果的，你想并且冒泡还需要用 catchClick 的方式来绑定事件。"
        },
        {
          "title": "事件回调",
          "url": "/documents/event.html#事件回调",
          "content": "事件回调事件回调本身必须定义在类的原型里，不能通过 props 传递进来。"
        }
      ]
    },
    {
      "title": "async/await",
      "content": "nanachi可自由使用async/await语法import React from '@react';\nclass P extends React.Component {\n    constructor(){\n        super();\n        this.state = {\n            status: ''\n        };\n    }\n    say(){\n        return new Promise((resolve)=>{\n            setTimeout(()=>{\n                resolve('hello nanachi');\n            }, 2000);\n        });\n    }\n    async tapHander(){\n        this.setState({status: 'waiting...' });\n        let result = await this.say();\n        this.setState({\n            status: result\n        });\n    }\n    render() {\n        return (\n            \n                status: {this.state.status}\n                click me\n            \n        );\n    }\n}\n\nexport default P;\n",
      "url": "/documents/async.html",
      "children": []
    },
    {
      "title": "npm模块管理",
      "content": "针对小程序无法友好管理npm第三方模块问题，nanachi给与了最大限度支持，当文件中引入第三方npm模块，nanachi监听到后会自动安装，并且最小量打包你所依赖的npm模块。例如import fp from 'lodash/fp';打包后dist/npm/├── lodash\n│   ├── fp\n│   │   ├── _baseConvert.js\n│   │   ├── _mapping.js\n│   │   └── placeholder.js\n│   ├── fp.js\n│   └── lodash.min.js\n",
      "url": "/documents/npm.html",
      "children": []
    },
    {
      "title": "兼容",
      "content": "对于原生自定义组件兼容，只需要将原生组件配置到属性config里usingComponents字段，与微信小程序原生开发配置方式一致。class Animal extends React.component{    config = {\n        usingComponents: {\n            Tom: '/components/NativeComponentTom/index'\n        }\n    }\n    //other code\n    render(){\n        return (\n            \n                \n            \n        )\n    }\n}\n",
      "url": "/documents/support-native-component.html",
      "children": []
    },
    {
      "title": "Redux",
      "content": "在React系统中，数据流动是单向的，因此下面组件更新，要求上面的组件做一些事情比较艰难，因此才有了Redux这样的框架。这里推荐使用rematch， rematch与国内的dva很像，但语法糖少很多。语法糖在微信中的使用成本很大，会添加大量转译代码，而微信小程序又有大小限制。如果不用rematch, 裸写redux，你又得装一大堆插件来搞定异步的问题，这也要花大量代码。。。在《去哪儿》模板中，提供了redux的使用方式，主要涉及@rematch/core, redux, react-redux这三个依赖。@rematch/core可能安装不成功，手动再装一下这个依赖就行了yarn add @rematch/core我们需要在app.js添加一行React.applyAppStore(store)React.applyAppStore是一个魔法方法，相当于在所有页面上都为你的根组件外面包了一个, Provider就是react-redux的类，会帮你将store往下传。store是一个本地数据库，你可以用React 来创建也可以用rematch创建。import { init } from '@rematch/core';import count from './countModel';\nimport person from './personModel';\nimport dog from './dognModel';\n\n\n//将所有模型放入全局store中\nconst store = init({\n    models: { \n        count,\n        person,\n        dog\n     }\n});\n\nexport default store;\ncountModel大致如下，不需要任何依赖，更多说明请到github搜rematchvar count = {    state: 0, // initial state\n    reducers: {\n        // handle state changes with pure functions\n        increment(state, payload) {\n            return state + payload;\n        }\n    },\n    effects: (dispatch) => ({\n        // handle state changes with impure functions.\n        // use async/await for async actions\n        async incrementAsync(payload) {\n            await new Promise(resolve => setTimeout(resolve, 1000));\n            dispatch.count.increment(payload);\n        }\n    })\n};\nexport default count;\n然后你想在某个页面应用store,这样用一下页面组件import React from '@react';import { connect } from 'react-redux';//注意引入\n\n\nclass P extends React.Component {\n    constructor(props) {\n        super(props);\n        this.increment = props.increment;\n        \n        this.incrementAsync = props.incrementAsync;\n    }\n    render(){\n        return \n            请先安装@rematch/core redux react-redux\n            {this.props.count}\n            +1\n        ;\n    }\n}\n\nconst mapState = state => ({\n    count: state.count\n});\n  \nconst mapDispatch = ({ count: { increment, incrementAsync }}) => ({\n    increment: () => increment(1),\n    incrementAsync: () => incrementAsync(1)\n});\n\n\n// connect方法必须返回与组件类名一样的变量名，它应该在export default语句前\n// eslint-disable-next-line\nP = connect(mapState, mapDispatch)(P);\nexport default P;\n",
      "url": "/documents/redux.html",
      "children": []
    },
    {
      "title": "路由",
      "content": "路由器的能力是由 Page 的生命周期与 React.api 共同完成的。我们可以访问页面组件的 componentWillMount/DidMount 的 this.props 得到当前的信息，然后跳转。componentWillMount(){   console.log(this.props.path)\n   console.log(this.props.query)\n   React.api.navigateTo() // 或 redirectTo() 或 switchTab()\n}\n或者使用组件  示例： 点击跳转",
      "url": "/documents/router.html",
      "children": [
        {
          "title": "wx.redirectTo(Object object)",
          "url": "/documents/router.html#wx.redirecttoobject-object",
          "content": "wx.redirectTo(Object object)关闭当前页面，跳转到应用内的某个页面，但是不允许跳转到 tabbar 页面。\n\n属性\n类型\n默认值\n是否必填\n\n\n\n\nurl\nstring\n是\ntabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，不同参数用 & 分隔；如 'path?key=value&key2=value2'\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "wx.navigateTo(Object object)",
          "url": "/documents/router.html#wx.navigatetoobject-object",
          "content": "wx.navigateTo(Object object)保留当前页面，跳转到应用内的某个页面，但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。\n\n属性\n类型\n默认值\n是否必填\n\n\n\n\nurl\nstring\n是\n同 redirectTo\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "wx.switchTab(Object object)",
          "url": "/documents/router.html#wx.switchtabobject-object",
          "content": "wx.switchTab(Object object)跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面\n\n属性\n类型\n默认值\n是否必填\n\n\n\n\nurl\nstring\n是\n同 redirectTo\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "wx.navigateBack(Object object)",
          "url": "/documents/router.html#wx.navigatebackobject-object",
          "content": "wx.navigateBack(Object object)关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。\n\n属性\n类型\n默认值\n是否必填\n\n\n\n\nurl\nnumber\n是\n返回的页面数，如果 delta 大于现有页面数，则返回到首页。\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        }
      ]
    },
    {
      "title": "常见问题",
      "content": "暂时不支持 redux,请使用 React.getApp().globalData 来在页面间交换数据\nrender 里面不能定义变量,即不能出现 var, const, let 语句。render() 里只能使用 JSX 来描述结构，不能使用 React.createElement()。\n组件必须定义在 components 中\n页面引用了组件了，如果组件有样式，那么页面的样式表也要 import 这个组件的样式表\n为什么底部不出现 TabBar？ 这是小程序自身的 BUG，详见这里\n路由跳转时，如何拿到当前路径与参数，原来是通过 onLoad 方法拿，现在你可以通过任何一个页面组件的生命周期钩子，访问 this.props，里面就有 path 与 query 属性\n静态资源统一放到 src 目录下的 assets 目录下\nwxml 模板部分，如果使用了箭头函数，那么它里面不能出现 this 关键字\n不要在 props, state, context 里面放 JSX，因为 JSX 的结构容易出现环引用，导到微信小程序内部的 JSON.stringify 出错\nslot 机制与 render props 是有代价，它们会在 components/Fragments 目下添加许多当作桥梁用的碎片文件，不要滥用\nrender props 机制只能用于有狀态组件，并且只应用于 render() 属性，只能传一个参数，参数只能是 this.state 或 this.props\n更多问题请到 GitHub 提 Issue。",
      "url": "/documents/questions.html",
      "children": []
    },
    {
      "title": "各种小程序的差异点",
      "content": "\n\n项目\n微信小程序\n百度小程序\n支付小程序\n快应用\n\n\n\n\n命名空间\nwx\nswam\nmy\n无,需要 require 它提供的所有接口按 wx 形式封装\n\n\nif 指令\nwx:if\ns-if\na:if\nif\n\n\nfor 指令\nwx:for wx:for-index wx:for-item wx:key\n将wx:改成s-\n将wx:改成a:\nfor=\"(personIndex, personItem) in list\"\n\n\n容器标签\n存在\n存在\n存在\n存在\n\n\n事件绑定\nbind/catch[事件名全小写]=\"回调名\"\nbind/catch[事件名全小写]=\"回调名\"\non/catch[事件名驼峰]=\"回调名\"\non[事件名全小写]=\"回调名/回调(arguments)\"\n\n\n{{}}插值是否支持函数\n不支持\n不支持\n不支持\n支持\n\n\n模块中使用脚本\n\n\n\n\n\n\n模板文件后缀\nwxml\nswan\naxml\n没有独立的文件 放 template 中\n\n\n样式文件后缀\nwxss\ncss\nacss\n没有独立的文件 放 style 中，不需要处理 less,sass\n\n\ntemplate 包含 template\n支持\n不支持（听说正在修复）\n支持\n未知\n\n\ntemplate 的 data 是否支持...\n支持\n不支持（听说正在修复）\n支持\n未知\n\n\n缺省的组件(视图容器)\n\n\nmoveable-view、cover-view\n未知\n\n\n缺省的组件(基础内容)\n\n\nrich-text\n未知\n\n\n缺省的组件(导航)\n\n\nfunctional-page-navigator\n未知\n\n\n缺省的组件(媒体组件)\n\n\naudio、video、camera、live-player、live-pusher\n未知\n\n\nopen-data\n\n\n不支持\n未知\n\n\n样式单位 rpx 支持情况\n支持\n不支持（用 rem，最新的基础库版本已经支持）\n支持\n不支持\n\n\nAPIs 的这么多方法都不一样，可能以后针对不同的平台打包不同的 api.js 来屏蔽差异性",
      "url": "/documents/diff.html",
      "children": [
        {
          "title": "微信小程序与快应用差异(更新中...)",
          "url": "/documents/diff.html#微信小程序与快应用差异更新中...",
          "content": "微信小程序与快应用差异(更新中...)\n\n差异\n微信小程序\n快应用\n\n\n\n\n入口文件\napp.js, app.json\napp.ux, manifest.json\n\n\n结构，表现，行为组织方式\n分离：如 page.js, page.wxss, page.wxml\n聚合：类似 vue\n\n\n文件扩展名\n.js, .json, .wxml, .wxss\n.ux, .json\n\n\n路由注册\napp.json 中配置 pages 字段 例如\"pages\": [\"path1\", \"path2\"]\nmanifest.json 中配置 router 字段 详见文档\n\n\n路由跳转\n1.组件跳转[navigator 组件] 2.五种 js 跳转方式详见文档\n1. 组件跳转[a 组件] 2. router.push(OBJECT)\n\n\n获取应用实例\n调用函数：getApp()\n访问变量：this.$app\n\n\n模板逻辑渲染\n配置命名空间： 例如：wx:if/wx:elif/wx:else\n不需要 例如：if/elif/else\n\n\n钩子函数\nonLoad: 页面加载时触发\nonInit: 页面加载时触发\n\n\n\nonDestroy: 页面卸载\nonUnload: 页面卸载\n\n\n\nonBackPress：不支持\nonBackPress：支持\n\n\n\nonPageScroll：支持\nonPageScroll：不支持\n\n\n\nonPullDownRefresh： 支持\nonPullDownRefresh：不支持\n\n\n初始化状态(state)\ndata: {list: []}\nprivate: { list: [] }\n\n\n更新组件状态\nsetData 函数更新\n类 vue 语法\n\n\nUI 事件绑定方式\nbindEventName\n（on|@)EventName\n\n\nUI 事件自定义传参\n不支持\n支持\n\n\nAPI\n挂载在 wx 命名空间下：如 wx.showShareMenu(OBJECT)\n需引用相关模块：import share from '@system.share'\n\n\n组件机制Component 构造器可用于定义组件，调用 Component 构造器时可以指定组件的属性、数据、方法等。\n\n字段\n说明\n微信\n支付宝\n百度\n轻应用\n\n\n\n\nproperties\n接收的数据\n同名\n同名\n同名\nprops\n\n\ndata\n内部数据\n同名\n同名\n同名\nprivate\n\n\nmethods\n方法集合\n同名\n同名\n同名\n不存在\n\n\ncreated\n组件创建时\n同名\n同名\n同名\nonInit\n\n\nattached\n组件插入时\n同名\n同名\n同名\n不存在\n\n\nready\n组件完成布局后\n同名\n同名\n同名\nonReady\n\n\ndetached\n组件移除时\n同名\n同名\n同名\nonDestroy\n\n\n思路：properties定义两个属性 {props: Object, context: Object}created或onInit时，抓取小程序实例与对应的react实例，将props, state, context给小程序实例"
        },
        {
          "title": "页面组件在快应用的模拟",
          "url": "/documents/diff.html#页面组件在快应用的模拟",
          "content": "页面组件在快应用的模拟\nonShow onHide （大家都有）\n\n\n切换卡的支持，\n\n快应用需要外包 tabs 组件  这样唤起 onTabItemTap\nnavigationBarBackgroundColor\nnavigationBarTextStyle\nnavigationBarTitleText\n\n\n\n滚动下拉刷新相关的事件唤起\n\nonPullDownRefresh onReachBottom onPageScroll\nenablePullDownRefresh disableScroll\ntab-content 里面包含 list 组件与 refresh 组件\nlist.scroll--> onPageScroll\nlist.scrollbottom --> onReachBottom\nrefresh.refresh --> onPullDownRefresh\n\n\n\n转发按钮事件的唤起 onShareAppMessage\n\n如果用户定义了 onShareAppMessage，那么我们就添加 onMenuPress，这样右上角就会出现分享按钮\n或在编译期扫描　对其 onTap 事件加上 onShareAppMessage 钩子\n详见这里\n与 这里\n\n\n"
        },
        {
          "title": "官网",
          "url": "/documents/diff.html#官网",
          "content": "官网微信小程序  百度小程序  \n支付小程序 \n快应用 "
        }
      ]
    },
    {
      "title": "打包发布",
      "content": "在开始之前，提一下两种重要的概念。带JSX的页面组件与通用组件，它们分别放在pages与components目录下，它们具有巨大的转换成本（毕竟JSX会被提取出来转换成wxml, axml, swan或ux文件），还有一种不带JSX的纯JS文件，建议放在common目录,  当然还有一些通用的东西可以通过npm安装，但不要使用那些有JSX的第三方依赖。开发目录如下src   |--components\n   |    |--HotelDialog\n   |    |--HotelXXX\n   |    |--FlightYYY\n   |    └── ...\n   |--pages\n   |    |--hotel\n   |    |--flight\n   |    |--holiday\n   |    |--strategy\n   |    └── ...\n   |--common\n   |    |--hotel\n   |    |--flight\n   |    |--holiday\n   |    |--strategy\n   |    └── ...\n   |--app.js\ncomponents目录下为了扁平化管理，以事业部做前端+组件名的方式定义组子目录，目录下面就是index.js, index.scss或index.less。index.js里面必须是React组件，需要显式引入｀import React from \"@react\"`components目录下不要使用Fragments来命名子目录，这留给系统用。\npages目录下每个事业部各建一个目录，以事件部的名字命名，里面为index.js 及页面的目录，index.js要引入自己目录的所有页面，页面也以index.js命名，并且里面必须是有状态的React组件（转译器会转换成页面组件。）页面的index.js各种引入通用组件与common目录的依赖   |--pages   |    |--hotel\n            |--index.js //目录, import里面所有index.js\n            |--page1\n            |    |---index.js\n            |    └── index.scss\n            |--page2\n            |    |---index.js\n            |    └── index.scss\n            |--page3\n            |    |---index.js\n            |    └── index.scss\n            |--about\n            |    |---index.js\n            |    └── index.scss\ncommon目录下每个事业部各建一个目录，以事件部的名字命名，里面为各种JS文件，它们只是纯业务逻辑，没有JSX，只会经过es67的语法糖转换。app.js会引入pages每个事件的index.js, 只要稍微分析就得到整个应用全部有效的页面，放到app.json的pages数组中，或快应用的manifest.json的router对象的pages对象中",
      "url": "/documents/publish.html",
      "children": []
    },
    {
      "title": "关于",
      "content": "此项目由 YMFE 提供支持。",
      "url": "/documents/about.html",
      "children": []
    }
  ],
  "API": [
    {
      "title": "API",
      "content": "",
      "url": "/apis/index.html",
      "children": [
        {
          "title": "概述",
          "url": "/apis/index.html#概述",
          "content": "概述\n\nAPI\n类型\n说明\n\n\n\n\nReact.createElement\n内部 API\n创建元素, 框架在内部会帮你调用这个方法，业务代码中不要用它\n\n\nReact.createRef\n \n不存在\n\n\nReact.forwardRef\n \n不存在\n\n\nReact.api\n \n相当于微信的 wx, 支付宝小程序的 my，百度小程的 swan,为了方便编译，请不要在业务代码中直接用 wx,要用 React.api\n\n\nReact.getApp\n \n相当于微信的 getApp\n\n\nReact.getCurrentPages\n \n相当于微信的 geCurrentPage\n\n\nReact.Component\n \n所有组件的基类\n\n\nReact.toComponent\n内部 API\n用来创建组件\n\n\nReact.toRenderProps\n内部 API\n用来代替 render 属性对应的函数\n\n\nReact.toClass\n内部 API\n用来转译 es6 类\n\n\nReact.toStyle\n内部 API\n用来转译样式\n\n\nReact.toPage\n内部 API\n页面组件会自动在底部添加这方法\n\n\ncomponentDidShow\n页面组件的生命周期钩子\n相当于 onShow\n\n\ncomponentDidHide\n页面组件的生命周期钩子\n相当于 onHide\n\n\nonPageScroll\n页面组件的事件\n监听用户滑动页面事件\n\n\nonShareAppMessage\n页面组件的事件\n监听用户点击页面内转发按钮（ 组件 open-type=\"share\"）或右上角菜单“转发”按钮的行为，并自定义转发内容。注意：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮\n\n\nonReachBottom\n页面组件的事件\n监听用户上拉触底事件\n\n\nonPullDownRefresh\n页面组件的事件\n监听用户下拉刷新事件\n\n\ncomponentWillMount\n组件的生命周期钩子\n页面组件的 props 中有 path, query 等路由相关信息\n\n\ncomponentWillUpdate\n组件的生命周期钩子\n\n\n\ncomponentDidMount\n组件的生命周期钩子\n\n\n\ncomponentDidUpdate\n组件的生命周期钩子\n\n\n\ncomponentWillRecieveProps\n组件的生命周期钩子\n\n\n\ncomponentWillUnmount\n组件的生命周期钩子\n\n\n\nshouldComponentUpdate\n组件的生命周期钩子\n\n\n\ncomponentDidCatch\n组件的生命周期钩子\n\n\n\ngetSnapshotBeforeUpdate\n组件的生命周期钩子\n\n\n\ngetDerivedStateFromProps\n组件的生命周期钩子\n\n\n\ngetDerivedStateFromCatch\n组件的生命周期钩子\n\n\n\ngetChildContext\n组件的方法\n\n\n\nsetState\n组件的方法\n更新页面\n\n\nforceUpdate\n组件的方法\n更新页面\n\n\nrefs\n组件实例上的对象\n里面保存着子组件的实例（由于没有 DOM，对于普通标签来说， 虽然也能保存着它的虚拟 DOM )\n\n\nrender\n组件的方法\n里面必须使用 JSX ，其他方法不能存在 JSX，不能显式使用 createElement\n\n\n"
        }
      ]
    },
    {
      "title": "网络",
      "content": "",
      "url": "/apis/network.html",
      "children": [
        {
          "title": "request",
          "url": "/apis/network.html#request",
          "content": "request支付宝： 向指定服务器发起一个跨域 http 请求， 微信： 发起 HTTPS 网络请求参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nurl\nstring\n\n是\n开发者服务器接口地址\n都支持\n\n\nheader\n\bObject\n\n否\n设置请求的 header，header 中不能设置 Referer。 微信默认值： content-type 默认为 application/json 支付宝是 application/x-www-form-urlencoded\n都支持\n\n\nmethod\nString\nGET\n否\nHTTP 请求方法\n都支持\n\n\ndata\nObject\n\n否\n请求的参数\n都支持\n\n\ndataType\nString\njson\n否\n返回的数据格式\n都支持\n\n\nresponseType\nString\ntext\n否\n响应的数据类型\n微信\n\n\ntimeout\nNumber\n30000\n否\n超时时间\n支付宝\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n\nobject.success 回调函数Object res\n\n属性\n类型\n描述\n\n\n\n\ndata\nstring\n响应数据，格式取决于请求时的 dataType 参数\n\n\nstatusCode\nNumber\n开发者服务器返回的 HTTP 状态码\n\n\nheader\nObject\n开发者服务器返回的 HTTP Response Header\n\n\n"
        },
        {
          "title": "uploadFile(Object object)",
          "url": "/apis/network.html#uploadfileobject-object",
          "content": "uploadFile(Object object)将本地资源上传到开发者服务器参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nurl\nstring\n\n是\n开发者服务器接口地址\n都支持\n\n\nfilePath\n\bString\n\n是\n要上传文件资源的路径\n都支持\n\n\nname\nString\n\n是\n文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容\n都支持\n\n\nheader\nObject\n\n否\nHTTP 请求 Header，Header 中不能设置 Referer\n都支持\n\n\nformData\nObject\n\n否\nHTTP 请求中其他额外的 form data\n都支持\n\n\nfileType\nString\n\n是\n文件类型，image / video / audio\n支付宝\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n\nobject.success 回调函数Object res\n\n属性\n类型\n描述\n\n\n\n\ndata\nstring\n响应数据，格式取决于请求时的 dataType 参数\n\n\nstatusCode\nNumber\n开发者服务器返回的 HTTP 状态码\n\n\n"
        },
        {
          "title": "downloadFile(Object object)",
          "url": "/apis/network.html#downloadfileobject-object",
          "content": "downloadFile(Object object)下载文件资源到本地注意：请在服务端响应的 header 中指定合理的 Content-Type 字段，以保证客户端正确处理文件类型。\n参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nurl\nstring\n\n是\n下载资源的 url\n都支持\n\n\nheader\n\bObject\n\n否\nHTTP 请求的 Header，Header 中不能设置 Referer\n都支持\n\n\nfilePath\nString\n\n否\n指定文件下载后存储的路径\n微信\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n\nobject.success 回调函数Object res\n\n属性\n类型\n描述\n\n\n\n\ntempFilePath\nstring\n临时文件路径。如果没传入 filePath 指定文件存储路径，则下载后的文件会存储到一个临时文件\n\n\nstatusCode\nNumber\n开发者服务器返回的 HTTP 状态码\n\n\n"
        },
        {
          "title": "connectSocket(Object object)",
          "url": "/apis/network.html#connectsocketobject-object",
          "content": "connectSocket(Object object)创建一个 WebSocket 的连接；一个支付宝小程序同时只能保留一个 WebSocket 连接，如果当前已存在 WebSocket 连接，会自动关闭该连接，并重新创建一个新的 WebSocket 连接。（微信： 1.7.0 及以上版本，最多可以同时存在 5（小游戏）/2（小程序）个 WebSocket 连接。）参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nurl\nstring\n\n是\n下载资源的 url\n都支持\n\n\nheader\n\bObject\n\n否\nHTTP 请求的 Header，Header 中不能设置 Referer\n都支持\n\n\nprotocols\nArray. string\n\n否\n子协议数组\n微信\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n\n"
        },
        {
          "title": "onSocketOpen(function callback)",
          "url": "/apis/network.html#onsocketopenfunction-callback",
          "content": "onSocketOpen(function callback)监听 WebSocket 连接打开事件参数function callbackWebSocket 连接打开事件的回调函数React.api.connectSocket({  url: 'test.php'\n});\n\nReact.api.onSocketOpen(function(res) {\n  console.log('WebSocket 连接已打开！');\n});\n"
        },
        {
          "title": "closeSocket(Object object)",
          "url": "/apis/network.html#closesocketobject-object",
          "content": "closeSocket(Object object)关闭 WeSocket 连接参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ncode\nnumber\n1000（表示正常关闭连接）\n否\n一个数字值表示关闭连接的状态号，表示连接被关闭的原因。\n微信\n\n\nreason\n\bstring\n\n否\n一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。\n微信\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n\n"
        },
        {
          "title": "sendSocketMessage(Object object)",
          "url": "/apis/network.html#sendsocketmessageobject-object",
          "content": "sendSocketMessage(Object object)通过 WebSocket 连接发送数据，需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ndata\nstring/ArrayBuffer\n\n是\n需要发送的内容\n都支持\n\n\nisBuffer\n\bBoolean\n\n否\n如果需要发送二进制数据，需要将入参数据经 base64 编码成 String 后赋值 data，同时将此字段设置为true，否则如果是普通的文本内容 String，不需要设置此字段\n支付宝\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n\n"
        },
        {
          "title": "onSocketMessage(function callback)",
          "url": "/apis/network.html#onsocketmessagefunction-callback",
          "content": "onSocketMessage(function callback)监听WebSocket 接受到服务器的消息事件参数function callbackWebSocket 接受到服务器的消息事件的回调函数object.success 回调函数Object res\n\n属性\n类型\n描述\n\n\n\n\ndata\nstring/ArrayBuffer\n服务器返回的消息\n\n\n"
        },
        {
          "title": "onSocketError(function callback)",
          "url": "/apis/network.html#onsocketerrorfunction-callback",
          "content": "onSocketError(function callback)监听WebSocket 错误事件参数function callbackWebSocket 错误事件的回调函数"
        },
        {
          "title": "onSocketClose(function callback)",
          "url": "/apis/network.html#onsocketclosefunction-callback",
          "content": "onSocketClose(function callback)监听WebSocket 连接关闭事件参数function callbackWebSocket 连接关闭事件的回调函数"
        }
      ]
    },
    {
      "title": "交互",
      "content": "",
      "url": "/apis/interaction.html",
      "children": [
        {
          "title": "showModal(Object object)",
          "url": "/apis/interaction.html#showmodalobject-object",
          "content": "showModal(Object object)显示模态对话框参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ntitle\nstring\n\n是\n提示的标题\n都支持\n\n\ncontent\nstring\n\n是\n提示的内容\n都支持\n\n\nshowCancel\nboolean\ntrue\n否\n是否 \b 显示取消按钮\n微信,百度\n\n\ncancelText\nstring\n'取消'\n否\n取消 \b 按钮的文字，最多 4 个 \b 字符\n都支持\n\n\ncancelColor\nstring\n#000000\n否\n取消按钮的文字颜色，必须是 16 进制格式的颜色字符串\n微信\n\n\nconfirmText\nstring\n'确定'\n否\n确定 \b 按钮的文字，最多 4 个 \b 字符\n都支持\n\n\nconfirmColor\nstring\n#3cc51f，百度为#3c76ff\n否\n确认按钮的文字颜色，必须是 16 进制格式的颜色字符串\n微信，百度\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\nobject.success 回调函数参数Object res\n\n属性\n类型\n说明\n支持平台\n\n\n\n\nconfirm\nbooleam\n为 true 时，表示用户点击了确定按钮\n都支持\n\n\n代码示例React.api.showModal({  title: '温馨提示',\n  content: '您是否想查询快递单号:1234567890',\n  confirmText: '马上查询',\n  cancelText: '暂不需要',\n  success: result => {\n    console.log('result', result);\n  }\n});\n"
        },
        {
          "title": "showToast(Object object)",
          "url": "/apis/interaction.html#showtoastobject-object",
          "content": "showToast(Object object)显示一个弱提示，可选择多少秒之后消失参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ntitle\nstring\n\n是\n提示的内容\n都支持\n\n\nicon\nstring\n微信，百度：success，支付：none\n否\n图标\n都支持\n\n\nimage\nstring\n\n否\n自定义图标的本地路径，image 的优先级高于 icon\n微信，百度\n\n\nduration\nnumber\n微信： 1500， 支付宝，百度： 2000\n否\n提示的延迟时间\n都支持\n\n\nmask\nboolean\nfalse\n否\n是否显示透明蒙层，防止触摸穿透\n微信，百度\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例React.api.showToast({  icon: 'success',\n  title: '操作成功',\n  duration: 3000,\n  success: () => {}\n});\n"
        },
        {
          "title": "hideToast()",
          "url": "/apis/interaction.html#hidetoast",
          "content": "hideToast()"
        },
        {
          "title": "showLoading(Object object)",
          "url": "/apis/interaction.html#showloadingobject-object",
          "content": "showLoading(Object object)显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ntitle\nstring\n\n是\n提示的内容\n都支持\n\n\nmask\nboolean\nfalse\n否\n是否显示透明蒙层，防止触摸穿透\n微信，百度\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例React.api.showLoading({  title: '加载中...'\n});\n"
        },
        {
          "title": "hideLoading()",
          "url": "/apis/interaction.html#hideloading",
          "content": "hideLoading()"
        },
        {
          "title": "showActionSheet(Object object)",
          "url": "/apis/interaction.html#showactionsheetobject-object",
          "content": "showActionSheet(Object object)参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nitemList\nArray string\n\n是\n按钮的文字数组，数组长度最大为 6\n都支持\n\n\nitemColo\nstring\n#000000，百度为#3c76ff\n否\n按钮的文字颜色\n微信，百度\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例React.api.showActionSheet({  title: '支付宝-ActionSheet',\n  itemList: ['菜单一', '菜单二', '菜单三', '菜单四', '菜单五'],\n  success: res => {\n    const btn = res.index === -1 ? '取消' : '第' + res.index + '个';\n  }\n});\n"
        }
      ]
    },
    {
      "title": "导航",
      "content": "",
      "url": "/apis/nav.html",
      "children": [
        {
          "title": "navigateTo(OBJECT)",
          "url": "/apis/nav.html#navigatetoobject",
          "content": "navigateTo(OBJECT)保留当前页面，跳转到应用内的某个页面，使用 wx.navigateBack 可以返回到原页面。OBJECT 参数说明：\n\n参数\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nurl\nstring\n是\n需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例React.api.navigateTo({    url: '/example/xxx?key=value'\n});\n//test.jsPage({\n  componentDidMount: function(option) {\n    console.log(option.query);\n  }\n});\nTips: 目前页面路径最多只能十层，百度为5层。\n"
        },
        {
          "title": "redirectTo(OBJECT)",
          "url": "/apis/nav.html#redirecttoobject",
          "content": "redirectTo(OBJECT)关闭当前页面，跳转到应用内的某个页面。OBJECT 参数说明：\n\n参数\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nurl\nstring\n是\n需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例React.api.redirectTo({  url: 'test?id=1'\n});\n"
        },
        {
          "title": "reLaunch(OBJECT)",
          "url": "/apis/nav.html#relaunchobject",
          "content": "reLaunch(OBJECT)关闭所有页面，打开到应用内的某个页面。OBJECT 参数说明：\n\n参数\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nurl\nstring\n是\n需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例  React.api.reLaunch({    url: 'test?key=value'\n  });\n//test.jsPage({\n  componentDidMount: function(option) {\n    console.log(option.query);\n  }\n});\n"
        },
        {
          "title": "navigateBack(OBJECT)",
          "url": "/apis/nav.html#navigatebackobject",
          "content": "navigateBack(OBJECT)关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。OBJECT 参数说明：\n\n参数\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ndelta\nnumber\n1\n是\n返回的页面数，如果 delta 大于现有页面数，则返回到首页\n都支持\n\n\n代码示例// 注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码\n// 此处是A页面\nReact.api.navigateTo({\n  url: 'B?id=1'\n});\n\n// 此处是B页面\nReact.api.navigateTo({\n  url: 'C?id=1'\n});\n\n// 在C页面内 navigateBack，将返回A页面\nReact.api.navigateBack({\n  delta: 2\n});\n"
        }
      ]
    },
    {
      "title": "设置导航条",
      "content": "",
      "url": "/apis/nav-bar.html",
      "children": [
        {
          "title": "setNavigationBarTitle(OBJECT)",
          "url": "/apis/nav-bar.html#setnavigationbartitleobject",
          "content": "setNavigationBarTitle(OBJECT)动态设置当前页面的标题\n\n参数\n类型\n是否必须\n说明\n支持平台\n\n\n\n\ntitle\nstring\n是\n页面标题\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n"
        },
        {
          "title": "setNavigationBarColor(OBJECT)",
          "url": "/apis/nav-bar.html#setnavigationbarcolorobject",
          "content": "setNavigationBarColor(OBJECT)OBJECT 参数说明：\n\n参数\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nbackgroundColor\nstring\n是\n背景颜色值，有效值为十六进制颜色\n都支持\n\n\nfrontColor\nstring\n\n前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000\n微信，百度\n\n\nborderBottomColor\nstring\n否\n导航栏底部边框颜色，支持十六进制颜色值。若设置了 backgroundColor，则borderBottomColor 不会生效，默认会和 backgroundColor 颜色一样\n支付宝\n\n\nreset\nboolean\n否\n是否重置导航栏为支付宝默认配色，默认 false\n支付宝\n\n\nanimation\nObject\n否\n动画效果\n微信，百度\n\n\nanimation.duration\nNumber\n否\n动画变化时间，默认0，单位：毫秒\n微信，百度\n\n\nanimation.timingFunc\nString\n否\n动画变化方式，默认 linear\n支付宝\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n"
        },
        {
          "title": "showNavigationBarLoading()",
          "url": "/apis/nav-bar.html#shownavigationbarloading",
          "content": "showNavigationBarLoading()在当前页面显示导航条加载动画。"
        },
        {
          "title": "hideNavigationBarLoading()",
          "url": "/apis/nav-bar.html#hidenavigationbarloading",
          "content": "hideNavigationBarLoading()隐藏导航条加载动画。"
        }
      ]
    },
    {
      "title": "TabBar",
      "content": "",
      "url": "/apis/api.html",
      "children": [
        {
          "title": "switchTab(OBJECT)",
          "url": "/apis/api.html#switchtabobject",
          "content": "switchTab(OBJECT)跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面OBJECT 参数说明：\n\n参数\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nurl\nstring\n是\n需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例// app.json{\n  \"tabBar\": {\n    \"list\": [{\n      \"pagePath\": \"index\",\n      \"text\": \"首页\"\n    },{\n      \"pagePath\": \"other\",\n      \"text\": \"其他\"\n    }]\n  }\n}\nReact.api.switchTab({  url: '/index'\n})\n\n"
        }
      ]
    },
    {
      "title": "动画",
      "content": "",
      "url": "/apis/animation.html",
      "children": [
        {
          "title": "createAnimation(Object object)",
          "url": "/apis/animation.html#createanimationobject-object",
          "content": "createAnimation(Object object)创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。OBJECT 参数说明：\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nduration\nnumber\n400\n否\n动画持续时间，单位 ms\n都支持\n\n\ntimingFunction\nstring\n'linear'\n否\n动画的效果\n微信,支付宝\n\n\ndelay\nnumber\n0\n否\n动画延迟时间，单位 ms\n都支持\n\n\ntransformOrigin\nstring\n百度为‘50% 50% 0’\n否\n设置transform-origin\n都支持\n\n\ntimingFunction 的合法值：\n\n值\b\n说明\n\n\n\n\n'linear'\n动画从头到尾的速度是相同的\n\n\n'ease'\n动画以低速开始，然后加快，在结束前变慢\n\n\n'ease-in'\n动画以低速开始\n\n\n'ease-in-out'\n动画以低速开始和结束\n\n\n'ease-out'\n动画以低速结束\n\n\n'step-start'\n动画第一帧就跳至结束状态直到结束\n\n\n'step-end'\n动画一直保持开始状态，最后一帧跳到结束状态\n\n\n"
        },
        {
          "title": "animation",
          "url": "/apis/animation.html#animation",
          "content": "animation样式：\n\n方法\n参数\n说明\n\n\n\n\nopacity\nvalue\n透明度，参数范围 0~1\n\n\nbackgroundColor\ncolor\n颜色值\n\n\nwidth\nlength\n如果传入 number 则默认使用 px，可传入其他自定义单位的长度值\n\n\nheight\nlength\n同上\n\n\ntop\nlength\n同上\n\n\nleft\nlength\n同上\n\n\nbottom\nlength\n同上\n\n\nright\nlength\n同上\n\n\n旋转：\n\n方法\n参数\n说明\n\n\n\n\nrotate\ndeg\ndeg 范围 -180 ~ 180，从原点顺时针旋转一个 deg 角度\n\n\nrotateX\ndeg\ndeg 范围 -180 ~ 180，在 X 轴旋转一个 deg 角度\n\n\nrotateY\ndeg\ndeg 范围 -180 ~ 180，在 Y 轴旋转一个 deg 角度\n\n\nrotateZ\ndeg\ndeg 范围 -180 ~ 180，在 Z 轴旋转一个deg角度\n\n\nrotate3d\n(x, y , z, deg)\n同 transform-function rotate3d。\n\n\n缩放：\n\n方法\n参数\n说明\n\n\n\n\nscale\nsx,[sy]\n只有一个参数时，表示在 X 轴、Y 轴同时缩放 sx 倍；两个参数时表示在 X 轴缩放 sx 倍，在 Y 轴缩放 sy 倍\n\n\nscaleX\nsx\n在 X 轴缩放 sx 倍\n\n\nscaleY\nsy\n在 Y 轴缩放 sy 倍\n\n\nscaleZ\nsz\n在 Z 轴缩放 sy 倍\n\n\nscale3d\n(sx,sy,sz)\n在 X 轴缩放 sx 倍，在 Y 轴缩放sy 倍，在 Z 轴缩放 sz 倍\n\n\n偏移：\n\n方法\n参数\n说明\n\n\n\n\ntranslate\ntx,[ty]\n只有一个参数时，表示在 X 轴偏移 tx；两个参数时，表示在 X 轴偏移 tx，在 Y 轴偏移 ty，单位均为 px。\n\n\ntranslateX\ntx\n在 X 轴偏移 tx，单位 px\n\n\ntranslateY\nty\n在 Y 轴偏移 tx，单位 px\n\n\ntranslateZ\ntz\n在 Z 轴偏移 tx，单位 px\n\n\ntranslate3d\n(tx,ty,tz)\n在 X 轴偏移 tx，在 Y 轴偏移t y，在Z轴偏移 tz，单位 px\n\n\n倾斜：\n\n方法\n参数\n说明\n\n\n\n\nskew\nax,[ay]\n参数范围 -180 ~ 180。只有一个参数时，Y 轴坐标不变，X 轴坐标延顺时针倾斜 ax 度；两个参数时，分别在 X 轴倾斜 ax 度，在 Y 轴倾斜 ay 度\n\n\nskewX\nax\n参数范围 -180 ~ 180。Y 轴坐标不变，X 轴坐标延顺时针倾斜 ax度\n\n\nskewY\nay\n在参数范围 -180~180。X 轴坐标不变，Y 轴坐标延顺时针倾斜 ay 度\n\n\n矩阵变形:\n\n方法\n参数\n说明\n\n\n\n\nmatrix\n(a,b,c,d,tx,ty)\n 同transform-function matrix \n\n\nmatrix3d\nax\n 同transform-function matrix3d \n\n\n"
        },
        {
          "title": "动画队列",
          "url": "/apis/animation.html#动画队列",
          "content": "动画队列调用动画操作方法后需要要调用 step() 来表示一组动画完成，在一组动画中可以调用任意多个动画方法，一组动画中的所有动画会同时开始，当一组动画完成后才会进行下一组动画。step() 可以传入一个跟 my.createAnimation() 一样的配置参数用于指定当前组动画的配置。"
        },
        {
          "title": "Animation.step(Object object)",
          "url": "/apis/animation.html#动画队列-animation.stepobject-object",
          "content": "Animation.step(Object object)OBJECT 参数说明：\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nduration\nnumber\n400\n否\n动画持续时间，单位 ms\n都支持\n\n\ntimingFunction\nstring\n'linear'\n否\n动画的效果\n微信\n\n\ndelay\nnumber\n0\n否\n动画延迟时间，单位 ms\n都支持\n\n\ntransformOrigin\nstring\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n50% 50% 0\n否\n设置transform-origin\n都支持\n\n\ntimingFunction 的合法值：\n\n值\b\n说明\n\n\n\n\n'linear'\n动画从头到尾的速度是相同的\n\n\n'ease'\n动画以低速开始，然后加快，在结束前变慢\n\n\n'ease-in'\n动画以低速开始\n\n\n'ease-in-out'\n动画以低速开始和结束\n\n\n'ease-out'\n动画以低速结束\n\n\n'step-start'\n动画第一帧就跳至结束状态直到结束\n\n\n'step-end'\n动画一直保持开始状态，最后一帧跳到结束状态\n\n\n    showModal\n\n    var animation = React.api.createAnimation();    animation.rotate(90).translateY(10).step();\n    animation.rotate(-90).translateY(-10).step();\n        this.setState({\n            animation: animation.export()\n        });\n"
        }
      ]
    },
    {
      "title": "画布",
      "content": "",
      "url": "/apis/canvas.html",
      "children": [
        {
          "title": "createCanvasContext(canvasId)",
          "url": "/apis/canvas.html#createcanvascontextcanvasid",
          "content": "createCanvasContext(canvasId)创建 canvas 绘图上下文该绘图上下文只作用于对应 canvasId 的 \n入参\n\n参数\n类型\n说明\n\n\n\n\ncanvasId\nString\n定义在 上的 id\n\n\n返回值CanvasContext"
        },
        {
          "title": "CanvasContext.setTextAlign(string align)",
          "url": "/apis/canvas.html#canvascontext.settextalignstring-align",
          "content": "CanvasContext.setTextAlign(string align)设置文字的对齐入参\n\n参数\n类型\n说明\n\n\n\n\ntextAlign\nString\n枚举 \"left\" \"right\" \"center\" \"start\" \"end\"\n\n\n示例代码：  componentDidMount() {    const ctx = React.api.createCanvasContext('myCanvas');\n\n    ctx.setStrokeStyle('red');\n    ctx.moveTo(150, 20);\n    ctx.lineTo(150, 170);\n    ctx.stroke();\n\n    ctx.setFontSize(15);\n    ctx.setTextAlign('left');\n    ctx.fillText('textAlign=left', 150, 60);\n\n    ctx.setTextAlign('center');\n    ctx.fillText('textAlign=center', 150, 80);\n\n    ctx.setTextAlign('right');\n    ctx.fillText('textAlign=right', 150, 100);\n\n    ctx.draw();\n\n  }\n  render() {\n    return (\n      \n        \n      \n    );\n  }\n"
        },
        {
          "title": "CanvasContext.setTextBaseline(string textBaseline)",
          "url": "/apis/canvas.html#canvascontext.settextbaselinestring-textbaseline",
          "content": "CanvasContext.setTextBaseline(string textBaseline)设置文字的竖直对齐入参\n\n参数\n类型\n说明\n\n\n\n\ntextBaseline\nString\n枚举 \"top\" \"hanging\" \"middle\" \"alphabetic\" \"ideographic\" \"bottom\"\n\n\n"
        },
        {
          "title": "CanvasContext.setFillStyle(string color)",
          "url": "/apis/canvas.html#canvascontext.setfillstylestring-color",
          "content": "CanvasContext.setFillStyle(string color)设置填充色。默认颜色为 black。入参\n\n参数\n类型\n说明\n\n\n\n\ncolor\nColor\nGradient Object\n\n\n"
        },
        {
          "title": "CanvasContext.setStrokeStyle(string color)",
          "url": "/apis/canvas.html#canvascontext.setstrokestylestring-color",
          "content": "CanvasContext.setStrokeStyle(string color)设置描边颜色。默认颜色为 black。入参\n\n参数\n类型\n说明\n\n\n\n\ncolor\nColor\nGradient Object\n\n\n"
        },
        {
          "title": "CanvasContext.setShadow(number offsetX, number offsetY, number blur, string color)",
          "url": "/apis/canvas.html#canvascontext.setshadownumber-offsetx,-number-offsety,-number-blur,-string-color",
          "content": "CanvasContext.setShadow(number offsetX, number offsetY, number blur, string color)设定阴影样式如果没有设置，offsetX 默认值为 0， offsetY 默认值为 0， blur 默认值为 0，color 默认值为 black。\n入参\n\n参数\n类型\n范围\n说明\n\n\n\n\noffsetX\nNumber\n\n阴影相对于形状水平方向的偏移\n\n\noffsetY\nNumber\n\n阴影相对于形状竖直方向的偏移\n\n\nblur\nNumber\n0~100\n阴影的模糊级别，值越大越模糊\n\n\ncolor\nColor\n\n阴影颜色\n\n\n"
        },
        {
          "title": "CanvasContext.createLinearGradient(number x0, number y0, number x1, number y1)",
          "url": "/apis/canvas.html#canvascontext.createlineargradientnumber-x0,-number-y0,-number-x1,-number-y1",
          "content": "CanvasContext.createLinearGradient(number x0, number y0, number x1, number y1)创建一个线性的渐变颜色需要使用 addColorStop() 来指定渐变点，至少需要两个。\n\n\n参数\n类型\n说明\n\n\n\n\nx0\nNumber\n起点 x 坐标\n\n\ny0\nNumber\n起点 y 坐标\n\n\nx1\nNumber\n终点 x 坐标\n\n\ny1\nNumber\n终点 y 坐标\n\n\n代码示例：const ctx = React.api.createCanvasContext('awesomeCanvas');\nconst grd = ctx.createLinearGradient(10, 10, 150, 10);\ngrd.addColorStop(0, 'yellow');\ngrd.addColorStop(1, 'blue');\n\nctx.setFillStyle(grd);\nctx.fillRect(20, 20, 250, 180);\nctx.draw();\n"
        },
        {
          "title": "CanvasContext.createCircularGradient(number x0, number y0, number x1, number y1)",
          "url": "/apis/canvas.html#canvascontext.createcirculargradientnumber-x0,-number-y0,-number-x1,-number-y1",
          "content": "CanvasContext.createCircularGradient(number x0, number y0, number x1, number y1)创建一个圆形的渐变颜色需要使用 addColorStop() 来指定渐变点，至少需要两个。\n\n\n参数\n类型\n说明\n\n\n\n\nx\nNumber\n圆心 x 坐标\n\n\ny\nNumber\n圆心 y 坐标\n\n\nr\nNumber\n圆半径\n\n\n代码示例：const ctx = React.api.createCanvasContext('awesomeCanvas');\nconst grd = ctx.createCircularGradient(90, 60, 60);\ngrd.addColorStop(0, 'blue');\ngrd.addColorStop(1, 'red');\n\nctx.setFillStyle(grd);\nctx.fillRect(20, 20, 250, 180);\nctx.draw();\n"
        },
        {
          "title": "CanvasGradient.addColorStop(number stop, string color)",
          "url": "/apis/canvas.html#canvasgradient.addcolorstopnumber-stop,-string-color",
          "content": "CanvasGradient.addColorStop(number stop, string color)创建一个颜色的渐变点。小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染。\n需要使用 addColorStop() 来指定渐变点，至少需要两个\n\n\n参数\n类型\n说明\n\n\n\n\nstop\nNumber\n表示渐变点在起点和终点中的位置，范围 0 ～ 1\n\n\ncolor\nColor\n渐变点颜色\n\n\n"
        },
        {
          "title": "CanvasContext.setLineWidth(number lineWidth)",
          "url": "/apis/canvas.html#canvascontext.setlinewidthnumber-linewidth",
          "content": "CanvasContext.setLineWidth(number lineWidth)设置线条的宽度\n\n参数\n类型\n说明\n\n\n\n\nlineWidth\nNumber\n线条宽度，单位为 px\n\n\n"
        },
        {
          "title": "CanvasContext.setLineCap(string lineCap)",
          "url": "/apis/canvas.html#canvascontext.setlinecapstring-linecap",
          "content": "CanvasContext.setLineCap(string lineCap)设置线条的端点样式\n\n参数\n类型\n说明\n\n\n\n\nlineCap\nString\n线条的结束端点样式\n\n\nlineCap 的合法值\n\n值\n说明\n\n\n\n\nbutt\n向线条的每个末端添加平直的边缘\n\n\nround\n向线条的每个末端添加圆形线帽\n\n\nsquare\n向线条的每个末端添加正方形线帽\n\n\n"
        },
        {
          "title": "CanvasContext.setLineJoin(string lineJoin)",
          "url": "/apis/canvas.html#canvascontext.setlinejoinstring-linejoin",
          "content": "CanvasContext.setLineJoin(string lineJoin)设置线条的交点样式入参\n\n参数\n类型\n说明\n\n\n\n\nlineJoin\nString\n线条的结束端点样式\n\n\nlineJoin 的合法值\n\n值\n说明\n\n\n\n\nbevel\n斜角\n\n\nround\n圆角\n\n\nmiter\n尖角\n\n\n"
        },
        {
          "title": "CanvasContext.setMiterLimit(number miterLimit)",
          "url": "/apis/canvas.html#canvascontext.setmiterlimitnumber-miterlimit",
          "content": "CanvasContext.setMiterLimit(number miterLimit)设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当 setLineJoin() 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示入参\n\n参数\n类型\n说明\n\n\n\n\nmiterLimit\nNumber\n最大斜接长度\n\n\n"
        },
        {
          "title": "CanvasContext.rect(number x, number y, number width, number height)",
          "url": "/apis/canvas.html#canvascontext.rectnumber-x,-number-y,-number-width,-number-height",
          "content": "CanvasContext.rect(number x, number y, number width, number height)创建一个矩形路径。入参\n\n参数\n类型\n说明\n\n\n\n\nx\nNumber\n矩形左上角的 x 坐标\n\n\ny\nNumber\n矩形左上角的 y 坐标\n\n\nwidth\nNumber\n矩形路径宽度\n\n\nheight\nNumber\n矩形路径宽度\n\n\n"
        },
        {
          "title": "CanvasContext.fillRect(number x, number y, number width, number height)",
          "url": "/apis/canvas.html#canvascontext.fillrectnumber-x,-number-y,-number-width,-number-height",
          "content": "CanvasContext.fillRect(number x, number y, number width, number height)填充一个矩形入参\n\n参数\n类型\n说明\n\n\n\n\nx\nNumber\n矩形左上角的 x 坐标\n\n\ny\nNumber\n矩形左上角的 y 坐标\n\n\nwidth\nNumber\n矩形路径宽度\n\n\nheight\nNumber\n矩形路径宽度\n\n\n"
        },
        {
          "title": "CanvasContext.strokeRect(number x, number y, number width, number height)",
          "url": "/apis/canvas.html#canvascontext.strokerectnumber-x,-number-y,-number-width,-number-height",
          "content": "CanvasContext.strokeRect(number x, number y, number width, number height)画一个矩形(非填充)入参\n\n参数\n类型\n说明\n\n\n\n\nx\nNumber\n矩形左上角的 x 坐标\n\n\ny\nNumber\n矩形左上角的 y 坐标\n\n\nwidth\nNumber\n矩形路径宽度\n\n\nheight\nNumber\n矩形路径宽度\n\n\n代码示例：const ctx = React.api.createCanvasContext('awesomeCanvas');ctx.setStrokeStyle('blue');\nctx.strokeRect(20, 20, 250, 80);\nctx.draw();\n"
        },
        {
          "title": "CanvasContext.clearRect(number x, number y, number width, number height)",
          "url": "/apis/canvas.html#canvascontext.clearrectnumber-x,-number-y,-number-width,-number-height",
          "content": "CanvasContext.clearRect(number x, number y, number width, number height)清除画布上在该矩形区域内的内容入参\n\n参数\n类型\n说明\n\n\n\n\nx\nNumber\n矩形左上角的 x 坐标\n\n\ny\nNumber\n矩形左上角的 y 坐标\n\n\nwidth\nNumber\n矩形路径宽度\n\n\nheight\nNumber\n矩形路径宽度\n\n\n代码示例：  componentDidMount() {    const ctx = React.api.createCanvasContext('myCanvas');\n    ctx.setFillStyle('red');\n    ctx.fillRect(0, 0, 150, 200);\n    ctx.setFillStyle('blue');\n    ctx.fillRect(150, 0, 150, 200);\n    ctx.clearRect(10, 10, 150, 75);\n    ctx.draw();\n  }\n  render() {\n    return (\n      \n        \n      \n    );\n  }\n"
        },
        {
          "title": "CanvasContext.fill()",
          "url": "/apis/canvas.html#canvascontext.fill",
          "content": "CanvasContext.fill()对当前路径中的内容进行填充。默认的填充色为黑色。如果当前路径没有闭合，fill() 方法会将起点和终点进行连接，然后填充。代码示例：const ctx = React.api.createCanvasContext('myCanvas');ctx.moveTo(10, 10);\nctx.lineTo(100, 10);\nctx.lineTo(100, 100);\nctx.fill();\nctx.draw();\nfill() 填充的的路径是从 beginPath() 开始计算，但是不会将 fillRect() 包含进去。代码示例：const ctx = React.api.createCanvasContext('myCanvas');// begin path\nctx.rect(10, 10, 100, 30);\nctx.setFillStyle('yellow');\nctx.fill();\n\n// begin another path\nctx.beginPath();\nctx.rect(10, 40, 100, 30);\n\n// only fill this rect, not in current path\nctx.setFillStyle('blue');\nctx.fillRect(10, 70, 100, 30);\n\nctx.rect(10, 100, 100, 30);\n\n// it will fill current path\nctx.setFillStyle('red');\nctx.fill();\nctx.draw();\n"
        },
        {
          "title": "CanvasContext.stroke()",
          "url": "/apis/canvas.html#canvascontext.stroke",
          "content": "CanvasContext.stroke()画出当前路径的边框，默认颜色色为黑色。代码示例：const ctx = React.api.createCanvasContext('myCanvas');ctx.moveTo(10, 10);\nctx.lineTo(100, 10);\nctx.lineTo(100, 100);\nctx.stroke();\nctx.draw();\nstroke() 描绘的的路径是从 beginPath() 开始计算，但是不会将 strokeRect() 包含进去。代码示例：const ctx = React.api.createCanvasContext('myCanvas');// begin path\nctx.rect(10, 10, 100, 30);\nctx.setStrokeStyle('yellow');\nctx.stroke();\n\n// begin another path\nctx.beginPath();\nctx.rect(10, 40, 100, 30);\n\n// only stoke this rect, not in current path\nctx.setStrokeStyle('blue');\nctx.strokeRect(10, 70, 100, 30);\n\nctx.rect(10, 100, 100, 30);\n\n// it will stroke current path\nctx.setStrokeStyle('red');\nctx.stroke();\nctx.draw();\n"
        },
        {
          "title": "CanvasContext.beginPath()",
          "url": "/apis/canvas.html#canvascontext.beginpath",
          "content": "CanvasContext.beginPath()开始创建一个路径，需要调用 fill 或者 stroke 才会使用路径进行填充或描边"
        },
        {
          "title": "CanvasContext.closePath()",
          "url": "/apis/canvas.html#canvascontext.closepath",
          "content": "CanvasContext.closePath()关闭一个路径关闭路径会连接起点和终点\n如果关闭路径后没有调用 fill() 或者 stroke() 并开启了新的路径，那之前的路径将不会被渲染。\n代码示例：const ctx = React.api.createCanvasContext('myCanvas');ctx.moveTo(10, 10);\nctx.lineTo(100, 10);\nctx.lineTo(100, 100);\nctx.closePath();\nctx.stroke();\nctx.draw();\n"
        },
        {
          "title": "CanvasContext.moveTo(number x, number y)",
          "url": "/apis/canvas.html#canvascontext.movetonumber-x,-number-y",
          "content": "CanvasContext.moveTo(number x, number y)把路径移动到画布中的指定点，不创建线条。入参\n\n参数\n类型\n说明\n\n\n\n\nx\nNumber\n目标位置 x 坐标\n\n\ny\nNumber\n目标位置 y 坐标\n\n\n"
        },
        {
          "title": "CanvasContext.lineTo(number x, number y)",
          "url": "/apis/canvas.html#canvascontext.linetonumber-x,-number-y",
          "content": "CanvasContext.lineTo(number x, number y)lineTo 方法增加一个新点，然后创建一条从上次指定点到目标点的线。用 stroke() 方法来画线条\n入参\n\n参数\n类型\n说明\n\n\n\n\nx\nNumber\n目标位置 x 坐标\n\n\ny\nNumber\n目标位置 y 坐标\n\n\n代码示例：const ctx = React.api.createCanvasContext('myCanvas');ctx.moveTo(10, 10);\nctx.rect(10, 10, 100, 50);\nctx.lineTo(110, 60);\nctx.stroke();\nctx.draw();\n"
        },
        {
          "title": "CanvasContext.arc(number x, number y, number r, number sAngle, number eAngle, number counterclockwise)",
          "url": "/apis/canvas.html#canvascontext.arcnumber-x,-number-y,-number-r,-number-sangle,-number-eangle,-number-counterclockwise",
          "content": "CanvasContext.arc(number x, number y, number r, number sAngle, number eAngle, number counterclockwise)画一条弧线。入参\n\n参数\n类型\n说明\n\n\n\n\nx\nNumber\n圆 x 坐标\n\n\ny\nNumber\n圆 y 坐标\n\n\nr\nNumber\n圆 半径\n\n\nsAngle\nNumber\n起始弧度，单位弧度（在 3 点钟方向）\n\n\neAngle\nNumber\n终止弧度\n\n\ncounterclockwise\nBoolean\n可选，指定弧度的方向是逆时针还是顺时针，默认为 false。\n\n\n代码示例：const ctx = React.api.createCanvasContext('myCanvas');// Draw coordinates\nctx.arc(100, 75, 50, 0, 2 * Math.PI);\nctx.setFillStyle('#EEEEEE');\nctx.fill();\n\nctx.beginPath();\nctx.moveTo(40, 75);\nctx.lineTo(160, 75);\nctx.moveTo(100, 15);\nctx.lineTo(100, 135);\nctx.setStrokeStyle('#AAAAAA');\nctx.stroke();\n\nctx.setFontSize(12);\nctx.setFillStyle('black');\nctx.fillText('0', 165, 78);\nctx.fillText('0.5*PI', 83, 145);\nctx.fillText('1*PI', 15, 78);\nctx.fillText('1.5*PI', 83, 10);\n\n// Draw points\nctx.beginPath();\nctx.arc(100, 75, 2, 0, 2 * Math.PI);\nctx.setFillStyle('lightgreen');\nctx.fill();\n\nctx.beginPath();\nctx.arc(100, 25, 2, 0, 2 * Math.PI);\nctx.setFillStyle('blue');\nctx.fill();\n\nctx.beginPath();\nctx.arc(150, 75, 2, 0, 2 * Math.PI);\nctx.setFillStyle('red');\nctx.fill();\n\n// Draw arc\nctx.beginPath();\nctx.arc(100, 75, 50, 0, 1.5 * Math.PI);\nctx.setStrokeStyle('#333333');\nctx.stroke();\n\nctx.draw();\n针对 arc(100, 75, 50, 0, 1.5 * Math.PI)的三个关键坐标如下：绿色: 圆心 (100, 75)\n红色: 起始弧度 (0)\n蓝色: 终止弧度 (1.5 * Math.PI)\n"
        },
        {
          "title": "CanvasContext.bezierCurveTo()",
          "url": "/apis/canvas.html#canvascontext.beziercurveto",
          "content": "CanvasContext.bezierCurveTo()创建三次方贝塞尔曲线路径。曲线的起始点为路径中前一个点。\n入参\n\n参数\n类型\n说明\n\n\n\n\ncp1x\nNumber\n第一个贝塞尔控制点 x 坐标\n\n\ncp1y\nNumber\n第一个贝塞尔控制点 y 坐标\n\n\ncp2x\nNumber\n第二个贝塞尔控制点 x 坐标\n\n\ncp2y\nNumber\n第二个贝塞尔控制点 y 坐标\n\n\nx\nNumber\n结束点 x 坐标\n\n\ny\nNumber\n结束点 y 坐标\n\n\n"
        },
        {
          "title": "CanvasContext.clip()",
          "url": "/apis/canvas.html#canvascontext.clip",
          "content": "CanvasContext.clip()clip() 方法从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 restore() 方法）。"
        },
        {
          "title": "CanvasContext.quadraticCurveTo(number cpx, number cpy, number x, number y)",
          "url": "/apis/canvas.html#canvascontext.quadraticcurvetonumber-cpx,-number-cpy,-number-x,-number-y",
          "content": "CanvasContext.quadraticCurveTo(number cpx, number cpy, number x, number y)创建二次贝塞尔曲线路径入参\n\n参数\n类型\n说明\n\n\n\n\ncpx\nNumber\n贝塞尔控制点 x 坐标\n\n\ncpy\nNumber\n贝塞尔控制点 y 坐标\n\n\nx\nNumber\n结束点 x 坐标\n\n\ny\nNumber\n结束点 y 坐标\n\n\n"
        },
        {
          "title": "CanvasContext.scale(number scaleWidth, number scaleHeight)",
          "url": "/apis/canvas.html#canvascontext.scalenumber-scalewidth,-number-scaleheight",
          "content": "CanvasContext.scale(number scaleWidth, number scaleHeight)在调用 scale() 方法后，之后创建的路径其横纵坐标会被缩放。多次调用 scale()，倍数会相乘。入参\n\n参数\n类型\n说明\n\n\n\n\nscaleWidth\nNumber\n横坐标缩放倍数 (1 = 100%，0.5 = 50%，2 = 200%)\n\n\nscaleHeight\nNumber\n纵坐标轴缩放倍数 (1 = 100%，0.5 = 50%，2 = 200%)\n\n\n代码示例：const ctx = React.api.createCanvasContext('myCanvas');ctx.strokeRect(10, 10, 25, 15);\nctx.scale(2, 2);\nctx.strokeRect(10, 10, 25, 15);\nctx.scale(2, 2);\nctx.strokeRect(10, 10, 25, 15);\n\nctx.draw();\n"
        },
        {
          "title": "CanvasContext.rotate(number rotate)",
          "url": "/apis/canvas.html#canvascontext.rotatenumber-rotate",
          "content": "CanvasContext.rotate(number rotate)以原点为中心，原点可以用 translate() 方法修改。顺时针旋转当前坐标轴。多次调用 rotate()，旋转的角度会叠加。入参\n\n参数\n类型\n说明\n\n\n\n\nrotate\nNumber\n横旋转角度，以弧度计(degrees * Math.PI/180；degrees 范围为 0~360)\n\n\n"
        },
        {
          "title": "CanvasContext.translate(number x, number y)",
          "url": "/apis/canvas.html#canvascontext.translatenumber-x,-number-y",
          "content": "CanvasContext.translate(number x, number y)对当前坐标系的原点 (0, 0) 进行变换，默认的坐标系原点为页面左上角。入参\n\n参数\n类型\n说明\n\n\n\n\nx\nNumber\n水平坐标平移量\n\n\ny\nNumber\n竖直坐标平移量\n\n\n"
        },
        {
          "title": "CanvasContext.setFontSize(number fontSize)",
          "url": "/apis/canvas.html#canvascontext.setfontsizenumber-fontsize",
          "content": "CanvasContext.setFontSize(number fontSize)设置字体的字号入参\n\n参数\n类型\n说明\n\n\n\n\nfontSize\nNumber\n字号\n\n\n"
        },
        {
          "title": "CanvasContext.fillText(string text, number x, number y, number maxWidth)",
          "url": "/apis/canvas.html#canvascontext.filltextstring-text,-number-x,-number-y,-number-maxwidth",
          "content": "CanvasContext.fillText(string text, number x, number y, number maxWidth)在画布上绘制被填充的文本入参\n\n参数\n类型\n说明\n\n\n\n\ntext\nString\n文本\n\n\nx\nNumber\n水平坐标平移量\n\n\ny\nNumber\n竖直坐标平移量\n\n\n"
        },
        {
          "title": "CanvasContext.drawImage(string imageResource, number dx, number dy, number dWidth, number dHeight, number sx, number sy, number sWidth, number sHeight)",
          "url": "/apis/canvas.html#canvascontext.drawimagestring-imageresource,-number-dx,-number-dy,-number-dwidth,-number-dheight,-number-sx,-number-sy,-number-swidth,-number-sheight",
          "content": "CanvasContext.drawImage(string imageResource, number dx, number dy, number dWidth, number dHeight, number sx, number sy, number sWidth, number sHeight)绘制图像到画布入参\n\n参数\n类型\n说明\n\n\n\n\nimageResource\nString\n\n\n\nx\nNumber\n图像左上角 x 坐标\n\n\ny\nNumber\n图像左上角 y 坐标\n\n\nwidth\nNumber\n图像宽度\n\n\nheight\nNumber\n图像高度\n\n\nsx\nNumber\n源图像的矩形选择框的左上角 X 坐标。\n\n\nsy\nNumber\n源图像的矩形选择框的左上角 Y 坐标。\n\n\nsWidth\nNumber\n源图像的矩形选择框的宽度\n\n\nsHeight\nNumber\n源图像的矩形选择框的高度\n\n\n"
        },
        {
          "title": "CanvasContext.setGlobalAlpha(number 透明度。范围)",
          "url": "/apis/canvas.html#canvascontext.setglobalalphanumber-透明度。范围",
          "content": "CanvasContext.setGlobalAlpha(number 透明度。范围)设置全局画笔透明度。入参\n\n参数\n类型\n范围\n说明\n\n\n\n\nalpha\nNumber\n0 ～ 1\n透明度，0 表示完全透明，1 表示不透明\n\n\n代码示例：const ctx = React.api.createCanvasContext('myCanvas');ctx.setFillStyle('red');\nctx.fillRect(10, 10, 150, 100);\nctx.setGlobalAlpha(0.2);\nctx.setFillStyle('blue');\nctx.fillRect(50, 50, 150, 100);\nctx.setFillStyle('yellow');\nctx.fillRect(100, 100, 150, 100);\n\nctx.draw();\n"
        },
        {
          "title": "CanvasContext.setLineDash(Array. pattern, number offset)",
          "url": "/apis/canvas.html#canvascontext.setlinedasharray.-pattern,-number-offset",
          "content": "CanvasContext.setLineDash(Array. pattern, number offset)设置虚线的样式入参\n\n参数\n类型\n说明\n支持平台\n\n\n\n\nsegments\nArray\n透明度，0 表示完全透明，1 表示不透明\n都支持\n\n\noffset\nNumber\n虚线偏移量\n微信\n\n\n"
        },
        {
          "title": "CanvasContext.transform(number scaleX, number skewX, number skewY, number scaleY, number translateX, number translateY)",
          "url": "/apis/canvas.html#canvascontext.transformnumber-scalex,-number-skewx,-number-skewy,-number-scaley,-number-translatex,-number-translatey",
          "content": "CanvasContext.transform(number scaleX, number skewX, number skewY, number scaleY, number translateX, number translateY)使用矩阵多次叠加当前变换的方法，矩阵由方法的参数进行描述。你可以缩放、旋转、移动和倾斜上下文。入参\n\n参数\n类型\n说明\n\n\n\n\nscaleX\nString\n水平缩放\n\n\nskewX\nNumber\n水平倾斜\n\n\nskewY\nNumber\n垂直倾斜\n\n\nscaleY\nNumber\n垂直缩放\n\n\ntranslateX\nNumber\n水平移动\n\n\ntranslateX\nNumber\n垂直移动\n\n\n代码示例：const ctx = React.api.createCanvasContext('myCanvas');\nctx.rotate((45 * Math.PI) / 180);\nctx.setFillStyle('red');\nctx.fillRect(70, 0, 100, 30);\n\nctx.transform(1, 1, 0, 1, 0, 0);\nctx.setFillStyle('#000');\nctx.fillRect(0, 0, 100, 100);\n\nctx.draw();\n"
        },
        {
          "title": "CanvasContext.setTransform(number scaleX, number skewX, number skewY, number scaleY, number translateX, number translateY)",
          "url": "/apis/canvas.html#canvascontext.settransformnumber-scalex,-number-skewx,-number-skewy,-number-scaley,-number-translatex,-number-translatey",
          "content": "CanvasContext.setTransform(number scaleX, number skewX, number skewY, number scaleY, number translateX, number translateY)使用矩阵重新设置（覆盖）当前变换的方法入参\n\n参数\n类型\n说明\n\n\n\n\nscaleX\nString\n水平缩放\n\n\nskewX\nNumber\n水平倾斜\n\n\nskewY\nNumber\n垂直倾斜\n\n\nscaleY\nNumber\n垂直缩放\n\n\ntranslateX\nNumber\n水平移动\n\n\ntranslateX\nNumber\n垂直移动\n\n\n"
        },
        {
          "title": "CanvasContext.save()",
          "url": "/apis/canvas.html#canvascontext.save",
          "content": "CanvasContext.save()保存绘图上下文。"
        },
        {
          "title": "CanvasContext.restore()",
          "url": "/apis/canvas.html#canvascontext.restore",
          "content": "CanvasContext.restore()恢复之前保存的绘图上下文。"
        },
        {
          "title": "CanvasContext.draw(boolean reserve, function callback)",
          "url": "/apis/canvas.html#canvascontext.drawboolean-reserve,-function-callback",
          "content": "CanvasContext.draw(boolean reserve, function callback)将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。入参\n\n参数\n类型\n说明\n支持平台\n\n\n\n\nreserve\nBoolean\n非必填。本次绘制是否接着上一次绘制，即 reserve 参数为 false 时则在本次调用 drawCanvas绘制之前 native 层应先清空画布再继续绘制；若 reserver 参数为true 时，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false\n都支持\n\n\ncallback\nFunction\n绘制完成后执行的回调函数\n微信，百度\n\n\n"
        },
        {
          "title": "Object CanvasContext.measureText(string text)",
          "url": "/apis/canvas.html#object-canvascontext.measuretextstring-text",
          "content": "Object CanvasContext.measureText(string text)测量文本尺寸信息，目前仅返回文本宽度。同步接口。入参\n\n参数\n类型\n说明\n\n\n\n\ntext\nString\n必填。要测量的文本\n\n\n返回返回 TextMetrics 对象，结构如下：\n\n参数\n类型\n说明\n\n\n\n\nwidth\nNumber\n文本的宽度\n\n\n代码示例：const ctx = React.api.createCanvasContext('myCanvas');\nctx.font = 'italic bold 50px cursive';\nconst { width } = ctx.measureText('hello world');\nconsole.log(width);\n"
        },
        {
          "title": "CanvasContext.canvasToTempFilePath(OBJECT, this)",
          "url": "/apis/canvas.html#canvascontext.canvastotempfilepathobject,-this",
          "content": "CanvasContext.canvasToTempFilePath(OBJECT, this)把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路劲。在自定义组件下，第二个参数传入组件实例this，以操作组件内组件。入参\n\n参数\n类型\n说明\n\n\n\n\nx\nNumber\n画布 x 轴起点（默认 0 ）\n\n\ny\nNumber\n画布 y 轴起点（默认 0 ）\n\n\nwidth\nNumber\n画布宽度（默认为 canvas 宽度 -x）\n\n\nheight\nNumber\n画布高度（默认为 canvas 高度 -y）\n\n\ndestWidth\nNumber\n输出图片宽度（默认为 width * 屏幕像素密度）\n\n\ndestHeight\nNumber\n输出图片高度（默认为 height * 屏幕像素密度）\n\n\ncanvasId\nString\n画布标识，传入的 canvas-id\n\n\nfileType\nString\n目标文件的类型，只支持 ‘jpg’ 或 ‘png’，默认为 ‘png’ 。\n\n\nquality\nNumber\n图片的质量，取值范围为 (0, 1]，不在范围内时当作 1.0 处理 。\n\n\nsuccess\nFunction\n接口调用成功的回调函数\n\n\nfail\nFunction\n接口调用失败的回调函数\n\n\ncomplete\nFunction\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n在 draw 回调里调用该方法才能保证图片导出成功。示例代码：  React.api.canvasToTempFilePath({    x: 100,\n    y: 200,\n    width: 50,\n    height: 50,\n    destWidth: 100,\n    destHeight: 100,\n    canvasId: 'myCanvas',\n    success: function(res) {\n        console.log(res.tempFilePath)\n    }\n});\n"
        }
      ]
    },
    {
      "title": "键盘",
      "content": "",
      "url": "/apis/keyboard.html",
      "children": [
        {
          "title": "hideKeyboard",
          "url": "/apis/keyboard.html#hidekeyboard",
          "content": "hideKeyboard隐藏键盘入参\n\n参数\n类型\n说明\n支持平台\n\n\n\n\nsuccess\nFunction\n接口调用成功的回调函数\n微信\n\n\nfail\nFunction\n接口调用失败的回调函数\n微信\n\n\ncomplete\nFunction\n接口调用结束的回调函数（调用成功、失败都会执行）\n微信\n\n\n"
        }
      ]
    },
    {
      "title": "滚动",
      "content": "",
      "url": "/apis/scroll.html",
      "children": [
        {
          "title": "pageScrollTo(Object object)",
          "url": "/apis/scroll.html#pagescrolltoobject-object",
          "content": "pageScrollTo(Object object)将页面滚动到目标位置入参\n\n参数\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nscrollTop\nnumber\n\n是\n滚动到页面的目标位置，单位 px\n都支持\n\n\nduration\nnumber\n300\n否\n滚动动画的时长，单位 ms\n微信，百度\n\n\nsuccess\nFunction\n\n\n接口调用成功的回调函数\n微信\n\n\nfail\nFunction\n\n\n接口调用失败的回调函数\n微信\n\n\ncomplete\nFunction\n\n\n接口调用结束的回调函数（调用成功、失败都会执行）\n微信\n\n\n"
        }
      ]
    },
    {
      "title": "下拉刷新",
      "content": "",
      "url": "/apis/pulldown.html",
      "children": [
        {
          "title": "stopPullDownRefresh()",
          "url": "/apis/pulldown.html#stoppulldownrefresh",
          "content": "stopPullDownRefresh()停止当前页面下拉刷新。React.api.stopPullDownRefresh()"
        }
      ]
    },
    {
      "title": "节点查询",
      "content": "",
      "url": "/apis/select.html",
      "children": [
        {
          "title": "createSelectorQuery",
          "url": "/apis/select.html#createselectorquery",
          "content": "createSelectorQuery返回一个 SelectorQuery 对象实例。入参\n\n参数\n类型\n说明\n支持平台\n\n\n\n\nparams\nobject\n可以指定 page 属性，默认为当前页面\n\b 支付宝\n\n\n"
        },
        {
          "title": "NodesRef SelectorQuery.select(string selector)",
          "url": "/apis/select.html#nodesref-selectorquery.selectstring-selector",
          "content": "NodesRef SelectorQuery.select(string selector)选择当前第一个匹配选择器的节点，选择器支持 id 选择器以及 class 选择器.返回值NodesRefselector 语法selector 类似于 CSS 的选择器，但仅支持下列语法。ID 选择器：#the-id\nclass 选择器（可以连续指定多个）：.a-class.another-class\n子元素选择器：.the-parent > .the-child\n后代选择器：.the-ancestor .the-descendant\n跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant\n多选择器的并集：#a-node, .some-other-nodes\n"
        },
        {
          "title": "NodesRef SelectorQuery.selectAll()",
          "url": "/apis/select.html#nodesref-selectorquery.selectall",
          "content": "NodesRef SelectorQuery.selectAll()在当前页面下选择匹配选择器 selector 的所有节点。返回值NodesRef"
        },
        {
          "title": "NodesRef SelectorQuery.selectViewport()",
          "url": "/apis/select.html#nodesref-selectorquery.selectviewport",
          "content": "NodesRef SelectorQuery.selectViewport()选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息。返回值NodesRef"
        },
        {
          "title": "SelectQuery NodesRef.boundingClientRect(function callback)",
          "url": "/apis/select.html#selectquery-nodesref.boundingclientrectfunction-callback",
          "content": "SelectQuery NodesRef.boundingClientRect(function callback)添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回 NodesRef 对应的 SelectorQuery。参数function callback回调函数，在执行 SelectQuery.exec 方法后，节点信息会在 callbacks 中返回。Object res\n\n属性\n类型\n说明\n\n\n\n\nid\nstring\n节点的 ID\n\n\ndataset\nObject\n节点的 dataset\n\n\nleft\nnumber\n节点的左边界坐标\n\n\nright\nnumber\n节点的右边界坐标\n\n\ntop\nnumber\n节点的上边界坐标\n\n\nbottom\nnumber\n节点的下边界坐标\n\n\nwidth\nnumber\n节点的宽度\n\n\nheight\nnumber\n节点的高度\n\n\n"
        },
        {
          "title": "SelectQuery NodesRef.scrollOffset(function callback)",
          "url": "/apis/select.html#selectquery-nodesref.scrolloffsetfunction-callback",
          "content": "SelectQuery NodesRef.scrollOffset(function callback)添加节点的滚动位置查询请求，以像素为单位。节点必须是 scroll-view 或者 viewport参数function callback回调函数，在执行 SelectQuery.exec 方法后，节点信息会在 callbacks 中返回。Object res\n\n属性\n类型\n说明\n\n\n\n\nid\nstring\n节点的 ID\n\n\ndataset\nObject\n节点的 dataset\n\n\nscrollLeft\nnumber\n节点的水平滚动位置\n\n\nscrollTop\nnumber\n节点的竖直滚动位置\n\n\n返回 NodesRef 对应的 SelectorQuery。"
        },
        {
          "title": "NodesRef SelectorQuery.exec(function callback)",
          "url": "/apis/select.html#nodesref-selectorquery.execfunction-callback",
          "content": "NodesRef SelectorQuery.exec(function callback)执行所有的请求，请求结果按请求次序构成数组，在 callback 的第一个参数中返回。代码示例：componentDidMount() {    React.api.createSelectorQuery()\n      .select('#non-exists').boundingClientRect()\n      .select('#one').boundingClientRect()\n      .selectAll('.all').boundingClientRect()\n      .select('#scroll').scrollOffset()\n      .selectViewport().boundingClientRect()\n      .selectViewport().scrollOffset().exec((ret) => {\n      console.log(JSON.stringify(ret, null, 2));\n    });\n  }\nrender() {\n    return (\n      \n        节点 all1\n\n        节点 all2\n\n        节点 one\n\n        \n          独立滚动区域\n        \n      \n    );\n  }\n结果 res：[  null,\n  {\n    \"x\": 1,\n    \"y\": 2,\n    \"width\": 1367,\n    \"height\": 18,\n    \"top\": 2,\n    \"right\": 1368,\n    \"bottom\": 20,\n    \"left\": 1\n  },\n  [\n    {\n      \"x\": 1,\n      \"y\": -34,\n      \"width\": 1367,\n      \"height\": 18,\n      \"top\": -34,\n      \"right\": 1368,\n      \"bottom\": -16,\n      \"left\": 1\n    },\n    {\n      \"x\": 1,\n      \"y\": -16,\n      \"width\": 1367,\n      \"height\": 18,\n      \"top\": -16,\n      \"right\": 1368,\n      \"bottom\": 2,\n      \"left\": 1\n    }\n  ],\n  {\n    \"scrollTop\": 0,\n    \"scrollLeft\": 0\n  },\n  {\n    \"width\": 1384,\n    \"height\": 360\n  },\n  {\n    \"scrollTop\": 35,\n    \"scrollLeft\": 0\n  }\n]\n"
        }
      ]
    },
    {
      "title": "图片",
      "content": "",
      "url": "/apis/image.html",
      "children": [
        {
          "title": "chooseImage(Object object)",
          "url": "/apis/image.html#chooseimageobject-object",
          "content": "chooseImage(Object object)从本地相册选择图片或使用相机拍照。参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ncount\nnumber\n微信：9， 支付宝： 1\n否\n最多可以选择的图片张数\n都支持\n\n\nsourceType\nString Array\n['album', 'camera']\n否\n选择图片的来源\n都支持\n\n\nsizeType\nString Array\n['original', 'compressed']\n否\n所选的图片的尺寸\n微信\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\nsuccess 返回值Object res\n\n属性\n类型\n描述\n支持平台\n\n\n\n\ntempFilePaths\nStringArray\n图片的本地文件路径列表\n都支持\n\n\ntempFiles\nObjectArray\n图片的本地文件列表，每一项是一个 File 对象\n微信\n\n\n  choose() {    React.api.chooseImage({\n      count: 2,\n      success: res => {\n        this.setState({\n          img: res.tempFilePaths\n        })\n      }\n    });\n  }\n\n  render() {\n    return (\n      \n        选择图片\n        {\n          this.state.img.map(function(item) {\n            return  \n          })\n        }\n\n      \n    );\n  }\n"
        },
        {
          "title": "previewImage(Object object)",
          "url": "/apis/image.html#previewimageobject-object",
          "content": "previewImage(Object object)预览图片参数\bObject object\n\n属性\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nurls\nArray\n是\n要预览的图片链接列表\n都支持\n\n\ncurrent\nNumber\n否\n当前显示图片索引，默认 0\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n"
        },
        {
          "title": "saveImageToPhotosAlbum(Object object)",
          "url": "/apis/image.html#saveimagetophotosalbumobject-object",
          "content": "saveImageToPhotosAlbum(Object object)保存图片到系统相册参数\bObject object\n\n属性\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nfilePath\nstring\n是\n图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n"
        },
        {
          "title": "getImageInfo(Object object)",
          "url": "/apis/image.html#getimageinfoobject-object",
          "content": "getImageInfo(Object object)获取图片信息参数\bObject object\n\n属性\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nsrc\nstring\n是\n图片路径，目前支持：网络图片路径、apFilePath 路径、相对路径\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\nsuccess 返回值\n\n名称\n类型\n描述\n支持平台\n\n\n\n\nwidth\nNumber\n图片宽度（单位 px）\n都支持\n\n\nheight\nNumber\n图片高度（单位 px）\n都支持\n\n\npath\nstring\n图片的本地路径\n都支持\n\n\norientation\nstring\n拍照时设备方向\n微信\n\n\ntype\nstring\n图片格式\n微信\n\n\n"
        }
      ]
    },
    {
      "title": "缓存",
      "content": "",
      "url": "/apis/storage.html",
      "children": [
        {
          "title": "setStorage(Object object)",
          "url": "/apis/storage.html#setstorageobject-object",
          "content": "setStorage(Object object)将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容。参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nkey\nstring\n\n是\n本地缓存中指定的 key\n\n\ndata\nObject/string\n\n是\n需要存储的内容\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "setStorageSync(string key, Object|string data)",
          "url": "/apis/storage.html#setstoragesyncstring-key,-object|string-data",
          "content": "setStorageSync(string key, Object|string data)wx.setStorage 的同步版本参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nkey\nstring\n\n是\n本地缓存中指定的 key\n\n\ndata\nObject/string\n\n是\n需要存储的内容\n\n\n"
        },
        {
          "title": "getStorage",
          "url": "/apis/storage.html#getstorage",
          "content": "getStorage获取缓存数据。这是一个异步接口\n参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nkey\nstring\n\n是\n本地缓存中指定的 key\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "getStorageSync",
          "url": "/apis/storage.html#getstoragesync",
          "content": "getStorageSync同步获取缓存数据。参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nkey\nstring\n\n是\n本地缓存中指定的 key\n\n\n代码示例：let res = React.api.getStorageSync({ key: 'currentCity' });console.log('res', res);\n"
        },
        {
          "title": "removeStorage(Object object)",
          "url": "/apis/storage.html#removestorageobject-object",
          "content": "removeStorage(Object object)从本地缓存中移除指定 key这是一个异步接口\n参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nkey\nstring\n\n是\n本地缓存中指定的 key\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n代码示例：React.api.removeStorage({  key: 'currentCity',\n  success: function() {\n    console.log('删除成功' );\n  }\n});\n"
        },
        {
          "title": "removeStorageSync(string key)",
          "url": "/apis/storage.html#removestoragesyncstring-key",
          "content": "removeStorageSync(string key)removeStorage 的同步版本。参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nkey\nstring\n\n是\n本地缓存中指定的 key\n\n\n代码示例：React.api.removeStorageSync({ key: 'currentCity' });"
        },
        {
          "title": "clearStorage(Object object)",
          "url": "/apis/storage.html#clearstorageobject-object",
          "content": "clearStorage(Object object)清理本地数据缓存参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "clearStorageSync(Object object)",
          "url": "/apis/storage.html#clearstoragesyncobject-object",
          "content": "clearStorageSync(Object object)clearStorage 的同步版本"
        },
        {
          "title": "getStorageInfo(Object object)",
          "url": "/apis/storage.html#getstorageinfoobject-object",
          "content": "getStorageInfo(Object object)异步获取当前storage的相关信息参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nobject.success 回调函数\n\n属性\n类型\n说明\n\n\n\n\nkeys\nArray. string\n当前 storage 中所有的 key\n\n\ncurrentSize\nnumber\n当前占用的空间大小, 单位 KB\n\n\nlimitSize\nnumber\n限制的空间大小，单位 KB\n\n\n"
        },
        {
          "title": "getStorageInfoSync(Object object)",
          "url": "/apis/storage.html#getstorageinfosyncobject-object",
          "content": "getStorageInfoSync(Object object)getStorageInfo 的同步版本返回值Object object\n\n属性\n类型\n说明\n\n\n\n\nkeys\nArray. string\n当前 storage 中所有的 key\n\n\ncurrentSize\nnumber\n当前占用的空间大小, 单位 KB\n\n\nlimitSize\nnumber\n限制的空间大小，单位 KB\n\n\n"
        }
      ]
    },
    {
      "title": "文件",
      "content": "",
      "url": "/apis/file.html",
      "children": [
        {
          "title": "getFileInfo(Object object)",
          "url": "/apis/file.html#getfileinfoobject-object",
          "content": "getFileInfo(Object object)获取文件信息参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nfilePath\nstring\n\n是\n本地文件路径\n\n\ndigestAlgorithm\nstring\n'md5'\n否\n摘要算法，支持md5和sha1\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nobject.success 回调函数\n\n属性\n类型\n说明\n\n\n\n\nsize\nnumber\n文件大小，以字节为单位\n\n\ndigest\nstring\n按照传入的 digestAlgorithm 计算得出的的文件摘要\n\n\n"
        },
        {
          "title": "getSavedFileInfo(Object object)",
          "url": "/apis/file.html#getsavedfileinfoobject-object",
          "content": "getSavedFileInfo(Object object)获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo() 接口。参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nfilePath\nstring\n\n是\n本地文件路径\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nobject.success 回调函数\n\n属性\n类型\n说明\n\n\n\n\n\nsize\nnumber\n文件大小，以字节为单位\n都支持\n\n\ncreateTime\nnumber\n文件保存时的时间戳，从1970/01/01 08:00:00 到该时刻的秒数\n都支持\n\n\nerrMsg\nString\n接口调用结果\n微信\n\n\n"
        },
        {
          "title": "getSavedFileList(Object object)",
          "url": "/apis/file.html#getsavedfilelistobject-object",
          "content": "getSavedFileList(Object object)获取该小程序下已保存的本地缓存文件列表参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nobject.success 回调函数\n\n属性\n类型\n说明\n\n\n\n\nfileList\nArray.Object\n文件数组，每一项是一个 FileItem\n\n\nres.fileList 的结构\n\n属性\n类型\n说明\n\n\n\n\nfilePath\nstring\n本地路径\n\n\nsize\nnumber\n本地文件大小，以字节为单位\n\n\ncreateTime\nnumber\n文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数\n\n\n"
        },
        {
          "title": "removeSavedFile(Object object)",
          "url": "/apis/file.html#removesavedfileobject-object",
          "content": "removeSavedFile(Object object)删除本地缓存文件参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nfilePath\nstring\n\n是\n本地文件路径\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "saveFile(Object object)",
          "url": "/apis/file.html#savefileobject-object",
          "content": "saveFile(Object object)保存文件到本地参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\ntempFilePath\nstring\n\n是\n需要保存的文件的临时路径\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nobject.success 回调函数\n\n属性\n类型\n说明\n\n\n\n\nsavedFilePath\nstring\n文件数组，每一项是一个 FileItem\n\n\n"
        }
      ]
    },
    {
      "title": "位置",
      "content": "",
      "url": "/apis/location.html",
      "children": [
        {
          "title": "getLocation(Object object)",
          "url": "/apis/location.html#getlocationobject-object",
          "content": "getLocation(Object object)获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。注：支付宝和微信小程序参数都不一致参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\ntype\nstring\nwgs84\n是\nwgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标\n\n\naltitude\nstring\nfalse\n否\n传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度，微信版本>=1.6.0支持\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nobject.success 回调函数参数Object res\n\n属性\n类型\n说明\n支持平台\n\n\n\n\nlatitude\nnumber\n纬度，范围为 -90~90，负数表示南纬\n微信小程序，百度小程序\n\n\nlongitude\nnumber\n经度，范围为 -180~180，负数表示西经\n微信小程序，百度小程序\n\n\nspeed\nnumber\n速度，单位 m/s\n微信小程序，百度小程序\n\n\naccuracy\nnumber\n位置的精确度\n微信小程序，百度小程序\n\n\naltitude\nnumber\n高度，单位 m\n微信小程序>= 1.2.0，百度小程序\n\n\nverticalAccuracy\nnumber\n垂直精度，单位 m（Android 无法获取，返回 0）\n微信小程序>= 1.2.0，百度小程序\n\n\nhorizontalAccuracy\nnumber\n水平精度，单位 m\n微信小程序>= 1.2.0，百度小程序\n\n\nstreet\nstring\n街道名称\n百度小程序\n\n\ncityCode\nstring\n城市编码\n百度小程序\n\n\ncity\nstring\n城市名称\n百度小程序\n\n\ncountry\nstring\n国家\n百度小程序\n\n\nprovince\nstring\n省份\n百度小程序\n\n\nstreetNumber\nstring\n街道号码\n百度小程序\n\n\ndistrict\nstring\n区\n百度小程序\n\n\n代码示例React.api.getLocation({  type: 'gcj02',\n  success: function (res) {\n     console.log('纬度：' + res.latitude);\n     console.log('经度：' + res.longitude);\n  },\n  fail: function (err) {\n     console.log('错误码：' + err.errCode);\n     console.log('错误信息：' + err.errMsg);\n  }\n})\n"
        },
        {
          "title": "openLocation(Object object)",
          "url": "/apis/location.html#openlocationobject-object",
          "content": "openLocation(Object object)内置地图查看位置参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nlongitude\nNumber\n\n是\n经度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系\n\n\nlatitude\nNumber\n\n是\n纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系\n\n\nscale\nNumber\n18\n否\n缩放比例，范围5~18\n\n\nname\nstring\n\n否\n位置名\n\n\naddress\nstring\n\n否\n地址的详细说明\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n代码示例React.api.getLocation({  type: 'gcj02',\n  success: function (res) {\n    React.api.openLocation({\n      latitude: res.latitude,\n      longitude: res.longitude,\n      scale: 18\n     })\n  },\n  fail: function (err) {\n    console.log('错误码：' + err.errCode);\n    console.log('错误信息：' + err.errMsg);\n  }\n});\n"
        },
        {
          "title": "chooseLocation(Object object)",
          "url": "/apis/location.html#chooselocationobject-object",
          "content": "chooseLocation(Object object)打开地图选择位置参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nobject.success 回调函数Object res\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nname\nstring\n\n否\n位置名\n\n\naddress\nstring\n\n否\n地址的详细说明\n\n\nlongitude\nString\n\n是\n经度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系\n\n\nlatitude\nString\n\n是\n纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系\n\n\n"
        }
      ]
    },
    {
      "title": "分享",
      "content": "",
      "url": "/apis/share.html",
      "children": [
        {
          "title": "onShareAppMessage(Object)",
          "url": "/apis/share.html#onshareappmessageobject",
          "content": "onShareAppMessage(Object)在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息。每个 Page 页面的右上角菜单中默认会显示“分享”按钮，重写了 onShareAppMessage 函数，只是自定义分享内容\n用户点击分享按钮的时候会调用（ 组件 open-type=\"share\"）\n此事件需要 return 一个 Object，用于自定义分享内容。\n注意：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮\nObject 参数说明\n\n参数\n类型\n说明\n支持平台\n\n\n\n\nfrom\nstring\n转发事件来源。button：页面内转发按钮；menu：右上角转发菜单\n都支持\n\n\ntarget\nObject\n如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined\n都支持\n\n\nwebViewUrl\nString\n页面中包含组件时，返回当前的 url\n微信\n\n\n此事件需要 return 一个 Object，用于自定义转发内容，返回内容如下：自定义转发内容\n\n字段\n是否必须\n说明\n支持平台\n\n\n\n\ntitle\n是\n自定义分享标题\n都支持\n\n\npath\n是\n转发路径 必须是以 / 开头的完整路径\n都支持\n\n\nimageUrl\n否\n自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持 PNG 及 JPG。显示图片长宽比是 5:4。\n都支持\n\n\ndesc\n否\n自定义分享描述最大长度 140 个字\n支付宝\n\n\ncontent\n否\n自定义吱口令文案，最多 28 个字符\n支付宝\n\n\nbgImgUrl\n否\n自定义分享二维码的背景图，建议大小 750*1350\n支付宝\n\n\nsuccess\n否\n分享成功后回调\n支付宝\n\n\nfail\n否\n分享失败后回调\n支付宝\n\n\n\b 示例代码：onShareAppMessage(res) {    if (res.from === 'button') {\n      // 来自页面内转发按钮\n      console.log(res.target);\n    }\n    return {\n      title: '小程序示例',\n      desc: '小程序官方示例Demo，展示已支持的接口能力及组件。',\n      path: 'pages/images/index'\n    };\n  }\n"
        },
        {
          "title": "hideShareMenu(Object object)",
          "url": "/apis/share.html#hidesharemenuobject-object",
          "content": "hideShareMenu(Object object)隐藏转发按钮参数\bObject object\n\n属性\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n"
        }
      ]
    },
    {
      "title": "设备",
      "content": "",
      "url": "/apis/miniprogram.html",
      "children": [
        {
          "title": "振动",
          "url": "/apis/miniprogram.html#振动",
          "content": "振动"
        },
        {
          "title": "vibrateLong(Object object)",
          "url": "/apis/miniprogram.html#vibratelongobject-object",
          "content": "vibrateLong(Object object)使手机发生较长时间的振动（400 ms)参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "vibrateShort(Object object)",
          "url": "/apis/miniprogram.html#vibrateshortobject-object",
          "content": "vibrateShort(Object object)参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "电话",
          "url": "/apis/miniprogram.html#电话",
          "content": "电话"
        },
        {
          "title": "makePhoneCall(Object object)",
          "url": "/apis/miniprogram.html#makephonecallobject-object",
          "content": "makePhoneCall(Object object)参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nphoneNumber\nstring\n\n否\n需要拨打的电话号码\n\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n微信\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n\n"
        },
        {
          "title": "网络",
          "url": "/apis/miniprogram.html#网络",
          "content": "网络"
        },
        {
          "title": "getNetworkType(Object object)",
          "url": "/apis/miniprogram.html#getnetworktypeobject-object",
          "content": "getNetworkType(Object object)获取网络类型参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nobject.success 回调函数Object res\n\n属性\n类型\n描述\n支持平台\n\n\n\n\nnetworkType\nstring\n网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN\n都支持\n\n\nnetworkAvailable\nNumber\n网络是否可用\n支付宝\n\n\n"
        },
        {
          "title": "onNetworkStatusChange(function callback)",
          "url": "/apis/miniprogram.html#onnetworkstatuschangefunction-callback",
          "content": "onNetworkStatusChange(function callback)监听网络状态变化事件参数function callback网络状态变化事件的回调函数object.success 回调函数Object res\n\n属性\n类型\n描述\n支持平台\n\n\n\n\nnetworkType\nstring\n网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN\n都支持\n\n\nisConnected\nboolean\n当前是否有网络链接\n都支持\n\n\n"
        },
        {
          "title": "剪切板",
          "url": "/apis/miniprogram.html#剪切板",
          "content": "剪切板"
        },
        {
          "title": "getClipboardData(Object object)",
          "url": "/apis/miniprogram.html#getclipboarddataobject-object",
          "content": "getClipboardData(Object object)获取系统剪贴板的内容参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nobject.success 回调函数Object res\n\n属性\n类型\n描述\n\n\n\n\ndata\nstring\n剪贴板的内容\n\n\n"
        },
        {
          "title": "setClipboardData(Object object)",
          "url": "/apis/miniprogram.html#setclipboarddataobject-object",
          "content": "setClipboardData(Object object)设置系统剪贴板的内容参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\ndata\nstring\n\n是\n剪贴板的内容\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "屏幕",
          "url": "/apis/miniprogram.html#屏幕",
          "content": "屏幕"
        },
        {
          "title": "setKeepScreenOn(Object object)",
          "url": "/apis/miniprogram.html#setkeepscreenonobject-object",
          "content": "setKeepScreenOn(Object object)设置是否保持屏幕长亮状态。仅在当前小程序生效，离开小程序后失效。参数Object object\n\n参数\n类型\n默认值\n是否必须\n说明\n\n\n\n\nkeepScreenOn\nstring\n\n是\n是否保持屏幕长亮状态\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "getScreenBrightness(Object object)",
          "url": "/apis/miniprogram.html#getscreenbrightnessobject-object",
          "content": "getScreenBrightness(Object object)获取屏幕亮度参数Object object\n\n参数\n类型\n默认值\n是否必须\n说明\n\n\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "setScreenBrightness(OBJECT)",
          "url": "/apis/miniprogram.html#setscreenbrightnessobject",
          "content": "setScreenBrightness(OBJECT)设置屏幕亮度参数Object object\n\n参数\n类型\n默认值\n是否必须\n说明\n\n\n\n\nvalue\nNumber\n\n是\n屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "boolean canIUse(string schema)",
          "url": "/apis/miniprogram.html#boolean-caniusestring-schema",
          "content": "boolean canIUse(string schema)判断小程序的API，回调，参数，组件等是否在当前版本可用。参数string schema使用 ${API}.${method}.${param}.${options} 或者 ${component}.${attribute}.${option} 方式来调用返回值boolean当前版本是否可用参数说明${API} 代表 API 名字\n${method} 代表调用方式，有效值为return, success, object, callback\n${param} 代表参数或者返回值\n${options} 代表参数的可选值\n${component} 代表组件名字\n${attribute} 代表组件属性\n${option} 代表组件属性的可选值\n代码示例：React.api.canIUse('getFileInfo')React.api.canIUse('closeSocket.object.code')\nReact.api.canIUse('getLocation.object.type')\nReact.api.canIUse('getSystemInfo.return.brand')\nReact.api.canIUse('lifestyle')\nReact.api.canIUse('button.open-type.share')\n"
        }
      ]
    }
  ]
}