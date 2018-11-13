# alias别名配置

在项目package.json中，可配置alias别名。
package.json中配置：

```jsx
{
    "nanachi": {
        "alias": {
            "@components": '/components',
            "@assets": '/assets'
        }
    }
}
```

使用方式：

```jsx
//js中
import FlightButton from '@components/FlightButton/index.js';
```

```jsx
//style中
@import '@assets/style/g.scss';
```
