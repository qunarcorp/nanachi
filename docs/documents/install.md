# 快速开始

## 前置要求

* 下载并安装微信开发者工具
* 本地 `Node.js` 版本大于 `7`

## 安装

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