<template lang="pug">
div(class='chip')
  span(
    v-if='icon'
    class='material-icons chip__icon'
  ) {{ icon }}
  span(class='chip__label') {{ label }}
  span(
    v-if='showCancel'
    @click='$emit("onCancel")'
    class='material-icons chip__cancel'
  ) cancel
  button(
    v-if='isButton'
    @click='$emit("onClick")'
    type='button'
    class='chip__button'
  )
</template>

<script>
export default {
  components: {},
  props: {
    icon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    showCancel: {
      type: Boolean,
      default: false
    },
    isButton: {
      type: Boolean,
      default: false
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
.chip
  position: relative
  width: fit-content
  display: flex
  align-items: center
  padding: 0 $unit/2
  border-radius: $unit*3
  background: lighten($pri-cl, 3)
  background: transparent
  border: 1px solid $system-fill

  &__icon
    padding: $unit/2
    border-radius: 50%
    // background: $blue
    color: $white

  &__label
    margin: $unit
    white-space: nowrap

    &:first-child:nth-last-child(2)
      margin: $unit $unit*2

  &__button
    position: absolute
    z-index: 1
    width: 100%
    height: 100%
    background: transparent

  &__cancel
    position: relative
    z-index: 2
    font-size: $unit*2
    cursor: pointer
    margin-right: $unit/2
</style>
