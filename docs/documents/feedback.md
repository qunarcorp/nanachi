# nanachi 项目反馈

### 下面是关于您的预编译语言使用情况

<script type="text/javascript" src="http://www.websitegoodies.com/poll.php?id=116285"></script>
<script >
    // 修改提交按钮文案为中文
    const form = document.forms[0];
    const selectElement = form.querySelector('input[type="submit"]');
    selectElement.value = "提交投票";
    selectElement.style.backgroundColor = "#1890ff";
    selectElement.style.color = "white";
    selectElement.style.padding = "2 8px";
    selectElement.style.cursor = "pointer";

</script>

### 下面区域是关于 nanachi 的反馈，如果你有什么意见或建议欢迎在评论区留言 :>

<div id="container"></div>
<link rel="stylesheet" href="https://imsun.github.io/gitment/style/default.css">
<script src="https://imsun.github.io/gitment/dist/gitment.browser.js"></script>
<script>
var gitment = new Gitment({
  id: '页面 ID', // 可选。默认为 location.href
  owner: 'RubyLouvre',
  repo: 'nanachi',
  oauth: {
    client_id: 'fe315c9f10c8dc15faa9',
    client_secret: 'c0b02a5f083f1d55b0ea2482da339ebf093dedc7',
  },
})
gitment.render('container')
</script>
