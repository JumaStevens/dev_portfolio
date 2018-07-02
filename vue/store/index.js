import Vue from 'vue'
import Vuex from 'vuex'

// modules
import app from './modules/app'
import error from './modules/error'


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    app,
    error,
  },
  strict: process.env.NODE_ENV !== 'production'
})
