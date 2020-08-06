
const state = {
  currentUser: {
    username: 'ghjacky'
  }
}

const mutations = {
  SET_USER: (state, user) => {
    state.currentUser = user
  }
}

const actions = {
  setCurrentUser({commit, state}, user) {
    commit('SET_USER', user)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
