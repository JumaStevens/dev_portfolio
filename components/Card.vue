<template lang='pug'>
div(class='container-card')

  article(class='card')
    div(class='card__aspect-ratio')
      a(
        v-if='card.link'
        :href='card.link'
        target='_blank'
        class='card__link'
      )
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
          v-lazy='card.image'
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
      //- a(
      //-   v-if='card.link'
      //-   :href='card.link'
      //-   class='card__link'
      //- ) {{ card.linkText }}

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
    max-height: 492px

    &-sizer
      grid-row: 1 / 2
      grid-column: 1 / 2

  &__link
    grid-row: 1 / 2
    grid-column: 1 / 2
    z-index: 6

  &__display
    position: relative
    grid-row: 1 / 2
    grid-column: 1 / 2
    background: $grey
    max-height: 492px

  &__image
    position: absolute
    z-index: 5
    left: 50%
    bottom: 0
    max-width: 80%
    max-height: 80%
    transform: translateX(-50%)
    object-fit: contain
    object-position: bottom
    box-shadow: 8px -8px 16px rgba(34, 34, 34, 0.5)

  &__body
    position: relative
    z-index: 6
    padding: $unit*3 $unit*2
    background: $white

  &__headline
    font-weight: $fw-bold

  &__text
    @extend %text-copy
    margin-top: $unit

  &__link
    color: $blue


// override(s)
.no-shadow

  & .card__image
    box-shadow: unset


</style>
