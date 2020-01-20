export const blogRouter = {
  path: '/blog/posts/:id',
  name: '/blog/posts/:id',
  hidden: true,
  meta: { title: '文章列表' },
  component: () => import('@/views/blog')
}
