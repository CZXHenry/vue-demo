<template>
  <div class="Info">
    <mt-button type="primary" @click="showToast">click</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import {Swipe,SwipeItem} from 'mint-ui'

Vue.component(Swipe.name,Swipe)


export default {
  methods: {
    showToast () {
      Toast('toast')
    }
  }
}
</script>
