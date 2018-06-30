<template lang='pug'>
div(class='container-about')

  section(class='about')
    h2(class='about__headline') {{ headline }}
    Card(
      :cardData='card'
      class='about__card'
    )
    div(class='about__skills')
      h3(class='about__subhead') {{ subhead }}
      ul(class='about__list')
        li(
          v-for='(item, index) in skillset'
          :key='item + index'
          class='about__item'
        )
    div(class='about__techniques')
      h3(class='about__subhead') {{ subhead }}
      ul(class='about__list')
        li(
          v-for='(item, index) in skillset'
          :key='item + index'
          class='about__item'
        )

</template>


<script>
import Card from '~comp/Card.vue'
import headshot from '~/assets/images/headshot.png'

export default {
  components: {
    Card
  },
  props: {},
  data () {
    return {
      headline: 'Meet the Developer',
      subhead: 'Skillset',
      skillset: [
        1, 2, 3, 4, 5
      ],
      card: {
        image: headshot,
        headline: 'Full Stack Web Developer',
        text: 'My name is Juma Stevens. I practice a minimalistic dogma, both visually and in code. I believe simplicity is key for a great user experience. I iterate quickly, allowing data to drive decisions.'
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

  &__techniques
    @extend %card-container
    padding: $unit*3 $unit*2 $unit*2 $unit*2
    +mq-m
      grid-row: 3 / -1
      grid-column: 2 / -1
      margin-top: 20px

  &__subhead


  &__card
    +mq-m
      grid-row: 2 / -1
      grid-column: 1 / 2

  &__list
    @extend %flex--row
    flex-wrap: wrap
    +mq-m
      grid-row: 3 / -1
      grid-column: 2 / -1

  &__item
    background: $dark
    width: 40px
    height: 40px


</style>
