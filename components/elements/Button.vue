<template lang="pug">
button(
  class='button'
)
  span(class='button__text') {{ text }}
  Loader(class='button__loader')
</template>

<script>
import Loader from '~/components/elements/Loader.vue'

export default {
  components: {
    Loader
  },
  props: {
    text: {
      type: String,
      default: 'Submit'
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
.button
  @extend %flex--row-center
  position: relative
  min-width: $unit*15
  min-height: $unit*6
  padding: $unit $unit*2
  border-radius: $unit
  cursor: pointer
  color: $label
  border: 1px solid $separator

  &__text
    color: currentColor

  &__loader
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    visibility: hidden

  //  State(s)
  &.loading
    & .button__text
      visibility: hidden
    & .button__loader
      visibility: visible

  &:disabled
    opacity: 0.5
    cursor: not-allowed
</style>
