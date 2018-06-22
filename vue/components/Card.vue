<template lang='pug'>
div(
  class='card'
)

  //- display
  div(
    class='card__display'
  )
    img(
      class='card__img'
    )

  //- body
  div(
    class='card__body'
  )
    h4(
      class='card__title'
    ) Dash Chat
    p(
      class='card__text'
    ) A minimalist chat utility that is secure and fun to use.
    a(
      class='card__link'
    ) Read More

</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.card
  margin: 0 auto
  width: 500px
  box-shadow: 0px 16px 16px rgba(33, 33, 33, 0.2)

  &__display
    height: 500px
    background: $grey

  &__body
    background: $white

  &__img

  &__title

  &__text

  &__link
    color: $blue
    
</style>
