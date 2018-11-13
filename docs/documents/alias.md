# alias别名配置

在项目package.json中，可配置alias别名。
package.json中配置：
```jsx
{
    "nanachi": {
        "alias": {
            "@co": "/source/a/b"
        }
    }
}
```

使用方式：
```jsx
//js中
import module from '@com/module/index.js';
```

```jsx
//style中
@import '@com/style/g.scss';
```
