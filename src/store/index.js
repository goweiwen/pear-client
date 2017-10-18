import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const persist = createPersistedState({
  paths: ['isLoggedIn', 'jwt', 'me.id']
})

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [persist]
})
