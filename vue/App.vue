<template lang='pug'>
.vue-app
  Navigation

  transition(name='swipe')
    Error404(
      v-if='error.isError && error.type == "404"'
      class='vue-app__error'
    )
    router-view(
      v-else
      class='vue-app__view'
    )
</template>


<script>
import Error404 from './views/Error404.vue'
import Navigation from '~comp/Navigation.vue'

export default {
  components: {
    Error404,
    Navigation
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
  background: $white


</style>
