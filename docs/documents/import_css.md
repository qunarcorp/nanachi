# 按平台引入CSS文件

nanachi支持less, sass, postcss。默认情况下支持less。针对sass，由于sass环境安装比较麻烦，若用户工程目录没安装node-sass依赖，nanachi就会用过postcss来解析sass或者scss文件。

各大样式预处理器对被依赖的@import资源内容打包到当前文件，在很多场景下，这种打包策略会造成应用体积臃肿，比如每个样式文件都引用了基础样式。
nanachi对这种策略做了改进，实现了模块化打包。例如: 
Sass:
```html
   //sass
   @import './moduleA.scss';
   @import './moduleB.scss';
   .box {
     color: #333;
   }
```
编译结果：
```html
   //sass
   @import './moduleA.wxss';
   @import './moduleB.wxss';
   .box {
     color: #333;
   }
```
Less:
```html
   //less
   @import (reference) './moduleA.less';
   @import (reference) './moduleB.less';
   .box {
     color: #333;
   }
```
编译结果：
```html
   //less
   @import './moduleA.wxss';
   @import './moduleB.wxss';
   .box {
     color: #333;
   }
```
注: postcss暂不支持该特性。

### 注意!!!
pages目录下需要引用公用样式，请将公用样式放入source/assets目录下。禁止pages目录下的文件以任何方式引入components目录下的任何样式表, components目录下的样式表也不能引用pages目录下的样式表。

错误的用法1, pages下的JS文件引用components下的样式表
```javascript
//pages/xxx/index.js
import '../../components/Dog/index.scss'
import React form '@react'

class P extends React.Component{
```
错误的用法2，pages下的CSS文件（csss, wxss, acss）引用components下的样式表
```css
/*pages/xxx/index.scsss*/
import '../../components/Dog/index.scss'
.xxx{
  border: 1px solid red
}
```
错误的用法3，component下的CSS文件引用pages目录下的样式表
```css
/*compoents/xxx/index.scsss*/
import '../../pages/train/index.scss'
.xxx{
  border: 1px solid red
}
```

组件的样式必须在组件里面引用，禁止在pages页面样式文件中@import组件样式。
