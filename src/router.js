import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
// import About from '@/views/About'
// import Links from '@/views/Links'
// import Contacts from '@/views/Contacts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    },
    // {
    //   path: '/About',
    //   component: () => import('@/views/About.vue')
    // },
    // {
    //   path: '/Links',
    //   component: () => import('@/views/Links.vue')
    // },
    // {
    //   path: '/Contacts',
    //   component: () => import('@/views/Contacts.vue')
    // }
  ]
})