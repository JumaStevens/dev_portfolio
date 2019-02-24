import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

const config = {
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
}

Vue.use(VueLazyload, config)
