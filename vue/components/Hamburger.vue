<template lang='pug'>
div(class='container-hamburger')
  a(
    @click='handleClick'
    :class='{ active: isOpen }'
    class='hamburger'
  )
</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapState({
      scrollY: state => state.app.scroll.y,
      isOpen: state => state.app.menu.isOpen
    })
  },
  methods: {
    handleClick () {
      this.toggleMenu()

      if (!this.isOpen) {
        this.$nextTick(() => window.scrollTo(0, this.scrollY))
      }
      else {
        this.recordScrollPosition()
      }
    },


    ...mapMutations({
      recordScrollPosition: 'app/RECORD_SCROLL_POSITION',
      toggleMenu: 'app/TOGGLE_MENU'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-hamburger

.hamburger
  position: relative
  width: $unit*5
  height: $unit*5
  display: block
  border-radius: 50%
  background: rgba(255, 255, 255, 0.5)

  &::after,
  &::before
    content: ''
    position: absolute
    top: 50%
    left: 50%
    width: $unit*3
    height: 2px
    background: $black
    transition: transform 500ms

  &::after
    transform: translate(-50%, -#{$unit/2})

  &::before
    transform: translate(-50%, #{$unit/2})

  &.active
    background: transparent

    &::after,
    &::before
      background: $white
      transform: translate(-50%, 0)


</style>
