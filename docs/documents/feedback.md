# nanachi 项目反馈

### 下面是关于您的预编译语言使用情况

<script type="text/javascript" src="http://www.websitegoodies.com/poll.php?id=116285"></script>
<script >
    // 修改提交按钮文案为中文
    document.addEventListener("DOMContentLoaded", function(){
      const els = document.querySelectorAll('form div[align="center"] *');
      if(els.length > 2){
          var button1 = els[0]
          var button2 = els[els.length-1];
          button1.value = "提交投票";
          button1.style.backgroundColor = "#1890ff";
          button1.style.color = "white";
          button1.style.padding = "2px 8px";
          button1.style.cursor = "pointer";
          button2.innerHTML = '查看结果';
      }
    });
</script>

### 下面区域是关于 nanachi 的反馈，如果你有什么意见或建议欢迎在评论区留言:

<div id="container"></div>
<link rel="stylesheet" href="https://imsun.github.io/gitment/style/default.css">
<script src="https://imsun.github.io/gitment/dist/gitment.browser.js"></script>
<script>
var gitment = new Gitment({
  id: '页面 ID', // 可选。默认为 location.href
  owner: 'RubyLouvre',
  repo: 'nanachi',
  oauth: {
    client_id: 'c94e12373b38435e378a',
    client_secret: '497ad5ef73ba031b895f56cc1d73d0bf87d981d3',
  },
})
gitment.render('container')
</script>
