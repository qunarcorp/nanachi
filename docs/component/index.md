
# 组件对比

## 视图容器


| 组件名     |    缺少                        |缺少的属性                        |微信多出的属性|
| -------- | ----------------------------------|-------------- |------|
| view  |                           |||
| scroll-view     |                          |||
| swiper | |支付宝缺少属性（current-item-id, display-multiple-items）| skip-hidden-item-layout	|
|movable-area|支付宝|||
|cover-view|支付宝||||


## 基础内容


| 组件名     |    缺少                        |缺少的属性                        |微信多出的属性|
| -------- | ----------------------------------|-------------- |------|
| icon  |                           |||
| text     |                           |支付宝（space）|selectable, decode|
| progress |  |支付宝缺少属性（color, active-mode）|	|
|rich-text|支付宝|||
|animation|支付宝, 微信||||

## 表单组件

| 组件名     |    缺少                        |缺少的属性                        |微信多出的属性|
| -------- | ----------------------------------|-------------- |------|
| button  |                           |支付宝缺少属性（hover-stop-propagation,bindgetuserinfo ）|lang,  微信多出一些open-type存在的属性|
| checkbox     |                           |支付宝（color）||
| form |  ||	|
|input||支付宝缺少属性（cursor-spacing ）||
|textarea||支付宝缺少属性（show-confirm-bar,selection-start,selection-end,adjust-position, bindlinechange）|||
|label|||||
|picker||支付宝缺少属性mode |||
|picker-view||支付宝属性是 indicatorStyle， 支付宝缺少的属性是（indicator-class,mask-style,mask-class） |||
|radio||支付宝缺少属性color |||
|switch||百度缺少属性disabled |||
|slider||支付宝（handleSize,handleColor）;微信，百度（block-size,block-color）|

## 导航

| 组件名     |    缺少                        |缺少的属性                        |微信多出的属性|
| -------- | ----------------------------------|-------------- |------|
| navigator  |                           |支付宝缺少属性（delta ）|app-id, path, extra-data, version|
|animation|支付宝, 百度||||

## 媒体组件

| 组件名     |    缺少                        |缺少的属性                        |微信多出的属性|
| -------- | ----------------------------------|-------------- |------|
| image  |                          |支付宝（lazyLoad ）;微信，百度（lazy-load） ||
|audio|支付宝||danmu-list,danmu-btn,enable-danmu|
|camera|支付宝||mode,flash,bindscancode|
|live-player|支付宝||mode|
|live-pusher|支付宝, 百度|||


## 地图

| 组件名     |    缺少                        |缺少的属性                        |微信多出的属性|
| -------- | ----------------------------------|-------------- |------|
| map  |                           |百度（polygons ） |enable-overlooking,enable-zoom, enable-scroll,enable-rotate|

## 画布

| 组件名     |    缺少                        |缺少的属性                        |微信多出的属性|
| -------- | ----------------------------------|-------------- |------|
| canvas  |                           ||


> 注： 画布属性写 id 而不是 canvas-id



