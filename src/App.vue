<template>
  <div id="app">
    <Header_J></Header_J>  <!--使用注册的组件-->
    <router-view></router-view>     <!--渲染页面router-link点击的页面-->
  </div>
</template>

<script>
import Header_J from './components/Header/Header'  //引用头部组件
export default { 
  name: 'app',  //组件名称 可有可无
  components:{  //组件注册
    Header_J
  }
}
</script>

<style lang="css">
@import "./assets/reset/reset.css"     /*@import进入样式表，清除默认样式*/ 
</style>
