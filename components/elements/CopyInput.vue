<template lang="pug">
button(
  @click='onCopyText'
  class='copy-input'
  type='button'
)
  input(
    :value='text'
    ref='input'
    class='copy-input__input'
    readonly
  )
  span(
    v-show='!isCopied'
    class='copy-input__icon material-icons'
  ) content_copy
  span(
    v-show='isCopied'
    class='copy-input__icon material-icons'
  ) check
</template>

<script>
export default {
  components: {},
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isCopied: false,
      iconChangeDelay: 2000
    }
  },
  computed: {},
  methods: {
    selectReferralCode() {
      const referralCode = this.$refs.input
      referralCode.select()
    },

    onCopyText() {
      this.selectReferralCode()
      // copy input value to clipboard
      document.execCommand('copy')
      // deselect input
      if (document.selection) document.selection.empty()
      else if (window.getSelection) window.getSelection().removeAllRanges()
      this.isCopied = true
      setTimeout(() => (this.isCopied = false), this.iconChangeDelay)
    }
  }
}
</script>

<style lang="sass" scoped>
.copy-input
  display: grid
  grid-gap: $unit*2 $unit
  grid-auto-rows: auto
  grid-template-columns: 1fr auto
  justify-items: start
  width: 100%
  min-height: $unit*6
  padding: $unit*2
  border: 1px solid $opaque-separator
  border-radius: $unit

  cursor: copy
  color: $system-indigo
  background: rgba(94, 92, 230, 0.05)
  border: 1px solid $system-blue

  &__input
    width: 100%

    grid-row: 1 / -1
    grid-column: 1 / -1
    width: 100%
    padding: 0 $unit*6 0 $unit*2
    text-overflow: ellipsis
    overflow: hidden
    // color: $secondary-label
    color: $system-blue
    pointer-events: none

  &__icon
    display: grid
    grid-gap: $unit
    grid-auto-flow: column

    grid-row: 1 / -1
    grid-column: 2 / -1
    color: $system-blue
    pointer-events: none
</style>
