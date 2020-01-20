import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

// import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
  },
  getters
  // plugins: [new VuexPersistence().plugin]
})

export default store
