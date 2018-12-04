# 样式编译特性
nanachi支持less, sass, postcss。默认情况下支持less。针对sass，由于sass环境安装比较麻烦，若用户工程目录没安装node-sass依赖，nanachi就会用过postcss来解析sass或者scss文件。


### 模块化打包样式。
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