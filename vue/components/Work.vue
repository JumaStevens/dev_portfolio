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
import dashMockup from '~/assets/images/dashMockup.png'
import kushMockup from '~/assets/images/kushMockup.png'
import adventMockup from '~/assets/images/adventMockup.png'
import hhrMockup from '~/assets/images/hhrMockup.png'
import galleryMockup from '~/assets/images/galleryMockup.png'
import portfolioMockup from '~/assets/images/portfolioMockup.png'
import mockupVessel from '~/assets/images/mockupVessel.jpg'

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
          image: kushMockup,
          headline: 'Kush Rugs — Shopify',
          text: 'E-commerce storefront selling ethically sourced designer rugs.',
          link: ''
        },
        {
          image: dashMockup,
          headline: 'Messenger — Single Page Application',
          text: 'Minimalist chat utility that is secure and easy to use.',
          link: ''
        },
        {
          image: hhrMockup,
          headline: 'HRR — Server Side Rendered',
          text: 'Hurricane relief job board, connecting restaurateurs with displaced survivors.',
          link: ''
        },
        {
          image: galleryMockup,
          headline: 'Gallery — Artist Portfolio',
          text: 'Stripped down showcase of large photographic content.',
          link: ''
        },
        {
          image: portfolioMockup,
          headline: 'Portfolio — Single Page Application',
          text: 'Lightweight portfolio for technology professionals.',
          link: ''
        },
        {
          image: adventMockup,
          headline: 'Advent — Agency Webpage',
          text: 'Mobile-first, brand development digital agency.',
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
    grid-gap: $unit*5
    +mq-s
      grid-template-columns: repeat(2, 1fr)
      grid-gap: $unit*10 $unit*5

  &__item

  &__card

</style>
