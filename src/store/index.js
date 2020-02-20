import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    btn: 'Get recipe!'
  },
  mutations: {
    increment(state) {
      state.btn = 'Get another recipe!'
    }
  },
  actions: {},
  modules: {}
})