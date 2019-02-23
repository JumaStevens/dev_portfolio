import { Store } from 'vuex'

// modules
import app from './modules/app'
import error from './modules/error'


const createStore = () => {
  return new Store({
    strict: process.env.NODE_ENV !== 'production',


    modules: {
      error,
      app
    },


    actions: {
      async nuxtServerInit({ dispatch }, context) {
        try {
          return
        }
        catch (e) {
          console.error(e)
          throw e
        }
      },


      async nuxtClientInit({ state, dispatch }, context) {
        try {
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
