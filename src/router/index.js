//createRouter: 创建router实例对象
//createWebHistory: 创建history模式路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/Index.vue'
import Home from '@/views/Home/Index.vue'
import Map from '@/views/Map/Index.vue'
import Flixed from '@/views/Flixed/Index.vue'
import Underground from '@/views/Underground/Index.vue'
import Information from '@/views/Information/Index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置path和component之间的映射关系
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        }
      ]
    },
    {
      path: '/flixed',
      component: Flixed,
      children: [
        {
          path: 'map',
          component: Map
        },
        {
          path: 'underground',
          component: Underground
        },
        {
          path: 'information',
          component: Information
        },
      ]
    },
  ]
})

export default router
