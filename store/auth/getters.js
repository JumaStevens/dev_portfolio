export default {
  isAuthUser (state) {
    return state.authUser !== null
  },


  authUser (state, getters) {
    const { authUser } = state
    const { isAuthUser } = getters

    return {
      uid: isAuthUser ? authUser.uid : ''
    }
  }
}
