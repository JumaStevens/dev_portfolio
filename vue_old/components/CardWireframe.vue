<template lang='pug'>
div(class='wireframe')

  div(class='wireframe__header')
    div(class='wireframe__header-button')
      span(class='wireframe__text') Button
    div(class='wireframe__header-button')
      span(class='wireframe__text') Button
    div(class='wireframe__header-button')
      span(class='wireframe__text') Button


  div(class='wireframe__log')
    div(
      v-for='(item, index) of items'
      :key='item + index'
      class='wireframe__log-item'
    )
      span(class='wireframe__text') Message


  div(class='wireframe__form')
    div(class='wireframe__form-input')
      span(class='wireframe__text') Input
    div(class='wireframe__form-button')
      span(class='wireframe__text') Button
</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {
      items: [null, null, null, null, null]
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.wireframe
  display: grid
  grid-template-rows: $unit*8 1fr $unit*8
  grid-gap: $unit*5 0
  color: $white
  background: $blue

  &__text
    @extend %flex--row-center
    height: 100%
    text-transform: uppercase
    color: currentColor
    font-size: 12px

  &__header
    grid-row: 1 / 2
    grid-column: 1 / 2
    display: grid
    grid-template-columns: min-content 1fr min-content
    grid-gap: 0 $unit*2
    justify-items: end
    align-items: center
    padding: 0 $unit
    border: 1px solid currentColor

    &-button
      height: $unit*5
      padding: 0 $unit*2
      border: 1px dashed currentColor

  &__log
    grid-row: 2 / 3
    grid-column: 1 / 2
    display: grid
    grid-auto-rows: min-content
    grid-gap: $unit*3 0
    border: 1px solid currentColor
    overflow-y: hidden
    padding: $unit*1.5 $unit

    &-item
      padding: $unit*2
      border: 1px dashed currentColor

  &__form
    grid-row: 3 / 4
    grid-column: 1 / 2
    display: grid
    grid-template-columns: 1fr min-content
    grid-gap: 0 $unit*2
    align-items: center
    padding: 0 $unit
    border: 1px solid currentColor
    &-input
      height: $unit*5
      border: 1px dashed currentColor

    &-button
      height: $unit*5
      padding: 0 $unit*2
      border: 1px dashed currentColor
</style>
