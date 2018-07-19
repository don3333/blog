import * as types from './mutation-types'
let mutations = {
  [types.SETUSER] (state, userData) {
    state.userInfo = userData
  }
}
export default mutations
