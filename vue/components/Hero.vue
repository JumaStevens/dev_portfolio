<template lang='pug'>
div(class='container-hero')

  section(class='hero')
    div(class='hero__body')
      h1(class='hero__headline') {{ headline }}
      p(class='hero__text') {{ text }}
      a(class='hero__link') {{ link }}

    CardCode(class='hero__code')
</template>


<script>
import CardCode from '~comp/CardCode.vue'

export default {
  components: {
    CardCode
  },
  props: {},
  data () {
    return {
      headline: 'Creative Digital Solutions',
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
  position: relative
  z-index: 2
  background: $white

  &::before
    content: ''
    position: absolute
    top: 0
    left: 50%
    width: 50%
    height: 100%
    background: $grey

.hero
  @extend %container-content
  position: relative
  z-index: 3
  display: grid
  grid-template-columns: repeat(2, 1fr)
  min-height: 100vh
  justify-content: space-between
  align-items: center

  &__body
    max-width: $fs*28
    +mq-s
      margin-right: $unit*10

  &__headline
    font-size: $fs2

  &__text
    @extend %text-copy
    margin-top: $unit*2

  &__link
    @extend %card-container
    display: inline-block
    padding: $unit $unit*2
    margin-top: $unit*4
    background: $blue
    color: $white

  &__code
    justify-self: end


</style>
