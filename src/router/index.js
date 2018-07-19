import Vue from 'vue'
import Router from 'vue-router'
import PageList from 'com/page-list'
import PageDetail from 'com/page-detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pagelist'
    },
    {
      path: '/pagelist',
      name: 'pageList',
      component: PageList
    },
    {
      path: '/pagedetail',
      name: 'pageDetail',
      component: PageDetail
    }
  ]
})
