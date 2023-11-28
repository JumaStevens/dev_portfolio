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
// import herrayMockup from '~/assets/images/herrayMockup.png'
import feedMeSugarMockup from '~/assets/images/feedMeSugarMockup.png'
import chatCiaoMockup from '~/assets/images/chatCiaoMockup.png'
import portfolioMockup from '~/assets/images/portfolioMockup.png'
import adventMockup from '~/assets/images/adventMockup.png'
import galleryMockup from '~/assets/images/galleryMockup.png'
import kushMockup from '~/assets/images/kushMockup.png'
// import girlstravelcoMockup from '~/assets/images/girlstravelcoMockup.png'
import shopfulThemeMockup from '~/assets/images/shopfulThemeMockup.png'
import shopfulMockup from '~/assets/images/shopfulMockup.jpg'
import zeroWasteLoveMockup from '~/assets/images/zeroWasteLoveMockup.jpg'
import herrayMockup from '~/assets/images/herrayMockup.jpg'
import investfulMockup from '~/assets/images/investfulMockup.jpg'
import hotfixMockup from '~/assets/images/hotfixMockup.jpg'
import lingoblocksMockup from '~/assets/images/lingoblocks.jpg'
import marketshowerMockup from '~/assets/images/marketshowerMockup.jpg'
import voicemailbioMockup from '~/assets/images/voicemailbioMockup.jpg'

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
          image: lingoblocksMockup,
          headline: 'Lingo Blocks',
          text: 'Custom AI assistants for websites.',
          link: 'https://www.lingoblocks.com'
        },
				{
          image: marketshowerMockup,
          headline: 'Market Shower',
          text: 'Stock market forecast tool for new investors.',
          link: 'https://www.marketshower.com'
        },
				{
          image: kushMockup,
          headline: 'Kush Rugs',
          text: 'E-commerce storefront selling ethically sourced designer rugs. (Monumental Agency)',
          link: 'https://kushrugs.com'
        },
				{
          image: shopfulMockup,
          headline: 'Shopful',
          text: 'Social shopping network.',
          link: ''
        },
				{
          image: galleryMockup,
          headline: 'Gallery',
          text: 'Stripped down showcase of large photographic content.',
          link: ''
        },
				{
          image: investfulMockup,
          headline: 'Investful',
          text: 'Co-learning community for investors.',
          link: ''
        },
				{
          image: zeroWasteLoveMockup,
          headline: 'Zero Waste Love',
          text: 'TEDx Talk featured zero waste guide.',
          link: ''
        },
				{
          image: chatCiaoMockup,
          headline: 'Chat Ciao',
          text: 'Minimalist chat utility that is secure and easy to use.',
          link: ''
        },
        {
          image: hotfixMockup,
          headline: 'Hotfix CMS',
          text: 'Minimalist CMS for Developers.',
          link: ''
        },
        {
          image: voicemailbioMockup,
          headline: 'Voicemail Bio',
          text: 'Anonymous voice messages for your link in bio.',
          link: ''
        },
        // {
        //   image: shopfulThemeMockup,
        //   headline: 'Pilot Pro Theme',
        //   text: 'White-label SPA Shopify theme for fashion brands.',
        //   link: ''
        // },
        {
          image: portfolioMockup,
          headline: 'Web Design Agency',
          text: 'Showcase of design work for web agency.',
          link: ''
        },
				{
          image: herrayMockup,
          headline: 'Herray Events',
          text: 'Social events and planning application.',
          link: ''
        },
				// {
        //   image: adventMockup,
        //   headline: 'Advent Agency',
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
