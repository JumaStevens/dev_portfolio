<template lang="pug">
ValidationProvider(
  :rules='rules'
  v-slot='{ failed, required }'
  tag='label'
  class='base-textarea'
)
  span(
    v-if='label'
    class='base-textarea__label-text'
  ) {{ label }}
  textarea(
    v-bind='$attrs'
    v-on='listeners'
    :maxlength='maxlength || null'
    :class='{ "has-count": maxlength > 0 }'
    class='base-textarea__input'
  )
  span(
    v-if='maxlength > 0'
    class='base-textarea__count'
  ) {{ remainingCharCount }}
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
    maxlength: {
      type: Number,
      default: 0
    },
    rules: {
      type: String,
      default: ''
    }
    // THIS IS CAUSING A BUG WITH VEE-VALIDATE. NOT SURE WHY!!
    // @TODO Investigate what the issue is.
    // value: {
    //   type: String,
    //   default: ''
    // }
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
    },

    remainingCharCount() {
      return this.maxlength - 0 // this.value.length
    }
  }
}
</script>

<style lang="sass" scoped>
.base-textarea
  position: relative
  display: grid
  grid-gap: $unit/2 0

  &__label-text
    font-size: $fs-1
    color: $secondary-label

  &__input
    min-height: $unit*20
    // height: 100%
    padding: $unit*2
    border: 1px solid $separator
    border-radius: $unit/2
    // background: #fafafa
    resize: vertical
    // background: $pri-cl

    &.has-count
      padding-bottom: $unit*4

    &:focus,
    &:hover
      // background: transparent
      border-color: $opaque-separator

    &:focus
      // border-color: $blue

  &__count
    position: absolute
    bottom: $unit/2
    right: $unit/2
</style>
