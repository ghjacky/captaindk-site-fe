export const navIndexMap = {
  Home: '1',
  Blog: '2',
  Resources: '3',
  Res_movies: '3-1',
  Res_tvs: '3-2',
  Res_books: '3-3'
}
export const navRoutesList = [
  {
    index: navIndexMap.Home,
    path: '/',
    name: '/',
    meta: { title: '主页' },
    component: () => import('@/views/home')
  },
  {
    index: navIndexMap.Blog,
    path: '/blog',
    name: '/blog',
    meta: { title: '博客' },
    component: () => import('@/views/blog')
  },
  {
    index: navIndexMap.Resources,
    path: '/resources',
    name: '/resources',
    meta: { title: '资源' },
    component: () => import('@/views/resources'),
    children: [
      {
        index: navIndexMap.Res_movies,
        path: '/resources/movies',
        name: '/resources/movies',
        meta: { title: '电影' },
        component: () => import('@/views/vresources/movies')
      },
      {
        index: navIndexMap.Res_tvs,
        path: '/resources/tvs',
        name: '/resources/tvs',
        meta: { title: '剧集' },
        component: () => import('@/views/vresources/tvs')
      },
      {
        index: navIndexMap.Res_books,
        path: '/resources/books',
        name: '/resources/books',
        meta: { title: '书籍' },
        component: () => import('@/views/vresources/books')
      }
    ]
  }
]
