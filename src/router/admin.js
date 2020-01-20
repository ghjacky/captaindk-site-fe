export const adminRouter = {
  index: '99',
  path: '/admin',
  name: '/admin',
  hidden: true,
  meta: { title: '博客后台', icon: 'el-icon-s-order' },
  component: () => import('@/views/admin/admin'),
  children: [
    {
      index: '99-1',
      path: '/admin/login',
      hidden: true,
      meta: { title: '博客后台登陆' },
      component: () => import('@/views/admin/login')
    },
    {
      index: '99-2',
      path: '/admin/blog',
      name: '/admin/blog',
      meta: { title: '博客管理', icon: 'el-icon-s-order' },
      component: () => import('@/views/admin/posts'),
      children: [
        {
          index: '99-2-1',
          path: '/admin/blog/posts',
          name: '/admin/blog/posts',
          meta: { title: '博客文章管理', icon: 'el-icon-s-order' },
          component: () => import('@/views/admin/posts')
        }
      ]
    }
  ]
}
