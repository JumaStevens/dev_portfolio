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
      //- li(
      //-   class='navigation__item'
      //- )
      //-   nuxt-link(
      //-     :to='{ name: "blog" }'
      //-     @click='toggleMenu'
      //-     class='navigation__link navigation__link--secret'
      //-   ) Blog
    aside(class='navigation__connect')
      a(
        href='https://github.com/JumaStevens'
        target='_blank'
        rel='external'
        class='navigation__social'
      )
        IconGithub(class='navigation__icon')
      a(
        href='https://www.linkedin.com/in/juma-stevens/'
        target='_blank'
        rel='external'
        class='navigation__social'
      )
        IconLinkedin(class='navigation__icon')
      a(
        href='mailto:jumastevens@gmail.com'
        class='navigation__social'
      )
        IconEmail(class='navigation__icon')
</template>


<script>
import IconGithub from '~/assets/svg/iconGithub.svg'
import IconLinkedin from '~/assets/svg/iconLinkedin.svg'
import IconEmail from '~/assets/svg/iconEmail.svg'
// import IconInstagram from '~/assets/svg/iconInstagram.svg'
// import IconTwitter from '~/assets/svg/iconTwitter.svg'
import { mapState, mapMutations } from 'vuex'


export default {
  components: {
    IconGithub,
    IconLinkedin,
    IconEmail
    // IconInstagram,
    // IconTwitter
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

      this.$router.push('/')

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
  background: $black
  transition: opacity 200ms
  opacity: 0
  +mq-s
    padding-left: $unit*6

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
    margin-bottom: $unit*2
    +mq-s
      margin: 0 $unit*5 0 0

    &:last-child
      margin: 0

  &__link
    color: $white
    opacity: 0.9

    &:hover
      opacity: 1

    &--secret
      opacity: 0 !important

  &__connect
    display: grid
    grid-auto-flow: column
    grid-auto-columns: min-content
    grid-gap: $unit $unit*2
    grid-row: 3 / -1
    align-self: center
    margin: $unit*5 0
    +mq-s
      grid-gap: $unit*2

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
    @extend %flex--row-center
    width: $unit*5
    height: $unit*5

  &__icon
    width: $unit*3
    height: $unit*3
    fill: $white
    opacity: 0.9

    &:hover
      opacity: 1


</style>
