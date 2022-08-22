<template lang="pug">
div(class='navigation-bar')
  div(class='navigation-bar__content')
    NuxtLink(
      :to='{ name: "index" }'
      class='navigation-bar__logo'
    )
      Logo(class='navigation-bar__logo-figure')
      //- h1(class='navigation-bar__logo-text') Hotfix
    ul(
      v-if='true'
      class='navigation-bar__list'
    )
      li(
        v-for='(item, i) in menu'
        :key='item + i'
        class='navigation-bar__list-item'
      )
        NuxtLink(
          :to='item.to'
          class='navigation-bar__list-link'
        )
          //- span(class='material-icons-outlined') {{ item.icon }}
          span &nbsp;{{ item.text }}
    div(class='navigation-bar__actions')
      //- NuxtLink(
      //-   :to='{ name: "auth" }'
      //-   class='navigation-bar__actions-button navigation-bar__actions-button--login'
      //- )
      //-   span(class='material-icons-outlined') person
      //-   | &nbsp;Sign In
      //- NuxtLink(
      //-   :to='{ name: "auth", query: { signup: true }}'
      //-   class='navigation-bar__actions-button navigation-bar__actions-button--signup'
      //- ) App
      //- a(
      //-   :href='signUpUrl'
      //-   class='navigation-bar__actions-button navigation-bar__actions-button--signup'
      //- ) Get Started
      button(
        @click='OPEN_DRAWER("navigationMenu")'
        type='button'
        class='navigation-bar__actions-button navigation-bar__actions-button--menu'
      )
        span(class='material-icons') menu
</template>

<script>
import { mapMutations } from 'vuex'
import { CMS_APP_BASE_URL } from '~/utils/constants'
import navigationData from '~/data/navigation.json'
import Logo from '~/components/elements/Logo.vue'

export default {
  components: {
    Logo
  },
  props: {},
  data() {
    return {
      menu: navigationData.menu,
      signUpUrl: `${CMS_APP_BASE_URL}/auth?signup=true`,
    }
  },
  computed: {},
  methods: {
    handleGAEvent() {
      // this.$ga.event({
      //   eventCategory: 'Header CTA',
      //   eventAction: 'click'
      // })
    },

    ...mapMutations({
      OPEN_DRAWER: 'app/OPEN_DRAWER'
    })
  }
}
</script>

<style lang="sass" scoped>
.navigation-bar
  position: sticky
  top: 0
  left: 0
  z-index: 99
  width: 100%
  height: $navigation-bar
  // background: rgba(255, 255, 255, 0.98)
  // background: $system-ultra-thin-material
  // background: rgba(34, 34, 34, 0.72)
  backdrop-filter: saturate(180%) blur(20px)
  background: $system-background
  border-bottom: 1px solid $separator

  &__content
    height: 100%
    display: grid
    grid-template-columns: auto 1fr
    grid-auto-flow: column
    align-items: center
    grid-gap: $unit*3
    padding: 0 $unit*2
    +mq-m
      // grid-template-columns: auto 1fr auto
      padding: 0 $unit*5

  &__logo
    @extend %flex--row-center
    display: grid
    grid-gap: $unit*0.5
    grid-auto-flow: column
    align-items: center

    &-text
      // text-transform: uppercase
      font-weight: $fw-med
      // color: $system-green
      line-height: 1
      // font-size: $fs1

  &__list
    display: none
    +mq-m
      display: grid
      grid-auto-flow: column
      justify-content: end
      grid-gap: $unit*2

    &-link
      min-height: $unit*5
      display: grid
      grid-auto-flow: column
      // grid-gap: $unit
      align-items: center
      padding: $unit $unit*2
      // color: $secondary-label

  &__actions
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*2
    width: min-content
    justify-self: end
    +mq-m
      display: none

    &-link
      @extend %flex--row-center
      min-height: $unit*5
      padding: $unit $unit*2
      border-radius: $unit
      font-weight: $fw-med
      color: currentColor
      white-space: nowrap

    &-button
      @extend %flex--row-center
      padding: $unit
      // border-radius: 50%
      border-radius: $unit
      white-space: nowrap

      &--menu
        +mq-m
          display: none

      &--login
        display: none
        +mq-m
          display: flex

      &--signup
        white-space: nowrap
        // background: $system-green
        padding: $unit $unit*2
        // height: $unit*7
        // border: 1px solid $system-indigo
        // color: $system-indigo
        background: rgba(94, 92, 230, 0.05)
        background: $system-blue
</style>
