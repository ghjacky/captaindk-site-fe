import Vue from 'vue'
import Router from 'vue-router'
import { navRoutesList } from '@/variables'
import { blogRouter } from '@/router/blog'
import { adminRouter } from '@/router/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import('@/views/home')
    }
  ].concat(adminRouter)
    .concat(blogRouter)
    .concat(navRoutesList)
    .concat([
      {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true,
        name: '/404'
      }
    ])
})
