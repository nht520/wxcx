import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import login from '@/components/login'
import Dialog from '@/components/Dialog'
import Activate from '@/components/Activate'
import Find from '@/components/Find'
import Home from '@/components/Home'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/Dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/Activate',
      name: 'Activate',
      component: Activate
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    }
  ]
})
