<template lang="pug">
div(class='base-loader')
  div(class='base-loader__spinner')
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.base-loader
  width: $unit*3
  height: $unit*3

  &__spinner
    width: inherit
    height: inherit
    border-radius: 50%
    border: $unit*0.25 solid $label
    border-color: $label transparent $label transparent
    animation: spin 1.2s linear infinite

@keyframes spin
  100%
     transform: rotate(360deg)
</style>
