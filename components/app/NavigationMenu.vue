<template lang="pug">
OverlayDrawer(
  :drawerId='drawerId'
  class='navigation-menu'
)
  template(v-slot:default)
    div(class='navigation-menu__content')
      ul(
        v-if='true'
        class='navigation-menu__list'
      )
        li(
          v-for='(item, i) in menu'
          :key='item + i'
          class='navigation-menu__list-item'
        )
          MenuTile(
            :to='item.to'
            :primaryText='item.text'
          )
      //- div(class='navigation-menu__buttons')
      //-   //- NuxtLink(
      //-   //-   :to='{ name: "auth" }'
      //-   //-   class='navigation-menu__button navigation-menu__button--secondary'
      //-   //- ) Sign in
      //-   a(
      //-     :href='signUpUrl'
      //-     class='navigation-menu__button navigation-menu__button--secondary'
      //-   ) Get Started
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { CMS_APP_BASE_URL } from '~/utils/constants'
import Button from '~/components/elements/Button.vue'
import OverlayDrawer from '~/components/slots/OverlayDrawer.vue'
import MenuTile from '~/components/modules/MenuTile.vue'
import { menu } from '~/data/navigation.json'

export default {
  components: {
    Button,
    MenuTile,
    OverlayDrawer
  },
  props: {},
  data() {
    return {
      menu,
      drawerId: 'navigationMenu',
      signUpUrl: `${CMS_APP_BASE_URL}/auth?signup=true`,
    }
  },
  computed: {
    ...mapGetters({
      isAuthUser: 'auth/isAuthUser'
    }),

    ...mapState({
      activeDrawer: (state) => state.app.drawer
    })
  },
  watch: {
    $route() {
      if (this.activeDrawer === this.drawerId) this.CLOSE_DRAWER()
    }
  },
  methods: {
    ...mapMutations({
      CLOSE_DRAWER: 'app/CLOSE_DRAWER'
    })
  }
}
</script>

<style lang="sass" scoped>
.navigation-menu

  &__content
    display: grid
    grid-gap: $unit*2
    grid-template-rows: 1fr auto
    width: 85vw
    max-width: 480px
    height: 100%
    padding-top: $unit*4

  &__list
    padding: 0 $unit*2

  &__buttons
    position: sticky
    bottom: 0
    padding: $unit*2 $unit*2 $unit*4 $unit*2
    background: $system-background
    border-top: 1px solid $separator

  &__button
    @extend %base-button
    font-weight: $fw-med
    background: $system-fill
    // color: $system-indigo
    background: rgba(94, 92, 230, 0.05)
    background: $system-indigo
</style>
