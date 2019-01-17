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
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/Details/:aid',
      name: 'Details',
      component: Details,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Bottom',
      name: 'Bottom',
      component: Bottom,
      meta: {
        requiresAuth: true
      },
      redirect:'/Home',
      children:[
        {
          path: '/Home',
          name: 'Homea',
          component: Home,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/List',
          name: 'Lista',
          component: List,
          meta: {
            requiresAuth: true
          }
        },
        {
          path:'/Paging',
          nam:'Paginga',
          component:Paging,
          meta: {
            requiresAuth: true
          }
        },
        {
          path:'/About',
          nam:'About',
          component:About,
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/Dialog',
      name: 'Dialog',
      component: Dialog,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Activate',
      name: 'Activate',
      component: Activate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
