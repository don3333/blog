import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import state from './states'
import mutations from './mutations'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  mutations
})
