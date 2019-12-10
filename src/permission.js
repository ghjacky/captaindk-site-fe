import router from './router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  console.log('此处验证用户登陆情况: ' + to.path)
  next()
})

router.afterEach(() => {
  NProgress.done()
})
