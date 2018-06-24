<template lang='pug'>
div(class='container-contact')

  section(class='contact')
    h2(class='contact__headline') {{ headline }}
    form(
      class='contact__form'
    )
      input(class='contact__input')
      input(class='contact__input')
      input(
        type='submit'
        class='contact__submit'
      )

</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {
      headline: 'Contact'
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-contact

.contact
  @extend %container-content

  &__headline
    @extend %text-headline

  &__form
    @extend %flex--column
    max-width: 500px
    padding: $unit*2
    margin: 0 auto
    background: $grey

  &__input

  &__submit

</style>
