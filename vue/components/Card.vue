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

.card
  width: 500px
  // box-shadow: 0px 16px 16px rgba(33, 33, 33, 0.2)

  &__aspect-ratio
    display: grid

    &-sizer
      grid-row: 1 / 2
      grid-column: 1 / 2

  &__display
    @extend %flex--row
    justify-content: center
    align-items: flex-end
    grid-row: 1 / 2
    grid-column: 1 / 2
    height: 500px
    background: $grey

  &__image
    height: 80%

  &__body
    background: $white

  &__headline

  &__text
    @extend %text-copy

  &__link
    color: $blue

</style>
