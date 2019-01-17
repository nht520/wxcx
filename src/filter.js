import router from "./router";
axios.interceptors.response.use(res => {
  if (res.data.success === true) {
    return res
  } else {
    // 对响应数据做操作
    if (res.data.code === '2010') {
      window.location.href = '#/login'
    }
    return res
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.requiresAuth)) {
    // 对路由进行验证
    if (sessionStorage.getItem('isLogin')) { // 已经登陆\
      next() // 正常跳转到你设置好的页面
    } else {
      // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next({ path: '/Login' })
    }
  } else {
    next()
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
