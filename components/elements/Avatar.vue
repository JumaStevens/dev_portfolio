<template lang="pug">
div(
  class='user-profile-photo'
)
  ImageElement(
    class=''
    :src='src'
    :aspectRatio='1'
  )
</template>

<script>
import ImageElement from '~/components/elements/Image.vue'

export default {
  components: {
    ImageElement
  },
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.user-profile-photo
  position: relative
  height: inherit
  overflow: hidden
  border-radius: 50%
  background-position: center
  background-size: contain !important
  background: $pri-cl
  // Fixes Safari square border when set to round bug
  z-index: 1

  &--placeholder
    position: absolute
    left: 50%
    bottom: 0
    height: 80%
    transform: translateX(-50%)
    fill: $grey

  &[lazy='loaded'] .user-profile-photo--placeholder
    display: none
</style>
