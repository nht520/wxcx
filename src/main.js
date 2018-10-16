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
//
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'

import Vuex from 'vuex' //引入状态管理
import store from './store/store'
Vue.use(Vuex) ;

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
