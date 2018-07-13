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
        a(
          @click='handleNavLink(item)'
          class='navigation__link'
        ) {{ item.text }}
    aside(class='navigation__connect')
      a(
        href='https://github.com/JumaStevens'
        target='_blank'
        rel='external'
        class='navigation__link'
      ) GitHub
      a(
        href='https://www.linkedin.com/in/juma-stevens-05730b138/'
        target='_blank'
        rel='external'
        class='navigation__link'
      ) LinkedIn
      a(
        href='mailto:jumastevens@gmail.com'
        class='navigation__link'
      ) Jumastevens@gmail.com
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
      scrollY: state => state.app.scroll.y,
      isOpen: state => state.app.menu.isOpen
    })
  },
  methods: {
    handleNavLink ({ text }) {
      const anchor = `#${text.toLowerCase()}`
      this.toggleMenu()

      this.$nextTick(() => {
        window.scrollTo(0, this.scrollY)
        this.$scrollTo(anchor)
      })
    },


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
    flex-direction: column
    +mq-s
      flex-direction: row

  &__item
    @extend %flex--row-center
    justify-content: flex-start
    margin-bottom: $unit
    +mq-s
      margin: 0 $unit*5 0 0

    &:last-child
      margin: 0

  &__link
    color: $white
    opacity: 0.9

    &:hover
      opacity: 1

  &__connect
    display: grid
    grid-template-rows: repeat(2, min-content)
    grid-template-columns: repeat(3, min-content)
    grid-gap: $unit $unit*5
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
