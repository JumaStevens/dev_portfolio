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
      copywrite: '© 2019 Juma Stevens || Designed & Developed with 🖤'
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

  &__copywrite
    font-size: $fs-1

</style>
