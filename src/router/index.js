import Vue from 'vue'
import Router from 'vue-router'
import PageList from 'com/page-list'
import PageDetail from 'com/page-detail'
import Page404 from 'com/page-404'
import Home from 'com/home'
import AboutMe from 'com/about-me'
import AllPage from 'com/all-page'
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
        },
        {
          path: 'aboutme',
          component: AboutMe,
          name: 'aboutMe'
        },
        {
          path: 'allpage',
          component: AllPage,
          name: 'allPage'
        }
      ]
    },
    {
      path: '*',
      component: Page404
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {y: 0}
  }
})
