<template lang="pug">
ValidationProvider(
  :rules='rules'
  v-slot='{ failed, required }'
  slim
)
  label(class='label')
    span(
      v-if='label'
      class='label__text'
    ) {{ label }}
    input(
      v-bind='$attrs'
      v-on='listeners'
      :class='{ failed }'
      class='label__input'
    )
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
        input: (event) => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.label
  display: grid
  grid-gap: $unit 0
  font-size: $fs-1
  color: $secondary-label

  &__input
    width: 100%
    min-height: $unit*7
    padding: $unit*2
    border: 1px solid $separator
    border-radius: $unit
    background: inherit

    &:focus,
    &:hover
      border-color: $opaque-separator

    // &:focus
    //   border-color: $system-blue

    &.failed
      // border-color: $system-red
</style>
