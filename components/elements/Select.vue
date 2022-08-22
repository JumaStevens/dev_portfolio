<template lang="pug">
select(
  v-bind='$attrs'
  v-on='listeners'
  class='select'
)
  option(
    v-if='placeholder'
    disabled
    hidden
    selected
    value=''
  ) {{ placeholder }}
  option(
    v-for='(option, i) in options'
    :key='option + i'
    :value='option.value'
  ) {{ option.text }}
</template>

<script>
export default {
  components: {},
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
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
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.select
  position: relative
  width: fit-content
  padding-right: $unit

  &::after
    content: ''
    position: absolute
    right: 0
    top: 50%
    width: $unit
    height: $unit
    transform: translate(-50%, -50%)
    background-color: red
    clip-path: polygon(100% 0%, 0 0%, 50% 100%)
</style>
