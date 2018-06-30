<template lang='pug'>
div(class='container-work')

  section(class='work')
    h2(class='work__headline') {{ headline }}
    ul(class='work__list')
      li(
        v-for='(item, index) in work'
        :key='item + index'
        class='work__item'
      )
        Card(
          :cardData='item'
          class='work__card'
        )
</template>


<script>
import Card from '~comp/Card.vue'
import mockup from '~/assets/images/mockup.png'

export default {
  components: {
    Card
  },
  props: {},
  data () {
    return {
      headline: 'Select Work',
      work: [
        {
          image: mockup,
          headline: 'Dash Messenger - Application',
          text: 'A minimalist chat utility that is secure and fun to use.',
          link: ''
        },
        {
          image: mockup,
          headline: 'Kush Rugs - Shopify Storefront',
          text: 'An e-commerce storefront selling ethically sourced, high-end designer rugs.',
          link: ''
        },
        {
          image: mockup,
          headline: 'HRR — Job Board',
          text: 'Hurricane relief app allowing survivors to find jobs.',
          link: ''
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-work
  @extend %container-main

.work
  @extend %container-content

  &__headline
    @extend %text-headline

  &__list
    display: grid
    grid-gap: $unit*10 $unit*5
    +mq-s
      grid-template-columns: repeat(2, 1fr)

  &__item

  &__card

</style>
