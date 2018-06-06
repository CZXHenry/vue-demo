<template>
  <div class="Info">
  <mt-swipe ref="swipe" class="swipe" :auto="1000">
    <mt-swipe-item v-for="img in imggs" :key="img.id">
      <a href="img.url"/>
      <img  :src="img.url" alt="logo" :width="swipeItemWidth" :height="swipeItemHeight"/>
    </mt-swipe-item>
  </mt-swipe>
  <div class="store-info">
    <div class="store-middle">
    <div class="store-logo" >
      <img :src="src" :width="storeLogoWidth" :height="storeLogoHeight">
    </div>
    <div style="float: left">
      <div class="store-name">
        <h1>双鸭点餐</h1>
      </div>
    </div>
    </div>
  </div>
    <div class="store-telephone">
      <img class="icon" :src="phoneIcon"/>
      <p style="float: left">{{phoneNumber}}</p>
    </div>
    <div class="store-address" style="float: left">
      <img class="icon" :src="addressIcon"/>
      <p style="float: left">{{address}}</p>
    </div>
    <div class="store-working-time" style="float: left">
      <img class="icon" :src="workingTimeIcon"/>
      <p style="float: left">{{workingTime}}</p></div>
    <div class="store-introduction"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import phoneIconPath from './../assets/icon/电话.png'
import addressIconPath from './../assets/icon/地址.png'
import workingTimeIconPath from './../assets/icon/时间.png'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

export default {
  data () {
    return {
      imggs: [
        { url: 'https://github.com/CourseCloudDesktop/cloudDesktop/raw/wcl-develop/task5/images/1.PNG' },
        { url: 'https://github.com/CourseCloudDesktop/cloudDesktop/raw/wcl-develop/task5/images/2.PNG' },
        { url: 'https://github.com/CourseCloudDesktop/cloudDesktop/raw/wcl-develop/task5/images/3.PNG' }
      ],
      swipeItemWidth: 375,
      swipeItemheight: 200,
      storeLogoWidth: 75,
      storeLogoHeight: 75,
      src: 'https://github.com/gogogoSYSU/documents/raw/master/UI/customerDemo/images/1905/19055481/raw_1523944724.png',
      phoneIcon: phoneIconPath,
      addressIcon: addressIconPath,
      workingTimeIcon: workingTimeIconPath,
      phoneNumber: '8888 8888',
      address: '广州大学城GOGO双鸭山',
      workingTime: '09:30-22:30'
    }
  }
}
</script>

<style>
.mint-swipe{
  height: 200px;
  margin-top: 0px;
}
.store-info{
  width: 375px;
}
.store-middle{
  float: middle;
}
.store-logo{
  float: left;
  height: 100px;
  width:100px;
}
.store-name{
  float: left;
  font-size: 80%
}
.store-telephone{
  font-size: 45%;
  width: 375px;
}
.store-address{
  font-size: 45%;
  width: 375px;
}
.store-workingTime{
  font-size: 45%;
  width: 375px;
}
.icon{
  float: left;
  width: 25px;
  height: 25px;
}
</style>
