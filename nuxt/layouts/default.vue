<template lang='pug'>
div(
  :class='{ menuIsOpen: menuIsOpen }'
  class='vue-app'
)

  Navigation

  Hamburger(class='vue-app__hamburger')

  nuxt(class='vue-app__view')

  Footer(class='vue-app__footer')
</template>


<script>
import Navigation from '~/components/Navigation.vue'
import Hamburger from '~/components/Hamburger.vue'
import Footer from '~/components/Footer.vue'
import { mapState } from 'vuex'


export default {
  components: {
    Navigation,
    Hamburger,
    Footer
  },
  data () {
    return {}
  },
  computed: {
    error () {
      return this.$store.state.error
    },


    ...mapState({
      menuIsOpen: state => state.app.menu.isOpen
    })
  }
}
</script>


<style lang='sass'>
@import './assets/sass/main.sass'

.vue-app
  +mq-s
    padding-left: $unit*6

  &__hamburger
    position: fixed
    z-index: 99
    top: $unit*3
    right: 5%
    +mq-s
      top: 50%
      left: $unit*3
      right: unset
      transform: translate(-50%, -50%)


  &__error,
  &__view

  &.menuIsOpen

    & .vue-app__view,
    & .vue-app__footer
      display: none


</style>





<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
