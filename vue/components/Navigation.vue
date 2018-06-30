<template lang='pug'>
div(class='container-navigation')

  nav(class='navigation')
    Hamburger(class='navigation__hamburger')
    //- ul(class='navigation__list')
    //-   li(
    //-     v-for='(item, index) in nav'
    //-     :key='item + index'
    //-     class='navigation__item'
    //-   )
    //-     router-link(
    //-       to=''
    //-       class='navigation__link'
    //-     ) {{ item.text }}
</template>


<script>
import Hamburger from '~comp/Hamburger.vue'

export default {
  components: {
    Hamburger
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
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-navigation
  position: fixed
  z-index: 99
  top: 0
  left: 0
  width: $unit*6
  height: 100vh
  background: $white

.navigation
  @extend %container-content
  @extend %flex--row-center
  height: inherit

  &__logo
    color: $black
    font-weight: bold

  &__hamburger
    margin-left: auto

  &__list
    display: flex
    margin-left: auto

  &__item
    @extend %flex--row-center
    margin-right: $unit*3

    &:last-child
      margin-right: unset
      background: $blue

      & > .navigation__link
        color: $white

  &__link
    padding: $unit $unit*2
    color: $black

</style>
