<template lang='pug'>
div(class='container-card')

  article(class='card')
    div(class='card__aspect-ratio')
      svg(
        class='card__aspect-ratio-sizer'
        viewBox='0 0 1 1'
      )
      //- display
      div(
        v-if='card.image'
        class='card__display'
      )
        img(
          :src='card.image'
          class='card__image'
        )
    //- body
    div(
      v-if='card.headline || card.text || card.link'
      class='card__body'
    )
      h3(
        v-if='card.headline'
        class='card__headline'
      ) {{ card.headline }}
      p(
        v-if='card.text'
        class='card__text'
      ) {{ card.text }}
      a(
        v-if='card.link'
        class='card__link'
      ) {{ card.link }}

</template>


<script>

export default {
  components: {},
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    card () {
      return {
        image: this.cardData.image ? this.cardData.image : '',
        headline: this.cardData.headline ? this.cardData.headline : '',
        text: this.cardData.text ? this.cardData.text : '',
        link: this.cardData.link ? this.cardData.link : ''
      }
    }
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-card
  height: 100%

.card
  @extend %card-container
  height: 100%
  background: $white


  &__aspect-ratio
    display: grid

    &-sizer
      grid-row: 1 / 2
      grid-column: 1 / 2

  &__display
    position: relative
    grid-row: 1 / 2
    grid-column: 1 / 2
    background: $grey

  &__image
    position: absolute
    left: 50%
    bottom: 0
    height: 80%
    transform: translateX(-50%)

  &__body
    padding: $unit*3 $unit*2 $unit*2 $unit*2
    background: $white

  &__headline

  &__text
    @extend %text-copy

  &__link
    color: $blue

</style>
