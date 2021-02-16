import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
// import Cms from '@/views/Cms'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    },
    // {
    //   path: '/Cms',
    //   component: () => import('@/views/Cms.vue')
    // }
  ]
})