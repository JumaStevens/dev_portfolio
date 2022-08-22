<template lang="pug">
aside(class='index-footer')
  header(class='index-footer__header')
    h1(class='index-footer__title') Let's Get Started
    //- p(class='index-footer__description') Get started for free.
  div(class='index-footer__actions')
    NuxtLink(
      :to='{ name: "contact" }'
      class='index-footer__button'
    ) Contact Me
</template>

<script>
import { CMS_APP_AUTH_SIGN_UP_URL } from '~/utils/constants'

export default {
  components: {},
  props: {},
  data() {
    return {
      signUpUrl: CMS_APP_AUTH_SIGN_UP_URL,
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.index-footer
  @extend %content
  display: grid
  grid-gap: $unit*3
  padding: $unit*16 0 $unit*32 0

  &__header
    display: grid
    grid-gap: $unit
    text-align: center

  &__logo
    margin-bottom: $unit

  &__title
    font-size: $fs2
    font-weight: $fw-med

  &__description
    color: $secondary-label

  &__actions
    display: grid
    justify-content: center

  &__button
    @extend %base-button

    +mq-m
      min-width: $unit*35
</style>
