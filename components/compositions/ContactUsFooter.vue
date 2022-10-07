<template lang="pug">
aside(class='index-footer')
  header(class='index-footer__header')
    h1(class='index-footer__title') If you believe quality work matters, let’s work together
    //- p(class='index-footer__description') Get started for free.
  div(class='index-footer__actions')
    NuxtLink(
      :to='{ name: "contact" }'
      class='index-footer__button'
    ) Let's Talk
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
  gap: $unit*5
  padding: $unit*16 0 $unit*32 0
  justify-items: center

  &__header
    display: grid
    grid-gap: $unit
    text-align: center

  &__logo
    margin-bottom: $unit

  &__title
    max-width: 780px
    font-size: $fs3
    font-weight: $fw-bold
    line-height: 1.3
    +mq-xs
      font-size: $fs4
    +mq-s
      font-size: $fs4*1.5

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
