<template lang='pug'>
div(class='container-testimonial')

  section(class='testimonial')
    h2(class='testimonial__headline') {{ headline }}
    ul(class='testimonial__list')
      li(
        v-for='(item, index) in testimonial'
        :key='item + index'
        class='testimonial__item'
      )
        div(class='testimonial__icon')
        h3(class='testimonial__subhead') {{ item.headline }}
        p(class='testimonial__text') {{ item.text }}
</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {
      headline: 'Testimonial',
      testimonial: [
        {
          headline: 'Rob Alan — Monumental',
          text: 'Juma went above and beyound my expectations, delivering exception code quality. My business has steadily been growing ever since.'
        },
        {
          headline: 'Sera - Vessel',
          text: 'Since launching our new website we have seen a steady 20% monthly user engagment with out line of products. The best thing I\'ve ever done was hire Juma.'
        },
        {
          headline: 'Mom - Banana Bread',
          text: 'Juma loves when I make banana bread for him.'
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-testimonial

.testimonial
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
