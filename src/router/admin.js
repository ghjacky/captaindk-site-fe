export const adminRouter = [
  {
    name: '后台登陆',
    path: '/admin/login',
    component: () => import('@/views/admin/login')
  },
  {
    name: '后台管理',
    path: '/admin',
    component: () => import('@/views/admin/posts')
  }
]
