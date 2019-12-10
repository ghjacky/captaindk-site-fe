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
    index: '1',
    path: '/',
    name: '主页',
    component: () => import('@/views/home')
  },
  {
    index: '2',
    path: '/blog',
    name: '博客',
    component: () => import('@/views/blog')
  },
  {
    index: '3',
    path: '/resources',
    name: '资源',
    component: () => import('@/views/resources'),
    children: [
      {
        index: '3-1',
        path: '/resources/movies',
        name: '电影',
        component: () => import('@/views/vresources/movies')
      },
      {
        index: '3-2',
        path: '/resources/tvs',
        name: '剧集',
        component: () => import('@/views/vresources/tvs')
      },
      {
        index: '3-3',
        path: '/resources/books',
        name: '书籍',
        component: () => import('@/views/vresources/books')
      }
    ]
  }
]
