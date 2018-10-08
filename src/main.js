// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 外部UI插件'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// vuetify
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
Vue.use(Vuetify)
//表单验证
// import VeeValidate from 'vee-validate'
// Vue.use(VeeValidate)
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
Vue.use(Vant)
// 解决不同组件 页面之间的数据共享  数据持久化
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
