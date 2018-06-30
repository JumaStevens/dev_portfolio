<template lang='pug'>
div(class='container-hamburger')
  a(class='hamburger')


</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-hamburger

.hamburger
  position: relative
  width: $unit*5
  height: $unit*5
  display: block

  &::after,
  &::before
    content: ''
    position: absolute
    top: 50%
    left: 50%
    width: $unit*3
    height: 2px
    background: $black
    transition: translate 500ms

  &::after
    transform: translate(-50%, -#{$unit/2})

  &::before
    transform: translate(-50%, #{$unit/2})


</style>
