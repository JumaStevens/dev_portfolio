import Vue from 'vue'
import Vuex from 'vuex'

// modules
import app from './modules/app'
import error from './modules/error'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',


    modules: {
      error,
      app
    },


    actions: {
      
    }
  })
}

export default createStore
