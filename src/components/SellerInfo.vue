<template>
  <div class="info">
  <mt-swipe ref="swipe" class="swipe" :auto="1000">
    <mt-swipe-item v-for="img in imggs" :key="img.id">
      <a href="img.url"/>
      <img  :src="img.url" alt="logo" :width="swipeItemWidth" :height="swipeItemHeight"/>
    </mt-swipe-item>
  </mt-swipe>
  <div class="store-info">
    <img style="margin-left: 0px" :src="src" :width="storeLogoWidth" :height="storeLogoHeight">
    <p style="margin-left: 20px;font-size:140%">{{storeName}}</p>
  </div>
    <div class="detailed-info">
      <div class="detailed-info-item">
        <img class="icon" :src="phoneIcon"/>
        <p style="margin-left: 10px">{{phoneNumber}}</p>
      </div>
      <div class="detailed-info-item" style="float: left">
        <img class="icon" :src="addressIcon"/>
        <p style="margin-left: 10px">{{address}}</p>
      </div>
      <div class="detailed-info-item" style="float: left">
        <img class="icon" :src="workingTimeIcon"/>
        <p style="margin-left: 10px">{{workingTime}}</p>
      </div>
      <div class="store-introduction"></div>
    </div>
    <div class="introduction">
      <p style="text-align:left;margin-top: 5px;margin-bottom: 0px;font-size: 140%">{{storeIntroTitle}}</p>
      <hr size=1 color="#f2f2f2">
      <p style="text-align:left;margin-top:5px;font-size: 50%">{{storeIntro}}</p>
    </div>
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
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905544&di=d9bb3c60fdee88362c6b3a49d29b6829&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Df620a32db399a9012f38537674ed6f17%2F472309f7905298229b1e46fadcca7bcb0a46d4de.jpg' },
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905543&di=b29542b3e69fb058e9cca89aae36101a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F9922720e0cf3d7ca20a3d6ebf81fbe096a63a9d2.jpg' },
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905541&di=6327361dbff0c64257e256b9fb208b55&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D4ccf43fe9b529822113e3183beb21ea7%2F3bf33a87e950352accb05a315843fbf2b2118b31.jpg' }
      ],
      storeName: '双鸭仔（大学城店）',
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
      workingTime: '09:30-22:30',
      storeIntroTitle: '店铺介绍',
      storeIntro: '如果你无法简洁的表达你的想法，那只能说明你还不够了解它 ——阿尔伯特·爱因斯坦'
    }
  }
}
</script>

<style>
.mint-swipe{
  height: 200px;
  margin-top: 0px;
  margin: 1px;
  margin-left: 0px;
  margin-right: 0px;
}
.info{
  margin: 1px;
  background-color:  #f2f2f2;
}
.store-info{
  display:flex;
  align-items:center;
  justify-content:flex-start;
  background-color: white;
  margin-top: 5px;
}
.detailed-info-item{
  display: flex;
  align-items: center;
  height: 15px;
  margin: 2px;
  background-color: white;
  margin-left: 0px;
  margin-right: 0px;
  font-size: 50%
}
.icon{
  float: left;
  width: 15px;
  height: 15px;
}
.detailed-info{
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin-top: 5px;
}
.introduction{
  background-color: white;
  margin-top:5px;
}
</style>
