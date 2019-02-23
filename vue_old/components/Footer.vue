<template lang='pug'>
div(class='container-footer')

  footer(class='footer')
    p(class='footer__copywrite') {{ copywrite }}
</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {
      copywrite: '© 2018 Juma Stevens'
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-footer


.footer
  @extend %container-content
  @extend %flex--row-center
  min-height: $unit*6
  // border-top: 1px solid $grey

  &__copywrite
    font-size: $fs-1

</style>
