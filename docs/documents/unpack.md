## 拆库开发

拆库开发亦称分仓库开发， 如果一个小程序非常大，比如说商场小程序，有许多频道，这涉及多条业务线，每条业务线开发一个频道，那么就需要此功能。

我们允许每个频道都独立建一个github/gitlab仓库进行独立开发
上线前，通过我们的拆包工具**chaika**， 将要上线的频道整合成一个要上线的小程序，集中用nanachi进行转译发布。

 [https://qunarcorp.github.io/chaika/](https://qunarcorp.github.io/chaika/)


