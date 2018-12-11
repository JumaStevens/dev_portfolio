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
          text: 'Advanced JavaScript to modular microservices, your project will benefit from superior code craftmanship.'
        },
        {
          svg: '',
          headline: 'Shopify Partner',
          text: 'E-commerce is competive. Shopify savvy, deep analytics, and artificial intelligence gives your project the edge it needs.'
        },
        {
          svg: '',
          headline: 'Site Performance',
          text: '53% of users abandon sites after 3 seconds of waiting. A thorough speed audit will grow your user retention.'
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
    background: $white
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
    

  &__text
    @extend %text-copy



</style>
