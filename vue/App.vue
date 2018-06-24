<template lang='pug'>
div(class='vue-app')

  Navigation

  Error404(
    v-if='error.isError && error.type == "404"'
    class='vue-app__error'
  )
  router-view(
    v-else
    class='vue-app__view'
  )

  Footer
</template>


<script>
import Error404 from './views/Error404.vue'
import Navigation from '~comp/Navigation.vue'
import Footer from '~comp/Footer.vue'

export default {
  components: {
    Error404,
    Navigation,
    Footer
  },
  data () {
    return {}
  },
  computed: {
    error () {
      return this.$store.state.error
    }
  }
}
</script>


<style lang='sass'>
@import './assets/sass/main.sass'

.vue-app
  padding-top: $unit*6

  &__error,
  &__view



</style>
