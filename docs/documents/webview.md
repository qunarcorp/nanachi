# 智能webview化

有一些场合，我们不得不使用webview. 虽说webview有很多缺点，比如它都是远程加载的，没有直接停驻于被寄生的APP上，导致页面加载慢，一些高级的APP特性用不了，需要跳转到小程序才能支付云云。但webview也有一个重要的不可忽视的优势，开发简单——就是我们熟悉的HTML开发。

## webview的使用场合

1. CSS兼容难度大，一些样式不支持需要调整，尤其是快应用，没有display:block/inline, position:absolute/relative, float:left/right,  只能用flexbox布局。这需要小公司来说，大大提高研发成本。
2. 小程序/快应用的size问题， 尤其是快应用只有1MB大小，很容易超出大小，而webview加载的页面不计入它的size.
3. 特定平台的限制问题，比如说支付宝不能使用video标签，你想做直播类，需要特殊申请，并必须用优酷上传视频，这时就可以将这个页面变成webview.

## 使用

在对应频道的页面对象的config添加一个参数

```json
{
    webview: {
        quick: true,//将这个页面所在文件夹（频道）的所有页面及子页面都webview
        ali: ["pages/video/index"]
    }
}
```

>  频道就是 pages下面的某个文件夹的意思

## webview标签的兼容

webview标签在不同平台，它的名称与事件名有点出入

|wx	    |ali    |	  bu   |tt | quick  |
|:-----:|:------:|:------:|:------:|:-------:|
|web-view| web-view|web-view|web-view  |web |
