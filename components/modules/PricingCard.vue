<template lang="pug">
article(class='pricing-card')
  h1(class='pricing-card__title') {{ title }}
  p(class='pricing-card__text') {{ text }}
  p(class='pricing-card__price')
    | ${{ formatPrice }}{{ billFrequency === 'project' ? '+' : '' }}
    span(
      v-if='price > 0'
      class='pricing-card__bill-frequency'
    ) / {{ billFrequency }}
  //- div(class='pricing-card__features')
  //-   h2(class='pricing-card__features-label') WHAT'S INCLUDED
  //-   ul(class='pricing-card__features-list')
  //-     li(
  //-       v-for='(feature, i) in features'
  //-       :key='feature + i'
  //-       class='pricing-card__features-item'
  //-     )
  //-       span(class='pricing-card__features-icon material-icons') task_alt
  //-       p(class='pricing-card__features-text') {{ feature }}
  button(
    @click='$emit("checkout", id)'
    type='button'
    class='pricing-card__button'
  ) Get Started
</template>

<script>
import { formatPrice } from '~/utils/number-format'

export default {
  components: {},
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    billFrequency: {
      type: String,
      default: ''
    },
    features: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {
    formatPrice() {
      return formatPrice(this.price, 0)
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.pricing-card
  display: grid
  grid-gap: $unit*2
  // align-content: start
  grid-template-rows: repeat(4, auto) 1fr
  padding: $unit*2
  border: 1px solid $separator
  border-radius: $unit

  &__title
    font-weight: $fw-med
    font-size: $fs3

  &__text
    color: $secondary-label

  &__price
    font-weight: $fw-med
    font-size: $fs3

  &__bill-frequency
    color: $secondary-label
    font-weight: $fw-reg
    font-size: $fs

  &__button
    @extend %base-button
    align-self: end
    margin-top: $unit*3
    // box-shadow: 0px 10px 40px -10px rgba(255, 0, 131, 0.5)
    background: $system-blue

  &__features
    display: grid
    grid-gap: $unit*2
    border-top: 1px solid $separator
    padding-top: $unit*3

    &-label
      // font-weight: $fw-med

    &-list
      display: grid
      grid-gap: $unit

    &-item
      display: flex
      align-items: center

    &-icon
      margin-right: $unit
      color: $system-blue
</style>
