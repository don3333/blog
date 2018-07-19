import Vue from 'vue'
import Router from 'vue-router'
import PageList from 'com/page-list'
import PageDetail from 'com/page-detail'
import Page404 from 'com/page-404'
import Home from 'com/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/'
    },
    {
      path: '/home',
      redirect: '/home/pagelist',
      component: Home,
      children: [
        {
          path: 'pagelist',
          name: 'pageList',
          component: PageList
        },
        {
          path: 'pagedetail',
          name: 'pageDetail',
          component: PageDetail
        }
      ]
    },
    {
      path: '*',
      component: Page404
    }
  ]
})
