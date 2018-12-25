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
import List from '@/components/List'
import Paging from '@/components/Paging/Paging'
import About from '@/components/About/About'
Vue.use(Router)
export default new Router({
  // mode: 'history',
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
      redirect:'/Home',
      children:[
        {
          path: '/Home',
          name: 'Homea',
          component: Home,
        },
        {
          path: '/List',
          name: 'Lista',
          component: List,
        },
        {
          path:'/Paging',
          nam:'Paginga',
          component:Paging,
        },
        {
          path:'/About',
          nam:'About',
          component:About,
        }
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
