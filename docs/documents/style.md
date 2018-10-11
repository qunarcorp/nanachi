# 通用样式

## 样式表

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| width | ``<length>`` \| ``<percentage>`` | - | 未设置时使用组件自身内容需要的宽度 |
| height | `<length>` \| `<percentage>` | - | 未设置时使用组件自身内容需要的高度 |
| padding | `<length>` | 0 | 简写属性，在一个声明中设置所有的内边距属性，该属性可以有1到4个值 |
| padding-[left\|top\|right\|bottom] | `<length>` | 0 | |
| margin | `<length>` | 0 | 简写属性，在一个声明中设置所有的外边距属性，该属性可以有1到4个值 |
| margin-[left\|top\|right\|bottom] | `<length>` | 0 | |
| border | - | 0 | 简写属性，在一个声明中设置所有的边框属性，可以按顺序设置属性width style color，不设置的值为默认值 |
| border-style | dotted \| dashed \| solid | solid | 暂时仅支持1个值，为元素的所有边框设置样式 |
| border-width | `<length>` | 0 | 简写属性，在一个声明中设置元素的所有边框宽度，或者单独为各边边框设置宽度 |
| border-[left\|top\|right\|bottom]-width | `<length>` | 0 | |
| border-color | `<color>` | black | 简写属性，在一个声明中设置元素的所有边框颜色，或者单独为各边边框设置颜色 |
| border-[left\|top\|right\|bottom]-color | `<color>` | black |
| border-radius | `<length>` | 0 | 圆角时只使用border-width，border-[left\|top\|right\|bottom]-width无效圆角时只使用border-color，border-[left\|top\|right\|bottom]-color无效 |
| border-[top\|bottom]-[left\|right]-radius | `<length>` | 0 | |
| background | `<linear-gradient>` | - | 支持 渐变样式，暂时不能与background-color、background-image同时使用 |
| background-color | `<color>` | - | |
| background-image | `<uri>` | - | 暂时不支持与background-color，border-color同时使用；不支持网络图片资源，请使用本地图片资源；1010+版本支持9-patch图，详情见背景图样式 |
| background-size `1000+` | contain \| cover \| auto \| `<length>` \| `<percentage>` | 100% 100% | 设置背景图片大小，详情见背景图样式 |
| background-repeat `1000+` | repeat \| repeat-x \| repeat-y \| no-repeat | repeat | 设置是否及如何重复绘制背景图像，详情见背景图样式 |
| background-position `1010+` | `<length>` \|`<percentage>`\| left \| right \| top \| bottom \| center | 0px 0px | 描述了背景图片在容器中绘制的位置，支持1-4个参数，详情见背景图样式 |
| opacity | `<number>` | 0xff | |
| display | flex \| none | flex | |
| visibility | visible \| hidden | visible | |
| flex | `<number>` | - | 父容器为`<div>`、`<list-item>`、`<tabs>`时生效 |
| flex-grow | `<number>` | 0 | 父容器为`<div>`、`<list-item>`时生效 |
| flex-shrink | `<number>` | 1 | 父容器为`<div>`、`<list-item>`时生效 |
| flex-basis | `<number>` | -1 | 父容器为`<div>`、`<list-item>`时生效 |
| position | none \| fixed | none | 父容器为`<list>`、`<swiper>`时不生效 |
| [left\|top\|right\|bottom] | `<number>` | - | - |

## 示例

### 左中右分栏

```css
```

### 上中下分栏

```css
```

### 格子

```css
```

### 图片里面有文字

```css
```