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
          "content": "安装执行以下命令：npm i -g nanachi-cli\n# if you are using yarn\nyarn global add nanachi-cli\n即可全局安装 nanachi。"
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
      "content": "小程序的 wxml 只支持 view、text 与它的那些内置组件标签，娜娜奇可以让你直接使用 div, span, p, b, strong 等 HTML 标签。块状元素会转换成 view, 内联元素会转换为 text。如果你使用 React 方式定义组件，那么对应的标签名必须以大写开头。在小程序中，组件不支持包含其他标签，但我们的 React 组件可以充许包含其他标签或组件。有关循环，if, 组件套组件，render props 等用法，可以脚手架的 qunar 示例  xxxxx\n\n",
      "url": "/documents/jsx.html",
      "children": []
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
      "title": "兼容",
      "content": "对于原生自定义组件兼容，只需要将原生组件配置到属性config里usingComponents字段，与微信小程序原生开发配置方式一致。class Animal extends React.component{    config = {\n        usingComponents: {\n            Tom: '/components/NativeComponentTom/index'\n        }\n    }\n    //other code\n    render(){\n        return (\n            \n                \n            \n        )\n    }\n}\n",
      "url": "/documents/support-native-component.html",
      "children": []
    },
    {
      "title": "API",
      "content": "\n\nAPI\n类型\n说明\n\n\n\n\nReact.createElement\n内部 API\n创建元素, 框架在内部会帮你调用这个方法，业务代码中不要用它\n\n\nReact.createRef\n \n不存在\n\n\nReact.forwardRef\n \n不存在\n\n\nReact.wx\n \n相当于微信的 wx，对里面许多方法做了 Promise 处理\n\n\nReact.getApp\n \n相当于微信的 getApp\n\n\nReact.getCurrentPages\n \n相当于微信的 geCurrentPage\n\n\nReact.Component\n \n所有组件的基类\n\n\nReact.toComponent\n内部 API\n用来创建组件\n\n\nReact.toRenderProps\n内部 API\n用来代替 render 属性对应的函数\n\n\nReact.toClass\n内部 API\n用来转译 es6 类\n\n\nReact.toStyle\n内部 API\n用来转译样式\n\n\nReact.toPage\n内部 API\n页面组件会自动在底部添加这方法\n\n\ncomponentDidShow\n页面组件的生命周期钩子\n相当于 onShow\n\n\ncomponentDidHide\n页面组件的生命周期钩子\n相当于 onHide\n\n\nonPageScroll\n页面组件的事件\n监听用户滑动页面事件\n\n\nonShareAppMessage\n页面组件的事件\n监听用户点击页面内转发按钮（ 组件 open-type=\"share\"）或右上角菜单“转发”按钮的行为，并自定义转发内容。注意：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮\n\n\nonReachBottom\n页面组件的事件\n监听用户上拉触底事件\n\n\nonPullDownRefresh\n页面组件的事件\n监听用户下拉刷新事件\n\n\ncomponentWillMount\n组件的生命周期钩子\n页面组件的 props 中有 path, query 等路由相关信息\n\n\ncomponentWillUpdate\n组件的生命周期钩子\n\n\n\ncomponentDidMount\n组件的生命周期钩子\n\n\n\ncomponentDidUpdate\n组件的生命周期钩子\n\n\n\ncomponentWillRecieveProps\n组件的生命周期钩子\n\n\n\ncomponentWillUnmount\n组件的生命周期钩子\n\n\n\nshouldComponentUpdate\n组件的生命周期钩子\n\n\n\ncomponentDidCatch\n组件的生命周期钩子\n\n\n\ngetSnapshotBeforeUpdate\n组件的生命周期钩子\n\n\n\ngetDerivedStateFromProps\n组件的生命周期钩子\n\n\n\ngetDerivedStateFromCatch\n组件的生命周期钩子\n\n\n\ngetChildContext\n组件的方法\n\n\n\nsetState\n组件的方法\n更新页面\n\n\nforceUpdate\n组件的方法\n更新页面\n\n\nrefs\n组件实例上的对象\n里面保存着子组件的实例（由于没有 DOM，对于普通标签来说， 虽然也能保存着它的虚拟 DOM )\n\n\nrender\n组件的方法\n里面必须使用 JSX ，其他方法不能存在 JSX，不能显式使用 createElement\n\n\n",
      "url": "/documents/api.html",
      "children": []
    },
    {
      "title": "路由",
      "content": "路由器的能力是由 Page 的生命周期与 wx 共同完成的。我们可以访问页面组件的 componentWillMount/DidMount 的 this.props 得到当前的信息，然后跳转。componentWillMount(){   console.log(this.props.path)\n   console.log(this.props.query)\n   React.wx.navigateTo() // 或 redirectTo() 或 switchTab()\n}\n或者使用组件  示例： 点击跳转",
      "url": "/documents/router.html",
      "children": []
    },
    {
      "title": "常见问题",
      "content": "暂时不支持 redux,请使用 React.getApp().globalData 来在页面间交换数据\nrender 里面不能定义变量,即不能出现 var, const, let 语句。render() 里只能使用 JSX 来描述结构，不能使用 React.createElement()。\n组件必须定义在 components 中\n页面引用了组件了，如果组件有样式，那么页面的样式表也要 import 这个组件的样式表\n为什么底部不出现 TabBar？ 这是小程序自身的 BUG，详见这里\n路由跳转时，如何拿到当前路径与参数，原来是通过 onLoad 方法拿，现在你可以通过任何一个页面组件的生命周期钩子，访问 this.props，里面就有 path 与 query 属性\n静态资源统一放到 src 目录下的 assets 目录下\nwxml 模板部分，如果使用了箭头函数，那么它里面不能出现 this 关键字\n不要在 props, state, context 里面放 JSX，因为 JSX 的结构容易出现环引用，导到微信小程序内部的 JSON.stringify 出错\nslot 机制与 render props 是有代价，它们会在 components/Fragments 目下添加许多当作桥梁用的碎片文件，不要滥用\nrender props 机制只能用于有狀态组件，并且只应用于 render() 属性，只能传一个参数，参数只能是 this.state 或 this.props\n更多问题请到 GitHub 提 Issue。",
      "url": "/documents/questions.html",
      "children": []
    },
    {
      "title": "关于",
      "content": "此项目由 YMFE 提供支持。",
      "url": "/documents/about.html",
      "children": []
    }
  ]
}