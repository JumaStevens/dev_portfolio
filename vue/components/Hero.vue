<template lang='pug'>
div(class='container-hero')

  section(class='hero')
    div(class='hero__body')
      h1(class='hero__headline') {{ headline }}
      p(class='hero__text') {{ text }}
      a(class='hero__link') {{ link }}

    CardCode(class='hero__card-code')
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
      text: 'Full Stack Developer specializing in modular, expressive code helping agencies and businesses build engaging digital products.',
      link: 'Let\'s Chat!'
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-hero
  background: $grey

.hero
  @extend %container-content
  @extend %flex--row
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


</style>
