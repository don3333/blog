import VueLazyload from 'vue-lazyload'
import Vue from 'vue'
import lufei from '@/common/img/lufei.jpg'

Vue.use(VueLazyload, {
  error: lufei,
  loading: lufei
})
