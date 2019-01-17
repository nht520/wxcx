import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const Layout = () => import( '@/components/Layout.vue');
const Login = () => import( '@/components/Login.vue');
const Dialog = () => import( '@/components/Dialog.vue');
const Activate = () => import( '@/components/Activate.vue');
const Find = () => import( '@/components/Find.vue');
const Home = () => import( '@/components/Home.vue');
const Details = () => import( '@/components/Details.vue');
const Bottom = () => import( '@/components/Bottom.vue');
const List = () => import( '@/components/List.vue');
const Paging = () => import( '@/components/Paging/Paging.vue');
const About = () => import( '@/components/About/About.vue');
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
