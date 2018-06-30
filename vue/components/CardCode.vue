<template lang='pug'>
div(class='container-code')

  figure(class='code')
    p(class='code__line')
      span(class='code__text code__text--purple') const
      span(class='code__text code__text--yellow') set
      span(class='code__text code__text--blue') =
      span(class='code__text code__text--green') Set
      span(class='code__text code__text--white') ()
      span(class='code__text code__text--grey') // true {{ test }}

</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {
    test () {
      // coded with love
      const dev = {
        name: 'Juma Stevens',
        title: 'Full Stack Developer',
        skills: ['Shopify', 'Vue', 'Node']
      }
      const hire = ({ name }) => `Hire ${name}, save the world!`

      hire(dev)
    }
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-code

.code
  @extend %card-container
  width: 300px
  height: 200px
  padding: $unit*2
  margin: 0
  background: rgba(41, 44, 52, 1)

  &__line

  &__text

    &::before
      content: ' '

    &--purple
      color: rgba(187, 126, 215, 1)
    &--yellow
      color: rgba(201, 155, 110, 1)
    &--blue
      color: rgba(115, 171, 181, 1)
    &--green
      color: rgba(161, 193, 129, 1)
    &--white
      color: rgba(172, 178, 190, 1)
    &--grey
      color: rgba(93, 99, 108, 1)

</style>
