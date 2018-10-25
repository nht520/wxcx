// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 外部UI插件'
// vuetify
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
Vue.use(Vuetify)
//
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'

//引入状态管理
import Vuex from 'vuex'
import store from './store/store'
Vue.use(Vuex) ;

//请求数据
import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
