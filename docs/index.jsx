---
banner:
  name: '娜娜奇'
  desc: '基于 React 的多端小程序转译框架'
  btns: 
    - { name: '开 始', href: './documents/intro.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/RubyLouvre/anu/tree/master/packages/cli' }
  caption: ''
features: 
  - { name: '多套模板选择', desc: '旅游、商城、音乐三套通用模板' }
  - { name: '多端转译支持', desc: '支持微信、百度、支付宝、字节跳动小程序与快应用与H5的转译，app端正在跟进中' }
  - { name: '组件化编程', desc: '完美兼容 React 生命周期钩子' }
  - { name: '支持事件传参', desc: '突破 wxml 的限制，实现多次 bind this 与参数' }
  - { name: '日志收集与上报', desc: '实现自动理点及全自动的上报机制' }
  - { name: '内置基于flexbox布局的UI库', desc: '无感抹平各个端的标签差异' }

footer:
  copyRight:
    name: 'nanachi Team'
    href: 'https://ymfe.org/'
  links:
    团队网址:
      - { name: 'YMFE', href: 'https://ymfe.org/' }
      - { name: 'YMFE Blog', href: 'https://blog.ymfe.org/' }
    Git仓库:
      - { name: 'Github', href: 'https://github.com/RubyLouvre/anu' }
      - { name: 'Github Issue', href: 'https://github.com/RubyLouvre/anu/issues' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />