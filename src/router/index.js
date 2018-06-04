import Vue from 'vue'
import Router from 'vue-router'
import SellerInfo from '@/components/SellerInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SellerInfo',
      component: SellerInfo
    }
  ]
})
