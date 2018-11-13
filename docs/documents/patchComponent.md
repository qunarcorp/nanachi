# 组件补丁
由于平台的差异性， 可能存在内置组件的差异， nanachi 自己实现了一套差异化组件。如小程序中存在 `button` 组件， 快应用不存在。
当打包快应用时，会自动打包该组件补丁，以规避平台的差异性。

```jsx
[1] build success: src/components/Button/index.js [3.3KB]
[2] build success: src/components/Button/index.ux [2.1KB]
```

# 组件补丁列表
整理中...