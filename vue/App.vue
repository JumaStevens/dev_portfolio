<template lang='pug'>
div(
  :class='{ menuIsOpen: menuIsOpen }'
  class='vue-app'
)

  Navigation

  Hamburger(class='vue-app__hamburger')

  Error404(
    v-if='error.isError && error.type == "404"'
    class='vue-app__error'
  )
  router-view(
    v-else
    class='vue-app__view'
  )

  Footer(class='vue-app__footer')
</template>


<script>
import Error404 from './views/Error404.vue'
import Navigation from '~comp/Navigation.vue'
import Hamburger from '~comp/Hamburger.vue'
import Footer from '~comp/Footer.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Error404,
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
