import Vue from 'vue'
import Router from 'vue-router'
import { blogRouter } from '@/router/blog'
import { adminRouter } from '@/router/admin'
import { navRoutesList } from '@/router/nav'

Vue.use(Router)
export default new Router({
  routes: navRoutesList.concat([
    adminRouter,
    blogRouter,
    {
      path: '/404',
      component: () => import('@/views/404'),
      hidden: true,
      name: '/404'
    }
  ])
})
