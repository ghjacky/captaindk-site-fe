// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import Router from 'vue-router'
import '@/styles/index.scss'
import '@/permission'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
import store from '@/store'

Vue.component('vue-simplemde', VueSimplemde)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false
// register module
Vue.use(ElementUI, { locale })
Vue.use(contentmenu)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
