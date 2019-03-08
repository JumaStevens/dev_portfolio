<template lang='pug'>
div(class='container-blog-list')
  section(class='blog-list')

    h2(class='blog-list__headline') Popular

    ul(class='blog-list__list')
      li(
        v-for='(item, i) in blogsMeta.filter((a, i) => i < 20)'
        :key='item + i'
        class='blog-list__item'
      )
        div(
          class='blog-list__card'
        )
          span(class='blog-list__card-catagory') {{ item.category }}
          h3(class='blog-list__card-title') {{ item.title }}
          p(class='blog-list__card-copy') {{ item.description }}
          div(
            v-lazy:background-image='item.image'
            class='blog-list__card-image aspect-ratio'
          )
            svg(
              class='aspect-ratio-sizer'
              viewBox='0 0 1 1'
            )
          nuxt-link(
            :to='"blog/" + item.handle'
            class='blog-list__card-link'
          )
</template>


<script>

export default {
  components: {},
  props: {
    blogsMeta: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-blog-list
  @extend %container-main

.blog-list
  @extend %container-content


  &__headline
    @extend %text-headline

  &__list
    display: grid
    grid-template-columns: repeat(1, 1fr)
    grid-gap: $unit*5
    +mq-s
      grid-template-columns: repeat(2, 1fr)

  &__item

  &__card
    display: grid
    grid-template-rows: min-content min-content 1fr
    grid-template-columns: 1fr
    grid-gap: $unit/2 $unit*4
    padding: $unit*3 $unit*2
    background: $grey
    border-radius: $unit*.75
    height: 100%
    +mq-l
      grid-template-columns: 3fr 1fr


    &-title,
    &-copy,
    &-catagory
      grid-column: 1 / 2

    &-catagory
      grid-row: 1 / 2
      color: $dark
      font-weight: $fw-light
      font-size: 12px
      text-transform: uppercase
      margin-bottom: $unit

    &-title
      grid-row: 2 / 3
      font-weight: $fw-bold

    &-copy
      grid-row: 3 / 4
      // color: $dark
      font-weight: $fw-light

    &-image
      background-position: center
      background-repeat: no-repeat
      box-shadow: 0px $unit $unit*3 rgba(34, 34, 34, 0.25)
      border-radius: $unit*.75

    &-link
      grid-row: 1 / -1
      grid-column: 1 / -1
      position: relative
      z-index: 4


.aspect-ratio
  grid-row: 1 / -1
  grid-column: 2 / 3
  display: none
  +mq-l
    display: grid

  &-sizer
    grid-row: 1 / 2
    grid-column: 1 / 2
</style>
