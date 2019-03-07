<template lang='pug'>
div(
  id='work'
  class='container-work'
)

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
import Card from '~/components/Card.vue'
import dashMockup from '~/assets/images/dashMockup.png'
import feedMeSugarMockup from '~/assets/images/feedMeSugarMockup.png'
import chatCiaoMockup from '~/assets/images/chatCiaoMockup.png'
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
          image: feedMeSugarMockup,
          headline: 'Feed Me Sugar — Server-Side Rendering',
          text: 'Asynchronous e-commerce application utilizing Shopify APIs.',
          link: 'https://www.feedmesugar.com/'
        },
        {
          image: kushMockup,
          headline: 'Kush Rugs — Shopify',
          text: 'E-commerce storefront selling ethically sourced designer rugs. (Monumental Agency)',
          link: 'https://kushrugs.com/'
        },
        {
          image: chatCiaoMockup,
          headline: 'Chat Ciao — P2P Messenger',
          text: 'Anonymous Peer-to-Peer text, voice & video chat solution.',
          link: 'https://chat-ciao.herokuapp.com/'
        },

        // {
        //   image: dashMockup,
        //   headline: 'Dash — Single Page Application',
        //   text: 'Minimalist chat utility that is secure and easy to use.',
        //   link: ''
        // },
        // {
        //   image: hhrMockup,
        //   headline: 'HRR — Server Side Rendered',
        //   text: 'Hurricane relief job board, connecting restaurateurs with displaced survivors.',
        //   link: ''
        // },
        // {
        //   image: adventMockup,
        //   headline: 'Advent — Agency Webpage',
        //   text: 'Mobile-first, brand development digital agency.',
        //   link: 'https://advent-digital-agency.herokuapp.com/'
        // },
        {
          image: galleryMockup,
          headline: 'Gallery — Artist Portfolio',
          text: 'Stripped down showcase of large photographic content.',
          link: 'https://still-citadel-96416.herokuapp.com/'
        },
        // {
        //   image: portfolioMockup,
        //   headline: 'Portfolio — Single Page Application',
        //   text: 'Lightweight portfolio for technology professionals.',
        //   link: ''
        // },
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
