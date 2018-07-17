<template lang='pug'>
div(
  id='testimonial'
  class='container-testimonial'
)

  section(class='testimonial')
    h2(class='testimonial__headline') {{ headline }}
    ul(class='testimonial__list')
      li(
        v-for='(item, index) in testimonial'
        :key='item + index'
        class='testimonial__item'
      )
        img(
          v-lazy='item.image'
          class='testimonial__icon'
        )
        h3(class='testimonial__subhead') {{ item.headline }}
        p(class='testimonial__text') {{ item.text }}
</template>


<script>
import avatarRob from '~/assets/images/avatarRob.jpg'
import avatarSerra from '~/assets/images/avatarSerra.jpg'
import avatarShaun from '~/assets/images/avatarShaun.jpg'

export default {
  components: {},
  props: {},
  data () {
    return {
      headline: 'Testimonial',
      testimonial: [
        {
          image: avatarRob,
          headline: 'Rob Alan — Monumental',
          text: 'Juma lead our technical execution with finesse and ambition. From vanilla JavaScript, to Vue.js, he is a code craftsman in every sense.'
        },
        {
          image: avatarShaun,
          headline: 'Shaun Brian Sells — HHR',
          text: 'Working together was a great experience. Communication was professional and prompt.'
        },
        {
          image: avatarSerra,
          headline: 'Serra Kreger — Vessel',
          text: 'Juma truly felt like he was apart of our team. Looking forward to future projects.'
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
  @extend %container-main
  // background: $grey

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
    @extend %card-container
    max-width: $unit*57
    flex: 1
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
    width: $unit*5
    height: $unit*5
    border-radius: 50%
    background: $grey

  &__subhead
    margin: $unit*2 0 $unit

  &__text
    @extend %text-copy

</style>
