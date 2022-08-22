<template lang="pug">
button(
  class='action-item'
  type='button'
)
  span(
    v-if='icon'
    class='action-item__icon material-icons'
  ) {{ icon }}
  span(
    v-if='text'
    class='actin-item__label'
  ) {{ text }}
</template>

<script>
export default {
  components: {},
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
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
.action-item
  @extend %flex--row-center
  grid-gap: $unit

  &__icon
    color: currentColor

  &__label
    color: currentColor
</style>
