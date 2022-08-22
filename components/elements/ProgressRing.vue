<template lang="pug">
div(class='progress-ring')
  svg(
    :width='radius * 2'
    :height='radius * 2'
    class='progress-ring__svg'
  )
    circle(
      :stroke-dasharray='`${circumference} ${circumference}`'
      :style='{ strokeDashoffset: 0 }'
      :stroke-width='stroke'
      fill='transparent'
      :r='normalizedRadius'
      :cx='radius'
      :cy='radius'
      class='progress-ring__svg-circle-background'
    )
    circle(
      :stroke-dasharray='`${circumference} ${circumference}`'
      :style='{ strokeDashoffset }'
      :stroke-width='stroke'
      fill='transparent'
      :r='normalizedRadius'
      :cx='radius'
      :cy='radius'
      class='progress-ring__svg-circle'
    )
  //- div(class='progress-ring__value') {{ progress }}%
  div(class='progress-ring__points')
    span(class='progress-ring__points-point') {{ points }}
    | &nbsp;/ {{ nextLevel }}
</template>

<script>
export default {
  components: {},
  props: {
    radius: {
      type: Number,
      default: 0 // formula: (width / 2)
    },
    progress: {
      type: Number,
      default: 0
    },
    stroke: {
      type: Number,
      default: 0
    },
    nextLevel: {
      type: Number,
      default: 0
    },
    points: {
      type: Number,
      default: 0
    }
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2
    const circumference = normalizedRadius * 2 * Math.PI

    return {
      normalizedRadius,
      circumference
    }
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - this.progress / 100 * this.circumference
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.progress-ring
  position: relative
  display: flex

  &__svg
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

    &-circle
      stroke: currentColor
      stroke-linecap: round
      transform: rotate(-90deg)
      transform-origin: 50% 50%

    &-circle-background
      stroke: $system-fill
      stroke-linecap: round
      transform: rotate(-90deg)
      transform-origin: 50% 50%

  &__value
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    font-size: 200%

  &__points
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    font-size: 75%
    font-size: $fs-1
    color: $secondary-label

    &-point
      color: $system-green
</style>
