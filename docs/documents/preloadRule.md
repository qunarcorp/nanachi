# 分包预加载



开发者可以通过配置，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度。
对于独立分包，也可以预下载主包。

分包预加载有只支持通过配置方式使用，暂不支持通过调用API完成。

> vConsole 里有preloadSubpackages开头的日志信息，可以用来验证预下载的情况。

```json
{
  "pages": ["pages/index"],
  "subpackages": [
    {
      "root": "flight",
      "pages": ["index"],
    },
    {
      "root": "train",
      "pages": ["index"],
    },
    {
      "name": "hotel",
      "root": "index",
      "pages": ["index"]
    },
    {
      "root": "strategy",
      "pages": ["index"]
    },
     {
      "root": "boat",
      "pages": ["index"]
     },
      {
      "root": "taxi",
      "pages": ["index"]
     },
  ],
  "preloadRule": {
    "pages/index": { //首页
      "network": "all",
      "packages": ["flight", "train","hotel"] //一级分包
    },
    "flight/index": { 
      "packages": ["strategy","boat", "taxi"] //二级分包
    },
    "train/index": {
      "packages":  ["strategy","boat", "taxi"] //二级分包
    },
    "hotel/index": {
      "packages":  ["strategy","boat", "taxi"] //二级分包
    },
     "strategy/index": {
      "packages":  [ "boat", "taxi"] //二级分包中除自己的包
    },
     "boat/index": {
      "packages":  ["strategy", "taxi"] //二级分包中除自己的包
    },
     "taxi/index": {
      "packages":  ["strategy", "boat"] //二级分包中除自己的包
    }
  }
}
```

preloadRule 中，key 是页面路径，value 是进入此页面的预下载配置，每个配置有以下几项：

| 字段     | 类型        | 必填 | 默认值 | 说明                                                  |
|----------|-------------|-----|--------|-----------------------------------------------------|
| packages | StringArray | 是   | 无     | 进入页面后预下载分包的 root 或 name。__APP__ 表示主包。 |
| network  | String      | 否   | wifi   | 在指定网络下预下载，可选值为：                          |


all: 不限网络 
wifi: 仅wifi下预下载
