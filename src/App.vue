<template>
  <div id="app">
    <vheader></vheader>
    <div class="main">
      <router-view></router-view>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
import Vheader from '@/components/headers/Vheader.vue'
import Vfooter from '@/components/footers/Vfooter.vue'
export default {
  name: 'app',
  components: {
    Vheader,
    Vfooter
  }
}
</script>

<style>
#app {
  html {
    font-size: 10px;
    height:100%;
  }

  body {
    -webkit-font-smoothing:antialiased;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
    color: #404040;
    line-height: 1.7;
    height:100%;
  }

  #app {
    display: flex;
    flex-flow: column;
    height:100%;
  }

  body a {
    text-decoration: none;
  }

  .nav a:link, a:visited {
    color: inherit;
  }

  body ul, li, p {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
}
</style>
