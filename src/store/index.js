import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'

// import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
  // plugins: [new VuexPersistence().plugin]
})

export default store
