<template lang="pug">
ValidationProvider(
  :rules='rules'
  v-slot='{ failed, required }'
  class='toggle-switch'
)
  label(class='toggle-switch__label')
    //- span(
    //-   v-if='label'
    //-   class='label__text'
    //- ) {{ label }}
    input(
      v-bind='$attrs'
      v-on='listeners'
      type='checkbox'
      :class='{ failed }'
      class='toggle-switch__input'
    )
    span(class='toggle-switch__slider')
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    rules: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.checked)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.toggle-switch
  display: flex

  &__label
    position: relative
    display: inline-block
    width: $unit*5
    height: $unit*3
    border-radius: $unit*3
    overflow: hidden

  &__input
    visibility: hidden
    width: 0
    height: 0

    &:checked + .toggle-switch__slider
      background: $system-green

    &:checked + .toggle-switch__slider::before
      transform: translateX($unit*2)

  &__slider
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    cursor: pointer
    background: $system-grey3
    transition: transform 400ms

    &::before
      content: ''
      position: absolute
      height: $unit*2
      width: $unit*2
      left: $unit*0.5
      bottom: $unit*0.5
      background: $label
      border-radius: 50%
      transition: transform 400ms
</style>
