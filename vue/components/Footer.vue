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
      copywrite: 'Juma Stevens 2018'
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-footer
  background: $black

.footer
  @extend %container-content
  @extend %flex--row-center
  min-height: $unit*6

  &__copywrite
    font-size: $fs-1
    color: $white

</style>
