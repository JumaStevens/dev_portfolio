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
// import dashMockup from '~/assets/images/dashMockup.png'
// import feedMeSugarMockup from '~/assets/images/feedMeSugarMockup.png'
// import chatCiaoMockup from '~/assets/images/chatCiaoMockup.png'
import kushMockup from '~/assets/images/kushMockup.png'
// import adventMockup from '~/assets/images/adventMockup.png'
// import galleryMockup from '~/assets/images/galleryMockup.png'
// import mockupVessel from '~/assets/images/mockupVessel.jpg'
// import girlstravelcoMockup from '~/assets/images/girlstravelcoMockup.png'
import shopfulThemeMockup from '~/assets/images/shopfulThemeMockup.png'
import shopfulMockup from '~/assets/images/shopfulMockup.jpg'
import zeroWasteLoveMockup from '~/assets/images/zeroWasteLoveMockup.jpg'
import herrayMockup from '~/assets/images/herrayMockup.jpg'
import investfulMockup from '~/assets/images/investfulMockup.jpg'

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
          image: shopfulMockup,
          headline: 'Shopful',
          text: 'Social shopping network.',
          link: 'https://shopful.io/'
        },
        {
          image: shopfulThemeMockup,
          headline: 'Pilot Pro Theme',
          text: 'White-label SPA Shopify theme for fashion brands.',
          link: ''
        },
        {
          image: investfulMockup,
          headline: 'Investful',
          text: 'Co-learning community for investors.',
          link: 'https://investful.app/'
        },
        {
          image: zeroWasteLoveMockup,
          headline: 'Zero Waste Love',
          text: 'TEDx Talk featured zero waste guide.',
          link: ''
        },
        {
          image: herrayMockup,
          headline: 'Herray',
          text: 'Event sharing social network.',
          link: ''
        },
        // {
        //   image: chatCiaoMockup,
        //   headline: 'Chat Ciao',
        //   text: 'Anonymous Peer-to-Peer text, voice & video chat solution.',
        //   link: ''
        // },
        {
          image: kushMockup,
          headline: 'Kush Rugs',
          text: 'E-commerce storefront selling ethically sourced designer rugs. (Monumental Agency)',
          link: 'https://kushrugs.com/'
        }
        // {
        //   image: feedMeSugarMockup,
        //   headline: 'Feed Me Sugar',
        //   text: 'Asynchronous e-commerce application utilizing Shopify APIs.',
        //   link: 'https://www.feedmesugar.com/'
        // },
        // {
        //   image: galleryMockup,
        //   headline: 'Gallery',
        //   text: 'Stripped down showcase of large photographic content.',
        //   link: 'https://still-citadel-96416.herokuapp.com/'
        // },
        // {
        //   image: girlstravelcoMockup,
        //   headline: 'Girls Travel Co',
        //   text: 'Minimalist chat utility that is secure and easy to use.',
        //   link: ''
        // }
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
