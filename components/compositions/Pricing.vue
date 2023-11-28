<template lang="pug">
div(class='page-pricing')
  div(class='page-pricing__view-content')
    h2(class='page-pricing__headline') Pricing
    section(class='page-pricing__section page-pricing__prices')
      PricingCard(
        v-for='(price, i) in prices'
        :key='price + i'
        :title='price.title'
        :text='price.text'
        :price='price.price'
        :billFrequency='price.billFrequency'
        :features='price.features'
        @checkout='onSignUp'
        class='pricing__prices-card'
      )
</template>

<script>
import PricingCard from '~/components/modules/PricingCard.vue'

const prices = [
  {
    title: 'Hourly',
    text:
      'For flexible projects with an open scope of work.',
    price: 150,
    billFrequency: 'hour',
    features: [
      '500 requests / month',
      'Unlimited projects',
      '1 seat'
    ]
  },
  {
    title: 'Container',
    text:
      'For ongoing projects, requiring a commitment of 32+ hours per week.',
    price: 11500,
    billFrequency: 'mo',
    features: [
      '50,000 requests / month',
      'Unlimited projects',
      '3 seats'
    ]
  },
  {
    title: 'Project',
    text:
      'For a well-defined project with a clear scope of work.',
    price: 20000,
    billFrequency: 'project',
    features: [
      '250,000 requests / month',
      'Unlimited projects',
      'Unlimited seats'
    ]
  }
]

export default {
  components: {
    PricingCard
  },
  props: {},
  data() {
    return {
      prices
    }
  },
  computed: {},
  methods: {
    onSignUp() {
      // window.location = CMS_APP_AUTH_SIGN_UP_URL
      this.$router.push({ name: 'contact' })
    }
  }
}
</script>

<style lang="sass" scoped>
.page-pricing
  @extend %container-main

  &__view-content
    @extend %container-content
    display: grid

  &__headline
    @extend %text-headline

  &__section
    display: grid

  &__prices
    display: grid
    grid-gap: $unit*2
    // padding: $unit*16 0

    +mq-m
      grid-template-columns: repeat(3, 1fr)
</style>
