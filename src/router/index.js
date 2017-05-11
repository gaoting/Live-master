import Vue from 'vue'
import Router from 'vue-router'  //路由
//页面
import Home from '@/components/Home/Home'
import Bilibili from '@/components/Livepage/bilibili'
import Douyu from '@/components/Livepage/douyu'
import Xiongmao from '@/components/Livepage/xiongmao'
import Zhanqi from '@/components/Livepage/zhanqi'
import Longzhu from '@/components/Livepage/longzhu'
import Huya from '@/components/Livepage/huya'
import Quanmin from '@/components/Livepage/quanmin'
import UserPage from '@/components/UserPage/UserPage'
import Website from '@/components/Website/website'
import Channel from '@/components/Channel/channel'

Vue.use(Router)// Vue.use()安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。

export default new Router({  //导出router实例 
  mode: 'history',//设置缓存，可返回
  routes: [          // 在 router 实例里的一个routes 选项数组
    {
      path: '/',   //对应router-link，用对象的方式引入
      name: 'Home',  //可有可无的名称
      component: Home, //注册组件到路由。父页面
      children:[//子页面
        {
          path:'bilibili',
          name:'bilibili',
          component:Bilibili,
        },
        {
          path:'douyu',
          name:'douyu',
          component:Douyu,
        },
        {
          path:'panda',
          name:'panda',
          component:Xiongmao,
        },
        {
          path:'zhanqi',
          name:'zhanqi',
          component:Zhanqi,
        },
        {
          path:'longzhu',
          name:'longzhu',
          component:Longzhu,
        },
        {
          path:'huya',
          name:'huya',
          component:Huya,
        },
        {
          path:'quanmin',
          name:'quanmin',
          component:Quanmin,
        },
        {
          path:'/:name/:id',
          name:'user',
          component: UserPage
        },
        {
          path:'/website/',
          name:'website',
          component: Website
        },
        {
          path:'/website/channel/:id',
          name:'channel',
          component: Channel
        }
      ]
    },
  ]
})
