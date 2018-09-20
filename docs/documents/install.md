# 快速开始

## 前置要求

* 下载并安装微信开发者工具
* 本地 `Node.js` 版本大于 `7`

## 安装

1. `git clone git@github.com:RubyLouvre/anu.git` 或`git clone https://github.com/RubyLouvre/anu.git`<br />
2. 命令行定位到`packages/cli`目录下，执行`npm link` 如果之前装过要先npm unlink<br />
3. 使用mpreact `<project-name>` 创建工程<br />
4. 定位到  `<project-name>` 目录下 `mpreact start` 开始监听文件变化，<br />
5. 用微信开发工具打开当中的dist目录，自己在src目录中进行开发<br />

详见 https://rubylouvre.github.io/nanachi/index.html 或  https://github.com/RubyLouvre/anu/tree/master/packages/render/miniapp

拼多多模板，请打开右上角 “>>” 详情，  不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书 打上勾


![image](https://user-images.githubusercontent.com/190846/45038189-53f44a80-b093-11e8-9ecb-a4080f21b262.png)



=============

另一种新的安装方式（还在测试中）

执行以下命令：

```bash
npm i -g nanachi-cli

# if you are using yarn
yarn global add nanachi-cli
```

即可全局安装 `nanachi`。

## 初始化项目

执行一下命令可以在当前目录新建一个项目：

```bash
nanachi init
```

回答数个问题即可生成一个新项目。

## 启动项目

初始化之后在项目根目录中执行 `nanachi start` 命令，即可进入开发模式。注意，微信开发者工具在选择目录时需要选择项目根目录下的 `dist/` 目录。

## 编译项目

在项目根目录执行 `nanachi build` 即可编译项目至 `dist/` 目录下。

## 开发计划

nanachi未来将支持一键打包支付宝小程序，百度智能小程序，快应用。

```bash
# 默认情况下打包成微信小程序
nanachi build

# 打包支付宝小程序
nanachi build:ali

# 打包百度只能小程序
nanachi build:baidu

# 打包快应用
nanachi build:quick
```


