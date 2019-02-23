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

    HeroComposite(class='hero__composite')
</template>


<script>
import HeroComposite from '~comp/HeroComposite.vue'


export default {
  components: {
    HeroComposite
  },
  props: {},
  data () {
    return {
      headline: 'Creative Web Solutions',
      text: 'Full Stack Web Developer specializing in modular code architecture, helping businesses and agencies build better digital experiences.',
      link: 'Get In Touch'
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
  max-height: 1000px
  height: calc(100vh + 200px)
  display: grid
  grid-template-rows: 1fr 200px
  grid-template-columns: repeat(1, 1fr)
  +mq-s
    // grid-template-rows: 100vh auto
    // grid-template-columns: repeat(2, 1fr)

  &__body
    // @extend %flex--column-center
    // align-items: flex-start
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
    padding: $unit $unit*2
    margin-top: $unit*4
    background: $blue
    color: $white

  &__composite
    grid-row: 1 / 2
    grid-column: 1 / 2
    position: absolute
    z-index: 4
    bottom: calc(0% - 400px)
    right: calc(100% - 80px)
    +mq-xs
      // grid-row: 2 / 3
      // position: relative
      bottom: calc(0% - 200px)
      right: calc(100% - 200px)
    +mq-s
      // grid-row: 2 / 3
      // position: relative
      bottom: - 300px
      right: unset

</style>
