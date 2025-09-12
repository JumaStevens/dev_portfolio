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
      headline: 'Expertise',
      services: [
        {
          svg: '',
          headline: 'Shopify Plus Expert',
          text: 'Over 8 years working with the Shopify Plus ecosystem, Hydrogen storefronts, custom integrations.'
        },
        {
          svg: '',
          headline: 'Large Language Models',
          text: 'Experienced in using LLMs to build personalization, automation, and data-driven pipelines.'
        },
        {
          svg: '',
          headline: 'Full-Stack JavaScript',
          text: 'Deep expertise in Vue, Nuxt, React, and Node.js to deliver fast and modern applications.'
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
