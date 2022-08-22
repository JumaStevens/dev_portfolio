<template lang="pug">
div(class='typing-indicator')
  div(class='typing-indicator__dot')
  div(class='typing-indicator__dot')
  div(class='typing-indicator__dot')
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.typing-indicator
  width: $unit*6
  height: $unit*3
  display: grid
  grid-gap: $unit*0.25
  grid-auto-flow: column
  align-items: center
  justify-content: center
  background: $system-grey
  border-radius: $unit*3

  &__dot
    width: $unit
    height: $unit
    border-radius: 50%
    background: $system-grey2
    transition: transform 0.5s ease-in-out
    animation: typing 1s infinite

    &:nth-child(1)
      animation-delay: 1s
    &:nth-child(2)
      animation-delay: 0.5s
    &:nth-child(3)
      animation-delay: 0.8s

@keyframes typing
  50%
    transform: translateY(-25%)
    opacity: 0.5
  100%
    transform: translateY(0)
</style>
