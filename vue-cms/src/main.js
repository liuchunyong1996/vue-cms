// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from "./router"
import { NavBar ,Tabbar, TabbarItem,Swipe, SwipeItem} from 'vant';
import axios from "axios"
Vue.prototype.$http = axios
axios.defaults.baseURL = "http://127.0.0.1:5000/"
Vue
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
Vue.config.productionTip = false




/* eslint-disable no-new */

new Vue({
  el: '#app',
  render:c=>c(App)
  ,
  router
})
