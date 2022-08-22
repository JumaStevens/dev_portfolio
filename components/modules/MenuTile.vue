<template lang="pug">
NuxtLink(
  :to='to'
  class='task-item'
)
  //- ImageElement(
  //-   :src='image || sampleImage'
  //-   class='task-item__image'
  //- )
  span(class='task-item__primary-text') {{ primaryText }}
  span(class='task-item__secondary-text') {{ secondaryText }}
  div(class='task-item__meta')
    div {{ tertiaryText }}
    div(class='material-icons') chevron_right
</template>

<script>
import ImageElement from '~/components/elements/Image.vue'

export default {
  components: {
    ImageElement
  },
  props: {
    primaryText: {
      type: String,
      required: true
    },
    secondaryText: {
      type: String,
      default: ''
    },
    tertiaryText: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      required: true
    },
    image: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sampleImage:
        'https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&auto=format&fit=crop&w=160&q=80'
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.task-item
  display: grid
  grid-gap: 0 $unit
  grid-template-rows: auto 1fr
  grid-template-columns: 1fr auto
  padding: $unit*2 0

  // &__image
  //   grid-row: 1 / -1
  //   grid-column: 1 / 2
  //   width: $unit*7
  //   height: $unit*7
  //   border-radius: $unit
  //   overflow: hidden
  //   box-shadow: 0 $unit/2 $unit rgba(34, 34, 34, 0.2)

  &__primary-text
    font-weight: $fw-med

  &__secondary-text
    font-size: $fs-1
    color: $grey

  &__meta
    grid-row: 1 / 2
    grid-column: 2 / 3
    // align-self: center
    display: flex
    align-items: center
    color: $grey
    font-size: $fs-1
</style>
