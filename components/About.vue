<template lang='pug'>
div(
  id='bio'
  class='container-about'
)

  section(class='about')
    h2(class='about__headline') {{ headline }}
    Card(
      :cardData='{ image: card.image }'
      class='about__card no-shadow'
    )

    div(class='card')
      h3(
        class='card__headline'
      ) {{ card.headline }}
      p(
        v-html='card.text'
        class='card__text'
      )

    div(class='about__skills')
      h3(class='about__subhead') {{ skillset.subhead }}
      ul(class='about__list')
        li(
          v-for='(item, index) in skillset.list'
          :key='item + index'
          class='about__item'
        ) {{ item.text }}

    div(class='about__techniques')
      h3(class='about__subhead') {{ techniques.subhead }}
      ul(class='about__list')
        li(
          v-for='(item, index) in techniques.list'
          :key='item + index'
          class='about__item'
        ) {{ item }}

</template>


<script>
import Card from '~/components/Card.vue'
import headshot from '~/assets/images/headshot.png'

export default {
  components: {
    Card
  },
  props: {},
  data () {
    return {
      headline: 'Meet the Developer',
      skillset: {
        subhead: 'Tools',
        list: [
          {
            text: 'Vue.js'
          },
          {
            text: 'Nuxt.js'
          },
					{
            text: 'React.js'
          },
          {
            text: 'Node.js'
          },
					{
            text: 'OpenAI'
          },
          {
            text: 'Firebase'
          },
          {
            text: 'Shopify Plus'
          },
					{
            text: 'Vite'
          },
          {
            text: 'Webpack'
          },
          {
            text: 'Sass'
          },
          {
            text: 'JavaScript'
          },
          {
            text: 'Figma'
          }
        ]
      },
      techniques: {
        subhead: 'Techniques',
        list: [
          'Responsive Design',
          'Mobile First',
          'Version Control',
          'Design System',
          'ES6/ES7/ES8+',
          'SPA/SSR',
          'BEM',
          'SMACSS'
        ]
      },
      card: {
        image: headshot,
        headline: 'About Me',
        text: 'My name is Juma Stevens. I\'m a Front-end Web Developer and Shopify expert based in Portland, Oregon. I have over six years of experience building component-based web applications using the Vue.js and Nuxt.js frameworks. I strive for simplicity and craft high-quality work. I also enjoy working on projects with a team or independently. Some of my favorite challenges include building solutions that are a joy to use and solving tough client problems.'
      }
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-about
  @extend %container-main

.about
  @extend %container-content
  +mq-m
    display: grid
    grid-gap: $unit*2 $unit*5
    grid-template-rows: auto repeat(3, min-content)
    grid-template-columns: repeat(2, 1fr)

  &__headline
    @extend %text-headline
    +mq-m
      grid-row: 1 / 2
      grid-column: 1 / -1

  &__skills
    @extend %card-container
    padding: $unit*3 $unit*2
    +mq-m
      grid-row: 4 / 5
      grid-column: 2 / 3

    & .about__list
      display: grid
      grid-gap: $unit*2
      grid-template-columns: repeat(2, auto)
      max-width: 51ch
      list-style: disc

    & .about__item
      @extend %text-copy

  &__techniques
    @extend %card-container
    padding: $unit*3 $unit*2
    +mq-m
      grid-row: 4 / 5
      grid-column: 1 / 2

    & .about__list
      display: grid
      grid-gap: $unit*2
      grid-template-columns: repeat(2, auto)
      max-width: 51ch
      list-style: disc

    & .about__item
      @extend %text-copy

  &__subhead
    font-weight: $fw-bold

  &__card
    +mq-m
      grid-row: 2 / 3
      grid-column: 1 / -1

  &__list
    margin-top: $unit*3
    +mq-m
      grid-row: 3 / -1
      grid-column: 2 / -1

  &__icon
    @extend %flex--column-center
    position: relative
    width: 100%
    height: 100%
    margin: 0

    &-image
      max-width: 100%
      max-height: 100%
      object-fit: contain
      object-position: center

    &-caption
      display: none
      color: $dark
      white-space: nowrap
      font-size: 12px
      +mq-xs
        align-self: flex-start

    &:hover &-caption
      display: flex

    &:hover &-image
      display: none

.card
  grid-row: 3 / 4
  grid-column: 1 / -1
  padding: $unit*3 $unit*2

  &__body
    position: relative
    z-index: 6
    background: $white

  &__headline
    font-weight: $fw-bold

  &__text
    @extend %text-copy
    margin-top: $unit

  &__link
    color: $blue
</style>
