<template lang='pug'>
div(class='container-blog-collection')
  section(class='blog-collection')
    ul(class='blog-collection__list')
      li(
        v-for='(item, i) in blogsMeta.filter((a, i) => i < 4)'
        :key='item + i'
        class='blog-collection__item'
      )
        div(class='blog-collection__aspect-ratio')
          nuxt-link(
            :to='"blog/" + item.handle'
            class='blog-collection__aspect-ratio-link'
          )
          svg(
            class='blog-collection__aspect-ratio-sizer'
            viewBox='0 0 1 1'
          )
        div(
          v-lazy:background-image='item.image'
          class='blog-collection__card'
        )
          span(class='blog-collection__card-catagory') {{ item.catagory }}
          h3(class='blog-collection__card-title') {{ item.title }}
          //- p(class='blog-collection__card-copy') {{ item.description }}
          nuxt-link(
            :to='"blog/" + item.handle'
            class='blog-collection__card-link'
          ) Read more
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
.container-blog-collection
  @extend %container-main

.blog-collection
  @extend %container-content

  &__list
    display: grid
    grid-gap: $unit*5
    grid-auto-flow: dense
    // grid-template-rows: 1fr 1fr
    // grid-template-columns: 1fr 1fr
    grid-auto-columns: 1fr
    grid-auto-rows: 1fr

  &__item
    display: grid
    border-radius: 6px
    box-shadow: 0px $unit $unit*3 rgba(34, 34, 34, 0.5)

    &:nth-child(1)
      grid-row: 1 / 3
      grid-column: 1 / 2

    &:nth-child(2)
      grid-row: 1 / 2
      grid-column: 2 / 3

    &:nth-child(3)
      grid-row: 2 / 4
      grid-column: 2 / 3

    &:nth-child(4)
      grid-row: 3 / 4
      grid-column: 1 / 2

  &__aspect-ratio
    grid-row: 1 / 2
    grid-column: 1 / 2
    display: grid
    display: none

    &-sizer
      grid-row: 1 / 2
      grid-column: 1 / 2

    &-link
      grid-row: 1 / 2
      grid-column: 1 / 2

  &__card
    grid-row: 1 / 2
    grid-column: 1 / 2
    padding: $unit*3
    background: $grey
    display: grid
    grid-template-rows: min-content auto 1fr
    border-radius: 6px
    background-position: center
    background-repeat: no-repeat

    &-catagory
      color: $white
      font-weight: $fw-light
      font-size: 12px
      text-transform: uppercase

    &-title
      padding-bottom: $unit*5
      color: $white
      font-size: $fs2
      font-weight: $fw-bold

    &-copy

    &-link
      justify-self: start
      align-self: end
      padding: $unit $unit*2
      font-size: 12px
      background: $white
      border-radius: 6px


</style>
