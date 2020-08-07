export const adminRouter = {
  index: '99',
  path: '/admin',
  name: '/admin',
  hidden: true,
  meta: { title: '博客后台', icon: 'el-icon-s-order' },
  component: () => import('@/views/admin/components/layout'),
  children: [
    {
      index: '99-1',
      path: 'login',
      hidden: true,
      meta: { title: '后台登陆' },
      component: () => import('@/views/admin/login')
    },
    {
      index: '99-2',
      path: 'blog',
      name: '/admin/blog',
      meta: { title: '博客管理', icon: 'el-icon-s-order' },
      component: () => import('@/views/admin/blog'),
      children: [
        {
          index: '99-2-1',
          path: 'posts',
          name: '/admin/blog/posts',
          meta: { title: '文章管理', icon: 'el-icon-s-order' },
          component: () => import('@/views/admin/blog/posts')
        },
        {
          index: '99-2-2',
          path: 'categories',
          name: '/admin/blog/categories',
          meta: { title: '分类管理', icon: 'el-icon-s-order' },
          component: () => import('@/views/admin/blog/categories')
        }
      ]
    }
  ]
}
