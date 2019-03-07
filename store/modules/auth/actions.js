import { auth } from '~/plugins/firebase'

export default {
  watchAuthState ({ commit, dispatch }) {
    auth().onAuthStateChanged(authUser => {
      if (authUser) {
        commit('SET_AUTH_USER', { authUser })
        console.log('SET_AUTH_USER: ', authUser)
      } else {
        commit('DELETE_AUTH_USER')
        // dispatch('signInAnonymously')
        console.log('DELETE_AUTH_USER')
      }
    })
  },


  async signInAnonymously () {
    try { await auth().signInAnonymously() }
    catch (e) { console.error(e) }
  }
}
