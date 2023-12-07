<template lang='pug'>
div(class='vue-app')
  AppNavigationBarTop
  AppNavigationMenu
  nuxt(class='vue-app__view')
  Footer(class='vue-app__footer')
</template>


<script>
import Navigation from '~/components/Navigation.vue'
import AppNavigationBarTop from '~/components/app/NavigationBarTop.vue'
import AppNavigationMenu from '~/components/app/NavigationMenu.vue'
import Hamburger from '~/components/Hamburger.vue'
import Footer from '~/components/Footer.vue'
import { mapState } from 'vuex'


export default {
  components: {
    AppNavigationBarTop,
    AppNavigationMenu,
    Navigation,
    Hamburger,
    Footer
  },
  data () {
    return {}
  },
	head() {
		return {
			script: [
				{
					src: 'https://api.lingoblocks.com/chatbot-embed.js',
					defer: true,
					type: 'module',
					'data-lingo-id': 'sDyz6qEo7MoXE051mRNs'
				}
			]
		}
	},
  computed: {
    error () {
      return this.$store.state.error
    },


    ...mapState({
      menuIsOpen: state => state.app.menu.isOpen
    })
  }
}
</script>


<style lang='sass'>
.vue-app
  display: grid
  grid-template-rows: $navigation-bar minmax(calc(100vh - #{$navigation-bar}), auto)
  grid-template-rows: auto 1fr auto
  height: 100%

  &__hamburger
    position: fixed
    z-index: 99
    top: $unit*3
    right: 5%
    +mq-s
      top: 50%
      left: $unit*3
      right: unset
      transform: translate(-50%, -50%)

  &__error,
  &__view

  &.menuIsOpen

    & .vue-app__view,
    & .vue-app__footer
      display: none


</style>
