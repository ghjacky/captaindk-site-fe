export const blogRouter = [
  {
    name: '文章列表',
    path: '/blog/posts/:id',
    component: () => import('@/views/blog')
  }
]
