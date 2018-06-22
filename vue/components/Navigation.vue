<template lang='pug'>
nav(
  class='navigation'
)

  //- logo
  a(
    class='navigation__logo'
  ) Juma

  //-
  ul(
    class='navigation__list'
  )
    li(
      v-for='(item, index) in nav'
      :key='item + index'
      class='navigation__item'
    )
      a(
        class='navigation__link'
      ) {{ item.text }}

</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {
      nav: [
        {
          text: 'work'
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.navigation
  position: fixed
  width: 100%
  height: $unit*6
  display: flex
  align-items: center
  background: rgba(0,0,0,0.8)

  &__logo
    color: $white

  &__list
    display: flex
    margin-left: auto

  &__item

  &__link
    color: $white

</style>
