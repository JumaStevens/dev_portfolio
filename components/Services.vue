<template lang='pug'>
div(
  id='services'
  class='container-services'
)

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
          headline: 'Web Development',
          text: 'Advanced JavaScript to modern web applications, you will benefit from superior code craftsmanship.'
        },
        {
          svg: '',
          headline: 'Vue.js Pro',
          text: 'With a deep specialization in the Vue and Nuxt framework, I build high-quality web applications.'
        },
        {
          svg: '',
          headline: 'Shopify Expert',
          text: 'Over 6 years of experience working with Shopify Plus — let\'s build something great.'
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
  @extend %container-main
  // background: $grey

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
    @extend %card-container
    flex: 1
    max-width: $unit*57
    padding: $unit*3 $unit*2
    margin-bottom: $unit*5
    &:last-child
      margin-bottom: unset
    +mq-m
      margin: 0 $unit*5 0 0
      &:last-child
        margin-right: unset

  &__icon
    display: none
    width: 24px
    height: 24px
    background: $dark

  &__subhead
    // margin: $unit*2 0 $unit 0
    margin: 0 0 $unit 0
    font-weight: $fw-bold

  &__text
    @extend %text-copy
    font-weight: $fw-light
    color: $secondary-label
</style>
