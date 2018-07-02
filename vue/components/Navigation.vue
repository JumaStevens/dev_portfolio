<template lang='pug'>
div(
  :class='{ active: isOpen }'
  class='container-navigation'
)

  nav(class='navigation')
    ul(class='navigation__list')
      li(
        v-for='(item, index) in nav'
        :key='item + index'
        class='navigation__item'
      )
        router-link(
          to=''
          class='navigation__link'
        ) {{ item.text }}
    aside(class='navigation__connect')
      a(class='navigation__link') GitHub
      a(class='navigation__link') LinkedIn
      a(class='navigation__link') Jumastevens@gmail.com
</template>


<script>
import IconGithub from '~/assets/svg/iconGithub.svg'
import { mapState, mapMutations } from 'vuex'


export default {
  components: {
    IconGithub
  },
  props: {},
  data () {
    return {
      nav: [
        {
          text: 'Services'
        },
        {
          text: 'Work'
        },
        {
          text: 'Bio'
        },
        {
          text: 'Contact'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      isOpen: state => state.app.menu.isOpen
    })
  },
  methods: {
    ...mapMutations({
      toggleMenu: 'app/TOGGLE_MENU'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-navigation
  position: fixed
  z-index: 99
  top: 0
  left: -100%
  width: 100vw
  min-height: 100vh
  padding-left: $unit*6
  background: $black
  transition: opacity 200ms
  opacity: 0

  &.active
    opacity: 1
    transform: translateX(100%)

.navigation
  @extend %container-content
  min-height: 100vh
  display: grid
  grid-template-rows: 1fr auto 1fr

  &__logo
    color: $black
    font-weight: bold

  &__list
    grid-row: 2 / 3
    display: flex

  &__item
    @extend %flex--row-center
    margin-right: $unit*3

    &:last-child
      margin-right: unset

  &__link
    padding: $unit $unit*2
    color: $white
    opacity: 0.9

    &:hover
      opacity: 1

  &__connect
    display: grid
    grid-template-rows: repeat(2, min-content)
    grid-template-columns: repeat(3, min-content)
    grid-row: 3 / -1
    align-self: center
    margin: $unit*5 0

    & .navigation__link
      grid-row: 1 / 2
      grid-column: 2 / 3

      &:first-child
        grid-row: 1 / 2
        grid-column: 1 / 2

      &:last-child
        grid-row: 2 / 3
        grid-column: 1 / -1

  &__social
    width: 40px
    height: 40px


</style>
