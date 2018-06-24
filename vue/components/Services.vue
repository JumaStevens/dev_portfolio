<template lang='pug'>
div(class='container-services')

  section(class='services')
    h2(class='services__headline') {{ headline }}
    ul(class='services__list')
      li(
        v-for='(item, index) in services'
        :key='item + index'
        class='services__item'
      )
        div(class='services__icon')
        h3(class='services__subhead') {{ item.headline }}
        p(class='services__text') {{ item.text }}
</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {
      headline: 'Services',
      services: [
        {
          svg: '',
          headline: 'Modular',
          text: 'Code that scales.'
        },
        {
          svg: '',
          headline: 'Secure',
          text: 'Security is a top concern.'
        },
        {
          svg: '',
          headline: 'Future Proof',
          text: 'The web development space progresses fast, don\'t be left behind.'
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-services

.services
  @extend %container-content

  &__headline
    @extend %text-headline

  &__list
    @extend %flex--column
    +mq-m
      flex-direction: row

  &__item
    @extend %flex--column
    flex: 1

  &__icon
    width: 24px
    height: 24px
    background: $dark

  &__subhead

  &__text
    @extend %text-copy



</style>
