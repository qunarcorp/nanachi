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
      "title": "页面",
      "content": "页面定义在 pages 目录下。它必须是一个有状态的 React 组件。JSX 只能出现在 render() 方法里，它会编译成相应的 wxml 文件，因此不能使用 R React.createElement()代替 JSX。有关 JSX 的注意事项可以看这里。比如：import React from '@react';\nclass P extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      iconSize: [20, 30, 40, 50, 60, 70],\n      text: 'this is first line\\nthis is second line'\n    };\n  }\n  static config = {};\n\n  add() {\n    this.setState({\n      text: this.state.text + '\\nthis is new line'\n    });\n  }\n\n  remove() {\n    var textAry = this.state.text.split('\\n');\n    if (!textAry.length) return;\n    textAry.pop();\n\n    this.setState({\n      text: textAry.join('\\n')\n    });\n  }\n  componentWillMount() {\n    console.log('base componentWillMount');\n  }\n  componentDidMount() {\n    console.log('base componentDidMount');\n  }\n  render() {\n    return (\n      \n        \n          Icon\n          \n            {this.state.iconSize.map(function(item) {\n              return ;\n            })}\n          \n        \n      \n    );\n  }\n}\n\nexport default P;\n页面组件必须使用 es6 风格来引入依赖与导出自己。它的静态属性 config 会抽取出来生成对应的 JSON 配置对象，有关配置项可以看这里",
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
          "content": "组件的样板import React from '@react';\nclass Animal extends React.Component {\n  constructor(props) {\n    super();\n    this.state = {\n      name: props.name,\n      age: props.age || 1\n    };\n  }\n\n  static defaultProps = {\n    age: 1,\n    name: 'animal'\n  };\n\n  changeAge() {\n    this.setState({\n      age: ~~(Math.random() * 10)\n    });\n  }\n\n  componentDidMount() {\n    console.log('Animal componentDidMount');\n  }\n\n  componentWillReceiveProps(props) {\n    this.setState({\n      name: props.name\n    });\n  }\n\n  render() {\n    return (\n      \n        名字：\n        {this.state.name} 年龄：\n        {this.state.age} 岁\n        换一个年龄\n      \n    );\n  }\n}\n\nexport default Animal;\n由于目录可能比较深，因此 nanachi 比较贴心地提供了两个默认的别名，@react 与 @components, @react 指向专门为小程序优化的 React, @components 指向开发目录下的 components 目录。JSX 只能出现在 render() 方法或无状态组件的函数体中。JSX 的所有填充数据必须带 this.props, this.state, this.context 前缀。render() 方法里不能出现 var/const/let 语句，只能出现 if 语句与三元表达式或 JSX。map() 方法调用的第一个参数最好使用匿名方法（因为这样会自动 bind this），否则它会自动添加上第二个参数 this  {this.state.iconSize.map(function(item) {\n    return ;\n  })}\n\n会变成  {this.state.iconSize.map(function(item) {\n    return ;\n  }, this)}\n\nJSX 禁止出现 instanceUid, classUid, eventUid, 这些是内部绑定事件时在编译阶段自动添加的。"
        }
      ]
    },
    {
      "title": "JSX",
      "content": "小程序的 wxml 只支持 view、text 与它的那些内置组件标签，娜娜奇可以让你直接使用 div, span, p, b, strong 等 HTML 标签。块状元素会转换成 view, 内联元素会转换为 text。如果你使用 React 方式定义组件，那么对应的标签名必须以大写开头。在小程序中，组件不支持包含其他标签，但我们的 React 组件可以充许包含其他标签或组件。有关循环，if, 组件套组件，render props 等用法，可以脚手架的 qunar 示例不支持switch语句  xxxxx\n\n",
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
          "content": "wx.redirectTo(Object object)关闭当前页面，跳转到应用内的某个页面，但是不允许跳转到 tabbar 页面。\n\n属性\n类型\n默认值\n是否必填\n说明\n\n\n\n\nurl\nstring\n是\ntabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，不同参数用 & 分隔；如 'path?key=value&key2=value2'\n\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n\n"
        },
        {
          "title": "wx.navigateTo(Object object)",
          "url": "/documents/router.html#wx.navigatetoobject-object",
          "content": "wx.navigateTo(Object object)保留当前页面，跳转到应用内的某个页面，但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。\n\n属性\n类型\n默认值\n是否必填\n说明\n\n\n\n\nurl\nstring\n是\n同 redirectTo\n\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n\n"
        },
        {
          "title": "wx.switchTab(Object object)",
          "url": "/documents/router.html#wx.switchtabobject-object",
          "content": "wx.switchTab(Object object)跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面\n\n属性\n类型\n默认值\n是否必填\n说明\n\n\n\n\nurl\nstring\n是\n同 redirectTo\n\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n\n"
        },
        {
          "title": "wx.navigateBack(Object object)",
          "url": "/documents/router.html#wx.navigatebackobject-object",
          "content": "wx.navigateBack(Object object)关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。\n\n属性\n类型\n默认值\n是否必填\n说明\n\n\n\n\nurl\nnumber\n是\n返回的页面数，如果 delta 大于现有页面数，则返回到首页。\n\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n\n"
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
      "content": "\n\n项目\n微信小程序\n百度小程序\n支付小程序\n快应用\n\n\n\n\n命名空间\nwx\nswam\nmy\n无,需要require它提供的所有接口按wx形式封装\n\n\nif 指令\nwx:if\ns-if\na:if\nif\n\n\nfor 指令\nwx:for wx:for-index wx:for-item wx:key\n将wx:改成s-\n将wx:改成a:\nfor=\"(personIndex, personItem) in list\"\n\n\n容器标签\n存在\n存在\n存在\n存在\n\n\n事件绑定\nbind/catch[事件名全小写]=\"回调名\"\nbind/catch[事件名全小写]=\"回调名\"\non/catch[事件名驼峰]=\"回调名\"\non[事件名全小写]=\"回调名/回调(arguments)\"\n\n\n{{}}插值是否支持函数\n不支持\n不支持\n不支持\n支持\n\n\n模块中使用脚本\n\n\n\n\n\n\n模板文件后缀\nwxml\nswan\naxml\n没有独立的文件 放 template 中\n\n\n样式文件后缀\nwxss\ncss\nacss\n没有独立的文件 放 style 中，不需要处理 less,sass\n\n\ntemplate包含template\n支持\n不支持（听说正在修复）\n支持\n未知\n\n\ntemplate的data是否支持...\n支持\n不支持（听说正在修复）\n支持\n未知\n\n\n缺省的组件(视图容器)\n\n\nmoveable-view、cover-view\n未知\n\n\n缺省的组件(基础内容)\n\n\nrich-text\n未知\n\n\n缺省的组件(导航)\n\n\nfunctional-page-navigator\n未知\n\n\n缺省的组件(媒体组件)\n\n\naudio、video、camera、live-player、live-pusher\n未知\n\n\nopen-data\n\n\n不支持\n未知\n\n\n样式单位rpx支持情况\n支持\n不支持（用rem，最新的基础库版本已经支持）\n支持\n不支持\n\n\nAPIs的这么多方法都不一样，可能以后针对不同的平台打包不同的api.js来屏蔽差异性",
      "url": "/documents/diff.html",
      "children": [
        {
          "title": "微信小程序与快应用差异(更新中...)",
          "url": "/documents/diff.html#微信小程序与快应用差异更新中...",
          "content": "微信小程序与快应用差异(更新中...)\n\n差异\n微信小程序\n快应用\n\n\n\n\n入口文件\napp.js, app.json\napp.ux, manifest.json\n\n\n结构，表现，行为组织方式\n分离：如page.js, page.wxss, page.wxml\n聚合：类似vue\n\n\n文件扩展名\n.js, .json, .wxml, .wxss\n.ux, .json\n\n\n路由注册\napp.json中配置pages字段 例如\"pages\": [\"path1\", \"path2\"]\nmanifest.json中配置router字段 详见文档\n\n\n路由跳转\n1.组件跳转[navigator组件] 2.五种js跳转方式详见文档\n1. 组件跳转[a组件] 2. router.push(OBJECT)\n\n\n获取应用实例\n调用函数：getApp()\n访问变量：this.$app\n\n\n模板逻辑渲染\n配置命名空间： 例如：wx:if/wx:elif/wx:else\n不需要 例如：if/elif/else\n\n\n钩子函数\nonLoad: 页面加载时触发\nonInit: 页面加载时触发\n\n\n\nonDestroy: 页面卸载\nonUnload: 页面卸载\n\n\n\nonBackPress：不支持\nonBackPress：支持\n\n\n\nonPageScroll：支持\nonPageScroll：不支持\n\n\n\nonPullDownRefresh： 支持\nonPullDownRefresh：不支持\n\n\n初始化状态(state)\ndata: {list: []}\nprivate: { list: [] }\n\n\n更新组件状态\nsetData函数更新\n类vue语法\n\n\nUI事件绑定方式\nbindEventName\n（on|@)EventName\n\n\nUI事件自定义传参\n不支持\n支持\n\n\nAPI\n挂载在wx命名空间下：如wx.showShareMenu(OBJECT)\n需引用相关模块：import share from '@system.share'\n\n\n"
        },
        {
          "title": "页面组件在快应用的模拟",
          "url": "/documents/diff.html#页面组件在快应用的模拟",
          "content": "页面组件在快应用的模拟onShow onHide （大家都有）\n切换卡的支持，\n>快应用需要外包tabs组件 `` 这样唤起onTabItemTapnavigationBarBackgroundColor\nnavigationBarTextStyle\nnavigationBarTitleText\n滚动下拉刷新相关的事件唤起\n>onPullDownRefresh onReachBottom onPageScrollenablePullDownRefresh disableScroll\ntab-content 里面包含list组件与refresh组件\nlist.scroll--> onPageScroll  \nlist.scrollbottom --> onReachBottom\nrefresh.refresh --> onPullDownRefresh\n转发按钮事件的唤起  onShareAppMessage\n>如果用户定义了onShareAppMessage，那么我们就添加onMenuPress，这样右上角就会出现分享按钮 或在编译期扫描　对其onTap事件加上onShareAppMessage钩子\n 详见 https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html#%E9%A1%B5%E9%9D%A2%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0\n 与 https://doc.quickapp.cn/features/system/share.html\n"
        },
        {
          "title": "官网",
          "url": "/documents/diff.html#官网",
          "content": "官网微信小程序  百度小程序  \n支付小程序  \n快应用  "
        }
      ]
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
      "title": "",
      "content": "",
      "url": "/apis/interaction.html",
      "children": [
        {
          "title": "交互",
          "url": "/apis/interaction.html#交互",
          "content": "交互"
        },
        {
          "title": "showModal(Object object)",
          "url": "/apis/interaction.html#交互-showmodalobject-object",
          "content": "showModal(Object object)显示模态对话框参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ntitle\nstring\n\n是\n提示的标题\n都支持\n\n\ncontent\nstring\n\n是\n提示的内容\n都支持\n\n\nshowCancel\nboolean\ntrue\n否\n是否 \b 显示取消按钮\n微信\n\n\ncancelText\nstring\n'取消'\n否\n取消 \b 按钮的文字，最多 4 个 \b 字符\n都支持\n\n\ncancelColor\nstring\n#000000\n否\n取消按钮的文字颜色，必须是 16 进制格式的颜色字符串\n微信\n\n\nconfirmText\nstring\n'确定'\n否\n确定 \b 按钮的文字，最多 4 个 \b 字符\n都支持\n\n\nconfirmColor\nstring\n#3cc51f\n否\n确认按钮的文字颜色，必须是 16 进制格式的颜色字符串\n微信\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\nobject.success 回调函数参数Object res\n\n属性\n类型\n说明\n支持平台\n\n\n\n\nconfirm\nbooleam\n为 true 时，表示用户点击了确定按钮\n都支持\n\n\n代码示例React.api.showModal({  title: '温馨提示',\n  content: '您是否想查询快递单号:1234567890',\n  confirmText: '马上查询',\n  cancelText: '暂不需要',\n  success: result => {\n    console.log('result', result);\n  }\n});\n"
        },
        {
          "title": "showToast(Object object)",
          "url": "/apis/interaction.html#交互-showtoastobject-object",
          "content": "showToast(Object object)显示一个弱提示，可选择多少秒之后消失参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ntitle\nstring\n\n是\n提示的内容\n都支持\n\n\nicon\nstring\n微信：success，支付：none\n否\n图标\n都支持\n\n\nimage\nstring\n\n否\n自定义图标的本地路径，image 的优先级高于 icon\n微信\n\n\nduration\nnumber\n微信： 1500， 支付宝： 2000\n否\n提示的延迟时间\n都支持\n\n\nmask\nboolean\nfalse\n否\n是否显示透明蒙层，防止触摸穿透\n微信\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例React.api.showToast({  icon: 'success',\n  title: '操作成功',\n  duration: 3000,\n  success: () => {}\n});\n"
        },
        {
          "title": "hideToast()",
          "url": "/apis/interaction.html#交互-hidetoast",
          "content": "hideToast()"
        },
        {
          "title": "showLoading(Object object)",
          "url": "/apis/interaction.html#交互-showloadingobject-object",
          "content": "showLoading(Object object)显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ntitle\nstring\n\n是\n提示的内容\n都支持\n\n\nmask\nboolean\nfalse\n否\n是否显示透明蒙层，防止触摸穿透\n微信\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例React.api.showLoading({  title: '加载中...'\n});\n"
        },
        {
          "title": "hideLoading()",
          "url": "/apis/interaction.html#交互-hideloading",
          "content": "hideLoading()"
        },
        {
          "title": "showActionSheet(Object object)",
          "url": "/apis/interaction.html#交互-showactionsheetobject-object",
          "content": "showActionSheet(Object object)参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nitemList\nArray string\n\n是\n按钮的文字数组，数组长度最大为 6\n都支持\n\n\nitemColo\nstring\n#000000\n否\n按钮的文字颜色\n微信\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例React.api.showActionSheet({  title: '支付宝-ActionSheet',\n  itemList: ['菜单一', '菜单二', '菜单三', '菜单四', '菜单五'],\n  success: res => {\n    const btn = res.index === -1 ? '取消' : '第' + res.index + '个';\n  }\n});\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/apis/nav.html",
      "children": [
        {
          "title": "导航",
          "url": "/apis/nav.html#导航",
          "content": "导航"
        },
        {
          "title": "navigateTo(OBJECT)",
          "url": "/apis/nav.html#导航-navigatetoobject",
          "content": "navigateTo(OBJECT)保留当前页面，跳转到应用内的某个页面，使用 wx.navigateBack 可以返回到原页面。OBJECT 参数说明：\n\n参数\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nurl\nstring\n是\n需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例  React.api.navigateTo({      wx.navigateTo({\n        url: 'test?id=1'\n  })\n});\n//test.jsPage({\n  componentDidMount: function(option) {\n    console.log(option.query);\n  }\n});\nTips: 目前页面路径最多只能十层。\n"
        },
        {
          "title": "redirectTo(OBJECT)",
          "url": "/apis/nav.html#导航-redirecttoobject",
          "content": "redirectTo(OBJECT)关闭当前页面，跳转到应用内的某个页面。OBJECT 参数说明：\n\n参数\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nurl\nstring\n是\n需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例  React.api.redirectTo({      wx.navigateTo({\n        url: 'test?id=1'\n  })\n});\n"
        },
        {
          "title": "reLaunch(OBJECT)",
          "url": "/apis/nav.html#导航-relaunchobject",
          "content": "reLaunch(OBJECT)关闭所有页面，打开到应用内的某个页面。OBJECT 参数说明：\n\n参数\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nurl\nstring\n是\n需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例  React.api.reLaunch({      wx.navigateTo({\n        url: 'test?id=1'\n  })\n});\n//test.jsPage({\n  componentDidMount: function(option) {\n    console.log(option.query);\n  }\n});\n"
        },
        {
          "title": "navigateBack(OBJECT)",
          "url": "/apis/nav.html#导航-navigatebackobject",
          "content": "navigateBack(OBJECT)关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。OBJECT 参数说明：\n\n参数\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ndelta\nnumber\n1\n是\n返回的页面数，如果 delta 大于现有页面数，则返回到首页\n都支持\n\n\n代码示例// 注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码\n// 此处是A页面\nReact.api.navigateTo({\n  url: 'B?id=1'\n});\n\n// 此处是B页面\nReact.api.navigateTo({\n  url: 'C?id=1'\n});\n\n// 在C页面内 navigateBack，将返回A页面\nReact.api.navigateBack({\n  delta: 2\n});\n"
        },
        {
          "title": "设置导航条",
          "url": "/apis/nav.html#设置导航条",
          "content": "设置导航条"
        },
        {
          "title": "setNavigationBarTitle(OBJECT)",
          "url": "/apis/nav.html#设置导航条-setnavigationbartitleobject",
          "content": "setNavigationBarTitle(OBJECT)动态设置当前页面的标题\n\n参数\n类型\n是否必须\n说明\n支持平台\n\n\n\n\ntitle\nstring\n是\n页面标题\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n"
        },
        {
          "title": "setNavigationBarColor(OBJECT)",
          "url": "/apis/nav.html#设置导航条-setnavigationbarcolorobject",
          "content": "setNavigationBarColor(OBJECT)OBJECT 参数说明：\n\n参数\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nbackgroundColor\nstring\n是\n背景颜色值，有效值为十六进制颜色\n都支持\n\n\nfrontColor\nstring\n\n前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000\n微信支持\n\n\nborderBottomColor\nstring\n否\n导航栏底部边框颜色，支持十六进制颜色值。若设置了 backgroundColor，则borderBottomColor 不会生效，默认会和 backgroundColor 颜色一样\n支付宝\n\n\nreset\nboolean\n否\n是否重置导航栏为支付宝默认配色，默认 false\n支付宝\n\n\nanimation\nObject\n否\n动画效果\n微信\n\n\nanimation.duration\nNumber\n否\n动画变化时间，默认0，单位：毫秒\n微信\n\n\nanimation.timingFunc\nString\n否\n动画变化方式，默认 linear\n支付宝\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n"
        },
        {
          "title": "showNavigationBarLoading()",
          "url": "/apis/nav.html#设置导航条-shownavigationbarloading",
          "content": "showNavigationBarLoading()在当前页面显示导航条加载动画。"
        },
        {
          "title": "hideNavigationBarLoading()",
          "url": "/apis/nav.html#设置导航条-hidenavigationbarloading",
          "content": "hideNavigationBarLoading()隐藏导航条加载动画。"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/apis/api.html",
      "children": [
        {
          "title": "TabBar",
          "url": "/apis/api.html#tabbar",
          "content": "TabBar"
        },
        {
          "title": "switchTab(OBJECT)",
          "url": "/apis/api.html#tabbar-switchtabobject",
          "content": "switchTab(OBJECT)跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面OBJECT 参数说明：\n\n参数\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nurl\nstring\n是\n需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n代码示例// app.json{\n  \"tabBar\": {\n    \"list\": [{\n      \"pagePath\": \"index\",\n      \"text\": \"首页\"\n    },{\n      \"pagePath\": \"other\",\n      \"text\": \"其他\"\n    }]\n  }\n}\nReact.api.switchTab({  url: '/index'\n})\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/apis/animation.html",
      "children": [
        {
          "title": "动画",
          "url": "/apis/animation.html#动画",
          "content": "动画"
        },
        {
          "title": "createAnimation(Object object)",
          "url": "/apis/animation.html#动画-createanimationobject-object",
          "content": "createAnimation(Object object)创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。OBJECT 参数说明：\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nduration\nnumber\n400\n否\n动画持续时间，单位 ms\n都支持\n\n\ntimingFunction\nstring\n'linear'\n否\n动画的效果\n微信\n\n\ndelay\nnumber\n0\n否\n动画延迟时间，单位 ms\n都支持\n\n\ntransformOrigin\nstring\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n50% 50% 0\n否\n设置transform-origin\n都支持\n\n\ntimingFunction 的合法值：\n\n值\b\n说明\n\n\n\n\n'linear'\n动画从头到尾的速度是相同的\n\n\n'ease'\n动画以低速开始，然后加快，在结束前变慢\n\n\n'ease-in'\n动画以低速开始\n\n\n'ease-in-out'\n动画以低速开始和结束\n\n\n'ease-out'\n动画以低速结束\n\n\n'step-start'\n动画第一帧就跳至结束状态直到结束\n\n\n'step-end'\n动画一直保持开始状态，最后一帧跳到结束状态\n\n\n"
        },
        {
          "title": "animation",
          "url": "/apis/animation.html#animation",
          "content": "animation样式：\n\n方法\n参数\n说明\n\n\n\n\nopacity\nvalue\n透明度，参数范围 0~1\n\n\nbackgroundColor\ncolor\n颜色值\n\n\nwidth\nlength\n如果传入 number 则默认使用 px，可传入其他自定义单位的长度值\n\n\nheight\nlength\n同上\n\n\ntop\nlength\n同上\n\n\nleft\nlength\n同上\n\n\nbottom\nlength\n同上\n\n\nright\nlength\n同上\n\n\n旋转：\n\n方法\n参数\n说明\n\n\n\n\nrotate\ndeg\ndeg 范围 -180 ~ 180，从原点顺时针旋转一个 deg 角度\n\n\nrotateX\ndeg\ndeg 范围 -180 ~ 180，在 X 轴旋转一个 deg 角度\n\n\nrotateY\ndeg\ndeg 范围 -180 ~ 180，在 Y 轴旋转一个 deg 角度\n\n\nrotateZ\ndeg\ndeg 范围 -180 ~ 180，在 Z 轴旋转一个deg角度\n\n\nrotate3d\n(x, y , z, deg)\n同上\n\n\n缩放：\n\n方法\n参数\n说明\n\n\n\n\nscale\nsx,[sy]\n只有一个参数时，表示在 X 轴、Y 轴同时缩放 sx 倍；两个参数时表示在 X 轴缩放 sx 倍，在 Y 轴缩放 sy 倍\n\n\nscaleX\nsx\n在 X 轴缩放 sx 倍\n\n\nscaleY\nsy\n在 Y 轴缩放 sy 倍\n\n\nscaleZ\nsz\n在 Z 轴缩放 sy 倍\n\n\nscale3d\n(sx,sy,sz)\n在 X 轴缩放 sx 倍，在 Y 轴缩放sy 倍，在 Z 轴缩放 sz 倍\n\n\n偏移：\n\n方法\n参数\n说明\n\n\n\n\ntranslate\ntx,[ty]\n只有一个参数时，表示在 X 轴偏移 tx；两个参数时，表示在 X 轴偏移 tx，在 Y 轴偏移 ty，单位均为 px。\n\n\ntranslateX\ntx\n在 X 轴偏移 tx，单位 px\n\n\ntranslateY\nty\n在 Y 轴偏移 tx，单位 px\n\n\ntranslateZ\ntz\n在 Z 轴偏移 tx，单位 px\n\n\ntranslate3d\n(tx,ty,tz)\n在 X 轴偏移 tx，在 Y 轴偏移t y，在Z轴偏移 tz，单位 px\n\n\n倾斜：\n\n方法\n参数\n说明\n\n\n\n\nskew\nax,[ay]\n参数范围 -180 ~ 180。只有一个参数时，Y 轴坐标不变，X 轴坐标延顺时针倾斜 ax 度；两个参数时，分别在 X 轴倾斜 ax 度，在 Y 轴倾斜 ay 度\n\n\nskewX\nax\n参数范围 -180 ~ 180。Y 轴坐标不变，X 轴坐标延顺时针倾斜 ax度\n\n\nskewY\nay\n在参数范围 -180~180。X 轴坐标不变，Y 轴坐标延顺时针倾斜 ay 度\n\n\n矩阵变形:\n\n方法\n参数\n说明\n\n\n\n\nmatrix\n(a,b,c,d,tx,ty)\n 同transform-function \n\n\nmatrix3d\nax\n 同transform-function matrix3d \n\n\n"
        },
        {
          "title": "动画队列",
          "url": "/apis/animation.html#animation-动画队列",
          "content": "动画队列调用动画操作方法后需要要调用 step() 来表示一组动画完成，在一组动画中可以调用任意多个动画方法，一组动画中的所有动画会同时开始，当一组动画完成后才会进行下一组动画。step() 可以传入一个跟 my.createAnimation() 一样的配置参数用于指定当前组动画的配置。Animation.step(Object object)OBJECT 参数说明：\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nduration\nnumber\n400\n否\n动画持续时间，单位 ms\n都支持\n\n\ntimingFunction\nstring\n'linear'\n否\n动画的效果\n微信\n\n\ndelay\nnumber\n0\n否\n动画延迟时间，单位 ms\n都支持\n\n\ntransformOrigin\nstring\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n50% 50% 0\n否\n设置transform-origin\n都支持\n\n\ntimingFunction 的合法值：\n\n值\b\n说明\n\n\n\n\n'linear'\n动画从头到尾的速度是相同的\n\n\n'ease'\n动画以低速开始，然后加快，在结束前变慢\n\n\n'ease-in'\n动画以低速开始\n\n\n'ease-in-out'\n动画以低速开始和结束\n\n\n'ease-out'\n动画以低速结束\n\n\n'step-start'\n动画第一帧就跳至结束状态直到结束\n\n\n'step-end'\n动画一直保持开始状态，最后一帧跳到结束状态\n\n\n"
        }
      ]
    }
  ]
}