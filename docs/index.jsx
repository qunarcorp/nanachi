---
banner:
  name: '娜娜奇'
  desc: '基于 React 编写小程序的转译框架'
  btns: 
    - { name: '开 始', href: './documents/intro.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/roland-reed/nanachi-cli' }
  caption: '当前版本: v0.0.2'
features: 
  - { name: '三套模板', desc: '旅游、商城、企业三套通用模板' }
  - { name: '支持 slot', desc: '突破小程序 template 限制，支持组件标签包含其他内容' }
  - { name: '支持事件传参', desc: '突破 wxml 的限制，实现多次 bind this 与参数' }
  - { name: '组件化编程', desc: '完美兼容 React 生命周期钩子' }
  - { name: '支持 Render Props', desc: '可以更自由地写组件' }
  - { name: '支持 Redux', desc: '实现全App数据流动' }

footer:
  copyRight:
    name: 'YMFE Team'
    href: 'https://ymfe.org/'
  links:
    团队网址:
      - { name: 'YMFE', href: 'https://ymfe.org/' }
      - { name: 'YMFE Blog', href: 'https://blog.ymfe.org/' }
    Git仓库:
      - { name: 'Github', href: 'https://github.com/YMFE/ydoc' }
      - { name: 'Github Issue', href: 'https://github.com/YMFE/ydoc/issues' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />