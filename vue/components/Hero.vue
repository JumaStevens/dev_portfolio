<template lang='pug'>
div(class='container-hero')

  section(class='hero')
    h1(class='hero__headline') {{ headline }}
    p(class='hero__text') {{ text }}
</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {
      headline: 'Next-generation Digital Solutions',
      text: 'Full Stack Web Developer specializing in modular, forward-thinking code. I help agencies and businesses build engaging digital products.'
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-hero

.hero
  @extend %container-content
  @extend %flex--column
  min-height: calc(100vh - #{$unit*6})
  justify-content: center

  &__headline
    font-size: $fs2

  &__text
    @extend %text-copy


</style>
