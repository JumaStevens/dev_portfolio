import Vue from 'vue'
import Vuex from 'vuex'


// modules
import error from './modules/error'
import app from './modules/app'
import auth from './modules/auth'
import blog from './modules/blog'


// import vuex
Vue.use(Vuex)


const createStore = () => {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    modules: {
      error,
      app,
      auth,
      blog
    },

    actions: {
      async nuxtClientInit({ state, dispatch }, context) {
        try {
          dispatch('auth/watchAuthState')
          return
        }
        catch (e) {
          console.error(e)
          throw e
        }
      }
    }
  })
}

export default createStore
