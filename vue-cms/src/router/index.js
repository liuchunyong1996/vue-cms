import Vue from 'vue'
import VueRouter from 'vue-router'
import Fly from '../components/Fly'
import Svip from '../components/Svip'
import Vip from '../components/Vip'
import Xy from '../components/Xy'
Vue.use(VueRouter)

export default new VueRouter({
  routes :[
  {path:"/",redirect:"/fly"},
  {path: "/fly",component:Fly },
  {path: "/svip",component:Svip },
  {path: "/vip",component:Vip },
  {path: "/xy",component:Xy }
  ]
})