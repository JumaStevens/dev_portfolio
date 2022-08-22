<template lang="pug">
div(
  :class='rootClassObject'
  class='overlay-drawer'
)
  button(
    @click='closeDrawer'
    type='button'
    class='overlay-drawer__backdrop'
  )
  header(class='overlay-drawer__header')
    button(
      @click='closeDrawer'
      type='button'
      class='overlay-drawer__button'
    )
      span(class='material-icons') close
    slot(name='header')
  div(
    v-scroll-lock='isOpen'
    class='overlay-drawer__content'
  )
    slot
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  components: {},
  props: {
    drawerId: {
      type: String,
      required: true
    },
    openDirection: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {}
  },
  computed: {
    rootClassObject() {
      return {
        isOpen: this.isOpen,
        [this.openDirection]: true
      }
    },

    isOpen() {
      return this.drawer === this.drawerId
    },

    ...mapState({
      drawer: (state) => state.app.drawer
    })
  },
  methods: {
    ...mapMutations({
      closeDrawer: 'app/CLOSE_DRAWER'
    })
  }
}
</script>

<style lang="sass" scoped>
.overlay-drawer
  position: fixed
  z-index: 200
  width: 100vw
  height: 100%
  display: grid
  grid-template-rows: auto 1fr
  grid-template-columns: 1fr auto
  overflow: hidden
  transition: transform 150ms ease-out

  /** Close position */
  &.top
    top: 100%
    left: 0

  &.right
    direction: rtl
    top: 0
    left: -100%

  &.bottom
    top: -100%
    left: 0

  &.left
    top: 0
    right: -100%

  /** Open direction */
  &.isOpen

    &.top
      transform: translateY(-100%)

    &.right
      transform: translateX(100%)

    &.bottom
      transform: translateY(100%)

    &.left
      transform: translateX(-100%)

    & .overlay-drawer__backdrop
      background: rgba(34, 34, 34, 0.2)
      transition: background-color 150ms 150ms ease-out

  &__backdrop
    grid-row: 1 / -1
    background: transparent
    transition: background-color 25ms ease-out
    backdrop-filter: saturate(60%) blur(8px)

  &__header
    display: grid
    grid-template-columns: 1fr auto
    grid-auto-flow: column
    grid-gap: $unit
    width: 100%
    padding: $unit
    background: $system-background
    direction: ltr

  &__button
    @extend %flex--row-center
    grid-row: 1 / 2
    grid-column: 2 / 3
    min-width: $unit*5
    min-height: $unit*5
    padding: $unit
    border-radius: 50%

  &__content
    width: 100%
    overflow-y: auto
    background: $system-background
    direction: ltr
</style>
