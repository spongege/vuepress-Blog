<template>
  <div class="page">
    <section class="page-edit">
      <div>
        <!-- id 将作为查询条件 -->
        <span class="leancloud-visitors"
              data-flag-title="Your Article Title">
          <!-- <em class="post-meta-item-text" style="color: #F19726" >阅读量： </em> -->
          <!-- <i class="leancloud-visitors-count" style="color:#E8552D" ></i> -->
          <em class="post-meta-item-text">阅读量： </em>
          <i class="leancloud-visitors-count" ></i>
        </span>
      </div>
      <h3>
        <a href="javascript:;"></a>
        评 论：
      </h3>
      <div id="vcomments"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function () {
    // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
    }
    this.valine = new Valine()
    this.initValine()
    // document.querySelector('.vsubmit')
    // const vsubmit = document.querySelector('.vsubmit')
    // const fn = vsubmit.click
    // vsubmit.addEventListener('click',()=>{
    //     const email = document.querySelector('input[class="vmail vinput"]').value
    //     let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    //     if(reg.test(email)){
    //         fn
    //     }else{
    //         alert('请输入正确的邮箱，方便联系您~')
    //     }
    // })
  },
//   destoryed(){
//       const fn = document.querySelector('.vsubmit').click
//        document.querySelector('.vsubmit').removeEventListener('click',fn)
//   },
  watch: {
    $route (to, from) {
      if (from.path != to.path) {   //页面切换时从新挂载
        this.initValine()
      }
    }
  },
  methods: {
    initValine () {
      let path = location.origin + location.pathname
      // vuepress打包后变成的HTML不知为什么吞掉此处的绑定`:id="countId"`
      document.getElementsByClassName('leancloud-visitors')[0].id = path
      this.valine.init({
        el: '#vcomments',
        appId: 'LRQFlphJ9XLQyfBFvrRxozmr-gzGzoHsz',// your appId
        appKey: 'F1dRj2nzaXH0INtBs3XybY6V', // your appKey
        notify: false,
        verify: false,
        path: path,
        visitor: true,
        placeholder: '评论。。。。。。'
      });
    }
  },
}
</script>

<style>

.vwrap{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1)
}

</style>
