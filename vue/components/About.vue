<template lang='pug'>
div(class='container-about')

  section(class='about')
    h2(class='about__headline') {{ headline }}
    Card(
      :cardData='card'
      class='about__card no-shadow'
    )
    div(class='about__skills')
      h3(class='about__subhead') {{ skillset.subhead }}
      ul(class='about__list')
        li(
          v-for='(item, index) in skillset.list'
          :key='item + index'
          class='about__item'
        )
          img(
            v-lazy='item.image'
            class='about__icon'
          )

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
import Card from '~comp/Card.vue'
import headshot from '~/assets/images/headshot.png'
import iconFirebase from '~/assets/images/iconFirebase.png'
import iconJavascript from '~/assets/images/iconJavascript.png'
import iconNode from '~/assets/images/iconNode.png'
import iconSass from '~/assets/images/iconSass.png'
import iconPug from '~/assets/images/iconPug.png'
import iconHTML from '~/assets/images/iconHTML.png'
import iconCSS from '~/assets/images/iconCSS.png'
import iconGulp from '~/assets/images/iconGulp.png'
import iconPhotoshop from '~/assets/images/iconPhotoshop.png'
import iconWebpack from '~/assets/images/iconWebpack.png'
import iconShopify from '~/assets/images/iconShopify.png'
import iconVue from '~/assets/images/iconVue.png'

export default {
  components: {
    Card
  },
  props: {},
  data () {
    return {
      headline: 'Meet the Developer',
      skillset: {
        subhead: 'Skillset',
        list: [
          {
            image: iconHTML
          },
          {
            image: iconCSS
          },
          {
            image: iconJavascript
          },
          {
            image: iconVue
          },
          {
            image: iconFirebase
          },
          {
            image: iconShopify
          },
          {
            image: iconNode
          },
          {
            image: iconWebpack
          },
          {
            image: iconPug
          },
          {
            image: iconSass
          },
          {
            image: iconGulp
          },
          {
            image: iconPhotoshop
          }
        ]
      },
      techniques: {
        subhead: 'Techniques',
        list: [
          'BEM',
          'Mobile First',
          'Responsive Design',
          'SMACSS',
          'SPA/SSR',
          'Version Control',
          'Design System',
          'ES6/ES7/ES8'
        ]
      },
      card: {
        image: headshot,
        headline: 'Juma Stevens',
        text: 'Hello! I\'m a Full Stack Web Developer specializing in creative digital solutions. I practice a minimalist dogma, both in UI/UX choice and in code. I believe simplicity is key for a great user experience. I iterate quickly, allowing data to drive decisions.'
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
    grid-gap: 0 $unit*5
    grid-template-rows: auto repeat(2, 1fr)
    grid-template-columns: repeat(2, 1fr)

  &__headline
    @extend %text-headline
    +mq-m
      grid-row: 1 / 2
      grid-column: 1 / -1

  &__skills
    @extend %card-container
    padding: $unit*3 $unit*2 $unit*2 $unit*2
    +mq-m
      grid-row: 2 / 3
      grid-column: 2 / -1
      margin-bottom: 20px

    & .about__list
      display: grid
      grid-gap: $unit*2
      grid-template-rows: repeat(3, auto)
      grid-template-columns: repeat(4, auto)
      grid-auto-flow: column

    & .about__item
      @extend %flex--row-center
      width: $unit*5
      height: $unit*5

  &__techniques
    @extend %card-container
    padding: $unit*3 $unit*2 $unit*2 $unit*2
    +mq-m
      grid-row: 3 / -1
      grid-column: 2 / -1
      margin-top: 20px

    & .about__list
      display: grid
      grid-gap: $unit*2
      grid-template-rows: repeat(4, auto)
      grid-template-columns: repeat(2, auto)
      grid-auto-flow: column

    & .about__item
      position: relative
      padding-left: $unit*1.5
      color: $dark

      &::before
        content: ''
        position: absolute
        top: 50%
        left: 0
        width: $unit/2
        height: $unit/2
        transform: translateY(-50%)
        background: $dark
        border-radius: 50%


  &__subhead

  &__card
    +mq-m
      grid-row: 2 / -1
      grid-column: 1 / 2

  &__list
    margin-top: $unit*3
    +mq-m
      grid-row: 3 / -1
      grid-column: 2 / -1

  &__icon
    max-width: 100%
    max-height: 100%
    object-fit: contain
    object-position: center

</style>
