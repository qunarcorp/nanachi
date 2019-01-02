window.ydoc_plugin_search_json = {
  "文档": [
    {
      "title": "介绍",
      "content": "自微信小程序出来后，互联网进入一个新的纪元。中国移动互联网再次三巨头切割，三大小程序加上以小米为首的快应用，割据这个大蛋糕。由于手机的容量有限，每个人不可能装太多APP ，总有一些APP大家都装，它们称之为超级APP，它们集成越来越多的功能，并且以小程序，直达号，公众号等方式收纳第三方开发的功能。它们巨大的流量红利不容小视，这就是小程序越来越火的原因。在中国移动互联网中PWA并不是前端技术的未来，因为国内最有价值的内容，例如微信订阅号、微博以及各种自媒体，还有各种短视频内容，无一例外都是私域内的东西\n小程序开始体积限制得很死，并且语法表现力非常贫乏。但长得有点像vue，因此为了便利我们的开发，出现一些以vue编写小程序的转译框架，如wepy,mpvue。但随着体积的放开，及人们对小程序的研究深入，发现其虚拟DOM机制就是模仿自React，因此用React开发小程序其实效果更佳。React的JSX 动态模板表现更强，语法提示及着色更是被各大IDE广泛支持。于是娜娜奇转译器诞生了。娜娜奇，是一处编写多处运行的小程序快应用的转译框架，提供按平台打包核心库，按平台打包缺省组件，按平台打包业务代码，按平台注入API包（以后这个会演化为按需注入平台API补丁包）的能力。快应用，国内手机商提供的内置迷你的hybird方案，小程序，BAT提供的依赖于大流量APP的寄生APP方案。核心库是指ReactWx, ReactBu, ReactAli, ReactQuick,针对不同的平台使用不同的迷你React库，娜娜奇是希望使用React强大的组件机制来突破小程序的弱模板限制。缺省组件是指其他平台都使用微信那套内置组件来构建页面，毕竟 其他平台都是抄微信的，但抄的速度没有这么快，也没有这么完整，需要我们提供一些组件来补全。按需打包业务代码是指登录支付等核心流程可能出入太大，如果使用if else会导致小程序的size过大，因此提供ANU_ENV变量实现打编译打包对应平台的代码。API包是指wx, swan, my这些对象，为小程序提供调用电池，摄像头，通信录，二维包等原生API的能力，但是它们也不统一，需要我们做兼容处理。直接访问React.api就能得到磨平后的API。接需注入API补丁包则是刚才功能的更高级形式，目的是让体积更加小。快速开始",
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
          "content": "前置要求下载并安装微信开发者工具\n本地 Node.js 版本 8.6.0 以上\n开发过程中，对文件夹及文件的命名都有一定要求，见发布打包一节\n"
        },
        {
          "title": "安装",
          "url": "/documents/install.html#安装",
          "content": "安装npmnpm install nanachi-cli -gyarnyarn global add nanachi-clinanachi init  创建工程\ncd  && npm i 安装依赖\nnanachi watch:[wx|bu|ali|quick] 监听构建小程序\n用对应的小程序开发工具打开当中的dist目录，自己在source目录中进行开发\nnanachi watch:wx默认是从npm拉对应的ReactWx, ReactAli...的稳定版，一星期发布一次。如果出BUG，急紧修复，着急要最新版本，可以使用nanachi watch:wx --beta命令。\n注意：快应用下构建结束后，需要执行以下三步骤npm install    #  需要开另一个窗口, 安装快应用的hap编译器， 只需安装一次 npm run build  # 与上面同一窗口, 生成dist目录\nnpm run server # 需要第三个窗口, 运行node环境，这时会出一个二维码与一个链接，保证PC的WIFI与手机的WIFI是同一个，然后用手机上的快应用调试器 扫描，就能看到效果。也可以将链接贴到chrome中，这时二维码会出现页面上，也是手机扫描，可以同时在手机与网页上看到效果，此这种方式用于调式。\n"
        },
        {
          "title": "第二种安装",
          "url": "/documents/install.html#第二种安装",
          "content": "第二种安装此方式下适用于去哪儿网内部用户，在参与开发nanachi框架的技术人员git clone git@github.com:RubyLouvre/anu.git 或git clone https://github.com/RubyLouvre/anu.git\n命令行定位到packages/cli目录下，执行npm link 如果之前装过要先npm unlink\n然后定位到外面的目录，不要在cli目录中建工程。 使用 cd ../../ && nanachi init demo 创建工程\n定位到 demo 目录下安装依赖npm i或yarn\nnanachi build 全量编译代码，build后面可跟参数， 如nanachi build:ali\nnanachi watch 增量编译代码并监听文件变化，watch后面可跟参数\n用微信开发工具打开当中的dist目录，自己在source目录中进行开发\ncd anu/packages/cli && npm linkcd ../../ && nanachi init demo\ncd demo && yarn\nnanachi watch   //或 nanachi watch:wx 或 nanachi watch:bu 或 nanachi watch:ali 或 或 nanachi watch:tt\n\n\n\n\n有远程请求的页面，需要打开右上角 “>>” 详情，  不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书 打上勾"
        },
        {
          "title": "快应用的安装流程",
          "url": "/documents/install.html#快应用的安装流程",
          "content": "快应用的安装流程执行以下命令：npm install -g hap-toolkit //安装快应用的hap编译器， 只需安装一次nanachi init xxx     // 初始化工程\ncd xxx && npm i      // npm i可以改成yarn， 安装nanachi的依赖\nnanachi watch:quick  // 编译代码\nnpm i                // 这是安装快应用的编译器hap的依赖，\nnpm run build        // 这是hap 的构建命令\nnpm run server  -- --watch  //或hap server --watch 这是hap 的打开远程服务，生成二维码让你用手机扫码查看编译后的app\n。快应用还没有像微信， 支付宝， 百度那样提供好用的开发者工具，想查看结果需要手机装 快应用调试器。快应用只能用于安卓。快应用调试器快应用预览版快应用的目标代码分别在src（ux文件）与dist（二进制）在编译二进制过程，可能有许多警告，因为快应用的标签不支持 data-*属性及许多HTML样式，但这不会影响结果。\n\n\n"
        }
      ]
    },
    {
      "title": "如何升级",
      "content": "娜娜奇转译器正处在高速迭代的时期，不断添加更多好用的特性，支持更多的平台。因此出BUG时，可以给我们提ISSUE。我们修复后，大家如何应用新的娜娜奇版本呢？回到你之前下载的anu目录下，然后定位到packages/cli目录，再次npm i 或 yarn就行了。然后你在自己的工程，再次nanachi watch或nanachi watch:bu就是使用新的娜娜奇版本进行编译",
      "url": "/documents/update.html",
      "children": []
    },
    {
      "title": "全局对象",
      "content": "在小程序中，一个应用由多个页面组成，一个页面由多个组件组成。app.js就是用来定义全局配置对象， 全局数据对象，全局回调，全局样式及import所有页面。app.js外表上看来是一个React组件全局配置对象 config 配置标题栏与tab栏\n全局数据对象 globalData\n全局回调\n\nonGlobalShare  如果页面组件没有定义onShareAppMessage方法，那么就会调用此方法，此方法要求返回对象\nonCollectLogs 所有click/tap/change/input/blur等核心的与用户行为相关的事件触发时，都会调用这个回调\nonSendLogs  onCollectLogs理应凑够一定数量的日志就会调用此方法，用于上传日志;并且，我们也应该在app onHide中上传所有日志。\nonGlobalLoad 每个页面在开始渲染页面时就会执行此回调，页面有onLoad方法时，也会同时执行此方法\nonGlobalReady 每个页面在渲染页面后（布局完成）就会执行此回调，页面有onReady方法时，也会同时执行此方法\nonGlobalShow 每个页面在显示时就会调用此方法，页面有onShow方法时，也会同时执行此方法\nonGlobalHide 每个页面在隐藏时就会调用此方法，页面有onHide方法时，也会同时执行此方法\nonGlobalUnload 每个页面在销毁时就会调用此方法，页面隐藏不一定调用它，只有此页面被踢出页面栈时才会调用\n页面栈一共保存5个页面。当页面销毁时，它会依赖调用组件的componentWillUnmount,每个子组件拥componentWillUnmount，页面组件的onUnload，全局可能存在的onGlobalUnload。\nonHide 小程序在退出时会调用此方法（如果是快应用则是onDistory），它的行为类似浏览器中的onbeforeunload\n\n\n全局样式 自己手动import 'app.scss'或import 'app.less'\nimport 所有以 ./pages/ 开头的依赖放到 app.json 中 pages 配置项中。\n默认我们会把 第一个./pages开头的依赖当作首页。\nimport React from '@react';import './pages/index/index'; //引入所有页面。\nimport './pages/demo/base/index';\nimport './pages/demo/native/index/index';\nimport './app.less';\n\nclass Global extends React.Component {\n    //全局配置\n     config = {\n        window: {\n            backgroundTextStyle: 'light',\n            navigationBarBackgroundColor: '#0088a4',\n            navigationBarTitleText: 'mpreact',\n            navigationBarTextStyle: '#fff'\n        }\n    };\n    // 全局数据\n    globalData = {\n        ufo: 'ufo'\n    };\n    // 全局回调，包括 onShareAppMessage， onCollectLogs, onSendLogs, onGlobalLoad, onGlobalReady\n    // 全局的分享，如果某个页面组件没有定义onShareAppMessage，就会调用它\n    onShareAppMessage(){ \n        return {} \n    };\n    onLaunch() {\n        console.log('App launched');\n    }\n}\n\nexport default App(new Global());\n快应用可以这样设置跨页面的全局数据 this.$app.$data = {a:1}其他配置项统一放在config对象中，详细配置列表参见这里",
      "url": "/documents/app.html",
      "children": []
    },
    {
      "title": "页面组件",
      "content": "页面定义在 pages 目录下的index.js文件中。这样一来，就会存在这么多index.js,因此它们必须包含在相应的文件夹中，而这些文件夹不要以index命名。原因：快应用有一个manifest.json文件, 里面有一个router对象，包含所有页面\n\"router\": {    \"entry\": \"pages/index\",\n    \"pages\": {\n      \"pages/index\": {\n        \"component\": \"index\"\n      },\n      \"pages/demo/syntax/index\": {\n        \"component\": \"index\"\n      },\n      \"pages/demo/syntax/api\": {\n        \"component\": \"index\"\n      },\n      \"pages/demo/syntax/await\": {\n        \"component\": \"index\"\n      },\n      \"pages/demo/syntax/children\": {\n        \"component\": \"index\"\n      },\n      \"pages/demo/syntax/extend\": {\n        \"component\": \"index\"\n      },\n      \"pages/demo/syntax/if\": {\n        \"component\": \"index\"\n      }\n    }\n}\n然后我们页面切换是通过React.api.redirectTo实现function createRouter(name) {    return function (obj) {\n        var router = require('@system.router');\n        var params = {};\n        var uri = obj.url.slice(obj.url.indexOf('/pages') + 1);\n        uri = uri.replace(/\\?(.*)/, function (a, b) {\n            b.split('=').forEach(function (k, v) {\n                params[k] = v;\n            });\n            return '';\n        }).replace(/\\/index$/, '');\n        console.log(uri, \"createRouter\")\n        router[name]({\n            uri:\"/\"+ uri,\n            params: params\n        });\n    };\n}\n因此文件名目录名好重要！它必须是一个有状态的 React 组件。JSX 只能出现在 render() 方法里，它会编译成相应的 wxml 文件，因此不能使用 R React.createElement()代替 JSX。有关 JSX 的注意事项可以看这里。页面组件与components目录下的通用组件有一些特异点，它是多出了componentDidShow, componentDidHide这两个生命周期钩子，与onPullDownRefresh onReachBottom onPageScroll onShareAppMessage这些事件。并且在config中能指定tabBar与分享按钮。应用组件更新 state 必须通过 this.setState 函数。比如：//pages/train/index.jsimport React from '@react';\n\nclass P extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      iconSize: [20, 30, 40, 50, 60, 70],\n      text: 'this is first line\\nthis is second line'\n    };\n  }\n  static config = {};\n\n  add() {\n    this.setState({\n      text: this.state.text + '\\nthis is new line'\n    });\n  }\n\n  remove() {\n    var textAry = this.state.text.split('\\n');\n    if (!textAry.length) return;\n    textAry.pop();\n\n    this.setState({\n      text: textAry.join('\\n')\n    });\n  }\n  componentWillMount() {\n    console.log('base componentWillMount');\n  }\n  componentDidMount() {\n    console.log('base componentDidMount');\n  }\n  render() {\n    return (\n      \n        \n          Icon\n          \n            {this.state.iconSize.map(function(item) {\n              return ;\n            })}\n          \n        \n      \n    );\n  }\n}\n\nexport default P;\n",
      "url": "/documents/page.html",
      "children": [
        {
          "title": "页面的生命周期",
          "url": "/documents/page.html#页面的生命周期",
          "content": "页面的生命周期componentWillMount(onLoad) -> onShow -> componentWillMount(onReady)componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate\ncomponentDidUpdate -> componentWillUnmount(onUnload)\n只有页面组件才有onShow, onHide钩子，普通组件没有这两个钩子页面组件必须使用 es6 风格来引入依赖与导出自己。它的静态属性 config 会抽取出来生成对应的 JSON 配置对象，有关配置项可以看这里"
        }
      ]
    },
    {
      "title": "通用组件",
      "content": "通用组件必须定义在 components 目录中，里面建一个文件夹与组件名同名，下面 index.js 就是你编写组件的地方。",
      "url": "/documents/component.html",
      "children": [
        {
          "title": "组件的样板",
          "url": "/documents/component.html#组件的样板",
          "content": "组件的样板//components/Animal/index.jsimport React from '@react';\n\nclass Animal extends React.Component { //组件名必须大写开头，与目录名一样\n  constructor(props) {\n    super();\n    this.state = {\n      name: props.name,\n      age: props.age || 1\n    };\n  }\n\n  static defaultProps = {\n    age: 1,\n    name: 'animal'\n  };\n\n  changeAge() {\n    this.setState({\n      age: ~~(Math.random() * 10)\n    });\n  }\n\n  componentDidMount() {\n    console.log('Animal componentDidMount');\n  }\n\n  componentWillReceiveProps(props) {\n    this.setState({\n      name: props.name\n    });\n  }\n\n  render() {\n    return (\n      \n        名字：\n        {this.state.name} 年龄：\n        {this.state.age} 岁\n        换一个年龄\n      \n    );\n  }\n}\n\nexport default Animal;\n由于目录可能比较深，因此 nanachi 比较贴心地提供了两个默认的别名，@react 与 @components, @react 指向专门为小程序优化的 React, @components 指向开发目录下的 components 目录。JSX 只能出现在 render() 方法或无状态组件的函数体中。JSX 的所有填充数据必须带 this.props, this.state, this.context 前缀。render() 方法里不能出现 var/const/let 语句，只能出现 if 语句与三元表达式或 JSX。map() 方法调用的第一个参数最好使用匿名方法（因为这样会自动 bind this），否则它会自动添加上第二个参数 this  {this.state.iconSize.map(function(item) {\n    return ;\n  })}\n\n会变成  {this.state.iconSize.map(function(item) {\n    return ;\n  }, this)}\n\nJSX 禁止出现 instanceUid, classUid, eventUid, 这些是内部绑定事件时在编译阶段自动添加的。render方法的第一个语句只能元素节点，不能是三元表达式或if语句等表示逻辑性的东西错误的写法class Dog extends React.Component{  //....略\n  render(){\n    return this.props.xxx ? 分支1: 分支2\n  }\n}\n正确的写法class Dog extends React.Component{  //....略\n  render(){\n    return {this.props.xxx ? 分支1: 分支2}\n  }\n}\n原因是三元表达式会变成block标签，而快应用与自定义组件方式不支持顶层元素为template/block"
        }
      ]
    },
    {
      "title": "事件系统",
      "content": "小程序有两种绑定事件的方式。bindtap 绑定一个会冒泡的 tap 事件\ncatchtap 绑定一个不会冒泡的 tap 事件\nnanachi 为了大家方便，还是换回大家熟悉的风格，但不能冒泡的限制还没有搞定，因此也是两种绑定风格。onTap 绑定一个会冒泡的 tap 事件\ncatchTap 绑定一个不会冒泡的 tap 事件\ntap 事件相当于 PC 端的 click 事件，因此建议大家用 onClick 代替 onTap, 娜娜奇会友好地帮你转换成 onTap.",
      "url": "/documents/event.html",
      "children": [
        {
          "title": "事件对象",
          "url": "/documents/event.html#事件对象",
          "content": "事件对象由于小程序存在千差万别的差别，它的事件对象没有像PC有那么多属性与方法，最大的区别是没有stopPropagation 与 preventDefault。但娜娜奇会帮你抹平了 PC 与小程序的差异， 为它添加上伪装的 stopPropagation 与 preventDefault() 方法。注意 stopPropagation() 是没有效果的，你想并且冒泡还需要用 catchClick 的方式来绑定事件。如果 你想它转译成H5，那么catchXXX的回调内部需要大家执行 e.stopPropagation()。小程序事件对象的属性如下：{    target,//里面有dataset\n    pageX,\n    pageY,\n    value, //不一定有，但input, change事件有\n    timeStamp,\n    type,\n    stopPropagation,\n    preventDefault,\n    //还可能有其他属性，不同的事件类型会产生额外的属性\n}\n"
        },
        {
          "title": "事件回调",
          "url": "/documents/event.html#事件回调",
          "content": "事件回调事件回调本身必须定义在类的原型里，不能在视图中使用 this.props.onClick ,只能this.onClick"
        },
        {
          "title": "注意事项",
          "url": "/documents/event.html#注意事项",
          "content": "注意事项定义了事件的标签，可能会自动添加data-beacon-uid,  data-key, data-class-uid, data-instance-uid这些属性，注意不要与它们冲突2018.11.14起 定义了事件的标签， 只会添加上data-beacon-uid属性，后面三者不再添加，从而减少视图的体积\ninput标签 统一使用onChange事件，不要用onInput\n"
        }
      ]
    },
    {
      "title": "JSX",
      "content": "小程序的 wxml 只支持 view、text 与它的那些内置组件标签，娜娜奇可以让你直接使用 div, span, p, b, strong 等 HTML 标签。块状元素会转换成 view, 内联元素会转换为 text。如果你使用 React 方式定义组件，那么对应的标签名必须以大写开头。在小程序中，组件不支持包含其他标签，但我们的 React 组件可以充许包含其他标签或组件。有关循环，if, 组件套组件，render props 等用法，可以脚手架的 qunar 示例为了兼容所有平台，我们定下这些规则原来打算使用view标签的地方，请使用div,h1这些块状元素代替\n文本必须包含在text, span, a, option, label这几种标签内\ntext标签下面不能出现text标签或span标签，span标签下面不能出现text标签或span标签\njsx中不能出现 声明变量或函数的语句，不能出现switch语句\n不要在标签内部使用纯空白或通过两边的空白撑开空间，即  111 111</div\n错误的用法  我是文本\n\n正确的用法   我是文本\n   我是文本\n\n",
      "url": "/documents/jsx.html",
      "children": [
        {
          "title": "数据填充的使用",
          "url": "/documents/jsx.html#数据填充的使用",
          "content": "数据填充的使用错误的用法{this.data.content}正确的用法， 所有数据都只能来自this.props, this.state, this.context{this.state.content}如果这是一个无状态组件，则这样用function AA(props, context){   return {context.content}\n}\n"
        },
        {
          "title": "三元表达式的用法",
          "url": "/documents/jsx.html#三元表达式的用法",
          "content": "三元表达式的用法错误的用法render() {    return this.state.isOk ? null : Home Page;\n  }\n翻译出的XML会出现 null字样，因为{{null}} 会null +\"\" 变成\"null\"{{null}}Home Page正确的用法三元表达式与&&逻辑语句会转换为block标签，在快应用中，组件的根节点不能为block标签，因此需要包一层render() {    return { this.state.isOk ? Home Page: null }\n  }\n翻译出的XML体积还小这么多Home Page"
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
      "title": "通用样式",
      "content": "因为快应用只支持flexbox，因此建议都使用flexbox布局，不要用绝对定位与相对定位与浮动\n",
      "url": "/documents/style.html",
      "children": [
        {
          "title": "注意点",
          "url": "/documents/style.html#注意点",
          "content": "注意点"
        },
        {
          "title": "样式的继承",
          "url": "/documents/style.html#注意点-样式的继承",
          "content": "样式的继承快应用的样式的继承和 H5 类似，不过需要注意的是在快应用中其基本容器（div）所支持的样式及其有限（见上表）。例如字体相关的样式只有 ，  和  等组件支持并且它们都不支持  这样的块级子组件，所以对于字体的样式来说没法像 H5 那样自由的继承。为了支持快应用下, pages目录下的样式表，不能@import pages目录下的其他样式表，也不能@import components目录下的样式表， 只能引用assets目录下的样式表。components目录下的样式也是如此，想共享一些已有的样式，也能引用assets目录下的样式表，不要引用其他组件的样式表。"
        },
        {
          "title": "组件出现在伸缩盒项目位置时的处理",
          "url": "/documents/style.html#注意点-组件出现在伸缩盒项目位置时的处理",
          "content": "组件出现在伸缩盒项目位置时的处理错误的写法      xxx\n    \n  \n正确的写法      xxx\n    \n      \n    \n  \n"
        },
        {
          "title": "垂直和水平居中",
          "url": "/documents/style.html#注意点-垂直和水平居中",
          "content": "垂直和水平居中由于在快应用中元素组件默认使用横向 flex 布局，因此居中可以很方便的使用 justify-content: center 和 align-items: center 来实现主轴和交叉轴方向上的居中。"
        },
        {
          "title": "单位的转换问题",
          "url": "/documents/style.html#注意点-单位的转换问题",
          "content": "单位的转换问题有的平台支持px与rpx，有的只支持px。但如果你不想转换px，你需要将px改成PX;"
        },
        {
          "title": "flex 元素的宽度问题",
          "url": "/documents/style.html#注意点-flex-元素的宽度问题",
          "content": "flex 元素的宽度问题当 flex 元素为垂直方向时（ flex-direction: column），其宽度并不会默认占满父元素的宽度，有些情况下你需要设置 width: 100% 来然他满父元素的宽度：  \n    \n      \n      \n    \n  \n\n\n\n  .row, .col {\n    display: flex;\n  }\n  .row {\n    border: 1px solid black;\n    flex-direction: row;\n  }\n  .col {\n    width: 100%;\n    border: 1px solid red;\n    flex-direction: column;\n  }\n  .item {\n    border: 1px solid blue;\n    height: 300px;\n  }\n\n"
        },
        {
          "title": "样式表",
          "url": "/documents/style.html#样式表",
          "content": "样式表\n\n名称\n类型\n默认值\n描述\n\n\n\n\nwidth\n | \n-\n未设置时使用组件自身内容需要的宽度\n\n\nheight\n | \n-\n未设置时使用组件自身内容需要的高度\n\n\npadding\n\n0\n简写属性，在一个声明中设置所有的内边距属性，该属性可以有1到4个值\n\n\npadding-[left|top|right|bottom]\n\n0\n\n\n\nmargin\n\n0\n简写属性，在一个声明中设置所有的外边距属性，该属性可以有1到4个值\n\n\nmargin-[left|top|right|bottom]\n\n0\n\n\n\nborder\n-\n0\n简写属性，在一个声明中设置所有的边框属性，可以按顺序设置属性width style color，不设置的值为默认值\n\n\nborder-style\ndotted | dashed | solid\nsolid\n暂时仅支持1个值，为元素的所有边框设置样式\n\n\nborder-width\n\n0\n简写属性，在一个声明中设置元素的所有边框宽度，或者单独为各边边框设置宽度\n\n\nborder-[left|top|right|bottom]-width\n\n0\n\n\n\nborder-color\n\nblack\n简写属性，在一个声明中设置元素的所有边框颜色，或者单独为各边边框设置颜色\n\n\nborder-[left|top|right|bottom]-color\n\nblack\n\n\n\nborder-radius\n\n0\n圆角时只使用border-width，border-[left|top|right|bottom]-width无效圆角时只使用border-color，border-[left|top|right|bottom]-color无效\n\n\nborder-[top|bottom]-[left|right]-radius\n\n0\n\n\n\nbackground\n\n-\n支持 渐变样式，暂时不能与background-color、background-image同时使用\n\n\nbackground-color\n\n-\n\n\n\nbackground-image\n\n-\n暂时不支持与background-color，border-color同时使用；不支持网络图片资源，请使用本地图片资源；1010+版本支持9-patch图，详情见背景图样式\n\n\nbackground-size 1000+\ncontain | cover | auto |  | \n100% 100%\n设置背景图片大小，详情见背景图样式\n\n\nbackground-repeat 1000+\nrepeat | repeat-x | repeat-y | no-repeat\nrepeat\n设置是否及如何重复绘制背景图像，详情见背景图样式\n\n\nbackground-position 1010+\n || left | right | top | bottom | center\n0px 0px\n描述了背景图片在容器中绘制的位置，支持1-4个参数，详情见背景图样式\n\n\nopacity\n\n0xff\n\n\n\ndisplay\nflex | none\nflex\n\n\n\nvisibility\nvisible | hidden\nvisible\n\n\n\nflex\n\n-\n父容器为、、时生效\n\n\nflex-grow\n\n0\n父容器为、时生效\n\n\nflex-shrink\n\n1\n父容器为、时生效\n\n\nflex-basis\n\n-1\n父容器为、时生效\n\n\nposition\nnone | fixed\nnone\n父容器为、时不生效\n\n\n[left|top|right|bottom]\n\n-\n-\n\n\n"
        },
        {
          "title": "示例",
          "url": "/documents/style.html#示例",
          "content": "示例"
        },
        {
          "title": "左中右分栏",
          "url": "/documents/style.html#示例-左中右分栏",
          "content": "左中右分栏  \n    \n    \n    \n  \n\n\n\n  .main {\n    display: flex;\n    flex-direction: row;\n  }\n  .cell {\n    flex: 1;\n    height: 200px;\n    background-color: rgb(78, 192, 245);\n    border: 2px solid #444;\n  }\n\n"
        },
        {
          "title": "上中下分栏",
          "url": "/documents/style.html#示例-上中下分栏",
          "content": "上中下分栏  \n    \n    \n    \n  \n\n\n\n  .main {\n    display: flex;\n    flex-direction: column;\n    height: 600px;\n  }\n  .cell {\n    flex: 1;\n    background-color: rgb(78, 192, 245);\n    border: 2px solid #444;\n  }\n\n"
        },
        {
          "title": "格子",
          "url": "/documents/style.html#示例-格子",
          "content": "格子  \n    \n    \n    \n    \n    \n    \n    \n    \n    \n  \n\n\n\n  .main {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .cell {\n    width: 33.333%;\n    height: 200px;\n    background-color: rgb(78, 192, 245);\n    border: 2px solid #444;\n  }\n\n"
        },
        {
          "title": "图片里面有文字",
          "url": "/documents/style.html#示例-图片里面有文字",
          "content": "图片里面有文字  \n    \n    Hero\n  \n\n\n\n  .stack {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .stack__cover, .stack__content {\n    height: 300px;\n  }\n  .stack__cover {\n    width: 100%;\n\n  }\n  .stack__content {\n    margin: -300px 0 0 0;\n  }\n  .text {\n    color: red;\n    font-size: 80px;\n    font-weight: bold;\n  }\n\n由于快应用不支持 absolute 布局。对于图片里面有文字的这种堆叠样式可以使用负的 margin 或者背景图片来布局，不过需要注意的是快应用的背景图片暂时不支持网络资源。上面就是一个负 margin 的实现，我们可以抽取出其中可复用的样式，把它变成一个 scss mixin：@mixin stack($height) {  display: flex;\n  flex-direction: column;\n  .stack__cover, .stack__content {\n    height: $height;\n  }\n  .stack__cover {\n    width: 100%;\n\n  }\n  .stack__content {\n    margin: -$height 0 0 0;\n  }\n}\n然后上面的样式就可以写成这样：  .stack {    align-items: center;\n    @include stack(300px);\n  }\n  .text {\n    color: red;\n    font-size: 80px;\n    font-weight: bold;\n  }\n"
        }
      ]
    },
    {
      "title": "样式编译特性",
      "content": "nanachi支持less, sass, postcss。默认情况下支持less。针对sass，由于sass环境安装比较麻烦，若用户工程目录没安装node-sass依赖，nanachi就会用过postcss来解析sass或者scss文件。",
      "url": "/documents/style_compile_feature.html",
      "children": [
        {
          "title": "模块化打包样式。",
          "url": "/documents/style_compile_feature.html#模块化打包样式。",
          "content": "模块化打包样式。各大样式预处理器对被依赖的@import资源内容打包到当前文件，在很多场景下，这种打包策略会造成应用体积臃肿，比如每个样式文件都引用了基础样式。nanachi对这种策略做了改进，实现了模块化打包。例如:\nSass:   //sass   @import './moduleA.scss';\n   @import './moduleB.scss';\n   .box {\n     color: #333;\n   }\n编译结果：   //sass   @import './moduleA.wxss';\n   @import './moduleB.wxss';\n   .box {\n     color: #333;\n   }\nLess:   //less   @import (reference) './moduleA.less';\n   @import (reference) './moduleB.less';\n   .box {\n     color: #333;\n   }\n编译结果：   //less   @import './moduleA.wxss';\n   @import './moduleB.wxss';\n   .box {\n     color: #333;\n   }\n注: postcss暂不支持该特性。"
        },
        {
          "title": "注意!!!",
          "url": "/documents/style_compile_feature.html#注意!!!",
          "content": "注意!!!pages目录下需要引用公用样式，请将公用样式放入source/assets目录下。禁止pages目录下的文件以任何方式引入components目录下的任何样式表, components目录下的样式表也不能引用pages目录下的样式表。错误的用法1, pages下的JS文件引用components下的样式表//pages/xxx/index.jsimport '../../components/Dog/index.scss'\nimport React form '@react'\n\nclass P extends React.Component{\n错误的用法2，pages下的CSS文件（csss, wxss, acss）引用components下的样式表/*pages/xxx/index.scsss*/import '../../components/Dog/index.scss'\n.xxx{\n  border: 1px solid red\n}\n错误的用法3，component下的CSS文件引用pages目录下的样式表/*compoents/xxx/index.scsss*/import '../../pages/train/index.scss'\n.xxx{\n  border: 1px solid red\n}\n组件的样式必须在组件里面引用，禁止在pages页面样式文件中@import组件样式。"
        }
      ]
    },
    {
      "title": "补丁组件",
      "content": "不是所有小程序都照着微信的那一套抄的，并且微信小程序的个别组件是基于native，他们（支付宝，百度等）拿不到源码，因此实现有所差异或延迟，并且为了以后让娜娜奇也运行于H5端，我们也需要实现那些不是H5标签的组件，因此就有补丁组件。用户在使用时，还是像微信那样直接用全小写的组件标签，如，我们会自动转换成大写开头的标签,并且自动引入Icom组件的依赖。目前需要处理的补丁组件有icon 完工\nbutton 完工\nslider 它们都依赖于touch事件，快应用暂时不支持，可以先在微信上测试\nswiper 它们都依赖于touch事件，快应用暂时不支持，可以先在微信上测试\npicker 开发中\nswitch 待开发\nnavigator 完工\nscroller 待开发\nlist 待开发\n",
      "url": "/documents/patchComponent.html",
      "children": [
        {
          "title": "微信系的但业务中经常用的功能组件",
          "url": "/documents/patchComponent.html#微信系的但业务中经常用的功能组件",
          "content": "微信系的但业务中经常用的功能组件citySelector\nrating\n"
        }
      ]
    },
    {
      "title": "转发分享",
      "content": "小程序寄生在大流量的App中，因此转发共享功能非常重要，能实现病毒性传播。小程序的页面顶部都有一个转发按钮，想激活它，需要在当前的页面实例添加一个onShareAppMessage方法，如果没有那么它就到app.js找全局的onGlobalShare方法。// pages/pagexx/index.jsimport React from '@react';\nclass P extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            text: 'this is first line\\nthis is second line'\n        };\n    }\n\n    onShareAppMessage() {\n            var navigateToUrl = '/pages/train/index/index';\n            return {\n                title: '预订火车票 - 去哪儿旅行',\n                imageUrl: 'https://s.qunarzz.com/open_m_train/miniprogram/aliShare.jpg',\n                path: navigateToUrl\n            };\n    }\n\n    remove() {\n        var textAry = this.state.text.split('\\n');\n        if (!textAry.length) return;\n        textAry.pop();\n\n        this.setState({\n            text: textAry.join('\\n')\n        });\n    }\n\n    render() {\n        return (\n            \n                \n                    progress\n                    \n                        \n                        \n                        \n                        \n                    \n                \n            \n        );\n    }\n}\n\nexport default P;\napp.jsclass Demo extends React.Component {    config = {\n        window: {\n            backgroundTextStyle: 'light',\n            // navigationBarBackgroundColor: '#0088a4',\n            navigationBarTitleText: 'mpreact',\n            navigationBarTextStyle: '#fff'\n        },\n        tabBar: {\n            'color': '#929292',\n            'selectedColor': '#00bcd4',\n            'borderStyle': 'black',\n            'backgroundColor': '#ffffff',\n            'list': [\n                {\n                    'pagePath': 'pages/index/index',\n                    'iconPath': 'assets/image/homepage_normal.png',\n                    'selectedIconPath': 'assets/image/homepage_select.png',\n                    'text': '首页',\n                    'name': 'Home',\n                },\n                {\n                    'pagePath': 'pages/demo/question/index/index',\n                    'iconPath': 'assets/image/question_normal.png',\n                    'selectedIconPath': 'assets/image/question_select.png',\n                    'text': '问答社区',\n                    'name': 'questionAndAnswer'\n                },\n                {\n                    'pagePath': 'pages/demo/userCenter/index',\n                    'iconPath': 'assets/image/uc_normal.png',\n                    'selectedIconPath': 'assets/image/uc_select.png',\n                    'text': '我的',\n                    'name': 'My'\n                }\n            ]\n        }\n    };\n    globalData = {\n        ufo: 'ufo'\n    };\n    onGlobalShare() {\n        var navigateToUrl = '/pages/index/index';\n        return {\n            title: '预订火车票 - 去哪儿旅行',\n            imageUrl: 'https://s.qunarzz.com/open_m_train/miniprogram/aliShare.jpg',\n            path: navigateToUrl\n        };\n    };\n    onLaunch() {\n        // eslint-disable-next-line\n        console.log('App launched');\n    }\n}\n//这样写相当于为每一个页面组件的外面都加上一个，如果你想在页面上用到store里的数据，\n//需要用react-redux的connect方法包一下，详见pages/demo/syntax/redux\n//React.applyAppStore(store);\n// eslint-disable-next-line\nexport default App(new Demo());\n",
      "url": "/documents/share.html",
      "children": []
    },
    {
      "title": "日志收集与上传",
      "content": "出于运营的需要，我们需要将页面的流转信息，用户点击分布，错误，页面渲染情况发送到后端小程序编译阶段，会将所有事件转换为一个全局的dispatchEvent方法，因此我们可以这里做统一的日志的收集      震动\n \n如果我们发现这事件类型是click/tap/change/blur, 我们就会为这些元素添加一个data-beacon-uid, 值为default,(如果你已经写了，它就不会添加)，然后在dispatchEvent执行app.js的全局对象的onCollectLogs方法，让用户整理成一个对象，放到一个数组中, 并尝试使用onReportLogs自动发送；//dispatchEvent的源码export function dispatchEvent(e) {\n    const instance = this.reactInstance;\n    if (!instance || !instance.$$eventCached) {\n        return;\n    }\n    const eventType = e.type;\n    const target = e.currentTarget;\n    const dataset = target.dataset || {};\n    const app = _getApp();\n    let eventUid = dataset[toLowerCase(e.type) + 'Uid'];\n    let key = dataset.key;\n    eventUid += key != null ? '-' + key : '';\n    let fiber = instance.$$eventCached[eventUid + 'Fiber'];\n    if ( /click|tap/.test(eventType) && app && app.onCollectLogs) {\n        app.onCollectLogss(dataset, eventType, fiber && fiber.stateNode);\n    }\n   \n    //....略\n}\n当用户退出APP时，会进入onHide事件，这时我们就会上传剩余的所有日志因此用户只需要在app.js定义好这两个事件，框架帮你搞定日志上传。下面是示例：import React from '@react';import './pages/index/index';\nimport './pages/demo/base/index';\nimport './pages/demo/native/index/index';\nimport './app.scss';\nfunction computeXpath(node){ //通过xpath实现自动埋点\n    var xpath = [];\n    while (node.parentNode){\n        var index = node.parentNode.children.indexOf(node);\n        var tag = node.type == 'div' ? 'view': node.type;\n        xpath.unshift(tag+'['+index+']');\n        node = node.parentNode;\n    }\n    return  '/page/'+ xpath.join('/');\n}\nfunction computeCompressedXpath(node){ //压缩后的xpath\n    var xpath = [];\n    while (node.parentNode){\n        var index = node.parentNode.children.indexOf(node);\n        xpath.unshift(index);\n        node = node.parentNode;\n    }\n    return xpath.join('/');\n}\nclass Global extends React.Component {\n    static config = {\n        window: {\n            backgroundTextStyle: 'light',\n            navigationBarBackgroundColor: '#0088a4',\n            navigationBarTitleText: 'mpreact',\n            navigationBarTextStyle: '#fff'\n        }\n    };\n    // 全局数据\n    globalData = {\n        ufo: 'ufo'\n    };\n    onCollectLogs(dataset, eventType, node){ //这里会在框架的dispatchEvent自动调起，实现自动理点\n        var beaconId = dataset.beaconUid;\n        if( beaconId == 'default' && node ){\n            beaconId = computeCompressedXpath(node);\n        }\n        var otherData = dataset.xxx//data-xxxx\n        var otherData2 = dataset.xxx2;\n        var timeStamp = new Date - 0;\n        var path = React.getCurrentPage().props.path;//页面路径\n        var logs =  this.globalData.logs || (this.globalData.logs = [])\n        logs.push({\n            pid: beaconId,\n            path: path,\n            timeStamp: timeStamp\n            action: eventType\n        });\n        if(logs.length > 20){\n            var uploadLogs = logs.splice(0, 10);//截取前十条；\n            if(this.onReportLogs){\n                this.onReportLogs(uploadLogs)\n            }\n        }\n    };\n    onHide(){\n      this.onReportLogs(); //微信，支付宝，百度\n    };\n    onDistory(){\n      this.onReportLogs(); //快应用\n    };\n    onReportLogs(logs){ //自己实现\n        if(!logs){\n            if(!Array.isArray(this.globalData.logs) && this.globalData.logs.length == 0){\n               return\n            }\n           logs = this.globalData.logs;\n           this.globalData.logs = [];\n        }\n        if(!logs.length){\n            return\n        }\n        var buildType = this.globalData.buildType;// wx, bu, ali\n        var info = React.api.getSystemInfornSync();\n        var { brand, model, version, platform} = info ;//获取手机品牌，手机型号， 微信版本号, 客户端平台;\n        React.api.request({\n            url: \"/fdsfdsf/sdfds\",\n            type: 'GET',\n            data： {\n                logs,  //logData\n                buildType,//wx, bu, ali, quick, tt, qq\n                brand, //commonData\n                model, //commonData\n                version,//commonData\n                platform,//commonData\n             //other\n            } \n        })\n    }, \n    onLaunch() {\n        console.log('App launched');\n    }\n}\n\nexport default App(new Global());\n在common目录下import React from '@react'//此方法用于手动埋点\nfunction createLog(dataset, eventType){\n    var app =  React.getApp();\n    if(typeof app.onCollectLogs === 'function' ){\n        app.onCollectLogs(dataset, eventType, null)\n    }\n}\n",
      "url": "/documents/report.html",
      "children": [
        {
          "title": "各种日志的处理",
          "url": "/documents/report.html#各种日志的处理",
          "content": "各种日志的处理订单 等这样重要的行为， 要业务中进行手动埋点，使用上面的createLog方法\n点击，输入这样的事件，使用自动埋点，框架会在内部的dispatchEvent方法中自行调用全局的\nonCollectLogs方法\n页面流转情况， 建议对React.api.redirectTo等四个方法进行再包装，里面封入onCollectLogs方法，\n页面渲染时间，通过全局的onGlobalLoad, onGlobalReady等到某一页的渲染时间\n页面停留时间，通过全局的onGlobalShow onGlobalHide等到某一页的停留时间\n"
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
      "title": "Iconfont 的支持情况",
      "content": "",
      "url": "/documents/iconfont.html",
      "children": [
        {
          "title": "使用方式",
          "url": "/documents/iconfont.html#使用方式",
          "content": "使用方式定义 iconfont 样式：// 本地字体@font-face {\n    font-family: 'fontLocal';\n    src: url('../../../assets/fonts/font.ttf');\n}\n// 远程地址\n@font-face {\n    font-family: 'fontOnline';\n    src: url(https://ss.qunarzz.com/yo/font/1.0.3/font.ttf);\n}\n\n.iconfont-local {\n    font-family: 'fontLocal';\n}\n.iconfont-online {\n    font-family: 'fontOnline';\n}\n定义组件：import React from '@react';import './index.scss';\n\nclass P extends React.Component {\n\n    render() {\n        return (\n            本地字体\n            &#xe351;\n            &#xe351;\n            远程字体\n            &#xf077;\n            &#xf078;\n        );\n    }\n}\n\nexport default P;\n"
        },
        {
          "title": "需要注意的点",
          "url": "/documents/iconfont.html#需要注意的点",
          "content": "需要注意的点\n字体图标文件必须放在 assets 目录下。\n\n\n为了兼容快应用，字体文件应仅使用 ttf(TrueType) 格式字体且不要加 format 属性，参考上面的示例。\n\n\n使用远程 iconfont 时必须填写完整的 url 地址，不能省略前面的 http 或者 https。\n\n\n因为娜娜奇的样式是组件封闭的，为了能够共用 iconfont 相关的样式，我们推荐建立一个公共的 iconfont 样式文件，然后在需要使用 iconfont 的组件里通过 @import 引入该样式。\n\n"
        },
        {
          "title": "支持情况",
          "url": "/documents/iconfont.html#支持情况",
          "content": "支持情况\n\n\n本地\n远程\n\n\n\n\n微信小程序\n✗\n✓\n\n\n支付宝小程序\n✓\n✓\n\n\n百度小程序\n✗\n✓\n\n\n快应用\n✓\n✓\n\n\n"
        }
      ]
    },
    {
      "title": "npm模块管理",
      "content": "针对小程序无法友好管理npm第三方模块问题，nanachi给与了最大限度支持，当文件中引入第三方npm模块，nanachi监听到后会自动安装，并且最小量打包你所依赖的npm模块。例如import fp from 'lodash/fp';打包后dist/npm/├── lodash\n│   ├── fp\n│   │   ├── _baseConvert.js\n│   │   ├── _mapping.js\n│   │   └── placeholder.js\n│   ├── fp.js\n│   └── lodash.min.js\n",
      "url": "/documents/npm.html",
      "children": []
    },
    {
      "title": "按平台打包业务代码",
      "content": "很多场景下可能需要差异化打包不同平台的代码，娜娜奇提供环境变量process.env.ANU_ENV来识别不同平台。在编译前，ANU_ENV变量已静默配置。componentDidMount(){    let ANU_ENV = process.env.ANU_ENV;//wx ali bu quick\n    if(ANU_ENV === 'wx'){\n        //微信小程序业务逻辑\n    }else if(ANU_ENV === 'ali'){\n        //支付宝小程序业务逻辑\n    }else {\n        \n    }\n}\n有时候需要按平台引入相关模块，在写法上有所不同，必须通过注释节点来匹配相关的import引入。例如:// if process.env.ANU_ENV == 'wx';import wx from './wx.js';\n// if process.env.ANU_ENV == 'ali';\nimport ali from './ali.js';\n编译结果(ANU_ENV:wx):import wx from './wx.js';",
      "url": "/documents/platform.html",
      "children": []
    },
    {
      "title": "alias别名配置",
      "content": "在项目package.json中，可配置别名， 减少引用的麻烦。假设我们有一个叫xxx的项目，用nanachi init xxx 创建后，大概是这个样子我们打开package.json在里面添加nanachi对象，nanachi下面再添加alias对象假设我们在assets目录下有一个global.scss，我们不想在pages在很深层次的目录中每次都要\n../../../assets/global.scss 地引用它。可以定义一个@assets别名，指向assets目录。\n由于当前执行命令在xxx目录下，assets又在source里，于是其路径为 source/assets{    \"license\": \"MIT\",\n    \"version\": \"1.0.0\",\n    \"name\": \"qunar\",\n    \"nanachi\": {\n        \"alias\":  {\n            \"@assets\":\"source/assets\"\n        }\n    },\n    \"dependencies\": {\n        \"regenerator-runtime\": \"^0.12.1\"\n    }\n}\n使用方式，我们在某一个页面(/pages/xxx/yyy/index.js)添加一个index.scss, 其位置为pages/xxx/yyy/index.scss//index.jsimport React from '@react';\nimport './index.scss';\nclass P extends React.Component {\n    //略\n}\nexport default P\n//-------------- 略\n\n//index.scss\n\n@import '@assets/global.scss'\n.aaa {//其他样式\n  color:red;\n}\n在默认情况下， 每个项目的package.json/ nanachi / alias对象会添加两个别名@components与@react。因此添加别名时不要与它们冲突。在业务开发中，我们把一些没有视图的业务逻辑放到common目录下，建议不同部门都有自己的XXXCommon.src   |--components\n   |    |--HotelDialog\n   |    |     └──index.js  //必须以index.js命名，里面的类名 必须 与文件夹名一样, 如HotelDialog\n   |    |--HotelXXX\n   |    |--FlightYYY\n   |    └── ...\n   |--pages\n   |    |--hotel\n   |    |--flight\n   |    |--holiday\n   |    |--strategy\n   |    └── ...\n   |--common\n   |    |--hotelCommon\n   |    |    └── ...\n   |    |--flightCommon\n   |    |--holidayCommon\n   |    |--strategyCommon\n   |    └── ...\n   |--app.js\n那么各部门可以这样定义自己的别名{    \"license\": \"MIT\",\n    \"version\": \"1.0.0\",\n    \"name\": \"qunar\",\n    \"nanachi\": {\n        \"alias\":  {\n            \"@assets\":\"source/assets\",\n            \"@hotel\" :\"source/common/hotelCommon\",\n            \"@train\" :\"source/common/trainCommon\",\n            \"@flight\" :\"source/common/flightCommon\"\n        }\n    },\n    \"dependencies\": {\n        \"regenerator-runtime\": \"^0.12.1\"\n    }\n}\n使用方式：import React from '@react'import trainPay from '@train/pay';\n//....其他代码\n\n",
      "url": "/documents/alias.html",
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
      "title": "各种小程序的差异点",
      "content": "\n\n项目\n微信小程序\n百度小程序\n支付小程序\n快应用\n\n\n\n\n命名空间\nwx\nswan\nmy\n无,需要 require 它提供的所有接口按 wx 形式封装\n\n\nif 指令\nwx:if\ns-if\na:if\nif\n\n\nfor 指令\nwx:for wx:for-index wx:for-item\n将wx:改成s-\n将wx:改成a:\nfor=\"(personIndex, personItem) in list\"\n\n\nkey 指令\nwx:key\ns-key\nkey\ntid\n\n\n容器标签\n存在\n存在\n存在\n存在\n\n\n事件绑定\nbind/catch[事件名全小写]=\"回调名\"\nbind/catch[事件名全小写]=\"回调名\"\non/catch[事件名驼峰]=\"回调名\"\non[事件名全小写]=\"回调名/回调(arguments)\"\n\n\n{{}}插值是否支持函数\n不支持\n不支持\n不支持\n支持\n\n\n模块中使用脚本\n\n\n\n\n\n\n模板文件后缀\nwxml\nswan\naxml\n没有独立的文件 放 template 中\n\n\n样式文件后缀\nwxss\ncss\nacss\n没有独立的文件 放 style 中，不需要处理 less,sass\n\n\ntemplate 包含 template\n支持\n不支持循环中使用 template\n支持\n未知\n\n\ntemplate 的 data 是否支持...\n{{...aaa}}\n{{{...aaa}}} 三个括号\n{{...aaa}}\n只能一个个数据分开写\n\n\n缺省的组件(视图容器)\nmovable-view、cover-view\n\nmovable-view、cover-view\n未知\n\n\n缺省的组件(基础内容)\nrich-text\n\n\n未知\n\n\n缺省的组件(导航)\nfunctional-page-navigator\n\n\n未知\n\n\n缺省的组件(媒体组件)\naudio、video、camera、live-player、live-pusher\n\n\n未知\n\n\nopen-data\n\n\n不支持\n未知\n\n\n样式单位 rpx 支持情况\n支持\n不支持（用 rem，最新的基础库版本已经支持）\n支持\n不支持\n\n\n大小限制\n4M\n4M(分包 8M)\n2M\n1M（可以独单与厂商谈）\n\n\nAPIs 的这么多方法都不一样，可能以后针对不同的平台打包不同的 api.js 来屏蔽差异性",
      "url": "/documents/diff.html",
      "children": [
        {
          "title": "微信小程序与快应用差异(更新中...)",
          "url": "/documents/diff.html#微信小程序与快应用差异更新中...",
          "content": "微信小程序与快应用差异(更新中...)\n\n差异\n微信小程序\n快应用\n\n\n\n\n入口文件\napp.js, app.json\napp.ux, manifest.json\n\n\n结构，表现，行为组织方式\n分离：如 page.js, page.wxss, page.wxml\n聚合：类似 vue\n\n\n文件扩展名\n.js, .json, .wxml, .wxss\n.ux, .json\n\n\n路由注册\napp.json 中配置 pages 字段 例如\"pages\": [\"path1\", \"path2\"]\nmanifest.json 中配置 router 字段 详见文档\n\n\n路由跳转\n1.组件跳转[navigator 组件] 2.五种 js 跳转方式详见文档\n1. 组件跳转[a 组件] 2. router.push(OBJECT)\n\n\n获取应用实例\n调用函数：getApp()\n访问变量：this.$app\n\n\n模板逻辑渲染\n配置命名空间： 例如：wx:if/wx:elif/wx:else\n不需要 例如：if/elif/else\n\n\n钩子函数\nonLoad: 页面加载时触发\nonInit: 页面加载时触发\n\n\n\nonDestroy: 页面卸载\nonUnload: 页面卸载\n\n\n\nonBackPress：不支持\nonBackPress：支持\n\n\n\nonPageScroll：支持\nonPageScroll：不支持\n\n\n\nonPullDownRefresh： 支持\nonPullDownRefresh：不支持\n\n\n初始化状态(state)\ndata: {list: []}\nprivate: { list: [] }\n\n\n更新组件状态\nsetData 函数更新\n类 vue 语法\n\n\nUI 事件绑定方式\nbindEventName\n（on|@)EventName\n\n\nUI 事件自定义传参\n不支持\n支持\n\n\nAPI\n挂载在 wx 命名空间下：如 wx.showShareMenu(OBJECT)\n需引用相关模块：import share from '@system.share'\n\n\n组件机制Component 构造器可用于定义组件，调用 Component 构造器时可以指定组件的属性、数据、方法等。\n\n字段\n说明\n微信\n支付宝\n百度\n轻应用\n\n\n\n\nproperties\n接收的数据\n同名\n同名\n同名\nprops\n\n\ndata\n内部数据\n同名\n同名\n同名\nprivate\n\n\nmethods\n方法集合\n同名\n同名\n同名\n不存在\n\n\ncreated\n组件创建时\n同名\n同名\n同名\nonInit\n\n\nattached\n组件插入时\n同名\n同名\n同名\n不存在\n\n\nready\n组件完成布局后\n同名\n同名\n同名\nonReady\n\n\ndetached\n组件移除时\n同名\n同名\n同名\nonDestroy\n\n\n思路：properties 定义两个属性 {props: Object, context: Object}created 或 onInit 时，抓取小程序实例与对应的 react 实例，将 props, state, context 给小程序实例"
        },
        {
          "title": "支付宝小程序的大小查看",
          "url": "/documents/diff.html#支付宝小程序的大小查看",
          "content": "支付宝小程序的大小查看"
        },
        {
          "title": "流量",
          "url": "/documents/diff.html#支付宝小程序的大小查看-流量",
          "content": "流量–单个资源：页面单个资源控制在50k以下，最大不超过100k–页面总大小：页面完全加载前，资源累计必须小于200K\n–离线包：amr压缩包总大小小于2M\n–网络总请求数——页面完全加载前，请求总数必须小于20个离线包的文件大小就是你项目的压缩包大小。C:\\Users\\计算机用户名\\AppData\\Local\\Temp.alipay-tiny\\项目名\\pack-production\\dist.amr 上传小程序包的大小可以在beta版IDE右上角“详情”中查看“上次上传”的文件大"
        },
        {
          "title": "页面组件在快应用的模拟",
          "url": "/documents/diff.html#页面组件在快应用的模拟",
          "content": "页面组件在快应用的模拟\nonShow onHide （大家都有）\n\n\n切换卡的支持，\n\n快应用需要外包 tabs 组件  这样唤起 onTabItemTap\nnavigationBarBackgroundColor\nnavigationBarTextStyle\nnavigationBarTitleText\n\n\n\n滚动下拉刷新相关的事件唤起\n\nonPullDownRefresh onReachBottom onPageScroll\nenablePullDownRefresh disableScroll\ntab-content 里面包含 list 组件与 refresh 组件\nlist.scroll--> onPageScroll\nlist.scrollbottom --> onReachBottom\nrefresh.refresh --> onPullDownRefresh\n\n\n\n转发按钮事件的唤起 onShareAppMessage\n\n如果用户定义了 onShareAppMessage，那么我们就添加 onMenuPress，这样右上角就会出现分享按钮\n或在编译期扫描　对其 onTap 事件加上 onShareAppMessage 钩子\n详见这里\n与 这里\n\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/link.html",
      "children": [
        {
          "title": "各种小程序的官网与调试工具地址",
          "url": "/documents/link.html#各种小程序的官网与调试工具地址",
          "content": "各种小程序的官网与调试工具地址微信小程序文档\n百度小程序文档\n支付小程序文档\n快应用文档\n快应用调试工具\n快应用 demo1\n快应用 demo2\n快应用的一个UI库\n微信小程序升级日志\n快应用升级日志\n百度小程序升级日志\n支付宝小程序升级日志\nQQ轻应用文档\n头条小程序文档\n"
        }
      ]
    },
    {
      "title": "常见问题",
      "content": "暂时不支持 redux,请使用 React.getApp().globalData 来在页面间交换数据\nrender 里面不能定义变量,即不能出现 var, const, let 语句。render() 里只能使用 JSX 来描述结构，不能使用 React.createElement()。\n组件必须定义在 components 中\n为什么底部不出现 TabBar？ 这是小程序自身的 BUG，详见这里\n路由跳转时，如何拿到当前路径与参数，原来是通过 onLoad 方法拿，现在你可以通过任何一个页面组件的生命周期钩子，访问 this.props，里面就有 path 与 query 属性\n静态资源统一放到 src 目录下的 assets 目录下\nwxml 模板部分，如果使用了箭头函数，那么它里面不能出现 this 关键字\n不要在 props, state, context 里面放 JSX，因为 JSX 的结构容易出现环引用，导到微信小程序内部的 JSON.stringify 出错\nslot 机制与 render props 是有代价，它们会在 components/Fragments 目下添加许多当作桥梁用的碎片文件，不要滥用\nrender props 机制只能用于有狀态组件，并且只应用于 render() 属性，只能传一个参数，参数只能是 this.state 或 this.props, 目前不支持快应用\ninput组件 统一使用onChange事件，因为有的平台支持onInput, 有的平台支持onChange, 转译器会翻译相应支持的事件\n业务有涉及拿globalData.systemInfo里面高度的，改为React.api.getSystemInfoSync()。第一次进入页面有底bar的话 高度会拿错，导致业务液面高度计算错误，下面空一块。\nReact.getCurrentPage() 能得到当前页面的react实例， instance.props.query, instance.props.path为当前路径与参数对象\n更多问题请到 GitHub 提 Issue。\n",
      "url": "/documents/questions.html",
      "children": []
    },
    {
      "title": "打包发布自定义打包目录压缩打包",
      "content": "在开始之前，提一下两种重要的概念。带JSX的页面组件与通用组件，它们分别放在pages与components目录下，它们具有巨大的转换成本（毕竟JSX会被提取出来转换成wxml, axml, swan或ux文件），还有一种不带JSX的纯JS文件，建议放在common目录,  当然还有一些通用的东西可以通过npm安装，但不要使用那些有JSX的第三方依赖。开发目录如下src   |--components\n   |    |--HotelDialog\n   |    |     └──index.js  //必须以index.js命名，里面的类名 必须 与文件夹名一样, 如HotelDialog\n   |    |--HotelXXX\n   |    |--FlightYYY\n   |    └── ...\n   |--pages\n   |    |--hotel\n   |    |--flight\n   |    |--holiday\n   |    |--strategy\n   |    └── ...\n   |--common\n   |    |--hotel\n   |    |--flight\n   |    |--holiday\n   |    |--strategy\n   |    └── ...\n   |--app.js\ncomponents目录下为了扁平化管理，以事业部做前端+组件名的方式定义组子目录，目录下面就是index.js, index.scss或index.less。index.js里面必须是React组件，需要显式引入｀import React from \"@react\"`components目录下不要使用Fragments来命名子目录，这留给系统用。\npages目录下每个事业部各建一个目录，以事件部的名字命名，里面为index.js 及页面的目录，index.js要引入自己目录的所有页面，页面也以index.js命名，并且里面必须是有状态的React组件（转译器会转换成页面组件。）页面的index.js各种引入通用组件与common目录的依赖   |--pages   |    |--hotel\n            |--index\n            |    └──index.js //目录, import里面所有index.js\n            |--page1\n            |    |---index.js\n            |    └── index.scss\n            |--page2\n            |    |---index.js\n            |    └── index.scss\n            |--page3\n            |    |---index.js\n            |    └── index.scss\n            |--about\n            |    |---index.js\n            |    └── index.scss\ncommon目录下每个事业部各建一个目录，以事件部的名字命名，里面为各种JS文件，它们只是纯业务逻辑，没有JSX，只会经过es67的语法糖转换。app.js会引入pages每个事件的index.js, 只要稍微分析就得到整个应用全部有效的页面，放到app.json的pages数组中，或快应用的manifest.json的router对象的pages对象中共享数据的处理， 大家都在globalData对象中放一些命名空间对象. globalData不能放函数。大家不要放在其他全局对象上，因此在快应用等个别小程序中，页面跳转时，会清空掉除globalData之外的数据与变量。{    globalData: {\n        flight: {\n            xxx:111,222:444\n        },\n        hotel: {\n\n        }\n    }\n}\nnanachi 默认打包目录是dist, 可以在package.json中自定义配置 buildDir 来定义打包目录。{    \"nanachi\": {\n        \"alias\": {\n            \"@assets\": \"source/assets\"\n        },\n        \"buildDir\": \"yourDir\"\n    }\n}\n执行 nanachi build -c 会将项目中css, js进行压缩。",
      "url": "/documents/publish.html",
      "children": []
    },
    {
      "title": "关于",
      "content": "此项目由 Qunar.com 提供支持。大约从11月份开始，我们切换到branch3开发，正式启动自定义组件机制实现nanachi的组件机制原来master上使用 template标签来编写组件，它其实规避了许多问题，因为4大小程序的自定义组件机制都各有不同，template则是兼容成本最低的方案。但是用template标签编写组件，其实那不是组件，对于小程序来说就是视图片段。换言之，一个页面只有一个组件，而这个组件的数据则是非常庞大。果不其然，它在支付宝小程序的IOS8/9中因为性能问题挂掉，只好匆匆启动后备方案简单回顾一下四大小程序的模板\n  \n     获取头像昵称 \n    \n      \n         {{el.title}}\n      \n    \n  \n\n\n\n\n  \n     获取头像昵称 \n    \n      \n         {{el.title}}\n      \n    \n  \n\n\n\n\n  \n     获取头像昵称 \n    \n      \n         {{el.title}}\n      \n    \n  \n\n\n\n\n  \n    \n       获取头像昵称 \n      \n        \n          {{el.title}}\n        \n      \n    \n  \n\n\n\n\n  \n     获取头像昵称 \n    \n      \n         {{el.title}}\n      \n    \n  \n\n\n从模板来看，其实差别不大，改一下属性名，每个公司都想通过它们来标识自己的存在。但内部实现完全不一样，因为\b源码并没有公开或者混淆了。使用自定义组件机制的风险就比标签大很多。 BAT三公司都暴露了一个Component入口函数，让你传入一个配置对象实现组件机制，而以小米为首的快应用则是内部走vue，没有Component这个方法，只需你export一个配置对象。//微信Component({\n  data: {},\n  lifetimes: {//钩子必须放在lifetimes\n    created(){},//拿不到实例的UUID\n    attached(){},//钩子触发顺序与元素在文档位置一致\n    dettached(){}\n  },\n  methods: {//事件句柄必须放在methods\n    onClick(){}\n  }\n})\n//支付宝\nComponent({\n  data: {},\n  //没有与created对应的didCreate/willMount钩子\n  didMount(){},//能拿到实例的UUID\n  didUpdate(){},//钩子触发顺序是随机的\n  didUnmount(){},\n  methods: {\n    onClick(){}\n  }\n})\n//支付宝 生命周期V2\nComponent({\n  data: {},\n  onInit(){},//对应 react constructor， 只可以读取 this.props 设置 this.data 或调用 this.setData/$spliceData 修改 已有data\n  deriveDataFromProps(props){},//对应 react getDerivedStateFromProps，只可以调用 this.setData/$spliceData 修改 data\n  didMount(){},//对应 react componentDidMount\n  didUpdate(){},//对应 react componentDidUpdate\n  didUnmount(){},//对应 react componentWillUnmount\n  methods: {\n    onClick(){}\n  }\n})\n\n//百度\nComponent({\n  data: {},\n  created(){},//应该是微信自定义组件的早期格式，没有lifetimes，methods\n  attached(){},//拿不到实例的UUID\n  dettached(){},//钩子触发顺序与元素在文档位置一致\n  onClick(){}\n})\n//小米（快应用都是由小米提供技术方案）\nexport {\n   props: {},//基本与百度差不多\n   onInit(){},\n   onReady(){},\n   onDestroy(){},\n   onClick(){}\n}\n//头条小程序\nComponent({\n  data: {},\n  created(){},//拿不到实例的UUID\n  attached(){},//钩子触发顺序与元素在文档位置一致\n  dettached(){}\n  methods: {//事件句柄必须放在methods\n    onClick(){}\n  }\n})\n从内部实现来看，BAT 都是走迷你React虚拟DOM， 快应用走迷你 vue虚拟DOM， 但支付宝的实现不好，钩子的触发顺序是随机的。因此在非随机的三种中，我们内部有一个迷你React, anu，产生的组件实例放进一个队列中，而BTM （百度，微信，小米）的created/onInit钩子再逐个再出来，执行setData实现视图的更新。而支付宝需要在编译层，为每个自定义组件标签添加一个UUID ，然后在didMount匹配取出。//anu onBeforeRender(fiber){\n   var type = fiber.type;\n   var reactInstances = type.reactInstances;\n   var instance = fiber.stateNode;\n   if(!instance.wx && reactInstances){\n     reactInstances.push(instance)\n   }\n}\n\n//BTM的created/onReady  \ncreated(){\n   var reactInstances = type.reactInstances;\n   var reactInstance = reactInstances.shift();\n   reactInstance.wx = this;\n   this.reactInstance = reactInstance;\n   updateMiniApp(reactInstance)\n}\n\n//支付宝  \ndidMount(){\n  var reactInstances = type.reactInstances;\n  var uid = this.props.instanceUid;\n  for (var i = reactInstances.length - 1; i >= 0; i--) {\n      var reactInstance = reactInstances[i];\n      if (reactInstance.instanceUid === uid) {\n          reactInstance.wx = this;\n          this.reactInstance = reactInstance;\n          updateMiniApp(reactInstance);\n          reactInstances.splice(i, 1);\n          break;\n      }\n  }\n}\n\n其实如果一个页面的数据量不大，template标签实现的组件机制比自定义组件的性能要好，自定义组件标签会对用户的属性根据props配置项进行过滤，还要传入slot，启动构造函数等等。但数据量大，自定义组件机制由于能实现局部更新，性能就反超了。但支付宝是个例，由于它延迟到在didMount钩子才更新数据，即视图出来了又要刷新视图，比其他小程序多了一次rerender与伴随而来的reflow。快应用就更麻烦些，主要有以下问题\n快应用要求像vue那样三种格式都放在同一个文件中，但script标签是无法export出任何东西，于是我只好将组件定义单独拆到另一个文件， 才搞定引用父类的问题。\n\n\n快应用在标签的使用上更为严格，文本节点必须放在a, span, text, option这4种标签中，实际上span的使用限制还严厉些，于是我们在编译时，只用到a, text, option。而a是对标BAT的navigator，因此一般也用不到。\n\n\n最大的问题是对CSS支持太差，比如说不支持display: block, display: line, 不支持浮动，不支持相对绝对定位，不支持.class1.class2的写法……\n\n\nAPI也比BAT的API少这么多东西，兼容起来非常吃力。\n\n",
      "url": "/documents/about.html",
      "children": [
        {
          "title": "娜娜奇提供的核心组件及他们对应的关系，核心的技术内幕",
          "url": "/documents/about.html#娜娜奇提供的核心组件及他们对应的关系，核心的技术内幕",
          "content": "娜娜奇提供的核心组件及他们对应的关系，核心的技术内幕娜娜奇主要分为两大部分， 编译期的转译框架， 统一将以React为技术栈的工程转换为各种小程序认识的文件与结构转译框架又细分为4部分， react组件转译器，es6转译器， 样式转译器及各种辅助用的helpers.运行时的底层框架与补丁组件， 底层框架为ReactWx, ReactBu, ReactAli, ReactQuick,分别对标微信，百度，支付宝小程序及快应用，因为官方React的size太大，并没有适用的钩子机制，让我们在渲染前将数据传给原生组件进行\nsetData() (setData是小程序实例更新视图的核心方法)，因此我们基于我们早已成熟的迷你React框架anu进行一下扩展\n去掉DOM渲染层，加上各种对应的渲染层，从而形成 对应的React.补丁组件是指， 小程序都自带一套UI组件，它们存在一些无法抹平的差异或在个别平台直接没有这个组件，我们需要用原生的view ,text等基础组件元素封装成缺省组件，比如Icon, Button, Navigator."
        },
        {
          "title": "娜娜奇的目录结构以及对应的工程规范，cli以及发布打包，如何控制size",
          "url": "/documents/about.html#娜娜奇的目录结构以及对应的工程规范，cli以及发布打包，如何控制size",
          "content": "娜娜奇的目录结构以及对应的工程规范，cli以及发布打包，如何控制size娜娜奇的目录结构以微信的标准为蓝图，大概分为app.js, pages目录， components目录，针对我们的业务，还添加了commons目录与assets目录。app.js是全工程的配置，以react组件形式呈现， 全局共享对象，全局的分享函数都在这实例上\npages目录 放所有页面组件， 组件在index.js中， 这里目录存在层次\ncomponents目录 放所有有视图的业务组件， 组件在index.js中， 这里的目录只有两层， components/ComponentName/index.js\nindex.js 要exports与目录名同名的类名\ncommons目录 放所有没有视图的业务组件，没有文件名与目录名的限制，\n但希望每个业务线的组件都放在与业务线同名的目录下\nassets目录， 放静态资源\napp.js pages目录，components目录会应用react转译器与样式转译器， commons目录应用es6转译器，assets目录应用样式转译器直观的效果见 这里的两个图cli 命令见 这里build后的大小 见开发工具的预览"
        },
        {
          "title": "娜娜奇提供的重要功能组件和模块，如何帮助开发者做到快速开发",
          "url": "/documents/about.html#娜娜奇提供的重要功能组件和模块，如何帮助开发者做到快速开发",
          "content": "娜娜奇提供的重要功能组件和模块，如何帮助开发者做到快速开发提供了 @react, @components，@assets这几个别名，用法如import React from '@react' 这样在很深的目录下，大家就不需要\nimport React from '../../../../ReactAli'这样写\n@components指向components目录\n@assets 则用在css, sass, less文件中指向assets目录React.getApp(), React.getCurrentPage()方便大家得到当前APP配置对象与页面组件的实例React.api 将对所有平台的上百个API进行抹平，API是wx, swan, my这几个对象，它们里面提供了访问底层的能力如通信录，电池，音量，地理信息, 上传下载，手机型号信息等一大堆东西React.api 里的所有异步方法，都Promise化，方便大家直接用es7 的async ,await语法样式转译器，帮用户处理样式表中的rpx/px之间的转换。"
        },
        {
          "title": "为了保证跨平台，设计娜娜奇技术方案的重要原则和开发规范，哪些不支持",
          "url": "/documents/about.html#为了保证跨平台，设计娜娜奇技术方案的重要原则和开发规范，哪些不支持",
          "content": "为了保证跨平台，设计娜娜奇技术方案的重要原则和开发规范，哪些不支持所有接口访问必须 使用React.api的方法，不要直接在wx, swan, my对象中取React组件的只有render方法才能使用JSX，它们需要遵守一下规范，详见这里样式方面，为了兼容快应用，布局统一使用flexbox, 不能使用display:block/inline, float,position:absolute/relative"
        },
        {
          "title": "娜娜奇如何和原生小程序兼容，以及其他有用的辅助功能或者工具",
          "url": "/documents/about.html#娜娜奇如何和原生小程序兼容，以及其他有用的辅助功能或者工具",
          "content": "娜娜奇如何和原生小程序兼容，以及其他有用的辅助功能或者工具娜娜奇不与某一种原生小程序兼容，因为它要照顾4种小程序如果你的目录名，样式不符合规范，我们在转译阶段会给出友好提示快应用的文本节点要求放在text, a, option, label下，娜娜奇会在编译阶段自动对没有放在里面的文本包一个text标签页面配置对象的许多配置项（如tabBar, titBar的配置参数，页面背景参数）， 我们也进行了抹平，用户只需要以微信方式写，我们自动转换为各个平台对应的名字，在快应用中，是没有tabBar, 我们直接让每个页面组件继承了一个父类，父类里面\n有tabBar, 令它长得与其他小程序一模一样"
        }
      ]
    }
  ],
  "各平台的组件差异": [
    {
      "title": "组件对比",
      "content": "",
      "url": "/component/index.html",
      "children": [
        {
          "title": "视图容器",
          "url": "/component/index.html#视图容器",
          "content": "视图容器\n\n组件名\n缺少\n缺少的属性\n微信多出的属性\n\n\n\n\nview\n\n\n\n\n\nscroll-view\n\n\n\n\n\nswiper\n\n支付宝缺少属性（current-item-id, display-multiple-items）\nskip-hidden-item-layout\n\n\nmovable-area\n支付宝\n\n\n\n\ncover-view\n支付宝\n\n\n\n\n"
        },
        {
          "title": "基础内容",
          "url": "/component/index.html#基础内容",
          "content": "基础内容\n\n组件名\n缺少\n缺少的属性\n微信多出的属性\n\n\n\n\nicon\n\n\n\n\n\ntext\n\n支付宝（space）\nselectable, decode\n\n\nprogress\n\n支付宝缺少属性（color, active-mode）\n\n\n\nrich-text\n支付宝\n\n\n\n\nanimation\n支付宝, 微信\n\n\n\n\n"
        },
        {
          "title": "表单组件",
          "url": "/component/index.html#表单组件",
          "content": "表单组件\n\n组件名\n缺少\n缺少的属性\n微信多出的属性\n\n\n\n\nbutton\n\n支付宝缺少属性（hover-stop-propagation,bindgetuserinfo ）\nlang,  微信多出一些open-type存在的属性\n\n\ncheckbox\n\n支付宝（color）\n\n\n\nform\n\n\n\n\n\ninput\n\n支付宝缺少属性（cursor-spacing ）\n\n\n\ntextarea\n\n支付宝缺少属性（show-confirm-bar,selection-start,selection-end,adjust-position, bindlinechange）\n\n\n\nlabel\n\n\n\n\n\npicker\n\n支付宝缺少属性mode\n\n\n\npicker-view\n\n支付宝属性是 indicatorStyle， 支付宝缺少的属性是（indicator-class,mask-style,mask-class）\n\n\n\nradio\n\n支付宝缺少属性color\n\n\n\nswitch\n\n百度缺少属性disabled\n\n\n\nslider\n\n支付宝（handleSize,handleColor）;微信，百度（block-size,block-color）\n\n\n\n"
        },
        {
          "title": "导航",
          "url": "/component/index.html#导航",
          "content": "导航\n\n组件名\n缺少\n缺少的属性\n微信多出的属性\n\n\n\n\nnavigator\n\n支付宝缺少属性（delta ）\napp-id, path, extra-data, version\n\n\nanimation\n支付宝, 百度\n\n\n\n\n"
        },
        {
          "title": "媒体组件",
          "url": "/component/index.html#媒体组件",
          "content": "媒体组件\n\n组件名\n缺少\n缺少的属性\n微信多出的属性\n\n\n\n\nimage\n\n支付宝（lazyLoad ）;微信，百度（lazy-load）\n\n\n\naudio\n支付宝\n\ndanmu-list,danmu-btn,enable-danmu\n\n\ncamera\n支付宝\n\nmode,flash,bindscancode\n\n\nlive-player\n支付宝\n\nmode\n\n\nlive-pusher\n支付宝, 百度\n\n\n\n\n"
        },
        {
          "title": "地图",
          "url": "/component/index.html#地图",
          "content": "地图\n\n组件名\n缺少\n缺少的属性\n微信多出的属性\n\n\n\n\nmap\n\n百度（polygons ）\nenable-overlooking,enable-zoom, enable-scroll,enable-rotate\n\n\n"
        },
        {
          "title": "画布",
          "url": "/component/index.html#画布",
          "content": "画布\n\n组件名\n缺少\n缺少的属性\n微信多出的属性\n\n\n\n\ncanvas\n\n\n\n\n\n注： 画布属性写 id 而不是 canvas-id\n"
        },
        {
          "title": "开放能力",
          "url": "/component/index.html#开放能力",
          "content": "开放能力\n\n组件名\n缺少\n缺少的属性\n微信多出的属性\n\n\n\n\nweb-view\n\n支付宝 (bindLoad, bindError) 百度 (bindLoad, bindError)\n\n\n\n"
        },
        {
          "title": "支付宝中 web-view 组件的用法",
          "url": "/component/index.html#开放能力-支付宝中-web-view-组件的用法",
          "content": "支付宝中 web-view 组件的用法import React from '@react';\n// 事件\nclass Data extends React.Component {\n constructor() {\n   super();\n   this.state = {};\n   React.webview.instance = this\n   React.webview.cb = this.test // 绑定到 onMessage 上的函数\n }\n\n \n componentDidMount() {}\n\n test(e) {\n   console.log(JSON.stringify(e.detail))\n }\n\n render() {\n   return (\n     \n       \n     \n   );\n }\n}\nexport default Data;\n\n\n"
        }
      ]
    }
  ],
  "已兼容处理的API": [
    {
      "title": "API",
      "content": "",
      "url": "/apis/index.html",
      "children": [
        {
          "title": "概述",
          "url": "/apis/index.html#概述",
          "content": "概述\n\nAPI\n类型\n说明\n\n\n\n\nReact.createElement\n内部 API\n创建元素, 由于只允许你使用JSX，因此无法使用\n\n\nReact.cloneElement\n内部 API\n复制元素, 由于只允许你使用JSX，因此无法使用\n\n\nReact.createFactory\n内部 API\n包装组件, 由于只允许你使用JSX，因此无法使用\n\n\nReact.createRef\n \n不存在\n\n\nReact.forwardRef\n \n不存在\n\n\nReact.api\n \n相当于微信的 wx, 支付宝小程序的 my，百度小程的 swan,为了方便编译，请不要在业务代码中直接用 wx,要用 React.api\n\n\nReact.getApp\n \n相当于微信的 getApp\n\n\nReact.Component\n \n所有组件的基类\n\n\nReact.useComponent\n内部 API\n用来创建组件\n\n\nReact.getCurrentPage\n\n得到当前页面的react实例， instance.props.query, instance.props.path为当前路径与参数对象\n\n\nReact.toRenderProps\n内部 API\n用来代替 render 属性对应的函数\n\n\nReact.toClass\n内部 API\n用来转译 es6 类\n\n\nReact.toStyle\n内部 API\n用来转译样式\n\n\nReact.registerPage\n内部 API\n页面组件会自动在底部添加这方法\n\n\nReact.registerComponent\n内部 API\n通用组件会自动在底部添加这方法\n\n\nonShow\n页面组件的生命周期钩子\n\n\n\nonHide\n页面组件的生命周期钩子\n\n\n\nonPageScroll\n页面组件的事件\n监听用户滑动页面事件\n\n\nonShareAppMessage\n页面组件的事件\n用于返回分享的内容\n\n\nonReachBottom\n页面组件的事件\n监听用户上拉触底事件\n\n\nonPullDownRefresh\n页面组件的事件\n监听用户下拉刷新事件\n\n\ncomponentWillMount\n组件的生命周期钩子\n相当于小程序的onLoad  props 中有 path, query 等路由相关信息\n\n\ncomponentWillUpdate\n组件的生命周期钩子\n没有对应的小程序生命周期钩子\n\n\ncomponentDidMount\n组件的生命周期钩子\n相当于小程序的onReady\n\n\ncomponentDidUpdate\n组件的生命周期钩子\n没有对应的小程序生命周期钩子\n\n\ncomponentWillUnmount\n组件的生命周期钩子\n相当于小程序的onUnload\n\n\ncomponentWillRecieveProps\n组件的生命周期钩子\n\n\n\nshouldComponentUpdate\n组件的生命周期钩子\n\n\n\ncomponentDidCatch\n组件的生命周期钩子\n\n\n\ngetChildContext\n组件的方法\n\n\n\nsetState\n组件的方法\n更新页面\n\n\nforceUpdate\n组件的方法\n更新页面\n\n\nrefs\n组件实例上的对象\n里面保存着子组件的实例（由于没有 DOM，对于普通标签来说， 虽然也能保存着它的虚拟 DOM )\n\n\nrender\n组件的方法\n里面必须使用 JSX ，其他方法不能存在 JSX，不能显式使用 createElement\n\n\n"
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
          "content": "connectSocket(Object object)创建一个 WebSocket 的连接；一个支付宝小程序同时只能保留一个 WebSocket 连接，如果当前已存在 WebSocket 连接，会自动关闭该连接，并重新创建一个新的 WebSocket 连接。（微信： 1.7.0 及以上版本，最多可以同时存在 5（小游戏）/2（小程序）个 WebSocket 连接。百度：1.9.4以上支持多个WebSockcet连接）参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nurl\nstring\n\n是\n开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名。\n都支持\n\n\nheader\n\bObject\n\n否\nHTTP 请求的 Header，Header 中不能设置 Referer\n都支持\n\n\nprotocols\nArray. string\n\n否\n子协议数组\n微信\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n"
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
          "content": "showModal(Object object)显示模态对话框参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ntitle\nstring\n\n是\n提示的标题\n都支持\n\n\ncontent\nstring\n\n是\n提示的内容\n都支持\n\n\nshowCancel\nboolean\ntrue\n否\n是否 \b 显示取消按钮\n微信,百度,快应用\n\n\ncancelText\nstring\n'取消'\n否\n取消 \b 按钮的文字，最多 4 个 \b 字符\n都支持\n\n\ncancelColor\nstring\n#000000\n否\n取消按钮的文字颜色，必须是 16 进制格式的颜色字符串\n微信, 快应用\n\n\nconfirmText\nstring\n'确定'\n否\n确定 \b 按钮的文字，最多 4 个 \b 字符\n都支持\n\n\nconfirmColor\nstring\n#3cc51f，百度为#3c76ff\n否\n确认按钮的文字颜色，必须是 16 进制格式的颜色字符串\n微信，百度, 块应用\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\nobject.success 回调函数参数Object res\n\n属性\n类型\n说明\n支持平台\n\n\n\n\nconfirm\nbooleam\n为 true 时，表示用户点击了确定按钮\n都支持\n\n\n代码示例React.api.showModal({  title: '温馨提示',\n  content: '您是否想查询快递单号:1234567890',\n  confirmText: '马上查询',\n  cancelText: '暂不需要',\n  success: result => {\n    console.log('result', result);\n  }\n});\n"
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
          "content": "createCanvasContext(canvasId)const ctx = React.api.createCanvasContext('myCanvas', this);  // 在快应用中this必须添加Tips: 快应用 canvas API\n调用的时间是在 onShow  绘制图片， 如果是 组件的话在componentDidMount 中延迟 300 ms\nsetShadow 没有这个属性\ncreateCircularGradient   创建圆形渐变属性没有\ncanvasToTempFilePath   把当前画布指定区域的内容导出生成指定大小的图片  该方法没有\n创建 canvas 绘图上下文该绘图上下文只作用于对应 canvasId 的 \n入参\n\n参数\n类型\n说明\n\n\n\n\ncanvasId\nString\n定义在 上的 id\n\n\n返回值CanvasContext"
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
          "content": "chooseImage(Object object)从本地相册选择图片或使用相机拍照。参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ncount\nnumber\n微信、百度：9， 支付宝： 1\n否\n最多可以选择的图片张数\n都支持\n\n\nsourceType\nString Array\n['album', 'camera']\n否\n选择图片的来源\n都支持\n\n\nsizeType\nString Array\n['original', 'compressed']\n否\noriginal 原图，compressed 压缩图，默认二者都有\n微信\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\nsuccess 返回值\n\n字段\n类型\n说明\n支持平台\n\n\n\n\ntempFilePaths\nString Array\n图片的本地文件路径列表\n都支持\n\n\ntempFiles\nObject Array\n图片的本地文件列表，每一项是一个 File 对象。\n微信小程序>=1.2.0, 百度小程序\n\n\nObject res\n\n属性\n类型\n描述\n支持平台\n\n\n\n\ntempFilePaths\nStringArray\n图片的本地文件路径列表\n都支持\n\n\ntempFiles\nObjectArray\n图片的本地文件列表，每一项是一个 File 对象\n微信、百度\n\n\n  choose() {    React.api.chooseImage({\n      count: 2,\n      success: res => {\n        this.setState({\n          img: res.tempFilePaths\n        })\n      }\n    });\n  }\n\n  render() {\n    return (\n      \n        选择图片\n        {\n          this.state.img.map(function(item) {\n            return  \n          })\n        }\n\n      \n    );\n  }\n"
        },
        {
          "title": "previewImage(Object object)",
          "url": "/apis/image.html#previewimageobject-object",
          "content": "previewImage(Object object)预览图片参数\bObject object\n\n属性\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nurls\nArray\n是\n要预览的图片链接列表\n都支持\n\n\ncurrent\nString\n否\n当前显示图片的链接\t，urls 的第一张\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\n React.api.previewImage({   current: 'http://xxxxxxx', // 当前显示图片链接\n   urls: [''], // 需要预览的图片http链接列表,\n   success: function(res) {\n      console.log('success', res);\n   },\n   fail: function (err) {\n      console.log('错误码：' + err.errCode);\n      console.log('错误信息：' + err.errMsg);\n   }\n});\n"
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
          "content": "setStorage(Object object)将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容。参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nkey\nstring\n\n是\n本地缓存中指定的 key\n\n\ndata\nObject/string\n\n是\n需要存储的内容\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n代码示例React.api.setStorage({  key: 'key',\n  data: 'value',\n  success: function(res) {\n    console.log('success', res)\n  },\n  fail: function(err) {\n    console.log('fail', err)\n  }\n});\n"
        },
        {
          "title": "setStorageSync(string key, Object|string data)",
          "url": "/apis/storage.html#setstoragesyncstring-key,-object|string-data",
          "content": "setStorageSync(string key, Object|string data)wx.setStorage 的同步版本参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nkey\nstring\n\n是\n本地缓存中指定的 key\n\n\ndata\nObject/string\n\n是\n需要存储的内容\n\n\n代码示例React.api.setStorageSync('key','values');"
        },
        {
          "title": "getStorage",
          "url": "/apis/storage.html#getstorage",
          "content": "getStorage获取缓存数据。这是一个异步接口\n参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nkey\nstring\n\n是\n本地缓存中指定的 key\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nsuccess返回参数说明：\n\n参数\n类型\n说明\n\n\n\n\ndata\nstring\nkey 对应的内容\n\n\n代码示例React.api.getStorage({  key: 'key',\n  success: function (res) {\n    console.log(res.data);\n  },\n  fail: function (err) {\n    console.log('错误码：' + err.errCode);\n    console.log('错误信息：' + err.errMsg);\n  }\n});\n"
        },
        {
          "title": "getStorageSync(string key)",
          "url": "/apis/storage.html#getstoragesyncstring-key",
          "content": "getStorageSync(string key)同步获取缓存数据。参数String\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nkey\nstring\n\n是\n本地缓存中指定的 key\n\n\n代码示例：let res = React.api.getStorageSync('currentCity');console.log('res', res);\n"
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
          "title": "getFileInfo(Object object) [快应用不支持]",
          "url": "/apis/file.html#getfileinfoobject-object-[快应用不支持]",
          "content": "getFileInfo(Object object) [快应用不支持]获取文件信息参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nfilePath\nstring\n\n是\n本地文件路径\n\n\ndigestAlgorithm\nstring\n'md5'\n否\n摘要算法，支持md5和sha1\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nobject.success 回调函数\n\n属性\n类型\n说明\n\n\n\n\nsize\nnumber\n文件大小，以字节为单位\n\n\ndigest\nstring\n按照传入的 digestAlgorithm 计算得出的的文件摘要\n\n\n"
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
          "content": "saveFile(Object object)保存文件到本地参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\ntempFilePath\nstring\n\n是\n需要保存的文件的临时路径\n\n\ndestinationFilePath\nstring\n\n是\n目标文件的uri, 快应用必须\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nobject.success 回调函数\n\n属性\n类型\n说明\n\n\n\n\nsavedFilePath\nstring\n文件数组，每一项是一个 FileItem\n\n\n"
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
          "content": "getLocation(Object object)获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。注：支付宝和微信小程序参数都不一致参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\ntype\nstring\nwgs84\n是\nwgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标\n微信小程序，百度小程序\n\n\naltitude\nstring\nfalse\n否\n传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度\n微信小程序>=1.6.0，百度小程序\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n微信小程序，百度小程序\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n微信小程序，百度小程序\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n微信小程序，百度小程序\n\n\nobject.success 回调函数参数Object res\n\n属性\n类型\n说明\n支持平台\n\n\n\n\nlatitude\nnumber\n纬度，范围为 -90~90，负数表示南纬\n微信小程序，百度小程序\n\n\nlongitude\nnumber\n经度，范围为 -180~180，负数表示西经\n微信小程序，百度小程序\n\n\nspeed\nnumber\n速度，单位 m/s\n微信小程序，百度小程序\n\n\naccuracy\nnumber\n位置的精确度\n微信小程序，百度小程序\n\n\naltitude\nnumber\n高度，单位 m\n微信小程序>= 1.2.0，百度小程序\n\n\nverticalAccuracy\nnumber\n垂直精度，单位 m（Android 无法获取，返回 0）\n微信小程序>= 1.2.0，百度小程序\n\n\nhorizontalAccuracy\nnumber\n水平精度，单位 m\n微信小程序>= 1.2.0，百度小程序\n\n\nstreet\nstring\n街道名称\n百度小程序\n\n\ncityCode\nstring\n城市编码\n百度小程序\n\n\ncity\nstring\n城市名称\n百度小程序\n\n\ncountry\nstring\n国家\n百度小程序\n\n\nprovince\nstring\n省份\n百度小程序\n\n\nstreetNumber\nstring\n街道号码\n百度小程序\n\n\ndistrict\nstring\n区\n百度小程序\n\n\n代码示例React.api.getLocation({  type: 'gcj02',\n  success: function (res) {\n     console.log('纬度：' + res.latitude);\n     console.log('经度：' + res.longitude);\n  },\n  fail: function (err) {\n     console.log('错误码：' + err.errCode);\n     console.log('错误信息：' + err.errMsg);\n  }\n})\n"
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
          "content": "vibrateLong(Object object)使手机发生较长时间的振动（400 ms)参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n微信， 百度，支付宝\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n微信，百度，支付宝\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n微信， 百度，支付宝\n\n\n"
        },
        {
          "title": "vibrateShort(Object object)",
          "url": "/apis/miniprogram.html#vibrateshortobject-object",
          "content": "vibrateShort(Object object)参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n支持平台\n\n\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n微信， 百度，支付宝\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n微信，百度，支付宝\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n微信， 百度，支付宝\n\n\n"
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
          "content": "getNetworkType(Object object)获取网络类型参数Object object\n\n属性\n类型\n默认值\n是否必须\n说明\n\n\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nobject.success 回调函数Object res\n\n属性\n类型\n描述\n支持平台\n\n\n\n\nnetworkType\nstring\n网络类型值 unknown / NOTREACHABLE(支付宝) / WWAN(支付宝) / wifi / 3g / 2g / 4g / none(百度、微信)\n都支持\n\n\nnetworkAvailable\nNumber\n网络是否可用\n支付宝\n\n\n"
        },
        {
          "title": "onNetworkStatusChange(function callback)",
          "url": "/apis/miniprogram.html#onnetworkstatuschangefunction-callback",
          "content": "onNetworkStatusChange(function callback)监听网络状态变化事件参数function callback网络状态变化事件的回调函数object.success 回调函数Object res\n\n属性\n类型\n描述\n支持平台\n\n\n\n\nnetworkType\nstring\n网络类型值 unknown / NOTREACHABLE(支付宝) / WWAN(支付宝) / wifi / 3g / 2g / 4g / none(百度、微信)\n都支持\n\n\nisConnected\nboolean\n当前是否有网络链接\n都支持\n\n\n"
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
          "content": "setKeepScreenOn(Object object)设置是否保持屏幕长亮状态。仅在当前小程序生效，离开小程序后失效。参数Object object\n\n参数\n类型\n默认值\n是否必须\n说明\n\n\n\n\nkeepScreenOn\nBoolean\n\n是\n是否保持屏幕长亮状态\n\n\nsuccess\nfunction\n\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
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
        },
        {
          "title": "系统信息",
          "url": "/apis/miniprogram.html#系统信息",
          "content": "系统信息"
        },
        {
          "title": "getSystemInfo(Object object)",
          "url": "/apis/miniprogram.html#getsysteminfoobject-object",
          "content": "getSystemInfo(Object object)获取系统信息参数\bObject object\n\n属性\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nsrc\nstring\n是\n图片路径，目前支持：网络图片路径、apFilePath 路径、相对路径\n都支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\nsuccess 返回值\n\n名称\n类型\n描述\n支持平台\n\n\n\n\nbrand\nstring\n手机品牌\n都支持\n\n\nmodel\nstring\n手机型号\n都支持\n\n\npixelRatio\nnumber\n设备像素比\n都支持\n\n\nscreenWidth\nnumber\n屏幕宽度\n都支持\n\n\nscreenHeight\nnumber\n屏幕高度\n都支持\n\n\nwindowWidth\nnumber\n可使用窗口宽度\n都支持\n\n\nwindowHeight\nnumber\n可使用窗口高度\n都支持\n\n\nstatusBarHeight\nnumber\n状态栏的高度\n百度、微信\n\n\nlanguage\nstring\n微信设置的语言\n都支持\n\n\nversion\nstring\n版本号\n都支持\n\n\nsystem\nstring\n操作系统版本\n都支持\n\n\nplatform\nstring\n客户端平台\n都支持\n\n\nfontSizeSetting\nstring\n用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px\n都支持\n\n\nSDKVersion\nstring\n客户端基础库版本\n百度、微信\n\n\nstorage\nstring\n设备磁盘容量\n支付宝\n\n\ncurrentBattery\nstring\n当前电量百分比\n支付宝\n\n\napp\nstring\n当前运行的客户端，当前是支付宝则有效值是\"alipay\"\n支付宝\n\n\nbenchmarkLevel\nstring\n(仅Android小游戏) 性能等级，-2 或 0：该设备无法运行小游戏，-1：性能未知，>=1 设备性能值，该值越高，设备性能越好 (目前设备最高不到50)\n微信\n\n\n"
        },
        {
          "title": "getSystemInfoSync(Object object)[快应用不支持]",
          "url": "/apis/miniprogram.html#getsysteminfosyncobject-object[快应用不支持]",
          "content": "getSystemInfoSync(Object object)[快应用不支持]同步获取系统信息返回值Object\n\n名称\n类型\n描述\n支持平台\n\n\n\n\nbrand\nstring\n手机品牌\n都支持\n\n\nmodel\nstring\n手机型号\n都支持\n\n\npixelRatio\nnumber\n设备像素比\n都支持\n\n\nscreenWidth\nnumber\n屏幕宽度\n都支持\n\n\nscreenHeight\nnumber\n屏幕高度\n都支持\n\n\nwindowWidth\nnumber\n可使用窗口宽度\n都支持\n\n\nwindowHeight\nnumber\n可使用窗口高度\n都支持\n\n\nstatusBarHeight\nnumber\n状态栏的高度\n百度、微信\n\n\nlanguage\nstring\n微信设置的语言\n都支持\n\n\nversion\nstring\n版本号\n都支持\n\n\nsystem\nstring\n操作系统版本\n都支持\n\n\nplatform\nstring\n客户端平台\n都支持\n\n\nfontSizeSetting\nstring\n用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px\n都支持\n\n\nSDKVersion\nstring\n客户端基础库版本\n百度、微信\n\n\nstorage\nstring\n设备磁盘容量\n支付宝\n\n\ncurrentBattery\nstring\n当前电量百分比\n支付宝\n\n\napp\nstring\n当前运行的客户端，当前是支付宝则有效值是\"alipay\"\n支付宝\n\n\nbenchmarkLevel\nstring\n(仅Android小游戏) 性能等级，-2 或 0：该设备无法运行小游戏，-1：性能未知，>=1 设备性能值，该值越高，设备性能越好 (目前设备最高不到50)\n微信\n\n\n"
        },
        {
          "title": "扫码",
          "url": "/apis/miniprogram.html#扫码",
          "content": "扫码"
        },
        {
          "title": "scanCode(Object object)",
          "url": "/apis/miniprogram.html#scancodeobject-object",
          "content": "scanCode(Object object)调起客户端扫码界面进行扫码参数\bObject object\n\n属性\n类型\n是否必须\n说明\n支持平台\n\n\n\n\nonlyFromCamera\nboolean\n否\n是否只能从相机扫码，不允许从相册选择图片，默认false\n都支持,快应用不支持\n\n\nscanType\nArray.\n否\n扫码类型，默认(微信)['barCode', 'qrCode'], 支付宝默认值['qrCode'],数组只识别第一个\n都支持， 快应用不支持\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n都支持\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n都支持\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n都支持\n\n\nobject.scanType 的合法值\n\n值\n描述\n支持平台\n\n\n\n\nbarCode\n一维码\n都支持\n\n\nqrCode\n二维码\n都支持\n\n\ndatamatrix\nData Matrix 码\n\b微信\n\n\npdf417\nPDF417 条码\n微信\n\n\nsuccess 返回值\n\n名称\n类型\n描述\n支持平台\n\n\n\n\nresult\nstring\n所扫码的内容\n都支持\n\n\nscanType\nstring\n所扫码的类型\n\b支付宝不支持\n\n\ncharSet\nstring\n所扫码的字符集\n支付宝不支持\n\n\nqrCode\nstring\n扫描二维码时返回二维码数据\n支付宝\n\n\nbarCode\nstring\n扫描条形码时返回条形码数据\n支付宝\n\n\npath\nnumber\n当所扫的码为当前小程序的合法二维码时，会返回此字段，内容为二维码携带的 path\n微信\n\n\nrawData\nstring\n原始数据，base64编码\n微信\n\n\n"
        },
        {
          "title": "用户截屏事件",
          "url": "/apis/miniprogram.html#用户截屏事件",
          "content": "用户截屏事件"
        },
        {
          "title": "onUserCaptureScreen(Object object)",
          "url": "/apis/miniprogram.html#onusercapturescreenobject-object",
          "content": "onUserCaptureScreen(Object object)监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。参数callbackReact.api.onUserCaptureScreen(function() {    console.log('用户截屏了')\n});\n"
        }
      ]
    },
    {
      "title": "iBeacon",
      "content": "",
      "url": "/apis/iBeacon.html",
      "children": [
        {
          "title": "startBeaconDiscovery(OBJECT)",
          "url": "/apis/iBeacon.html#startbeacondiscoveryobject",
          "content": "startBeaconDiscovery(OBJECT)开始搜索附近的iBeacon设备参数Object object\n\n参数\b名\n类型\n是否必须\n说明\n\n\n\n\nuuids\nStringArray\n是\niBeacon设备广播的 uuids\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n示例代码：React.api.startBeaconDiscovery({\n  uuids:['uuid1','uuid2'],\n  success: (res) => {\n    console.log(res)\n  },\n  fail:(res) => {\n  },\n  complete: (res)=>{\n  }\n});\nuuid1、uuid2 为目标 iBeacon 的UUID，可从硬件厂商获取，如果为空，无法搜索到 iBeacon\n"
        },
        {
          "title": "stopBeaconDiscovery(OBJECT)",
          "url": "/apis/iBeacon.html#stopbeacondiscoveryobject",
          "content": "stopBeaconDiscovery(OBJECT)停止搜索附近的iBeacon设备参数Object object\n\n参数\b名\n类型\n是否必须\n说明\n\n\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\n"
        },
        {
          "title": "getBeacons(OBJECT)",
          "url": "/apis/iBeacon.html#getbeaconsobject",
          "content": "getBeacons(OBJECT)获取所有已搜索到的iBeacon设备参数Object object\n\n参数\b名\n类型\n是否必须\n说明\n\n\n\n\nsuccess\nfunction\n否\n接口调用成功的回调函数\n\n\nfail\nfunction\n否\n接口调用失败的回调函数\n\n\ncomplete\nfunction\n否\n接口调用结束的回调函数（调用成功、失败都会执行）\n\n\nsuccess返回参数说明\n\n参数名\n类型\n描述\n支持平台\n\n\n\n\nbeacons\nObjectArray\niBeacon 设备列表\n都支持\n\n\nerrMsg\nString\n调用结果\n微信\n\n\nerrCode\nString\nerrorCode=0 ,接口调用成功\n支付宝\n\n\n"
        },
        {
          "title": "onBeaconUpdate(CALLBACK)",
          "url": "/apis/iBeacon.html#onbeaconupdatecallback",
          "content": "onBeaconUpdate(CALLBACK)监听 iBeacon 设备的更新事件CALLBACK返回参数说明：\n\n参数名\n类型\n描述\n支持平台\n\n\n\n\nbeacons\nObjectArray\niBeacon 设备列表\n都支持\n\n\niBeacon 结构：\n\n参数名\n类型\n描述\n\n\n\n\nuuid\nString\niBeacon 设备广播的 uuid\n\n\nmajor\nString\niBeacon 设备的主 id\n\n\nminor\nString\niBeacon 设备的次 id\n\n\nproximity\nNumber\n表示设备距离的枚举值(0-3分别代表：未知、极近、近、远)\n\n\naccuracy\nNumber\niBeacon 设备的距离\n\n\nrssi\nNumber\niBeacon 信号强度\n\n\n"
        },
        {
          "title": "onBeaconServiceChange(CALLBACK)",
          "url": "/apis/iBeacon.html#onbeaconservicechangecallback",
          "content": "onBeaconServiceChange(CALLBACK)监听 iBeacon 服务的状态变化CALLBACK返回参数说明：\n\n参数名\n类型\n描述\n\n\n\n\navailable\nBoolean\n服务目前是否可用\n\n\ndiscovering\nBoolean\n目前是否处于搜索状态\n\n\n"
        }
      ]
    }
  ],
  "去哪儿内部组件": [
    {
      "title": "",
      "content": "",
      "url": "/ui/index.html",
      "children": [
        {
          "title": "QunarLoading",
          "url": "/ui/index.html#qunarloading",
          "content": "QunarLoading使用方法import React from '@react';import QunarLoading from '@components/QunarLoading/index';\n// 事件\nclass Data extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      networkData: {\n        status: -3,\n        loadingDesc: '加载中...',\n        showButton: true\n      }\n    };\n  }\n\n  componentDidMount() {\n    let selfState = this.state;\n    let self = this;\n    setTimeout(\n      function() {\n        selfState.networkData.status = 0;\n        self.setState({ ...selfState }); //自动隐藏\n      }.bind(this),\n      5000\n    );\n  }\n\n  render() {\n    return (\n      \n        加载\n        \n      \n    );\n  }\n}\nexport default Data;\n"
        },
        {
          "title": "属性说明如下：",
          "url": "/ui/index.html#qunarloading-属性说明如下：",
          "content": "属性说明如下：\n\n属性\n类型\n说明\n\n\n\n\n\bnetworkData\nObject\n网络\b状态信息\n\n\nnetworkRetry\nfunction\n触发重新加载\n\n\nnetworkData Object\n\n属性\n类型\n是否必须\n默认值\n说明\n\n\n\n\n\bstatus\nnumber\n否\n4\n网络状态码       1 toast系统默认加载中 背景白色    2 toast系统默认加载中 背景透明    3 dots加载中mini 背景透明     4 qunar大图骆驼加载中 背景白色    0 成功   -1 网络连接失败  -2 没有数据  -3 提示信息\n\n\nloadingDesc\nstring\n否\n加载中...\nloading描述(可选)\n\n\nshowButton\nboolean\n否\ntrue\n显示重新加载 button, 默认为true\n\n\n\n\n属性\n类型\n默认值\n说明\n\n\n\n\n\bnetworkData\nObject\n\n网络 \b 状态信息\n\n\n\btop\nString/Number\n0\n距离页面顶部的高度\n\n\nbottom\nString/Number\n0\n距离页面底部部的高度\n\n\nwidth\nString/Number\n100%\n页面宽度\n\n\nheight\nString/Number\nauto\n页面高度\n\n\nzIndex\nString/Number\n100\n页面的层叠顺序\n\n\nnetworkRetry\nfunction\n触发重新加载\n\n\n\nnetworkData Object\n\n属性\n类型\n是否必须\n默认值\n说明\n\n\n\n\n\bstatus\nnumber\n否\n4\n网络状态码  1 toast 系统默认加载中 背景白色  2 toast 系统默认加载中 背景透明  3 dots 加载中 mini 背景透明  4 qunar 大图骆驼加载中 背景白色  0 成功  -1 网络连接失败  -2 没有数据  -3 提示信息\n\n\nloadingDesc\nstring\n否\n加载中...\nloading 描述(可选)\n\n\nshowButton\nboolean\n否\ntrue\n显示重新加载 button, 默认为 true\n\n\nstatus: -3 提示信息status: -2 没有数据 和 status: -1 网络连接失败status: 1 加载中 toast 系统默认 背景白色status: 2 加载中 toast 系统默认 背景透明status: 3 加载中 dots 加载中 mini 背景透明status: 4 加载中 qunar 大图骆驼 背景白色"
        },
        {
          "title": "CitySelect",
          "url": "/ui/index.html#cityselect",
          "content": "CitySelect使用方法// index.jscitySelect() {\n    var params = {\n      type: 3, // 0:机票 1:火车票 2:汽车票 3:酒店\n      cityListService: HOTEL_API.HOTEL_LIST.HOTEL_INDEX_CITY,\n      citySuggestService: HOTEL_API.HOTEL_LIST.HOTEL_INDEX_SUGGEST,\n      eventType: HOTEL_EVENT_NAME.CITY_SELECT,\n      placeholder: \"请输入城市名称或首字母\"\n    };\n\n    React.api.navigateTo({\n      url: '/pages/citySelector/index?data='+ JSON.stringify(params)\n    });\n  }\n\n  render() {\n    return (\n      \n        \n          城市列表页\n        \n      \n    );\n  }\n\n  // citySelect/index.js\n  render() {\n    return (\n      \n        \n      \n    );\n  }\n\n\n属性\n类型\n说明\n\n\n\n\nparam\nObject\n不同业务线的数据信息\n\n\n属性\n类型\n说明\n\n\n-----\n-------------\n--------------------\n\n\nparam\nObject/String\n不同业务线的数据信息\n\n\n\n\n属性\n类型\n是否必须\n默认值\n说明\n\n\n\n\n\btype\nnumber\n是\n4\n业务线信息  0:机票 1:火车票 2:汽车票 3:酒店\n\n\ncityListService\nstring\n是\n\n请求 city list 的接口地址\n\n\ncitySuggestService\nstring\n是\n\n城市搜索 suggest 接口地址\n\n\neventType\nstring\n是\n\n城市 \b 选择回调名\n\n\nplaceholder\nstring\n否\n请输入城市名称或首字母\n搜索框显示信息\n\n\n以上参数和微信公共组件 citySelect 用法相同\n\n属性\n类型\n是否必须\n默认值\n说明\n\n\n\n\n\btype\nnumber\n是\n4\n业务线信息      0:机票 1:火车票 2:汽车票 3:酒店\n\n\ncityListService\nstring\n是\n\n请求 city list 的接口地址\n\n\ncitySuggestService\nstring\n是\n\n城市搜索suggest 接口地址\n\n\neventType\nstring\n是\n\n城市\b选择回调名\n\n\nplaceholder\nstring\n否\n请输入城市名称或首字母\n搜索框显示信息\n\n\n以上参数和微信公共组件 citySelect 用法相同"
        },
        {
          "title": "SideBar",
          "url": "/ui/index.html#sidebar",
          "content": "SideBarimport React from '@react';import SideBar from '@components/sideBar/index';\n\nclass Data extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      showSideBar: false, // 是否弹起\n      data: {\n        title: '标题', // sidebar title\n        tips: '描述描述描述描述描述描述', // title下方的提示,可见线上填单页房间等选择\n        curIndex: 1, // 当前选中index\n        data: [\n          {\n            // 选项list数据\n            key: 'test key 1',\n            value: 'test value 1'\n          }\n        ]\n      }\n    };\n  }\n\n  componentDidMount() {}\n\n  // 选择item回调\n  selectItem(index, value) {\n    console.log(index, value);\n  }\n\n  showProps() {\n    this.setState({\n      showSideBar: true\n    });\n  }\n\n  // 蒙层点击回调\n  commonSideBarHidden() {\n    console.log('蒙层关闭');\n  }\n\n  render() {\n    return (\n      \n        \n          toggle 弹窗\n        \n        \n      \n    );\n  }\n}\nexport default Data;\n"
        },
        {
          "title": "Calendar",
          "url": "/ui/index.html#calendar",
          "content": "Calendar使用方法    var params = {        date: '2019-01-01',   // 选中的日期\n        eDate: '2019-01-11',  // 双选时的第二个日期\n        eventType: CONSTANTS.HOTEL_EVENT_NAME.ARRIVA_DEPARTURE_DATE_SELECT, // 回调事件名字\n        isDoubleSelect: true, // 是否双选\n        calendarDays: 90,     // 日历显示的天数\n        sText: '入住',         // 选中的文案\n        eText: '离店',         // 双选时的第二个文案\n        url: encodeURIComponent('/train/product/api/train/TrainCalendar'), // 请求日历数据的url，一定要encode\n        reqData: {\n            bizType: 0   请求url的数据\n        },\n        bizType: 'train',     // 业务线\n        isMultiSelect: false  // 是否多选\n        dates: ['20181016'],  // 已经选择的备选日期s\n        maxSelectDays: 6      // 最多备选多少个\n    };\n    React.api.navigateTo({\n        url: \"/pages/calendar/index?data=\" + JSON.stringify(params)\n    });\n以上参数和微信公共组件 Calendar 用法相同"
        }
      ]
    }
  ],
  "谁在用nanachi": [
    {
      "title": "使用娜娜奇生成的小程序",
      "content": "",
      "url": "/documents/logo.html",
      "children": [
        {
          "title": "百度小程序（需要使用手机百度APP 搜索栏旁边的拍摄二维码打开）",
          "url": "/documents/logo.html#百度小程序（需要使用手机百度app-搜索栏旁边的拍摄二维码打开）",
          "content": "百度小程序（需要使用手机百度APP 搜索栏旁边的拍摄二维码打开）"
        },
        {
          "title": "支付宝小程序（需要使用支付宝APP 扫码打开）",
          "url": "/documents/logo.html#支付宝小程序（需要使用支付宝app-扫码打开）",
          "content": "支付宝小程序（需要使用支付宝APP 扫码打开）"
        }
      ]
    }
  ]
}