import * as types from './mutation-types'
import Vue from 'vue'
let mutations = {
  [types.SETUSER] (state, userData) {
    state.userInfo = userData
    Vue.set(state.userInfo, 'a', 1)
  }
}
export default mutations
