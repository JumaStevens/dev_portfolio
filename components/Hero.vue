<template lang='pug'>
div(
  id='hero'
  class='container-hero'
)

  section(class='hero')
    div(class='hero__body')
      h1(class='hero__headline') {{ headline }}
      p(class='hero__text') {{ text }}
      a(
        v-scroll-to='"#contact"'
        class='hero__link'
      ) {{ link }}

    //- HeroComposite(class='hero__composite')
    //- video(
    //-   :src='image'
    //-   class='video'
    //-   autoplay
    //-   loop
    //-   muted
    //-   playsinline
    //- )
    img(
      :src='image'
      class='video'
    )
</template>


<script>
import Card from '~/components/Card.vue'
import HeroComposite from '~/components/HeroComposite.vue'
import heroImage from '~/assets/images/heroBanner.jpg'


export default {
  components: {
    HeroComposite,
    Card
  },
  props: {},
  data () {
    return {
      headline: 'Your Shopify Expert',
      text: 'Full Stack Web Developer specializing in modular code architecture, helping businesses and agencies build better digital experiences.',
      link: 'Get In Touch',
      image: heroImage
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-hero
  @extend %container-main
  background: $white

.hero
  @extend %container-content
  position: relative
  // height: calc(100vh + 200px)
  display: grid
  grid-template-rows: 1fr auto
  grid-template-columns: 1fr
  +mq-s
    // grid-template-rows: 100vh auto
    // grid-template-columns: repeat(2, 1fr)

  &__body
    height: 100%
    max-height: 1000px
    position: relative
    z-index: 3
    grid-row: 1 / 2
    grid-column: 1 / 2
    padding: $unit*10 0

  &__headline
    font-size: $fs2
    font-weight: 900
    +mq-s
      font-size: $fs3

  &__text
    @extend %text-copy
    max-width: $fs*28
    margin-top: $unit*2

  &__link
    @extend %card-container
    display: inline-block
    padding: $unit*2 $unit*3
    margin-top: $unit*4
    background: $blue
    color: $white
    border-radius: $unit*3

  &__composite
    grid-row: 2 / 3
    grid-column: 1 / 2

.video
  grid-row: 2 / 3
  grid-column: 1 / 2
  width: 100%
  height: 280px
  background: $grey
  object-fit: cover
  margin: 120px 0 0 0
  box-shadow: 0px 8px 24px rgba(34, 34, 34, 0.5)
  border-radius: 6px
</style>
