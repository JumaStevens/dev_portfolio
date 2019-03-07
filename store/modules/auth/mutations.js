export default {
  SET_AUTH_USER(state, { authUser }) {
    state.authUser = authUser.toJSON()
  },


  DELETE_AUTH_USER(state) {
    state.authUser = null
  }
}
