<template>
  <div class="Info">
  <mt-swipe ref="swipe" class="swipe" :auto="1000">
    <mt-swipe-item v-for="img in imgs" :key="img.id">
      <img  :src="img.url" alt="logo" :width="width" height="width"/>
    </mt-swipe-item>
  </mt-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

export default {
  props: {
    imgs: [
      { url: 'https://github.com/CourseCloudDesktop/cloudDesktop/raw/wcl-develop/task5/images/1.PNG' },
      { url: 'https://github.com/CourseCloudDesktop/cloudDesktop/raw/wcl-develop/task5/images/2.PNG' },
      { url: 'https://github.com/CourseCloudDesktop/cloudDesktop/raw/wcl-develop/task5/images/3.PNG' }
    ],
    seen: true
  }
}
</script>

<style>
.mint-swipe{
  background: red;
  height: 100px;
  margin-top: 0px;
}
</style>
