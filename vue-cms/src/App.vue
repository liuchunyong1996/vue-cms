<template>
  <div class="app">
     <van-nav-bar
      title="无敌的我又回来了"
      left-text="返回"
      right-text="按钮"
      left-arrow
      fixed
     @click-left="onClickLeft"
     @click-right="onClickRight"
    />

    <transition enter-active-class="fadeInRight" leave-active-class="fadeOutLeft" >
       <router-view class="animated"></router-view>
    </transition>
    <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home" to="/fly">首页</van-tabbar-item>
    <van-tabbar-item icon="contact" to="/svip">会员</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" info="5" to="/vip">购物车</van-tabbar-item>
    <van-tabbar-item icon="search" to="/xy">搜索</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
import {Toast} from 'vant'
import 'animate.css/animate.css'

export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onClickLeft () {
      location.href = 'App.vue'
    },
    onClickRight () {
      Toast('对不起没有按钮')
    }
  }
}
</script>

<style lang="less">
   .app {
       overflow-x : hidden;
       padding-top: 40px;
      .v-leave-to {
        position: absolute;
        left:-200%;
      }
      //  .v-enter {
      //     opacity: 0;
      //     transform: translateX(100%)
      //  }
      //   .v-leave-to{
      //     transform: translateX(-100%);
      //     position: absolute;
      //     left:-200%
      //  }
      //  .v-enter-active,
      //  .v-leave-active {
      //    transition:  all 0.2s ease
      //  }
   }
</style>
