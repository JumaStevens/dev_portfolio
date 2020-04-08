export const actions = {
  nuxtClientInit({ dispatch }, context) {
    dispatch('auth/watchAuthState')
  }
}
