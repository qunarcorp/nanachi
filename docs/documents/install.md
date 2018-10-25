# 快速开始

## 前置要求

* 下载并安装微信开发者工具
* 本地 `Node.js` 版本 `8.0` 以上

## 安装

1. `git clone git@github.com:RubyLouvre/anu.git` 或`git clone https://github.com/RubyLouvre/anu.git`<br />
2. 命令行定位到`packages/cli`目录下，执行`npm link` 如果之前装过要先npm unlink<br />
3. 然后定位到外面的目录，不要在cli目录中建工程。 使用 `cd ../../ && mpreact init demo` 创建工程<br />
4. 定位到 `demo` 目录下安装依赖`npm i `或`yarn`
5.  `mpreact build` 构建，<br />
6.  `mpreact watch` 监听文件变化实时构建，<br />
7. 用微信开发工具打开当中的dist目录，自己在src目录中进行开发<br />
如果想构建支付宝或百度小程序  `mpreact build:ali`或`mpreact build:bu`或`mpreact build:quick` 构建，<br />

```shell
cd anu/packages/cli & npm link
cd ../../ && mpreact init demo
cd demo && <yarn|npm|cnpm> install
mpreact build:<wx|ali|bu|quick>
mpreact watch:<wx|ali|bu|quick>
```

![image](./select_tmpl.png)
![image](./build_wx.png)
![image](./watch_wx.png)
![image](./build_bu.png)
![image](./watch_bu.png)
![image](./build_ali.png)
![image](./watch_ali.png)

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


