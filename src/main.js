import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题
Vue.use(MuseUI)  // Vue.use()安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。

new Vue({
  el: '#app', //定义操作的边界
  router,
  store,   //注册第三方插件
  template: '<App/>',  //模板页面
  components: { App }  // 注册组件
})
