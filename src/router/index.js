import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageThreadShow from '@/pages/PageThreadShow'
import PageNotFound from '@/pages/PageNotFound'
import PageForum from '@/pages/PageForum'
import PageCategory from '@/pages/PageCategory'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageHome
    },
    {
      path: '/category/:id',
      name: 'PageCategory',
      component: PageCategory,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: PageForum,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: PageThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: PageNotFound
    }
  ]
})
