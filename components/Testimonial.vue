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
import avatarMegan from '~/assets/images/avatarMegan.jpg'
import avatarGerardo from '~/assets/images/avatarGerardo.jpg'

export default {
  components: {},
  props: {},
  data () {
    return {
      headline: 'Testimonial',
      testimonial: [
        {
          image: 'https://media-exp1.licdn.com/dms/image/C5603AQEHpxMcDQRnbA/profile-displayphoto-shrink_100_100/0/1516973884110?e=1666224000&v=beta&t=viMHEsSoiJYNfxR-9NEDhf8Z40dt7z8FxL2txdN6jnk',
          headline: 'Caroline Haber',
          subHeadline: 'Director of PM at Lunar Solar Group',
          text: 'I really enjoy working with Juma and appreciate so much all of his hard. He is a valuable team member and am rooting for him in all of his future endeavors!'
        },
        {
          image: avatarMegan,
          headline: 'Megan Notarte',
          subHeadline: 'Vice President at Cloud Four',
          text: 'Juma is an incredibly talented engineer with the rare combination of technical expertise, problem-solving abilities and strong interpersonal skills.'
        },
        {
          image: avatarGerardo,
          headline: 'Gerardo Rodriguez',
          subHeadline: 'Senior Developer at Cloud Four',
          text: 'Juma has lots of knowledge around the Shopify platform. He\'s also very proficient with the web trifecta of HTML/CSS/JS. He\'s incredibly talented and an excellent problem-solver. Juma is hands-down a great addition to any team.'
        },
        // {
        //   image: avatarRob,
        //   headline: 'Monumental',
        //   subHeadline: 'Rob Alan, Founder/CEO',
        //   text: 'Juma lead our technical execution with finesse and ambition. From vanilla JavaScript, to Vue.js, he is a code craftsman in every sense.'
        // }
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
    // border: 1px solid $separator
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

  &__title
    grid-row: 1 / 2
    grid-column: 2 / 3
    white-space: nowrap
    align-self: end
    font-weight: $fw-bold

  &__copy
    grid-row: 2 / 3
    grid-column: 2 / 3
    // white-space: nowrap
    width: 100%
    font-weight: $fw-light
    color: $secondary-label
    font-size: 12px

  &__text
    @extend %text-copy
    font-weight: $fw-light
    color: $label
</style>
