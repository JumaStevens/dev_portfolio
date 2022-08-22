<template lang="pug">
div(class='logo')
  div(class='logo__avatar')
    img(
      src='https://pbs.twimg.com/profile_images/984998667286282240/kByXV1jU_400x400.jpg'
      class='logo__avatar-image'
    )
    p(class='logo__avatar-name') Juma Stevens
</template>

<script>
import Logo from '~/assets/svg/logo.svg'

export default {
  components: {
    Logo
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.logo

  &__avatar
    display: grid
    grid-template-columns: auto 1fr
    grid-gap: $unit
    align-items: center
    width: min-content
    margin: 0 auto

    &-image
      width: $unit*5
      height: $unit*5
      border-radius: 50%
      overflow: hidden

    &-name
      white-space: nowrap
      font-weight: $fw-med
</style>
