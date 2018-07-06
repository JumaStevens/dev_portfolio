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
    width: 100%
    height: 50%
    position: absolute
    top: 50%
    background: $grey
    +mq-s
      width: 50%
      height: 100%
      top: 0
      left: 50%



.hero
  @extend %container-content
  position: relative
  z-index: 3
  display: grid
  grid-template-columns: repeat(1, 1fr)
  min-height: 100vh
  justify-content: space-between
  align-items: center
  +mq-s
    grid-template-columns: repeat(2, 1fr)


  &__body
    padding: $unit*10 0
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
    padding: $unit*10 0
    justify-self: center
    +mq-s
      justify-self: end


</style>
