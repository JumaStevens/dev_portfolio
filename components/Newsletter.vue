<template lang='pug'>
div(class='container-newsletter')
  section(class='newsletter')

    h2(class='newsletter__headline') Subscribe

    h3(class='newsletter__title') Stay informed
    p(class='newsletter__copy') Enter your email to receive my newsletter covering topics of tech, cryptocurrency, and business.

    form(class='newsletter__form')
      input(
        class='newsletter__form-input'
        placeholder='example@email.com'
      )
      input(
        class='newsletter__form-submit'
        type='submit'
      )

    h3(class='newsletter__title') Keep in touch
    p(class='newsletter__copy') I post regularly on topics of tech, happenings in web development, and business.
</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-newsletter
  @extend %container-main
  // margin-bottom: $unit*10

.newsletter
  @extend %container-content
  display: grid
  grid-template-rows: min-content min-content auto auto
  grid-template-columns: 1fr 1fr
  grid-gap: $unit $unit*5

  &__headline
    @extend %text-headline
    grid-row: 1 / 2
    grid-column: 1 / 2
    // visibility: hidden

  &__title
    grid-row: 2 / 3
    grid-column: 1 / 2
    font-weight: $fw-bold
    padding: 0 $unit*2

    &:nth-child(5)
      grid-column: 2 / 3

  &__copy
    grid-row: 3 / 4
    grid-column: 1 / 2
    font-weight: $fw-light
    max-width: 400px
    padding: 0 $unit*2

    &:last-child
      grid-column: 2 / 3

  &__form
    align-self: center
    grid-row: 4 / 5
    grid-column: 1 / 2
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*2
    border-radius: $unit*.75
    margin-top: $unit*5
    padding: 0 $unit*2

    &-input
      width: 100%
      padding: 0 $unit
      background: transparent
      border-bottom: 1px solid $dark

    &-submit
      width: min-content
      padding: $unit $unit*2
      background: $dark
      color: $grey
      border-radius: $unit*.75
</style>