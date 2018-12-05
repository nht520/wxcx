import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/components/Login'
import Dialog from '@/components/Dialog'
import Activate from '@/components/Activate'
import Find from '@/components/Find'
import Home from '@/components/Home'
import Details from '@/components/Details'
import Bottom from '@/components/Bottom'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Details/:aid',
      name: 'Details',
      component: Details
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
    },
    {
      path: '/Bottom',
      name: 'Bottom',
      component: Bottom,
      children:[
        {
          path: '/Home',
          name: 'Homea',
          component: Home,
        },
        {
          path: '/Find',
          name: 'Finda',
          component: Find,
        },
      ]
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
