<template lang="pug">
div(class='carousel-indicator')
  div(
    v-for='(i) in total'
    :key='"carouselIndicator" + i'
    :class='{ isActive: i === activeIndex }'
    class='carousel-indicator__dot'
  )
</template>

<script>
export default {
  components: {},
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
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
.carousel-indicator
  display: grid
  grid-gap: $unit
  grid-auto-flow: column
  padding: $unit*2 $unit*3
  border-radius: $unit*3
  background: $system-ultra-thin-material

  &__dot
    width: $unit*1
    height: $unit*1
    border-radius: 50%
    background: $secondary-label

    &.isActive
      background: $label
</style>
