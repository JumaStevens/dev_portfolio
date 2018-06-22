import Vue from 'vue'
import Vuex from 'vuex'

// modules
import error from './modules/error'


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    error,
  },
  strict: process.env.NODE_ENV !== 'production'
})
