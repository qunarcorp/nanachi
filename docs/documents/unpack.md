## 拆库开发

拆库开发亦称分仓库开发， 如果一个小程序非常大，比如说商场小程序，有许多频道，这涉及多条业务线，每条业务线开发一个频道，那么就需要此功能。

我们允许每个频道都独立建一个github/gitlab仓库进行独立开发
上线前，通过我们的拆包工具**chaika**， 将要上线的频道整合成一个要上线的小程序，集中用nanachi进行转译发布。

 [https://qunarcorp.github.io/chaika/](https://qunarcorp.github.io/chaika/)

```

 src
   |--components
   |    |--HotelDialog     // 这里的组件是不打算分包，会全部打入主包中
   |    |     └──index.js  //必须以index.js命名，里面的类名 必须 与文件夹名一样, 如HotelDialog
   |    |--HotelXXX
   |    |--FlightYYY
   |    └── ...
   |--pages
   |    |--hotel
   |    |--flight
   |    |--holiday
   |    |--strategy
   |    └── ...
   |--assets 
   |    |--style
   |--common
   |    |--hotel
   |    |--flight
   |    |--holiday
   |    |--strategy
   |    └── ...
   |--app.json 
   |--wxConfig.json
   |--qqConfig.json
   |--quickConfig.json
   |--aliConfig.json
   |--buConfig.json
```
app.json里面有

```json
{
    "pages": [],
    "nanachi":{
        "alias": {
            "@hotel/common": "source/common/hotel"
        }
    }
}
```


