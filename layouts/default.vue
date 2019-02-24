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
