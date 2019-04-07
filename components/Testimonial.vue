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
        div(class='testimonial__author')
          img(
            v-lazy='item.image'
            class='testimonial__image'
          )
          h3(class='testimonial__title') {{ item.headline }}
          p(class='testimonial__copy') {{ item.subHeadline }}
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
          headline: 'Monumental',
          subHeadline: 'Rob Alan',
          text: 'Juma lead our technical execution with finesse and ambition. From vanilla JavaScript, to Vue.js, he is a code craftsman in every sense.'
        },
        {
          image: avatarShaun,
          headline: 'HHR',
          subHeadline: 'Shaun Brian Sells',
          text: 'Working together was a great experience. Communication was professional and prompt.'
        },
        {
          image: avatarSerra,
          headline: 'Vessel',
          subHeadline: 'Serra Kreger',
          text: 'Juma truly felt like he was a part of our team. Looking forward to future projects.'
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

  &__author
    display: grid
    grid-template-rows: repeat(2, auto)
    grid-template-columns: min-content min-content
    grid-gap: 0 $unit*2
    margin: 0 0 $unit*2 0

  &__image
    grid-row: 1 / 3
    grid-column: 1 / 2
    width: $unit*6
    height: $unit*6
    border-radius: 50%
    object-fit: contain
    background: $grey

  &__title
    grid-row: 1 / 2
    grid-column: 2 / 3
    white-space: nowrap
    align-self: end
    font-weight: $fw-bold

  &__copy
    grid-row: 2 / 3
    grid-column: 2 / 3
    white-space: nowrap
    font-weight: $fw-light
    color: $dark
    font-size: 12px

  &__text
    @extend %text-copy
    font-weight: $fw-light
    color: $black

</style>
